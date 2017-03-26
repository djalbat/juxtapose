# Juxtapose

JSX support for Easy elements.

Juxtapose allows you to leverage [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html) in order to create Easy elements as an alternative to [React](https://facebook.github.io/react/) or [Reaction](https://github.com/djalbat/Reaction) components. Every Easy element now supports JSX, and the use of all the Easy projects with Juxtapose is highly recommended.
 
 * [Online documentation](http://djalbat.com/juxtapose/)

### Related projects

- [Easy](https://github.com/djalbat/Easy) A V-framework.
- [Easy-Layout](https://github.com/djalbat/Easy-Layout) Layout elements that work with CSS flexbox.
- [Easy-DragAndDrop](https://github.com/djalbat/Easy-DragAndDrop) Drag and drop elements including an explorer and a rubbish bin.
- [Easy-RichTextarea](https://github.com/djalbat/Easy-RichTextarea) A textarea element that handles and hands off events well.

### Are these projects actually used anywhere?

Actually they are, here:

- [Occam Proof Assistant](http://djalbat.com/occam)

## Installation

You can install Juxtapose with [npm](https://www.npmjs.com/):

    npm install easyui-jsx

**Note that the package name is not `juxtapose` but `easyui-jsx`, at least for the time being.**

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/Juxtapose.git

...and then install the necessary modules with npm from within the project's root directory:

    npm install

## Usage

Only building with [Node.js](http://nodejs.org) is supported, the usage is as follows:

```js
require('easyui-jsx');
```

Once this is done, JSX can be used directly.

## Compiling from source

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug
    
As well as building the Juxtapose library itself, this will build a simple example, specifically the first example given in the [online documentation](http://djalbat.com/easyui-jsx/). Be careful when copying example code from the documentation and attempting to build it in order to get the other examples to work. You must replace the `require('easyui-jxs')` directive with a local `require('./easyui-jxs')` directive, since the Juxtapose npm module is not available within the project itself. Also, you should leave the `use strict` directive in place, since this is not found in the example code snippets.
 
 The `example.js` file to use can be found in the `es6` directory. To view the compiled example, open the `index.html` file in the `example/` directory.
    
## Contact

- james.smith@djalbat.com
- http://djalbat.com
