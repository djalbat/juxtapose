"use strict";

export default function createMethods(model, view) {
  function setPassword(password) {
    model.setPassword(password);

    view.showMessage("The password has been set.");
  }

  function resetPassword() {
    model.resetPassword();

    view.showMessage("The password has been reset.");
  }

  return ({
    setPassword,
    resetPassword
  });
}
