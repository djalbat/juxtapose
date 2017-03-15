'use strict';

require('../../easyui-jsx');

var Next = require('../next'),
    Contents = require('../contents'),
    BlockCode = require('../blockCode'),
    InlineCode = require('../inlineCode');

var Introduction = function Introduction() {
  return React.createElement(
    'section',
    null,
    React.createElement(
      'nav',
      null,
      React.createElement(
        Next,
        { href: '#jsxIsGreat' },
        'JSX is great'
      ),
      React.createElement(Contents, null)
    ),
    React.createElement(
      'h2',
      null,
      'Introduction'
    ),
    React.createElement(
      BlockCode,
      null,
      'require(\'easyui-jsx\');\n\nconst easyui = require(\'easyui\'),\n      { Body } = easyui;\n\nconst body = new Body();\n\nbody.append(\n\n  <div className="example">\n    An easy example.\n  </div>\n\n);'
    ),
    React.createElement(
      'p',
      null,
      'These pages give some examples of the use of ',
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
      '. It is easy to combine these two technologies in practice, as the first example shows.'
    ),
    React.createElement(
      'p',
      null,
      'It also turned out not to be very difficult to implement this combination. JSX transpiles into a call to ',
      React.createElement(
        InlineCode,
        null,
        'React.createClass(...)'
      ),
      '. So all that needed to be done was to ',
      React.createElement(
        'a',
        { href: 'https://github.com/djalbat/EasyUI-JSX/blob/master/es6/easyui-jsx.js' },
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
        InlineCode,
        null,
        'Element'
      ),
      ' class in order to enable elements to apply the properties they are passed.'
    )
  );
};

