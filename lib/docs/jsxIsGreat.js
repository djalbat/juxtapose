'use strict';

require('../easyui-jsx');

var JSXIsGreat = function JSXIsGreat() {
  return React.createElement(
    'section',
    null,
    React.createElement(
      'nav',
      null,
      React.createElement(
        'span',
        { className: 'next' },
        React.createElement(
          'a',
          { href: '#gettingStarted' },
          'Next: Getting started'
        )
      ),
      React.createElement(
        'span',
        { className: 'previous' },
        React.createElement(
          'a',
          { href: '#introduction' },
          'Previous: Introduction'
        )
      ),
      React.createElement(
        'span',
        { className: 'contents' },
        React.createElement(
          'a',
          { href: '#contents' },
          'Contents'
        )
      )
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kb2NzL2pzeElzR3JlYXQuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsIkpTWElzR3JlYXQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQUEsUUFBUSxlQUFSOztBQUVBLElBQU1DLGFBQWEsU0FBYkEsVUFBYSxHQUFNO0FBQ3ZCLFNBRUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFVBQU0sV0FBVSxNQUFoQjtBQUNFO0FBQUE7QUFBQSxZQUFHLE1BQUssaUJBQVI7QUFBQTtBQUFBO0FBREYsT0FERjtBQUlFO0FBQUE7QUFBQSxVQUFNLFdBQVUsVUFBaEI7QUFDRTtBQUFBO0FBQUEsWUFBRyxNQUFLLGVBQVI7QUFBQTtBQUFBO0FBREYsT0FKRjtBQU9FO0FBQUE7QUFBQSxVQUFNLFdBQVUsVUFBaEI7QUFDRTtBQUFBO0FBQUEsWUFBRyxNQUFLLFdBQVI7QUFBQTtBQUFBO0FBREY7QUFQRixLQURGO0FBWUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVpGO0FBYUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWJGO0FBZ0JFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUFBO0FBQUEsT0FERjtBQU1FO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUFBO0FBQUEsT0FORjtBQWFFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUFBO0FBQUE7QUFiRixLQWhCRjtBQW1DRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbkNGLEdBRkY7QUE4Q0QsQ0EvQ0Q7O0FBaURBQyxPQUFPQyxPQUFQLEdBQWlCRixVQUFqQiIsImZpbGUiOiJqc3hJc0dyZWF0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCcuLi9lYXN5dWktanN4Jyk7XG5cbmNvbnN0IEpTWElzR3JlYXQgPSAoKSA9PiB7XG4gIHJldHVybiAoXG5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxuYXY+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5leHRcIj5cbiAgICAgICAgICA8YSBocmVmPVwiI2dldHRpbmdTdGFydGVkXCI+TmV4dDogR2V0dGluZyBzdGFydGVkPC9hPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByZXZpb3VzXCI+XG4gICAgICAgICAgPGEgaHJlZj1cIiNpbnRyb2R1Y3Rpb25cIj5QcmV2aW91czogSW50cm9kdWN0aW9uPC9hPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRzXCI+XG4gICAgICAgICAgPGEgaHJlZj1cIiNjb250ZW50c1wiPkNvbnRlbnRzPC9hPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L25hdj5cbiAgICAgIDxoMj5KU1ggaXMgZ3JlYXQ8L2gyPlxuICAgICAgPHA+XG4gICAgICAgIEl0IGlzIGJlY2F1c2UgaXQgYWxsb3dzIHlvdSB0byBkbyB0aHJlZSBjcnVjaWFsIHRoaW5nczpcbiAgICAgIDwvcD5cbiAgICAgIDxvbD5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxzdHJvbmc+QXNzb2NpYXRlIHRoZSBjb2RlIHRoYXQgZGVmaW5lcyB0aGUgdmlldyBkaXJlY3RseSB3aXRoIHRoZSBjb2RlIHRoYXQgZGVmaW5lcyB0aGUgbW9kZWw8L3N0cm9uZz4uXG4gICAgICAgICAgVGhpcyBpcyBtdWNoIGJldHRlciB0aGFuIGhhdmluZyBhIHZpZXcgY2xhc3MgYW5kIGEgbW9kZWwgY2xhc3MgYW5kIGhhdmluZyBvbmUgaW5oZXJpdCBmcm9tIHRoZSBvdGhlciwgc2F5LlxuICAgICAgICAgIEpTWCBhbGxvd3MgeW91IHRvIGlubGluZSB0aGUgdmlldyBjb2RlLCBzbyB0byBzcGVhaywgYXMgd2VsbCBhcyBjb25uZWN0IGl0IHRvIHRoZSBzdXJyb3VuZGluZyBtb2RlbCBjb2RlIGluIGEgc3RyYWlnaHRmb3J3YXJkIG1hbm5lci5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxzdHJvbmc+QnVpbGQgdXAgdGhlIGFwcGxpY2F0aW9uJ3MgdmlldyBpbiBhIGRlY2xhcmF0aXZlIHdheTwvc3Ryb25nPi5cbiAgICAgICAgICBUaGUgbW9zdCBsaWtlbHkgYW5kIG9mdGVuIHRoZSBvbmx5IHJlbGF0aW9uIGJldHdlZW4gdmlldyBlbGVtZW50cyBpcyBpbmNsdXNpb24uXG4gICAgICAgICAgVGhpcyByZXN1bHRzIGluIGEgdHJlZSwgYW5kIEpTWCBlbmNvZGVzIHRyZWVzLlxuICAgICAgICAgIFRoaXMgd29uJ3QgYWx3YXlzIHdvcmssIGNvbnNpZGVyIGFyY2FkZSBnYW1lcy5cbiAgICAgICAgICBCdXQgaXQgd29ya3MgZm9yIGFwcGxpY2F0aW9ucyB3aXRoIGV2ZW50IGRyaXZlbiB1c2VyIGludGVyZmFjZXMgYW5kIHRoaXMgaW5jbHVkZXMgbmVhcmx5IGFsbCB3ZWIgYXBwbGljYXRpb25zLlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPHN0cm9uZz5DcmVhdGUgdmlldyBlbGVtZW50cyBlYXNpbHkgd2l0aG91dCB0aGUgbmVlZCBmb3IgY29uc3RydWN0b3JzIG9yIGZhY3RvcnkgbWV0aG9kczwvc3Ryb25nPi5cbiAgICAgICAgICBTbyB0aGVyZSBpcyBsZXNzIGNvZGUgYW5kIHdoYXQgdGhlcmUgaXMgbGlrZWx5IHRvIGJlIG1vcmUgcmVhZGFibGUgYW5kIG1haW50YWluYWJsZS5cbiAgICAgICAgICBKU1ggYWxzbyBlbmNvdXJhZ2VzIGNvbXBvc2l0aW9uIGFuZCByZXVzZS5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvb2w+XG4gICAgICA8cD5cbiAgICAgICAgQWxzbyBKU1gganVzdCBlbWJlZHMgd2VsbCBpbnRvIEphdmFTY3JpcHQuXG4gICAgICAgIENvbXBhcmUgdGhpcyB3aXRoIG9sZGVyIHRlY2hub2xvZ2llcyBzdWNoIGFzIEpTUCwgd2hpY2ggdHJ5IHRvIGVtYmVkIGltcGVyYXRpdmUgbGFuZ3VhZ2VzIGluIGRlY2xhcmF0aXZlIG9uZXMuXG4gICAgICAgIEZvciBzZXZlcmFsIHJlYXNvbnMgdGhpcyBjYW4gYmUgbmlnaHRtYXJpc2guXG4gICAgICAgIEJ1dCB0aGUgb3RoZXIgd2F5IHJvdW5kIGhhcHBlbnMgdG8gd29yayByZWFsbHkgd2VsbC5cbiAgICAgIDwvcD5cbiAgICA8L3NlY3Rpb24+XG4gICAgICBcbiAgKTsgIFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBKU1hJc0dyZWF0O1xuIl19