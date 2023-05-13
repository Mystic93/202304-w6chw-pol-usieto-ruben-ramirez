import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RobotStateStructure } from "./types";
import { RobotsDocumentStructure } from "../../types";

const initialRobotState: RobotStateStructure = {
  robots: [],
};

export const robotsSlice = createSlice({
  name: "robots",
  initialState: initialRobotState,
  reducers: {
    loadRobots: (
      currentRobots,
      action: PayloadAction<RobotsDocumentStructure[]>
    ): RobotStateStructure => ({
      ...currentRobots,
      robots: [...action.payload],
    }),
  },
});

export const { loadRobots: loadRobotsActionCreator } = robotsSlice.actions;
export const robotReducer = robotsSlice.reducer;
