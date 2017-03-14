'use strict';

require('../../index.js'); /// easyui-jsx

var JSXIsGreat = function JSXIsGreat() {
  return React.createElement(
    'section',
    null,
    React.createElement(
      'p',
      null,
      'JSX is great because it allows you to do three crucial things:'
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
        '. This is much better than having a view class and a model class and having one inherit from the other, say. JSX allows you to inline the view code, so to speak, and link it to the surrounding model code in a straightforward manner.'
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
      'Also JSX just embeds well into JavaScript. Compare this with things such as JSP, which embed imperative languages in declarative ones. For several reasons this can be nightmarish. But the other way round happens to work really well.'
    )
  );
};

module.exports = JSXIsGreat;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2pzeElzR3JlYXQuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsIkpTWElzR3JlYXQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQUEsUUFBUSxnQkFBUixFLENBQTJCOztBQUUzQixJQUFNQyxhQUFhLFNBQWJBLFVBQWEsR0FBTTtBQUN2QixTQUVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERjtBQUlFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUFBO0FBQUEsT0FERjtBQU1FO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUFBO0FBQUEsT0FORjtBQWFFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUFBO0FBQUE7QUFiRixLQUpGO0FBdUJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF2QkYsR0FGRjtBQWtDRCxDQW5DRDs7QUFxQ0FDLE9BQU9DLE9BQVAsR0FBaUJGLFVBQWpCIiwiZmlsZSI6ImpzeElzR3JlYXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnJlcXVpcmUoJy4uLy4uL2luZGV4LmpzJyk7IC8vLyBlYXN5dWktanN4XG5cbmNvbnN0IEpTWElzR3JlYXQgPSAoKSA9PiB7XG4gIHJldHVybiAoXG5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxwPlxuICAgICAgICBKU1ggaXMgZ3JlYXQgYmVjYXVzZSBpdCBhbGxvd3MgeW91IHRvIGRvIHRocmVlIGNydWNpYWwgdGhpbmdzOlxuICAgICAgPC9wPlxuICAgICAgPG9sPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPHN0cm9uZz5Bc3NvY2lhdGUgdGhlIGNvZGUgdGhhdCBkZWZpbmVzIHRoZSB2aWV3IGRpcmVjdGx5IHdpdGggdGhlIGNvZGUgdGhhdCBkZWZpbmVzIHRoZSBtb2RlbDwvc3Ryb25nPi5cbiAgICAgICAgICBUaGlzIGlzIG11Y2ggYmV0dGVyIHRoYW4gaGF2aW5nIGEgdmlldyBjbGFzcyBhbmQgYSBtb2RlbCBjbGFzcyBhbmQgaGF2aW5nIG9uZSBpbmhlcml0IGZyb20gdGhlIG90aGVyLCBzYXkuXG4gICAgICAgICAgSlNYIGFsbG93cyB5b3UgdG8gaW5saW5lIHRoZSB2aWV3IGNvZGUsIHNvIHRvIHNwZWFrLCBhbmQgbGluayBpdCB0byB0aGUgc3Vycm91bmRpbmcgbW9kZWwgY29kZSBpbiBhIHN0cmFpZ2h0Zm9yd2FyZCBtYW5uZXIuXG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8c3Ryb25nPkJ1aWxkIHVwIHRoZSBhcHBsaWNhdGlvbidzIHZpZXcgaW4gYSBkZWNsYXJhdGl2ZSB3YXk8L3N0cm9uZz4uXG4gICAgICAgICAgVGhlIG1vc3QgbGlrZWx5IGFuZCBvZnRlbiB0aGUgb25seSByZWxhdGlvbiBiZXR3ZWVuIHZpZXcgZWxlbWVudHMgaXMgaW5jbHVzaW9uLlxuICAgICAgICAgIFRoaXMgcmVzdWx0cyBpbiBhIHRyZWUsIGFuZCBKU1ggZW5jb2RlcyB0cmVlcy5cbiAgICAgICAgICBUaGlzIHdvbid0IGFsd2F5cyB3b3JrLCBjb25zaWRlciBhcmNhZGUgZ2FtZXMuXG4gICAgICAgICAgQnV0IGl0IHdvcmtzIGZvciBhcHBsaWNhdGlvbnMgd2l0aCBldmVudCBkcml2ZW4gdXNlciBpbnRlcmZhY2VzIGFuZCB0aGlzIGluY2x1ZGVzIG5lYXJseSBhbGwgd2ViIGFwcGxpY2F0aW9ucy5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxzdHJvbmc+Q3JlYXRlIHZpZXcgZWxlbWVudHMgZWFzaWx5IHdpdGhvdXQgdGhlIG5lZWQgZm9yIGNvbnN0cnVjdG9ycyBvciBmYWN0b3J5IG1ldGhvZHM8L3N0cm9uZz4uXG4gICAgICAgICAgU28gdGhlcmUgaXMgbGVzcyBjb2RlIGFuZCB3aGF0IHRoZXJlIGlzIGxpa2VseSB0byBiZSBtb3JlIHJlYWRhYmxlIGFuZCBtYWludGFpbmFibGUuXG4gICAgICAgICAgSlNYIGFsc28gZW5jb3VyYWdlcyBjb21wb3NpdGlvbiBhbmQgcmV1c2UuXG4gICAgICAgIDwvbGk+XG4gICAgICA8L29sPlxuICAgICAgPHA+XG4gICAgICAgIEFsc28gSlNYIGp1c3QgZW1iZWRzIHdlbGwgaW50byBKYXZhU2NyaXB0LlxuICAgICAgICBDb21wYXJlIHRoaXMgd2l0aCB0aGluZ3Mgc3VjaCBhcyBKU1AsIHdoaWNoIGVtYmVkIGltcGVyYXRpdmUgbGFuZ3VhZ2VzIGluIGRlY2xhcmF0aXZlIG9uZXMuXG4gICAgICAgIEZvciBzZXZlcmFsIHJlYXNvbnMgdGhpcyBjYW4gYmUgbmlnaHRtYXJpc2guXG4gICAgICAgIEJ1dCB0aGUgb3RoZXIgd2F5IHJvdW5kIGhhcHBlbnMgdG8gd29yayByZWFsbHkgd2VsbC5cbiAgICAgIDwvcD5cbiAgICA8L3NlY3Rpb24+XG4gICAgICBcbiAgKTsgIFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBKU1hJc0dyZWF0O1xuIl19