'use strict';

require('../../easyui-jsx');

var Next = require('../next'),
    Previous = require('../previous'),
    Contents = require('../contents');

var EasyUILayout = function EasyUILayout() {
  return React.createElement(
    'section',
    null,
    React.createElement(
      'nav',
      null,
      React.createElement(
        Next,
        { href: '#easyUIDragAndDrop' },
        'EasyUI DragAndDrop'
      ),
      React.createElement(
        Previous,
        { href: '#moreEasyUIElements' },
        'More EasyUI elements'
      ),
      React.createElement(Contents, null)
    ),
    React.createElement(
      'h2',
      null,
      'EasyUI Layout'
    ),
    React.createElement(
      'p',
      null,
      'Layout elements that work with CSS flexbox.'
    )
  );
};

module.exports = EasyUILayout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9kb2NzL3NlY3Rpb25zL2Vhc3lVSUxheW91dC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiTmV4dCIsIlByZXZpb3VzIiwiQ29udGVudHMiLCJFYXN5VUlMYXlvdXQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQUEsUUFBUSxrQkFBUjs7QUFFQSxJQUFNQyxPQUFPRCxRQUFRLFNBQVIsQ0FBYjtBQUFBLElBQ01FLFdBQVdGLFFBQVEsYUFBUixDQURqQjtBQUFBLElBRU1HLFdBQVdILFFBQVEsYUFBUixDQUZqQjs7QUFJQSxJQUFNSSxlQUFlLFNBQWZBLFlBQWUsR0FBTTtBQUN6QixTQUVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUMsWUFBRDtBQUFBLFVBQU0sTUFBSyxvQkFBWDtBQUFBO0FBQUEsT0FERjtBQUVFO0FBQUMsZ0JBQUQ7QUFBQSxVQUFVLE1BQUsscUJBQWY7QUFBQTtBQUFBLE9BRkY7QUFHRSwwQkFBQyxRQUFEO0FBSEYsS0FERjtBQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FORjtBQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRixHQUZGO0FBZUQsQ0FoQkQ7O0FBa0JBQyxPQUFPQyxPQUFQLEdBQWlCRixZQUFqQiIsImZpbGUiOiJlYXN5VUlMYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnJlcXVpcmUoJy4uLy4uL2Vhc3l1aS1qc3gnKTtcblxuY29uc3QgTmV4dCA9IHJlcXVpcmUoJy4uL25leHQnKSxcbiAgICAgIFByZXZpb3VzID0gcmVxdWlyZSgnLi4vcHJldmlvdXMnKSxcbiAgICAgIENvbnRlbnRzID0gcmVxdWlyZSgnLi4vY29udGVudHMnKTtcblxuY29uc3QgRWFzeVVJTGF5b3V0ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuXG4gICAgPHNlY3Rpb24+XG4gICAgICA8bmF2PlxuICAgICAgICA8TmV4dCBocmVmPVwiI2Vhc3lVSURyYWdBbmREcm9wXCI+RWFzeVVJIERyYWdBbmREcm9wPC9OZXh0PlxuICAgICAgICA8UHJldmlvdXMgaHJlZj1cIiNtb3JlRWFzeVVJRWxlbWVudHNcIj5Nb3JlIEVhc3lVSSBlbGVtZW50czwvUHJldmlvdXM+XG4gICAgICAgIDxDb250ZW50cyAvPlxuICAgICAgPC9uYXY+XG4gICAgICA8aDI+RWFzeVVJIExheW91dDwvaDI+XG4gICAgICA8cD5cbiAgICAgICAgTGF5b3V0IGVsZW1lbnRzIHRoYXQgd29yayB3aXRoIENTUyBmbGV4Ym94LlxuICAgICAgPC9wPlxuICAgIDwvc2VjdGlvbj5cbiAgICAgIFxuICApOyAgXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVhc3lVSUxheW91dDtcbiJdfQ==