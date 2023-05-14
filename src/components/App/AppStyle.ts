import styled from "styled-components";

const AppStyle = styled.div`
  color: orange;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 10px;
  margin-top: 20px;

  .title {
    font-size: 31px;
  }

  @media (min-width: 645px) {
    font-size: 20px;
    margin-top: 48px;

    .title {
      font-size: 50px;
    }

    .fODzDo {
      width: 239px;
    }
  }
`;

export default AppStyle;
