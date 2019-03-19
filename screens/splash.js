import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ProgressBarAndroid,
  Dimensions,
  ImageBackground
} from "react-native";
import { robotoWeights } from "react-native-typography";
import label from "../assets/label.png";
import menu_background from "../assets/menu_background.jpg";

class Splash extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate("Menu");
      console.log("Splash");
    }, 0);
  }

  render() {
    return (
      <ImageBackground
        source={menu_background}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={styles.container}>
          <Image style={styles.label} source={label} />
          <Text style={[styles.name, styles.robotoWeights]}>TicTacToe</Text>
          <ProgressBarAndroid
            style={styles.progressBar}
            styleAttr="Horizontal"
            indeterminate={true}
            progress={0.5}
            color={"black"}
          />
        </View>
      </ImageBackground>
    );
  }
}

export default Splash;

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    paddingBottom: 50,
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
