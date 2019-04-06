import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  StatusBar
} from "react-native";
import { ResponsiveLayout } from "../ViewComponents/ResponsiveLayout";
import { getDB } from "../utils/DB";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

class ScoreBoard extends Component {
  state = {
    DB: null
  };

  initDB = async () => {
    this.setState({ DB: await getDB() });
  };

  componentDidMount() {
    this.initDB();
  }

  render() {
    console.log(this.state.DB);
    return (
      <ResponsiveLayout>
        <Text
          style={[
            styles.player,
            {
              borderWidth: 3,
              borderLeftWidth: 0,
              borderRightWidth: 0,
              borderTopWidth: 0
            }
          ]}
        >
          Best score in the strick
        </Text>
        <FlatList
          data={this.state.DB}
          keyExtractor={(item, i) => i.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.scoreRow}>
              <View style={styles.players}>
                <Text style={styles.player}>
                  {item.p1.name}: {item.p1.score}
                </Text>
              </View>
              <View>
                <Text style={styles.space}>{""}</Text>
              </View>
              <View style={styles.players}>
                <Text style={styles.player}>
                  {item.p2.name}: {item.p2.score}
                </Text>
              </View>
            </View>
          )}
        />
      </ResponsiveLayout>
    );
  }
}
export default ScoreBoard;

const styles = StyleSheet.create({
  scoreRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 5,
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0
  },
  players: {
    flexDirection: "row"
  },
  player: {
    fontSize: hp("5%")
  },
  space: {
    margin: 10
  }
});
