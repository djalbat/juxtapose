'use strict';

const easy = require('easy');

const { Element } = easy;

const TIMEOUT_DELAY = 1000;

class ValidationError extends Element {
  constructor(selector) {
    super(selector);

    this.timeout = null;
  }

  clearValidationError() {
    const html = '';

    this.html(html);
  }

  showValidationError(validationError) {
    const html = validationError; ///

    this.html(html);

    if (this.timeout !== null) {
      clearTimeout(this.timeout);
    }

    this.timeout = setTimeout(function() {
      this.timemout = null;

      this.clearValidationError();
    }.bind(this), TIMEOUT_DELAY);
  }

  parentContext() {
    return ({
      showValidationError: this.showValidationError.bind(this)
    });
  }

  static fromProperties(properties) { return Element.fromProperties(ValidationError, properties); }
}

Object.assign(ValidationError, {
  tagName: 'p',
  defaultProperties: {
    className: 'validation error'
  }
});

module.exports = ValidationError;
