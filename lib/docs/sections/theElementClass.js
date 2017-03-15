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
      ' class, or a class that extends it. This class has evolved over a fair amount of time and has been written with considerable care. The source is here:'
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
      'For those coming from a React or similar background this may take some getting used to. React adheres quite closely to the MVC paradigm. Manipulate the model, they say, and the view will somehow magically stay in line. With EasyUI on the other hand there is no hidden magic. There is still an abstraction but it is cleaner, more honest perhaps.'
    )
  );
};

module.exports = TheElementClass;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9kb2NzL3NlY3Rpb25zL3RoZUVsZW1lbnRDbGFzcy5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiTmV4dCIsIlByZXZpb3VzIiwiQ29udGVudHMiLCJJbmxpbmVDb2RlIiwiVGhlRWxlbWVudENsYXNzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUFBLFFBQVEsa0JBQVI7O0FBRUEsSUFBTUMsT0FBT0QsUUFBUSxTQUFSLENBQWI7QUFBQSxJQUNNRSxXQUFXRixRQUFRLGFBQVIsQ0FEakI7QUFBQSxJQUVNRyxXQUFXSCxRQUFRLGFBQVIsQ0FGakI7QUFBQSxJQUdNSSxhQUFhSixRQUFRLGVBQVIsQ0FIbkI7O0FBS0EsSUFBTUssa0JBQWtCLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCLFNBRUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQyxZQUFEO0FBQUEsVUFBTSxNQUFLLGNBQVg7QUFBQTtBQUFBLE9BREY7QUFFRTtBQUFDLGdCQUFEO0FBQUEsVUFBVSxNQUFLLGdDQUFmO0FBQUE7QUFBQSxPQUZGO0FBR0UsMEJBQUMsUUFBRDtBQUhGLEtBREY7QUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFRO0FBQUMsa0JBQUQ7QUFBQTtBQUFBO0FBQUEsT0FBUjtBQUFBO0FBQUEsS0FORjtBQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FQRjtBQVlFO0FBQUE7QUFBQTtBQUFBO0FBQzZEO0FBQUMsa0JBQUQ7QUFBQTtBQUFBO0FBQUEsT0FEN0Q7QUFBQTtBQUFBLEtBWkY7QUFpQkU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyw4REFBUjtBQUFBO0FBQUE7QUFERjtBQURGLEtBakJGO0FBc0JFO0FBQUE7QUFBQTtBQUFBO0FBQ3NDO0FBQUMsa0JBQUQ7QUFBQTtBQUFBO0FBQUEsT0FEdEM7QUFBQTtBQUU2QjtBQUFDLGtCQUFEO0FBQUE7QUFBQTtBQUFBLE9BRjdCO0FBQUE7QUFBQSxLQXRCRjtBQTRCRTtBQUFBO0FBQUE7QUFBQTtBQUNxQjtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRHJCO0FBQUE7QUFHUztBQUFDLGtCQUFEO0FBQUE7QUFBQTtBQUFBLE9BSFQ7QUFBQTtBQUFBLEtBNUJGO0FBaUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFqQ0YsR0FGRjtBQTZDRCxDQTlDRDs7QUFnREFDLE9BQU9DLE9BQVAsR0FBaUJGLGVBQWpCIiwiZmlsZSI6InRoZUVsZW1lbnRDbGFzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxucmVxdWlyZSgnLi4vLi4vZWFzeXVpLWpzeCcpO1xuXG5jb25zdCBOZXh0ID0gcmVxdWlyZSgnLi4vbmV4dCcpLFxuICAgICAgUHJldmlvdXMgPSByZXF1aXJlKCcuLi9wcmV2aW91cycpLFxuICAgICAgQ29udGVudHMgPSByZXF1aXJlKCcuLi9jb250ZW50cycpLFxuICAgICAgSW5saW5lQ29kZSA9IHJlcXVpcmUoJy4uL2lubGluZUNvZGUnKTtcblxuY29uc3QgVGhlRWxlbWVudENsYXNzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuXG4gICAgPHNlY3Rpb24+XG4gICAgICA8bmF2PlxuICAgICAgICA8TmV4dCBocmVmPVwiI2FTaW1wbGVGb3JtXCI+QSBzaW1wbGUgZm9ybTwvTmV4dD5cbiAgICAgICAgPFByZXZpb3VzIGhyZWY9XCIjdGhlRXhhbXBsZU9mVGhpc0RvY3VtZW50YXRpb25cIj5UaGUgZXhhbXBsZSBvZiB0aGlzIGRvY3VtZW50YXRpb248L1ByZXZpb3VzPlxuICAgICAgICA8Q29udGVudHMgLz5cbiAgICAgIDwvbmF2PlxuICAgICAgPGgyPlRoZSA8SW5saW5lQ29kZT5FbGVtZW50PC9JbmxpbmVDb2RlPiBjbGFzczwvaDI+XG4gICAgICA8cD5cbiAgICAgICAgRWFzeVVJIGRvZXMgbm90IGVuc2hyaW5lIHRoZSBjb25jZXB0IG9mIGEgY29tcG9uZW50LCB1bmxpa2UgUmVhY3QgYW5kIFJlYWN0aW9uLlxuICAgICAgICBJbnN0ZWFkIHRoZXJlIGFyZSBvbmx5IGVsZW1lbnRzLlxuICAgICAgICBBbiBlbGVtZW50IGlzIG1lYW50IHRvIGJlIHNlZW4gYXMgc29tZXdoYXQgdmlydHVhbCwgYWJzdHJhY3RpbmcgYXdheSBmcm9tIGEgcmVhbCwgdW5kZXJseWluZyBET00gZWxlbWVudC5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBBcyBtZW50aW9uZWQgcHJldmlvdXNseSwgYWxsIGVsZW1lbnRzIGFyZSBpbnN0YW5jZXMgb2YgdGhlIDxJbmxpbmVDb2RlPkVsZW1lbnQ8L0lubGluZUNvZGU+IGNsYXNzLCBvciBhIGNsYXNzIHRoYXQgZXh0ZW5kcyBpdC5cbiAgICAgICAgVGhpcyBjbGFzcyBoYXMgZXZvbHZlZCBvdmVyIGEgZmFpciBhbW91bnQgb2YgdGltZSBhbmQgaGFzIGJlZW4gd3JpdHRlbiB3aXRoIGNvbnNpZGVyYWJsZSBjYXJlLlxuICAgICAgICBUaGUgc291cmNlIGlzIGhlcmU6XG4gICAgICA8L3A+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2RqYWxiYXQvRWFzeVVJL2Jsb2IvbWFzdGVyL2VzNi9lbGVtZW50LmpzXCI+ZWxlbWVudC5qczwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgICA8cD5cbiAgICAgICAgTm90ZSB0aGF0IHRoZSBjb25zdHJ1Y3RvciBkZWZpbmVzIGEgPElubGluZUNvZGU+ZG9tRWxlbWVudDwvSW5saW5lQ29kZT4gcHJvcGVydHkgd2hpY2ggaXMgYSByZWZlcmVuY2UgdG8gdGhlIHVuZGVybHlpbmcgRE9NIGVsZW1lbnQuXG4gICAgICAgIE5vdGUgYWxzbyB0aGF0IHRoZXJlIGlzIG5vIDxJbmxpbmVDb2RlPmdldERPTUVsZW1lbnQoKTwvSW5saW5lQ29kZT4gbWV0aG9kIHRvIGV4cG9zZSB0aGlzIHByb3BlcnR5LlxuICAgICAgICBUaGlzIGlzIHF1aXRlIGludGVudGlvbmFsLlxuICAgICAgICBHZW5lcmFsbHkgYXQgYSBoaWdoZXIgbGV2ZWwgeW91IHNob3VsZCBuZXZlciBuZWVkIGEgcmVmZXJlbmNlIHRvIGFuIGVsZW1lbnQncyB1bmRlcmx5aW5nIERPTSBlbGVtZW50LlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIFRoaXMgaXMgaW1wb3J0YW50OiA8ZW0+d2l0aCBFYXN5VUkgdGhlcmUgaXMgbm8gbW9kZWw8L2VtPi5cbiAgICAgICAgWW91IG1hbmlwdWxhdGUgdGhlIHZpZXcsIG5hbWVseSB0aGUgRE9NLCBkaXJlY3RseSwgYWxiZWl0IHZpYSB0aGlzIHRoaW4gbGF5ZXIgb2YgYWJzdHJhY3Rpb24uXG4gICAgICAgIFNvIHRoZSA8SW5saW5lQ29kZT5FbGVtZW50PC9JbmxpbmVDb2RlPiBjbGFzcyBoYXMgbWV0aG9kcyB0byBhcHBlbmQgZWxlbWVudHMgdG8gb3RoZXJzLCBzZXQgYXR0cmlidXRlcyBhbmQgY2xhc3NlcywgcmVnaXN0ZXIgZXZlbnQgaGFuZGxlcnMgYW5kIHNvIG9uLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIEZvciB0aG9zZSBjb21pbmcgZnJvbSBhIFJlYWN0IG9yIHNpbWlsYXIgYmFja2dyb3VuZCB0aGlzIG1heSB0YWtlIHNvbWUgZ2V0dGluZyB1c2VkIHRvLlxuICAgICAgICBSZWFjdCBhZGhlcmVzIHF1aXRlIGNsb3NlbHkgdG8gdGhlIE1WQyBwYXJhZGlnbS5cbiAgICAgICAgTWFuaXB1bGF0ZSB0aGUgbW9kZWwsIHRoZXkgc2F5LCBhbmQgdGhlIHZpZXcgd2lsbCBzb21laG93IG1hZ2ljYWxseSBzdGF5IGluIGxpbmUuXG4gICAgICAgIFdpdGggRWFzeVVJIG9uIHRoZSBvdGhlciBoYW5kIHRoZXJlIGlzIG5vIGhpZGRlbiBtYWdpYy5cbiAgICAgICAgVGhlcmUgaXMgc3RpbGwgYW4gYWJzdHJhY3Rpb24gYnV0IGl0IGlzIGNsZWFuZXIsIG1vcmUgaG9uZXN0IHBlcmhhcHMuXG4gICAgICA8L3A+XG4gICAgPC9zZWN0aW9uPlxuXG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRoZUVsZW1lbnRDbGFzcztcbiJdfQ==