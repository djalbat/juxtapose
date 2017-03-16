'use strict';

require('../../easyui-jsx');

const Next = require('../next'),
      Previous = require('../previous'),
      Contents = require('../contents');

const EasyUIDragAndDrop = () => {
  return (

    <section>
      <nav>
        <Next href="#easyUIRichTextarea">EasyUI RichTextarea</Next>
        <Previous href="#easyUILayout">EasyUI Layout</Previous>
        <Contents />
      </nav>
      <h2>EasyUI DragAndDrop</h2>
      <p>
        Drag and drop elements including an explorer and a rubbish bin.
      </p>
    </section>
      
  );  
};

module.exports = EasyUIDragAndDrop;
