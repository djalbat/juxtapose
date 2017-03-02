'use strict';

require('../../index');  // easyui-jsx

const easyui = require('easyUI'),
      { TextArea } = easyui;

class Form {
  render() {
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
