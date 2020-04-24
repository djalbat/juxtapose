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

  initialise() {
    this.assignContext();
  }

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };

  static fromProperties(properties) {
    const view = Element.fromProperties(View, properties);

    view.initialise();

    return view;
  }
}
