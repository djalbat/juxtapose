'use strict';

require('./easyui-jsx');

require('fragmented');

const easyui = require('easyui'),
      { Element } = easyui;

const Contents = require('./element/contents'),
      Introduction = require('./element/introduction'),
      JSXIsGreat = require('./element/jsxIsGreat'),
      GettingStarted = require('./element/gettingStarted'),
      AppendingToTheDOM = require('./element/appendingToTheDOM'),
      FunctionalElements = require('./element/functionalElements'),
      EasyUIElements = require('./element/easyUIElements'),
      TheRenderMethod = require('./element/theRenderMethod'),
      ExtendingAnEasyUIClass = require('./element/extendingAnEasyUIClass');

const introduction = <Introduction />,
      fragmentToSectionMap = {
        introduction: introduction,
        contents: <Contents />,
        jsxIsGreat: <JSXIsGreat />,
        gettingStarted: <GettingStarted />,
        appendingToTheDOM: <AppendingToTheDOM />,
        functionalElements: <FunctionalElements />,
        easyUIElements: <EasyUIElements />,
        theRenderMethod: <TheRenderMethod />,
        extendingAnEasyUIClass: <ExtendingAnEasyUIClass />
      };

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

insertSections();

fragment.onChange(showSection);

showSection();
