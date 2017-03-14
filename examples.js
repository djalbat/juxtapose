(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.examples = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

module.exports = require('../lib/examples.js');

},{"../lib/examples.js":5}],2:[function(require,module,exports){
'use strict';

require('./lib/react');

},{"./lib/react":6}],3:[function(require,module,exports){
'use strict';

require('../../index.js'); /// easyui-jsx

var Introduction = function Introduction() {
  return React.createElement(
    'section',
    null,
    React.createElement(
      'code',
      { className: 'floatRight' },
      'require(\'easyui-jsx\');\n\nconst easyui = require(\'easyui\'),\n      { Body } = easyui;\n\nconst body = new Body();\n\nbody.append(\n\n  <div className="example">\n    An easy example.\n  </div>\n\n);'
    ),
    React.createElement(
      'p',
      null,
      'These pages showcase the use of ',
      React.createElement(
        'a',
        { href: 'https://facebook.github.io/react/docs/jsx-in-depth.html' },
        'JSX'
      ),
      ' with ',
      React.createElement(
        'a',
        { href: 'https://github.com/djalbat/EasyUI' },
        'EasyUI'
      ),
      '. It is easy to combine these two technologies in practice, as the example shows.'
    ),
    React.createElement(
      'p',
      null,
      'It also turned out not to be very difficult to implement this combination. JSX transpiles into a call to ',
      React.createElement(
        'code',
        { className: 'inline' },
        'React.createClass(...)'
      ),
      ' and so all that needed to be done was to ',
      React.createElement(
        'a',
        { href: 'https://github.com/djalbat/EasyUI-JSX/blob/master/es6/react.js' },
        'implement that'
      ),
      ', and then to ',
      React.createElement(
        'a',
        { href: 'https://github.com/djalbat/EasyUI/blob/master/es6/mixin/jsx.js' },
        'augment'
      ),
      ' EasyUI\'s base ',
      React.createElement(
        'code',
        { className: 'inline' },
        'Element'
      ),
      ' class in order to enable elements to apply the properties they were passed.'
    ),
    React.createElement(
      'p',
      { className: 'clearBoth' },
      React.createElement(
        'a',
        { href: '#jsxIsGreat', className: 'floatRight' },
        'Next: JSX is great'
      )
    )
  );
};

module.exports = Introduction;

},{"../../index.js":2}],4:[function(require,module,exports){
'use strict';

require('../../index.js'); /// easyui-jsx

var JSXIsGreat = function JSXIsGreat() {
  return React.createElement(
    'section',
    null,
    React.createElement(
      'p',
      null,
      'JSX is great because it allows you to do three crucial things:'
    ),
    React.createElement(
      'ol',
      null,
      React.createElement(
        'li',
        null,
        React.createElement(
          'strong',
          null,
          'Associate the code that defines the view directly with the code that defines the model'
        ),
        '. This is much better than having a view class and a model class and having one inherit from the other, say. JSX allows you to inline the view code, so to speak, and link it to the surrounding model code in a straightforward manner.'
      ),
      React.createElement(
        'li',
        null,
        React.createElement(
          'strong',
          null,
          'Build up the application\'s view in a declarative way'
        ),
        '. The most likely and often the only relation between view elements is inclusion. This results in a tree, and JSX encodes trees. This won\'t always work, consider arcade games. But it works for applications with event driven user interfaces and this includes nearly all web applications.'
      ),
      React.createElement(
        'li',
        null,
        React.createElement(
          'strong',
          null,
          'Create view elements easily without the need for constructors or factory methods'
        ),
        '. So there is less code and what there is likely to be more readable and maintainable. JSX also encourages composition and reuse.'
      )
    ),
    React.createElement(
      'p',
      null,
      'Also JSX just embeds well into JavaScript. Compare this with things such as JSP, which embed imperative languages in declarative ones. For several reasons this can be nightmarish. But the other way round happens to work really well.'
    )
  );
};

module.exports = JSXIsGreat;

},{"../../index.js":2}],5:[function(require,module,exports){
'use strict';

require('../index.js'); /// easyui-jsx

require('fragmented');

var easyui = require('easyui'),
    Element = easyui.Element;


var JSXIsGreat = require('./element/jsxIsGreat'),
    Introduction = require('./element/introduction');

var introduction = React.createElement(Introduction, null),
    jsxIsGreat = React.createElement(JSXIsGreat, null),
    fragmentToSectionMap = {
  introduction: introduction,
  jsxIsGreat: jsxIsGreat
};

var examples = function examples() {
  insertSections();

  fragment.onChange(showSection);

  showSection();
};

module.exports = examples;

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

},{"../index.js":2,"./element/introduction":3,"./element/jsxIsGreat":4,"easyui":7,"fragmented":28}],6:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easyui = require('easyui'),
    Element = easyui.Element;

var React = function () {
  function React() {
    _classCallCheck(this, React);
  }

  _createClass(React, null, [{
    key: 'createElement',
    value: function createElement(firstArgument, properties) {
      for (var _len = arguments.length, childElements = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        childElements[_key - 2] = arguments[_key];
      }

      var element = null;

      if (firstArgument !== undefined) {
        childElements = flattenChildElements(childElements);

        properties = Object.assign({
          childElements: childElements
        }, properties);

        if (false) {} else if (typeof firstArgument === 'string') {
          var tagName = firstArgument; ///

          element = Element.fromPropertiesAndTagName(Element, properties, tagName);
        } else if (isTypeOf(firstArgument, Element)) {
          var Class = firstArgument; ///

          element = Class.fromProperties(properties);
        } else if (firstArgument.prototype.render) {
          var _Class = firstArgument,
              ///
          instance = new _Class(properties);

          element = instance.render();
        } else if (typeof firstArgument === 'function') {
          var elementFunction = firstArgument; ///

          element = elementFunction(properties);
        }
      }

      return element;
    }
  }]);

  return React;
}();

Object.defineProperty(window, 'React', {
  get: function get() {
    return React;
  }
});

module.exports = React;

function flattenChildElements(childElements) {
  childElements = childElements.reduce(function (childElements, childElement) {
    ///
    childElements = childElements.concat(childElement);

    return childElements;
  }, []);

  return childElements;
}

function isTypeOf(argument, Class) {
  var typeOf = false;

  if (argument === Class) {
    ///
    typeOf = true;
  } else {
    argument = Object.getPrototypeOf(argument); ///

    if (argument) {
      typeOf = isTypeOf(argument, Class);
    }
  }

  return typeOf;
}

},{"easyui":7}],7:[function(require,module,exports){
'use strict';

module.exports = {
  Bounds: require('./lib/misc/bounds'),
  Offset: require('./lib/misc/offset'),
  Element: require('./lib/element'),
  InputElement: require('./lib/inputElement'),
  document: require('./lib/document'),
  window: require('./lib/window'),
  Div: require('./lib/element/div'),
  Span: require('./lib/element/span'),
  Body: require('./lib/element/body'),
  Link: require('./lib/inputElement/link'),
  Input: require('./lib/inputElement/input'),
  Select: require('./lib/inputElement/select'),
  Button: require('./lib/inputElement/button'),
  Checkbox: require('./lib/inputElement/checkbox'),
  Textarea: require('./lib/inputElement/textarea')
};

},{"./lib/document":8,"./lib/element":9,"./lib/element/body":10,"./lib/element/div":11,"./lib/element/span":12,"./lib/inputElement":13,"./lib/inputElement/button":14,"./lib/inputElement/checkbox":15,"./lib/inputElement/input":16,"./lib/inputElement/link":17,"./lib/inputElement/select":18,"./lib/inputElement/textarea":19,"./lib/misc/bounds":20,"./lib/misc/offset":21,"./lib/window":27}],8:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var eventMixin = require('./mixin/event'),
    clickMixin = require('./mixin/click'),
    mouseMixin = require('./mixin/mouse');

var Document = function Document() {
  _classCallCheck(this, Document);

  this.domElement = document;

  this.handlersMap = {};
};

Object.assign(Document.prototype, eventMixin);
Object.assign(Document.prototype, clickMixin);
Object.assign(Document.prototype, mouseMixin);

module.exports = new Document(); ///

},{"./mixin/click":22,"./mixin/event":23,"./mixin/mouse":25}],9:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Offset = require('./misc/offset'),
    Bounds = require('./misc/bounds'),
    jsxMixin = require('./mixin/jsx'),
    eventMixin = require('./mixin/event'),
    clickMixin = require('./mixin/click'),
    mouseMixin = require('./mixin/mouse'),
    resizeMixin = require('./mixin/resize');

var Element = function () {
  function Element(selector) {
    _classCallCheck(this, Element);

    this.domElement = domElementFromSelector(selector);

    this.domElement.__element__ = this;

    this.handlersMap = {};
  }

  _createClass(Element, [{
    key: 'clone',
    value: function clone() {
      return Element.clone(this);
    }
  }, {
    key: 'getOffset',
    value: function getOffset() {
      var top = this.domElement.offsetTop,
          ///
      left = this.domElement.offsetLeft,
          ///
      offset = new Offset(top, left);

      return offset;
    }
  }, {
    key: 'getBounds',
    value: function getBounds() {
      var includeBorder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var boundingClientRect = this.domElement.getBoundingClientRect(),
          bounds = Bounds.fromBoundingClientRect(boundingClientRect);

      return bounds;
    }
  }, {
    key: 'getWidth',
    value: function getWidth() {
      var includeBorder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var width = includeBorder ? this.domElement.offsetWidth : this.domElement.clientWidth;

      return width;
    }
  }, {
    key: 'setWidth',
    value: function setWidth(width) {
      this.domElement.style.width = width + 'px';
    }
  }, {
    key: 'getHeight',
    value: function getHeight() {
      var includeBorder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var height = includeBorder ? this.domElement.offsetHeight : this.domElement.clientHeight;

      return height;
    }
  }, {
    key: 'setHeight',
    value: function setHeight(height) {
      this.domElement.style.height = height + 'px';
    }
  }, {
    key: 'getAttribute',
    value: function getAttribute(name) {
      return this.domElement.getAttribute(name);
    }
  }, {
    key: 'setAttribute',
    value: function setAttribute(name, value) {
      this.domElement.setAttribute(name, value);
    }
  }, {
    key: 'clearAttribute',
    value: function clearAttribute(name) {
      this.domElement.removeAttribute(name);
    }
  }, {
    key: 'addAttribute',
    value: function addAttribute(name, value) {
      this.setAttribute(name, value);
    }
  }, {
    key: 'removeAttribute',
    value: function removeAttribute(name) {
      this.clearAttribute(name);
    }
  }, {
    key: 'setClass',
    value: function setClass(className) {
      this.domElement.className = className;
    }
  }, {
    key: 'addClass',
    value: function addClass(className) {
      this.domElement.classList.add(className);
    }
  }, {
    key: 'removeClass',
    value: function removeClass(className) {
      this.domElement.classList.remove(className);
    }
  }, {
    key: 'toggleClass',
    value: function toggleClass(className) {
      this.domElement.classList.toggle(className);
    }
  }, {
    key: 'hasClass',
    value: function hasClass(className) {
      return this.domElement.classList.contains(className);
    }
  }, {
    key: 'clearClasses',
    value: function clearClasses() {
      this.domElement.className = '';
    }
  }, {
    key: 'prepend',
    value: function prepend(elementOrString) {
      var domElement = domElementFromElementOrString(elementOrString),
          firstChildDOMElement = this.domElement.firstChild;

      this.domElement.insertBefore(domElement, firstChildDOMElement);
    }
  }, {
    key: 'append',
    value: function append(elementOrString) {
      var domElement = domElementFromElementOrString(elementOrString);

      this.domElement.insertBefore(domElement, null); ///
    }
  }, {
    key: 'appendTo',
    value: function appendTo(parentElement) {
      var parentDOMElement = parentElement.domElement,
          firstSiblingDOMElement = parentDOMElement.firstChild; ///

      parentDOMElement.insertBefore(this.domElement, firstSiblingDOMElement);
    }
  }, {
    key: 'prependTo',
    value: function prependTo(parentElement) {
      var parentDOMElement = parentElement.domElement;

      parentDOMElement.insertBefore(this.domElement, null); ///
    }
  }, {
    key: 'removeFrom',
    value: function removeFrom(parentElement) {
      var parentDOMElement = parentElement.domElement;

      parentDOMElement.removeChild(this.domElement);
    }
  }, {
    key: 'remove',
    value: function remove(element) {
      if (element) {
        var domElement = element.domElement;

        this.domElement.removeChild(domElement);
      } else {
        this.domElement.remove();
      }
    }
  }, {
    key: 'insertBefore',
    value: function insertBefore(siblingElement) {
      var parentDOMNode = siblingElement.domElement.parentNode,
          siblingDOMElement = siblingElement.domElement;

      parentDOMNode.insertBefore(this.domElement, siblingDOMElement);
    }
  }, {
    key: 'insertAfter',
    value: function insertAfter(siblingElement) {
      var parentDOMNode = siblingElement.domElement.parentNode,
          siblingDOMElement = siblingElement.domElement;

      parentDOMNode.insertBefore(this.domElement, siblingDOMElement.nextSibling); ///
    }
  }, {
    key: 'show',
    value: function show() {
      var displayStyle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'block';
      this.domElement.style.display = displayStyle;
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.domElement.style.display = 'none';
    }
  }, {
    key: 'enable',
    value: function enable() {
      this.clearAttribute('disabled');
    }
  }, {
    key: 'disable',
    value: function disable() {
      this.setAttribute('disabled', 'disabled');
    }
  }, {
    key: 'html',
    value: function html(_html) {
      if (_html === undefined) {
        _html = this.domElement.innerHTML; ///

        return _html;
      } else {
        var innerHTML = _html; ///

        this.domElement.innerHTML = innerHTML;
      }
    }
  }, {
    key: 'css',
    value: function css(_css) {
      if (_css === undefined) {
        var computedStyle = getComputedStyle(this.domElement),
            css = {};

        for (var index = 0; index < computedStyle.length; index++) {
          var name = computedStyle[0],
              ///
          value = computedStyle.getPropertyValue(name); ///

          css[name] = value;
        }

        return css;
      } else if (typeof _css === 'string') {
        var _name = _css; ///

        var _computedStyle = getComputedStyle(this.domElement),
            _value = _computedStyle.getPropertyValue(_name); ///

        _css = _value; ///

        return _css;
      } else {
        var names = Object.keys(_css); ///

        names.forEach(function (name) {
          var value = _css[name];

          this.domElement.style[name] = value;
        }.bind(this));
      }
    }
  }, {
    key: 'getDescendantElements',
    value: function getDescendantElements() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '*';

      var descendantDOMElements = this.domElement.querySelectorAll(selector),
          descendantElements = elementsFromDOMElements(descendantDOMElements);

      return descendantElements;
    }
  }, {
    key: 'getChildElements',
    value: function getChildElements() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '*';

      var descendantDOMElements = this.domElement.querySelectorAll(selector),
          allChildDOMElements = this.domElement.children,
          childDOMElements = filter(allChildDOMElements, function (childDOMElement) {
        return some(descendantDOMElements, function (descendantDOMElement) {
          return descendantDOMElement === childDOMElement;
        });
      }),
          childElements = elementsFromDOMElements(childDOMElements);

      return childElements;
    }
  }, {
    key: 'getParentElement',
    value: function getParentElement() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '*';

      var parentElement = null;

      var parentDOMElement = this.domElement.parentElement;

      if (parentDOMElement !== null) {
        if (parentDOMElement.matches(selector)) {
          var parentDOMElements = [parentDOMElement],
              parentElements = elementsFromDOMElements(parentDOMElements),
              firstParentElement = first(parentElements);

          parentElement = firstParentElement || null;
        }
      }

      return parentElement;
    }
  }, {
    key: 'getAscendantElements',
    value: function getAscendantElements() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '*';

      var ascendantDOMElements = [],
          parentDOMElement = this.domElement.parentElement;

      var ascendantDOMElement = parentDOMElement; ///
      while (ascendantDOMElement !== null) {
        if (ascendantDOMElement.matches(selector)) {
          ascendantDOMElements.push(ascendantDOMElement);
        }

        ascendantDOMElement = ascendantDOMElement.parentElement;
      }

      var ascendantElements = elementsFromDOMElements(ascendantDOMElements);

      return ascendantElements;
    }
  }], [{
    key: 'clone',
    value: function clone(Class, element) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        remainingArguments[_key - 2] = arguments[_key];
      }

      if (Class instanceof Element) {
        element = Class;
        remainingArguments.shift();
        Class = Element;
      }

      var deep = true,
          domElement = element.domElement.cloneNode(deep);

      remainingArguments.unshift(domElement);
      remainingArguments.unshift(null);

      return new (Function.prototype.bind.apply(Class, remainingArguments))();
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(Class, html) {
      for (var _len2 = arguments.length, remainingArguments = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        remainingArguments[_key2 - 2] = arguments[_key2];
      }

      if (typeof Class === 'string') {
        html = Class;
        remainingArguments.shift();
        Class = Element;
      }

      var outerDOMElement = document.createElement('div');

      outerDOMElement.innerHTML = html; ///

      var domElement = outerDOMElement.firstChild;

      remainingArguments.unshift(domElement);
      remainingArguments.unshift(null);

      return new (Function.prototype.bind.apply(Class, remainingArguments))();
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(Class, domElement) {
      for (var _len3 = arguments.length, remainingArguments = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        remainingArguments[_key3 - 2] = arguments[_key3];
      }

      if ((typeof Class === 'undefined' ? 'undefined' : _typeof(Class)) === 'object') {
        domElement = Class;
        remainingArguments.shift();
        Class = Element;
      }

      remainingArguments.unshift(domElement);
      remainingArguments.unshift(null);

      return new (Function.prototype.bind.apply(Class, remainingArguments))();
    }
  }, {
    key: 'fromProperties',
    value: function fromProperties(Class, properties) {
      var tagName = Class.tagName,
          element = Element.fromPropertiesAndTagName(Class, properties, tagName);

      return element;
    }
  }, {
    key: 'fromPropertiesAndTagName',
    value: function fromPropertiesAndTagName(Class, properties, tagName) {
      var html = '<' + tagName + '></' + tagName + '>',
          element = Element.fromHTML(Class, html);

      element.applyProperties(properties);

      return element;
    }
  }]);

  return Element;
}();

Object.assign(Element.prototype, jsxMixin);
Object.assign(Element.prototype, eventMixin);
Object.assign(Element.prototype, clickMixin);
Object.assign(Element.prototype, mouseMixin);
Object.assign(Element.prototype, resizeMixin);

Element.LEFT_MOUSE_BUTTON = 0;
Element.MIDDLE_MOUSE_BUTTON = 1;
Element.RIGHT_MOUSE_BUTTON = 2;

