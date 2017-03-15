'use strict';

require('../../easyui-jsx');

var Next = require('../next'),
    Previous = require('../previous'),
    Contents = require('../contents'),
    BlockCode = require('../blockCode'),
    InlineCode = require('../inlineCode');

var AGoodExampleThisDocumentation = function AGoodExampleThisDocumentation() {
  return React.createElement(
    'section',
    null,
    React.createElement(
      'nav',
      null,
      React.createElement(
        Next,
        { href: '#theElementClass' },
        'The ',
        React.createElement(
          InlineCode,
          null,
          'Element'
        ),
        ' class'
      ),
      React.createElement(
        Previous,
        { href: '#extendingAnEasyUIClass' },
        'Previous: Extending an EasyUI class'
      ),
      React.createElement(Contents, null)
    ),
    React.createElement(
      'h2',
      null,
      'A good example, this documentation'
    ),
    React.createElement(
      BlockCode,
      null,
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
        InlineCode,
        null,
        'Element'
      ),
      ' class, or a class that extends it. In this case this means that the ',
      React.createElement(
        InlineCode,
        null,
        'show()'
      ),
      ' and ',
      React.createElement(
        InlineCode,
        null,
        'hide()'
      ),
      ' methods can been used to reveal the relevant section whenever the hash fragment changes.'
    )
  );
};

