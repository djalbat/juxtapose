"use strict";

export default class Model {
  constructor() {
    this.password = null;
  }

  setPassword(password) {
    this.password = password;
  }

  resetPassword() {
    this.password = null;
  }
}
