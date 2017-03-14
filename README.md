# EasyUI-JSX

JSX support for EasyUI elements.

EasyUI-JSX allows you to leverage [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html) in order to create EasyUI elements as an alternative to [React](https://facebook.github.io/react/) or [Reaction](https://github.com/djalbat/Reaction) components. Every EasyUI element now supports JSX, and its use with them is highly recommended.

To get a better overview of EasyUI-JSX, please see the examples documentation:
 
 * https://djalbat.github.io/EasyUI-JSX/

## Related projects

- [EasyUI](https://github.com/djalbat/EasyUI) A V-framework.
- [EasyUI-Layout](https://github.com/djalbat/EasyUI-Layout) Layout elements that work with CSS flexbox.
- [EasyUI-DragAndDrop](https://github.com/djalbat/EasyUI-DragAndDrop) Drag and drop elements including an explorer and a rubbish bin.
- [EasyUI-RichTextarea](https://github.com/djalbat/EasyUI-RichTextarea) A textarea component that handles and hands off events well.

### Are these projects actually used anywhere?

Actually they are, here:

- [Occam Proof Assistant](http://djalbat.com/occam)

## Running the examples documentation locally
 
This can be done by cloning the repository and then simply opening the `index.html` page found in the repository `docs/` directory. See the sections immediately below for instructions on cloning with Git if you are not familiar with this process. It is also useful to be able to compile the examples, again see the relevant instructions below. 
    
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
    
## Contact

- james.smith@djalbat.com
- http://djalbat.com
