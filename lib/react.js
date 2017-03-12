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
          var tagName = firstArgument;

          element = Element.fromTagNameAndProperties(tagName, properties);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9yZWFjdC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiRWxlbWVudCIsImVhc3l1aSIsIlJlYWN0IiwiZmlyc3RBcmd1bWVudCIsInByb3BlcnRpZXMiLCJjaGlsZEVsZW1lbnRzIiwiZWxlbWVudCIsInVuZGVmaW5lZCIsImZsYXR0ZW5DaGlsZEVsZW1lbnRzIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsImZyb21UYWdOYW1lQW5kUHJvcGVydGllcyIsImlzVHlwZU9mIiwiQ2xhc3MiLCJmcm9tUHJvcGVydGllcyIsInByb3RvdHlwZSIsInJlbmRlciIsImluc3RhbmNlIiwiZWxlbWVudEZ1bmN0aW9uIiwiZGVmaW5lUHJvcGVydHkiLCJ3aW5kb3ciLCJnZXQiLCJtb2R1bGUiLCJleHBvcnRzIiwicmVkdWNlIiwiY2hpbGRFbGVtZW50IiwiY29uY2F0IiwiYXJndW1lbnQiLCJ0eXBlT2YiLCJnZXRQcm90b3R5cGVPZiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVNLGFBQVNBLFFBQVEsUUFBUixDQUFUO0FBQUEsSUFDRUMsT0FERixHQUNjQyxNQURkLENBQ0VELE9BREY7O0lBR0FFLEs7Ozs7Ozs7a0NBQ2lCQyxhLEVBQWVDLFUsRUFBOEI7QUFBQSx3Q0FBZkMsYUFBZTtBQUFmQSxxQkFBZTtBQUFBOztBQUNoRSxVQUFJQyxVQUFVLElBQWQ7O0FBRUEsVUFBSUgsa0JBQWtCSSxTQUF0QixFQUFpQztBQUMvQkYsd0JBQWdCRyxxQkFBcUJILGFBQXJCLENBQWhCOztBQUVBRCxxQkFBYUssT0FBT0MsTUFBUCxDQUFjO0FBQ3pCTCx5QkFBZUE7QUFEVSxTQUFkLEVBRVZELFVBRlUsQ0FBYjs7QUFJQSxZQUFJLEtBQUosRUFBVyxDQUVWLENBRkQsTUFFTyxJQUFJLE9BQU9ELGFBQVAsS0FBeUIsUUFBN0IsRUFBdUM7QUFDNUMsY0FBTVEsVUFBVVIsYUFBaEI7O0FBRUFHLG9CQUFVTixRQUFRWSx3QkFBUixDQUFpQ0QsT0FBakMsRUFBMENQLFVBQTFDLENBQVY7QUFDRCxTQUpNLE1BSUEsSUFBSVMsU0FBU1YsYUFBVCxFQUF3QkgsT0FBeEIsQ0FBSixFQUFzQztBQUMzQyxjQUFNYyxRQUFRWCxhQUFkLENBRDJDLENBQ2I7O0FBRTlCRyxvQkFBVVEsTUFBTUMsY0FBTixDQUFxQlgsVUFBckIsQ0FBVjtBQUNELFNBSk0sTUFJQSxJQUFJRCxjQUFjYSxTQUFkLENBQXdCQyxNQUE1QixFQUFvQztBQUN6QyxjQUFNSCxTQUFRWCxhQUFkO0FBQUEsY0FBOEI7QUFDeEJlLHFCQUFXLElBQUlKLE1BQUosQ0FBVVYsVUFBVixDQURqQjs7QUFHQUUsb0JBQVVZLFNBQVNELE1BQVQsRUFBVjtBQUNELFNBTE0sTUFLQSxJQUFJLE9BQU9kLGFBQVAsS0FBeUIsVUFBN0IsRUFBeUM7QUFDOUMsY0FBTWdCLGtCQUFrQmhCLGFBQXhCOztBQUVBRyxvQkFBVWEsZ0JBQWdCZixVQUFoQixDQUFWO0FBQ0Q7QUFDRjs7QUFFRCxhQUFPRSxPQUFQO0FBQ0Q7Ozs7OztBQUdIRyxPQUFPVyxjQUFQLENBQXNCQyxNQUF0QixFQUE4QixPQUE5QixFQUF1QztBQUNyQ0MsT0FBSyxlQUFXO0FBQ2QsV0FBT3BCLEtBQVA7QUFDRDtBQUhvQyxDQUF2Qzs7QUFNQXFCLE9BQU9DLE9BQVAsR0FBaUJ0QixLQUFqQjs7QUFFQSxTQUFTTSxvQkFBVCxDQUE4QkgsYUFBOUIsRUFBNkM7QUFDM0NBLGtCQUFnQkEsY0FBY29CLE1BQWQsQ0FBcUIsVUFBU3BCLGFBQVQsRUFBd0JxQixZQUF4QixFQUFzQztBQUFHO0FBQzVFckIsb0JBQWdCQSxjQUFjc0IsTUFBZCxDQUFxQkQsWUFBckIsQ0FBaEI7O0FBRUEsV0FBT3JCLGFBQVA7QUFDRCxHQUplLEVBSWIsRUFKYSxDQUFoQjs7QUFNQSxTQUFPQSxhQUFQO0FBQ0Q7O0FBRUQsU0FBU1EsUUFBVCxDQUFrQmUsUUFBbEIsRUFBNEJkLEtBQTVCLEVBQW1DO0FBQ2pDLE1BQUllLFNBQVMsS0FBYjs7QUFFQSxNQUFJRCxhQUFhZCxLQUFqQixFQUF3QjtBQUFFO0FBQ3hCZSxhQUFTLElBQVQ7QUFDRCxHQUZELE1BRU87QUFDTEQsZUFBV25CLE9BQU9xQixjQUFQLENBQXNCRixRQUF0QixDQUFYLENBREssQ0FDdUM7O0FBRTVDLFFBQUlBLFFBQUosRUFBYztBQUNaQyxlQUFTaEIsU0FBU2UsUUFBVCxFQUFtQmQsS0FBbkIsQ0FBVDtBQUNEO0FBQ0Y7O0FBRUQsU0FBT2UsTUFBUDtBQUNEIiwiZmlsZSI6InJlYWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5dWkgPSByZXF1aXJlKCdlYXN5dWknKSxcbiAgICAgIHsgRWxlbWVudCB9ID0gZWFzeXVpO1xuXG5jbGFzcyBSZWFjdCB7XG4gIHN0YXRpYyBjcmVhdGVFbGVtZW50KGZpcnN0QXJndW1lbnQsIHByb3BlcnRpZXMsIC4uLmNoaWxkRWxlbWVudHMpIHtcbiAgICBsZXQgZWxlbWVudCA9IG51bGw7XG5cbiAgICBpZiAoZmlyc3RBcmd1bWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjaGlsZEVsZW1lbnRzID0gZmxhdHRlbkNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cyk7XG5cbiAgICAgIHByb3BlcnRpZXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgY2hpbGRFbGVtZW50czogY2hpbGRFbGVtZW50c1xuICAgICAgfSwgcHJvcGVydGllcyk7XG5cbiAgICAgIGlmIChmYWxzZSkge1xuXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICBjb25zdCB0YWdOYW1lID0gZmlyc3RBcmd1bWVudDtcblxuICAgICAgICBlbGVtZW50ID0gRWxlbWVudC5mcm9tVGFnTmFtZUFuZFByb3BlcnRpZXModGFnTmFtZSwgcHJvcGVydGllcyk7XG4gICAgICB9IGVsc2UgaWYgKGlzVHlwZU9mKGZpcnN0QXJndW1lbnQsIEVsZW1lbnQpKSB7XG4gICAgICAgIGNvbnN0IENsYXNzID0gZmlyc3RBcmd1bWVudDsgIC8vL1xuXG4gICAgICAgIGVsZW1lbnQgPSBDbGFzcy5mcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcbiAgICAgIH0gZWxzZSBpZiAoZmlyc3RBcmd1bWVudC5wcm90b3R5cGUucmVuZGVyKSB7XG4gICAgICAgIGNvbnN0IENsYXNzID0gZmlyc3RBcmd1bWVudCwgIC8vL1xuICAgICAgICAgICAgICBpbnN0YW5jZSA9IG5ldyBDbGFzcyhwcm9wZXJ0aWVzKTtcblxuICAgICAgICBlbGVtZW50ID0gaW5zdGFuY2UucmVuZGVyKCk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRGdW5jdGlvbiA9IGZpcnN0QXJndW1lbnQ7XG5cbiAgICAgICAgZWxlbWVudCA9IGVsZW1lbnRGdW5jdGlvbihwcm9wZXJ0aWVzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LCAnUmVhY3QnLCB7XG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFJlYWN0O1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdDtcblxuZnVuY3Rpb24gZmxhdHRlbkNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cykge1xuICBjaGlsZEVsZW1lbnRzID0gY2hpbGRFbGVtZW50cy5yZWR1Y2UoZnVuY3Rpb24oY2hpbGRFbGVtZW50cywgY2hpbGRFbGVtZW50KSB7ICAvLy9cbiAgICBjaGlsZEVsZW1lbnRzID0gY2hpbGRFbGVtZW50cy5jb25jYXQoY2hpbGRFbGVtZW50KTtcblxuICAgIHJldHVybiBjaGlsZEVsZW1lbnRzO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG59XG5cbmZ1bmN0aW9uIGlzVHlwZU9mKGFyZ3VtZW50LCBDbGFzcykge1xuICBsZXQgdHlwZU9mID0gZmFsc2U7XG5cbiAgaWYgKGFyZ3VtZW50ID09PSBDbGFzcykgeyAvLy9cbiAgICB0eXBlT2YgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGFyZ3VtZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGFyZ3VtZW50KTsgLy8vXG5cbiAgICBpZiAoYXJndW1lbnQpIHtcbiAgICAgIHR5cGVPZiA9IGlzVHlwZU9mKGFyZ3VtZW50LCBDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHR5cGVPZjtcbn1cbiJdfQ==