'use strict';

require('../../easyui-jsx');

const Next = require('../next'),
      Previous = require('../previous'),
      Contents = require('../contents'),
      InlineCode = require('../inlineCode');

const TheElementClass = () => {
  return (

    <section>
      <nav>
        <Next href="#aSimpleForm">A simple form</Next>
        <Previous href="#theExampleOfThisDocumentation">The example of this documentation</Previous>
        <Contents />
      </nav>
      <h2>The <InlineCode>Element</InlineCode> class</h2>
      <p>
        EasyUI does not enshrine the concept of a component, unlike React and Reaction.
        Instead there are only elements.
        An element is meant to be seen as somewhat virtual, abstracting away from a real, underlying DOM element.
      </p>
      <p>
        As mentioned previously, all elements are instances of the <InlineCode>Element</InlineCode> class, or a class that extends it.
        This class has evolved over time and has been written care.
        The source is here:
      </p>
      <ul>
        <li>
          <a href="https://github.com/djalbat/EasyUI/blob/master/es6/element.js">element.js</a>
        </li>
      </ul>
      <p>
        Note that the constructor defines a <InlineCode>domElement</InlineCode> property which is a reference to the underlying DOM element.
        Note also that there is no <InlineCode>getDOMElement()</InlineCode> method to expose this property.
        This is quite intentional.
        Generally at a higher level you should never need a reference to an element's underlying DOM element.
      </p>
      <p>
        This is important: <em>with EasyUI there is no model</em>.
        You manipulate the view, namely the DOM, directly, albeit via this thin layer of abstraction.
        So the <InlineCode>Element</InlineCode> class has methods to append elements to others, set attributes and classes, register event handlers and so on.
      </p>
      <p>
        For those coming from a React or similar background this may take some getting used to.
        React adheres quite closely to the MVC paradigm.
        Manipulate the model, they say, and the view will magically take care of itself.
        With EasyUI on the other hand there is no magic.
        There is still an abstraction but it is cleaner, more honest perhaps.
      </p>
    </section>

  );
};

module.exports = TheElementClass;