module.exports = Introduction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9kb2NzL3NlY3Rpb25zL2ludHJvZHVjdGlvbi5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiTmV4dCIsIkNvbnRlbnRzIiwiQmxvY2tDb2RlIiwiSW5saW5lQ29kZSIsIkludHJvZHVjdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBQSxRQUFRLGtCQUFSOztBQUVBLElBQU1DLE9BQU9ELFFBQVEsU0FBUixDQUFiO0FBQUEsSUFDTUUsV0FBV0YsUUFBUSxhQUFSLENBRGpCO0FBQUEsSUFFTUcsWUFBWUgsUUFBUSxjQUFSLENBRmxCO0FBQUEsSUFHTUksYUFBYUosUUFBUSxlQUFSLENBSG5COztBQUtBLElBQU1LLGVBQWUsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCLFNBRUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQyxZQUFEO0FBQUEsVUFBTSxNQUFLLGFBQVg7QUFBQTtBQUFBLE9BREY7QUFFRSwwQkFBQyxRQUFEO0FBRkYsS0FERjtBQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FMRjtBQU1FO0FBQUMsZUFBRDtBQUFBO0FBQUE7QUFBQSxLQU5GO0FBb0JFO0FBQUE7QUFBQTtBQUFBO0FBQytDO0FBQUE7QUFBQSxVQUFHLE1BQUsseURBQVI7QUFBQTtBQUFBLE9BRC9DO0FBQUE7QUFDOEg7QUFBQTtBQUFBLFVBQUcsTUFBSyxtQ0FBUjtBQUFBO0FBQUEsT0FEOUg7QUFBQTtBQUFBLEtBcEJGO0FBd0JFO0FBQUE7QUFBQTtBQUFBO0FBQzJHO0FBQUMsa0JBQUQ7QUFBQTtBQUFBO0FBQUEsT0FEM0c7QUFBQTtBQUV1QztBQUFBO0FBQUEsVUFBRyxNQUFLLHFFQUFSO0FBQUE7QUFBQSxPQUZ2QztBQUFBO0FBR2M7QUFBQTtBQUFBLFVBQUcsTUFBSyxnRUFBUjtBQUFBO0FBQUEsT0FIZDtBQUFBO0FBR2lIO0FBQUMsa0JBQUQ7QUFBQTtBQUFBO0FBQUEsT0FIakg7QUFBQTtBQUFBO0FBeEJGLEdBRkY7QUFrQ0QsQ0FuQ0Q7O0FBcUNBQyxPQUFPQyxPQUFQLEdBQWlCRixZQUFqQiIsImZpbGUiOiJpbnRyb2R1Y3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnJlcXVpcmUoJy4uLy4uL2Vhc3l1aS1qc3gnKTtcblxuY29uc3QgTmV4dCA9IHJlcXVpcmUoJy4uL25leHQnKSxcbiAgICAgIENvbnRlbnRzID0gcmVxdWlyZSgnLi4vY29udGVudHMnKSxcbiAgICAgIEJsb2NrQ29kZSA9IHJlcXVpcmUoJy4uL2Jsb2NrQ29kZScpLFxuICAgICAgSW5saW5lQ29kZSA9IHJlcXVpcmUoJy4uL2lubGluZUNvZGUnKTtcblxuY29uc3QgSW50cm9kdWN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gKFxuXG4gICAgPHNlY3Rpb24+XG4gICAgICA8bmF2PlxuICAgICAgICA8TmV4dCBocmVmPVwiI2pzeElzR3JlYXRcIj5KU1ggaXMgZ3JlYXQ8L05leHQ+XG4gICAgICAgIDxDb250ZW50cyAvPlxuICAgICAgPC9uYXY+XG4gICAgICA8aDI+SW50cm9kdWN0aW9uPC9oMj5cbiAgICAgIDxCbG9ja0NvZGU+e2ByZXF1aXJlKCdlYXN5dWktanN4Jyk7XG5cbmNvbnN0IGVhc3l1aSA9IHJlcXVpcmUoJ2Vhc3l1aScpLFxuICAgICAgeyBCb2R5IH0gPSBlYXN5dWk7XG5cbmNvbnN0IGJvZHkgPSBuZXcgQm9keSgpO1xuXG5ib2R5LmFwcGVuZChcblxuICA8ZGl2IGNsYXNzTmFtZT1cImV4YW1wbGVcIj5cbiAgICBBbiBlYXN5IGV4YW1wbGUuXG4gIDwvZGl2PlxuXG4pO2B9PC9CbG9ja0NvZGU+XG4gICAgICA8cD5cbiAgICAgICAgVGhlc2UgcGFnZXMgZ2l2ZSBzb21lIGV4YW1wbGVzIG9mIHRoZSB1c2Ugb2YgPGEgaHJlZj1cImh0dHBzOi8vZmFjZWJvb2suZ2l0aHViLmlvL3JlYWN0L2RvY3MvanN4LWluLWRlcHRoLmh0bWxcIj5KU1g8L2E+IHdpdGggPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9kamFsYmF0L0Vhc3lVSVwiPkVhc3lVSTwvYT4uXG4gICAgICAgIEl0IGlzIGVhc3kgdG8gY29tYmluZSB0aGVzZSB0d28gdGVjaG5vbG9naWVzIGluIHByYWN0aWNlLCBhcyB0aGUgZmlyc3QgZXhhbXBsZSBzaG93cy5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBJdCBhbHNvIHR1cm5lZCBvdXQgbm90IHRvIGJlIHZlcnkgZGlmZmljdWx0IHRvIGltcGxlbWVudCB0aGlzIGNvbWJpbmF0aW9uLiBKU1ggdHJhbnNwaWxlcyBpbnRvIGEgY2FsbCB0byA8SW5saW5lQ29kZT5SZWFjdC5jcmVhdGVDbGFzcyguLi4pPC9JbmxpbmVDb2RlPi5cbiAgICAgICAgU28gYWxsIHRoYXQgbmVlZGVkIHRvIGJlIGRvbmUgd2FzIHRvIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZGphbGJhdC9FYXN5VUktSlNYL2Jsb2IvbWFzdGVyL2VzNi9lYXN5dWktanN4LmpzXCI+aW1wbGVtZW50IHRoYXQ8L2E+LFxuICAgICAgICBhbmQgdGhlbiB0byA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2RqYWxiYXQvRWFzeVVJL2Jsb2IvbWFzdGVyL2VzNi9taXhpbi9qc3guanNcIj5hdWdtZW50PC9hPiBFYXN5VUkncyBiYXNlIDxJbmxpbmVDb2RlPkVsZW1lbnQ8L0lubGluZUNvZGU+IGNsYXNzIGluIG9yZGVyIHRvIGVuYWJsZSBlbGVtZW50cyB0byBhcHBseSB0aGUgcHJvcGVydGllcyB0aGV5IGFyZSBwYXNzZWQuXG4gICAgICA8L3A+XG4gICAgPC9zZWN0aW9uPlxuICAgICAgXG4gICk7ICBcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSW50cm9kdWN0aW9uO1xuIl19