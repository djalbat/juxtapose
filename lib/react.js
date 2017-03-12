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
        childElements = flattenChildElements(childElements);

        properties = Object.assign({
          childElements: childElements
        }, properties);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9yZWFjdC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiRWxlbWVudCIsImVhc3l1aSIsIlJlYWN0IiwiZmlyc3RBcmd1bWVudCIsInByb3BlcnRpZXMiLCJjaGlsZEVsZW1lbnRzIiwiZWxlbWVudCIsInVuZGVmaW5lZCIsImZsYXR0ZW5DaGlsZEVsZW1lbnRzIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsImVsZW1lbnRGcm9tVGFnTmFtZUFuZFByb3BlcnRpZXMiLCJpc1R5cGVPZiIsIkNsYXNzIiwiZnJvbVByb3BlcnRpZXMiLCJwcm90b3R5cGUiLCJyZW5kZXIiLCJpbnN0YW5jZSIsImVsZW1lbnRGdW5jdGlvbiIsImRlZmluZVByb3BlcnR5Iiwid2luZG93IiwiZ2V0IiwibW9kdWxlIiwiZXhwb3J0cyIsInJlZHVjZSIsImNoaWxkRWxlbWVudCIsImNvbmNhdCIsImh0bWwiLCJmcm9tSFRNTCIsImFwcGx5RWxlbWVudFByb3BlcnRpZXMiLCJuYW1lcyIsImtleXMiLCJmb3JFYWNoIiwibmFtZSIsInZhbHVlIiwiaXNIYW5kbGVyTmFtZSIsImV2ZW50VHlwZSIsImV2ZW50VHlwZUZyb21OYW1lIiwiaGFuZGxlciIsIm9uIiwiYWRkRWxlbWVudEF0dHJpYnV0ZXMiLCJrZXkiLCJkb21FbGVtZW50IiwiYmluZCIsImFkZEF0dHJpYnV0ZSIsIm1hdGNoIiwic3Vic3RyIiwidG9Mb3dlckNhc2UiLCJhcmd1bWVudCIsInR5cGVPZiIsImdldFByb3RvdHlwZU9mIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFTSxhQUFTQSxRQUFRLFFBQVIsQ0FBVDtBQUFBLElBQ0VDLE9BREYsR0FDY0MsTUFEZCxDQUNFRCxPQURGOztJQUdBRSxLOzs7Ozs7O2tDQUNpQkMsYSxFQUFlQyxVLEVBQThCO0FBQUEsd0NBQWZDLGFBQWU7QUFBZkEscUJBQWU7QUFBQTs7QUFDaEUsVUFBSUMsVUFBVSxJQUFkOztBQUVBLFVBQUlILGtCQUFrQkksU0FBdEIsRUFBaUM7QUFDL0JGLHdCQUFnQkcscUJBQXFCSCxhQUFyQixDQUFoQjs7QUFFQUQscUJBQWFLLE9BQU9DLE1BQVAsQ0FBYztBQUN6QkwseUJBQWVBO0FBRFUsU0FBZCxFQUVWRCxVQUZVLENBQWI7O0FBSUEsWUFBSSxLQUFKLEVBQVcsQ0FFVixDQUZELE1BRU8sSUFBSSxPQUFPRCxhQUFQLEtBQXlCLFFBQTdCLEVBQXVDO0FBQzVDLGNBQU1RLFVBQVVSLGFBQWhCOztBQUVBRyxvQkFBVU0sZ0NBQWdDRCxPQUFoQyxFQUF5Q1AsVUFBekMsQ0FBVjtBQUNELFNBSk0sTUFJQSxJQUFJUyxTQUFTVixhQUFULEVBQXdCSCxPQUF4QixDQUFKLEVBQXNDO0FBQzNDLGNBQU1jLFFBQVFYLGFBQWQsQ0FEMkMsQ0FDYjs7QUFFOUJHLG9CQUFVUSxNQUFNQyxjQUFOLENBQXFCWCxVQUFyQixDQUFWO0FBQ0QsU0FKTSxNQUlBLElBQUlELGNBQWNhLFNBQWQsQ0FBd0JDLE1BQTVCLEVBQW9DO0FBQ3pDLGNBQU1ILFNBQVFYLGFBQWQ7QUFBQSxjQUE4QjtBQUN4QmUscUJBQVcsSUFBSUosTUFBSixDQUFVVixVQUFWLENBRGpCOztBQUdBRSxvQkFBVVksU0FBU0QsTUFBVCxFQUFWO0FBQ0QsU0FMTSxNQUtBLElBQUksT0FBT2QsYUFBUCxLQUF5QixVQUE3QixFQUF5QztBQUM5QyxjQUFNZ0Isa0JBQWtCaEIsYUFBeEI7O0FBRUFHLG9CQUFVYSxnQkFBZ0JmLFVBQWhCLENBQVY7QUFDRDtBQUNGOztBQUVELGFBQU9FLE9BQVA7QUFDRDs7Ozs7O0FBR0hHLE9BQU9XLGNBQVAsQ0FBc0JDLE1BQXRCLEVBQThCLE9BQTlCLEVBQXVDO0FBQ3JDQyxPQUFLLGVBQVc7QUFDZCxXQUFPcEIsS0FBUDtBQUNEO0FBSG9DLENBQXZDOztBQU1BcUIsT0FBT0MsT0FBUCxHQUFpQnRCLEtBQWpCOztBQUVBLFNBQVNNLG9CQUFULENBQThCSCxhQUE5QixFQUE2QztBQUMzQ0Esa0JBQWdCQSxjQUFjb0IsTUFBZCxDQUFxQixVQUFTcEIsYUFBVCxFQUF3QnFCLFlBQXhCLEVBQXNDO0FBQUc7QUFDNUVyQixvQkFBZ0JBLGNBQWNzQixNQUFkLENBQXFCRCxZQUFyQixDQUFoQjs7QUFFQSxXQUFPckIsYUFBUDtBQUNELEdBSmUsRUFJYixFQUphLENBQWhCOztBQU1BLFNBQU9BLGFBQVA7QUFDRDs7QUFFRCxTQUFTTywrQkFBVCxDQUF5Q0QsT0FBekMsRUFBa0RQLFVBQWxELEVBQThEO0FBQzVELE1BQU13QixhQUFXakIsT0FBWCxXQUF3QkEsT0FBeEIsTUFBTjtBQUFBLE1BQ01MLFVBQVVOLFFBQVE2QixRQUFSLENBQWlCRCxJQUFqQixDQURoQjs7QUFHQUUseUJBQXVCeEIsT0FBdkIsRUFBZ0NGLFVBQWhDOztBQUVBLFNBQU9FLE9BQVA7QUFDRDs7QUFFRCxTQUFTd0Isc0JBQVQsQ0FBZ0N4QixPQUFoQyxFQUF5Q0YsVUFBekMsRUFBcUQ7QUFDbkQsTUFBTTJCLFFBQVF0QixPQUFPdUIsSUFBUCxDQUFZNUIsVUFBWixDQUFkOztBQUVBMkIsUUFBTUUsT0FBTixDQUFjLFVBQVNDLElBQVQsRUFBZTtBQUMzQixRQUFNQyxRQUFRL0IsV0FBVzhCLElBQVgsQ0FBZDs7QUFFQSxRQUFJRSxjQUFjRixJQUFkLENBQUosRUFBeUI7QUFDdkIsVUFBTUcsWUFBWUMsa0JBQWtCSixJQUFsQixDQUFsQjtBQUFBLFVBQ01LLFVBQVVKLEtBRGhCLENBRHVCLENBRUM7O0FBRXhCN0IsY0FBUWtDLEVBQVIsQ0FBV0gsU0FBWCxFQUFzQkUsT0FBdEI7QUFDRCxLQUxELE1BS087QUFDTEUsMkJBQXFCbkMsT0FBckIsRUFBOEI0QixJQUE5QixFQUFvQ0MsS0FBcEM7QUFDRDtBQUNGLEdBWEQ7QUFZRDs7QUFFRCxTQUFTTSxvQkFBVCxDQUE4Qm5DLE9BQTlCLEVBQXVDNEIsSUFBdkMsRUFBNkNDLEtBQTdDLEVBQW9EO0FBQ2xELE1BQUlELFNBQVMsV0FBYixFQUEwQjtBQUN4QkEsV0FBTyxPQUFQO0FBQ0Q7O0FBRUQsTUFBSUEsU0FBUyxTQUFiLEVBQXdCO0FBQ3RCQSxXQUFPLEtBQVA7QUFDRDs7QUFFRCxNQUFJLFFBQU9DLEtBQVAseUNBQU9BLEtBQVAsT0FBaUIsUUFBckIsRUFBK0I7QUFDN0IsUUFBTUgsT0FBT3ZCLE9BQU91QixJQUFQLENBQVlHLEtBQVosQ0FBYjs7QUFFQUgsU0FBS0MsT0FBTCxDQUFhLFVBQVVTLEdBQVYsRUFBZTtBQUMxQnBDLGNBQVFxQyxVQUFSLENBQW1CVCxJQUFuQixFQUF5QlEsR0FBekIsSUFBZ0NQLE1BQU1PLEdBQU4sQ0FBaEM7QUFDRCxLQUZZLENBRVhFLElBRlcsQ0FFTixJQUZNLENBQWI7QUFHRCxHQU5ELE1BTU8sSUFBSSxPQUFPVCxLQUFQLEtBQWlCLFNBQXJCLEVBQWdDO0FBQ3JDLFFBQUlBLEtBQUosRUFBVztBQUNUQSxjQUFRRCxJQUFSLENBRFMsQ0FDSzs7QUFFZDVCLGNBQVF1QyxZQUFSLENBQXFCWCxJQUFyQixFQUEyQkMsS0FBM0I7QUFDRDtBQUNGLEdBTk0sTUFNQTtBQUNMN0IsWUFBUXVDLFlBQVIsQ0FBcUJYLElBQXJCLEVBQTJCQyxLQUEzQjtBQUNEO0FBQ0Y7O0FBRUQsU0FBU0MsYUFBVCxDQUF1QkYsSUFBdkIsRUFBNkI7QUFDM0IsU0FBT0EsS0FBS1ksS0FBTCxDQUFXLEtBQVgsQ0FBUDtBQUNEOztBQUVELFNBQVNSLGlCQUFULENBQTJCSixJQUEzQixFQUFpQztBQUMvQixTQUFPQSxLQUFLYSxNQUFMLENBQVksQ0FBWixFQUFlQyxXQUFmLEVBQVA7QUFDRDs7QUFFRCxTQUFTbkMsUUFBVCxDQUFrQm9DLFFBQWxCLEVBQTRCbkMsS0FBNUIsRUFBbUM7QUFDakMsTUFBSW9DLFNBQVMsS0FBYjs7QUFFQSxNQUFJRCxhQUFhbkMsS0FBakIsRUFBd0I7QUFBRTtBQUN4Qm9DLGFBQVMsSUFBVDtBQUNELEdBRkQsTUFFTztBQUNMRCxlQUFXeEMsT0FBTzBDLGNBQVAsQ0FBc0JGLFFBQXRCLENBQVgsQ0FESyxDQUN1Qzs7QUFFNUMsUUFBSUEsUUFBSixFQUFjO0FBQ1pDLGVBQVNyQyxTQUFTb0MsUUFBVCxFQUFtQm5DLEtBQW5CLENBQVQ7QUFDRDtBQUNGOztBQUVELFNBQU9vQyxNQUFQO0FBQ0QiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3l1aSA9IHJlcXVpcmUoJ2Vhc3l1aScpLFxuICAgICAgeyBFbGVtZW50IH0gPSBlYXN5dWk7XG5cbmNsYXNzIFJlYWN0IHtcbiAgc3RhdGljIGNyZWF0ZUVsZW1lbnQoZmlyc3RBcmd1bWVudCwgcHJvcGVydGllcywgLi4uY2hpbGRFbGVtZW50cykge1xuICAgIGxldCBlbGVtZW50ID0gbnVsbDtcblxuICAgIGlmIChmaXJzdEFyZ3VtZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNoaWxkRWxlbWVudHMgPSBmbGF0dGVuQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKTtcblxuICAgICAgcHJvcGVydGllcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBjaGlsZEVsZW1lbnRzOiBjaGlsZEVsZW1lbnRzXG4gICAgICB9LCBwcm9wZXJ0aWVzKTtcblxuICAgICAgaWYgKGZhbHNlKSB7XG5cbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvbnN0IHRhZ05hbWUgPSBmaXJzdEFyZ3VtZW50O1xuXG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50RnJvbVRhZ05hbWVBbmRQcm9wZXJ0aWVzKHRhZ05hbWUsIHByb3BlcnRpZXMpO1xuICAgICAgfSBlbHNlIGlmIChpc1R5cGVPZihmaXJzdEFyZ3VtZW50LCBFbGVtZW50KSkge1xuICAgICAgICBjb25zdCBDbGFzcyA9IGZpcnN0QXJndW1lbnQ7ICAvLy9cblxuICAgICAgICBlbGVtZW50ID0gQ2xhc3MuZnJvbVByb3BlcnRpZXMocHJvcGVydGllcyk7XG4gICAgICB9IGVsc2UgaWYgKGZpcnN0QXJndW1lbnQucHJvdG90eXBlLnJlbmRlcikge1xuICAgICAgICBjb25zdCBDbGFzcyA9IGZpcnN0QXJndW1lbnQsICAvLy9cbiAgICAgICAgICAgICAgaW5zdGFuY2UgPSBuZXcgQ2xhc3MocHJvcGVydGllcyk7XG5cbiAgICAgICAgZWxlbWVudCA9IGluc3RhbmNlLnJlbmRlcigpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjb25zdCBlbGVtZW50RnVuY3Rpb24gPSBmaXJzdEFyZ3VtZW50O1xuXG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50RnVuY3Rpb24ocHJvcGVydGllcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdywgJ1JlYWN0Jywge1xuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBSZWFjdDtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cbmZ1bmN0aW9uIGZsYXR0ZW5DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpIHtcbiAgY2hpbGRFbGVtZW50cyA9IGNoaWxkRWxlbWVudHMucmVkdWNlKGZ1bmN0aW9uKGNoaWxkRWxlbWVudHMsIGNoaWxkRWxlbWVudCkgeyAgLy8vXG4gICAgY2hpbGRFbGVtZW50cyA9IGNoaWxkRWxlbWVudHMuY29uY2F0KGNoaWxkRWxlbWVudCk7XG5cbiAgICByZXR1cm4gY2hpbGRFbGVtZW50cztcbiAgfSwgW10pO1xuXG4gIHJldHVybiBjaGlsZEVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiBlbGVtZW50RnJvbVRhZ05hbWVBbmRQcm9wZXJ0aWVzKHRhZ05hbWUsIHByb3BlcnRpZXMpIHtcbiAgY29uc3QgaHRtbCA9IGA8JHt0YWdOYW1lfT48LyR7dGFnTmFtZX0+YCxcbiAgICAgICAgZWxlbWVudCA9IEVsZW1lbnQuZnJvbUhUTUwoaHRtbCk7XG5cbiAgYXBwbHlFbGVtZW50UHJvcGVydGllcyhlbGVtZW50LCBwcm9wZXJ0aWVzKTtcblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gYXBwbHlFbGVtZW50UHJvcGVydGllcyhlbGVtZW50LCBwcm9wZXJ0aWVzKSB7XG4gIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXMocHJvcGVydGllcyk7XG5cbiAgbmFtZXMuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgY29uc3QgdmFsdWUgPSBwcm9wZXJ0aWVzW25hbWVdO1xuXG4gICAgaWYgKGlzSGFuZGxlck5hbWUobmFtZSkpIHtcbiAgICAgIGNvbnN0IGV2ZW50VHlwZSA9IGV2ZW50VHlwZUZyb21OYW1lKG5hbWUpLFxuICAgICAgICAgICAgaGFuZGxlciA9IHZhbHVlOyAgLy8vXG5cbiAgICAgIGVsZW1lbnQub24oZXZlbnRUeXBlLCBoYW5kbGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkRWxlbWVudEF0dHJpYnV0ZXMoZWxlbWVudCwgbmFtZSwgdmFsdWUpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRBdHRyaWJ1dGVzKGVsZW1lbnQsIG5hbWUsIHZhbHVlKSB7XG4gIGlmIChuYW1lID09PSAnY2xhc3NOYW1lJykge1xuICAgIG5hbWUgPSAnY2xhc3MnO1xuICB9XG5cbiAgaWYgKG5hbWUgPT09ICdodG1sRm9yJykge1xuICAgIG5hbWUgPSAnZm9yJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcblxuICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBlbGVtZW50LmRvbUVsZW1lbnRbbmFtZV1ba2V5XSA9IHZhbHVlW2tleV07XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJykge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdmFsdWUgPSBuYW1lOyAvLy9cblxuICAgICAgZWxlbWVudC5hZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50LmFkZEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNIYW5kbGVyTmFtZShuYW1lKSB7XG4gIHJldHVybiBuYW1lLm1hdGNoKC9eb24vKTtcbn1cblxuZnVuY3Rpb24gZXZlbnRUeXBlRnJvbU5hbWUobmFtZSkge1xuICByZXR1cm4gbmFtZS5zdWJzdHIoMikudG9Mb3dlckNhc2UoKTtcbn1cblxuZnVuY3Rpb24gaXNUeXBlT2YoYXJndW1lbnQsIENsYXNzKSB7XG4gIGxldCB0eXBlT2YgPSBmYWxzZTtcblxuICBpZiAoYXJndW1lbnQgPT09IENsYXNzKSB7IC8vL1xuICAgIHR5cGVPZiA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgYXJndW1lbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoYXJndW1lbnQpOyAvLy9cblxuICAgIGlmIChhcmd1bWVudCkge1xuICAgICAgdHlwZU9mID0gaXNUeXBlT2YoYXJndW1lbnQsIENsYXNzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHlwZU9mO1xufVxuIl19