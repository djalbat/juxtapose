'use strict';

require('../../easyui-jsx');

const Next = require('../next'),
      Previous = require('../previous'),
      Contents = require('../contents'),
      BlockCode = require('../blockCode'),
      InlineCode = require('../inlineCode');
  
const AppendingElementsToTheDOM = () => {
  return (

    <section>
      <nav>
        <Next href="#functionalElements">Functional elements</Next>
        <Previous href="#jsxIsGreat">JSX is great</Previous>
        <Contents />
      </nav>
      <h2>Appending elements to the DOM</h2>
      <BlockCode>{`require('easyui-jsx');

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

);`}</BlockCode>
      <p>
EasyUI elements created using JSX need to be put in the DOM somehow.
The example here is equivalent to the use of the <InlineCode>ReactDOM.render(...)</InlineCode> method in React or Reaction.
You at least need to do this once, but only once.
      </p>
      <p>
If you are not happy using <InlineCode>body</InlineCode> DOM element, then create an element that references a root <InlineCode>div</InlineCode> element, say, either
by passing the requisite CSS selector to the <InlineCode>Div</InlineCode> class constructor, or, if you have the DOM element to hand, by using the
static <InlineCode>fromHTML()</InlineCode> factory method of the <InlineCode>Div</InlineCode> class, as in the example here.
      </p>
      <p>
All the examples here append to the <InlineCode>body</InlineCode> DOM element but in practice it is entirely up to you.
      </p>
    </section>
      
  );  
};

module.exports = AppendingElementsToTheDOM;
