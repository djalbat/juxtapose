'use strict';

require('../../easyui-jsx');

const Next = require('../next'),
      Previous = require('../previous'),
      Contents = require('../contents'),
      BlockCode = require('../blockCode'),
      InlineCode = require('../inlineCode');
  
const AGoodExampleThisDocumentation = () => {
  return (

    <section>
      <nav>
        <Next href="#theElementClass">The <InlineCode>Element</InlineCode> class</Next>
        <Previous href="#extendingAnEasyUIClass">Extending an EasyUI class</Previous>
        <Contents />
      </nav>
      <h2>The example of this documentation</h2>
      <BlockCode>{`const insertSections = () => {
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

revealSection();`}</BlockCode>
      <p>
        The <a href="https://github.com/djalbat/EasyUI-JSX/blob/master/es6/docs.js">docs.js</a> file shows how easy it is to put together a basic single page web application.
        The approach will not scale indefinitely, sooner or later the sections would have to be generated from a data source rather than be hard-coded.
      </p>
      <p>
        Nonetheless, it serves to highlight a key point, which is that all elements are instances of the <InlineCode>Element</InlineCode> class, or a class that extends it.
        In this case this means that the <InlineCode>show()</InlineCode> and <InlineCode>hide()</InlineCode> methods can been used to reveal the relevant section whenever the hash fragment changes.
      </p>
    </section>

  );
};

module.exports = AGoodExampleThisDocumentation;
