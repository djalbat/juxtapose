# EasyUI-JSX

JSX support for EasyUI.

EasyUI-JSX allows you to leverage [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html) in order to create EasyUI elements as an alternative to [React](https://facebook.github.io/react/) or [Reaction](https://github.com/djalbat/Reaction) components. Every EasyUI element now supports JSX, and the use of JSX with all the EasyUI projects is highly recommended.

For an overview of EasyUI-JSX, see here:
 
 * [Online documentation](https://djalbat.github.io/EasyUI-JSX/)

### Related projects

- [EasyUI](https://github.com/djalbat/EasyUI) A V-framework.
- [EasyUI-Layout](https://github.com/djalbat/EasyUI-Layout) Layout elements that work with CSS flexbox.
- [EasyUI-DragAndDrop](https://github.com/djalbat/EasyUI-DragAndDrop) Drag and drop elements including an explorer and a rubbish bin.
- [EasyUI-RichTextarea](https://github.com/djalbat/EasyUI-RichTextarea) A textarea component that handles and hands off events well.

### Are these projects actually used anywhere?

Actually they are, here:

- [Occam Proof Assistant](http://djalbat.com/occam)

## Installation

You can install EasyUI-JSX with [npm](https://www.npmjs.com/):

    npm install easyui-jsx

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/EasyUI-JSX.git

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
    
As well as building the EasyUI-JSX library itself, this will build a simple example, specifically the first example given in the [online documentation](https://djalbat.github.io/EasyUI-JSX/). Be careful when copying example code from the documentation and attempting to build it in order to get the other examples to work. You must replace the `require('easyui-jxs')` directive with a local `require('./easyui-jxs')` directive, since the EasyUI-JSX npm module is not available within the project itself. Also, you should leave the `use strict` directive in place, since this is not found in the example code snippets.
 
 The `example.js` file to use can be found in the `es6` directory. To view the compiled example, open the `index.html` file in the `example/` directory.
    
## Contact

- james.smith@djalbat.com
- http://djalbat.com
