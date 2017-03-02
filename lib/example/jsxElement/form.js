'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('../../../index'); ///

var easyui = require('easyUI'),
    Element = easyui.Element,
    TextArea = easyui.TextArea;

var Form = function (_Element) {
  _inherits(Form, _Element);

  function Form() {
    _classCallCheck(this, Form);

    return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).apply(this, arguments));
  }

  _createClass(Form, [{
    key: 'consoleLog',
    value: function consoleLog(value) {
      console.log(value);
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return React.createElement(
        'form',
        null,
        React.createElement(
          TextArea,
          { changeHandler: function changeHandler(value) {
              console.log(value);
            }
          },
          'Some content'
        )
      );
    }
  }]);

  return Form;
}(Element);

module.exports = Form;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL2pzeEVsZW1lbnQvZm9ybS5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiRWxlbWVudCIsImVhc3l1aSIsIlRleHRBcmVhIiwiRm9ybSIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsInByb3BlcnRpZXMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBQSxRQUFRLGdCQUFSLEUsQ0FBNEI7O0FBRXRCLGFBQVNBLFFBQVEsUUFBUixDQUFUO0FBQUEsSUFDRUMsT0FERixHQUN3QkMsTUFEeEIsQ0FDRUQsT0FERjtBQUFBLElBQ1dFLFFBRFgsR0FDd0JELE1BRHhCLENBQ1dDLFFBRFg7O0lBR0FDLEk7Ozs7Ozs7Ozs7OytCQUNPQyxLLEVBQU87QUFDaEJDLGNBQVFDLEdBQVIsQ0FBWUYsS0FBWjtBQUNEOzs7bUNBRXFCRyxVLEVBQVk7QUFDaEMsYUFFRTtBQUFBO0FBQUE7QUFDRTtBQUFDLGtCQUFEO0FBQUEsWUFBVSxlQUFlLHVCQUFTSCxLQUFULEVBQWdCO0FBQzdCQyxzQkFBUUMsR0FBUixDQUFZRixLQUFaO0FBQ0Q7QUFGWDtBQUFBO0FBQUE7QUFERixPQUZGO0FBWUQ7Ozs7RUFsQmdCSixPOztBQXFCbkJRLE9BQU9DLE9BQVAsR0FBaUJOLElBQWpCIiwiZmlsZSI6ImZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnJlcXVpcmUoJy4uLy4uLy4uL2luZGV4Jyk7ICAvLy9cblxuY29uc3QgZWFzeXVpID0gcmVxdWlyZSgnZWFzeVVJJyksXG4gICAgICB7IEVsZW1lbnQsIFRleHRBcmVhIH0gPSBlYXN5dWk7XG5cbmNsYXNzIEZvcm0gZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc29sZUxvZyh2YWx1ZSkge1xuICAgIGNvbnNvbGUubG9nKHZhbHVlKVxuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8Zm9ybT5cbiAgICAgICAgPFRleHRBcmVhIGNoYW5nZUhhbmRsZXI9e2Z1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBTb21lIGNvbnRlbnRcbiAgICAgICAgPC9UZXh0QXJlYT5cbiAgICAgIDwvZm9ybT5cblxuICAgICk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGb3JtO1xuIl19