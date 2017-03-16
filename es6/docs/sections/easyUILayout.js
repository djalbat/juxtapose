'use strict';

require('../../easyui-jsx');

const Next = require('../next'),
      Previous = require('../previous'),
      Contents = require('../contents');

const EasyUILayout = () => {
  return (

    <section>
      <nav>
        <Next href="#easyUIDragAndDrop">EasyUI DragAndDrop</Next>
        <Previous href="#moreEasyUIElements">More EasyUI elements</Previous>
        <Contents />
      </nav>
      <h2>EasyUI Layout</h2>
      <p>
        Layout elements that work with CSS flexbox.
      </p>
    </section>
      
  );  
};

module.exports = EasyUILayout;
