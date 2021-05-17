"use strict";

import { Element, Button } from "easy";

import controller from "../../controller";
import PasswordInput from "../input/password";
import ValidationErrorParagraph from "../paragraph/validationError";

export default class PasswordForm extends Element {
  validateAndSubmitForm() {
    const passwordValid = this.validateForm();

    if (!passwordValid) {
      this.showValidationError("The password is invalid");
    } else {
      this.submitForm();
    }
  }

  validateForm() {
    const password = this.getPassword(),
          passwordValid = isPasswordValid(password);

    return passwordValid;
  }

  submitForm() {
    const password = this.getPassword();

    controller.setPassword(password);

    this.clearPassword();
  }

  childElements() {
    return([

      <PasswordInput />,
      <ValidationErrorParagraph />,
      <Button className="submit"
              onClick={(event, element) => {

                event.preventDefault();

                this.validateAndSubmitForm();

              }}
      >
        Submit
      </Button>

    ]);
  }

  initialise() {
    this.assignContext();
  }

  static tagName = "form";

  static defaultProperties = {
    className: "password"
  };
}

function isPasswordValid(password) {
  const passwordValid = (password !== "");  ///

  return passwordValid;
}
