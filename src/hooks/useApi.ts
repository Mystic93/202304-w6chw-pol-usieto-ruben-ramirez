import { useCallback } from "react";
import axios from "axios";
import { RobotStateStructure } from "../store/robots/types";

const apiUrl = import.meta.env.VITE_API_URL;

const useApi = () => {
  const loadRobots = useCallback(async (): Promise<RobotStateStructure> => {
    const { data: robots } = await axios.get(`${apiUrl}robots`);

    return robots;
  }, []);

  return { loadRobots };
};

export default useApi;
