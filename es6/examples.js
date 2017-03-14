'use strict';

require('../index.js'); /// easyui-jsx

require('fragmented');

const easyui = require('easyui'),
      { Element } = easyui;

const JSXIsGreat = require('./element/jsxIsGreat'),
      Introduction = require('./element/introduction'),
      GettingStarted = require('./element/gettingStarted'),
      FunctionalElements = require('./element/functionalElements'),
      EasyUIElements = require('./element/easyUIElements'),
      TheRenderMethod = require('./element/theRenderMethod');

const introduction = <Introduction />,
      fragmentToSectionMap = {
        introduction: introduction,
        jsxIsGreat: <JSXIsGreat />,
        gettingStarted: <GettingStarted />,
        functionalElements: <FunctionalElements />,
        easyUIElements: <EasyUIElements />,
        theRenderMethod: <TheRenderMethod />
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
