'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

require('../../index'); // easyui-jsx

var easyui = require('easyUI'),
    TextArea = easyui.TextArea;

var Form = function () {
  function Form() {
    _classCallCheck(this, Form);
  }

  _createClass(Form, [{
    key: 'render',
    value: function render() {
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
}();

module.exports = Form;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL2Zvcm0uanMiXSwibmFtZXMiOlsicmVxdWlyZSIsIlRleHRBcmVhIiwiZWFzeXVpIiwiRm9ybSIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQUEsUUFBUSxhQUFSLEUsQ0FBeUI7O0FBRW5CLGFBQVNBLFFBQVEsUUFBUixDQUFUO0FBQUEsSUFDRUMsUUFERixHQUNlQyxNQURmLENBQ0VELFFBREY7O0lBR0FFLEk7Ozs7Ozs7NkJBQ0s7QUFDUCxhQUVFO0FBQUE7QUFBQTtBQUNFO0FBQUMsa0JBQUQ7QUFBQSxZQUFVLGVBQWUsdUJBQVNDLEtBQVQsRUFBZ0I7QUFDN0JDLHNCQUFRQyxHQUFSLENBQVlGLEtBQVo7QUFDRDtBQUZYO0FBQUE7QUFBQTtBQURGLE9BRkY7QUFZRDs7Ozs7O0FBR0hHLE9BQU9DLE9BQVAsR0FBaUJMLElBQWpCIiwiZmlsZSI6ImZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnJlcXVpcmUoJy4uLy4uL2luZGV4Jyk7ICAvLyBlYXN5dWktanN4XG5cbmNvbnN0IGVhc3l1aSA9IHJlcXVpcmUoJ2Vhc3lVSScpLFxuICAgICAgeyBUZXh0QXJlYSB9ID0gZWFzeXVpO1xuXG5jbGFzcyBGb3JtIHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxmb3JtPlxuICAgICAgICA8VGV4dEFyZWEgY2hhbmdlSGFuZGxlcj17ZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIFNvbWUgY29udGVudFxuICAgICAgICA8L1RleHRBcmVhPlxuICAgICAgPC9mb3JtPlxuXG4gICAgKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZvcm07XG4iXX0=