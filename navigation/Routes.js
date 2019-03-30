import React from "react";
import { createStackNavigator } from "react-navigation";
import Menu from "../screens/Menu";
import Splash from "../screens/Splash";
import Board_PvP from "../screens/Board_PvP";
import Board_PvB from "../screens/Board_PvB";

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
  },
  Board_PvP: {
    screen: Board_PvP,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  },
  Board_PvB: {
    screen: Board_PvB,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  }
});
