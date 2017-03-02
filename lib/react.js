'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easyui = require('easyUI'),
    Element = easyui.Element;

var React = function () {
  function React() {
    _classCallCheck(this, React);
  }

  _createClass(React, null, [{
    key: 'createElement',
    value: function createElement(firstArgument, properties) {
      for (var _len = arguments.length, childElements = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        childElements[_key - 2] = arguments[_key];
      }

      properties = makePropertiesNonNull(properties); ///

      childElements = flattenChildElements(childElements); ///

      var element = null;

      if (firstArgument !== undefined) {
        var firstArgumentTagName = typeof firstArgument === 'string';

        if (firstArgumentTagName) {
          var tagName = firstArgument;

          element = elementFromTagNameAndProperties(tagName, properties);
        } else {
          var firstArgumentElement = isElement(firstArgument);

          if (firstArgumentElement) {
            var Class = firstArgument; ///

            element = Class.fromProperties(properties);
          } else {
            var _Class = firstArgument,
                ///
            instance = new _Class(properties);

            element = instance.render();
          }
        }
      }

      if (element !== null) {
        childElements.forEach(function (childElement) {
          element.append(childElement);
        });
      }

      return element;
    }
  }]);

  return React;
}();

Object.defineProperty(window, 'React', {
  get: function get() {
    return React;
  }
});

module.exports = React;

function makePropertiesNonNull(properties) {
  properties = Object.assign({}, properties); ///

  return properties;
}

function flattenChildElements(childElements) {
  childElements = childElements.reduce(function (childElements, childElement) {
    ///
    childElements = childElements.concat(childElement);

    return childElements;
  }, []);

  return childElements;
}

function elementFromTagNameAndProperties(tagName, properties) {
  var html = '<' + tagName + '></' + tagName + '>',
      element = Element.fromHTML(html);

  applyPropertiesToElement(properties, element);

  return element;
}

function applyPropertiesToElement(properties, element) {
  var propertyName = Object.keys(properties);

  propertyName.forEach(function (propertyName) {
    var propertyValue = properties[propertyName];

    if (false) {} else if (isPropertyNameHandlerName(propertyName)) {
      var event = eventFromPropertyName(propertyName),
          handler = propertyValue;

      element.on(event, handler);
    } else {
      var attributeName = propertyName,
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

  if (false) {} else if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
    var keys = Object.keys(value);

    keys.forEach(function (key) {
      var domElement = element.$element[0]; ///

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

function isElement(argument) {
  var element = false;

  if (argument === Element) {
    element = true;
  } else {
    argument = Object.getPrototypeOf(argument);

    if (argument) {
      element = isElement(argument);
    }
  }

  return element;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9yZWFjdC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiRWxlbWVudCIsImVhc3l1aSIsIlJlYWN0IiwiZmlyc3RBcmd1bWVudCIsInByb3BlcnRpZXMiLCJjaGlsZEVsZW1lbnRzIiwibWFrZVByb3BlcnRpZXNOb25OdWxsIiwiZmxhdHRlbkNoaWxkRWxlbWVudHMiLCJlbGVtZW50IiwidW5kZWZpbmVkIiwiZmlyc3RBcmd1bWVudFRhZ05hbWUiLCJ0YWdOYW1lIiwiZWxlbWVudEZyb21UYWdOYW1lQW5kUHJvcGVydGllcyIsImZpcnN0QXJndW1lbnRFbGVtZW50IiwiaXNFbGVtZW50IiwiQ2xhc3MiLCJmcm9tUHJvcGVydGllcyIsImluc3RhbmNlIiwicmVuZGVyIiwiZm9yRWFjaCIsImNoaWxkRWxlbWVudCIsImFwcGVuZCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Iiwid2luZG93IiwiZ2V0IiwibW9kdWxlIiwiZXhwb3J0cyIsImFzc2lnbiIsInJlZHVjZSIsImNvbmNhdCIsImh0bWwiLCJmcm9tSFRNTCIsImFwcGx5UHJvcGVydGllc1RvRWxlbWVudCIsInByb3BlcnR5TmFtZSIsImtleXMiLCJwcm9wZXJ0eVZhbHVlIiwiaXNQcm9wZXJ0eU5hbWVIYW5kbGVyTmFtZSIsImV2ZW50IiwiZXZlbnRGcm9tUHJvcGVydHlOYW1lIiwiaGFuZGxlciIsIm9uIiwiYXR0cmlidXRlTmFtZSIsImF0dHJpYnV0ZVZhbHVlIiwiYWRkQXR0cmlidXRlVG9FbGVtZW50IiwibmFtZSIsInZhbHVlIiwia2V5IiwiZG9tRWxlbWVudCIsIiRlbGVtZW50IiwiYmluZCIsImFkZEF0dHJpYnV0ZSIsInN1YnN0ciIsInRvTG93ZXJDYXNlIiwibWF0Y2giLCJhcmd1bWVudCIsImdldFByb3RvdHlwZU9mIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFTSxhQUFTQSxRQUFRLFFBQVIsQ0FBVDtBQUFBLElBQ0VDLE9BREYsR0FDY0MsTUFEZCxDQUNFRCxPQURG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QU9BLGFBQWFrQixNQUFiLENBQW9CLENBQXBCLEVBQXVCQyxXQUF2QixFQUFQO0FBQ0Q7O0FBRUQsU0FBU2hCLHlCQUFULENBQW1DSCxZQUFuQyxFQUFpRDtBQUMvQyxTQUFPQSxhQUFhb0IsS0FBYixDQUFtQixLQUFuQixDQUFQO0FBQ0Q7O0FBRUQsU0FBU3hDLFNBQVQsQ0FBbUJ5QyxRQUFuQixFQUE2QjtBQUMzQixNQUFJL0MsVUFBVSxLQUFkOztBQUVBLE1BQUkrQyxhQUFhdkQsT0FBakIsRUFBMEI7QUFDeEJRLGNBQVUsSUFBVjtBQUNELEdBRkQsTUFFTztBQUNMK0MsZUFBV2pDLE9BQU9rQyxjQUFQLENBQXNCRCxRQUF0QixDQUFYOztBQUVBLFFBQUlBLFFBQUosRUFBYztBQUNaL0MsZ0JBQVVNLFVBQVV5QyxRQUFWLENBQVY7QUFDRDtBQUNGOztBQUVELFNBQU8vQyxPQUFQO0FBQ0QiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3l1aSA9IHJlcXVpcmUoJ2Vhc3lVSScpLFxuICAgICAgeyBFbGVtZW50IH0gPSBlYXN5dWk7XG5cbmNsYXNzIFJlYWN0IHtcbiAgc3RhdGljIGNyZWF0ZUVsZW1lbnQoZmlyc3RBcmd1bWVudCwgcHJvcGVydGllcywgLi4uY2hpbGRFbGVtZW50cykge1xuICAgIHByb3BlcnRpZXMgPSBtYWtlUHJvcGVydGllc05vbk51bGwocHJvcGVydGllcyk7IC8vL1xuXG4gICAgY2hpbGRFbGVtZW50cyA9IGZsYXR0ZW5DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpOyAgLy8vXG5cbiAgICBsZXQgZWxlbWVudCA9IG51bGw7XG5cbiAgICBpZiAoZmlyc3RBcmd1bWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBmaXJzdEFyZ3VtZW50VGFnTmFtZSA9ICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gJ3N0cmluZycpO1xuXG4gICAgICBpZiAoZmlyc3RBcmd1bWVudFRhZ05hbWUpIHtcbiAgICAgICAgY29uc3QgdGFnTmFtZSA9IGZpcnN0QXJndW1lbnQ7XG5cbiAgICAgICAgZWxlbWVudCA9IGVsZW1lbnRGcm9tVGFnTmFtZUFuZFByb3BlcnRpZXModGFnTmFtZSwgcHJvcGVydGllcyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBmaXJzdEFyZ3VtZW50RWxlbWVudCA9IGlzRWxlbWVudChmaXJzdEFyZ3VtZW50KTtcblxuICAgICAgICBpZiAoZmlyc3RBcmd1bWVudEVsZW1lbnQpIHtcbiAgICAgICAgICBjb25zdCBDbGFzcyA9IGZpcnN0QXJndW1lbnQ7ICAvLy9cblxuICAgICAgICAgIGVsZW1lbnQgPSBDbGFzcy5mcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBDbGFzcyA9IGZpcnN0QXJndW1lbnQsICAvLy9cbiAgICAgICAgICAgICAgICBpbnN0YW5jZSA9IG5ldyBDbGFzcyhwcm9wZXJ0aWVzKTtcblxuICAgICAgICAgIGVsZW1lbnQgPSBpbnN0YW5jZS5yZW5kZXIoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChlbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oY2hpbGRFbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuYXBwZW5kKGNoaWxkRWxlbWVudCk7XG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3csICdSZWFjdCcsIHtcbiAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gUmVhY3Q7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuXG5mdW5jdGlvbiBtYWtlUHJvcGVydGllc05vbk51bGwocHJvcGVydGllcykge1xuICBwcm9wZXJ0aWVzID0gT2JqZWN0LmFzc2lnbih7fSwgcHJvcGVydGllcyk7IC8vL1xuXG4gIHJldHVybiBwcm9wZXJ0aWVzO1xufVxuXG5mdW5jdGlvbiBmbGF0dGVuQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKSB7XG4gIGNoaWxkRWxlbWVudHMgPSBjaGlsZEVsZW1lbnRzLnJlZHVjZShmdW5jdGlvbihjaGlsZEVsZW1lbnRzLCBjaGlsZEVsZW1lbnQpIHsgIC8vL1xuICAgIGNoaWxkRWxlbWVudHMgPSBjaGlsZEVsZW1lbnRzLmNvbmNhdChjaGlsZEVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gY2hpbGRFbGVtZW50cztcbn1cblxuZnVuY3Rpb24gZWxlbWVudEZyb21UYWdOYW1lQW5kUHJvcGVydGllcyh0YWdOYW1lLCBwcm9wZXJ0aWVzKSB7XG4gIGNvbnN0IGh0bWwgPSBgPCR7dGFnTmFtZX0+PC8ke3RhZ05hbWV9PmAsXG4gICAgICAgIGVsZW1lbnQgPSBFbGVtZW50LmZyb21IVE1MKGh0bWwpO1xuXG4gIGFwcGx5UHJvcGVydGllc1RvRWxlbWVudChwcm9wZXJ0aWVzLCBlbGVtZW50KTtcblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gYXBwbHlQcm9wZXJ0aWVzVG9FbGVtZW50KHByb3BlcnRpZXMsIGVsZW1lbnQpIHtcbiAgY29uc3QgcHJvcGVydHlOYW1lID0gT2JqZWN0LmtleXMocHJvcGVydGllcyk7XG5cbiAgcHJvcGVydHlOYW1lLmZvckVhY2goZnVuY3Rpb24ocHJvcGVydHlOYW1lKSB7XG4gICAgY29uc3QgcHJvcGVydHlWYWx1ZSA9IHByb3BlcnRpZXNbcHJvcGVydHlOYW1lXTtcblxuICAgIGlmIChmYWxzZSkge1xuXG4gICAgfSBlbHNlIGlmIChpc1Byb3BlcnR5TmFtZUhhbmRsZXJOYW1lKHByb3BlcnR5TmFtZSkpIHtcbiAgICAgIGNvbnN0IGV2ZW50ID0gZXZlbnRGcm9tUHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZSksXG4gICAgICAgICAgICBoYW5kbGVyID0gcHJvcGVydHlWYWx1ZTtcblxuICAgICAgZWxlbWVudC5vbihldmVudCwgaGFuZGxlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICBhdHRyaWJ1dGVWYWx1ZSA9IHByb3BlcnR5VmFsdWU7XG5cbiAgICAgIGFkZEF0dHJpYnV0ZVRvRWxlbWVudChhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVWYWx1ZSwgZWxlbWVudCk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkQXR0cmlidXRlVG9FbGVtZW50KG5hbWUsIHZhbHVlLCBlbGVtZW50KSB7XG4gIGlmIChuYW1lID09PSAnY2xhc3NOYW1lJykge1xuICAgIG5hbWUgPSAnY2xhc3MnO1xuICB9XG4gIGlmIChuYW1lID09PSAnaHRtbEZvcicpIHtcbiAgICBuYW1lID0gJ2Zvcic7XG4gIH1cblxuICBpZiAoZmFsc2UpIHtcblxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xuXG4gICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBlbGVtZW50LiRlbGVtZW50WzBdOyAvLy9cblxuICAgICAgZG9tRWxlbWVudFtuYW1lXVtrZXldID0gdmFsdWVba2V5XTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB2YWx1ZSA9IG5hbWU7IC8vL1xuXG4gICAgICBlbGVtZW50LmFkZEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGVsZW1lbnQuYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBldmVudEZyb21Qcm9wZXJ0eU5hbWUocHJvcGVydHlOYW1lKSB7XG4gIHJldHVybiBwcm9wZXJ0eU5hbWUuc3Vic3RyKDIpLnRvTG93ZXJDYXNlKCk7XG59XG5cbmZ1bmN0aW9uIGlzUHJvcGVydHlOYW1lSGFuZGxlck5hbWUocHJvcGVydHlOYW1lKSB7XG4gIHJldHVybiBwcm9wZXJ0eU5hbWUubWF0Y2goL15vbi8pO1xufVxuXG5mdW5jdGlvbiBpc0VsZW1lbnQoYXJndW1lbnQpIHtcbiAgbGV0IGVsZW1lbnQgPSBmYWxzZTtcblxuICBpZiAoYXJndW1lbnQgPT09IEVsZW1lbnQpIHtcbiAgICBlbGVtZW50ID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBhcmd1bWVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihhcmd1bWVudCk7XG5cbiAgICBpZiAoYXJndW1lbnQpIHtcbiAgICAgIGVsZW1lbnQgPSBpc0VsZW1lbnQoYXJndW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxuIl19