import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  FlatList,
  Dimensions,
  TouchableHighlight
} from "react-native";
import menu_background from "../assets/menu_background.jpg";
import { black } from "ansi-colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

class Board extends React.Component {
  state = {
    board: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  };

  render() {
    return (
      <ImageBackground
        source={menu_background}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={styles.container}>
          <FlatList
            data={this.state.board}
            keyExtractor={(item, i) => i}
            style={styles.flatListContainer}
            renderItem={({ item, index }) => (
              <TouchableHighlight
                style={styles.cell}
                onPress={() => this.onOpen(index)}
              >
                <View />
              </TouchableHighlight>
            )}
            numColumns={3}
          />
        </View>
      </ImageBackground>
    );
  }
}

export default Board;

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: hp("20%"),
    flex: 1,
    alignItems: "center",
    flexDirection: "column"
  },
  flatListContainer: {
    flex: 1,
    paddingBottom: 100,
    backgroundColor: "black"
  },
  cell: {
    marginBottom: 1,
    marginRight: 1,
    height: Dimensions.get("window").width / 3,
    width: Dimensions.get("window").width / 3,
    backgroundColor: "white"
  }
});
