import React from "react";

function SuggestedCard(props) {
  return (
    <h1>
      {props.name}
      <CardContent>{props.url}</CardContent>
      <CardContent>{props.description}</CardContent>
      <CardContent>{props.subscriptions}</CardContent>
    </Card>
  );
}

export default SuggestedCard;
