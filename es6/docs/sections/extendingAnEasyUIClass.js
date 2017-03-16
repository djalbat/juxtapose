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
        <Next href="#theExampleOfThisDocumentation">The example of this documentation</Next>
        <Previous href="#theRenderMethod">The <InlineCode>render()</InlineCode> method</Previous>
        <Contents />
      </nav>
      <h2>Extending an EasyUI class</h2>
      <BlockCode>{`require('easyui-jsx');

const easyui = require('easyui'),
      { Body, Button } = easyui;

class Example extends Button {
  click() {
    const { message } = this.properties;

    alert(message)
  }

  static fromProperties(properties) {
    return Button.fromProperties(Example, properties);
  }
}

const example = () => {
  const body = new Body(),
        example =

          <Example message="Clicked!">
          Click me...
          </Example>

        ;

  example.onClick(function() {
    example.click();
  });

  body.append(example);
};`}</BlockCode>
      <p>
        This is the preferred way of creating your own elements and is the way that JSX support has been added to the EasyUI elements themselves.
      </p>
      <p>
        You can extend any EasyUI class, including the <InlineCode>Element</InlineCode> class.
        Use the static <InlineCode>fromProperties()</InlineCode> factory method and from there invoke the <InlineCode>fromProperties()</InlineCode> method of the class you are extending.
      </p>
      <p>
        Note that not only can the <InlineCode>onClick()</InlineCode> method can be called, because the <InlineCode>Example</InlineCode> class inherits 
        from the <InlineCode>Button</InlineCode> class, but also that the <InlineCode>click()</InlineCode> method can now be called, because what is 
        returned is an instance of the <InlineCode>Example</InlineCode> class.      
      </p>
    </section>

  );
};

module.exports = TheRenderMethod;
