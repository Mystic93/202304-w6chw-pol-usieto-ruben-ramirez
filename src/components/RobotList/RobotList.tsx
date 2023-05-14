import { RobotsDocumentStructure } from "../../types";
import RobotCard from "../RobotCard/RobotCard";

interface RobotListProps {
  robots: RobotsDocumentStructure[];
}

const RobotList = ({ robots }: RobotListProps) => {
  return (
    <>
      {robots.map((robot) => (
        <li key={robot._id}>
          <RobotCard robotData={robot} />
        </li>
      ))}
    </>
  );
};

export default RobotList;
