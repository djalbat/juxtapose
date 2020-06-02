"use strict";

import "../index";  ///

import { Body } from "easy";

import View from "./mvcApp/view";
import Model from "./mvcApp/model";
import controller from "./mvcApp/controller";
import createMethods from "./mvcApp/controller/createMethods";

export default function mvcApp() {
  const model = new Model(),
        view =

          <View />

        ;

  controller.assignMethods(createMethods, model, view);

  const body = new Body();

  body.prepend(view);
}
