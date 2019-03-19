import React, { Component } from "react";
import { StyleSheet, Dimensions } from "react-native";
import { robotoWeights } from "react-native-typography";
import { Button } from "react-native-elements";

export const MenuButton = props => (
  <Button
    titleStyle={[styles.buttonTitleStyle, styles.robotoWeights]}
    buttonStyle={styles.buttonStyle}
    containerStyle={{ marginTop: 10 }}
    title={props.children}
    onPress={props.onPress}
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
    borderWidth: 2
  },
  robotoWeights: {
    ...robotoWeights.titleObject,
    ...robotoWeights.light
  }
});
