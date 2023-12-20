export const columns = [
  {
    title: "Invoice#",
    dataIndex: "invoice",
    key: "invoice",
  },
  {
    title: "Created",
    dataIndex: "created",
    key: "created",
    render: (text) => <p style={{ color: "#ABAFB3" }}>{text}</p>,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Customer",
    dataIndex: "customer",
    key: "customer",
  },
  {
    title: "Due",
    dataIndex: "due",
    key: "due",
    render: (text) => <p style={{ color: "#ABAFB3" }}>{text}</p>,
  },
  {
    title: "Service",
    dataIndex: "service",
    key: "service",
  },
  {
    title: "Total",
    dataIndex: "total",
    key: "total",
  },
];

export const data = [
  {
    key: "1",
    invoice: "",
    created: "",
    status: "",
    customer: "",
    due: "",
    service: "",
    total: "",
  },
];

export const title = "Accounts Payable";
