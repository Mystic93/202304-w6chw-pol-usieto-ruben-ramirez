import { RobotsDocumentStructure } from "../../types";
import RobotCard from "../RobotCard/RobotCard";
import RobotListStyled from "./RobotListStyle";

interface RobotListProps {
  robots: RobotsDocumentStructure[];
}

const RobotList = ({ robots }: RobotListProps) => {
  return (
    <RobotListStyled>
      {robots.map((robot) => (
        <li key={robot._id}>
          <RobotCard robotData={robot} />
        </li>
      ))}
    </RobotListStyled>
  );
};

export default RobotList;
