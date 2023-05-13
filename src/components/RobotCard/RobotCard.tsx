import { RobotsDocumentStructure } from "../../types";

interface RobotCardProps {
  robotData: RobotsDocumentStructure;
}

const RobotCard = ({
  robotData: { _id, creationDate, img, name, resistance, speed },
}: RobotCardProps): JSX.Element => {
  return (
    <>
      <header className="robotcard-header">
        <h2 className="robotcard-header__title">{name}</h2>
      </header>
      <div className="robotcard-info">
        <img
          className="robotcard-info__image"
          src={img}
          alt="robot game card"
        />
        <span className="robotcard-info__id">{`id: ${_id}`}</span>
        <span className="robotcard-info__creationdate">{`creation date: ${creationDate}`}</span>
        <span className="robotcard-info__resistance">{`resistance: ${resistance}`}</span>
        <span className="robotcard-info__speed">{`speed: ${speed}`}</span>
      </div>
    </>
  );
};

export default RobotCard;
