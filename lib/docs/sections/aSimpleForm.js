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
      'const easyui = require(\'easyui\'),\n      { Input, Textarea, Select } = easyui;\n\nconst textarea = <Textarea />,\n      input = <Input type="text" />;\n\n<form>\n  {input}\n  {textarea}\n  <Select onChange={(value) => {\n            input.setValue(value);\n          }}\n  >\n    <option value="Al">A</option>\n    <option value="Bill">B</option>\n    <option value="Chuck">C</option>\n    <option value="Dick" selected>D</option>\n  </Select>\n  <button onClick={(event) => {\n            const value = input.getValue();\n\n            textarea.setValue(value);\n          }}\n  >\n  Submit\n  </button>\n</form>'
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
            var value = input.getValue();

            textarea.setValue(value);
          }
        },
        'Submit'
      )
    )
  );
};

module.exports = ASimpleForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9kb2NzL3NlY3Rpb25zL2FTaW1wbGVGb3JtLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJJbnB1dCIsImVhc3l1aSIsIlRleHRhcmVhIiwiU2VsZWN0IiwiTmV4dCIsIlByZXZpb3VzIiwiQ29udGVudHMiLCJCbG9ja0NvZGUiLCJJbmxpbmVDb2RlIiwiQVNpbXBsZUZvcm0iLCJ0ZXh0YXJlYSIsImlucHV0IiwidmFsdWUiLCJzZXRWYWx1ZSIsImV2ZW50IiwiZ2V0VmFsdWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQUEsUUFBUSxrQkFBUjs7QUFFTSxhQUFTQSxRQUFRLFFBQVIsQ0FBVDtBQUFBLElBQ0VDLEtBREYsR0FDOEJDLE1BRDlCLENBQ0VELEtBREY7QUFBQSxJQUNTRSxRQURULEdBQzhCRCxNQUQ5QixDQUNTQyxRQURUO0FBQUEsSUFDbUJDLE1BRG5CLEdBQzhCRixNQUQ5QixDQUNtQkUsTUFEbkI7OztBQUdOLElBQU1DLE9BQU9MLFFBQVEsU0FBUixDQUFiO0FBQUEsSUFDTU0sV0FBV04sUUFBUSxhQUFSLENBRGpCO0FBQUEsSUFFTU8sV0FBV1AsUUFBUSxhQUFSLENBRmpCO0FBQUEsSUFHTVEsWUFBWVIsUUFBUSxjQUFSLENBSGxCO0FBQUEsSUFJTVMsYUFBYVQsUUFBUSxlQUFSLENBSm5COztBQU1BLElBQU1VLGNBQWMsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCLE1BQU1DLFdBQVcsb0JBQUMsUUFBRCxJQUFVLGFBQVksWUFBdEIsR0FBakI7QUFBQSxNQUNNQyxRQUFRLG9CQUFDLEtBQUQsSUFBTyxVQUFTLE1BQWhCLEVBQXVCLGFBQVksY0FBbkMsR0FEZDs7QUFHQSxTQUVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUMsZ0JBQUQ7QUFBQSxVQUFVLE1BQUssa0JBQWY7QUFBQTtBQUFzQztBQUFBO0FBQUEsWUFBTSxXQUFVLFFBQWhCO0FBQUE7QUFBQSxTQUF0QztBQUFBO0FBQUEsT0FERjtBQUVFLDBCQUFDLFFBQUQ7QUFGRixLQURGO0FBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUxGO0FBTUU7QUFBQyxlQUFEO0FBQUE7QUFBQTtBQUFBLEtBTkY7QUFpQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWpDRjtBQXFDRTtBQUFBO0FBQUE7QUFBQTtBQUdZO0FBQUE7QUFBQSxVQUFHLE1BQUssbUNBQVI7QUFBQTtBQUFBLE9BSFo7QUFBQTtBQUFBLEtBckNGO0FBMkNFO0FBQUE7QUFBQTtBQUFBO0FBQ1c7QUFBQyxrQkFBRDtBQUFBO0FBQUE7QUFBQSxPQURYO0FBQUE7QUFFa0I7QUFBQyxrQkFBRDtBQUFBO0FBQUE7QUFBQSxPQUZsQjtBQUFBO0FBQUEsS0EzQ0Y7QUFnREU7QUFBQTtBQUFBO0FBQ0dBLFdBREg7QUFFR0QsY0FGSDtBQUdFO0FBQUMsY0FBRDtBQUFBLFVBQVEsVUFBVSxrQkFBQ0UsS0FBRCxFQUFXO0FBQ25CRCxrQkFBTUUsUUFBTixDQUFlRCxLQUFmO0FBQ0Q7QUFGVDtBQUlFO0FBQUE7QUFBQSxZQUFRLE9BQU0sSUFBZDtBQUFBO0FBQUEsU0FKRjtBQUtFO0FBQUE7QUFBQSxZQUFRLE9BQU0sTUFBZDtBQUFBO0FBQUEsU0FMRjtBQU1FO0FBQUE7QUFBQSxZQUFRLE9BQU0sT0FBZDtBQUFBO0FBQUEsU0FORjtBQU9FO0FBQUE7QUFBQSxZQUFRLE9BQU0sTUFBZCxFQUFxQixjQUFyQjtBQUFBO0FBQUE7QUFQRixPQUhGO0FBWUU7QUFBQTtBQUFBLFVBQVEsU0FBUyxpQkFBQ0UsS0FBRCxFQUFXO0FBQ1YsZ0JBQU1GLFFBQVFELE1BQU1JLFFBQU4sRUFBZDs7QUFFQUwscUJBQVNHLFFBQVQsQ0FBa0JELEtBQWxCO0FBQ0Q7QUFKakI7QUFBQTtBQUFBO0FBWkY7QUFoREYsR0FGRjtBQTBFRCxDQTlFRDs7QUFnRkFJLE9BQU9DLE9BQVAsR0FBaUJSLFdBQWpCIiwiZmlsZSI6ImFTaW1wbGVGb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCcuLi8uLi9lYXN5dWktanN4Jyk7XG5cbmNvbnN0IGVhc3l1aSA9IHJlcXVpcmUoJ2Vhc3l1aScpLFxuICAgICAgeyBJbnB1dCwgVGV4dGFyZWEsIFNlbGVjdCB9ID0gZWFzeXVpO1xuXG5jb25zdCBOZXh0ID0gcmVxdWlyZSgnLi4vbmV4dCcpLFxuICAgICAgUHJldmlvdXMgPSByZXF1aXJlKCcuLi9wcmV2aW91cycpLFxuICAgICAgQ29udGVudHMgPSByZXF1aXJlKCcuLi9jb250ZW50cycpLFxuICAgICAgQmxvY2tDb2RlID0gcmVxdWlyZSgnLi4vYmxvY2tDb2RlJyksXG4gICAgICBJbmxpbmVDb2RlID0gcmVxdWlyZSgnLi4vaW5saW5lQ29kZScpO1xuICBcbmNvbnN0IEFTaW1wbGVGb3JtID0gKCkgPT4ge1xuICBjb25zdCB0ZXh0YXJlYSA9IDxUZXh0YXJlYSBwbGFjZWhvbGRlcj1cIkEgdGV4dGFyZWFcIi8+LFxuICAgICAgICBpbnB1dCA9IDxJbnB1dCBuYW1ldHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkEgdGV4dCBpbnB1dFwiIC8+O1xuXG4gIHJldHVybiAoXG5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxuYXY+XG4gICAgICAgIDxQcmV2aW91cyBocmVmPVwiI3RoZUVsZW1lbnRDbGFzc1wiPlRoZSA8Y29kZSBjbGFzc05hbWU9XCJpbmxpbmVcIj5FbGVtZW50PC9jb2RlPiBjbGFzczwvUHJldmlvdXM+XG4gICAgICAgIDxDb250ZW50cyAvPlxuICAgICAgPC9uYXY+XG4gICAgICA8aDI+QSBzaW1wbGUgZm9ybTwvaDI+XG4gICAgICA8QmxvY2tDb2RlPntgY29uc3QgZWFzeXVpID0gcmVxdWlyZSgnZWFzeXVpJyksXG4gICAgICB7IElucHV0LCBUZXh0YXJlYSwgU2VsZWN0IH0gPSBlYXN5dWk7XG5cbmNvbnN0IHRleHRhcmVhID0gPFRleHRhcmVhIC8+LFxuICAgICAgaW5wdXQgPSA8SW5wdXQgdHlwZT1cInRleHRcIiAvPjtcblxuPGZvcm0+XG4gIHtpbnB1dH1cbiAge3RleHRhcmVhfVxuICA8U2VsZWN0IG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcbiAgICAgICAgICAgIGlucHV0LnNldFZhbHVlKHZhbHVlKTtcbiAgICAgICAgICB9fVxuICA+XG4gICAgPG9wdGlvbiB2YWx1ZT1cIkFsXCI+QTwvb3B0aW9uPlxuICAgIDxvcHRpb24gdmFsdWU9XCJCaWxsXCI+Qjwvb3B0aW9uPlxuICAgIDxvcHRpb24gdmFsdWU9XCJDaHVja1wiPkM8L29wdGlvbj5cbiAgICA8b3B0aW9uIHZhbHVlPVwiRGlja1wiIHNlbGVjdGVkPkQ8L29wdGlvbj5cbiAgPC9TZWxlY3Q+XG4gIDxidXR0b24gb25DbGljaz17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGlucHV0LmdldFZhbHVlKCk7XG5cbiAgICAgICAgICAgIHRleHRhcmVhLnNldFZhbHVlKHZhbHVlKTtcbiAgICAgICAgICB9fVxuICA+XG4gIFN1Ym1pdFxuICA8L2J1dHRvbj5cbjwvZm9ybT5gfTwvQmxvY2tDb2RlPlxuICAgICAgPHA+XG4gICAgICAgIFlvdSBjYW4gdXNlIEVhc3lVSSdzIGZvcm0gZWxlbWVudCBjbGFzc2VzIG9yIGxvd2VyIGNhc2UgdGFnIG5hbWVzLlxuICAgICAgICBUaGUgc29tZXdoYXQgY29udHJpdmVkIGV4YW1wbGUgaGVyZSB1c2VzIGEgY29tYmluYXRpb24gb2YgYm90aC5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBUaGUgYWR2YW50YWdlIG9mIHVzaW5nIEVhc3lVSSdzIGZvcm0gZWxlbWVudCBjbGFzc2VzIGlzIHRoYXQgdGhleSBzdXBwb3J0IHZhcmlvdXMgbWV0aG9kcyB0aGF0IHdpbGwgYmUgaGVscGZ1bC5cbiAgICAgICAgRXZlbnQgaGFuZGxlcnMgd2lsbCByZWNlaXZlIHBlcnRpbmVudCBhcmd1bWVudHMsIGZvciBleGFtcGxlLCByYXRoZXIgdGhhbiBhIERPTSBldmVudCBvYmplY3QuXG4gICAgICAgIENoZWNrIHRoZSA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2RqYWxiYXQvRWFzeVVJXCI+RWFzeVVJIGRvY3VtZW50YXRpb248L2E+IGFuZCBhY2NvbXBhbnlpbmcgc291cmNlIGNvZGUgZm9yIGRldGFpbHMuXG4gICAgICAgIEhhbmRsZXJzIHRoYXQgYXJlIHRyZWF0ZWQgc3BlY2lhbGx5IHdpbGwgYmUgcGFzc2VkIHRvIHRoZSByZXF1aXNpdGUgY29uc3RydWN0b3JzLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIEhlcmUgdGhlIDxJbmxpbmVDb2RlPlNlbGVjdDwvSW5saW5lQ29kZT4gY2xhc3MgaXMgdXNlZCBhbmQgc28gdGhlIGNoYW5nZSBoYW5kbGVyIGlzIHBhc3NlZCB0aGUgc2VsZWN0ZWQgb3B0aW9uJ3MgdmFsdWUgd2hlbmV2ZXIgaXQgY2hhbmdlcy5cbiAgICAgICAgQnkgY29udHJhc3QgdGhlIDxJbmxpbmVDb2RlPkVsZW1lbnQ8L0lubGluZUNvZGU+IGNsYXNzIGlzIHVzZWQgZm9yIHRoZSBidXR0b24uXG4gICAgICAgIEluIHRoaXMgY2FzZSB0aGUgRE9NIGV2ZW50IG9iamVjdCB3aWxsIGJlIHBhc3NlZCB0byB0aGUgY2xpY2sgaGFuZGxlciBhbmQgdGhpcyBpcyBzaW1wbHkgaWdub3JlZC5cbiAgICAgIDwvcD5cbiAgICAgIDxmb3JtPlxuICAgICAgICB7aW5wdXR9XG4gICAgICAgIHt0ZXh0YXJlYX1cbiAgICAgICAgPFNlbGVjdCBvbkNoYW5nZT17KHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICBpbnB1dC5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBbFwiPkE8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQmlsbFwiPkI8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ2h1Y2tcIj5DPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkRpY2tcIiBzZWxlY3RlZD5EPC9vcHRpb24+XG4gICAgICAgIDwvU2VsZWN0PlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGlucHV0LmdldFZhbHVlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dGFyZWEuc2V0VmFsdWUodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICBTdWJtaXRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9zZWN0aW9uPlxuXG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFTaW1wbGVGb3JtO1xuIl19