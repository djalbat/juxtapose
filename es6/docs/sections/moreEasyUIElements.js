'use strict';

require('../../easyui-jsx');

const Next = require('../next'),
      Previous = require('../previous'),
      Contents = require('../contents');

const MoreEasyUIElements = () => {
  return (

    <section>
      <nav>
        <Next href="#easyUILayout">EasyUI Layout</Next>
        <Previous href="#aSimpleForm">A simple form</Previous>
        <Contents />
      </nav>
      <h2>More EasyUI elements</h2>
      <p>
        These are divided between three projects:
      </p>
      <ul>
        <li>
          <a href="#easyUILayout">EasyUI-Layout</a>
        </li>
        <li>
          <a href="#easyUIDragAndDrop">EasyUI-DragAndDrop</a>
        </li>
        <li>
          <a href="easyUIRichTextarea">EasyUI-RichTextarea</a>
        </li>
      </ul>
      <p>
        These are specialist projects to some extent and are not for everyone.
        Hopefully their number and utility will grow over time.
      </p>
    </section>
      
  );  
};

module.exports = MoreEasyUIElements;
