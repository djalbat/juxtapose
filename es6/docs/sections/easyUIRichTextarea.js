'use strict';

require('../../easyui-jsx');

const Previous = require('../previous'),
      Contents = require('../contents');

const EasyUIRichTextarea = () => {
  return (

    <section>
      <nav>
        <Previous href="#easyUIDragAndDrop">EasyUI DragAndDrop</Previous>
        <Contents />
      </nav>
      <h2>EasyUI RichTextarea</h2>
      <p>
        A textarea element that handles and hands off events well.
      </p>
    </section>
      
  );  
};

module.exports = EasyUIRichTextarea;
