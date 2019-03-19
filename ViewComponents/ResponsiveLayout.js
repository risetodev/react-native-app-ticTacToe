import React from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Dimensions,
  StatusBar
} from "react-native";
import menu_background from "../assets/menu_background.jpg";
import { robotoWeights } from "react-native-typography";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export const ResponsiveLayout = props => (
  <ImageBackground
    source={menu_background}
    style={{ width: "100%", height: "100%" }}
  >
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.center}>{props.children}</View>
    </View>
  </ImageBackground>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  center: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around"
  },
  name: {
    color: "black",
    fontSize: Dimensions.get("window").height - hp("93%")
  },
  robotoWeights: { ...robotoWeights.titleObject, ...robotoWeights.light },
  label: {
    height: Dimensions.get("window").height - hp("90%")
  }
});
