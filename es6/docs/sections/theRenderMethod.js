'use strict';

require('../../easyui-jsx');

const Next = require('../next'),
      Previous = require('../previous'),
      Contents = require('../contents'),
      BlockCode = require('../blockCode'),
      InlineCode = require('../inlineCode');
  
const TheRenderMethod = () => {
  return (

    <section>
      <nav>
        <Next href="#extendingAnEasyUIClass">Extending an EasyUI class</Next>
        <Previous href="#easyUIElements">EasyUI elements</Previous>
        <Contents />
      </nav>
      <h2>The <InlineCode>render()</InlineCode> method</h2>
      <BlockCode>{`require('easyui-jsx');

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

body.append(example);`}</BlockCode>
      <p>
        This is the most straightforward way to create your own elements, and is more or less akin to the use of the <InlineCode>render()</InlineCode> method in React and Reaction.
      </p>
      <p>
        The pattern consists of a class with a <InlineCode>render()</InlineCode> method and an optional constructor to assign its <InlineCode>properties</InlineCode> argument to the instance.
        The instance methods are then available from within the <InlineCode>render()</InlineCode> method by way of the <InlineCode>this</InlineCode> keyword.
      </p>
      <p>
        It is important to realise that what is returned will <em>not</em> be an instance of the class just defined.
        It will be an instance of whatever class is referenced by the JSX that is returned by the <InlineCode>render()</InlineCode> method, or an instance of the <InlineCode>Element</InlineCode> class if the tag name is lower case.
        The utility of this pattern only lies in the fact that it allows JSX to be encapsulated together with some additional functionality that can be easily referenced.
      </p>
    </section>
      
  );  
};

module.exports = TheRenderMethod;
