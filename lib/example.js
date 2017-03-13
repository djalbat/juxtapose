'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('../index.js');

var easyui = require('easyui'),
    Body = easyui.Body,
    Button = easyui.Button;

var Example = function (_Button) {
  _inherits(Example, _Button);

  function Example() {
    _classCallCheck(this, Example);

    return _possibleConstructorReturn(this, (Example.__proto__ || Object.getPrototypeOf(Example)).apply(this, arguments));
  }

  _createClass(Example, [{
    key: 'click',
    value: function click() {
      var message = this.properties.message;


      alert(message);
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return Button.fromProperties(Example, properties);
    }
  }]);

  return Example;
}(Button);

Example.tagName = 'button';

var example = function example() {
  var body = new Body(),
      example = React.createElement(
    Example,
    { message: 'Clicked!' },
    'Click me...'
  );

  example.onClick(function () {
    example.click();
  });

  body.append(example);
};

module.exports = example;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9leGFtcGxlLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJCb2R5IiwiZWFzeXVpIiwiQnV0dG9uIiwiRXhhbXBsZSIsIm1lc3NhZ2UiLCJwcm9wZXJ0aWVzIiwiYWxlcnQiLCJmcm9tUHJvcGVydGllcyIsInRhZ05hbWUiLCJleGFtcGxlIiwiYm9keSIsIm9uQ2xpY2siLCJjbGljayIsImFwcGVuZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUFBLFFBQVEsYUFBUjs7QUFFTSxhQUFTQSxRQUFRLFFBQVIsQ0FBVDtBQUFBLElBQ0VDLElBREYsR0FDbUJDLE1BRG5CLENBQ0VELElBREY7QUFBQSxJQUNRRSxNQURSLEdBQ21CRCxNQURuQixDQUNRQyxNQURSOztJQUdBQyxPOzs7Ozs7Ozs7Ozs0QkFDSTtBQUFBLFVBQ0VDLE9BREYsR0FDYyxLQUFLQyxVQURuQixDQUNFRCxPQURGOzs7QUFHTkUsWUFBTUYsT0FBTjtBQUNEOzs7bUNBRXFCQyxVLEVBQVk7QUFDaEMsYUFBT0gsT0FBT0ssY0FBUCxDQUFzQkosT0FBdEIsRUFBK0JFLFVBQS9CLENBQVA7QUFDRDs7OztFQVRtQkgsTTs7QUFZdEJDLFFBQVFLLE9BQVIsR0FBa0IsUUFBbEI7O0FBRUEsSUFBTUMsVUFBVSxtQkFBTTtBQUNwQixNQUFNQyxPQUFPLElBQUlWLElBQUosRUFBYjtBQUFBLE1BQ01TLFVBQVU7QUFBQyxXQUFEO0FBQUEsTUFBUyxTQUFRLFVBQWpCO0FBQUE7QUFBQSxHQURoQjs7QUFHQUEsVUFBUUUsT0FBUixDQUFnQixZQUFXO0FBQ3pCRixZQUFRRyxLQUFSO0FBQ0QsR0FGRDs7QUFJQUYsT0FBS0csTUFBTCxDQUFZSixPQUFaO0FBQ0QsQ0FURDs7QUFXQUssT0FBT0MsT0FBUCxHQUFpQk4sT0FBakIiLCJmaWxlIjoiZXhhbXBsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxucmVxdWlyZSgnLi4vaW5kZXguanMnKTtcblxuY29uc3QgZWFzeXVpID0gcmVxdWlyZSgnZWFzeXVpJyksXG4gICAgICB7IEJvZHksIEJ1dHRvbiB9ID0gZWFzeXVpO1xuXG5jbGFzcyBFeGFtcGxlIGV4dGVuZHMgQnV0dG9uIHtcbiAgY2xpY2soKSB7XG4gICAgY29uc3QgeyBtZXNzYWdlIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICBhbGVydChtZXNzYWdlKVxuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICByZXR1cm4gQnV0dG9uLmZyb21Qcm9wZXJ0aWVzKEV4YW1wbGUsIHByb3BlcnRpZXMpO1xuICB9XG59XG5cbkV4YW1wbGUudGFnTmFtZSA9ICdidXR0b24nO1xuXG5jb25zdCBleGFtcGxlID0gKCkgPT4ge1xuICBjb25zdCBib2R5ID0gbmV3IEJvZHkoKSxcbiAgICAgICAgZXhhbXBsZSA9IDxFeGFtcGxlIG1lc3NhZ2U9XCJDbGlja2VkIVwiPkNsaWNrIG1lLi4uPC9FeGFtcGxlPjtcblxuICBleGFtcGxlLm9uQ2xpY2soZnVuY3Rpb24oKSB7XG4gICAgZXhhbXBsZS5jbGljaygpO1xuICB9KTtcblxuICBib2R5LmFwcGVuZChleGFtcGxlKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhhbXBsZTtcbiJdfQ==