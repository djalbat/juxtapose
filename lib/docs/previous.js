'use strict';

require('../easyui-jsx');

var Previous = function Previous(properties) {
  var href = properties.href,
      childElements = properties.childElements;


  return React.createElement(
    'span',
    { className: 'previous' },
    React.createElement(
      'a',
      { href: href },
      'Previous: ',
      childElements
    )
  );
};

module.exports = Previous;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kb2NzL3ByZXZpb3VzLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJQcmV2aW91cyIsInByb3BlcnRpZXMiLCJocmVmIiwiY2hpbGRFbGVtZW50cyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBQSxRQUFRLGVBQVI7O0FBRUEsSUFBTUMsV0FBVyxTQUFYQSxRQUFXLENBQUNDLFVBQUQsRUFBZ0I7QUFBQSxNQUN4QkMsSUFEd0IsR0FDREQsVUFEQyxDQUN4QkMsSUFEd0I7QUFBQSxNQUNsQkMsYUFEa0IsR0FDREYsVUFEQyxDQUNsQkUsYUFEa0I7OztBQUcvQixTQUVFO0FBQUE7QUFBQSxNQUFNLFdBQVUsVUFBaEI7QUFDRTtBQUFBO0FBQUEsUUFBRyxNQUFNRCxJQUFUO0FBQUE7QUFBMEJDO0FBQTFCO0FBREYsR0FGRjtBQU9ELENBVkQ7O0FBWUFDLE9BQU9DLE9BQVAsR0FBaUJMLFFBQWpCIiwiZmlsZSI6InByZXZpb3VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCcuLi9lYXN5dWktanN4Jyk7XG5cbmNvbnN0IFByZXZpb3VzID0gKHByb3BlcnRpZXMpID0+IHtcbiAgY29uc3Qge2hyZWYsIGNoaWxkRWxlbWVudHN9ID0gcHJvcGVydGllcztcbiAgXG4gIHJldHVybiAoXG5cbiAgICA8c3BhbiBjbGFzc05hbWU9XCJwcmV2aW91c1wiPlxuICAgICAgPGEgaHJlZj17aHJlZn0+UHJldmlvdXM6IHtjaGlsZEVsZW1lbnRzfTwvYT5cbiAgICA8L3NwYW4+XG4gICAgICBcbiAgKTsgIFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcmV2aW91cztcbiJdfQ==