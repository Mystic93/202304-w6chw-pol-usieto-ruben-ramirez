import { RobotsDocumentStructure } from "../../types";
import RobotCardStyled from "./RobotCardStyle";

interface RobotCardProps {
  robotData: RobotsDocumentStructure;
}

const RobotCard = ({
  robotData: { creationDate, img, name, resistance, speed },
}: RobotCardProps): JSX.Element => {
  return (
    <RobotCardStyled>
      <header className="robotcard-header">
        <h2 className="robotcard-header__title">{name}</h2>
        <button className="robotcard-header__button">Delete</button>
      </header>
      <div className="robotcard-info">
        <img className="robotcard-info__image" src={img} alt="robot img" />
        <span className="robotcard-info__creationdate">{`Creation date: ${creationDate}`}</span>
        <span className="robotcard-info__resistance">{`Resistance: ${resistance}`}</span>
        <span className="robotcard-info__speed">{`Speed: ${speed}`}</span>
      </div>
    </RobotCardStyled>
  );
};

export default RobotCard;
