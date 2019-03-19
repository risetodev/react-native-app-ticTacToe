import React from "react";
import { createStackNavigator, StackNavigator } from "react-navigation";
import Menu from "../screens/Menu";
import Splash from "../screens/Splash";
import Board from "../screens/Board";

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
  Board: {
    screen: Board,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  }
});
