'use strict';

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
      properties = Object.assign({}, properties); ///

      var element = null;

      if (firstArgument !== undefined) {
        var firstArgumentTagName = typeof firstArgument === 'string';

        if (firstArgumentTagName) {
          var tagName = firstArgument;

          element = elementFromTagName(tagName);
        } else {
          var firstArgumentElement = isElement(firstArgument);

          if (firstArgumentElement) {
            var Class = firstArgument; ///

            element = Class.fromProperties(properties);
          } else {
            var _Class = firstArgument,
                ///
            instance = new _Class();

            element = instance.render();
          }
        }
      }

      if (element !== null) {
        for (var _len = arguments.length, childElements = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          childElements[_key - 2] = arguments[_key];
        }

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

function elementFromTagName(tagName) {
  var html = '<' + tagName + '></' + tagName + '>',
      element = Element.fromHTML(html);

  return element;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9yZWFjdC5qcyJdLCJuYW1lcyI6WyJlYXN5dWkiLCJyZXF1aXJlIiwiRWxlbWVudCIsIlJlYWN0IiwiZmlyc3RBcmd1bWVudCIsInByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJlbGVtZW50IiwidW5kZWZpbmVkIiwiZmlyc3RBcmd1bWVudFRhZ05hbWUiLCJ0YWdOYW1lIiwiZWxlbWVudEZyb21UYWdOYW1lIiwiZmlyc3RBcmd1bWVudEVsZW1lbnQiLCJpc0VsZW1lbnQiLCJDbGFzcyIsImZyb21Qcm9wZXJ0aWVzIiwiaW5zdGFuY2UiLCJyZW5kZXIiLCJjaGlsZEVsZW1lbnRzIiwiZm9yRWFjaCIsImNoaWxkRWxlbWVudCIsImFwcGVuZCIsImRlZmluZVByb3BlcnR5Iiwid2luZG93IiwiZ2V0IiwibW9kdWxlIiwiZXhwb3J0cyIsImFyZ3VtZW50IiwiZ2V0UHJvdG90eXBlT2YiLCJodG1sIiwiZnJvbUhUTUwiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTQyxRQUFRLFFBQVIsQ0FBZjtBQUFBLElBQ01DLFVBQVVGLE9BQU9FLE9BRHZCOztJQUdNQyxLOzs7Ozs7O2tDQUNpQkMsYSxFQUFlQyxVLEVBQThCO0FBQ2hFQSxtQkFBYUMsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JGLFVBQWxCLENBQWIsQ0FEZ0UsQ0FDcEI7O0FBRTVDLFVBQUlHLFVBQVUsSUFBZDs7QUFFQSxVQUFJSixrQkFBa0JLLFNBQXRCLEVBQWlDO0FBQy9CLFlBQU1DLHVCQUF3QixPQUFPTixhQUFQLEtBQXlCLFFBQXZEOztBQUVBLFlBQUlNLG9CQUFKLEVBQTBCO0FBQ3hCLGNBQU1DLFVBQVVQLGFBQWhCOztBQUVBSSxvQkFBVUksbUJBQW1CRCxPQUFuQixDQUFWO0FBQ0QsU0FKRCxNQUlPO0FBQ0wsY0FBTUUsdUJBQXVCQyxVQUFVVixhQUFWLENBQTdCOztBQUVBLGNBQUlTLG9CQUFKLEVBQTBCO0FBQ3hCLGdCQUFNRSxRQUFRWCxhQUFkLENBRHdCLENBQ007O0FBRTlCSSxzQkFBVU8sTUFBTUMsY0FBTixDQUFxQlgsVUFBckIsQ0FBVjtBQUNELFdBSkQsTUFJTztBQUNMLGdCQUFNVSxTQUFRWCxhQUFkO0FBQUEsZ0JBQThCO0FBQ3hCYSx1QkFBVyxJQUFJRixNQUFKLEVBRGpCOztBQUdBUCxzQkFBVVMsU0FBU0MsTUFBVCxFQUFWO0FBQ0Q7QUFDRjtBQUNGOztBQUVELFVBQUlWLFlBQVksSUFBaEIsRUFBc0I7QUFBQSwwQ0E1QjJCVyxhQTRCM0I7QUE1QjJCQSx1QkE0QjNCO0FBQUE7O0FBQ3BCQSxzQkFBY0MsT0FBZCxDQUFzQixVQUFTQyxZQUFULEVBQXVCO0FBQzNDYixrQkFBUWMsTUFBUixDQUFlRCxZQUFmO0FBQ0QsU0FGRDtBQUdEOztBQUVELGFBQU9iLE9BQVA7QUFDRDs7Ozs7O0FBR0hGLE9BQU9pQixjQUFQLENBQXNCQyxNQUF0QixFQUE4QixPQUE5QixFQUF1QztBQUNyQ0MsT0FBSyxlQUFXO0FBQ2QsV0FBT3RCLEtBQVA7QUFDRDtBQUhvQyxDQUF2Qzs7QUFNQXVCLE9BQU9DLE9BQVAsR0FBaUJ4QixLQUFqQjs7QUFFQSxTQUFTVyxTQUFULENBQW1CYyxRQUFuQixFQUE2QjtBQUMzQixNQUFJcEIsVUFBVSxLQUFkOztBQUVBLE1BQUlvQixhQUFhMUIsT0FBakIsRUFBMEI7QUFDeEJNLGNBQVUsSUFBVjtBQUNELEdBRkQsTUFFTztBQUNMb0IsZUFBV3RCLE9BQU91QixjQUFQLENBQXNCRCxRQUF0QixDQUFYOztBQUVBLFFBQUlBLFFBQUosRUFBYztBQUNacEIsZ0JBQVVNLFVBQVVjLFFBQVYsQ0FBVjtBQUNEO0FBQ0Y7O0FBRUQsU0FBT3BCLE9BQVA7QUFDRDs7QUFFRCxTQUFTSSxrQkFBVCxDQUE0QkQsT0FBNUIsRUFBcUM7QUFDbkMsTUFBTW1CLGFBQVduQixPQUFYLFdBQXdCQSxPQUF4QixNQUFOO0FBQUEsTUFDTUgsVUFBVU4sUUFBUTZCLFFBQVIsQ0FBaUJELElBQWpCLENBRGhCOztBQUdBLFNBQU90QixPQUFQO0FBQ0QiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3l1aSA9IHJlcXVpcmUoJ2Vhc3lVSScpLFxuICAgICAgRWxlbWVudCA9IGVhc3l1aS5FbGVtZW50O1xuXG5jbGFzcyBSZWFjdCB7XG4gIHN0YXRpYyBjcmVhdGVFbGVtZW50KGZpcnN0QXJndW1lbnQsIHByb3BlcnRpZXMsIC4uLmNoaWxkRWxlbWVudHMpIHtcbiAgICBwcm9wZXJ0aWVzID0gT2JqZWN0LmFzc2lnbih7fSwgcHJvcGVydGllcyk7IC8vL1xuXG4gICAgbGV0IGVsZW1lbnQgPSBudWxsO1xuXG4gICAgaWYgKGZpcnN0QXJndW1lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgZmlyc3RBcmd1bWVudFRhZ05hbWUgPSAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09ICdzdHJpbmcnKTtcblxuICAgICAgaWYgKGZpcnN0QXJndW1lbnRUYWdOYW1lKSB7XG4gICAgICAgIGNvbnN0IHRhZ05hbWUgPSBmaXJzdEFyZ3VtZW50O1xuXG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50RnJvbVRhZ05hbWUodGFnTmFtZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBmaXJzdEFyZ3VtZW50RWxlbWVudCA9IGlzRWxlbWVudChmaXJzdEFyZ3VtZW50KTtcblxuICAgICAgICBpZiAoZmlyc3RBcmd1bWVudEVsZW1lbnQpIHtcbiAgICAgICAgICBjb25zdCBDbGFzcyA9IGZpcnN0QXJndW1lbnQ7ICAvLy9cblxuICAgICAgICAgIGVsZW1lbnQgPSBDbGFzcy5mcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBDbGFzcyA9IGZpcnN0QXJndW1lbnQsICAvLy9cbiAgICAgICAgICAgICAgICBpbnN0YW5jZSA9IG5ldyBDbGFzcygpO1xuXG4gICAgICAgICAgZWxlbWVudCA9IGluc3RhbmNlLnJlbmRlcigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihjaGlsZEVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5hcHBlbmQoY2hpbGRFbGVtZW50KTtcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdywgJ1JlYWN0Jywge1xuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBSZWFjdDtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cbmZ1bmN0aW9uIGlzRWxlbWVudChhcmd1bWVudCkge1xuICBsZXQgZWxlbWVudCA9IGZhbHNlO1xuXG4gIGlmIChhcmd1bWVudCA9PT0gRWxlbWVudCkge1xuICAgIGVsZW1lbnQgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGFyZ3VtZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGFyZ3VtZW50KTtcblxuICAgIGlmIChhcmd1bWVudCkge1xuICAgICAgZWxlbWVudCA9IGlzRWxlbWVudChhcmd1bWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGVsZW1lbnRGcm9tVGFnTmFtZSh0YWdOYW1lKSB7XG4gIGNvbnN0IGh0bWwgPSBgPCR7dGFnTmFtZX0+PC8ke3RhZ05hbWV9PmAsXG4gICAgICAgIGVsZW1lbnQgPSBFbGVtZW50LmZyb21IVE1MKGh0bWwpO1xuXG4gIHJldHVybiBlbGVtZW50O1xufVxuIl19