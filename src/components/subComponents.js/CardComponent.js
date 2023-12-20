import { Button, Card } from "antd";
import React from "react";
import { bankData } from "../../data/bankData";
import { PlusOutlined } from "@ant-design/icons";

const CardComponent = () => {
  const { totalCashBalance, as_of, operating_cash, investments_and_other } =
    bankData;

  const numberWithCommas = (number) => {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    });
    return formatter.format(number);
  };

  return (
    <Card
      style={{
        height: "fit-content",
        margin: "30px",
        width: "25rem",
        background: "linear-gradient(182.94deg, #EAF5FF 2.45%, #FFFFFF 97.55%",
      }}
    >
      <div className="card-items mb">
        <div>
          <h4>Total Cash Balance</h4>
          <p className="small">As of: {as_of}</p>
        </div>
        <Button type="primary" icon={<PlusOutlined />}>
          Add Bank
        </Button>
      </div>
      <h3 className="cash mb"> {numberWithCommas(totalCashBalance)} </h3>
      <div className="card-items">
        <div>
          <p>Operating cash</p>
          <p>{numberWithCommas(operating_cash)}</p>
        </div>
        <div>
          <p>Inestments & Other</p>
          <p>{numberWithCommas(investments_and_other)}</p>
        </div>
      </div>
    </Card>
  );
};

export default CardComponent;
