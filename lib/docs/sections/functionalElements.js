'use strict';

require('../../easyui-jsx');

var Next = require('../next'),
    Previous = require('../previous'),
    Contents = require('../contents'),
    BlockCode = require('../blockCode'),
    InlineCode = require('../inlineCode');

var FunctionalElements = function FunctionalElements() {
  return React.createElement(
    'section',
    null,
    React.createElement(
      'nav',
      null,
      React.createElement(
        Next,
        { href: '#easyUIElements' },
        'EasyUI elements'
      ),
      React.createElement(
        Previous,
        { href: '#appendingElementsToTheDOM' },
        'Appending elements to the DOM'
      ),
      React.createElement(Contents, null)
    ),
    React.createElement(
      'h2',
      null,
      'Functional elements'
    ),
    React.createElement(
      BlockCode,
      null,
      'require(\'easyui-jsx\');\n\nconst easyui = require(\'easyui\'),\n      { Body } = easyui;\n\nconst Div = (properties) => {\n  const { className } = properties,\n        { childElements } = properties;\n\n  return (\n\n    <div className={className}>\n    {childElements}\n    </div>\n\n  );\n};\n\nconst body = new Body();\n\nbody.append(\n\n  <Div className="example">\n  An easy example.\n  </Div>\n\n);'
    ),
    React.createElement(
      'p',
      null,
      'JSX can be returned from functions. These functions are passed the attributes of the JSX that references them as a ',
      React.createElement(
        InlineCode,
        null,
        'properties'
      ),
      ' argument. The ',
      React.createElement(
        InlineCode,
        null,
        'childElements'
      ),
      ' property of that argument gives access to child elements.'
    ),
    React.createElement(
      'p',
      null,
      'In EasyUI-JSX parlance, in relation to React or Reaction:'
    ),
    React.createElement(
      'ul',
      null,
      React.createElement(
        'li',
        null,
        React.createElement(
          InlineCode,
          null,
          'props'
        ),
        ' becomes ',
        React.createElement(
          InlineCode,
          null,
          'properties'
        )
      ),
      React.createElement(
        'li',
        null,
        React.createElement(
          InlineCode,
          null,
          'children'
        ),
        ' becomes ',
        React.createElement(
          InlineCode,
          null,
          'childElements'
        )
      )
    )
  );
};

