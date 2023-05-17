import { useState } from "react";
import LoginFormStyled from "./LoginFormStyle";

interface LoginFormProps {
  submitForm: (userState: UserCredentials) => void;
}

interface UserCredentials {
  username: string;
  password: string;
}

const LoginForm = ({ submitForm }: LoginFormProps): JSX.Element => {
  const initialUserCredentials: UserCredentials = {
    username: "",
    password: "",
  };

  const [userState, setUserCredentials] = useState<UserCredentials>({
    username: "",
    password: "",
  });

  const isReady = userState.username !== "" && userState.password !== "";

  const onChangeUserData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserCredentials({
      ...userState,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    submitForm(userState);
    setUserCredentials(initialUserCredentials);
  };

  return (
    <LoginFormStyled>
      <label className="loginform-label" htmlFor="username">
        {" "}
        Username:
      </label>
      <input
        type="text"
        className="loginform-input"
        id="username"
        onChange={onChangeUserData}
      />
      <label className="loginform-label" htmlFor="password">
        {" "}
        Password:
      </label>
      <input
        type="password"
        className="loginform-input"
        id="password"
        onChange={onChangeUserData}
      />
      <button type="submit" onClick={() => handleSubmit} disabled={!isReady}>
        Login
      </button>
    </LoginFormStyled>
  );
};

export default LoginForm;
