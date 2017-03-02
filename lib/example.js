'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

require('../index'); // easyui-jsx

var easyui = require('easyUI'),
    Body = easyui.Body,
    Button = easyui.Button;

var Example = function () {
  function Example(properties) {
    _classCallCheck(this, Example);

    this.properties = properties;
  }

  _createClass(Example, [{
    key: 'click',
    value: function click(message) {
      console.log(message);
    }
  }, {
    key: 'render',
    value: function render(update) {
      var _this = this;

      var message = this.properties.message,
          background = 'lightgray',
          style = {
        background: background
      };


      return React.createElement(
        'p',
        { style: style, className: 'large' },
        React.createElement(
          Button,
          { clickHandler: function clickHandler() {
              _this.click(message);
            } },
          'Click me!'
        ),
        React.createElement(
          'button',
          { onClick: function onClick() {
              _this.click('Also clicked!');
            }
          },
          'Also click me...'
        )
      );
    }
  }]);

  return Example;
}();

var example = function example() {
  var body = new Body(),
      message = 'Clicked...',
      example = React.createElement(Example, { message: message });

  body.append(example);
};

module.exports = example;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9leGFtcGxlLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJCb2R5IiwiZWFzeXVpIiwiQnV0dG9uIiwiRXhhbXBsZSIsInByb3BlcnRpZXMiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsInVwZGF0ZSIsImJhY2tncm91bmQiLCJzdHlsZSIsImNsaWNrIiwiZXhhbXBsZSIsImJvZHkiLCJhcHBlbmQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUFBLFFBQVEsVUFBUixFLENBQXNCOztBQUVoQixhQUFTQSxRQUFRLFFBQVIsQ0FBVDtBQUFBLElBQ0VDLElBREYsR0FDbUJDLE1BRG5CLENBQ0VELElBREY7QUFBQSxJQUNRRSxNQURSLEdBQ21CRCxNQURuQixDQUNRQyxNQURSOztJQUdBQyxPO0FBQ0osbUJBQVlDLFVBQVosRUFBd0I7QUFBQTs7QUFDdEIsU0FBS0EsVUFBTCxHQUFrQkEsVUFBbEI7QUFDRDs7OzswQkFFS0MsTyxFQUFTO0FBQ2JDLGNBQVFDLEdBQVIsQ0FBWUYsT0FBWjtBQUNEOzs7MkJBRU1HLE0sRUFBUTtBQUFBOztBQUNQLFVBQUVILE9BQUYsR0FBYyxLQUFLRCxVQUFuQixDQUFFQyxPQUFGO0FBQUEsVUFDQUksVUFEQSxHQUNhLFdBRGI7QUFBQSxVQUVBQyxLQUZBLEdBRVE7QUFDTkQsb0JBQVlBO0FBRE4sT0FGUjs7O0FBTU4sYUFFRTtBQUFBO0FBQUEsVUFBRyxPQUFPQyxLQUFWLEVBQWlCLFdBQVUsT0FBM0I7QUFDRTtBQUFDLGdCQUFEO0FBQUEsWUFBUSxjQUFjLHdCQUFNO0FBQ2xCLG9CQUFLQyxLQUFMLENBQVdOLE9BQVg7QUFDRCxhQUZUO0FBQUE7QUFBQSxTQURGO0FBTUU7QUFBQTtBQUFBLFlBQVEsU0FBUyxtQkFBTTtBQUNiLG9CQUFLTSxLQUFMLENBQVcsZUFBWDtBQUNEO0FBRlQ7QUFBQTtBQUFBO0FBTkYsT0FGRjtBQWlCRDs7Ozs7O0FBR0gsSUFBTUMsVUFBVSxtQkFBTTtBQUNwQixNQUFNQyxPQUFPLElBQUliLElBQUosRUFBYjtBQUFBLE1BQ01LLFVBQVUsWUFEaEI7QUFBQSxNQUVNTyxVQUVJLG9CQUFDLE9BQUQsSUFBUyxTQUFTUCxPQUFsQixHQUpWOztBQU9BUSxPQUFLQyxNQUFMLENBQVlGLE9BQVo7QUFDRCxDQVREOztBQVdBRyxPQUFPQyxPQUFQLEdBQWlCSixPQUFqQiIsImZpbGUiOiJleGFtcGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCcuLi9pbmRleCcpOyAgLy8gZWFzeXVpLWpzeFxuXG5jb25zdCBlYXN5dWkgPSByZXF1aXJlKCdlYXN5VUknKSxcbiAgICAgIHsgQm9keSwgQnV0dG9uIH0gPSBlYXN5dWk7XG5cbmNsYXNzIEV4YW1wbGUge1xuICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzKSB7XG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcbiAgfVxuXG4gIGNsaWNrKG1lc3NhZ2UpIHtcbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlKVxuICB9XG5cbiAgcmVuZGVyKHVwZGF0ZSkge1xuICAgIGNvbnN0IHsgbWVzc2FnZSB9ID0gdGhpcy5wcm9wZXJ0aWVzLFxuICAgICAgICAgIGJhY2tncm91bmQgPSAnbGlnaHRncmF5JyxcbiAgICAgICAgICBzdHlsZSA9IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGJhY2tncm91bmRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPHAgc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9XCJsYXJnZVwiPlxuICAgICAgICA8QnV0dG9uIGNsaWNrSGFuZGxlcj17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy5jbGljayhtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICBDbGljayBtZSFcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy5jbGljaygnQWxzbyBjbGlja2VkIScpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICBBbHNvIGNsaWNrIG1lLi4uXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9wPlxuXG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBleGFtcGxlID0gKCkgPT4ge1xuICBjb25zdCBib2R5ID0gbmV3IEJvZHkoKSxcbiAgICAgICAgbWVzc2FnZSA9ICdDbGlja2VkLi4uJyxcbiAgICAgICAgZXhhbXBsZSA9XG5cbiAgICAgICAgICAgIDxFeGFtcGxlIG1lc3NhZ2U9e21lc3NhZ2V9IC8+O1xuXG5cbiAgYm9keS5hcHBlbmQoZXhhbXBsZSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4YW1wbGU7XG4iXX0=