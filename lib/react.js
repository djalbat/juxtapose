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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9yZWFjdC5qcyJdLCJuYW1lcyI6WyJlYXN5dWkiLCJyZXF1aXJlIiwiRWxlbWVudCIsIlJlYWN0IiwiZmlyc3RBcmd1bWVudCIsInByb3BlcnRpZXMiLCJjaGlsZEVsZW1lbnRzIiwibWFrZVByb3BlcnRpZXNOb25OdWxsIiwiZmxhdHRlbkNoaWxkRWxlbWVudHMiLCJlbGVtZW50IiwidW5kZWZpbmVkIiwiZmlyc3RBcmd1bWVudFRhZ05hbWUiLCJ0YWdOYW1lIiwiZWxlbWVudEZyb21UYWdOYW1lQW5kUHJvcGVydGllcyIsImZpcnN0QXJndW1lbnRFbGVtZW50IiwiaXNFbGVtZW50IiwiQ2xhc3MiLCJmcm9tUHJvcGVydGllcyIsImluc3RhbmNlIiwicmVuZGVyIiwiZm9yRWFjaCIsImNoaWxkRWxlbWVudCIsImFwcGVuZCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Iiwid2luZG93IiwiZ2V0IiwibW9kdWxlIiwiZXhwb3J0cyIsImFzc2lnbiIsInJlZHVjZSIsImNvbmNhdCIsImh0bWwiLCJmcm9tSFRNTCIsImFwcGx5UHJvcGVydGllc1RvRWxlbWVudCIsInByb3BlcnR5TmFtZSIsImtleXMiLCJwcm9wZXJ0eVZhbHVlIiwiaXNQcm9wZXJ0eU5hbWVIYW5kbGVyTmFtZSIsImV2ZW50IiwiZXZlbnRGcm9tUHJvcGVydHlOYW1lIiwiaGFuZGxlciIsIm9uIiwiYXR0cmlidXRlTmFtZSIsImF0dHJpYnV0ZVZhbHVlIiwiYWRkQXR0cmlidXRlVG9FbGVtZW50IiwibmFtZSIsInZhbHVlIiwia2V5IiwiZG9tRWxlbWVudCIsIiRlbGVtZW50IiwiYmluZCIsImFkZEF0dHJpYnV0ZSIsInN1YnN0ciIsInRvTG93ZXJDYXNlIiwibWF0Y2giLCJhcmd1bWVudCIsImdldFByb3RvdHlwZU9mIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLFFBQVIsQ0FBZjtBQUFBLElBQ01DLFVBQVVGLE9BQU9FLE9BRHZCOztJ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LGFBQWFrQixNQUFiLENBQW9CLENBQXBCLEVBQXVCQyxXQUF2QixFQUFQO0FBQ0Q7O0FBRUQsU0FBU2hCLHlCQUFULENBQW1DSCxZQUFuQyxFQUFpRDtBQUMvQyxTQUFPQSxhQUFhb0IsS0FBYixDQUFtQixLQUFuQixDQUFQO0FBQ0Q7O0FBRUQsU0FBU3hDLFNBQVQsQ0FBbUJ5QyxRQUFuQixFQUE2QjtBQUMzQixNQUFJL0MsVUFBVSxLQUFkOztBQUVBLE1BQUkrQyxhQUFhdEQsT0FBakIsRUFBMEI7QUFDeEJPLGNBQVUsSUFBVjtBQUNELEdBRkQsTUFFTztBQUNMK0MsZUFBV2pDLE9BQU9rQyxjQUFQLENBQXNCRCxRQUF0QixDQUFYOztBQUVBLFFBQUlBLFFBQUosRUFBYztBQUNaL0MsZ0JBQVVNLFVBQVV5QyxRQUFWLENBQVY7QUFDRDtBQUNGOztBQUVELFNBQU8vQyxPQUFQO0FBQ0QiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3l1aSA9IHJlcXVpcmUoJ2Vhc3lVSScpLFxuICAgICAgRWxlbWVudCA9IGVhc3l1aS5FbGVtZW50O1xuXG5jbGFzcyBSZWFjdCB7XG4gIHN0YXRpYyBjcmVhdGVFbGVtZW50KGZpcnN0QXJndW1lbnQsIHByb3BlcnRpZXMsIC4uLmNoaWxkRWxlbWVudHMpIHtcbiAgICBwcm9wZXJ0aWVzID0gbWFrZVByb3BlcnRpZXNOb25OdWxsKHByb3BlcnRpZXMpOyAvLy9cblxuICAgIGNoaWxkRWxlbWVudHMgPSBmbGF0dGVuQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKTsgIC8vL1xuXG4gICAgbGV0IGVsZW1lbnQgPSBudWxsO1xuXG4gICAgaWYgKGZpcnN0QXJndW1lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgZmlyc3RBcmd1bWVudFRhZ05hbWUgPSAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09ICdzdHJpbmcnKTtcblxuICAgICAgaWYgKGZpcnN0QXJndW1lbnRUYWdOYW1lKSB7XG4gICAgICAgIGNvbnN0IHRhZ05hbWUgPSBmaXJzdEFyZ3VtZW50O1xuXG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50RnJvbVRhZ05hbWVBbmRQcm9wZXJ0aWVzKHRhZ05hbWUsIHByb3BlcnRpZXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZmlyc3RBcmd1bWVudEVsZW1lbnQgPSBpc0VsZW1lbnQoZmlyc3RBcmd1bWVudCk7XG5cbiAgICAgICAgaWYgKGZpcnN0QXJndW1lbnRFbGVtZW50KSB7XG4gICAgICAgICAgY29uc3QgQ2xhc3MgPSBmaXJzdEFyZ3VtZW50OyAgLy8vXG5cbiAgICAgICAgICBlbGVtZW50ID0gQ2xhc3MuZnJvbVByb3BlcnRpZXMocHJvcGVydGllcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgQ2xhc3MgPSBmaXJzdEFyZ3VtZW50LCAgLy8vXG4gICAgICAgICAgICAgICAgaW5zdGFuY2UgPSBuZXcgQ2xhc3MocHJvcGVydGllcyk7XG5cbiAgICAgICAgICBlbGVtZW50ID0gaW5zdGFuY2UucmVuZGVyKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkRWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LmFwcGVuZChjaGlsZEVsZW1lbnQpO1xuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LCAnUmVhY3QnLCB7XG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFJlYWN0O1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcblxuZnVuY3Rpb24gbWFrZVByb3BlcnRpZXNOb25OdWxsKHByb3BlcnRpZXMpIHtcbiAgcHJvcGVydGllcyA9IE9iamVjdC5hc3NpZ24oe30sIHByb3BlcnRpZXMpOyAvLy9cblxuICByZXR1cm4gcHJvcGVydGllcztcbn1cblxuZnVuY3Rpb24gZmxhdHRlbkNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cykge1xuICBjaGlsZEVsZW1lbnRzID0gY2hpbGRFbGVtZW50cy5yZWR1Y2UoZnVuY3Rpb24oY2hpbGRFbGVtZW50cywgY2hpbGRFbGVtZW50KSB7ICAvLy9cbiAgICBjaGlsZEVsZW1lbnRzID0gY2hpbGRFbGVtZW50cy5jb25jYXQoY2hpbGRFbGVtZW50KTtcblxuICAgIHJldHVybiBjaGlsZEVsZW1lbnRzO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG59XG5cbmZ1bmN0aW9uIGVsZW1lbnRGcm9tVGFnTmFtZUFuZFByb3BlcnRpZXModGFnTmFtZSwgcHJvcGVydGllcykge1xuICBjb25zdCBodG1sID0gYDwke3RhZ05hbWV9PjwvJHt0YWdOYW1lfT5gLFxuICAgICAgICBlbGVtZW50ID0gRWxlbWVudC5mcm9tSFRNTChodG1sKTtcblxuICBhcHBseVByb3BlcnRpZXNUb0VsZW1lbnQocHJvcGVydGllcywgZWxlbWVudCk7XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGFwcGx5UHJvcGVydGllc1RvRWxlbWVudChwcm9wZXJ0aWVzLCBlbGVtZW50KSB7XG4gIGNvbnN0IHByb3BlcnR5TmFtZSA9IE9iamVjdC5rZXlzKHByb3BlcnRpZXMpO1xuXG4gIHByb3BlcnR5TmFtZS5mb3JFYWNoKGZ1bmN0aW9uKHByb3BlcnR5TmFtZSkge1xuICAgIGNvbnN0IHByb3BlcnR5VmFsdWUgPSBwcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV07XG5cbiAgICBpZiAoZmFsc2UpIHtcblxuICAgIH0gZWxzZSBpZiAoaXNQcm9wZXJ0eU5hbWVIYW5kbGVyTmFtZShwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICBjb25zdCBldmVudCA9IGV2ZW50RnJvbVByb3BlcnR5TmFtZShwcm9wZXJ0eU5hbWUpLFxuICAgICAgICAgICAgaGFuZGxlciA9IHByb3BlcnR5VmFsdWU7XG5cbiAgICAgIGVsZW1lbnQub24oZXZlbnQsIGhhbmRsZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgYXR0cmlidXRlVmFsdWUgPSBwcm9wZXJ0eVZhbHVlO1xuXG4gICAgICBhZGRBdHRyaWJ1dGVUb0VsZW1lbnQoYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlVmFsdWUsIGVsZW1lbnQpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJpYnV0ZVRvRWxlbWVudChuYW1lLCB2YWx1ZSwgZWxlbWVudCkge1xuICBpZiAobmFtZSA9PT0gJ2NsYXNzTmFtZScpIHtcbiAgICBuYW1lID0gJ2NsYXNzJztcbiAgfVxuICBpZiAobmFtZSA9PT0gJ2h0bWxGb3InKSB7XG4gICAgbmFtZSA9ICdmb3InO1xuICB9XG5cbiAgaWYgKGZhbHNlKSB7XG5cbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcblxuICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBjb25zdCBkb21FbGVtZW50ID0gZWxlbWVudC4kZWxlbWVudFswXTsgLy8vXG5cbiAgICAgIGRvbUVsZW1lbnRbbmFtZV1ba2V5XSA9IHZhbHVlW2tleV07XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJykge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdmFsdWUgPSBuYW1lOyAvLy9cblxuICAgICAgZWxlbWVudC5hZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50LmFkZEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZXZlbnRGcm9tUHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZSkge1xuICByZXR1cm4gcHJvcGVydHlOYW1lLnN1YnN0cigyKS50b0xvd2VyQ2FzZSgpO1xufVxuXG5mdW5jdGlvbiBpc1Byb3BlcnR5TmFtZUhhbmRsZXJOYW1lKHByb3BlcnR5TmFtZSkge1xuICByZXR1cm4gcHJvcGVydHlOYW1lLm1hdGNoKC9eb24vKTtcbn1cblxuZnVuY3Rpb24gaXNFbGVtZW50KGFyZ3VtZW50KSB7XG4gIGxldCBlbGVtZW50ID0gZmFsc2U7XG5cbiAgaWYgKGFyZ3VtZW50ID09PSBFbGVtZW50KSB7XG4gICAgZWxlbWVudCA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgYXJndW1lbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoYXJndW1lbnQpO1xuXG4gICAgaWYgKGFyZ3VtZW50KSB7XG4gICAgICBlbGVtZW50ID0gaXNFbGVtZW50KGFyZ3VtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cbiJdfQ==