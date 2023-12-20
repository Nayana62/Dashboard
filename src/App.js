import React from "react";
import "./App.css";
import { PictureFilled } from "@ant-design/icons";
import { Layout } from "antd";
import MenuComponent from "./components/MenuComponent";
import ContentComponent from "./components/ContentComponent";

const { Sider } = Layout;

const App = () => {
  return (
    <Layout>
      <Sider
        theme="light"
        breakpoint="lg"
        collapsedWidth="0"
        width={270}
        style={{
          borderRight: "1px solid lightgray",
          padding: "20px 30px",
        }}
      >
        <p className="logo">ONDATA</p>

        <MenuComponent />

        <div className="user-info-container" style={{ marginBottom: "20px" }}>
          <div className="user-img">
            <PictureFilled />
          </div>
          <div className="user-info">
            <h3>Samder</h3>
            <p>samdersingh@gmail.com</p>
          </div>
        </div>
      </Sider>

      <Layout>
        <ContentComponent />
      </Layout>
    </Layout>
  );
};

export default App;
