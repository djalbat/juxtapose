'use strict';

require('../../index.js'); /// easyui-jsx

const TheRenderMethod = () => {
  return (

    <section>
      <h2>Extending an EasyUI class</h2>
      <code className="block">{`require('easyui-jsx');

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

Example.tagName = 'button'; /// Optional.

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
};`}</code>
      <p>
        This is the preferred pattern for creating your own elements and is the way that JSX support has been added to the EasyUI elements themselves.
      </p>
      <p>
        You can extend any EasyUI class, including the <code className="inline">Element</code> class.
        Use the static <code className="inline">fromProperties()</code> factory method and from there invoke the <code className="inline">fromProperties()</code> method of the class you are extending.
      </p>
      <p>
        Note that the <code className="inline">onClick()</code> method can be called, because the <code className="inline">Example</code> class inherits 
        from the <code className="inline">Button</code> class, but also that the <code className="inline">click()</code> method can now be called, because what is 
        returned is an instance of the <code className="inline">Example</code> class.      
      </p>
      <nav>
        <span className="floatLeft">
          <a href="#theRenderMethod">Previous: The <code className="inline">render()</code> method</a>
        </span>
        <span>
          <a href="#contents">Contents</a>
        </span>
      </nav>
    </section>

  );
};

module.exports = TheRenderMethod;
