'use strict';

require('../../easyui-jsx');

var easyui = require('easyui'),
    Input = easyui.Input,
    Textarea = easyui.Textarea,
    Select = easyui.Select;


var Next = require('../next'),
    Previous = require('../previous'),
    Contents = require('../contents'),
    BlockCode = require('../blockCode'),
    InlineCode = require('../inlineCode');

var ASimpleForm = function ASimpleForm() {
  var textarea = React.createElement(Textarea, { placeholder: 'A textarea' }),
      input = React.createElement(Input, { nametype: 'text', placeholder: 'A text input' });

  return React.createElement(
    'section',
    null,
    React.createElement(
      'nav',
      null,
      React.createElement(
        Previous,
        { href: '#theElementClass' },
        'The ',
        React.createElement(
          'code',
          { className: 'inline' },
          'Element'
        ),
        ' class'
      ),
      React.createElement(Contents, null)
    ),
    React.createElement(
      'h2',
      null,
      'A simple form'
    ),
    React.createElement(
      BlockCode,
      null,
      'const easyui = require(\'easyui\'),\n      { Input, Textarea, Select } = easyui;\n\nconst textarea = <Textarea />,\n      input = <Input type="text" />;\n\n<form>\n  {input}\n  {textarea}\n  <Select onChange={(value) => {\n            input.setValue(value);\n          }}\n  >\n    <option value="Al">A</option>\n    <option value="Bill">B</option>\n    <option value="Chuck">C</option>\n    <option value="Dick" selected>D</option>\n  </Select>\n  <button onClick={(event) => {\n            const value = input.getValue(),\n                  preventDefault = true;\n\n            textarea.setValue(value);\n            \n            return preventDefault;\n          }}\n  >\n  Submit\n  </button>\n</form>'
    ),
    React.createElement(
      'p',
      null,
      'You can use EasyUI\'s form element classes or lower case tag names. The somewhat contrived example here uses a combination of both.'
    ),
    React.createElement(
      'p',
      null,
      'The advantage of using EasyUI\'s form element classes is that they support various methods that will be helpful. Event handlers will receive pertinent arguments, for example, rather than a DOM event object. Check the ',
      React.createElement(
        'a',
        { href: 'https://github.com/djalbat/EasyUI' },
        'EasyUI documentation'
      ),
      ' and accompanying source code for details. Handlers that are treated specially will be passed to the requisite constructors.'
    ),
    React.createElement(
      'p',
      null,
      'Here the ',
      React.createElement(
        InlineCode,
        null,
        'Select'
      ),
      ' class is used and so the change handler is passed the selected option\'s value whenever it changes. By contrast the ',
      React.createElement(
        InlineCode,
        null,
        'Element'
      ),
      ' class is used for the button. In this case the DOM event object will be passed to the click handler and this is simply ignored.'
    ),
    React.createElement(
      'form',
      null,
      input,
      textarea,
      React.createElement(
        Select,
        { onChange: function onChange(value) {
            input.setValue(value);
          }
        },
        React.createElement(
          'option',
          { value: 'Al' },
          'A'
        ),
        React.createElement(
          'option',
          { value: 'Bill' },
          'B'
        ),
        React.createElement(
          'option',
          { value: 'Chuck' },
          'C'
        ),
        React.createElement(
          'option',
          { value: 'Dick', selected: true },
          'D'
        )
      ),
      React.createElement(
        'button',
        { onClick: function onClick(event) {
            var value = input.getValue(),
                preventDefault = true;

            textarea.setValue(value);

            return preventDefault;
          }
        },
        'Submit'
      )
    )
  );
};

