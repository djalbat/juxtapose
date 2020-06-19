"use strict";

import "../index";  ///

import { Body } from "easy";

import View from "./mvcApp/view";
import Model from "./mvcApp/model";
import controller from "./mvcApp/controller";

export default function mvcApp() {
  const model = new Model(),
        view =

          <View />

        ;

  Object.assign(controller, {
    setPassword,
    resetPassword
  });

  const body = new Body();

  body.mount(view);

  function setPassword(password) {
    model.setPassword(password);

    view.showMessage("The password has been set.");
  }

  function resetPassword() {
    model.resetPassword();

    view.showMessage("The password has been reset.");
  }
}