module.exports = Element;

function domElementFromSelector(selector) {
  var domElement = typeof selector === 'string' ? document.querySelectorAll(selector)[0] : ///
  selector; ///

  return domElement;
}

function domElementFromElementOrString(elementOrString) {
  var domElement = void 0;

  if (typeof elementOrString === 'string') {
    var string = elementOrString; ///

    domElement = document.createTextNode(string); ///
  } else {
    var element = elementOrString; ///

    domElement = element.domElement;
  }

  return domElement;
}

function elementsFromDOMElements(domElements) {
  var domElementsWithElements = filter(domElements, function (domElement) {
    return domElement.__element__ !== undefined;
  }),
      elements = domElementsWithElements.map(function (domElement) {
    return domElement.__element__;
  });

  return elements;
}

function some(array, test) {
  var result = false;

  for (var index = 0; index < array.length; index++) {
    var element = array[index];

    result = test(element);

    if (result) {
      result = true;

      break;
    }
  }

  return result;
}

function filter(array, test) {
  var filteredArray = [];

  for (var index = 0; index < array.length; index++) {
    var element = array[index],
        result = test(element);

    if (result) {
      filteredArray.push(element);
    }
  }

  return filteredArray;
}

function first(array) {
  return array[0];
}

},{"./misc/bounds":20,"./misc/offset":21,"./mixin/click":22,"./mixin/event":23,"./mixin/jsx":24,"./mixin/mouse":25,"./mixin/resize":26}],10:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element');

var Body = function (_Element) {
  _inherits(Body, _Element);

  function Body() {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'body';

    _classCallCheck(this, Body);

    return _possibleConstructorReturn(this, (Body.__proto__ || Object.getPrototypeOf(Body)).call(this, selector));
  }

  _createClass(Body, [{
    key: 'clone',
    value: function clone() {
      return Body.clone(this);
    }
  }], [{
    key: 'clone',
    value: function clone(element) {
      return Element.clone(Body, element);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html) {
      return Element.fromHTML(Body, html);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement) {
      return Element.fromDOMElement(Body, domElement);
    }
  }, {
    key: 'fromProperties',
    value: function fromProperties(Class, properties) {
      if (arguments.length === 1) {
        properties = Class;
        Class = Body;
      }

      return Element.fromProperties(Class, properties);
    }
  }]);

  return Body;
}(Element);

Body.tagName = 'body';

module.exports = Body;

},{"../element":9}],11:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element');

var Div = function (_Element) {
  _inherits(Div, _Element);

  function Div(selector) {
    _classCallCheck(this, Div);

    return _possibleConstructorReturn(this, (Div.__proto__ || Object.getPrototypeOf(Div)).call(this, selector));
  }

  _createClass(Div, [{
    key: 'clone',
    value: function clone() {
      return Div.clone(this);
    }
  }], [{
    key: 'clone',
    value: function clone(element) {
      return Element.clone(Div, element);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html) {
      return Element.fromHTML(Div, html);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement) {
      return Element.fromDOMElement(Div, domElement);
    }
  }, {
    key: 'fromProperties',
    value: function fromProperties(Class, properties) {
      if (arguments.length === 1) {
        properties = Class;
        Class = Div;
      }

      return Element.fromProperties(Class, properties);
    }
  }]);

  return Div;
}(Element);

Div.tagName = 'div';

module.exports = Div;

},{"../element":9}],12:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('../element');

var Span = function (_Element) {
  _inherits(Span, _Element);

  function Span(selector) {
    _classCallCheck(this, Span);

    return _possibleConstructorReturn(this, (Span.__proto__ || Object.getPrototypeOf(Span)).call(this, selector));
  }

  _createClass(Span, [{
    key: 'clone',
    value: function clone() {
      return Span.clone(this);
    }
  }], [{
    key: 'clone',
    value: function clone(element) {
      return Element.clone(Span, element);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html) {
      return Element.fromHTML(Span, html);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement) {
      return Element.fromDOMElement(Span, domElement);
    }
  }, {
    key: 'fromProperties',
    value: function fromProperties(Class, properties) {
      if (arguments.length === 1) {
        properties = Class;
        Class = Span;
      }

      return Element.fromProperties(Class, properties);
    }
  }]);

  return Span;
}(Element);

Span.tagName = 'span';

module.exports = Span;

},{"../element":9}],13:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Element = require('./element');

var InputElement = function (_Element) {
  _inherits(InputElement, _Element);

  function InputElement(selector) {
    _classCallCheck(this, InputElement);

    return _possibleConstructorReturn(this, (InputElement.__proto__ || Object.getPrototypeOf(InputElement)).call(this, selector));
  }

  _createClass(InputElement, [{
    key: 'hasFocus',
    value: function hasFocus() {
      var focus = document.activeElement === this.domElement; ///

      return focus;
    }
  }, {
    key: 'focus',
    value: function focus() {
      this.domElement.focus();
    }
  }], [{
    key: 'clone',
    value: function clone(Class, element) {
      for (var _len = arguments.length, remainingArguments = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        remainingArguments[_key - 2] = arguments[_key];
      }

      return Element.clone.apply(Element, [Class, element].concat(remainingArguments));
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(Class, html) {
      for (var _len2 = arguments.length, remainingArguments = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        remainingArguments[_key2 - 2] = arguments[_key2];
      }

      return Element.fromHTML.apply(Element, [Class, html].concat(remainingArguments));
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(Class, domElement) {
      for (var _len3 = arguments.length, remainingArguments = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        remainingArguments[_key3 - 2] = arguments[_key3];
      }

      return Element.fromDOMElement.apply(Element, [Class, domElement].concat(remainingArguments));
    }
  }, {
    key: 'fromProperties',
    value: function fromProperties(Class, properties) {
      return Element.fromProperties(Class, properties);
    }
  }]);

  return InputElement;
}(Element);

module.exports = InputElement;

},{"./element":9}],14:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputElement = require('../inputElement');

var Button = function (_InputElement) {
  _inherits(Button, _InputElement);

  function Button(selector, clickHandler) {
    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, selector));

    if (clickHandler) {
      _this.onClick(clickHandler);
    }
    return _this;
  }

  _createClass(Button, [{
    key: 'clone',
    value: function clone(clickHandler) {
      return Button.clone(this, clickHandler);
    }
  }, {
    key: 'onClick',
    value: function onClick(handler) {
      if (handler.intermediateHandler === undefined) {
        handler.intermediateHandler = defaultIntermediateClickHandler;
      }

      _get(Button.prototype.__proto__ || Object.getPrototypeOf(Button.prototype), 'onClick', this).call(this, handler);
    }
  }, {
    key: 'offClick',
    value: function offClick(handler) {
      _get(Button.prototype.__proto__ || Object.getPrototypeOf(Button.prototype), 'offClick', this).call(this, handler);
    }
  }], [{
    key: 'clone',
    value: function clone(element, clickHandler) {
      return InputElement.clone(Button, element, clickHandler);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html, clickHandler) {
      return InputElement.fromHTML(Button, html, clickHandler);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement, clickHandler) {
      return InputElement.fromDOMElement(Button, domElement, clickHandler);
    }
  }, {
    key: 'fromProperties',
    value: function fromProperties(Class, properties) {
      if (arguments.length === 1) {
        properties = Class;
        Class = Button;
      }

      return InputElement.fromProperties(Class, properties);
    }
  }]);

  return Button;
}(InputElement);

Button.tagName = 'button';

module.exports = Button;

function defaultIntermediateClickHandler(handler, event) {
  var mouseButton = event.button,
      preventDefault = handler(mouseButton);

  return preventDefault;
}

},{"../inputElement":13}],15:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputElement = require('../inputElement');

var Checkbox = function (_InputElement) {
  _inherits(Checkbox, _InputElement);

  function Checkbox(selector, changeHandler) {
    _classCallCheck(this, Checkbox);

    var _this = _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this, selector));

    if (changeHandler) {
      _this.onChange(changeHandler);
    }
    return _this;
  }

  _createClass(Checkbox, [{
    key: 'clone',
    value: function clone(changeHandler) {
      return Checkbox.clone(this, changeHandler);
    }
  }, {
    key: 'onChange',
    value: function onChange(handler) {
      if (handler.intermediateHandler === undefined) {
        handler.intermediateHandler = defaultIntermediateChangeHandler.bind(this);
      }

      this.on('click', handler); ///
    }
  }, {
    key: 'offChange',
    value: function offChange(handler) {
      this.off('click', handler); ///
    }
  }, {
    key: 'check',
    value: function check() {
      var checked = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      checked ? this.setAttribute('checked', 'checked') : this.clearAttribute('checked');
    }
  }, {
    key: 'isChecked',
    value: function isChecked() {
      return this.domElement.checked;
    }
  }], [{
    key: 'clone',
    value: function clone(element, changeHandler) {
      return InputElement.clone(Checkbox, element, changeHandler);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html, changeHandler) {
      return InputElement.fromHTML(Checkbox, html, changeHandler);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement, changeHandler) {
      return InputElement.fromDOMElement(Checkbox, domElement, changeHandler);
    }
  }, {
    key: 'fromProperties',
    value: function fromProperties(Class, properties) {
      if (arguments.length === 1) {
        properties = Class;
        Class = Checkbox;
      }

      Object.assign(properties, {
        type: 'checkbox'
      });

      return InputElement.fromProperties(Class, properties);
    }
  }]);

  return Checkbox;
}(InputElement);

Checkbox.tagName = 'input'; ///

module.exports = Checkbox;

function defaultIntermediateChangeHandler(handler, event) {
  var checked = this.isChecked(),
      preventDefault = handler(checked);

  return preventDefault;
}

},{"../inputElement":13}],16:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputElement = require('../inputElement');

var Input = function (_InputElement) {
  _inherits(Input, _InputElement);

  function Input(selector, changeHandler) {
    _classCallCheck(this, Input);

    var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, selector));

    if (changeHandler) {
      _this.onChange(changeHandler);
    }
    return _this;
  }

  _createClass(Input, [{
    key: 'clone',
    value: function clone(changeHandler) {
      return Input.clone(this, changeHandler);
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.domElement.value;
    }
  }, {
    key: 'getSelectionStart',
    value: function getSelectionStart() {
      return this.domElement.selectionStart;
    }
  }, {
    key: 'getSelectionEnd',
    value: function getSelectionEnd() {
      return this.domElement.selectionEnd;
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      this.domElement.value = value;
    }
  }, {
    key: 'setSelectionStart',
    value: function setSelectionStart(selectionStart) {
      this.domElement.selectionStart = selectionStart;
    }
  }, {
    key: 'setSelectionEnd',
    value: function setSelectionEnd(selectionEnd) {
      this.domElement.selectionEnd = selectionEnd;
    }
  }, {
    key: 'onChange',
    value: function onChange(handler) {
      if (handler.intermediateHandler === undefined) {
        handler.intermediateHandler = defaultIntermediateChangeHandler.bind(this);
      }

      this.on('change', handler);
    }
  }, {
    key: 'offChange',
    value: function offChange(handler) {
      this.off('change', handler);
    }
  }], [{
    key: 'clone',
    value: function clone(element, changeHandler) {
      return InputElement.clone(Input, element, changeHandler);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html, changeHandler) {
      return InputElement.fromHTML(Input, html, changeHandler);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement, changeHandler) {
      return InputElement.fromDOMElement(Input, domElement, changeHandler);
    }
  }, {
    key: 'fromProperties',
    value: function fromProperties(Class, properties) {
      if (arguments.length === 1) {
        properties = Class;
        Class = Input;
      }

      return InputElement.fromProperties(Class, properties);
    }
  }]);

  return Input;
}(InputElement);

Input.tagName = 'input';

module.exports = Input;

function defaultIntermediateChangeHandler(handler, event) {
  var value = this.getValue(),
      preventDefault = handler(value);

  return preventDefault;
}

},{"../inputElement":13}],17:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputElement = require('../inputElement');

var Link = function (_InputElement) {
  _inherits(Link, _InputElement);

  function Link(selector, clickHandler) {
    _classCallCheck(this, Link);

    var _this = _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).call(this, selector));

    if (clickHandler) {
      _this.onClick(clickHandler);
    }
    return _this;
  }

  _createClass(Link, [{
    key: 'clone',
    value: function clone(clickHandler) {
      return Link.clone(this, clickHandler);
    }
  }, {
    key: 'onClick',
    value: function onClick(handler) {
      if (handler.intermediateHandler === undefined) {
        handler.intermediateHandler = defaultIntermediateClickHandler.bind(this);
      }

      this.on('click', handler);
    }
  }, {
    key: 'offClick',
    value: function offClick(handler) {
      this.off('click', handler);
    }
  }], [{
    key: 'clone',
    value: function clone(element, clickHandler) {
      return InputElement.clone(Link, element, clickHandler);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html, clickHandler) {
      return InputElement.fromHTML(Link, html, clickHandler);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement, clickHandler) {
      return InputElement.fromDOMElement(Link, domElement, clickHandler);
    }
  }, {
    key: 'fromProperties',
    value: function fromProperties(Class, properties) {
      if (arguments.length === 1) {
        properties = Class;
        Class = Link;
      }

      return InputElement.fromProperties(Class, properties);
    }
  }]);

  return Link;
}(InputElement);

Link.tagName = 'a'; ///

module.exports = Link;

function defaultIntermediateClickHandler(handler, event) {
  var href = this.getAttribute('href'),
      preventDefault = handler(href);

  return preventDefault;
}

},{"../inputElement":13}],18:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputElement = require('../inputElement');

var Select = function (_InputElement) {
  _inherits(Select, _InputElement);

  function Select(selector, changeHandler) {
    _classCallCheck(this, Select);

    var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, selector));

    if (changeHandler) {
      _this.onChange(changeHandler);
    }
    return _this;
  }

  _createClass(Select, [{
    key: 'clone',
    value: function clone(changeHandler) {
      return Select.clone(this, changeHandler);
    }
  }, {
    key: 'getSelectedOptionValue',
    value: function getSelectedOptionValue() {
      return this.domElement.value;
    } ///

  }, {
    key: 'setSelectedOptionByValue',
    value: function setSelectedOptionByValue(value) {
      this.domElement.value = value;
    } ///

  }, {
    key: 'onChange',
    value: function onChange(handler) {
      if (handler.intermediateHandler === undefined) {
        handler.intermediateHandler = defaultIntermediateChangeHandler.bind(this);
      }

      this.on('change', handler);
    }
  }, {
    key: 'offChange',
    value: function offChange(handler) {
      this.off('change', handler);
    }
  }], [{
    key: 'clone',
    value: function clone(element, changeHandler) {
      return InputElement.clone(Select, element, changeHandler);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html, changeHandler) {
      return InputElement.fromHTML(Select, html, changeHandler);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement, changeHandler) {
      return InputElement.fromDOMElement(Select, domElement, changeHandler);
    }
  }, {
    key: 'fromProperties',
    value: function fromProperties(Class, properties) {
      if (arguments.length === 1) {
        properties = Class;
        Class = Select;
      }

      return InputElement.fromProperties(Class, properties);
    }
  }]);

  return Select;
}(InputElement);

Select.tagName = 'select';

module.exports = Select;

function defaultIntermediateChangeHandler(handler, event) {
  var selectedOptionValue = this.getSelectedOptionValue(),
      preventDefault = handler(selectedOptionValue);

  return preventDefault;
}

},{"../inputElement":13}],19:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputElement = require('../inputElement');

var Textarea = function (_InputElement) {
  _inherits(Textarea, _InputElement);

  function Textarea(selector, changeHandler) {
    _classCallCheck(this, Textarea);

    var _this = _possibleConstructorReturn(this, (Textarea.__proto__ || Object.getPrototypeOf(Textarea)).call(this, selector));

    if (changeHandler) {
      _this.onChange(changeHandler);
    }
    return _this;
  }

  _createClass(Textarea, [{
    key: 'clone',
    value: function clone(changeHandler) {
      return Textarea.clone(this, changeHandler);
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.domElement.value;
    }
  }, {
    key: 'getSelectionStart',
    value: function getSelectionStart() {
      return this.domElement.selectionStart;
    }
  }, {
    key: 'getSelectionEnd',
    value: function getSelectionEnd() {
      return this.domElement.selectionEnd;
    }
  }, {
    key: 'getScrollTop',
    value: function getScrollTop() {
      return this.domElement.scrollTop;
    }
  }, {
    key: 'getScrollLeft',
    value: function getScrollLeft() {
      return this.domElement.scrollLeft;
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      this.domElement.value = value;
    }
  }, {
    key: 'setSelectionStart',
    value: function setSelectionStart(selectionStart) {
      this.domElement.selectionStart = selectionStart;
    }
  }, {
    key: 'setSelectionEnd',
    value: function setSelectionEnd(selectionEnd) {
      this.domElement.selectionEnd = selectionEnd;
    }
  }, {
    key: 'setScrollTop',
    value: function setScrollTop(scrollTop) {
      this.domElement.scrollTop = scrollTop;
    }
  }, {
    key: 'setScrollLeft',
    value: function setScrollLeft(scrollLeft) {
      this.domElement.scrollLeft = scrollLeft;
    }
  }, {
    key: 'onChange',
    value: function onChange(handler) {
      if (handler.intermediateHandler === undefined) {
        handler.intermediateHandler = defaultIntermediateChangeHandler.bind(this);
      }

      this.on('change', handler);
    }
  }, {
    key: 'offChange',
    value: function offChange(handler) {
      this.off('change', handler);
    }
  }, {
    key: 'onScroll',
    value: function onScroll(handler) {
      if (handler.intermediateHandler === undefined) {
        handler.intermediateHandler = defaultIntermediateScrollHandler.bind(this);
      }

      this.on('scroll', handler);
    }
  }, {
    key: 'offScroll',
    value: function offScroll(handler) {
      this.off('scroll', handler);
    }
  }, {
    key: 'onResize',
    value: function onResize(resizeHandler) {}
  }, {
    key: 'offResize',
    value: function offResize(resizeHandler) {}
  }], [{
    key: 'clone',
    value: function clone(element, changeHandler) {
      return InputElement.clone(Textarea, element, changeHandler);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html, changeHandler) {
      return InputElement.fromHTML(Textarea, html, changeHandler);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement, changeHandler) {
      return InputElement.fromDOMElement(Textarea, domElement, changeHandler);
    }
  }, {
    key: 'fromProperties',
    value: function fromProperties(Class, properties) {
      if (arguments.length === 1) {
        properties = Class;
        Class = Textarea;
      }

      return InputElement.fromProperties(Class, properties);
    }
  }]);

  return Textarea;
}(InputElement);

