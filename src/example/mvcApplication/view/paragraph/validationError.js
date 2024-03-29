"use strict";

import { Element } from "easy";

import { EMPTY_STRING, ERROR_DELAY } from "../../constants";

export default class ValidationErrorParagraph extends Element {
  constructor(selector, timeout) {
    super(selector);

    this.timeout = timeout;
  }

  clearValidationError() {
    const html = EMPTY_STRING;

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
    }, ERROR_DELAY);
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

  static fromClass(Class, properties, ...remainingArguments) {
    const timeout = null,
          validationErrorParagraph = Element.fromClass(Class, properties, timeout, ...remainingArguments);

    return validationErrorParagraph;
  }
}
