'use strict';

require('../../easyui-jsx');

const Next = require('../next'),
      Previous = require('../previous'),
      Contents = require('../contents'),
      BlockCode = require('../blockCode'),
      InlineCode = require('../inlineCode');

const GettingStarted = () => {
  return (

    <section>
      <nav>
        <Next href="#appendingElementsToTheDOM">Appending elements to the DOM</Next>
        <Previous href="#jsxIsGreat">JSX is great</Previous>
        <Contents />
      </nav>
      <h2>Getting started</h2>
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
Instructions for building this example can be found in the readme file.
Once it is running, this example can be replaced with any other from this documentation.
There are two things that need bearing in mind when doing so:
      </p>
      <ol>
        <li>
The <InlineCode>'use strict'</InlineCode> directive is missing from the examples here and should be left in place.
        </li>
        <li>
The <InlineCode>require('easyui-jsx')</InlineCode> directives here require the actual npm module.
However, this is not available from within the project itself and so you must replace it with a local <InlineCode>require('./easyui-jsx')</InlineCode> directive.
        </li>
      </ol>
      <p>
You are of course free to build the examples entirely outside of this project, the instructions given here and in the readme file are just probably the quickest way to get started for neophytes.
      </p>
    </section>
      
  );  
};

module.exports = GettingStarted;
