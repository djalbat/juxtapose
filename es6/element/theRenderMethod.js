'use strict';

require('../../index.js'); /// easyui-jsx

const TheRenderMethod = () => {
  return (

    <section>
      <h2>The <code className="inline">render()</code> method</h2>
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
        <span className="floatRight">
          <a href="#">Next: </a>
        </span>
        <span className="floatLeft">
          <a href="#easyUIElements">Previous: EasyUI elements</a>
        </span>
      </nav>
    </section>
      
  );  
};

module.exports = TheRenderMethod;
