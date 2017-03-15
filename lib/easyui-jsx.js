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
          var tagName = firstArgument; ///

          element = Element.fromPropertiesAndTagName(Element, properties, tagName);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9lYXN5dWktanN4LmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJFbGVtZW50IiwiZWFzeXVpIiwiUmVhY3QiLCJmaXJzdEFyZ3VtZW50IiwicHJvcGVydGllcyIsImNoaWxkRWxlbWVudHMiLCJlbGVtZW50IiwidW5kZWZpbmVkIiwiZmxhdHRlbkNoaWxkRWxlbWVudHMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiZnJvbVByb3BlcnRpZXNBbmRUYWdOYW1lIiwiaXNUeXBlT2YiLCJDbGFzcyIsImZyb21Qcm9wZXJ0aWVzIiwicHJvdG90eXBlIiwicmVuZGVyIiwiaW5zdGFuY2UiLCJlbGVtZW50RnVuY3Rpb24iLCJkZWZpbmVQcm9wZXJ0eSIsIndpbmRvdyIsImdldCIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZWR1Y2UiLCJjaGlsZEVsZW1lbnQiLCJjb25jYXQiLCJhcmd1bWVudCIsInR5cGVPZiIsImdldFByb3RvdHlwZU9mIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRU0sYUFBU0EsUUFBUSxRQUFSLENBQVQ7QUFBQSxJQUNFQyxPQURGLEdBQ2NDLE1BRGQsQ0FDRUQsT0FERjs7SUFHQUUsSzs7Ozs7OztrQ0FDaUJDLGEsRUFBZUMsVSxFQUE4QjtBQUFBLHdDQUFmQyxhQUFlO0FBQWZBLHFCQUFlO0FBQUE7O0FBQ2hFLFVBQUlDLFVBQVUsSUFBZDs7QUFFQSxVQUFJSCxrQkFBa0JJLFNBQXRCLEVBQWlDO0FBQy9CRix3QkFBZ0JHLHFCQUFxQkgsYUFBckIsQ0FBaEI7O0FBRUFELHFCQUFhSyxPQUFPQyxNQUFQLENBQWM7QUFDekJMLHlCQUFlQTtBQURVLFNBQWQsRUFFVkQsVUFGVSxDQUFiOztBQUlBLFlBQUksS0FBSixFQUFXLENBRVYsQ0FGRCxNQUVPLElBQUksT0FBT0QsYUFBUCxLQUF5QixRQUE3QixFQUF1QztBQUM1QyxjQUFNUSxVQUFVUixhQUFoQixDQUQ0QyxDQUNaOztBQUVoQ0csb0JBQVVOLFFBQVFZLHdCQUFSLENBQWlDWixPQUFqQyxFQUEwQ0ksVUFBMUMsRUFBc0RPLE9BQXRELENBQVY7QUFDRCxTQUpNLE1BSUEsSUFBSUUsU0FBU1YsYUFBVCxFQUF3QkgsT0FBeEIsQ0FBSixFQUFzQztBQUMzQyxjQUFNYyxRQUFRWCxhQUFkLENBRDJDLENBQ2I7O0FBRTlCRyxvQkFBVVEsTUFBTUMsY0FBTixDQUFxQlgsVUFBckIsQ0FBVjtBQUNELFNBSk0sTUFJQSxJQUFJRCxjQUFjYSxTQUFkLENBQXdCQyxNQUE1QixFQUFvQztBQUN6QyxjQUFNSCxTQUFRWCxhQUFkO0FBQUEsY0FBOEI7QUFDeEJlLHFCQUFXLElBQUlKLE1BQUosQ0FBVVYsVUFBVixDQURqQjs7QUFHQUUsb0JBQVVZLFNBQVNELE1BQVQsRUFBVjtBQUNELFNBTE0sTUFLQSxJQUFJLE9BQU9kLGFBQVAsS0FBeUIsVUFBN0IsRUFBeUM7QUFDOUMsY0FBTWdCLGtCQUFrQmhCLGFBQXhCLENBRDhDLENBQ047O0FBRXhDRyxvQkFBVWEsZ0JBQWdCZixVQUFoQixDQUFWO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPRSxPQUFQO0FBQ0Q7Ozs7OztBQUdIRyxPQUFPVyxjQUFQLENBQXNCQyxNQUF0QixFQUE4QixPQUE5QixFQUF1QztBQUNyQ0MsT0FBSyxlQUFXO0FBQ2QsV0FBT3BCLEtBQVA7QUFDRDtBQUhvQyxDQUF2Qzs7QUFNQXFCLE9BQU9DLE9BQVAsR0FBaUJ0QixLQUFqQjs7QUFFQSxTQUFTTSxvQkFBVCxDQUE4QkgsYUFBOUIsRUFBNkM7QUFDM0NBLGtCQUFnQkEsY0FBY29CLE1BQWQsQ0FBcUIsVUFBU3BCLGFBQVQsRUFBd0JxQixZQUF4QixFQUFzQztBQUFHO0FBQzVFckIsb0JBQWdCQSxjQUFjc0IsTUFBZCxDQUFxQkQsWUFBckIsQ0FBaEI7O0FBRUEsV0FBT3JCLGFBQVA7QUFDRCxHQUplLEVBSWIsRUFKYSxDQUFoQjs7QUFNQSxTQUFPQSxhQUFQO0FBQ0Q7O0FBRUQsU0FBU1EsUUFBVCxDQUFrQmUsUUFBbEIsRUFBNEJkLEtBQTVCLEVBQW1DO0FBQ2pDLE1BQUllLFNBQVMsS0FBYjs7QUFFQSxNQUFJRCxhQUFhZCxLQUFqQixFQUF3QjtBQUFFO0FBQ3hCZSxhQUFTLElBQVQ7QUFDRCxHQUZELE1BRU87QUFDTEQsZUFBV25CLE9BQU9xQixjQUFQLENBQXNCRixRQUF0QixDQUFYLENBREssQ0FDdUM7O0FBRTVDLFFBQUlBLFFBQUosRUFBYztBQUNaQyxlQUFTaEIsU0FBU2UsUUFBVCxFQUFtQmQsS0FBbkIsQ0FBVDtBQUNEO0FBQ0Y7O0FBRUQsU0FBT2UsTUFBUDtBQUNEIiwiZmlsZSI6ImVhc3l1aS1qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3l1aSA9IHJlcXVpcmUoJ2Vhc3l1aScpLFxuICAgICAgeyBFbGVtZW50IH0gPSBlYXN5dWk7XG5cbmNsYXNzIFJlYWN0IHtcbiAgc3RhdGljIGNyZWF0ZUVsZW1lbnQoZmlyc3RBcmd1bWVudCwgcHJvcGVydGllcywgLi4uY2hpbGRFbGVtZW50cykge1xuICAgIGxldCBlbGVtZW50ID0gbnVsbDtcblxuICAgIGlmIChmaXJzdEFyZ3VtZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNoaWxkRWxlbWVudHMgPSBmbGF0dGVuQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKTtcblxuICAgICAgcHJvcGVydGllcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBjaGlsZEVsZW1lbnRzOiBjaGlsZEVsZW1lbnRzXG4gICAgICB9LCBwcm9wZXJ0aWVzKTtcblxuICAgICAgaWYgKGZhbHNlKSB7XG5cbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvbnN0IHRhZ05hbWUgPSBmaXJzdEFyZ3VtZW50OyAgLy8vXG5cbiAgICAgICAgZWxlbWVudCA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXNBbmRUYWdOYW1lKEVsZW1lbnQsIHByb3BlcnRpZXMsIHRhZ05hbWUpXG4gICAgICB9IGVsc2UgaWYgKGlzVHlwZU9mKGZpcnN0QXJndW1lbnQsIEVsZW1lbnQpKSB7XG4gICAgICAgIGNvbnN0IENsYXNzID0gZmlyc3RBcmd1bWVudDsgIC8vL1xuXG4gICAgICAgIGVsZW1lbnQgPSBDbGFzcy5mcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcbiAgICAgIH0gZWxzZSBpZiAoZmlyc3RBcmd1bWVudC5wcm90b3R5cGUucmVuZGVyKSB7XG4gICAgICAgIGNvbnN0IENsYXNzID0gZmlyc3RBcmd1bWVudCwgIC8vL1xuICAgICAgICAgICAgICBpbnN0YW5jZSA9IG5ldyBDbGFzcyhwcm9wZXJ0aWVzKTtcblxuICAgICAgICBlbGVtZW50ID0gaW5zdGFuY2UucmVuZGVyKCk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRGdW5jdGlvbiA9IGZpcnN0QXJndW1lbnQ7ICAvLy9cblxuICAgICAgICBlbGVtZW50ID0gZWxlbWVudEZ1bmN0aW9uKHByb3BlcnRpZXMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3csICdSZWFjdCcsIHtcbiAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gUmVhY3Q7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0O1xuXG5mdW5jdGlvbiBmbGF0dGVuQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKSB7XG4gIGNoaWxkRWxlbWVudHMgPSBjaGlsZEVsZW1lbnRzLnJlZHVjZShmdW5jdGlvbihjaGlsZEVsZW1lbnRzLCBjaGlsZEVsZW1lbnQpIHsgIC8vL1xuICAgIGNoaWxkRWxlbWVudHMgPSBjaGlsZEVsZW1lbnRzLmNvbmNhdChjaGlsZEVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gY2hpbGRFbGVtZW50cztcbn1cblxuZnVuY3Rpb24gaXNUeXBlT2YoYXJndW1lbnQsIENsYXNzKSB7XG4gIGxldCB0eXBlT2YgPSBmYWxzZTtcblxuICBpZiAoYXJndW1lbnQgPT09IENsYXNzKSB7IC8vL1xuICAgIHR5cGVPZiA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgYXJndW1lbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoYXJndW1lbnQpOyAvLy9cblxuICAgIGlmIChhcmd1bWVudCkge1xuICAgICAgdHlwZU9mID0gaXNUeXBlT2YoYXJndW1lbnQsIENsYXNzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHlwZU9mO1xufVxuIl19