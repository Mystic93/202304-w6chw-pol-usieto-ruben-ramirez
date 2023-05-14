import styled from "styled-components";

const RobotCardStyled = styled.article`
  position: relative;
  padding: 20px;
  padding-top: 7px;
  border-radius: 20px;
  background-color: #ffa500;
  color: #000;
  width: 266px;

  .robotcard-header {
    display: flex;
    align-items: center;
    padding-bottom: 5px;
    justify-content: space-between;

    &__title {
      margin-block: 6px;
      width: 100%;
      font-size: 25px;
      text-align: center;
    }
  }

  .robotcard-info__image {
    width: 100%;
    border-radius: 20px;
    margin-bottom: 15px;
  }

  .robotcard-header__button {
    position: absolute;
    border-radius: 12px;
    padding: 7px 13px;
    background-color: rgb(127, 21, 21);
    font-size: 15px;
    color: rgb(255, 255, 255);
    border: 2px solid rgb(74, 1, 1);
    top: 407px;
    right: 13px;
    cursor: pointer;
  }

  .robotcard-info {
    display: grid;
    grid-gap: 10px;
    font-size: 18px;
  }
`;

export default RobotCardStyled;
