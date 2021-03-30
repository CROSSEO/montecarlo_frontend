import React, { useState } from 'react';
import {
  Row,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from 'reactstrap';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import Line from '../../../components/charts/Line';
import Bar from '../../../components/charts/Bar';
import IntlMessages from '../../../helpers/IntlMessages';
import { reportChartSelection } from '../../../constants/defaultValues';
import graphicsAPI from '../../../api/graphicsAPI';
import lineChartOptions from '../../../chartOption/linChartOption';
import barChartOptions from '../../../chartOption/batChartOption';
import lineChartData from '../../../data/lineChartData';
import barChartData from '../../../data/barChartData';

const Reports = ({ match }) => {
  const [whatChart, setWahtChart] = useState('VN');

  const [lineChartName, setLineChartName] = useState('NA');
  const [lineChartMinValue, setLineChartMinValue] = useState(0);
  const [lineChartMaxValue, setLineChartMaxValue] = useState(500);
  const [lineChartStepValue, setLineChartStepValue] = useState(100);
  const [lineChartDataValue, setLineChartDataValue] = useState(null);

  const [barLineName] = useState('NA');
  const [barLineData, setBarLineData] = useState(null);

  const [multi, setMulti] = useState([]);

  const showOnClick = async (value) => {
    const response = await graphicsAPI.get('excel/read', {
      params: {
        sheet_name: value,
      },
    });

    setWahtChart(value);
    switch (value) {
      case 'VN':
        setLineChartName(response.data.TotalsProductNationalMarket.name);
        setLineChartMinValue(
          response.data.TotalsProductNationalMarket.minValue
        );
        setLineChartMaxValue(
          response.data.TotalsProductNationalMarket.maxValue
        );
        setLineChartDataValue(response.data.TotalsProductNationalMarket.values);
        setLineChartStepValue(10000);

        setBarLineData(response.data.TotalsPerProduct);

        break;
      case 'Cash Flow':
      case 'Ponto Crítico':
        setMulti(response.data.main);
        break;
      default:
        break;
    }
  };

  const lineOptions = lineChartOptions(
    lineChartMinValue,
    lineChartMaxValue,
    lineChartStepValue
  );

  const lineData = lineChartData(lineChartDataValue);

  const barData = barChartData(barLineData);
  const barOptions = barChartOptions(0, lineChartMaxValue, 10000);

  return (
    <div>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="" match={match} />
          <div className="top-right-button-container">
            <UncontrolledDropdown className="dropdown-menu-right">
              <DropdownToggle className="p-0" color="empty">
                <div className="mr-1 mb-1 btn-group">
                  <button
                    type="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                    className="dropdown-toggle btn btn-outline-info btn-sm"
                  >
                    <IntlMessages id="lbl.select-charts" />
                  </button>
                </div>
              </DropdownToggle>
              <DropdownMenu left>
                {reportChartSelection.map((value) => (
                  <DropdownItem
                    key={value}
                    value={value}
                    onClick={() => showOnClick(value)}
                  >
                    {value}
                  </DropdownItem>
                ))}
                <DropdownItem divider />
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <div className="mb-5 p-5 row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="row">
                {(() => {
                  switch (whatChart) {
                    case 'VN':
                      return (
                        <>
                          <div className="col-12 col-lg-6">
                            <div className="card-title">{barLineName}</div>
                            <div className="chart-container">
                              <Bar data={barData} barOptions={barOptions} />
                            </div>
                          </div>
                          <div className="col-12 col-lg-6">
                            <div className="card-title">{lineChartName}</div>
                            <div className="chart-container">
                              <Line data={lineData} lineOptions={lineOptions} />
                            </div>
                          </div>
                        </>
                      );
                    case 'Cash Flow':
                    case 'Ponto Crítico':
                      return (
                        <>
                          {multi.map((element) => {
                            return (
                              <>
                                <div className="col-12 col-lg-6">
                                  <div className="card-title">
                                    {element.data.name}
                                  </div>
                                  <div className="chart-container">
                                    <Line
                                      data={lineChartData(element.data.values)}
                                      lineOptions={lineChartOptions(
                                        element.data.minValue - 500,
                                        element.data.maxValue + 100,
                                        200
                                      )}
                                    />
                                  </div>
                                </div>
                              </>
                            );
                          })}
                        </>
                      );

                    default:
                      return <div>No data</div>;
                  }
                })()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
