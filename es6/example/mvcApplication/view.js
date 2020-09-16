"use strict";

import { Element } from "easy";

import PasswordForm from "./view/form/password";
import MessageParagraph from "./view/paragraph/message";
import ResetPasswordButton from "./view/button/resetPassword";

export default class View extends Element {
  childElements() {
    return([

      <PasswordForm />,
      <ResetPasswordButton />,
      <MessageParagraph />

    ]);
  }

  initialise() {
    this.assignContext();
  }

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };

  static fromClass(Class, properties) {
    const view = Element.fromClass(Class, properties);

    view.initialise();

    return view;
  }
}
