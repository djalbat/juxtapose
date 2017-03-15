'use strict';

require('../../easyui-jsx');

const Next = require('../next'),
      Previous = require('../previous'),
      Contents = require('../contents'),
      BlockCode = require('../blockCode'),
      InlineCode = require('../inlineCode');

const EasyUIElements = () => {
  return (

    <section>
      <nav>
        <Next href="#theRenderMethod">The <InlineCode>render()</InlineCode> method</Next>
        <Previous href="#functionalElements">Functional elements</Previous>
        <Contents />
      </nav>
      <h2>EasyUI elements</h2>
      <BlockCode>{`require('easyui-jsx');

const easyui = require('easyui'),
      { Body, Button } = easyui;

const body = new Body(),
      button = <Button>Click me...</Button>;

button.onClick(function() {
  alert('Clicked!');
});

body.append(button);`}</BlockCode>
      <p>
        Creating EasyUI elements from JSX involves nothing more than employing the relevant class.
        And since the JSX results in an instance of an EasyUI class, in this case the <InlineCode>Button</InlineCode> class, its methods can be called against it directly.
      </p>
    </section>
      
  );  
};

module.exports = EasyUIElements;