Textarea.tagName = 'textarea';

module.exports = Textarea;

function defaultIntermediateChangeHandler(handler, event) {
  var value = this.getValue(),
      preventDefault = handler(value);

  return preventDefault;
}

function defaultIntermediateScrollHandler(handler, event) {
  var scrollTop = this.getScrollTop(),
      scrollLeft = this.getScrollLeft(),
      preventDefault = handler(scrollTop, scrollLeft);

  return preventDefault;
}

},{"../inputElement":13}],20:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bounds = function () {
  function Bounds(top, left, bottom, right) {
    _classCallCheck(this, Bounds);

    this.top = top;
    this.left = left;
    this.bottom = bottom;
    this.right = right;
  }

  _createClass(Bounds, [{
    key: 'getTop',
    value: function getTop() {
      return this.top;
    }
  }, {
    key: 'getLeft',
    value: function getLeft() {
      return this.left;
    }
  }, {
    key: 'getBottom',
    value: function getBottom() {
      return this.bottom;
    }
  }, {
    key: 'getRight',
    value: function getRight() {
      return this.right;
    }
  }, {
    key: 'isOverlappingMouse',
    value: function isOverlappingMouse(mouseTop, mouseLeft) {
      return this.top < mouseTop && this.left < mouseLeft && this.bottom > mouseTop && this.right > mouseLeft;
    }
  }, {
    key: 'areOverlapping',
    value: function areOverlapping(bounds) {
      return this.top < bounds.bottom && this.left < bounds.right && this.bottom > bounds.top && this.right > bounds.left;
    }
  }], [{
    key: 'fromBoundingClientRect',
    value: function fromBoundingClientRect(boundingClientRect) {
      var top = boundingClientRect.top,
          left = boundingClientRect.left,
          bottom = boundingClientRect.bottom,
          right = boundingClientRect.right,
          bounds = new Bounds(top, left, bottom, right);

      return bounds;
    }
  }]);

  return Bounds;
}();

module.exports = Bounds;

},{}],21:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Offset = function () {
  function Offset(top, left) {
    _classCallCheck(this, Offset);

    this.top = top;
    this.left = left;
  }

  _createClass(Offset, [{
    key: 'getTop',
    value: function getTop() {
      return this.top;
    }
  }, {
    key: 'getLeft',
    value: function getLeft() {
      return this.left;
    }
  }]);

  return Offset;
}();

module.exports = Offset;

},{}],22:[function(require,module,exports){
'use strict';

function onClick(handler) {
  if (handler.intermediateHandler === undefined) {
    handler.intermediateHandler = defaultIntermediateHandler;
  }

  this.on('click', handler);
}

function offClick(handler) {
  this.off('click', handler);
}

var clickMixin = {
  onClick: onClick,
  offClick: offClick
};

module.exports = clickMixin;

function defaultIntermediateHandler(handler, event) {
  var mouseTop = event.pageY,
      ///
  mouseLeft = event.pageX,
      ///
  mouseButton = event.button,
      ///
  preventDefault = handler(mouseTop, mouseLeft, mouseButton);

  return preventDefault;
}

},{}],23:[function(require,module,exports){
'use strict';

function on(eventTypes, handler) {
  eventTypes = eventTypes.split(' '); ///

  eventTypes.forEach(function (eventType) {
    var addEventListener = this.addHandler(eventType, handler);

    if (addEventListener) {
      this.domElement.addEventListener(eventType, eventListener.bind(this));
    }
  }.bind(this));
}

function off(eventTypes, handler) {
  eventTypes = eventTypes.split(' '); ///

  eventTypes.forEach(function (eventType) {
    var removeEventListener = this.removeHandler(eventType, handler);

    if (removeEventListener) {
      this.domElement.removeEventListener(eventType, eventListener.bind(this));
    }
  }.bind(this));
}

function addHandler(eventType, handler) {
  var addEventListener = false,
      handlers = this.handlersMap[eventType];

  if (handlers === undefined) {
    handlers = [];

    this.handlersMap[eventType] = handlers;

    addEventListener = true;
  }

  handlers.push(handler);

  return addEventListener;
}

function removeHandler(eventType, handler) {
  var removeEventListener = false,
      handlers = this.handlersMap[eventType];

  if (handlers.length === 0) {
    delete this.handlersMap[eventType];

    removeEventListener = true;
  } else {
    var index = handlers.indexOf(handler);

    if (index > -1) {
      var deleteCount = 1;

      handlers.splice(index, deleteCount);
    }
  }

  return removeEventListener;
}

var eventMixin = {
  on: on,
  off: off,
  addHandler: addHandler,
  removeHandler: removeHandler
};

module.exports = eventMixin;

function eventListener(event) {
  var eventType = event.type,
      handlers = this.handlersMap[eventType];

  var preventEventDefault = false;

  handlers.forEach(function (handler) {
    if (handler.intermediateHandler !== undefined) {
      var preventDefault = handler.intermediateHandler(handler, event);

      if (preventDefault === true) {
        preventEventDefault = true;
      }
    } else {
      var _preventDefault = handler(event);

      if (_preventDefault === true) {
        preventEventDefault = true;
      }
    }
  });

  if (preventEventDefault) {
    event.preventDefault();
  }
}

},{}],24:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function applyProperties(properties) {
  this.properties = {};

  var names = Object.keys(properties);

  names.forEach(function (name) {
    if (name === 'childElements') {
      var childElements = properties['childElements'];

      childElements.forEach(function (childElement) {
        this.append(childElement);
      }.bind(this));
    } else {
      var value = properties[name];

      if (false) {} else if (isHandlerName(name)) {
        addHandler(this, name, value);
      } else if (isAttributeName(name)) {
        addAttribute(this, name, value);
      } else {
        this.properties[name] = value;
      }
    }
  }.bind(this));
}

var jsxMixin = {
  applyProperties: applyProperties
};

module.exports = jsxMixin;

function addHandler(element, name, value) {
  var eventType = name.substr(2).toLowerCase(),
      ///
  handler = value; ///

  element.on(eventType, handler);
}

function addAttribute(element, name, value) {
  if (name === 'className') {
    name = 'class';
  }

  if (name === 'htmlFor') {
    name = 'for';
  }

  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
    var keys = Object.keys(value);

    keys.forEach(function (key) {
      element.domElement[name][key] = value[key];
    }.bind(this));
  } else if (typeof value === 'boolean') {
    if (value) {
      value = name; ///

      element.addAttribute(name, value);
    }
  } else {
    element.addAttribute(name, value);
  }
}

function isHandlerName(name) {
  return name.match(/^on/);
}

function isAttributeName(name) {
  return attributeNames.includes(name);
}

var attributeNames = ['accept', 'acceptCharset', 'accessKey', 'action', 'allowFullScreen', 'allowTransparency', 'alt', 'async', 'autoComplete', 'autoFocus', 'autoPlay', 'capture', 'cellPadding', 'cellSpacing', 'challenge', 'charSet', 'checked', 'cite', 'classID', 'className', 'colSpan', 'cols', 'content', 'contentEditable', 'contextMenu', 'controls', 'coords', 'crossOrigin', 'data', 'dateTime', 'default', 'defer', 'dir', 'disabled', 'download', 'draggable', 'encType', 'form', 'formAction', 'formEncType', 'formMethod', 'formNoValidate', 'formTarget', 'frameBorder', 'headers', 'height', 'hidden', 'high', 'href', 'hrefLang', 'htmlFor', 'httpEquiv', 'icon', 'id', 'inputMode', 'integrity', 'is', 'keyParams', 'keyType', 'kind', 'label', 'lang', 'list', 'loop', 'low', 'manifest', 'marginHeight', 'marginWidth', 'max', 'maxLength', 'media', 'mediaGroup', 'method', 'min', 'minLength', 'multiple', 'muted', 'name', 'noValidate', 'nonce', 'open', 'optimum', 'pattern', 'placeholder', 'poster', 'preload', 'profile', 'radioGroup', 'readOnly', 'rel', 'required', 'reversed', 'role', 'rowSpan', 'rows', 'sandbox', 'scope', 'scoped', 'scrolling', 'seamless', 'selected', 'shape', 'size', 'sizes', 'span', 'spellCheck', 'src', 'srcDoc', 'srcLang', 'srcSet', 'start', 'step', 'style', 'summary', 'tabIndex', 'target', 'title', 'type', 'useMap', 'value', 'width', 'wmode', 'wrap'];

},{}],25:[function(require,module,exports){
'use strict';

function onMouseUp(handler) {
  if (handler.intermediateHandler === undefined) {
    handler.intermediateHandler = defaultIntermediateHandler;
  }

  this.on('mouseup', handler);
}

function onMouseDown(handler) {
  if (handler.intermediateHandler === undefined) {
    handler.intermediateHandler = defaultIntermediateHandler;
  }

  this.on('mousedown', handler);
}

function onMouseOver(handler) {
  if (handler.intermediateHandler === undefined) {
    handler.intermediateHandler = defaultIntermediateHandler;
  }

  this.on('mouseover', handler);
}

function onMouseOut(handler) {
  if (handler.intermediateHandler === undefined) {
    handler.intermediateHandler = defaultIntermediateHandler;
  }

  this.on('mouseout', handler);
}

function onMouseMove(handler) {
  if (handler.intermediateHandler === undefined) {
    handler.intermediateHandler = defaultIntermediateHandler;
  }

  this.on('mousemove', handler);
}

function offMouseUp(handler) {
  this.off('mouseup', handler);
}

function offMouseDown(handler) {
  this.off('mousedown', handler);
}

function offMouseOver(handler) {
  this.off('mouseover', handler);
}

function offMouseOut(handler) {
  this.off('mouseout', handler);
}

function offMouseMove(handler) {
  this.off('mousemove', handler);
}

var mouseMixin = {
  onMouseUp: onMouseUp,
  onMouseDown: onMouseDown,
  onMouseOver: onMouseOver,
  onMouseOut: onMouseOut,
  onMouseMove: onMouseMove,
  offMouseUp: offMouseUp,
  offMouseDown: offMouseDown,
  offMouseOver: offMouseOver,
  offMouseOut: offMouseOut,
  offMouseMove: offMouseMove
};

module.exports = mouseMixin;

function defaultIntermediateHandler(handler, event) {
  var mouseTop = event.pageY,
      ///
  mouseLeft = event.pageX,
      ///
  mouseButton = event.button,
      ///
  preventDefault = handler(mouseTop, mouseLeft, mouseButton);

  return preventDefault;
}

},{}],26:[function(require,module,exports){
'use strict';

function onResize(handler) {
  var eventType = 'resize',
      addEventListener = this.addHandler(eventType, handler);

  if (addEventListener) {
    appendResizeObject(this);
  }
}

function offResize(handler) {
  var eventType = 'resize',
      removeEventListener = this.removeHandler(eventType, handler);

  if (removeEventListener) {
    removeResizeObject(this);
  }
}

var resizeMixin = {
  onResize: onResize,
  offResize: offResize
};

module.exports = resizeMixin;

function appendResizeObject(element) {
  var resizeObject = document.createElement('object'),
      domElement = element.domElement,
      style = ' display: block; \n                  position: absolute; \n                  top: 0; \n                  left: 0; \n                  height: 100%; \n                  width: 100%; \n                  overflow: hidden; \n                  pointer-events: none; \n                  z-index: -1;';

  resizeObject.setAttribute('style', style);
  resizeObject.data = 'about:blank';
  resizeObject.type = 'text/html';

  element.__resizeObject__ = resizeObject;

  resizeObject.onload = function () {
    resizeObjectLoadHandler(element);
  };

  domElement.appendChild(resizeObject);
}

function removeResizeObject(element) {
  var domElement = element.domElement,
      resizeObject = element.__resizeObject__,
      objectWindow = resizeObject.contentDocument.defaultView; ///

  objectWindow.removeEventListener('resize', resizeListener);

  domElement.removeChild(resizeObject);
}

function resizeObjectLoadHandler(element) {
  var resizeObject = element.__resizeObject__,
      resizeObjectWindow = resizeObject.contentDocument.defaultView; ///

  resizeObjectWindow.addEventListener('resize', function () {
    eventListener(element);
  });
}

function eventListener(element) {
  var width = element.getWidth(),
      height = element.getHeight(),
      handlers = element.handlersMap['resize'];

  handlers.forEach(function (handler) {
    handler(width, height);
  });
}

},{}],27:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var eventMixin = require('./mixin/event'),
    clickMixin = require('./mixin/click'),
    mouseMixin = require('./mixin/mouse');

var Window = function () {
  function Window() {
    _classCallCheck(this, Window);

    this.domElement = window;

    this.handlersMap = {};
  }

  _createClass(Window, [{
    key: 'getWidth',
    value: function getWidth() {
      return this.domElement.innerWidth;
    } ///

  }, {
    key: 'getHeight',
    value: function getHeight() {
      return this.domElement.innerHeight;
    } ///

  }, {
    key: 'onResize',
    value: function onResize(handler) {
      var type = 'resize',
          addEventListener = this.addHandler(type, handler);

      if (addEventListener) {
        this.domElement.addEventListener(type, eventListener.bind(this));
      }
    }
  }, {
    key: 'offResize',
    value: function offResize(handler) {
      var type = 'resize',
          removeEventListener = this.removeHandler(type, handler);

      if (removeEventListener) {
        this.domElement.removeEventListener(type, eventListener.bind(this));
      }
    }
  }]);

  return Window;
}();

Object.assign(Window.prototype, eventMixin);
Object.assign(Window.prototype, clickMixin);
Object.assign(Window.prototype, mouseMixin);

module.exports = new Window(); ///