module.exports = ASimpleForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9kb2NzL3NlY3Rpb25zL2FTaW1wbGVGb3JtLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJJbnB1dCIsImVhc3l1aSIsIlRleHRhcmVhIiwiU2VsZWN0IiwiTmV4dCIsIlByZXZpb3VzIiwiQ29udGVudHMiLCJCbG9ja0NvZGUiLCJJbmxpbmVDb2RlIiwiQVNpbXBsZUZvcm0iLCJ0ZXh0YXJlYSIsImlucHV0IiwidmFsdWUiLCJzZXRWYWx1ZSIsImV2ZW50IiwiZ2V0VmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBQSxRQUFRLGtCQUFSOztBQUVNLGFBQVNBLFFBQVEsUUFBUixDQUFUO0FBQUEsSUFDRUMsS0FERixHQUM4QkMsTUFEOUIsQ0FDRUQsS0FERjtBQUFBLElBQ1NFLFFBRFQsR0FDOEJELE1BRDlCLENBQ1NDLFFBRFQ7QUFBQSxJQUNtQkMsTUFEbkIsR0FDOEJGLE1BRDlCLENBQ21CRSxNQURuQjs7O0FBR04sSUFBTUMsT0FBT0wsUUFBUSxTQUFSLENBQWI7QUFBQSxJQUNNTSxXQUFXTixRQUFRLGFBQVIsQ0FEakI7QUFBQSxJQUVNTyxXQUFXUCxRQUFRLGFBQVIsQ0FGakI7QUFBQSxJQUdNUSxZQUFZUixRQUFRLGNBQVIsQ0FIbEI7QUFBQSxJQUlNUyxhQUFhVCxRQUFRLGVBQVIsQ0FKbkI7O0FBTUEsSUFBTVUsY0FBYyxTQUFkQSxXQUFjLEdBQU07QUFDeEIsTUFBTUMsV0FBVyxvQkFBQyxRQUFELElBQVUsYUFBWSxZQUF0QixHQUFqQjtBQUFBLE1BQ01DLFFBQVEsb0JBQUMsS0FBRCxJQUFPLFVBQVMsTUFBaEIsRUFBdUIsYUFBWSxjQUFuQyxHQURkOztBQUdBLFNBRUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQyxnQkFBRDtBQUFBLFVBQVUsTUFBSyxrQkFBZjtBQUFBO0FBQXNDO0FBQUE7QUFBQSxZQUFNLFdBQVUsUUFBaEI7QUFBQTtBQUFBLFNBQXRDO0FBQUE7QUFBQSxPQURGO0FBRUUsMEJBQUMsUUFBRDtBQUZGLEtBREY7QUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTEY7QUFNRTtBQUFDLGVBQUQ7QUFBQTtBQUFBO0FBQUEsS0FORjtBQW9DRTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBcENGO0FBd0NFO0FBQUE7QUFBQTtBQUFBO0FBR1k7QUFBQTtBQUFBLFVBQUcsTUFBSyxtQ0FBUjtBQUFBO0FBQUEsT0FIWjtBQUFBO0FBQUEsS0F4Q0Y7QUE4Q0U7QUFBQTtBQUFBO0FBQUE7QUFDVztBQUFDLGtCQUFEO0FBQUE7QUFBQTtBQUFBLE9BRFg7QUFBQTtBQUVrQjtBQUFDLGtCQUFEO0FBQUE7QUFBQTtBQUFBLE9BRmxCO0FBQUE7QUFBQSxLQTlDRjtBQW1ERTtBQUFBO0FBQUE7QUFDR0EsV0FESDtBQUVHRCxjQUZIO0FBR0U7QUFBQyxjQUFEO0FBQUEsVUFBUSxVQUFVLGtCQUFDRSxLQUFELEVBQVc7QUFDbkJELGtCQUFNRSxRQUFOLENBQWVELEtBQWY7QUFDRDtBQUZUO0FBSUU7QUFBQTtBQUFBLFlBQVEsT0FBTSxJQUFkO0FBQUE7QUFBQSxTQUpGO0FBS0U7QUFBQTtBQUFBLFlBQVEsT0FBTSxNQUFkO0FBQUE7QUFBQSxTQUxGO0FBTUU7QUFBQTtBQUFBLFlBQVEsT0FBTSxPQUFkO0FBQUE7QUFBQSxTQU5GO0FBT0U7QUFBQTtBQUFBLFlBQVEsT0FBTSxNQUFkLEVBQXFCLGNBQXJCO0FBQUE7QUFBQTtBQVBGLE9BSEY7QUFZRTtBQUFBO0FBQUEsVUFBUSxTQUFTLGlCQUFDRSxLQUFELEVBQVc7QUFDVixnQkFBTUYsUUFBUUQsTUFBTUksUUFBTixFQUFkO0FBQUEsZ0JBQ01DLGlCQUFpQixJQUR2Qjs7QUFHQU4scUJBQVNHLFFBQVQsQ0FBa0JELEtBQWxCOztBQUVBLG1CQUFPSSxjQUFQO0FBQ0Q7QUFQakI7QUFBQTtBQUFBO0FBWkY7QUFuREYsR0FGRjtBQWdGRCxDQXBGRDs7QUFzRkFDLE9BQU9DLE9BQVAsR0FBaUJULFdBQWpCIiwiZmlsZSI6ImFTaW1wbGVGb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCcuLi8uLi9lYXN5dWktanN4Jyk7XG5cbmNvbnN0IGVhc3l1aSA9IHJlcXVpcmUoJ2Vhc3l1aScpLFxuICAgICAgeyBJbnB1dCwgVGV4dGFyZWEsIFNlbGVjdCB9ID0gZWFzeXVpO1xuXG5jb25zdCBOZXh0ID0gcmVxdWlyZSgnLi4vbmV4dCcpLFxuICAgICAgUHJldmlvdXMgPSByZXF1aXJlKCcuLi9wcmV2aW91cycpLFxuICAgICAgQ29udGVudHMgPSByZXF1aXJlKCcuLi9jb250ZW50cycpLFxuICAgICAgQmxvY2tDb2RlID0gcmVxdWlyZSgnLi4vYmxvY2tDb2RlJyksXG4gICAgICBJbmxpbmVDb2RlID0gcmVxdWlyZSgnLi4vaW5saW5lQ29kZScpO1xuICBcbmNvbnN0IEFTaW1wbGVGb3JtID0gKCkgPT4ge1xuICBjb25zdCB0ZXh0YXJlYSA9IDxUZXh0YXJlYSBwbGFjZWhvbGRlcj1cIkEgdGV4dGFyZWFcIi8+LFxuICAgICAgICBpbnB1dCA9IDxJbnB1dCBuYW1ldHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkEgdGV4dCBpbnB1dFwiIC8+O1xuXG4gIHJldHVybiAoXG5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxuYXY+XG4gICAgICAgIDxQcmV2aW91cyBocmVmPVwiI3RoZUVsZW1lbnRDbGFzc1wiPlRoZSA8Y29kZSBjbGFzc05hbWU9XCJpbmxpbmVcIj5FbGVtZW50PC9jb2RlPiBjbGFzczwvUHJldmlvdXM+XG4gICAgICAgIDxDb250ZW50cyAvPlxuICAgICAgPC9uYXY+XG4gICAgICA8aDI+QSBzaW1wbGUgZm9ybTwvaDI+XG4gICAgICA8QmxvY2tDb2RlPntgY29uc3QgZWFzeXVpID0gcmVxdWlyZSgnZWFzeXVpJyksXG4gICAgICB7IElucHV0LCBUZXh0YXJlYSwgU2VsZWN0IH0gPSBlYXN5dWk7XG5cbmNvbnN0IHRleHRhcmVhID0gPFRleHRhcmVhIC8+LFxuICAgICAgaW5wdXQgPSA8SW5wdXQgdHlwZT1cInRleHRcIiAvPjtcblxuPGZvcm0+XG4gIHtpbnB1dH1cbiAge3RleHRhcmVhfVxuICA8U2VsZWN0IG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcbiAgICAgICAgICAgIGlucHV0LnNldFZhbHVlKHZhbHVlKTtcbiAgICAgICAgICB9fVxuICA+XG4gICAgPG9wdGlvbiB2YWx1ZT1cIkFsXCI+QTwvb3B0aW9uPlxuICAgIDxvcHRpb24gdmFsdWU9XCJCaWxsXCI+Qjwvb3B0aW9uPlxuICAgIDxvcHRpb24gdmFsdWU9XCJDaHVja1wiPkM8L29wdGlvbj5cbiAgICA8b3B0aW9uIHZhbHVlPVwiRGlja1wiIHNlbGVjdGVkPkQ8L29wdGlvbj5cbiAgPC9TZWxlY3Q+XG4gIDxidXR0b24gb25DbGljaz17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGlucHV0LmdldFZhbHVlKCksXG4gICAgICAgICAgICAgICAgICBwcmV2ZW50RGVmYXVsdCA9IHRydWU7XG5cbiAgICAgICAgICAgIHRleHRhcmVhLnNldFZhbHVlKHZhbHVlKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHByZXZlbnREZWZhdWx0O1xuICAgICAgICAgIH19XG4gID5cbiAgU3VibWl0XG4gIDwvYnV0dG9uPlxuPC9mb3JtPmB9PC9CbG9ja0NvZGU+XG4gICAgICA8cD5cbiAgICAgICAgWW91IGNhbiB1c2UgRWFzeVVJJ3MgZm9ybSBlbGVtZW50IGNsYXNzZXMgb3IgbG93ZXIgY2FzZSB0YWcgbmFtZXMuXG4gICAgICAgIFRoZSBzb21ld2hhdCBjb250cml2ZWQgZXhhbXBsZSBoZXJlIHVzZXMgYSBjb21iaW5hdGlvbiBvZiBib3RoLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIFRoZSBhZHZhbnRhZ2Ugb2YgdXNpbmcgRWFzeVVJJ3MgZm9ybSBlbGVtZW50IGNsYXNzZXMgaXMgdGhhdCB0aGV5IHN1cHBvcnQgdmFyaW91cyBtZXRob2RzIHRoYXQgd2lsbCBiZSBoZWxwZnVsLlxuICAgICAgICBFdmVudCBoYW5kbGVycyB3aWxsIHJlY2VpdmUgcGVydGluZW50IGFyZ3VtZW50cywgZm9yIGV4YW1wbGUsIHJhdGhlciB0aGFuIGEgRE9NIGV2ZW50IG9iamVjdC5cbiAgICAgICAgQ2hlY2sgdGhlIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZGphbGJhdC9FYXN5VUlcIj5FYXN5VUkgZG9jdW1lbnRhdGlvbjwvYT4gYW5kIGFjY29tcGFueWluZyBzb3VyY2UgY29kZSBmb3IgZGV0YWlscy5cbiAgICAgICAgSGFuZGxlcnMgdGhhdCBhcmUgdHJlYXRlZCBzcGVjaWFsbHkgd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHJlcXVpc2l0ZSBjb25zdHJ1Y3RvcnMuXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgSGVyZSB0aGUgPElubGluZUNvZGU+U2VsZWN0PC9JbmxpbmVDb2RlPiBjbGFzcyBpcyB1c2VkIGFuZCBzbyB0aGUgY2hhbmdlIGhhbmRsZXIgaXMgcGFzc2VkIHRoZSBzZWxlY3RlZCBvcHRpb24ncyB2YWx1ZSB3aGVuZXZlciBpdCBjaGFuZ2VzLlxuICAgICAgICBCeSBjb250cmFzdCB0aGUgPElubGluZUNvZGU+RWxlbWVudDwvSW5saW5lQ29kZT4gY2xhc3MgaXMgdXNlZCBmb3IgdGhlIGJ1dHRvbi5cbiAgICAgICAgSW4gdGhpcyBjYXNlIHRoZSBET00gZXZlbnQgb2JqZWN0IHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBjbGljayBoYW5kbGVyIGFuZCB0aGlzIGlzIHNpbXBseSBpZ25vcmVkLlxuICAgICAgPC9wPlxuICAgICAgPGZvcm0+XG4gICAgICAgIHtpbnB1dH1cbiAgICAgICAge3RleHRhcmVhfVxuICAgICAgICA8U2VsZWN0IG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlucHV0LnNldFZhbHVlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFsXCI+QTwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJCaWxsXCI+Qjwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDaHVja1wiPkM8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRGlja1wiIHNlbGVjdGVkPkQ8L29wdGlvbj5cbiAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gaW5wdXQuZ2V0VmFsdWUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldmVudERlZmF1bHQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRhcmVhLnNldFZhbHVlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcmV2ZW50RGVmYXVsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgU3VibWl0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvc2VjdGlvbj5cblxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBBU2ltcGxlRm9ybTtcbiJdfQ==