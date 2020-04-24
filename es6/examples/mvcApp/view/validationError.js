"use strict";

import { Element } from "easy";

import { TIMEOUT_DELAY } from "../../../constants";

export default class ValidationError extends Element {
  constructor(selector) {
    super(selector);

    this.timeout = null;
  }

  clearValidationError() {
    const html = "";

    this.html(html);
  }

  showValidationError(validationError) {
    const html = validationError; ///

    this.html(html);

    if (this.timeout !== null) {
      clearTimeout(this.timeout);
    }

    this.timeout = setTimeout(() => {
      this.timemout = null;

      this.clearValidationError();
    }, TIMEOUT_DELAY);
  }

  parentContext() {
    return ({
      showValidationError: this.showValidationError.bind(this)
    });
  }

  static tagName = "p";

  static defaultProperties = {
    className: "validation error"
  };

  static fromProperties(properties) { return Element.fromProperties(ValidationError, properties); }
}
