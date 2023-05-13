import { useEffect } from "react";
import useApi from "../../hooks/useApi";
import { useAppDispatch } from "../../store";
import { loadRobotsActionCreator } from "../../store/robots/robotsSlice";
import AppStyle from "./AppStyle";

const App = (): JSX.Element => {
  const { loadRobots } = useApi();

  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const initialRobots = await loadRobots();

      dispatch(loadRobotsActionCreator(initialRobots));
    })();
  }, [dispatch, loadRobots]);

  return (
    <AppStyle className="container">
      <h1 className="title">¡Your Robots!</h1>
    </AppStyle>
  );
};

export default App;
