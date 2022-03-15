import React from "react";
import "./ActivityList.css";
import Activity from "./Activity";

function ActivityList({ activities }) {
  const activitiesList = activities.map(({ time, description }, index) => (
    <Activity time={time} description={description} key={index} />
  ));
  return (
    <table style={{ border: "1px solid black", padding: "20px 125px 25px 25px" }}>
      <tbody>{activitiesList}</tbody>
    </table>
  );
}

export default ActivityList;
