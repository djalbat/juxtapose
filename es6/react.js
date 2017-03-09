'use strict';

const easyui = require('easyUI'),
      { Element } = easyui;

class React {
  static createElement(firstArgument, properties, ...childElements) {
    properties = makePropertiesNonNull(properties); ///

    childElements = flattenChildElements(childElements);  ///

    let element = null;

    if (firstArgument !== undefined) {
      if (typeof firstArgument === 'string') {
        const tagName = firstArgument;

        element = elementFromTagNameAndProperties(tagName, properties);
      } else {
        if (isTypeOf(firstArgument, Element)) {
          const Class = firstArgument;  ///

          element = Class.fromProperties(properties);
        } else {
          const Class = firstArgument,  ///
                instance = new Class(properties);

          element = instance.render();
        }
      }
    }

    if (element !== null) {
      childElements.forEach(function(childElement) {
        childElement.appendTo(element);
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

function makePropertiesNonNull(properties) {
  properties = Object.assign({}, properties); ///

  return properties;
}

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

  applyPropertiesToElement(properties, element);

  return element;
}

function applyPropertiesToElement(properties, element) {
  const propertyName = Object.keys(properties);

  propertyName.forEach(function(propertyName) {
    const propertyValue = properties[propertyName];

    if (false) {

    } else if (isPropertyNameHandlerName(propertyName)) {
      const event = eventFromPropertyName(propertyName),
            handler = propertyValue;

      element.on(event, handler);
    } else {
      const attributeName = propertyName,
            attributeValue = propertyValue;

      addAttributeToElement(attributeName, attributeValue, element);
    }
  });
}

function addAttributeToElement(name, value, element) {
  if (name === 'className') {
    name = 'class';
  }
  if (name === 'htmlFor') {
    name = 'for';
  }

  if (false) {

  } else if (typeof value === 'object') {
    const keys = Object.keys(value);

    keys.forEach(function (key) {
      const domElement = element.$element[0]; ///

      domElement[name][key] = value[key];
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

function eventFromPropertyName(propertyName) {
  return propertyName.substr(2).toLowerCase();
}

function isPropertyNameHandlerName(propertyName) {
  return propertyName.match(/^on/);
}

function isTypeOf(argument, constructor) {
  let typeOf = false;

  if (argument === constructor) {
    typeOf = true;
  } else {
    argument = Object.getPrototypeOf(argument); ///

    if (argument) {
      typeOf = isTypeOf(argument, constructor);
    }
  }

  return typeOf;
}
