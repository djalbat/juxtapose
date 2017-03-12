'use strict';

const easyui = require('easyui'),
      { Element } = easyui;

class React {
  static createElement(firstArgument, properties, ...childElements) {
    let element = null;

    if (firstArgument !== undefined) {
      childElements = flattenChildElements(childElements);

      properties = Object.assign({
        childElements: childElements
      }, properties);

      if (false) {

      } else if (typeof firstArgument === 'string') {
        const tagName = firstArgument;

        element = elementFromTagNameAndProperties(tagName, properties);
      } else if (isTypeOf(firstArgument, Element)) {
        const Class = firstArgument;  ///

        element = Class.fromProperties(properties);
      } else if (firstArgument.prototype.render) {
        const Class = firstArgument,  ///
              instance = new Class(properties);

        element = instance.render();
      } else if (typeof firstArgument === 'function') {
        const elementFunction = firstArgument;

        element = elementFunction(properties);
      }
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

function flattenChildElements(childElements) {
  childElements = childElements.reduce(function(childElements, childElement) {  ///
    childElements = childElements.concat(childElement);

    return childElements;
  }, []);

  return childElements;
}

function elementFromTagNameAndProperties(tagName, properties) {
  const html = `<${tagName}></${tagName}>`,
        element = Element.fromHTML(html);

  applyElementProperties(element, properties);

  return element;
}

function applyElementProperties(element, properties) {
  const names = Object.keys(properties);

  names.forEach(function(name) {
    if (name === 'childElements') {
      const childElements = properties['childElements'];

      childElements.forEach(function(childElement) {
        element.append(childElement);
      });
    } else {
      const value = properties[name];

      if (isHandlerName(name)) {
        const eventType = eventTypeFromName(name),
            handler = value;  ///

        element.on(eventType, handler);
      } else {
        addElementAttributes(element, name, value);
      }
    }
  });
}

function addElementAttributes(element, name, value) {
  if (name === 'className') {
    name = 'class';
  }

  if (name === 'htmlFor') {
    name = 'for';
  }

  if (typeof value === 'object') {
    const keys = Object.keys(value);

    keys.forEach(function (key) {
      element.domElement[name][key] = value[key];
    }.bind(this));
  } else if (typeof value === 'boolean') {
    if (value) {
      value = name; ///

      element.addAttribute(name, value);
    }
  } else {
    element.addAttribute(name, value);
  }
}

function isHandlerName(name) {
  return name.match(/^on/);
}

function eventTypeFromName(name) {
  return name.substr(2).toLowerCase();
}

function isTypeOf(argument, Class) {
  let typeOf = false;

  if (argument === Class) { ///
    typeOf = true;
  } else {
    argument = Object.getPrototypeOf(argument); ///

    if (argument) {
      typeOf = isTypeOf(argument, Class);
    }
  }

  return typeOf;
}
