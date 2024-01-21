export const isUpperCase = new RegExp(/(?=.*[A-Z])/g);
export const isLowerCase = new RegExp(/(?=.*[a-z])/g);
export const isNumeric = new RegExp(/(?=.*[0-9])/g);
export const isLengthValid = (num: number) =>
  new RegExp("(?=.{" + num + ",})", "g");

export type VerifyPasswordType = {
  inputPassword: string;
  passwordLength?: number;
  allowedSpecialCharacters?: any;
};

export const verifyPassword = ({
  inputPassword,
  passwordLength = 6,
  allowedSpecialCharacters = new RegExp(""),
}: VerifyPasswordType) => {
  if (inputPassword.match(isLengthValid(passwordLength))) {
    if (!inputPassword.match(isUpperCase)) {
      return { valid: false, message: "Upper case letter is missing" };
    }

    if (!inputPassword.match(isLowerCase)) {
      return { valid: false, message: "Lower case letter is missing" };
    }

    if (!inputPassword.match(isNumeric)) {
      return { valid: false, message: "Number digit is missing" };
    }

    if (!allowedSpecialCharacters.test(inputPassword)) {
      return { valid: false, message: "Special character is missing" };
    }

    return { valid: true, message: "" };
  }

  return { valid: false, message: "Password is too short" };
};
