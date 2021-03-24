import React, { useState } from 'react';
import {
  Card,
  CardBody,
  Button,
  Collapse,
  FormGroup,
  Label,
  Form,
  Input,
} from 'reactstrap';
import { Colxx } from '../components/common/CustomBootstrap';

const Step1 = () => {
  const expanded = false;
  const [collapse, setCollapse] = useState(expanded || false);
  return (
    <Colxx xxs="12" lg="12">
      <Card className="question d-flex mb-4 edit-quesiton card">
        <div className="d-flex flex-grow-1 min-width-zero">
          <div className="card-body align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
            <div className="list-item-heading mb-0 truncate w-80 mb-1 mt-1">
              <span className="heading-number d-inline-block">1</span>
              Step 1
            </div>
          </div>
          <div className="custom-control custom-checkbox pl-1 align-self-center pr-4">
            <CardBody>
              <Button
                outline
                color="theme-3"
                className={`icon-button ml-1 rotate-icon-click ${
                  collapse ? 'rotate' : ''
                }`}
                onClick={() => setCollapse(!collapse)}
              >
                <i className="simple-icon-arrow-down" />
              </Button>
            </CardBody>
          </div>
        </div>
        <Collapse isOpen={collapse}>
          <div className="card-body pt-0">
            <div className="edit-mode">
              <Form>
                <FormGroup>
                  <Label>Title</Label>
                  <Input type="text" />
                </FormGroup>
              </Form>
            </div>
          </div>
        </Collapse>
      </Card>
    </Colxx>
  );
};

export default Step1;
