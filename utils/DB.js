import { AsyncStorage } from "react-native";

export const getDB = async () => {
  try {
    const playersDB = await AsyncStorage.getItem("playersDB");

    if (playersDB === null) {
      await AsyncStorage.setItem("playersDB", JSON.stringify([]));
      return [];
    }

    return JSON.parse(playersDB);
  } catch (error) {
    alert("DataBase init - Error:\n" + error);
  }
};

export const initPlayers = async (p1Name, p2Name) => {
  try {
    playersDB = await getDB();
    //console.log("init" + playersDB);
    const isExist = playersDB.some(
      players =>
        (players.p1.name === p1Name && players.p2.name === p2Name) ||
        (players.p2.name === p1Name && players.p1.name === p2Name)
    );
    !isExist &&
      (await AsyncStorage.setItem(
        "playersDB",
        JSON.stringify([
          ...playersDB,
          {
            p1: { name: p1Name, score: 0 },
            p2: { name: p2Name, score: 0 }
          }
        ])
      ));
  } catch (error) {
    alert("Input data - Error!:\n" + error);
  }
};

export const updateData = async (nameToUpdate, score, p2Name) => {
  let playersDB = await getDB();
  playersDB = playersDB.map(players => {
    if (players.p1.name === nameToUpdate && players.p2.name === p2Name) {
      if (players.p1.score < score)
        return { ...players, p1: { ...players.p1, score } };
    } else if (players.p2.name === nameToUpdate && players.p1.name === p2Name) {
      if (players.p2.score < score)
        return { ...players, p2: { ...players.p2, score } };
    }
    return players;
  });
  //console.log("-----");
  console.log(playersDB);
  await AsyncStorage.setItem("playersDB", JSON.stringify(playersDB));
};
