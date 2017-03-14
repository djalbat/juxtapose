'use strict';

require('../../index.js'); /// easyui-jsx

const FunctionalElements = () => {
  return (

    <section>
      <h2>Functional elements</h2>
      <code className="block">{`require('easyui-jsx');

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

);`}</code>
      <p>
        JSX can be returned from functions.
        These functions are passed the attributes of the JSX that references them as a <code className="inline">properties</code> argument.
        The <code className="inline">childElements</code> property of that argument gives access to child elements.
      </p>
      <p>
        In EasyUI-JSX parlance:
      </p>
      <ul>
        <li>
          <code className="inline">props</code> becomes <code className="inline">properties</code>
        </li>
        <li>
          <code className="inline">children</code> becomes <code className="inline">childElements</code>
        </li>
      </ul>
      <nav>
        <span className="next">
          <a href="#easyUIElements">Next: EasyUI elements</a>
        </span>
        <span className="previous">
          <a href="#gettingStarted">Previous: Getting started</a>
        </span>
        <span>
          <a href="#contents">Contents</a>
        </span>
      </nav>
    </section>
      
  );  
};

module.exports = FunctionalElements;
