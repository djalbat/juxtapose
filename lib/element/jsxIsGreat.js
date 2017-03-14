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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9lbGVtZW50L2pzeElzR3JlYXQuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsIkpTWElzR3JlYXQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQUEsUUFBUSxnQkFBUixFLENBQTJCOztBQUUzQixJQUFNQyxhQUFhLFNBQWJBLFVBQWEsR0FBTTtBQUN2QixTQUVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FGRjtBQUtFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUFBO0FBQUEsT0FERjtBQU1FO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUFBO0FBQUEsT0FORjtBQWFFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUFBO0FBQUE7QUFiRixLQUxGO0FBd0JFO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0F4QkY7QUE4QkU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFVBQU0sV0FBVSxZQUFoQjtBQUNFO0FBQUE7QUFBQSxZQUFHLE1BQUssaUJBQVI7QUFBQTtBQUFBO0FBREYsT0FERjtBQUlFO0FBQUE7QUFBQSxVQUFNLFdBQVUsV0FBaEI7QUFDRTtBQUFBO0FBQUEsWUFBRyxNQUFLLGVBQVI7QUFBQTtBQUFBO0FBREY7QUFKRjtBQTlCRixHQUZGO0FBMkNELENBNUNEOztBQThDQUMsT0FBT0MsT0FBUCxHQUFpQkYsVUFBakIiLCJmaWxlIjoianN4SXNHcmVhdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxucmVxdWlyZSgnLi4vLi4vaW5kZXguanMnKTsgLy8vIGVhc3l1aS1qc3hcblxuY29uc3QgSlNYSXNHcmVhdCA9ICgpID0+IHtcbiAgcmV0dXJuIChcblxuICAgIDxzZWN0aW9uPlxuICAgICAgPGgyPkpTWCBpcyBncmVhdDwvaDI+XG4gICAgICA8cD5cbiAgICAgICAgSXQgaXMgYmVjYXVzZSBpdCBhbGxvd3MgeW91IHRvIGRvIHRocmVlIGNydWNpYWwgdGhpbmdzOlxuICAgICAgPC9wPlxuICAgICAgPG9sPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPHN0cm9uZz5Bc3NvY2lhdGUgdGhlIGNvZGUgdGhhdCBkZWZpbmVzIHRoZSB2aWV3IGRpcmVjdGx5IHdpdGggdGhlIGNvZGUgdGhhdCBkZWZpbmVzIHRoZSBtb2RlbDwvc3Ryb25nPi5cbiAgICAgICAgICBUaGlzIGlzIG11Y2ggYmV0dGVyIHRoYW4gaGF2aW5nIGEgdmlldyBjbGFzcyBhbmQgYSBtb2RlbCBjbGFzcyBhbmQgaGF2aW5nIG9uZSBpbmhlcml0IGZyb20gdGhlIG90aGVyLCBzYXkuXG4gICAgICAgICAgSlNYIGFsbG93cyB5b3UgdG8gaW5saW5lIHRoZSB2aWV3IGNvZGUsIHNvIHRvIHNwZWFrLCBhcyB3ZWxsIGFzIGNvbm5lY3QgaXQgdG8gdGhlIHN1cnJvdW5kaW5nIG1vZGVsIGNvZGUgaW4gYSBzdHJhaWdodGZvcndhcmQgbWFubmVyLlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPHN0cm9uZz5CdWlsZCB1cCB0aGUgYXBwbGljYXRpb24ncyB2aWV3IGluIGEgZGVjbGFyYXRpdmUgd2F5PC9zdHJvbmc+LlxuICAgICAgICAgIFRoZSBtb3N0IGxpa2VseSBhbmQgb2Z0ZW4gdGhlIG9ubHkgcmVsYXRpb24gYmV0d2VlbiB2aWV3IGVsZW1lbnRzIGlzIGluY2x1c2lvbi5cbiAgICAgICAgICBUaGlzIHJlc3VsdHMgaW4gYSB0cmVlLCBhbmQgSlNYIGVuY29kZXMgdHJlZXMuXG4gICAgICAgICAgVGhpcyB3b24ndCBhbHdheXMgd29yaywgY29uc2lkZXIgYXJjYWRlIGdhbWVzLlxuICAgICAgICAgIEJ1dCBpdCB3b3JrcyBmb3IgYXBwbGljYXRpb25zIHdpdGggZXZlbnQgZHJpdmVuIHVzZXIgaW50ZXJmYWNlcyBhbmQgdGhpcyBpbmNsdWRlcyBuZWFybHkgYWxsIHdlYiBhcHBsaWNhdGlvbnMuXG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8c3Ryb25nPkNyZWF0ZSB2aWV3IGVsZW1lbnRzIGVhc2lseSB3aXRob3V0IHRoZSBuZWVkIGZvciBjb25zdHJ1Y3RvcnMgb3IgZmFjdG9yeSBtZXRob2RzPC9zdHJvbmc+LlxuICAgICAgICAgIFNvIHRoZXJlIGlzIGxlc3MgY29kZSBhbmQgd2hhdCB0aGVyZSBpcyBsaWtlbHkgdG8gYmUgbW9yZSByZWFkYWJsZSBhbmQgbWFpbnRhaW5hYmxlLlxuICAgICAgICAgIEpTWCBhbHNvIGVuY291cmFnZXMgY29tcG9zaXRpb24gYW5kIHJldXNlLlxuICAgICAgICA8L2xpPlxuICAgICAgPC9vbD5cbiAgICAgIDxwPlxuICAgICAgICBBbHNvIEpTWCBqdXN0IGVtYmVkcyB3ZWxsIGludG8gSmF2YVNjcmlwdC5cbiAgICAgICAgQ29tcGFyZSB0aGlzIHdpdGggc28gY2FsbGVkIHRlY2hub2xvZ2llcyBzdWNoIGFzIEpTUCwgd2hpY2ggdHJ5IHRvIGVtYmVkIGltcGVyYXRpdmUgbGFuZ3VhZ2VzIGluIGRlY2xhcmF0aXZlIG9uZXMuXG4gICAgICAgIEZvciBzZXZlcmFsIHJlYXNvbnMgdGhpcyBjYW4gYmUgbmlnaHRtYXJpc2guXG4gICAgICAgIEJ1dCB0aGUgb3RoZXIgd2F5IHJvdW5kIGhhcHBlbnMgdG8gd29yayByZWFsbHkgd2VsbC5cbiAgICAgIDwvcD5cbiAgICAgIDxuYXY+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsb2F0UmlnaHRcIj5cbiAgICAgICAgICA8YSBocmVmPVwiI2dldHRpbmdTdGFydGVkXCI+TmV4dDogR2V0dGluZyBzdGFydGVkPC9hPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsb2F0TGVmdFwiPlxuICAgICAgICAgIDxhIGhyZWY9XCIjaW50cm9kdWN0aW9uXCI+UHJldmlvdXM6IEludHJvZHVjdGlvbjwvYT5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9uYXY+XG4gICAgPC9zZWN0aW9uPlxuICAgICAgXG4gICk7ICBcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSlNYSXNHcmVhdDtcbiJdfQ==