import React from "react";
import {connect} from "react-redux";

export const Dashboard = props => {
  return (
    <div>
      <h1>This is the Dashboard</h1>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    state
  };
};

export default connect(mapStateToProps, {})(Dashboard);


