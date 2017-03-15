'use strict';

require('../../easyui-jsx');

var Next = require('../next'),
    Previous = require('../previous'),
    Contents = require('../contents');

var JSXIsGreat = function JSXIsGreat() {
  return React.createElement(
    'section',
    null,
    React.createElement(
      'nav',
      null,
      React.createElement(
        Next,
        { href: '#gettingStarted' },
        'Getting started'
      ),
      React.createElement(
        Previous,
        { href: '#introduction' },
        'Introduction'
      ),
      React.createElement(Contents, null)
    ),
    React.createElement(
      'h2',
      null,
      'JSX is great'
    ),
    React.createElement(
      'p',
      null,
      'It is because it allows you to do three crucial things:'
    ),
    React.createElement(
      'ol',
      null,
      React.createElement(
        'li',
        null,
        React.createElement(
          'strong',
          null,
          'Associate the code that defines the view directly with the code that defines the model'
        ),
        '. This is much better than having a view class and a model class and having one inherit from the other, say. JSX allows you to inline the view code, so to speak, as well as connect it to the surrounding model code in a straightforward manner.'
      ),
      React.createElement(
        'li',
        null,
        React.createElement(
          'strong',
          null,
          'Build up the application\'s view in a declarative way'
        ),
        '. The most likely and often the only relation between view elements is inclusion. This results in a tree, and JSX encodes trees. This won\'t always work, consider arcade games. But it works for applications with event driven user interfaces and this includes nearly all web applications.'
      ),
      React.createElement(
        'li',
        null,
        React.createElement(
          'strong',
          null,
          'Create view elements easily without the need for constructors or factory methods'
        ),
        '. So there is less code and what there is likely to be more readable and maintainable. JSX also encourages composition and reuse.'
      )
    ),
    React.createElement(
      'p',
      null,
      'Also JSX just embeds well into JavaScript. Compare this with older technologies such as JSP, which try to embed imperative languages in declarative ones. For several reasons this can be nightmarish. But the other way round happens to work really well.'
    )
  );
};

