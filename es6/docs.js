'use strict';

require('fragmented');

require('./easyui-jsx');

const easyui = require('easyui'),
      { Element } = easyui;

const Contents = require('./docs/contents'),
      Introduction = require('./docs/introduction'),
      JSXIsGreat = require('./docs/jsxIsGreat'),
      GettingStarted = require('./docs/gettingStarted'),
      AppendingToTheDOM = require('./docs/appendingToTheDOM'),
      FunctionalElements = require('./docs/functionalElements'),
      EasyUIElements = require('./docs/easyUIElements'),
      TheRenderMethod = require('./docs/theRenderMethod'),
      ExtendingAnEasyUIClass = require('./docs/extendingAnEasyUIClass'),
      AGoodExampleThisDocumentation = require('./docs/aGoodExampleThisDocumentation'),
      TheElementClass = require('./docs/theElementClass');

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
        extendingAnEasyUIClass: <ExtendingAnEasyUIClass />,
        aGoodExampleThisDocumentation: <AGoodExampleThisDocumentation />,
        theElementClass: <TheElementClass />
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

  const section = fragmentToSectionMap[fragment] 
                    || introduction;

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
