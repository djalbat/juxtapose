'use strict';

const easyui = require('easyUI'),
      Element = easyui.Element;

class React {
  static createElement(firstArgument, properties, ...childElements) {
    properties = Object.assign({}, properties); ///

    let element = null;

    if (firstArgument !== undefined) {
      const firstArgumentTagName = (typeof firstArgument === 'string');

      if (firstArgumentTagName) {
        const tagName = firstArgument;

        element = elementFromTagName(tagName);
      } else {
        const firstArgumentElement = isElement(firstArgument);

        if (firstArgumentElement) {
          const Class = firstArgument;  ///

          element = Class.fromProperties(properties);
        }
      }
    }

    if (element !== null) {
      childElements.forEach(function(childElement) {
        element.append(childElement);
      })
    }

    return element;
  }
}

Object.defineProperty(window, 'React', {
  get: function() {
    return React;
  }
});

module.exports = React;

function isElement(argument) {
  let element = false;

  if (argument === Element) {
    element = true;
  } else {
    const prototype = Object.getPrototypeOf(argument);

    if (prototype) {
      element = isElement(prototype);
    }
  }

  return element;
}

function elementFromTagName(tagName) {
  const html = `<${tagName}></${tagName}>`,
        element = Element.fromHTML(html);

  return element;
}
