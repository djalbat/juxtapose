'use strict';

require('../../easyui-jsx');

var Next = require('../next'),
    Previous = require('../previous'),
    Contents = require('../contents'),
    BlockCode = require('../blockCode'),
    InlineCode = require('../inlineCode');

var GettingStarted = function GettingStarted() {
  return React.createElement(
    'section',
    null,
    React.createElement(
      'nav',
      null,
      React.createElement(
        Next,
        { href: '#appendingElementsToTheDOM' },
        'Appending elements to the DOM'
      ),
      React.createElement(
        Previous,
        { href: '#jsxIsGreat' },
        'JSX is great'
      ),
      React.createElement(Contents, null)
    ),
    React.createElement(
      'h2',
      null,
      'Getting started'
    ),
    React.createElement(
      BlockCode,
      null,
      'require(\'easyui-jsx\');\n\nconst easyui = require(\'easyui\'),\n      { Body } = easyui;\n\nconst body = new Body();\n\nbody.append(\n\n  <div className="example">\n    An easy example.\n  </div>\n\n);'
    ),
    React.createElement(
      'p',
      null,
      'Instructions for building this example can be found in the readme file. Once it is running, this example can be replaced with any other from this documentation. There are two things that need bearing in mind when doing so:'
    ),
    React.createElement(
      'ol',
      null,
      React.createElement(
        'li',
        null,
        'The ',
        React.createElement(
          InlineCode,
          null,
          '\'use strict\''
        ),
        ' directive is missing from the examples here and should be left in place.'
      ),
      React.createElement(
        'li',
        null,
        'The ',
        React.createElement(
          InlineCode,
          null,
          'require(\'easyui-jsx\')'
        ),
        ' directives here require the actual npm module. However, this is not available from within the project itself and so you must replace it with a local ',
        React.createElement(
          InlineCode,
          null,
          'require(\'./easyui-jsx\')'
        ),
        ' directive.'
      )
    ),
    React.createElement(
      'p',
      null,
      'You are of course free to build the examples entirely outside of this project, the instructions given here and in the readme file are just probably the quickest way to get started for neophytes.'
    )
  );
};

