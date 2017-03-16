'use strict';

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
          var tagName = firstArgument,
              ///
          html = '<' + tagName + '></' + tagName + '>';

          element = Element.fromHTML(html);

          element.applyProperties(properties);
        } else if (isTypeOf(firstArgument, Element)) {
          var Class = firstArgument; ///

          element = Class.fromProperties(properties);
        } else if (firstArgument.prototype.render) {
          var _Class = firstArgument,
              ///
          instance = new _Class(properties);

          element = instance.render();
        } else if (typeof firstArgument === 'function') {
          var elementFunction = firstArgument; ///

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lYXN5dWktanN4LmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJFbGVtZW50IiwiZWFzeXVpIiwiUmVhY3QiLCJmaXJzdEFyZ3VtZW50IiwicHJvcGVydGllcyIsImNoaWxkRWxlbWVudHMiLCJlbGVtZW50IiwidW5kZWZpbmVkIiwiZmxhdHRlbkNoaWxkRWxlbWVudHMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiaHRtbCIsImZyb21IVE1MIiwiYXBwbHlQcm9wZXJ0aWVzIiwiaXNUeXBlT2YiLCJDbGFzcyIsImZyb21Qcm9wZXJ0aWVzIiwicHJvdG90eXBlIiwicmVuZGVyIiwiaW5zdGFuY2UiLCJlbGVtZW50RnVuY3Rpb24iLCJkZWZpbmVQcm9wZXJ0eSIsIndpbmRvdyIsImdldCIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZWR1Y2UiLCJjaGlsZEVsZW1lbnQiLCJjb25jYXQiLCJhcmd1bWVudCIsInR5cGVPZiIsImdldFByb3RvdHlwZU9mIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRU0sYUFBU0EsUUFBUSxRQUFSLENBQVQ7QUFBQSxJQUNFQyxPQURGLEdBQ2NDLE1BRGQsQ0FDRUQsT0FERjs7SUFJQUUsSzs7Ozs7OztrQ0FDaUJDLGEsRUFBZUMsVSxFQUE4QjtBQUFBLHdDQUFmQyxhQUFlO0FBQWZBLHFCQUFlO0FBQUE7O0FBQ2hFLFVBQUlDLFVBQVUsSUFBZDs7QUFFQSxVQUFJSCxrQkFBa0JJLFNBQXRCLEVBQWlDO0FBQy9CRix3QkFBZ0JHLHFCQUFxQkgsYUFBckIsQ0FBaEI7O0FBRUFELHFCQUFhSyxPQUFPQyxNQUFQLENBQWM7QUFDekJMLHlCQUFlQTtBQURVLFNBQWQsRUFFVkQsVUFGVSxDQUFiOztBQUlBLFlBQUksS0FBSixFQUFXLENBRVYsQ0FGRCxNQUVPLElBQUksT0FBT0QsYUFBUCxLQUF5QixRQUE3QixFQUF1QztBQUM1QyxjQUFNUSxVQUFVUixhQUFoQjtBQUFBLGNBQWdDO0FBQzFCUyx1QkFBV0QsT0FBWCxXQUF3QkEsT0FBeEIsTUFETjs7QUFHQUwsb0JBQVVOLFFBQVFhLFFBQVIsQ0FBaUJELElBQWpCLENBQVY7O0FBRUFOLGtCQUFRUSxlQUFSLENBQXdCVixVQUF4QjtBQUNELFNBUE0sTUFPQSxJQUFJVyxTQUFTWixhQUFULEVBQXdCSCxPQUF4QixDQUFKLEVBQXNDO0FBQzNDLGNBQU1nQixRQUFRYixhQUFkLENBRDJDLENBQ2I7O0FBRTlCRyxvQkFBVVUsTUFBTUMsY0FBTixDQUFxQmIsVUFBckIsQ0FBVjtBQUNELFNBSk0sTUFJQSxJQUFJRCxjQUFjZSxTQUFkLENBQXdCQyxNQUE1QixFQUFvQztBQUN6QyxjQUFNSCxTQUFRYixhQUFkO0FBQUEsY0FBOEI7QUFDeEJpQixxQkFBVyxJQUFJSixNQUFKLENBQVVaLFVBQVYsQ0FEakI7O0FBR0FFLG9CQUFVYyxTQUFTRCxNQUFULEVBQVY7QUFDRCxTQUxNLE1BS0EsSUFBSSxPQUFPaEIsYUFBUCxLQUF5QixVQUE3QixFQUF5QztBQUM5QyxjQUFNa0Isa0JBQWtCbEIsYUFBeEIsQ0FEOEMsQ0FDTjs7QUFFeENHLG9CQUFVZSxnQkFBZ0JqQixVQUFoQixDQUFWO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPRSxPQUFQO0FBQ0Q7Ozs7OztBQUdIRyxPQUFPYSxjQUFQLENBQXNCQyxNQUF0QixFQUE4QixPQUE5QixFQUF1QztBQUNyQ0MsT0FBSyxlQUFXO0FBQ2QsV0FBT3RCLEtBQVA7QUFDRDtBQUhvQyxDQUF2Qzs7QUFNQXVCLE9BQU9DLE9BQVAsR0FBaUJ4QixLQUFqQjs7QUFFQSxTQUFTTSxvQkFBVCxDQUE4QkgsYUFBOUIsRUFBNkM7QUFDM0NBLGtCQUFnQkEsY0FBY3NCLE1BQWQsQ0FBcUIsVUFBU3RCLGFBQVQsRUFBd0J1QixZQUF4QixFQUFzQztBQUFHO0FBQzVFdkIsb0JBQWdCQSxjQUFjd0IsTUFBZCxDQUFxQkQsWUFBckIsQ0FBaEI7O0FBRUEsV0FBT3ZCLGFBQVA7QUFDRCxHQUplLEVBSWIsRUFKYSxDQUFoQjs7QUFNQSxTQUFPQSxhQUFQO0FBQ0Q7O0FBRUQsU0FBU1UsUUFBVCxDQUFrQmUsUUFBbEIsRUFBNEJkLEtBQTVCLEVBQW1DO0FBQ2pDLE1BQUllLFNBQVMsS0FBYjs7QUFFQSxNQUFJRCxhQUFhZCxLQUFqQixFQUF3QjtBQUFFO0FBQ3hCZSxhQUFTLElBQVQ7QUFDRCxHQUZELE1BRU87QUFDTEQsZUFBV3JCLE9BQU91QixjQUFQLENBQXNCRixRQUF0QixDQUFYLENBREssQ0FDdUM7O0FBRTVDLFFBQUlBLFFBQUosRUFBYztBQUNaQyxlQUFTaEIsU0FBU2UsUUFBVCxFQUFtQmQsS0FBbkIsQ0FBVDtBQUNEO0FBQ0Y7O0FBRUQsU0FBT2UsTUFBUDtBQUNEIiwiZmlsZSI6ImVhc3l1aS1qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3l1aSA9IHJlcXVpcmUoJ2Vhc3l1aScpLFxuICAgICAgeyBFbGVtZW50IH0gPSBlYXN5dWk7XG5cblxuY2xhc3MgUmVhY3Qge1xuICBzdGF0aWMgY3JlYXRlRWxlbWVudChmaXJzdEFyZ3VtZW50LCBwcm9wZXJ0aWVzLCAuLi5jaGlsZEVsZW1lbnRzKSB7XG4gICAgbGV0IGVsZW1lbnQgPSBudWxsO1xuXG4gICAgaWYgKGZpcnN0QXJndW1lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY2hpbGRFbGVtZW50cyA9IGZsYXR0ZW5DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpO1xuXG4gICAgICBwcm9wZXJ0aWVzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIGNoaWxkRWxlbWVudHM6IGNoaWxkRWxlbWVudHNcbiAgICAgIH0sIHByb3BlcnRpZXMpO1xuXG4gICAgICBpZiAoZmFsc2UpIHtcblxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29uc3QgdGFnTmFtZSA9IGZpcnN0QXJndW1lbnQsICAvLy9cbiAgICAgICAgICAgICAgaHRtbCA9IGA8JHt0YWdOYW1lfT48LyR7dGFnTmFtZX0+YDtcblxuICAgICAgICBlbGVtZW50ID0gRWxlbWVudC5mcm9tSFRNTChodG1sKTtcblxuICAgICAgICBlbGVtZW50LmFwcGx5UHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNUeXBlT2YoZmlyc3RBcmd1bWVudCwgRWxlbWVudCkpIHtcbiAgICAgICAgY29uc3QgQ2xhc3MgPSBmaXJzdEFyZ3VtZW50OyAgLy8vXG5cbiAgICAgICAgZWxlbWVudCA9IENsYXNzLmZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpO1xuICAgICAgfSBlbHNlIGlmIChmaXJzdEFyZ3VtZW50LnByb3RvdHlwZS5yZW5kZXIpIHtcbiAgICAgICAgY29uc3QgQ2xhc3MgPSBmaXJzdEFyZ3VtZW50LCAgLy8vXG4gICAgICAgICAgICAgIGluc3RhbmNlID0gbmV3IENsYXNzKHByb3BlcnRpZXMpO1xuXG4gICAgICAgIGVsZW1lbnQgPSBpbnN0YW5jZS5yZW5kZXIoKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudEZ1bmN0aW9uID0gZmlyc3RBcmd1bWVudDsgIC8vL1xuXG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50RnVuY3Rpb24ocHJvcGVydGllcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdywgJ1JlYWN0Jywge1xuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBSZWFjdDtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cbmZ1bmN0aW9uIGZsYXR0ZW5DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpIHtcbiAgY2hpbGRFbGVtZW50cyA9IGNoaWxkRWxlbWVudHMucmVkdWNlKGZ1bmN0aW9uKGNoaWxkRWxlbWVudHMsIGNoaWxkRWxlbWVudCkgeyAgLy8vXG4gICAgY2hpbGRFbGVtZW50cyA9IGNoaWxkRWxlbWVudHMuY29uY2F0KGNoaWxkRWxlbWVudCk7XG5cbiAgICByZXR1cm4gY2hpbGRFbGVtZW50cztcbiAgfSwgW10pO1xuXG4gIHJldHVybiBjaGlsZEVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiBpc1R5cGVPZihhcmd1bWVudCwgQ2xhc3MpIHtcbiAgbGV0IHR5cGVPZiA9IGZhbHNlO1xuXG4gIGlmIChhcmd1bWVudCA9PT0gQ2xhc3MpIHsgLy8vXG4gICAgdHlwZU9mID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBhcmd1bWVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihhcmd1bWVudCk7IC8vL1xuXG4gICAgaWYgKGFyZ3VtZW50KSB7XG4gICAgICB0eXBlT2YgPSBpc1R5cGVPZihhcmd1bWVudCwgQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0eXBlT2Y7XG59XG4iXX0=