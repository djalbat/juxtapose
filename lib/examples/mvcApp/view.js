'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy');

var Message = require('./view/message'),
    PasswordForm = require('./view/passwordForm'),
    ResetPasswordButton = require('./view/resetPasswordButton');

var Element = easy.Element;

var View = function (_Element) {
  _inherits(View, _Element);

  function View() {
    _classCallCheck(this, View);

    return _possibleConstructorReturn(this, (View.__proto__ || Object.getPrototypeOf(View)).apply(this, arguments));
  }

  _createClass(View, [{
    key: 'childElements',
    value: function childElements() {
      return [React.createElement(PasswordForm, null), React.createElement(ResetPasswordButton, null), React.createElement(Message, null)];
    }
  }, {
    key: 'initialise',
    value: function initialise() {
      this.assignContext();
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var view = Element.fromProperties(View, properties);

      view.initialise();

      return view;
    }
  }]);

  return View;
}(Element);

Object.assign(View, {
  tagName: 'div',
  defaultProperties: {
    className: 'view'
  }
});

module.exports = View;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlcy9tdmNBcHAvdmlldy5qcyJdLCJuYW1lcyI6WyJlYXN5IiwicmVxdWlyZSIsIk1lc3NhZ2UiLCJQYXNzd29yZEZvcm0iLCJSZXNldFBhc3N3b3JkQnV0dG9uIiwiRWxlbWVudCIsIlZpZXciLCJhc3NpZ25Db250ZXh0IiwicHJvcGVydGllcyIsInZpZXciLCJmcm9tUHJvcGVydGllcyIsImluaXRpYWxpc2UiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsTUFBUixDQUFiOztBQUVBLElBQU1DLFVBQVVELFFBQVEsZ0JBQVIsQ0FBaEI7QUFBQSxJQUNNRSxlQUFlRixRQUFRLHFCQUFSLENBRHJCO0FBQUEsSUFFTUcsc0JBQXNCSCxRQUFRLDRCQUFSLENBRjVCOztJQUlRSSxPLEdBQVlMLEksQ0FBWkssTzs7SUFFRkMsSTs7Ozs7Ozs7Ozs7b0NBQ1k7QUFDZCxhQUFPLENBRUwsb0JBQUMsWUFBRCxPQUZLLEVBR0wsb0JBQUMsbUJBQUQsT0FISyxFQUlMLG9CQUFDLE9BQUQsT0FKSyxDQUFQO0FBT0Q7OztpQ0FFWTtBQUNYLFdBQUtDLGFBQUw7QUFDRDs7O21DQUVxQkMsVSxFQUFZO0FBQ2hDLFVBQU1DLE9BQU9KLFFBQVFLLGNBQVIsQ0FBdUJKLElBQXZCLEVBQTZCRSxVQUE3QixDQUFiOztBQUVBQyxXQUFLRSxVQUFMOztBQUVBLGFBQU9GLElBQVA7QUFDRDs7OztFQXJCZ0JKLE87O0FBd0JuQk8sT0FBT0MsTUFBUCxDQUFjUCxJQUFkLEVBQW9CO0FBQ2xCUSxXQUFTLEtBRFM7QUFFbEJDLHFCQUFtQjtBQUNqQkMsZUFBVztBQURNO0FBRkQsQ0FBcEI7O0FBT0FDLE9BQU9DLE9BQVAsR0FBaUJaLElBQWpCIiwiZmlsZSI6InZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5Jyk7XG5cbmNvbnN0IE1lc3NhZ2UgPSByZXF1aXJlKCcuL3ZpZXcvbWVzc2FnZScpLFxuICAgICAgUGFzc3dvcmRGb3JtID0gcmVxdWlyZSgnLi92aWV3L3Bhc3N3b3JkRm9ybScpLFxuICAgICAgUmVzZXRQYXNzd29yZEJ1dHRvbiA9IHJlcXVpcmUoJy4vdmlldy9yZXNldFBhc3N3b3JkQnV0dG9uJyk7XG5cbmNvbnN0IHsgRWxlbWVudCB9ID0gZWFzeTtcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybihbXG5cbiAgICAgIDxQYXNzd29yZEZvcm0gLz4sXG4gICAgICA8UmVzZXRQYXNzd29yZEJ1dHRvbiAvPixcbiAgICAgIDxNZXNzYWdlIC8+XG5cbiAgICBdKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHZpZXcgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFZpZXcsIHByb3BlcnRpZXMpO1xuXG4gICAgdmlldy5pbml0aWFsaXNlKCk7XG5cbiAgICByZXR1cm4gdmlldztcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFZpZXcsIHtcbiAgdGFnTmFtZTogJ2RpdicsXG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgY2xhc3NOYW1lOiAndmlldydcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gVmlldztcbiJdfQ==