import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  ProgressBarAndroid,
  Dimensions
} from "react-native";
import { robotoWeights } from "react-native-typography";
import label from "../assets/label.png";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { ResponsiveLayout } from "../ViewComponents/ResponsiveLayout";

class Splash extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.replace("Menu");
    }, 1500);
  }

  render() {
    return (
      <ResponsiveLayout>
        <>
          <Image style={styles.label} source={label} resizeMode="contain" />
          <Text style={[styles.name, styles.robotoWeights]}>TicTacToe</Text>
          <ProgressBarAndroid
            style={styles.progressBar}
            styleAttr="Horizontal"
            indeterminate={true}
            progress={0.5}
            color={"black"}
          />
        </>
      </ResponsiveLayout>
    );
  }
}

export default Splash;

const styles = StyleSheet.create({
  label: {
    height: Dimensions.get("window").height - hp("70%")
  },
  name: {
    color: "black",
    fontSize: Dimensions.get("window").height - hp("90%")
  },
  robotoWeights: {
    ...robotoWeights.titleObject,
    ...robotoWeights.light
  },
  progressBar: {
    width: Dimensions.get("window").width / 2
  }
});
