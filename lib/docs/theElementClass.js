'use strict';

require('../easyui-jsx');

var TheElementClass = function TheElementClass() {
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
          { href: '#aSimpleForm' },
          'A simple form'
        )
      ),
      React.createElement(
        'span',
        { className: 'previous' },
        React.createElement(
          'a',
          { href: '#aGoodExampleThisDocumentation' },
          'Previous: A good example, this documentation'
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
      'The ',
      React.createElement(
        'code',
        { className: 'inline' },
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
        'code',
        { className: 'inline' },
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
        'code',
        { className: 'inline' },
        'domElement'
      ),
      ' property which is a reference to the underlying DOM element. Note also that there is no ',
      React.createElement(
        'code',
        { className: 'inline' },
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
        'code',
        { className: 'inline' },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kb2NzL3RoZUVsZW1lbnRDbGFzcy5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiVGhlRWxlbWVudENsYXNzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUFBLFFBQVEsZUFBUjs7QUFFQSxJQUFNQyxrQkFBa0IsU0FBbEJBLGVBQWtCLEdBQU07QUFDNUIsU0FFRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsVUFBTSxXQUFVLE1BQWhCO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyxjQUFSO0FBQUE7QUFBQTtBQURGLE9BREY7QUFJRTtBQUFBO0FBQUEsVUFBTSxXQUFVLFVBQWhCO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyxnQ0FBUjtBQUFBO0FBQUE7QUFERixPQUpGO0FBT0U7QUFBQTtBQUFBLFVBQU0sV0FBVSxVQUFoQjtBQUNFO0FBQUE7QUFBQSxZQUFHLE1BQUssV0FBUjtBQUFBO0FBQUE7QUFERjtBQVBGLEtBREY7QUFZRTtBQUFBO0FBQUE7QUFBQTtBQUFRO0FBQUE7QUFBQSxVQUFNLFdBQVUsUUFBaEI7QUFBQTtBQUFBLE9BQVI7QUFBQTtBQUFBLEtBWkY7QUFhRTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBYkY7QUFrQkU7QUFBQTtBQUFBO0FBQUE7QUFDNkQ7QUFBQTtBQUFBLFVBQU0sV0FBVSxRQUFoQjtBQUFBO0FBQUEsT0FEN0Q7QUFBQTtBQUFBLEtBbEJGO0FBdUJFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFHLE1BQUssOERBQVI7QUFBQTtBQUFBO0FBREY7QUFERixLQXZCRjtBQTRCRTtBQUFBO0FBQUE7QUFBQTtBQUNzQztBQUFBO0FBQUEsVUFBTSxXQUFVLFFBQWhCO0FBQUE7QUFBQSxPQUR0QztBQUFBO0FBRTZCO0FBQUE7QUFBQSxVQUFNLFdBQVUsUUFBaEI7QUFBQTtBQUFBLE9BRjdCO0FBQUE7QUFBQSxLQTVCRjtBQWtDRTtBQUFBO0FBQUE7QUFBQTtBQUNxQjtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRHJCO0FBQUE7QUFHUztBQUFBO0FBQUEsVUFBTSxXQUFVLFFBQWhCO0FBQUE7QUFBQSxPQUhUO0FBQUE7QUFBQSxLQWxDRjtBQXVDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBdkNGLEdBRkY7QUFtREQsQ0FwREQ7O0FBc0RBQyxPQUFPQyxPQUFQLEdBQWlCRixlQUFqQiIsImZpbGUiOiJ0aGVFbGVtZW50Q2xhc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnJlcXVpcmUoJy4uL2Vhc3l1aS1qc3gnKTtcblxuY29uc3QgVGhlRWxlbWVudENsYXNzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuXG4gICAgPHNlY3Rpb24+XG4gICAgICA8bmF2PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuZXh0XCI+XG4gICAgICAgICAgPGEgaHJlZj1cIiNhU2ltcGxlRm9ybVwiPkEgc2ltcGxlIGZvcm08L2E+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJldmlvdXNcIj5cbiAgICAgICAgICA8YSBocmVmPVwiI2FHb29kRXhhbXBsZVRoaXNEb2N1bWVudGF0aW9uXCI+UHJldmlvdXM6IEEgZ29vZCBleGFtcGxlLCB0aGlzIGRvY3VtZW50YXRpb248L2E+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGVudHNcIj5cbiAgICAgICAgICA8YSBocmVmPVwiI2NvbnRlbnRzXCI+Q29udGVudHM8L2E+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvbmF2PlxuICAgICAgPGgyPlRoZSA8Y29kZSBjbGFzc05hbWU9XCJpbmxpbmVcIj5FbGVtZW50PC9jb2RlPiBjbGFzczwvaDI+XG4gICAgICA8cD5cbiAgICAgICAgRWFzeVVJIGRvZXMgbm90IGVuc2hyaW5lIHRoZSBjb25jZXB0IG9mIGEgY29tcG9uZW50LCB1bmxpa2UgUmVhY3QgYW5kIFJlYWN0aW9uLlxuICAgICAgICBJbnN0ZWFkIHRoZXJlIGFyZSBvbmx5IGVsZW1lbnRzLlxuICAgICAgICBBbiBlbGVtZW50IGlzIG1lYW50IHRvIGJlIHNlZW4gYXMgc29tZXdoYXQgdmlydHVhbCwgYWJzdHJhY3RpbmcgYXdheSBmcm9tIGEgcmVhbCwgdW5kZXJseWluZyBET00gZWxlbWVudC5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBBcyBtZW50aW9uZWQgcHJldmlvdXNseSwgYWxsIGVsZW1lbnRzIGFyZSBpbnN0YW5jZXMgb2YgdGhlIDxjb2RlIGNsYXNzTmFtZT1cImlubGluZVwiPkVsZW1lbnQ8L2NvZGU+IGNsYXNzLCBvciBhIGNsYXNzIHRoYXQgZXh0ZW5kcyBpdC5cbiAgICAgICAgVGhpcyBjbGFzcyBoYXMgZXZvbHZlZCBvdmVyIGEgZmFpciBhbW91bnQgb2YgdGltZSBhbmQgaGFzIGJlZW4gd3JpdHRlbiB3aXRoIGNvbnNpZGVyYWJsZSBjYXJlLlxuICAgICAgICBUaGUgc291cmNlIGlzIGhlcmU6XG4gICAgICA8L3A+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2RqYWxiYXQvRWFzeVVJL2Jsb2IvbWFzdGVyL2VzNi9lbGVtZW50LmpzXCI+ZWxlbWVudC5qczwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgICA8cD5cbiAgICAgICAgTm90ZSB0aGF0IHRoZSBjb25zdHJ1Y3RvciBkZWZpbmVzIGEgPGNvZGUgY2xhc3NOYW1lPVwiaW5saW5lXCI+ZG9tRWxlbWVudDwvY29kZT4gcHJvcGVydHkgd2hpY2ggaXMgYSByZWZlcmVuY2UgdG8gdGhlIHVuZGVybHlpbmcgRE9NIGVsZW1lbnQuXG4gICAgICAgIE5vdGUgYWxzbyB0aGF0IHRoZXJlIGlzIG5vIDxjb2RlIGNsYXNzTmFtZT1cImlubGluZVwiPmdldERPTUVsZW1lbnQoKTwvY29kZT4gbWV0aG9kIHRvIGV4cG9zZSB0aGlzIHByb3BlcnR5LlxuICAgICAgICBUaGlzIGlzIHF1aXRlIGludGVudGlvbmFsLlxuICAgICAgICBHZW5lcmFsbHkgYXQgYSBoaWdoZXIgbGV2ZWwgeW91IHNob3VsZCBuZXZlciBuZWVkIGEgcmVmZXJlbmNlIHRvIGFuIGVsZW1lbnQncyB1bmRlcmx5aW5nIERPTSBlbGVtZW50LlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIFRoaXMgaXMgaW1wb3J0YW50OiA8ZW0+d2l0aCBFYXN5VUkgdGhlcmUgaXMgbm8gbW9kZWw8L2VtPi5cbiAgICAgICAgWW91IG1hbmlwdWxhdGUgdGhlIHZpZXcsIG5hbWVseSB0aGUgRE9NLCBkaXJlY3RseSwgYWxiZWl0IHZpYSB0aGlzIHRoaW4gbGF5ZXIgb2YgYWJzdHJhY3Rpb24uXG4gICAgICAgIFNvIHRoZSA8Y29kZSBjbGFzc05hbWU9XCJpbmxpbmVcIj5FbGVtZW50PC9jb2RlPiBjbGFzcyBoYXMgbWV0aG9kcyB0byBhcHBlbmQgZWxlbWVudHMgdG8gb3RoZXJzLCBzZXQgYXR0cmlidXRlcyBhbmQgY2xhc3NlcywgcmVnaXN0ZXIgZXZlbnQgaGFuZGxlcnMgYW5kIHNvIG9uLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIEZvciB0aG9zZSBjb21pbmcgZnJvbSBhIFJlYWN0IG9yIHNpbWlsYXIgYmFja2dyb3VuZCB0aGlzIG1heSB0YWtlIHNvbWUgZ2V0dGluZyB1c2VkIHRvLlxuICAgICAgICBSZWFjdCBhZGhlcmVzIHF1aXRlIGNsb3NlbHkgdG8gdGhlIE1WQyBwYXJhZGlnbS5cbiAgICAgICAgTWFuaXB1bGF0ZSB0aGUgbW9kZWwsIHRoZXkgc2F5LCBhbmQgdGhlIHZpZXcgd2lsbCBzb21laG93IG1hZ2ljYWxseSBzdGF5IGluIGxpbmUuXG4gICAgICAgIFdpdGggRWFzeVVJIG9uIHRoZSBvdGhlciBoYW5kIHRoZXJlIGlzIG5vIGhpZGRlbiBtYWdpYy5cbiAgICAgICAgVGhlcmUgaXMgc3RpbGwgYW4gYWJzdHJhY3Rpb24gYnV0IGl0IGlzIGNsZWFuZXIsIG1vcmUgaG9uZXN0IHBlcmhhcHMuXG4gICAgICA8L3A+XG4gICAgPC9zZWN0aW9uPlxuXG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRoZUVsZW1lbnRDbGFzcztcbiJdfQ==