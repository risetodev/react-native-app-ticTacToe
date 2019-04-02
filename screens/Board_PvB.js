import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Image,
  Button
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import ticTacToe from "tic-tac-toe-ai-engine";
import { MaterialCommunityIcons as Icon } from "react-native-vector-icons";
import { ResponsiveLayout } from "../ViewComponents/ResponsiveLayout";
import label from "../assets/label.png";

class Board_PvB extends Component {
  state = {
    gameState: ["", "", "", "", "", "", "", "", ""],
    currentPlayer: "X",
    player: "Mike",
    playerScore: 0,
    AI: "Bot",
    AIScore: 0,
    draws: 0,
    winner: "",
    isWinner: false,
    isDraw: false,
    isLandscape:
      Dimensions.get("window").height < Dimensions.get("window").width,
    lock: false
  };

  componentDidMount() {
    this.initGame();
    Dimensions.addEventListener("change", () =>
      this.setState({
        isLandscape:
          Dimensions.get("window").height < Dimensions.get("window").width
      })
    );
  }

  initGame = () => {
    this.setState({
      gameState: ["", "", "", "", "", "", "", "", ""],
      currentPlayer: "X",
      isWinner: false,
      isDraw: false,
      lock: false
    });
  };

  isWin = () => {
    (this.state.winner === "X" || this.state.winner === "O") &&
      this.setState({ isWinner: true, lock: true });
  };

  isDraw = () =>
    this.state.gameState.filter(item => item === "").length === 1 &&
    !this.state.isWinner &&
    this.setState({ isDraw: true, lock: true, draws: this.state.draws + 1 });

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

  //state async to fix!
  onPress = index => {
    if (this.state.gameState[index] !== "") return;
    let board = this.state.gameState;
    let currentPlayer = this.state.currentPlayer;
    board[index] = currentPlayer;
    this.setState({ gameState: board });
    this.setState({ currentPlayer: "Bot" });
    let aiMove = ticTacToe.computeMove(this.state.gameState);
    console.log(this.state.gameState);
    console.log(aiMove);
    setTimeout(() => {
      this.setState({
        gameState: aiMove.nextBestGameState,
        currentPlayer: "X",
        winner: aiMove.winner
      });
      this.isWin();
      this.isDraw();
    }, 700);
  };

  getPlayerName = () =>
    this.state.currentPlayer === "X" ? this.state.player : this.state.AI;

  WinnerComponent = () => {
    return (
      <View>
        <Text style={styles.player}>
          {this.state.winner === "X" ? this.state.player : this.state.AI} wins!
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
                {this.state.player1}: {this.state.player1Win}
              </Text>
              <Text style={styles.player}>
                <Icon name="circle-outline" style={{ fontSize: hp("4%") }} />
                {this.state.player2}: {this.state.player2Win}
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
            <Button
              color="#000"
              title="Reload game"
              onPress={this.reloadGame}
            />
          )}
        </View>
      </View>
    </ImageBackground>
  );

  render() {
    return (
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
                        {this.state.AI}: {this.state.AIScore}
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
                  <Text style={styles.player}>Draws: {this.state.draws}</Text>
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
  }
});
