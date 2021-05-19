"use strict";

import { InputElement } from "easy";

import { EMPTY_STRING } from "../../constants";

export default class PasswordInput extends InputElement {
  getPassword() {
    const value = this.getValue(),
          password = value; ///

    return password;
  }

  clearPassword() {
    const password = EMPTY_STRING,
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
}
