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

## Examples

There is a small development server that can be run from within the project's directory with the following command:

    npm start

The examples will then be available at the following URL:

http://localhost:8888

The source for the examples can be found in the `src/examples.js` file and corresponding `src/example` folder. You are encouraged to try the examples whilst reading what follows. You can rebuild them on the fly with the following command:

    npm run watch-debug

The development server will reload the page whenever you make changes.

One last thing to bear in mind is that this package is included by way of a relative rather than a package import. If you are importing it into your own application, however, you should use the standard package import.

## Usage

There is nothing more to do other than import the package:

```
import "juxtapose";
```

Once this is done, JSX can be used directly.

## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug
    
## Contact

* james.smith@djalbat.com
