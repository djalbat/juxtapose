'use strict';

require('../../index.js'); /// easyui-jsx

const Introduction = () => {
  return (

    <section>
      <code className="floatRight">{`require('easyui-jsx');

const easyui = require('easyui'),
      { Body } = easyui;

const body = new Body();

body.append(

  <div className="example">
    An easy example.
  </div>

);`}</code>
      <p>
        These pages showcase the use of <a href="https://facebook.github.io/react/docs/jsx-in-depth.html">JSX</a> with <a href="https://github.com/djalbat/EasyUI">EasyUI</a>.
        It is easy to combine these two technologies in practice, as the example shows.
      </p>
      <p>
        It also turned out not to be very difficult to implement this combination. JSX transpiles into a call to <code className="inline">React.createClass(...)</code> and
        so all that needed to be done was to <a href="https://github.com/djalbat/EasyUI-JSX/blob/master/es6/react.js">implement that</a>,
        and then to <a href="https://github.com/djalbat/EasyUI/blob/master/es6/mixin/jsx.js">augment</a> EasyUI's base <code className="inline">Element</code> class in order to enable elements to apply the properties they were passed.
      </p>
      <p className="clearBoth">
        <a href="#jsxIsGreat" className="floatRight">Next: JSX is great</a>
      </p>
    </section>
      
  );  
};

module.exports = Introduction;
