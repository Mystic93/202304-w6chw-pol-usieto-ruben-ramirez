import { screen } from "@testing-library/dom";
import { robotsMock } from "../../mocks/mocks";
import RobotCard from "./RobotCard";
import { render } from "@testing-library/react";

describe("Given a RobotCard Component", () => {
  describe("When it receives a robot named r2d2", () => {
    test("Then it shoul show a heading with the name: r2d2", () => {
      const robot = robotsMock[0];
      const expectedName = "r2d2";

      render(<RobotCard robotData={robot} />);

      const text = screen.getByText(expectedName);

      expect(text).toBeInTheDocument();
    });
  });
});
