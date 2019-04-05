import React, { Component } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { ResponsiveLayout } from "../ViewComponents/ResponsiveLayout";
import scoreDataManipulation from "../utils/scoreDataManipulation";

class ScoreBoard extends Component {
  state = {
    namesOfPlayers: scoreDataManipulation.getData(),
    scoreBoard: []
  };

  componentDidMount() {
    this.setState({ namesOfPlayers: scoreDataManipulation.getData() });
  }
  render() {
    return (
      <ResponsiveLayout>
        <FlatList
          data={this.state.scoreBoard}
          keyExtractor={(item, i) => i}
          renderItem={({ item, index }) => (
            <Text>
              {item}
              {index}
            </Text>
          )}
          numColumns={1}
        />
      </ResponsiveLayout>
    );
  }
}
export default ScoreBoard;

const styles = StyleSheet.create({});
