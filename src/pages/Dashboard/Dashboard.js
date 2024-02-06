import { React, useState } from "react";
import "./Dashboard.scss";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
import Filter from "./Filter/Filter";
import Table from "./Table/Table";

const Dashboard = () => {
  const [props, setProps] = useState([]);
  return (
    <div className="Dashboard">
      <div className="App__container">
        <Sidebar />
        <div className="App__Content">
          <Header />
          <Filter props={props} setProps={setProps} />
          <Table props={props} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
