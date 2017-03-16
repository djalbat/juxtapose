(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

module.exports = require('../lib/docs.js');

},{"../lib/docs.js":2}],2:[function(require,module,exports){
'use strict';

require('fragmented');

require('./easyui-jsx');

var easyui = require('easyui'),
    Element = easyui.Element;


var Contents = require('./docs/sections/contents'),
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
    ASimpleForm = require('./docs/sections/aSimpleForm'),
    MoreEasyUIElements = require('./docs/sections/moreEasyUIElements'),
    EasyUILayout = require('./docs/sections/easyUILayout'),
    EasyUIDragAndDrop = require('./docs/sections/easyUIDragAndDrop'),
    EasyUIRichTextarea = require('./docs/sections/easyUIRichTextarea');

var introduction = React.createElement(Introduction, null),
    fragmentToSectionMap = {
  introduction: introduction,
  contents: React.createElement(Contents, null),
  jsxIsGreat: React.createElement(JSXIsGreat, null),
  gettingStarted: React.createElement(GettingStarted, null),
  appendingElementsToTheDOM: React.createElement(AppendingElementsToTheDOM, null),
  functionalElements: React.createElement(FunctionalElements, null),
  easyUIElements: React.createElement(EasyUIElements, null),
  theRenderMethod: React.createElement(TheRenderMethod, null),
  extendingAnEasyUIClass: React.createElement(ExtendingAnEasyUIClass, null),
  theExampleOfThisDocumentation: React.createElement(TheExampleOfThisDocumentation, null),
  theElementClass: React.createElement(TheElementClass, null),
  aSimpleForm: React.createElement(ASimpleForm, null),
  moreEasyUIElements: React.createElement(MoreEasyUIElements, null),
  easyUILayout: React.createElement(EasyUILayout, null),
  easyUIDragAndDrop: React.createElement(EasyUIDragAndDrop, null),
  easyUIRichTextarea: React.createElement(EasyUIRichTextarea, null)
};

var insertSections = function insertSections() {
  var headerDOMElement = document.querySelector('header'),
      header = Element.fromDOMElement(headerDOMElement);

  forEachSection(function (section) {
    section.insertAfter(header);
  });
};

var revealSection = function revealSection() {
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

fragment.onChange(revealSection);

revealSection();

},{"./docs/sections/aSimpleForm":8,"./docs/sections/appendingElementsToTheDOM":9,"./docs/sections/contents":10,"./docs/sections/easyUIDragAndDrop":11,"./docs/sections/easyUIElements":12,"./docs/sections/easyUILayout":13,"./docs/sections/easyUIRichTextarea":14,"./docs/sections/extendingAnEasyUIClass":15,"./docs/sections/functionalElements":16,"./docs/sections/gettingStarted":17,"./docs/sections/introduction":18,"./docs/sections/jsxIsGreat":19,"./docs/sections/moreEasyUIElements":20,"./docs/sections/theElementClass":21,"./docs/sections/theExampleOfThisDocumentation":22,"./docs/sections/theRenderMethod":23,"./easyui-jsx":24,"easyui":25,"fragmented":46}],3:[function(require,module,exports){
'use strict';

require('../easyui-jsx');

var BlockCode = function BlockCode(properties) {
  var childElements = properties.childElements;


  return React.createElement(
    'code',
    { className: 'block' },
    childElements
  );
};

module.exports = BlockCode;

},{"../easyui-jsx":24}],4:[function(require,module,exports){
'use strict';

require('../easyui-jsx');

var Contents = function Contents() {
  return React.createElement(
    'span',
    { className: 'contents' },
    React.createElement(
      'a',
      { href: '#contents' },
      'Contents'
    )
  );
};

module.exports = Contents;

},{"../easyui-jsx":24}],5:[function(require,module,exports){
'use strict';

require('../easyui-jsx');

var InlineCode = function InlineCode(properties) {
  var childElements = properties.childElements;


  return React.createElement(
    'code',
    { className: 'inline' },
    childElements
  );
};

module.exports = InlineCode;

},{"../easyui-jsx":24}],6:[function(require,module,exports){
'use strict';

require('../easyui-jsx');

var Next = function Next(properties) {
  var href = properties.href,
      childElements = properties.childElements;


  return React.createElement(
    'span',
    { className: 'next' },
    React.createElement(
      'a',
      { href: href },
      'Next: ',
      childElements
    )
  );
};

module.exports = Next;

},{"../easyui-jsx":24}],7:[function(require,module,exports){
'use strict';

require('../easyui-jsx');

var Previous = function Previous(properties) {
  var href = properties.href,
      childElements = properties.childElements;


  return React.createElement(
    'span',
    { className: 'previous' },
    React.createElement(
      'a',
      { href: href },
      'Previous: ',
      childElements
    )
  );
};

module.exports = Previous;

},{"../easyui-jsx":24}],8:[function(require,module,exports){
'use strict';

require('../../easyui-jsx');

var easyui = require('easyui'),
    Input = easyui.Input,
    Textarea = easyui.Textarea,
    Select = easyui.Select;


var Next = require('../next'),
    Previous = require('../previous'),
    Contents = require('../contents'),
    BlockCode = require('../blockCode'),
    InlineCode = require('../inlineCode');

var ASimpleForm = function ASimpleForm() {
  var textarea = React.createElement(Textarea, { placeholder: 'A textarea' }),
      input = React.createElement(Input, { nametype: 'text', placeholder: 'A text input' });

  return React.createElement(
    'section',
    null,
    React.createElement(
      'nav',
      null,
      React.createElement(
        Next,
        { href: '#moreEasyUIElements' },
        'More EasyUI elements'
      ),
      React.createElement(
        Previous,
        { href: '#theElementClass' },
        'The ',
        React.createElement(
          'code',
          { className: 'inline' },
          'Element'
        ),
        ' class'
      ),
      React.createElement(Contents, null)
    ),
    React.createElement(
      'h2',
      null,
      'A simple form'
    ),
    React.createElement(
      BlockCode,
      null,
      'const easyui = require(\'easyui\'),\n      { Input, Textarea, Select } = easyui;\n\nconst textarea = <Textarea />,\n      input = <Input type="text" />;\n\n<form>\n  {input}\n  {textarea}\n  <Select onChange={(value) => {\n            input.setValue(value);\n          }}\n  >\n    <option value="Al">A</option>\n    <option value="Bill">B</option>\n    <option value="Chuck">C</option>\n    <option value="Dick" selected>D</option>\n  </Select>\n  <button onClick={(event) => {\n            const value = input.getValue(),\n                  preventDefault = true;\n\n            textarea.setValue(value);\n            \n            return preventDefault;\n          }}\n  >\n  Submit\n  </button>\n</form>'
    ),
    React.createElement(
      'p',
      null,
      'You can use EasyUI\'s form element classes or lower case tag names. The somewhat contrived example here uses a combination of both.'
    ),
    React.createElement(
      'p',
      null,
      'The advantage of using EasyUI\'s form element classes is that they support various methods that will be helpful. Event handlers will receive pertinent arguments, for example, rather than a DOM event object. Check the ',
      React.createElement(
        'a',
        { href: 'https://github.com/djalbat/EasyUI' },
        'EasyUI documentation'
      ),
      ' and accompanying source code for details. Handlers that are treated specially will be passed to the requisite constructors.'
    ),
    React.createElement(
      'p',
      null,
      'Here the ',
      React.createElement(
        InlineCode,
        null,
        'Select'
      ),
      ' class is used and so the change handler is passed the selected option\'s value whenever it changes. By contrast the ',
      React.createElement(
        InlineCode,
        null,
        'Element'
      ),
      ' class is used for the button. In this case the DOM event object will be passed to the click handler and this is simply ignored.'
    ),
    React.createElement(
      'form',
      null,
      input,
      textarea,
      React.createElement(
        Select,
        { onChange: function onChange(value) {
            input.setValue(value);
          }
        },
        React.createElement(
          'option',
          { value: 'Al' },
          'A'
        ),
        React.createElement(
          'option',
          { value: 'Bill' },
          'B'
        ),
        React.createElement(
          'option',
          { value: 'Chuck' },
          'C'
        ),
        React.createElement(
          'option',
          { value: 'Dick', selected: true },
          'D'
        )
      ),
      React.createElement(
        'button',
        { onClick: function onClick(event) {
            var value = input.getValue(),
                preventDefault = true;

            textarea.setValue(value);

            return preventDefault;
          }
        },
        'Submit'
      )
    )
  );
};

module.exports = ASimpleForm;

},{"../../easyui-jsx":24,"../blockCode":3,"../contents":4,"../inlineCode":5,"../next":6,"../previous":7,"easyui":25}],9:[function(require,module,exports){
'use strict';

require('../../easyui-jsx');

var Next = require('../next'),
    Previous = require('../previous'),
    Contents = require('../contents'),
    BlockCode = require('../blockCode'),
    InlineCode = require('../inlineCode');

var AppendingElementsToTheDOM = function AppendingElementsToTheDOM() {
  return React.createElement(
    'section',
    null,
    React.createElement(
      'nav',
      null,
      React.createElement(
        Next,
        { href: '#functionalElements' },
        'Functional elements'
      ),
      React.createElement(
        Previous,
        { href: '#jsxIsGreat' },
        'JSX is great'
      ),
      React.createElement(Contents, null)
    ),
    React.createElement(
      'h2',
      null,
      'Appending elements to the DOM'
    ),
    React.createElement(
      BlockCode,
      null,
      'require(\'easyui-jsx\');\n\nconst easyui = require(\'easyui\'),\n      { Div } = easyui;\n\nconst rootDivDOMElement =\n        document.getElementbyId(\'root\'),\n      rootDivElement =\n        Div.fromDOMElement(rootDivDOMElement);\n\nrootDivElement.append(\n\n  <div className="example">\n    An easy example.\n  </div>\n\n);'
    ),
    React.createElement(
      'p',
      null,
      'EasyUI elements created using JSX need to be put in the DOM somehow. The example here is equivalent to the use of the ',
      React.createElement(
        InlineCode,
        null,
        'ReactDOM.render(...)'
      ),
      ' method in React or Reaction. You at least need to do this once, but only once.'
    ),
    React.createElement(
      'p',
      null,
      'If you are not happy using ',
      React.createElement(
        InlineCode,
        null,
        'body'
      ),
      ' DOM element, then create an element that references a root ',
      React.createElement(
        InlineCode,
        null,
        'div'
      ),
      ' element, say, either by passing the requisite CSS selector to the ',
      React.createElement(
        InlineCode,
        null,
        'Div'
      ),
      ' class constructor, or, if you have the DOM element to hand, by using the static ',
      React.createElement(
        InlineCode,
        null,
        'fromHTML()'
      ),
      ' factory method of the ',
      React.createElement(
        InlineCode,
        null,
        'Div'
      ),
      ' class, as in the example here.'
    ),
    React.createElement(
      'p',
      null,
      'All the examples here append to the ',
      React.createElement(
        InlineCode,
        null,
        'body'
      ),
      ' DOM element but in practice it is entirely up to you.'
    )
  );
};

module.exports = AppendingElementsToTheDOM;

},{"../../easyui-jsx":24,"../blockCode":3,"../contents":4,"../inlineCode":5,"../next":6,"../previous":7}],10:[function(require,module,exports){
'use strict';

require('../../easyui-jsx');

var InlineCode = require('../inlineCode');

var Contents = function Contents() {
  return React.createElement(
    'section',
    null,
    React.createElement(
      'nav',
      null,
      React.createElement(
        'span',
        { className: 'contents' },
        'Contents'
      )
    ),
    React.createElement(
      'ul',
      null,
      React.createElement(
        'li',
        null,
        React.createElement(
          'a',
          { href: '#introduction' },
          'Contents'
        )
      ),
      React.createElement(
        'li',
        null,
        React.createElement(
          'a',
          { href: '#jsxIsGreat' },
          'JSX is great'
        )
      ),
      React.createElement(
        'li',
        null,
        React.createElement(
          'a',
          { href: '#gettingStarted' },
          'Getting started'
        )
      ),
      React.createElement(
        'li',
        null,
        React.createElement(
          'a',
          { href: '#appendingElementsToTheDOM' },
          'Appending elements to the DOM'
        )
      ),
      React.createElement(
        'li',
        null,
        React.createElement(
          'a',
          { href: '#functionalElements' },
          'Functional elements'
        )
      ),
      React.createElement(
        'li',
        null,
        React.createElement(
          'a',
          { href: '#easyUIElements' },
          'EasyUI elements'
        )
      ),
      React.createElement(
        'li',
        null,
        React.createElement(
          'a',
          { href: '#theRenderMethod' },
          'The ',
          React.createElement(
            InlineCode,
            null,
            'render()'
          ),
          ' method'
        )
      ),
      React.createElement(
        'li',
        null,
        React.createElement(
          'a',
          { href: '#extendingAnEasyUIClass' },
          'Extending an EasyUI class'
        )
      ),
      React.createElement(
        'li',
        null,
        React.createElement(
          'a',
          { href: '#theExampleOfThisDocumentation' },
          'The example of this documentation'
        )
      ),
      React.createElement(
        'li',
        null,
        React.createElement(
          'a',
          { href: '#theElementClass' },
          'The ',
          React.createElement(
            InlineCode,
            null,
            'Element'
          ),
          ' class'
        )
      ),
      React.createElement(
        'li',
        null,
        React.createElement(
          'a',
          { href: '#aSimpleForm' },
          'A simple form'
        )
      ),
      React.createElement(
        'li',
        null,
        React.createElement(
          'a',
          { href: '#moreEasyUIElements' },
          'More EasyUI elements'
        ),
        React.createElement(
          'ul',
          null,
          React.createElement(
            'li',
            null,
            React.createElement(
              'a',
              { href: '#easyUILayout' },
              'EasyUI-Layout'
            )
          ),
          React.createElement(
            'li',
            null,
            React.createElement(
              'a',
              { href: '#easyUIDragAndDrop' },
              'EasyUI-DragAndDrop'
            )
          ),
          React.createElement(
            'li',
            null,
            React.createElement(
              'a',
              { href: 'easyUIRichTextarea' },
              'EasyUI-RichTextarea'
            )
          )
        )
      )
    )
  );
};

module.exports = Contents;

},{"../../easyui-jsx":24,"../inlineCode":5}],11:[function(require,module,exports){
'use strict';

require('../../easyui-jsx');

var Next = require('../next'),
    Previous = require('../previous'),
    Contents = require('../contents');

var EasyUIDragAndDrop = function EasyUIDragAndDrop() {
  return React.createElement(
    'section',
    null,
    React.createElement(
      'nav',
      null,
      React.createElement(
        Next,
        { href: '#easyUIRichTextarea' },
        'EasyUI RichTextarea'
      ),
      React.createElement(
        Previous,
        { href: '#easyUILayout' },
        'EasyUI Layout'
      ),
      React.createElement(Contents, null)
    ),
    React.createElement(
      'h2',
      null,
      'EasyUI DragAndDrop'
    ),
    React.createElement(
      'p',
      null,
      'Drag and drop elements including an explorer and a rubbish bin.'
    )
  );
};

module.exports = EasyUIDragAndDrop;

},{"../../easyui-jsx":24,"../contents":4,"../next":6,"../previous":7}],12:[function(require,module,exports){
'use strict';

require('../../easyui-jsx');

var Next = require('../next'),
    Previous = require('../previous'),
    Contents = require('../contents'),
    BlockCode = require('../blockCode'),
    InlineCode = require('../inlineCode');

var EasyUIElements = function EasyUIElements() {
  return React.createElement(
    'section',
    null,
    React.createElement(
      'nav',
      null,
      React.createElement(
        Next,
        { href: '#theRenderMethod' },
        'The ',
        React.createElement(
          InlineCode,
          null,
          'render()'
        ),
        ' method'
      ),
      React.createElement(
        Previous,
        { href: '#functionalElements' },
        'Functional elements'
      ),
      React.createElement(Contents, null)
    ),
    React.createElement(
      'h2',
      null,
      'EasyUI elements'
    ),
    React.createElement(
      BlockCode,
      null,
      'require(\'easyui-jsx\');\n\nconst easyui = require(\'easyui\'),\n      { Body, Button } = easyui;\n\nconst body = new Body(),\n      button = <Button>Click me...</Button>;\n\nbutton.onClick(function() {\n  alert(\'Clicked!\');\n});\n\nbody.append(button);'
    ),
    React.createElement(
      'p',
      null,
      'Creating EasyUI elements from JSX involves nothing more than employing the relevant class. And since the JSX results in an instance of an EasyUI class, in this case the ',
      React.createElement(
        InlineCode,
        null,
        'Button'
      ),
      ' class, its methods can be called against it directly.'
    )
  );
};

module.exports = EasyUIElements;

},{"../../easyui-jsx":24,"../blockCode":3,"../contents":4,"../inlineCode":5,"../next":6,"../previous":7}],13:[function(require,module,exports){
'use strict';

require('../../easyui-jsx');

var Next = require('../next'),
    Previous = require('../previous'),
    Contents = require('../contents');

var EasyUILayout = function EasyUILayout() {
  return React.createElement(
    'section',
    null,
    React.createElement(
      'nav',
      null,
      React.createElement(
        Next,
        { href: '#easyUIDragAndDrop' },
        'EasyUI DragAndDrop'
      ),
      React.createElement(
        Previous,
        { href: '#moreEasyUIElements' },
        'More EasyUI elements'
      ),
      React.createElement(Contents, null)
    ),
    React.createElement(
      'h2',
      null,
      'EasyUI Layout'
    ),
    React.createElement(
      'p',
      null,
      'Layout elements that work with CSS flexbox.'
    )
  );
};

module.exports = EasyUILayout;

},{"../../easyui-jsx":24,"../contents":4,"../next":6,"../previous":7}],14:[function(require,module,exports){
'use strict';

require('../../easyui-jsx');

var Previous = require('../previous'),
    Contents = require('../contents');

var EasyUIRichTextarea = function EasyUIRichTextarea() {
  return React.createElement(
    'section',
    null,
    React.createElement(
      'nav',
      null,
      React.createElement(
        Previous,
        { href: '#easyUIDragAndDrop' },
        'EasyUI DragAndDrop'
      ),
      React.createElement(Contents, null)
    ),
    React.createElement(
      'h2',
      null,
      'EasyUI RichTextarea'
    ),
    React.createElement(
      'p',
      null,
      'A textarea element that handles and hands off events well.'
    )
  );
};

module.exports = EasyUIRichTextarea;

},{"../../easyui-jsx":24,"../contents":4,"../previous":7}],15:[function(require,module,exports){
'use strict';

require('../../easyui-jsx');

var Next = require('../next'),
    Previous = require('../previous'),
    Contents = require('../contents'),
    BlockCode = require('../blockCode'),
    InlineCode = require('../inlineCode');

var TheRenderMethod = function TheRenderMethod() {
  return React.createElement(
    'section',
    null,
    React.createElement(
      'nav',
      null,
      React.createElement(
        Next,
        { href: '#theExampleOfThisDocumentation' },
        'The example of this documentation'
      ),
      React.createElement(
        Previous,
        { href: '#theRenderMethod' },
        'The ',
        React.createElement(
          InlineCode,
          null,
          'render()'
        ),
        ' method'
      ),
      React.createElement(Contents, null)
    ),
    React.createElement(
      'h2',
      null,
      'Extending an EasyUI class'
    ),
    React.createElement(
      BlockCode,
      null,
      'require(\'easyui-jsx\');\n\nconst easyui = require(\'easyui\'),\n      { Body, Button } = easyui;\n\nclass Example extends Button {\n  click() {\n    const { message } = this.properties;\n\n    alert(message)\n  }\n\n  static fromProperties(properties) {\n    return Button.fromProperties(Example, properties);\n  }\n}\n\nExample.tagName = \'button\'; /// Optional.\n\nconst example = () => {\n  const body = new Body(),\n        example =\n\n          <Example message="Clicked!">\n          Click me...\n          </Example>\n\n        ;\n\n  example.onClick(function() {\n    example.click();\n  });\n\n  body.append(example);\n};'
    ),
    React.createElement(
      'p',
      null,
      'This is the preferred way of creating your own elements and is the way that JSX support has been added to the EasyUI elements themselves.'
    ),
    React.createElement(
      'p',
      null,
      'You can extend any EasyUI class, including the ',
      React.createElement(
        InlineCode,
        null,
        'Element'
      ),
      ' class. Use the static ',
      React.createElement(
        InlineCode,
        null,
        'fromProperties()'
      ),
      ' factory method and from there invoke the ',
      React.createElement(
        InlineCode,
        null,
        'fromProperties()'
      ),
      ' method of the class you are extending.'
    ),
    React.createElement(
      'p',
      null,
      'Note that not only can the ',
      React.createElement(
        InlineCode,
        null,
        'onClick()'
      ),
      ' method can be called, because the ',
      React.createElement(
        InlineCode,
        null,
        'Example'
      ),
      ' class inherits from the ',
      React.createElement(
        InlineCode,
        null,
        'Button'
      ),
      ' class, but also that the ',
      React.createElement(
        InlineCode,
        null,
        'click()'
      ),
      ' method can now be called, because what is returned is an instance of the ',
      React.createElement(
        InlineCode,
        null,
        'Example'
      ),
      ' class.'
    )
  );
};

module.exports = TheRenderMethod;

},{"../../easyui-jsx":24,"../blockCode":3,"../contents":4,"../inlineCode":5,"../next":6,"../previous":7}],16:[function(require,module,exports){
'use strict';

require('../../easyui-jsx');

var Next = require('../next'),
    Previous = require('../previous'),
    Contents = require('../contents'),
    BlockCode = require('../blockCode'),
    InlineCode = require('../inlineCode');

var FunctionalElements = function FunctionalElements() {
  return React.createElement(
    'section',
    null,
    React.createElement(
      'nav',
      null,
      React.createElement(
        Next,
        { href: '#easyUIElements' },
        'EasyUI elements'
      ),
      React.createElement(
        Previous,
        { href: '#appendingElementsToTheDOM' },
        'Appending elements to the DOM'
      ),
      React.createElement(Contents, null)
    ),
    React.createElement(
      'h2',
      null,
      'Functional elements'
    ),
    React.createElement(
      BlockCode,
      null,
      'require(\'easyui-jsx\');\n\nconst easyui = require(\'easyui\'),\n      { Body } = easyui;\n\nconst Div = (properties) => {\n  const { className } = properties,\n        { childElements } = properties;\n\n  return (\n\n    <div className={className}>\n    {childElements}\n    </div>\n\n  );\n};\n\nconst body = new Body();\n\nbody.append(\n\n  <Div className="example">\n  An easy example.\n  </Div>\n\n);'
    ),
    React.createElement(
      'p',
      null,
      'JSX can be returned from functions. These functions are passed the attributes of the JSX that references them as a ',
      React.createElement(
        InlineCode,
        null,
        'properties'
      ),
      ' argument. The ',
      React.createElement(
        InlineCode,
        null,
        'childElements'
      ),
      ' property of that argument gives access to child elements.'
    ),
    React.createElement(
      'p',
      null,
      'In EasyUI-JSX parlance, in relation to React or Reaction:'
    ),
    React.createElement(
      'ul',
      null,
      React.createElement(
        'li',
        null,
        React.createElement(
          InlineCode,
          null,
          'props'
        ),
        ' becomes ',
        React.createElement(
          InlineCode,
          null,
          'properties'
        )
      ),
      React.createElement(
        'li',
        null,
        React.createElement(
          InlineCode,
          null,
          'children'
        ),
        ' becomes ',
        React.createElement(
          InlineCode,
          null,
          'childElements'
        )
      )
    )
  );
};

module.exports = FunctionalElements;

},{"../../easyui-jsx":24,"../blockCode":3,"../contents":4,"../inlineCode":5,"../next":6,"../previous":7}],17:[function(require,module,exports){
'use strict';

require('../../easyui-jsx');

var Next = require('../next'),
    Previous = require('../previous'),
    Contents = require('../contents'),
    BlockCode = require('../blockCode'),
    InlineCode = require('../inlineCode');

var GettingStarted = function GettingStarted() {
  return React.createElement(
    'section',
    null,
    React.createElement(
      'nav',
      null,
      React.createElement(
        Next,
        { href: '#appendingElementsToTheDOM' },
        'Appending elements to the DOM'
      ),
      React.createElement(
        Previous,
        { href: '#jsxIsGreat' },
        'JSX is great'
      ),
      React.createElement(Contents, null)
    ),
    React.createElement(
      'h2',
      null,
      'Getting started'
    ),
    React.createElement(
      BlockCode,
      null,
      'require(\'easyui-jsx\');\n\nconst easyui = require(\'easyui\'),\n      { Body } = easyui;\n\nconst body = new Body();\n\nbody.append(\n\n  <div className="example">\n    An easy example.\n  </div>\n\n);'
    ),
    React.createElement(
      'p',
      null,
      'Instructions for building this example can be found in the readme file. Once it is running, this example can be replaced with any other from this documentation. There are two things that need bearing in mind when doing so:'
    ),
    React.createElement(
      'ol',
      null,
      React.createElement(
        'li',
        null,
        'The ',
        React.createElement(
          InlineCode,
          null,
          '\'use strict\''
        ),
        ' directive is missing from the examples here and should be left in place.'
      ),
      React.createElement(
        'li',
        null,
        'The ',
        React.createElement(
          InlineCode,
          null,
          'require(\'easyui-jsx\')'
        ),
        ' directives here require the actual npm module. However, this is not available from within the project itself and so you must replace it with a local ',
        React.createElement(
          InlineCode,
          null,
          'require(\'./easyui-jsx\')'
        ),
        ' directive.'
      )
    ),
    React.createElement(
      'p',
      null,
      'You are of course free to build the examples entirely outside of this project, the instructions given here and in the readme file are just probably the quickest way to get started for neophytes.'
    )
  );
};

module.exports = GettingStarted;

},{"../../easyui-jsx":24,"../blockCode":3,"../contents":4,"../inlineCode":5,"../next":6,"../previous":7}],18:[function(require,module,exports){
'use strict';

require('../../easyui-jsx');

var Next = require('../next'),
    Contents = require('../contents'),
    BlockCode = require('../blockCode'),
    InlineCode = require('../inlineCode');

var Introduction = function Introduction() {
  return React.createElement(
    'section',
    null,
    React.createElement(
      'nav',
      null,
      React.createElement(
        Next,
        { href: '#jsxIsGreat' },
        'JSX is great'
      ),
      React.createElement(Contents, null)
    ),
    React.createElement(
      'h2',
      null,
      'Introduction'
    ),
    React.createElement(
      BlockCode,
      null,
      'require(\'easyui-jsx\');\n\nconst easyui = require(\'easyui\'),\n      { Body } = easyui;\n\nconst body = new Body();\n\nbody.append(\n\n  <div className="example">\n    An easy example.\n  </div>\n\n);'
    ),
    React.createElement(
      'p',
      null,
      'These pages give some examples of the use of ',
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
      '. It is easy to combine these two technologies in practice, as the first example shows.'
    ),
    React.createElement(
      'p',
      null,
      'It also turned out not to be very difficult to implement this combination. JSX transpiles into a call to ',
      React.createElement(
        InlineCode,
        null,
        'React.createClass(...)'
      ),
      '. So all that needed to be done was to ',
      React.createElement(
        'a',
        { href: 'https://github.com/djalbat/EasyUI-JSX/blob/master/es6/easyui-jsx.js' },
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
        InlineCode,
        null,
        'Element'
      ),
      ' class in order to enable elements to apply the properties they are passed.'
    )
  );
};

module.exports = Introduction;

},{"../../easyui-jsx":24,"../blockCode":3,"../contents":4,"../inlineCode":5,"../next":6}],19:[function(require,module,exports){
'use strict';

require('../../easyui-jsx');

var Next = require('../next'),
    Previous = require('../previous'),
    Contents = require('../contents');

var JSXIsGreat = function JSXIsGreat() {
  return React.createElement(
    'section',
    null,
    React.createElement(
      'nav',
      null,
      React.createElement(
        Next,
        { href: '#gettingStarted' },
        'Getting started'
      ),
      React.createElement(
        Previous,
        { href: '#introduction' },
        'Introduction'
      ),
      React.createElement(Contents, null)
    ),
    React.createElement(
      'h2',
      null,
      'JSX is great'
    ),
    React.createElement(
      'p',
      null,
      'It is because it allows you to do three crucial things:'
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
        '. This is much better than having a view class and a model class and having one inherit from the other, say. JSX allows you to inline the view code, so to speak, as well as connect it to the surrounding model code in a straightforward manner.'
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
      'Also JSX just embeds well into JavaScript. Compare this with older technologies such as JSP, which try to embed imperative languages in declarative ones. For several reasons this can be nightmarish. But the other way round happens to work really well.'
    )
  );
};

module.exports = JSXIsGreat;

},{"../../easyui-jsx":24,"../contents":4,"../next":6,"../previous":7}],20:[function(require,module,exports){
'use strict';

require('../../easyui-jsx');

var Next = require('../next'),
    Previous = require('../previous'),
    Contents = require('../contents');

var MoreEasyUIElements = function MoreEasyUIElements() {
  return React.createElement(
    'section',
    null,
    React.createElement(
      'nav',
      null,
      React.createElement(
        Next,
        { href: '#easyUILayout' },
        'EasyUI Layout'
      ),
      React.createElement(
        Previous,
        { href: '#aSimpleForm' },
        'A simple form'
      ),
      React.createElement(Contents, null)
    ),
    React.createElement(
      'h2',
      null,
      'More EasyUI elements'
    ),
    React.createElement(
      'p',
      null,
      'These are divided between three projects:'
    ),
    React.createElement(
      'ul',
      null,
      React.createElement(
        'li',
        null,
        React.createElement(
          'a',
          { href: '#easyUILayout' },
          'EasyUI-Layout'
        )
      ),
      React.createElement(
        'li',
        null,
        React.createElement(
          'a',
          { href: '#easyUIDragAndDrop' },
          'EasyUI-DragAndDrop'
        )
      ),
      React.createElement(
        'li',
        null,
        React.createElement(
          'a',
          { href: 'easyUIRichTextarea' },
          'EasyUI-RichTextarea'
        )
      )
    ),
    React.createElement(
      'p',
      null,
      'These are specialist projects to some extent and are not for everyone. Hopefully their number and utility will grow over time.'
    )
  );
};

module.exports = MoreEasyUIElements;

},{"../../easyui-jsx":24,"../contents":4,"../next":6,"../previous":7}],21:[function(require,module,exports){
'use strict';

require('../../easyui-jsx');

var Next = require('../next'),
    Previous = require('../previous'),
    Contents = require('../contents'),
    InlineCode = require('../inlineCode');

var TheElementClass = function TheElementClass() {
  return React.createElement(
    'section',
    null,
    React.createElement(
      'nav',
      null,
      React.createElement(
        Next,
        { href: '#aSimpleForm' },
        'A simple form'
      ),
      React.createElement(
        Previous,
        { href: '#theExampleOfThisDocumentation' },
        'The example of this documentation'
      ),
      React.createElement(Contents, null)
    ),
    React.createElement(
      'h2',
      null,
      'The ',
      React.createElement(
        InlineCode,
        null,
        'Element'
      ),
      ' class'
    ),
    React.createElement(
      'p',
      null,
      'EasyUI does not enshrine the concept of a component, unlike React and Reaction. Instead there are only elements. An element is meant to be seen as somewhat virtual, abstracting away from a real, underlying DOM element.'
    ),
    React.createElement(
      'p',
      null,
      'As mentioned previously, all elements are instances of the ',
      React.createElement(
        InlineCode,
        null,
        'Element'
      ),
      ' class, or a class that extends it. This class has evolved over time and has been written care. The source is here:'
    ),
    React.createElement(
      'ul',
      null,
      React.createElement(
        'li',
        null,
        React.createElement(
          'a',
          { href: 'https://github.com/djalbat/EasyUI/blob/master/es6/element.js' },
          'element.js'
        )
      )
    ),
    React.createElement(
      'p',
      null,
      'Note that the constructor defines a ',
      React.createElement(
        InlineCode,
        null,
        'domElement'
      ),
      ' property which is a reference to the underlying DOM element. Note also that there is no ',
      React.createElement(
        InlineCode,
        null,
        'getDOMElement()'
      ),
      ' method to expose this property. This is quite intentional. Generally at a higher level you should never need a reference to an element\'s underlying DOM element.'
    ),
    React.createElement(
      'p',
      null,
      'This is important: ',
      React.createElement(
        'em',
        null,
        'with EasyUI there is no model'
      ),
      '. You manipulate the view, namely the DOM, directly, albeit via this thin layer of abstraction. So the ',
      React.createElement(
        InlineCode,
        null,
        'Element'
      ),
      ' class has methods to append elements to others, set attributes and classes, register event handlers and so on.'
    ),
    React.createElement(
      'p',
      null,
      'For those coming from a React or similar background this may take some getting used to. React adheres quite closely to the MVC paradigm. Manipulate the model, they say, and the view will magically take care of itself. With EasyUI on the other hand there is no magic. There is still an abstraction but it is cleaner, more honest perhaps.'
    )
  );
};

module.exports = TheElementClass;

},{"../../easyui-jsx":24,"../contents":4,"../inlineCode":5,"../next":6,"../previous":7}],22:[function(require,module,exports){
'use strict';

require('../../easyui-jsx');

var Next = require('../next'),
    Previous = require('../previous'),
    Contents = require('../contents'),
    BlockCode = require('../blockCode'),
    InlineCode = require('../inlineCode');

var AGoodExampleThisDocumentation = function AGoodExampleThisDocumentation() {
  return React.createElement(
    'section',
    null,
    React.createElement(
      'nav',
      null,
      React.createElement(
        Next,
        { href: '#theElementClass' },
        'The ',
        React.createElement(
          InlineCode,
          null,
          'Element'
        ),
        ' class'
      ),
      React.createElement(
        Previous,
        { href: '#extendingAnEasyUIClass' },
        'Extending an EasyUI class'
      ),
      React.createElement(Contents, null)
    ),
    React.createElement(
      'h2',
      null,
      'The example of this documentation'
    ),
    React.createElement(
      BlockCode,
      null,
      'const insertSections = () => {\n  const headerDOMElement = document.querySelector(\'header\'),\n        header = Element.fromDOMElement(headerDOMElement);\n\n  forEachSection((section) => {\n    section.insertAfter(header);\n  });\n};\n\nconst revealSection = () => {\n  forEachSection((section) => {\n    section.hide();\n  });\n\n  const section = fragmentToSectionMap[fragment]\n                    || introduction;\n\n  section.show();\n};\n\nconst forEachSection = (callback) => {\n  const fragments = Object.keys(fragmentToSectionMap);\n\n  fragments.forEach((fragment) => {\n    const section = fragmentToSectionMap[fragment];\n\n    callback(section);\n  });\n};\n\ninsertSections();\n\nfragment.onChange(revealSection);\n\nrevealSection();'
    ),
    React.createElement(
      'p',
      null,
      'The ',
      React.createElement(
        'a',
        { href: 'https://github.com/djalbat/EasyUI-JSX/blob/master/es6/docs.js' },
        'docs.js'
      ),
      ' file shows how easy it is to put together a basic single page web application. The approach will not scale indefinitely, sooner or later the sections would have to be generated from a data source rather than be hard-coded.'
    ),
    React.createElement(
      'p',
      null,
      'Nonetheless, it serves to highlight a key point, which is that all elements are instances of the ',
      React.createElement(
        InlineCode,
        null,
        'Element'
      ),
      ' class, or a class that extends it. In this case this means that the ',
      React.createElement(
        InlineCode,
        null,
        'show()'
      ),
      ' and ',
      React.createElement(
        InlineCode,
        null,
        'hide()'
      ),
      ' methods can been used to reveal the relevant section whenever the hash fragment changes.'
    )
  );
};

module.exports = AGoodExampleThisDocumentation;

},{"../../easyui-jsx":24,"../blockCode":3,"../contents":4,"../inlineCode":5,"../next":6,"../previous":7}],23:[function(require,module,exports){
'use strict';

require('../../easyui-jsx');

var Next = require('../next'),
    Previous = require('../previous'),
    Contents = require('../contents'),
    BlockCode = require('../blockCode'),
    InlineCode = require('../inlineCode');

var TheRenderMethod = function TheRenderMethod() {
  return React.createElement(
    'section',
    null,
    React.createElement(
      'nav',
      null,
      React.createElement(
        Next,
        { href: '#extendingAnEasyUIClass' },
        'Extending an EasyUI class'
      ),
      React.createElement(
        Previous,
        { href: '#easyUIElements' },
        'EasyUI elements'
      ),
      React.createElement(Contents, null)
    ),
    React.createElement(
      'h2',
      null,
      'The ',
      React.createElement(
        InlineCode,
        null,
        'render()'
      ),
      ' method'
    ),
    React.createElement(
      BlockCode,
      null,
      'require(\'easyui-jsx\');\n\nconst easyui = require(\'easyui\'),\n      { Body } = easyui;\n\nclass Example {\n  constructor(properties) {\n    this.properties = properties;\n  }\n\n  click(message) {\n    alert(message)\n  }\n\n  render() {\n    const { message } = this.properties;\n\n    return (\n\n      <button onClick={() => {\n\n                        this.click(message);\n\n                      }}\n      >\n        Click me...\n      </button>\n\n    );\n  }\n}\n\nconst body = new Body(),\n      example =\n\n        <Example message="Clicked!">\n        Click me...\n        </Example>\n\n      ;\n\nbody.append(example);'
    ),
    React.createElement(
      'p',
      null,
      'This is the most straightforward way to create your own elements, and is more or less akin to the use of the ',
      React.createElement(
        InlineCode,
        null,
        'render()'
      ),
      ' method in React and Reaction.'
    ),
    React.createElement(
      'p',
      null,
      'The pattern consists of a class with a ',
      React.createElement(
        InlineCode,
        null,
        'render()'
      ),
      ' method and an optional constructor to assign its ',
      React.createElement(
        InlineCode,
        null,
        'properties'
      ),
      ' argument to the instance. The instance methods are then available from within the ',
      React.createElement(
        InlineCode,
        null,
        'render()'
      ),
      ' method by way of the ',
      React.createElement(
        InlineCode,
        null,
        'this'
      ),
      ' keyword.'
    ),
    React.createElement(
      'p',
      null,
      'It is important to realise that what is returned will ',
      React.createElement(
        'em',
        null,
        'not'
      ),
      ' be an instance of the class just defined. It will be an instance of whatever class is referenced by the JSX that is returned by the ',
      React.createElement(
        InlineCode,
        null,
        'render()'
      ),
      ' method, or an instance of the ',
      React.createElement(
        InlineCode,
        null,
        'Element'
      ),
      ' class if the tag name is lower case. The utility of this pattern only lies in the fact that it allows JSX to be encapsulated together with some additional functionality that can be easily referenced.'
    )
  );
};

module.exports = TheRenderMethod;

},{"../../easyui-jsx":24,"../blockCode":3,"../contents":4,"../inlineCode":5,"../next":6,"../previous":7}],24:[function(require,module,exports){
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

},{"easyui":25}],25:[function(require,module,exports){
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

},{"./lib/document":26,"./lib/element":27,"./lib/element/body":28,"./lib/element/div":29,"./lib/element/span":30,"./lib/inputElement":31,"./lib/inputElement/button":32,"./lib/inputElement/checkbox":33,"./lib/inputElement/input":34,"./lib/inputElement/link":35,"./lib/inputElement/select":36,"./lib/inputElement/textarea":37,"./lib/misc/bounds":38,"./lib/misc/offset":39,"./lib/window":45}],26:[function(require,module,exports){
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

},{"./mixin/click":40,"./mixin/event":41,"./mixin/mouse":43}],27:[function(require,module,exports){
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
          customHandlerNames = Class.customHandlerNames,
          additionalProperties = Class.additionalPropertes;

      return Element.fromPropertiesAndTagName(Class, properties, tagName, customHandlerNames, additionalProperties);
    }
  }, {
    key: 'fromPropertiesAndTagName',
    value: function fromPropertiesAndTagName(Class, properties, tagName, customHandlerNames, additionalProperties) {
      var html = '<' + tagName + '></' + tagName + '>',
          element = Element.fromHTML(Class, html);

      element.applyProperties(properties, customHandlerNames, additionalProperties);

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

},{"./misc/bounds":38,"./misc/offset":39,"./mixin/click":40,"./mixin/event":41,"./mixin/jsx":42,"./mixin/mouse":43,"./mixin/resize":44}],28:[function(require,module,exports){
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

},{"../element":27}],29:[function(require,module,exports){
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

},{"../element":27}],30:[function(require,module,exports){
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

},{"../element":27}],31:[function(require,module,exports){
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

      return Element.clone(Class, element, remainingArguments);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(Class, html) {
      for (var _len2 = arguments.length, remainingArguments = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        remainingArguments[_key2 - 2] = arguments[_key2];
      }

      return Element.fromHTML(Class, html, remainingArguments);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(Class, domElement) {
      for (var _len3 = arguments.length, remainingArguments = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        remainingArguments[_key3 - 2] = arguments[_key3];
      }

      return Element.fromDOMElement(Class, domElement, remainingArguments);
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

},{"./element":27}],32:[function(require,module,exports){
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

Object.assign(Button, {
  tagName: 'button',
  customHandlerNames: ['onClick']
});

module.exports = Button;

function defaultIntermediateClickHandler(handler, event) {
  var mouseButton = event.button,
      preventDefault = handler(mouseButton);

  return preventDefault;
}

},{"../inputElement":31}],33:[function(require,module,exports){
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

      return InputElement.fromProperties(Class, properties);
    }
  }]);

  return Checkbox;
}(InputElement);

Object.assign(Checkbox, {
  tagName: 'input',
  customHandlerNames: ['onChange'],
  additionalProperties: {
    type: 'checkbox'
  }
});

module.exports = Checkbox;

function defaultIntermediateChangeHandler(handler, event) {
  var checked = this.isChecked(),
      preventDefault = handler(checked);

  return preventDefault;
}

},{"../inputElement":31}],34:[function(require,module,exports){
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

Object.assign(Input, {
  tagName: 'input',
  customHandlerNames: ['onChange']
});

module.exports = Input;

function defaultIntermediateChangeHandler(handler, event) {
  var value = this.getValue(),
      preventDefault = handler(value);

  return preventDefault;
}

},{"../inputElement":31}],35:[function(require,module,exports){
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

Object.assign(Link, {
  tagName: 'a',
  customHandlerNames: ['onClick']
});

module.exports = Link;

function defaultIntermediateClickHandler(handler, event) {
  var href = this.getAttribute('href'),
      preventDefault = handler(href);

  return preventDefault;
}

},{"../inputElement":31}],36:[function(require,module,exports){
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

Object.assign(Select, {
  tagName: 'select',
  customHandlerNames: ['onChange']
});

module.exports = Select;

function defaultIntermediateChangeHandler(handler, event) {
  var selectedOptionValue = this.getSelectedOptionValue(),
      preventDefault = handler(selectedOptionValue);

  return preventDefault;
}

},{"../inputElement":31}],37:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputElement = require('../inputElement');

var Textarea = function (_InputElement) {
  _inherits(Textarea, _InputElement);

  function Textarea(selector, changeHandler, scrollHandler) {
    _classCallCheck(this, Textarea);

    var _this = _possibleConstructorReturn(this, (Textarea.__proto__ || Object.getPrototypeOf(Textarea)).call(this, selector));

    if (changeHandler) {
      _this.onChange(changeHandler);
    }

    if (scrollHandler) {
      _this.onScroll(scrollHandler);
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
    value: function clone(element, changeHandler, scrollHandler) {
      return InputElement.clone(Textarea, element, changeHandler, scrollHandler);
    }
  }, {
    key: 'fromHTML',
    value: function fromHTML(html, changeHandler, scrollHandler) {
      return InputElement.fromHTML(Textarea, html, changeHandler, scrollHandler);
    }
  }, {
    key: 'fromDOMElement',
    value: function fromDOMElement(domElement, changeHandler, scrollHandler) {
      return InputElement.fromDOMElement(Textarea, domElement, changeHandler, scrollHandler);
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

Object.assign(Textarea, {
  tagName: 'textarea',
  customHandlerNames: ['onChange', 'onScroll']
});

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

},{"../inputElement":31}],38:[function(require,module,exports){
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

},{}],39:[function(require,module,exports){
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

},{}],40:[function(require,module,exports){
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

},{}],41:[function(require,module,exports){
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

},{}],42:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function applyProperties(properties, customHandlerNames, additionalProperties) {
  this.properties = {};

  Object.assign(properties, additionalProperties);

  var names = Object.keys(properties);

  names.forEach(function (name) {
    if (name === 'childElements') {
      var childElements = properties['childElements'];

      childElements.forEach(function (childElement) {
        this.append(childElement);
      }.bind(this));
    } else {
      var value = properties[name];

      if (false) {} else if (isCustomHandlerName(name, customHandlerNames)) {
        addCustomHandler(this, name, value);
      } else if (isHandlerName(name)) {
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

function addCustomHandler(element, name, value) {
  var customHandlerName = name,
      ///
  customHandler = value; ///

  element[customHandlerName](customHandler);
}

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

function isCustomHandlerName(name, customHandlerNames) {
  return customHandlerNames && customHandlerNames.includes(name);
}

function isHandlerName(name) {
  return name.match(/^on/);
}

function isAttributeName(name) {
  return attributeNames.includes(name);
}

var attributeNames = ['accept', 'acceptCharset', 'accessKey', 'action', 'allowFullScreen', 'allowTransparency', 'alt', 'async', 'autoComplete', 'autoFocus', 'autoPlay', 'capture', 'cellPadding', 'cellSpacing', 'challenge', 'charSet', 'checked', 'cite', 'classID', 'className', 'colSpan', 'cols', 'content', 'contentEditable', 'contextMenu', 'controls', 'coords', 'crossOrigin', 'data', 'dateTime', 'default', 'defer', 'dir', 'disabled', 'download', 'draggable', 'encType', 'form', 'formAction', 'formEncType', 'formMethod', 'formNoValidate', 'formTarget', 'frameBorder', 'headers', 'height', 'hidden', 'high', 'href', 'hrefLang', 'htmlFor', 'httpEquiv', 'icon', 'id', 'inputMode', 'integrity', 'is', 'keyParams', 'keyType', 'kind', 'label', 'lang', 'list', 'loop', 'low', 'manifest', 'marginHeight', 'marginWidth', 'max', 'maxLength', 'media', 'mediaGroup', 'method', 'min', 'minLength', 'multiple', 'muted', 'name', 'noValidate', 'nonce', 'open', 'optimum', 'pattern', 'placeholder', 'poster', 'preload', 'profile', 'radioGroup', 'readOnly', 'rel', 'required', 'reversed', 'role', 'rowSpan', 'rows', 'sandbox', 'scope', 'scoped', 'scrolling', 'seamless', 'selected', 'shape', 'size', 'sizes', 'span', 'spellCheck', 'src', 'srcDoc', 'srcLang', 'srcSet', 'start', 'step', 'style', 'summary', 'tabIndex', 'target', 'title', 'type', 'useMap', 'value', 'width', 'wmode', 'wrap'];

},{}],43:[function(require,module,exports){
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

},{}],44:[function(require,module,exports){
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

},{}],45:[function(require,module,exports){
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

},{"./mixin/click":40,"./mixin/event":41,"./mixin/mouse":43}],46:[function(require,module,exports){
'use strict';

module.exports = require('./lib/fragmented');

},{"./lib/fragmented":47}],47:[function(require,module,exports){
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkb2NzL2luZGV4LmpzIiwiZXM2L2RvY3MuanMiLCJlczYvZG9jcy9ibG9ja0NvZGUuanMiLCJlczYvZG9jcy9jb250ZW50cy5qcyIsImVzNi9kb2NzL2lubGluZUNvZGUuanMiLCJlczYvZG9jcy9uZXh0LmpzIiwiZXM2L2RvY3MvcHJldmlvdXMuanMiLCJlczYvZG9jcy9zZWN0aW9ucy9hU2ltcGxlRm9ybS5qcyIsImVzNi9kb2NzL3NlY3Rpb25zL2FwcGVuZGluZ0VsZW1lbnRzVG9UaGVET00uanMiLCJlczYvZG9jcy9zZWN0aW9ucy9jb250ZW50cy5qcyIsImVzNi9kb2NzL3NlY3Rpb25zL2Vhc3lVSURyYWdBbmREcm9wLmpzIiwiZXM2L2RvY3Mvc2VjdGlvbnMvZWFzeVVJRWxlbWVudHMuanMiLCJlczYvZG9jcy9zZWN0aW9ucy9lYXN5VUlMYXlvdXQuanMiLCJlczYvZG9jcy9zZWN0aW9ucy9lYXN5VUlSaWNoVGV4dGFyZWEuanMiLCJlczYvZG9jcy9zZWN0aW9ucy9leHRlbmRpbmdBbkVhc3lVSUNsYXNzLmpzIiwiZXM2L2RvY3Mvc2VjdGlvbnMvZnVuY3Rpb25hbEVsZW1lbnRzLmpzIiwiZXM2L2RvY3Mvc2VjdGlvbnMvZ2V0dGluZ1N0YXJ0ZWQuanMiLCJlczYvZG9jcy9zZWN0aW9ucy9pbnRyb2R1Y3Rpb24uanMiLCJlczYvZG9jcy9zZWN0aW9ucy9qc3hJc0dyZWF0LmpzIiwiZXM2L2RvY3Mvc2VjdGlvbnMvbW9yZUVhc3lVSUVsZW1lbnRzLmpzIiwiZXM2L2RvY3Mvc2VjdGlvbnMvdGhlRWxlbWVudENsYXNzLmpzIiwiZXM2L2RvY3Mvc2VjdGlvbnMvdGhlRXhhbXBsZU9mVGhpc0RvY3VtZW50YXRpb24uanMiLCJlczYvZG9jcy9zZWN0aW9ucy90aGVSZW5kZXJNZXRob2QuanMiLCJlczYvZWFzeXVpLWpzeC5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5dWkvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZWFzeXVpL2VzNi9kb2N1bWVudC5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5dWkvZXM2L2VsZW1lbnQuanMiLCJub2RlX21vZHVsZXMvZWFzeXVpL2VzNi9lbGVtZW50L2JvZHkuanMiLCJub2RlX21vZHVsZXMvZWFzeXVpL2VzNi9lbGVtZW50L2Rpdi5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5dWkvZXM2L2VsZW1lbnQvc3Bhbi5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5dWkvZXM2L2lucHV0RWxlbWVudC5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5dWkvZXM2L2lucHV0RWxlbWVudC9idXR0b24uanMiLCJub2RlX21vZHVsZXMvZWFzeXVpL2VzNi9pbnB1dEVsZW1lbnQvY2hlY2tib3guanMiLCJub2RlX21vZHVsZXMvZWFzeXVpL2VzNi9pbnB1dEVsZW1lbnQvaW5wdXQuanMiLCJub2RlX21vZHVsZXMvZWFzeXVpL2VzNi9pbnB1dEVsZW1lbnQvbGluay5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5dWkvZXM2L2lucHV0RWxlbWVudC9zZWxlY3QuanMiLCJub2RlX21vZHVsZXMvZWFzeXVpL2VzNi9pbnB1dEVsZW1lbnQvdGV4dGFyZWEuanMiLCJub2RlX21vZHVsZXMvZWFzeXVpL2VzNi9taXNjL2JvdW5kcy5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5dWkvZXM2L21pc2Mvb2Zmc2V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc3l1aS9lczYvbWl4aW4vY2xpY2suanMiLCJub2RlX21vZHVsZXMvZWFzeXVpL2VzNi9taXhpbi9ldmVudC5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5dWkvZXM2L21peGluL2pzeC5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5dWkvZXM2L21peGluL21vdXNlLmpzIiwibm9kZV9tb2R1bGVzL2Vhc3l1aS9lczYvbWl4aW4vcmVzaXplLmpzIiwibm9kZV9tb2R1bGVzL2Vhc3l1aS9lczYvd2luZG93LmpzIiwibm9kZV9tb2R1bGVzL2ZyYWdtZW50ZWQvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZnJhZ21lbnRlZC9lczYvZnJhZ21lbnRlZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBOztBQUVBLFFBQVEsWUFBUjs7QUFFQSxRQUFRLGNBQVI7O0FBRU0sYUFBUyxRQUFRLFFBQVIsQ0FBVDtBQUFBLElBQ0UsT0FERixHQUNjLE1BRGQsQ0FDRSxPQURGOzs7QUFHTixJQUFNLFdBQVcsUUFBUSwwQkFBUixDQUFqQjtBQUFBLElBQ00sZUFBZSxRQUFRLDhCQUFSLENBRHJCO0FBQUEsSUFFTSxhQUFhLFFBQVEsNEJBQVIsQ0FGbkI7QUFBQSxJQUdNLGlCQUFpQixRQUFRLGdDQUFSLENBSHZCO0FBQUEsSUFJTSw0QkFBNEIsUUFBUSwyQ0FBUixDQUpsQztBQUFBLElBS00scUJBQXFCLFFBQVEsb0NBQVIsQ0FMM0I7QUFBQSxJQU1NLGlCQUFpQixRQUFRLGdDQUFSLENBTnZCO0FBQUEsSUFPTSxrQkFBa0IsUUFBUSxpQ0FBUixDQVB4QjtBQUFBLElBUU0seUJBQXlCLFFBQVEsd0NBQVIsQ0FSL0I7QUFBQSxJQVNNLGdDQUFnQyxRQUFRLCtDQUFSLENBVHRDO0FBQUEsSUFVTSxrQkFBa0IsUUFBUSxpQ0FBUixDQVZ4QjtBQUFBLElBV00sY0FBYyxRQUFRLDZCQUFSLENBWHBCO0FBQUEsSUFZTSxxQkFBcUIsUUFBUSxvQ0FBUixDQVozQjtBQUFBLElBYU0sZUFBZSxRQUFRLDhCQUFSLENBYnJCO0FBQUEsSUFjTSxvQkFBb0IsUUFBUSxtQ0FBUixDQWQxQjtBQUFBLElBZU0scUJBQXFCLFFBQVEsb0NBQVIsQ0FmM0I7O0FBaUJBLElBQU0sZUFBZSxvQkFBQyxZQUFELE9BQXJCO0FBQUEsSUFDTSx1QkFBdUI7QUFDckIsZ0JBQWMsWUFETztBQUVyQixZQUFVLG9CQUFDLFFBQUQsT0FGVztBQUdyQixjQUFZLG9CQUFDLFVBQUQsT0FIUztBQUlyQixrQkFBZ0Isb0JBQUMsY0FBRCxPQUpLO0FBS3JCLDZCQUEyQixvQkFBQyx5QkFBRCxPQUxOO0FBTXJCLHNCQUFvQixvQkFBQyxrQkFBRCxPQU5DO0FBT3JCLGtCQUFnQixvQkFBQyxjQUFELE9BUEs7QUFRckIsbUJBQWlCLG9CQUFDLGVBQUQsT0FSSTtBQVNyQiwwQkFBd0Isb0JBQUMsc0JBQUQsT0FUSDtBQVVyQixpQ0FBK0Isb0JBQUMsNkJBQUQsT0FWVjtBQVdyQixtQkFBaUIsb0JBQUMsZUFBRCxPQVhJO0FBWXJCLGVBQWEsb0JBQUMsV0FBRCxPQVpRO0FBYXJCLHNCQUFvQixvQkFBQyxrQkFBRCxPQWJDO0FBY3JCLGdCQUFjLG9CQUFDLFlBQUQsT0FkTztBQWVyQixxQkFBbUIsb0JBQUMsaUJBQUQsT0FmRTtBQWdCckIsc0JBQW9CLG9CQUFDLGtCQUFEO0FBaEJDLENBRDdCOztBQW9CQSxJQUFNLGlCQUFpQixTQUFqQixjQUFpQixHQUFNO0FBQzNCLE1BQU0sbUJBQW1CLFNBQVMsYUFBVCxDQUF1QixRQUF2QixDQUF6QjtBQUFBLE1BQ00sU0FBUyxRQUFRLGNBQVIsQ0FBdUIsZ0JBQXZCLENBRGY7O0FBR0EsaUJBQWUsVUFBQyxPQUFELEVBQWE7QUFDMUIsWUFBUSxXQUFSLENBQW9CLE1BQXBCO0FBQ0QsR0FGRDtBQUdELENBUEQ7O0FBU0EsSUFBTSxnQkFBZ0IsU0FBaEIsYUFBZ0IsR0FBTTtBQUMxQixpQkFBZSxVQUFDLE9BQUQsRUFBYTtBQUMxQixZQUFRLElBQVI7QUFDRCxHQUZEOztBQUlBLE1BQU0sVUFBVSxxQkFBcUIsUUFBckIsS0FBa0MsWUFBbEQ7O0FBRUEsVUFBUSxJQUFSO0FBQ0QsQ0FSRDs7QUFVQSxJQUFNLGlCQUFpQixTQUFqQixjQUFpQixDQUFDLFFBQUQsRUFBYztBQUNuQyxNQUFNLFlBQVksT0FBTyxJQUFQLENBQVksb0JBQVosQ0FBbEI7O0FBRUEsWUFBVSxPQUFWLENBQWtCLFVBQUMsUUFBRCxFQUFjO0FBQzlCLFFBQU0sVUFBVSxxQkFBcUIsUUFBckIsQ0FBaEI7O0FBRUEsYUFBUyxPQUFUO0FBQ0QsR0FKRDtBQUtELENBUkQ7O0FBVUE7O0FBRUEsU0FBUyxRQUFULENBQWtCLGFBQWxCOztBQUVBOzs7QUMvRUE7O0FBRUEsUUFBUSxlQUFSOztBQUVBLElBQU0sWUFBWSxTQUFaLFNBQVksQ0FBQyxVQUFELEVBQWdCO0FBQUEsTUFDeEIsYUFEd0IsR0FDTixVQURNLENBQ3hCLGFBRHdCOzs7QUFHaEMsU0FFRTtBQUFBO0FBQUEsTUFBTSxXQUFVLE9BQWhCO0FBQXlCO0FBQXpCLEdBRkY7QUFLRCxDQVJEOztBQVVBLE9BQU8sT0FBUCxHQUFpQixTQUFqQjs7O0FDZEE7O0FBRUEsUUFBUSxlQUFSOztBQUVBLElBQU0sV0FBVyxTQUFYLFFBQVcsR0FBTTtBQUNyQixTQUVFO0FBQUE7QUFBQSxNQUFNLFdBQVUsVUFBaEI7QUFDRTtBQUFBO0FBQUEsUUFBRyxNQUFLLFdBQVI7QUFBQTtBQUFBO0FBREYsR0FGRjtBQU9ELENBUkQ7O0FBVUEsT0FBTyxPQUFQLEdBQWlCLFFBQWpCOzs7QUNkQTs7QUFFQSxRQUFRLGVBQVI7O0FBRUEsSUFBTSxhQUFhLFNBQWIsVUFBYSxDQUFDLFVBQUQsRUFBZ0I7QUFBQSxNQUN6QixhQUR5QixHQUNQLFVBRE8sQ0FDekIsYUFEeUI7OztBQUdqQyxTQUVFO0FBQUE7QUFBQSxNQUFNLFdBQVUsUUFBaEI7QUFBMEI7QUFBMUIsR0FGRjtBQUtELENBUkQ7O0FBVUEsT0FBTyxPQUFQLEdBQWlCLFVBQWpCOzs7QUNkQTs7QUFFQSxRQUFRLGVBQVI7O0FBRUEsSUFBTSxPQUFPLFNBQVAsSUFBTyxDQUFDLFVBQUQsRUFBZ0I7QUFBQSxNQUNwQixJQURvQixHQUNHLFVBREgsQ0FDcEIsSUFEb0I7QUFBQSxNQUNkLGFBRGMsR0FDRyxVQURILENBQ2QsYUFEYzs7O0FBRzNCLFNBRUU7QUFBQTtBQUFBLE1BQU0sV0FBVSxNQUFoQjtBQUNFO0FBQUE7QUFBQSxRQUFHLE1BQU0sSUFBVDtBQUFBO0FBQXNCO0FBQXRCO0FBREYsR0FGRjtBQU9ELENBVkQ7O0FBWUEsT0FBTyxPQUFQLEdBQWlCLElBQWpCOzs7QUNoQkE7O0FBRUEsUUFBUSxlQUFSOztBQUVBLElBQU0sV0FBVyxTQUFYLFFBQVcsQ0FBQyxVQUFELEVBQWdCO0FBQUEsTUFDeEIsSUFEd0IsR0FDRCxVQURDLENBQ3hCLElBRHdCO0FBQUEsTUFDbEIsYUFEa0IsR0FDRCxVQURDLENBQ2xCLGFBRGtCOzs7QUFHL0IsU0FFRTtBQUFBO0FBQUEsTUFBTSxXQUFVLFVBQWhCO0FBQ0U7QUFBQTtBQUFBLFFBQUcsTUFBTSxJQUFUO0FBQUE7QUFBMEI7QUFBMUI7QUFERixHQUZGO0FBT0QsQ0FWRDs7QUFZQSxPQUFPLE9BQVAsR0FBaUIsUUFBakI7OztBQ2hCQTs7QUFFQSxRQUFRLGtCQUFSOztBQUVNLGFBQVMsUUFBUSxRQUFSLENBQVQ7QUFBQSxJQUNFLEtBREYsR0FDOEIsTUFEOUIsQ0FDRSxLQURGO0FBQUEsSUFDUyxRQURULEdBQzhCLE1BRDlCLENBQ1MsUUFEVDtBQUFBLElBQ21CLE1BRG5CLEdBQzhCLE1BRDlCLENBQ21CLE1BRG5COzs7QUFHTixJQUFNLE9BQU8sUUFBUSxTQUFSLENBQWI7QUFBQSxJQUNNLFdBQVcsUUFBUSxhQUFSLENBRGpCO0FBQUEsSUFFTSxXQUFXLFFBQVEsYUFBUixDQUZqQjtBQUFBLElBR00sWUFBWSxRQUFRLGNBQVIsQ0FIbEI7QUFBQSxJQUlNLGFBQWEsUUFBUSxlQUFSLENBSm5COztBQU1BLElBQU0sY0FBYyxTQUFkLFdBQWMsR0FBTTtBQUN4QixNQUFNLFdBQVcsb0JBQUMsUUFBRCxJQUFVLGFBQVksWUFBdEIsR0FBakI7QUFBQSxNQUNNLFFBQVEsb0JBQUMsS0FBRCxJQUFPLFVBQVMsTUFBaEIsRUFBdUIsYUFBWSxjQUFuQyxHQURkOztBQUdBLFNBRUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQyxZQUFEO0FBQUEsVUFBTSxNQUFLLHFCQUFYO0FBQUE7QUFBQSxPQURGO0FBRUU7QUFBQyxnQkFBRDtBQUFBLFVBQVUsTUFBSyxrQkFBZjtBQUFBO0FBQXNDO0FBQUE7QUFBQSxZQUFNLFdBQVUsUUFBaEI7QUFBQTtBQUFBLFNBQXRDO0FBQUE7QUFBQSxPQUZGO0FBR0UsMEJBQUMsUUFBRDtBQUhGLEtBREY7QUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTkY7QUFPRTtBQUFDLGVBQUQ7QUFBQTtBQUFBO0FBQUEsS0FQRjtBQXFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBckNGO0FBeUNFO0FBQUE7QUFBQTtBQUFBO0FBR1k7QUFBQTtBQUFBLFVBQUcsTUFBSyxtQ0FBUjtBQUFBO0FBQUEsT0FIWjtBQUFBO0FBQUEsS0F6Q0Y7QUErQ0U7QUFBQTtBQUFBO0FBQUE7QUFDVztBQUFDLGtCQUFEO0FBQUE7QUFBQTtBQUFBLE9BRFg7QUFBQTtBQUVrQjtBQUFDLGtCQUFEO0FBQUE7QUFBQTtBQUFBLE9BRmxCO0FBQUE7QUFBQSxLQS9DRjtBQW9ERTtBQUFBO0FBQUE7QUFDRyxXQURIO0FBRUcsY0FGSDtBQUdFO0FBQUMsY0FBRDtBQUFBLFVBQVEsVUFBVSxrQkFBQyxLQUFELEVBQVc7QUFDbkIsa0JBQU0sUUFBTixDQUFlLEtBQWY7QUFDRDtBQUZUO0FBSUU7QUFBQTtBQUFBLFlBQVEsT0FBTSxJQUFkO0FBQUE7QUFBQSxTQUpGO0FBS0U7QUFBQTtBQUFBLFlBQVEsT0FBTSxNQUFkO0FBQUE7QUFBQSxTQUxGO0FBTUU7QUFBQTtBQUFBLFlBQVEsT0FBTSxPQUFkO0FBQUE7QUFBQSxTQU5GO0FBT0U7QUFBQTtBQUFBLFlBQVEsT0FBTSxNQUFkLEVBQXFCLGNBQXJCO0FBQUE7QUFBQTtBQVBGLE9BSEY7QUFZRTtBQUFBO0FBQUEsVUFBUSxTQUFTLGlCQUFDLEtBQUQsRUFBVztBQUNWLGdCQUFNLFFBQVEsTUFBTSxRQUFOLEVBQWQ7QUFBQSxnQkFDTSxpQkFBaUIsSUFEdkI7O0FBR0EscUJBQVMsUUFBVCxDQUFrQixLQUFsQjs7QUFFQSxtQkFBTyxjQUFQO0FBQ0Q7QUFQakI7QUFBQTtBQUFBO0FBWkY7QUFwREYsR0FGRjtBQWlGRCxDQXJGRDs7QUF1RkEsT0FBTyxPQUFQLEdBQWlCLFdBQWpCOzs7QUNwR0E7O0FBRUEsUUFBUSxrQkFBUjs7QUFFQSxJQUFNLE9BQU8sUUFBUSxTQUFSLENBQWI7QUFBQSxJQUNNLFdBQVcsUUFBUSxhQUFSLENBRGpCO0FBQUEsSUFFTSxXQUFXLFFBQVEsYUFBUixDQUZqQjtBQUFBLElBR00sWUFBWSxRQUFRLGNBQVIsQ0FIbEI7QUFBQSxJQUlNLGFBQWEsUUFBUSxlQUFSLENBSm5COztBQU1BLElBQU0sNEJBQTRCLFNBQTVCLHlCQUE0QixHQUFNO0FBQ3RDLFNBRUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQyxZQUFEO0FBQUEsVUFBTSxNQUFLLHFCQUFYO0FBQUE7QUFBQSxPQURGO0FBRUU7QUFBQyxnQkFBRDtBQUFBLFVBQVUsTUFBSyxhQUFmO0FBQUE7QUFBQSxPQUZGO0FBR0UsMEJBQUMsUUFBRDtBQUhGLEtBREY7QUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTkY7QUFPRTtBQUFDLGVBQUQ7QUFBQTtBQUFBO0FBQUEsS0FQRjtBQXdCRTtBQUFBO0FBQUE7QUFBQTtBQUUyQztBQUFDLGtCQUFEO0FBQUE7QUFBQTtBQUFBLE9BRjNDO0FBQUE7QUFBQSxLQXhCRjtBQTZCRTtBQUFBO0FBQUE7QUFBQTtBQUNxQjtBQUFDLGtCQUFEO0FBQUE7QUFBQTtBQUFBLE9BRHJCO0FBQUE7QUFDOEc7QUFBQyxrQkFBRDtBQUFBO0FBQUE7QUFBQSxPQUQ5RztBQUFBO0FBRXVDO0FBQUMsa0JBQUQ7QUFBQTtBQUFBO0FBQUEsT0FGdkM7QUFBQTtBQUdDO0FBQUMsa0JBQUQ7QUFBQTtBQUFBO0FBQUEsT0FIRDtBQUFBO0FBRzJEO0FBQUMsa0JBQUQ7QUFBQTtBQUFBO0FBQUEsT0FIM0Q7QUFBQTtBQUFBLEtBN0JGO0FBa0NFO0FBQUE7QUFBQTtBQUFBO0FBQzhCO0FBQUMsa0JBQUQ7QUFBQTtBQUFBO0FBQUEsT0FEOUI7QUFBQTtBQUFBO0FBbENGLEdBRkY7QUEwQ0QsQ0EzQ0Q7O0FBNkNBLE9BQU8sT0FBUCxHQUFpQix5QkFBakI7OztBQ3ZEQTs7QUFFQSxRQUFRLGtCQUFSOztBQUVBLElBQU0sYUFBYSxRQUFRLGVBQVIsQ0FBbkI7O0FBRUEsSUFBTSxXQUFXLFNBQVgsUUFBVyxHQUFNO0FBQ3JCLFNBRUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFVBQU0sV0FBVSxVQUFoQjtBQUFBO0FBQUE7QUFERixLQURGO0FBSUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyxlQUFSO0FBQUE7QUFBQTtBQURGLE9BREY7QUFJRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBRyxNQUFLLGFBQVI7QUFBQTtBQUFBO0FBREYsT0FKRjtBQU9FO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFHLE1BQUssaUJBQVI7QUFBQTtBQUFBO0FBREYsT0FQRjtBQVVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFHLE1BQUssNEJBQVI7QUFBQTtBQUFBO0FBREYsT0FWRjtBQWFFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFHLE1BQUsscUJBQVI7QUFBQTtBQUFBO0FBREYsT0FiRjtBQWdCRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBRyxNQUFLLGlCQUFSO0FBQUE7QUFBQTtBQURGLE9BaEJGO0FBbUJFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFHLE1BQUssa0JBQVI7QUFBQTtBQUErQjtBQUFDLHNCQUFEO0FBQUE7QUFBQTtBQUFBLFdBQS9CO0FBQUE7QUFBQTtBQURGLE9BbkJGO0FBc0JFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFHLE1BQUsseUJBQVI7QUFBQTtBQUFBO0FBREYsT0F0QkY7QUF5QkU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyxnQ0FBUjtBQUFBO0FBQUE7QUFERixPQXpCRjtBQTRCRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBRyxNQUFLLGtCQUFSO0FBQUE7QUFBK0I7QUFBQyxzQkFBRDtBQUFBO0FBQUE7QUFBQSxXQUEvQjtBQUFBO0FBQUE7QUFERixPQTVCRjtBQStCRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBRyxNQUFLLGNBQVI7QUFBQTtBQUFBO0FBREYsT0EvQkY7QUFrQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUcsTUFBSyxxQkFBUjtBQUFBO0FBQUEsU0FERjtBQUVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxnQkFBRyxNQUFLLGVBQVI7QUFBQTtBQUFBO0FBREYsV0FERjtBQUlFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxnQkFBRyxNQUFLLG9CQUFSO0FBQUE7QUFBQTtBQURGLFdBSkY7QUFPRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsZ0JBQUcsTUFBSyxvQkFBUjtBQUFBO0FBQUE7QUFERjtBQVBGO0FBRkY7QUFsQ0Y7QUFKRixHQUZGO0FBMERELENBM0REOztBQTZEQSxPQUFPLE9BQVAsR0FBaUIsUUFBakI7OztBQ25FQTs7QUFFQSxRQUFRLGtCQUFSOztBQUVBLElBQU0sT0FBTyxRQUFRLFNBQVIsQ0FBYjtBQUFBLElBQ00sV0FBVyxRQUFRLGFBQVIsQ0FEakI7QUFBQSxJQUVNLFdBQVcsUUFBUSxhQUFSLENBRmpCOztBQUlBLElBQU0sb0JBQW9CLFNBQXBCLGlCQUFvQixHQUFNO0FBQzlCLFNBRUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQyxZQUFEO0FBQUEsVUFBTSxNQUFLLHFCQUFYO0FBQUE7QUFBQSxPQURGO0FBRUU7QUFBQyxnQkFBRDtBQUFBLFVBQVUsTUFBSyxlQUFmO0FBQUE7QUFBQSxPQUZGO0FBR0UsMEJBQUMsUUFBRDtBQUhGLEtBREY7QUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTkY7QUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEYsR0FGRjtBQWVELENBaEJEOztBQWtCQSxPQUFPLE9BQVAsR0FBaUIsaUJBQWpCOzs7QUMxQkE7O0FBRUEsUUFBUSxrQkFBUjs7QUFFQSxJQUFNLE9BQU8sUUFBUSxTQUFSLENBQWI7QUFBQSxJQUNNLFdBQVcsUUFBUSxhQUFSLENBRGpCO0FBQUEsSUFFTSxXQUFXLFFBQVEsYUFBUixDQUZqQjtBQUFBLElBR00sWUFBWSxRQUFRLGNBQVIsQ0FIbEI7QUFBQSxJQUlNLGFBQWEsUUFBUSxlQUFSLENBSm5COztBQU1BLElBQU0saUJBQWlCLFNBQWpCLGNBQWlCLEdBQU07QUFDM0IsU0FFRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFDLFlBQUQ7QUFBQSxVQUFNLE1BQUssa0JBQVg7QUFBQTtBQUFrQztBQUFDLG9CQUFEO0FBQUE7QUFBQTtBQUFBLFNBQWxDO0FBQUE7QUFBQSxPQURGO0FBRUU7QUFBQyxnQkFBRDtBQUFBLFVBQVUsTUFBSyxxQkFBZjtBQUFBO0FBQUEsT0FGRjtBQUdFLDBCQUFDLFFBQUQ7QUFIRixLQURGO0FBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU5GO0FBT0U7QUFBQyxlQUFEO0FBQUE7QUFBQTtBQUFBLEtBUEY7QUFvQkU7QUFBQTtBQUFBO0FBQUE7QUFFZ0Y7QUFBQyxrQkFBRDtBQUFBO0FBQUE7QUFBQSxPQUZoRjtBQUFBO0FBQUE7QUFwQkYsR0FGRjtBQTZCRCxDQTlCRDs7QUFnQ0EsT0FBTyxPQUFQLEdBQWlCLGNBQWpCOzs7QUMxQ0E7O0FBRUEsUUFBUSxrQkFBUjs7QUFFQSxJQUFNLE9BQU8sUUFBUSxTQUFSLENBQWI7QUFBQSxJQUNNLFdBQVcsUUFBUSxhQUFSLENBRGpCO0FBQUEsSUFFTSxXQUFXLFFBQVEsYUFBUixDQUZqQjs7QUFJQSxJQUFNLGVBQWUsU0FBZixZQUFlLEdBQU07QUFDekIsU0FFRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFDLFlBQUQ7QUFBQSxVQUFNLE1BQUssb0JBQVg7QUFBQTtBQUFBLE9BREY7QUFFRTtBQUFDLGdCQUFEO0FBQUEsVUFBVSxNQUFLLHFCQUFmO0FBQUE7QUFBQSxPQUZGO0FBR0UsMEJBQUMsUUFBRDtBQUhGLEtBREY7QUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTkY7QUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEYsR0FGRjtBQWVELENBaEJEOztBQWtCQSxPQUFPLE9BQVAsR0FBaUIsWUFBakI7OztBQzFCQTs7QUFFQSxRQUFRLGtCQUFSOztBQUVBLElBQU0sV0FBVyxRQUFRLGFBQVIsQ0FBakI7QUFBQSxJQUNNLFdBQVcsUUFBUSxhQUFSLENBRGpCOztBQUdBLElBQU0scUJBQXFCLFNBQXJCLGtCQUFxQixHQUFNO0FBQy9CLFNBRUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQyxnQkFBRDtBQUFBLFVBQVUsTUFBSyxvQkFBZjtBQUFBO0FBQUEsT0FERjtBQUVFLDBCQUFDLFFBQUQ7QUFGRixLQURGO0FBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUxGO0FBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GLEdBRkY7QUFjRCxDQWZEOztBQWlCQSxPQUFPLE9BQVAsR0FBaUIsa0JBQWpCOzs7QUN4QkE7O0FBRUEsUUFBUSxrQkFBUjs7QUFFQSxJQUFNLE9BQU8sUUFBUSxTQUFSLENBQWI7QUFBQSxJQUNNLFdBQVcsUUFBUSxhQUFSLENBRGpCO0FBQUEsSUFFTSxXQUFXLFFBQVEsYUFBUixDQUZqQjtBQUFBLElBR00sWUFBWSxRQUFRLGNBQVIsQ0FIbEI7QUFBQSxJQUlNLGFBQWEsUUFBUSxlQUFSLENBSm5COztBQU1BLElBQU0sa0JBQWtCLFNBQWxCLGVBQWtCLEdBQU07QUFDNUIsU0FFRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFDLFlBQUQ7QUFBQSxVQUFNLE1BQUssZ0NBQVg7QUFBQTtBQUFBLE9BREY7QUFFRTtBQUFDLGdCQUFEO0FBQUEsVUFBVSxNQUFLLGtCQUFmO0FBQUE7QUFBc0M7QUFBQyxvQkFBRDtBQUFBO0FBQUE7QUFBQSxTQUF0QztBQUFBO0FBQUEsT0FGRjtBQUdFLDBCQUFDLFFBQUQ7QUFIRixLQURGO0FBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU5GO0FBT0U7QUFBQyxlQUFEO0FBQUE7QUFBQTtBQUFBLEtBUEY7QUEwQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQTFDRjtBQTZDRTtBQUFBO0FBQUE7QUFBQTtBQUNpRDtBQUFDLGtCQUFEO0FBQUE7QUFBQTtBQUFBLE9BRGpEO0FBQUE7QUFFaUI7QUFBQyxrQkFBRDtBQUFBO0FBQUE7QUFBQSxPQUZqQjtBQUFBO0FBRW9HO0FBQUMsa0JBQUQ7QUFBQTtBQUFBO0FBQUEsT0FGcEc7QUFBQTtBQUFBLEtBN0NGO0FBaURFO0FBQUE7QUFBQTtBQUFBO0FBQzZCO0FBQUMsa0JBQUQ7QUFBQTtBQUFBO0FBQUEsT0FEN0I7QUFBQTtBQUNrRztBQUFDLGtCQUFEO0FBQUE7QUFBQTtBQUFBLE9BRGxHO0FBQUE7QUFFVztBQUFDLGtCQUFEO0FBQUE7QUFBQTtBQUFBLE9BRlg7QUFBQTtBQUVvRTtBQUFDLGtCQUFEO0FBQUE7QUFBQTtBQUFBLE9BRnBFO0FBQUE7QUFHaUM7QUFBQyxrQkFBRDtBQUFBO0FBQUE7QUFBQSxPQUhqQztBQUFBO0FBQUE7QUFqREYsR0FGRjtBQTJERCxDQTVERDs7QUE4REEsT0FBTyxPQUFQLEdBQWlCLGVBQWpCOzs7QUN4RUE7O0FBRUEsUUFBUSxrQkFBUjs7QUFFQSxJQUFNLE9BQU8sUUFBUSxTQUFSLENBQWI7QUFBQSxJQUNNLFdBQVcsUUFBUSxhQUFSLENBRGpCO0FBQUEsSUFFTSxXQUFXLFFBQVEsYUFBUixDQUZqQjtBQUFBLElBR00sWUFBWSxRQUFRLGNBQVIsQ0FIbEI7QUFBQSxJQUlNLGFBQWEsUUFBUSxlQUFSLENBSm5COztBQU1BLElBQU0scUJBQXFCLFNBQXJCLGtCQUFxQixHQUFNO0FBQy9CLFNBRUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQyxZQUFEO0FBQUEsVUFBTSxNQUFLLGlCQUFYO0FBQUE7QUFBQSxPQURGO0FBRUU7QUFBQyxnQkFBRDtBQUFBLFVBQVUsTUFBSyw0QkFBZjtBQUFBO0FBQUEsT0FGRjtBQUdFLDBCQUFDLFFBQUQ7QUFIRixLQURGO0FBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU5GO0FBT0U7QUFBQyxlQUFEO0FBQUE7QUFBQTtBQUFBLEtBUEY7QUFrQ0U7QUFBQTtBQUFBO0FBQUE7QUFFaUY7QUFBQyxrQkFBRDtBQUFBO0FBQUE7QUFBQSxPQUZqRjtBQUFBO0FBR007QUFBQyxrQkFBRDtBQUFBO0FBQUE7QUFBQSxPQUhOO0FBQUE7QUFBQSxLQWxDRjtBQXVDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBdkNGO0FBMENFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUMsb0JBQUQ7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUFBO0FBQ3lDO0FBQUMsb0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFEekMsT0FERjtBQUlFO0FBQUE7QUFBQTtBQUNFO0FBQUMsb0JBQUQ7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUFBO0FBQzRDO0FBQUMsb0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFENUM7QUFKRjtBQTFDRixHQUZGO0FBdURELENBeEREOztBQTBEQSxPQUFPLE9BQVAsR0FBaUIsa0JBQWpCOzs7QUNwRUE7O0FBRUEsUUFBUSxrQkFBUjs7QUFFQSxJQUFNLE9BQU8sUUFBUSxTQUFSLENBQWI7QUFBQSxJQUNNLFdBQVcsUUFBUSxhQUFSLENBRGpCO0FBQUEsSUFFTSxXQUFXLFFBQVEsYUFBUixDQUZqQjtBQUFBLElBR00sWUFBWSxRQUFRLGNBQVIsQ0FIbEI7QUFBQSxJQUlNLGFBQWEsUUFBUSxlQUFSLENBSm5COztBQU1BLElBQU0saUJBQWlCLFNBQWpCLGNBQWlCLEdBQU07QUFDM0IsU0FFRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFDLFlBQUQ7QUFBQSxVQUFNLE1BQUssNEJBQVg7QUFBQTtBQUFBLE9BREY7QUFFRTtBQUFDLGdCQUFEO0FBQUEsVUFBVSxNQUFLLGFBQWY7QUFBQTtBQUFBLE9BRkY7QUFHRSwwQkFBQyxRQUFEO0FBSEYsS0FERjtBQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FORjtBQU9FO0FBQUMsZUFBRDtBQUFBO0FBQUE7QUFBQSxLQVBGO0FBcUJFO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FyQkY7QUEwQkU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFDSjtBQUFDLG9CQUFEO0FBQUE7QUFBQTtBQUFBLFNBREk7QUFBQTtBQUFBLE9BREY7QUFJRTtBQUFBO0FBQUE7QUFBQTtBQUNKO0FBQUMsb0JBQUQ7QUFBQTtBQUFBO0FBQUEsU0FESTtBQUFBO0FBRThGO0FBQUMsb0JBQUQ7QUFBQTtBQUFBO0FBQUEsU0FGOUY7QUFBQTtBQUFBO0FBSkYsS0ExQkY7QUFtQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW5DRixHQUZGO0FBMkNELENBNUNEOztBQThDQSxPQUFPLE9BQVAsR0FBaUIsY0FBakI7OztBQ3hEQTs7QUFFQSxRQUFRLGtCQUFSOztBQUVBLElBQU0sT0FBTyxRQUFRLFNBQVIsQ0FBYjtBQUFBLElBQ00sV0FBVyxRQUFRLGFBQVIsQ0FEakI7QUFBQSxJQUVNLFlBQVksUUFBUSxjQUFSLENBRmxCO0FBQUEsSUFHTSxhQUFhLFFBQVEsZUFBUixDQUhuQjs7QUFLQSxJQUFNLGVBQWUsU0FBZixZQUFlLEdBQU07QUFDekIsU0FFRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFDLFlBQUQ7QUFBQSxVQUFNLE1BQUssYUFBWDtBQUFBO0FBQUEsT0FERjtBQUVFLDBCQUFDLFFBQUQ7QUFGRixLQURGO0FBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUxGO0FBTUU7QUFBQyxlQUFEO0FBQUE7QUFBQTtBQUFBLEtBTkY7QUFvQkU7QUFBQTtBQUFBO0FBQUE7QUFDK0M7QUFBQTtBQUFBLFVBQUcsTUFBSyx5REFBUjtBQUFBO0FBQUEsT0FEL0M7QUFBQTtBQUM4SDtBQUFBO0FBQUEsVUFBRyxNQUFLLG1DQUFSO0FBQUE7QUFBQSxPQUQ5SDtBQUFBO0FBQUEsS0FwQkY7QUF3QkU7QUFBQTtBQUFBO0FBQUE7QUFDMkc7QUFBQyxrQkFBRDtBQUFBO0FBQUE7QUFBQSxPQUQzRztBQUFBO0FBRXVDO0FBQUE7QUFBQSxVQUFHLE1BQUsscUVBQVI7QUFBQTtBQUFBLE9BRnZDO0FBQUE7QUFHYztBQUFBO0FBQUEsVUFBRyxNQUFLLGdFQUFSO0FBQUE7QUFBQSxPQUhkO0FBQUE7QUFHaUg7QUFBQyxrQkFBRDtBQUFBO0FBQUE7QUFBQSxPQUhqSDtBQUFBO0FBQUE7QUF4QkYsR0FGRjtBQWtDRCxDQW5DRDs7QUFxQ0EsT0FBTyxPQUFQLEdBQWlCLFlBQWpCOzs7QUM5Q0E7O0FBRUEsUUFBUSxrQkFBUjs7QUFFQSxJQUFNLE9BQU8sUUFBUSxTQUFSLENBQWI7QUFBQSxJQUNNLFdBQVcsUUFBUSxhQUFSLENBRGpCO0FBQUEsSUFFTSxXQUFXLFFBQVEsYUFBUixDQUZqQjs7QUFJQSxJQUFNLGFBQWEsU0FBYixVQUFhLEdBQU07QUFDdkIsU0FFRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFDLFlBQUQ7QUFBQSxVQUFNLE1BQUssaUJBQVg7QUFBQTtBQUFBLE9BREY7QUFFRTtBQUFDLGdCQUFEO0FBQUEsVUFBVSxNQUFLLGVBQWY7QUFBQTtBQUFBLE9BRkY7QUFHRSwwQkFBQyxRQUFEO0FBSEYsS0FERjtBQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FORjtBQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FQRjtBQVVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUFBO0FBQUEsT0FERjtBQU1FO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUFBO0FBQUEsT0FORjtBQWFFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUFBO0FBQUE7QUFiRixLQVZGO0FBNkJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE3QkYsR0FGRjtBQXdDRCxDQXpDRDs7QUEyQ0EsT0FBTyxPQUFQLEdBQWlCLFVBQWpCOzs7QUNuREE7O0FBRUEsUUFBUSxrQkFBUjs7QUFFQSxJQUFNLE9BQU8sUUFBUSxTQUFSLENBQWI7QUFBQSxJQUNNLFdBQVcsUUFBUSxhQUFSLENBRGpCO0FBQUEsSUFFTSxXQUFXLFFBQVEsYUFBUixDQUZqQjs7QUFJQSxJQUFNLHFCQUFxQixTQUFyQixrQkFBcUIsR0FBTTtBQUMvQixTQUVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUMsWUFBRDtBQUFBLFVBQU0sTUFBSyxlQUFYO0FBQUE7QUFBQSxPQURGO0FBRUU7QUFBQyxnQkFBRDtBQUFBLFVBQVUsTUFBSyxjQUFmO0FBQUE7QUFBQSxPQUZGO0FBR0UsMEJBQUMsUUFBRDtBQUhGLEtBREY7QUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTkY7QUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUEY7QUFVRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBRyxNQUFLLGVBQVI7QUFBQTtBQUFBO0FBREYsT0FERjtBQUlFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFHLE1BQUssb0JBQVI7QUFBQTtBQUFBO0FBREYsT0FKRjtBQU9FO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFHLE1BQUssb0JBQVI7QUFBQTtBQUFBO0FBREY7QUFQRixLQVZGO0FBcUJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFyQkYsR0FGRjtBQThCRCxDQS9CRDs7QUFpQ0EsT0FBTyxPQUFQLEdBQWlCLGtCQUFqQjs7O0FDekNBOztBQUVBLFFBQVEsa0JBQVI7O0FBRUEsSUFBTSxPQUFPLFFBQVEsU0FBUixDQUFiO0FBQUEsSUFDTSxXQUFXLFFBQVEsYUFBUixDQURqQjtBQUFBLElBRU0sV0FBVyxRQUFRLGFBQVIsQ0FGakI7QUFBQSxJQUdNLGFBQWEsUUFBUSxlQUFSLENBSG5COztBQUtBLElBQU0sa0JBQWtCLFNBQWxCLGVBQWtCLEdBQU07QUFDNUIsU0FFRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFDLFlBQUQ7QUFBQSxVQUFNLE1BQUssY0FBWDtBQUFBO0FBQUEsT0FERjtBQUVFO0FBQUMsZ0JBQUQ7QUFBQSxVQUFVLE1BQUssZ0NBQWY7QUFBQTtBQUFBLE9BRkY7QUFHRSwwQkFBQyxRQUFEO0FBSEYsS0FERjtBQU1FO0FBQUE7QUFBQTtBQUFBO0FBQVE7QUFBQyxrQkFBRDtBQUFBO0FBQUE7QUFBQSxPQUFSO0FBQUE7QUFBQSxLQU5GO0FBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVBGO0FBWUU7QUFBQTtBQUFBO0FBQUE7QUFDNkQ7QUFBQyxrQkFBRDtBQUFBO0FBQUE7QUFBQSxPQUQ3RDtBQUFBO0FBQUEsS0FaRjtBQWlCRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBRyxNQUFLLDhEQUFSO0FBQUE7QUFBQTtBQURGO0FBREYsS0FqQkY7QUFzQkU7QUFBQTtBQUFBO0FBQUE7QUFDc0M7QUFBQyxrQkFBRDtBQUFBO0FBQUE7QUFBQSxPQUR0QztBQUFBO0FBRTZCO0FBQUMsa0JBQUQ7QUFBQTtBQUFBO0FBQUEsT0FGN0I7QUFBQTtBQUFBLEtBdEJGO0FBNEJFO0FBQUE7QUFBQTtBQUFBO0FBQ3FCO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FEckI7QUFBQTtBQUdTO0FBQUMsa0JBQUQ7QUFBQTtBQUFBO0FBQUEsT0FIVDtBQUFBO0FBQUEsS0E1QkY7QUFpQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWpDRixHQUZGO0FBNkNELENBOUNEOztBQWdEQSxPQUFPLE9BQVAsR0FBaUIsZUFBakI7OztBQ3pEQTs7QUFFQSxRQUFRLGtCQUFSOztBQUVBLElBQU0sT0FBTyxRQUFRLFNBQVIsQ0FBYjtBQUFBLElBQ00sV0FBVyxRQUFRLGFBQVIsQ0FEakI7QUFBQSxJQUVNLFdBQVcsUUFBUSxhQUFSLENBRmpCO0FBQUEsSUFHTSxZQUFZLFFBQVEsY0FBUixDQUhsQjtBQUFBLElBSU0sYUFBYSxRQUFRLGVBQVIsQ0FKbkI7O0FBTUEsSUFBTSxnQ0FBZ0MsU0FBaEMsNkJBQWdDLEdBQU07QUFDMUMsU0FFRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFDLFlBQUQ7QUFBQSxVQUFNLE1BQUssa0JBQVg7QUFBQTtBQUFrQztBQUFDLG9CQUFEO0FBQUE7QUFBQTtBQUFBLFNBQWxDO0FBQUE7QUFBQSxPQURGO0FBRUU7QUFBQyxnQkFBRDtBQUFBLFVBQVUsTUFBSyx5QkFBZjtBQUFBO0FBQUEsT0FGRjtBQUdFLDBCQUFDLFFBQUQ7QUFIRixLQURGO0FBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU5GO0FBT0U7QUFBQyxlQUFEO0FBQUE7QUFBQTtBQUFBLEtBUEY7QUEwQ0U7QUFBQTtBQUFBO0FBQUE7QUFDTTtBQUFBO0FBQUEsVUFBRyxNQUFLLCtEQUFSO0FBQUE7QUFBQSxPQUROO0FBQUE7QUFBQSxLQTFDRjtBQThDRTtBQUFBO0FBQUE7QUFBQTtBQUNtRztBQUFDLGtCQUFEO0FBQUE7QUFBQTtBQUFBLE9BRG5HO0FBQUE7QUFFbUM7QUFBQyxrQkFBRDtBQUFBO0FBQUE7QUFBQSxPQUZuQztBQUFBO0FBRXVFO0FBQUMsa0JBQUQ7QUFBQTtBQUFBO0FBQUEsT0FGdkU7QUFBQTtBQUFBO0FBOUNGLEdBRkY7QUF1REQsQ0F4REQ7O0FBMERBLE9BQU8sT0FBUCxHQUFpQiw2QkFBakI7OztBQ3BFQTs7QUFFQSxRQUFRLGtCQUFSOztBQUVBLElBQU0sT0FBTyxRQUFRLFNBQVIsQ0FBYjtBQUFBLElBQ00sV0FBVyxRQUFRLGFBQVIsQ0FEakI7QUFBQSxJQUVNLFdBQVcsUUFBUSxhQUFSLENBRmpCO0FBQUEsSUFHTSxZQUFZLFFBQVEsY0FBUixDQUhsQjtBQUFBLElBSU0sYUFBYSxRQUFRLGVBQVIsQ0FKbkI7O0FBTUEsSUFBTSxrQkFBa0IsU0FBbEIsZUFBa0IsR0FBTTtBQUM1QixTQUVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUMsWUFBRDtBQUFBLFVBQU0sTUFBSyx5QkFBWDtBQUFBO0FBQUEsT0FERjtBQUVFO0FBQUMsZ0JBQUQ7QUFBQSxVQUFVLE1BQUssaUJBQWY7QUFBQTtBQUFBLE9BRkY7QUFHRSwwQkFBQyxRQUFEO0FBSEYsS0FERjtBQU1FO0FBQUE7QUFBQTtBQUFBO0FBQVE7QUFBQyxrQkFBRDtBQUFBO0FBQUE7QUFBQSxPQUFSO0FBQUE7QUFBQSxLQU5GO0FBT0U7QUFBQyxlQUFEO0FBQUE7QUFBQTtBQUFBLEtBUEY7QUFpREU7QUFBQTtBQUFBO0FBQUE7QUFDK0c7QUFBQyxrQkFBRDtBQUFBO0FBQUE7QUFBQSxPQUQvRztBQUFBO0FBQUEsS0FqREY7QUFvREU7QUFBQTtBQUFBO0FBQUE7QUFDeUM7QUFBQyxrQkFBRDtBQUFBO0FBQUE7QUFBQSxPQUR6QztBQUFBO0FBQzRIO0FBQUMsa0JBQUQ7QUFBQTtBQUFBO0FBQUEsT0FENUg7QUFBQTtBQUUwRDtBQUFDLGtCQUFEO0FBQUE7QUFBQTtBQUFBLE9BRjFEO0FBQUE7QUFFaUg7QUFBQyxrQkFBRDtBQUFBO0FBQUE7QUFBQSxPQUZqSDtBQUFBO0FBQUEsS0FwREY7QUF3REU7QUFBQTtBQUFBO0FBQUE7QUFDd0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUR4RDtBQUFBO0FBRTRGO0FBQUMsa0JBQUQ7QUFBQTtBQUFBO0FBQUEsT0FGNUY7QUFBQTtBQUU0SjtBQUFDLGtCQUFEO0FBQUE7QUFBQTtBQUFBLE9BRjVKO0FBQUE7QUFBQTtBQXhERixHQUZGO0FBa0VELENBbkVEOztBQXFFQSxPQUFPLE9BQVAsR0FBaUIsZUFBakI7OztBQy9FQTs7Ozs7O0FBRU0sYUFBUyxRQUFRLFFBQVIsQ0FBVDtBQUFBLElBQ0UsT0FERixHQUNjLE1BRGQsQ0FDRSxPQURGOztJQUdBLEs7Ozs7Ozs7a0NBQ2lCLGEsRUFBZSxVLEVBQThCO0FBQUEsd0NBQWYsYUFBZTtBQUFmLHFCQUFlO0FBQUE7O0FBQ2hFLFVBQUksVUFBVSxJQUFkOztBQUVBLFVBQUksa0JBQWtCLFNBQXRCLEVBQWlDO0FBQy9CLHdCQUFnQixxQkFBcUIsYUFBckIsQ0FBaEI7O0FBRUEscUJBQWEsT0FBTyxNQUFQLENBQWM7QUFDekIseUJBQWU7QUFEVSxTQUFkLEVBRVYsVUFGVSxDQUFiOztBQUlBLFlBQUksS0FBSixFQUFXLENBRVYsQ0FGRCxNQUVPLElBQUksT0FBTyxhQUFQLEtBQXlCLFFBQTdCLEVBQXVDO0FBQzVDLGNBQU0sVUFBVSxhQUFoQixDQUQ0QyxDQUNaOztBQUVoQyxvQkFBVSxRQUFRLHdCQUFSLENBQWlDLE9BQWpDLEVBQTBDLFVBQTFDLEVBQXNELE9BQXRELENBQVY7QUFDRCxTQUpNLE1BSUEsSUFBSSxTQUFTLGFBQVQsRUFBd0IsT0FBeEIsQ0FBSixFQUFzQztBQUMzQyxjQUFNLFFBQVEsYUFBZCxDQUQyQyxDQUNiOztBQUU5QixvQkFBVSxNQUFNLGNBQU4sQ0FBcUIsVUFBckIsQ0FBVjtBQUNELFNBSk0sTUFJQSxJQUFJLGNBQWMsU0FBZCxDQUF3QixNQUE1QixFQUFvQztBQUN6QyxjQUFNLFNBQVEsYUFBZDtBQUFBLGNBQThCO0FBQ3hCLHFCQUFXLElBQUksTUFBSixDQUFVLFVBQVYsQ0FEakI7O0FBR0Esb0JBQVUsU0FBUyxNQUFULEVBQVY7QUFDRCxTQUxNLE1BS0EsSUFBSSxPQUFPLGFBQVAsS0FBeUIsVUFBN0IsRUFBeUM7QUFDOUMsY0FBTSxrQkFBa0IsYUFBeEIsQ0FEOEMsQ0FDTjs7QUFFeEMsb0JBQVUsZ0JBQWdCLFVBQWhCLENBQVY7QUFDRDtBQUNGOztBQUVELGFBQU8sT0FBUDtBQUNEOzs7Ozs7QUFHSCxPQUFPLGNBQVAsQ0FBc0IsTUFBdEIsRUFBOEIsT0FBOUIsRUFBdUM7QUFDckMsT0FBSyxlQUFXO0FBQ2QsV0FBTyxLQUFQO0FBQ0Q7QUFIb0MsQ0FBdkM7O0FBTUEsT0FBTyxPQUFQLEdBQWlCLEtBQWpCOztBQUVBLFNBQVMsb0JBQVQsQ0FBOEIsYUFBOUIsRUFBNkM7QUFDM0Msa0JBQWdCLGNBQWMsTUFBZCxDQUFxQixVQUFTLGFBQVQsRUFBd0IsWUFBeEIsRUFBc0M7QUFBRztBQUM1RSxvQkFBZ0IsY0FBYyxNQUFkLENBQXFCLFlBQXJCLENBQWhCOztBQUVBLFdBQU8sYUFBUDtBQUNELEdBSmUsRUFJYixFQUphLENBQWhCOztBQU1BLFNBQU8sYUFBUDtBQUNEOztBQUVELFNBQVMsUUFBVCxDQUFrQixRQUFsQixFQUE0QixLQUE1QixFQUFtQztBQUNqQyxNQUFJLFNBQVMsS0FBYjs7QUFFQSxNQUFJLGFBQWEsS0FBakIsRUFBd0I7QUFBRTtBQUN4QixhQUFTLElBQVQ7QUFDRCxHQUZELE1BRU87QUFDTCxlQUFXLE9BQU8sY0FBUCxDQUFzQixRQUF0QixDQUFYLENBREssQ0FDdUM7O0FBRTVDLFFBQUksUUFBSixFQUFjO0FBQ1osZUFBUyxTQUFTLFFBQVQsRUFBbUIsS0FBbkIsQ0FBVDtBQUNEO0FBQ0Y7O0FBRUQsU0FBTyxNQUFQO0FBQ0Q7OztBQzFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTs7OztBQUVBLElBQU0sYUFBYSxRQUFRLGVBQVIsQ0FBbkI7QUFBQSxJQUNNLGFBQWEsUUFBUSxlQUFSLENBRG5CO0FBQUEsSUFFTSxhQUFhLFFBQVEsZUFBUixDQUZuQjs7SUFJTSxRLEdBQ0osb0JBQWM7QUFBQTs7QUFDWixPQUFLLFVBQUwsR0FBa0IsUUFBbEI7O0FBRUEsT0FBSyxXQUFMLEdBQW1CLEVBQW5CO0FBQ0QsQzs7QUFHSCxPQUFPLE1BQVAsQ0FBYyxTQUFTLFNBQXZCLEVBQWtDLFVBQWxDO0FBQ0EsT0FBTyxNQUFQLENBQWMsU0FBUyxTQUF2QixFQUFrQyxVQUFsQztBQUNBLE9BQU8sTUFBUCxDQUFjLFNBQVMsU0FBdkIsRUFBa0MsVUFBbEM7O0FBRUEsT0FBTyxPQUFQLEdBQWlCLElBQUksUUFBSixFQUFqQixDLENBQWtDOzs7QUNsQmxDOzs7Ozs7OztBQUVBLElBQU0sU0FBUyxRQUFRLGVBQVIsQ0FBZjtBQUFBLElBQ00sU0FBUyxRQUFRLGVBQVIsQ0FEZjtBQUFBLElBRU0sV0FBVyxRQUFRLGFBQVIsQ0FGakI7QUFBQSxJQUdNLGFBQWEsUUFBUSxlQUFSLENBSG5CO0FBQUEsSUFJTSxhQUFhLFFBQVEsZUFBUixDQUpuQjtBQUFBLElBS00sYUFBYSxRQUFRLGVBQVIsQ0FMbkI7QUFBQSxJQU1NLGNBQWMsUUFBUSxnQkFBUixDQU5wQjs7SUFRTSxPO0FBQ0osbUJBQVksUUFBWixFQUFzQjtBQUFBOztBQUNwQixTQUFLLFVBQUwsR0FBa0IsdUJBQXVCLFFBQXZCLENBQWxCOztBQUVBLFNBQUssVUFBTCxDQUFnQixXQUFoQixHQUE4QixJQUE5Qjs7QUFFQSxTQUFLLFdBQUwsR0FBbUIsRUFBbkI7QUFDRDs7Ozs0QkFFTztBQUFFLGFBQU8sUUFBUSxLQUFSLENBQWMsSUFBZCxDQUFQO0FBQTZCOzs7Z0NBRTNCO0FBQ1YsVUFBTSxNQUFNLEtBQUssVUFBTCxDQUFnQixTQUE1QjtBQUFBLFVBQXdDO0FBQ2xDLGFBQU8sS0FBSyxVQUFMLENBQWdCLFVBRDdCO0FBQUEsVUFDMEM7QUFDcEMsZUFBUyxJQUFJLE1BQUosQ0FBVyxHQUFYLEVBQWdCLElBQWhCLENBRmY7O0FBSUEsYUFBTyxNQUFQO0FBQ0Q7OztnQ0FFZ0M7QUFBQSxVQUF2QixhQUF1Qix1RUFBUCxLQUFPOztBQUMvQixVQUFNLHFCQUFxQixLQUFLLFVBQUwsQ0FBZ0IscUJBQWhCLEVBQTNCO0FBQUEsVUFDTSxTQUFTLE9BQU8sc0JBQVAsQ0FBOEIsa0JBQTlCLENBRGY7O0FBR0EsYUFBTyxNQUFQO0FBQ0Q7OzsrQkFFK0I7QUFBQSxVQUF2QixhQUF1Qix1RUFBUCxLQUFPOztBQUM5QixVQUFNLFFBQVMsZ0JBQ0UsS0FBSyxVQUFMLENBQWdCLFdBRGxCLEdBRUksS0FBSyxVQUFMLENBQWdCLFdBRm5DOztBQUlBLGFBQU8sS0FBUDtBQUNEOzs7NkJBRVEsSyxFQUFPO0FBQUUsV0FBSyxVQUFMLENBQWdCLEtBQWhCLENBQXNCLEtBQXRCLEdBQWlDLEtBQWpDO0FBQTZDOzs7Z0NBRTlCO0FBQUEsVUFBdkIsYUFBdUIsdUVBQVAsS0FBTzs7QUFDL0IsVUFBTSxTQUFVLGdCQUNFLEtBQUssVUFBTCxDQUFnQixZQURsQixHQUVJLEtBQUssVUFBTCxDQUFnQixZQUZwQzs7QUFJQSxhQUFPLE1BQVA7QUFDRDs7OzhCQUVTLE0sRUFBUTtBQUFFLFdBQUssVUFBTCxDQUFnQixLQUFoQixDQUFzQixNQUF0QixHQUFrQyxNQUFsQztBQUErQzs7O2lDQUV0RCxJLEVBQU07QUFBRSxhQUFPLEtBQUssVUFBTCxDQUFnQixZQUFoQixDQUE2QixJQUE3QixDQUFQO0FBQTRDOzs7aUNBRXBELEksRUFBTSxLLEVBQU87QUFBRSxXQUFLLFVBQUwsQ0FBZ0IsWUFBaEIsQ0FBNkIsSUFBN0IsRUFBbUMsS0FBbkM7QUFBNEM7OzttQ0FFekQsSSxFQUFNO0FBQUUsV0FBSyxVQUFMLENBQWdCLGVBQWhCLENBQWdDLElBQWhDO0FBQXdDOzs7aUNBRWxELEksRUFBTSxLLEVBQU87QUFBRSxXQUFLLFlBQUwsQ0FBa0IsSUFBbEIsRUFBd0IsS0FBeEI7QUFBaUM7OztvQ0FFN0MsSSxFQUFNO0FBQUUsV0FBSyxjQUFMLENBQW9CLElBQXBCO0FBQTRCOzs7NkJBRTNDLFMsRUFBVztBQUFFLFdBQUssVUFBTCxDQUFnQixTQUFoQixHQUE0QixTQUE1QjtBQUF3Qzs7OzZCQUVyRCxTLEVBQVc7QUFBRSxXQUFLLFVBQUwsQ0FBZ0IsU0FBaEIsQ0FBMEIsR0FBMUIsQ0FBOEIsU0FBOUI7QUFBMkM7OztnQ0FFckQsUyxFQUFXO0FBQUUsV0FBSyxVQUFMLENBQWdCLFNBQWhCLENBQTBCLE1BQTFCLENBQWlDLFNBQWpDO0FBQThDOzs7Z0NBRTNELFMsRUFBVztBQUFFLFdBQUssVUFBTCxDQUFnQixTQUFoQixDQUEwQixNQUExQixDQUFpQyxTQUFqQztBQUE4Qzs7OzZCQUU5RCxTLEVBQVc7QUFBRSxhQUFPLEtBQUssVUFBTCxDQUFnQixTQUFoQixDQUEwQixRQUExQixDQUFtQyxTQUFuQyxDQUFQO0FBQXVEOzs7bUNBRTlEO0FBQUUsV0FBSyxVQUFMLENBQWdCLFNBQWhCLEdBQTRCLEVBQTVCO0FBQWlDOzs7NEJBRTFDLGUsRUFBaUI7QUFDdkIsVUFBTSxhQUFhLDhCQUE4QixlQUE5QixDQUFuQjtBQUFBLFVBQ00sdUJBQXVCLEtBQUssVUFBTCxDQUFnQixVQUQ3Qzs7QUFHQSxXQUFLLFVBQUwsQ0FBZ0IsWUFBaEIsQ0FBNkIsVUFBN0IsRUFBeUMsb0JBQXpDO0FBQ0Q7OzsyQkFFTSxlLEVBQWlCO0FBQ3RCLFVBQU0sYUFBYSw4QkFBOEIsZUFBOUIsQ0FBbkI7O0FBRUEsV0FBSyxVQUFMLENBQWdCLFlBQWhCLENBQTZCLFVBQTdCLEVBQXlDLElBQXpDLEVBSHNCLENBRzBCO0FBQ2pEOzs7NkJBRVEsYSxFQUFlO0FBQ3RCLFVBQU0sbUJBQW1CLGNBQWMsVUFBdkM7QUFBQSxVQUNNLHlCQUF5QixpQkFBaUIsVUFEaEQsQ0FEc0IsQ0FFc0M7O0FBRTVELHVCQUFpQixZQUFqQixDQUE4QixLQUFLLFVBQW5DLEVBQStDLHNCQUEvQztBQUNEOzs7OEJBRVMsYSxFQUFlO0FBQ3ZCLFVBQU0sbUJBQW1CLGNBQWMsVUFBdkM7O0FBRUEsdUJBQWlCLFlBQWpCLENBQThCLEtBQUssVUFBbkMsRUFBK0MsSUFBL0MsRUFIdUIsQ0FHK0I7QUFDdkQ7OzsrQkFFVSxhLEVBQWU7QUFDeEIsVUFBTSxtQkFBbUIsY0FBYyxVQUF2Qzs7QUFFQSx1QkFBaUIsV0FBakIsQ0FBNkIsS0FBSyxVQUFsQztBQUNEOzs7MkJBRU0sTyxFQUFTO0FBQ2QsVUFBSSxPQUFKLEVBQWE7QUFDWCxZQUFNLGFBQWEsUUFBUSxVQUEzQjs7QUFFQSxhQUFLLFVBQUwsQ0FBZ0IsV0FBaEIsQ0FBNEIsVUFBNUI7QUFDRCxPQUpELE1BSU87QUFDTCxhQUFLLFVBQUwsQ0FBZ0IsTUFBaEI7QUFDRDtBQUNGOzs7aUNBRVksYyxFQUFnQjtBQUMzQixVQUFNLGdCQUFnQixlQUFlLFVBQWYsQ0FBMEIsVUFBaEQ7QUFBQSxVQUNNLG9CQUFvQixlQUFlLFVBRHpDOztBQUdBLG9CQUFjLFlBQWQsQ0FBMkIsS0FBSyxVQUFoQyxFQUE0QyxpQkFBNUM7QUFDRDs7O2dDQUVXLGMsRUFBZ0I7QUFDMUIsVUFBTSxnQkFBZ0IsZUFBZSxVQUFmLENBQTBCLFVBQWhEO0FBQUEsVUFDTSxvQkFBb0IsZUFBZSxVQUR6Qzs7QUFHQSxvQkFBYyxZQUFkLENBQTJCLEtBQUssVUFBaEMsRUFBNEMsa0JBQWtCLFdBQTlELEVBSjBCLENBSW1EO0FBQzlFOzs7MkJBRTRCO0FBQUEsVUFBeEIsWUFBd0IsdUVBQVQsT0FBUztBQUFFLFdBQUssVUFBTCxDQUFnQixLQUFoQixDQUFzQixPQUF0QixHQUFnQyxZQUFoQztBQUErQzs7OzJCQUV2RTtBQUFFLFdBQUssVUFBTCxDQUFnQixLQUFoQixDQUFzQixPQUF0QixHQUFnQyxNQUFoQztBQUF5Qzs7OzZCQUV6QztBQUFFLFdBQUssY0FBTCxDQUFvQixVQUFwQjtBQUFrQzs7OzhCQUVuQztBQUFFLFdBQUssWUFBTCxDQUFrQixVQUFsQixFQUE4QixVQUE5QjtBQUE0Qzs7O3lCQUVuRCxLLEVBQU07QUFDVCxVQUFJLFVBQVMsU0FBYixFQUF3QjtBQUN0QixnQkFBTyxLQUFLLFVBQUwsQ0FBZ0IsU0FBdkIsQ0FEc0IsQ0FDWTs7QUFFbEMsZUFBTyxLQUFQO0FBQ0QsT0FKRCxNQUlPO0FBQ0wsWUFBTSxZQUFZLEtBQWxCLENBREssQ0FDbUI7O0FBRXhCLGFBQUssVUFBTCxDQUFnQixTQUFoQixHQUE0QixTQUE1QjtBQUNEO0FBQ0Y7Ozt3QkFFRyxJLEVBQUs7QUFDUCxVQUFJLFNBQVEsU0FBWixFQUF1QjtBQUNyQixZQUFNLGdCQUFnQixpQkFBaUIsS0FBSyxVQUF0QixDQUF0QjtBQUFBLFlBQ00sTUFBTSxFQURaOztBQUdBLGFBQUssSUFBSSxRQUFRLENBQWpCLEVBQW9CLFFBQVEsY0FBYyxNQUExQyxFQUFrRCxPQUFsRCxFQUEyRDtBQUN6RCxjQUFNLE9BQU8sY0FBYyxDQUFkLENBQWI7QUFBQSxjQUFnQztBQUMxQixrQkFBUSxjQUFjLGdCQUFkLENBQStCLElBQS9CLENBRGQsQ0FEeUQsQ0FFTDs7QUFFcEQsY0FBSSxJQUFKLElBQVksS0FBWjtBQUNEOztBQUVELGVBQU8sR0FBUDtBQUNELE9BWkQsTUFZTyxJQUFJLE9BQU8sSUFBUCxLQUFlLFFBQW5CLEVBQTZCO0FBQ2xDLFlBQUksUUFBTyxJQUFYLENBRGtDLENBQ2xCOztBQUVoQixZQUFNLGlCQUFnQixpQkFBaUIsS0FBSyxVQUF0QixDQUF0QjtBQUFBLFlBQ00sU0FBUSxlQUFjLGdCQUFkLENBQStCLEtBQS9CLENBRGQsQ0FIa0MsQ0FJa0I7O0FBRXBELGVBQU0sTUFBTixDQU5rQyxDQU1wQjs7QUFFZCxlQUFPLElBQVA7QUFDRCxPQVRNLE1BU0E7QUFDTCxZQUFNLFFBQVEsT0FBTyxJQUFQLENBQVksSUFBWixDQUFkLENBREssQ0FDMkI7O0FBRWhDLGNBQU0sT0FBTixDQUFjLFVBQVMsSUFBVCxFQUFlO0FBQzNCLGNBQU0sUUFBUSxLQUFJLElBQUosQ0FBZDs7QUFFQSxlQUFLLFVBQUwsQ0FBZ0IsS0FBaEIsQ0FBc0IsSUFBdEIsSUFBOEIsS0FBOUI7QUFDRCxTQUphLENBSVosSUFKWSxDQUlQLElBSk8sQ0FBZDtBQUtEO0FBQ0Y7Ozs0Q0FFcUM7QUFBQSxVQUFoQixRQUFnQix1RUFBTCxHQUFLOztBQUNwQyxVQUFNLHdCQUF3QixLQUFLLFVBQUwsQ0FBZ0IsZ0JBQWhCLENBQWlDLFFBQWpDLENBQTlCO0FBQUEsVUFDTSxxQkFBcUIsd0JBQXdCLHFCQUF4QixDQUQzQjs7QUFHQSxhQUFPLGtCQUFQO0FBQ0Q7Ozt1Q0FFZ0M7QUFBQSxVQUFoQixRQUFnQix1RUFBTCxHQUFLOztBQUMvQixVQUFNLHdCQUF3QixLQUFLLFVBQUwsQ0FBZ0IsZ0JBQWhCLENBQWlDLFFBQWpDLENBQTlCO0FBQUEsVUFDTSxzQkFBc0IsS0FBSyxVQUFMLENBQWdCLFFBRDVDO0FBQUEsVUFFTSxtQkFBbUIsT0FBTyxtQkFBUCxFQUE0QixVQUFTLGVBQVQsRUFBMEI7QUFDdkUsZUFBTyxLQUFLLHFCQUFMLEVBQTRCLFVBQVMsb0JBQVQsRUFBK0I7QUFDaEUsaUJBQVEseUJBQXlCLGVBQWpDO0FBQ0QsU0FGTSxDQUFQO0FBR0QsT0FKa0IsQ0FGekI7QUFBQSxVQU9NLGdCQUFnQix3QkFBd0IsZ0JBQXhCLENBUHRCOztBQVNBLGFBQU8sYUFBUDtBQUNEOzs7dUNBRWdDO0FBQUEsVUFBaEIsUUFBZ0IsdUVBQUwsR0FBSzs7QUFDL0IsVUFBSSxnQkFBZ0IsSUFBcEI7O0FBRUEsVUFBTSxtQkFBbUIsS0FBSyxVQUFMLENBQWdCLGFBQXpDOztBQUVBLFVBQUkscUJBQXFCLElBQXpCLEVBQStCO0FBQzdCLFlBQUksaUJBQWlCLE9BQWpCLENBQXlCLFFBQXpCLENBQUosRUFBd0M7QUFDdEMsY0FBTSxvQkFBb0IsQ0FBQyxnQkFBRCxDQUExQjtBQUFBLGNBQ00saUJBQWlCLHdCQUF3QixpQkFBeEIsQ0FEdkI7QUFBQSxjQUVNLHFCQUFxQixNQUFNLGNBQU4sQ0FGM0I7O0FBSUEsMEJBQWdCLHNCQUFzQixJQUF0QztBQUNEO0FBQ0Y7O0FBRUQsYUFBTyxhQUFQO0FBQ0Q7OzsyQ0FFb0M7QUFBQSxVQUFoQixRQUFnQix1RUFBTCxHQUFLOztBQUNuQyxVQUFNLHVCQUF1QixFQUE3QjtBQUFBLFVBQ00sbUJBQW1CLEtBQUssVUFBTCxDQUFnQixhQUR6Qzs7QUFHQSxVQUFJLHNCQUFzQixnQkFBMUIsQ0FKbUMsQ0FJVTtBQUM3QyxhQUFPLHdCQUF3QixJQUEvQixFQUFxQztBQUNuQyxZQUFJLG9CQUFvQixPQUFwQixDQUE0QixRQUE1QixDQUFKLEVBQTJDO0FBQ3pDLCtCQUFxQixJQUFyQixDQUEwQixtQkFBMUI7QUFDRDs7QUFFRCw4QkFBc0Isb0JBQW9CLGFBQTFDO0FBQ0Q7O0FBRUQsVUFBTSxvQkFBb0Isd0JBQXdCLG9CQUF4QixDQUExQjs7QUFFQSxhQUFPLGlCQUFQO0FBQ0Q7OzswQkFFWSxLLEVBQU8sTyxFQUFnQztBQUFBLHdDQUFwQixrQkFBb0I7QUFBcEIsMEJBQW9CO0FBQUE7O0FBQ2xELFVBQUksaUJBQWlCLE9BQXJCLEVBQThCO0FBQzVCLGtCQUFVLEtBQVY7QUFDQSwyQkFBbUIsS0FBbkI7QUFDQSxnQkFBUSxPQUFSO0FBQ0Q7O0FBRUQsVUFBTSxPQUFPLElBQWI7QUFBQSxVQUNNLGFBQWEsUUFBUSxVQUFSLENBQW1CLFNBQW5CLENBQTZCLElBQTdCLENBRG5COztBQUdBLHlCQUFtQixPQUFuQixDQUEyQixVQUEzQjtBQUNBLHlCQUFtQixPQUFuQixDQUEyQixJQUEzQjs7QUFFQSxhQUFPLEtBQUssU0FBUyxTQUFULENBQW1CLElBQW5CLENBQXdCLEtBQXhCLENBQThCLEtBQTlCLEVBQXFDLGtCQUFyQyxDQUFMLEdBQVA7QUFDRDs7OzZCQUVlLEssRUFBTyxJLEVBQTZCO0FBQUEseUNBQXBCLGtCQUFvQjtBQUFwQiwwQkFBb0I7QUFBQTs7QUFDbEQsVUFBSSxPQUFPLEtBQVAsS0FBaUIsUUFBckIsRUFBK0I7QUFDN0IsZUFBTyxLQUFQO0FBQ0EsMkJBQW1CLEtBQW5CO0FBQ0EsZ0JBQVEsT0FBUjtBQUNEOztBQUVELFVBQU0sa0JBQWtCLFNBQVMsYUFBVCxDQUF1QixLQUF2QixDQUF4Qjs7QUFFQSxzQkFBZ0IsU0FBaEIsR0FBNEIsSUFBNUIsQ0FUa0QsQ0FTZjs7QUFFbkMsVUFBTSxhQUFhLGdCQUFnQixVQUFuQzs7QUFFQSx5QkFBbUIsT0FBbkIsQ0FBMkIsVUFBM0I7QUFDQSx5QkFBbUIsT0FBbkIsQ0FBMkIsSUFBM0I7O0FBRUEsYUFBTyxLQUFLLFNBQVMsU0FBVCxDQUFtQixJQUFuQixDQUF3QixLQUF4QixDQUE4QixLQUE5QixFQUFxQyxrQkFBckMsQ0FBTCxHQUFQO0FBQ0Q7OzttQ0FFcUIsSyxFQUFPLFUsRUFBbUM7QUFBQSx5Q0FBcEIsa0JBQW9CO0FBQXBCLDBCQUFvQjtBQUFBOztBQUM5RCxVQUFJLFFBQU8sS0FBUCx5Q0FBTyxLQUFQLE9BQWlCLFFBQXJCLEVBQStCO0FBQzdCLHFCQUFhLEtBQWI7QUFDQSwyQkFBbUIsS0FBbkI7QUFDQSxnQkFBUSxPQUFSO0FBQ0Q7O0FBRUQseUJBQW1CLE9BQW5CLENBQTJCLFVBQTNCO0FBQ0EseUJBQW1CLE9BQW5CLENBQTJCLElBQTNCOztBQUVBLGFBQU8sS0FBSyxTQUFTLFNBQVQsQ0FBbUIsSUFBbkIsQ0FBd0IsS0FBeEIsQ0FBOEIsS0FBOUIsRUFBcUMsa0JBQXJDLENBQUwsR0FBUDtBQUNEOzs7bUNBRXFCLEssRUFBTyxVLEVBQVk7QUFDdkMsVUFBTSxVQUFVLE1BQU0sT0FBdEI7QUFBQSxVQUNNLHFCQUFxQixNQUFNLGtCQURqQztBQUFBLFVBRU0sdUJBQXVCLE1BQU0sbUJBRm5DOztBQUlBLGFBQU8sUUFBUSx3QkFBUixDQUFpQyxLQUFqQyxFQUF3QyxVQUF4QyxFQUFvRCxPQUFwRCxFQUE2RCxrQkFBN0QsRUFBaUYsb0JBQWpGLENBQVA7QUFDRDs7OzZDQUUrQixLLEVBQU8sVSxFQUFZLE8sRUFBUyxrQixFQUFvQixvQixFQUFzQjtBQUNwRyxVQUFNLGFBQVcsT0FBWCxXQUF3QixPQUF4QixNQUFOO0FBQUEsVUFDTSxVQUFVLFFBQVEsUUFBUixDQUFpQixLQUFqQixFQUF3QixJQUF4QixDQURoQjs7QUFHQSxjQUFRLGVBQVIsQ0FBd0IsVUFBeEIsRUFBb0Msa0JBQXBDLEVBQXdELG9CQUF4RDs7QUFFQSxhQUFPLE9BQVA7QUFDRDs7Ozs7O0FBR0gsT0FBTyxNQUFQLENBQWMsUUFBUSxTQUF0QixFQUFpQyxRQUFqQztBQUNBLE9BQU8sTUFBUCxDQUFjLFFBQVEsU0FBdEIsRUFBaUMsVUFBakM7QUFDQSxPQUFPLE1BQVAsQ0FBYyxRQUFRLFNBQXRCLEVBQWlDLFVBQWpDO0FBQ0EsT0FBTyxNQUFQLENBQWMsUUFBUSxTQUF0QixFQUFpQyxVQUFqQztBQUNBLE9BQU8sTUFBUCxDQUFjLFFBQVEsU0FBdEIsRUFBaUMsV0FBakM7O0FBRUEsUUFBUSxpQkFBUixHQUE0QixDQUE1QjtBQUNBLFFBQVEsbUJBQVIsR0FBOEIsQ0FBOUI7QUFDQSxRQUFRLGtCQUFSLEdBQTZCLENBQTdCOztBQUVBLE9BQU8sT0FBUCxHQUFpQixPQUFqQjs7QUFFQSxTQUFTLHNCQUFULENBQWdDLFFBQWhDLEVBQTBDO0FBQ3hDLE1BQU0sYUFBYyxPQUFPLFFBQVAsS0FBb0IsUUFBckIsR0FDRSxTQUFTLGdCQUFULENBQTBCLFFBQTFCLEVBQW9DLENBQXBDLENBREYsR0FDNEM7QUFDeEMsVUFGdkIsQ0FEd0MsQ0FHTjs7QUFFbEMsU0FBTyxVQUFQO0FBQ0Q7O0FBRUQsU0FBUyw2QkFBVCxDQUF1QyxlQUF2QyxFQUF3RDtBQUN0RCxNQUFJLG1CQUFKOztBQUVBLE1BQUksT0FBTyxlQUFQLEtBQTJCLFFBQS9CLEVBQXlDO0FBQ3ZDLFFBQU0sU0FBUyxlQUFmLENBRHVDLENBQ1A7O0FBRWhDLGlCQUFhLFNBQVMsY0FBVCxDQUF3QixNQUF4QixDQUFiLENBSHVDLENBR087QUFDL0MsR0FKRCxNQUlPO0FBQ0wsUUFBTSxVQUFVLGVBQWhCLENBREssQ0FDNkI7O0FBRWxDLGlCQUFhLFFBQVEsVUFBckI7QUFDRDs7QUFFRCxTQUFPLFVBQVA7QUFDRDs7QUFFRCxTQUFTLHVCQUFULENBQWlDLFdBQWpDLEVBQThDO0FBQzVDLE1BQU0sMEJBQTBCLE9BQU8sV0FBUCxFQUFvQixVQUFTLFVBQVQsRUFBcUI7QUFDakUsV0FBUSxXQUFXLFdBQVgsS0FBMkIsU0FBbkM7QUFDRCxHQUZ5QixDQUFoQztBQUFBLE1BR00sV0FBVyx3QkFBd0IsR0FBeEIsQ0FBNEIsVUFBUyxVQUFULEVBQXFCO0FBQzFELFdBQU8sV0FBVyxXQUFsQjtBQUNELEdBRlUsQ0FIakI7O0FBT0EsU0FBTyxRQUFQO0FBQ0Q7O0FBRUQsU0FBUyxJQUFULENBQWMsS0FBZCxFQUFxQixJQUFyQixFQUEyQjtBQUN6QixNQUFJLFNBQVMsS0FBYjs7QUFFQSxPQUFLLElBQUksUUFBUSxDQUFqQixFQUFvQixRQUFRLE1BQU0sTUFBbEMsRUFBMEMsT0FBMUMsRUFBbUQ7QUFDakQsUUFBTSxVQUFVLE1BQU0sS0FBTixDQUFoQjs7QUFFQSxhQUFTLEtBQUssT0FBTCxDQUFUOztBQUVBLFFBQUksTUFBSixFQUFZO0FBQ1YsZUFBUyxJQUFUOztBQUVBO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPLE1BQVA7QUFDRDs7QUFFRCxTQUFTLE1BQVQsQ0FBZ0IsS0FBaEIsRUFBdUIsSUFBdkIsRUFBNkI7QUFDM0IsTUFBTSxnQkFBZ0IsRUFBdEI7O0FBRUEsT0FBSyxJQUFJLFFBQVEsQ0FBakIsRUFBb0IsUUFBUSxNQUFNLE1BQWxDLEVBQTBDLE9BQTFDLEVBQW1EO0FBQ2pELFFBQU0sVUFBVSxNQUFNLEtBQU4sQ0FBaEI7QUFBQSxRQUNNLFNBQVMsS0FBSyxPQUFMLENBRGY7O0FBR0EsUUFBSSxNQUFKLEVBQVk7QUFDVixvQkFBYyxJQUFkLENBQW1CLE9BQW5CO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPLGFBQVA7QUFDRDs7QUFFRCxTQUFTLEtBQVQsQ0FBZSxLQUFmLEVBQXNCO0FBQUUsU0FBTyxNQUFNLENBQU4sQ0FBUDtBQUFrQjs7O0FDclkxQzs7Ozs7Ozs7OztBQUVBLElBQU0sVUFBVSxRQUFRLFlBQVIsQ0FBaEI7O0lBRU0sSTs7O0FBQ0osa0JBQStCO0FBQUEsUUFBbkIsUUFBbUIsdUVBQVIsTUFBUTs7QUFBQTs7QUFBQSx1R0FDdkIsUUFEdUI7QUFFOUI7Ozs7NEJBRU87QUFBRSxhQUFPLEtBQUssS0FBTCxDQUFXLElBQVgsQ0FBUDtBQUEwQjs7OzBCQUV2QixPLEVBQVM7QUFDcEIsYUFBTyxRQUFRLEtBQVIsQ0FBYyxJQUFkLEVBQW9CLE9BQXBCLENBQVA7QUFDRDs7OzZCQUVlLEksRUFBTTtBQUNwQixhQUFPLFFBQVEsUUFBUixDQUFpQixJQUFqQixFQUF1QixJQUF2QixDQUFQO0FBQ0Q7OzttQ0FFcUIsVSxFQUFZO0FBQ2hDLGFBQU8sUUFBUSxjQUFSLENBQXVCLElBQXZCLEVBQTZCLFVBQTdCLENBQVA7QUFDRDs7O21DQUVxQixLLEVBQU8sVSxFQUFZO0FBQ3ZDLFVBQUksVUFBVSxNQUFWLEtBQXFCLENBQXpCLEVBQTRCO0FBQzFCLHFCQUFhLEtBQWI7QUFDQSxnQkFBUSxJQUFSO0FBQ0Q7O0FBRUQsYUFBTyxRQUFRLGNBQVIsQ0FBdUIsS0FBdkIsRUFBOEIsVUFBOUIsQ0FBUDtBQUNEOzs7O0VBMUJnQixPOztBQTZCbkIsS0FBSyxPQUFMLEdBQWUsTUFBZjs7QUFFQSxPQUFPLE9BQVAsR0FBaUIsSUFBakI7OztBQ25DQTs7Ozs7Ozs7OztBQUVBLElBQU0sVUFBVSxRQUFRLFlBQVIsQ0FBaEI7O0lBRU0sRzs7O0FBQ0osZUFBWSxRQUFaLEVBQXNCO0FBQUE7O0FBQUEscUdBQ2QsUUFEYztBQUVyQjs7Ozs0QkFFTztBQUFFLGFBQU8sSUFBSSxLQUFKLENBQVUsSUFBVixDQUFQO0FBQXlCOzs7MEJBRXRCLE8sRUFBUztBQUNwQixhQUFPLFFBQVEsS0FBUixDQUFjLEdBQWQsRUFBbUIsT0FBbkIsQ0FBUDtBQUNEOzs7NkJBRWUsSSxFQUFNO0FBQ3BCLGFBQU8sUUFBUSxRQUFSLENBQWlCLEdBQWpCLEVBQXNCLElBQXRCLENBQVA7QUFDRDs7O21DQUVxQixVLEVBQVk7QUFDaEMsYUFBTyxRQUFRLGNBQVIsQ0FBdUIsR0FBdkIsRUFBNEIsVUFBNUIsQ0FBUDtBQUNEOzs7bUNBRXFCLEssRUFBTyxVLEVBQVk7QUFDdkMsVUFBSSxVQUFVLE1BQVYsS0FBcUIsQ0FBekIsRUFBNEI7QUFDMUIscUJBQWEsS0FBYjtBQUNBLGdCQUFRLEdBQVI7QUFDRDs7QUFFRCxhQUFPLFFBQVEsY0FBUixDQUF1QixLQUF2QixFQUE4QixVQUE5QixDQUFQO0FBQ0Q7Ozs7RUExQmUsTzs7QUE2QmxCLElBQUksT0FBSixHQUFjLEtBQWQ7O0FBRUEsT0FBTyxPQUFQLEdBQWlCLEdBQWpCOzs7QUNuQ0E7Ozs7Ozs7Ozs7QUFFQSxJQUFNLFVBQVUsUUFBUSxZQUFSLENBQWhCOztJQUVNLEk7OztBQUNKLGdCQUFZLFFBQVosRUFBc0I7QUFBQTs7QUFBQSx1R0FDZCxRQURjO0FBRXJCOzs7OzRCQUVPO0FBQUUsYUFBTyxLQUFLLEtBQUwsQ0FBVyxJQUFYLENBQVA7QUFBMEI7OzswQkFFdkIsTyxFQUFTO0FBQ3BCLGFBQU8sUUFBUSxLQUFSLENBQWMsSUFBZCxFQUFvQixPQUFwQixDQUFQO0FBQ0Q7Ozs2QkFFZSxJLEVBQU07QUFDcEIsYUFBTyxRQUFRLFFBQVIsQ0FBaUIsSUFBakIsRUFBdUIsSUFBdkIsQ0FBUDtBQUNEOzs7bUNBRXFCLFUsRUFBWTtBQUNoQyxhQUFPLFFBQVEsY0FBUixDQUF1QixJQUF2QixFQUE2QixVQUE3QixDQUFQO0FBQ0Q7OzttQ0FFcUIsSyxFQUFPLFUsRUFBWTtBQUN2QyxVQUFJLFVBQVUsTUFBVixLQUFxQixDQUF6QixFQUE0QjtBQUMxQixxQkFBYSxLQUFiO0FBQ0EsZ0JBQVEsSUFBUjtBQUNEOztBQUVELGFBQU8sUUFBUSxjQUFSLENBQXVCLEtBQXZCLEVBQThCLFVBQTlCLENBQVA7QUFDRDs7OztFQTFCZ0IsTzs7QUE2Qm5CLEtBQUssT0FBTCxHQUFlLE1BQWY7O0FBRUEsT0FBTyxPQUFQLEdBQWlCLElBQWpCOzs7QUNuQ0E7Ozs7Ozs7Ozs7QUFFQSxJQUFNLFVBQVUsUUFBUSxXQUFSLENBQWhCOztJQUVNLFk7OztBQUNKLHdCQUFZLFFBQVosRUFBc0I7QUFBQTs7QUFBQSx1SEFDZCxRQURjO0FBRXJCOzs7OytCQUVVO0FBQ1QsVUFBTSxRQUFTLFNBQVMsYUFBVCxLQUEyQixLQUFLLFVBQS9DLENBRFMsQ0FDb0Q7O0FBRTdELGFBQU8sS0FBUDtBQUNEOzs7NEJBRU87QUFBRSxXQUFLLFVBQUwsQ0FBZ0IsS0FBaEI7QUFBMEI7OzswQkFFdkIsSyxFQUFPLE8sRUFBZ0M7QUFBQSx3Q0FBcEIsa0JBQW9CO0FBQXBCLDBCQUFvQjtBQUFBOztBQUNsRCxhQUFPLFFBQVEsS0FBUixDQUFjLEtBQWQsRUFBcUIsT0FBckIsRUFBOEIsa0JBQTlCLENBQVA7QUFDRDs7OzZCQUVlLEssRUFBTyxJLEVBQTZCO0FBQUEseUNBQXBCLGtCQUFvQjtBQUFwQiwwQkFBb0I7QUFBQTs7QUFDbEQsYUFBTyxRQUFRLFFBQVIsQ0FBaUIsS0FBakIsRUFBd0IsSUFBeEIsRUFBOEIsa0JBQTlCLENBQVA7QUFDRDs7O21DQUVxQixLLEVBQU8sVSxFQUFtQztBQUFBLHlDQUFwQixrQkFBb0I7QUFBcEIsMEJBQW9CO0FBQUE7O0FBQzlELGFBQU8sUUFBUSxjQUFSLENBQXVCLEtBQXZCLEVBQThCLFVBQTlCLEVBQTBDLGtCQUExQyxDQUFQO0FBQ0Q7OzttQ0FFcUIsSyxFQUFPLFUsRUFBWTtBQUN2QyxhQUFPLFFBQVEsY0FBUixDQUF1QixLQUF2QixFQUE4QixVQUE5QixDQUFQO0FBQ0Q7Ozs7RUEzQndCLE87O0FBOEIzQixPQUFPLE9BQVAsR0FBaUIsWUFBakI7OztBQ2xDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTSxlQUFlLFFBQVEsaUJBQVIsQ0FBckI7O0lBRU0sTTs7O0FBQ0osa0JBQVksUUFBWixFQUFzQixZQUF0QixFQUFvQztBQUFBOztBQUFBLGdIQUM1QixRQUQ0Qjs7QUFHbEMsUUFBSSxZQUFKLEVBQWtCO0FBQ2hCLFlBQUssT0FBTCxDQUFhLFlBQWI7QUFDRDtBQUxpQztBQU1uQzs7OzswQkFFSyxZLEVBQWM7QUFBRSxhQUFPLE9BQU8sS0FBUCxDQUFhLElBQWIsRUFBbUIsWUFBbkIsQ0FBUDtBQUEwQzs7OzRCQUV4RCxPLEVBQVM7QUFDZixVQUFJLFFBQVEsbUJBQVIsS0FBZ0MsU0FBcEMsRUFBK0M7QUFDN0MsZ0JBQVEsbUJBQVIsR0FBOEIsK0JBQTlCO0FBQ0Q7O0FBRUQsOEdBQWMsT0FBZDtBQUNEOzs7NkJBRVEsTyxFQUFTO0FBQ2hCLCtHQUFlLE9BQWY7QUFDRDs7OzBCQUVZLE8sRUFBUyxZLEVBQWM7QUFDbEMsYUFBTyxhQUFhLEtBQWIsQ0FBbUIsTUFBbkIsRUFBMkIsT0FBM0IsRUFBb0MsWUFBcEMsQ0FBUDtBQUNEOzs7NkJBRWUsSSxFQUFNLFksRUFBYztBQUNsQyxhQUFPLGFBQWEsUUFBYixDQUFzQixNQUF0QixFQUE4QixJQUE5QixFQUFvQyxZQUFwQyxDQUFQO0FBQ0Q7OzttQ0FFcUIsVSxFQUFZLFksRUFBYztBQUM5QyxhQUFPLGFBQWEsY0FBYixDQUE0QixNQUE1QixFQUFvQyxVQUFwQyxFQUFnRCxZQUFoRCxDQUFQO0FBQ0Q7OzttQ0FFcUIsSyxFQUFPLFUsRUFBWTtBQUN2QyxVQUFJLFVBQVUsTUFBVixLQUFxQixDQUF6QixFQUE0QjtBQUMxQixxQkFBYSxLQUFiO0FBQ0EsZ0JBQVEsTUFBUjtBQUNEOztBQUVELGFBQU8sYUFBYSxjQUFiLENBQTRCLEtBQTVCLEVBQW1DLFVBQW5DLENBQVA7QUFDRDs7OztFQTFDa0IsWTs7QUE2Q3JCLE9BQU8sTUFBUCxDQUFjLE1BQWQsRUFBc0I7QUFDcEIsV0FBUyxRQURXO0FBRXBCLHNCQUFvQixDQUNsQixTQURrQjtBQUZBLENBQXRCOztBQU9BLE9BQU8sT0FBUCxHQUFpQixNQUFqQjs7QUFFQSxTQUFTLCtCQUFULENBQXlDLE9BQXpDLEVBQWtELEtBQWxELEVBQXlEO0FBQ3ZELE1BQU0sY0FBYyxNQUFNLE1BQTFCO0FBQUEsTUFDTSxpQkFBaUIsUUFBUSxXQUFSLENBRHZCOztBQUdBLFNBQU8sY0FBUDtBQUNEOzs7QUMvREQ7Ozs7Ozs7Ozs7QUFFQSxJQUFNLGVBQWUsUUFBUSxpQkFBUixDQUFyQjs7SUFFTSxROzs7QUFDSixvQkFBWSxRQUFaLEVBQXNCLGFBQXRCLEVBQXFDO0FBQUE7O0FBQUEsb0hBQzdCLFFBRDZCOztBQUduQyxRQUFJLGFBQUosRUFBbUI7QUFDakIsWUFBSyxRQUFMLENBQWMsYUFBZDtBQUNEO0FBTGtDO0FBTXBDOzs7OzBCQUVLLGEsRUFBZTtBQUFFLGFBQU8sU0FBUyxLQUFULENBQWUsSUFBZixFQUFxQixhQUFyQixDQUFQO0FBQTZDOzs7NkJBRTNELE8sRUFBUztBQUNoQixVQUFJLFFBQVEsbUJBQVIsS0FBZ0MsU0FBcEMsRUFBK0M7QUFDN0MsZ0JBQVEsbUJBQVIsR0FBOEIsaUNBQWlDLElBQWpDLENBQXNDLElBQXRDLENBQTlCO0FBQ0Q7O0FBRUQsV0FBSyxFQUFMLENBQVEsT0FBUixFQUFpQixPQUFqQixFQUxnQixDQUtZO0FBQzdCOzs7OEJBRVMsTyxFQUFTO0FBQ2pCLFdBQUssR0FBTCxDQUFTLE9BQVQsRUFBa0IsT0FBbEIsRUFEaUIsQ0FDWTtBQUM5Qjs7OzRCQUVxQjtBQUFBLFVBQWhCLE9BQWdCLHVFQUFOLElBQU07O0FBQ3BCLGdCQUNFLEtBQUssWUFBTCxDQUFrQixTQUFsQixFQUE2QixTQUE3QixDQURGLEdBRUksS0FBSyxjQUFMLENBQW9CLFNBQXBCLENBRko7QUFHRDs7O2dDQUVXO0FBQUUsYUFBTyxLQUFLLFVBQUwsQ0FBZ0IsT0FBdkI7QUFBaUM7OzswQkFFbEMsTyxFQUFTLGEsRUFBZTtBQUNuQyxhQUFPLGFBQWEsS0FBYixDQUFtQixRQUFuQixFQUE2QixPQUE3QixFQUFzQyxhQUF0QyxDQUFQO0FBQ0Q7Ozs2QkFFZSxJLEVBQU0sYSxFQUFlO0FBQ25DLGFBQU8sYUFBYSxRQUFiLENBQXNCLFFBQXRCLEVBQWdDLElBQWhDLEVBQXNDLGFBQXRDLENBQVA7QUFDRDs7O21DQUVxQixVLEVBQVksYSxFQUFlO0FBQy9DLGFBQU8sYUFBYSxjQUFiLENBQTRCLFFBQTVCLEVBQXNDLFVBQXRDLEVBQWtELGFBQWxELENBQVA7QUFDRDs7O21DQUVxQixLLEVBQU8sVSxFQUFZO0FBQ3ZDLFVBQUksVUFBVSxNQUFWLEtBQXFCLENBQXpCLEVBQTRCO0FBQzFCLHFCQUFhLEtBQWI7QUFDQSxnQkFBUSxRQUFSO0FBQ0Q7O0FBRUQsYUFBTyxhQUFhLGNBQWIsQ0FBNEIsS0FBNUIsRUFBbUMsVUFBbkMsQ0FBUDtBQUNEOzs7O0VBbERvQixZOztBQXFEdkIsT0FBTyxNQUFQLENBQWMsUUFBZCxFQUF3QjtBQUN0QixXQUFTLE9BRGE7QUFFdEIsc0JBQW9CLENBQ2xCLFVBRGtCLENBRkU7QUFLdEIsd0JBQXNCO0FBQ3BCLFVBQU07QUFEYztBQUxBLENBQXhCOztBQVVBLE9BQU8sT0FBUCxHQUFpQixRQUFqQjs7QUFFQSxTQUFTLGdDQUFULENBQTBDLE9BQTFDLEVBQW1ELEtBQW5ELEVBQTBEO0FBQ3hELE1BQU0sVUFBVSxLQUFLLFNBQUwsRUFBaEI7QUFBQSxNQUNNLGlCQUFpQixRQUFRLE9BQVIsQ0FEdkI7O0FBR0EsU0FBTyxjQUFQO0FBQ0Q7OztBQzFFRDs7Ozs7Ozs7OztBQUVBLElBQU0sZUFBZSxRQUFRLGlCQUFSLENBQXJCOztJQUVNLEs7OztBQUNKLGlCQUFZLFFBQVosRUFBc0IsYUFBdEIsRUFBcUM7QUFBQTs7QUFBQSw4R0FDN0IsUUFENkI7O0FBR25DLFFBQUksYUFBSixFQUFtQjtBQUNqQixZQUFLLFFBQUwsQ0FBYyxhQUFkO0FBQ0Q7QUFMa0M7QUFNcEM7Ozs7MEJBRUssYSxFQUFlO0FBQUUsYUFBTyxNQUFNLEtBQU4sQ0FBWSxJQUFaLEVBQWtCLGFBQWxCLENBQVA7QUFBMEM7OzsrQkFFdEQ7QUFBRSxhQUFPLEtBQUssVUFBTCxDQUFnQixLQUF2QjtBQUErQjs7O3dDQUV4QjtBQUFFLGFBQU8sS0FBSyxVQUFMLENBQWdCLGNBQXZCO0FBQXdDOzs7c0NBRTVDO0FBQUUsYUFBTyxLQUFLLFVBQUwsQ0FBZ0IsWUFBdkI7QUFBc0M7Ozs2QkFFakQsSyxFQUFPO0FBQUUsV0FBSyxVQUFMLENBQWdCLEtBQWhCLEdBQXdCLEtBQXhCO0FBQWdDOzs7c0NBRWhDLGMsRUFBZ0I7QUFBRSxXQUFLLFVBQUwsQ0FBZ0IsY0FBaEIsR0FBaUMsY0FBakM7QUFBa0Q7OztvQ0FFdEUsWSxFQUFjO0FBQUUsV0FBSyxVQUFMLENBQWdCLFlBQWhCLEdBQStCLFlBQS9CO0FBQThDOzs7NkJBRXJFLE8sRUFBUztBQUNoQixVQUFJLFFBQVEsbUJBQVIsS0FBZ0MsU0FBcEMsRUFBK0M7QUFDN0MsZ0JBQVEsbUJBQVIsR0FBOEIsaUNBQWlDLElBQWpDLENBQXNDLElBQXRDLENBQTlCO0FBQ0Q7O0FBRUQsV0FBSyxFQUFMLENBQVEsUUFBUixFQUFrQixPQUFsQjtBQUNEOzs7OEJBRVMsTyxFQUFTO0FBQ2pCLFdBQUssR0FBTCxDQUFTLFFBQVQsRUFBbUIsT0FBbkI7QUFDRDs7OzBCQUVZLE8sRUFBUyxhLEVBQWU7QUFDbkMsYUFBTyxhQUFhLEtBQWIsQ0FBbUIsS0FBbkIsRUFBMEIsT0FBMUIsRUFBbUMsYUFBbkMsQ0FBUDtBQUNEOzs7NkJBRWUsSSxFQUFNLGEsRUFBZTtBQUNuQyxhQUFPLGFBQWEsUUFBYixDQUFzQixLQUF0QixFQUE2QixJQUE3QixFQUFtQyxhQUFuQyxDQUFQO0FBQ0Q7OzttQ0FFcUIsVSxFQUFZLGEsRUFBZTtBQUMvQyxhQUFPLGFBQWEsY0FBYixDQUE0QixLQUE1QixFQUFtQyxVQUFuQyxFQUErQyxhQUEvQyxDQUFQO0FBQ0Q7OzttQ0FFcUIsSyxFQUFPLFUsRUFBWTtBQUN2QyxVQUFJLFVBQVUsTUFBVixLQUFxQixDQUF6QixFQUE0QjtBQUMxQixxQkFBYSxLQUFiO0FBQ0EsZ0JBQVEsS0FBUjtBQUNEOztBQUVELGFBQU8sYUFBYSxjQUFiLENBQTRCLEtBQTVCLEVBQW1DLFVBQW5DLENBQVA7QUFDRDs7OztFQXREaUIsWTs7QUF5RHBCLE9BQU8sTUFBUCxDQUFjLEtBQWQsRUFBcUI7QUFDbkIsV0FBUyxPQURVO0FBRW5CLHNCQUFvQixDQUNsQixVQURrQjtBQUZELENBQXJCOztBQU9BLE9BQU8sT0FBUCxHQUFpQixLQUFqQjs7QUFFQSxTQUFTLGdDQUFULENBQTBDLE9BQTFDLEVBQW1ELEtBQW5ELEVBQTBEO0FBQ3hELE1BQU0sUUFBUSxLQUFLLFFBQUwsRUFBZDtBQUFBLE1BQ00saUJBQWlCLFFBQVEsS0FBUixDQUR2Qjs7QUFHQSxTQUFPLGNBQVA7QUFDRDs7O0FDM0VEOzs7Ozs7Ozs7O0FBRUEsSUFBTSxlQUFlLFFBQVEsaUJBQVIsQ0FBckI7O0lBRU0sSTs7O0FBQ0osZ0JBQVksUUFBWixFQUFzQixZQUF0QixFQUFvQztBQUFBOztBQUFBLDRHQUM1QixRQUQ0Qjs7QUFHbEMsUUFBSSxZQUFKLEVBQWtCO0FBQ2hCLFlBQUssT0FBTCxDQUFhLFlBQWI7QUFDRDtBQUxpQztBQU1uQzs7OzswQkFFSyxZLEVBQWM7QUFBRSxhQUFPLEtBQUssS0FBTCxDQUFXLElBQVgsRUFBaUIsWUFBakIsQ0FBUDtBQUF3Qzs7OzRCQUV0RCxPLEVBQVM7QUFDZixVQUFJLFFBQVEsbUJBQVIsS0FBZ0MsU0FBcEMsRUFBK0M7QUFDN0MsZ0JBQVEsbUJBQVIsR0FBOEIsZ0NBQWdDLElBQWhDLENBQXFDLElBQXJDLENBQTlCO0FBQ0Q7O0FBRUQsV0FBSyxFQUFMLENBQVEsT0FBUixFQUFpQixPQUFqQjtBQUNEOzs7NkJBRVEsTyxFQUFTO0FBQ2hCLFdBQUssR0FBTCxDQUFTLE9BQVQsRUFBa0IsT0FBbEI7QUFDRDs7OzBCQUVZLE8sRUFBUyxZLEVBQWM7QUFDbEMsYUFBTyxhQUFhLEtBQWIsQ0FBbUIsSUFBbkIsRUFBeUIsT0FBekIsRUFBa0MsWUFBbEMsQ0FBUDtBQUNEOzs7NkJBRWUsSSxFQUFNLFksRUFBYztBQUNsQyxhQUFPLGFBQWEsUUFBYixDQUFzQixJQUF0QixFQUE0QixJQUE1QixFQUFrQyxZQUFsQyxDQUFQO0FBQ0Q7OzttQ0FFcUIsVSxFQUFZLFksRUFBYztBQUM5QyxhQUFPLGFBQWEsY0FBYixDQUE0QixJQUE1QixFQUFrQyxVQUFsQyxFQUE4QyxZQUE5QyxDQUFQO0FBQ0Q7OzttQ0FFcUIsSyxFQUFPLFUsRUFBWTtBQUN2QyxVQUFJLFVBQVUsTUFBVixLQUFxQixDQUF6QixFQUE0QjtBQUMxQixxQkFBYSxLQUFiO0FBQ0EsZ0JBQVEsSUFBUjtBQUNEOztBQUVELGFBQU8sYUFBYSxjQUFiLENBQTRCLEtBQTVCLEVBQW1DLFVBQW5DLENBQVA7QUFDRDs7OztFQTFDZ0IsWTs7QUE2Q25CLE9BQU8sTUFBUCxDQUFjLElBQWQsRUFBb0I7QUFDbEIsV0FBUyxHQURTO0FBRWxCLHNCQUFvQixDQUNsQixTQURrQjtBQUZGLENBQXBCOztBQU9BLE9BQU8sT0FBUCxHQUFpQixJQUFqQjs7QUFFQSxTQUFTLCtCQUFULENBQXlDLE9BQXpDLEVBQWtELEtBQWxELEVBQXlEO0FBQ3ZELE1BQU0sT0FBTyxLQUFLLFlBQUwsQ0FBa0IsTUFBbEIsQ0FBYjtBQUFBLE1BQ00saUJBQWlCLFFBQVEsSUFBUixDQUR2Qjs7QUFHQSxTQUFPLGNBQVA7QUFDRDs7O0FDL0REOzs7Ozs7Ozs7O0FBRUEsSUFBTSxlQUFlLFFBQVEsaUJBQVIsQ0FBckI7O0lBRU0sTTs7O0FBQ0osa0JBQVksUUFBWixFQUFzQixhQUF0QixFQUFxQztBQUFBOztBQUFBLGdIQUM3QixRQUQ2Qjs7QUFHbkMsUUFBSSxhQUFKLEVBQW1CO0FBQ2pCLFlBQUssUUFBTCxDQUFjLGFBQWQ7QUFDRDtBQUxrQztBQU1wQzs7OzswQkFFSyxhLEVBQWU7QUFBRSxhQUFPLE9BQU8sS0FBUCxDQUFhLElBQWIsRUFBbUIsYUFBbkIsQ0FBUDtBQUEyQzs7OzZDQUV6QztBQUFFLGFBQU8sS0FBSyxVQUFMLENBQWdCLEtBQXZCO0FBQStCLEssQ0FBQzs7Ozs2Q0FFbEMsSyxFQUFPO0FBQUUsV0FBSyxVQUFMLENBQWdCLEtBQWhCLEdBQXdCLEtBQXhCO0FBQWdDLEssQ0FBQzs7Ozs2QkFFMUQsTyxFQUFTO0FBQ2hCLFVBQUksUUFBUSxtQkFBUixLQUFnQyxTQUFwQyxFQUErQztBQUM3QyxnQkFBUSxtQkFBUixHQUE4QixpQ0FBaUMsSUFBakMsQ0FBc0MsSUFBdEMsQ0FBOUI7QUFDRDs7QUFFRCxXQUFLLEVBQUwsQ0FBUSxRQUFSLEVBQWtCLE9BQWxCO0FBQ0Q7Ozs4QkFFUyxPLEVBQVM7QUFDakIsV0FBSyxHQUFMLENBQVMsUUFBVCxFQUFtQixPQUFuQjtBQUNEOzs7MEJBRVksTyxFQUFTLGEsRUFBZTtBQUNuQyxhQUFPLGFBQWEsS0FBYixDQUFtQixNQUFuQixFQUEyQixPQUEzQixFQUFvQyxhQUFwQyxDQUFQO0FBQ0Q7Ozs2QkFFZSxJLEVBQU0sYSxFQUFlO0FBQ25DLGFBQU8sYUFBYSxRQUFiLENBQXNCLE1BQXRCLEVBQThCLElBQTlCLEVBQW9DLGFBQXBDLENBQVA7QUFDRDs7O21DQUVxQixVLEVBQVksYSxFQUFlO0FBQy9DLGFBQU8sYUFBYSxjQUFiLENBQTRCLE1BQTVCLEVBQW9DLFVBQXBDLEVBQWdELGFBQWhELENBQVA7QUFDRDs7O21DQUVxQixLLEVBQU8sVSxFQUFZO0FBQ3ZDLFVBQUksVUFBVSxNQUFWLEtBQXFCLENBQXpCLEVBQTRCO0FBQzFCLHFCQUFhLEtBQWI7QUFDQSxnQkFBUSxNQUFSO0FBQ0Q7O0FBRUQsYUFBTyxhQUFhLGNBQWIsQ0FBNEIsS0FBNUIsRUFBbUMsVUFBbkMsQ0FBUDtBQUNEOzs7O0VBOUNrQixZOztBQWlEckIsT0FBTyxNQUFQLENBQWMsTUFBZCxFQUFzQjtBQUNwQixXQUFTLFFBRFc7QUFFcEIsc0JBQW9CLENBQ2xCLFVBRGtCO0FBRkEsQ0FBdEI7O0FBT0EsT0FBTyxPQUFQLEdBQWlCLE1BQWpCOztBQUVBLFNBQVMsZ0NBQVQsQ0FBMEMsT0FBMUMsRUFBbUQsS0FBbkQsRUFBMEQ7QUFDeEQsTUFBTSxzQkFBc0IsS0FBSyxzQkFBTCxFQUE1QjtBQUFBLE1BQ00saUJBQWlCLFFBQVEsbUJBQVIsQ0FEdkI7O0FBR0EsU0FBTyxjQUFQO0FBQ0Q7OztBQ25FRDs7Ozs7Ozs7OztBQUVBLElBQU0sZUFBZSxRQUFRLGlCQUFSLENBQXJCOztJQUVNLFE7OztBQUNKLG9CQUFZLFFBQVosRUFBc0IsYUFBdEIsRUFBcUMsYUFBckMsRUFBb0Q7QUFBQTs7QUFBQSxvSEFDNUMsUUFENEM7O0FBR2xELFFBQUksYUFBSixFQUFtQjtBQUNqQixZQUFLLFFBQUwsQ0FBYyxhQUFkO0FBQ0Q7O0FBRUQsUUFBSSxhQUFKLEVBQW1CO0FBQ2pCLFlBQUssUUFBTCxDQUFjLGFBQWQ7QUFDRDtBQVRpRDtBQVVuRDs7OzswQkFFSyxhLEVBQWU7QUFBRSxhQUFPLFNBQVMsS0FBVCxDQUFlLElBQWYsRUFBcUIsYUFBckIsQ0FBUDtBQUE2Qzs7OytCQUV6RDtBQUFFLGFBQU8sS0FBSyxVQUFMLENBQWdCLEtBQXZCO0FBQStCOzs7d0NBRXhCO0FBQUUsYUFBTyxLQUFLLFVBQUwsQ0FBZ0IsY0FBdkI7QUFBd0M7OztzQ0FFNUM7QUFBRSxhQUFPLEtBQUssVUFBTCxDQUFnQixZQUF2QjtBQUFzQzs7O21DQUUzQztBQUFFLGFBQU8sS0FBSyxVQUFMLENBQWdCLFNBQXZCO0FBQW1DOzs7b0NBRXBDO0FBQUUsYUFBTyxLQUFLLFVBQUwsQ0FBZ0IsVUFBdkI7QUFBb0M7Ozs2QkFFN0MsSyxFQUFPO0FBQUUsV0FBSyxVQUFMLENBQWdCLEtBQWhCLEdBQXdCLEtBQXhCO0FBQWdDOzs7c0NBRWhDLGMsRUFBZ0I7QUFBRSxXQUFLLFVBQUwsQ0FBZ0IsY0FBaEIsR0FBaUMsY0FBakM7QUFBa0Q7OztvQ0FFdEUsWSxFQUFjO0FBQUUsV0FBSyxVQUFMLENBQWdCLFlBQWhCLEdBQStCLFlBQS9CO0FBQThDOzs7aUNBRWpFLFMsRUFBVztBQUFFLFdBQUssVUFBTCxDQUFnQixTQUFoQixHQUE0QixTQUE1QjtBQUF3Qzs7O2tDQUVwRCxVLEVBQVk7QUFBRSxXQUFLLFVBQUwsQ0FBZ0IsVUFBaEIsR0FBNkIsVUFBN0I7QUFBMEM7Ozs2QkFFN0QsTyxFQUFTO0FBQ2hCLFVBQUksUUFBUSxtQkFBUixLQUFnQyxTQUFwQyxFQUErQztBQUM3QyxnQkFBUSxtQkFBUixHQUE4QixpQ0FBaUMsSUFBakMsQ0FBc0MsSUFBdEMsQ0FBOUI7QUFDRDs7QUFFRCxXQUFLLEVBQUwsQ0FBUSxRQUFSLEVBQWtCLE9BQWxCO0FBQ0Q7Ozs4QkFFUyxPLEVBQVM7QUFDakIsV0FBSyxHQUFMLENBQVMsUUFBVCxFQUFtQixPQUFuQjtBQUNEOzs7NkJBRVEsTyxFQUFTO0FBQ2hCLFVBQUksUUFBUSxtQkFBUixLQUFnQyxTQUFwQyxFQUErQztBQUM3QyxnQkFBUSxtQkFBUixHQUE4QixpQ0FBaUMsSUFBakMsQ0FBc0MsSUFBdEMsQ0FBOUI7QUFDRDs7QUFFRCxXQUFLLEVBQUwsQ0FBUSxRQUFSLEVBQWtCLE9BQWxCO0FBQ0Q7Ozs4QkFFUyxPLEVBQVM7QUFDakIsV0FBSyxHQUFMLENBQVMsUUFBVCxFQUFtQixPQUFuQjtBQUNEOzs7NkJBRVEsYSxFQUFlLENBQUU7Ozs4QkFFaEIsYSxFQUFlLENBQUU7OzswQkFFZCxPLEVBQVMsYSxFQUFlLGEsRUFBZTtBQUNsRCxhQUFPLGFBQWEsS0FBYixDQUFtQixRQUFuQixFQUE2QixPQUE3QixFQUFzQyxhQUF0QyxFQUFxRCxhQUFyRCxDQUFQO0FBQ0Q7Ozs2QkFFZSxJLEVBQU0sYSxFQUFlLGEsRUFBZTtBQUNsRCxhQUFPLGFBQWEsUUFBYixDQUFzQixRQUF0QixFQUFnQyxJQUFoQyxFQUFzQyxhQUF0QyxFQUFxRCxhQUFyRCxDQUFQO0FBQ0Q7OzttQ0FFcUIsVSxFQUFZLGEsRUFBZSxhLEVBQWU7QUFDOUQsYUFBTyxhQUFhLGNBQWIsQ0FBNEIsUUFBNUIsRUFBc0MsVUFBdEMsRUFBa0QsYUFBbEQsRUFBaUUsYUFBakUsQ0FBUDtBQUNEOzs7bUNBRXFCLEssRUFBTyxVLEVBQVk7QUFDdkMsVUFBSSxVQUFVLE1BQVYsS0FBcUIsQ0FBekIsRUFBNEI7QUFDMUIscUJBQWEsS0FBYjtBQUNBLGdCQUFRLFFBQVI7QUFDRDs7QUFFRCxhQUFPLGFBQWEsY0FBYixDQUE0QixLQUE1QixFQUFtQyxVQUFuQyxDQUFQO0FBQ0Q7Ozs7RUFsRm9CLFk7O0FBcUZ2QixPQUFPLE1BQVAsQ0FBYyxRQUFkLEVBQXdCO0FBQ3RCLFdBQVMsVUFEYTtBQUV0QixzQkFBb0IsQ0FDbEIsVUFEa0IsRUFFbEIsVUFGa0I7QUFGRSxDQUF4Qjs7QUFRQSxPQUFPLE9BQVAsR0FBaUIsUUFBakI7O0FBRUEsU0FBUyxnQ0FBVCxDQUEwQyxPQUExQyxFQUFtRCxLQUFuRCxFQUEwRDtBQUN4RCxNQUFNLFFBQVEsS0FBSyxRQUFMLEVBQWQ7QUFBQSxNQUNNLGlCQUFpQixRQUFRLEtBQVIsQ0FEdkI7O0FBR0EsU0FBTyxjQUFQO0FBQ0Q7O0FBRUQsU0FBUyxnQ0FBVCxDQUEwQyxPQUExQyxFQUFtRCxLQUFuRCxFQUEwRDtBQUN4RCxNQUFNLFlBQVksS0FBSyxZQUFMLEVBQWxCO0FBQUEsTUFDTSxhQUFhLEtBQUssYUFBTCxFQURuQjtBQUFBLE1BRU0saUJBQWlCLFFBQVEsU0FBUixFQUFtQixVQUFuQixDQUZ2Qjs7QUFJQSxTQUFPLGNBQVA7QUFDRDs7O0FDaEhEOzs7Ozs7SUFFTSxNO0FBQ0osa0JBQVksR0FBWixFQUFpQixJQUFqQixFQUF1QixNQUF2QixFQUErQixLQUEvQixFQUFzQztBQUFBOztBQUNwQyxTQUFLLEdBQUwsR0FBVyxHQUFYO0FBQ0EsU0FBSyxJQUFMLEdBQVksSUFBWjtBQUNBLFNBQUssTUFBTCxHQUFjLE1BQWQ7QUFDQSxTQUFLLEtBQUwsR0FBYSxLQUFiO0FBQ0Q7Ozs7NkJBRVE7QUFDUCxhQUFPLEtBQUssR0FBWjtBQUNEOzs7OEJBRVM7QUFDUixhQUFPLEtBQUssSUFBWjtBQUNEOzs7Z0NBRVc7QUFDVixhQUFPLEtBQUssTUFBWjtBQUNEOzs7K0JBRVU7QUFDVCxhQUFPLEtBQUssS0FBWjtBQUNEOzs7dUNBRWtCLFEsRUFBVSxTLEVBQVc7QUFDdEMsYUFBVyxLQUFLLEdBQUwsR0FBVyxRQUFaLElBQ0MsS0FBSyxJQUFMLEdBQVksU0FEYixJQUVDLEtBQUssTUFBTCxHQUFjLFFBRmYsSUFHQyxLQUFLLEtBQUwsR0FBYSxTQUh4QjtBQUlEOzs7bUNBRWMsTSxFQUFRO0FBQ3JCLGFBQVcsS0FBSyxHQUFMLEdBQVcsT0FBTyxNQUFuQixJQUNDLEtBQUssSUFBTCxHQUFZLE9BQU8sS0FEcEIsSUFFQyxLQUFLLE1BQUwsR0FBYyxPQUFPLEdBRnRCLElBR0MsS0FBSyxLQUFMLEdBQWEsT0FBTyxJQUgvQjtBQUlEOzs7MkNBRTZCLGtCLEVBQW9CO0FBQ2hELFVBQU0sTUFBTSxtQkFBbUIsR0FBL0I7QUFBQSxVQUNNLE9BQU8sbUJBQW1CLElBRGhDO0FBQUEsVUFFTSxTQUFTLG1CQUFtQixNQUZsQztBQUFBLFVBR00sUUFBUSxtQkFBbUIsS0FIakM7QUFBQSxVQUlNLFNBQVMsSUFBSSxNQUFKLENBQVcsR0FBWCxFQUFnQixJQUFoQixFQUFzQixNQUF0QixFQUE4QixLQUE5QixDQUpmOztBQU1BLGFBQU8sTUFBUDtBQUNEOzs7Ozs7QUFHSCxPQUFPLE9BQVAsR0FBaUIsTUFBakI7OztBQ25EQTs7Ozs7O0lBRU0sTTtBQUNKLGtCQUFZLEdBQVosRUFBaUIsSUFBakIsRUFBdUI7QUFBQTs7QUFDckIsU0FBSyxHQUFMLEdBQVcsR0FBWDtBQUNBLFNBQUssSUFBTCxHQUFZLElBQVo7QUFDRDs7Ozs2QkFFUTtBQUNQLGFBQU8sS0FBSyxHQUFaO0FBQ0Q7Ozs4QkFFUztBQUNSLGFBQU8sS0FBSyxJQUFaO0FBQ0Q7Ozs7OztBQUdILE9BQU8sT0FBUCxHQUFpQixNQUFqQjs7O0FDakJBOztBQUVBLFNBQVMsT0FBVCxDQUFpQixPQUFqQixFQUEwQjtBQUN4QixNQUFJLFFBQVEsbUJBQVIsS0FBZ0MsU0FBcEMsRUFBK0M7QUFDN0MsWUFBUSxtQkFBUixHQUE4QiwwQkFBOUI7QUFDRDs7QUFFRCxPQUFLLEVBQUwsQ0FBUSxPQUFSLEVBQWlCLE9BQWpCO0FBQ0Q7O0FBRUQsU0FBUyxRQUFULENBQWtCLE9BQWxCLEVBQTJCO0FBQUUsT0FBSyxHQUFMLENBQVMsT0FBVCxFQUFrQixPQUFsQjtBQUE2Qjs7QUFFMUQsSUFBTSxhQUFhO0FBQ2pCLFdBQVMsT0FEUTtBQUVqQixZQUFVO0FBRk8sQ0FBbkI7O0FBS0EsT0FBTyxPQUFQLEdBQWlCLFVBQWpCOztBQUVBLFNBQVMsMEJBQVQsQ0FBb0MsT0FBcEMsRUFBNkMsS0FBN0MsRUFBb0Q7QUFDbEQsTUFBTSxXQUFXLE1BQU0sS0FBdkI7QUFBQSxNQUErQjtBQUN6QixjQUFZLE1BQU0sS0FEeEI7QUFBQSxNQUMrQjtBQUN6QixnQkFBYyxNQUFNLE1BRjFCO0FBQUEsTUFFa0M7QUFDNUIsbUJBQWlCLFFBQVEsUUFBUixFQUFrQixTQUFsQixFQUE2QixXQUE3QixDQUh2Qjs7QUFLQSxTQUFPLGNBQVA7QUFDRDs7O0FDMUJEOztBQUVBLFNBQVMsRUFBVCxDQUFZLFVBQVosRUFBd0IsT0FBeEIsRUFBaUM7QUFDL0IsZUFBYSxXQUFXLEtBQVgsQ0FBaUIsR0FBakIsQ0FBYixDQUQrQixDQUNLOztBQUVwQyxhQUFXLE9BQVgsQ0FBbUIsVUFBUyxTQUFULEVBQW9CO0FBQ3JDLFFBQU0sbUJBQW1CLEtBQUssVUFBTCxDQUFnQixTQUFoQixFQUEyQixPQUEzQixDQUF6Qjs7QUFFQSxRQUFJLGdCQUFKLEVBQXNCO0FBQ3BCLFdBQUssVUFBTCxDQUFnQixnQkFBaEIsQ0FBaUMsU0FBakMsRUFBNEMsY0FBYyxJQUFkLENBQW1CLElBQW5CLENBQTVDO0FBQ0Q7QUFDRixHQU5rQixDQU1qQixJQU5pQixDQU1aLElBTlksQ0FBbkI7QUFPRDs7QUFFRCxTQUFTLEdBQVQsQ0FBYSxVQUFiLEVBQXlCLE9BQXpCLEVBQWtDO0FBQ2hDLGVBQWEsV0FBVyxLQUFYLENBQWlCLEdBQWpCLENBQWIsQ0FEZ0MsQ0FDSTs7QUFFcEMsYUFBVyxPQUFYLENBQW1CLFVBQVMsU0FBVCxFQUFvQjtBQUNyQyxRQUFNLHNCQUFzQixLQUFLLGFBQUwsQ0FBbUIsU0FBbkIsRUFBOEIsT0FBOUIsQ0FBNUI7O0FBRUEsUUFBSSxtQkFBSixFQUF5QjtBQUN2QixXQUFLLFVBQUwsQ0FBZ0IsbUJBQWhCLENBQW9DLFNBQXBDLEVBQStDLGNBQWMsSUFBZCxDQUFtQixJQUFuQixDQUEvQztBQUNEO0FBQ0YsR0FOa0IsQ0FNakIsSUFOaUIsQ0FNWixJQU5ZLENBQW5CO0FBT0Q7O0FBRUQsU0FBUyxVQUFULENBQW9CLFNBQXBCLEVBQStCLE9BQS9CLEVBQXdDO0FBQ3RDLE1BQUksbUJBQW1CLEtBQXZCO0FBQUEsTUFDSSxXQUFXLEtBQUssV0FBTCxDQUFpQixTQUFqQixDQURmOztBQUdBLE1BQUksYUFBYSxTQUFqQixFQUE0QjtBQUMxQixlQUFXLEVBQVg7O0FBRUEsU0FBSyxXQUFMLENBQWlCLFNBQWpCLElBQThCLFFBQTlCOztBQUVBLHVCQUFtQixJQUFuQjtBQUNEOztBQUVELFdBQVMsSUFBVCxDQUFjLE9BQWQ7O0FBRUEsU0FBTyxnQkFBUDtBQUNEOztBQUVELFNBQVMsYUFBVCxDQUF1QixTQUF2QixFQUFrQyxPQUFsQyxFQUEyQztBQUN6QyxNQUFJLHNCQUFzQixLQUExQjtBQUFBLE1BQ0ksV0FBVyxLQUFLLFdBQUwsQ0FBaUIsU0FBakIsQ0FEZjs7QUFHQSxNQUFJLFNBQVMsTUFBVCxLQUFvQixDQUF4QixFQUEyQjtBQUN6QixXQUFRLEtBQUssV0FBTCxDQUFpQixTQUFqQixDQUFSOztBQUVBLDBCQUFzQixJQUF0QjtBQUNELEdBSkQsTUFJTztBQUNMLFFBQU0sUUFBUSxTQUFTLE9BQVQsQ0FBaUIsT0FBakIsQ0FBZDs7QUFFQSxRQUFJLFFBQVEsQ0FBQyxDQUFiLEVBQWdCO0FBQ2QsVUFBTSxjQUFjLENBQXBCOztBQUVBLGVBQVMsTUFBVCxDQUFnQixLQUFoQixFQUF1QixXQUF2QjtBQUNEO0FBQ0Y7O0FBRUQsU0FBTyxtQkFBUDtBQUNEOztBQUVELElBQU0sYUFBYTtBQUNqQixNQUFJLEVBRGE7QUFFakIsT0FBSyxHQUZZO0FBR2pCLGNBQVksVUFISztBQUlqQixpQkFBZTtBQUpFLENBQW5COztBQU9BLE9BQU8sT0FBUCxHQUFpQixVQUFqQjs7QUFFQSxTQUFTLGFBQVQsQ0FBdUIsS0FBdkIsRUFBOEI7QUFDNUIsTUFBTSxZQUFZLE1BQU0sSUFBeEI7QUFBQSxNQUNNLFdBQVcsS0FBSyxXQUFMLENBQWlCLFNBQWpCLENBRGpCOztBQUdBLE1BQUksc0JBQXNCLEtBQTFCOztBQUVBLFdBQVMsT0FBVCxDQUFpQixVQUFTLE9BQVQsRUFBa0I7QUFDakMsUUFBSSxRQUFRLG1CQUFSLEtBQWdDLFNBQXBDLEVBQStDO0FBQzdDLFVBQU0saUJBQWlCLFFBQVEsbUJBQVIsQ0FBNEIsT0FBNUIsRUFBcUMsS0FBckMsQ0FBdkI7O0FBRUEsVUFBSSxtQkFBbUIsSUFBdkIsRUFBNkI7QUFDM0IsOEJBQXNCLElBQXRCO0FBQ0Q7QUFDRixLQU5ELE1BTU87QUFDTCxVQUFNLGtCQUFpQixRQUFRLEtBQVIsQ0FBdkI7O0FBRUEsVUFBSSxvQkFBbUIsSUFBdkIsRUFBNkI7QUFDM0IsOEJBQXNCLElBQXRCO0FBQ0Q7QUFDRjtBQUNGLEdBZEQ7O0FBZ0JBLE1BQUksbUJBQUosRUFBeUI7QUFDdkIsVUFBTSxjQUFOO0FBQ0Q7QUFDRjs7O0FDbEdEOzs7O0FBRUEsU0FBUyxlQUFULENBQXlCLFVBQXpCLEVBQXFDLGtCQUFyQyxFQUF5RCxvQkFBekQsRUFBK0U7QUFDN0UsT0FBSyxVQUFMLEdBQWtCLEVBQWxCOztBQUVBLFNBQU8sTUFBUCxDQUFjLFVBQWQsRUFBMEIsb0JBQTFCOztBQUVBLE1BQU0sUUFBUSxPQUFPLElBQVAsQ0FBWSxVQUFaLENBQWQ7O0FBRUEsUUFBTSxPQUFOLENBQWMsVUFBUyxJQUFULEVBQWU7QUFDM0IsUUFBSSxTQUFTLGVBQWIsRUFBOEI7QUFDNUIsVUFBTSxnQkFBZ0IsV0FBVyxlQUFYLENBQXRCOztBQUVBLG9CQUFjLE9BQWQsQ0FBc0IsVUFBUyxZQUFULEVBQXVCO0FBQzNDLGFBQUssTUFBTCxDQUFZLFlBQVo7QUFDRCxPQUZxQixDQUVwQixJQUZvQixDQUVmLElBRmUsQ0FBdEI7QUFHRCxLQU5ELE1BTU87QUFDTCxVQUFNLFFBQVEsV0FBVyxJQUFYLENBQWQ7O0FBRUEsVUFBSSxLQUFKLEVBQVcsQ0FFVixDQUZELE1BRU8sSUFBSSxvQkFBb0IsSUFBcEIsRUFBMEIsa0JBQTFCLENBQUosRUFBbUQ7QUFDeEQseUJBQWlCLElBQWpCLEVBQXVCLElBQXZCLEVBQTZCLEtBQTdCO0FBQ0QsT0FGTSxNQUVBLElBQUksY0FBYyxJQUFkLENBQUosRUFBeUI7QUFDOUIsbUJBQVcsSUFBWCxFQUFpQixJQUFqQixFQUF1QixLQUF2QjtBQUNELE9BRk0sTUFFQSxJQUFJLGdCQUFnQixJQUFoQixDQUFKLEVBQTJCO0FBQ2hDLHFCQUFhLElBQWIsRUFBbUIsSUFBbkIsRUFBeUIsS0FBekI7QUFDRCxPQUZNLE1BRUE7QUFDTCxhQUFLLFVBQUwsQ0FBZ0IsSUFBaEIsSUFBd0IsS0FBeEI7QUFDRDtBQUNGO0FBQ0YsR0F0QmEsQ0FzQlosSUF0QlksQ0FzQlAsSUF0Qk8sQ0FBZDtBQXVCRDs7QUFFRCxJQUFNLFdBQVc7QUFDZixtQkFBaUI7QUFERixDQUFqQjs7QUFJQSxPQUFPLE9BQVAsR0FBaUIsUUFBakI7O0FBRUEsU0FBUyxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxJQUFuQyxFQUF5QyxLQUF6QyxFQUFnRDtBQUM5QyxNQUFNLG9CQUFvQixJQUExQjtBQUFBLE1BQWdDO0FBQzFCLGtCQUFnQixLQUR0QixDQUQ4QyxDQUVoQjs7QUFFOUIsVUFBUSxpQkFBUixFQUEyQixhQUEzQjtBQUNEOztBQUVELFNBQVMsVUFBVCxDQUFvQixPQUFwQixFQUE2QixJQUE3QixFQUFtQyxLQUFuQyxFQUEwQztBQUN4QyxNQUFNLFlBQVksS0FBSyxNQUFMLENBQVksQ0FBWixFQUFlLFdBQWYsRUFBbEI7QUFBQSxNQUFnRDtBQUMxQyxZQUFVLEtBRGhCLENBRHdDLENBRWhCOztBQUV4QixVQUFRLEVBQVIsQ0FBVyxTQUFYLEVBQXNCLE9BQXRCO0FBQ0Q7O0FBRUQsU0FBUyxZQUFULENBQXNCLE9BQXRCLEVBQStCLElBQS9CLEVBQXFDLEtBQXJDLEVBQTRDO0FBQzFDLE1BQUksU0FBUyxXQUFiLEVBQTBCO0FBQ3hCLFdBQU8sT0FBUDtBQUNEOztBQUVELE1BQUksU0FBUyxTQUFiLEVBQXdCO0FBQ3RCLFdBQU8sS0FBUDtBQUNEOztBQUVELE1BQUksUUFBTyxLQUFQLHlDQUFPLEtBQVAsT0FBaUIsUUFBckIsRUFBK0I7QUFDN0IsUUFBTSxPQUFPLE9BQU8sSUFBUCxDQUFZLEtBQVosQ0FBYjs7QUFFQSxTQUFLLE9BQUwsQ0FBYSxVQUFVLEdBQVYsRUFBZTtBQUMxQixjQUFRLFVBQVIsQ0FBbUIsSUFBbkIsRUFBeUIsR0FBekIsSUFBZ0MsTUFBTSxHQUFOLENBQWhDO0FBQ0QsS0FGWSxDQUVYLElBRlcsQ0FFTixJQUZNLENBQWI7QUFHRCxHQU5ELE1BTU8sSUFBSSxPQUFPLEtBQVAsS0FBaUIsU0FBckIsRUFBZ0M7QUFDckMsUUFBSSxLQUFKLEVBQVc7QUFDVCxjQUFRLElBQVIsQ0FEUyxDQUNLOztBQUVkLGNBQVEsWUFBUixDQUFxQixJQUFyQixFQUEyQixLQUEzQjtBQUNEO0FBQ0YsR0FOTSxNQU1BO0FBQ0wsWUFBUSxZQUFSLENBQXFCLElBQXJCLEVBQTJCLEtBQTNCO0FBQ0Q7QUFDRjs7QUFFRCxTQUFTLG1CQUFULENBQTZCLElBQTdCLEVBQW1DLGtCQUFuQyxFQUF1RDtBQUNyRCxTQUFRLHNCQUFzQixtQkFBbUIsUUFBbkIsQ0FBNEIsSUFBNUIsQ0FBOUI7QUFDRDs7QUFFRCxTQUFTLGFBQVQsQ0FBdUIsSUFBdkIsRUFBNkI7QUFDM0IsU0FBTyxLQUFLLEtBQUwsQ0FBVyxLQUFYLENBQVA7QUFDRDs7QUFFRCxTQUFTLGVBQVQsQ0FBeUIsSUFBekIsRUFBK0I7QUFDN0IsU0FBTyxlQUFlLFFBQWYsQ0FBd0IsSUFBeEIsQ0FBUDtBQUNEOztBQUVELElBQU0saUJBQWlCLENBQ3JCLFFBRHFCLEVBQ1gsZUFEVyxFQUNNLFdBRE4sRUFDbUIsUUFEbkIsRUFDNkIsaUJBRDdCLEVBQ2dELG1CQURoRCxFQUNxRSxLQURyRSxFQUM0RSxPQUQ1RSxFQUNxRixjQURyRixFQUNxRyxXQURyRyxFQUNrSCxVQURsSCxFQUVyQixTQUZxQixFQUVWLGFBRlUsRUFFSyxhQUZMLEVBRW9CLFdBRnBCLEVBRWlDLFNBRmpDLEVBRTRDLFNBRjVDLEVBRXVELE1BRnZELEVBRStELFNBRi9ELEVBRTBFLFdBRjFFLEVBRXVGLFNBRnZGLEVBRWtHLE1BRmxHLEVBRTBHLFNBRjFHLEVBRXFILGlCQUZySCxFQUV3SSxhQUZ4SSxFQUV1SixVQUZ2SixFQUVtSyxRQUZuSyxFQUU2SyxhQUY3SyxFQUdyQixNQUhxQixFQUdiLFVBSGEsRUFHRCxTQUhDLEVBR1UsT0FIVixFQUdtQixLQUhuQixFQUcwQixVQUgxQixFQUdzQyxVQUh0QyxFQUdrRCxXQUhsRCxFQUlyQixTQUpxQixFQUtyQixNQUxxQixFQUtiLFlBTGEsRUFLQyxhQUxELEVBS2dCLFlBTGhCLEVBSzhCLGdCQUw5QixFQUtnRCxZQUxoRCxFQUs4RCxhQUw5RCxFQU1yQixTQU5xQixFQU1WLFFBTlUsRUFNQSxRQU5BLEVBTVUsTUFOVixFQU1rQixNQU5sQixFQU0wQixVQU4xQixFQU1zQyxTQU50QyxFQU1pRCxXQU5qRCxFQU9yQixNQVBxQixFQU9iLElBUGEsRUFPUCxXQVBPLEVBT00sV0FQTixFQU9tQixJQVBuQixFQVFyQixXQVJxQixFQVFSLFNBUlEsRUFRRyxNQVJILEVBU3JCLE9BVHFCLEVBU1osTUFUWSxFQVNKLE1BVEksRUFTSSxNQVRKLEVBU1ksS0FUWixFQVVyQixVQVZxQixFQVVULGNBVlMsRUFVTyxhQVZQLEVBVXNCLEtBVnRCLEVBVTZCLFdBVjdCLEVBVTBDLE9BVjFDLEVBVW1ELFlBVm5ELEVBVWlFLFFBVmpFLEVBVTJFLEtBVjNFLEVBVWtGLFdBVmxGLEVBVStGLFVBVi9GLEVBVTJHLE9BVjNHLEVBV3JCLE1BWHFCLEVBV2IsWUFYYSxFQVdDLE9BWEQsRUFZckIsTUFacUIsRUFZYixTQVphLEVBYXJCLFNBYnFCLEVBYVYsYUFiVSxFQWFLLFFBYkwsRUFhZSxTQWJmLEVBYTBCLFNBYjFCLEVBY3JCLFlBZHFCLEVBY1AsVUFkTyxFQWNLLEtBZEwsRUFjWSxVQWRaLEVBY3dCLFVBZHhCLEVBY29DLE1BZHBDLEVBYzRDLFNBZDVDLEVBY3VELE1BZHZELEVBZXJCLFNBZnFCLEVBZVYsT0FmVSxFQWVELFFBZkMsRUFlUyxXQWZULEVBZXNCLFVBZnRCLEVBZWtDLFVBZmxDLEVBZThDLE9BZjlDLEVBZXVELE1BZnZELEVBZStELE9BZi9ELEVBZXdFLE1BZnhFLEVBZWdGLFlBZmhGLEVBZThGLEtBZjlGLEVBZXFHLFFBZnJHLEVBZStHLFNBZi9HLEVBZTBILFFBZjFILEVBZW9JLE9BZnBJLEVBZTZJLE1BZjdJLEVBZXFKLE9BZnJKLEVBZThKLFNBZjlKLEVBZ0JyQixVQWhCcUIsRUFnQlQsUUFoQlMsRUFnQkMsT0FoQkQsRUFnQlUsTUFoQlYsRUFpQnJCLFFBakJxQixFQWtCckIsT0FsQnFCLEVBbUJyQixPQW5CcUIsRUFvQnJCLE9BcEJxQixFQXFCckIsTUFyQnFCLENBQXZCOzs7QUM1RkE7O0FBRUEsU0FBUyxTQUFULENBQW1CLE9BQW5CLEVBQTRCO0FBQzFCLE1BQUksUUFBUSxtQkFBUixLQUFnQyxTQUFwQyxFQUErQztBQUM3QyxZQUFRLG1CQUFSLEdBQThCLDBCQUE5QjtBQUNEOztBQUVELE9BQUssRUFBTCxDQUFRLFNBQVIsRUFBbUIsT0FBbkI7QUFDRDs7QUFFRCxTQUFTLFdBQVQsQ0FBcUIsT0FBckIsRUFBOEI7QUFDNUIsTUFBSSxRQUFRLG1CQUFSLEtBQWdDLFNBQXBDLEVBQStDO0FBQzdDLFlBQVEsbUJBQVIsR0FBOEIsMEJBQTlCO0FBQ0Q7O0FBRUQsT0FBSyxFQUFMLENBQVEsV0FBUixFQUFxQixPQUFyQjtBQUNEOztBQUVELFNBQVMsV0FBVCxDQUFxQixPQUFyQixFQUE4QjtBQUM1QixNQUFJLFFBQVEsbUJBQVIsS0FBZ0MsU0FBcEMsRUFBK0M7QUFDN0MsWUFBUSxtQkFBUixHQUE4QiwwQkFBOUI7QUFDRDs7QUFFRCxPQUFLLEVBQUwsQ0FBUSxXQUFSLEVBQXFCLE9BQXJCO0FBQ0Q7O0FBRUQsU0FBUyxVQUFULENBQW9CLE9BQXBCLEVBQTZCO0FBQzNCLE1BQUksUUFBUSxtQkFBUixLQUFnQyxTQUFwQyxFQUErQztBQUM3QyxZQUFRLG1CQUFSLEdBQThCLDBCQUE5QjtBQUNEOztBQUVELE9BQUssRUFBTCxDQUFRLFVBQVIsRUFBb0IsT0FBcEI7QUFDRDs7QUFFRCxTQUFTLFdBQVQsQ0FBcUIsT0FBckIsRUFBOEI7QUFDNUIsTUFBSSxRQUFRLG1CQUFSLEtBQWdDLFNBQXBDLEVBQStDO0FBQzdDLFlBQVEsbUJBQVIsR0FBOEIsMEJBQTlCO0FBQ0Q7O0FBRUQsT0FBSyxFQUFMLENBQVEsV0FBUixFQUFxQixPQUFyQjtBQUNEOztBQUVELFNBQVMsVUFBVCxDQUFvQixPQUFwQixFQUE2QjtBQUFFLE9BQUssR0FBTCxDQUFTLFNBQVQsRUFBb0IsT0FBcEI7QUFBK0I7O0FBRTlELFNBQVMsWUFBVCxDQUFzQixPQUF0QixFQUErQjtBQUFFLE9BQUssR0FBTCxDQUFTLFdBQVQsRUFBc0IsT0FBdEI7QUFBaUM7O0FBRWxFLFNBQVMsWUFBVCxDQUFzQixPQUF0QixFQUErQjtBQUFFLE9BQUssR0FBTCxDQUFTLFdBQVQsRUFBc0IsT0FBdEI7QUFBaUM7O0FBRWxFLFNBQVMsV0FBVCxDQUFxQixPQUFyQixFQUE4QjtBQUFFLE9BQUssR0FBTCxDQUFTLFVBQVQsRUFBcUIsT0FBckI7QUFBZ0M7O0FBRWhFLFNBQVMsWUFBVCxDQUFzQixPQUF0QixFQUErQjtBQUFFLE9BQUssR0FBTCxDQUFTLFdBQVQsRUFBc0IsT0FBdEI7QUFBaUM7O0FBRWxFLElBQU0sYUFBYTtBQUNqQixhQUFXLFNBRE07QUFFakIsZUFBYSxXQUZJO0FBR2pCLGVBQWEsV0FISTtBQUlqQixjQUFZLFVBSks7QUFLakIsZUFBYSxXQUxJO0FBTWpCLGNBQVksVUFOSztBQU9qQixnQkFBYyxZQVBHO0FBUWpCLGdCQUFjLFlBUkc7QUFTakIsZUFBYSxXQVRJO0FBVWpCLGdCQUFjO0FBVkcsQ0FBbkI7O0FBYUEsT0FBTyxPQUFQLEdBQWlCLFVBQWpCOztBQUVBLFNBQVMsMEJBQVQsQ0FBb0MsT0FBcEMsRUFBNkMsS0FBN0MsRUFBb0Q7QUFDbEQsTUFBTSxXQUFXLE1BQU0sS0FBdkI7QUFBQSxNQUErQjtBQUN6QixjQUFZLE1BQU0sS0FEeEI7QUFBQSxNQUMrQjtBQUN6QixnQkFBYyxNQUFNLE1BRjFCO0FBQUEsTUFFa0M7QUFDNUIsbUJBQWlCLFFBQVEsUUFBUixFQUFrQixTQUFsQixFQUE2QixXQUE3QixDQUh2Qjs7QUFLQSxTQUFPLGNBQVA7QUFDRDs7O0FDMUVEOztBQUVBLFNBQVMsUUFBVCxDQUFrQixPQUFsQixFQUEyQjtBQUN6QixNQUFNLFlBQVksUUFBbEI7QUFBQSxNQUNNLG1CQUFtQixLQUFLLFVBQUwsQ0FBZ0IsU0FBaEIsRUFBMkIsT0FBM0IsQ0FEekI7O0FBR0EsTUFBSSxnQkFBSixFQUFzQjtBQUNwQix1QkFBbUIsSUFBbkI7QUFDRDtBQUNGOztBQUVELFNBQVMsU0FBVCxDQUFtQixPQUFuQixFQUE0QjtBQUMxQixNQUFNLFlBQVksUUFBbEI7QUFBQSxNQUNNLHNCQUFzQixLQUFLLGFBQUwsQ0FBbUIsU0FBbkIsRUFBOEIsT0FBOUIsQ0FENUI7O0FBR0EsTUFBSSxtQkFBSixFQUF5QjtBQUN2Qix1QkFBbUIsSUFBbkI7QUFDRDtBQUNGOztBQUVELElBQU0sY0FBYztBQUNsQixZQUFVLFFBRFE7QUFFbEIsYUFBVztBQUZPLENBQXBCOztBQUtBLE9BQU8sT0FBUCxHQUFpQixXQUFqQjs7QUFFQSxTQUFTLGtCQUFULENBQTRCLE9BQTVCLEVBQXFDO0FBQ25DLE1BQU0sZUFBZSxTQUFTLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBckI7QUFBQSxNQUNNLGFBQWEsUUFBUSxVQUQzQjtBQUFBLE1BRU0sK1NBRk47O0FBWUEsZUFBYSxZQUFiLENBQTBCLE9BQTFCLEVBQW1DLEtBQW5DO0FBQ0EsZUFBYSxJQUFiLEdBQW9CLGFBQXBCO0FBQ0EsZUFBYSxJQUFiLEdBQW9CLFdBQXBCOztBQUVBLFVBQVEsZ0JBQVIsR0FBMkIsWUFBM0I7O0FBRUEsZUFBYSxNQUFiLEdBQXNCLFlBQVc7QUFDL0IsNEJBQXdCLE9BQXhCO0FBQ0QsR0FGRDs7QUFJQSxhQUFXLFdBQVgsQ0FBdUIsWUFBdkI7QUFDRDs7QUFFRCxTQUFTLGtCQUFULENBQTRCLE9BQTVCLEVBQXFDO0FBQ25DLE1BQU0sYUFBYSxRQUFRLFVBQTNCO0FBQUEsTUFDTSxlQUFlLFFBQVEsZ0JBRDdCO0FBQUEsTUFFTSxlQUFlLGFBQWEsZUFBYixDQUE2QixXQUZsRCxDQURtQyxDQUc2Qjs7QUFFaEUsZUFBYSxtQkFBYixDQUFpQyxRQUFqQyxFQUEyQyxjQUEzQzs7QUFFQSxhQUFXLFdBQVgsQ0FBdUIsWUFBdkI7QUFDRDs7QUFFRCxTQUFTLHVCQUFULENBQWlDLE9BQWpDLEVBQTBDO0FBQ3hDLE1BQU0sZUFBZSxRQUFRLGdCQUE3QjtBQUFBLE1BQ00scUJBQXFCLGFBQWEsZUFBYixDQUE2QixXQUR4RCxDQUR3QyxDQUU4Qjs7QUFFdEUscUJBQW1CLGdCQUFuQixDQUFvQyxRQUFwQyxFQUE4QyxZQUFXO0FBQ3ZELGtCQUFjLE9BQWQ7QUFDRCxHQUZEO0FBR0Q7O0FBRUQsU0FBUyxhQUFULENBQXVCLE9BQXZCLEVBQWdDO0FBQzlCLE1BQU0sUUFBUSxRQUFRLFFBQVIsRUFBZDtBQUFBLE1BQ00sU0FBUyxRQUFRLFNBQVIsRUFEZjtBQUFBLE1BRU0sV0FBVyxRQUFRLFdBQVIsQ0FBb0IsUUFBcEIsQ0FGakI7O0FBSUEsV0FBUyxPQUFULENBQWlCLFVBQVMsT0FBVCxFQUFpQjtBQUNoQyxZQUFRLEtBQVIsRUFBZSxNQUFmO0FBQ0QsR0FGRDtBQUdEOzs7QUNoRkQ7Ozs7OztBQUVBLElBQU0sYUFBYSxRQUFRLGVBQVIsQ0FBbkI7QUFBQSxJQUNNLGFBQWEsUUFBUSxlQUFSLENBRG5CO0FBQUEsSUFFTSxhQUFhLFFBQVEsZUFBUixDQUZuQjs7SUFJTSxNO0FBQ0osb0JBQWM7QUFBQTs7QUFDWixTQUFLLFVBQUwsR0FBa0IsTUFBbEI7O0FBRUEsU0FBSyxXQUFMLEdBQW1CLEVBQW5CO0FBQ0Q7Ozs7K0JBRVU7QUFBRSxhQUFPLEtBQUssVUFBTCxDQUFnQixVQUF2QjtBQUFvQyxLLENBQUM7Ozs7Z0NBRXRDO0FBQUUsYUFBTyxLQUFLLFVBQUwsQ0FBZ0IsV0FBdkI7QUFBcUMsSyxDQUFDOzs7OzZCQUUzQyxPLEVBQVM7QUFDaEIsVUFBTSxPQUFPLFFBQWI7QUFBQSxVQUNNLG1CQUFtQixLQUFLLFVBQUwsQ0FBZ0IsSUFBaEIsRUFBc0IsT0FBdEIsQ0FEekI7O0FBR0EsVUFBSSxnQkFBSixFQUFzQjtBQUNwQixhQUFLLFVBQUwsQ0FBZ0IsZ0JBQWhCLENBQWlDLElBQWpDLEVBQXVDLGNBQWMsSUFBZCxDQUFtQixJQUFuQixDQUF2QztBQUNEO0FBQ0Y7Ozs4QkFFUyxPLEVBQVM7QUFDakIsVUFBTSxPQUFPLFFBQWI7QUFBQSxVQUNNLHNCQUFzQixLQUFLLGFBQUwsQ0FBbUIsSUFBbkIsRUFBeUIsT0FBekIsQ0FENUI7O0FBR0EsVUFBSSxtQkFBSixFQUF5QjtBQUN2QixhQUFLLFVBQUwsQ0FBZ0IsbUJBQWhCLENBQW9DLElBQXBDLEVBQTBDLGNBQWMsSUFBZCxDQUFtQixJQUFuQixDQUExQztBQUNEO0FBQ0Y7Ozs7OztBQUdILE9BQU8sTUFBUCxDQUFjLE9BQU8sU0FBckIsRUFBZ0MsVUFBaEM7QUFDQSxPQUFPLE1BQVAsQ0FBYyxPQUFPLFNBQXJCLEVBQWdDLFVBQWhDO0FBQ0EsT0FBTyxNQUFQLENBQWMsT0FBTyxTQUFyQixFQUFnQyxVQUFoQzs7QUFFQSxPQUFPLE9BQVAsR0FBaUIsSUFBSSxNQUFKLEVBQWpCLEMsQ0FBZ0M7O0FBRWhDLFNBQVMsYUFBVCxDQUF1QixLQUF2QixFQUE4QjtBQUM1QixNQUFNLE9BQU8sTUFBTSxJQUFuQjtBQUFBLE1BQ00sV0FBVyxLQUFLLFdBQUwsQ0FBaUIsSUFBakIsQ0FEakI7QUFBQSxNQUVNLFFBQVEsS0FBSyxRQUFMLEVBRmQ7QUFBQSxNQUdNLFNBQVMsS0FBSyxTQUFMLEVBSGY7O0FBS0EsV0FBUyxPQUFULENBQWlCLFVBQVMsT0FBVCxFQUFrQjtBQUNqQyxZQUFRLEtBQVIsRUFBZSxNQUFmO0FBQ0QsR0FGRDtBQUdEOzs7QUNuREQ7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7O0FBRUEsT0FBTyxjQUFQLENBQXNCLE1BQXRCLEVBQThCLFVBQTlCLEVBQTBDO0FBQ3hDLE9BQUssZUFBWTtBQUNmLFFBQU0sV0FBVyxPQUFPLFFBQVAsQ0FBZ0IsSUFBaEIsQ0FBcUIsTUFBckIsQ0FBNEIsQ0FBNUIsQ0FBakI7QUFBQSxRQUFrRDtBQUM1Qyx3QkFBb0IsT0FBTyxjQUFQLENBQXNCLFFBQXRCLENBRDFCOztBQUdBLHNCQUFrQixRQUFsQixHQUE2QixVQUFTLGFBQVQsRUFBd0I7QUFDbkQsYUFBTyxnQkFBUCxDQUF3QixZQUF4QixFQUFzQyxhQUF0QztBQUNELEtBRkQ7O0FBSUEsc0JBQWtCLFNBQWxCLEdBQThCLFVBQVMsYUFBVCxFQUF3QjtBQUNwRCxhQUFPLG1CQUFQLENBQTJCLFlBQTNCLEVBQXlDLGFBQXpDO0FBQ0QsS0FGRDs7QUFJQSxXQUFPLFFBQVA7QUFDRCxHQWR1Qzs7QUFnQnhDLE9BQUssYUFBVSxRQUFWLEVBQW9CO0FBQ3ZCLFdBQU8sUUFBUCxDQUFnQixJQUFoQixHQUF1QixRQUF2QixDQUR1QixDQUNXO0FBQ25DO0FBbEJ1QyxDQUExQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbGliL2RvY3MuanMnKTtcbiIsIid1c2Ugc3RyaWN0JztcblxucmVxdWlyZSgnZnJhZ21lbnRlZCcpO1xuXG5yZXF1aXJlKCcuL2Vhc3l1aS1qc3gnKTtcblxuY29uc3QgZWFzeXVpID0gcmVxdWlyZSgnZWFzeXVpJyksXG4gICAgICB7IEVsZW1lbnQgfSA9IGVhc3l1aTtcblxuY29uc3QgQ29udGVudHMgPSByZXF1aXJlKCcuL2RvY3Mvc2VjdGlvbnMvY29udGVudHMnKSxcbiAgICAgIEludHJvZHVjdGlvbiA9IHJlcXVpcmUoJy4vZG9jcy9zZWN0aW9ucy9pbnRyb2R1Y3Rpb24nKSxcbiAgICAgIEpTWElzR3JlYXQgPSByZXF1aXJlKCcuL2RvY3Mvc2VjdGlvbnMvanN4SXNHcmVhdCcpLFxuICAgICAgR2V0dGluZ1N0YXJ0ZWQgPSByZXF1aXJlKCcuL2RvY3Mvc2VjdGlvbnMvZ2V0dGluZ1N0YXJ0ZWQnKSxcbiAgICAgIEFwcGVuZGluZ0VsZW1lbnRzVG9UaGVET00gPSByZXF1aXJlKCcuL2RvY3Mvc2VjdGlvbnMvYXBwZW5kaW5nRWxlbWVudHNUb1RoZURPTScpLFxuICAgICAgRnVuY3Rpb25hbEVsZW1lbnRzID0gcmVxdWlyZSgnLi9kb2NzL3NlY3Rpb25zL2Z1bmN0aW9uYWxFbGVtZW50cycpLFxuICAgICAgRWFzeVVJRWxlbWVudHMgPSByZXF1aXJlKCcuL2RvY3Mvc2VjdGlvbnMvZWFzeVVJRWxlbWVudHMnKSxcbiAgICAgIFRoZVJlbmRlck1ldGhvZCA9IHJlcXVpcmUoJy4vZG9jcy9zZWN0aW9ucy90aGVSZW5kZXJNZXRob2QnKSxcbiAgICAgIEV4dGVuZGluZ0FuRWFzeVVJQ2xhc3MgPSByZXF1aXJlKCcuL2RvY3Mvc2VjdGlvbnMvZXh0ZW5kaW5nQW5FYXN5VUlDbGFzcycpLFxuICAgICAgVGhlRXhhbXBsZU9mVGhpc0RvY3VtZW50YXRpb24gPSByZXF1aXJlKCcuL2RvY3Mvc2VjdGlvbnMvdGhlRXhhbXBsZU9mVGhpc0RvY3VtZW50YXRpb24nKSxcbiAgICAgIFRoZUVsZW1lbnRDbGFzcyA9IHJlcXVpcmUoJy4vZG9jcy9zZWN0aW9ucy90aGVFbGVtZW50Q2xhc3MnKSxcbiAgICAgIEFTaW1wbGVGb3JtID0gcmVxdWlyZSgnLi9kb2NzL3NlY3Rpb25zL2FTaW1wbGVGb3JtJyksXG4gICAgICBNb3JlRWFzeVVJRWxlbWVudHMgPSByZXF1aXJlKCcuL2RvY3Mvc2VjdGlvbnMvbW9yZUVhc3lVSUVsZW1lbnRzJyksXG4gICAgICBFYXN5VUlMYXlvdXQgPSByZXF1aXJlKCcuL2RvY3Mvc2VjdGlvbnMvZWFzeVVJTGF5b3V0JyksXG4gICAgICBFYXN5VUlEcmFnQW5kRHJvcCA9IHJlcXVpcmUoJy4vZG9jcy9zZWN0aW9ucy9lYXN5VUlEcmFnQW5kRHJvcCcpLFxuICAgICAgRWFzeVVJUmljaFRleHRhcmVhID0gcmVxdWlyZSgnLi9kb2NzL3NlY3Rpb25zL2Vhc3lVSVJpY2hUZXh0YXJlYScpO1xuXG5jb25zdCBpbnRyb2R1Y3Rpb24gPSA8SW50cm9kdWN0aW9uIC8+LFxuICAgICAgZnJhZ21lbnRUb1NlY3Rpb25NYXAgPSB7XG4gICAgICAgIGludHJvZHVjdGlvbjogaW50cm9kdWN0aW9uLFxuICAgICAgICBjb250ZW50czogPENvbnRlbnRzIC8+LFxuICAgICAgICBqc3hJc0dyZWF0OiA8SlNYSXNHcmVhdCAvPixcbiAgICAgICAgZ2V0dGluZ1N0YXJ0ZWQ6IDxHZXR0aW5nU3RhcnRlZCAvPixcbiAgICAgICAgYXBwZW5kaW5nRWxlbWVudHNUb1RoZURPTTogPEFwcGVuZGluZ0VsZW1lbnRzVG9UaGVET00gLz4sXG4gICAgICAgIGZ1bmN0aW9uYWxFbGVtZW50czogPEZ1bmN0aW9uYWxFbGVtZW50cyAvPixcbiAgICAgICAgZWFzeVVJRWxlbWVudHM6IDxFYXN5VUlFbGVtZW50cyAvPixcbiAgICAgICAgdGhlUmVuZGVyTWV0aG9kOiA8VGhlUmVuZGVyTWV0aG9kIC8+LFxuICAgICAgICBleHRlbmRpbmdBbkVhc3lVSUNsYXNzOiA8RXh0ZW5kaW5nQW5FYXN5VUlDbGFzcyAvPixcbiAgICAgICAgdGhlRXhhbXBsZU9mVGhpc0RvY3VtZW50YXRpb246IDxUaGVFeGFtcGxlT2ZUaGlzRG9jdW1lbnRhdGlvbiAvPixcbiAgICAgICAgdGhlRWxlbWVudENsYXNzOiA8VGhlRWxlbWVudENsYXNzIC8+LFxuICAgICAgICBhU2ltcGxlRm9ybTogPEFTaW1wbGVGb3JtIC8+LFxuICAgICAgICBtb3JlRWFzeVVJRWxlbWVudHM6IDxNb3JlRWFzeVVJRWxlbWVudHMgLz4sXG4gICAgICAgIGVhc3lVSUxheW91dDogPEVhc3lVSUxheW91dCAvPixcbiAgICAgICAgZWFzeVVJRHJhZ0FuZERyb3A6IDxFYXN5VUlEcmFnQW5kRHJvcCAvPixcbiAgICAgICAgZWFzeVVJUmljaFRleHRhcmVhOiA8RWFzeVVJUmljaFRleHRhcmVhIC8+XG4gICAgICB9O1xuXG5jb25zdCBpbnNlcnRTZWN0aW9ucyA9ICgpID0+IHtcbiAgY29uc3QgaGVhZGVyRE9NRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpLFxuICAgICAgICBoZWFkZXIgPSBFbGVtZW50LmZyb21ET01FbGVtZW50KGhlYWRlckRPTUVsZW1lbnQpO1xuXG4gIGZvckVhY2hTZWN0aW9uKChzZWN0aW9uKSA9PiB7XG4gICAgc2VjdGlvbi5pbnNlcnRBZnRlcihoZWFkZXIpO1xuICB9KTtcbn07XG5cbmNvbnN0IHJldmVhbFNlY3Rpb24gPSAoKSA9PiB7XG4gIGZvckVhY2hTZWN0aW9uKChzZWN0aW9uKSA9PiB7XG4gICAgc2VjdGlvbi5oaWRlKCk7XG4gIH0pO1xuXG4gIGNvbnN0IHNlY3Rpb24gPSBmcmFnbWVudFRvU2VjdGlvbk1hcFtmcmFnbWVudF0gfHwgaW50cm9kdWN0aW9uO1xuXG4gIHNlY3Rpb24uc2hvdygpO1xufTtcblxuY29uc3QgZm9yRWFjaFNlY3Rpb24gPSAoY2FsbGJhY2spID0+IHtcbiAgY29uc3QgZnJhZ21lbnRzID0gT2JqZWN0LmtleXMoZnJhZ21lbnRUb1NlY3Rpb25NYXApO1xuXG4gIGZyYWdtZW50cy5mb3JFYWNoKChmcmFnbWVudCkgPT4ge1xuICAgIGNvbnN0IHNlY3Rpb24gPSBmcmFnbWVudFRvU2VjdGlvbk1hcFtmcmFnbWVudF07XG5cbiAgICBjYWxsYmFjayhzZWN0aW9uKTtcbiAgfSk7XG59O1xuXG5pbnNlcnRTZWN0aW9ucygpO1xuXG5mcmFnbWVudC5vbkNoYW5nZShyZXZlYWxTZWN0aW9uKTtcblxucmV2ZWFsU2VjdGlvbigpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCcuLi9lYXN5dWktanN4Jyk7XG5cbmNvbnN0IEJsb2NrQ29kZSA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRFbGVtZW50cyB9ID0gcHJvcGVydGllcztcbiAgXG4gIHJldHVybiAoXG5cbiAgICA8Y29kZSBjbGFzc05hbWU9XCJibG9ja1wiPntjaGlsZEVsZW1lbnRzfTwvY29kZT5cbiAgICAgIFxuICApOyAgXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJsb2NrQ29kZTtcbiIsIid1c2Ugc3RyaWN0JztcblxucmVxdWlyZSgnLi4vZWFzeXVpLWpzeCcpO1xuXG5jb25zdCBDb250ZW50cyA9ICgpID0+IHtcbiAgcmV0dXJuIChcblxuICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRlbnRzXCI+XG4gICAgICA8YSBocmVmPVwiI2NvbnRlbnRzXCI+Q29udGVudHM8L2E+XG4gICAgPC9zcGFuPlxuICAgICAgXG4gICk7ICBcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ29udGVudHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbnJlcXVpcmUoJy4uL2Vhc3l1aS1qc3gnKTtcblxuY29uc3QgSW5saW5lQ29kZSA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRFbGVtZW50cyB9ID0gcHJvcGVydGllcztcbiAgXG4gIHJldHVybiAoXG5cbiAgICA8Y29kZSBjbGFzc05hbWU9XCJpbmxpbmVcIj57Y2hpbGRFbGVtZW50c308L2NvZGU+XG4gICAgICBcbiAgKTsgIFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbmxpbmVDb2RlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCcuLi9lYXN5dWktanN4Jyk7XG5cbmNvbnN0IE5leHQgPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7aHJlZiwgY2hpbGRFbGVtZW50c30gPSBwcm9wZXJ0aWVzO1xuICBcbiAgcmV0dXJuIChcblxuICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5leHRcIj5cbiAgICAgIDxhIGhyZWY9e2hyZWZ9Pk5leHQ6IHtjaGlsZEVsZW1lbnRzfTwvYT5cbiAgICA8L3NwYW4+XG4gICAgICBcbiAgKTsgIFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBOZXh0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCcuLi9lYXN5dWktanN4Jyk7XG5cbmNvbnN0IFByZXZpb3VzID0gKHByb3BlcnRpZXMpID0+IHtcbiAgY29uc3Qge2hyZWYsIGNoaWxkRWxlbWVudHN9ID0gcHJvcGVydGllcztcbiAgXG4gIHJldHVybiAoXG5cbiAgICA8c3BhbiBjbGFzc05hbWU9XCJwcmV2aW91c1wiPlxuICAgICAgPGEgaHJlZj17aHJlZn0+UHJldmlvdXM6IHtjaGlsZEVsZW1lbnRzfTwvYT5cbiAgICA8L3NwYW4+XG4gICAgICBcbiAgKTsgIFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcmV2aW91cztcbiIsIid1c2Ugc3RyaWN0JztcblxucmVxdWlyZSgnLi4vLi4vZWFzeXVpLWpzeCcpO1xuXG5jb25zdCBlYXN5dWkgPSByZXF1aXJlKCdlYXN5dWknKSxcbiAgICAgIHsgSW5wdXQsIFRleHRhcmVhLCBTZWxlY3QgfSA9IGVhc3l1aTtcblxuY29uc3QgTmV4dCA9IHJlcXVpcmUoJy4uL25leHQnKSxcbiAgICAgIFByZXZpb3VzID0gcmVxdWlyZSgnLi4vcHJldmlvdXMnKSxcbiAgICAgIENvbnRlbnRzID0gcmVxdWlyZSgnLi4vY29udGVudHMnKSxcbiAgICAgIEJsb2NrQ29kZSA9IHJlcXVpcmUoJy4uL2Jsb2NrQ29kZScpLFxuICAgICAgSW5saW5lQ29kZSA9IHJlcXVpcmUoJy4uL2lubGluZUNvZGUnKTtcbiAgXG5jb25zdCBBU2ltcGxlRm9ybSA9ICgpID0+IHtcbiAgY29uc3QgdGV4dGFyZWEgPSA8VGV4dGFyZWEgcGxhY2Vob2xkZXI9XCJBIHRleHRhcmVhXCIvPixcbiAgICAgICAgaW5wdXQgPSA8SW5wdXQgbmFtZXR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJBIHRleHQgaW5wdXRcIiAvPjtcblxuICByZXR1cm4gKFxuXG4gICAgPHNlY3Rpb24+XG4gICAgICA8bmF2PlxuICAgICAgICA8TmV4dCBocmVmPVwiI21vcmVFYXN5VUlFbGVtZW50c1wiPk1vcmUgRWFzeVVJIGVsZW1lbnRzPC9OZXh0PlxuICAgICAgICA8UHJldmlvdXMgaHJlZj1cIiN0aGVFbGVtZW50Q2xhc3NcIj5UaGUgPGNvZGUgY2xhc3NOYW1lPVwiaW5saW5lXCI+RWxlbWVudDwvY29kZT4gY2xhc3M8L1ByZXZpb3VzPlxuICAgICAgICA8Q29udGVudHMgLz5cbiAgICAgIDwvbmF2PlxuICAgICAgPGgyPkEgc2ltcGxlIGZvcm08L2gyPlxuICAgICAgPEJsb2NrQ29kZT57YGNvbnN0IGVhc3l1aSA9IHJlcXVpcmUoJ2Vhc3l1aScpLFxuICAgICAgeyBJbnB1dCwgVGV4dGFyZWEsIFNlbGVjdCB9ID0gZWFzeXVpO1xuXG5jb25zdCB0ZXh0YXJlYSA9IDxUZXh0YXJlYSAvPixcbiAgICAgIGlucHV0ID0gPElucHV0IHR5cGU9XCJ0ZXh0XCIgLz47XG5cbjxmb3JtPlxuICB7aW5wdXR9XG4gIHt0ZXh0YXJlYX1cbiAgPFNlbGVjdCBvbkNoYW5nZT17KHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBpbnB1dC5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgfX1cbiAgPlxuICAgIDxvcHRpb24gdmFsdWU9XCJBbFwiPkE8L29wdGlvbj5cbiAgICA8b3B0aW9uIHZhbHVlPVwiQmlsbFwiPkI8L29wdGlvbj5cbiAgICA8b3B0aW9uIHZhbHVlPVwiQ2h1Y2tcIj5DPC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cIkRpY2tcIiBzZWxlY3RlZD5EPC9vcHRpb24+XG4gIDwvU2VsZWN0PlxuICA8YnV0dG9uIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBpbnB1dC5nZXRWYWx1ZSgpLFxuICAgICAgICAgICAgICAgICAgcHJldmVudERlZmF1bHQgPSB0cnVlO1xuXG4gICAgICAgICAgICB0ZXh0YXJlYS5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBwcmV2ZW50RGVmYXVsdDtcbiAgICAgICAgICB9fVxuICA+XG4gIFN1Ym1pdFxuICA8L2J1dHRvbj5cbjwvZm9ybT5gfTwvQmxvY2tDb2RlPlxuICAgICAgPHA+XG4gICAgICAgIFlvdSBjYW4gdXNlIEVhc3lVSSdzIGZvcm0gZWxlbWVudCBjbGFzc2VzIG9yIGxvd2VyIGNhc2UgdGFnIG5hbWVzLlxuICAgICAgICBUaGUgc29tZXdoYXQgY29udHJpdmVkIGV4YW1wbGUgaGVyZSB1c2VzIGEgY29tYmluYXRpb24gb2YgYm90aC5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBUaGUgYWR2YW50YWdlIG9mIHVzaW5nIEVhc3lVSSdzIGZvcm0gZWxlbWVudCBjbGFzc2VzIGlzIHRoYXQgdGhleSBzdXBwb3J0IHZhcmlvdXMgbWV0aG9kcyB0aGF0IHdpbGwgYmUgaGVscGZ1bC5cbiAgICAgICAgRXZlbnQgaGFuZGxlcnMgd2lsbCByZWNlaXZlIHBlcnRpbmVudCBhcmd1bWVudHMsIGZvciBleGFtcGxlLCByYXRoZXIgdGhhbiBhIERPTSBldmVudCBvYmplY3QuXG4gICAgICAgIENoZWNrIHRoZSA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2RqYWxiYXQvRWFzeVVJXCI+RWFzeVVJIGRvY3VtZW50YXRpb248L2E+IGFuZCBhY2NvbXBhbnlpbmcgc291cmNlIGNvZGUgZm9yIGRldGFpbHMuXG4gICAgICAgIEhhbmRsZXJzIHRoYXQgYXJlIHRyZWF0ZWQgc3BlY2lhbGx5IHdpbGwgYmUgcGFzc2VkIHRvIHRoZSByZXF1aXNpdGUgY29uc3RydWN0b3JzLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIEhlcmUgdGhlIDxJbmxpbmVDb2RlPlNlbGVjdDwvSW5saW5lQ29kZT4gY2xhc3MgaXMgdXNlZCBhbmQgc28gdGhlIGNoYW5nZSBoYW5kbGVyIGlzIHBhc3NlZCB0aGUgc2VsZWN0ZWQgb3B0aW9uJ3MgdmFsdWUgd2hlbmV2ZXIgaXQgY2hhbmdlcy5cbiAgICAgICAgQnkgY29udHJhc3QgdGhlIDxJbmxpbmVDb2RlPkVsZW1lbnQ8L0lubGluZUNvZGU+IGNsYXNzIGlzIHVzZWQgZm9yIHRoZSBidXR0b24uXG4gICAgICAgIEluIHRoaXMgY2FzZSB0aGUgRE9NIGV2ZW50IG9iamVjdCB3aWxsIGJlIHBhc3NlZCB0byB0aGUgY2xpY2sgaGFuZGxlciBhbmQgdGhpcyBpcyBzaW1wbHkgaWdub3JlZC5cbiAgICAgIDwvcD5cbiAgICAgIDxmb3JtPlxuICAgICAgICB7aW5wdXR9XG4gICAgICAgIHt0ZXh0YXJlYX1cbiAgICAgICAgPFNlbGVjdCBvbkNoYW5nZT17KHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICBpbnB1dC5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBbFwiPkE8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQmlsbFwiPkI8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ2h1Y2tcIj5DPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkRpY2tcIiBzZWxlY3RlZD5EPC9vcHRpb24+XG4gICAgICAgIDwvU2VsZWN0PlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGlucHV0LmdldFZhbHVlKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZlbnREZWZhdWx0ID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0YXJlYS5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJldmVudERlZmF1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgIFN1Ym1pdFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L3NlY3Rpb24+XG5cbiAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQVNpbXBsZUZvcm07XG4iLCIndXNlIHN0cmljdCc7XG5cbnJlcXVpcmUoJy4uLy4uL2Vhc3l1aS1qc3gnKTtcblxuY29uc3QgTmV4dCA9IHJlcXVpcmUoJy4uL25leHQnKSxcbiAgICAgIFByZXZpb3VzID0gcmVxdWlyZSgnLi4vcHJldmlvdXMnKSxcbiAgICAgIENvbnRlbnRzID0gcmVxdWlyZSgnLi4vY29udGVudHMnKSxcbiAgICAgIEJsb2NrQ29kZSA9IHJlcXVpcmUoJy4uL2Jsb2NrQ29kZScpLFxuICAgICAgSW5saW5lQ29kZSA9IHJlcXVpcmUoJy4uL2lubGluZUNvZGUnKTtcbiAgXG5jb25zdCBBcHBlbmRpbmdFbGVtZW50c1RvVGhlRE9NID0gKCkgPT4ge1xuICByZXR1cm4gKFxuXG4gICAgPHNlY3Rpb24+XG4gICAgICA8bmF2PlxuICAgICAgICA8TmV4dCBocmVmPVwiI2Z1bmN0aW9uYWxFbGVtZW50c1wiPkZ1bmN0aW9uYWwgZWxlbWVudHM8L05leHQ+XG4gICAgICAgIDxQcmV2aW91cyBocmVmPVwiI2pzeElzR3JlYXRcIj5KU1ggaXMgZ3JlYXQ8L1ByZXZpb3VzPlxuICAgICAgICA8Q29udGVudHMgLz5cbiAgICAgIDwvbmF2PlxuICAgICAgPGgyPkFwcGVuZGluZyBlbGVtZW50cyB0byB0aGUgRE9NPC9oMj5cbiAgICAgIDxCbG9ja0NvZGU+e2ByZXF1aXJlKCdlYXN5dWktanN4Jyk7XG5cbmNvbnN0IGVhc3l1aSA9IHJlcXVpcmUoJ2Vhc3l1aScpLFxuICAgICAgeyBEaXYgfSA9IGVhc3l1aTtcblxuY29uc3Qgcm9vdERpdkRPTUVsZW1lbnQgPVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50YnlJZCgncm9vdCcpLFxuICAgICAgcm9vdERpdkVsZW1lbnQgPVxuICAgICAgICBEaXYuZnJvbURPTUVsZW1lbnQocm9vdERpdkRPTUVsZW1lbnQpO1xuXG5yb290RGl2RWxlbWVudC5hcHBlbmQoXG5cbiAgPGRpdiBjbGFzc05hbWU9XCJleGFtcGxlXCI+XG4gICAgQW4gZWFzeSBleGFtcGxlLlxuICA8L2Rpdj5cblxuKTtgfTwvQmxvY2tDb2RlPlxuICAgICAgPHA+XG5FYXN5VUkgZWxlbWVudHMgY3JlYXRlZCB1c2luZyBKU1ggbmVlZCB0byBiZSBwdXQgaW4gdGhlIERPTSBzb21laG93LlxuVGhlIGV4YW1wbGUgaGVyZSBpcyBlcXVpdmFsZW50IHRvIHRoZSB1c2Ugb2YgdGhlIDxJbmxpbmVDb2RlPlJlYWN0RE9NLnJlbmRlciguLi4pPC9JbmxpbmVDb2RlPiBtZXRob2QgaW4gUmVhY3Qgb3IgUmVhY3Rpb24uXG5Zb3UgYXQgbGVhc3QgbmVlZCB0byBkbyB0aGlzIG9uY2UsIGJ1dCBvbmx5IG9uY2UuXG4gICAgICA8L3A+XG4gICAgICA8cD5cbklmIHlvdSBhcmUgbm90IGhhcHB5IHVzaW5nIDxJbmxpbmVDb2RlPmJvZHk8L0lubGluZUNvZGU+IERPTSBlbGVtZW50LCB0aGVuIGNyZWF0ZSBhbiBlbGVtZW50IHRoYXQgcmVmZXJlbmNlcyBhIHJvb3QgPElubGluZUNvZGU+ZGl2PC9JbmxpbmVDb2RlPiBlbGVtZW50LCBzYXksIGVpdGhlclxuYnkgcGFzc2luZyB0aGUgcmVxdWlzaXRlIENTUyBzZWxlY3RvciB0byB0aGUgPElubGluZUNvZGU+RGl2PC9JbmxpbmVDb2RlPiBjbGFzcyBjb25zdHJ1Y3Rvciwgb3IsIGlmIHlvdSBoYXZlIHRoZSBET00gZWxlbWVudCB0byBoYW5kLCBieSB1c2luZyB0aGVcbnN0YXRpYyA8SW5saW5lQ29kZT5mcm9tSFRNTCgpPC9JbmxpbmVDb2RlPiBmYWN0b3J5IG1ldGhvZCBvZiB0aGUgPElubGluZUNvZGU+RGl2PC9JbmxpbmVDb2RlPiBjbGFzcywgYXMgaW4gdGhlIGV4YW1wbGUgaGVyZS5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuQWxsIHRoZSBleGFtcGxlcyBoZXJlIGFwcGVuZCB0byB0aGUgPElubGluZUNvZGU+Ym9keTwvSW5saW5lQ29kZT4gRE9NIGVsZW1lbnQgYnV0IGluIHByYWN0aWNlIGl0IGlzIGVudGlyZWx5IHVwIHRvIHlvdS5cbiAgICAgIDwvcD5cbiAgICA8L3NlY3Rpb24+XG4gICAgICBcbiAgKTsgIFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBBcHBlbmRpbmdFbGVtZW50c1RvVGhlRE9NO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCcuLi8uLi9lYXN5dWktanN4Jyk7XG5cbmNvbnN0IElubGluZUNvZGUgPSByZXF1aXJlKCcuLi9pbmxpbmVDb2RlJyk7XG5cbmNvbnN0IENvbnRlbnRzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuXG4gICAgPHNlY3Rpb24+XG4gICAgICA8bmF2PlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZW50c1wiPkNvbnRlbnRzPC9zcGFuPlxuICAgICAgPC9uYXY+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPVwiI2ludHJvZHVjdGlvblwiPkNvbnRlbnRzPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGEgaHJlZj1cIiNqc3hJc0dyZWF0XCI+SlNYIGlzIGdyZWF0PC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGEgaHJlZj1cIiNnZXR0aW5nU3RhcnRlZFwiPkdldHRpbmcgc3RhcnRlZDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIGhyZWY9XCIjYXBwZW5kaW5nRWxlbWVudHNUb1RoZURPTVwiPkFwcGVuZGluZyBlbGVtZW50cyB0byB0aGUgRE9NPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGEgaHJlZj1cIiNmdW5jdGlvbmFsRWxlbWVudHNcIj5GdW5jdGlvbmFsIGVsZW1lbnRzPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGEgaHJlZj1cIiNlYXN5VUlFbGVtZW50c1wiPkVhc3lVSSBlbGVtZW50czwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIGhyZWY9XCIjdGhlUmVuZGVyTWV0aG9kXCI+VGhlIDxJbmxpbmVDb2RlPnJlbmRlcigpPC9JbmxpbmVDb2RlPiBtZXRob2Q8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPVwiI2V4dGVuZGluZ0FuRWFzeVVJQ2xhc3NcIj5FeHRlbmRpbmcgYW4gRWFzeVVJIGNsYXNzPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGEgaHJlZj1cIiN0aGVFeGFtcGxlT2ZUaGlzRG9jdW1lbnRhdGlvblwiPlRoZSBleGFtcGxlIG9mIHRoaXMgZG9jdW1lbnRhdGlvbjwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhIGhyZWY9XCIjdGhlRWxlbWVudENsYXNzXCI+VGhlIDxJbmxpbmVDb2RlPkVsZW1lbnQ8L0lubGluZUNvZGU+IGNsYXNzPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGEgaHJlZj1cIiNhU2ltcGxlRm9ybVwiPkEgc2ltcGxlIGZvcm08L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPVwiI21vcmVFYXN5VUlFbGVtZW50c1wiPk1vcmUgRWFzeVVJIGVsZW1lbnRzPC9hPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNlYXN5VUlMYXlvdXRcIj5FYXN5VUktTGF5b3V0PC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNlYXN5VUlEcmFnQW5kRHJvcFwiPkVhc3lVSS1EcmFnQW5kRHJvcDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJlYXN5VUlSaWNoVGV4dGFyZWFcIj5FYXN5VUktUmljaFRleHRhcmVhPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L3NlY3Rpb24+XG4gICAgICBcbiAgKTsgIFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb250ZW50cztcbiIsIid1c2Ugc3RyaWN0JztcblxucmVxdWlyZSgnLi4vLi4vZWFzeXVpLWpzeCcpO1xuXG5jb25zdCBOZXh0ID0gcmVxdWlyZSgnLi4vbmV4dCcpLFxuICAgICAgUHJldmlvdXMgPSByZXF1aXJlKCcuLi9wcmV2aW91cycpLFxuICAgICAgQ29udGVudHMgPSByZXF1aXJlKCcuLi9jb250ZW50cycpO1xuXG5jb25zdCBFYXN5VUlEcmFnQW5kRHJvcCA9ICgpID0+IHtcbiAgcmV0dXJuIChcblxuICAgIDxzZWN0aW9uPlxuICAgICAgPG5hdj5cbiAgICAgICAgPE5leHQgaHJlZj1cIiNlYXN5VUlSaWNoVGV4dGFyZWFcIj5FYXN5VUkgUmljaFRleHRhcmVhPC9OZXh0PlxuICAgICAgICA8UHJldmlvdXMgaHJlZj1cIiNlYXN5VUlMYXlvdXRcIj5FYXN5VUkgTGF5b3V0PC9QcmV2aW91cz5cbiAgICAgICAgPENvbnRlbnRzIC8+XG4gICAgICA8L25hdj5cbiAgICAgIDxoMj5FYXN5VUkgRHJhZ0FuZERyb3A8L2gyPlxuICAgICAgPHA+XG4gICAgICAgIERyYWcgYW5kIGRyb3AgZWxlbWVudHMgaW5jbHVkaW5nIGFuIGV4cGxvcmVyIGFuZCBhIHJ1YmJpc2ggYmluLlxuICAgICAgPC9wPlxuICAgIDwvc2VjdGlvbj5cbiAgICAgIFxuICApOyAgXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVhc3lVSURyYWdBbmREcm9wO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCcuLi8uLi9lYXN5dWktanN4Jyk7XG5cbmNvbnN0IE5leHQgPSByZXF1aXJlKCcuLi9uZXh0JyksXG4gICAgICBQcmV2aW91cyA9IHJlcXVpcmUoJy4uL3ByZXZpb3VzJyksXG4gICAgICBDb250ZW50cyA9IHJlcXVpcmUoJy4uL2NvbnRlbnRzJyksXG4gICAgICBCbG9ja0NvZGUgPSByZXF1aXJlKCcuLi9ibG9ja0NvZGUnKSxcbiAgICAgIElubGluZUNvZGUgPSByZXF1aXJlKCcuLi9pbmxpbmVDb2RlJyk7XG5cbmNvbnN0IEVhc3lVSUVsZW1lbnRzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuXG4gICAgPHNlY3Rpb24+XG4gICAgICA8bmF2PlxuICAgICAgICA8TmV4dCBocmVmPVwiI3RoZVJlbmRlck1ldGhvZFwiPlRoZSA8SW5saW5lQ29kZT5yZW5kZXIoKTwvSW5saW5lQ29kZT4gbWV0aG9kPC9OZXh0PlxuICAgICAgICA8UHJldmlvdXMgaHJlZj1cIiNmdW5jdGlvbmFsRWxlbWVudHNcIj5GdW5jdGlvbmFsIGVsZW1lbnRzPC9QcmV2aW91cz5cbiAgICAgICAgPENvbnRlbnRzIC8+XG4gICAgICA8L25hdj5cbiAgICAgIDxoMj5FYXN5VUkgZWxlbWVudHM8L2gyPlxuICAgICAgPEJsb2NrQ29kZT57YHJlcXVpcmUoJ2Vhc3l1aS1qc3gnKTtcblxuY29uc3QgZWFzeXVpID0gcmVxdWlyZSgnZWFzeXVpJyksXG4gICAgICB7IEJvZHksIEJ1dHRvbiB9ID0gZWFzeXVpO1xuXG5jb25zdCBib2R5ID0gbmV3IEJvZHkoKSxcbiAgICAgIGJ1dHRvbiA9IDxCdXR0b24+Q2xpY2sgbWUuLi48L0J1dHRvbj47XG5cbmJ1dHRvbi5vbkNsaWNrKGZ1bmN0aW9uKCkge1xuICBhbGVydCgnQ2xpY2tlZCEnKTtcbn0pO1xuXG5ib2R5LmFwcGVuZChidXR0b24pO2B9PC9CbG9ja0NvZGU+XG4gICAgICA8cD5cbiAgICAgICAgQ3JlYXRpbmcgRWFzeVVJIGVsZW1lbnRzIGZyb20gSlNYIGludm9sdmVzIG5vdGhpbmcgbW9yZSB0aGFuIGVtcGxveWluZyB0aGUgcmVsZXZhbnQgY2xhc3MuXG4gICAgICAgIEFuZCBzaW5jZSB0aGUgSlNYIHJlc3VsdHMgaW4gYW4gaW5zdGFuY2Ugb2YgYW4gRWFzeVVJIGNsYXNzLCBpbiB0aGlzIGNhc2UgdGhlIDxJbmxpbmVDb2RlPkJ1dHRvbjwvSW5saW5lQ29kZT4gY2xhc3MsIGl0cyBtZXRob2RzIGNhbiBiZSBjYWxsZWQgYWdhaW5zdCBpdCBkaXJlY3RseS5cbiAgICAgIDwvcD5cbiAgICA8L3NlY3Rpb24+XG4gICAgICBcbiAgKTsgIFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBFYXN5VUlFbGVtZW50cztcbiIsIid1c2Ugc3RyaWN0JztcblxucmVxdWlyZSgnLi4vLi4vZWFzeXVpLWpzeCcpO1xuXG5jb25zdCBOZXh0ID0gcmVxdWlyZSgnLi4vbmV4dCcpLFxuICAgICAgUHJldmlvdXMgPSByZXF1aXJlKCcuLi9wcmV2aW91cycpLFxuICAgICAgQ29udGVudHMgPSByZXF1aXJlKCcuLi9jb250ZW50cycpO1xuXG5jb25zdCBFYXN5VUlMYXlvdXQgPSAoKSA9PiB7XG4gIHJldHVybiAoXG5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxuYXY+XG4gICAgICAgIDxOZXh0IGhyZWY9XCIjZWFzeVVJRHJhZ0FuZERyb3BcIj5FYXN5VUkgRHJhZ0FuZERyb3A8L05leHQ+XG4gICAgICAgIDxQcmV2aW91cyBocmVmPVwiI21vcmVFYXN5VUlFbGVtZW50c1wiPk1vcmUgRWFzeVVJIGVsZW1lbnRzPC9QcmV2aW91cz5cbiAgICAgICAgPENvbnRlbnRzIC8+XG4gICAgICA8L25hdj5cbiAgICAgIDxoMj5FYXN5VUkgTGF5b3V0PC9oMj5cbiAgICAgIDxwPlxuICAgICAgICBMYXlvdXQgZWxlbWVudHMgdGhhdCB3b3JrIHdpdGggQ1NTIGZsZXhib3guXG4gICAgICA8L3A+XG4gICAgPC9zZWN0aW9uPlxuICAgICAgXG4gICk7ICBcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRWFzeVVJTGF5b3V0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCcuLi8uLi9lYXN5dWktanN4Jyk7XG5cbmNvbnN0IFByZXZpb3VzID0gcmVxdWlyZSgnLi4vcHJldmlvdXMnKSxcbiAgICAgIENvbnRlbnRzID0gcmVxdWlyZSgnLi4vY29udGVudHMnKTtcblxuY29uc3QgRWFzeVVJUmljaFRleHRhcmVhID0gKCkgPT4ge1xuICByZXR1cm4gKFxuXG4gICAgPHNlY3Rpb24+XG4gICAgICA8bmF2PlxuICAgICAgICA8UHJldmlvdXMgaHJlZj1cIiNlYXN5VUlEcmFnQW5kRHJvcFwiPkVhc3lVSSBEcmFnQW5kRHJvcDwvUHJldmlvdXM+XG4gICAgICAgIDxDb250ZW50cyAvPlxuICAgICAgPC9uYXY+XG4gICAgICA8aDI+RWFzeVVJIFJpY2hUZXh0YXJlYTwvaDI+XG4gICAgICA8cD5cbiAgICAgICAgQSB0ZXh0YXJlYSBlbGVtZW50IHRoYXQgaGFuZGxlcyBhbmQgaGFuZHMgb2ZmIGV2ZW50cyB3ZWxsLlxuICAgICAgPC9wPlxuICAgIDwvc2VjdGlvbj5cbiAgICAgIFxuICApOyAgXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVhc3lVSVJpY2hUZXh0YXJlYTtcbiIsIid1c2Ugc3RyaWN0JztcblxucmVxdWlyZSgnLi4vLi4vZWFzeXVpLWpzeCcpO1xuXG5jb25zdCBOZXh0ID0gcmVxdWlyZSgnLi4vbmV4dCcpLFxuICAgICAgUHJldmlvdXMgPSByZXF1aXJlKCcuLi9wcmV2aW91cycpLFxuICAgICAgQ29udGVudHMgPSByZXF1aXJlKCcuLi9jb250ZW50cycpLFxuICAgICAgQmxvY2tDb2RlID0gcmVxdWlyZSgnLi4vYmxvY2tDb2RlJyksXG4gICAgICBJbmxpbmVDb2RlID0gcmVxdWlyZSgnLi4vaW5saW5lQ29kZScpO1xuICBcbmNvbnN0IFRoZVJlbmRlck1ldGhvZCA9ICgpID0+IHtcbiAgcmV0dXJuIChcblxuICAgIDxzZWN0aW9uPlxuICAgICAgPG5hdj5cbiAgICAgICAgPE5leHQgaHJlZj1cIiN0aGVFeGFtcGxlT2ZUaGlzRG9jdW1lbnRhdGlvblwiPlRoZSBleGFtcGxlIG9mIHRoaXMgZG9jdW1lbnRhdGlvbjwvTmV4dD5cbiAgICAgICAgPFByZXZpb3VzIGhyZWY9XCIjdGhlUmVuZGVyTWV0aG9kXCI+VGhlIDxJbmxpbmVDb2RlPnJlbmRlcigpPC9JbmxpbmVDb2RlPiBtZXRob2Q8L1ByZXZpb3VzPlxuICAgICAgICA8Q29udGVudHMgLz5cbiAgICAgIDwvbmF2PlxuICAgICAgPGgyPkV4dGVuZGluZyBhbiBFYXN5VUkgY2xhc3M8L2gyPlxuICAgICAgPEJsb2NrQ29kZT57YHJlcXVpcmUoJ2Vhc3l1aS1qc3gnKTtcblxuY29uc3QgZWFzeXVpID0gcmVxdWlyZSgnZWFzeXVpJyksXG4gICAgICB7IEJvZHksIEJ1dHRvbiB9ID0gZWFzeXVpO1xuXG5jbGFzcyBFeGFtcGxlIGV4dGVuZHMgQnV0dG9uIHtcbiAgY2xpY2soKSB7XG4gICAgY29uc3QgeyBtZXNzYWdlIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICBhbGVydChtZXNzYWdlKVxuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICByZXR1cm4gQnV0dG9uLmZyb21Qcm9wZXJ0aWVzKEV4YW1wbGUsIHByb3BlcnRpZXMpO1xuICB9XG59XG5cbkV4YW1wbGUudGFnTmFtZSA9ICdidXR0b24nOyAvLy8gT3B0aW9uYWwuXG5cbmNvbnN0IGV4YW1wbGUgPSAoKSA9PiB7XG4gIGNvbnN0IGJvZHkgPSBuZXcgQm9keSgpLFxuICAgICAgICBleGFtcGxlID1cblxuICAgICAgICAgIDxFeGFtcGxlIG1lc3NhZ2U9XCJDbGlja2VkIVwiPlxuICAgICAgICAgIENsaWNrIG1lLi4uXG4gICAgICAgICAgPC9FeGFtcGxlPlxuXG4gICAgICAgIDtcblxuICBleGFtcGxlLm9uQ2xpY2soZnVuY3Rpb24oKSB7XG4gICAgZXhhbXBsZS5jbGljaygpO1xuICB9KTtcblxuICBib2R5LmFwcGVuZChleGFtcGxlKTtcbn07YH08L0Jsb2NrQ29kZT5cbiAgICAgIDxwPlxuICAgICAgICBUaGlzIGlzIHRoZSBwcmVmZXJyZWQgd2F5IG9mIGNyZWF0aW5nIHlvdXIgb3duIGVsZW1lbnRzIGFuZCBpcyB0aGUgd2F5IHRoYXQgSlNYIHN1cHBvcnQgaGFzIGJlZW4gYWRkZWQgdG8gdGhlIEVhc3lVSSBlbGVtZW50cyB0aGVtc2VsdmVzLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIFlvdSBjYW4gZXh0ZW5kIGFueSBFYXN5VUkgY2xhc3MsIGluY2x1ZGluZyB0aGUgPElubGluZUNvZGU+RWxlbWVudDwvSW5saW5lQ29kZT4gY2xhc3MuXG4gICAgICAgIFVzZSB0aGUgc3RhdGljIDxJbmxpbmVDb2RlPmZyb21Qcm9wZXJ0aWVzKCk8L0lubGluZUNvZGU+IGZhY3RvcnkgbWV0aG9kIGFuZCBmcm9tIHRoZXJlIGludm9rZSB0aGUgPElubGluZUNvZGU+ZnJvbVByb3BlcnRpZXMoKTwvSW5saW5lQ29kZT4gbWV0aG9kIG9mIHRoZSBjbGFzcyB5b3UgYXJlIGV4dGVuZGluZy5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBOb3RlIHRoYXQgbm90IG9ubHkgY2FuIHRoZSA8SW5saW5lQ29kZT5vbkNsaWNrKCk8L0lubGluZUNvZGU+IG1ldGhvZCBjYW4gYmUgY2FsbGVkLCBiZWNhdXNlIHRoZSA8SW5saW5lQ29kZT5FeGFtcGxlPC9JbmxpbmVDb2RlPiBjbGFzcyBpbmhlcml0cyBcbiAgICAgICAgZnJvbSB0aGUgPElubGluZUNvZGU+QnV0dG9uPC9JbmxpbmVDb2RlPiBjbGFzcywgYnV0IGFsc28gdGhhdCB0aGUgPElubGluZUNvZGU+Y2xpY2soKTwvSW5saW5lQ29kZT4gbWV0aG9kIGNhbiBub3cgYmUgY2FsbGVkLCBiZWNhdXNlIHdoYXQgaXMgXG4gICAgICAgIHJldHVybmVkIGlzIGFuIGluc3RhbmNlIG9mIHRoZSA8SW5saW5lQ29kZT5FeGFtcGxlPC9JbmxpbmVDb2RlPiBjbGFzcy4gICAgICBcbiAgICAgIDwvcD5cbiAgICA8L3NlY3Rpb24+XG5cbiAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVGhlUmVuZGVyTWV0aG9kO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCcuLi8uLi9lYXN5dWktanN4Jyk7XG5cbmNvbnN0IE5leHQgPSByZXF1aXJlKCcuLi9uZXh0JyksXG4gICAgICBQcmV2aW91cyA9IHJlcXVpcmUoJy4uL3ByZXZpb3VzJyksXG4gICAgICBDb250ZW50cyA9IHJlcXVpcmUoJy4uL2NvbnRlbnRzJyksXG4gICAgICBCbG9ja0NvZGUgPSByZXF1aXJlKCcuLi9ibG9ja0NvZGUnKSxcbiAgICAgIElubGluZUNvZGUgPSByZXF1aXJlKCcuLi9pbmxpbmVDb2RlJyk7XG5cbmNvbnN0IEZ1bmN0aW9uYWxFbGVtZW50cyA9ICgpID0+IHtcbiAgcmV0dXJuIChcblxuICAgIDxzZWN0aW9uPlxuICAgICAgPG5hdj5cbiAgICAgICAgPE5leHQgaHJlZj1cIiNlYXN5VUlFbGVtZW50c1wiPkVhc3lVSSBlbGVtZW50czwvTmV4dD5cbiAgICAgICAgPFByZXZpb3VzIGhyZWY9XCIjYXBwZW5kaW5nRWxlbWVudHNUb1RoZURPTVwiPkFwcGVuZGluZyBlbGVtZW50cyB0byB0aGUgRE9NPC9QcmV2aW91cz5cbiAgICAgICAgPENvbnRlbnRzIC8+XG4gICAgICA8L25hdj5cbiAgICAgIDxoMj5GdW5jdGlvbmFsIGVsZW1lbnRzPC9oMj5cbiAgICAgIDxCbG9ja0NvZGU+e2ByZXF1aXJlKCdlYXN5dWktanN4Jyk7XG5cbmNvbnN0IGVhc3l1aSA9IHJlcXVpcmUoJ2Vhc3l1aScpLFxuICAgICAgeyBCb2R5IH0gPSBlYXN5dWk7XG5cbmNvbnN0IERpdiA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IHsgY2xhc3NOYW1lIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICB7IGNoaWxkRWxlbWVudHMgfSA9IHByb3BlcnRpZXM7XG5cbiAgcmV0dXJuIChcblxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgIHtjaGlsZEVsZW1lbnRzfVxuICAgIDwvZGl2PlxuXG4gICk7XG59O1xuXG5jb25zdCBib2R5ID0gbmV3IEJvZHkoKTtcblxuYm9keS5hcHBlbmQoXG5cbiAgPERpdiBjbGFzc05hbWU9XCJleGFtcGxlXCI+XG4gIEFuIGVhc3kgZXhhbXBsZS5cbiAgPC9EaXY+XG5cbik7YH08L0Jsb2NrQ29kZT5cbiAgICAgIDxwPlxuICAgICAgICBKU1ggY2FuIGJlIHJldHVybmVkIGZyb20gZnVuY3Rpb25zLlxuICAgICAgICBUaGVzZSBmdW5jdGlvbnMgYXJlIHBhc3NlZCB0aGUgYXR0cmlidXRlcyBvZiB0aGUgSlNYIHRoYXQgcmVmZXJlbmNlcyB0aGVtIGFzIGEgPElubGluZUNvZGU+cHJvcGVydGllczwvSW5saW5lQ29kZT4gYXJndW1lbnQuXG4gICAgICAgIFRoZSA8SW5saW5lQ29kZT5jaGlsZEVsZW1lbnRzPC9JbmxpbmVDb2RlPiBwcm9wZXJ0eSBvZiB0aGF0IGFyZ3VtZW50IGdpdmVzIGFjY2VzcyB0byBjaGlsZCBlbGVtZW50cy5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBJbiBFYXN5VUktSlNYIHBhcmxhbmNlLCBpbiByZWxhdGlvbiB0byBSZWFjdCBvciBSZWFjdGlvbjpcbiAgICAgIDwvcD5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxJbmxpbmVDb2RlPnByb3BzPC9JbmxpbmVDb2RlPiBiZWNvbWVzIDxJbmxpbmVDb2RlPnByb3BlcnRpZXM8L0lubGluZUNvZGU+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8SW5saW5lQ29kZT5jaGlsZHJlbjwvSW5saW5lQ29kZT4gYmVjb21lcyA8SW5saW5lQ29kZT5jaGlsZEVsZW1lbnRzPC9JbmxpbmVDb2RlPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L3NlY3Rpb24+XG4gICAgICBcbiAgKTsgIFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBGdW5jdGlvbmFsRWxlbWVudHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbnJlcXVpcmUoJy4uLy4uL2Vhc3l1aS1qc3gnKTtcblxuY29uc3QgTmV4dCA9IHJlcXVpcmUoJy4uL25leHQnKSxcbiAgICAgIFByZXZpb3VzID0gcmVxdWlyZSgnLi4vcHJldmlvdXMnKSxcbiAgICAgIENvbnRlbnRzID0gcmVxdWlyZSgnLi4vY29udGVudHMnKSxcbiAgICAgIEJsb2NrQ29kZSA9IHJlcXVpcmUoJy4uL2Jsb2NrQ29kZScpLFxuICAgICAgSW5saW5lQ29kZSA9IHJlcXVpcmUoJy4uL2lubGluZUNvZGUnKTtcblxuY29uc3QgR2V0dGluZ1N0YXJ0ZWQgPSAoKSA9PiB7XG4gIHJldHVybiAoXG5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxuYXY+XG4gICAgICAgIDxOZXh0IGhyZWY9XCIjYXBwZW5kaW5nRWxlbWVudHNUb1RoZURPTVwiPkFwcGVuZGluZyBlbGVtZW50cyB0byB0aGUgRE9NPC9OZXh0PlxuICAgICAgICA8UHJldmlvdXMgaHJlZj1cIiNqc3hJc0dyZWF0XCI+SlNYIGlzIGdyZWF0PC9QcmV2aW91cz5cbiAgICAgICAgPENvbnRlbnRzIC8+XG4gICAgICA8L25hdj5cbiAgICAgIDxoMj5HZXR0aW5nIHN0YXJ0ZWQ8L2gyPlxuICAgICAgPEJsb2NrQ29kZT57YHJlcXVpcmUoJ2Vhc3l1aS1qc3gnKTtcblxuY29uc3QgZWFzeXVpID0gcmVxdWlyZSgnZWFzeXVpJyksXG4gICAgICB7IEJvZHkgfSA9IGVhc3l1aTtcblxuY29uc3QgYm9keSA9IG5ldyBCb2R5KCk7XG5cbmJvZHkuYXBwZW5kKFxuXG4gIDxkaXYgY2xhc3NOYW1lPVwiZXhhbXBsZVwiPlxuICAgIEFuIGVhc3kgZXhhbXBsZS5cbiAgPC9kaXY+XG5cbik7YH08L0Jsb2NrQ29kZT5cbiAgICAgIDxwPlxuSW5zdHJ1Y3Rpb25zIGZvciBidWlsZGluZyB0aGlzIGV4YW1wbGUgY2FuIGJlIGZvdW5kIGluIHRoZSByZWFkbWUgZmlsZS5cbk9uY2UgaXQgaXMgcnVubmluZywgdGhpcyBleGFtcGxlIGNhbiBiZSByZXBsYWNlZCB3aXRoIGFueSBvdGhlciBmcm9tIHRoaXMgZG9jdW1lbnRhdGlvbi5cblRoZXJlIGFyZSB0d28gdGhpbmdzIHRoYXQgbmVlZCBiZWFyaW5nIGluIG1pbmQgd2hlbiBkb2luZyBzbzpcbiAgICAgIDwvcD5cbiAgICAgIDxvbD5cbiAgICAgICAgPGxpPlxuVGhlIDxJbmxpbmVDb2RlPid1c2Ugc3RyaWN0JzwvSW5saW5lQ29kZT4gZGlyZWN0aXZlIGlzIG1pc3NpbmcgZnJvbSB0aGUgZXhhbXBsZXMgaGVyZSBhbmQgc2hvdWxkIGJlIGxlZnQgaW4gcGxhY2UuXG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cblRoZSA8SW5saW5lQ29kZT5yZXF1aXJlKCdlYXN5dWktanN4Jyk8L0lubGluZUNvZGU+IGRpcmVjdGl2ZXMgaGVyZSByZXF1aXJlIHRoZSBhY3R1YWwgbnBtIG1vZHVsZS5cbkhvd2V2ZXIsIHRoaXMgaXMgbm90IGF2YWlsYWJsZSBmcm9tIHdpdGhpbiB0aGUgcHJvamVjdCBpdHNlbGYgYW5kIHNvIHlvdSBtdXN0IHJlcGxhY2UgaXQgd2l0aCBhIGxvY2FsIDxJbmxpbmVDb2RlPnJlcXVpcmUoJy4vZWFzeXVpLWpzeCcpPC9JbmxpbmVDb2RlPiBkaXJlY3RpdmUuXG4gICAgICAgIDwvbGk+XG4gICAgICA8L29sPlxuICAgICAgPHA+XG5Zb3UgYXJlIG9mIGNvdXJzZSBmcmVlIHRvIGJ1aWxkIHRoZSBleGFtcGxlcyBlbnRpcmVseSBvdXRzaWRlIG9mIHRoaXMgcHJvamVjdCwgdGhlIGluc3RydWN0aW9ucyBnaXZlbiBoZXJlIGFuZCBpbiB0aGUgcmVhZG1lIGZpbGUgYXJlIGp1c3QgcHJvYmFibHkgdGhlIHF1aWNrZXN0IHdheSB0byBnZXQgc3RhcnRlZCBmb3IgbmVvcGh5dGVzLlxuICAgICAgPC9wPlxuICAgIDwvc2VjdGlvbj5cbiAgICAgIFxuICApOyAgXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEdldHRpbmdTdGFydGVkO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCcuLi8uLi9lYXN5dWktanN4Jyk7XG5cbmNvbnN0IE5leHQgPSByZXF1aXJlKCcuLi9uZXh0JyksXG4gICAgICBDb250ZW50cyA9IHJlcXVpcmUoJy4uL2NvbnRlbnRzJyksXG4gICAgICBCbG9ja0NvZGUgPSByZXF1aXJlKCcuLi9ibG9ja0NvZGUnKSxcbiAgICAgIElubGluZUNvZGUgPSByZXF1aXJlKCcuLi9pbmxpbmVDb2RlJyk7XG5cbmNvbnN0IEludHJvZHVjdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIChcblxuICAgIDxzZWN0aW9uPlxuICAgICAgPG5hdj5cbiAgICAgICAgPE5leHQgaHJlZj1cIiNqc3hJc0dyZWF0XCI+SlNYIGlzIGdyZWF0PC9OZXh0PlxuICAgICAgICA8Q29udGVudHMgLz5cbiAgICAgIDwvbmF2PlxuICAgICAgPGgyPkludHJvZHVjdGlvbjwvaDI+XG4gICAgICA8QmxvY2tDb2RlPntgcmVxdWlyZSgnZWFzeXVpLWpzeCcpO1xuXG5jb25zdCBlYXN5dWkgPSByZXF1aXJlKCdlYXN5dWknKSxcbiAgICAgIHsgQm9keSB9ID0gZWFzeXVpO1xuXG5jb25zdCBib2R5ID0gbmV3IEJvZHkoKTtcblxuYm9keS5hcHBlbmQoXG5cbiAgPGRpdiBjbGFzc05hbWU9XCJleGFtcGxlXCI+XG4gICAgQW4gZWFzeSBleGFtcGxlLlxuICA8L2Rpdj5cblxuKTtgfTwvQmxvY2tDb2RlPlxuICAgICAgPHA+XG4gICAgICAgIFRoZXNlIHBhZ2VzIGdpdmUgc29tZSBleGFtcGxlcyBvZiB0aGUgdXNlIG9mIDxhIGhyZWY9XCJodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9kb2NzL2pzeC1pbi1kZXB0aC5odG1sXCI+SlNYPC9hPiB3aXRoIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZGphbGJhdC9FYXN5VUlcIj5FYXN5VUk8L2E+LlxuICAgICAgICBJdCBpcyBlYXN5IHRvIGNvbWJpbmUgdGhlc2UgdHdvIHRlY2hub2xvZ2llcyBpbiBwcmFjdGljZSwgYXMgdGhlIGZpcnN0IGV4YW1wbGUgc2hvd3MuXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgSXQgYWxzbyB0dXJuZWQgb3V0IG5vdCB0byBiZSB2ZXJ5IGRpZmZpY3VsdCB0byBpbXBsZW1lbnQgdGhpcyBjb21iaW5hdGlvbi4gSlNYIHRyYW5zcGlsZXMgaW50byBhIGNhbGwgdG8gPElubGluZUNvZGU+UmVhY3QuY3JlYXRlQ2xhc3MoLi4uKTwvSW5saW5lQ29kZT4uXG4gICAgICAgIFNvIGFsbCB0aGF0IG5lZWRlZCB0byBiZSBkb25lIHdhcyB0byA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2RqYWxiYXQvRWFzeVVJLUpTWC9ibG9iL21hc3Rlci9lczYvZWFzeXVpLWpzeC5qc1wiPmltcGxlbWVudCB0aGF0PC9hPixcbiAgICAgICAgYW5kIHRoZW4gdG8gPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9kamFsYmF0L0Vhc3lVSS9ibG9iL21hc3Rlci9lczYvbWl4aW4vanN4LmpzXCI+YXVnbWVudDwvYT4gRWFzeVVJJ3MgYmFzZSA8SW5saW5lQ29kZT5FbGVtZW50PC9JbmxpbmVDb2RlPiBjbGFzcyBpbiBvcmRlciB0byBlbmFibGUgZWxlbWVudHMgdG8gYXBwbHkgdGhlIHByb3BlcnRpZXMgdGhleSBhcmUgcGFzc2VkLlxuICAgICAgPC9wPlxuICAgIDwvc2VjdGlvbj5cbiAgICAgIFxuICApOyAgXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEludHJvZHVjdGlvbjtcbiIsIid1c2Ugc3RyaWN0JztcblxucmVxdWlyZSgnLi4vLi4vZWFzeXVpLWpzeCcpO1xuXG5jb25zdCBOZXh0ID0gcmVxdWlyZSgnLi4vbmV4dCcpLFxuICAgICAgUHJldmlvdXMgPSByZXF1aXJlKCcuLi9wcmV2aW91cycpLFxuICAgICAgQ29udGVudHMgPSByZXF1aXJlKCcuLi9jb250ZW50cycpO1xuXG5jb25zdCBKU1hJc0dyZWF0ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuXG4gICAgPHNlY3Rpb24+XG4gICAgICA8bmF2PlxuICAgICAgICA8TmV4dCBocmVmPVwiI2dldHRpbmdTdGFydGVkXCI+R2V0dGluZyBzdGFydGVkPC9OZXh0PlxuICAgICAgICA8UHJldmlvdXMgaHJlZj1cIiNpbnRyb2R1Y3Rpb25cIj5JbnRyb2R1Y3Rpb248L1ByZXZpb3VzPlxuICAgICAgICA8Q29udGVudHMgLz5cbiAgICAgIDwvbmF2PlxuICAgICAgPGgyPkpTWCBpcyBncmVhdDwvaDI+XG4gICAgICA8cD5cbiAgICAgICAgSXQgaXMgYmVjYXVzZSBpdCBhbGxvd3MgeW91IHRvIGRvIHRocmVlIGNydWNpYWwgdGhpbmdzOlxuICAgICAgPC9wPlxuICAgICAgPG9sPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPHN0cm9uZz5Bc3NvY2lhdGUgdGhlIGNvZGUgdGhhdCBkZWZpbmVzIHRoZSB2aWV3IGRpcmVjdGx5IHdpdGggdGhlIGNvZGUgdGhhdCBkZWZpbmVzIHRoZSBtb2RlbDwvc3Ryb25nPi5cbiAgICAgICAgICBUaGlzIGlzIG11Y2ggYmV0dGVyIHRoYW4gaGF2aW5nIGEgdmlldyBjbGFzcyBhbmQgYSBtb2RlbCBjbGFzcyBhbmQgaGF2aW5nIG9uZSBpbmhlcml0IGZyb20gdGhlIG90aGVyLCBzYXkuXG4gICAgICAgICAgSlNYIGFsbG93cyB5b3UgdG8gaW5saW5lIHRoZSB2aWV3IGNvZGUsIHNvIHRvIHNwZWFrLCBhcyB3ZWxsIGFzIGNvbm5lY3QgaXQgdG8gdGhlIHN1cnJvdW5kaW5nIG1vZGVsIGNvZGUgaW4gYSBzdHJhaWdodGZvcndhcmQgbWFubmVyLlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPHN0cm9uZz5CdWlsZCB1cCB0aGUgYXBwbGljYXRpb24ncyB2aWV3IGluIGEgZGVjbGFyYXRpdmUgd2F5PC9zdHJvbmc+LlxuICAgICAgICAgIFRoZSBtb3N0IGxpa2VseSBhbmQgb2Z0ZW4gdGhlIG9ubHkgcmVsYXRpb24gYmV0d2VlbiB2aWV3IGVsZW1lbnRzIGlzIGluY2x1c2lvbi5cbiAgICAgICAgICBUaGlzIHJlc3VsdHMgaW4gYSB0cmVlLCBhbmQgSlNYIGVuY29kZXMgdHJlZXMuXG4gICAgICAgICAgVGhpcyB3b24ndCBhbHdheXMgd29yaywgY29uc2lkZXIgYXJjYWRlIGdhbWVzLlxuICAgICAgICAgIEJ1dCBpdCB3b3JrcyBmb3IgYXBwbGljYXRpb25zIHdpdGggZXZlbnQgZHJpdmVuIHVzZXIgaW50ZXJmYWNlcyBhbmQgdGhpcyBpbmNsdWRlcyBuZWFybHkgYWxsIHdlYiBhcHBsaWNhdGlvbnMuXG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8c3Ryb25nPkNyZWF0ZSB2aWV3IGVsZW1lbnRzIGVhc2lseSB3aXRob3V0IHRoZSBuZWVkIGZvciBjb25zdHJ1Y3RvcnMgb3IgZmFjdG9yeSBtZXRob2RzPC9zdHJvbmc+LlxuICAgICAgICAgIFNvIHRoZXJlIGlzIGxlc3MgY29kZSBhbmQgd2hhdCB0aGVyZSBpcyBsaWtlbHkgdG8gYmUgbW9yZSByZWFkYWJsZSBhbmQgbWFpbnRhaW5hYmxlLlxuICAgICAgICAgIEpTWCBhbHNvIGVuY291cmFnZXMgY29tcG9zaXRpb24gYW5kIHJldXNlLlxuICAgICAgICA8L2xpPlxuICAgICAgPC9vbD5cbiAgICAgIDxwPlxuICAgICAgICBBbHNvIEpTWCBqdXN0IGVtYmVkcyB3ZWxsIGludG8gSmF2YVNjcmlwdC5cbiAgICAgICAgQ29tcGFyZSB0aGlzIHdpdGggb2xkZXIgdGVjaG5vbG9naWVzIHN1Y2ggYXMgSlNQLCB3aGljaCB0cnkgdG8gZW1iZWQgaW1wZXJhdGl2ZSBsYW5ndWFnZXMgaW4gZGVjbGFyYXRpdmUgb25lcy5cbiAgICAgICAgRm9yIHNldmVyYWwgcmVhc29ucyB0aGlzIGNhbiBiZSBuaWdodG1hcmlzaC5cbiAgICAgICAgQnV0IHRoZSBvdGhlciB3YXkgcm91bmQgaGFwcGVucyB0byB3b3JrIHJlYWxseSB3ZWxsLlxuICAgICAgPC9wPlxuICAgIDwvc2VjdGlvbj5cbiAgICAgIFxuICApOyAgXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEpTWElzR3JlYXQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbnJlcXVpcmUoJy4uLy4uL2Vhc3l1aS1qc3gnKTtcblxuY29uc3QgTmV4dCA9IHJlcXVpcmUoJy4uL25leHQnKSxcbiAgICAgIFByZXZpb3VzID0gcmVxdWlyZSgnLi4vcHJldmlvdXMnKSxcbiAgICAgIENvbnRlbnRzID0gcmVxdWlyZSgnLi4vY29udGVudHMnKTtcblxuY29uc3QgTW9yZUVhc3lVSUVsZW1lbnRzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuXG4gICAgPHNlY3Rpb24+XG4gICAgICA8bmF2PlxuICAgICAgICA8TmV4dCBocmVmPVwiI2Vhc3lVSUxheW91dFwiPkVhc3lVSSBMYXlvdXQ8L05leHQ+XG4gICAgICAgIDxQcmV2aW91cyBocmVmPVwiI2FTaW1wbGVGb3JtXCI+QSBzaW1wbGUgZm9ybTwvUHJldmlvdXM+XG4gICAgICAgIDxDb250ZW50cyAvPlxuICAgICAgPC9uYXY+XG4gICAgICA8aDI+TW9yZSBFYXN5VUkgZWxlbWVudHM8L2gyPlxuICAgICAgPHA+XG4gICAgICAgIFRoZXNlIGFyZSBkaXZpZGVkIGJldHdlZW4gdGhyZWUgcHJvamVjdHM6XG4gICAgICA8L3A+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPVwiI2Vhc3lVSUxheW91dFwiPkVhc3lVSS1MYXlvdXQ8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YSBocmVmPVwiI2Vhc3lVSURyYWdBbmREcm9wXCI+RWFzeVVJLURyYWdBbmREcm9wPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGEgaHJlZj1cImVhc3lVSVJpY2hUZXh0YXJlYVwiPkVhc3lVSS1SaWNoVGV4dGFyZWE8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgPHA+XG4gICAgICAgIFRoZXNlIGFyZSBzcGVjaWFsaXN0IHByb2plY3RzIHRvIHNvbWUgZXh0ZW50IGFuZCBhcmUgbm90IGZvciBldmVyeW9uZS5cbiAgICAgICAgSG9wZWZ1bGx5IHRoZWlyIG51bWJlciBhbmQgdXRpbGl0eSB3aWxsIGdyb3cgb3ZlciB0aW1lLlxuICAgICAgPC9wPlxuICAgIDwvc2VjdGlvbj5cbiAgICAgIFxuICApOyAgXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1vcmVFYXN5VUlFbGVtZW50cztcbiIsIid1c2Ugc3RyaWN0JztcblxucmVxdWlyZSgnLi4vLi4vZWFzeXVpLWpzeCcpO1xuXG5jb25zdCBOZXh0ID0gcmVxdWlyZSgnLi4vbmV4dCcpLFxuICAgICAgUHJldmlvdXMgPSByZXF1aXJlKCcuLi9wcmV2aW91cycpLFxuICAgICAgQ29udGVudHMgPSByZXF1aXJlKCcuLi9jb250ZW50cycpLFxuICAgICAgSW5saW5lQ29kZSA9IHJlcXVpcmUoJy4uL2lubGluZUNvZGUnKTtcblxuY29uc3QgVGhlRWxlbWVudENsYXNzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuXG4gICAgPHNlY3Rpb24+XG4gICAgICA8bmF2PlxuICAgICAgICA8TmV4dCBocmVmPVwiI2FTaW1wbGVGb3JtXCI+QSBzaW1wbGUgZm9ybTwvTmV4dD5cbiAgICAgICAgPFByZXZpb3VzIGhyZWY9XCIjdGhlRXhhbXBsZU9mVGhpc0RvY3VtZW50YXRpb25cIj5UaGUgZXhhbXBsZSBvZiB0aGlzIGRvY3VtZW50YXRpb248L1ByZXZpb3VzPlxuICAgICAgICA8Q29udGVudHMgLz5cbiAgICAgIDwvbmF2PlxuICAgICAgPGgyPlRoZSA8SW5saW5lQ29kZT5FbGVtZW50PC9JbmxpbmVDb2RlPiBjbGFzczwvaDI+XG4gICAgICA8cD5cbiAgICAgICAgRWFzeVVJIGRvZXMgbm90IGVuc2hyaW5lIHRoZSBjb25jZXB0IG9mIGEgY29tcG9uZW50LCB1bmxpa2UgUmVhY3QgYW5kIFJlYWN0aW9uLlxuICAgICAgICBJbnN0ZWFkIHRoZXJlIGFyZSBvbmx5IGVsZW1lbnRzLlxuICAgICAgICBBbiBlbGVtZW50IGlzIG1lYW50IHRvIGJlIHNlZW4gYXMgc29tZXdoYXQgdmlydHVhbCwgYWJzdHJhY3RpbmcgYXdheSBmcm9tIGEgcmVhbCwgdW5kZXJseWluZyBET00gZWxlbWVudC5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBBcyBtZW50aW9uZWQgcHJldmlvdXNseSwgYWxsIGVsZW1lbnRzIGFyZSBpbnN0YW5jZXMgb2YgdGhlIDxJbmxpbmVDb2RlPkVsZW1lbnQ8L0lubGluZUNvZGU+IGNsYXNzLCBvciBhIGNsYXNzIHRoYXQgZXh0ZW5kcyBpdC5cbiAgICAgICAgVGhpcyBjbGFzcyBoYXMgZXZvbHZlZCBvdmVyIHRpbWUgYW5kIGhhcyBiZWVuIHdyaXR0ZW4gY2FyZS5cbiAgICAgICAgVGhlIHNvdXJjZSBpcyBoZXJlOlxuICAgICAgPC9wPlxuICAgICAgPHVsPlxuICAgICAgICA8bGk+XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9kamFsYmF0L0Vhc3lVSS9ibG9iL21hc3Rlci9lczYvZWxlbWVudC5qc1wiPmVsZW1lbnQuanM8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgPHA+XG4gICAgICAgIE5vdGUgdGhhdCB0aGUgY29uc3RydWN0b3IgZGVmaW5lcyBhIDxJbmxpbmVDb2RlPmRvbUVsZW1lbnQ8L0lubGluZUNvZGU+IHByb3BlcnR5IHdoaWNoIGlzIGEgcmVmZXJlbmNlIHRvIHRoZSB1bmRlcmx5aW5nIERPTSBlbGVtZW50LlxuICAgICAgICBOb3RlIGFsc28gdGhhdCB0aGVyZSBpcyBubyA8SW5saW5lQ29kZT5nZXRET01FbGVtZW50KCk8L0lubGluZUNvZGU+IG1ldGhvZCB0byBleHBvc2UgdGhpcyBwcm9wZXJ0eS5cbiAgICAgICAgVGhpcyBpcyBxdWl0ZSBpbnRlbnRpb25hbC5cbiAgICAgICAgR2VuZXJhbGx5IGF0IGEgaGlnaGVyIGxldmVsIHlvdSBzaG91bGQgbmV2ZXIgbmVlZCBhIHJlZmVyZW5jZSB0byBhbiBlbGVtZW50J3MgdW5kZXJseWluZyBET00gZWxlbWVudC5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBUaGlzIGlzIGltcG9ydGFudDogPGVtPndpdGggRWFzeVVJIHRoZXJlIGlzIG5vIG1vZGVsPC9lbT4uXG4gICAgICAgIFlvdSBtYW5pcHVsYXRlIHRoZSB2aWV3LCBuYW1lbHkgdGhlIERPTSwgZGlyZWN0bHksIGFsYmVpdCB2aWEgdGhpcyB0aGluIGxheWVyIG9mIGFic3RyYWN0aW9uLlxuICAgICAgICBTbyB0aGUgPElubGluZUNvZGU+RWxlbWVudDwvSW5saW5lQ29kZT4gY2xhc3MgaGFzIG1ldGhvZHMgdG8gYXBwZW5kIGVsZW1lbnRzIHRvIG90aGVycywgc2V0IGF0dHJpYnV0ZXMgYW5kIGNsYXNzZXMsIHJlZ2lzdGVyIGV2ZW50IGhhbmRsZXJzIGFuZCBzbyBvbi5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBGb3IgdGhvc2UgY29taW5nIGZyb20gYSBSZWFjdCBvciBzaW1pbGFyIGJhY2tncm91bmQgdGhpcyBtYXkgdGFrZSBzb21lIGdldHRpbmcgdXNlZCB0by5cbiAgICAgICAgUmVhY3QgYWRoZXJlcyBxdWl0ZSBjbG9zZWx5IHRvIHRoZSBNVkMgcGFyYWRpZ20uXG4gICAgICAgIE1hbmlwdWxhdGUgdGhlIG1vZGVsLCB0aGV5IHNheSwgYW5kIHRoZSB2aWV3IHdpbGwgbWFnaWNhbGx5IHRha2UgY2FyZSBvZiBpdHNlbGYuXG4gICAgICAgIFdpdGggRWFzeVVJIG9uIHRoZSBvdGhlciBoYW5kIHRoZXJlIGlzIG5vIG1hZ2ljLlxuICAgICAgICBUaGVyZSBpcyBzdGlsbCBhbiBhYnN0cmFjdGlvbiBidXQgaXQgaXMgY2xlYW5lciwgbW9yZSBob25lc3QgcGVyaGFwcy5cbiAgICAgIDwvcD5cbiAgICA8L3NlY3Rpb24+XG5cbiAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVGhlRWxlbWVudENsYXNzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCcuLi8uLi9lYXN5dWktanN4Jyk7XG5cbmNvbnN0IE5leHQgPSByZXF1aXJlKCcuLi9uZXh0JyksXG4gICAgICBQcmV2aW91cyA9IHJlcXVpcmUoJy4uL3ByZXZpb3VzJyksXG4gICAgICBDb250ZW50cyA9IHJlcXVpcmUoJy4uL2NvbnRlbnRzJyksXG4gICAgICBCbG9ja0NvZGUgPSByZXF1aXJlKCcuLi9ibG9ja0NvZGUnKSxcbiAgICAgIElubGluZUNvZGUgPSByZXF1aXJlKCcuLi9pbmxpbmVDb2RlJyk7XG4gIFxuY29uc3QgQUdvb2RFeGFtcGxlVGhpc0RvY3VtZW50YXRpb24gPSAoKSA9PiB7XG4gIHJldHVybiAoXG5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxuYXY+XG4gICAgICAgIDxOZXh0IGhyZWY9XCIjdGhlRWxlbWVudENsYXNzXCI+VGhlIDxJbmxpbmVDb2RlPkVsZW1lbnQ8L0lubGluZUNvZGU+IGNsYXNzPC9OZXh0PlxuICAgICAgICA8UHJldmlvdXMgaHJlZj1cIiNleHRlbmRpbmdBbkVhc3lVSUNsYXNzXCI+RXh0ZW5kaW5nIGFuIEVhc3lVSSBjbGFzczwvUHJldmlvdXM+XG4gICAgICAgIDxDb250ZW50cyAvPlxuICAgICAgPC9uYXY+XG4gICAgICA8aDI+VGhlIGV4YW1wbGUgb2YgdGhpcyBkb2N1bWVudGF0aW9uPC9oMj5cbiAgICAgIDxCbG9ja0NvZGU+e2Bjb25zdCBpbnNlcnRTZWN0aW9ucyA9ICgpID0+IHtcbiAgY29uc3QgaGVhZGVyRE9NRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpLFxuICAgICAgICBoZWFkZXIgPSBFbGVtZW50LmZyb21ET01FbGVtZW50KGhlYWRlckRPTUVsZW1lbnQpO1xuXG4gIGZvckVhY2hTZWN0aW9uKChzZWN0aW9uKSA9PiB7XG4gICAgc2VjdGlvbi5pbnNlcnRBZnRlcihoZWFkZXIpO1xuICB9KTtcbn07XG5cbmNvbnN0IHJldmVhbFNlY3Rpb24gPSAoKSA9PiB7XG4gIGZvckVhY2hTZWN0aW9uKChzZWN0aW9uKSA9PiB7XG4gICAgc2VjdGlvbi5oaWRlKCk7XG4gIH0pO1xuXG4gIGNvbnN0IHNlY3Rpb24gPSBmcmFnbWVudFRvU2VjdGlvbk1hcFtmcmFnbWVudF1cbiAgICAgICAgICAgICAgICAgICAgfHwgaW50cm9kdWN0aW9uO1xuXG4gIHNlY3Rpb24uc2hvdygpO1xufTtcblxuY29uc3QgZm9yRWFjaFNlY3Rpb24gPSAoY2FsbGJhY2spID0+IHtcbiAgY29uc3QgZnJhZ21lbnRzID0gT2JqZWN0LmtleXMoZnJhZ21lbnRUb1NlY3Rpb25NYXApO1xuXG4gIGZyYWdtZW50cy5mb3JFYWNoKChmcmFnbWVudCkgPT4ge1xuICAgIGNvbnN0IHNlY3Rpb24gPSBmcmFnbWVudFRvU2VjdGlvbk1hcFtmcmFnbWVudF07XG5cbiAgICBjYWxsYmFjayhzZWN0aW9uKTtcbiAgfSk7XG59O1xuXG5pbnNlcnRTZWN0aW9ucygpO1xuXG5mcmFnbWVudC5vbkNoYW5nZShyZXZlYWxTZWN0aW9uKTtcblxucmV2ZWFsU2VjdGlvbigpO2B9PC9CbG9ja0NvZGU+XG4gICAgICA8cD5cbiAgICAgICAgVGhlIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZGphbGJhdC9FYXN5VUktSlNYL2Jsb2IvbWFzdGVyL2VzNi9kb2NzLmpzXCI+ZG9jcy5qczwvYT4gZmlsZSBzaG93cyBob3cgZWFzeSBpdCBpcyB0byBwdXQgdG9nZXRoZXIgYSBiYXNpYyBzaW5nbGUgcGFnZSB3ZWIgYXBwbGljYXRpb24uXG4gICAgICAgIFRoZSBhcHByb2FjaCB3aWxsIG5vdCBzY2FsZSBpbmRlZmluaXRlbHksIHNvb25lciBvciBsYXRlciB0aGUgc2VjdGlvbnMgd291bGQgaGF2ZSB0byBiZSBnZW5lcmF0ZWQgZnJvbSBhIGRhdGEgc291cmNlIHJhdGhlciB0aGFuIGJlIGhhcmQtY29kZWQuXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgTm9uZXRoZWxlc3MsIGl0IHNlcnZlcyB0byBoaWdobGlnaHQgYSBrZXkgcG9pbnQsIHdoaWNoIGlzIHRoYXQgYWxsIGVsZW1lbnRzIGFyZSBpbnN0YW5jZXMgb2YgdGhlIDxJbmxpbmVDb2RlPkVsZW1lbnQ8L0lubGluZUNvZGU+IGNsYXNzLCBvciBhIGNsYXNzIHRoYXQgZXh0ZW5kcyBpdC5cbiAgICAgICAgSW4gdGhpcyBjYXNlIHRoaXMgbWVhbnMgdGhhdCB0aGUgPElubGluZUNvZGU+c2hvdygpPC9JbmxpbmVDb2RlPiBhbmQgPElubGluZUNvZGU+aGlkZSgpPC9JbmxpbmVDb2RlPiBtZXRob2RzIGNhbiBiZWVuIHVzZWQgdG8gcmV2ZWFsIHRoZSByZWxldmFudCBzZWN0aW9uIHdoZW5ldmVyIHRoZSBoYXNoIGZyYWdtZW50IGNoYW5nZXMuXG4gICAgICA8L3A+XG4gICAgPC9zZWN0aW9uPlxuXG4gICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFHb29kRXhhbXBsZVRoaXNEb2N1bWVudGF0aW9uO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCcuLi8uLi9lYXN5dWktanN4Jyk7XG5cbmNvbnN0IE5leHQgPSByZXF1aXJlKCcuLi9uZXh0JyksXG4gICAgICBQcmV2aW91cyA9IHJlcXVpcmUoJy4uL3ByZXZpb3VzJyksXG4gICAgICBDb250ZW50cyA9IHJlcXVpcmUoJy4uL2NvbnRlbnRzJyksXG4gICAgICBCbG9ja0NvZGUgPSByZXF1aXJlKCcuLi9ibG9ja0NvZGUnKSxcbiAgICAgIElubGluZUNvZGUgPSByZXF1aXJlKCcuLi9pbmxpbmVDb2RlJyk7XG4gIFxuY29uc3QgVGhlUmVuZGVyTWV0aG9kID0gKCkgPT4ge1xuICByZXR1cm4gKFxuXG4gICAgPHNlY3Rpb24+XG4gICAgICA8bmF2PlxuICAgICAgICA8TmV4dCBocmVmPVwiI2V4dGVuZGluZ0FuRWFzeVVJQ2xhc3NcIj5FeHRlbmRpbmcgYW4gRWFzeVVJIGNsYXNzPC9OZXh0PlxuICAgICAgICA8UHJldmlvdXMgaHJlZj1cIiNlYXN5VUlFbGVtZW50c1wiPkVhc3lVSSBlbGVtZW50czwvUHJldmlvdXM+XG4gICAgICAgIDxDb250ZW50cyAvPlxuICAgICAgPC9uYXY+XG4gICAgICA8aDI+VGhlIDxJbmxpbmVDb2RlPnJlbmRlcigpPC9JbmxpbmVDb2RlPiBtZXRob2Q8L2gyPlxuICAgICAgPEJsb2NrQ29kZT57YHJlcXVpcmUoJ2Vhc3l1aS1qc3gnKTtcblxuY29uc3QgZWFzeXVpID0gcmVxdWlyZSgnZWFzeXVpJyksXG4gICAgICB7IEJvZHkgfSA9IGVhc3l1aTtcblxuY2xhc3MgRXhhbXBsZSB7XG4gIGNvbnN0cnVjdG9yKHByb3BlcnRpZXMpIHtcbiAgICB0aGlzLnByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzO1xuICB9XG5cbiAgY2xpY2sobWVzc2FnZSkge1xuICAgIGFsZXJ0KG1lc3NhZ2UpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBtZXNzYWdlIH0gPSB0aGlzLnByb3BlcnRpZXM7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGljayhtZXNzYWdlKTtcblxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIENsaWNrIG1lLi4uXG4gICAgICA8L2J1dHRvbj5cblxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgYm9keSA9IG5ldyBCb2R5KCksXG4gICAgICBleGFtcGxlID1cblxuICAgICAgICA8RXhhbXBsZSBtZXNzYWdlPVwiQ2xpY2tlZCFcIj5cbiAgICAgICAgQ2xpY2sgbWUuLi5cbiAgICAgICAgPC9FeGFtcGxlPlxuXG4gICAgICA7XG5cbmJvZHkuYXBwZW5kKGV4YW1wbGUpO2B9PC9CbG9ja0NvZGU+XG4gICAgICA8cD5cbiAgICAgICAgVGhpcyBpcyB0aGUgbW9zdCBzdHJhaWdodGZvcndhcmQgd2F5IHRvIGNyZWF0ZSB5b3VyIG93biBlbGVtZW50cywgYW5kIGlzIG1vcmUgb3IgbGVzcyBha2luIHRvIHRoZSB1c2Ugb2YgdGhlIDxJbmxpbmVDb2RlPnJlbmRlcigpPC9JbmxpbmVDb2RlPiBtZXRob2QgaW4gUmVhY3QgYW5kIFJlYWN0aW9uLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIFRoZSBwYXR0ZXJuIGNvbnNpc3RzIG9mIGEgY2xhc3Mgd2l0aCBhIDxJbmxpbmVDb2RlPnJlbmRlcigpPC9JbmxpbmVDb2RlPiBtZXRob2QgYW5kIGFuIG9wdGlvbmFsIGNvbnN0cnVjdG9yIHRvIGFzc2lnbiBpdHMgPElubGluZUNvZGU+cHJvcGVydGllczwvSW5saW5lQ29kZT4gYXJndW1lbnQgdG8gdGhlIGluc3RhbmNlLlxuICAgICAgICBUaGUgaW5zdGFuY2UgbWV0aG9kcyBhcmUgdGhlbiBhdmFpbGFibGUgZnJvbSB3aXRoaW4gdGhlIDxJbmxpbmVDb2RlPnJlbmRlcigpPC9JbmxpbmVDb2RlPiBtZXRob2QgYnkgd2F5IG9mIHRoZSA8SW5saW5lQ29kZT50aGlzPC9JbmxpbmVDb2RlPiBrZXl3b3JkLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIEl0IGlzIGltcG9ydGFudCB0byByZWFsaXNlIHRoYXQgd2hhdCBpcyByZXR1cm5lZCB3aWxsIDxlbT5ub3Q8L2VtPiBiZSBhbiBpbnN0YW5jZSBvZiB0aGUgY2xhc3MganVzdCBkZWZpbmVkLlxuICAgICAgICBJdCB3aWxsIGJlIGFuIGluc3RhbmNlIG9mIHdoYXRldmVyIGNsYXNzIGlzIHJlZmVyZW5jZWQgYnkgdGhlIEpTWCB0aGF0IGlzIHJldHVybmVkIGJ5IHRoZSA8SW5saW5lQ29kZT5yZW5kZXIoKTwvSW5saW5lQ29kZT4gbWV0aG9kLCBvciBhbiBpbnN0YW5jZSBvZiB0aGUgPElubGluZUNvZGU+RWxlbWVudDwvSW5saW5lQ29kZT4gY2xhc3MgaWYgdGhlIHRhZyBuYW1lIGlzIGxvd2VyIGNhc2UuXG4gICAgICAgIFRoZSB1dGlsaXR5IG9mIHRoaXMgcGF0dGVybiBvbmx5IGxpZXMgaW4gdGhlIGZhY3QgdGhhdCBpdCBhbGxvd3MgSlNYIHRvIGJlIGVuY2Fwc3VsYXRlZCB0b2dldGhlciB3aXRoIHNvbWUgYWRkaXRpb25hbCBmdW5jdGlvbmFsaXR5IHRoYXQgY2FuIGJlIGVhc2lseSByZWZlcmVuY2VkLlxuICAgICAgPC9wPlxuICAgIDwvc2VjdGlvbj5cbiAgICAgIFxuICApOyAgXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRoZVJlbmRlck1ldGhvZDtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeXVpID0gcmVxdWlyZSgnZWFzeXVpJyksXG4gICAgICB7IEVsZW1lbnQgfSA9IGVhc3l1aTtcblxuY2xhc3MgUmVhY3Qge1xuICBzdGF0aWMgY3JlYXRlRWxlbWVudChmaXJzdEFyZ3VtZW50LCBwcm9wZXJ0aWVzLCAuLi5jaGlsZEVsZW1lbnRzKSB7XG4gICAgbGV0IGVsZW1lbnQgPSBudWxsO1xuXG4gICAgaWYgKGZpcnN0QXJndW1lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY2hpbGRFbGVtZW50cyA9IGZsYXR0ZW5DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpO1xuXG4gICAgICBwcm9wZXJ0aWVzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIGNoaWxkRWxlbWVudHM6IGNoaWxkRWxlbWVudHNcbiAgICAgIH0sIHByb3BlcnRpZXMpO1xuXG4gICAgICBpZiAoZmFsc2UpIHtcblxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29uc3QgdGFnTmFtZSA9IGZpcnN0QXJndW1lbnQ7ICAvLy9cblxuICAgICAgICBlbGVtZW50ID0gRWxlbWVudC5mcm9tUHJvcGVydGllc0FuZFRhZ05hbWUoRWxlbWVudCwgcHJvcGVydGllcywgdGFnTmFtZSlcbiAgICAgIH0gZWxzZSBpZiAoaXNUeXBlT2YoZmlyc3RBcmd1bWVudCwgRWxlbWVudCkpIHtcbiAgICAgICAgY29uc3QgQ2xhc3MgPSBmaXJzdEFyZ3VtZW50OyAgLy8vXG5cbiAgICAgICAgZWxlbWVudCA9IENsYXNzLmZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpO1xuICAgICAgfSBlbHNlIGlmIChmaXJzdEFyZ3VtZW50LnByb3RvdHlwZS5yZW5kZXIpIHtcbiAgICAgICAgY29uc3QgQ2xhc3MgPSBmaXJzdEFyZ3VtZW50LCAgLy8vXG4gICAgICAgICAgICAgIGluc3RhbmNlID0gbmV3IENsYXNzKHByb3BlcnRpZXMpO1xuXG4gICAgICAgIGVsZW1lbnQgPSBpbnN0YW5jZS5yZW5kZXIoKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudEZ1bmN0aW9uID0gZmlyc3RBcmd1bWVudDsgIC8vL1xuXG4gICAgICAgIGVsZW1lbnQgPSBlbGVtZW50RnVuY3Rpb24ocHJvcGVydGllcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdywgJ1JlYWN0Jywge1xuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBSZWFjdDtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7XG5cbmZ1bmN0aW9uIGZsYXR0ZW5DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpIHtcbiAgY2hpbGRFbGVtZW50cyA9IGNoaWxkRWxlbWVudHMucmVkdWNlKGZ1bmN0aW9uKGNoaWxkRWxlbWVudHMsIGNoaWxkRWxlbWVudCkgeyAgLy8vXG4gICAgY2hpbGRFbGVtZW50cyA9IGNoaWxkRWxlbWVudHMuY29uY2F0KGNoaWxkRWxlbWVudCk7XG5cbiAgICByZXR1cm4gY2hpbGRFbGVtZW50cztcbiAgfSwgW10pO1xuXG4gIHJldHVybiBjaGlsZEVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiBpc1R5cGVPZihhcmd1bWVudCwgQ2xhc3MpIHtcbiAgbGV0IHR5cGVPZiA9IGZhbHNlO1xuXG4gIGlmIChhcmd1bWVudCA9PT0gQ2xhc3MpIHsgLy8vXG4gICAgdHlwZU9mID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBhcmd1bWVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihhcmd1bWVudCk7IC8vL1xuXG4gICAgaWYgKGFyZ3VtZW50KSB7XG4gICAgICB0eXBlT2YgPSBpc1R5cGVPZihhcmd1bWVudCwgQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0eXBlT2Y7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBCb3VuZHM6IHJlcXVpcmUoJy4vbGliL21pc2MvYm91bmRzJyksXG4gIE9mZnNldDogcmVxdWlyZSgnLi9saWIvbWlzYy9vZmZzZXQnKSxcbiAgRWxlbWVudDogcmVxdWlyZSgnLi9saWIvZWxlbWVudCcpLFxuICBJbnB1dEVsZW1lbnQ6IHJlcXVpcmUoJy4vbGliL2lucHV0RWxlbWVudCcpLFxuICBkb2N1bWVudDogcmVxdWlyZSgnLi9saWIvZG9jdW1lbnQnKSxcbiAgd2luZG93OiByZXF1aXJlKCcuL2xpYi93aW5kb3cnKSxcbiAgRGl2OiByZXF1aXJlKCcuL2xpYi9lbGVtZW50L2RpdicpLFxuICBTcGFuOiByZXF1aXJlKCcuL2xpYi9lbGVtZW50L3NwYW4nKSxcbiAgQm9keTogcmVxdWlyZSgnLi9saWIvZWxlbWVudC9ib2R5JyksXG4gIExpbms6IHJlcXVpcmUoJy4vbGliL2lucHV0RWxlbWVudC9saW5rJyksXG4gIElucHV0OiByZXF1aXJlKCcuL2xpYi9pbnB1dEVsZW1lbnQvaW5wdXQnKSxcbiAgU2VsZWN0OiByZXF1aXJlKCcuL2xpYi9pbnB1dEVsZW1lbnQvc2VsZWN0JyksXG4gIEJ1dHRvbjogcmVxdWlyZSgnLi9saWIvaW5wdXRFbGVtZW50L2J1dHRvbicpLFxuICBDaGVja2JveDogcmVxdWlyZSgnLi9saWIvaW5wdXRFbGVtZW50L2NoZWNrYm94JyksXG4gIFRleHRhcmVhOiByZXF1aXJlKCcuL2xpYi9pbnB1dEVsZW1lbnQvdGV4dGFyZWEnKVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZXZlbnRNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vZXZlbnQnKSxcbiAgICAgIGNsaWNrTWl4aW4gPSByZXF1aXJlKCcuL21peGluL2NsaWNrJyksXG4gICAgICBtb3VzZU1peGluID0gcmVxdWlyZSgnLi9taXhpbi9tb3VzZScpO1xuXG5jbGFzcyBEb2N1bWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvY3VtZW50O1xuXG4gICAgdGhpcy5oYW5kbGVyc01hcCA9IHt9O1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oRG9jdW1lbnQucHJvdG90eXBlLCBldmVudE1peGluKTtcbk9iamVjdC5hc3NpZ24oRG9jdW1lbnQucHJvdG90eXBlLCBjbGlja01peGluKTtcbk9iamVjdC5hc3NpZ24oRG9jdW1lbnQucHJvdG90eXBlLCBtb3VzZU1peGluKTtcblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgRG9jdW1lbnQoKTsgIC8vL1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBPZmZzZXQgPSByZXF1aXJlKCcuL21pc2Mvb2Zmc2V0JyksXG4gICAgICBCb3VuZHMgPSByZXF1aXJlKCcuL21pc2MvYm91bmRzJyksXG4gICAgICBqc3hNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vanN4JyksXG4gICAgICBldmVudE1peGluID0gcmVxdWlyZSgnLi9taXhpbi9ldmVudCcpLFxuICAgICAgY2xpY2tNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vY2xpY2snKSxcbiAgICAgIG1vdXNlTWl4aW4gPSByZXF1aXJlKCcuL21peGluL21vdXNlJyksXG4gICAgICByZXNpemVNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vcmVzaXplJyk7XG5cbmNsYXNzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvcikge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnRGcm9tU2VsZWN0b3Ioc2VsZWN0b3IpO1xuXG4gICAgdGhpcy5kb21FbGVtZW50Ll9fZWxlbWVudF9fID0gdGhpcztcbiAgICBcbiAgICB0aGlzLmhhbmRsZXJzTWFwID0ge307XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIEVsZW1lbnQuY2xvbmUodGhpcyk7IH1cblxuICBnZXRPZmZzZXQoKSB7XG4gICAgY29uc3QgdG9wID0gdGhpcy5kb21FbGVtZW50Lm9mZnNldFRvcCwgIC8vL1xuICAgICAgICAgIGxlZnQgPSB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0TGVmdCwgIC8vL1xuICAgICAgICAgIG9mZnNldCA9IG5ldyBPZmZzZXQodG9wLCBsZWZ0KTtcblxuICAgIHJldHVybiBvZmZzZXQ7XG4gIH1cblxuICBnZXRCb3VuZHMoaW5jbHVkZUJvcmRlciA9IGZhbHNlKSB7XG4gICAgY29uc3QgYm91bmRpbmdDbGllbnRSZWN0ID0gdGhpcy5kb21FbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgIGJvdW5kcyA9IEJvdW5kcy5mcm9tQm91bmRpbmdDbGllbnRSZWN0KGJvdW5kaW5nQ2xpZW50UmVjdCk7XG5cbiAgICByZXR1cm4gYm91bmRzO1xuICB9XG5cbiAgZ2V0V2lkdGgoaW5jbHVkZUJvcmRlciA9IGZhbHNlKSB7XG4gICAgY29uc3Qgd2lkdGggID0gaW5jbHVkZUJvcmRlciA/XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0V2lkdGggOlxuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQuY2xpZW50V2lkdGg7XG5cbiAgICByZXR1cm4gd2lkdGg7XG4gIH1cblxuICBzZXRXaWR0aCh3aWR0aCkgeyB0aGlzLmRvbUVsZW1lbnQuc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGA7IH1cblxuICBnZXRIZWlnaHQoaW5jbHVkZUJvcmRlciA9IGZhbHNlKSB7XG4gICAgY29uc3QgaGVpZ2h0ICA9IGluY2x1ZGVCb3JkZXIgP1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5vZmZzZXRIZWlnaHQgOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50LmNsaWVudEhlaWdodDtcblxuICAgIHJldHVybiBoZWlnaHQ7XG4gIH1cblxuICBzZXRIZWlnaHQoaGVpZ2h0KSB7IHRoaXMuZG9tRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBgJHtoZWlnaHR9cHhgOyB9XG5cbiAgZ2V0QXR0cmlidXRlKG5hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBzZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7IH1cblxuICBjbGVhckF0dHJpYnV0ZShuYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBhZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgdGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpOyB9XG5cbiAgcmVtb3ZlQXR0cmlidXRlKG5hbWUpIHsgdGhpcy5jbGVhckF0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIHNldENsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lOyB9XG5cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7IH1cblxuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTsgfVxuXG4gIHRvZ2dsZUNsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpOyB9XG5cbiAgaGFzQ2xhc3MoY2xhc3NOYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7IH1cblxuICBjbGVhckNsYXNzZXMoKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc05hbWUgPSAnJzsgfVxuXG4gIHByZXBlbmQoZWxlbWVudE9yU3RyaW5nKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGRvbUVsZW1lbnRGcm9tRWxlbWVudE9yU3RyaW5nKGVsZW1lbnRPclN0cmluZyksXG4gICAgICAgICAgZmlyc3RDaGlsZERPTUVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQuZmlyc3RDaGlsZDtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5pbnNlcnRCZWZvcmUoZG9tRWxlbWVudCwgZmlyc3RDaGlsZERPTUVsZW1lbnQpO1xuICB9XG4gIFxuICBhcHBlbmQoZWxlbWVudE9yU3RyaW5nKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGRvbUVsZW1lbnRGcm9tRWxlbWVudE9yU3RyaW5nKGVsZW1lbnRPclN0cmluZyk7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRvbUVsZW1lbnQsIG51bGwpOyAvLy9cbiAgfVxuXG4gIGFwcGVuZFRvKHBhcmVudEVsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01FbGVtZW50ID0gcGFyZW50RWxlbWVudC5kb21FbGVtZW50LFxuICAgICAgICAgIGZpcnN0U2libGluZ0RPTUVsZW1lbnQgPSBwYXJlbnRET01FbGVtZW50LmZpcnN0Q2hpbGQ7IC8vL1xuXG4gICAgcGFyZW50RE9NRWxlbWVudC5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBmaXJzdFNpYmxpbmdET01FbGVtZW50KTtcbiAgfVxuXG4gIHByZXBlbmRUbyhwYXJlbnRFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NRWxlbWVudCA9IHBhcmVudEVsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHBhcmVudERPTUVsZW1lbnQuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgbnVsbCk7IC8vL1xuICB9XG5cbiAgcmVtb3ZlRnJvbShwYXJlbnRFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NRWxlbWVudCA9IHBhcmVudEVsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHBhcmVudERPTUVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5kb21FbGVtZW50KTtcbiAgfVxuXG4gIHJlbW92ZShlbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVDaGlsZChkb21FbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGluc2VydEJlZm9yZShzaWJsaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgcGFyZW50RE9NTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCk7XG4gIH1cblxuICBpbnNlcnRBZnRlcihzaWJsaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgcGFyZW50RE9NTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudC5uZXh0U2libGluZyk7ICAvLy9cbiAgfVxuXG4gIHNob3coZGlzcGxheVN0eWxlID0gJ2Jsb2NrJykgeyB0aGlzLmRvbUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IGRpc3BsYXlTdHlsZTsgfVxuXG4gIGhpZGUoKSB7IHRoaXMuZG9tRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyB9XG5cbiAgZW5hYmxlKCkgeyB0aGlzLmNsZWFyQXR0cmlidXRlKCdkaXNhYmxlZCcpOyB9XG5cbiAgZGlzYWJsZSgpIHsgdGhpcy5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7IH1cblxuICBodG1sKGh0bWwpIHtcbiAgICBpZiAoaHRtbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBodG1sID0gdGhpcy5kb21FbGVtZW50LmlubmVySFRNTDsgLy8vXG5cbiAgICAgIHJldHVybiBodG1sO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpbm5lckhUTUwgPSBodG1sOyAvLy9cblxuICAgICAgdGhpcy5kb21FbGVtZW50LmlubmVySFRNTCA9IGlubmVySFRNTFxuICAgIH1cbiAgfVxuXG4gIGNzcyhjc3MpIHtcbiAgICBpZiAoY3NzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZG9tRWxlbWVudCksXG4gICAgICAgICAgICBjc3MgPSB7fTtcblxuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvbXB1dGVkU3R5bGUubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBjb21wdXRlZFN0eWxlWzBdLCAgLy8vXG4gICAgICAgICAgICAgIHZhbHVlID0gY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpOyAvLy9cblxuICAgICAgICBjc3NbbmFtZV0gPSB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNzcztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjc3MgPT09ICdzdHJpbmcnKSB7XG4gICAgICBsZXQgbmFtZSA9IGNzczsgLy8vXG5cbiAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZG9tRWxlbWVudCksXG4gICAgICAgICAgICB2YWx1ZSA9IGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTsgLy8vXG5cbiAgICAgIGNzcyA9IHZhbHVlOyAgLy8vXG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXMoY3NzKTsgLy8vXG5cbiAgICAgIG5hbWVzLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGNzc1tuYW1lXTtcblxuICAgICAgICB0aGlzLmRvbUVsZW1lbnQuc3R5bGVbbmFtZV0gPSB2YWx1ZTtcbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0RGVzY2VuZGFudEVsZW1lbnRzKHNlbGVjdG9yID0gJyonKSB7XG4gICAgY29uc3QgZGVzY2VuZGFudERPTUVsZW1lbnRzID0gdGhpcy5kb21FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpLFxuICAgICAgICAgIGRlc2NlbmRhbnRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGRlc2NlbmRhbnRET01FbGVtZW50cyk7XG5cbiAgICByZXR1cm4gZGVzY2VuZGFudEVsZW1lbnRzO1xuICB9XG5cbiAgZ2V0Q2hpbGRFbGVtZW50cyhzZWxlY3RvciA9ICcqJykge1xuICAgIGNvbnN0IGRlc2NlbmRhbnRET01FbGVtZW50cyA9IHRoaXMuZG9tRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSxcbiAgICAgICAgICBhbGxDaGlsZERPTUVsZW1lbnRzID0gdGhpcy5kb21FbGVtZW50LmNoaWxkcmVuLFxuICAgICAgICAgIGNoaWxkRE9NRWxlbWVudHMgPSBmaWx0ZXIoYWxsQ2hpbGRET01FbGVtZW50cywgZnVuY3Rpb24oY2hpbGRET01FbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gc29tZShkZXNjZW5kYW50RE9NRWxlbWVudHMsIGZ1bmN0aW9uKGRlc2NlbmRhbnRET01FbGVtZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiAoZGVzY2VuZGFudERPTUVsZW1lbnQgPT09IGNoaWxkRE9NRWxlbWVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoY2hpbGRET01FbGVtZW50cyk7XG5cbiAgICByZXR1cm4gY2hpbGRFbGVtZW50cztcbiAgfVxuXG4gIGdldFBhcmVudEVsZW1lbnQoc2VsZWN0b3IgPSAnKicpIHtcbiAgICBsZXQgcGFyZW50RWxlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBwYXJlbnRET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cbiAgICBpZiAocGFyZW50RE9NRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgaWYgKHBhcmVudERPTUVsZW1lbnQubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgY29uc3QgcGFyZW50RE9NRWxlbWVudHMgPSBbcGFyZW50RE9NRWxlbWVudF0sXG4gICAgICAgICAgICAgIHBhcmVudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMocGFyZW50RE9NRWxlbWVudHMpLFxuICAgICAgICAgICAgICBmaXJzdFBhcmVudEVsZW1lbnQgPSBmaXJzdChwYXJlbnRFbGVtZW50cyk7XG5cbiAgICAgICAgcGFyZW50RWxlbWVudCA9IGZpcnN0UGFyZW50RWxlbWVudCB8fCBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnRFbGVtZW50O1xuICB9XG5cbiAgZ2V0QXNjZW5kYW50RWxlbWVudHMoc2VsZWN0b3IgPSAnKicpIHtcbiAgICBjb25zdCBhc2NlbmRhbnRET01FbGVtZW50cyA9IFtdLFxuICAgICAgICAgIHBhcmVudERPTUVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQucGFyZW50RWxlbWVudDtcblxuICAgIGxldCBhc2NlbmRhbnRET01FbGVtZW50ID0gcGFyZW50RE9NRWxlbWVudDsgIC8vL1xuICAgIHdoaWxlIChhc2NlbmRhbnRET01FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBpZiAoYXNjZW5kYW50RE9NRWxlbWVudC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICBhc2NlbmRhbnRET01FbGVtZW50cy5wdXNoKGFzY2VuZGFudERPTUVsZW1lbnQpO1xuICAgICAgfVxuXG4gICAgICBhc2NlbmRhbnRET01FbGVtZW50ID0gYXNjZW5kYW50RE9NRWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgIH1cblxuICAgIGNvbnN0IGFzY2VuZGFudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoYXNjZW5kYW50RE9NRWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGFzY2VuZGFudEVsZW1lbnRzO1xuICB9XG5cbiAgc3RhdGljIGNsb25lKENsYXNzLCBlbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAoQ2xhc3MgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgICBlbGVtZW50ID0gQ2xhc3M7XG4gICAgICByZW1haW5pbmdBcmd1bWVudHMuc2hpZnQoKTtcbiAgICAgIENsYXNzID0gRWxlbWVudDtcbiAgICB9XG5cbiAgICBjb25zdCBkZWVwID0gdHJ1ZSxcbiAgICAgICAgICBkb21FbGVtZW50ID0gZWxlbWVudC5kb21FbGVtZW50LmNsb25lTm9kZShkZWVwKTtcblxuICAgIHJlbWFpbmluZ0FyZ3VtZW50cy51bnNoaWZ0KGRvbUVsZW1lbnQpO1xuICAgIHJlbWFpbmluZ0FyZ3VtZW50cy51bnNoaWZ0KG51bGwpO1xuXG4gICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoQ2xhc3MsIHJlbWFpbmluZ0FyZ3VtZW50cykpO1xuICB9XG5cbiAgc3RhdGljIGZyb21IVE1MKENsYXNzLCBodG1sLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBpZiAodHlwZW9mIENsYXNzID09PSAnc3RyaW5nJykge1xuICAgICAgaHRtbCA9IENsYXNzO1xuICAgICAgcmVtYWluaW5nQXJndW1lbnRzLnNoaWZ0KCk7XG4gICAgICBDbGFzcyA9IEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgY29uc3Qgb3V0ZXJET01FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBvdXRlckRPTUVsZW1lbnQuaW5uZXJIVE1MID0gaHRtbDsgIC8vL1xuXG4gICAgY29uc3QgZG9tRWxlbWVudCA9IG91dGVyRE9NRWxlbWVudC5maXJzdENoaWxkO1xuXG4gICAgcmVtYWluaW5nQXJndW1lbnRzLnVuc2hpZnQoZG9tRWxlbWVudCk7XG4gICAgcmVtYWluaW5nQXJndW1lbnRzLnVuc2hpZnQobnVsbCk7XG5cbiAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseShDbGFzcywgcmVtYWluaW5nQXJndW1lbnRzKSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoQ2xhc3MsIGRvbUVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmICh0eXBlb2YgQ2xhc3MgPT09ICdvYmplY3QnKSB7XG4gICAgICBkb21FbGVtZW50ID0gQ2xhc3M7XG4gICAgICByZW1haW5pbmdBcmd1bWVudHMuc2hpZnQoKTtcbiAgICAgIENsYXNzID0gRWxlbWVudDtcbiAgICB9XG5cbiAgICByZW1haW5pbmdBcmd1bWVudHMudW5zaGlmdChkb21FbGVtZW50KTtcbiAgICByZW1haW5pbmdBcmd1bWVudHMudW5zaGlmdChudWxsKTtcblxuICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KENsYXNzLCByZW1haW5pbmdBcmd1bWVudHMpKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGNvbnN0IHRhZ05hbWUgPSBDbGFzcy50YWdOYW1lLFxuICAgICAgICAgIGN1c3RvbUhhbmRsZXJOYW1lcyA9IENsYXNzLmN1c3RvbUhhbmRsZXJOYW1lcyxcbiAgICAgICAgICBhZGRpdGlvbmFsUHJvcGVydGllcyA9IENsYXNzLmFkZGl0aW9uYWxQcm9wZXJ0ZXM7XG5cbiAgICByZXR1cm4gRWxlbWVudC5mcm9tUHJvcGVydGllc0FuZFRhZ05hbWUoQ2xhc3MsIHByb3BlcnRpZXMsIHRhZ05hbWUsIGN1c3RvbUhhbmRsZXJOYW1lcywgYWRkaXRpb25hbFByb3BlcnRpZXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzQW5kVGFnTmFtZShDbGFzcywgcHJvcGVydGllcywgdGFnTmFtZSwgY3VzdG9tSGFuZGxlck5hbWVzLCBhZGRpdGlvbmFsUHJvcGVydGllcykge1xuICAgIGNvbnN0IGh0bWwgPSBgPCR7dGFnTmFtZX0+PC8ke3RhZ05hbWV9PmAsXG4gICAgICAgICAgZWxlbWVudCA9IEVsZW1lbnQuZnJvbUhUTUwoQ2xhc3MsIGh0bWwpO1xuXG4gICAgZWxlbWVudC5hcHBseVByb3BlcnRpZXMocHJvcGVydGllcywgY3VzdG9tSGFuZGxlck5hbWVzLCBhZGRpdGlvbmFsUHJvcGVydGllcyk7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBqc3hNaXhpbik7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBldmVudE1peGluKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGNsaWNrTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgbW91c2VNaXhpbik7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCByZXNpemVNaXhpbik7XG5cbkVsZW1lbnQuTEVGVF9NT1VTRV9CVVRUT04gPSAwO1xuRWxlbWVudC5NSURETEVfTU9VU0VfQlVUVE9OID0gMTtcbkVsZW1lbnQuUklHSFRfTU9VU0VfQlVUVE9OID0gMjtcblxubW9kdWxlLmV4cG9ydHMgPSBFbGVtZW50O1xuXG5mdW5jdGlvbiBkb21FbGVtZW50RnJvbVNlbGVjdG9yKHNlbGVjdG9yKSB7XG4gIGNvbnN0IGRvbUVsZW1lbnQgPSAodHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJykgP1xuICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVswXSA6ICAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjsgIC8vL1xuXG4gIHJldHVybiBkb21FbGVtZW50O1xufVxuXG5mdW5jdGlvbiBkb21FbGVtZW50RnJvbUVsZW1lbnRPclN0cmluZyhlbGVtZW50T3JTdHJpbmcpIHtcbiAgbGV0IGRvbUVsZW1lbnQ7XG5cbiAgaWYgKHR5cGVvZiBlbGVtZW50T3JTdHJpbmcgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gZWxlbWVudE9yU3RyaW5nOyAvLy9cblxuICAgIGRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShzdHJpbmcpOyAvLy9cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZWxlbWVudE9yU3RyaW5nOyAgLy8vXG5cbiAgICBkb21FbGVtZW50ID0gZWxlbWVudC5kb21FbGVtZW50O1xuICB9XG5cbiAgcmV0dXJuIGRvbUVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGRvbUVsZW1lbnRzKSB7XG4gIGNvbnN0IGRvbUVsZW1lbnRzV2l0aEVsZW1lbnRzID0gZmlsdGVyKGRvbUVsZW1lbnRzLCBmdW5jdGlvbihkb21FbGVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIChkb21FbGVtZW50Ll9fZWxlbWVudF9fICE9PSB1bmRlZmluZWQpO1xuICAgICAgICB9KSxcbiAgICAgICAgZWxlbWVudHMgPSBkb21FbGVtZW50c1dpdGhFbGVtZW50cy5tYXAoZnVuY3Rpb24oZG9tRWxlbWVudCkge1xuICAgICAgICAgIHJldHVybiBkb21FbGVtZW50Ll9fZWxlbWVudF9fO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gZWxlbWVudHM7XG59XG5cbmZ1bmN0aW9uIHNvbWUoYXJyYXksIHRlc3QpIHtcbiAgbGV0IHJlc3VsdCA9IGZhbHNlO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgcmVzdWx0ID0gdGVzdChlbGVtZW50KTtcblxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIHJlc3VsdCA9IHRydWU7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGZpbHRlcihhcnJheSwgdGVzdCkge1xuICBjb25zdCBmaWx0ZXJlZEFycmF5ID0gW107XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcmVzdWx0ID0gdGVzdChlbGVtZW50KTtcblxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIGZpbHRlcmVkQXJyYXkucHVzaChlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmlsdGVyZWRBcnJheTtcbn1cblxuZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuLi9lbGVtZW50Jyk7XG5cbmNsYXNzIEJvZHkgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IgPSAnYm9keScpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG4gIH1cblxuICBjbG9uZSgpIHsgcmV0dXJuIEJvZHkuY2xvbmUodGhpcyk7IH1cblxuICBzdGF0aWMgY2xvbmUoZWxlbWVudCkge1xuICAgIHJldHVybiBFbGVtZW50LmNsb25lKEJvZHksIGVsZW1lbnQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwpIHtcbiAgICByZXR1cm4gRWxlbWVudC5mcm9tSFRNTChCb2R5LCBodG1sKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50KSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbURPTUVsZW1lbnQoQm9keSwgZG9tRWxlbWVudCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcHJvcGVydGllcyA9IENsYXNzO1xuICAgICAgQ2xhc3MgPSBCb2R5O1xuICAgIH1cblxuICAgIHJldHVybiBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzKTtcbiAgfVxufVxuXG5Cb2R5LnRhZ05hbWUgPSAnYm9keSc7XG5cbm1vZHVsZS5leHBvcnRzID0gQm9keTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgRWxlbWVudCA9IHJlcXVpcmUoJy4uL2VsZW1lbnQnKTtcblxuY2xhc3MgRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBEaXYuY2xvbmUodGhpcyk7IH1cblxuICBzdGF0aWMgY2xvbmUoZWxlbWVudCkge1xuICAgIHJldHVybiBFbGVtZW50LmNsb25lKERpdiwgZWxlbWVudCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUhUTUwoaHRtbCkge1xuICAgIHJldHVybiBFbGVtZW50LmZyb21IVE1MKERpdiwgaHRtbCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCkge1xuICAgIHJldHVybiBFbGVtZW50LmZyb21ET01FbGVtZW50KERpdiwgZG9tRWxlbWVudCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcHJvcGVydGllcyA9IENsYXNzO1xuICAgICAgQ2xhc3MgPSBEaXY7XG4gICAgfVxuXG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMpO1xuICB9XG59XG5cbkRpdi50YWdOYW1lID0gJ2Rpdic7XG5cbm1vZHVsZS5leHBvcnRzID0gRGl2O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFbGVtZW50ID0gcmVxdWlyZSgnLi4vZWxlbWVudCcpO1xuXG5jbGFzcyBTcGFuIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuICB9XG5cbiAgY2xvbmUoKSB7IHJldHVybiBTcGFuLmNsb25lKHRoaXMpOyB9XG5cbiAgc3RhdGljIGNsb25lKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gRWxlbWVudC5jbG9uZShTcGFuLCBlbGVtZW50KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChodG1sKSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbUhUTUwoU3BhbiwgaHRtbCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCkge1xuICAgIHJldHVybiBFbGVtZW50LmZyb21ET01FbGVtZW50KFNwYW4sIGRvbUVsZW1lbnQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHByb3BlcnRpZXMgPSBDbGFzcztcbiAgICAgIENsYXNzID0gU3BhbjtcbiAgICB9XG5cbiAgICByZXR1cm4gRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcyk7XG4gIH1cbn1cblxuU3Bhbi50YWdOYW1lID0gJ3NwYW4nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNwYW47XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEVsZW1lbnQgPSByZXF1aXJlKCcuL2VsZW1lbnQnKTtcblxuY2xhc3MgSW5wdXRFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuICB9XG5cbiAgaGFzRm9jdXMoKSB7XG4gICAgY29uc3QgZm9jdXMgPSAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gdGhpcy5kb21FbGVtZW50KTsgIC8vL1xuXG4gICAgcmV0dXJuIGZvY3VzO1xuICB9XG5cbiAgZm9jdXMoKSB7IHRoaXMuZG9tRWxlbWVudC5mb2N1cygpOyB9XG5cbiAgc3RhdGljIGNsb25lKENsYXNzLCBlbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICByZXR1cm4gRWxlbWVudC5jbG9uZShDbGFzcywgZWxlbWVudCwgcmVtYWluaW5nQXJndW1lbnRzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSFRNTChDbGFzcywgaHRtbCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbUhUTUwoQ2xhc3MsIGh0bWwsIHJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoQ2xhc3MsIGRvbUVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIHJldHVybiBFbGVtZW50LmZyb21ET01FbGVtZW50KENsYXNzLCBkb21FbGVtZW50LCByZW1haW5pbmdBcmd1bWVudHMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSW5wdXRFbGVtZW50O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBJbnB1dEVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnB1dEVsZW1lbnQnKTtcblxuY2xhc3MgQnV0dG9uIGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIGNsaWNrSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIGlmIChjbGlja0hhbmRsZXIpIHtcbiAgICAgIHRoaXMub25DbGljayhjbGlja0hhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIGNsb25lKGNsaWNrSGFuZGxlcikgeyByZXR1cm4gQnV0dG9uLmNsb25lKHRoaXMsIGNsaWNrSGFuZGxlcik7IH1cblxuICBvbkNsaWNrKGhhbmRsZXIpIHtcbiAgICBpZiAoaGFuZGxlci5pbnRlcm1lZGlhdGVIYW5kbGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhbmRsZXIuaW50ZXJtZWRpYXRlSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVDbGlja0hhbmRsZXI7XG4gICAgfVxuICAgIFxuICAgIHN1cGVyLm9uQ2xpY2soaGFuZGxlcik7XG4gIH1cblxuICBvZmZDbGljayhoYW5kbGVyKSB7XG4gICAgc3VwZXIub2ZmQ2xpY2soaGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgY2xvbmUoZWxlbWVudCwgY2xpY2tIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5jbG9uZShCdXR0b24sIGVsZW1lbnQsIGNsaWNrSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbUhUTUwoaHRtbCwgY2xpY2tIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tSFRNTChCdXR0b24sIGh0bWwsIGNsaWNrSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCwgY2xpY2tIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tRE9NRWxlbWVudChCdXR0b24sIGRvbUVsZW1lbnQsIGNsaWNrSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcHJvcGVydGllcyA9IENsYXNzO1xuICAgICAgQ2xhc3MgPSBCdXR0b247XG4gICAgfVxuXG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcyk7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihCdXR0b24sIHtcbiAgdGFnTmFtZTogJ2J1dHRvbicsXG4gIGN1c3RvbUhhbmRsZXJOYW1lczogW1xuICAgICdvbkNsaWNrJ1xuICBdXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBCdXR0b247XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbnRlcm1lZGlhdGVDbGlja0hhbmRsZXIoaGFuZGxlciwgZXZlbnQpIHtcbiAgY29uc3QgbW91c2VCdXR0b24gPSBldmVudC5idXR0b24sXG4gICAgICAgIHByZXZlbnREZWZhdWx0ID0gaGFuZGxlcihtb3VzZUJ1dHRvbik7XG5cbiAgcmV0dXJuIHByZXZlbnREZWZhdWx0O1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBJbnB1dEVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnB1dEVsZW1lbnQnKTtcblxuY2xhc3MgQ2hlY2tib3ggZXh0ZW5kcyBJbnB1dEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgY2hhbmdlSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIGlmIChjaGFuZ2VIYW5kbGVyKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIGNsb25lKGNoYW5nZUhhbmRsZXIpIHsgcmV0dXJuIENoZWNrYm94LmNsb25lKHRoaXMsIGNoYW5nZUhhbmRsZXIpOyB9XG5cbiAgb25DaGFuZ2UoaGFuZGxlcikge1xuICAgIGlmIChoYW5kbGVyLmludGVybWVkaWF0ZUhhbmRsZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFuZGxlci5pbnRlcm1lZGlhdGVIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICB0aGlzLm9uKCdjbGljaycsIGhhbmRsZXIpOyAgLy8vXG4gIH1cbiAgXG4gIG9mZkNoYW5nZShoYW5kbGVyKSB7XG4gICAgdGhpcy5vZmYoJ2NsaWNrJywgaGFuZGxlcik7ICAvLy9cbiAgfVxuXG4gIGNoZWNrKGNoZWNrZWQgPSB0cnVlKSB7XG4gICAgY2hlY2tlZCA/XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICdjaGVja2VkJykgOlxuICAgICAgICB0aGlzLmNsZWFyQXR0cmlidXRlKCdjaGVja2VkJyk7XG4gIH1cblxuICBpc0NoZWNrZWQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2hlY2tlZDsgfVxuXG4gIHN0YXRpYyBjbG9uZShlbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5jbG9uZShDaGVja2JveCwgZWxlbWVudCwgY2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbUhUTUwoaHRtbCwgY2hhbmdlSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbUhUTUwoQ2hlY2tib3gsIGh0bWwsIGNoYW5nZUhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21ET01FbGVtZW50KENoZWNrYm94LCBkb21FbGVtZW50LCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICBwcm9wZXJ0aWVzID0gQ2xhc3M7XG4gICAgICBDbGFzcyA9IENoZWNrYm94O1xuICAgIH1cblxuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMpO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oQ2hlY2tib3gsIHtcbiAgdGFnTmFtZTogJ2lucHV0JyxcbiAgY3VzdG9tSGFuZGxlck5hbWVzOiBbXG4gICAgJ29uQ2hhbmdlJ1xuICBdLFxuICBhZGRpdGlvbmFsUHJvcGVydGllczoge1xuICAgIHR5cGU6ICdjaGVja2JveCdcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2hlY2tib3g7XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyKGhhbmRsZXIsIGV2ZW50KSB7XG4gIGNvbnN0IGNoZWNrZWQgPSB0aGlzLmlzQ2hlY2tlZCgpLFxuICAgICAgICBwcmV2ZW50RGVmYXVsdCA9IGhhbmRsZXIoY2hlY2tlZCk7XG5cbiAgcmV0dXJuIHByZXZlbnREZWZhdWx0O1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBJbnB1dEVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnB1dEVsZW1lbnQnKTtcblxuY2xhc3MgSW5wdXQgZXh0ZW5kcyBJbnB1dEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgY2hhbmdlSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIGlmIChjaGFuZ2VIYW5kbGVyKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIGNsb25lKGNoYW5nZUhhbmRsZXIpIHsgcmV0dXJuIElucHV0LmNsb25lKHRoaXMsIGNoYW5nZUhhbmRsZXIpOyB9XG5cbiAgZ2V0VmFsdWUoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQudmFsdWU7IH1cbiAgXG4gIGdldFNlbGVjdGlvblN0YXJ0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnNlbGVjdGlvblN0YXJ0OyB9XG4gIFxuICBnZXRTZWxlY3Rpb25FbmQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0aW9uRW5kOyB9XG4gIFxuICBzZXRWYWx1ZSh2YWx1ZSkgeyB0aGlzLmRvbUVsZW1lbnQudmFsdWUgPSB2YWx1ZTsgfVxuICBcbiAgc2V0U2VsZWN0aW9uU3RhcnQoc2VsZWN0aW9uU3RhcnQpIHsgdGhpcy5kb21FbGVtZW50LnNlbGVjdGlvblN0YXJ0ID0gc2VsZWN0aW9uU3RhcnQ7IH1cbiAgXG4gIHNldFNlbGVjdGlvbkVuZChzZWxlY3Rpb25FbmQpIHsgdGhpcy5kb21FbGVtZW50LnNlbGVjdGlvbkVuZCA9IHNlbGVjdGlvbkVuZDsgfVxuXG4gIG9uQ2hhbmdlKGhhbmRsZXIpIHtcbiAgICBpZiAoaGFuZGxlci5pbnRlcm1lZGlhdGVIYW5kbGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhbmRsZXIuaW50ZXJtZWRpYXRlSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVDaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgdGhpcy5vbignY2hhbmdlJywgaGFuZGxlcik7XG4gIH1cblxuICBvZmZDaGFuZ2UoaGFuZGxlcikge1xuICAgIHRoaXMub2ZmKCdjaGFuZ2UnLCBoYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBjbG9uZShlbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5jbG9uZShJbnB1dCwgZWxlbWVudCwgY2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbUhUTUwoaHRtbCwgY2hhbmdlSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbUhUTUwoSW5wdXQsIGh0bWwsIGNoYW5nZUhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21ET01FbGVtZW50KGRvbUVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21ET01FbGVtZW50KElucHV0LCBkb21FbGVtZW50LCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICBwcm9wZXJ0aWVzID0gQ2xhc3M7XG4gICAgICBDbGFzcyA9IElucHV0O1xuICAgIH1cblxuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMpO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oSW5wdXQsIHtcbiAgdGFnTmFtZTogJ2lucHV0JyxcbiAgY3VzdG9tSGFuZGxlck5hbWVzOiBbXG4gICAgJ29uQ2hhbmdlJ1xuICBdXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnB1dDtcblxuZnVuY3Rpb24gZGVmYXVsdEludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIoaGFuZGxlciwgZXZlbnQpIHtcbiAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgIHByZXZlbnREZWZhdWx0ID0gaGFuZGxlcih2YWx1ZSk7XG5cbiAgcmV0dXJuIHByZXZlbnREZWZhdWx0O1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBJbnB1dEVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnB1dEVsZW1lbnQnKTtcblxuY2xhc3MgTGluayBleHRlbmRzIElucHV0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBjbGlja0hhbmRsZXIpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICBpZiAoY2xpY2tIYW5kbGVyKSB7XG4gICAgICB0aGlzLm9uQ2xpY2soY2xpY2tIYW5kbGVyKTtcbiAgICB9XG4gIH1cblxuICBjbG9uZShjbGlja0hhbmRsZXIpIHsgcmV0dXJuIExpbmsuY2xvbmUodGhpcywgY2xpY2tIYW5kbGVyKTsgfVxuXG4gIG9uQ2xpY2soaGFuZGxlcikge1xuICAgIGlmIChoYW5kbGVyLmludGVybWVkaWF0ZUhhbmRsZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFuZGxlci5pbnRlcm1lZGlhdGVIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZUNsaWNrSGFuZGxlci5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLm9uKCdjbGljaycsIGhhbmRsZXIpO1xuICB9XG4gIFxuICBvZmZDbGljayhoYW5kbGVyKSB7XG4gICAgdGhpcy5vZmYoJ2NsaWNrJywgaGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgY2xvbmUoZWxlbWVudCwgY2xpY2tIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5jbG9uZShMaW5rLCBlbGVtZW50LCBjbGlja0hhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwsIGNsaWNrSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbUhUTUwoTGluaywgaHRtbCwgY2xpY2tIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50LCBjbGlja0hhbmRsZXIpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21ET01FbGVtZW50KExpbmssIGRvbUVsZW1lbnQsIGNsaWNrSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcHJvcGVydGllcyA9IENsYXNzO1xuICAgICAgQ2xhc3MgPSBMaW5rO1xuICAgIH1cblxuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMpO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oTGluaywge1xuICB0YWdOYW1lOiAnYScsXG4gIGN1c3RvbUhhbmRsZXJOYW1lczogW1xuICAgICdvbkNsaWNrJ1xuICBdXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBMaW5rO1xuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlQ2xpY2tIYW5kbGVyKGhhbmRsZXIsIGV2ZW50KSB7XG4gIGNvbnN0IGhyZWYgPSB0aGlzLmdldEF0dHJpYnV0ZSgnaHJlZicpLFxuICAgICAgICBwcmV2ZW50RGVmYXVsdCA9IGhhbmRsZXIoaHJlZik7XG5cbiAgcmV0dXJuIHByZXZlbnREZWZhdWx0O1xufSIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgSW5wdXRFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW5wdXRFbGVtZW50Jyk7XG5cbmNsYXNzIFNlbGVjdCBleHRlbmRzIElucHV0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgaWYgKGNoYW5nZUhhbmRsZXIpIHtcbiAgICAgIHRoaXMub25DaGFuZ2UoY2hhbmdlSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgY2xvbmUoY2hhbmdlSGFuZGxlcikgeyByZXR1cm4gU2VsZWN0LmNsb25lKHRoaXMsIGNoYW5nZUhhbmRsZXIpOyB9XG5cbiAgZ2V0U2VsZWN0ZWRPcHRpb25WYWx1ZSgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC52YWx1ZTsgfSAvLy9cblxuICBzZXRTZWxlY3RlZE9wdGlvbkJ5VmFsdWUodmFsdWUpIHsgdGhpcy5kb21FbGVtZW50LnZhbHVlID0gdmFsdWU7IH0gLy8vXG5cbiAgb25DaGFuZ2UoaGFuZGxlcikge1xuICAgIGlmIChoYW5kbGVyLmludGVybWVkaWF0ZUhhbmRsZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFuZGxlci5pbnRlcm1lZGlhdGVIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5vbignY2hhbmdlJywgaGFuZGxlcik7XG4gIH1cbiAgXG4gIG9mZkNoYW5nZShoYW5kbGVyKSB7XG4gICAgdGhpcy5vZmYoJ2NoYW5nZScsIGhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGNsb25lKGVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmNsb25lKFNlbGVjdCwgZWxlbWVudCwgY2hhbmdlSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbUhUTUwoaHRtbCwgY2hhbmdlSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbUhUTUwoU2VsZWN0LCBodG1sLCBjaGFuZ2VIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50LCBjaGFuZ2VIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tRE9NRWxlbWVudChTZWxlY3QsIGRvbUVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHByb3BlcnRpZXMgPSBDbGFzcztcbiAgICAgIENsYXNzID0gU2VsZWN0O1xuICAgIH1cblxuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMpO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oU2VsZWN0LCB7XG4gIHRhZ05hbWU6ICdzZWxlY3QnLFxuICBjdXN0b21IYW5kbGVyTmFtZXM6IFtcbiAgICAnb25DaGFuZ2UnXG4gIF1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNlbGVjdDtcblxuZnVuY3Rpb24gZGVmYXVsdEludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIoaGFuZGxlciwgZXZlbnQpIHtcbiAgY29uc3Qgc2VsZWN0ZWRPcHRpb25WYWx1ZSA9IHRoaXMuZ2V0U2VsZWN0ZWRPcHRpb25WYWx1ZSgpLFxuICAgICAgICBwcmV2ZW50RGVmYXVsdCA9IGhhbmRsZXIoc2VsZWN0ZWRPcHRpb25WYWx1ZSk7XG5cbiAgcmV0dXJuIHByZXZlbnREZWZhdWx0O1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBJbnB1dEVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnB1dEVsZW1lbnQnKTtcblxuY2xhc3MgVGV4dGFyZWEgZXh0ZW5kcyBJbnB1dEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgY2hhbmdlSGFuZGxlciwgc2Nyb2xsSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIGlmIChjaGFuZ2VIYW5kbGVyKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIpO1xuICAgIH1cblxuICAgIGlmIChzY3JvbGxIYW5kbGVyKSB7XG4gICAgICB0aGlzLm9uU2Nyb2xsKHNjcm9sbEhhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIGNsb25lKGNoYW5nZUhhbmRsZXIpIHsgcmV0dXJuIFRleHRhcmVhLmNsb25lKHRoaXMsIGNoYW5nZUhhbmRsZXIpOyB9XG5cbiAgZ2V0VmFsdWUoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQudmFsdWU7IH1cbiAgXG4gIGdldFNlbGVjdGlvblN0YXJ0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnNlbGVjdGlvblN0YXJ0OyB9XG4gIFxuICBnZXRTZWxlY3Rpb25FbmQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0aW9uRW5kOyB9XG4gIFxuICBnZXRTY3JvbGxUb3AoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuc2Nyb2xsVG9wOyB9XG4gIFxuICBnZXRTY3JvbGxMZWZ0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnNjcm9sbExlZnQ7IH1cblxuICBzZXRWYWx1ZSh2YWx1ZSkgeyB0aGlzLmRvbUVsZW1lbnQudmFsdWUgPSB2YWx1ZTsgfVxuICBcbiAgc2V0U2VsZWN0aW9uU3RhcnQoc2VsZWN0aW9uU3RhcnQpIHsgdGhpcy5kb21FbGVtZW50LnNlbGVjdGlvblN0YXJ0ID0gc2VsZWN0aW9uU3RhcnQ7IH1cbiAgXG4gIHNldFNlbGVjdGlvbkVuZChzZWxlY3Rpb25FbmQpIHsgdGhpcy5kb21FbGVtZW50LnNlbGVjdGlvbkVuZCA9IHNlbGVjdGlvbkVuZDsgfVxuICBcbiAgc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCkgeyB0aGlzLmRvbUVsZW1lbnQuc2Nyb2xsVG9wID0gc2Nyb2xsVG9wOyB9XG4gIFxuICBzZXRTY3JvbGxMZWZ0KHNjcm9sbExlZnQpIHsgdGhpcy5kb21FbGVtZW50LnNjcm9sbExlZnQgPSBzY3JvbGxMZWZ0OyB9XG5cbiAgb25DaGFuZ2UoaGFuZGxlcikge1xuICAgIGlmIChoYW5kbGVyLmludGVybWVkaWF0ZUhhbmRsZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaGFuZGxlci5pbnRlcm1lZGlhdGVIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5vbignY2hhbmdlJywgaGFuZGxlcik7XG4gIH1cblxuICBvZmZDaGFuZ2UoaGFuZGxlcikge1xuICAgIHRoaXMub2ZmKCdjaGFuZ2UnLCBoYW5kbGVyKTtcbiAgfVxuXG4gIG9uU2Nyb2xsKGhhbmRsZXIpIHtcbiAgICBpZiAoaGFuZGxlci5pbnRlcm1lZGlhdGVIYW5kbGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGhhbmRsZXIuaW50ZXJtZWRpYXRlSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVTY3JvbGxIYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgdGhpcy5vbignc2Nyb2xsJywgaGFuZGxlcik7XG4gIH1cblxuICBvZmZTY3JvbGwoaGFuZGxlcikge1xuICAgIHRoaXMub2ZmKCdzY3JvbGwnLCBoYW5kbGVyKTtcbiAgfVxuXG4gIG9uUmVzaXplKHJlc2l6ZUhhbmRsZXIpIHt9XG4gIFxuICBvZmZSZXNpemUocmVzaXplSGFuZGxlcikge31cblxuICBzdGF0aWMgY2xvbmUoZWxlbWVudCwgY2hhbmdlSGFuZGxlciwgc2Nyb2xsSGFuZGxlcikge1xuICAgIHJldHVybiBJbnB1dEVsZW1lbnQuY2xvbmUoVGV4dGFyZWEsIGVsZW1lbnQsIGNoYW5nZUhhbmRsZXIsIHNjcm9sbEhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21IVE1MKGh0bWwsIGNoYW5nZUhhbmRsZXIsIHNjcm9sbEhhbmRsZXIpIHtcbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21IVE1MKFRleHRhcmVhLCBodG1sLCBjaGFuZ2VIYW5kbGVyLCBzY3JvbGxIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50LCBjaGFuZ2VIYW5kbGVyLCBzY3JvbGxIYW5kbGVyKSB7XG4gICAgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tRE9NRWxlbWVudChUZXh0YXJlYSwgZG9tRWxlbWVudCwgY2hhbmdlSGFuZGxlciwgc2Nyb2xsSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcHJvcGVydGllcyA9IENsYXNzO1xuICAgICAgQ2xhc3MgPSBUZXh0YXJlYTtcbiAgICB9XG5cbiAgICByZXR1cm4gSW5wdXRFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzKTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFRleHRhcmVhLCB7XG4gIHRhZ05hbWU6ICd0ZXh0YXJlYScsXG4gIGN1c3RvbUhhbmRsZXJOYW1lczogW1xuICAgICdvbkNoYW5nZScsXG4gICAgJ29uU2Nyb2xsJ1xuICBdXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0YXJlYTtcblxuZnVuY3Rpb24gZGVmYXVsdEludGVybWVkaWF0ZUNoYW5nZUhhbmRsZXIoaGFuZGxlciwgZXZlbnQpIHtcbiAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgIHByZXZlbnREZWZhdWx0ID0gaGFuZGxlcih2YWx1ZSk7XG5cbiAgcmV0dXJuIHByZXZlbnREZWZhdWx0O1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlU2Nyb2xsSGFuZGxlcihoYW5kbGVyLCBldmVudCkge1xuICBjb25zdCBzY3JvbGxUb3AgPSB0aGlzLmdldFNjcm9sbFRvcCgpLFxuICAgICAgICBzY3JvbGxMZWZ0ID0gdGhpcy5nZXRTY3JvbGxMZWZ0KCksXG4gICAgICAgIHByZXZlbnREZWZhdWx0ID0gaGFuZGxlcihzY3JvbGxUb3AsIHNjcm9sbExlZnQpO1xuXG4gIHJldHVybiBwcmV2ZW50RGVmYXVsdDtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgQm91bmRzIHtcbiAgY29uc3RydWN0b3IodG9wLCBsZWZ0LCBib3R0b20sIHJpZ2h0KSB7XG4gICAgdGhpcy50b3AgPSB0b3A7XG4gICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgICB0aGlzLmJvdHRvbSA9IGJvdHRvbTtcbiAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XG4gIH1cblxuICBnZXRUb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9wO1xuICB9XG5cbiAgZ2V0TGVmdCgpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0O1xuICB9XG5cbiAgZ2V0Qm90dG9tKCkge1xuICAgIHJldHVybiB0aGlzLmJvdHRvbTtcbiAgfVxuXG4gIGdldFJpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLnJpZ2h0O1xuICB9XG5cbiAgaXNPdmVybGFwcGluZ01vdXNlKG1vdXNlVG9wLCBtb3VzZUxlZnQpIHtcbiAgICByZXR1cm4gKCAgKHRoaXMudG9wIDwgbW91c2VUb3ApICYmXG4gICAgICAgICAgICAgICh0aGlzLmxlZnQgPCBtb3VzZUxlZnQpICYmXG4gICAgICAgICAgICAgICh0aGlzLmJvdHRvbSA+IG1vdXNlVG9wKSAmJlxuICAgICAgICAgICAgICAodGhpcy5yaWdodCA+IG1vdXNlTGVmdCkgICk7XG4gIH1cblxuICBhcmVPdmVybGFwcGluZyhib3VuZHMpIHtcbiAgICByZXR1cm4gKCAgKHRoaXMudG9wIDwgYm91bmRzLmJvdHRvbSkgJiZcbiAgICAgICAgICAgICAgKHRoaXMubGVmdCA8IGJvdW5kcy5yaWdodCkgJiZcbiAgICAgICAgICAgICAgKHRoaXMuYm90dG9tID4gYm91bmRzLnRvcCkgJiZcbiAgICAgICAgICAgICAgKHRoaXMucmlnaHQgPiBib3VuZHMubGVmdCkgICk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJvdW5kaW5nQ2xpZW50UmVjdChib3VuZGluZ0NsaWVudFJlY3QpIHtcbiAgICBjb25zdCB0b3AgPSBib3VuZGluZ0NsaWVudFJlY3QudG9wLFxuICAgICAgICAgIGxlZnQgPSBib3VuZGluZ0NsaWVudFJlY3QubGVmdCxcbiAgICAgICAgICBib3R0b20gPSBib3VuZGluZ0NsaWVudFJlY3QuYm90dG9tLFxuICAgICAgICAgIHJpZ2h0ID0gYm91bmRpbmdDbGllbnRSZWN0LnJpZ2h0LFxuICAgICAgICAgIGJvdW5kcyA9IG5ldyBCb3VuZHModG9wLCBsZWZ0LCBib3R0b20sIHJpZ2h0KTtcblxuICAgIHJldHVybiBib3VuZHM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCb3VuZHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIE9mZnNldCB7XG4gIGNvbnN0cnVjdG9yKHRvcCwgbGVmdCkge1xuICAgIHRoaXMudG9wID0gdG9wO1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gIH1cblxuICBnZXRUb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9wO1xuICB9XG5cbiAgZ2V0TGVmdCgpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gT2Zmc2V0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBvbkNsaWNrKGhhbmRsZXIpIHtcbiAgaWYgKGhhbmRsZXIuaW50ZXJtZWRpYXRlSGFuZGxlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgaGFuZGxlci5pbnRlcm1lZGlhdGVIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZUhhbmRsZXI7XG4gIH1cbiAgXG4gIHRoaXMub24oJ2NsaWNrJywgaGFuZGxlcik7IFxufVxuXG5mdW5jdGlvbiBvZmZDbGljayhoYW5kbGVyKSB7IHRoaXMub2ZmKCdjbGljaycsIGhhbmRsZXIpOyB9XG5cbmNvbnN0IGNsaWNrTWl4aW4gPSB7XG4gIG9uQ2xpY2s6IG9uQ2xpY2ssXG4gIG9mZkNsaWNrOiBvZmZDbGlja1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBjbGlja01peGluO1xuXG5mdW5jdGlvbiBkZWZhdWx0SW50ZXJtZWRpYXRlSGFuZGxlcihoYW5kbGVyLCBldmVudCkge1xuICBjb25zdCBtb3VzZVRvcCA9IGV2ZW50LnBhZ2VZLCAgLy8vXG4gICAgICAgIG1vdXNlTGVmdCA9IGV2ZW50LnBhZ2VYLCAvLy9cbiAgICAgICAgbW91c2VCdXR0b24gPSBldmVudC5idXR0b24sIC8vL1xuICAgICAgICBwcmV2ZW50RGVmYXVsdCA9IGhhbmRsZXIobW91c2VUb3AsIG1vdXNlTGVmdCwgbW91c2VCdXR0b24pO1xuXG4gIHJldHVybiBwcmV2ZW50RGVmYXVsdDtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gb24oZXZlbnRUeXBlcywgaGFuZGxlcikge1xuICBldmVudFR5cGVzID0gZXZlbnRUeXBlcy5zcGxpdCgnICcpOyAvLy9cblxuICBldmVudFR5cGVzLmZvckVhY2goZnVuY3Rpb24oZXZlbnRUeXBlKSB7XG4gICAgY29uc3QgYWRkRXZlbnRMaXN0ZW5lciA9IHRoaXMuYWRkSGFuZGxlcihldmVudFR5cGUsIGhhbmRsZXIpO1xuXG4gICAgaWYgKGFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgZXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpKTtcbiAgICB9XG4gIH0uYmluZCh0aGlzKSk7XG59XG5cbmZ1bmN0aW9uIG9mZihldmVudFR5cGVzLCBoYW5kbGVyKSB7XG4gIGV2ZW50VHlwZXMgPSBldmVudFR5cGVzLnNwbGl0KCcgJyk7IC8vL1xuXG4gIGV2ZW50VHlwZXMuZm9yRWFjaChmdW5jdGlvbihldmVudFR5cGUpIHtcbiAgICBjb25zdCByZW1vdmVFdmVudExpc3RlbmVyID0gdGhpcy5yZW1vdmVIYW5kbGVyKGV2ZW50VHlwZSwgaGFuZGxlcik7XG4gICAgXG4gICAgaWYgKHJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgZXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpKTtcbiAgICB9XG4gIH0uYmluZCh0aGlzKSk7XG59XG5cbmZ1bmN0aW9uIGFkZEhhbmRsZXIoZXZlbnRUeXBlLCBoYW5kbGVyKSB7XG4gIGxldCBhZGRFdmVudExpc3RlbmVyID0gZmFsc2UsXG4gICAgICBoYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbZXZlbnRUeXBlXTtcblxuICBpZiAoaGFuZGxlcnMgPT09IHVuZGVmaW5lZCkge1xuICAgIGhhbmRsZXJzID0gW107XG5cbiAgICB0aGlzLmhhbmRsZXJzTWFwW2V2ZW50VHlwZV0gPSBoYW5kbGVycztcblxuICAgIGFkZEV2ZW50TGlzdGVuZXIgPSB0cnVlO1xuICB9XG5cbiAgaGFuZGxlcnMucHVzaChoYW5kbGVyKTtcblxuICByZXR1cm4gYWRkRXZlbnRMaXN0ZW5lcjtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlSGFuZGxlcihldmVudFR5cGUsIGhhbmRsZXIpIHtcbiAgbGV0IHJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmYWxzZSxcbiAgICAgIGhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFtldmVudFR5cGVdO1xuXG4gIGlmIChoYW5kbGVycy5sZW5ndGggPT09IDApIHtcbiAgICBkZWxldGUgKHRoaXMuaGFuZGxlcnNNYXBbZXZlbnRUeXBlXSk7XG5cbiAgICByZW1vdmVFdmVudExpc3RlbmVyID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBpbmRleCA9IGhhbmRsZXJzLmluZGV4T2YoaGFuZGxlcik7XG5cbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgY29uc3QgZGVsZXRlQ291bnQgPSAxO1xuXG4gICAgICBoYW5kbGVycy5zcGxpY2UoaW5kZXgsIGRlbGV0ZUNvdW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVtb3ZlRXZlbnRMaXN0ZW5lcjtcbn1cblxuY29uc3QgZXZlbnRNaXhpbiA9IHtcbiAgb246IG9uLFxuICBvZmY6IG9mZixcbiAgYWRkSGFuZGxlcjogYWRkSGFuZGxlcixcbiAgcmVtb3ZlSGFuZGxlcjogcmVtb3ZlSGFuZGxlclxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBldmVudE1peGluO1xuXG5mdW5jdGlvbiBldmVudExpc3RlbmVyKGV2ZW50KSB7XG4gIGNvbnN0IGV2ZW50VHlwZSA9IGV2ZW50LnR5cGUsXG4gICAgICAgIGhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFtldmVudFR5cGVdO1xuXG4gIGxldCBwcmV2ZW50RXZlbnREZWZhdWx0ID0gZmFsc2U7XG5cbiAgaGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgaWYgKGhhbmRsZXIuaW50ZXJtZWRpYXRlSGFuZGxlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBwcmV2ZW50RGVmYXVsdCA9IGhhbmRsZXIuaW50ZXJtZWRpYXRlSGFuZGxlcihoYW5kbGVyLCBldmVudCk7XG4gICAgICBcbiAgICAgIGlmIChwcmV2ZW50RGVmYXVsdCA9PT0gdHJ1ZSkge1xuICAgICAgICBwcmV2ZW50RXZlbnREZWZhdWx0ID0gdHJ1ZTtcbiAgICAgIH0gIFxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwcmV2ZW50RGVmYXVsdCA9IGhhbmRsZXIoZXZlbnQpO1xuICAgICAgXG4gICAgICBpZiAocHJldmVudERlZmF1bHQgPT09IHRydWUpIHtcbiAgICAgICAgcHJldmVudEV2ZW50RGVmYXVsdCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgXG4gIGlmIChwcmV2ZW50RXZlbnREZWZhdWx0KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBhcHBseVByb3BlcnRpZXMocHJvcGVydGllcywgY3VzdG9tSGFuZGxlck5hbWVzLCBhZGRpdGlvbmFsUHJvcGVydGllcykge1xuICB0aGlzLnByb3BlcnRpZXMgPSB7fTtcbiAgXG4gIE9iamVjdC5hc3NpZ24ocHJvcGVydGllcywgYWRkaXRpb25hbFByb3BlcnRpZXMpO1xuXG4gIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXMocHJvcGVydGllcyk7XG5cbiAgbmFtZXMuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgaWYgKG5hbWUgPT09ICdjaGlsZEVsZW1lbnRzJykge1xuICAgICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHByb3BlcnRpZXNbJ2NoaWxkRWxlbWVudHMnXTtcblxuICAgICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkRWxlbWVudCkge1xuICAgICAgICB0aGlzLmFwcGVuZChjaGlsZEVsZW1lbnQpO1xuICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdmFsdWUgPSBwcm9wZXJ0aWVzW25hbWVdO1xuXG4gICAgICBpZiAoZmFsc2UpIHtcblxuICAgICAgfSBlbHNlIGlmIChpc0N1c3RvbUhhbmRsZXJOYW1lKG5hbWUsIGN1c3RvbUhhbmRsZXJOYW1lcykpIHtcbiAgICAgICAgYWRkQ3VzdG9tSGFuZGxlcih0aGlzLCBuYW1lLCB2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKGlzSGFuZGxlck5hbWUobmFtZSkpIHtcbiAgICAgICAgYWRkSGFuZGxlcih0aGlzLCBuYW1lLCB2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKGlzQXR0cmlidXRlTmFtZShuYW1lKSkge1xuICAgICAgICBhZGRBdHRyaWJ1dGUodGhpcywgbmFtZSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzW25hbWVdID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9LmJpbmQodGhpcykpO1xufVxuXG5jb25zdCBqc3hNaXhpbiA9IHtcbiAgYXBwbHlQcm9wZXJ0aWVzOiBhcHBseVByb3BlcnRpZXNcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ganN4TWl4aW47XG5cbmZ1bmN0aW9uIGFkZEN1c3RvbUhhbmRsZXIoZWxlbWVudCwgbmFtZSwgdmFsdWUpIHtcbiAgY29uc3QgY3VzdG9tSGFuZGxlck5hbWUgPSBuYW1lLCAvLy9cbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHZhbHVlOyAgLy8vXG5cbiAgZWxlbWVudFtjdXN0b21IYW5kbGVyTmFtZV0oY3VzdG9tSGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIGFkZEhhbmRsZXIoZWxlbWVudCwgbmFtZSwgdmFsdWUpIHtcbiAgY29uc3QgZXZlbnRUeXBlID0gbmFtZS5zdWJzdHIoMikudG9Mb3dlckNhc2UoKSwgLy8vXG4gICAgICAgIGhhbmRsZXIgPSB2YWx1ZTsgIC8vL1xuXG4gIGVsZW1lbnQub24oZXZlbnRUeXBlLCBoYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gYWRkQXR0cmlidXRlKGVsZW1lbnQsIG5hbWUsIHZhbHVlKSB7XG4gIGlmIChuYW1lID09PSAnY2xhc3NOYW1lJykge1xuICAgIG5hbWUgPSAnY2xhc3MnO1xuICB9XG5cbiAgaWYgKG5hbWUgPT09ICdodG1sRm9yJykge1xuICAgIG5hbWUgPSAnZm9yJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcblxuICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBlbGVtZW50LmRvbUVsZW1lbnRbbmFtZV1ba2V5XSA9IHZhbHVlW2tleV07XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJykge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdmFsdWUgPSBuYW1lOyAvLy9cblxuICAgICAgZWxlbWVudC5hZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50LmFkZEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNDdXN0b21IYW5kbGVyTmFtZShuYW1lLCBjdXN0b21IYW5kbGVyTmFtZXMpIHtcbiAgcmV0dXJuIChjdXN0b21IYW5kbGVyTmFtZXMgJiYgY3VzdG9tSGFuZGxlck5hbWVzLmluY2x1ZGVzKG5hbWUpKTtcbn1cblxuZnVuY3Rpb24gaXNIYW5kbGVyTmFtZShuYW1lKSB7XG4gIHJldHVybiBuYW1lLm1hdGNoKC9eb24vKTtcbn1cblxuZnVuY3Rpb24gaXNBdHRyaWJ1dGVOYW1lKG5hbWUpIHtcbiAgcmV0dXJuIGF0dHJpYnV0ZU5hbWVzLmluY2x1ZGVzKG5hbWUpO1xufVxuXG5jb25zdCBhdHRyaWJ1dGVOYW1lcyA9IFtcbiAgJ2FjY2VwdCcsICdhY2NlcHRDaGFyc2V0JywgJ2FjY2Vzc0tleScsICdhY3Rpb24nLCAnYWxsb3dGdWxsU2NyZWVuJywgJ2FsbG93VHJhbnNwYXJlbmN5JywgJ2FsdCcsICdhc3luYycsICdhdXRvQ29tcGxldGUnLCAnYXV0b0ZvY3VzJywgJ2F1dG9QbGF5JyxcbiAgJ2NhcHR1cmUnLCAnY2VsbFBhZGRpbmcnLCAnY2VsbFNwYWNpbmcnLCAnY2hhbGxlbmdlJywgJ2NoYXJTZXQnLCAnY2hlY2tlZCcsICdjaXRlJywgJ2NsYXNzSUQnLCAnY2xhc3NOYW1lJywgJ2NvbFNwYW4nLCAnY29scycsICdjb250ZW50JywgJ2NvbnRlbnRFZGl0YWJsZScsICdjb250ZXh0TWVudScsICdjb250cm9scycsICdjb29yZHMnLCAnY3Jvc3NPcmlnaW4nLFxuICAnZGF0YScsICdkYXRlVGltZScsICdkZWZhdWx0JywgJ2RlZmVyJywgJ2RpcicsICdkaXNhYmxlZCcsICdkb3dubG9hZCcsICdkcmFnZ2FibGUnLFxuICAnZW5jVHlwZScsXG4gICdmb3JtJywgJ2Zvcm1BY3Rpb24nLCAnZm9ybUVuY1R5cGUnLCAnZm9ybU1ldGhvZCcsICdmb3JtTm9WYWxpZGF0ZScsICdmb3JtVGFyZ2V0JywgJ2ZyYW1lQm9yZGVyJyxcbiAgJ2hlYWRlcnMnLCAnaGVpZ2h0JywgJ2hpZGRlbicsICdoaWdoJywgJ2hyZWYnLCAnaHJlZkxhbmcnLCAnaHRtbEZvcicsICdodHRwRXF1aXYnLFxuICAnaWNvbicsICdpZCcsICdpbnB1dE1vZGUnLCAnaW50ZWdyaXR5JywgJ2lzJyxcbiAgJ2tleVBhcmFtcycsICdrZXlUeXBlJywgJ2tpbmQnLFxuICAnbGFiZWwnLCAnbGFuZycsICdsaXN0JywgJ2xvb3AnLCAnbG93JyxcbiAgJ21hbmlmZXN0JywgJ21hcmdpbkhlaWdodCcsICdtYXJnaW5XaWR0aCcsICdtYXgnLCAnbWF4TGVuZ3RoJywgJ21lZGlhJywgJ21lZGlhR3JvdXAnLCAnbWV0aG9kJywgJ21pbicsICdtaW5MZW5ndGgnLCAnbXVsdGlwbGUnLCAnbXV0ZWQnLFxuICAnbmFtZScsICdub1ZhbGlkYXRlJywgJ25vbmNlJyxcbiAgJ29wZW4nLCAnb3B0aW11bScsXG4gICdwYXR0ZXJuJywgJ3BsYWNlaG9sZGVyJywgJ3Bvc3RlcicsICdwcmVsb2FkJywgJ3Byb2ZpbGUnLFxuICAncmFkaW9Hcm91cCcsICdyZWFkT25seScsICdyZWwnLCAncmVxdWlyZWQnLCAncmV2ZXJzZWQnLCAncm9sZScsICdyb3dTcGFuJywgJ3Jvd3MnLFxuICAnc2FuZGJveCcsICdzY29wZScsICdzY29wZWQnLCAnc2Nyb2xsaW5nJywgJ3NlYW1sZXNzJywgJ3NlbGVjdGVkJywgJ3NoYXBlJywgJ3NpemUnLCAnc2l6ZXMnLCAnc3BhbicsICdzcGVsbENoZWNrJywgJ3NyYycsICdzcmNEb2MnLCAnc3JjTGFuZycsICdzcmNTZXQnLCAnc3RhcnQnLCAnc3RlcCcsICdzdHlsZScsICdzdW1tYXJ5JyxcbiAgJ3RhYkluZGV4JywgJ3RhcmdldCcsICd0aXRsZScsICd0eXBlJyxcbiAgJ3VzZU1hcCcsXG4gICd2YWx1ZScsXG4gICd3aWR0aCcsXG4gICd3bW9kZScsXG4gICd3cmFwJ1xuXTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gb25Nb3VzZVVwKGhhbmRsZXIpIHtcbiAgaWYgKGhhbmRsZXIuaW50ZXJtZWRpYXRlSGFuZGxlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgaGFuZGxlci5pbnRlcm1lZGlhdGVIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZUhhbmRsZXI7XG4gIH1cbiAgXG4gIHRoaXMub24oJ21vdXNldXAnLCBoYW5kbGVyKTsgXG59XG5cbmZ1bmN0aW9uIG9uTW91c2VEb3duKGhhbmRsZXIpIHtcbiAgaWYgKGhhbmRsZXIuaW50ZXJtZWRpYXRlSGFuZGxlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgaGFuZGxlci5pbnRlcm1lZGlhdGVIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZUhhbmRsZXI7XG4gIH1cblxuICB0aGlzLm9uKCdtb3VzZWRvd24nLCBoYW5kbGVyKTsgXG59XG5cbmZ1bmN0aW9uIG9uTW91c2VPdmVyKGhhbmRsZXIpIHtcbiAgaWYgKGhhbmRsZXIuaW50ZXJtZWRpYXRlSGFuZGxlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgaGFuZGxlci5pbnRlcm1lZGlhdGVIYW5kbGVyID0gZGVmYXVsdEludGVybWVkaWF0ZUhhbmRsZXI7XG4gIH1cblxuICB0aGlzLm9uKCdtb3VzZW92ZXInLCBoYW5kbGVyKTsgXG59XG5cbmZ1bmN0aW9uIG9uTW91c2VPdXQoaGFuZGxlcikge1xuICBpZiAoaGFuZGxlci5pbnRlcm1lZGlhdGVIYW5kbGVyID09PSB1bmRlZmluZWQpIHtcbiAgICBoYW5kbGVyLmludGVybWVkaWF0ZUhhbmRsZXIgPSBkZWZhdWx0SW50ZXJtZWRpYXRlSGFuZGxlcjtcbiAgfVxuXG4gIHRoaXMub24oJ21vdXNlb3V0JywgaGFuZGxlcik7IFxufVxuXG5mdW5jdGlvbiBvbk1vdXNlTW92ZShoYW5kbGVyKSB7XG4gIGlmIChoYW5kbGVyLmludGVybWVkaWF0ZUhhbmRsZXIgPT09IHVuZGVmaW5lZCkge1xuICAgIGhhbmRsZXIuaW50ZXJtZWRpYXRlSGFuZGxlciA9IGRlZmF1bHRJbnRlcm1lZGlhdGVIYW5kbGVyO1xuICB9XG5cbiAgdGhpcy5vbignbW91c2Vtb3ZlJywgaGFuZGxlcik7IFxufVxuXG5mdW5jdGlvbiBvZmZNb3VzZVVwKGhhbmRsZXIpIHsgdGhpcy5vZmYoJ21vdXNldXAnLCBoYW5kbGVyKTsgfVxuXG5mdW5jdGlvbiBvZmZNb3VzZURvd24oaGFuZGxlcikgeyB0aGlzLm9mZignbW91c2Vkb3duJywgaGFuZGxlcik7IH1cblxuZnVuY3Rpb24gb2ZmTW91c2VPdmVyKGhhbmRsZXIpIHsgdGhpcy5vZmYoJ21vdXNlb3ZlcicsIGhhbmRsZXIpOyB9XG5cbmZ1bmN0aW9uIG9mZk1vdXNlT3V0KGhhbmRsZXIpIHsgdGhpcy5vZmYoJ21vdXNlb3V0JywgaGFuZGxlcik7IH1cblxuZnVuY3Rpb24gb2ZmTW91c2VNb3ZlKGhhbmRsZXIpIHsgdGhpcy5vZmYoJ21vdXNlbW92ZScsIGhhbmRsZXIpOyB9XG5cbmNvbnN0IG1vdXNlTWl4aW4gPSB7XG4gIG9uTW91c2VVcDogb25Nb3VzZVVwLFxuICBvbk1vdXNlRG93bjogb25Nb3VzZURvd24sXG4gIG9uTW91c2VPdmVyOiBvbk1vdXNlT3ZlcixcbiAgb25Nb3VzZU91dDogb25Nb3VzZU91dCxcbiAgb25Nb3VzZU1vdmU6IG9uTW91c2VNb3ZlLFxuICBvZmZNb3VzZVVwOiBvZmZNb3VzZVVwLFxuICBvZmZNb3VzZURvd246IG9mZk1vdXNlRG93bixcbiAgb2ZmTW91c2VPdmVyOiBvZmZNb3VzZU92ZXIsXG4gIG9mZk1vdXNlT3V0OiBvZmZNb3VzZU91dCxcbiAgb2ZmTW91c2VNb3ZlOiBvZmZNb3VzZU1vdmVcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbW91c2VNaXhpbjtcblxuZnVuY3Rpb24gZGVmYXVsdEludGVybWVkaWF0ZUhhbmRsZXIoaGFuZGxlciwgZXZlbnQpIHtcbiAgY29uc3QgbW91c2VUb3AgPSBldmVudC5wYWdlWSwgIC8vL1xuICAgICAgICBtb3VzZUxlZnQgPSBldmVudC5wYWdlWCwgLy8vXG4gICAgICAgIG1vdXNlQnV0dG9uID0gZXZlbnQuYnV0dG9uLCAvLy9cbiAgICAgICAgcHJldmVudERlZmF1bHQgPSBoYW5kbGVyKG1vdXNlVG9wLCBtb3VzZUxlZnQsIG1vdXNlQnV0dG9uKTtcblxuICByZXR1cm4gcHJldmVudERlZmF1bHQ7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIG9uUmVzaXplKGhhbmRsZXIpIHtcbiAgY29uc3QgZXZlbnRUeXBlID0gJ3Jlc2l6ZScsXG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXIgPSB0aGlzLmFkZEhhbmRsZXIoZXZlbnRUeXBlLCBoYW5kbGVyKTtcblxuICBpZiAoYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgIGFwcGVuZFJlc2l6ZU9iamVjdCh0aGlzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvZmZSZXNpemUoaGFuZGxlcikge1xuICBjb25zdCBldmVudFR5cGUgPSAncmVzaXplJyxcbiAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lciA9IHRoaXMucmVtb3ZlSGFuZGxlcihldmVudFR5cGUsIGhhbmRsZXIpO1xuXG4gIGlmIChyZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgcmVtb3ZlUmVzaXplT2JqZWN0KHRoaXMpO1xuICB9XG59XG5cbmNvbnN0IHJlc2l6ZU1peGluID0ge1xuICBvblJlc2l6ZTogb25SZXNpemUsXG4gIG9mZlJlc2l6ZTogb2ZmUmVzaXplXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlc2l6ZU1peGluO1xuXG5mdW5jdGlvbiBhcHBlbmRSZXNpemVPYmplY3QoZWxlbWVudCkge1xuICBjb25zdCByZXNpemVPYmplY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvYmplY3QnKSxcbiAgICAgICAgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudCxcbiAgICAgICAgc3R5bGUgPSBgIGRpc3BsYXk6IGJsb2NrOyBcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gICAgICAgICAgICAgICAgICB0b3A6IDA7IFxuICAgICAgICAgICAgICAgICAgbGVmdDogMDsgXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7IFxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7IFxuICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsgXG4gICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgXG4gICAgICAgICAgICAgICAgICB6LWluZGV4OiAtMTtgO1xuXG4gIHJlc2l6ZU9iamVjdC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgc3R5bGUpO1xuICByZXNpemVPYmplY3QuZGF0YSA9ICdhYm91dDpibGFuayc7XG4gIHJlc2l6ZU9iamVjdC50eXBlID0gJ3RleHQvaHRtbCc7XG5cbiAgZWxlbWVudC5fX3Jlc2l6ZU9iamVjdF9fID0gcmVzaXplT2JqZWN0O1xuXG4gIHJlc2l6ZU9iamVjdC5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICByZXNpemVPYmplY3RMb2FkSGFuZGxlcihlbGVtZW50KVxuICB9O1xuXG4gIGRvbUVsZW1lbnQuYXBwZW5kQ2hpbGQocmVzaXplT2JqZWN0KTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlUmVzaXplT2JqZWN0KGVsZW1lbnQpIHtcbiAgY29uc3QgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudCxcbiAgICAgICAgcmVzaXplT2JqZWN0ID0gZWxlbWVudC5fX3Jlc2l6ZU9iamVjdF9fLFxuICAgICAgICBvYmplY3RXaW5kb3cgPSByZXNpemVPYmplY3QuY29udGVudERvY3VtZW50LmRlZmF1bHRWaWV3OyAgLy8vXG5cbiAgb2JqZWN0V2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUxpc3RlbmVyKTtcblxuICBkb21FbGVtZW50LnJlbW92ZUNoaWxkKHJlc2l6ZU9iamVjdCk7XG59XG5cbmZ1bmN0aW9uIHJlc2l6ZU9iamVjdExvYWRIYW5kbGVyKGVsZW1lbnQpIHtcbiAgY29uc3QgcmVzaXplT2JqZWN0ID0gZWxlbWVudC5fX3Jlc2l6ZU9iamVjdF9fLFxuICAgICAgICByZXNpemVPYmplY3RXaW5kb3cgPSByZXNpemVPYmplY3QuY29udGVudERvY3VtZW50LmRlZmF1bHRWaWV3OyAgLy8vXG5cbiAgcmVzaXplT2JqZWN0V2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xuICAgIGV2ZW50TGlzdGVuZXIoZWxlbWVudCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBldmVudExpc3RlbmVyKGVsZW1lbnQpIHtcbiAgY29uc3Qgd2lkdGggPSBlbGVtZW50LmdldFdpZHRoKCksXG4gICAgICAgIGhlaWdodCA9IGVsZW1lbnQuZ2V0SGVpZ2h0KCksXG4gICAgICAgIGhhbmRsZXJzID0gZWxlbWVudC5oYW5kbGVyc01hcFsncmVzaXplJ107XG5cbiAgaGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbihoYW5kbGVyKXtcbiAgICBoYW5kbGVyKHdpZHRoLCBoZWlnaHQpO1xuICB9KTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZXZlbnRNaXhpbiA9IHJlcXVpcmUoJy4vbWl4aW4vZXZlbnQnKSxcbiAgICAgIGNsaWNrTWl4aW4gPSByZXF1aXJlKCcuL21peGluL2NsaWNrJyksXG4gICAgICBtb3VzZU1peGluID0gcmVxdWlyZSgnLi9taXhpbi9tb3VzZScpO1xuXG5jbGFzcyBXaW5kb3cge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSB3aW5kb3c7XG5cbiAgICB0aGlzLmhhbmRsZXJzTWFwID0ge307XG4gIH1cbiAgXG4gIGdldFdpZHRoKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmlubmVyV2lkdGg7IH0gLy8vXG4gIFxuICBnZXRIZWlnaHQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIZWlnaHQ7IH0gLy8vXG4gIFxuICBvblJlc2l6ZShoYW5kbGVyKSB7XG4gICAgY29uc3QgdHlwZSA9ICdyZXNpemUnLFxuICAgICAgICAgIGFkZEV2ZW50TGlzdGVuZXIgPSB0aGlzLmFkZEhhbmRsZXIodHlwZSwgaGFuZGxlcik7XG5cbiAgICBpZiAoYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpKTtcbiAgICB9XG4gIH1cblxuICBvZmZSZXNpemUoaGFuZGxlcikge1xuICAgIGNvbnN0IHR5cGUgPSAncmVzaXplJyxcbiAgICAgICAgICByZW1vdmVFdmVudExpc3RlbmVyID0gdGhpcy5yZW1vdmVIYW5kbGVyKHR5cGUsIGhhbmRsZXIpO1xuXG4gICAgaWYgKHJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGV2ZW50TGlzdGVuZXIuYmluZCh0aGlzKSk7XG4gICAgfVxuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwgZXZlbnRNaXhpbik7XG5PYmplY3QuYXNzaWduKFdpbmRvdy5wcm90b3R5cGUsIGNsaWNrTWl4aW4pO1xuT2JqZWN0LmFzc2lnbihXaW5kb3cucHJvdG90eXBlLCBtb3VzZU1peGluKTtcblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgV2luZG93KCk7ICAvLy9cblxuZnVuY3Rpb24gZXZlbnRMaXN0ZW5lcihldmVudCkge1xuICBjb25zdCB0eXBlID0gZXZlbnQudHlwZSxcbiAgICAgICAgaGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwW3R5cGVdLFxuICAgICAgICB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgaGVpZ2h0ID0gdGhpcy5nZXRIZWlnaHQoKTtcblxuICBoYW5kbGVycy5mb3JFYWNoKGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICBoYW5kbGVyKHdpZHRoLCBoZWlnaHQpO1xuICB9KTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9mcmFnbWVudGVkJyk7XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3csICdmcmFnbWVudCcsIHtcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZnJhZ21lbnQgPSB3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHIoMSksICAvLy9cbiAgICAgICAgICBmcmFnbWVudFByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihmcmFnbWVudCk7XG5cbiAgICBmcmFnbWVudFByb3RvdHlwZS5vbkNoYW5nZSA9IGZ1bmN0aW9uKGNoYW5nZUhhbmRsZXIpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgY2hhbmdlSGFuZGxlcik7XG4gICAgfTtcblxuICAgIGZyYWdtZW50UHJvdG90eXBlLm9mZkNoYW5nZSA9IGZ1bmN0aW9uKGNoYW5nZUhhbmRsZXIpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgY2hhbmdlSGFuZGxlcik7XG4gICAgfTtcblxuICAgIHJldHVybiBmcmFnbWVudDtcbiAgfSxcblxuICBzZXQ6IGZ1bmN0aW9uIChmcmFnbWVudCkge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gZnJhZ21lbnQ7ICAvLy9cbiAgfVxufSk7XG4iXX0=
