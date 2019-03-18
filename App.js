import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ProgressBarAndroid,
  Dimensions
} from "react-native";
import { robotoWeights } from "react-native-typography";
import { ScreenOrientation } from "expo";

export default class Menu extends React.Component {
  componentDidMount() {
    ScreenOrientation.allowAsync(
      ScreenOrientation.Orientation.ALL_BUT_UPSIDE_DOWN
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.label} source={require("./assets/label.png")} />
        <Text style={[styles.name, styles.robotoWeights]}>TicTacToe</Text>
        <ProgressBarAndroid
          style={styles.progressBar}
          styleAttr="Horizontal"
          indeterminate={true}
          progress={0.5}
          color={"black"}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginBottom: 50,
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  label: {
    height: 250,
    width: 250
  },
  name: {
    color: "black",
    fontSize: 70
  },
  robotoWeights: {
    ...robotoWeights.titleObject,
    ...robotoWeights.light
  },
  progressBar: {
    width: Dimensions.get("window").width / 2
  }
});
