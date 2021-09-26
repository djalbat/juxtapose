# Juxtapose

[JSX](https://facebook.github.io/react/docs/jsx-in-depth.html) support for [Easy](https://github.com/djalbat/Easy) elements.

**[Online documentation](https://juxtapose.info)**

## Installation

You can install Juxtapose with [npm](https://www.npmjs.com/):

    npm install juxtapose

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/juxtapose.git

...and then install the dependencies with npm from within the project's root directory:

    npm install

You can also run a development server, see the section on building later on.

## Usage

There is nothing more to do other than import the package:

```
import "juxtapose";
```

Once this is done, JSX can be used directly.

## Examples

The source code for the two examples can be found in the `es6/examples` directory. To view the compiled examples, open the `index.html` file.

## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug
    
You can also start a small development server:

    npm start

The examples will then be available at http://localhost:8888/ and will reload automatically when changes are made.

## Contact

- james.smith@djalbat.com
