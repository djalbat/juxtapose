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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2pzeElzR3JlYXQuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsIkpTWElzR3JlYXQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQUEsUUFBUSxnQkFBUixFLENBQTJCOztBQUUzQixJQUFNQyxhQUFhLFNBQWJBLFVBQWEsR0FBTTtBQUN2QixTQUVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERjtBQUlFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUFBO0FBQUEsT0FERjtBQU1FO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUFBO0FBQUEsT0FORjtBQWFFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUFBO0FBQUE7QUFiRixLQUpGO0FBdUJFO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0F2QkY7QUE2QkU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFVBQU0sV0FBVSxZQUFoQjtBQUNFO0FBQUE7QUFBQSxZQUFHLE1BQUssaUJBQVI7QUFBQTtBQUFBO0FBREYsT0FERjtBQUlFO0FBQUE7QUFBQSxVQUFNLFdBQVUsV0FBaEI7QUFDRTtBQUFBO0FBQUEsWUFBRyxNQUFLLGVBQVI7QUFBQTtBQUFBO0FBREY7QUFKRjtBQTdCRixHQUZGO0FBMENELENBM0NEOztBQTZDQUMsT0FBT0MsT0FBUCxHQUFpQkYsVUFBakIiLCJmaWxlIjoianN4SXNHcmVhdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxucmVxdWlyZSgnLi4vLi4vaW5kZXguanMnKTsgLy8vIGVhc3l1aS1qc3hcblxuY29uc3QgSlNYSXNHcmVhdCA9ICgpID0+IHtcbiAgcmV0dXJuIChcblxuICAgIDxzZWN0aW9uPlxuICAgICAgPHA+XG4gICAgICAgIEpTWCBpcyBncmVhdCBiZWNhdXNlIGl0IGFsbG93cyB5b3UgdG8gZG8gdGhyZWUgY3J1Y2lhbCB0aGluZ3M6XG4gICAgICA8L3A+XG4gICAgICA8b2w+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8c3Ryb25nPkFzc29jaWF0ZSB0aGUgY29kZSB0aGF0IGRlZmluZXMgdGhlIHZpZXcgZGlyZWN0bHkgd2l0aCB0aGUgY29kZSB0aGF0IGRlZmluZXMgdGhlIG1vZGVsPC9zdHJvbmc+LlxuICAgICAgICAgIFRoaXMgaXMgbXVjaCBiZXR0ZXIgdGhhbiBoYXZpbmcgYSB2aWV3IGNsYXNzIGFuZCBhIG1vZGVsIGNsYXNzIGFuZCBoYXZpbmcgb25lIGluaGVyaXQgZnJvbSB0aGUgb3RoZXIsIHNheS5cbiAgICAgICAgICBKU1ggYWxsb3dzIHlvdSB0byBpbmxpbmUgdGhlIHZpZXcgY29kZSwgc28gdG8gc3BlYWssIGFuZCBsaW5rIGl0IHRvIHRoZSBzdXJyb3VuZGluZyBtb2RlbCBjb2RlIGluIGEgc3RyYWlnaHRmb3J3YXJkIG1hbm5lci5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxzdHJvbmc+QnVpbGQgdXAgdGhlIGFwcGxpY2F0aW9uJ3MgdmlldyBpbiBhIGRlY2xhcmF0aXZlIHdheTwvc3Ryb25nPi5cbiAgICAgICAgICBUaGUgbW9zdCBsaWtlbHkgYW5kIG9mdGVuIHRoZSBvbmx5IHJlbGF0aW9uIGJldHdlZW4gdmlldyBlbGVtZW50cyBpcyBpbmNsdXNpb24uXG4gICAgICAgICAgVGhpcyByZXN1bHRzIGluIGEgdHJlZSwgYW5kIEpTWCBlbmNvZGVzIHRyZWVzLlxuICAgICAgICAgIFRoaXMgd29uJ3QgYWx3YXlzIHdvcmssIGNvbnNpZGVyIGFyY2FkZSBnYW1lcy5cbiAgICAgICAgICBCdXQgaXQgd29ya3MgZm9yIGFwcGxpY2F0aW9ucyB3aXRoIGV2ZW50IGRyaXZlbiB1c2VyIGludGVyZmFjZXMgYW5kIHRoaXMgaW5jbHVkZXMgbmVhcmx5IGFsbCB3ZWIgYXBwbGljYXRpb25zLlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPHN0cm9uZz5DcmVhdGUgdmlldyBlbGVtZW50cyBlYXNpbHkgd2l0aG91dCB0aGUgbmVlZCBmb3IgY29uc3RydWN0b3JzIG9yIGZhY3RvcnkgbWV0aG9kczwvc3Ryb25nPi5cbiAgICAgICAgICBTbyB0aGVyZSBpcyBsZXNzIGNvZGUgYW5kIHdoYXQgdGhlcmUgaXMgbGlrZWx5IHRvIGJlIG1vcmUgcmVhZGFibGUgYW5kIG1haW50YWluYWJsZS5cbiAgICAgICAgICBKU1ggYWxzbyBlbmNvdXJhZ2VzIGNvbXBvc2l0aW9uIGFuZCByZXVzZS5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvb2w+XG4gICAgICA8cD5cbiAgICAgICAgQWxzbyBKU1gganVzdCBlbWJlZHMgd2VsbCBpbnRvIEphdmFTY3JpcHQuXG4gICAgICAgIENvbXBhcmUgdGhpcyB3aXRoIHRoaW5ncyBzdWNoIGFzIEpTUCwgd2hpY2ggZW1iZWQgaW1wZXJhdGl2ZSBsYW5ndWFnZXMgaW4gZGVjbGFyYXRpdmUgb25lcy5cbiAgICAgICAgRm9yIHNldmVyYWwgcmVhc29ucyB0aGlzIGNhbiBiZSBuaWdodG1hcmlzaC5cbiAgICAgICAgQnV0IHRoZSBvdGhlciB3YXkgcm91bmQgaGFwcGVucyB0byB3b3JrIHJlYWxseSB3ZWxsLlxuICAgICAgPC9wPlxuICAgICAgPG5hdj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxvYXRSaWdodFwiPlxuICAgICAgICAgIDxhIGhyZWY9XCIjZ2V0dGluZ1N0YXJ0ZWRcIj5OZXh0OiBHZXR0aW5nIHN0YXJ0ZWQ8L2E+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxvYXRMZWZ0XCI+XG4gICAgICAgICAgPGEgaHJlZj1cIiNpbnRyb2R1Y3Rpb25cIj5QcmV2aW91czogSW50cm9kdWN0aW9uPC9hPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L25hdj5cbiAgICA8L3NlY3Rpb24+XG4gICAgICBcbiAgKTsgIFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBKU1hJc0dyZWF0O1xuIl19