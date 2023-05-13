import { robotsMock } from "../../mocks/mocks.js";
import { loadRobotsActionCreator, robotReducer } from "./robotsSlice";
import { RobotStateStructure } from "./types";

describe("Given loadRobot reducer", () => {
  describe("When it receives three robots and an empty robot list", () => {
    test("Then it shoul return a list with three robots", () => {
      const robotsState: RobotStateStructure = {
        robots: [],
      };

      const loadRobotsAction = loadRobotsActionCreator(robotsMock);

      const expectedRobotList: RobotStateStructure = {
        ...robotsState,
        robots: robotsMock,
      };

      const newState: RobotStateStructure = robotReducer(
        robotsState,
        loadRobotsAction
      );

      expect(expectedRobotList).toStrictEqual(newState);
    });
  });
});
