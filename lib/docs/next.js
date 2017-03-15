'use strict';

require('../easyui-jsx');

var Next = function Next(properties) {
  var href = properties.href,
      childElements = properties.childElements;


  return React.createElement(
    'span',
    { className: 'next' },
    React.createElement(
      'a',
      { href: href },
      'Next: ',
      childElements
    )
  );
};

module.exports = Next;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kb2NzL25leHQuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsIk5leHQiLCJwcm9wZXJ0aWVzIiwiaHJlZiIsImNoaWxkRWxlbWVudHMiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQUEsUUFBUSxlQUFSOztBQUVBLElBQU1DLE9BQU8sU0FBUEEsSUFBTyxDQUFDQyxVQUFELEVBQWdCO0FBQUEsTUFDcEJDLElBRG9CLEdBQ0dELFVBREgsQ0FDcEJDLElBRG9CO0FBQUEsTUFDZEMsYUFEYyxHQUNHRixVQURILENBQ2RFLGFBRGM7OztBQUczQixTQUVFO0FBQUE7QUFBQSxNQUFNLFdBQVUsTUFBaEI7QUFDRTtBQUFBO0FBQUEsUUFBRyxNQUFNRCxJQUFUO0FBQUE7QUFBc0JDO0FBQXRCO0FBREYsR0FGRjtBQU9ELENBVkQ7O0FBWUFDLE9BQU9DLE9BQVAsR0FBaUJMLElBQWpCIiwiZmlsZSI6Im5leHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnJlcXVpcmUoJy4uL2Vhc3l1aS1qc3gnKTtcblxuY29uc3QgTmV4dCA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IHtocmVmLCBjaGlsZEVsZW1lbnRzfSA9IHByb3BlcnRpZXM7XG4gIFxuICByZXR1cm4gKFxuXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwibmV4dFwiPlxuICAgICAgPGEgaHJlZj17aHJlZn0+TmV4dDoge2NoaWxkRWxlbWVudHN9PC9hPlxuICAgIDwvc3Bhbj5cbiAgICAgIFxuICApOyAgXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5leHQ7XG4iXX0=