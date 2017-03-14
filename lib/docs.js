'use strict';

require('./easyui-jsx');

require('fragmented');

var easyui = require('easyui'),
    Element = easyui.Element;


var Contents = require('./element/contents'),
    Introduction = require('./element/introduction'),
    JSXIsGreat = require('./element/jsxIsGreat'),
    GettingStarted = require('./element/gettingStarted'),
    AppendingToTheDOM = require('./element/appendingToTheDOM'),
    FunctionalElements = require('./element/functionalElements'),
    EasyUIElements = require('./element/easyUIElements'),
    TheRenderMethod = require('./element/theRenderMethod'),
    ExtendingAnEasyUIClass = require('./element/extendingAnEasyUIClass');

var introduction = React.createElement(Introduction, null),
    fragmentToSectionMap = {
  introduction: introduction,
  contents: React.createElement(Contents, null),
  jsxIsGreat: React.createElement(JSXIsGreat, null),
  gettingStarted: React.createElement(GettingStarted, null),
  appendingToTheDOM: React.createElement(AppendingToTheDOM, null),
  functionalElements: React.createElement(FunctionalElements, null),
  easyUIElements: React.createElement(EasyUIElements, null),
  theRenderMethod: React.createElement(TheRenderMethod, null),
  extendingAnEasyUIClass: React.createElement(ExtendingAnEasyUIClass, null)
};

var insertSections = function insertSections() {
  var headerDOMElement = document.querySelector('header'),
      header = Element.fromDOMElement(headerDOMElement);

  forEachSection(function (section) {
    section.insertAfter(header);
  });
};

var showSection = function showSection() {
  forEachSection(function (section) {
    section.hide();
  });

  var section = fragmentToSectionMap[fragment] || introduction;

  section.show();
};

var forEachSection = function forEachSection(callback) {
  var fragments = Object.keys(fragmentToSectionMap);

  fragments.forEach(function (fragment) {
    var section = fragmentToSectionMap[fragment];

    callback(section);
  });
};

insertSections();

fragment.onChange(showSection);

showSection();