'use strict';

require('../easyui-jsx');

const Previous = (properties) => {
  const {href, childElements} = properties;
  
  return (

    <span className="previous">
      <a href={href}>Previous: {childElements}</a>
    </span>
      
  );  
};

module.exports = Previous;
