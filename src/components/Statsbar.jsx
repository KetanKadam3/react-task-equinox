import React from "react";
import { statsData } from "../data/dummyData";

const Statsbar = () => (
  <div>
    <div
      className="stats-container-1 p-2 "
      style={{
        borderBottom: "1px solid black",
      }}
    >
      <div
        className="flex gap-10 justify-evenly "
        style={{ borderRight: "1px solid black", paddingRight: "20px" }}
      >
        <div>
          <p>{statsData.totalRevenue.toLocaleString()}</p>

          <p className="color-grey">Total Revenue</p>
        </div>
        <div>
          <p>{statsData.paymentReceived.toLocaleString()}</p>

          <p className="color-green">Payment Received</p>
        </div>
        <div>
          <p>{statsData.notYetDue.toLocaleString()}</p>

          <p className="color-blue">Not Yet Due</p>
        </div>
      </div>
      <div>
        <p className="color-red">Payment</p>
        <p className="color-red">Overdue</p>
      </div>
      <div className="flex gap-10 justify-evenly">
        <div>
          <p>20,000</p>

          <p className="color-orange">A</p>
        </div>
        <div>
          <p>20,000</p>

          <p className="color-orange">B</p>
        </div>
        <div>
          <p>20,000</p>

          <p className="color-orange">C</p>
        </div>
        <div>
          <p>20,000</p>

          <p className="color-orange">D</p>
        </div>
      </div>
    </div>

    <div className="stats-container-1 p-2 ">
      <div>
        <p className="color-grey">Lead Category - Source</p>

        <p className="bold">Others - References</p>
      </div>
      <div>
        <p className="color-grey">Lead Category -Lead Source</p>

        <p> - </p>
      </div>

      <div>
        <p className="color-grey">Last Updated</p>

        <p className="bold ">{statsData.lastUpdated}</p>
      </div>

      <div>
        <p className="color-grey">Total Outstanding</p>

        <p className="bold color-red">
          {statsData.totalOutstanding.toLocaleString()}
        </p>
      </div>

      <div>
        <p className="color-grey">Last Order Date </p>

        <p className="bold color-red">{statsData.lastOrderDate}</p>
      </div>
    </div>
  </div>
);

export default Statsbar;
