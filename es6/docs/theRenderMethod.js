'use strict';

require('../easyui-jsx');

const TheRenderMethod = () => {
  return (

    <section>
      <nav>
        <span className="next">
          <a href="#extendingAnEasyUIClass">Next: Extending an EasyUI class</a>
        </span>
        <span className="previous">
          <a href="#easyUIElements">Previous: EasyUI elements</a>
        </span>
        <span className="contents">
          <a href="#contents">Contents</a>
        </span>
      </nav>
      <h2>The <code className="inline">render()</code> method</h2>
      <code className="block">{`require('easyui-jsx');

const easyui = require('easyui'),
      { Body } = easyui;

class Example {
  constructor(properties) {
    this.properties = properties;
  }

  click(message) {
    alert(message)
  }

  render() {
    const { message } = this.properties;

    return (

      <button onClick={() => {

                        this.click(message);

                      }}
      >
        Click me...
      </button>

    );
  }
}

const body = new Body(),
      example =

        <Example message="Clicked!">
        Click me...
        </Example>

      ;

body.append(example);`}</code>
      <p>
        This is the most straightforward way to create your own elements, and is more or less akin to the use of the <code className="inline">render()</code> method in React and Reaction.
      </p>
      <p>
        The pattern consists of a class with a <code className="inline">render()</code> method and an optional constructor to assign its <code className="inline">properties</code> argument to the instance.
        The instance methods are then available from within the <code className="inline">render()</code> method by way of the <code className="inline">this</code> keyword.
      </p>
      <p>
        It is important to realise that what is returned will <em>not</em> be an instance of the class just defined.
        It will be an instance of whatever class is referenced by the JSX that is returned by the <code className="inline">render()</code> method, or an instance of the <code className="inline">Element</code> class if the tag name is lower case.
        The utility of this pattern only lies in the fact that it allows JSX to be encapsulated together with some additional functionality that can be easily referenced.
      </p>
    </section>
      
  );  
};

module.exports = TheRenderMethod;
