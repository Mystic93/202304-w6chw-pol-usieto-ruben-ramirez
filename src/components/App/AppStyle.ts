import styled from "styled-components";

const AppStyle = styled.div`
  color: orange;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 10px;
  margin-top: 20px;

  @media (min-width: 550px) {
    font-size: 20px;
    margin-top: 48px;
  }
`;

export default AppStyle;
