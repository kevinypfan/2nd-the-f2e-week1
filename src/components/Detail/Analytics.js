import React from "react";
import Toast from "./Toast";
import BarChart from "./BarChart";

const Analytics = props => {
  return (
    <div className="analytics">
      <div>
        <Toast title="foucs time" />
        <div className="totals">
          <div className="total-group">
            <div className="subject">today</div>
            <div className="amount">
              25
              <span>/tomato</span>
            </div>
          </div>
          <div className="total-group">
            <div className="subject">week</div>
            <div className="amount">
              108
              <span>/tomato</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Toast title="chart" />
        <BarChart />
      </div>
    </div>
  );
};

export default Analytics;
