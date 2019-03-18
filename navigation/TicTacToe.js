import React from "react";
import { createStackNavigator } from "react-navigation";

import Menu from "../screens/Menu";
import Splash from "../screens/Splash";

export default createStackNavigator(
  {
    Menu,
    Splash
  },
  {
    initialRouteName: "Splash"
  }
);
