'use strict';

require('../easyui-jsx');

var AGoodExampleThisDocumentation = function AGoodExampleThisDocumentation() {
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
          { href: '#theElementClass' },
          'Next: The ',
          React.createElement(
            'code',
            { className: 'inline' },
            'Element'
          ),
          ' class'
        )
      ),
      React.createElement(
        'span',
        { className: 'previous' },
        React.createElement(
          'a',
          { href: '#extendingAnEasyUIClass' },
          'Previous: Extending an EasyUI class'
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
      'A good example, this documentation'
    ),
    React.createElement(
      'code',
      { className: 'block' },
      'const insertSections = () => {\n  const headerDOMElement = document.querySelector(\'header\'),\n        header = Element.fromDOMElement(headerDOMElement);\n\n  forEachSection((section) => {\n    section.insertAfter(header);\n  });\n};\n\nconst revealSection = () => {\n  forEachSection((section) => {\n    section.hide();\n  });\n\n  const section = fragmentToSectionMap[fragment]\n                    || introduction;\n\n  section.show();\n};\n\nconst forEachSection = (callback) => {\n  const fragments = Object.keys(fragmentToSectionMap);\n\n  fragments.forEach((fragment) => {\n    const section = fragmentToSectionMap[fragment];\n\n    callback(section);\n  });\n};\n\ninsertSections();\n\nfragment.onChange(revealSection);\n\nrevealSection();'
    ),
    React.createElement(
      'p',
      null,
      'The ',
      React.createElement(
        'a',
        { href: 'https://github.com/djalbat/EasyUI-JSX/blob/master/es6/docs.js' },
        'docs.js'
      ),
      ' file shows how easy it is to put together a basic single page web application. The approach will not scale indefinitely, sooner or later the sections would have to be generated from a data source rather than be hard-coded.'
    ),
    React.createElement(
      'p',
      null,
      'Nonetheless, it serves to highlight a key point, which is that all elements are instances of the ',
      React.createElement(
        'code',
        { className: 'inline' },
        'Element'
      ),
      ' class, or a class that extends it. In this case this means that the ',
      React.createElement(
        'code',
        { className: 'inline' },
        'show()'
      ),
      ' and ',
      React.createElement(
        'code',
        { className: 'inline' },
        'hide()'
      ),
      ' methods can been used to reveal the relevant section whenever the hash fragment changes.'
    )
  );
};

