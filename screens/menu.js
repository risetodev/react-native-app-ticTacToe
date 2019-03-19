import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  Image,
  Dimensions,
  View,
  BackHandler
} from "react-native";
import { robotoWeights } from "react-native-typography";
import label from "../assets/label.png";
import { MenuButton } from "../ViewComponents/MenuButton";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { ResponsiveLayout } from "../ViewComponents/ResponsiveLayout";

class Menu extends Component {
  componentDidMount() {
    Dimensions.addEventListener("change", () => {
      Dimensions.get("window").height < Dimensions.get("window").width
        ? this.setState({ isLandscape: true })
        : this.setState({ isLandscape: false });
    });
  }

  state = {
    isLandscape: false
  };

  PvP = () => {
    this.props.navigation.navigate("Board");
  };
  PvB = () => {
    this.props.navigation.navigate("Board");
  };

  render() {
    return (
      <ResponsiveLayout>
        {this.state.isLandscape || (
          <>
            <Image style={styles.label} source={label} resizeMode="contain" />
            <Text style={[styles.name, styles.robotoWeights]}>TicTacToe</Text>
          </>
        )}
        <View>
          <MenuButton onPress={this.PvP}>Player vs Player</MenuButton>
          <MenuButton onPress={this.PvB}>Player vs BOT</MenuButton>
          <MenuButton>Score board</MenuButton>
          <MenuButton onPress={BackHandler.exitApp}>Exit game</MenuButton>
        </View>
      </ResponsiveLayout>
    );
  }
}

export default Menu;

const styles = StyleSheet.create({
  name: {
    color: "black",
    fontSize: Dimensions.get("window").height - hp("93%")
  },
  robotoWeights: { ...robotoWeights.titleObject, ...robotoWeights.light },
  label: {
    height: Dimensions.get("window").height - hp("80%")
  }
});
