# Juxtapose

[JSX](https://facebook.github.io/react/docs/jsx-in-depth.html) support for [Easy](https://github.com/djalbat/Easy) elements.

 * [Online documentation](http://djalbat.com/juxtapose/)

## Installation

You can install Juxtapose with [npm](https://www.npmjs.com/):

    npm install juxtapose

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/Juxtapose.git

...and then install the necessary modules with npm from within the project's root directory:

    npm install

## Usage

Only building with [Node.js](http://nodejs.org) is supported, the usage is as follows:

```js
require('juxtapose');
```

Once this is done, JSX can be used directly.

## Compiling from source

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug
    
As well as building the Juxtapose library itself, this will build the examples. The source code for the two examples can be found in the `es6/examples` directory. To view the compiled examples, open the `examples.html` file in the root of the repository.
    
## Contact

- james.smith@djalbat.com
- http://djalbat.com
