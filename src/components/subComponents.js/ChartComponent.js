import React from "react";
import { Area } from "@ant-design/plots";
import { cashBalance } from "../../data/cashBalanceData";

const ChartComponent = () => {
  const config = {
    data: cashBalance,
    xField: "Date",
    yField: "cash",
    smooth: true,
  };

  return (
    <div className="area-container">
      <Area {...config} />
    </div>
  );
};

export default ChartComponent;
