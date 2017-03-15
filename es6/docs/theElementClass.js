'use strict';

require('../easyui-jsx');

const TheElementClass = () => {
  return (

    <section>
      <nav>
        <span className="previous">
          <a href="#aGoodExampleThisDocumentation">Previous: A good example, this documentation</a>
        </span>
        <span className="contents">
          <a href="#contents">Contents</a>
        </span>
      </nav>
      <h2>The <code className="inline">Element</code> class</h2>
      <p>
        EasyUI does not enshrine the concept of a component, unlike React and Reaction.
        Instead there are only elements.
        An element is meant to be seen as somewhat virtual, abstracting away from a real, underlying DOM element.
      </p>
      <p>
        As mentioned previously, all elements are instances of the <code className="inline">Element</code> class, or a class that extends it.
        This class has evolved over a fair amount of time and has been written with considerable care.
        The source is here:
      </p>
      <ul>
        <li>
          <a href="https://github.com/djalbat/EasyUI/blob/master/es6/element.js">element.js</a>
        </li>
      </ul>
      <p>
        Note that the constructor defines a <code className="inline">domElement</code> property which is a reference to the underlying DOM element.
        Note also that there is no <code className="inline">getDOMElement()</code> method to expose this property.
        This is quite intentional.
        Generally at a higher level you should never need a reference to an element's underlying DOM element.
      </p>
      <p>
        This is important: <em>with EasyUI there is no model</em>.
        You manipulate the view, namely the DOM, directly, albeit via this thin layer of abstraction.
        So the <code className="inline">Element</code> class has methods to append elements to others, set attributes and classes, register event handlers and so on.
      </p>
      <p>
        For those coming from a React or similar background this may take some getting used to.
        React adheres quite closely to the MVC paradigm.
        Manipulate the model, they say, and the view will somehow magically stay in line.
        With EasyUI on the other hand there is no hidden magic.
        There is still an abstraction but it is cleaner, more honest perhaps.
      </p>
    </section>

  );
};

module.exports = TheElementClass;
