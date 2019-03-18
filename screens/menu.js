import React, { Component } from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import menu_background from "../assets/menu_background.jpg";

import { MenuButton } from "../ViewComponents/MenuButton";

class Menu extends Component {
  render() {
    return (
      <ImageBackground
        source={menu_background}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={styles.container}>
          <MenuButton>Player vs Player</MenuButton>
          <MenuButton>Player vs BOT</MenuButton>
          <MenuButton>Score board</MenuButton>
        </View>
      </ImageBackground>
    );
  }
}

export default Menu;

const styles = StyleSheet.create({
  container: {
    paddingTop: 150,
    paddingLeft: 100,
    paddingRight: 100,
    flex: 1,
    alignItems: "center",
    flexDirection: "column"
  }
});
