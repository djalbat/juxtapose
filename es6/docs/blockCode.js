'use strict';

require('../easyui-jsx');

const BlockCode = (properties) => {
  const { childElements } = properties;
  
  return (

    <code className="block">{childElements}</code>
      
  );  
};

module.exports = BlockCode;
