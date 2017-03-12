'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easyui = require('easyui'),
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

      var element = null;

      if (firstArgument !== undefined) {
        properties = makePropertiesNonNull(properties); ///

        if (false) {} else if (typeof firstArgument === 'string') {
          var tagName = firstArgument;

          element = elementFromTagNameAndProperties(tagName, properties);
        } else if (isTypeOf(firstArgument, Element)) {
          var Class = firstArgument; ///

          element = Class.fromProperties(properties);
        } else if (firstArgument.prototype.render) {
          var _Class = firstArgument,
              ///
          instance = new _Class(properties);

          element = instance.render();
        } else if (typeof firstArgument === 'function') {
          var elementFunction = firstArgument;

          element = elementFunction(properties);
        }
      }

      if (element !== null) {
        childElements = flattenChildElements(childElements);

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

  applyElementProperties(element, properties);

  return element;
}

function applyElementProperties(element, properties) {
  var names = Object.keys(properties);

  names.forEach(function (name) {
    var value = properties[name];

    if (isHandlerName(name)) {
      var eventType = eventTypeFromName(name),
          handler = value; ///

      element.on(eventType, handler);
    } else {
      addElementAttributes(element, name, value);
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

  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
    var keys = Object.keys(value);

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
  var typeOf = false;

  if (argument === Class) {
    ///
    typeOf = true;
  } else {
    argument = Object.getPrototypeOf(argument); ///

    if (argument) {
      typeOf = isTypeOf(argument, Class);
    }
  }

  return typeOf;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9yZWFjdC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiRWxlbWVudCIsImVhc3l1aSIsIlJlYWN0IiwiZmlyc3RBcmd1bWVudCIsInByb3BlcnRpZXMiLCJjaGlsZEVsZW1lbnRzIiwiZWxlbWVudCIsInVuZGVmaW5lZCIsIm1ha2VQcm9wZXJ0aWVzTm9uTnVsbCIsInRhZ05hbWUiLCJlbGVtZW50RnJvbVRhZ05hbWVBbmRQcm9wZXJ0aWVzIiwiaXNUeXBlT2YiLCJDbGFzcyIsImZyb21Qcm9wZXJ0aWVzIiwicHJvdG90eXBlIiwicmVuZGVyIiwiaW5zdGFuY2UiLCJlbGVtZW50RnVuY3Rpb24iLCJmbGF0dGVuQ2hpbGRFbGVtZW50cyIsImZvckVhY2giLCJjaGlsZEVsZW1lbnQiLCJhcHBlbmQiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIndpbmRvdyIsImdldCIsIm1vZHVsZSIsImV4cG9ydHMiLCJhc3NpZ24iLCJyZWR1Y2UiLCJjb25jYXQiLCJodG1sIiwiZnJvbUhUTUwiLCJhcHBseUVsZW1lbnRQcm9wZXJ0aWVzIiwibmFtZXMiLCJrZXlzIiwibmFtZSIsInZhbHVlIiwiaXNIYW5kbGVyTmFtZSIsImV2ZW50VHlwZSIsImV2ZW50VHlwZUZyb21OYW1lIiwiaGFuZGxlciIsIm9uIiwiYWRkRWxlbWVudEF0dHJpYnV0ZXMiLCJrZXkiLCJkb21FbGVtZW50IiwiYmluZCIsImFkZEF0dHJpYnV0ZSIsIm1hdGNoIiwic3Vic3RyIiwidG9Mb3dlckNhc2UiLCJhcmd1bWVudCIsInR5cGVPZiIsImdldFByb3RvdHlwZU9mIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFTSxhQUFTQSxRQUFRLFFBQVIsQ0FBVDtBQUFBLElBQ0VDLE9BREYsR0FDY0MsTUFEZCxDQUNFRCxPQURGOztJQUdBRSxLOzs7Ozs7O2tDQUNpQkMsYSxFQUFlQyxVLEVBQThCO0FBQUEsd0NBQWZDLGFBQWU7QUFBZkEscUJBQWU7QUFBQTs7QUFDaEUsVUFBSUMsVUFB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QVN2QyxRQUFULENBQWtCd0MsUUFBbEIsRUFBNEJ2QyxLQUE1QixFQUFtQztBQUNqQyxNQUFJd0MsU0FBUyxLQUFiOztBQUVBLE1BQUlELGFBQWF2QyxLQUFqQixFQUF3QjtBQUFFO0FBQ3hCd0MsYUFBUyxJQUFUO0FBQ0QsR0FGRCxNQUVPO0FBQ0xELGVBQVc3QixPQUFPK0IsY0FBUCxDQUFzQkYsUUFBdEIsQ0FBWCxDQURLLENBQ3VDOztBQUU1QyxRQUFJQSxRQUFKLEVBQWM7QUFDWkMsZUFBU3pDLFNBQVN3QyxRQUFULEVBQW1CdkMsS0FBbkIsQ0FBVDtBQUNEO0FBQ0Y7O0FBRUQsU0FBT3dDLE1BQVA7QUFDRCIsImZpbGUiOiJyZWFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeXVpID0gcmVxdWlyZSgnZWFzeXVpJyksXG4gICAgICB7IEVsZW1lbnQgfSA9IGVhc3l1aTtcblxuY2xhc3MgUmVhY3Qge1xuICBzdGF0aWMgY3JlYXRlRWxlbWVudChmaXJzdEFyZ3VtZW50LCBwcm9wZXJ0aWVzLCAuLi5jaGlsZEVsZW1lbnRzKSB7XG4gICAgbGV0IGVsZW1lbnQgPSBudWxsO1xuXG4gICAgaWYgKGZpcnN0QXJndW1lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcHJvcGVydGllcyA9IG1ha2VQcm9wZXJ0aWVzTm9uTnVsbChwcm9wZXJ0aWVzKTsgLy8vXG5cbiAgICAgIGlmIChmYWxzZSkge1xuXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICBjb25zdCB0YWdOYW1lID0gZmlyc3RBcmd1bWVudDtcblxuICAgICAgICBlbGVtZW50ID0gZWxlbWVudEZyb21UYWdOYW1lQW5kUHJvcGVydGllcyh0YWdOYW1lLCBwcm9wZXJ0aWVzKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNUeXBlT2YoZmlyc3RBcmd1bWVudCwgRWxlbWVudCkpIHtcbiAgICAgICAgY29uc3QgQ2xhc3MgPSBmaXJzdEFyZ3VtZW50OyAgLy8vXG5cbiAgICAgICAgZWxlbWVudCA9IENsYXNzLmZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpO1xuICAgICAgfSBlbHNlIGlmIChmaXJzdEFyZ3VtZW50LnByb3RvdHlwZS5yZW5kZXIpIHtcbiAgICAgICAgY29uc3QgQ2xhc3MgPSBmaXJzdEFyZ3VtZW50LCAgLy8vXG4gICAgICAgICAgICAgIGluc3RhbmNlID0gbmV3IENsYXNzKHByb3BlcnRpZXMpO1xuXG4gICAgICAgIGVsZW1lbnQgPSBpbnN0YW5jZS5yZW5kZXIoKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudEZ1bmN0aW9uID0gZmlyc3RBcmd1bWVudDtcblxuICAgICAgICBlbGVtZW50ID0gZWxlbWVudEZ1bmN0aW9uKHByb3BlcnRpZXMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChlbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjaGlsZEVsZW1lbnRzID0gZmxhdHRlbkNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cyk7XG5cbiAgICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihjaGlsZEVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5hcHBlbmQoY2hpbGRFbGVtZW50KTtcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdywgJ1JlYWN0Jywge1xuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBSZWFjdDtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cbmZ1bmN0aW9uIG1ha2VQcm9wZXJ0aWVzTm9uTnVsbChwcm9wZXJ0aWVzKSB7XG4gIHByb3BlcnRpZXMgPSBPYmplY3QuYXNzaWduKHt9LCBwcm9wZXJ0aWVzKTsgLy8vXG5cbiAgcmV0dXJuIHByb3BlcnRpZXM7XG59XG5cbmZ1bmN0aW9uIGZsYXR0ZW5DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpIHtcbiAgY2hpbGRFbGVtZW50cyA9IGNoaWxkRWxlbWVudHMucmVkdWNlKGZ1bmN0aW9uKGNoaWxkRWxlbWVudHMsIGNoaWxkRWxlbWVudCkgeyAgLy8vXG4gICAgY2hpbGRFbGVtZW50cyA9IGNoaWxkRWxlbWVudHMuY29uY2F0KGNoaWxkRWxlbWVudCk7XG5cbiAgICByZXR1cm4gY2hpbGRFbGVtZW50cztcbiAgfSwgW10pO1xuXG4gIHJldHVybiBjaGlsZEVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiBlbGVtZW50RnJvbVRhZ05hbWVBbmRQcm9wZXJ0aWVzKHRhZ05hbWUsIHByb3BlcnRpZXMpIHtcbiAgY29uc3QgaHRtbCA9IGA8JHt0YWdOYW1lfT48LyR7dGFnTmFtZX0+YCxcbiAgICAgICAgZWxlbWVudCA9IEVsZW1lbnQuZnJvbUhUTUwoaHRtbCk7XG5cbiAgYXBwbHlFbGVtZW50UHJvcGVydGllcyhlbGVtZW50LCBwcm9wZXJ0aWVzKTtcblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gYXBwbHlFbGVtZW50UHJvcGVydGllcyhlbGVtZW50LCBwcm9wZXJ0aWVzKSB7XG4gIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXMocHJvcGVydGllcyk7XG5cbiAgbmFtZXMuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgY29uc3QgdmFsdWUgPSBwcm9wZXJ0aWVzW25hbWVdO1xuXG4gICAgaWYgKGlzSGFuZGxlck5hbWUobmFtZSkpIHtcbiAgICAgIGNvbnN0IGV2ZW50VHlwZSA9IGV2ZW50VHlwZUZyb21OYW1lKG5hbWUpLFxuICAgICAgICAgICAgaGFuZGxlciA9IHZhbHVlOyAgLy8vXG5cbiAgICAgIGVsZW1lbnQub24oZXZlbnRUeXBlLCBoYW5kbGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkRWxlbWVudEF0dHJpYnV0ZXMoZWxlbWVudCwgbmFtZSwgdmFsdWUpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRBdHRyaWJ1dGVzKGVsZW1lbnQsIG5hbWUsIHZhbHVlKSB7XG4gIGlmIChuYW1lID09PSAnY2xhc3NOYW1lJykge1xuICAgIG5hbWUgPSAnY2xhc3MnO1xuICB9XG5cbiAgaWYgKG5hbWUgPT09ICdodG1sRm9yJykge1xuICAgIG5hbWUgPSAnZm9yJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcblxuICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBlbGVtZW50LmRvbUVsZW1lbnRbbmFtZV1ba2V5XSA9IHZhbHVlW2tleV07XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJykge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdmFsdWUgPSBuYW1lOyAvLy9cblxuICAgICAgZWxlbWVudC5hZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50LmFkZEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNIYW5kbGVyTmFtZShuYW1lKSB7XG4gIHJldHVybiBuYW1lLm1hdGNoKC9eb24vKTtcbn1cblxuZnVuY3Rpb24gZXZlbnRUeXBlRnJvbU5hbWUobmFtZSkge1xuICByZXR1cm4gbmFtZS5zdWJzdHIoMikudG9Mb3dlckNhc2UoKTtcbn1cblxuZnVuY3Rpb24gaXNUeXBlT2YoYXJndW1lbnQsIENsYXNzKSB7XG4gIGxldCB0eXBlT2YgPSBmYWxzZTtcblxuICBpZiAoYXJndW1lbnQgPT09IENsYXNzKSB7IC8vL1xuICAgIHR5cGVPZiA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgYXJndW1lbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoYXJndW1lbnQpOyAvLy9cblxuICAgIGlmIChhcmd1bWVudCkge1xuICAgICAgdHlwZU9mID0gaXNUeXBlT2YoYXJndW1lbnQsIENsYXNzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHlwZU9mO1xufVxuIl19