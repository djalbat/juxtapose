'use strict';

require('../../index.js'); /// easyui-jsx

const JSXIsGreat = () => {
  return (

    <section>
      <nav>
        <span className="next">
          <a href="#gettingStarted">Next: Getting started</a>
        </span>
        <span className="previous">
          <a href="#introduction">Previous: Introduction</a>
        </span>
        <span>
          <a href="#contents">Contents</a>
        </span>
      </nav>
      <h2>JSX is great</h2>
      <p>
        It is because it allows you to do three crucial things:
      </p>
      <ol>
        <li>
          <strong>Associate the code that defines the view directly with the code that defines the model</strong>.
          This is much better than having a view class and a model class and having one inherit from the other, say.
          JSX allows you to inline the view code, so to speak, as well as connect it to the surrounding model code in a straightforward manner.
        </li>
        <li>
          <strong>Build up the application's view in a declarative way</strong>.
          The most likely and often the only relation between view elements is inclusion.
          This results in a tree, and JSX encodes trees.
          This won't always work, consider arcade games.
          But it works for applications with event driven user interfaces and this includes nearly all web applications.
        </li>
        <li>
          <strong>Create view elements easily without the need for constructors or factory methods</strong>.
          So there is less code and what there is likely to be more readable and maintainable.
          JSX also encourages composition and reuse.
        </li>
      </ol>
      <p>
        Also JSX just embeds well into JavaScript.
        Compare this with so called technologies such as JSP, which try to embed imperative languages in declarative ones.
        For several reasons this can be nightmarish.
        But the other way round happens to work really well.
      </p>
    </section>
      
  );  
};

module.exports = JSXIsGreat;
