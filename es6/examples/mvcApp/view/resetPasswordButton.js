"use strict";

import { Element } from "easy";

import controller from "../controller";

export default class ResetPasswordButton extends Element {
  clickHandler() {
    controller.resetPassword();
  }

  childElements() {
    return "Reset password";
  }

  initialise() {
    this.onClick(this.clickHandler);
  }

  static tagName = "button";

  static defaultProperties = {
    className: "resetPassword"
  };

  static fromClass(Class, properties) {
    const resetPasswordButton = Element.fromClass(Class, properties);

    resetPasswordButton.initialise();

    return resetPasswordButton;
  }
}
