'use strict';

require('../juxtapose');

var easy = require('easy');

var Body = easy.Body;


var simpleApp = function simpleApp() {
  var body = new Body();

  body.prepend(React.createElement(
    'div',
    null,
    React.createElement(
      'p',
      null,
      'A simple application.'
    )
  ));
};

module.exports = simpleApp;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlcy9zaW1wbGVBcHAuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsImVhc3kiLCJCb2R5Iiwic2ltcGxlQXBwIiwiYm9keSIsInByZXBlbmQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQUEsUUFBUSxjQUFSOztBQUVBLElBQU1DLE9BQU9ELFFBQVEsTUFBUixDQUFiOztJQUVRRSxJLEdBQVNELEksQ0FBVEMsSTs7O0FBRVIsSUFBTUMsWUFBWSxTQUFaQSxTQUFZLEdBQU07QUFDdEIsTUFBTUMsT0FBTyxJQUFJRixJQUFKLEVBQWI7O0FBRUFFLE9BQUtDLE9BQUwsQ0FFRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsR0FGRjtBQVNELENBWkQ7O0FBY0FDLE9BQU9DLE9BQVAsR0FBaUJKLFNBQWpCIiwiZmlsZSI6InNpbXBsZUFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxucmVxdWlyZSgnLi4vanV4dGFwb3NlJyk7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5Jyk7XG5cbmNvbnN0IHsgQm9keSB9ID0gZWFzeTtcblxuY29uc3Qgc2ltcGxlQXBwID0gKCkgPT4ge1xuICBjb25zdCBib2R5ID0gbmV3IEJvZHkoKTtcblxuICBib2R5LnByZXBlbmQoXG5cbiAgICA8ZGl2PlxuICAgICAgPHA+XG4gICAgICAgIEEgc2ltcGxlIGFwcGxpY2F0aW9uLlxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuXG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNpbXBsZUFwcDtcbiJdfQ==