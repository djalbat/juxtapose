'use strict';

require('../../index.js'); /// easyui-jsx

const EasyUIElements = () => {
  return (

    <section>
      <h2>EasyUI elements</h2>
      <code className="block">{`require('easyui-jsx');

const easyui = require('easyui'),
      { Body, Button } = easyui;

const body = new Body(),
      button = <Button>Click me...</Button>;

button.onClick(function() {
  alert('Clicked!');
});

body.append(button);`}</code>
      <p>
        Creating EasyUI elements from JSX involves nothing more than employing the relevant class.
        And since the JSX results in an instance of an EasyUI class, in this case the <code className="inline">Button</code> class, its methods can be called against it directly.
      </p>
      <nav>
        <span className="next">
          <a href="#theRenderMethod">Next: The <code className="inline">render()</code> method</a>
        </span>
        <span className="previous">
          <a href="#functionalElements">Previous: Functional elements</a>
        </span>
        <span>
          <a href="#contents">Contents</a>
        </span>
      </nav>
    </section>
      
  );  
};

module.exports = EasyUIElements;
