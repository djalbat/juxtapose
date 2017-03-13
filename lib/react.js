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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9yZWFjdC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiRWxlbWVudCIsImVhc3l1aSIsIlJlYWN0IiwiZmlyc3RBcmd1bWVudCIsInByb3BlcnRpZXMiLCJjaGlsZEVsZW1lbnRzIiwiZWxlbWVudCIsInVuZGVmaW5lZCIsImZsYXR0ZW5DaGlsZEVsZW1lbnRzIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsImZyb21Qcm9wZXJ0aWVzQW5kVGFnTmFtZSIsImlzVHlwZU9mIiwiQ2xhc3MiLCJmcm9tUHJvcGVydGllcyIsInByb3RvdHlwZSIsInJlbmRlciIsImluc3RhbmNlIiwiZWxlbWVudEZ1bmN0aW9uIiwiZGVmaW5lUHJvcGVydHkiLCJ3aW5kb3ciLCJnZXQiLCJtb2R1bGUiLCJleHBvcnRzIiwicmVkdWNlIiwiY2hpbGRFbGVtZW50IiwiY29uY2F0IiwiYXJndW1lbnQiLCJ0eXBlT2YiLCJnZXRQcm90b3R5cGVPZiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVNLGFBQVNBLFFBQVEsUUFBUixDQUFUO0FBQUEsSUFDRUMsT0FERixHQUNjQyxNQURkLENBQ0VELE9BREY7O0lBR0FFLEs7Ozs7Ozs7a0NBQ2lCQyxhLEVBQWVDLFUsRUFBOEI7QUFBQSx3Q0FBZkMsYUFBZTtBQUFmQSxxQkFBZTtBQUFBOztBQUNoRSxVQUFJQyxVQUFVLElBQWQ7O0FBRUEsVUFBSUgsa0JBQWtCSSxTQUF0QixFQUFpQztBQUMvQkYsd0JBQWdCRyxxQkFBcUJILGFBQXJCLENBQWhCOztBQUVBRCxxQkFBYUssT0FBT0MsTUFBUCxDQUFjO0FBQ3pCTCx5QkFBZUE7QUFEVSxTQUFkLEVBRVZELFVBRlUsQ0FBYjs7QUFJQSxZQUFJLEtBQUosRUFBVyxDQUVWLENBRkQsTUFFTyxJQUFJLE9BQU9ELGFBQVAsS0FBeUIsUUFBN0IsRUFBdUM7QUFDNUMsY0FBTVEsVUFBVVIsYUFBaEIsQ0FENEMsQ0FDWjs7QUFFaENHLG9CQUFVTixRQUFRWSx3QkFBUixDQUFpQ1osT0FBakMsRUFBMENJLFVBQTFDLEVBQXNETyxPQUF0RCxDQUFWO0FBQ0QsU0FKTSxNQUlBLElBQUlFLFNBQVNWLGFBQVQsRUFBd0JILE9BQXhCLENBQUosRUFBc0M7QUFDM0MsY0FBTWMsUUFBUVgsYUFBZCxDQUQyQyxDQUNiOztBQUU5Qkcsb0JBQVVRLE1BQU1DLGNBQU4sQ0FBcUJYLFVBQXJCLENBQVY7QUFDRCxTQUpNLE1BSUEsSUFBSUQsY0FBY2EsU0FBZCxDQUF3QkMsTUFBNUIsRUFBb0M7QUFDekMsY0FBTUgsU0FBUVgsYUFBZDtBQUFBLGNBQThCO0FBQ3hCZSxxQkFBVyxJQUFJSixNQUFKLENBQVVWLFVBQVYsQ0FEakI7O0FBR0FFLG9CQUFVWSxTQUFTRCxNQUFULEVBQVY7QUFDRCxTQUxNLE1BS0EsSUFBSSxPQUFPZCxhQUFQLEtBQXlCLFVBQTdCLEVBQXlDO0FBQzlDLGNBQU1nQixrQkFBa0JoQixhQUF4QixDQUQ4QyxDQUNOOztBQUV4Q0csb0JBQVVhLGdCQUFnQmYsVUFBaEIsQ0FBVjtBQUNEO0FBQ0Y7O0FBRUQsYUFBT0UsT0FBUDtBQUNEOzs7Ozs7QUFHSEcsT0FBT1csY0FBUCxDQUFzQkMsTUFBdEIsRUFBOEIsT0FBOUIsRUFBdUM7QUFDckNDLE9BQUssZUFBVztBQUNkLFdBQU9wQixLQUFQO0FBQ0Q7QUFIb0MsQ0FBdkM7O0FBTUFxQixPQUFPQyxPQUFQLEdBQWlCdEIsS0FBakI7O0FBRUEsU0FBU00sb0JBQVQsQ0FBOEJILGFBQTlCLEVBQTZDO0FBQzNDQSxrQkFBZ0JBLGNBQWNvQixNQUFkLENBQXFCLFVBQVNwQixhQUFULEVBQXdCcUIsWUFBeEIsRUFBc0M7QUFBRztBQUM1RXJCLG9CQUFnQkEsY0FBY3NCLE1BQWQsQ0FBcUJELFlBQXJCLENBQWhCOztBQUVBLFdBQU9yQixhQUFQO0FBQ0QsR0FKZSxFQUliLEVBSmEsQ0FBaEI7O0FBTUEsU0FBT0EsYUFBUDtBQUNEOztBQUVELFNBQVNRLFFBQVQsQ0FBa0JlLFFBQWxCLEVBQTRCZCxLQUE1QixFQUFtQztBQUNqQyxNQUFJZSxTQUFTLEtBQWI7O0FBRUEsTUFBSUQsYUFBYWQsS0FBakIsRUFBd0I7QUFBRTtBQUN4QmUsYUFBUyxJQUFUO0FBQ0QsR0FGRCxNQUVPO0FBQ0xELGVBQVduQixPQUFPcUIsY0FBUCxDQUFzQkYsUUFBdEIsQ0FBWCxDQURLLENBQ3VDOztBQUU1QyxRQUFJQSxRQUFKLEVBQWM7QUFDWkMsZUFBU2hCLFNBQVNlLFFBQVQsRUFBbUJkLEtBQW5CLENBQVQ7QUFDRDtBQUNGOztBQUVELFNBQU9lLE1BQVA7QUFDRCIsImZpbGUiOiJyZWFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeXVpID0gcmVxdWlyZSgnZWFzeXVpJyksXG4gICAgICB7IEVsZW1lbnQgfSA9IGVhc3l1aTtcblxuY2xhc3MgUmVhY3Qge1xuICBzdGF0aWMgY3JlYXRlRWxlbWVudChmaXJzdEFyZ3VtZW50LCBwcm9wZXJ0aWVzLCAuLi5jaGlsZEVsZW1lbnRzKSB7XG4gICAgbGV0IGVsZW1lbnQgPSBudWxsO1xuXG4gICAgaWYgKGZpcnN0QXJndW1lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY2hpbGRFbGVtZW50cyA9IGZsYXR0ZW5DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpO1xuXG4gICAgICBwcm9wZXJ0aWVzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIGNoaWxkRWxlbWVudHM6IGNoaWxkRWxlbWVudHNcbiAgICAgIH0sIHByb3BlcnRpZXMpO1xuXG4gICAgICBpZiAoZmFsc2UpIHtcblxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29uc3QgdGFnTmFtZSA9IGZpcnN0QXJndW1lbnQ7ICAvLy9cblxuICAgICAgICBlbGVtZW50ID0gRWxlbWVudC5mcm9tUHJvcGVydGllc0FuZFRhZ05hbWUoRWxlbWVudCwgcHJvcGVydGllcywgdGFnTmFtZSlcbiAgICAgIH0gZWxzZSBpZiAoaXNUeXBlT2YoZmlyc3RBcmd1bWVudCwgRWxlbWVudCkpIHtcbiAgICAgICAgY29uc3QgQ2xhc3MgPSBmaXJzdEFyZ3VtZW50OyAgLy8vXG5cbiAgICAgICAgZWxlbWVudCA9IENsYXNzLmZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpO1xuICAgICAgfSBlbHNlIGlmIChmaXJzdEFyZ3VtZW50LnByb3RvdHlwZS5yZW5kZXIpIHtcbiAgICAgICAgY29uc3QgQ2xhc3MgPSBmaXJzdEFyZ3VtZW50LCAgLy8vXG4gICAgICAgICAgICAgIGluc3RhbmNlID0gbmV3IENsYXNzKHByb3BlcnRpZXMpO1xuXG4gICAgICAgIGVsZW1lbnQgPSBpbnN0YW5jZS5yZW5kZXIoKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudEZ1bmN0aW9uID0gZmlyc3RBcmd1bWVudDsgIC8vL1xuXG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50RnVuY3Rpb24ocHJvcGVydGllcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdywgJ1JlYWN0Jywge1xuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBSZWFjdDtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cbmZ1bmN0aW9uIGZsYXR0ZW5DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpIHtcbiAgY2hpbGRFbGVtZW50cyA9IGNoaWxkRWxlbWVudHMucmVkdWNlKGZ1bmN0aW9uKGNoaWxkRWxlbWVudHMsIGNoaWxkRWxlbWVudCkgeyAgLy8vXG4gICAgY2hpbGRFbGVtZW50cyA9IGNoaWxkRWxlbWVudHMuY29uY2F0KGNoaWxkRWxlbWVudCk7XG5cbiAgICByZXR1cm4gY2hpbGRFbGVtZW50cztcbiAgfSwgW10pO1xuXG4gIHJldHVybiBjaGlsZEVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiBpc1R5cGVPZihhcmd1bWVudCwgQ2xhc3MpIHtcbiAgbGV0IHR5cGVPZiA9IGZhbHNlO1xuXG4gIGlmIChhcmd1bWVudCA9PT0gQ2xhc3MpIHsgLy8vXG4gICAgdHlwZU9mID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBhcmd1bWVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihhcmd1bWVudCk7IC8vL1xuXG4gICAgaWYgKGFyZ3VtZW50KSB7XG4gICAgICB0eXBlT2YgPSBpc1R5cGVPZihhcmd1bWVudCwgQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0eXBlT2Y7XG59XG4iXX0=