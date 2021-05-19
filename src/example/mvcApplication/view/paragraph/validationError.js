"use strict";

import { Element } from "easy";

import { EMPTY_STRING, TIMEOUT_DELAY } from "../../constants";

export default class ValidationErrorParagraph extends Element {
  constructor(selectorOrDomElement, timeout) {
    super(selectorOrDomElement);

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

  static fromClass(Class, properties) {
    const timeout = null,
          validationErrorParagraph = Element.fromClass(Class, properties, timeout);

    return validationErrorParagraph;
  }
}