module.exports = AGoodExampleThisDocumentation;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9kb2NzL3NlY3Rpb25zL2FHb29kRXhhbXBsZVRoaXNEb2N1bWVudGF0aW9uLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJOZXh0IiwiUHJldmlvdXMiLCJDb250ZW50cyIsIkJsb2NrQ29kZSIsIklubGluZUNvZGUiLCJBR29vZEV4YW1wbGVUaGlzRG9jdW1lbnRhdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBQSxRQUFRLGtCQUFSOztBQUVBLElBQU1DLE9BQU9ELFFBQVEsU0FBUixDQUFiO0FBQUEsSUFDTUUsV0FBV0YsUUFBUSxhQUFSLENBRGpCO0FBQUEsSUFFTUcsV0FBV0gsUUFBUSxhQUFSLENBRmpCO0FBQUEsSUFHTUksWUFBWUosUUFBUSxjQUFSLENBSGxCO0FBQUEsSUFJTUssYUFBYUwsUUFBUSxlQUFSLENBSm5COztBQU1BLElBQU1NLGdDQUFnQyxTQUFoQ0EsNkJBQWdDLEdBQU07QUFDMUMsU0FFRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFDLFlBQUQ7QUFBQSxVQUFNLE1BQUssa0JBQVg7QUFBQTtBQUFrQztBQUFDLG9CQUFEO0FBQUE7QUFBQTtBQUFBLFNBQWxDO0FBQUE7QUFBQSxPQURGO0FBRUU7QUFBQyxnQkFBRDtBQUFBLFVBQVUsTUFBSyx5QkFBZjtBQUFBO0FBQUEsT0FGRjtBQUdFLDBCQUFDLFFBQUQ7QUFIRixLQURGO0FBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU5GO0FBT0U7QUFBQyxlQUFEO0FBQUE7QUFBQTtBQUFBLEtBUEY7QUEwQ0U7QUFBQTtBQUFBO0FBQUE7QUFDTTtBQUFBO0FBQUEsVUFBRyxNQUFLLCtEQUFSO0FBQUE7QUFBQSxPQUROO0FBQUE7QUFBQSxLQTFDRjtBQThDRTtBQUFBO0FBQUE7QUFBQTtBQUNtRztBQUFDLGtCQUFEO0FBQUE7QUFBQTtBQUFBLE9BRG5HO0FBQUE7QUFFbUM7QUFBQyxrQkFBRDtBQUFBO0FBQUE7QUFBQSxPQUZuQztBQUFBO0FBRXVFO0FBQUMsa0JBQUQ7QUFBQTtBQUFBO0FBQUEsT0FGdkU7QUFBQTtBQUFBO0FBOUNGLEdBRkY7QUF1REQsQ0F4REQ7O0FBMERBQyxPQUFPQyxPQUFQLEdBQWlCRiw2QkFBakIiLCJmaWxlIjoiYUdvb2RFeGFtcGxlVGhpc0RvY3VtZW50YXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnJlcXVpcmUoJy4uLy4uL2Vhc3l1aS1qc3gnKTtcblxuY29uc3QgTmV4dCA9IHJlcXVpcmUoJy4uL25leHQnKSxcbiAgICAgIFByZXZpb3VzID0gcmVxdWlyZSgnLi4vcHJldmlvdXMnKSxcbiAgICAgIENvbnRlbnRzID0gcmVxdWlyZSgnLi4vY29udGVudHMnKSxcbiAgICAgIEJsb2NrQ29kZSA9IHJlcXVpcmUoJy4uL2Jsb2NrQ29kZScpLFxuICAgICAgSW5saW5lQ29kZSA9IHJlcXVpcmUoJy4uL2lubGluZUNvZGUnKTtcbiAgXG5jb25zdCBBR29vZEV4YW1wbGVUaGlzRG9jdW1lbnRhdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIChcblxuICAgIDxzZWN0aW9uPlxuICAgICAgPG5hdj5cbiAgICAgICAgPE5leHQgaHJlZj1cIiN0aGVFbGVtZW50Q2xhc3NcIj5UaGUgPElubGluZUNvZGU+RWxlbWVudDwvSW5saW5lQ29kZT4gY2xhc3M8L05leHQ+XG4gICAgICAgIDxQcmV2aW91cyBocmVmPVwiI2V4dGVuZGluZ0FuRWFzeVVJQ2xhc3NcIj5QcmV2aW91czogRXh0ZW5kaW5nIGFuIEVhc3lVSSBjbGFzczwvUHJldmlvdXM+XG4gICAgICAgIDxDb250ZW50cyAvPlxuICAgICAgPC9uYXY+XG4gICAgICA8aDI+QSBnb29kIGV4YW1wbGUsIHRoaXMgZG9jdW1lbnRhdGlvbjwvaDI+XG4gICAgICA8QmxvY2tDb2RlPntgY29uc3QgaW5zZXJ0U2VjdGlvbnMgPSAoKSA9PiB7XG4gIGNvbnN0IGhlYWRlckRPTUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKSxcbiAgICAgICAgaGVhZGVyID0gRWxlbWVudC5mcm9tRE9NRWxlbWVudChoZWFkZXJET01FbGVtZW50KTtcblxuICBmb3JFYWNoU2VjdGlvbigoc2VjdGlvbikgPT4ge1xuICAgIHNlY3Rpb24uaW5zZXJ0QWZ0ZXIoaGVhZGVyKTtcbiAgfSk7XG59O1xuXG5jb25zdCByZXZlYWxTZWN0aW9uID0gKCkgPT4ge1xuICBmb3JFYWNoU2VjdGlvbigoc2VjdGlvbikgPT4ge1xuICAgIHNlY3Rpb24uaGlkZSgpO1xuICB9KTtcblxuICBjb25zdCBzZWN0aW9uID0gZnJhZ21lbnRUb1NlY3Rpb25NYXBbZnJhZ21lbnRdXG4gICAgICAgICAgICAgICAgICAgIHx8IGludHJvZHVjdGlvbjtcblxuICBzZWN0aW9uLnNob3coKTtcbn07XG5cbmNvbnN0IGZvckVhY2hTZWN0aW9uID0gKGNhbGxiYWNrKSA9PiB7XG4gIGNvbnN0IGZyYWdtZW50cyA9IE9iamVjdC5rZXlzKGZyYWdtZW50VG9TZWN0aW9uTWFwKTtcblxuICBmcmFnbWVudHMuZm9yRWFjaCgoZnJhZ21lbnQpID0+IHtcbiAgICBjb25zdCBzZWN0aW9uID0gZnJhZ21lbnRUb1NlY3Rpb25NYXBbZnJhZ21lbnRdO1xuXG4gICAgY2FsbGJhY2soc2VjdGlvbik7XG4gIH0pO1xufTtcblxuaW5zZXJ0U2VjdGlvbnMoKTtcblxuZnJhZ21lbnQub25DaGFuZ2UocmV2ZWFsU2VjdGlvbik7XG5cbnJldmVhbFNlY3Rpb24oKTtgfTwvQmxvY2tDb2RlPlxuICAgICAgPHA+XG4gICAgICAgIFRoZSA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2RqYWxiYXQvRWFzeVVJLUpTWC9ibG9iL21hc3Rlci9lczYvZG9jcy5qc1wiPmRvY3MuanM8L2E+IGZpbGUgc2hvd3MgaG93IGVhc3kgaXQgaXMgdG8gcHV0IHRvZ2V0aGVyIGEgYmFzaWMgc2luZ2xlIHBhZ2Ugd2ViIGFwcGxpY2F0aW9uLlxuICAgICAgICBUaGUgYXBwcm9hY2ggd2lsbCBub3Qgc2NhbGUgaW5kZWZpbml0ZWx5LCBzb29uZXIgb3IgbGF0ZXIgdGhlIHNlY3Rpb25zIHdvdWxkIGhhdmUgdG8gYmUgZ2VuZXJhdGVkIGZyb20gYSBkYXRhIHNvdXJjZSByYXRoZXIgdGhhbiBiZSBoYXJkLWNvZGVkLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIE5vbmV0aGVsZXNzLCBpdCBzZXJ2ZXMgdG8gaGlnaGxpZ2h0IGEga2V5IHBvaW50LCB3aGljaCBpcyB0aGF0IGFsbCBlbGVtZW50cyBhcmUgaW5zdGFuY2VzIG9mIHRoZSA8SW5saW5lQ29kZT5FbGVtZW50PC9JbmxpbmVDb2RlPiBjbGFzcywgb3IgYSBjbGFzcyB0aGF0IGV4dGVuZHMgaXQuXG4gICAgICAgIEluIHRoaXMgY2FzZSB0aGlzIG1lYW5zIHRoYXQgdGhlIDxJbmxpbmVDb2RlPnNob3coKTwvSW5saW5lQ29kZT4gYW5kIDxJbmxpbmVDb2RlPmhpZGUoKTwvSW5saW5lQ29kZT4gbWV0aG9kcyBjYW4gYmVlbiB1c2VkIHRvIHJldmVhbCB0aGUgcmVsZXZhbnQgc2VjdGlvbiB3aGVuZXZlciB0aGUgaGFzaCBmcmFnbWVudCBjaGFuZ2VzLlxuICAgICAgPC9wPlxuICAgIDwvc2VjdGlvbj5cblxuICApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBBR29vZEV4YW1wbGVUaGlzRG9jdW1lbnRhdGlvbjtcbiJdfQ==