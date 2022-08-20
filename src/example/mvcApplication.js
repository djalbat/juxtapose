"use strict";

import "../index";  ///

import { Body } from "easy";

import View from "./mvcApplication/view";
import Model from "./mvcApplication/model";
import controller from "./mvcApplication/controller";

export default function mvcApplication() {
  const model = new Model(),
        view =

          <View/>

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
