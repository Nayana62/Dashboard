import { Table } from "antd";
import React from "react";
import { columns, data, title } from "../../data/tableOneData";

const AccountsRecTable = () => {
  return (
    <div>
      <h2 className="table-title">{title}</h2>
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 2 }} />
    </div>
  );
};

export default AccountsRecTable;
