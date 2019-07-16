import React from "react";
import Tabs from "../components/Detail/Tabs";
import Controller from "../components/Detail/Controller";

const Detail = props => {
  return (
    <section className="Detail">
      <div className="left-section">
        <div className="content">
          <Tabs {...props} />
          <Controller {...props} />
        </div>
      </div>
    </section>
  );
};
export default Detail;
