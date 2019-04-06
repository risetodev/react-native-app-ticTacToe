import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Image,
  Button,
  ImageBackground,
  Picker
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import tictactoeai from "tic-tac-toe-minimax";
import { MaterialCommunityIcons as Icon } from "react-native-vector-icons";
import { ResponsiveLayout } from "../ViewComponents/ResponsiveLayout";
import label from "../assets/label.png";
import menu_background from "../assets/menu_background.jpg";
import { updateData, initPlayers } from "../utils/DB";

const { GameStep } = tictactoeai;
const symbols = {
  huPlayer: "X",
  aiPlayer: "O"
};
const difficulty = ["Easy", "Normal", "Hard"];
class Board_PvB extends Component {
  state = {
    gameState: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    playerSymbol: "X",
    player: "Player",
    playerScore: 0,
    currentMove: "X",
    ai: "Bot",
    aiSymbol: "O",
    aiScore: 0,
    draws: 0,
    winner: "",
    isWinner: false,
    isDraw: false,
    isLandscape:
      Dimensions.get("window").height < Dimensions.get("window").width,
    lock: false,
    isDifficultChoosed: false,
    selected: null
  };

  componentDidMount() {
    Dimensions.addEventListener("change", this.updateOrientation);
    initPlayers(this.state.player, this.state.ai);
    this.initGame();
  }

  componentWillUnmount() {
    Dimensions.removeEventListener("change", this.updateOrientation);
  }
  updateOrientation = () => {
    this.setState({
      isLandscape:
        Dimensions.get("window").height < Dimensions.get("window").width
    });
  };

  initGame = () => {
    this.setState({
      gameState: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      currentPlayer: "X",
      winner: "",
      isWinner: false,
      isDraw: false,
      lock: false
    });
  };

  renderSymbol = index => {
    switch (this.state.gameState[index]) {
      case "X":
        return <Icon name="close" style={styles.cross} />;
      case "O":
        return <Icon name="circle-outline" style={styles.circle} />;
      default:
        return null;
    }
  };

  onPress = index => {
    if (typeof this.state.gameState[index] === "string") return;
    let board = this.state.gameState;
    let currentPlayer = this.state.playerSymbol;
    board[index] = currentPlayer;

    this.setState({ currentMove: "O" });
    const aiMove = GameStep(this.state.gameState, symbols, this.state.selected);
    //console.log(aiMove);
    setTimeout(() => {
      this.setState({
        gameState: aiMove.board,
        currentMove: "X",
        winner: aiMove.winner
      });
      this.isWin();
      this.isDraw();
    }, 500);
  };

  isWin = () => {
    (this.state.winner === "huPlayer" || this.state.winner === "aiPlayer") &&
      this.setState({ isWinner: true, lock: true });
    this.state.winner === "huPlayer" &&
      (this.setState({ playerScore: this.state.playerScore + 1 }),
      updateData(
        this.state.player,
        (this.state.playerScore + 1).toString(),
        this.state.ai
      ));
    this.state.winner === "aiPlayer" &&
      (this.setState({ aiScore: this.state.aiScore + 1 }),
      updateData(
        this.state.ai,
        (this.state.aiScore + 1).toString(),
        this.state.player
      ));
  };

  isDraw = () =>
    this.state.winner === "draw" &&
    this.setState({ isDraw: true, lock: true, draws: this.state.draws + 1 });

  getPlayerName = () =>
    this.state.currentMove === "X" ? this.state.player : this.state.ai;

  WinnerComponent = () => {
    return (
      <View>
        <Text style={styles.player}>
          {this.state.winner === "huPlayer" ? this.state.player : this.state.ai}{" "}
          wins!
        </Text>
      </View>
    );
  };

  DrawComponent = () => {
    return (
      <View>
        <Text style={styles.player}>This is a draw!</Text>
      </View>
    );
  };

  board = () => (
    <View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          disabled={this.state.lock}
          onPress={() => this.onPress(0)}
          style={[styles.cell, { borderLeftWidth: 0, borderTopWidth: 0 }]}
          activeOpacity={1}
        >
          {this.renderSymbol(0)}
        </TouchableOpacity>
        <TouchableOpacity
          disabled={this.state.lock}
          activeOpacity={1}
          onPress={() => this.onPress(1)}
          style={[styles.cell, { borderTopWidth: 0 }]}
        >
          {this.renderSymbol(1)}
        </TouchableOpacity>
        <TouchableOpacity
          disabled={this.state.lock}
          activeOpacity={1}
          onPress={() => this.onPress(2)}
          style={[styles.cell, { borderRightWidth: 0, borderTopWidth: 0 }]}
        >
          {this.renderSymbol(2)}
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          disabled={this.state.lock}
          activeOpacity={1}
          onPress={() => this.onPress(3)}
          style={[styles.cell, { borderLeftWidth: 0 }]}
        >
          {this.renderSymbol(3)}
        </TouchableOpacity>
        <TouchableOpacity
          disabled={this.state.lock}
          activeOpacity={1}
          onPress={() => this.onPress(4)}
          style={styles.cell}
        >
          {this.renderSymbol(4)}
        </TouchableOpacity>
        <TouchableOpacity
          disabled={this.state.lock}
          activeOpacity={1}
          onPress={() => this.onPress(5)}
          style={[styles.cell, { borderRightWidth: 0 }]}
        >
          {this.renderSymbol(5)}
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          disabled={this.state.lock}
          activeOpacity={1}
          onPress={() => this.onPress(6)}
          style={[styles.cell, { borderLeftWidth: 0, borderBottomWidth: 0 }]}
        >
          {this.renderSymbol(6)}
        </TouchableOpacity>
        <TouchableOpacity
          disabled={this.state.lock}
          activeOpacity={1}
          onPress={() => this.onPress(7)}
          style={[styles.cell, { borderBottomWidth: 0 }]}
        >
          {this.renderSymbol(7)}
        </TouchableOpacity>
        <TouchableOpacity
          disabled={this.state.lock}
          activeOpacity={1}
          onPress={() => this.onPress(8)}
          style={[styles.cell, { borderBottomWidth: 0, borderRightWidth: 0 }]}
        >
          {this.renderSymbol(8)}
        </TouchableOpacity>
      </View>
    </View>
  );

