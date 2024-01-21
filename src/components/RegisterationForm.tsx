import React, { useEffect, useState, FC, FormEvent } from "react";
import { verifyPassword } from "../lib/passwordVerification";

const RegisterationForm: FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");

  const [validPassword, setvalidPassword] = useState(false);
  const [match, setMatch] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setMatch( password === secondPassword);
  }, [password, secondPassword]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const checker = verifyPassword({
      inputPassword: password,
      passwordLength: 6,
      allowedSpecialCharacters: /[!@#$%^&*()_\-+={[}\]|:;"'<,>.]/,
    });

    setvalidPassword(checker.valid);
    setErrorMessage(checker.message);
    setMatch( password === secondPassword);
  };

  return (
    <div className="registeration-page">
      <form onSubmit={handleSubmit}>
        <h1 className="login-header">Register</h1>

        <div className="group-field">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>

        <div className="group-field">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <div className="group-field">
          <label>Repeat Password</label>
          <input
            type="password"
            value={secondPassword}
            onChange={(event) => setSecondPassword(event.target.value)}
          />
        </div>

        <div className="group-field">
          <div className="password-hint">
            <p>The password must contain</p>
            <ul>
              <li>Minimum length of 6</li>
              <li>Contain a upper case letter</li>
              <li>Contain a lower case letter</li>
              <li>Contain at least one digit or number</li>
              <li>
                Contain at least one special character !@#$%^&*()_-+={"{"}[{"}"}
                ]|:;{'"'}
                {"'"}
                {"<"}
                {","}
                {">"}.
              </li>
            </ul>
          </div>
        </div>

        {password && errorMessage && <p className="error">{errorMessage}</p>}
        {!match && <p className="error">Passwords do not match</p>}
        {password === secondPassword && validPassword && (
          <p className="success">You have successfully set your password</p>
        )}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterationForm;
