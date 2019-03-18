import React from "react";
import { createAppContainer, Header } from "react-navigation";
import { ScreenOrientation } from "expo";
import { Routes } from "./navigation/Routes";

ScreenOrientation.allowAsync(ScreenOrientation.Orientation.ALL_BUT_UPSIDE_DOWN);

export default createAppContainer(Routes);
