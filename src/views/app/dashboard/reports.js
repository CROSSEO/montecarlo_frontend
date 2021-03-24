import React from 'react';
import {
  Row,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from 'reactstrap';
import { ThemeColors } from '../../../helpers/ThemeColors';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import Line from '../../../components/charts/Line';
import IntlMessages from '../../../helpers/IntlMessages';
import { reportChartSelection } from '../../../constants/defaultValues';

const colors = ThemeColors();

export const lineChartData = {
  labels: ['2020', '2021', '2022', '2023', '2024', '2025'],
  datasets: [
    {
      label: '',
      data: [0, 473754.61, 4573754.61, 65, 60, 68, 60],
      borderColor: colors.themeColor1,
      pointBackgroundColor: colors.foregroundColor,
      pointBorderColor: colors.themeColor1,
      pointHoverBackgroundColor: colors.themeColor1,
      pointHoverBorderColor: colors.foregroundColor,
      pointRadius: 6,
      pointBorderWidth: 2,
      pointHoverRadius: 8,
      fill: false,
    },
  ],
};

const Reports = ({ match }) => (
  <>
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
              {reportChartSelection.map((values) => (
                <DropdownItem key={values}>{values}</DropdownItem>
              ))}
              <DropdownItem divider />
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
        <Separator className="mb-5" />
      </Colxx>
    </Row>
    <Row>
      <Colxx xxs="12" className="mb-4">
        <div className="card col-lg-6">
          <div className="card-body">
            <div className="card-title"> Total Vendas - Mercado Nacional </div>
            <div className="row">
              <div className="mb-5 col-12 col-lg-12">
                <div className="chart-container">
                  <Line data={lineChartData} />
                </div>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="card-title"> Total Vendas - Mercado Nacional </div>
            <div className="row">
              <div className="mb-5 col-12 col-lg-12">
                <div className="chart-container">
                  <Line data={lineChartData} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Colxx>
    </Row>
  </>
);
export default Reports;
