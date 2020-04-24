"use strict";

import { InputElement } from "easy";

export default class PasswordInput extends InputElement {
  getPassword() {
    const value = this.getValue(),
          password = value; ///

    return password;
  }

  clearPassword() {
    const password = "",
          value = password; ///

    this.setValue(value);
  }

  parentContext() {
	  const getPassword = this.getPassword.bind(this),
				  clearPassword = this.clearPassword.bind(this);

    return ({
      getPassword,
      clearPassword
    });
  }

  static tagName = "input";

  static defaultProperties = {
    type: "password"
  };

  static fromProperties(properties) { return InputElement.fromProperties(PasswordInput, properties); }
}
