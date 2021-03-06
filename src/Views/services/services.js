import React from "react";
import "./services.css";
import { Grid, Row, Col } from "react-flexbox-grid";


const Services = () => {
  return (
    <div className ='servBox' >
      <Grid className = 'grid' fluid>
        <Row >
          <Col className = 'servCol' xs ={12} md ={6}>
            <p className="sT">Audit</p>
            <p className="sP">
              Ensuring that financial statements are materially compliant with
              financial reporting frameworks.
            </p>
          </Col>
          <Col className = 'servCol'  xs = {12} md ={6}>
            <p className="sT"> Bookkeeping</p>
            <p className="sP">
              {" "}
              Supporting the maintenance and accuracy of accounts payable and
              receivables, payroll, and daily financial entries and
              reconciliations.
            </p>
          </Col>
          <Col className = 'servCol'  xs = {12} md ={6}>
            <p className="sT">Financial Advisory</p>
            <p className="sP">
              Providing expert advice on personal finances, investments and tax
              strategies to help achieve personal and professional financial
              goals.
            </p>
          </Col>
          <Col  className = 'servCol' xs = {12} md ={6}>
            <p className="sT">Tax Planning</p>
            <p className="sP">
              Creating tax efficient plans to minimize tax payments while
              ensuring regulation compliance, optimizing long-term tax savings.
            </p>
          </Col>{" "}
          <Col className = 'servCol'  xs = {12} md ={6} >
            <p className="sT">Forecasting</p>
            <p className="sP">
              Providing accurate forecasts of business-relevant financial
              metrics, in order to guide business decisions and managements.
            </p>
          </Col>
          <Col className = 'servCol'  xs = {12} md ={6}>
            <p className="sT">Personal Tax Returns</p>
            <p className="sP">
              Assistance with filing, managing and reporting personal taxes.
            </p>
          </Col>{" "}
        </Row>
      </Grid>
    </div>
  );
};

export default Services;
