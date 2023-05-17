import { useEffect } from "react";
import useApi from "../../hooks/useApi";
import { useAppDispatch, useAppSelector } from "../../store";
import { loadRobotsActionCreator } from "../../store/robots/robotsSlice";
import AppStyle from "./AppStyle";
import RobotList from "../RobotList/RobotList";
import { RobotsDocumentStructure } from "../../types";
import LoginForm from "../LoginForm/LoginForm";

const App = (): JSX.Element => {
  const { loadRobots } = useApi();

  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const initialRobots = await loadRobots();

      dispatch(loadRobotsActionCreator(initialRobots.robots));
    })();
  }, [dispatch, loadRobots]);

  const robots = useAppSelector(
    (state): RobotsDocumentStructure[] => state.robotsStore.robots
  );

  return (
    <AppStyle className="container">
      <h1 className="title">¡Your Robots!</h1>
      <LoginForm />
      <RobotList robots={robots} />
    </AppStyle>
  );
};

export default App;
