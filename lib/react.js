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
    var prototype = Object.getPrototypeOf(argument);

    if (prototype) {
      element = isElement(prototype);
    }
  }

  return element;
}

function elementFromTagName(tagName) {
  var html = '<' + tagName + '></' + tagName + '>',
      element = Element.fromHTML(html);

  return element;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9yZWFjdC5qcyJdLCJuYW1lcyI6WyJlYXN5dWkiLCJyZXF1aXJlIiwiRWxlbWVudCIsIlJlYWN0IiwiZmlyc3RBcmd1bWVudCIsInByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJlbGVtZW50IiwidW5kZWZpbmVkIiwiZmlyc3RBcmd1bWVudFRhZ05hbWUiLCJ0YWdOYW1lIiwiZWxlbWVudEZyb21UYWdOYW1lIiwiZmlyc3RBcmd1bWVudEVsZW1lbnQiLCJpc0VsZW1lbnQiLCJDbGFzcyIsImZyb21Qcm9wZXJ0aWVzIiwiY2hpbGRFbGVtZW50cyIsImZvckVhY2giLCJjaGlsZEVsZW1lbnQiLCJhcHBlbmQiLCJkZWZpbmVQcm9wZXJ0eSIsIndpbmRvdyIsImdldCIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcmd1bWVudCIsInByb3RvdHlwZSIsImdldFByb3RvdHlwZU9mIiwiaHRtbCIsImZyb21IVE1MIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxRQUFSLENBQWY7QUFBQSxJQUNNQyxVQUFVRixPQUFPRSxPQUR2Qjs7SUFHTUMsSzs7Ozs7OztrQ0FDaUJDLGEsRUFBZUMsVSxFQUE4QjtBQUNoRUEsbUJBQWFDLE9BQU9DLE1BQVAsQ0FBYyxFQUFkLEVBQWtCRixVQUFsQixDQUFiLENBRGdFLENBQ3BCOztBQUU1QyxVQUFJRyxVQUFVLElBQWQ7O0FBRUEsVUFBSUosa0JBQWtCSyxTQUF0QixFQUFpQztBQUMvQixZQUFNQyx1QkFBd0IsT0FBT04sYUFBUCxLQUF5QixRQUF2RDs7QUFFQSxZQUFJTSxvQkFBSixFQUEwQjtBQUN4QixjQUFNQyxVQUFVUCxhQUFoQjs7QUFFQUksb0JBQVVJLG1CQUFtQkQsT0FBbkIsQ0FBVjtBQUNELFNBSkQsTUFJTztBQUNMLGNBQU1FLHVCQUF1QkMsVUFBVVYsYUFBVixDQUE3Qjs7QUFFQSxjQUFJUyxvQkFBSixFQUEwQjtBQUN4QixnQkFBTUUsUUFBUVgsYUFBZCxDQUR3QixDQUNNOztBQUU5Qkksc0JBQVVPLE1BQU1DLGNBQU4sQ0FBcUJYLFVBQXJCLENBQVY7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsVUFBSUcsWUFBWSxJQUFoQixFQUFzQjtBQUFBLDBDQXZCMkJTLGFBdUIzQjtBQXZCMkJBLHVCQXVCM0I7QUFBQTs7QUFDcEJBLHNCQUFjQyxPQUFkLENBQXNCLFVBQVNDLFlBQVQsRUFBdUI7QUFDM0NYLGtCQUFRWSxNQUFSLENBQWVELFlBQWY7QUFDRCxTQUZEO0FBR0Q7O0FBRUQsYUFBT1gsT0FBUDtBQUNEOzs7Ozs7QUFHSEYsT0FBT2UsY0FBUCxDQUFzQkMsTUFBdEIsRUFBOEIsT0FBOUIsRUFBdUM7QUFDckNDLE9BQUssZUFBVztBQUNkLFdBQU9wQixLQUFQO0FBQ0Q7QUFIb0MsQ0FBdkM7O0FBTUFxQixPQUFPQyxPQUFQLEdBQWlCdEIsS0FBakI7O0FBRUEsU0FBU1csU0FBVCxDQUFtQlksUUFBbkIsRUFBNkI7QUFDM0IsTUFBSWxCLFVBQVUsS0FBZDs7QUFFQSxNQUFJa0IsYUFBYXhCLE9BQWpCLEVBQTBCO0FBQ3hCTSxjQUFVLElBQVY7QUFDRCxHQUZELE1BRU87QUFDTCxRQUFNbUIsWUFBWXJCLE9BQU9zQixjQUFQLENBQXNCRixRQUF0QixDQUFsQjs7QUFFQSxRQUFJQyxTQUFKLEVBQWU7QUFDYm5CLGdCQUFVTSxVQUFVYSxTQUFWLENBQVY7QUFDRDtBQUNGOztBQUVELFNBQU9uQixPQUFQO0FBQ0Q7O0FBRUQsU0FBU0ksa0JBQVQsQ0FBNEJELE9BQTVCLEVBQXFDO0FBQ25DLE1BQU1rQixhQUFXbEIsT0FBWCxXQUF3QkEsT0FBeEIsTUFBTjtBQUFBLE1BQ01ILFVBQVVOLFFBQVE0QixRQUFSLENBQWlCRCxJQUFqQixDQURoQjs7QUFHQSxTQUFPckIsT0FBUDtBQUNEIiwiZmlsZSI6InJlYWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5dWkgPSByZXF1aXJlKCdlYXN5VUknKSxcbiAgICAgIEVsZW1lbnQgPSBlYXN5dWkuRWxlbWVudDtcblxuY2xhc3MgUmVhY3Qge1xuICBzdGF0aWMgY3JlYXRlRWxlbWVudChmaXJzdEFyZ3VtZW50LCBwcm9wZXJ0aWVzLCAuLi5jaGlsZEVsZW1lbnRzKSB7XG4gICAgcHJvcGVydGllcyA9IE9iamVjdC5hc3NpZ24oe30sIHByb3BlcnRpZXMpOyAvLy9cblxuICAgIGxldCBlbGVtZW50ID0gbnVsbDtcblxuICAgIGlmIChmaXJzdEFyZ3VtZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGZpcnN0QXJndW1lbnRUYWdOYW1lID0gKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSAnc3RyaW5nJyk7XG5cbiAgICAgIGlmIChmaXJzdEFyZ3VtZW50VGFnTmFtZSkge1xuICAgICAgICBjb25zdCB0YWdOYW1lID0gZmlyc3RBcmd1bWVudDtcblxuICAgICAgICBlbGVtZW50ID0gZWxlbWVudEZyb21UYWdOYW1lKHRhZ05hbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZmlyc3RBcmd1bWVudEVsZW1lbnQgPSBpc0VsZW1lbnQoZmlyc3RBcmd1bWVudCk7XG5cbiAgICAgICAgaWYgKGZpcnN0QXJndW1lbnRFbGVtZW50KSB7XG4gICAgICAgICAgY29uc3QgQ2xhc3MgPSBmaXJzdEFyZ3VtZW50OyAgLy8vXG5cbiAgICAgICAgICBlbGVtZW50ID0gQ2xhc3MuZnJvbVByb3BlcnRpZXMocHJvcGVydGllcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkRWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LmFwcGVuZChjaGlsZEVsZW1lbnQpO1xuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LCAnUmVhY3QnLCB7XG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFJlYWN0O1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcblxuZnVuY3Rpb24gaXNFbGVtZW50KGFyZ3VtZW50KSB7XG4gIGxldCBlbGVtZW50ID0gZmFsc2U7XG5cbiAgaWYgKGFyZ3VtZW50ID09PSBFbGVtZW50KSB7XG4gICAgZWxlbWVudCA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcHJvdG90eXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGFyZ3VtZW50KTtcblxuICAgIGlmIChwcm90b3R5cGUpIHtcbiAgICAgIGVsZW1lbnQgPSBpc0VsZW1lbnQocHJvdG90eXBlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gZWxlbWVudEZyb21UYWdOYW1lKHRhZ05hbWUpIHtcbiAgY29uc3QgaHRtbCA9IGA8JHt0YWdOYW1lfT48LyR7dGFnTmFtZX0+YCxcbiAgICAgICAgZWxlbWVudCA9IEVsZW1lbnQuZnJvbUhUTUwoaHRtbCk7XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG4iXX0=