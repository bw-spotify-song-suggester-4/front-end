import React from "react";
import {connect} from "react-redux";
import FavoriteList from "./FavoriteList";

export const Dashboard = (props) => {
   const id = props.match.params.id;
  
  console.log(props, id)


  return (
    <div className="dashboard">
      <h1>This is the Dashboard</h1>
      
      <FavoriteList />
      <div>
    <h1>Favorite List:</h1>
  </div>
    </div>
    
  );
};

const mapStateToProps = state => {
  return {
    state
  };
};

export default connect(mapStateToProps, {})(Dashboard);


