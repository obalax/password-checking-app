export type verifyEmailAddressResult = {
  valid: boolean;
  message: string;
};

// http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
export const emailAddressRegExp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

export const verifyEmailAddress = (value: string): verifyEmailAddressResult => {
  if (value === "" || emailAddressRegExp.test(value)) {
    return { valid: true, message: "" };
  }
  return {
    valid: false,
    message: "Email address is not valid",
  };
};
