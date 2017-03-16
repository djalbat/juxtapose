'use strict';

require('../../easyui-jsx');

var Next = require('../next'),
    Previous = require('../previous'),
    Contents = require('../contents'),
    InlineCode = require('../inlineCode');

var TheElementClass = function TheElementClass() {
  return React.createElement(
    'section',
    null,
    React.createElement(
      'nav',
      null,
      React.createElement(
        Next,
        { href: '#aSimpleForm' },
        'A simple form'
      ),
      React.createElement(
        Previous,
        { href: '#theExampleOfThisDocumentation' },
        'The example of this documentation'
      ),
      React.createElement(Contents, null)
    ),
    React.createElement(
      'h2',
      null,
      'The ',
      React.createElement(
        InlineCode,
        null,
        'Element'
      ),
      ' class'
    ),
    React.createElement(
      'p',
      null,
      'EasyUI does not enshrine the concept of a component, unlike React and Reaction. Instead there are only elements. An element is meant to be seen as somewhat virtual, abstracting away from a real, underlying DOM element.'
    ),
    React.createElement(
      'p',
      null,
      'As mentioned previously, all elements are instances of the ',
      React.createElement(
        InlineCode,
        null,
        'Element'
      ),
      ' class, or a class that extends it. This class has evolved over time and has been written care. The source is here:'
    ),
    React.createElement(
      'ul',
      null,
      React.createElement(
        'li',
        null,
        React.createElement(
          'a',
          { href: 'https://github.com/djalbat/EasyUI/blob/master/es6/element.js' },
          'element.js'
        )
      )
    ),
    React.createElement(
      'p',
      null,
      'Note that the constructor defines a ',
      React.createElement(
        InlineCode,
        null,
        'domElement'
      ),
      ' property which is a reference to the underlying DOM element. Note also that there is no ',
      React.createElement(
        InlineCode,
        null,
        'getDOMElement()'
      ),
      ' method to expose this property. This is quite intentional. Generally at a higher level you should never need a reference to an element\'s underlying DOM element.'
    ),
    React.createElement(
      'p',
      null,
      'This is important: ',
      React.createElement(
        'em',
        null,
        'with EasyUI there is no model'
      ),
      '. You manipulate the view, namely the DOM, directly, albeit via this thin layer of abstraction. So the ',
      React.createElement(
        InlineCode,
        null,
        'Element'
      ),
      ' class has methods to append elements to others, set attributes and classes, register event handlers and so on.'
    ),
    React.createElement(
      'p',
      null,
      'For those coming from a React or similar background this may take some getting used to. React adheres quite closely to the MVC paradigm. Manipulate the model, they say, and the view will magically take care of itself. With EasyUI on the other hand there is no magic. There is still an abstraction but it is cleaner, more honest perhaps.'
    )
  );
};

