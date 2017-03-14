'use strict';

require('../../index.js'); /// easyui-jsx

const GettingStarted = () => {
  return (

    <section>
      <h2>Getting started</h2>
      <code className="block">{`require('easyui-jsx');

const easyui = require('easyui'),
      { Body } = easyui;

const body = new Body();

body.append(

  <div className="example">
    An easy example.
  </div>

);`}</code>
      <p>
        It is not always easy to know where to start and there are no instructions here for getting the example on the right working.
        However, there are instructions in the readme file in the root of the EasyUI-JSX repository on <a href="https://github.com/djalbat/EasyUI-JSX">GitHub</a>.
        Good luck!
      </p>
      <p>
        There is one point that needs making at this stage:
      </p>
      <ol>
        <li>
EasyUI elements created using JSX need to be put in the DOM somehow.
        </li>
      </ol>
      <p>
The example on the right is equivalent to the use of the <code className="inline">ReactDOM.render(...)</code> method in React or Reaction.
        You at least need to do this kind of thing once, in order to get started so to speak.
      </p>
      <nav>
        <span className="floatRight">
          <a href="#functionalElements">Next: Functional elements</a>
        </span>
        <span className="floatLeft">
          <a href="#jsxIsGreat">Previous: JSX is great</a>
        </span>
      </nav>
    </section>
      
  );  
};

module.exports = GettingStarted;
