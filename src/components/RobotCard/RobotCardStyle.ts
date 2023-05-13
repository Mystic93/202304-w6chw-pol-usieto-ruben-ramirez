import styled from "styled-components";

const RobotCardStyled = styled.article`
  background-color: orange;
  color: black;
  margin: 20px;
  padding: 20px;
  border-radius: 5px;
  gap: 10px;

  .robotcard-header {
    display: flex;
    align-items: center;
    padding-bottom: 5px;
    justify-content: space-between;

    &__title {
      font-family: inherit;
      font-weight: 700;
      font-size: 13px;
    }
  }

  .robotcard-header__button {
    border-radius: 50%;
    color: red;
  }

  .robotcard-info {
    display: grid;
  }
  .robotcard-info__id {
    margin: 5px;
  }

  .robotcard-info__creationdate {
    margin-bottom: 5px;
  }
  .robotcard-info__resistance {
    margin-bottom: 5px;
  }
  .robotcard-info__image {
    align-self: center;
    height: auto;
  }
`;

export default RobotCardStyled;
