'use strict';

require('../../easyui-jsx');

const InlineCode = require('../inlineCode');

const Introduction = () => {
  return (

    <section>
      <nav>
        <span className="contents">Contents</span>
      </nav>
      <ul>
        <li>
          <a href="#introduction">Introduction</a>
        </li>
        <li>
          <a href="#jsxIsGreat">JSX is great</a>
        </li>
        <li>
          <a href="#gettingStarted">Getting started</a>
        </li>
        <li>
          <a href="#appendingElementsToTheDOM">Appending elements to the DOM</a>
        </li>
        <li>
          <a href="#functionalElements">Functional elements</a>
        </li>
        <li>
          <a href="#easyUIElements">EasyUI elements</a>
        </li>
        <li>
          <a href="#theRenderMethod">The <InlineCode>render()</InlineCode> method</a>
        </li>
        <li>
          <a href="#extendingAnEasyUIClass">Extending an EasyUI class</a>
        </li>
        <li>
          <a href="#theExampleOfThisDocumentation">The example of this documentation</a>
        </li>
        <li>
          <a href="#theElementClass">The <InlineCode>Element</InlineCode> class</a>
        </li>
        <li>
          <a href="#aSimpleForm">A simple form</a>
        </li>
      </ul>
    </section>
      
  );  
};

module.exports = Introduction;
