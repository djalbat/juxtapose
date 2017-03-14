# EasyUI-JSX

JSX support for EasyUI elements.

EasyUI-JSX allows you to leverage [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html) in order to create EasyUI elements rather than React or [Reaction](https://github.com/djalbat/Reaction) ones. Every element supports JSX, and its use with them is highly recommended. Not only will using JSX result in less typing and better organisation, it will also permit elements to created dynamically without resorting to factory methods or cloning.   

## Related projects

- [EasyUI](https://github.com/djalbat/EasyUI) A V-framework.
- [EasyUI-Layout](https://github.com/djalbat/EasyUI-Layout) Layout elements that work with CSS flexbox.
- [EasyUI-DragAndDrop](https://github.com/djalbat/EasyUI-DragAndDrop) Drag and drop elements including an explorer and a rubbish bin.
- [EasyUI-RichTextarea](https://github.com/djalbat/EasyUI-RichTextarea) A textarea component that handles and hands off events well.

### Are these projects actually used anywhere?

Actually they are, here:

- [Occam Proof Assistant](http://djalbat.com/occam)

## Running the examples web page
 
This can be done by cloning the repository and then simply opening the `examples.html` page found in the repository's root. See the sections immediately below for instructions on cloning with Git if you are not familiar with this process. It is also useful to be able to compile the examples, again see the relevant instructions below. 

If you want to get the examples themselves in the examples page working, a quick and dirty way is to amend the `examples.js` file in the `es6` folder. Simply copy and paste the example code into the body of the `examples()` method, remove the unnecessary functions and require statements, then rebuild.  
    
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

The recommended and indeed the only practical way is to create an EasyUI element that references an existing DOM element, which cannot be done with JSX, and then to append elements that have been dynamically created by way of JSX to that. A `Body` element is chosen as the simplest example because there is no need to pass a selector to the constructor, by default the one and only `body` DOM element will be used, assuming it is present:
 
```js
const easyui = require('easyui'),
      { Body } = easyui;

const body = new Body();

body.append(

  <div className="example">
    An easy example.
  </div>
  
);
```

If you are not happy using `body` DOM element, create an element that references a root `div` element, say, either by passing the requisite CSS selector to the `Div` class constructor, or, if you have the DOM element to hand, using the static `fromHTML()` factory method of the `Div` class:
  
```js
const easyui = require('easyui'),
      { Div } = easyui;

const rootDivDOMElement = document.getElementbyId('root'),
      rootDivElement = Div.fromDOMElement(rootDivDOMElement);

rootDivElement.append(

  <div className="example">
    An easy example.
  </div>
  
);
```

## Creating elements

There are several ways to do so, mirroring to some extent JSX usage in React and Reaction. With EasyUI, however, there is a little more freedom as well as the opportunity to use inheritance as well as mixins, should you wish to use either.
   
### Virtual DOM elements

These are elements that reference, and therefore effectively represent, real underlying DOM elements. They are created with lowercase tag names:
 
```js
const easyui = require('easyui'),
      { Body } = easyui;

const body = new Body();

body.append(

  <div className="example">An easy example.</div>

);
```

### Functional elements

JSX can be returned from functions, with the functions themselves receiving the attributes of the JSX that references them as a `properties` argument. Child elements can be accessed by way of the `childElements` property of that argument:
 
```js
const easyui = require('easyui'),
      { Body } = easyui;

const Div = (properties) => {
  const { className } = properties,
        { childElements } = properties;

  return (

    <div className={className}>
    {childElements}
    </div>

  );
};

const body = new Body();

body.append(

  <Div className="example">An easy example.</Div>

);
```

Note the slight difference in language compared to React and Reaction. In EasyUI-JSX parlance the `props` of React and Reaction becomes `properties` and `children` becomes `childElements`.
  
### EasyUI elements

Creating EasyUI elements from JSX involves nothing more than employing the relevant class. And since the JSX results in an instance of an EasyUI class, in this case the `Button` class, its methods can be called against it directly:   
    
```js
const easyui = require('easyui'),
      { Body, Button } = easyui;
      
const body = new Body(),
      button = <Button>Click me...</Button>;

button.onClick(function() {
  alert('Clicked!');
});

body.append(button);
```

### Custom elements using the `render()` method

This is the most straightforward way to create your own elements, and is more or less akin to the use of a `render()` method in React and Reaction. The pattern consists of a class with a `render()` method and an optional constructor to assign its `properties` argument to the instance. The instance methods are then available from within the `render()` method by way of the `this` keyword:  
 
```js
const easyui = require('easyui'),
      { Body, Button } = easyui;
      
class Example {
  constructor(properties) {
    this.properties = properties;
  }

  click(message) {
    alert(message)
  }

  render() {
    const { message } = this.properties;

    return (

      <Button onClick={() => {

                        this.click(message);
                        
                      }}
      >
        Click me...
      </Button>

    );
  }
}

const body = new Body(),
      example = <Example message="Clicked!">Click me...</Example>;

body.append(example);

// Because example is an instance of the Button class and not the Example class...

example.onClick(...); // ...this would work...

example.click(); // ...but this will not.
```

It is important to realise with this pattern that what is returned by the `render()` method will *not* be an instance of the class you have just defined. It will be an instance of whatever class is referenced by the JSX returned by the `render()` method, or an instance of the `Element` class if the tag name is lower case. The utility of this pattern really only lies in the fact that it allows JSX to be encapsulated, together with some additional functionality that can be easily referenced. 

### Custom elements that extend an existing EasyUI class

This is the preferred pattern, and is exactly what is used to add JSX support to the EasyUI projects themselves. You can extend any EasyUI class, including the `Element` class. Use the static `fromProperties()` factory method and from there invoke the `fromProperties()` method of the class you are extending:
  
```js
const easyui = require('easyui'),
      { Body, Button } = easyui;

class Example extends Button {
  click() {
    const { message } = this.properties;

    alert(message)
  }

  static fromProperties(properties) {
    return Button.fromProperties(Example, properties);
  }
}

Example.tagName = 'button'; /// This is by way of example and is not needed.

const example = () => {
  const body = new Body(),
        example = <Example message="Clicked!">Click me...</Example>;

  example.onClick(function() {
    example.click();
  });

  body.append(example);
};
```

Setting the `tagName` property on the class is optional. If not set, the `tagName` property of the parent class will be used. Note that the `onClick()` method can be called, because the `Example` class inherits from the `Button` class, but also that the `click()` method can now be called, because what is returned is an instance of the `Example` class. 

## Contact

- james.smith@djalbat.com
- http://djalbat.com
