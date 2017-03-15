'use strict';

require('../easyui-jsx');

const GettingStarted = () => {
  return (

    <section>
      <nav>
        <span className="next">
          <a href="#functionalElements">Next: Functional elements</a>
        </span>
        <span className="previous">
          <a href="#jsxIsGreat">Previous: JSX is great</a>
        </span>
        <span className="contents">
          <a href="#contents">Contents</a>
        </span>
      </nav>
      <h2>Appending to the DOM</h2>
      <code className="block">{`require('easyui-jsx');

const easyui = require('easyui'),
      { Div } = easyui;

const rootDivDOMElement =
        document.getElementbyId('root'),
      rootDivElement =
        Div.fromDOMElement(rootDivDOMElement);

rootDivElement.append(

  <div className="example">
    An easy example.
  </div>

);`}</code>
      <p>
EasyUI elements created using JSX need to be put in the DOM somehow.
The example here is equivalent to the use of the <code className="inline">ReactDOM.render(...)</code> method in React or Reaction.
You at least need to do this once, but only once.
      </p>
      <p>
If you are not happy using <code className="inline">body</code> DOM element, then create an element that references a root <code className="inline">div</code> element, say, either
by passing the requisite CSS selector to the <code className="inline">Div</code> class constructor, or, if you have the DOM element to hand, by using the
static <code className="inline">fromHTML()</code> factory method of the <code className="inline">Div</code> class, as in the example here.
      </p>
      <p>
All the examples here append to the <code className="inline">body</code> DOM element but in practice it is entirely up to you.
      </p>
    </section>
      
  );  
};

module.exports = GettingStarted;
