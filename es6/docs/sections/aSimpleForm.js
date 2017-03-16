'use strict';

require('../../easyui-jsx');

const easyui = require('easyui'),
      { Input, Textarea, Select } = easyui;

const Next = require('../next'),
      Previous = require('../previous'),
      Contents = require('../contents'),
      BlockCode = require('../blockCode'),
      InlineCode = require('../inlineCode');
  
const ASimpleForm = () => {
  const textarea = <Textarea placeholder="A textarea"/>,
        input = <Input nametype="text" placeholder="A text input" />;

  return (

    <section>
      <nav>
        <Next href="#moreEasyUIElements">More EasyUI elements</Next>
        <Previous href="#theElementClass">The <code className="inline">Element</code> class</Previous>
        <Contents />
      </nav>
      <h2>A simple form</h2>
      <BlockCode>{`const easyui = require('easyui'),
      { Input, Textarea, Select } = easyui;

const textarea = <Textarea />,
      input = <Input type="text" />;

<form>
  {input}
  {textarea}
  <Select onChange={(value) => {
            input.setValue(value);
          }}
  >
    <option value="Al">A</option>
    <option value="Bill">B</option>
    <option value="Chuck">C</option>
    <option value="Dick" selected>D</option>
  </Select>
  <button onClick={(event) => {
            const value = input.getValue(),
                  preventDefault = true;

            textarea.setValue(value);
            
            return preventDefault;
          }}
  >
  Submit
  </button>
</form>`}</BlockCode>
      <p>
        You can use EasyUI's form element classes or lower case tag names.
        The somewhat contrived example here uses a combination of both.
      </p>
      <p>
        The advantage of using EasyUI's form element classes is that they support various methods that will be helpful.
        Event handlers will receive pertinent arguments, for example, rather than a DOM event object.
        Check the <a href="https://github.com/djalbat/EasyUI">EasyUI documentation</a> and accompanying source code for details.
        Handlers that are treated specially will be passed to the requisite constructors.
      </p>
      <p>
        Here the <InlineCode>Select</InlineCode> class is used and so the change handler is passed the selected option's value whenever it changes.
        By contrast the <InlineCode>Element</InlineCode> class is used for the button.
        In this case the DOM event object will be passed to the click handler and this is simply ignored.
      </p>
      <form>
        {input}
        {textarea}
        <Select onChange={(value) => {
                  input.setValue(value);
                }}
        >
          <option value="Al">A</option>
          <option value="Bill">B</option>
          <option value="Chuck">C</option>
          <option value="Dick" selected>D</option>
        </Select>
        <button onClick={(event) => {
                          const value = input.getValue(),
                                preventDefault = true;

                          textarea.setValue(value);
                          
                          return preventDefault;
                        }}
        >
        Submit
        </button>
      </form>
    </section>

  );
};

module.exports = ASimpleForm;
