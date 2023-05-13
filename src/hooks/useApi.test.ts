import { robotsMock } from "../mocks/mocks";
import useApi from "./useApi";
import { renderHook } from "@testing-library/react";

describe("Given the useApi function", () => {
  describe("When loadRobots function is invoked ", () => {
    test("Then it shoul return a list of robots", async () => {
      const {
        result: {
          current: { loadRobots },
        },
      } = renderHook(() => useApi());
      const robots = await loadRobots();

      expect(robots).toStrictEqual(robotsMock);
    });
  });
});
