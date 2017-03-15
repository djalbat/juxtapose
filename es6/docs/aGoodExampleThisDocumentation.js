'use strict';

require('../easyui-jsx');

const AGoodExampleThisDocumentation = () => {
  return (

    <section>
      <nav>
        <span className="next">
          <a href="#theElementClass">Next: The <code className="inline">Element</code> class</a>
        </span>
        <span className="previous">
          <a href="#extendingAnEasyUIClass">Previous: Extending an EasyUI class</a>
        </span>
        <span className="contents">
          <a href="#contents">Contents</a>
        </span>
      </nav>
      <h2>A good example, this documentation</h2>
      <code className="block">{`const insertSections = () => {
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

revealSection();`}</code>
      <p>
        The <a href="https://github.com/djalbat/EasyUI-JSX/blob/master/es6/docs.js">docs.js</a> file shows how easy it is to put together a basic single page web application.
        The approach will not scale indefinitely, sooner or later the sections would have to be generated from a data source rather than be hard-coded.
      </p>
      <p>
        Nonetheless, it serves to highlight a key point, which is that all elements are instances of the <code className="inline">Element</code> class, or a class that extends it.
        In this case this means that the <code className="inline">show()</code> and <code className="inline">hide()</code> methods can been used to reveal the relevant section whenever the hash fragment changes.
      </p>
    </section>

  );
};

module.exports = AGoodExampleThisDocumentation;
