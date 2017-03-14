'use strict';

require('../../index.js'); /// easyui-jsx

var Introduction = function Introduction() {
  return React.createElement(
    'section',
    null,
    React.createElement(
      'h2',
      null,
      'Introduction'
    ),
    React.createElement(
      'code',
      { className: 'block' },
      'require(\'easyui-jsx\');\n\nconst easyui = require(\'easyui\'),\n      { Body } = easyui;\n\nconst body = new Body();\n\nbody.append(\n\n  <div className="example">\n    An easy example.\n  </div>\n\n);'
    ),
    React.createElement(
      'p',
      null,
      'These pages showcase the use of ',
      React.createElement(
        'a',
        { href: 'https://facebook.github.io/react/docs/jsx-in-depth.html' },
        'JSX'
      ),
      ' with ',
      React.createElement(
        'a',
        { href: 'https://github.com/djalbat/EasyUI' },
        'EasyUI'
      ),
      '. It is easy to combine these two technologies in practice, as the example shows.'
    ),
    React.createElement(
      'p',
      null,
      'It also turned out not to be very difficult to implement this combination. JSX transpiles into a call to ',
      React.createElement(
        'code',
        { className: 'inline' },
        'React.createClass(...)'
      ),
      '. So all that needed to be done was to ',
      React.createElement(
        'a',
        { href: 'https://github.com/djalbat/EasyUI-JSX/blob/master/es6/react.js' },
        'implement that'
      ),
      ', and then to ',
      React.createElement(
        'a',
        { href: 'https://github.com/djalbat/EasyUI/blob/master/es6/mixin/jsx.js' },
        'augment'
      ),
      ' EasyUI\'s base ',
      React.createElement(
        'code',
        { className: 'inline' },
        'Element'
      ),
      ' class in order to enable elements to apply the properties they were passed.'
    ),
    React.createElement(
      'nav',
      null,
      React.createElement(
        'span',
        { className: 'floatRight' },
        React.createElement(
          'a',
          { href: '#jsxIsGreat' },
          'Next: JSX is great'
        )
      )
    )
  );
};

