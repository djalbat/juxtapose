"use strict";

import { Element } from "easy";

import controller from "../../controller";

export default class ResetPasswordButton extends Element {
  clickHandler = (event, element) => {
    controller.resetPassword();
  }

  didMount() {
    this.onClick(this.clickHandler, this);
  }

  willMount() {
    this.offClick(this.clickHandler, this);
  }

  childElements() {
    return "Reset password";
  }

  static tagName = "button";

  static defaultProperties = {
    className: "reset-password"
  };
}
