'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

require('../index'); /// easyui-jsx

var easyui = require('easyUI'),
    Body = easyui.Body,
    Button = easyui.Button;

var Example = function () {
  function Example() {
    _classCallCheck(this, Example);
  }

  _createClass(Example, [{
    key: 'click',
    value: function click() {
      console.log('clicked!');
    }
  }, {
    key: 'render',
    value: function render() {
      var _this = this;

      return React.createElement(
        'p',
        null,
        React.createElement(
          Button,
          { clickHandler: function clickHandler() {
              _this.click();
            } },
          'Click me!'
        )
      );
    }
  }]);

  return Example;
}();

var example = function example() {
  var body = new Body(),
      example = React.createElement(Example, null);

  body.append(example);
};

module.exports = example;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9leGFtcGxlLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJCb2R5IiwiZWFzeXVpIiwiQnV0dG9uIiwiRXhhbXBsZSIsImNvbnNvbGUiLCJsb2ciLCJjbGljayIsImV4YW1wbGUiLCJib2R5IiwiYXBwZW5kIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBQSxRQUFRLFVBQVIsRSxDQUFzQjs7QUFFaEIsYUFBU0EsUUFBUSxRQUFSLENBQVQ7QUFBQSxJQUNFQyxJQURGLEdBQ21CQyxNQURuQixDQUNFRCxJQURGO0FBQUEsSUFDUUUsTUFEUixHQUNtQkQsTUFEbkIsQ0FDUUMsTUFEUjs7SUFHQUMsTzs7Ozs7Ozs0QkFDSTtBQUNOQyxjQUFRQyxHQUFSLENBQVksVUFBWjtBQUNEOzs7NkJBRVE7QUFBQTs7QUFDUCxhQUVFO0FBQUE7QUFBQTtBQUNFO0FBQUMsZ0JBQUQ7QUFBQSxZQUFRLGNBQWMsd0JBQU07QUFDbEIsb0JBQUtDLEtBQUw7QUFDRCxhQUZUO0FBQUE7QUFBQTtBQURGLE9BRkY7QUFXRDs7Ozs7O0FBR0gsSUFBTUMsVUFBVSxtQkFBTTtBQUNwQixNQUFNQyxPQUFPLElBQUlSLElBQUosRUFBYjtBQUFBLE1BQ01PLFVBRUksb0JBQUMsT0FBRCxPQUhWOztBQU1BQyxPQUFLQyxNQUFMLENBQVlGLE9BQVo7QUFDRCxDQVJEOztBQVVBRyxPQUFPQyxPQUFQLEdBQWlCSixPQUFqQiIsImZpbGUiOiJleGFtcGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCcuLi9pbmRleCcpOyAgLy8vIGVhc3l1aS1qc3hcblxuY29uc3QgZWFzeXVpID0gcmVxdWlyZSgnZWFzeVVJJyksXG4gICAgICB7IEJvZHksIEJ1dHRvbiB9ID0gZWFzeXVpO1xuXG5jbGFzcyBFeGFtcGxlIHtcbiAgY2xpY2soKSB7XG4gICAgY29uc29sZS5sb2coJ2NsaWNrZWQhJylcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8cD5cbiAgICAgICAgPEJ1dHRvbiBjbGlja0hhbmRsZXI9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuY2xpY2soKTtcbiAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICBDbGljayBtZSFcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L3A+XG5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IGV4YW1wbGUgPSAoKSA9PiB7XG4gIGNvbnN0IGJvZHkgPSBuZXcgQm9keSgpLFxuICAgICAgICBleGFtcGxlID1cblxuICAgICAgICAgICAgPEV4YW1wbGUgLz47XG5cblxuICBib2R5LmFwcGVuZChleGFtcGxlKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhhbXBsZTtcbiJdfQ==