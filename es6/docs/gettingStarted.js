'use strict';

require('../easyui-jsx');

const GettingStarted = () => {
  return (

    <section>
      <nav>
        <span className="next">
          <a href="#appendingToTheDOM">Next: Appending to the DOM</a>
        </span>
        <span className="previous">
          <a href="#jsxIsGreat">Previous: JSX is great</a>
        </span>
        <span className="contents">
          <a href="#contents">Contents</a>
        </span>
      </nav>
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
Instructions for building this example can be found in the readme file.
Once it is running, this example can be replaced with any other from this documentation.
There are two things that need bearing in mind when doing so:
      </p>
      <ol>
        <li>
The <code className="inline">'use strict'</code> directive is missing from the examples here and should be left in place.
        </li>
        <li>
The <code className="inline">require('easyui-jsx')</code> directives here require the actual npm module.
However, this is not available from within the project itself and so you must replace it with a local <code className="inline">require('./easyui-jsx')</code> directive.
        </li>
      </ol>
      <p>
You are of course free to build the examples entirely outside of this project, the instructions given here and in the readme file are just probably the quickest way to get started for neophytes.
      </p>
    </section>
      
  );  
};

module.exports = GettingStarted;
