'use strict';

function createMethods(model, view) {
  function setPassword(password) {
    model.setPassword(password);

    view.showMessage(`The password has been set to '${password}'`);
  }

  function resetPassword() {
    model.resetPassword();

    view.showMessage(`The password has been reset`);
  }

  return ({
    setPassword: setPassword,
    resetPassword: resetPassword
  });
}

module.exports = createMethods;
