import React, { Component } from "react";
import { Text, StyleSheet, View, Dimensions } from "react-native";
import { Button } from "react-native-elements";

export const MenuButton = props => (
  <Button
    titleStyle={styles.buttonTitleStyle}
    buttonStyle={styles.buttonStyle}
    containerStyle={{ marginTop: 10 }}
    title={props.children}
    type="outline"
  />
);

const styles = StyleSheet.create({
  buttonTitleStyle: {
    fontSize: 35,
    color: "black"
  },
  buttonStyle: {
    width: Dimensions.get("window").width - 70,
    borderColor: "black",
    borderWidth: 3
  }
});
