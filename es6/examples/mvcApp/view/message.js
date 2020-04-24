"use strict";

import { Element } from "easy";

export default class Message extends Element {
  showMessage(message) {
    const html = message; ///

    this.html(html);
  }

  parentContext() {
	  const showMessage = this.showMessage.bind(this);

    return ({
      showMessage
    });
  }

  static tagName = "p";

  static defaultProperties = {
    className: "message"
  };

  static fromProperties(properties) { return Element.fromProperties(Message, properties); }
}
