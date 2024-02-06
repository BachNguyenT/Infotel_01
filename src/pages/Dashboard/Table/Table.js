import React from "react";
import data from "../../../assets/properties.json";
import { Table } from "antd";
import "./Table.scss"

const dataTable = (props) => {
  let values = props.props;

  const dataExtractor = (properties) => {
    const extractor = [];

    data.forEach((item) => {
      // if (values.some((arr) => arr.includes(item.property.value))) {
      if (values.includes(item.property.value)) {
        extractor.push(item.property[properties]);
      }
    });

    return extractor;
  };

  let roomCount = dataExtractor("roomCount");
  let roomRevenue = dataExtractor("roomRevenue");
  let fbRevenue = dataExtractor("fbRevenue");
  let otherRevenue = dataExtractor("otherRevenue");
  let occ = dataExtractor("occ");

  let table = [];
  let length = values.length;
  let total = {
    key: `0`,
    property: "Grand Total",
    roomCount: 0,
    roomRevenue: 0,
    fbRevenue: 0,
    otherRevenue: 0,
    totalRevenue: 0,
    occ: 0,
  };
  const columns = [
    {
      title: "Property",
      dataIndex: "property",
      key: "property",
      align: "left",
    },
    {
      title: "Total Room in Hotel",
      dataIndex: "roomCount",
      key: "roomCount",
      align: "right",
    },
    {
      title: "Room Revenue",
      dataIndex: "roomRevenue",
      key: "roomRevenue",
      align: "right",
      render: (value) => {
        return (
          "$" +
          Number(value).toLocaleString("en", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })
        );
      },
    },
    {
      title: "F&B Revenue",
      dataIndex: "fbRevenue",
      key: "fbRevenue",
      align: "right",
      render: (value) => {
        return (
          "$" +
          Number(value).toLocaleString("en", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })
        );
      },
    },
    {
      title: "Other Revenue",
      dataIndex: "otherRevenue",
      key: "otherRevenue",
      align: "right",
      render: (value) => {
        return (
          "$" +
          Number(value).toLocaleString("en", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })
        );
      },
    },
    {
      title: "Total Revenue",
      dataIndex: "totalRevenue",
      key: "totalRevenue",
      align: "right",
      render: (value) => {
        return (
          "$" +
          Number(value).toLocaleString("en", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })
        );
      },
    },
    {
      title: "Occ%",
      dataIndex: "occ",
      key: "occ",
      align: "right",
      render: (value) => {
        return (
          Number(value).toLocaleString("en", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }) + "%"
        );
      },
    },
  ];

  for (let i = 0; i < length; i++) {
    total.roomCount += roomCount[i];
    total.roomRevenue += roomRevenue[i];
    total.fbRevenue += fbRevenue[i];
    total.otherRevenue += otherRevenue[i];
    total.totalRevenue += roomRevenue[i] + fbRevenue[i] + otherRevenue[i];
    total.occ += occ[i];
    const item = {
      key: `${i + 1}`,
      property: values[i] || "",
      roomCount: roomCount[i] || 0,
      roomRevenue: roomRevenue[i] || 0,
      fbRevenue: fbRevenue[i] || 0,
      otherRevenue: otherRevenue[i] || 0,
      totalRevenue: roomRevenue[i] + fbRevenue[i] + otherRevenue[i] || 0,
      occ: occ[i] || 0,
    };

    table.push(item);
  }

  for (let i = table.length - 1; i >= 0; i--) {
    console.log(table[i].property, values);
    if (!values.includes(`${table[i].property}`)) {
      // Remove the object from the table array
      table.splice(i, 1);
    }
  }

  table.push(total);

  return (
    <div className="dataTable">
      {length > 0 && (
        <div className="Table__Table">
          <Table columns={columns} dataSource={table} />
        </div>
      )}
    </div>
  );
};
export default dataTable;
