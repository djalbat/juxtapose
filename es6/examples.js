'use strict';

require('../index.js'); /// easyui-jsx

require('fragmented');

const easyui = require('easyui'),
      { Element } = easyui;

const JSXIsGreat = require('./element/jsxIsGreat'),
      Introduction = require('./element/introduction');

const introduction = <Introduction />,
      jsxIsGreat = <JSXIsGreat />,
      fragmentToSectionMap = {
        introduction: introduction,
        jsxIsGreat: jsxIsGreat
      };

const examples = () => {
  insertSections();

  fragment.onChange(showSection);

  showSection();
};

module.exports = examples;

const insertSections = () => {
  const headerDOMElement = document.querySelector('header'),
        header = Element.fromDOMElement(headerDOMElement);

  forEachSection((section) => {
    section.insertAfter(header);
  });
};

const showSection = () => {
  forEachSection((section) => {
    section.hide();
  });

  const section = fragmentToSectionMap[fragment] || introduction;

  section.show();
};

const forEachSection = (callback) => {
  const fragments = Object.keys(fragmentToSectionMap);

  fragments.forEach((fragment) => {
    const section = fragmentToSectionMap[fragment];

    callback(section);
  });
};
