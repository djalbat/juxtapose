'use strict';

require('fragmented');

require('./easyui-jsx');

const easyui = require('easyui'),
      { Element } = easyui;

const Contents = require('./docs/sections/contents'),
      Introduction = require('./docs/sections/introduction'),
      JSXIsGreat = require('./docs/sections/jsxIsGreat'),
      GettingStarted = require('./docs/sections/gettingStarted'),
      AppendingElementsToTheDOM = require('./docs/sections/appendingElementsToTheDOM'),
      FunctionalElements = require('./docs/sections/functionalElements'),
      EasyUIElements = require('./docs/sections/easyUIElements'),
      TheRenderMethod = require('./docs/sections/theRenderMethod'),
      ExtendingAnEasyUIClass = require('./docs/sections/extendingAnEasyUIClass'),
      TheExampleOfThisDocumentation = require('./docs/sections/theExampleOfThisDocumentation'),
      TheElementClass = require('./docs/sections/theElementClass'),
      ASimpleForm = require('./docs/sections/aSimpleForm');

const introduction = <Introduction />,
      fragmentToSectionMap = {
        introduction: introduction,
        contents: <Contents />,
        jsxIsGreat: <JSXIsGreat />,
        gettingStarted: <GettingStarted />,
        appendingElementsToTheDOM: <AppendingElementsToTheDOM />,
        functionalElements: <FunctionalElements />,
        easyUIElements: <EasyUIElements />,
        theRenderMethod: <TheRenderMethod />,
        extendingAnEasyUIClass: <ExtendingAnEasyUIClass />,
        theExampleOfThisDocumentation: <TheExampleOfThisDocumentation />,
        theElementClass: <TheElementClass />,
        aSimpleForm: <ASimpleForm /> 
      };

const insertSections = () => {
  const headerDOMElement = document.querySelector('header'),
        header = Element.fromDOMElement(headerDOMElement);

  forEachSection((section) => {
    section.insertAfter(header);
  });
};

const revealSection = () => {
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

fragment.onChange(revealSection);

revealSection();
