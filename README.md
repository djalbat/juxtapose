# Juxtapose

[JSX](https://facebook.github.io/react/docs/jsx-in-depth.html) support for [Easy](https://github.com/djalbat/Easy) elements.

 * [Online documentation](http://juxtapose.info)

## The Joy of JSX

There is a series of complementary videos:

**[The Joy of JSX](https://vimeo.com/album/4562013)**

#### Corrigenda

Many of these points have been picked up in the last video in the series, 'Traditional MVC', which has been re-recorded. Also bear in mind that the changes are to the source code of the Easy project, not this one. The files of interest are the [element.js](https://github.com/djalbat/Easy/blob/master/es6/element.js), [react.js](https://github.com/djalbat/Easy/blob/master/es6/react.js) and [jsx.js](https://github.com/djalbat/Easy/blob/master/es6/mixins/jsx.js) files.

- The `examples.html` file has moved to `examples/index.html`. 
- The `Element` class now has a `fromString()` factory method, simplifying the `React.createElement()` method.
- The `addTo()`, etc methods have been taken out of the JSX mixin. The `updateParentContext()` method is now called directly from the loop over the child elements in the `applyProperties()` method.
- The ignored and default properties are now cumulative. Recursive methods called from the `fromProperties()` static factory method of the `Element` class will traverse the superclasses in order to find them.
- It is best to call the `assignContext()` method from an `initialise()` method called from within your own `fromProperties()` static factory method rather than from within `parentContext()` methods. Initialise methods are introduced in the re-recorded video.
- The `assignContext()` method has been improved. It no longer returns the names of the context properties that have been assigned, there didn't seem much point. The default for the `thenDelete` argument is `true`.
- The Schooner Cecilie site has undergone a significant revision since the videos were made. Please have a look at the source in your browser's developer tools.

## Installation

You can install Juxtapose with [npm](https://www.npmjs.com/):

    npm install juxtapose

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/juxtapose.git

...and then install the necessary modules with npm from within the project's root directory:

    npm install

You will need to do this if you want to look at the examples.

## Usage

Only building with [Node.js](http://nodejs.org) is supported, the usage is as follows:

```js
require('juxtapose');
```

Once this is done, JSX can be used directly.

## Examples

The source code for the two examples can be found in the `es6/examples` directory. To view the compiled examples, open the `examples/index.html` file.

## Compiling from source

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug
    
## Contact

- james.smith@djalbat.com
- http://djalbat.com
