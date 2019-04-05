import { AsyncStorage } from "react-native";
import { Component } from "react";

class scoreDataManipulation extends Component {
  setData = async (name, score) => {
    try {
      await AsyncStorage.setItem(name, score);
    } catch (error) {
      alert("Input data - Error!:\n" + error);
    }
  };

  getData = async name => {
    try {
      const value = await AsyncStorage.getItem(name);
      if (value !== null) {
        // We have data!!
        // console.log(value);
      }
    } catch (error) {
      alert("Get data - Error:\n" + error);
    }
  };

  getAllKeys = () =>
    Promise.all(
      AsyncStorage.getAllKeys().then(ks => {
        // console.log(ks);
        // return here
        return ks.map(k => {
          console.log(k);
          // return here
        });
      })
    );
}
scoreDataManipulation = new scoreDataManipulation();

export default scoreDataManipulation;
