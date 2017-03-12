# EasyUI-JSX

JSX support for [EasyUI](https://github.com/djalbat/EasyUI).

EasyUI-JSX allows you to leverage [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html) in order to create EasyUI elements rather than React or [Reaction](https://github.com/djalbat/Reaction) ones. All of the projects listed below support JSX, and its use with them is highly recommended. Not only will using JSX result in less typing and better organisation, it will also permit elements to created dynamically without resorting to factory methods or cloning.   

## Related projects

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
    
## Appending elements to the DOM

The recommended and indeed the only practical way is to create an EasyUI element that references an existing DOM element, and then to append elements that have been dynamically created by way of JSX to that:
 
```js
const easyui = require('easyui'),
      { Body } = easyui;

const body = new Body(),
      exampleDiv =

        <div className="example">
          An easy example
        </div>;

body.append(exampleDiv);
```

The `body` DOM element was chosen here for the sake of the example. If you are not happy using it, create an element that references a root `div` element, say, either by passing the requisite CSS selector to the `Div` class constructor, or, if you have the DOM element to hand, using the static `fromHTML()` factory method:
  
```js
const easyui = require('easyui'),
      { Div } = easyui;

const rootDivDOMElement = document.getElementbyId('root'),
      rootDivElement = Div.fromDOMElement(rootDivDOMElement),
      exampleDiv =

        <div className="example">
          An easy example
        </div>;

rootDivElement.append(exampleDiv);
```

## Creating elements

There are several basic ways to do so, mirroring to a large extent JSX usage in both React and Reaction. With EasyUI, however, there is a little more freedom as well as the opportunity to use inheritance rather than mixins, should you wish to.
   
### Virtual DOM elements

By which is meant elements that reference, and therefore effectively represent, real underlying DOM elements. They are created with lowercase tag names:
 
```js
const body = new Body();

body.append(

  <div className="example">An easy example</div>

);
```

### Functional elements

Elements can be returned from functions, the functions receiving the attributes as properties.  
 
```js
const body = new Body();

body.append(

  <div className="example">An easy example</div>

);
```
 
  
    
## Contact

- james.smith@djalbat.com
- http://djalbat.com
