"use strict";

import { Element } from "easy";

import Message from "./view/message";
import PasswordForm from "./view/passwordForm";
import ResetPasswordButton from "./view/resetPasswordButton";

export default class View extends Element {
  childElements() {
    return([

      <PasswordForm />,
      <ResetPasswordButton />,
      <Message />

    ]);
  }

  initialise(properties) {
    this.assignContext();
  }

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };

  static fromClass(Class, properties) {
    const view = Element.fromClass(Class, properties);

    view.initialise(properties);

    return view;
  }
}