module.exports = TheElementClass;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9kb2NzL3NlY3Rpb25zL3RoZUVsZW1lbnRDbGFzcy5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiTmV4dCIsIlByZXZpb3VzIiwiQ29udGVudHMiLCJJbmxpbmVDb2RlIiwiVGhlRWxlbWVudENsYXNzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUFBLFFBQVEsa0JBQVI7O0FBRUEsSUFBTUMsT0FBT0QsUUFBUSxTQUFSLENBQWI7QUFBQSxJQUNNRSxXQUFXRixRQUFRLGFBQVIsQ0FEakI7QUFBQSxJQUVNRyxXQUFXSCxRQUFRLGFBQVIsQ0FGakI7QUFBQSxJQUdNSSxhQUFhSixRQUFRLGVBQVIsQ0FIbkI7O0FBS0EsSUFBTUssa0JBQWtCLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCLFNBRUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQyxZQUFEO0FBQUEsVUFBTSxNQUFLLGNBQVg7QUFBQTtBQUFBLE9BREY7QUFFRTtBQUFDLGdCQUFEO0FBQUEsVUFBVSxNQUFLLGdDQUFmO0FBQUE7QUFBQSxPQUZGO0FBR0UsMEJBQUMsUUFBRDtBQUhGLEtBREY7QUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFRO0FBQUMsa0JBQUQ7QUFBQTtBQUFBO0FBQUEsT0FBUjtBQUFBO0FBQUEsS0FORjtBQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FQRjtBQVlFO0FBQUE7QUFBQTtBQUFBO0FBQzZEO0FBQUMsa0JBQUQ7QUFBQTtBQUFBO0FBQUEsT0FEN0Q7QUFBQTtBQUFBLEtBWkY7QUFpQkU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyw4REFBUjtBQUFBO0FBQUE7QUFERjtBQURGLEtBakJGO0FBc0JFO0FBQUE7QUFBQTtBQUFBO0FBQ3NDO0FBQUMsa0JBQUQ7QUFBQTtBQUFBO0FBQUEsT0FEdEM7QUFBQTtBQUU2QjtBQUFDLGtCQUFEO0FBQUE7QUFBQTtBQUFBLE9BRjdCO0FBQUE7QUFBQSxLQXRCRjtBQTRCRTtBQUFBO0FBQUE7QUFBQTtBQUNxQjtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRHJCO0FBQUE7QUFHUztBQUFDLGtCQUFEO0FBQUE7QUFBQTtBQUFBLE9BSFQ7QUFBQTtBQUFBLEtBNUJGO0FBaUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFqQ0YsR0FGRjtBQTZDRCxDQTlDRDs7QUFnREFDLE9BQU9DLE9BQVAsR0FBaUJGLGVBQWpCIiwiZmlsZSI6InRoZUVsZW1lbnRDbGFzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxucmVxdWlyZSgnLi4vLi4vZWFzeXVpLWpzeCcpO1xuXG5jb25zdCBOZXh0ID0gcmVxdWlyZSgnLi4vbmV4dCcpLFxuICAgICAgUHJldmlvdXMgPSByZXF1aXJlKCcuLi9wcmV2aW91cycpLFxuICAgICAgQ29udGVudHMgPSByZXF1aXJlKCcuLi9jb250ZW50cycpLFxuICAgICAgSW5saW5lQ29kZSA9IHJlcXVpcmUoJy4uL2lubGluZUNvZGUnKTtcblxuY29uc3QgVGhlRWxlbWVudENsYXNzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuXG4gICAgPHNlY3Rpb24+XG4gICAgICA8bmF2PlxuICAgICAgICA8TmV4dCBocmVmPVwiI2FTaW1wbGVGb3JtXCI+QSBzaW1wbGUgZm9ybTwvTmV4dD5cbiAgICAgICAgPFByZXZpb3VzIGhyZWY9XCIjdGhlRXhhbXBsZU9mVGhpc0RvY3VtZW50YXRpb25cIj5UaGUgZXhhbXBsZSBvZiB0aGlzIGRvY3VtZW50YXRpb248L1ByZXZpb3VzPlxuICAgICAgICA8Q29udGVudHMgLz5cbiAgICAgIDwvbmF2PlxuICAgICAgPGgyPlRoZSA8SW5saW5lQ29kZT5FbGVtZW50PC9JbmxpbmVDb2RlPiBjbGFzczwvaDI+XG4gICAgICA8cD5cbiAgICAgICAgRWFzeVVJIGRvZXMgbm90IGVuc2hyaW5lIHRoZSBjb25jZXB0IG9mIGEgY29tcG9uZW50LCB1bmxpa2UgUmVhY3QgYW5kIFJlYWN0aW9uLlxuICAgICAgICBJbnN0ZWFkIHRoZXJlIGFyZSBvbmx5IGVsZW1lbnRzLlxuICAgICAgICBBbiBlbGVtZW50IGlzIG1lYW50IHRvIGJlIHNlZW4gYXMgc29tZXdoYXQgdmlydHVhbCwgYWJzdHJhY3RpbmcgYXdheSBmcm9tIGEgcmVhbCwgdW5kZXJseWluZyBET00gZWxlbWVudC5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBBcyBtZW50aW9uZWQgcHJldmlvdXNseSwgYWxsIGVsZW1lbnRzIGFyZSBpbnN0YW5jZXMgb2YgdGhlIDxJbmxpbmVDb2RlPkVsZW1lbnQ8L0lubGluZUNvZGU+IGNsYXNzLCBvciBhIGNsYXNzIHRoYXQgZXh0ZW5kcyBpdC5cbiAgICAgICAgVGhpcyBjbGFzcyBoYXMgZXZvbHZlZCBvdmVyIHRpbWUgYW5kIGhhcyBiZWVuIHdyaXR0ZW4gY2FyZS5cbiAgICAgICAgVGhlIHNvdXJjZSBpcyBoZXJlOlxuICAgICAgPC9wPlxuICAgICAgPHVsPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9kamFsYmF0L0Vhc3lVSS9ibG9iL21hc3Rlci9lczYvZWxlbWVudC5qc1wiPmVsZW1lbnQuanM8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgPHA+XG4gICAgICAgIE5vdGUgdGhhdCB0aGUgY29uc3RydWN0b3IgZGVmaW5lcyBhIDxJbmxpbmVDb2RlPmRvbUVsZW1lbnQ8L0lubGluZUNvZGU+IHByb3BlcnR5IHdoaWNoIGlzIGEgcmVmZXJlbmNlIHRvIHRoZSB1bmRlcmx5aW5nIERPTSBlbGVtZW50LlxuICAgICAgICBOb3RlIGFsc28gdGhhdCB0aGVyZSBpcyBubyA8SW5saW5lQ29kZT5nZXRET01FbGVtZW50KCk8L0lubGluZUNvZGU+IG1ldGhvZCB0byBleHBvc2UgdGhpcyBwcm9wZXJ0eS5cbiAgICAgICAgVGhpcyBpcyBxdWl0ZSBpbnRlbnRpb25hbC5cbiAgICAgICAgR2VuZXJhbGx5IGF0IGEgaGlnaGVyIGxldmVsIHlvdSBzaG91bGQgbmV2ZXIgbmVlZCBhIHJlZmVyZW5jZSB0byBhbiBlbGVtZW50J3MgdW5kZXJseWluZyBET00gZWxlbWVudC5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBUaGlzIGlzIGltcG9ydGFudDogPGVtPndpdGggRWFzeVVJIHRoZXJlIGlzIG5vIG1vZGVsPC9lbT4uXG4gICAgICAgIFlvdSBtYW5pcHVsYXRlIHRoZSB2aWV3LCBuYW1lbHkgdGhlIERPTSwgZGlyZWN0bHksIGFsYmVpdCB2aWEgdGhpcyB0aGluIGxheWVyIG9mIGFic3RyYWN0aW9uLlxuICAgICAgICBTbyB0aGUgPElubGluZUNvZGU+RWxlbWVudDwvSW5saW5lQ29kZT4gY2xhc3MgaGFzIG1ldGhvZHMgdG8gYXBwZW5kIGVsZW1lbnRzIHRvIG90aGVycywgc2V0IGF0dHJpYnV0ZXMgYW5kIGNsYXNzZXMsIHJlZ2lzdGVyIGV2ZW50IGhhbmRsZXJzIGFuZCBzbyBvbi5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBGb3IgdGhvc2UgY29taW5nIGZyb20gYSBSZWFjdCBvciBzaW1pbGFyIGJhY2tncm91bmQgdGhpcyBtYXkgdGFrZSBzb21lIGdldHRpbmcgdXNlZCB0by5cbiAgICAgICAgUmVhY3QgYWRoZXJlcyBxdWl0ZSBjbG9zZWx5IHRvIHRoZSBNVkMgcGFyYWRpZ20uXG4gICAgICAgIE1hbmlwdWxhdGUgdGhlIG1vZGVsLCB0aGV5IHNheSwgYW5kIHRoZSB2aWV3IHdpbGwgbWFnaWNhbGx5IHRha2UgY2FyZSBvZiBpdHNlbGYuXG4gICAgICAgIFdpdGggRWFzeVVJIG9uIHRoZSBvdGhlciBoYW5kIHRoZXJlIGlzIG5vIG1hZ2ljLlxuICAgICAgICBUaGVyZSBpcyBzdGlsbCBhbiBhYnN0cmFjdGlvbiBidXQgaXQgaXMgY2xlYW5lciwgbW9yZSBob25lc3QgcGVyaGFwcy5cbiAgICAgIDwvcD5cbiAgICA8L3NlY3Rpb24+XG5cbiAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVGhlRWxlbWVudENsYXNzO1xuIl19