module.exports = FunctionalElements;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9kb2NzL3NlY3Rpb25zL2Z1bmN0aW9uYWxFbGVtZW50cy5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiTmV4dCIsIlByZXZpb3VzIiwiQ29udGVudHMiLCJCbG9ja0NvZGUiLCJJbmxpbmVDb2RlIiwiRnVuY3Rpb25hbEVsZW1lbnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUFBLFFBQVEsa0JBQVI7O0FBRUEsSUFBTUMsT0FBT0QsUUFBUSxTQUFSLENBQWI7QUFBQSxJQUNNRSxXQUFXRixRQUFRLGFBQVIsQ0FEakI7QUFBQSxJQUVNRyxXQUFXSCxRQUFRLGFBQVIsQ0FGakI7QUFBQSxJQUdNSSxZQUFZSixRQUFRLGNBQVIsQ0FIbEI7QUFBQSxJQUlNSyxhQUFhTCxRQUFRLGVBQVIsQ0FKbkI7O0FBTUEsSUFBTU0scUJBQXFCLFNBQXJCQSxrQkFBcUIsR0FBTTtBQUMvQixTQUVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUMsWUFBRDtBQUFBLFVBQU0sTUFBSyxpQkFBWDtBQUFBO0FBQUEsT0FERjtBQUVFO0FBQUMsZ0JBQUQ7QUFBQSxVQUFVLE1BQUssNEJBQWY7QUFBQTtBQUFBLE9BRkY7QUFHRSwwQkFBQyxRQUFEO0FBSEYsS0FERjtBQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FORjtBQU9FO0FBQUMsZUFBRDtBQUFBO0FBQUE7QUFBQSxLQVBGO0FBa0NFO0FBQUE7QUFBQTtBQUFBO0FBRWlGO0FBQUMsa0JBQUQ7QUFBQTtBQUFBO0FBQUEsT0FGakY7QUFBQTtBQUdNO0FBQUMsa0JBQUQ7QUFBQTtBQUFBO0FBQUEsT0FITjtBQUFBO0FBQUEsS0FsQ0Y7QUF1Q0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQXZDRjtBQTBDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFDLG9CQUFEO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFBQTtBQUN5QztBQUFDLG9CQUFEO0FBQUE7QUFBQTtBQUFBO0FBRHpDLE9BREY7QUFJRTtBQUFBO0FBQUE7QUFDRTtBQUFDLG9CQUFEO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFBQTtBQUM0QztBQUFDLG9CQUFEO0FBQUE7QUFBQTtBQUFBO0FBRDVDO0FBSkY7QUExQ0YsR0FGRjtBQXVERCxDQXhERDs7QUEwREFDLE9BQU9DLE9BQVAsR0FBaUJGLGtCQUFqQiIsImZpbGUiOiJmdW5jdGlvbmFsRWxlbWVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnJlcXVpcmUoJy4uLy4uL2Vhc3l1aS1qc3gnKTtcblxuY29uc3QgTmV4dCA9IHJlcXVpcmUoJy4uL25leHQnKSxcbiAgICAgIFByZXZpb3VzID0gcmVxdWlyZSgnLi4vcHJldmlvdXMnKSxcbiAgICAgIENvbnRlbnRzID0gcmVxdWlyZSgnLi4vY29udGVudHMnKSxcbiAgICAgIEJsb2NrQ29kZSA9IHJlcXVpcmUoJy4uL2Jsb2NrQ29kZScpLFxuICAgICAgSW5saW5lQ29kZSA9IHJlcXVpcmUoJy4uL2lubGluZUNvZGUnKTtcblxuY29uc3QgRnVuY3Rpb25hbEVsZW1lbnRzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuXG4gICAgPHNlY3Rpb24+XG4gICAgICA8bmF2PlxuICAgICAgICA8TmV4dCBocmVmPVwiI2Vhc3lVSUVsZW1lbnRzXCI+RWFzeVVJIGVsZW1lbnRzPC9OZXh0PlxuICAgICAgICA8UHJldmlvdXMgaHJlZj1cIiNhcHBlbmRpbmdFbGVtZW50c1RvVGhlRE9NXCI+QXBwZW5kaW5nIGVsZW1lbnRzIHRvIHRoZSBET008L1ByZXZpb3VzPlxuICAgICAgICA8Q29udGVudHMgLz5cbiAgICAgIDwvbmF2PlxuICAgICAgPGgyPkZ1bmN0aW9uYWwgZWxlbWVudHM8L2gyPlxuICAgICAgPEJsb2NrQ29kZT57YHJlcXVpcmUoJ2Vhc3l1aS1qc3gnKTtcblxuY29uc3QgZWFzeXVpID0gcmVxdWlyZSgnZWFzeXVpJyksXG4gICAgICB7IEJvZHkgfSA9IGVhc3l1aTtcblxuY29uc3QgRGl2ID0gKHByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgeyBjbGFzc05hbWUgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgIHsgY2hpbGRFbGVtZW50cyB9ID0gcHJvcGVydGllcztcblxuICByZXR1cm4gKFxuXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAge2NoaWxkRWxlbWVudHN9XG4gICAgPC9kaXY+XG5cbiAgKTtcbn07XG5cbmNvbnN0IGJvZHkgPSBuZXcgQm9keSgpO1xuXG5ib2R5LmFwcGVuZChcblxuICA8RGl2IGNsYXNzTmFtZT1cImV4YW1wbGVcIj5cbiAgQW4gZWFzeSBleGFtcGxlLlxuICA8L0Rpdj5cblxuKTtgfTwvQmxvY2tDb2RlPlxuICAgICAgPHA+XG4gICAgICAgIEpTWCBjYW4gYmUgcmV0dXJuZWQgZnJvbSBmdW5jdGlvbnMuXG4gICAgICAgIFRoZXNlIGZ1bmN0aW9ucyBhcmUgcGFzc2VkIHRoZSBhdHRyaWJ1dGVzIG9mIHRoZSBKU1ggdGhhdCByZWZlcmVuY2VzIHRoZW0gYXMgYSA8SW5saW5lQ29kZT5wcm9wZXJ0aWVzPC9JbmxpbmVDb2RlPiBhcmd1bWVudC5cbiAgICAgICAgVGhlIDxJbmxpbmVDb2RlPmNoaWxkRWxlbWVudHM8L0lubGluZUNvZGU+IHByb3BlcnR5IG9mIHRoYXQgYXJndW1lbnQgZ2l2ZXMgYWNjZXNzIHRvIGNoaWxkIGVsZW1lbnRzLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIEluIEVhc3lVSS1KU1ggcGFybGFuY2UsIGluIHJlbGF0aW9uIHRvIFJlYWN0IG9yIFJlYWN0aW9uOlxuICAgICAgPC9wPlxuICAgICAgPHVsPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPElubGluZUNvZGU+cHJvcHM8L0lubGluZUNvZGU+IGJlY29tZXMgPElubGluZUNvZGU+cHJvcGVydGllczwvSW5saW5lQ29kZT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxJbmxpbmVDb2RlPmNoaWxkcmVuPC9JbmxpbmVDb2RlPiBiZWNvbWVzIDxJbmxpbmVDb2RlPmNoaWxkRWxlbWVudHM8L0lubGluZUNvZGU+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvc2VjdGlvbj5cbiAgICAgIFxuICApOyAgXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEZ1bmN0aW9uYWxFbGVtZW50cztcbiJdfQ==