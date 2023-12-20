import { Col, Row, theme } from "antd";
import { Content } from "antd/es/layout/layout";
import React from "react";
import CardComponent from "./subComponents.js/CardComponent";
import ChartComponent from "./subComponents.js/ChartComponent";
import AccountsRecTable from "./subComponents.js/AccountsRecTable";
import AccountsPayTable from "./subComponents.js/AccountsPayTable";

const ContentComponent = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Content>
      <div
        style={{
          padding: "20px",
          minHeight: "100vh",
          background: colorBgContainer,
        }}
      >
        <Row>
          <Col span={{ xl: 24, md: 8 }}>
            <CardComponent />
          </Col>
          <Col span={{ xl: 24, md: 8 }}>
            <ChartComponent />
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <AccountsRecTable />
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <AccountsPayTable />
          </Col>
        </Row>
      </div>
    </Content>
  );
};

export default ContentComponent;