function eventListener(event) {
  var type = event.type,
      handlers = this.handlersMap[type],
      width = this.getWidth(),
      height = this.getHeight();

  handlers.forEach(function (handler) {
    handler(width, height);
  });
}

},{"./mixin/click":22,"./mixin/event":23,"./mixin/mouse":25}],28:[function(require,module,exports){
'use strict';

module.exports = require('./lib/fragmented');

},{"./lib/fragmented":29}],29:[function(require,module,exports){
'use strict';

Object.defineProperty(window, 'fragment', {
  get: function get() {
    var fragment = window.location.hash.substr(1),
        ///
    fragmentPrototype = Object.getPrototypeOf(fragment);

    fragmentPrototype.onChange = function (changeHandler) {
      window.addEventListener('hashchange', changeHandler);
    };

    fragmentPrototype.offChange = function (changeHandler) {
      window.removeEventListener('hashchange', changeHandler);
    };

    return fragment;
  },

  set: function set(fragment) {
    window.location.hash = fragment; ///
  }
});

},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJleGFtcGxlcy9pbmRleC5qcyIsImluZGV4LmpzIiwiZXM2L2VsZW1lbnQvaW50cm9kdWN0aW9uLmpzIiwiZXM2L2VsZW1lbnQvanN4SXNHcmVhdC5qcyIsImVzNi9leGFtcGxlcy5qcyIsImVzNi9yZWFjdC5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5dWkvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZWFzeXVpL2VzNi9kb2N1bWVudC5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5dWkvZXM2L2VsZW1lbnQuanMiLCJub2RlX21vZHVsZXMvZWFzeXVpL2VzNi9lbGVtZW50L2JvZHkuanMiLCJub2RlX21vZHVsZXMvZWFzeXVpL2VzNi9lbGVtZW50L2Rpdi5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5dWkvZXM2L2VsZW1lbnQvc3Bhbi5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5dWkvZXM2L2lucHV0RWxlbWVudC5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5dWkvZXM2L2lucHV0RWxlbWVudC9idXR0b24uanMiLCJub2RlX21vZHVsZXMvZWFzeXVpL2VzNi9pbnB1dEVsZW1lbnQvY2hlY2tib3guanMiLCJub2RlX21vZHVsZXMvZWFzeXVpL2VzNi9pbnB1dEVsZW1lbnQvaW5wdXQuanMiLCJub2RlX21vZHVsZXMvZWFzeXVpL2VzNi9pbnB1dEVsZW1lbnQvbGluay5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5dWkvZXM2L2lucHV0RWxlbWVudC9zZWxlY3QuanMiLCJub2RlX21vZHVsZXMvZWFzeXVpL2VzNi9pbnB1dEVsZW1lbnQvdGV4dGFyZWEuanMiLCJub2RlX21vZHVsZXMvZWFzeXVpL2VzNi9taXNjL2JvdW5kcy5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5dWkvZXM2L21pc2Mvb2Zmc2V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc3l1aS9lczYvbWl4aW4vY2xpY2suanMiLCJub2RlX21vZHVsZXMvZWFzeXVpL2VzNi9taXhpbi9ldmVudC5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5dWkvZXM2L21peGluL2pzeC5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5dWkvZXM2L21peGluL21vdXNlLmpzIiwibm9kZV9tb2R1bGVzL2Vhc3l1aS9lczYvbWl4aW4vcmVzaXplLmpzIiwibm9kZV9tb2R1bGVzL2Vhc3l1aS9lczYvd2luZG93LmpzIiwibm9kZV9tb2R1bGVzL2ZyYWdtZW50ZWQvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZnJhZ21lbnRlZC9lczYvZnJhZ21lbnRlZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBOztBQUVBLFFBQVEsZ0JBQVIsRSxDQUEyQjs7QUFFM0IsSUFBTSxlQUFlLFNBQWYsWUFBZSxHQUFNO0FBQ3pCLFNBRUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFFBQU0sV0FBVSxZQUFoQjtBQUFBO0FBQUEsS0FERjtBQWVFO0FBQUE7QUFBQTtBQUFBO0FBQ2tDO0FBQUE7QUFBQSxVQUFHLE1BQUsseURBQVI7QUFBQTtBQUFBLE9BRGxDO0FBQUE7QUFDaUg7QUFBQTtBQUFBLFVBQUcsTUFBSyxtQ0FBUjtBQUFBO0FBQUEsT0FEakg7QUFBQTtBQUFBLEtBZkY7QUFtQkU7QUFBQTtBQUFBO0FBQUE7QUFDMkc7QUFBQTtBQUFBLFVBQU0sV0FBVSxRQUFoQjtBQUFBO0FBQUEsT0FEM0c7QUFBQTtBQUV1QztBQUFBO0FBQUEsVUFBRyxNQUFLLGdFQUFSO0FBQUE7QUFBQSxPQUZ2QztBQUFBO0FBR2M7QUFBQTtBQUFBLFVBQUcsTUFBSyxnRUFBUjtBQUFBO0FBQUEsT0FIZDtBQUFBO0FBR2lIO0FBQUE7QUFBQSxVQUFNLFdBQVUsUUFBaEI7QUFBQTtBQUFBLE9BSGpIO0FBQUE7QUFBQSxLQW5CRjtBQXdCRTtBQUFBO0FBQUEsUUFBRyxXQUFVLFdBQWI7QUFDRTtBQUFBO0FBQUEsVUFBRyxNQUFLLGFBQVIsRUFBc0Is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Q0hBOztBQUVBLE9BQU8sY0FBUCxDQUFzQixNQUF0QixFQUE4QixVQUE5QixFQUEwQztBQUN4QyxPQUFLLGVBQVk7QUFDZixRQUFNLFdBQVcsT0FBTyxRQUFQLENBQWdCLElBQWhCLENBQXFCLE1BQXJCLENBQTRCLENBQTVCLENBQWpCO0FBQUEsUUFBa0Q7QUFDNUMsd0JBQW9CLE9BQU8sY0FBUCxDQUFzQixRQUF0QixDQUQxQjs7QUFHQSxzQkFBa0IsUUFBbEIsR0FBNkIsVUFBUyxhQUFULEVBQXdCO0FBQ25ELGFBQU8sZ0JBQVAsQ0FBd0IsWUFBeEIsRUFBc0MsYUFBdEM7QUFDRCxLQUZEOztBQUlBLHNCQUFrQixTQUFsQixHQUE4QixVQUFTLGFBQVQsRUFBd0I7QUFDcEQsYUFBTyxtQkFBUCxDQUEyQixZQUEzQixFQUF5QyxhQUF6QztBQUNELEtBRkQ7O0FBSUEsV0FBTyxRQUFQO0FBQ0QsR0FkdUM7O0FBZ0J4QyxPQUFLLGFBQVUsUUFBVixFQUFvQjtBQUN2QixXQUFPLFFBQVAsQ0FBZ0IsSUFBaEIsR0FBdUIsUUFBdkIsQ0FEdUIsQ0FDVztBQUNuQztBQWxCdUMsQ0FBMUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL2xpYi9leGFtcGxlcy5qcycpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCcuL2xpYi9yZWFjdCcpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCcuLi8uLi9pbmRleC5qcycpOyAvLy8gZWFzeXVpLWpzeFxuXG5jb25zdCBJbnRyb2R1Y3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiAoXG5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxjb2RlIGNsYXNzTmFtZT1cImZsb2F0UmlnaHRcIj57YHJlcXVpcmUoJ2Vhc3l1aS1qc3gnKTtcblxuY29uc3QgZWFzeXVpID0gcmVxdWlyZSgnZWFzeXVpJyksXG4gICAgICB7IEJvZHkgfSA9IGVhc3l1aTtcblxuY29uc3QgYm9keSA9IG5ldyBCb2R5KCk7XG5cbmJvZHkuYXBwZW5kKFxuXG4gIDxkaXYgY2xhc3NOYW1lPVwiZXhhbXBsZVwiPlxuICAgIEFuIGVhc3kgZXhhbXBsZS5cbiAgPC9kaXY+XG5cbik7YH08L2NvZGU+XG4gICAgICA8cD5cbiAgICAgICAgVGhlc2UgcGFnZXMgc2hvd2Nhc2UgdGhlIHVzZSBvZiA8YSBocmVmPVwiaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvZG9jcy9qc3gtaW4tZGVwdGguaHRtbFwiPkpTWDwvYT4gd2l0aCA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2RqYWxiYXQvRWFzeVVJXCI+RWFzeVVJPC9hPi5cbiAgICAgICAgSXQgaXMgZWFzeSB0byBjb21iaW5lIHRoZXNlIHR3byB0ZWNobm9sb2dpZXMgaW4gcHJhY3RpY2UsIGFzIHRoZSBleGFtcGxlIHNob3dzLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIEl0IGFsc28gdHVybmVkIG91dCBub3QgdG8gYmUgdmVyeSBkaWZmaWN1bHQgdG8gaW1wbGVtZW50IHRoaXMgY29tYmluYXRpb24uIEpTWCB0cmFuc3BpbGVzIGludG8gYSBjYWxsIHRvIDxjb2RlIGNsYXNzTmFtZT1cImlubGluZVwiPlJlYWN0LmNyZWF0ZUNsYXNzKC4uLik8L2NvZGU+IGFuZFxuICAgICAgICBzbyBhbGwgdGhhdCBuZWVkZWQgdG8gYmUgZG9uZSB3YXMgdG8gPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9kamFsYmF0L0Vhc3lVSS1KU1gvYmxvYi9tYXN0ZXIvZXM2L3JlYWN0LmpzXCI+aW1wbGVtZW50IHRoYXQ8L2E+LFxuICAgICAgICBhbmQgdGhlbiB0byA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2RqYWxiYXQvRWFzeVVJL2Jsb2IvbWFzdGVyL2VzNi9taXhpbi9qc3guanNcIj5hdWdtZW50PC9hPiBFYXN5VUkncyBiYXNlIDxjb2RlIGNsYXNzTmFtZT1cImlubGluZVwiPkVsZW1lbnQ8L2NvZGU+IGNsYXNzIGluIG9yZGVyIHRvIGVuYWJsZSBlbGVtZW50cyB0byBhcHBseSB0aGUgcHJvcGVydGllcyB0aGV5IHdlcmUgcGFzc2VkLlxuICAgICAgPC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPVwiY2xlYXJCb3RoXCI+XG4gICAgICAgIDxhIGhyZWY9XCIjanN4SXNHcmVhdFwiIGNsYXNzTmFtZT1cImZsb2F0UmlnaHRcIj5OZXh0OiBKU1ggaXMgZ3JlYXQ8L2E+XG4gICAgICA8L3A+XG4gICAgPC9zZWN0aW9uPlxuICAgICAgXG4gICk7ICBcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSW50cm9kdWN0aW9uO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCcuLi8uLi9pbmRleC5qcycpOyAvLy8gZWFzeXVpLWpzeFxuXG5jb25zdCBKU1hJc0dyZWF0ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuXG4gICAgPHNlY3Rpb24+XG4gICAgICA8cD5cbiAgICAgICAgSlNYIGlzIGdyZWF0IGJlY2F1c2UgaXQgYWxsb3dzIHlvdSB0byBkbyB0aHJlZSBjcnVjaWFsIHRoaW5nczpcbiAgICAgIDwvcD5cbiAgICAgIDxvbD5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxzdHJvbmc+QXNzb2NpYXRlIHRoZSBjb2RlIHRoYXQgZGVmaW5lcyB0aGUgdmlldyBkaXJlY3RseSB3aXRoIHRoZSBjb2RlIHRoYXQgZGVmaW5lcyB0aGUgbW9kZWw8L3N0cm9uZz4uXG4gICAgICAgICAgVGhpcyBpcyBtdWNoIGJldHRlciB0aGFuIGhhdmluZyBhIHZpZXcgY2xhc3MgYW5kIGEgbW9kZWwgY2xhc3MgYW5kIGhhdmluZyBvbmUgaW5oZXJpdCBmcm9tIHRoZSBvdGhlciwgc2F5LlxuICAgICAgICAgIEpTWCBhbGxvd3MgeW91IHRvIGlubGluZSB0aGUgdmlldyBjb2RlLCBzbyB0byBzcGVhaywgYW5kIGxpbmsgaXQgdG8gdGhlIHN1cnJvdW5kaW5nIG1vZGVsIGNvZGUgaW4gYSBzdHJhaWdodGZvcndhcmQgbWFubmVyLlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPHN0cm9uZz5CdWlsZCB1cCB0aGUgYXBwbGljYXRpb24ncyB2aWV3IGluIGEgZGVjbGFyYXRpdmUgd2F5PC9zdHJvbmc+LlxuICAgICAgICAgIFRoZSBtb3N0IGxpa2VseSBhbmQgb2Z0ZW4gdGhlIG9ubHkgcmVsYXRpb24gYmV0d2VlbiB2aWV3IGVsZW1lbnRzIGlzIGluY2x1c2lvbi5cbiAgICAgICAgICBUaGlzIHJlc3VsdHMgaW4gYSB0cmVlLCBhbmQgSlNYIGVuY29kZXMgdHJlZXMuXG4gICAgICAgICAgVGhpcyB3b24ndCBhbHdheXMgd29yaywgY29uc2lkZXIgYXJjYWRlIGdhbWVzLlxuICAgICAgICAgIEJ1dCBpdCB3b3JrcyBmb3IgYXBwbGljYXRpb25zIHdpdGggZXZlbnQgZHJpdmVuIHVzZXIgaW50ZXJmYWNlcyBhbmQgdGhpcyBpbmNsdWRlcyBuZWFybHkgYWxsIHdlYiBhcHBsaWNhdGlvbnMuXG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8c3Ryb25nPkNyZWF0ZSB2aWV3IGVsZW1lbnRzIGVhc2lseSB3aXRob3V0IHRoZSBuZWVkIGZvciBjb25zdHJ1Y3RvcnMgb3IgZmFjdG9yeSBtZXRob2RzPC9zdHJvbmc+LlxuICAgICAgICAgIFNvIHRoZXJlIGlzIGxlc3MgY29kZSBhbmQgd2hhdCB0aGVyZSBpcyBsaWtlbHkgdG8gYmUgbW9yZSByZWFkYWJsZSBhbmQgbWFpbnRhaW5hYmxlLlxuICAgICAgICAgIEpTWCBhbHNvIGVuY291cmFnZXMgY29tcG9zaXRpb24gYW5kIHJldXNlLlxuICAgICAgICA8L2xpPlxuICAgICAgPC9vbD5cbiAgICAgIDxwPlxuICAgICAgICBBbHNvIEpTWCBqdXN0IGVtYmVkcyB3ZWxsIGludG8gSmF2YVNjcmlwdC5cbiAgICAgICAgQ29tcGFyZSB0aGlzIHdpdGggdGhpbmdzIHN1Y2ggYXMgSlNQLCB3aGljaCBlbWJlZCBpbXBlcmF0aXZlIGxhbmd1YWdlcyBpbiBkZWNsYXJhdGl2ZSBvbmVzLlxuICAgICAgICBGb3Igc2V2ZXJhbCByZWFzb25zIHRoaXMgY2FuIGJlIG5pZ2h0bWFyaXNoLlxuICAgICAgICBCdXQgdGhlIG90aGVyIHdheSByb3VuZCBoYXBwZW5zIHRvIHdvcmsgcmVhbGx5IHdlbGwuXG4gICAgICA8L3A+XG4gICAgPC9zZWN0aW9uPlxuICAgICAgXG4gICk7ICBcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSlNYSXNHcmVhdDtcbiIsIid1c2Ugc3RyaWN0JztcblxucmVxdWlyZSgnLi4vaW5kZXguanMnKTsgLy8vIGVhc3l1aS1qc3hcblxucmVxdWlyZSgnZnJhZ21lbnRlZCcpO1xuXG5jb25zdCBlYXN5dWkgPSByZXF1aXJlKCdlYXN5dWknKSxcbiAgICAgIHsgRWxlbWVudCB9ID0gZWFzeXVpO1xuXG5jb25zdCBKU1hJc0dyZWF0ID0gcmVxdWlyZSgnLi9lbGVtZW50L2pzeElzR3JlYXQnKSxcbiAgICAgIEludHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vZWxlbWVudC9pbnRyb2R1Y3Rpb24nKTtcblxuY29uc3QgaW50cm9kdWN0aW9uID0gPEludHJvZHVjdGlvbiAvPixcbiAgICAgIGpzeElzR3JlYXQgPSA8SlNYSXNHcmVhdCAvPixcbiAgICAgIGZyYWdtZW50VG9TZWN0aW9uTWFwID0ge1xuICAgICAgICBpbnRyb2R1Y3Rpb246IGludHJvZHVjdGlvbixcbiAgICAgICAganN4SXNHcmVhdDoganN4SXNHcmVhdFxuICAgICAgfTtcblxuY29uc3QgZXhhbXBsZXMgPSAoKSA9PiB7XG4gIGluc2VydFNlY3Rpb25zKCk7XG5cbiAgZnJhZ21lbnQub25DaGFuZ2Uoc2hvd1NlY3Rpb24pO1xuXG4gIHNob3dTZWN0aW9uKCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4YW1wbGVzO1xuXG5jb25zdCBpbnNlcnRTZWN0aW9ucyA9ICgpID0+IHtcbiAgY29uc3QgaGVhZGVyRE9NRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpLFxuICAgICAgICBoZWFkZXIgPSBFbGVtZW50LmZyb21ET01FbGVtZW50KGhlYWRlckRPTUVsZW1lbnQpO1xuXG4gIGZvckVhY2hTZWN0aW9uKChzZWN0aW9uKSA9PiB7XG4gICAgc2VjdGlvbi5pbnNlcnRBZnRlcihoZWFkZXIpO1xuICB9KTtcbn07XG5cbmNvbnN0IHNob3dTZWN0aW9uID0gKCkgPT4ge1xuICBmb3JFYWNoU2VjdGlvbigoc2VjdGlvbikgPT4ge1xuICAgIHNlY3Rpb24uaGlkZSgpO1xuICB9KTtcblxuICBjb25zdCBzZWN0aW9uID0gZnJhZ21lbnRUb1NlY3Rpb25NYXBbZnJhZ21lbnRdIHx8IGludHJvZHVjdGlvbjtcblxuICBzZWN0aW9uLnNob3coKTtcbn07XG5cbmNvbnN0IGZvckVhY2hTZWN0aW9uID0gKGNhbGxiYWNrKSA9PiB7XG4gIGNvbnN0IGZyYWdtZW50cyA9IE9iamVjdC5rZXlzKGZyYWdtZW50VG9TZWN0aW9uTWFwKTtcblxuICBmcmFnbWVudHMuZm9yRWFjaCgoZnJhZ21lbnQpID0+IHtcbiAgICBjb25zdCBzZWN0aW9uID0gZnJhZ21lbnRUb1NlY3Rpb25NYXBbZnJhZ21lbnRdO1xuXG4gICAgY2FsbGJhY2soc2VjdGlvbik7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeXVpID0gcmVxdWlyZSgnZWFzeXVpJyksXG4gICAgICB7IEVsZW1lbnQgfSA9IGVhc3l1aTtcblxuY2xhc3MgUmVhY3Qge1xuICBzdGF0aWMgY3JlYXRlRWxlbWVudChmaXJzdEFyZ3VtZW50LCBwcm9wZXJ0aWVzLCAuLi5jaGlsZEVsZW1lbnRzKSB7XG4gICAgbGV0IGVsZW1lbnQgPSBudWxsO1xuXG4gICAgaWYgKGZpcnN0QXJndW1lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY2hpbGRFbGVtZW50cyA9IGZsYXR0ZW5DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpO1xuXG4gICAgICBwcm9wZXJ0aWVzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIGNoaWxkRWxlbWVudHM6IGNoaWxkRWxlbWVudHNcbiAgICAgIH0sIHByb3BlcnRpZXMpO1xuXG4gICAgICBpZiAoZmFsc2UpIHtcblxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29uc3QgdGFnTmFtZSA9IGZpcnN0QXJndW1lbnQ7ICAvLy9cblxuICAgICAgICBlbGVtZW50ID0gRWxlbWVudC5mcm9tUHJvcGVydGllc0FuZFRhZ05hbWUoRWxlbWVudCwgcHJvcGVydGllcywgdGFnTmFtZSlcbiAgICAgIH0gZWxzZSBpZiAoaXNUeXBlT2YoZmlyc3RBcmd1bWVudCwgRWxlbWVudCkpIHtcbiAgICAgICAgY29uc3QgQ2xhc3MgPSBmaXJzdEFyZ3VtZW50OyAgLy8vXG5cbiAgICAgICAgZWxlbWVudCA9IENsYXNzLmZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpO1xuICAgICAgfSBlbHNlIGlmIChmaXJzdEFyZ3VtZW50LnByb3RvdHlwZS5yZW5kZXIpIHtcbiAgICAgICAgY29uc3QgQ2xhc3MgPSBmaXJzdEFyZ3VtZW50LCAgLy8vXG4gICAgICAgICAgICAgIGluc3RhbmNlID0gbmV3IENsYXNzKHByb3BlcnRpZXMpO1xuXG4gICAgICAgIGVsZW1lbnQgPSBpbnN0YW5jZS5yZW5kZXIoKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudEZ1bmN0aW9uID0gZmlyc3RBcmd1bWVudDsgIC8vL1xuXG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50RnVuY3Rpb24ocHJvcGVydGllcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdywgJ1JlYWN0Jywge1xuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBSZWFjdDtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cbmZ1bmN0aW9uIGZsYXR0ZW5DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpIHtcbiAgY2hpbGRFbGVtZW50cyA9IGNoaWxkRWxlbWVudHMucmVkdWNlKGZ1bmN0aW9uKGNoaWxkRWxlbWVudHMsIGNoaWxkRWxlbWVudCkgeyAgLy8vXG4gICAgY2hpbGRFbGVtZW50cyA9IGNoaWxkRWxlbWVudHMuY29uY2F0KGNoaWxkRWxlbWVudCk7XG5cbiAgICByZXR1cm4gY2hpbGRFbGVtZW50cztcbiAgfSwgW10pO1xuXG4gIHJldHVybiBjaGlsZEVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiBpc1R5cGVPZihhcmd1bWVudCwgQ2xhc3MpIHtcbiAgbGV0IHR5cGVPZiA9IGZhbHNlO1xuXG4gIGlmIChhcmd1bWVudCA9PT0gQ2xhc3MpIHsgLy8vXG4gICAgdHlwZU9mID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBhcmd1bWVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihhcmd1bWVudCk7IC8vL1xuXG4gICAgaWYgKGFyZ3VtZW50KSB7XG4gICAgICB0eXBlT2YgPSBpc1R5cGVPZihhcmd1bWVudCwgQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0eXBlT2Y7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBCb3VuZHM6IHJlcXVpcmUoJy4vbGliL21pc2MvYm91bmRzJyksXG4gIE9mZnNldDogcmVxdWlyZSgnLi9saWIvbWlzYy9vZmZzZXQnKSxcbiAgRWxlbWVudDogcmVxdWlyZSgnLi9saWIvZWxlbWVudCcpLFxuICBJbnB1dEVsZW1lbnQ6IHJlcXVpcmUoJy4vbGliL2lucHV0RWxlbWVudCcpLFxuICBkb2N1bWVudDogcmVxdWlyZSgnLi9saWIvZG9jdW1lbnQnKSxcbiAgd2luZG93OiByZXF1aXJlKCcuL2xpYi93aW5kb3cnKSxcbiAgRGl2OiByZXF1aXJlKCcuL2xpYi9lbGVtZW50L2RpdicpLFxuICBTcGFuOiByZXF1aXJlKCcuL2xpYi9lbGVtZW50L3NwYW4nKSxcbiAgQm9keTogcmVxdWlyZSgnLi9saWIvZWxlbWVudC9ib2R5JyksXG4gIExpbms6IHJlcXVpcmUoJy4vbGliL2lucHV0RWxlbWVudC9saW5rJyksXG4gIElucHV0OiByZXF1aXJlKCcuL2xpYi9pbnB1dEVsZW1lbnQvaW5wdXQnKSxcbiAgU2VsZWN0OiByZXF1aXJlKCcuL2xpYi9pbnB1dEVsZW1lbnQvc2VsZWN0JyksXG4gIEJ1dHRvbjogcmVxdWlyZSgnLi9saWIvaW5wdXRFbGVtZW50L2J1dHRvbicpLFxuICBDaGVja2JveDogcmVxdWlyZSgnLi9saWIvaW5wdXRFbGVtZW50L2NoZWNrYm94JyksXG4gIFRleHRhcmVhOiByZXF1aXJlKCcuL2xpYi9pbnB1dEVsZW1lbnQvdGV4dGFyZWEnKVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZXZlbnRNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vZXZlbnQnKSxcbiAgICAgIGNsaWNrTWl4aW4gPSByZXF1aXJlKCcuL21peGluL2NsaWNrJyksXG4gICAgICBtb3VzZU1peGluID0gcmVxdWlyZSgnLi9taXhpbi9tb3VzZScpO1xuXG5jbGFzcyBEb2N1bWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvY3VtZW50O1xuXG4gICAgdGhpcy5oYW5kbGVyc01hcCA9IHt9O1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oRG9jdW1lbnQucHJvdG90eXBlLCBldmVudE1peGluKTtcbk9iamVjdC5hc3NpZ24oRG9jdW1lbnQucHJvdG90eXBlLCBjbGlja01peGluKTtcbk9iamVjdC5hc3NpZ24oRG9jdW1lbnQucHJvdG90eXBlLCBtb3VzZU1peGluKTtcblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgRG9jdW1lbnQoKTsgIC8vL1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBPZmZzZXQgPSByZXF1aXJlKCcuL21pc2Mvb2Zmc2V0JyksXG4gICAgICBCb3VuZHMgPSByZXF1aXJlKCcuL21pc2MvYm91bmRzJyksXG4gICAgICBqc3hNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vanN4JyksXG4gICAgICBldmVudE1peGluID0gcmVxdWlyZSgnLi9taXhpbi9ldmVudCcpLFxuICAgICAgY2xpY2tNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vY2xpY2snKSxcbiAgICAgIG1vdXNlTWl4aW4gPSByZXF1aXJlKCcuL21peGluL21vdXNlJyksXG4gICAgICByZXNpemVNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vcmVzaXplJyk7XG5cbmNsYXNzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvcikge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnRGcm9tU2VsZWN0b3Ioc2VsZWN0b3IpO1xuXG4gICAgdGhpcy5kb21FbGVtZW50Ll9fZWxlbWVudF9fID0gdGhpcztcbiAgICBcbiAgICB0aGlzLmhhbmRsZXJzTWFwID0ge307XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIEVsZW1lbnQuY2xvbmUodGhpcyk7IH1cblxuICBnZXRPZmZzZXQoKSB7XG4gICAgY29uc3QgdG9wID0gdGhpcy5kb21FbGVtZW50Lm9mZnNldFRvcCwgIC8vL1xuICAgICAgICAgIGxlZnQgPSB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0TGVmdCwgIC8vL1xuICAgICAgICAgIG9mZnNldCA9IG5ldyBPZmZzZXQodG9wLCBsZWZ0KTtcblxuICAgIHJldHVybiBvZmZzZXQ7XG4gIH1cblxuICBnZXRCb3VuZHMoaW5jbHVkZUJvcmRlciA9IGZhbHNlKSB7XG4gICAgY29uc3QgYm91bmRpbmdDbGllbnRSZWN0ID0gdGhpcy5kb21FbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgIGJvdW5kcyA9IEJvdW5kcy5mcm9tQm91bmRpbmdDbGllbnRSZWN0KGJvdW5kaW5nQ2xpZW50UmVjdCk7XG5cbiAgICByZXR1cm4gYm91bmRzO1xuICB9XG5cbiAgZ2V0V2lkdGgoaW5jbHVkZUJvcmRlciA9IGZhbHNlKSB7XG4gICAgY29uc3Qgd2lkdGggID0gaW5jbHVkZUJvcmRlciA/XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0V2lkdGggOlxuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQuY2xpZW50V2lkdGg7XG5cbiAgICByZXR1cm4gd2lkdGg7XG4gIH1cblxuICBzZXRXaWR0aCh3aWR0aCkgeyB0aGlzLmRvbUVsZW1lbnQuc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGA7IH1cblxuICBnZXRIZWlnaHQoaW5jbHVkZUJvcmRlciA9IGZhbHNlKSB7XG4gICAgY29uc3QgaGVpZ2h0ICA9IGluY2x1ZGVCb3JkZXIgP1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5vZmZzZXRIZWlnaHQgOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50LmNsaWVudEhlaWdodDtcblxuICAgIHJldHVybiBoZWlnaHQ7XG4gIH1cblxuICBzZXRIZWlnaHQoaGVpZ2h0KSB7IHRoaXMuZG9tRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgOyB9XG5cbiAgZ2V0QXR0cmlidXRlKG5hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBzZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7IH1cblxuICBjbGVhckF0dHJpYnV0ZShuYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBhZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgdGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpOyB9XG5cbiAgcmVtb3ZlQXR0cmlidXRlKG5hbWUpIHsgdGhpcy5jbGVhckF0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIHNldENsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lOyB9XG5cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7IH1cblxuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTsgfVxuXG4gIHRvZ2dsZUNsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpOyB9XG5cbiAgaGFzQ2xhc3MoY2xhc3NOYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7IH1cblxuICBjbGVhckNsYXNzZXMoKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc05hbWUgPSAnJzsgfVxuXG4gIHByZXBlbmQoZWxlbWVudE9yU3RyaW5nKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGRvbUVsZW1lbnRGcm9tRWxlbWVudE9yU3RyaW5nKGVsZW1lbnRPclN0cmluZyksXG4gICAgICAgICAgZmlyc3RDaGlsZERPTUVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQuZmlyc3RDaGlsZDtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5pbnNlcnRCZWZvcmUoZG9tRWxlbWVudCwgZmlyc3RDaGlsZERPTUVsZW1lbnQpO1xuICB9XG4gIFxuICBhcHBlbmQoZWxlbWVudE9yU3RyaW5nKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGRvbUVsZW1lbnRGcm9tRWxlbWVudE9yU3RyaW5nKGVsZW1lbnRPclN0cmluZyk7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRvbUVsZW1lbnQsIG51bGwpOyAvLy9cbiAgfVxuXG4gIGFwcGVuZFRvKHBhcmVudEVsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01FbGVtZW50ID0gcGFyZW50RWxlbWVudC5kb21FbGVtZW50LFxuICAgICAgICAgIGZpcnN0U2libGluZ0RPTUVsZW1lbnQgPSBwYXJlbnRET01FbGVtZW50LmZpcnN0Q2hpbGQ7IC8vL1xuXG4gICAgcGFyZW50RE9NRWxlbWVudC5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBmaXJzdFNpYmxpbmdET01FbGVtZW50KTtcbiAgfVxuXG4gIHByZXBlbmRUbyhwYXJlbnRFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NRWxlbWVudCA9IHBhcmVudEVsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHBhcmVudERPTUVsZW1lbnQuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgbnVsbCk7IC8vL1xuICB9XG5cbiAgcmVtb3ZlRnJvbShwYXJlbnRFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NRWxlbWVudCA9IHBhcmVudEVsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHBhcmVudERPTUVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5kb21FbGVtZW50KTtcbiAgfVxuXG4gIHJlbW92ZShlbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVDaGlsZChkb21FbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGluc2VydEJlZm9yZShzaWJsaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgcGFyZW50RE9NTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCk7XG4gIH1cblxuICBpbnNlcnRBZnRlcihzaWJsaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgcGFyZW50RE9NTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudC5uZXh0U2libGluZyk7ICAvLy9cbiAgfVxuXG4gIHNob3coZGlzcGxheVN0eWxlID0gJ2Jsb2NrJykgeyB0aGlzLmRvbUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IGRpc3BsYXlTdHlsZTsgfVxuXG4gIGhpZGUoKSB7IHRoaXMuZG9tRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyB9XG5cbiAgZW5hYmxlKCkgeyB0aGlzLmNsZWFyQXR0cmlidXRlKCdkaXNhYmxlZCcpOyB9XG5cbiAgZGlzYWJsZSgpIHsgdGhpcy5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7IH1cblxuICBodG1sKGh0bWwpIHtcbiAgICBpZiAoaHRtbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBodG1sID0gdGhpcy5kb21FbGVtZW50LmlubmVySFRNTDsgLy8vXG5cbiAgICAgIHJldHVybiBodG1sO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpbm5lckhUTUwgPSBodG1sOyAvLy9cblxuICAgICAgdGhpcy5kb21FbGVtZW50LmlubmVySFRNTCA9IGlubmVySFRNTFxuICAgIH1cbiAgfVxuXG4gIGNzcyhjc3MpIHtcbiAgICBpZiAoY3NzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZG9tRWxlbWVudCksXG4gICAgICAgICAgICBjc3MgPSB7fTtcblxuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvbXB1dGVkU3R5bGUubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBjb21wdXRlZFN0eWxlWzBdLCAgLy8vXG4gICAgICAgICAgICAgIHZhbHVlID0gY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpOyAvLy9cblxuICAgICAgICBjc3NbbmFtZV0gPSB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNzcztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjc3MgPT09ICdzdHJpbmcnKSB7XG4gICAgICBsZXQgbmFtZSA9IGNzczsgLy8vXG5cbiAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZG9tRWxlbWVudCksXG4gICAgICAgICAgICB2YWx1ZSA9IGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTsgLy8vXG5cbiAgICAgIGNzcyA9IHZhbHVlOyAgLy8vXG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXMoY3NzKTsgLy8vXG5cbiAgICAgIG5hbWVzLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGNzc1tuYW1lXTtcblxuICAgICAgICB0aGlzLmRvbUVsZW1lbnQuc3R5bGVbbmFtZV0gPSB2YWx1ZTtcbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0RGVzY2VuZGFudEVsZW1lbnRzKHNlbGVjdG9yID0gJyonKSB7XG4gICAgY29uc3QgZGVzY2VuZGFudERPTUVsZW1lbnRzID0gdGhpcy5kb21FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpLFxuICAgICAgICAgIGRlc2NlbmRhbnRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGRlc2NlbmRhbnRET01FbGVtZW50cyk7XG5cbiAgICByZXR1cm4gZGVzY2VuZGFudEVsZW1lbnRzO1xuICB9XG5cbiAgZ2V0Q2hpbGRFbGVtZW50cyhzZWxlY3RvciA9ICcqJykge1xuICAgIGNvbnN0IGRlc2NlbmRhbnRET01FbGVtZW50cyA9IHRoaXMuZG9tRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSxcbiAgICAgICAgICBhbGxDaGlsZERPTUVsZW1lbnRzID0gdGhpcy5kb21FbGVtZW50LmNoaWxkcmVuLFxuICAgICAgICAgIGNoaWxkRE9NRWxlbWVudHMgPSBmaWx0ZXIoYWxsQ2hpbGRET01FbGVtZW50cywgZnVuY3Rpb24oY2hpbGRET01FbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gc29tZShkZXNjZW5kYW50RE9NRWxlbWVudHMsIGZ1bmN0aW9uKGRlc2NlbmRhbnRET01FbGVtZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiAoZGVzY2VuZGFudERPTUVsZW1lbnQgPT09IGNoaWxkRE9NRWxlbWVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoY2hpbGRET01FbGVtZW50cyk7XG5cbiAgICByZXR1cm4gY2hpbGRFbGVtZW50cztcbiAgfVxuXG4gIGdldFBhcmVudEVsZW1lbnQoc2VsZWN0b3IgPSAnKicpIHtcbiAgICBsZXQgcGFyZW50RWxlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBwYXJlbnRET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cbiAgICBpZiAocGFyZW50RE9NRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgaWYgKHBhcmVudERPTUVsZW1lbnQubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgY29uc3QgcGFyZW50RE9NRWxlbWVudHMgPSBbcGFyZW50RE9NRWxlbWVudF0sXG4gICAgICAgICAgICAgIHBhcmVudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMocGFyZW50RE9NRWxlbWVudHMpLFxuICAgICAgICAgICAgICBmaXJzdFBhcmVudEVsZW1lbnQgPSBmaXJzdChwYXJlbnRFbGVtZW50cyk7XG5cbiAgICAgICAgcGFyZW50RWxlbWVudCA9IGZpcnN0UGFyZW50RWxlbWVudCB8fCBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnRFbGVtZW50O1xuICB9XG5cbiAgZ2V0QXNjZW5kYW50RWxlbWVudHMoc2VsZWN0b3IgPSAnKicpIHtcbiAgICBjb25zdCBhc2NlbmRhbnRET01FbGVtZW50cyA9IFtdLFxuICAgICAgICAgIHBhcmVudERPTUVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQucGFyZW50RWxlbWVudDtcblxuICAgIGxldCBhc2NlbmRhbnRET01FbGVtZW50ID0gcGFyZW50RE9NRWxlbWVudDsgIC8vL1xuICAgIHdoaWxlIChhc2NlbmRhbnRET01FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBpZiAoYXNjZW5kYW50RE9NRWxlbWVudC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICBhc2NlbmRhbnRET01FbGVtZW50cy5wdXNoKGFzY2VuZGFudERPTUVsZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICBhc2NlbmRhbnRET01FbGVtZW50ID0gYXNjZW5kYW50RE9NRWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgIH1cblxuICAgIGNvbnN0IGFzY2VuZGFudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoYXNjZW5kYW50RE9NRWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGFzY2VuZGFudEVsZW1lbnRzO1xuICB9XG5cbiAgc3RhdGljIGNsb25lKENsYXNzLCBlbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAoQ2xhc3MgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgICBlbGVtZW50ID0gQ2xhc3M7XG4gICAgICByZW1haW5pbmdBcmd1bWVudHMuc2hpZnQoKTtcbiAgICAgIENsYXNzID0gRWxlbWVudDtcbiAgICB9XG5cbiAgICBjb25zdCBkZWVwID0gdHJ1ZSxcbiAgICAgICAgICBkb21FbGVtZW50ID0gZWxlbWVudC5kb21FbGVtZW50LmNsb25lTm9kZShkZWVwKTtcblxuICAgIHJlbWFpbmluZ0FyZ3VtZW50cy51bnNoaWZ0KGRvbUVsZW1lbnQpO1xuICAgIHJlbWFpbmluZ0FyZ3VtZW50cy51bnNoaWZ0KG51bGwpO1xuXG4gICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoQ2xhc3MsIHJlbWFpbmluZ0FyZ3VtZW50cykpO1xuICB9XG5cbiAgc3RhdGljIGZyb21IVE1MKENsYXNzLCBodG1sLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAodHlwZW9mIENsYXNzID09PSAnc3RyaW5nJykge1xuICAgICAgaHRtbCA9IENsYXNzO1xuICAgICAgcmVtYWluaW5nQXJndW1lbnRzLnNoaWZ0KCk7XG4gICAgICBDbGFzcyA9IEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgY29uc3Qgb3V0ZXJET01FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBvdXRlckRPTUVsZW1lbnQuaW5uZXJIVE1MID0gaHRtbDsgIC8vL1xuXG4gICAgY29uc3QgZG9tRWxlbWVudCA9IG91dGVyRE9NRWxlbWVudC5maXJzdENoaWxkO1xuXG4gICAgcmVtYWluaW5nQXJndW1lbnRzLnVuc2hpZnQoZG9tRWxlbWVudCk7XG4gICAgcmVtYWluaW5nQXJndW1lbnRzLnVuc2hpZnQobnVsbCk7XG5cbiAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseShDbGFzcywgcmVtYWluaW5nQXJndW1lbnRzKSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoQ2xhc3MsIGRvbUVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmICh0eXBlb2YgQ2xhc3MgPT09ICdvYmplY3QnKSB7XG4gICAgICBkb21FbGVtZW50ID0gQ2xhc3M7XG4gICAgICByZW1haW5pbmdBcmd1bWVudHMuc2hpZnQoKTtcbiAgICAgIENsYXNzID0gRWxlbWVudDtcbiAgICB9XG5cbiAgICByZW1haW5pbmdBcmd1bWVudHMudW5zaGlmdChkb21FbGVtZW50KTtcbiAgICByZW1haW5pbmdBcmd1bWVudHMudW5zaGlmdChudWxsKTtcblxuICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KENsYXNzLCByZW1haW5pbmdBcmd1bWVudHMpKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGNvbnN0IHRhZ05hbWUgPSBDbGFzcy50YWdOYW1lLFxuICAgICAgICAgIGVsZW1lbnQgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzQW5kVGFnTmFtZShDbGFzcywgcHJvcGVydGllcywgdGFnTmFtZSk7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllc0FuZFRhZ05hbWUoQ2xhc3MsIHByb3BlcnRpZXMsIHRhZ05hbWUpIHtcbiAgICBjb25zdCBodG1sID0gYDwke3RhZ05hbWV9PjwvJHt0YWdOYW1lfT5gLFxuICAgICAgICAgIGVsZW1lbnQgPSBFbGVtZW50LmZyb21IVE1MKENsYXNzLCBodG1sKTtcblxuICAgIGVsZW1lbnQuYXBwbHlQcm9wZXJ0aWVzKHByb3BlcnRpZXMpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwganN4TWl4aW4pO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgZXZlbnRNaXhpbik7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBjbGlja01peGluKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIG1vdXNlTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgcmVzaXplTWl4aW4pO1xuXG5FbGVtZW50LkxFRlRfTU9VU0VfQlVUVE9OID0gMDtcbkVsZW1lbnQuTUlERExFX01PVVNFX0JVVFRPTiA9IDE7XG5FbGVtZW50LlJJR0hUX01PVVNFX0JVVFRPTiA9IDI7XG5cbm1vZHVsZS5leHBvcnRzID0gRWxlbWVudDtcblxuZnVuY3Rpb24gZG9tRWxlbWVudEZyb21TZWxlY3RvcihzZWxlY3Rvcikge1xuICBjb25zdCBkb21FbGVtZW50ID0gKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycpID9cbiAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilbMF0gOiAgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I7ICAvLy9cblxuICByZXR1cm4gZG9tRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gZG9tRWxlbWVudEZyb21FbGVtZW50T3JTdHJpbmcoZWxlbWVudE9yU3RyaW5nKSB7XG4gIGxldCBkb21FbGVtZW50O1xuXG4gIGlmICh0eXBlb2YgZWxlbWVudE9yU3RyaW5nID09PSAnc3RyaW5nJykge1xuICAgIGNvbnN0IHN0cmluZyA9IGVsZW1lbnRPclN0cmluZzsgLy8vXG5cbiAgICBkb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoc3RyaW5nKTsgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRPclN0cmluZzsgIC8vL1xuXG4gICAgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudDtcbiAgfVxuXG4gIHJldHVybiBkb21FbGVtZW50O1xufVxuXG5mdW5jdGlvbiBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhkb21FbGVtZW50cykge1xuICBjb25zdCBkb21FbGVtZW50c1dpdGhFbGVtZW50cyA9IGZpbHRlcihkb21FbGVtZW50cywgZnVuY3Rpb24oZG9tRWxlbWVudCkge1xuICAgICAgICAgIHJldHVybiAoZG9tRWxlbWVudC5fX2VsZW1lbnRfXyAhPT0gdW5kZWZpbmVkKTtcbiAgICAgICAgfSksXG4gICAgICAgIGVsZW1lbnRzID0gZG9tRWxlbWVudHNXaXRoRWxlbWVudHMubWFwKGZ1bmN0aW9uKGRvbUVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gZG9tRWxlbWVudC5fX2VsZW1lbnRfXztcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiBzb21lKGFycmF5LCB0ZXN0KSB7XG4gIGxldCByZXN1bHQgPSBmYWxzZTtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgIHJlc3VsdCA9IHRlc3QoZWxlbWVudCk7XG5cbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICByZXN1bHQgPSB0cnVlO1xuXG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBmaWx0ZXIoYXJyYXksIHRlc3QpIHtcbiAgY29uc3QgZmlsdGVyZWRBcnJheSA9IFtdO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHJlc3VsdCA9IHRlc3QoZWxlbWVudCk7XG5cbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICBmaWx0ZXJlZEFycmF5LnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZpbHRlcmVkQXJyYXk7XG59XG5cbmZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpO1xuXG5jbGFzcyBCb2R5IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yID0gJ2JvZHknKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBCb2R5LmNsb25lKHRoaXMpOyB9XG5cbiAgc3RhdGljIGNsb25lKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gRWxlbWVudC5jbG9uZShCb2R5LCBlbGVtZW50KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChodG1sKSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbUhUTUwoQm9keSwgaHRtbCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCkge1xuICAgIHJldHVybiBFbGVtZW50LmZyb21ET01FbGVtZW50KEJvZHksIGRvbUVsZW1lbnQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHByb3BlcnRpZXMgPSBDbGFzcztcbiAgICAgIENsYXNzID0gQm9keTtcbiAgICB9XG5cbiAgICByZXR1cm4gRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcyk7XG4gIH1cbn1cblxuQm9keS50YWdOYW1lID0gJ2JvZHknO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJvZHk7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50Jyk7XG5cbmNsYXNzIERpdiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gRGl2LmNsb25lKHRoaXMpOyB9XG5cbiAgc3RhdGljIGNsb25lKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gRWxlbWVudC5jbG9uZShEaXYsIGVsZW1lbnQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwpIHtcbiAgICByZXR1cm4gRWxlbWVudC5mcm9tSFRNTChEaXYsIGh0bWwpO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQpIHtcbiAgICByZXR1cm4gRWxlbWVudC5mcm9tRE9NRWxlbWVudChEaXYsIGRvbUVsZW1lbnQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHByb3BlcnRpZXMgPSBDbGFzcztcbiAgICAgIENsYXNzID0gRGl2O1xuICAgIH1cblxuICAgIHJldHVybiBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzKTtcbiAgfVxufVxuXG5EaXYudGFnTmFtZSA9ICdkaXYnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERpdjtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKTtcblxuY2xhc3MgU3BhbiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcbiAgfVxuXG4gIGNsb25lKCkgeyByZXR1cm4gU3Bhbi5jbG9uZSh0aGlzKTsgfVxuXG4gIHN0YXRpYyBjbG9uZShlbGVtZW50KSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuY2xvbmUoU3BhbiwgZWxlbWVudCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUhUTUwoaHRtbCkge1xuICAgIHJldHVybiBFbGVtZW50LmZyb21IVE1MKFNwYW4sIGh0bWwpO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQpIHtcbiAgICByZXR1cm4gRWxlbWVudC5mcm9tRE9NRWxlbWVudChTcGFuLCBkb21FbGVtZW50KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICBwcm9wZXJ0aWVzID0gQ2xhc3M7XG4gICAgICBDbGFzcyA9IFNwYW47XG4gICAgfVxuXG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMpO1xuICB9XG59XG5cblNwYW4udGFnTmFtZSA9ICdzcGFuJztcblxubW9kdWxlLmV4cG9ydHMgPSBTcGFuO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi9lbGVtZW50Jyk7XG5cbmNsYXNzIElucHV0RWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcbiAgfVxuXG4gIGhhc0ZvY3VzKCkge1xuICAgIGNvbnN0IGZvY3VzID0gKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IHRoaXMuZG9tRWxlbWVudCk7ICAvLy9cblxuICAgIHJldHVybiBmb2N1cztcbiAgfVxuXG4gIGZvY3VzKCkgeyB0aGlzLmRvbUVsZW1lbnQuZm9jdXMoKTsgfVxuXG4gIHN0YXRpYyBjbG9uZShDbGFzcywgZWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuY2xvbmUoQ2xhc3MsIGVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUhUTUwoQ2xhc3MsIGh0bWwsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIHJldHVybiBFbGVtZW50LmZyb21IVE1MKENsYXNzLCBodG1sLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KENsYXNzLCBkb21FbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICByZXR1cm4gRWxlbWVudC5mcm9tRE9NRWxlbWVudChDbGFzcywgZG9tRWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIHJldHVybiBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IElucHV0RWxlbWVudDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgSW5wdXRFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW5wdXRFbGVtZW50Jyk7XG5cbmNsYXNzIEJ1dHRvbiBleHRlbmRzIElucHV0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBjbGlja0hhbmRsZXIpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICBpZiAoY2xpY2tIYW5kbGVyKSB7XG4gICAgICB0aGlzLm9uQ2xpY2soY2xpY2tIYW5kbGVyKTtcbiAgICB9XG4gIH1cblxuICBjbG9uZShjbGlja0hhbmRsZXIpIHsgcmV0dXJuIEJ1dHRvbi5jbG9uZSh0aGlzLCBjbGlja0hhbmRsZXIpOyB9XG5cbiAgb25DbGljayhoYW5kbGVyKSB7XG4gICAgaWYgKGhhbmRsZXIuaW50ZXJtZWRpYXRlSGFuZGxlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYW5kbGVyLmludGVybWVkaWF0ZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlQ2xpY2tIYW5kbGVyO1xuICAgIH1cbiAgICBcbiAgICBzdXBlci5vbkNsaWNrKGhhbmRsZXIpO1xuICB9XG5cbiAgb2ZmQ2xpY2soaGFuZGxlcikge1xuICAgIHN1cGVyLm9mZkNsaWNrKGhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGNsb25lKGVsZW1lbnQsIGNsaWNrSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuY2xvbmUoQnV0dG9uLCBlbGVtZW50LCBjbGlja0hhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwsIGNsaWNrSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbUhUTUwoQnV0dG9uLCBodG1sLCBjbGlja0hhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQsIGNsaWNrSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoQnV0dG9uLCBkb21FbGVtZW50LCBjbGlja0hhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHByb3BlcnRpZXMgPSBDbGFzcztcbiAgICAgIENsYXNzID0gQnV0dG9uO1xuICAgIH1cblxuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMpO1xuICB9XG59XG5cbkJ1dHRvbi50YWdOYW1lID0gJ2J1dHRvbic7XG5cbm1vZHVsZS5leHBvcnRzID0gQnV0dG9uO1xuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlQ2xpY2tIYW5kbGVyKGhhbmRsZXIsIGV2ZW50KSB7XG4gIGNvbnN0IG1vdXNlQnV0dG9uID0gZXZlbnQuYnV0dG9uLFxuICAgICAgICBwcmV2ZW50RGVmYXVsdCA9IGhhbmRsZXIobW91c2VCdXR0b24pO1xuXG4gIHJldHVybiBwcmV2ZW50RGVmYXVsdDtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgSW5wdXRFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW5wdXRFbGVtZW50Jyk7XG5cbmNsYXNzIENoZWNrYm94IGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICBpZiAoY2hhbmdlSGFuZGxlcikge1xuICAgICAgdGhpcy5vbkNoYW5nZShjaGFuZ2VIYW5kbGVyKTtcbiAgICB9XG4gIH1cblxuICBjbG9uZShjaGFuZ2VIYW5kbGVyKSB7IHJldHVybiBDaGVja2JveC5jbG9uZSh0aGlzLCBjaGFuZ2VIYW5kbGVyKTsgfVxuXG4gIG9uQ2hhbmdlKGhhbmRsZXIpIHtcbiAgICBpZiAoaGFuZGxlci5pbnRlcm1lZGlhdGVIYW5kbGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhbmRsZXIuaW50ZXJtZWRpYXRlSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgdGhpcy5vbignY2xpY2snLCBoYW5kbGVyKTsgIC8vL1xuICB9XG4gIFxuICBvZmZDaGFuZ2UoaGFuZGxlcikge1xuICAgIHRoaXMub2ZmKCdjbGljaycsIGhhbmRsZXIpOyAgLy8vXG4gIH1cblxuICBjaGVjayhjaGVja2VkID0gdHJ1ZSkge1xuICAgIGNoZWNrZWQgP1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnY2hlY2tlZCcpIDpcbiAgICAgICAgdGhpcy5jbGVhckF0dHJpYnV0ZSgnY2hlY2tlZCcpO1xuICB9XG5cbiAgaXNDaGVja2VkKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNoZWNrZWQ7IH1cblxuICBzdGF0aWMgY2xvbmUoZWxlbWVudCwgY2hhbmdlSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuY2xvbmUoQ2hlY2tib3gsIGVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21IVE1MKENoZWNrYm94LCBodG1sLCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tRE9NRWxlbWVudChDaGVja2JveCwgZG9tRWxlbWVudCwgY2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcHJvcGVydGllcyA9IENsYXNzO1xuICAgICAgQ2xhc3MgPSBDaGVja2JveDtcbiAgICB9XG5cbiAgICBPYmplY3QuYXNzaWduKHByb3BlcnRpZXMsIHsgXG4gICAgICB0eXBlOiAnY2hlY2tib3gnIFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcyk7XG4gIH1cbn1cblxuQ2hlY2tib3gudGFnTmFtZSA9ICdpbnB1dCc7IC8vL1xuXG5tb2R1bGUuZXhwb3J0cyA9IENoZWNrYm94O1xuXG5cbmZ1bmN0aW9uIGRlZmF1bHRJbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyKGhhbmRsZXIsIGV2ZW50KSB7XG4gIGNvbnN0IGNoZWNrZWQgPSB0aGlzLmlzQ2hlY2tlZCgpLFxuICAgICAgICBwcmV2ZW50RGVmYXVsdCA9IGhhbmRsZXIoY2hlY2tlZCk7XG5cbiAgcmV0dXJuIHByZXZlbnREZWZhdWx0O1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBJbnB1dEVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnB1dEVsZW1lbnQnKTtcblxuY2xhc3MgSW5wdXQgZXh0ZW5kcyBJbnB1dEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgY2hhbmdlSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIGlmIChjaGFuZ2VIYW5kbGVyKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIGNsb25lKGNoYW5nZUhhbmRsZXIpIHsgcmV0dXJuIElucHV0LmNsb25lKHRoaXMsIGNoYW5nZUhhbmRsZXIpOyB9XG5cbiAgZ2V0VmFsdWUoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQudmFsdWU7IH1cbiAgXG4gIGdldFNlbGVjdGlvblN0YXJ0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnNlbGVjdGlvblN0YXJ0OyB9XG4gIFxuICBnZXRTZWxlY3Rpb25FbmQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0aW9uRW5kOyB9XG4gIFxuICBzZXRWYWx1ZSh2YWx1ZSkgeyB0aGlzLmRvbUVsZW1lbnQudmFsdWUgPSB2YWx1ZTsgfVxuICBcbiAgc2V0U2VsZWN0aW9uU3RhcnQoc2VsZWN0aW9uU3RhcnQpIHsgdGhpcy5kb21FbGVtZW50LnNlbGVjdGlvblN0YXJ0ID0gc2VsZWN0aW9uU3RhcnQ7IH1cbiAgXG4gIHNldFNlbGVjdGlvbkVuZChzZWxlY3Rpb25FbmQpIHsgdGhpcy5kb21FbGVtZW50LnNlbGVjdGlvbkVuZCA9IHNlbGVjdGlvbkVuZDsgfVxuXG4gIG9uQ2hhbmdlKGhhbmRsZXIpIHtcbiAgICBpZiAoaGFuZGxlci5pbnRlcm1lZGlhdGVIYW5kbGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhbmRsZXIuaW50ZXJtZWRpYXRlSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgdGhpcy5vbignY2hhbmdlJywgaGFuZGxlcik7XG4gIH1cblxuICBvZmZDaGFuZ2UoaGFuZGxlcikge1xuICAgIHRoaXMub2ZmKCdjaGFuZ2UnLCBoYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBjbG9uZShlbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5jbG9uZShJbnB1dCwgZWxlbWVudCwgY2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbUhUTUwoaHRtbCwgY2hhbmdlSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbUhUTUwoSW5wdXQsIGh0bWwsIGNoYW5nZUhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21ET01FbGVtZW50KElucHV0LCBkb21FbGVtZW50LCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICBwcm9wZXJ0aWVzID0gQ2xhc3M7XG4gICAgICBDbGFzcyA9IElucHV0O1xuICAgIH1cblxuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMpO1xuICB9XG59XG5cbklucHV0LnRhZ05hbWUgPSAnaW5wdXQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IElucHV0O1xuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlcihoYW5kbGVyLCBldmVudCkge1xuICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKSxcbiAgICAgICAgcHJldmVudERlZmF1bHQgPSBoYW5kbGVyKHZhbHVlKTtcblxuICByZXR1cm4gcHJldmVudERlZmF1bHQ7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IElucHV0RWxlbWVudCA9IHJlcXVpcmUoJy4uL2lucHV0RWxlbWVudCcpO1xuXG5jbGFzcyBMaW5rIGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGNsaWNrSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIGlmIChjbGlja0hhbmRsZXIpIHtcbiAgICAgIHRoaXMub25DbGljayhjbGlja0hhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIGNsb25lKGNsaWNrSGFuZGxlcikgeyByZXR1cm4gTGluay5jbG9uZSh0aGlzLCBjbGlja0hhbmRsZXIpOyB9XG5cbiAgb25DbGljayhoYW5kbGVyKSB7XG4gICAgaWYgKGhhbmRsZXIuaW50ZXJtZWRpYXRlSGFuZGxlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYW5kbGVyLmludGVybWVkaWF0ZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlQ2xpY2tIYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgfVxuICAgIFxuICAgIHRoaXMub24oJ2NsaWNrJywgaGFuZGxlcik7XG4gIH1cbiAgXG4gIG9mZkNsaWNrKGhhbmRsZXIpIHtcbiAgICB0aGlzLm9mZignY2xpY2snLCBoYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBjbG9uZShlbGVtZW50LCBjbGlja0hhbmRsZXIpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmNsb25lKExpbmssIGVsZW1lbnQsIGNsaWNrSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbUhUTUwoaHRtbCwgY2xpY2tIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tSFRNTChMaW5rLCBodG1sLCBjbGlja0hhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQsIGNsaWNrSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoTGluaywgZG9tRWxlbWVudCwgY2xpY2tIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICBwcm9wZXJ0aWVzID0gQ2xhc3M7XG4gICAgICBDbGFzcyA9IExpbms7XG4gICAgfVxuXG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcyk7XG4gIH1cbn1cblxuTGluay50YWdOYW1lID0gJ2EnOyAvLy9cblxubW9kdWxlLmV4cG9ydHMgPSBMaW5rO1xuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlQ2xpY2tIYW5kbGVyKGhhbmRsZXIsIGV2ZW50KSB7XG4gIGNvbnN0IGhyZWYgPSB0aGlzLmdldEF0dHJpYnV0ZSgnaHJlZicpLFxuICAgICAgICBwcmV2ZW50RGVmYXVsdCA9IGhhbmRsZXIoaHJlZik7XG5cbiAgcmV0dXJuIHByZXZlbnREZWZhdWx0O1xufSIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgSW5wdXRFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW5wdXRFbGVtZW50Jyk7XG5cbmNsYXNzIFNlbGVjdCBleHRlbmRzIElucHV0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgaWYgKGNoYW5nZUhhbmRsZXIpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoY2hhbmdlSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgY2xvbmUoY2hhbmdlSGFuZGxlcikgeyByZXR1cm4gU2VsZWN0LmNsb25lKHRoaXMsIGNoYW5nZUhhbmRsZXIpOyB9XG5cbiAgZ2V0U2VsZWN0ZWRPcHRpb25WYWx1ZSgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC52YWx1ZTsgfSAvLy9cblxuICBzZXRTZWxlY3RlZE9wdGlvbkJ5VmFsdWUodmFsdWUpIHsgdGhpcy5kb21FbGVtZW50LnZhbHVlID0gdmFsdWU7IH0gLy8vXG5cbiAgb25DaGFuZ2UoaGFuZGxlcikge1xuICAgIGlmIChoYW5kbGVyLmludGVybWVkaWF0ZUhhbmRsZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFuZGxlci5pbnRlcm1lZGlhdGVIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5vbignY2hhbmdlJywgaGFuZGxlcik7XG4gIH1cbiAgXG4gIG9mZkNoYW5nZShoYW5kbGVyKSB7XG4gICAgdGhpcy5vZmYoJ2NoYW5nZScsIGhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGNsb25lKGVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmNsb25lKFNlbGVjdCwgZWxlbWVudCwgY2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbUhUTUwoaHRtbCwgY2hhbmdlSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbUhUTUwoU2VsZWN0LCBodG1sLCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tRE9NRWxlbWVudChTZWxlY3QsIGRvbUVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHByb3BlcnRpZXMgPSBDbGFzcztcbiAgICAgIENsYXNzID0gU2VsZWN0O1xuICAgIH1cblxuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMpO1xuICB9XG59XG5cblNlbGVjdC50YWdOYW1lID0gJ3NlbGVjdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gU2VsZWN0O1xuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlcihoYW5kbGVyLCBldmVudCkge1xuICBjb25zdCBzZWxlY3RlZE9wdGlvblZhbHVlID0gdGhpcy5nZXRTZWxlY3RlZE9wdGlvblZhbHVlKCksXG4gICAgICAgIHByZXZlbnREZWZhdWx0ID0gaGFuZGxlcihzZWxlY3RlZE9wdGlvblZhbHVlKTtcblxuICByZXR1cm4gcHJldmVudERlZmF1bHQ7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IElucHV0RWxlbWVudCA9IHJlcXVpcmUoJy4uL2lucHV0RWxlbWVudCcpO1xuXG5jbGFzcyBUZXh0YXJlYSBleHRlbmRzIElucHV0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgaWYgKGNoYW5nZUhhbmRsZXIpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoY2hhbmdlSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgY2xvbmUoY2hhbmdlSGFuZGxlcikgeyByZXR1cm4gVGV4dGFyZWEuY2xvbmUodGhpcywgY2hhbmdlSGFuZGxlcik7IH1cblxuICBnZXRWYWx1ZSgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC52YWx1ZTsgfVxuICBcbiAgZ2V0U2VsZWN0aW9uU3RhcnQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQ7IH1cbiAgXG4gIGdldFNlbGVjdGlvbkVuZCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5zZWxlY3Rpb25FbmQ7IH1cbiAgXG4gIGdldFNjcm9sbFRvcCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5zY3JvbGxUb3A7IH1cbiAgXG4gIGdldFNjcm9sbExlZnQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuc2Nyb2xsTGVmdDsgfVxuXG4gIHNldFZhbHVlKHZhbHVlKSB7IHRoaXMuZG9tRWxlbWVudC52YWx1ZSA9IHZhbHVlOyB9XG4gIFxuICBzZXRTZWxlY3Rpb25TdGFydChzZWxlY3Rpb25TdGFydCkgeyB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgPSBzZWxlY3Rpb25TdGFydDsgfVxuICBcbiAgc2V0U2VsZWN0aW9uRW5kKHNlbGVjdGlvbkVuZCkgeyB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0aW9uRW5kID0gc2VsZWN0aW9uRW5kOyB9XG4gIFxuICBzZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKSB7IHRoaXMuZG9tRWxlbWVudC5zY3JvbGxUb3AgPSBzY3JvbGxUb3A7IH1cbiAgXG4gIHNldFNjcm9sbExlZnQoc2Nyb2xsTGVmdCkgeyB0aGlzLmRvbUVsZW1lbnQuc2Nyb2xsTGVmdCA9IHNjcm9sbExlZnQ7IH1cblxuICBvbkNoYW5nZShoYW5kbGVyKSB7XG4gICAgaWYgKGhhbmRsZXIuaW50ZXJtZWRpYXRlSGFuZGxlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBoYW5kbGVyLmludGVybWVkaWF0ZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLm9uKCdjaGFuZ2UnLCBoYW5kbGVyKTtcbiAgfVxuXG4gIG9mZkNoYW5nZShoYW5kbGVyKSB7XG4gICAgdGhpcy5vZmYoJ2NoYW5nZScsIGhhbmRsZXIpO1xuICB9XG5cbiAgb25TY3JvbGwoaGFuZGxlcikge1xuICAgIGlmIChoYW5kbGVyLmludGVybWVkaWF0ZUhhbmRsZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFuZGxlci5pbnRlcm1lZGlhdGVIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZVNjcm9sbEhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICB0aGlzLm9uKCdzY3JvbGwnLCBoYW5kbGVyKTtcbiAgfVxuXG4gIG9mZlNjcm9sbChoYW5kbGVyKSB7XG4gICAgdGhpcy5vZmYoJ3Njcm9sbCcsIGhhbmRsZXIpO1xuICB9XG5cbiAgb25SZXNpemUocmVzaXplSGFuZGxlcikge31cbiAgXG4gIG9mZlJlc2l6ZShyZXNpemVIYW5kbGVyKSB7fVxuXG4gIHN0YXRpYyBjbG9uZShlbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5jbG9uZShUZXh0YXJlYSwgZWxlbWVudCwgY2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbUhUTUwoaHRtbCwgY2hhbmdlSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbUhUTUwoVGV4dGFyZWEsIGh0bWwsIGNoYW5nZUhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21ET01FbGVtZW50KFRleHRhcmVhLCBkb21FbGVtZW50LCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICBwcm9wZXJ0aWVzID0gQ2xhc3M7XG4gICAgICBDbGFzcyA9IFRleHRhcmVhO1xuICAgIH1cblxuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMpO1xuICB9XG59XG5cblRleHRhcmVhLnRhZ05hbWUgPSAndGV4dGFyZWEnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHRhcmVhO1xuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlQ2hhbmdlSGFuZGxlcihoYW5kbGVyLCBldmVudCkge1xuICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKSxcbiAgICAgICAgcHJldmVudERlZmF1bHQgPSBoYW5kbGVyKHZhbHVlKTtcblxuICByZXR1cm4gcHJldmVudERlZmF1bHQ7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbnRlcm1lZGlhdGVTY3JvbGxIYW5kbGVyKGhhbmRsZXIsIGV2ZW50KSB7XG4gIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuZ2V0U2Nyb2xsVG9wKCksXG4gICAgICAgIHNjcm9sbExlZnQgPSB0aGlzLmdldFNjcm9sbExlZnQoKSxcbiAgICAgICAgcHJldmVudERlZmF1bHQgPSBoYW5kbGVyKHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCk7XG5cbiAgcmV0dXJuIHByZXZlbnREZWZhdWx0O1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBCb3VuZHMge1xuICBjb25zdHJ1Y3Rvcih0b3AsIGxlZnQsIGJvdHRvbSwgcmlnaHQpIHtcbiAgICB0aGlzLnRvcCA9IHRvcDtcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICAgIHRoaXMuYm90dG9tID0gYm90dG9tO1xuICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgfVxuXG4gIGdldFRvcCgpIHtcbiAgICByZXR1cm4gdGhpcy50b3A7XG4gIH1cblxuICBnZXRMZWZ0KCkge1xuICAgIHJldHVybiB0aGlzLmxlZnQ7XG4gIH1cblxuICBnZXRCb3R0b20oKSB7XG4gICAgcmV0dXJuIHRoaXMuYm90dG9tO1xuICB9XG5cbiAgZ2V0UmlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMucmlnaHQ7XG4gIH1cblxuICBpc092ZXJsYXBwaW5nTW91c2UobW91c2VUb3AsIG1vdXNlTGVmdCkge1xuICAgIHJldHVybiAoICAodGhpcy50b3AgPCBtb3VzZVRvcCkgJiZcbiAgICAgICAgICAgICAgKHRoaXMubGVmdCA8IG1vdXNlTGVmdCkgJiZcbiAgICAgICAgICAgICAgKHRoaXMuYm90dG9tID4gbW91c2VUb3ApICYmXG4gICAgICAgICAgICAgICh0aGlzLnJpZ2h0ID4gbW91c2VMZWZ0KSAgKTtcbiAgfVxuXG4gIGFyZU92ZXJsYXBwaW5nKGJvdW5kcykge1xuICAgIHJldHVybiAoICAodGhpcy50b3AgPCBib3VuZHMuYm90dG9tKSAmJlxuICAgICAgICAgICAgICAodGhpcy5sZWZ0IDwgYm91bmRzLnJpZ2h0KSAmJlxuICAgICAgICAgICAgICAodGhpcy5ib3R0b20gPiBib3VuZHMudG9wKSAmJlxuICAgICAgICAgICAgICAodGhpcy5yaWdodCA+IGJvdW5kcy5sZWZ0KSAgKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQm91bmRpbmdDbGllbnRSZWN0KGJvdW5kaW5nQ2xpZW50UmVjdCkge1xuICAgIGNvbnN0IHRvcCA9IGJvdW5kaW5nQ2xpZW50UmVjdC50b3AsXG4gICAgICAgICAgbGVmdCA9IGJvdW5kaW5nQ2xpZW50UmVjdC5sZWZ0LFxuICAgICAgICAgIGJvdHRvbSA9IGJvdW5kaW5nQ2xpZW50UmVjdC5ib3R0b20sXG4gICAgICAgICAgcmlnaHQgPSBib3VuZGluZ0NsaWVudFJlY3QucmlnaHQsXG4gICAgICAgICAgYm91bmRzID0gbmV3IEJvdW5kcyh0b3AsIGxlZnQsIGJvdHRvbSwgcmlnaHQpO1xuXG4gICAgcmV0dXJuIGJvdW5kcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJvdW5kcztcbiIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgT2Zmc2V0IHtcbiAgY29uc3RydWN0b3IodG9wLCBsZWZ0KSB7XG4gICAgdGhpcy50b3AgPSB0b3A7XG4gICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgfVxuXG4gIGdldFRvcCgpIHtcbiAgICByZXR1cm4gdGhpcy50b3A7XG4gIH1cblxuICBnZXRMZWZ0KCkge1xuICAgIHJldHVybiB0aGlzLmxlZnQ7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBPZmZzZXQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIG9uQ2xpY2soaGFuZGxlcikge1xuICBpZiAoaGFuZGxlci5pbnRlcm1lZGlhdGVIYW5kbGVyID09PSB1bmRlZmluZWQpIHtcbiAgICBoYW5kbGVyLmludGVybWVkaWF0ZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlSGFuZGxlcjtcbiAgfVxuICBcbiAgdGhpcy5vbignY2xpY2snLCBoYW5kbGVyKTsgXG59XG5cbmZ1bmN0aW9uIG9mZkNsaWNrKGhhbmRsZXIpIHsgdGhpcy5vZmYoJ2NsaWNrJywgaGFuZGxlcik7IH1cblxuY29uc3QgY2xpY2tNaXhpbiA9IHtcbiAgb25DbGljazogb25DbGljayxcbiAgb2ZmQ2xpY2s6IG9mZkNsaWNrXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsaWNrTWl4aW47XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbnRlcm1lZGlhdGVIYW5kbGVyKGhhbmRsZXIsIGV2ZW50KSB7XG4gIGNvbnN0IG1vdXNlVG9wID0gZXZlbnQucGFnZVksICAvLy9cbiAgICAgICAgbW91c2VMZWZ0ID0gZXZlbnQucGFnZVgsIC8vL1xuICAgICAgICBtb3VzZUJ1dHRvbiA9IGV2ZW50LmJ1dHRvbiwgLy8vXG4gICAgICAgIHByZXZlbnREZWZhdWx0ID0gaGFuZGxlcihtb3VzZVRvcCwgbW91c2VMZWZ0LCBtb3VzZUJ1dHRvbik7XG5cbiAgcmV0dXJuIHByZXZlbnREZWZhdWx0O1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBvbihldmVudFR5cGVzLCBoYW5kbGVyKSB7XG4gIGV2ZW50VHlwZXMgPSBldmVudFR5cGVzLnNwbGl0KCcgJyk7IC8vL1xuXG4gIGV2ZW50VHlwZXMuZm9yRWFjaChmdW5jdGlvbihldmVudFR5cGUpIHtcbiAgICBjb25zdCBhZGRFdmVudExpc3RlbmVyID0gdGhpcy5hZGRIYW5kbGVyKGV2ZW50VHlwZSwgaGFuZGxlcik7XG5cbiAgICBpZiAoYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBldmVudExpc3RlbmVyLmJpbmQodGhpcykpO1xuICAgIH1cbiAgfS5iaW5kKHRoaXMpKTtcbn1cblxuZnVuY3Rpb24gb2ZmKGV2ZW50VHlwZXMsIGhhbmRsZXIpIHtcbiAgZXZlbnRUeXBlcyA9IGV2ZW50VHlwZXMuc3BsaXQoJyAnKTsgLy8vXG5cbiAgZXZlbnRUeXBlcy5mb3JFYWNoKGZ1bmN0aW9uKGV2ZW50VHlwZSkge1xuICAgIGNvbnN0IHJlbW92ZUV2ZW50TGlzdGVuZXIgPSB0aGlzLnJlbW92ZUhhbmRsZXIoZXZlbnRUeXBlLCBoYW5kbGVyKTtcbiAgICBcbiAgICBpZiAocmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBldmVudExpc3RlbmVyLmJpbmQodGhpcykpO1xuICAgIH1cbiAgfS5iaW5kKHRoaXMpKTtcbn1cblxuZnVuY3Rpb24gYWRkSGFuZGxlcihldmVudFR5cGUsIGhhbmRsZXIpIHtcbiAgbGV0IGFkZEV2ZW50TGlzdGVuZXIgPSBmYWxzZSxcbiAgICAgIGhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFtldmVudFR5cGVdO1xuXG4gIGlmIChoYW5kbGVycyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgaGFuZGxlcnMgPSBbXTtcblxuICAgIHRoaXMuaGFuZGxlcnNNYXBbZXZlbnRUeXBlXSA9IGhhbmRsZXJzO1xuXG4gICAgYWRkRXZlbnRMaXN0ZW5lciA9IHRydWU7XG4gIH1cblxuICBoYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuXG4gIHJldHVybiBhZGRFdmVudExpc3RlbmVyO1xufVxuXG5mdW5jdGlvbiByZW1vdmVIYW5kbGVyKGV2ZW50VHlwZSwgaGFuZGxlcikge1xuICBsZXQgcmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZhbHNlLFxuICAgICAgaGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwW2V2ZW50VHlwZV07XG5cbiAgaWYgKGhhbmRsZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgIGRlbGV0ZSAodGhpcy5oYW5kbGVyc01hcFtldmVudFR5cGVdKTtcblxuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGluZGV4ID0gaGFuZGxlcnMuaW5kZXhPZihoYW5kbGVyKTtcblxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICBjb25zdCBkZWxldGVDb3VudCA9IDE7XG5cbiAgICAgIGhhbmRsZXJzLnNwbGljZShpbmRleCwgZGVsZXRlQ291bnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZW1vdmVFdmVudExpc3RlbmVyO1xufVxuXG5jb25zdCBldmVudE1peGluID0ge1xuICBvbjogb24sXG4gIG9mZjogb2ZmLFxuICBhZGRIYW5kbGVyOiBhZGRIYW5kbGVyLFxuICByZW1vdmVIYW5kbGVyOiByZW1vdmVIYW5kbGVyXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV2ZW50TWl4aW47XG5cbmZ1bmN0aW9uIGV2ZW50TGlzdGVuZXIoZXZlbnQpIHtcbiAgY29uc3QgZXZlbnRUeXBlID0gZXZlbnQudHlwZSxcbiAgICAgICAgaGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwW2V2ZW50VHlwZV07XG5cbiAgbGV0IHByZXZlbnRFdmVudERlZmF1bHQgPSBmYWxzZTtcblxuICBoYW5kbGVycy5mb3JFYWNoKGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICBpZiAoaGFuZGxlci5pbnRlcm1lZGlhdGVIYW5kbGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IHByZXZlbnREZWZhdWx0ID0gaGFuZGxlci5pbnRlcm1lZGlhdGVIYW5kbGVyKGhhbmRsZXIsIGV2ZW50KTtcbiAgICAgIFxuICAgICAgaWYgKHByZXZlbnREZWZhdWx0ID09PSB0cnVlKSB7XG4gICAgICAgIHByZXZlbnRFdmVudERlZmF1bHQgPSB0cnVlO1xuICAgICAgfSAgXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHByZXZlbnREZWZhdWx0ID0gaGFuZGxlcihldmVudCk7XG4gICAgICBcbiAgICAgIGlmIChwcmV2ZW50RGVmYXVsdCA9PT0gdHJ1ZSkge1xuICAgICAgICBwcmV2ZW50RXZlbnREZWZhdWx0ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICBcbiAgaWYgKHByZXZlbnRFdmVudERlZmF1bHQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGFwcGx5UHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gIHRoaXMucHJvcGVydGllcyA9IHt9O1xuXG4gIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXMocHJvcGVydGllcyk7XG5cbiAgbmFtZXMuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgaWYgKG5hbWUgPT09ICdjaGlsZEVsZW1lbnRzJykge1xuICAgICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHByb3BlcnRpZXNbJ2NoaWxkRWxlbWVudHMnXTtcblxuICAgICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkRWxlbWVudCkge1xuICAgICAgICB0aGlzLmFwcGVuZChjaGlsZEVsZW1lbnQpO1xuICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdmFsdWUgPSBwcm9wZXJ0aWVzW25hbWVdO1xuXG4gICAgICBpZiAoZmFsc2UpIHtcblxuICAgICAgfSBlbHNlIGlmIChpc0hhbmRsZXJOYW1lKG5hbWUpKSB7XG4gICAgICAgIGFkZEhhbmRsZXIodGhpcywgbmFtZSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChpc0F0dHJpYnV0ZU5hbWUobmFtZSkpIHtcbiAgICAgICAgYWRkQXR0cmlidXRlKHRoaXMsIG5hbWUsIHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucHJvcGVydGllc1tuYW1lXSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfS5iaW5kKHRoaXMpKTtcbn1cblxuY29uc3QganN4TWl4aW4gPSB7XG4gIGFwcGx5UHJvcGVydGllczogYXBwbHlQcm9wZXJ0aWVzXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGpzeE1peGluO1xuXG5mdW5jdGlvbiBhZGRIYW5kbGVyKGVsZW1lbnQsIG5hbWUsIHZhbHVlKSB7XG4gIGNvbnN0IGV2ZW50VHlwZSA9IG5hbWUuc3Vic3RyKDIpLnRvTG93ZXJDYXNlKCksIC8vL1xuICAgICAgICBoYW5kbGVyID0gdmFsdWU7ICAvLy9cblxuICBlbGVtZW50Lm9uKGV2ZW50VHlwZSwgaGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJpYnV0ZShlbGVtZW50LCBuYW1lLCB2YWx1ZSkge1xuICBpZiAobmFtZSA9PT0gJ2NsYXNzTmFtZScpIHtcbiAgICBuYW1lID0gJ2NsYXNzJztcbiAgfVxuXG4gIGlmIChuYW1lID09PSAnaHRtbEZvcicpIHtcbiAgICBuYW1lID0gJ2Zvcic7XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSk7XG5cbiAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgZWxlbWVudC5kb21FbGVtZW50W25hbWVdW2tleV0gPSB2YWx1ZVtrZXldO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHZhbHVlID0gbmFtZTsgLy8vXG5cbiAgICAgIGVsZW1lbnQuYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudC5hZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzSGFuZGxlck5hbWUobmFtZSkge1xuICByZXR1cm4gbmFtZS5tYXRjaCgvXm9uLyk7XG59XG5cbmZ1bmN0aW9uIGlzQXR0cmlidXRlTmFtZShuYW1lKSB7XG4gIHJldHVybiBhdHRyaWJ1dGVOYW1lcy5pbmNsdWRlcyhuYW1lKTtcbn1cblxuY29uc3QgYXR0cmlidXRlTmFtZXMgPSBbXG4gICdhY2NlcHQnLCAnYWNjZXB0Q2hhcnNldCcsICdhY2Nlc3NLZXknLCAnYWN0aW9uJywgJ2FsbG93RnVsbFNjcmVlbicsICdhbGxvd1RyYW5zcGFyZW5jeScsICdhbHQnLCAnYXN5bmMnLCAnYXV0b0NvbXBsZXRlJywgJ2F1dG9Gb2N1cycsICdhdXRvUGxheScsXG4gICdjYXB0dXJlJywgJ2NlbGxQYWRkaW5nJywgJ2NlbGxTcGFjaW5nJywgJ2NoYWxsZW5nZScsICdjaGFyU2V0JywgJ2NoZWNrZWQnLCAnY2l0ZScsICdjbGFzc0lEJywgJ2NsYXNzTmFtZScsICdjb2xTcGFuJywgJ2NvbHMnLCAnY29udGVudCcsICdjb250ZW50RWRpdGFibGUnLCAnY29udGV4dE1lbnUnLCAnY29udHJvbHMnLCAnY29vcmRzJywgJ2Nyb3NzT3JpZ2luJyxcbiAgJ2RhdGEnLCAnZGF0ZVRpbWUnLCAnZGVmYXVsdCcsICdkZWZlcicsICdkaXInLCAnZGlzYWJsZWQnLCAnZG93bmxvYWQnLCAnZHJhZ2dhYmxlJyxcbiAgJ2VuY1R5cGUnLFxuICAnZm9ybScsICdmb3JtQWN0aW9uJywgJ2Zvcm1FbmNUeXBlJywgJ2Zvcm1NZXRob2QnLCAnZm9ybU5vVmFsaWRhdGUnLCAnZm9ybVRhcmdldCcsICdmcmFtZUJvcmRlcicsXG4gICdoZWFkZXJzJywgJ2hlaWdodCcsICdoaWRkZW4nLCAnaGlnaCcsICdocmVmJywgJ2hyZWZMYW5nJywgJ2h0bWxGb3InLCAnaHR0cEVxdWl2JyxcbiAgJ2ljb24nLCAnaWQnLCAnaW5wdXRNb2RlJywgJ2ludGVncml0eScsICdpcycsXG4gICdrZXlQYXJhbXMnLCAna2V5VHlwZScsICdraW5kJyxcbiAgJ2xhYmVsJywgJ2xhbmcnLCAnbGlzdCcsICdsb29wJywgJ2xvdycsXG4gICdtYW5pZmVzdCcsICdtYXJnaW5IZWlnaHQnLCAnbWFyZ2luV2lkdGgnLCAnbWF4JywgJ21heExlbmd0aCcsICdtZWRpYScsICdtZWRpYUdyb3VwJywgJ21ldGhvZCcsICdtaW4nLCAnbWluTGVuZ3RoJywgJ211bHRpcGxlJywgJ211dGVkJyxcbiAgJ25hbWUnLCAnbm9WYWxpZGF0ZScsICdub25jZScsXG4gICdvcGVuJywgJ29wdGltdW0nLFxuICAncGF0dGVybicsICdwbGFjZWhvbGRlcicsICdwb3N0ZXInLCAncHJlbG9hZCcsICdwcm9maWxlJyxcbiAgJ3JhZGlvR3JvdXAnLCAncmVhZE9ubHknLCAncmVsJywgJ3JlcXVpcmVkJywgJ3JldmVyc2VkJywgJ3JvbGUnLCAncm93U3BhbicsICdyb3dzJyxcbiAgJ3NhbmRib3gnLCAnc2NvcGUnLCAnc2NvcGVkJywgJ3Njcm9sbGluZycsICdzZWFtbGVzcycsICdzZWxlY3RlZCcsICdzaGFwZScsICdzaXplJywgJ3NpemVzJywgJ3NwYW4nLCAnc3BlbGxDaGVjaycsICdzcmMnLCAnc3JjRG9jJywgJ3NyY0xhbmcnLCAnc3JjU2V0JywgJ3N0YXJ0JywgJ3N0ZXAnLCAnc3R5bGUnLCAnc3VtbWFyeScsXG4gICd0YWJJbmRleCcsICd0YXJnZXQnLCAndGl0bGUnLCAndHlwZScsXG4gICd1c2VNYXAnLFxuICAndmFsdWUnLFxuICAnd2lkdGgnLFxuICAnd21vZGUnLFxuICAnd3JhcCdcbl07XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIG9uTW91c2VVcChoYW5kbGVyKSB7XG4gIGlmIChoYW5kbGVyLmludGVybWVkaWF0ZUhhbmRsZXIgPT09IHVuZGVmaW5lZCkge1xuICAgIGhhbmRsZXIuaW50ZXJtZWRpYXRlSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVIYW5kbGVyO1xuICB9XG4gIFxuICB0aGlzLm9uKCdtb3VzZXVwJywgaGFuZGxlcik7IFxufVxuXG5mdW5jdGlvbiBvbk1vdXNlRG93bihoYW5kbGVyKSB7XG4gIGlmIChoYW5kbGVyLmludGVybWVkaWF0ZUhhbmRsZXIgPT09IHVuZGVmaW5lZCkge1xuICAgIGhhbmRsZXIuaW50ZXJtZWRpYXRlSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVIYW5kbGVyO1xuICB9XG5cbiAgdGhpcy5vbignbW91c2Vkb3duJywgaGFuZGxlcik7IFxufVxuXG5mdW5jdGlvbiBvbk1vdXNlT3ZlcihoYW5kbGVyKSB7XG4gIGlmIChoYW5kbGVyLmludGVybWVkaWF0ZUhhbmRsZXIgPT09IHVuZGVmaW5lZCkge1xuICAgIGhhbmRsZXIuaW50ZXJtZWRpYXRlSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVIYW5kbGVyO1xuICB9XG5cbiAgdGhpcy5vbignbW91c2VvdmVyJywgaGFuZGxlcik7IFxufVxuXG5mdW5jdGlvbiBvbk1vdXNlT3V0KGhhbmRsZXIpIHtcbiAgaWYgKGhhbmRsZXIuaW50ZXJtZWRpYXRlSGFuZGxlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgaGFuZGxlci5pbnRlcm1lZGlhdGVIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZUhhbmRsZXI7XG4gIH1cblxuICB0aGlzLm9uKCdtb3VzZW91dCcsIGhhbmRsZXIpOyBcbn1cblxuZnVuY3Rpb24gb25Nb3VzZU1vdmUoaGFuZGxlcikge1xuICBpZiAoaGFuZGxlci5pbnRlcm1lZGlhdGVIYW5kbGVyID09PSB1bmRlZmluZWQpIHtcbiAgICBoYW5kbGVyLmludGVybWVkaWF0ZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlSGFuZGxlcjtcbiAgfVxuXG4gIHRoaXMub24oJ21vdXNlbW92ZScsIGhhbmRsZXIpOyBcbn1cblxuZnVuY3Rpb24gb2ZmTW91c2VVcChoYW5kbGVyKSB7IHRoaXMub2ZmKCdtb3VzZXVwJywgaGFuZGxlcik7IH1cblxuZnVuY3Rpb24gb2ZmTW91c2VEb3duKGhhbmRsZXIpIHsgdGhpcy5vZmYoJ21vdXNlZG93bicsIGhhbmRsZXIpOyB9XG5cbmZ1bmN0aW9uIG9mZk1vdXNlT3ZlcihoYW5kbGVyKSB7IHRoaXMub2ZmKCdtb3VzZW92ZXInLCBoYW5kbGVyKTsgfVxuXG5mdW5jdGlvbiBvZmZNb3VzZU91dChoYW5kbGVyKSB7IHRoaXMub2ZmKCdtb3VzZW91dCcsIGhhbmRsZXIpOyB9XG5cbmZ1bmN0aW9uIG9mZk1vdXNlTW92ZShoYW5kbGVyKSB7IHRoaXMub2ZmKCdtb3VzZW1vdmUnLCBoYW5kbGVyKTsgfVxuXG5jb25zdCBtb3VzZU1peGluID0ge1xuICBvbk1vdXNlVXA6IG9uTW91c2VVcCxcbiAgb25Nb3VzZURvd246IG9uTW91c2VEb3duLFxuICBvbk1vdXNlT3Zlcjogb25Nb3VzZU92ZXIsXG4gIG9uTW91c2VPdXQ6IG9uTW91c2VPdXQsXG4gIG9uTW91c2VNb3ZlOiBvbk1vdXNlTW92ZSxcbiAgb2ZmTW91c2VVcDogb2ZmTW91c2VVcCxcbiAgb2ZmTW91c2VEb3duOiBvZmZNb3VzZURvd24sXG4gIG9mZk1vdXNlT3Zlcjogb2ZmTW91c2VPdmVyLFxuICBvZmZNb3VzZU91dDogb2ZmTW91c2VPdXQsXG4gIG9mZk1vdXNlTW92ZTogb2ZmTW91c2VNb3ZlXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1vdXNlTWl4aW47XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbnRlcm1lZGlhdGVIYW5kbGVyKGhhbmRsZXIsIGV2ZW50KSB7XG4gIGNvbnN0IG1vdXNlVG9wID0gZXZlbnQucGFnZVksICAvLy9cbiAgICAgICAgbW91c2VMZWZ0ID0gZXZlbnQucGFnZVgsIC8vL1xuICAgICAgICBtb3VzZUJ1dHRvbiA9IGV2ZW50LmJ1dHRvbiwgLy8vXG4gICAgICAgIHByZXZlbnREZWZhdWx0ID0gaGFuZGxlcihtb3VzZVRvcCwgbW91c2VMZWZ0LCBtb3VzZUJ1dHRvbik7XG5cbiAgcmV0dXJuIHByZXZlbnREZWZhdWx0O1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBvblJlc2l6ZShoYW5kbGVyKSB7XG4gIGNvbnN0IGV2ZW50VHlwZSA9ICdyZXNpemUnLFxuICAgICAgICBhZGRFdmVudExpc3RlbmVyID0gdGhpcy5hZGRIYW5kbGVyKGV2ZW50VHlwZSwgaGFuZGxlcik7XG5cbiAgaWYgKGFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICBhcHBlbmRSZXNpemVPYmplY3QodGhpcyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gb2ZmUmVzaXplKGhhbmRsZXIpIHtcbiAgY29uc3QgZXZlbnRUeXBlID0gJ3Jlc2l6ZScsXG4gICAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIgPSB0aGlzLnJlbW92ZUhhbmRsZXIoZXZlbnRUeXBlLCBoYW5kbGVyKTtcblxuICBpZiAocmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuICAgIHJlbW92ZVJlc2l6ZU9iamVjdCh0aGlzKTtcbiAgfVxufVxuXG5jb25zdCByZXNpemVNaXhpbiA9IHtcbiAgb25SZXNpemU6IG9uUmVzaXplLFxuICBvZmZSZXNpemU6IG9mZlJlc2l6ZVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXNpemVNaXhpbjtcblxuZnVuY3Rpb24gYXBwZW5kUmVzaXplT2JqZWN0KGVsZW1lbnQpIHtcbiAgY29uc3QgcmVzaXplT2JqZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb2JqZWN0JyksXG4gICAgICAgIGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQsXG4gICAgICAgIHN0eWxlID0gYCBkaXNwbGF5OiBibG9jazsgXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICAgICAgICAgICAgICAgICAgdG9wOiAwOyBcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7IFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlOyBcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlOyBcbiAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47IFxuICAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IFxuICAgICAgICAgICAgICAgICAgei1pbmRleDogLTE7YDtcblxuICByZXNpemVPYmplY3Quc2V0QXR0cmlidXRlKCdzdHlsZScsIHN0eWxlKTtcbiAgcmVzaXplT2JqZWN0LmRhdGEgPSAnYWJvdXQ6YmxhbmsnO1xuICByZXNpemVPYmplY3QudHlwZSA9ICd0ZXh0L2h0bWwnO1xuXG4gIGVsZW1lbnQuX19yZXNpemVPYmplY3RfXyA9IHJlc2l6ZU9iamVjdDtcblxuICByZXNpemVPYmplY3Qub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgcmVzaXplT2JqZWN0TG9hZEhhbmRsZXIoZWxlbWVudClcbiAgfTtcblxuICBkb21FbGVtZW50LmFwcGVuZENoaWxkKHJlc2l6ZU9iamVjdCk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVJlc2l6ZU9iamVjdChlbGVtZW50KSB7XG4gIGNvbnN0IGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQsXG4gICAgICAgIHJlc2l6ZU9iamVjdCA9IGVsZW1lbnQuX19yZXNpemVPYmplY3RfXyxcbiAgICAgICAgb2JqZWN0V2luZG93ID0gcmVzaXplT2JqZWN0LmNvbnRlbnREb2N1bWVudC5kZWZhdWx0VmlldzsgIC8vL1xuXG4gIG9iamVjdFdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVMaXN0ZW5lcik7XG5cbiAgZG9tRWxlbWVudC5yZW1vdmVDaGlsZChyZXNpemVPYmplY3QpO1xufVxuXG5mdW5jdGlvbiByZXNpemVPYmplY3RMb2FkSGFuZGxlcihlbGVtZW50KSB7XG4gIGNvbnN0IHJlc2l6ZU9iamVjdCA9IGVsZW1lbnQuX19yZXNpemVPYmplY3RfXyxcbiAgICAgICAgcmVzaXplT2JqZWN0V2luZG93ID0gcmVzaXplT2JqZWN0LmNvbnRlbnREb2N1bWVudC5kZWZhdWx0VmlldzsgIC8vL1xuXG4gIHJlc2l6ZU9iamVjdFdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmdW5jdGlvbigpIHtcbiAgICBldmVudExpc3RlbmVyKGVsZW1lbnQpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZXZlbnRMaXN0ZW5lcihlbGVtZW50KSB7XG4gIGNvbnN0IHdpZHRoID0gZWxlbWVudC5nZXRXaWR0aCgpLFxuICAgICAgICBoZWlnaHQgPSBlbGVtZW50LmdldEhlaWdodCgpLFxuICAgICAgICBoYW5kbGVycyA9IGVsZW1lbnQuaGFuZGxlcnNNYXBbJ3Jlc2l6ZSddO1xuXG4gIGhhbmRsZXJzLmZvckVhY2goZnVuY3Rpb24oaGFuZGxlcil7XG4gICAgaGFuZGxlcih3aWR0aCwgaGVpZ2h0KTtcbiAgfSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGV2ZW50TWl4aW4gPSByZXF1aXJlKCcuL21peGluL2V2ZW50JyksXG4gICAgICBjbGlja01peGluID0gcmVxdWlyZSgnLi9taXhpbi9jbGljaycpLFxuICAgICAgbW91c2VNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vbW91c2UnKTtcblxuY2xhc3MgV2luZG93IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gd2luZG93O1xuXG4gICAgdGhpcy5oYW5kbGVyc01hcCA9IHt9O1xuICB9XG4gIFxuICBnZXRXaWR0aCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5pbm5lcldpZHRoOyB9IC8vL1xuICBcbiAgZ2V0SGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmlubmVySGVpZ2h0OyB9IC8vL1xuICBcbiAgb25SZXNpemUoaGFuZGxlcikge1xuICAgIGNvbnN0IHR5cGUgPSAncmVzaXplJyxcbiAgICAgICAgICBhZGRFdmVudExpc3RlbmVyID0gdGhpcy5hZGRIYW5kbGVyKHR5cGUsIGhhbmRsZXIpO1xuXG4gICAgaWYgKGFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGV2ZW50TGlzdGVuZXIuYmluZCh0aGlzKSk7XG4gICAgfVxuICB9XG5cbiAgb2ZmUmVzaXplKGhhbmRsZXIpIHtcbiAgICBjb25zdCB0eXBlID0gJ3Jlc2l6ZScsXG4gICAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lciA9IHRoaXMucmVtb3ZlSGFuZGxlcih0eXBlLCBoYW5kbGVyKTtcblxuICAgIGlmIChyZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBldmVudExpc3RlbmVyLmJpbmQodGhpcykpO1xuICAgIH1cbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFdpbmRvdy5wcm90b3R5cGUsIGV2ZW50TWl4aW4pO1xuT2JqZWN0LmFzc2lnbihXaW5kb3cucHJvdG90eXBlLCBjbGlja01peGluKTtcbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwgbW91c2VNaXhpbik7XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IFdpbmRvdygpOyAgLy8vXG5cbmZ1bmN0aW9uIGV2ZW50TGlzdGVuZXIoZXZlbnQpIHtcbiAgY29uc3QgdHlwZSA9IGV2ZW50LnR5cGUsXG4gICAgICAgIGhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFt0eXBlXSxcbiAgICAgICAgd2lkdGggPSB0aGlzLmdldFdpZHRoKCksXG4gICAgICAgIGhlaWdodCA9IHRoaXMuZ2V0SGVpZ2h0KCk7XG5cbiAgaGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgaGFuZGxlcih3aWR0aCwgaGVpZ2h0KTtcbiAgfSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvZnJhZ21lbnRlZCcpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkod2luZG93LCAnZnJhZ21lbnQnLCB7XG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGZyYWdtZW50ID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3Vic3RyKDEpLCAgLy8vXG4gICAgICAgICAgZnJhZ21lbnRQcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoZnJhZ21lbnQpO1xuXG4gICAgZnJhZ21lbnRQcm90b3R5cGUub25DaGFuZ2UgPSBmdW5jdGlvbihjaGFuZ2VIYW5kbGVyKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIGNoYW5nZUhhbmRsZXIpO1xuICAgIH07XG5cbiAgICBmcmFnbWVudFByb3RvdHlwZS5vZmZDaGFuZ2UgPSBmdW5jdGlvbihjaGFuZ2VIYW5kbGVyKSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIGNoYW5nZUhhbmRsZXIpO1xuICAgIH07XG5cbiAgICByZXR1cm4gZnJhZ21lbnQ7XG4gIH0sXG5cbiAgc2V0OiBmdW5jdGlvbiAoZnJhZ21lbnQpIHtcbiAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGZyYWdtZW50OyAgLy8vXG4gIH1cbn0pO1xuIl19
