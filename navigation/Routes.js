import React from "react";
import { createStackNavigator, StackNavigator } from "react-navigation";
import Menu from "../screens/Menu";
import Splash from "../screens/Splash";

export const Routes = createStackNavigator({
  Splash: {
    screen: Splash,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  },
  Menu: {
    screen: Menu,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  }
});