module.exports = GettingStarted;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9kb2NzL3NlY3Rpb25zL2dldHRpbmdTdGFydGVkLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJOZXh0IiwiUHJldmlvdXMiLCJDb250ZW50cyIsIkJsb2NrQ29kZSIsIklubGluZUNvZGUiLCJHZXR0aW5nU3RhcnRlZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBQSxRQUFRLGtCQUFSOztBQUVBLElBQU1DLE9BQU9ELFFBQVEsU0FBUixDQUFiO0FBQUEsSUFDTUUsV0FBV0YsUUFBUSxhQUFSLENBRGpCO0FBQUEsSUFFTUcsV0FBV0gsUUFBUSxhQUFSLENBRmpCO0FBQUEsSUFHTUksWUFBWUosUUFBUSxjQUFSLENBSGxCO0FBQUEsSUFJTUssYUFBYUwsUUFBUSxlQUFSLENBSm5COztBQU1BLElBQU1NLGlCQUFpQixTQUFqQkEsY0FBaUIsR0FBTTtBQUMzQixTQUVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUMsWUFBRDtBQUFBLFVBQU0sTUFBSyw0QkFBWDtBQUFBO0FBQUEsT0FERjtBQUVFO0FBQUMsZ0JBQUQ7QUFBQSxVQUFVLE1BQUssYUFBZjtBQUFBO0FBQUEsT0FGRjtBQUdFLDBCQUFDLFFBQUQ7QUFIRixLQURGO0FBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU5GO0FBT0U7QUFBQyxlQUFEO0FBQUE7QUFBQTtBQUFBLEtBUEY7QUFxQkU7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQXJCRjtBQTBCRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUNKO0FBQUMsb0JBQUQ7QUFBQTtBQUFBO0FBQUEsU0FESTtBQUFBO0FBQUEsT0FERjtBQUlFO0FBQUE7QUFBQTtBQUFBO0FBQ0o7QUFBQyxvQkFBRDtBQUFBO0FBQUE7QUFBQSxTQURJO0FBQUE7QUFFOEY7QUFBQyxvQkFBRDtBQUFBO0FBQUE7QUFBQSxTQUY5RjtBQUFBO0FBQUE7QUFKRixLQTFCRjtBQW1DRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbkNGLEdBRkY7QUEyQ0QsQ0E1Q0Q7O0FBOENBQyxPQUFPQyxPQUFQLEdBQWlCRixjQUFqQiIsImZpbGUiOiJnZXR0aW5nU3RhcnRlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxucmVxdWlyZSgnLi4vLi4vZWFzeXVpLWpzeCcpO1xuXG5jb25zdCBOZXh0ID0gcmVxdWlyZSgnLi4vbmV4dCcpLFxuICAgICAgUHJldmlvdXMgPSByZXF1aXJlKCcuLi9wcmV2aW91cycpLFxuICAgICAgQ29udGVudHMgPSByZXF1aXJlKCcuLi9jb250ZW50cycpLFxuICAgICAgQmxvY2tDb2RlID0gcmVxdWlyZSgnLi4vYmxvY2tDb2RlJyksXG4gICAgICBJbmxpbmVDb2RlID0gcmVxdWlyZSgnLi4vaW5saW5lQ29kZScpO1xuXG5jb25zdCBHZXR0aW5nU3RhcnRlZCA9ICgpID0+IHtcbiAgcmV0dXJuIChcblxuICAgIDxzZWN0aW9uPlxuICAgICAgPG5hdj5cbiAgICAgICAgPE5leHQgaHJlZj1cIiNhcHBlbmRpbmdFbGVtZW50c1RvVGhlRE9NXCI+QXBwZW5kaW5nIGVsZW1lbnRzIHRvIHRoZSBET008L05leHQ+XG4gICAgICAgIDxQcmV2aW91cyBocmVmPVwiI2pzeElzR3JlYXRcIj5KU1ggaXMgZ3JlYXQ8L1ByZXZpb3VzPlxuICAgICAgICA8Q29udGVudHMgLz5cbiAgICAgIDwvbmF2PlxuICAgICAgPGgyPkdldHRpbmcgc3RhcnRlZDwvaDI+XG4gICAgICA8QmxvY2tDb2RlPntgcmVxdWlyZSgnZWFzeXVpLWpzeCcpO1xuXG5jb25zdCBlYXN5dWkgPSByZXF1aXJlKCdlYXN5dWknKSxcbiAgICAgIHsgQm9keSB9ID0gZWFzeXVpO1xuXG5jb25zdCBib2R5ID0gbmV3IEJvZHkoKTtcblxuYm9keS5hcHBlbmQoXG5cbiAgPGRpdiBjbGFzc05hbWU9XCJleGFtcGxlXCI+XG4gICAgQW4gZWFzeSBleGFtcGxlLlxuICA8L2Rpdj5cblxuKTtgfTwvQmxvY2tDb2RlPlxuICAgICAgPHA+XG5JbnN0cnVjdGlvbnMgZm9yIGJ1aWxkaW5nIHRoaXMgZXhhbXBsZSBjYW4gYmUgZm91bmQgaW4gdGhlIHJlYWRtZSBmaWxlLlxuT25jZSBpdCBpcyBydW5uaW5nLCB0aGlzIGV4YW1wbGUgY2FuIGJlIHJlcGxhY2VkIHdpdGggYW55IG90aGVyIGZyb20gdGhpcyBkb2N1bWVudGF0aW9uLlxuVGhlcmUgYXJlIHR3byB0aGluZ3MgdGhhdCBuZWVkIGJlYXJpbmcgaW4gbWluZCB3aGVuIGRvaW5nIHNvOlxuICAgICAgPC9wPlxuICAgICAgPG9sPlxuICAgICAgICA8bGk+XG5UaGUgPElubGluZUNvZGU+J3VzZSBzdHJpY3QnPC9JbmxpbmVDb2RlPiBkaXJlY3RpdmUgaXMgbWlzc2luZyBmcm9tIHRoZSBleGFtcGxlcyBoZXJlIGFuZCBzaG91bGQgYmUgbGVmdCBpbiBwbGFjZS5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuVGhlIDxJbmxpbmVDb2RlPnJlcXVpcmUoJ2Vhc3l1aS1qc3gnKTwvSW5saW5lQ29kZT4gZGlyZWN0aXZlcyBoZXJlIHJlcXVpcmUgdGhlIGFjdHVhbCBucG0gbW9kdWxlLlxuSG93ZXZlciwgdGhpcyBpcyBub3QgYXZhaWxhYmxlIGZyb20gd2l0aGluIHRoZSBwcm9qZWN0IGl0c2VsZiBhbmQgc28geW91IG11c3QgcmVwbGFjZSBpdCB3aXRoIGEgbG9jYWwgPElubGluZUNvZGU+cmVxdWlyZSgnLi9lYXN5dWktanN4Jyk8L0lubGluZUNvZGU+IGRpcmVjdGl2ZS5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvb2w+XG4gICAgICA8cD5cbllvdSBhcmUgb2YgY291cnNlIGZyZWUgdG8gYnVpbGQgdGhlIGV4YW1wbGVzIGVudGlyZWx5IG91dHNpZGUgb2YgdGhpcyBwcm9qZWN0LCB0aGUgaW5zdHJ1Y3Rpb25zIGdpdmVuIGhlcmUgYW5kIGluIHRoZSByZWFkbWUgZmlsZSBhcmUganVzdCBwcm9iYWJseSB0aGUgcXVpY2tlc3Qgd2F5IHRvIGdldCBzdGFydGVkIGZvciBuZW9waHl0ZXMuXG4gICAgICA8L3A+XG4gICAgPC9zZWN0aW9uPlxuICAgICAgXG4gICk7ICBcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gR2V0dGluZ1N0YXJ0ZWQ7XG4iXX0=