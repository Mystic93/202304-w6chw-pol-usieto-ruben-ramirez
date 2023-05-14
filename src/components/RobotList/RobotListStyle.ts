import styled from "styled-components";

const RobotListStyled = styled.ul`
  display: grid;
  grid: 1fr;
  row-gap: 50px;
  column-gap: 50px;
  padding-top: 50px;

  @media (min-width: 550px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default RobotListStyled;