  landscapeMode = () => (
    <ImageBackground
      source={menu_background}
      style={{
        width: "100%",
        height: "100%",

        justifyContent: "center"
      }}
    >
      <View style={styles.landscapeContainer}>
        <View style={styles.scoreBoard}>
          <View style={{ flexDirection: "column" }}>
            <View
              style={{
                flexDirection: "column"
              }}
            >
              <Text style={styles.player}>
                <Icon name="close" style={{ fontSize: hp("5%") }} />
                {this.state.player}: {this.state.playerScore}
              </Text>
              <Text style={styles.player}>
                <Icon name="circle-outline" style={{ fontSize: hp("4%") }} />
                {this.state.ai}: {this.state.aiScore}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around"
              }}
            >
              <Text style={styles.player}> Draws: {this.state.draws}</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-around"
          }}
        >
          {this.state.isWinner && this.WinnerComponent()}
          {this.state.isDraw && this.DrawComponent()}
          {this.board()}
        </View>

        <View>
          <Text style={styles.player}>
            Current{"\n"}move:{"\n"}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around"
            }}
          >
            <Text style={styles.player}>{this.getPlayerName()}</Text>
          </View>

          {(this.state.isDraw || this.state.isWinner) && (
            <Button color="#000" title="Reload game" onPress={this.initGame} />
          )}
        </View>
      </View>
    </ImageBackground>
  );

  diffComponent = () => (
    <ResponsiveLayout>
      <View>
        <Text style={{ fontSize: hp("4%") }}>
          Select difficulty for the game:
        </Text>
        <Picker
          style={styles.picker}
          mode="dropdown"
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ isDifficultChoosed: true, selected: itemValue })
          }
        >
          <Picker.Item label="Select" value="" />
          <Picker.Item label="Easy" value="Easy" />
          <Picker.Item label="Normal" value="Normal" />
          <Picker.Item label="Hard" value="Hard" />
        </Picker>
      </View>
    </ResponsiveLayout>
  );

  render() {
    return (
      <>
        {!this.state.isDifficultChoosed ? (
          this.diffComponent()
        ) : (
          <>
            {this.state.isLandscape ? (
              this.landscapeMode()
            ) : (
              <>
                <ResponsiveLayout>
                  <View style={styles.scoreBoard}>
                    <Image
                      style={styles.label}
                      source={label}
                      resizeMode="contain"
                    />
                    <View
                      style={{
                        flexDirection: "column",
                        alignItems: "center"
                      }}
                    >
                      <View style={styles.playersScoreBoard}>
                        <View style={styles.playerScore}>
                          <Text>
                            <Icon name="close" style={{ fontSize: hp("4%") }} />
                          </Text>
                          <Text style={styles.player}>
                            {this.state.player}: {this.state.playerScore}
                          </Text>
                        </View>
                        <View
                          style={[
                            styles.player,
                            {
                              margin: wp("5%")
                            }
                          ]}
                        >
                          <Text />
                        </View>
                        <View style={styles.playerScore}>
                          <Text>
                            <Icon
                              name="circle-outline"
                              style={{ fontSize: hp("3%") }}
                            />
                          </Text>
                          <Text style={styles.player}>
                            {this.state.ai}: {this.state.aiScore}
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "center"
                      }}
                    >
                      <Text style={styles.player}>
                        Draws: {this.state.draws}
                      </Text>
                    </View>
                    {!(this.state.isDraw || this.state.isWinner) && (
                      <View>
                        <Text style={styles.player}>
                          Current move: {this.getPlayerName()}
                        </Text>
                      </View>
                    )}
                  </View>

                  {this.state.isWinner && this.WinnerComponent()}
                  {this.state.isDraw && this.DrawComponent()}
                  {this.board()}
                  {(this.state.isDraw || this.state.isWinner) && (
                    <Button
                      color="#000"
                      title="Reload game"
                      onPress={this.initGame}
                    />
                  )}
                </ResponsiveLayout>
              </>
            )}
          </>
        )}
      </>
    );
  }
}

export default Board_PvB;

const styles = StyleSheet.create({
  scoreBoard: {
    flexDirection: "column",
    alignItems: "center"
  },
  cell: {
    borderWidth: 3,
    height: Dimensions.get("window").height / 6.5,
    width: Dimensions.get("window").width / 4,
    alignItems: "center",
    justifyContent: "center"
  },
  circle: {
    color: "black",
    fontSize: hp("12%"),
    alignItems: "center",
    justifyContent: "center"
  },
  cross: {
    color: "black",
    fontSize: hp("15%"),
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    height: hp("4%"),
    fontSize: hp("4%"),
    borderColor: "gray",
    borderBottomWidth: 1
  },
  submit: {
    paddingTop: hp("3%")
  },
  player: {
    fontSize: hp("5%")
  },
  playerScore: {
    flexDirection: "row",
    alignItems: "center"
  },
  playersScoreBoard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  landscapeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  label: {
    height: Dimensions.get("window").height - hp("90%"),
    marginBottom: Dimensions.get("window").height - hp("98%")
  },
  picker: {
    width: 300
  }
});
