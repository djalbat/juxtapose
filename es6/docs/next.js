'use strict';

require('../easyui-jsx');

const Next = (properties) => {
  const {href, childElements} = properties;
  
  return (

    <span className="next">
      <a href={href}>Next: {childElements}</a>
    </span>
      
  );  
};

module.exports = Next;