module.exports = Introduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2NvbnRlbnRzLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJJbnRyb2R1Y3Rpb24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQUEsUUFBUSxnQkFBUixFLENBQTJCOztBQUUzQixJQUFNQyxlQUFlLFNBQWZBLFlBQWUsR0FBTTtBQUN6QixTQUVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERjtBQUVFO0FBQUE7QUFBQSxRQUFNLFdBQVUsT0FBaEI7QUFBQTtBQUFBLEtBRkY7QUFnQkU7QUFBQTtBQUFBO0FBQUE7QUFDa0M7QUFBQTtBQUFBLFVBQUcsTUFBSyx5REFBUjtBQUFBO0FBQUEsT0FEbEM7QUFBQTtBQUNpSDtBQUFBO0FBQUEsVUFBRyxNQUFLLG1DQUFSO0FBQUE7QUFBQSxPQURqSDtBQUFBO0FBQUEsS0FoQkY7QUFvQkU7QUFBQTtBQUFBO0FBQUE7QUFDMkc7QUFBQTtBQUFBLFVBQU0sV0FBVSxRQUFoQjtBQUFBO0FBQUEsT0FEM0c7QUFBQTtBQUV1QztBQUFBO0FBQUEsVUFBRyxNQUFLLGdFQUFSO0FBQUE7QUFBQSxPQUZ2QztBQUFBO0FBR2M7QUFBQTtBQUFBLFVBQUcsTUFBSyxnRUFBUjtBQUFBO0FBQUEsT0FIZDtBQUFBO0FBR2lIO0FBQUE7QUFBQSxVQUFNLFdBQVUsUUFBaEI7QUFBQTtBQUFBLE9BSGpIO0FBQUE7QUFBQSxLQXBCRjtBQXlCRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsVUFBTSxXQUFVLFlBQWhCO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyxhQUFSO0FBQUE7QUFBQTtBQURGO0FBREY7QUF6QkYsR0FGRjtBQW1DRCxDQXBDRDs7QUFzQ0FDLE9BQU9DLE9BQVAsR0FBaUJGLFlBQWpCIiwiZmlsZSI6ImNvbnRlbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCcuLi8uLi9pbmRleC5qcycpOyAvLy8gZWFzeXVpLWpzeFxuXG5jb25zdCBJbnRyb2R1Y3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiAoXG5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxoMj5JbnRyb2R1Y3Rpb248L2gyPlxuICAgICAgPGNvZGUgY2xhc3NOYW1lPVwiYmxvY2tcIj57YHJlcXVpcmUoJ2Vhc3l1aS1qc3gnKTtcblxuY29uc3QgZWFzeXVpID0gcmVxdWlyZSgnZWFzeXVpJyksXG4gICAgICB7IEJvZHkgfSA9IGVhc3l1aTtcblxuY29uc3QgYm9keSA9IG5ldyBCb2R5KCk7XG5cbmJvZHkuYXBwZW5kKFxuXG4gIDxkaXYgY2xhc3NOYW1lPVwiZXhhbXBsZVwiPlxuICAgIEFuIGVhc3kgZXhhbXBsZS5cbiAgPC9kaXY+XG5cbik7YH08L2NvZGU+XG4gICAgICA8cD5cbiAgICAgICAgVGhlc2UgcGFnZXMgc2hvd2Nhc2UgdGhlIHVzZSBvZiA8YSBocmVmPVwiaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvZG9jcy9qc3gtaW4tZGVwdGguaHRtbFwiPkpTWDwvYT4gd2l0aCA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2RqYWxiYXQvRWFzeVVJXCI+RWFzeVVJPC9hPi5cbiAgICAgICAgSXQgaXMgZWFzeSB0byBjb21iaW5lIHRoZXNlIHR3byB0ZWNobm9sb2dpZXMgaW4gcHJhY3RpY2UsIGFzIHRoZSBleGFtcGxlIHNob3dzLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIEl0IGFsc28gdHVybmVkIG91dCBub3QgdG8gYmUgdmVyeSBkaWZmaWN1bHQgdG8gaW1wbGVtZW50IHRoaXMgY29tYmluYXRpb24uIEpTWCB0cmFuc3BpbGVzIGludG8gYSBjYWxsIHRvIDxjb2RlIGNsYXNzTmFtZT1cImlubGluZVwiPlJlYWN0LmNyZWF0ZUNsYXNzKC4uLik8L2NvZGU+LlxuICAgICAgICBTbyBhbGwgdGhhdCBuZWVkZWQgdG8gYmUgZG9uZSB3YXMgdG8gPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9kamFsYmF0L0Vhc3lVSS1KU1gvYmxvYi9tYXN0ZXIvZXM2L3JlYWN0LmpzXCI+aW1wbGVtZW50IHRoYXQ8L2E+LFxuICAgICAgICBhbmQgdGhlbiB0byA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2RqYWxiYXQvRWFzeVVJL2Jsb2IvbWFzdGVyL2VzNi9taXhpbi9qc3guanNcIj5hdWdtZW50PC9hPiBFYXN5VUkncyBiYXNlIDxjb2RlIGNsYXNzTmFtZT1cImlubGluZVwiPkVsZW1lbnQ8L2NvZGU+IGNsYXNzIGluIG9yZGVyIHRvIGVuYWJsZSBlbGVtZW50cyB0byBhcHBseSB0aGUgcHJvcGVydGllcyB0aGV5IHdlcmUgcGFzc2VkLlxuICAgICAgPC9wPlxuICAgICAgPG5hdj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxvYXRSaWdodFwiPlxuICAgICAgICAgIDxhIGhyZWY9XCIjanN4SXNHcmVhdFwiPk5leHQ6IEpTWCBpcyBncmVhdDwvYT5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9uYXY+XG4gICAgPC9zZWN0aW9uPlxuICAgICAgXG4gICk7ICBcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSW50cm9kdWN0aW9uO1xuIl19