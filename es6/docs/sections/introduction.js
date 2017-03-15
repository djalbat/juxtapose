'use strict';

require('../../easyui-jsx');

const Next = require('../next'),
      Contents = require('../contents'),
      BlockCode = require('../blockCode'),
      InlineCode = require('../inlineCode');

const Introduction = () => {
  return (

    <section>
      <nav>
        <Next href="#jsxIsGreat">JSX is great</Next>
        <Contents />
      </nav>
      <h2>Introduction</h2>
      <BlockCode>{`require('easyui-jsx');

const easyui = require('easyui'),
      { Body } = easyui;

const body = new Body();

body.append(

  <div className="example">
    An easy example.
  </div>

);`}</BlockCode>
      <p>
        These pages give some examples of the use of <a href="https://facebook.github.io/react/docs/jsx-in-depth.html">JSX</a> with <a href="https://github.com/djalbat/EasyUI">EasyUI</a>.
        It is easy to combine these two technologies in practice, as the first example shows.
      </p>
      <p>
        It also turned out not to be very difficult to implement this combination. JSX transpiles into a call to <InlineCode>React.createClass(...)</InlineCode>.
        So all that needed to be done was to <a href="https://github.com/djalbat/EasyUI-JSX/blob/master/es6/easyui-jsx.js">implement that</a>,
        and then to <a href="https://github.com/djalbat/EasyUI/blob/master/es6/mixin/jsx.js">augment</a> EasyUI's base <InlineCode>Element</InlineCode> class in order to enable elements to apply the properties they are passed.
      </p>
    </section>
      
  );  
};

module.exports = Introduction;
