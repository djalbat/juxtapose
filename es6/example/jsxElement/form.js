'use strict';

require('../../../index');  ///

const easyui = require('easyUI'),
      { Element, TextArea } = easyui;

class Form extends Element {
  consoleLog(value) {
    console.log(value)
  }

  static fromProperties(properties) {
    return (

      <form>
        <TextArea changeHandler={function(value) {
                    console.log(value);
                  }}
        >
          Some content
        </TextArea>
      </form>

    );
  }
}

module.exports = Form;
