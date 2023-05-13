export interface RobotStructure {
  name: string;
  img: string;
  speed: number;
  resistance: number;
  creationDate: string;
}

export interface RobotsDocumentStructure extends RobotStructure {
  _id: string;
}
