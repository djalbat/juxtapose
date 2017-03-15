'use strict';

require('../../easyui-jsx');

var Next = require('../next'),
    Previous = require('../previous'),
    Contents = require('../contents'),
    BlockCode = require('../blockCode'),
    InlineCode = require('../inlineCode');

var TheRenderMethod = function TheRenderMethod() {
  return React.createElement(
    'section',
    null,
    React.createElement(
      'nav',
      null,
      React.createElement(
        Next,
        { href: '#theExampleOfThisDocumentation' },
        'The example of this documentation'
      ),
      React.createElement(
        Previous,
        { href: '#theRenderMethod' },
        'The ',
        React.createElement(
          InlineCode,
          null,
          'render()'
        ),
        ' method'
      ),
      React.createElement(Contents, null)
    ),
    React.createElement(
      'h2',
      null,
      'Extending an EasyUI class'
    ),
    React.createElement(
      BlockCode,
      null,
      'require(\'easyui-jsx\');\n\nconst easyui = require(\'easyui\'),\n      { Body, Button } = easyui;\n\nclass Example extends Button {\n  click() {\n    const { message } = this.properties;\n\n    alert(message)\n  }\n\n  static fromProperties(properties) {\n    return Button.fromProperties(Example, properties);\n  }\n}\n\nExample.tagName = \'button\'; /// Optional.\n\nconst example = () => {\n  const body = new Body(),\n        example =\n\n          <Example message="Clicked!">\n          Click me...\n          </Example>\n\n        ;\n\n  example.onClick(function() {\n    example.click();\n  });\n\n  body.append(example);\n};'
    ),
    React.createElement(
      'p',
      null,
      'This is the preferred way of creating your own elements and is the way that JSX support has been added to the EasyUI elements themselves.'
    ),
    React.createElement(
      'p',
      null,
      'You can extend any EasyUI class, including the ',
      React.createElement(
        InlineCode,
        null,
        'Element'
      ),
      ' class. Use the static ',
      React.createElement(
        InlineCode,
        null,
        'fromProperties()'
      ),
      ' factory method and from there invoke the ',
      React.createElement(
        InlineCode,
        null,
        'fromProperties()'
      ),
      ' method of the class you are extending.'
    ),
    React.createElement(
      'p',
      null,
      'Note that not only can the ',
      React.createElement(
        InlineCode,
        null,
        'onClick()'
      ),
      ' method can be called, because the ',
      React.createElement(
        InlineCode,
        null,
        'Example'
      ),
      ' class inherits from the ',
      React.createElement(
        InlineCode,
        null,
        'Button'
      ),
      ' class, but also that the ',
      React.createElement(
        InlineCode,
        null,
        'click()'
      ),
      ' method can now be called, because what is returned is an instance of the ',
      React.createElement(
        InlineCode,
        null,
        'Example'
      ),
      ' class.'
    )
  );
};

module.exports = TheRenderMethod;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9kb2NzL3NlY3Rpb25zL2V4dGVuZGluZ0FuRWFzeVVJQ2xhc3MuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsIk5leHQiLCJQcmV2aW91cyIsIkNvbnRlbnRzIiwiQmxvY2tDb2RlIiwiSW5saW5lQ29kZSIsIlRoZVJlbmRlck1ldGhvZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBQSxRQUFRLGtCQUFSOztBQUVBLElBQU1DLE9BQU9ELFFBQVEsU0FBUixDQUFiO0FBQUEsSUFDTUUsV0FBV0YsUUFBUSxhQUFSLENBRGpCO0FBQUEsSUFFTUcsV0FBV0gsUUFBUSxhQUFSLENBRmpCO0FBQUEsSUFHTUksWUFBWUosUUFBUSxjQUFSLENBSGxCO0FBQUEsSUFJTUssYUFBYUwsUUFBUSxlQUFSLENBSm5COztBQU1BLElBQU1NLGtCQUFrQixTQUFsQkEsZUFBa0IsR0FBTTtBQUM1QixTQUVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUMsWUFBRDtBQUFBLFVBQU0sTUFBSyxnQ0FBWDtBQUFBO0FBQUEsT0FERjtBQUVFO0FBQUMsZ0JBQUQ7QUFBQSxVQUFVLE1BQUssa0JBQWY7QUFBQTtBQUFzQztBQUFDLG9CQUFEO0FBQUE7QUFBQTtBQUFBLFNBQXRDO0FBQUE7QUFBQSxPQUZGO0FBR0UsMEJBQUMsUUFBRDtBQUhGLEtBREY7QUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTkY7QUFPRTtBQUFDLGVBQUQ7QUFBQTtBQUFBO0FBQUEsS0FQRjtBQTBDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBMUNGO0FBNkNFO0FBQUE7QUFBQTtBQUFBO0FBQ2lEO0FBQUMsa0JBQUQ7QUFBQTtBQUFBO0FBQUEsT0FEakQ7QUFBQTtBQUVpQjtBQUFDLGtCQUFEO0FBQUE7QUFBQTtBQUFBLE9BRmpCO0FBQUE7QUFFb0c7QUFBQyxrQkFBRDtBQUFBO0FBQUE7QUFBQSxPQUZwRztBQUFBO0FBQUEsS0E3Q0Y7QUFpREU7QUFBQTtBQUFBO0FBQUE7QUFDNkI7QUFBQyxrQkFBRDtBQUFBO0FBQUE7QUFBQSxPQUQ3QjtBQUFBO0FBQ2tHO0FBQUMsa0JBQUQ7QUFBQTtBQUFBO0FBQUEsT0FEbEc7QUFBQTtBQUVXO0FBQUMsa0JBQUQ7QUFBQTtBQUFBO0FBQUEsT0FGWDtBQUFBO0FBRW9FO0FBQUMsa0JBQUQ7QUFBQTtBQUFBO0FBQUEsT0FGcEU7QUFBQTtBQUdpQztBQUFDLGtCQUFEO0FBQUE7QUFBQTtBQUFBLE9BSGpDO0FBQUE7QUFBQTtBQWpERixHQUZGO0FBMkRELENBNUREOztBQThEQUMsT0FBT0MsT0FBUCxHQUFpQkYsZUFBakIiLCJmaWxlIjoiZXh0ZW5kaW5nQW5FYXN5VUlDbGFzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxucmVxdWlyZSgnLi4vLi4vZWFzeXVpLWpzeCcpO1xuXG5jb25zdCBOZXh0ID0gcmVxdWlyZSgnLi4vbmV4dCcpLFxuICAgICAgUHJldmlvdXMgPSByZXF1aXJlKCcuLi9wcmV2aW91cycpLFxuICAgICAgQ29udGVudHMgPSByZXF1aXJlKCcuLi9jb250ZW50cycpLFxuICAgICAgQmxvY2tDb2RlID0gcmVxdWlyZSgnLi4vYmxvY2tDb2RlJyksXG4gICAgICBJbmxpbmVDb2RlID0gcmVxdWlyZSgnLi4vaW5saW5lQ29kZScpO1xuICBcbmNvbnN0IFRoZVJlbmRlck1ldGhvZCA9ICgpID0+IHtcbiAgcmV0dXJuIChcblxuICAgIDxzZWN0aW9uPlxuICAgICAgPG5hdj5cbiAgICAgICAgPE5leHQgaHJlZj1cIiN0aGVFeGFtcGxlT2ZUaGlzRG9jdW1lbnRhdGlvblwiPlRoZSBleGFtcGxlIG9mIHRoaXMgZG9jdW1lbnRhdGlvbjwvTmV4dD5cbiAgICAgICAgPFByZXZpb3VzIGhyZWY9XCIjdGhlUmVuZGVyTWV0aG9kXCI+VGhlIDxJbmxpbmVDb2RlPnJlbmRlcigpPC9JbmxpbmVDb2RlPiBtZXRob2Q8L1ByZXZpb3VzPlxuICAgICAgICA8Q29udGVudHMgLz5cbiAgICAgIDwvbmF2PlxuICAgICAgPGgyPkV4dGVuZGluZyBhbiBFYXN5VUkgY2xhc3M8L2gyPlxuICAgICAgPEJsb2NrQ29kZT57YHJlcXVpcmUoJ2Vhc3l1aS1qc3gnKTtcblxuY29uc3QgZWFzeXVpID0gcmVxdWlyZSgnZWFzeXVpJyksXG4gICAgICB7IEJvZHksIEJ1dHRvbiB9ID0gZWFzeXVpO1xuXG5jbGFzcyBFeGFtcGxlIGV4dGVuZHMgQnV0dG9uIHtcbiAgY2xpY2soKSB7XG4gICAgY29uc3QgeyBtZXNzYWdlIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICBhbGVydChtZXNzYWdlKVxuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICByZXR1cm4gQnV0dG9uLmZyb21Qcm9wZXJ0aWVzKEV4YW1wbGUsIHByb3BlcnRpZXMpO1xuICB9XG59XG5cbkV4YW1wbGUudGFnTmFtZSA9ICdidXR0b24nOyAvLy8gT3B0aW9uYWwuXG5cbmNvbnN0IGV4YW1wbGUgPSAoKSA9PiB7XG4gIGNvbnN0IGJvZHkgPSBuZXcgQm9keSgpLFxuICAgICAgICBleGFtcGxlID1cblxuICAgICAgICAgIDxFeGFtcGxlIG1lc3NhZ2U9XCJDbGlja2VkIVwiPlxuICAgICAgICAgIENsaWNrIG1lLi4uXG4gICAgICAgICAgPC9FeGFtcGxlPlxuXG4gICAgICAgIDtcblxuICBleGFtcGxlLm9uQ2xpY2soZnVuY3Rpb24oKSB7XG4gICAgZXhhbXBsZS5jbGljaygpO1xuICB9KTtcblxuICBib2R5LmFwcGVuZChleGFtcGxlKTtcbn07YH08L0Jsb2NrQ29kZT5cbiAgICAgIDxwPlxuICAgICAgICBUaGlzIGlzIHRoZSBwcmVmZXJyZWQgd2F5IG9mIGNyZWF0aW5nIHlvdXIgb3duIGVsZW1lbnRzIGFuZCBpcyB0aGUgd2F5IHRoYXQgSlNYIHN1cHBvcnQgaGFzIGJlZW4gYWRkZWQgdG8gdGhlIEVhc3lVSSBlbGVtZW50cyB0aGVtc2VsdmVzLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIFlvdSBjYW4gZXh0ZW5kIGFueSBFYXN5VUkgY2xhc3MsIGluY2x1ZGluZyB0aGUgPElubGluZUNvZGU+RWxlbWVudDwvSW5saW5lQ29kZT4gY2xhc3MuXG4gICAgICAgIFVzZSB0aGUgc3RhdGljIDxJbmxpbmVDb2RlPmZyb21Qcm9wZXJ0aWVzKCk8L0lubGluZUNvZGU+IGZhY3RvcnkgbWV0aG9kIGFuZCBmcm9tIHRoZXJlIGludm9rZSB0aGUgPElubGluZUNvZGU+ZnJvbVByb3BlcnRpZXMoKTwvSW5saW5lQ29kZT4gbWV0aG9kIG9mIHRoZSBjbGFzcyB5b3UgYXJlIGV4dGVuZGluZy5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBOb3RlIHRoYXQgbm90IG9ubHkgY2FuIHRoZSA8SW5saW5lQ29kZT5vbkNsaWNrKCk8L0lubGluZUNvZGU+IG1ldGhvZCBjYW4gYmUgY2FsbGVkLCBiZWNhdXNlIHRoZSA8SW5saW5lQ29kZT5FeGFtcGxlPC9JbmxpbmVDb2RlPiBjbGFzcyBpbmhlcml0cyBcbiAgICAgICAgZnJvbSB0aGUgPElubGluZUNvZGU+QnV0dG9uPC9JbmxpbmVDb2RlPiBjbGFzcywgYnV0IGFsc28gdGhhdCB0aGUgPElubGluZUNvZGU+Y2xpY2soKTwvSW5saW5lQ29kZT4gbWV0aG9kIGNhbiBub3cgYmUgY2FsbGVkLCBiZWNhdXNlIHdoYXQgaXMgXG4gICAgICAgIHJldHVybmVkIGlzIGFuIGluc3RhbmNlIG9mIHRoZSA8SW5saW5lQ29kZT5FeGFtcGxlPC9JbmxpbmVDb2RlPiBjbGFzcy4gICAgICBcbiAgICAgIDwvcD5cbiAgICA8L3NlY3Rpb24+XG5cbiAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVGhlUmVuZGVyTWV0aG9kO1xuIl19