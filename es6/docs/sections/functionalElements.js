'use strict';

require('../../easyui-jsx');

const Next = require('../next'),
      Previous = require('../previous'),
      Contents = require('../contents'),
      BlockCode = require('../blockCode'),
      InlineCode = require('../inlineCode');

const FunctionalElements = () => {
  return (

    <section>
      <nav>
        <Next href="#easyUIElements">EasyUI elements</Next>
        <Previous href="#appendingElementsToTheDOM">Appending elements to the DOM</Previous>
        <Contents />
      </nav>
      <h2>Functional elements</h2>
      <BlockCode>{`require('easyui-jsx');

const easyui = require('easyui'),
      { Body } = easyui;

const Div = (properties) => {
  const { className } = properties,
        { childElements } = properties;

  return (

    <div className={className}>
    {childElements}
    </div>

  );
};

const body = new Body();

body.append(

  <Div className="example">
  An easy example.
  </Div>

);`}</BlockCode>
      <p>
        JSX can be returned from functions.
        These functions are passed the attributes of the JSX that references them as a <InlineCode>properties</InlineCode> argument.
        The <InlineCode>childElements</InlineCode> property of that argument gives access to child elements.
      </p>
      <p>
        In EasyUI-JSX parlance, in relation to React or Reaction:
      </p>
      <ul>
        <li>
          <InlineCode>props</InlineCode> becomes <InlineCode>properties</InlineCode>
        </li>
        <li>
          <InlineCode>children</InlineCode> becomes <InlineCode>childElements</InlineCode>
        </li>
      </ul>
    </section>
      
  );  
};

module.exports = FunctionalElements;
