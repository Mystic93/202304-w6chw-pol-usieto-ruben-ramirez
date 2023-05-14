import { screen } from "@testing-library/dom";
import RobotList from "./RobotList";
import { render } from "@testing-library/react";
import { robotsMock } from "../../mocks/mocks";

describe("Given RobotList component", () => {
  describe("When it receives a list with r2d2,joseluis and ignacio", () => {
    test("Then it shoul show r2d2, joseluis and ignacio cards", () => {});
    const r2d2Name = "r2d2";
    const joseluisName = "joseluis";
    const ignacioName = "ignacio";

    render(<RobotList robots={robotsMock} />);

    const r2d2 = screen.getByRole("heading", {
      name: r2d2Name,
    });
    const joseluis = screen.getByRole("heading", {
      name: joseluisName,
    });
    const ignacio = screen.getByRole("heading", {
      name: ignacioName,
    });

    expect(r2d2).toBeInTheDocument();
    expect(joseluis).toBeInTheDocument();
    expect(ignacio).toBeInTheDocument();
  });
});
