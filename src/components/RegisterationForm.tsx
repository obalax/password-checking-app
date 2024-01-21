import React, { useEffect, useState, FC, FormEvent } from "react";
import { verifyPassword } from "../lib/passwordVerification";

const RegisterationForm: FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    secondPassword: "",
  });
  const [validPassword, setvalidPassword] = useState(false);
  const [match, setMatch] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setMatch(formData.password === formData.secondPassword);
  }, [formData, setMatch]);

  const handleInputChange = (e: {
    target: { name: string; value: string };
  }) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const checker = verifyPassword({
      inputPassword: formData.password,
      passwordLength: 6,
      allowedSpecialCharacters: /[!@#$%^&*()_\-+={[}\]|:;"'<,>.]/,
    });

    setvalidPassword(checker.valid);
    setErrorMessage(checker.message);
  };

  return (
    <div className="registeration-page">
      <form onSubmit={handleSubmit}>
        <h1 className="login-header">Register</h1>

        <div className="group-field">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>

        <div className="group-field">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>

        <div className="group-field">
          <label>Repeat Password</label>
          <input
            type="password"
            name="secondPassword"
            value={formData.secondPassword}
            onChange={handleInputChange}
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

        {formData.password && errorMessage && (
          <p className="error">{errorMessage}</p>
        )}
        {!match && <p className="error">Passwords do not match</p>}
        {formData.password === formData.secondPassword && validPassword && (
          <p className="success">You have successfully set your password</p>
        )}

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterationForm;
