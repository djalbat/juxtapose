'use strict';

require('../../index.js'); /// easyui-jsx

var JSXIsGreat = function JSXIsGreat() {
  return React.createElement(
    'section',
    null,
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
      'Also JSX just embeds well into JavaScript. Compare this with so called technologies such as JSP, which try to embed imperative languages in declarative ones. For several reasons this can be nightmarish. But the other way round happens to work really well.'
    ),
    React.createElement(
      'nav',
      null,
      React.createElement(
        'span',
        { className: 'floatRight' },
        React.createElement(
          'a',
          { href: '#gettingStarted' },
          'Next: Getting started'
        )
      ),
      React.createElement(
        'span',
        null,
        React.createElement(
          'a',
          { href: '#contents' },
          'Contents'
        )
      ),
      React.createElement(
        'span',
        { className: 'floatLeft' },
        React.createElement(
          'a',
          { href: '#introduction' },
          'Previous: Introduction'
        )
      )
    )
  );
};

module.exports = JSXIsGreat;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2pzeElzR3JlYXQuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsIkpTWElzR3JlYXQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQUEsUUFBUSxnQkFBUixFLENBQTJCOztBQUUzQixJQUFNQyxhQUFhLFNBQWJBLFVBQWEsR0FBTTtBQUN2QixTQUVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FGRjtBQUtFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUFBO0FBQUEsT0FERjtBQU1FO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUFBO0FBQUEsT0FORjtBQWFFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUFBO0FBQUE7QUFiRixLQUxGO0FBd0JFO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0F4QkY7QUE4QkU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFVBQU0sV0FBVSxZQUFoQjtBQUNFO0FBQUE7QUFBQSxZQUFHLE1BQUssaUJBQVI7QUFBQTtBQUFBO0FBREYsT0FERjtBQUlFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFHLE1BQUssV0FBUjtBQUFBO0FBQUE7QUFERixPQUpGO0FBT0U7QUFBQTtBQUFBLFVBQU0sV0FBVSxXQUFoQjtBQUNFO0FBQUE7QUFBQSxZQUFHLE1BQUssZUFBUjtBQUFBO0FBQUE7QUFERjtBQVBGO0FBOUJGLEdBRkY7QUE4Q0QsQ0EvQ0Q7O0FBaURBQyxPQUFPQyxPQUFQLEdBQWlCRixVQUFqQiIsImZpbGUiOiJqc3hJc0dyZWF0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCcuLi8uLi9pbmRleC5qcycpOyAvLy8gZWFzeXVpLWpzeFxuXG5jb25zdCBKU1hJc0dyZWF0ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuXG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDI+SlNYIGlzIGdyZWF0PC9oMj5cbiAgICAgIDxwPlxuICAgICAgICBJdCBpcyBiZWNhdXNlIGl0IGFsbG93cyB5b3UgdG8gZG8gdGhyZWUgY3J1Y2lhbCB0aGluZ3M6XG4gICAgICA8L3A+XG4gICAgICA8b2w+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8c3Ryb25nPkFzc29jaWF0ZSB0aGUgY29kZSB0aGF0IGRlZmluZXMgdGhlIHZpZXcgZGlyZWN0bHkgd2l0aCB0aGUgY29kZSB0aGF0IGRlZmluZXMgdGhlIG1vZGVsPC9zdHJvbmc+LlxuICAgICAgICAgIFRoaXMgaXMgbXVjaCBiZXR0ZXIgdGhhbiBoYXZpbmcgYSB2aWV3IGNsYXNzIGFuZCBhIG1vZGVsIGNsYXNzIGFuZCBoYXZpbmcgb25lIGluaGVyaXQgZnJvbSB0aGUgb3RoZXIsIHNheS5cbiAgICAgICAgICBKU1ggYWxsb3dzIHlvdSB0byBpbmxpbmUgdGhlIHZpZXcgY29kZSwgc28gdG8gc3BlYWssIGFzIHdlbGwgYXMgY29ubmVjdCBpdCB0byB0aGUgc3Vycm91bmRpbmcgbW9kZWwgY29kZSBpbiBhIHN0cmFpZ2h0Zm9yd2FyZCBtYW5uZXIuXG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8c3Ryb25nPkJ1aWxkIHVwIHRoZSBhcHBsaWNhdGlvbidzIHZpZXcgaW4gYSBkZWNsYXJhdGl2ZSB3YXk8L3N0cm9uZz4uXG4gICAgICAgICAgVGhlIG1vc3QgbGlrZWx5IGFuZCBvZnRlbiB0aGUgb25seSByZWxhdGlvbiBiZXR3ZWVuIHZpZXcgZWxlbWVudHMgaXMgaW5jbHVzaW9uLlxuICAgICAgICAgIFRoaXMgcmVzdWx0cyBpbiBhIHRyZWUsIGFuZCBKU1ggZW5jb2RlcyB0cmVlcy5cbiAgICAgICAgICBUaGlzIHdvbid0IGFsd2F5cyB3b3JrLCBjb25zaWRlciBhcmNhZGUgZ2FtZXMuXG4gICAgICAgICAgQnV0IGl0IHdvcmtzIGZvciBhcHBsaWNhdGlvbnMgd2l0aCBldmVudCBkcml2ZW4gdXNlciBpbnRlcmZhY2VzIGFuZCB0aGlzIGluY2x1ZGVzIG5lYXJseSBhbGwgd2ViIGFwcGxpY2F0aW9ucy5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxzdHJvbmc+Q3JlYXRlIHZpZXcgZWxlbWVudHMgZWFzaWx5IHdpdGhvdXQgdGhlIG5lZWQgZm9yIGNvbnN0cnVjdG9ycyBvciBmYWN0b3J5IG1ldGhvZHM8L3N0cm9uZz4uXG4gICAgICAgICAgU28gdGhlcmUgaXMgbGVzcyBjb2RlIGFuZCB3aGF0IHRoZXJlIGlzIGxpa2VseSB0byBiZSBtb3JlIHJlYWRhYmxlIGFuZCBtYWludGFpbmFibGUuXG4gICAgICAgICAgSlNYIGFsc28gZW5jb3VyYWdlcyBjb21wb3NpdGlvbiBhbmQgcmV1c2UuXG4gICAgICAgIDwvbGk+XG4gICAgICA8L29sPlxuICAgICAgPHA+XG4gICAgICAgIEFsc28gSlNYIGp1c3QgZW1iZWRzIHdlbGwgaW50byBKYXZhU2NyaXB0LlxuICAgICAgICBDb21wYXJlIHRoaXMgd2l0aCBzbyBjYWxsZWQgdGVjaG5vbG9naWVzIHN1Y2ggYXMgSlNQLCB3aGljaCB0cnkgdG8gZW1iZWQgaW1wZXJhdGl2ZSBsYW5ndWFnZXMgaW4gZGVjbGFyYXRpdmUgb25lcy5cbiAgICAgICAgRm9yIHNldmVyYWwgcmVhc29ucyB0aGlzIGNhbiBiZSBuaWdodG1hcmlzaC5cbiAgICAgICAgQnV0IHRoZSBvdGhlciB3YXkgcm91bmQgaGFwcGVucyB0byB3b3JrIHJlYWxseSB3ZWxsLlxuICAgICAgPC9wPlxuICAgICAgPG5hdj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxvYXRSaWdodFwiPlxuICAgICAgICAgIDxhIGhyZWY9XCIjZ2V0dGluZ1N0YXJ0ZWRcIj5OZXh0OiBHZXR0aW5nIHN0YXJ0ZWQ8L2E+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAgPGEgaHJlZj1cIiNjb250ZW50c1wiPkNvbnRlbnRzPC9hPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsb2F0TGVmdFwiPlxuICAgICAgICAgIDxhIGhyZWY9XCIjaW50cm9kdWN0aW9uXCI+UHJldmlvdXM6IEludHJvZHVjdGlvbjwvYT5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9uYXY+XG4gICAgPC9zZWN0aW9uPlxuICAgICAgXG4gICk7ICBcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSlNYSXNHcmVhdDtcbiJdfQ==