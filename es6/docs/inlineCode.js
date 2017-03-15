'use strict';

require('../easyui-jsx');

const InlineCode = (properties) => {
  const { childElements } = properties;
  
  return (

    <code className="inline">{childElements}</code>
      
  );  
};

module.exports = InlineCode;
