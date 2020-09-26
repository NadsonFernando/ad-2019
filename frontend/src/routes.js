import React from "react";

import { Switch, Route } from "react-router-dom";

import Raffle from "@pages/Raffle";
import Friend from "@pages/Friend";

export default function Routes() {
  return (
    <Switch>
      <Route path="/raffle" component={Raffle} />
      <Route path="/friend" component={Friend} />
    </Switch>
  );
}