module.exports = JSXIsGreat;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9kb2NzL3NlY3Rpb25zL2pzeElzR3JlYXQuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsIk5leHQiLCJQcmV2aW91cyIsIkNvbnRlbnRzIiwiSlNYSXNHcmVhdCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBQSxRQUFRLGtCQUFSOztBQUVBLElBQU1DLE9BQU9ELFFBQVEsU0FBUixDQUFiO0FBQUEsSUFDTUUsV0FBV0YsUUFBUSxhQUFSLENBRGpCO0FBQUEsSUFFTUcsV0FBV0gsUUFBUSxhQUFSLENBRmpCOztBQUlBLElBQU1JLGFBQWEsU0FBYkEsVUFBYSxHQUFNO0FBQ3ZCLFNBRUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQyxZQUFEO0FBQUEsVUFBTSxNQUFLLGlCQUFYO0FBQUE7QUFBQSxPQURGO0FBRUU7QUFBQyxnQkFBRDtBQUFBLFVBQVUsTUFBSyxlQUFmO0FBQUE7QUFBQSxPQUZGO0FBR0UsMEJBQUMsUUFBRDtBQUhGLEtBREY7QUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTkY7QUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUEY7QUFVRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFBQTtBQUFBLE9BREY7QUFNRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFBQTtBQUFBLE9BTkY7QUFhRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFBQTtBQUFBO0FBYkYsS0FWRjtBQTZCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBN0JGLEdBRkY7QUF3Q0QsQ0F6Q0Q7O0FBMkNBQyxPQUFPQyxPQUFQLEdBQWlCRixVQUFqQiIsImZpbGUiOiJqc3hJc0dyZWF0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCcuLi8uLi9lYXN5dWktanN4Jyk7XG5cbmNvbnN0IE5leHQgPSByZXF1aXJlKCcuLi9uZXh0JyksXG4gICAgICBQcmV2aW91cyA9IHJlcXVpcmUoJy4uL3ByZXZpb3VzJyksXG4gICAgICBDb250ZW50cyA9IHJlcXVpcmUoJy4uL2NvbnRlbnRzJyk7XG5cbmNvbnN0IEpTWElzR3JlYXQgPSAoKSA9PiB7XG4gIHJldHVybiAoXG5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxuYXY+XG4gICAgICAgIDxOZXh0IGhyZWY9XCIjZ2V0dGluZ1N0YXJ0ZWRcIj5HZXR0aW5nIHN0YXJ0ZWQ8L05leHQ+XG4gICAgICAgIDxQcmV2aW91cyBocmVmPVwiI2ludHJvZHVjdGlvblwiPkludHJvZHVjdGlvbjwvUHJldmlvdXM+XG4gICAgICAgIDxDb250ZW50cyAvPlxuICAgICAgPC9uYXY+XG4gICAgICA8aDI+SlNYIGlzIGdyZWF0PC9oMj5cbiAgICAgIDxwPlxuICAgICAgICBJdCBpcyBiZWNhdXNlIGl0IGFsbG93cyB5b3UgdG8gZG8gdGhyZWUgY3J1Y2lhbCB0aGluZ3M6XG4gICAgICA8L3A+XG4gICAgICA8b2w+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8c3Ryb25nPkFzc29jaWF0ZSB0aGUgY29kZSB0aGF0IGRlZmluZXMgdGhlIHZpZXcgZGlyZWN0bHkgd2l0aCB0aGUgY29kZSB0aGF0IGRlZmluZXMgdGhlIG1vZGVsPC9zdHJvbmc+LlxuICAgICAgICAgIFRoaXMgaXMgbXVjaCBiZXR0ZXIgdGhhbiBoYXZpbmcgYSB2aWV3IGNsYXNzIGFuZCBhIG1vZGVsIGNsYXNzIGFuZCBoYXZpbmcgb25lIGluaGVyaXQgZnJvbSB0aGUgb3RoZXIsIHNheS5cbiAgICAgICAgICBKU1ggYWxsb3dzIHlvdSB0byBpbmxpbmUgdGhlIHZpZXcgY29kZSwgc28gdG8gc3BlYWssIGFzIHdlbGwgYXMgY29ubmVjdCBpdCB0byB0aGUgc3Vycm91bmRpbmcgbW9kZWwgY29kZSBpbiBhIHN0cmFpZ2h0Zm9yd2FyZCBtYW5uZXIuXG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8c3Ryb25nPkJ1aWxkIHVwIHRoZSBhcHBsaWNhdGlvbidzIHZpZXcgaW4gYSBkZWNsYXJhdGl2ZSB3YXk8L3N0cm9uZz4uXG4gICAgICAgICAgVGhlIG1vc3QgbGlrZWx5IGFuZCBvZnRlbiB0aGUgb25seSByZWxhdGlvbiBiZXR3ZWVuIHZpZXcgZWxlbWVudHMgaXMgaW5jbHVzaW9uLlxuICAgICAgICAgIFRoaXMgcmVzdWx0cyBpbiBhIHRyZWUsIGFuZCBKU1ggZW5jb2RlcyB0cmVlcy5cbiAgICAgICAgICBUaGlzIHdvbid0IGFsd2F5cyB3b3JrLCBjb25zaWRlciBhcmNhZGUgZ2FtZXMuXG4gICAgICAgICAgQnV0IGl0IHdvcmtzIGZvciBhcHBsaWNhdGlvbnMgd2l0aCBldmVudCBkcml2ZW4gdXNlciBpbnRlcmZhY2VzIGFuZCB0aGlzIGluY2x1ZGVzIG5lYXJseSBhbGwgd2ViIGFwcGxpY2F0aW9ucy5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxzdHJvbmc+Q3JlYXRlIHZpZXcgZWxlbWVudHMgZWFzaWx5IHdpdGhvdXQgdGhlIG5lZWQgZm9yIGNvbnN0cnVjdG9ycyBvciBmYWN0b3J5IG1ldGhvZHM8L3N0cm9uZz4uXG4gICAgICAgICAgU28gdGhlcmUgaXMgbGVzcyBjb2RlIGFuZCB3aGF0IHRoZXJlIGlzIGxpa2VseSB0byBiZSBtb3JlIHJlYWRhYmxlIGFuZCBtYWludGFpbmFibGUuXG4gICAgICAgICAgSlNYIGFsc28gZW5jb3VyYWdlcyBjb21wb3NpdGlvbiBhbmQgcmV1c2UuXG4gICAgICAgIDwvbGk+XG4gICAgICA8L29sPlxuICAgICAgPHA+XG4gICAgICAgIEFsc28gSlNYIGp1c3QgZW1iZWRzIHdlbGwgaW50byBKYXZhU2NyaXB0LlxuICAgICAgICBDb21wYXJlIHRoaXMgd2l0aCBvbGRlciB0ZWNobm9sb2dpZXMgc3VjaCBhcyBKU1AsIHdoaWNoIHRyeSB0byBlbWJlZCBpbXBlcmF0aXZlIGxhbmd1YWdlcyBpbiBkZWNsYXJhdGl2ZSBvbmVzLlxuICAgICAgICBGb3Igc2V2ZXJhbCByZWFzb25zIHRoaXMgY2FuIGJlIG5pZ2h0bWFyaXNoLlxuICAgICAgICBCdXQgdGhlIG90aGVyIHdheSByb3VuZCBoYXBwZW5zIHRvIHdvcmsgcmVhbGx5IHdlbGwuXG4gICAgICA8L3A+XG4gICAgPC9zZWN0aW9uPlxuICAgICAgXG4gICk7ICBcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSlNYSXNHcmVhdDtcbiJdfQ==