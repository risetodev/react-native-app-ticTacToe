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
          <View style={styles.flatListContainer}>
            <FlatList
              data={this.state.board}
              keyExtractor={(item, i) => i}
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
        </View>
      </ImageBackground>
    );
  }
}

export default Board;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  flatListContainer: {
    width: Dimensions.get("window").width - wp("21%"),
    height: Dimensions.get("window").height - hp("51%"),
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "black"
  },
  cell: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 1,
    marginRight: 1,
    marginLeft: 1,
    marginTop: 1,
    height: (Dimensions.get("window").height - hp("52%")) / 3,
    width: (Dimensions.get("window").width - wp("22%")) / 3,
    backgroundColor: "white"
  }
});