module.exports = AGoodExampleThisDocumentation;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kb2NzL2FHb29kRXhhbXBsZVRoaXNEb2N1bWVudGF0aW9uLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJBR29vZEV4YW1wbGVUaGlzRG9jdW1lbnRhdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBQSxRQUFRLGVBQVI7O0FBRUEsSUFBTUMsZ0NBQWdDLFNBQWhDQSw2QkFBZ0MsR0FBTTtBQUMxQyxTQUVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxVQUFNLFdBQVUsTUFBaEI7QUFDRTtBQUFBO0FBQUEsWUFBRyxNQUFLLGtCQUFSO0FBQUE7QUFBcUM7QUFBQTtBQUFBLGNBQU0sV0FBVSxRQUFoQjtBQUFBO0FBQUEsV0FBckM7QUFBQTtBQUFBO0FBREYsT0FERjtBQUlFO0FBQUE7QUFBQSxVQUFNLFdBQVUsVUFBaEI7QUFDRTtBQUFBO0FBQUEsWUFBRyxNQUFLLHlCQUFSO0FBQUE7QUFBQTtBQURGLE9BSkY7QUFPRTtBQUFBO0FBQUEsVUFBTSxXQUFVLFVBQWhCO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyxXQUFSO0FBQUE7QUFBQTtBQURGO0FBUEYsS0FERjtBQVlFO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FaRjtBQWFFO0FBQUE7QUFBQSxRQUFNLFdBQVUsT0FBaEI7QUFBQTtBQUFBLEtBYkY7QUFnREU7QUFBQTtBQUFBO0FBQUE7QUFDTTtBQUFBO0FBQUEsVUFBRyxNQUFLLCtEQUFSO0FBQUE7QUFBQSxPQUROO0FBQUE7QUFBQSxLQWhERjtBQW9ERTtBQUFBO0FBQUE7QUFBQTtBQUNtRztBQUFBO0FBQUEsVUFBTSxXQUFVLFFBQWhCO0FBQUE7QUFBQSxPQURuRztBQUFBO0FBRW1DO0FBQUE7QUFBQSxVQUFNLFdBQVUsUUFBaEI7QUFBQTtBQUFBLE9BRm5DO0FBQUE7QUFFOEU7QUFBQTtBQUFBLFVBQU0sV0FBVSxRQUFoQjtBQUFBO0FBQUEsT0FGOUU7QUFBQTtBQUFBO0FBcERGLEdBRkY7QUE2REQsQ0E5REQ7O0FBZ0VBQyxPQUFPQyxPQUFQLEdBQWlCRiw2QkFBakIiLCJmaWxlIjoiYUdvb2RFeGFtcGxlVGhpc0RvY3VtZW50YXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnJlcXVpcmUoJy4uL2Vhc3l1aS1qc3gnKTtcblxuY29uc3QgQUdvb2RFeGFtcGxlVGhpc0RvY3VtZW50YXRpb24gPSAoKSA9PiB7XG4gIHJldHVybiAoXG5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxuYXY+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5leHRcIj5cbiAgICAgICAgICA8YSBocmVmPVwiI3RoZUVsZW1lbnRDbGFzc1wiPk5leHQ6IFRoZSA8Y29kZSBjbGFzc05hbWU9XCJpbmxpbmVcIj5FbGVtZW50PC9jb2RlPiBjbGFzczwvYT5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwcmV2aW91c1wiPlxuICAgICAgICAgIDxhIGhyZWY9XCIjZXh0ZW5kaW5nQW5FYXN5VUlDbGFzc1wiPlByZXZpb3VzOiBFeHRlbmRpbmcgYW4gRWFzeVVJIGNsYXNzPC9hPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRzXCI+XG4gICAgICAgICAgPGEgaHJlZj1cIiNjb250ZW50c1wiPkNvbnRlbnRzPC9hPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L25hdj5cbiAgICAgIDxoMj5BIGdvb2QgZXhhbXBsZSwgdGhpcyBkb2N1bWVudGF0aW9uPC9oMj5cbiAgICAgIDxjb2RlIGNsYXNzTmFtZT1cImJsb2NrXCI+e2Bjb25zdCBpbnNlcnRTZWN0aW9ucyA9ICgpID0+IHtcbiAgY29uc3QgaGVhZGVyRE9NRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpLFxuICAgICAgICBoZWFkZXIgPSBFbGVtZW50LmZyb21ET01FbGVtZW50KGhlYWRlckRPTUVsZW1lbnQpO1xuXG4gIGZvckVhY2hTZWN0aW9uKChzZWN0aW9uKSA9PiB7XG4gICAgc2VjdGlvbi5pbnNlcnRBZnRlcihoZWFkZXIpO1xuICB9KTtcbn07XG5cbmNvbnN0IHJldmVhbFNlY3Rpb24gPSAoKSA9PiB7XG4gIGZvckVhY2hTZWN0aW9uKChzZWN0aW9uKSA9PiB7XG4gICAgc2VjdGlvbi5oaWRlKCk7XG4gIH0pO1xuXG4gIGNvbnN0IHNlY3Rpb24gPSBmcmFnbWVudFRvU2VjdGlvbk1hcFtmcmFnbWVudF1cbiAgICAgICAgICAgICAgICAgICAgfHwgaW50cm9kdWN0aW9uO1xuXG4gIHNlY3Rpb24uc2hvdygpO1xufTtcblxuY29uc3QgZm9yRWFjaFNlY3Rpb24gPSAoY2FsbGJhY2spID0+IHtcbiAgY29uc3QgZnJhZ21lbnRzID0gT2JqZWN0LmtleXMoZnJhZ21lbnRUb1NlY3Rpb25NYXApO1xuXG4gIGZyYWdtZW50cy5mb3JFYWNoKChmcmFnbWVudCkgPT4ge1xuICAgIGNvbnN0IHNlY3Rpb24gPSBmcmFnbWVudFRvU2VjdGlvbk1hcFtmcmFnbWVudF07XG5cbiAgICBjYWxsYmFjayhzZWN0aW9uKTtcbiAgfSk7XG59O1xuXG5pbnNlcnRTZWN0aW9ucygpO1xuXG5mcmFnbWVudC5vbkNoYW5nZShyZXZlYWxTZWN0aW9uKTtcblxucmV2ZWFsU2VjdGlvbigpO2B9PC9jb2RlPlxuICAgICAgPHA+XG4gICAgICAgIFRoZSA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2RqYWxiYXQvRWFzeVVJLUpTWC9ibG9iL21hc3Rlci9lczYvZG9jcy5qc1wiPmRvY3MuanM8L2E+IGZpbGUgc2hvd3MgaG93IGVhc3kgaXQgaXMgdG8gcHV0IHRvZ2V0aGVyIGEgYmFzaWMgc2luZ2xlIHBhZ2Ugd2ViIGFwcGxpY2F0aW9uLlxuICAgICAgICBUaGUgYXBwcm9hY2ggd2lsbCBub3Qgc2NhbGUgaW5kZWZpbml0ZWx5LCBzb29uZXIgb3IgbGF0ZXIgdGhlIHNlY3Rpb25zIHdvdWxkIGhhdmUgdG8gYmUgZ2VuZXJhdGVkIGZyb20gYSBkYXRhIHNvdXJjZSByYXRoZXIgdGhhbiBiZSBoYXJkLWNvZGVkLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIE5vbmV0aGVsZXNzLCBpdCBzZXJ2ZXMgdG8gaGlnaGxpZ2h0IGEga2V5IHBvaW50LCB3aGljaCBpcyB0aGF0IGFsbCBlbGVtZW50cyBhcmUgaW5zdGFuY2VzIG9mIHRoZSA8Y29kZSBjbGFzc05hbWU9XCJpbmxpbmVcIj5FbGVtZW50PC9jb2RlPiBjbGFzcywgb3IgYSBjbGFzcyB0aGF0IGV4dGVuZHMgaXQuXG4gICAgICAgIEluIHRoaXMgY2FzZSB0aGlzIG1lYW5zIHRoYXQgdGhlIDxjb2RlIGNsYXNzTmFtZT1cImlubGluZVwiPnNob3coKTwvY29kZT4gYW5kIDxjb2RlIGNsYXNzTmFtZT1cImlubGluZVwiPmhpZGUoKTwvY29kZT4gbWV0aG9kcyBjYW4gYmVlbiB1c2VkIHRvIHJldmVhbCB0aGUgcmVsZXZhbnQgc2VjdGlvbiB3aGVuZXZlciB0aGUgaGFzaCBmcmFnbWVudCBjaGFuZ2VzLlxuICAgICAgPC9wPlxuICAgIDwvc2VjdGlvbj5cblxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBBR29vZEV4YW1wbGVUaGlzRG9jdW1lbnRhdGlvbjtcbiJdfQ==