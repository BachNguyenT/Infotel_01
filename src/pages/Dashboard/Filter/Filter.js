import React, { useState } from "react";
import { DatePicker, Select } from "antd";
import data from "../../../assets/properties.json";

import "./Filter.scss";

const { RangePicker } = DatePicker;
const Filter = (props) => {
  // const properties = [
  //   { label: "SPH", value: "SPH" },
  //   { label: "PP02", value: "PP02" },
  // ];

  const properties = data.map((item) => ({
    label: item.property.label,
    value: item.property.value,
  }));

  const handleChange = (value) => {
    props.setProps((props) => value);
  };
  return (
    <div className="Filter">
      <Select
        mode="multiple"
        allowClear
        style={{
          width: "30%",
          height: "2rem",
          // marginTop: "0.05rem"
        }}
        size="large"
        placeholder="Select Properties"
        defaultValue={[]}
        onChange={handleChange}
        options={properties}
      />
      <RangePicker style={{ height: "2.5rem", width: "40%" }} />
      {/* <div>{`${props.props}`}</div> */}
    </div>
  );
};

export default Filter;
