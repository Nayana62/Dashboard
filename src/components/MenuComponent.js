import { Divider, Menu } from "antd";
import React from "react";
import {
  AppstoreOutlined,
  BarChartOutlined,
  BellOutlined,
  LogoutOutlined,
  SettingOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";

const MenuComponent = () => {
  const topMenuItems = [
    {
      key: "1",
      icon: <BellOutlined />,
      label: "AI Insights",
    },
    {
      key: "2",
      icon: <AppstoreOutlined />,
      label: "Dashboard",
    },
    {
      key: "3",
      icon: <ShoppingOutlined />,
      label: "Transactions",
    },
    {
      key: "4",
      icon: <BarChartOutlined />,
      label: "Reconciliation",
    },
  ];

  const bottomMenuItems = [
    {
      key: "5",
      icon: <SettingOutlined />,
      label: "Settings",
    },
    {
      key: "6",
      icon: <LogoutOutlined />,
      label: "Logout",
    },
  ];
  return (
    <Menu
      theme="light"
      mode="inline"
      defaultSelectedKeys={["4"]}
      style={{
        border: 0,
        color: "#8E8E8E",
        fontSize: "16px",
        fontWeight: "500",
      }}
    >
      {topMenuItems.map((item) => (
        <Menu.Item key={item.key} icon={item.icon}>
          {item.label}
        </Menu.Item>
      ))}

      <Divider style={{ marginTop: "270px" }} />

      {bottomMenuItems.map((item) => (
        <Menu.Item key={item.key} icon={item.icon}>
          {item.label}
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default MenuComponent;
