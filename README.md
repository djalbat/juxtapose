# Juxtapose

[JSX](https://facebook.github.io/react/docs/jsx-in-depth.html) support for [Easy](https://github.com/djalbat/Easy) elements.

**[Online documentation](http://juxtapose.info)**

## The Joy of JSX

There is a series of complementary videos:

**[The Joy of JSX](https://vimeo.com/album/4562013)**

#### Corrigenda

Many of these points have been picked up in the last video in the series, 'Traditional MVC', which has been re-recorded. Also bear in mind that nearly all of the changes are to the source code of the Easy project, not this one. The files of interest are the [element.js](https://github.com/djalbat/Easy/blob/master/es6/element.js), [react.js](https://github.com/djalbat/Easy/blob/master/es6/react.js) and [jsx.js](https://github.com/djalbat/Easy/blob/master/es6/mixins/jsx.js) files.

- The `examples.html` file has moved to `index.html`.
- The `examples` directory in the `es6` directory has been renamed to `example`;
- The `Element` class now has a `fromString(...)` factory method, simplifying the `React.createElement(...)` method.
- The `addTo(...)`, etc methods have been taken out of the JSX mixin. The `updateParentContext(...)` method is now called directly from the loop over the child elements in the `applyProperties(...)` method.
- The ignored and default properties are now cumulative. Recursive methods called from the `fromProperties(...)` static factory method of the `Element` class will traverse the superclasses in order to find them.
- It is best to call the `assignContext(...)` method from an `initialise(...)` method called from within your own `fromProperties(...)` static factory method rather than from within `parentContext()` methods. Initialise methods are introduced in the re-recorded video.
- The `assignContext(...)` method has been improved. It no longer returns the names of the context properties that have been assigned, there didn't seem much point. The default for the `thenDelete` argument is `true`.
- More ES6 and some experimental syntax has been adopted, for example ES6 imports and exports.
- The static `fromProperties(...)` factory method has been replaced with a static `fromClass(...)` factory method. In most cases there is now no need to create your own such methods. You only need to do so if you want to make use of the `properties` object.
- The controller has been simplified in the MVC application.

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
