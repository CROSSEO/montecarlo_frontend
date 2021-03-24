import React from 'react';
import { Row } from 'reactstrap';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';

const UploadPlan = ({ match }) => (
  <>
    <Row>
      <Colxx xxs="12">
        <Breadcrumb heading="menu.upload" match={match} />
        <Separator className="mb-5" />
      </Colxx>
    </Row>
  </>
);
export default UploadPlan;
