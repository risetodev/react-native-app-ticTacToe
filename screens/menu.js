import React, { Component } from "react";
import { StyleSheet, View, ImageBackground, Text, Image } from "react-native";
import menu_background from "../assets/menu_background.jpg";
import { robotoWeights } from "react-native-typography";
import label from "../assets/label.png";
import { MenuButton } from "../ViewComponents/MenuButton";

class Menu extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate("Board");
      console.log("Menu");
    }, 1000);
  }
  render() {
    return (
      <ImageBackground
        source={menu_background}
        style={{ width: "100%", height: "100%" }}
      >
        {/*
        <Text
          style={[
            { paddingTop: 30, fontSize: 30 },
            { ...robotoWeights.titleObject, ...robotoWeights.medium }
          ]}
        >
          Total winned: 123
        </Text>
        
      
      */}

        <View style={styles.container}>
          <Image style={styles.label} source={label} />
          <Text style={[styles.name, styles.robotoWeights]}>TicTacToe</Text>
          <MenuButton>Player vs Player</MenuButton>
          <MenuButton>Player vs BOT</MenuButton>
          <MenuButton>Score board</MenuButton>
          <MenuButton>Exit game</MenuButton>
        </View>
      </ImageBackground>
    );
  }
}

export default Menu;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingLeft: 100,
    paddingRight: 100,
    flex: 1,
    alignItems: "center",
    flexDirection: "column"
  },
  name: {
    color: "black",
    fontSize: 40,
    paddingBottom: 30
  },
  robotoWeights: { ...robotoWeights.titleObject, ...robotoWeights.light },
  label: {
    height: 50,
    width: 50
  }
});
