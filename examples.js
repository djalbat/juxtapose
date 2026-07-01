(() => {
  var __defProp = Object.defineProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __commonJS = (cb, mod) => () => (mod || cb((mod = {exports: {}}).exports, mod), mod.exports);
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };

  // node_modules/easy/lib/offset.js
  var require_offset = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return Offset;
      }
    });
    var Offset = class {
      constructor(top, left) {
        this.top = top;
        this.left = left;
      }
      getTop() {
        return this.top;
      }
      getLeft() {
        return this.left;
      }
      static fromDOMElement(domElement) {
        const {offsetTop, offsetLeft} = domElement, top = offsetTop, left = offsetLeft, offset = new Offset(top, left);
        return offset;
      }
    };
  });

  // node_modules/easy/lib/bounds.js
  var require_bounds = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return Bounds;
      }
    });
    var Bounds = class {
      constructor(top, left, right, bottom) {
        this.top = top;
        this.left = left;
        this.right = right;
        this.bottom = bottom;
      }
      getTop() {
        return this.top;
      }
      getLeft() {
        return this.left;
      }
      getRight() {
        return this.right;
      }
      getBottom() {
        return this.bottom;
      }
      getWidth() {
        const width = this.right - this.left;
        return width;
      }
      getHeight() {
        const height = this.bottom - this.top;
        return height;
      }
      setTop(top) {
        this.top = top;
      }
      setLeft(left) {
        this.left = left;
      }
      setRight(right) {
        this.right = right;
      }
      setBottom(bottom) {
        this.bottom = bottom;
      }
      areOverlapping(bounds) {
        const bottom = bounds.getBottom(), right = bounds.getRight(), left = bounds.getLeft(), top = bounds.getTop(), overlapping = this.top < bottom && this.left < right && this.right > left && this.bottom > top;
        return overlapping;
      }
      areOverlappingByTopAndLeft(top, left) {
        const overlapping = this.top <= top && this.left <= left && this.right > left && this.bottom > top;
        return overlapping;
      }
      static fromDOMElement(domElement) {
        const {pageXOffset, pageYOffset} = window, boundingClientRect = domElement.getBoundingClientRect(), windowScrollTop = pageYOffset, windowScrollLeft = pageXOffset, top = boundingClientRect.top + windowScrollTop, left = boundingClientRect.left + windowScrollLeft, right = boundingClientRect.right + windowScrollLeft, bottom = boundingClientRect.bottom + windowScrollTop, bounds = new Bounds(top, left, right, bottom);
        return bounds;
      }
      static fromTopLeftWidthAndHeight(top, left, width, height) {
        const bottom = top + height, right = left + width, bounds = new Bounds(top, left, right, bottom);
        return bounds;
      }
    };
  });

  // node_modules/easy/lib/utilities/array.js
  var require_array = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get augment() {
        return augment;
      },
      get first() {
        return first;
      },
      get flatten() {
        return flatten;
      },
      get guarantee() {
        return guarantee;
      },
      get push() {
        return push;
      }
    });
    function first(array) {
      return array[0];
    }
    function push(array1, array2) {
      Array.prototype.push.apply(array1, array2);
    }
    function augment(array1, array2, test) {
      array1 = [
        ...array1
      ];
      array2.forEach((element, index) => {
        const passed = test(element, index);
        if (passed) {
          array1.push(element);
        }
      });
      return array1;
    }
    function flatten(array) {
      return array.reduce((array2, element) => {
        array2 = array2.concat(element);
        return array2;
      }, []);
    }
    function guarantee(arrayOrElement) {
      arrayOrElement = arrayOrElement || [];
      return Array.isArray(arrayOrElement) ? arrayOrElement : [
        arrayOrElement
      ];
    }
  });

  // node_modules/easy/lib/constants.js
  var require_constants = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get BLOCK() {
        return BLOCK;
      },
      get BODY() {
        return BODY;
      },
      get BOOLEAN() {
        return BOOLEAN;
      },
      get CLASS() {
        return CLASS;
      },
      get CLASS_NAME() {
        return CLASS_NAME;
      },
      get DEFAULT_PROPERTIES() {
        return DEFAULT_PROPERTIES;
      },
      get DISABLED() {
        return DISABLED;
      },
      get DISPLAY() {
        return DISPLAY;
      },
      get EMPTY_STRING() {
        return EMPTY_STRING;
      },
      get FOR() {
        return FOR;
      },
      get FUNCTION() {
        return FUNCTION;
      },
      get HEIGHT() {
        return HEIGHT;
      },
      get HTML_FOR() {
        return HTML_FOR;
      },
      get IGNORED_PROPERTIES() {
        return IGNORED_PROPERTIES;
      },
      get NONE() {
        return NONE;
      },
      get OBJECT() {
        return OBJECT;
      },
      get SPACE() {
        return SPACE;
      },
      get STRING() {
        return STRING;
      },
      get SVG_NAMESPACE_URI() {
        return SVG_NAMESPACE_URI;
      },
      get UNDEFINED() {
        return UNDEFINED;
      },
      get WIDTH() {
        return WIDTH;
      },
      get WILDCARD() {
        return WILDCARD;
      }
    });
    var FOR = "for";
    var BODY = "body";
    var NONE = "none";
    var SPACE = " ";
    var CLASS = "class";
    var WIDTH = "width";
    var BLOCK = "block";
    var HEIGHT = "height";
    var OBJECT = "object";
    var STRING = "string";
    var DISPLAY = "display";
    var BOOLEAN = "boolean";
    var DISABLED = "disabled";
    var FUNCTION = "function";
    var WILDCARD = "*";
    var HTML_FOR = "htmlFor";
    var UNDEFINED = "undefined";
    var CLASS_NAME = "className";
    var EMPTY_STRING = "";
    var SVG_NAMESPACE_URI = "http://www.w3.org/2000/svg";
    var DEFAULT_PROPERTIES = "defaultProperties";
    var IGNORED_PROPERTIES = "ignoredProperties";
  });

  // node_modules/easy/lib/utilities/object.js
  var require_object = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get combine() {
        return combine;
      },
      get prune() {
        return prune;
      }
    });
    var _constants = require_constants();
    function combine(target, source = {}) {
      target = {
        ...target
      };
      const names = Object.keys(source);
      names.forEach((name) => {
        const targetValue = target[name], sourceValue = source[name], targetHasOwnProperty = target.hasOwnProperty(name);
        target[name] = targetHasOwnProperty ? combineValues(targetValue, sourceValue) : sourceValue;
      });
      return target;
    }
    function prune(target, names = []) {
      target = {
        ...target
      };
      names.forEach((name) => {
        const targetHasOwnProperty = target.hasOwnProperty(name);
        if (targetHasOwnProperty) {
          delete target[name];
        }
      });
      return target;
    }
    function combineValues(targetValue, sourceValue) {
      const targetValueBoolean = isValueBoolean(targetValue), sourceValueBoolean = isValueBoolean(sourceValue), combinedValue = targetValueBoolean && sourceValueBoolean ? targetValue : `${targetValue} ${sourceValue}`;
      return combinedValue;
    }
    function isValueBoolean(value) {
      const valueBoolean = typeof value === _constants.BOOLEAN;
      return valueBoolean;
    }
  });

  // node_modules/easy/lib/utilities/string.js
  var require_string = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "camelCaseToSnakeCase", {
      enumerable: true,
      get: function() {
        return camelCaseToSnakeCase;
      }
    });
    function camelCaseToSnakeCase(string) {
      return string.replace(/([A-Z]+)/g, (match, characters) => {
        const upperCaseCharacters = characters.toLowerCase(), snakeCaseCharacters = `-${upperCaseCharacters}`;
        return snakeCaseCharacters;
      });
    }
  });

  // node_modules/easy/lib/utilities/name.js
  var require_name = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get isHTMLAttributeName() {
        return isHTMLAttributeName;
      },
      get isSVGAttributeName() {
        return isSVGAttributeName;
      },
      get isSVGTagName() {
        return isSVGTagName;
      }
    });
    function isSVGTagName(tagName) {
      return svgTagNames.includes(tagName);
    }
    function isSVGAttributeName(attributeName) {
      return svgAttributeNames.includes(attributeName);
    }
    function isHTMLAttributeName(attributeName) {
      return htmlAttributeNames.includes(attributeName);
    }
    var svgTagNames = [
      "altGlyph",
      "animate",
      "animateColor",
      "animateMotion",
      "animateTransform",
      "animation",
      "audio",
      "circle",
      "clipPath",
      "color-profile",
      "cursor",
      "defs",
      "desc",
      "discard",
      "ellipse",
      "feBlend",
      "feColorMatrix",
      "feComponentTransfer",
      "feComposite",
      "feConvolveMatrix",
      "feDiffuseLighting",
      "feDisplacementMap",
      "feDistantLight",
      "feDropShadow",
      "feFlood",
      "feFuncA",
      "feFuncB",
      "feFuncG",
      "feFuncR",
      "feGaussianBlur",
      "feImage",
      "feMerge",
      "feMergeNode",
      "feMorphology",
      "feOffset",
      "fePointLight",
      "feSpecularLighting",
      "feSpotLight",
      "feTile",
      "feTurbulence",
      "filter",
      "font",
      "font-face",
      "font-face-format",
      "font-face-name",
      "font-face-uri",
      "foreignObject",
      "g",
      "glyph",
      "glyphRef",
      "handler",
      "hatch",
      "hatchpath",
      "hkern",
      "image",
      "line",
      "linearGradient",
      "listener",
      "marker",
      "mask",
      "mesh",
      "meshgradient",
      "meshpatch",
      "meshrow",
      "metadata",
      "missing-glyph",
      "mpath",
      "path",
      "pattern",
      "polygon",
      "polyline",
      "prefetch",
      "radialGradient",
      "rect",
      "script",
      "set",
      "solidcolor",
      "stop",
      "style",
      "svg",
      "switch",
      "symbol",
      "tbreak",
      "text",
      "textArea",
      "textPath",
      "title",
      "tref",
      "tspan",
      "unknown",
      "use",
      "video",
      "view",
      "vkern"
    ];
    var svgAttributeNames = [
      "accent-height",
      "accumulate",
      "additive",
      "alignment-baseline",
      "alphabetic",
      "amplitude",
      "arabic-form",
      "ascent",
      "attributeName",
      "attributeType",
      "azimuth",
      "bandwidth",
      "baseFrequency",
      "baseProfile",
      "baseline-shift",
      "bbox",
      "begin",
      "bias",
      "by",
      "calcMode",
      "cap-height",
      "clip",
      "className",
      "clip-path",
      "clip-rule",
      "clipPathUnits",
      "color",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "contentScriptType",
      "contentStyleType",
      "crossorigin",
      "cursor",
      "cx",
      "cy",
      "d",
      "defaultAction",
      "descent",
      "diffuseConstant",
      "direction",
      "display",
      "divisor",
      "dominant-baseline",
      "download",
      "dur",
      "dx",
      "dy",
      "edgeMode",
      "editable",
      "elevation",
      "enable-background",
      "end",
      "event",
      "exponent",
      "externalResourcesRequired",
      "fill",
      "fill-opacity",
      "fill-rule",
      "filter",
      "filterRes",
      "filterUnits",
      "flood-color",
      "flood-opacity",
      "focusHighlight",
      "focusable",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "format",
      "fr",
      "from",
      "fx",
      "fy",
      "g1",
      "g2",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "glyphRef",
      "gradientTransform",
      "gradientUnits",
      "handler",
      "hanging",
      "hatchContentUnits",
      "hatchUnits",
      "height",
      "horiz-adv-x",
      "horiz-origin-x",
      "horiz-origin-y",
      "href",
      "hreflang",
      "id",
      "ideographic",
      "image-rendering",
      "in",
      "in2",
      "initialVisibility",
      "intercept",
      "k",
      "k1",
      "k2",
      "k3",
      "k4",
      "kernelMatrix",
      "kernelUnitLength",
      "kerning",
      "keyPoints",
      "keySplines",
      "keyTimes",
      "lengthAdjust",
      "letter-spacing",
      "lighting-color",
      "limitingConeAngle",
      "local",
      "marker-end",
      "marker-mid",
      "marker-start",
      "markerHeight",
      "markerUnits",
      "markerWidth",
      "mask",
      "maskContentUnits",
      "maskUnits",
      "mathematical",
      "max",
      "media",
      "mediaCharacterEncoding",
      "mediaContentEncodings",
      "mediaSize",
      "mediaTime",
      "method",
      "min",
      "mode",
      "name",
      "nav-down",
      "nav-down-left",
      "nav-down-right",
      "nav-left",
      "nav-next",
      "nav-prev",
      "nav-right",
      "nav-up",
      "nav-up-left",
      "nav-up-right",
      "numOctaves",
      "observer",
      "offset",
      "opacity",
      "operator",
      "order",
      "orient",
      "orientation",
      "origin",
      "overflow",
      "overlay",
      "overline-position",
      "overline-thickness",
      "panose-1",
      "path",
      "pathLength",
      "patternContentUnits",
      "patternTransform",
      "patternUnits",
      "phase",
      "pitch",
      "playbackOrder",
      "playbackorder",
      "pointer-events",
      "points",
      "pointsAtX",
      "pointsAtY",
      "pointsAtZ",
      "preserveAlpha",
      "preserveAspectRatio",
      "primitiveUnits",
      "propagate",
      "r",
      "radius",
      "refX",
      "refY",
      "rendering-intent",
      "repeatCount",
      "repeatDur",
      "requiredExtensions",
      "requiredFeatures",
      "requiredFonts",
      "requiredFormats",
      "restart",
      "result",
      "rotate",
      "rx",
      "ry",
      "scale",
      "seed",
      "shape-rendering",
      "side",
      "slope",
      "snapshotTime",
      "spacing",
      "specularConstant",
      "specularExponent",
      "spreadMethod",
      "src",
      "startOffset",
      "stdDeviation",
      "stemh",
      "stemv",
      "stitchTiles",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "string",
      "stroke",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "style",
      "surfaceScale",
      "syncBehavior",
      "syncBehaviorDefault",
      "syncMaster",
      "syncTolerance",
      "syncToleranceDefault",
      "systemLanguage",
      "tableValues",
      "target",
      "targetX",
      "targetY",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "textLength",
      "timelineBegin",
      "timelinebegin",
      "title",
      "to",
      "transform",
      "transformBehavior",
      "type",
      "u1",
      "u2",
      "underline-position",
      "underline-thickness",
      "unicode",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "values",
      "version",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "viewBox",
      "viewTarget",
      "visibility",
      "width",
      "widths",
      "word-spacing",
      "writing-mode",
      "x",
      "x-height",
      "x1",
      "x2",
      "xChannelSelector",
      "y",
      "y1",
      "y2",
      "yChannelSelector",
      "z",
      "zoomAndPan"
    ];
    var htmlAttributeNames = [
      "accept",
      "acceptCharset",
      "accessKey",
      "action",
      "allow",
      "allowFullScreen",
      "allowTransparency",
      "alt",
      "async",
      "autoComplete",
      "autoFocus",
      "autoPlay",
      "capture",
      "cellPadding",
      "cellSpacing",
      "challenge",
      "charSet",
      "checked",
      "cite",
      "classID",
      "className",
      "colSpan",
      "cols",
      "content",
      "contentEditable",
      "contextMenu",
      "controls",
      "coords",
      "crossOrigin",
      "data",
      "dateTime",
      "default",
      "defer",
      "dir",
      "disabled",
      "download",
      "draggable",
      "encType",
      "form",
      "formAction",
      "formEncType",
      "formMethod",
      "formNoValidate",
      "formTarget",
      "frameBorder",
      "headers",
      "height",
      "hidden",
      "high",
      "href",
      "hrefLang",
      "htmlFor",
      "httpEquiv",
      "icon",
      "id",
      "inputMode",
      "integrity",
      "is",
      "keyParams",
      "keyType",
      "kind",
      "label",
      "lang",
      "list",
      "loop",
      "low",
      "manifest",
      "marginHeight",
      "marginWidth",
      "max",
      "maxLength",
      "media",
      "mediaGroup",
      "method",
      "min",
      "minLength",
      "multiple",
      "muted",
      "name",
      "noValidate",
      "nonce",
      "open",
      "optimum",
      "pattern",
      "placeholder",
      "poster",
      "preload",
      "profile",
      "radioGroup",
      "readOnly",
      "rel",
      "required",
      "reversed",
      "role",
      "rowSpan",
      "rows",
      "sandbox",
      "scope",
      "scoped",
      "scrolling",
      "seamless",
      "selected",
      "shape",
      "size",
      "sizes",
      "span",
      "spellCheck",
      "src",
      "srcDoc",
      "srcLang",
      "srcSet",
      "start",
      "step",
      "style",
      "summary",
      "tabIndex",
      "target",
      "title",
      "type",
      "useMap",
      "value",
      "width",
      "wmode",
      "wrap"
    ];
  });

  // node_modules/easy/lib/utilities/element.js
  var require_element = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get constructElement() {
        return constructElement;
      },
      get default() {
        return _default;
      },
      get destroyElement() {
        return destroyElement;
      },
      get mountElement() {
        return mountElement;
      },
      get unmountElement() {
        return unmountElement;
      }
    });
    function constructElement(element, domElement) {
      element.domElement = domElement;
      domElement.__element__ = element;
    }
    function destroyElement(element) {
      const descendantElements = element.getDescendantElements(), elements = [
        element,
        ...descendantElements
      ];
      elements.forEach((element2) => {
        const domElement = element2.getDOMElement();
        delete element2.domElement;
        delete domElement.__element__;
      });
    }
    function mountElement(element) {
      const descendantElements = element.getDescendantElements(), elements = [
        element,
        ...descendantElements
      ];
      elements.reverse();
      elements.forEach((element2) => {
        element2.didMount && element2.didMount();
      });
    }
    function unmountElement(element) {
      const descendantElements = element.getDescendantElements(), elements = [
        element,
        ...descendantElements
      ];
      elements.forEach((element2) => {
        element2.willUnmount && element2.willUnmount();
      });
    }
    var _default = {
      constructElement,
      destroyElement,
      mountElement,
      unmountElement
    };
  });

  // node_modules/easy/lib/utilities/dom.js
  var require_dom = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get ascendantDOMNodesFromDOMNode() {
        return ascendantDOMNodesFromDOMNode;
      },
      get descendantDOMNodesFromDOMNode() {
        return descendantDOMNodesFromDOMNode;
      },
      get domNodeMatchesSelector() {
        return domNodeMatchesSelector;
      },
      get elementsFromDOMElements() {
        return elementsFromDOMElements;
      },
      get filterDOMNodes() {
        return filterDOMNodes;
      },
      get filterDOMNodesBySelector() {
        return filterDOMNodesBySelector;
      }
    });
    var _array = require_array();
    var _constants = require_constants();
    function elementsFromDOMElements(domElements) {
      const domElementsWithElements = filterDOMNodes(domElements, (domElement) => {
        if (domElement.__element__) {
          return true;
        }
      }), elements = domElementsWithElements.map((domElement) => {
        const element = domElement.__element__;
        return element;
      });
      return elements;
    }
    function ascendantDOMNodesFromDOMNode(domNode, height, ascendantDOMNodes = []) {
      if (height > 0) {
        const parentDOMNode = domNode.parentElement;
        if (parentDOMNode !== null) {
          ascendantDOMNodes.push(parentDOMNode);
          height--;
          ascendantDOMNodesFromDOMNode(parentDOMNode, height, ascendantDOMNodes);
        }
      }
      return ascendantDOMNodes;
    }
    function descendantDOMNodesFromDOMNode(domNode, depth, descendantDOMNodes = []) {
      if (depth > 0) {
        const childDOMNodes = domNode.childNodes;
        (0, _array.push)(descendantDOMNodes, childDOMNodes);
        depth--;
        childDOMNodes.forEach((childDOMNode) => {
          descendantDOMNodesFromDOMNode(childDOMNode, depth, descendantDOMNodes);
        });
      }
      return descendantDOMNodes;
    }
    function filterDOMNodesBySelector(domNodes, selector) {
      const filteredDOMNodes = filterDOMNodes(domNodes, (domNode) => {
        if (domNodeMatchesSelector(domNode, selector)) {
          return true;
        }
      });
      return filteredDOMNodes;
    }
    function domNodeMatchesSelector(domNode, selector) {
      const domNodeType = domNode.nodeType;
      switch (domNodeType) {
        case Node.ELEMENT_NODE: {
          const domElement = domNode;
          return domElement.matches(selector);
        }
        case Node.TEXT_NODE: {
          if (selector === _constants.WILDCARD) {
            return true;
          }
        }
      }
      return false;
    }
    function filterDOMNodes(domNodes, test) {
      const filteredDOMNodes = [], domNodesLength = domNodes.length;
      for (let index = 0; index < domNodesLength; index++) {
        const domNode = domNodes[index], result = test(domNode);
        if (result) {
          filteredDOMNodes.push(domNode);
        }
      }
      return filteredDOMNodes;
    }
  });

  // node_modules/easy/lib/mixins/element.js
  var require_element2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get default() {
        return _default;
      },
      get getAscendantElements() {
        return getAscendantElements;
      },
      get getChildElements() {
        return getChildElements;
      },
      get getDescendantElements() {
        return getDescendantElements;
      },
      get getNextSiblingElement() {
        return getNextSiblingElement;
      },
      get getParentElement() {
        return getParentElement;
      },
      get getPreviousSiblingElement() {
        return getPreviousSiblingElement;
      }
    });
    var _array = require_array();
    var _constants = require_constants();
    var _dom = require_dom();
    function getParentElement(selector = _constants.WILDCARD) {
      let parentElement = null;
      const parentDOMElement = this.domElement.parentElement;
      if (parentDOMElement !== null) {
        if (parentDOMElement.matches(selector)) {
          const parentDOMElements = [
            parentDOMElement
          ], parentElements = (0, _dom.elementsFromDOMElements)(parentDOMElements), firstParentElement = (0, _array.first)(parentElements);
          parentElement = firstParentElement || null;
        }
      }
      return parentElement;
    }
    function getChildElements(selector = _constants.WILDCARD) {
      const childDOMNodes = this.domElement.childNodes, childDOMElements = (0, _dom.filterDOMNodesBySelector)(childDOMNodes, selector), childElements = (0, _dom.elementsFromDOMElements)(childDOMElements);
      return childElements;
    }
    function getAscendantElements(selector = _constants.WILDCARD, maximumHeight = Infinity) {
      const height = maximumHeight, domNode = this.domElement, ascendantDOMNodes = (0, _dom.ascendantDOMNodesFromDOMNode)(domNode, height), ascendantDOMElements = (0, _dom.filterDOMNodesBySelector)(ascendantDOMNodes, selector), ascendantElements = (0, _dom.elementsFromDOMElements)(ascendantDOMElements);
      return ascendantElements;
    }
    function getDescendantElements(selector = _constants.WILDCARD, maximumDepth = Infinity) {
      const depth = maximumDepth, domNode = this.domElement, descendantDOMNodes = (0, _dom.descendantDOMNodesFromDOMNode)(domNode, depth), descendantDOMElements = (0, _dom.filterDOMNodesBySelector)(descendantDOMNodes, selector), descendantElements = (0, _dom.elementsFromDOMElements)(descendantDOMElements);
      return descendantElements;
    }
    function getNextSiblingElement(selector = _constants.WILDCARD) {
      let nextSiblingElement = null;
      const nextSiblingDOMNode = this.domElement.nextSibling;
      if (nextSiblingDOMNode !== null && (0, _dom.domNodeMatchesSelector)(nextSiblingDOMNode, selector)) {
        nextSiblingElement = nextSiblingDOMNode.__element__ || null;
      }
      return nextSiblingElement;
    }
    function getPreviousSiblingElement(selector = _constants.WILDCARD) {
      let previousSiblingElement = null;
      const previousSiblingDOMNode = this.domElement.previousSibling;
      if (previousSiblingDOMNode !== null && (0, _dom.domNodeMatchesSelector)(previousSiblingDOMNode, selector)) {
        previousSiblingElement = previousSiblingDOMNode.__element__ || null;
      }
      return previousSiblingElement;
    }
    var elementMixins = {
      getParentElement,
      getChildElements,
      getAscendantElements,
      getDescendantElements,
      getNextSiblingElement,
      getPreviousSiblingElement
    };
    var _default = elementMixins;
  });

  // node_modules/easy/lib/textElement.js
  var require_textElement = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return TextElement;
      }
    });
    var _offset = /* @__PURE__ */ _interop_require_default(require_offset());
    var _bounds = /* @__PURE__ */ _interop_require_default(require_bounds());
    var _element = require_element();
    var _element1 = require_element2();
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var TextElement = class {
      constructor(text) {
        const element = this, domElement = document.createTextNode(text);
        (0, _element.constructElement)(element, domElement);
      }
      getDOMElement() {
        return this.domElement;
      }
      getOffset() {
        const offset = _offset.default.fromDOMElement(this.domElement);
        return offset;
      }
      getBounds() {
        const bounds = _bounds.default.fromDOMElement(this.domElement);
        return bounds;
      }
      getWidth() {
        return this.domElement.offsetWidth;
      }
      getHeight() {
        return this.domElement.offsetHeight;
      }
      getText() {
        const nodeValue = this.domElement.nodeValue, text = nodeValue;
        return text;
      }
      setText(text) {
        const nodeValue = text;
        this.domElement.nodeValue = nodeValue;
      }
      prependTo(parentElement) {
        parentElement.prepend(this);
      }
      appendTo(parentElement) {
        parentElement.append(this);
      }
      addTo(parentElement) {
        parentElement.add(this);
      }
      removeFrom(parentElement) {
        parentElement.remove(this);
      }
      insertBefore(siblingElement) {
        const parentDOMNode = siblingElement.domElement.parentNode, siblingDOMElement = siblingElement.domElement;
        parentDOMNode.insertBefore(this.domElement, siblingDOMElement);
      }
      insertAfter(siblingElement) {
        const parentDOMNode = siblingElement.domElement.parentNode, siblingDOMElement = siblingElement.domElement;
        parentDOMNode.insertBefore(this.domElement, siblingDOMElement.nextSibling);
      }
      remove() {
        this.domElement.remove();
      }
      destroy() {
        const element = this;
        (0, _element.destroyElement)(element);
      }
    };
    Object.assign(TextElement.prototype, {
      getParentElement: _element1.getParentElement,
      getAscendantElements: _element1.getAscendantElements,
      getNextSiblingElement: _element1.getNextSiblingElement,
      getPreviousSiblingElement: _element1.getPreviousSiblingElement
    });
  });

  // node_modules/easy/lib/utilities/elements.js
  var require_elements = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get removeFalseyElements() {
        return removeFalseyElements;
      },
      get replaceStringsWithTextElements() {
        return replaceStringsWithTextElements;
      }
    });
    var _textElement = /* @__PURE__ */ _interop_require_default(require_textElement());
    var _constants = require_constants();
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function removeFalseyElements(elements) {
      elements = elements.reduce((elements2, element) => {
        if (element) {
          elements2.push(element);
        }
        return elements2;
      }, []);
      return elements;
    }
    function replaceStringsWithTextElements(elements) {
      elements = elements.map((element) => {
        if (typeof element === _constants.STRING) {
          const text = element, textElement = new _textElement.default(text);
          element = textElement;
        }
        return element;
      });
      return elements;
    }
  });

  // node_modules/easy/lib/eventTypes.js
  var require_eventTypes = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get AUXCLICK_EVENT_TYPE() {
        return AUXCLICK_EVENT_TYPE;
      },
      get BLUR_EVENT_TYPE() {
        return BLUR_EVENT_TYPE;
      },
      get CHANGE_EVENT_TYPE() {
        return CHANGE_EVENT_TYPE;
      },
      get CLICK_EVENT_TYPE() {
        return CLICK_EVENT_TYPE;
      },
      get CONTEXTMENU_EVENT_TYPE() {
        return CONTEXTMENU_EVENT_TYPE;
      },
      get COPY_EVENT_TYPE() {
        return COPY_EVENT_TYPE;
      },
      get CUT_EVENT_TYPE() {
        return CUT_EVENT_TYPE;
      },
      get DBLCLICK_EVENT_TYPE() {
        return DBLCLICK_EVENT_TYPE;
      },
      get ERROR_EVENT_TYPE() {
        return ERROR_EVENT_TYPE;
      },
      get FOCUS_EVENT_TYPE() {
        return FOCUS_EVENT_TYPE;
      },
      get FULLSCREENCHANGE_EVENT_TYPE() {
        return FULLSCREENCHANGE_EVENT_TYPE;
      },
      get INPUT_EVENT_TYPE() {
        return INPUT_EVENT_TYPE;
      },
      get KEYDOWN_EVENT_TYPE() {
        return KEYDOWN_EVENT_TYPE;
      },
      get KEYUP_EVENT_TYPE() {
        return KEYUP_EVENT_TYPE;
      },
      get MOUSEDOWN_EVENT_TYPE() {
        return MOUSEDOWN_EVENT_TYPE;
      },
      get MOUSEMOVE_EVENT_TYPE() {
        return MOUSEMOVE_EVENT_TYPE;
      },
      get MOUSEOUT_EVENT_TYPE() {
        return MOUSEOUT_EVENT_TYPE;
      },
      get MOUSEOVER_EVENT_TYPE() {
        return MOUSEOVER_EVENT_TYPE;
      },
      get MOUSEUP_EVENT_TYPE() {
        return MOUSEUP_EVENT_TYPE;
      },
      get PASTE_EVENT_TYPE() {
        return PASTE_EVENT_TYPE;
      },
      get RESIZE_EVENT_TYPE() {
        return RESIZE_EVENT_TYPE;
      },
      get SCROLL_EVENT_TYPE() {
        return SCROLL_EVENT_TYPE;
      },
      get SELECTIONCHANGE_EVENT_TYPE() {
        return SELECTIONCHANGE_EVENT_TYPE;
      },
      get SELECT_EVENT_TYPE() {
        return SELECT_EVENT_TYPE;
      },
      get TOUCHEND_EVENT_TYPE() {
        return TOUCHEND_EVENT_TYPE;
      },
      get TOUCHMOVE_EVENT_TYPE() {
        return TOUCHMOVE_EVENT_TYPE;
      },
      get TOUCHSTART_EVENT_TYPE() {
        return TOUCHSTART_EVENT_TYPE;
      },
      get UNHANDLEDREJECTION_EVENT_TYPE() {
        return UNHANDLEDREJECTION_EVENT_TYPE;
      },
      get WHEEL_EVENT_TYPE() {
        return WHEEL_EVENT_TYPE;
      },
      get default() {
        return _default;
      }
    });
    var CUT_EVENT_TYPE = "cut";
    var COPY_EVENT_TYPE = "copy";
    var BLUR_EVENT_TYPE = "blur";
    var ERROR_EVENT_TYPE = "error";
    var PASTE_EVENT_TYPE = "paste";
    var WHEEL_EVENT_TYPE = "wheel";
    var INPUT_EVENT_TYPE = "input";
    var FOCUS_EVENT_TYPE = "focus";
    var CLICK_EVENT_TYPE = "click";
    var KEYUP_EVENT_TYPE = "keyup";
    var SELECT_EVENT_TYPE = "select";
    var CHANGE_EVENT_TYPE = "change";
    var RESIZE_EVENT_TYPE = "resize";
    var SCROLL_EVENT_TYPE = "scroll";
    var KEYDOWN_EVENT_TYPE = "keydown";
    var MOUSEUP_EVENT_TYPE = "mouseup";
    var AUXCLICK_EVENT_TYPE = "auxclick";
    var MOUSEOUT_EVENT_TYPE = "mouseout";
    var DBLCLICK_EVENT_TYPE = "dblclick";
    var TOUCHEND_EVENT_TYPE = "touchend";
    var TOUCHMOVE_EVENT_TYPE = "touchmove";
    var MOUSEOVER_EVENT_TYPE = "mouseover";
    var MOUSEDOWN_EVENT_TYPE = "mousedown";
    var MOUSEMOVE_EVENT_TYPE = "mousemove";
    var TOUCHSTART_EVENT_TYPE = "touchstart";
    var CONTEXTMENU_EVENT_TYPE = "contextmenu";
    var SELECTIONCHANGE_EVENT_TYPE = "selectionchange";
    var FULLSCREENCHANGE_EVENT_TYPE = "fullscreenchange";
    var UNHANDLEDREJECTION_EVENT_TYPE = "unhandledrejection";
    var _default = {
      CUT_EVENT_TYPE,
      COPY_EVENT_TYPE,
      BLUR_EVENT_TYPE,
      ERROR_EVENT_TYPE,
      PASTE_EVENT_TYPE,
      WHEEL_EVENT_TYPE,
      INPUT_EVENT_TYPE,
      FOCUS_EVENT_TYPE,
      CLICK_EVENT_TYPE,
      KEYUP_EVENT_TYPE,
      SELECT_EVENT_TYPE,
      CHANGE_EVENT_TYPE,
      RESIZE_EVENT_TYPE,
      SCROLL_EVENT_TYPE,
      KEYDOWN_EVENT_TYPE,
      MOUSEUP_EVENT_TYPE,
      AUXCLICK_EVENT_TYPE,
      MOUSEOUT_EVENT_TYPE,
      DBLCLICK_EVENT_TYPE,
      TOUCHEND_EVENT_TYPE,
      TOUCHMOVE_EVENT_TYPE,
      MOUSEOVER_EVENT_TYPE,
      MOUSEDOWN_EVENT_TYPE,
      MOUSEMOVE_EVENT_TYPE,
      TOUCHSTART_EVENT_TYPE,
      CONTEXTMENU_EVENT_TYPE,
      SELECTIONCHANGE_EVENT_TYPE,
      FULLSCREENCHANGE_EVENT_TYPE,
      UNHANDLEDREJECTION_EVENT_TYPE
    };
  });

  // node_modules/easy/lib/mixins/jsx.js
  var require_jsx = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    var _array = require_array();
    var _object = require_object();
    var _string = require_string();
    var _name = require_name();
    var _elements = require_elements();
    var _eventTypes = require_eventTypes();
    var _constants = require_constants();
    var DOUBLE_CLICK_EVENT_TYPE = "doubleclick";
    var SELECTION_CHANGE_EVENT_TYPE = "selectionChange";
    var FULL_SCREEN_CHANGE_EVENT_TYPE = "fullScreenChange";
    function applyProperties(properties, defaultProperties, ignoredProperties) {
      this.properties = (0, _object.combine)(properties, defaultProperties);
      properties = (0, _object.prune)(this.properties, ignoredProperties);
      const namespaceURI = this.domElement.namespaceURI, svg = namespaceURI === _constants.SVG_NAMESPACE_URI, propertiesKeys = Object.keys(properties), names = propertiesKeys;
      names.forEach((name) => {
        const value = properties[name], nameHandlerName = isNameHandlerName(name), nameCustomHandlerName = isNameCustomHandlerName(name);
        if (false) {
        } else if (nameHandlerName) {
          addHandler(this, name, value);
        } else if (nameCustomHandlerName) {
          addCustomHandler(this, name, value);
        } else {
          const nameAttributeName = isNameAttributeName(name, svg);
          if (nameAttributeName) {
            addAttribute(this, name, value);
          }
        }
      });
      const childElements = childElementsFromElement(this) || properties.childElements, context = {};
      childElements.forEach((childElement) => {
        updateContext(childElement, context);
        this.add(childElement);
      });
      this.context = context;
    }
    function getProperties() {
      return this.properties;
    }
    function getContext() {
      return this.context;
    }
    function assignContext(names) {
      if (names === void 0) {
        names = Object.keys(this.context);
      }
      names.forEach((name) => {
        const value = this.context[name], propertyName = name, descriptor = {
          value
        };
        Object.defineProperty(this, propertyName, descriptor);
        delete this.context[name];
      });
    }
    var jsxMixins = {
      applyProperties,
      getProperties,
      getContext,
      assignContext
    };
    var _default = jsxMixins;
    function childElementsFromElement(element) {
      let childElements = null;
      if (typeof element.childElements === _constants.FUNCTION) {
        childElements = element.childElements.call(element);
        childElements = (0, _array.guarantee)(childElements);
        childElements = (0, _elements.removeFalseyElements)(childElements);
        childElements = (0, _elements.replaceStringsWithTextElements)(childElements);
      }
      return childElements;
    }
    function updateContext(childElement, context) {
      const parentContext = typeof childElement.parentContext === _constants.FUNCTION ? childElement.parentContext() : childElement.context;
      Object.assign(context, parentContext);
    }
    function addHandler(element, name, value) {
      let eventType = name.substring(2).toLowerCase();
      switch (eventType) {
        case DOUBLE_CLICK_EVENT_TYPE: {
          eventType = _eventTypes.DBLCLICK_EVENT_TYPE;
          break;
        }
        case SELECTION_CHANGE_EVENT_TYPE: {
          eventType = _eventTypes.SELECTIONCHANGE_EVENT_TYPE;
          break;
        }
        case FULL_SCREEN_CHANGE_EVENT_TYPE: {
          eventType = _eventTypes.FULLSCREENCHANGE_EVENT_TYPE;
          break;
        }
      }
      const handler = value;
      element.onEvent(eventType, handler);
    }
    function addCustomHandler(element, name, value) {
      const customEventType = (0, _string.camelCaseToSnakeCase)(name).replace(/on-custom-/, ""), customHandler = value;
      element.onCustomEvent(customEventType, customHandler);
    }
    function addAttribute(element, name, value) {
      if (name === _constants.CLASS_NAME) {
        name = _constants.CLASS;
      }
      if (name === _constants.HTML_FOR) {
        name = _constants.FOR;
      }
      if (typeof value === _constants.OBJECT) {
        const keys = Object.keys(value);
        keys.forEach((key) => {
          element.domElement[name][key] = value[key];
        });
      } else if (typeof value === _constants.BOOLEAN) {
        if (value) {
          value = name;
          element.addAttribute(name, value);
        }
      } else {
        element.addAttribute(name, value);
      }
    }
    function isNameHandlerName(name) {
      const nameHandlerName = /^on(?!Custom)/.test(name);
      return nameHandlerName;
    }
    function isNameAttributeName(name, svg) {
      const nameAttributeName = svg ? (0, _name.isSVGAttributeName)(name) : (0, _name.isHTMLAttributeName)(name);
      return nameAttributeName;
    }
    function isNameCustomHandlerName(name) {
      const nameCustomHandlerName = /^onCustom/.test(name);
      return nameCustomHandlerName;
    }
  });

  // node_modules/easy/lib/mixins/key.js
  var require_key = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    var _eventTypes = require_eventTypes();
    function onKeyUp(keyUpHandler, element) {
      this.onEvent(_eventTypes.KEYUP_EVENT_TYPE, keyUpHandler, element);
    }
    function offKeyUp(keyUpHandler, element) {
      this.offEvent(_eventTypes.KEYUP_EVENT_TYPE, keyUpHandler, element);
    }
    function onKeyDown(keyDownHandler, element) {
      this.onEvent(_eventTypes.KEYDOWN_EVENT_TYPE, keyDownHandler, element);
    }
    function offKeyDown(keyDownHandler, element) {
      this.offEvent(_eventTypes.KEYDOWN_EVENT_TYPE, keyDownHandler, element);
    }
    var keyMixins = {
      onKeyUp,
      offKeyUp,
      onKeyDown,
      offKeyDown
    };
    var _default = keyMixins;
  });

  // node_modules/easy/lib/mixins/state.js
  var require_state = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    function getState() {
      return this.state;
    }
    function setState(state) {
      this.state = state;
    }
    function updateState(state) {
      this.state === void 0 ? this.state = state : Object.assign(this.state, state);
    }
    var stateMixins = {
      getState,
      setState,
      updateState
    };
    var _default = stateMixins;
  });

  // node_modules/easy/lib/mixins/event.js
  var require_event = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    var _constants = require_constants();
    var _eventTypes = require_eventTypes();
    function onEvent(eventTypes, handler, element = this) {
      eventTypes = eventTypes.split(_constants.SPACE);
      eventTypes.forEach((eventType) => {
        if (eventType === _eventTypes.RESIZE_EVENT_TYPE) {
          const resizeEventListeners = this.findEventListeners(_eventTypes.RESIZE_EVENT_TYPE), resizeEventListenersLength = resizeEventListeners.length;
          if (resizeEventListenersLength === 0) {
            this.resizeObserver = new ResizeObserver((entries) => {
              const resizeEventListeners2 = this.findEventListeners(_eventTypes.RESIZE_EVENT_TYPE);
              resizeEventListeners2.forEach((resizeEventListener) => {
                const event = null;
                resizeEventListener(event);
              });
            });
            this.resizeObserver.observe(this.domElement);
          }
          this.addEventListener(eventType, handler, element);
        } else {
          const eventListener = this.addEventListener(eventType, handler, element);
          this.domElement.addEventListener(eventType, eventListener);
        }
      });
    }
    function offEvent(eventTypes, handler, element = this) {
      eventTypes = eventTypes.split(_constants.SPACE);
      eventTypes.forEach((eventType) => {
        if (eventType === _eventTypes.RESIZE_EVENT_TYPE) {
          this.removeEventListener(eventType, handler, element);
          const resizeEventListeners = this.findEventListeners(_eventTypes.RESIZE_EVENT_TYPE), resizeEventListenersLength = resizeEventListeners.length;
          if (resizeEventListenersLength === 0) {
            this.resizeObserver.unobserve(this.domElement);
            delete this.resizeObserver;
          }
        } else {
          const eventListener = this.removeEventListener(eventType, handler, element);
          this.domElement.removeEventListener(eventType, eventListener);
        }
      });
    }
    function addEventListener(eventType, handler, element) {
      const eventListener = this.createEventListener(eventType, handler, element);
      if (!this.eventListeners) {
        this.eventListeners = [];
      }
      this.eventListeners.push(eventListener);
      return eventListener;
    }
    function removeEventListener(eventType, handler, element) {
      const eventListener = this.findEventListener(eventType, handler, element), index = this.eventListeners.indexOf(eventListener), start = index, deleteCount = 1;
      this.eventListeners.splice(start, deleteCount);
      if (this.eventListeners.length === 0) {
        delete this.eventListeners;
      }
      return eventListener;
    }
    function findEventListener(eventType, handler, element) {
      const eventListener = this.eventListeners.find((eventListener2) => {
        if (eventListener2.element === element && eventListener2.handler === handler && eventListener2.eventType === eventType) {
          return true;
        }
      });
      return eventListener;
    }
    function findEventListeners(eventType) {
      const eventListeners = [];
      if (this.eventListeners) {
        this.eventListeners.forEach((eventListener) => {
          const found = eventListener.eventType === eventType;
          if (found) {
            eventListeners.push(eventListener);
          }
        });
      }
      return eventListeners;
    }
    function createEventListener(eventType, handler, element) {
      let eventListener;
      const handlerElement = element;
      eventListener = (event) => {
        const element2 = this;
        handler.call(handlerElement, event, element2);
      };
      Object.assign(eventListener, {
        element,
        handler,
        eventType
      });
      return eventListener;
    }
    var eventMixins = {
      onEvent,
      offEvent,
      addEventListener,
      removeEventListener,
      findEventListener,
      findEventListeners,
      createEventListener
    };
    var _default = eventMixins;
  });

  // node_modules/easy/lib/mixins/mouse.js
  var require_mouse = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    var _eventTypes = require_eventTypes();
    function onMouseUp(mouseUpHandler, element) {
      this.onEvent(_eventTypes.MOUSEUP_EVENT_TYPE, mouseUpHandler, element);
    }
    function offMouseUp(mouseUpHandler, element) {
      this.offEvent(_eventTypes.MOUSEUP_EVENT_TYPE, mouseUpHandler, element);
    }
    function onMouseOut(mouseOutHandler, element) {
      this.onEvent(_eventTypes.MOUSEOUT_EVENT_TYPE, mouseOutHandler, element);
    }
    function offMouseOut(mouseOutHandler, element) {
      this.offEvent(_eventTypes.MOUSEOUT_EVENT_TYPE, mouseOutHandler, element);
    }
    function onMouseDown(mouseDownHandler, element) {
      this.onEvent(_eventTypes.MOUSEDOWN_EVENT_TYPE, mouseDownHandler, element);
    }
    function offMouseDown(mouseDownHandler, element) {
      this.offEvent(_eventTypes.MOUSEDOWN_EVENT_TYPE, mouseDownHandler, element);
    }
    function onMouseOver(mouseOverHandler, element) {
      this.onEvent(_eventTypes.MOUSEOVER_EVENT_TYPE, mouseOverHandler, element);
    }
    function offMouseOver(mouseOverHandler, element) {
      this.offEvent(_eventTypes.MOUSEOVER_EVENT_TYPE, mouseOverHandler, element);
    }
    function onMouseMove(mouseMoveHandler, element) {
      this.onEvent(_eventTypes.MOUSEMOVE_EVENT_TYPE, mouseMoveHandler, element);
    }
    function offMouseMove(mouseMoveHandler, element) {
      this.offEvent(_eventTypes.MOUSEMOVE_EVENT_TYPE, mouseMoveHandler, element);
    }
    var mouseMixins = {
      onMouseUp,
      offMouseUp,
      onMouseOut,
      offMouseOut,
      onMouseDown,
      offMouseDown,
      onMouseOver,
      offMouseOver,
      onMouseMove,
      offMouseMove
    };
    var _default = mouseMixins;
  });

  // node_modules/easy/lib/mixins/click.js
  var require_click = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    var _eventTypes = require_eventTypes();
    function onClick(clickHandler, element) {
      this.onEvent(_eventTypes.CLICK_EVENT_TYPE, clickHandler, element);
    }
    function offClick(clickHandler, element) {
      this.offEvent(_eventTypes.CLICK_EVENT_TYPE, clickHandler, element);
    }
    function onAuxClick(auxClickHandler, element) {
      this.onEvent(_eventTypes.AUXCLICK_EVENT_TYPE, auxClickHandler, element);
    }
    function offAuxClick(auxClickHandler, element) {
      this.offEvent(_eventTypes.AUXCLICK_EVENT_TYPE, auxClickHandler, element);
    }
    function onDoubleClick(doubleClickHandler, element) {
      this.onEvent(_eventTypes.DBLCLICK_EVENT_TYPE, doubleClickHandler, element);
    }
    function offDoubleClick(doubleClickHandler, element) {
      this.offEvent(_eventTypes.DBLCLICK_EVENT_TYPE, doubleClickHandler, element);
    }
    var clickMixins = {
      onClick,
      offClick,
      onAuxClick,
      offAuxClick,
      onDoubleClick,
      offDoubleClick
    };
    var _default = clickMixins;
  });

  // node_modules/easy/lib/mixins/touch.js
  var require_touch = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    var _eventTypes = require_eventTypes();
    function onTouchStart(touchStartHandler) {
      this.onEvent(_eventTypes.TOUCHSTART_EVENT_TYPE, touchStartHandler);
    }
    function offTouchStart(touchStartHandler) {
      this.offEvent(_eventTypes.TOUCHSTART_EVENT_TYPE, touchStartHandler);
    }
    function onTouchMove(touchStartHandler) {
      this.onEvent(_eventTypes.TOUCHMOVE_EVENT_TYPE, touchStartHandler);
    }
    function offTouchMove(touchStartHandler) {
      this.offEvent(_eventTypes.TOUCHMOVE_EVENT_TYPE, touchStartHandler);
    }
    function onTouchEnd(touchStartHandler) {
      this.onEvent(_eventTypes.TOUCHEND_EVENT_TYPE, touchStartHandler);
    }
    function offTouchEnd(touchStartHandler) {
      this.offEvent(_eventTypes.TOUCHEND_EVENT_TYPE, touchStartHandler);
    }
    var clickMixins = {
      onTouchStart,
      offTouchStart,
      onTouchMove,
      offTouchMove,
      onTouchEnd,
      offTouchEnd
    };
    var _default = clickMixins;
  });

  // node_modules/easy/lib/mixins/scroll.js
  var require_scroll = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get default() {
        return _default;
      },
      get offScroll() {
        return offScroll;
      },
      get onScroll() {
        return onScroll;
      }
    });
    var _eventTypes = require_eventTypes();
    function onScroll(scrollHandler, element) {
      this.onEvent(_eventTypes.SCROLL_EVENT_TYPE, scrollHandler, element);
    }
    function offScroll(scrollHandler, element) {
      this.offEvent(_eventTypes.SCROLL_EVENT_TYPE, scrollHandler, element);
    }
    function scrollTo(scrollTop, scrollLeft) {
      this.domElement.scrollTo(scrollLeft, scrollTop);
    }
    function getScrollTop() {
      return this.domElement.scrollTop;
    }
    function getScrollLeft() {
      return this.domElement.scrollLeft;
    }
    function getScrollWidth() {
      return this.domElement.scrollWidth;
    }
    function getScrollHeight() {
      return this.domElement.scrollHeight;
    }
    function setScrollTop(scrollTop) {
      this.domElement.scrollTop = scrollTop;
    }
    function setScrollLeft(scrollLeft) {
      this.domElement.scrollLeft = scrollLeft;
    }
    var scrollMixins = {
      onScroll,
      offScroll,
      scrollTo,
      getScrollTop,
      getScrollLeft,
      getScrollWidth,
      getScrollHeight,
      setScrollTop,
      setScrollLeft
    };
    var _default = scrollMixins;
  });

  // node_modules/easy/lib/mixins/resize.js
  var require_resize = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    var _eventTypes = require_eventTypes();
    function onResize(resizeHandler, element) {
      this.onEvent(_eventTypes.RESIZE_EVENT_TYPE, resizeHandler, element);
    }
    function offResize(resizeHandler, element) {
      this.offEvent(_eventTypes.RESIZE_EVENT_TYPE, resizeHandler, element);
    }
    var resizeMixins = {
      onResize,
      offResize
    };
    var _default = resizeMixins;
  });

  // node_modules/easy/lib/mixins/fullScreen.js
  var require_fullScreen = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    var _eventTypes = require_eventTypes();
    function onFullScreenChange(fullScreenChangeHandler, element) {
      this.onEvent(_eventTypes.FULLSCREENCHANGE_EVENT_TYPE, fullScreenChangeHandler, element);
    }
    function offFullScreenChange(fullScreenChangeHandler, element) {
      this.offEvent(_eventTypes.FULLSCREENCHANGE_EVENT_TYPE, fullScreenChangeHandler, element);
    }
    function requestFullScreen(errorHandler) {
      const domElement = this.getDOMElement();
      domElement.requestFullscreen().catch(errorHandler);
    }
    function exitFullScreen() {
      document.exitFullscreen();
    }
    function isFullScreen() {
      const {fullscreenElement} = document, fullScreen = fullscreenElement !== null;
      return fullScreen;
    }
    var fullscreenMixins = {
      onFullScreenChange,
      offFullScreenChange,
      requestFullScreen,
      exitFullScreen,
      isFullScreen
    };
    var _default = fullscreenMixins;
  });

  // node_modules/easy/lib/utilities/async.js
  var require_async = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "forEach", {
      enumerable: true,
      get: function() {
        return forEach;
      }
    });
    function forEach(array, operation, done, context) {
      const length = array.length;
      let count = -1;
      function next() {
        count++;
        const terminate = count === length;
        if (terminate) {
          done();
        } else {
          const index = count, element = array[index];
          operation(element, next, done, context, index);
        }
      }
      next();
    }
  });

  // node_modules/easy/lib/mixins/customEvent.js
  var require_customEvent = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    var _constants = require_constants();
    var _async = require_async();
    function onCustomEvent(customEventTypes, customHandler, element = this) {
      customEventTypes = customEventTypes.split(_constants.SPACE);
      customEventTypes.forEach((customEventType) => {
        this.addCustomEventListener(customEventType, customHandler, element);
      });
    }
    function offCustomEvent(customEventTypes, customHandler, element = this) {
      customEventTypes = customEventTypes.split(_constants.SPACE);
      customEventTypes.forEach((customEventType) => {
        this.removeCustomEventListener(customEventType, customHandler, element);
      });
    }
    function callCustomHandlers(customEventType, ...remainingArguments) {
      const customEventListeners = this.findCustomEventListeners(customEventType);
      customEventListeners.forEach((customEventListener) => {
        const {customHandler, element: customHandlerElement} = customEventListener;
        customHandler.call(customHandlerElement, ...remainingArguments);
      });
    }
    function callCustomHandlersAsync(customEventType, ...remainingArguments) {
      const customEventListeners = this.findCustomEventListeners(customEventType), done = remainingArguments.pop();
      (0, _async.forEach)(customEventListeners, (customEventListener, next) => {
        const {customHandler, element: customHandlerElement} = customEventListener, done2 = next;
        customHandler.call(customHandlerElement, ...remainingArguments, done2);
      }, done);
    }
    function addCustomEventListener(customEventType, customHandler, element) {
      const customEventListener = this.createCustomEventListener(customEventType, customHandler, element);
      if (!this.customEventListeners) {
        this.customEventListeners = [];
      }
      this.customEventListeners.push(customEventListener);
      return customEventListener;
    }
    function removeCustomEventListener(customEventType, customHandler, element) {
      const customEventListener = this.findCustomEventListener(customEventType, customHandler, element), index = this.customEventListeners.indexOf(customEventListener), start = index, deleteCount = 1;
      this.customEventListeners.splice(start, deleteCount);
      if (this.customEventListeners.length === 0) {
        delete this.customEventListeners;
      }
      return customEventListener;
    }
    function findCustomEventListener(customEventType, customHandler, element) {
      const customEventListener = this.customEventListeners.find((customEventListener2) => {
        if (customEventListener2.element === element && customEventListener2.customHandler === customHandler && customEventListener2.customEventType === customEventType) {
          return true;
        }
      });
      return customEventListener;
    }
    function findCustomEventListeners(customEventType) {
      const customEventListeners = [];
      if (this.customEventListeners) {
        this.customEventListeners.forEach((customEventListener) => {
          const found = customEventListener.customEventType === customEventType;
          if (found) {
            customEventListeners.push(customEventListener);
          }
        });
      }
      return customEventListeners;
    }
    function createCustomEventListener(customEventType, customHandler, element) {
      let customEventListener;
      customEventListener = () => {
      };
      Object.assign(customEventListener, {
        element,
        customHandler,
        customEventType
      });
      return customEventListener;
    }
    var customEventMixins = {
      onCustomEvent,
      offCustomEvent,
      callCustomHandlers,
      callCustomHandlersAsync,
      addCustomEventListener,
      removeCustomEventListener,
      findCustomEventListener,
      findCustomEventListeners,
      createCustomEventListener
    };
    var _default = customEventMixins;
  });

  // node_modules/easy/lib/element.js
  var require_element3 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return Element;
      }
    });
    var _offset = /* @__PURE__ */ _interop_require_default(require_offset());
    var _bounds = /* @__PURE__ */ _interop_require_default(require_bounds());
    var _jsx = /* @__PURE__ */ _interop_require_default(require_jsx());
    var _key = /* @__PURE__ */ _interop_require_default(require_key());
    var _state = /* @__PURE__ */ _interop_require_default(require_state());
    var _event = /* @__PURE__ */ _interop_require_default(require_event());
    var _mouse = /* @__PURE__ */ _interop_require_default(require_mouse());
    var _click = /* @__PURE__ */ _interop_require_default(require_click());
    var _touch = /* @__PURE__ */ _interop_require_default(require_touch());
    var _scroll = /* @__PURE__ */ _interop_require_default(require_scroll());
    var _resize = /* @__PURE__ */ _interop_require_default(require_resize());
    var _element = /* @__PURE__ */ _interop_require_default(require_element2());
    var _fullScreen = /* @__PURE__ */ _interop_require_default(require_fullScreen());
    var _customEvent = /* @__PURE__ */ _interop_require_default(require_customEvent());
    var _array = require_array();
    var _object = require_object();
    var _name = require_name();
    var _element1 = require_element();
    var _constants = require_constants();
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var Element = class {
      constructor(selector) {
        if (selector !== null) {
          const element = this, domElement = document.querySelector(selector);
          (0, _element1.constructElement)(element, domElement);
        }
      }
      getDOMElement() {
        return this.domElement;
      }
      getOffset() {
        const offset = _offset.default.fromDOMElement(this.domElement);
        return offset;
      }
      getBounds() {
        const bounds = _bounds.default.fromDOMElement(this.domElement);
        return bounds;
      }
      getWidth() {
        return this.domElement.offsetWidth;
      }
      getHeight() {
        return this.domElement.offsetHeight;
      }
      getInnerWidth() {
        return this.domElement.clientWidth;
      }
      getInnerHeight() {
        return this.domElement.clientHeight;
      }
      setWidth(width) {
        width = `${width}px`;
        this.style(_constants.WIDTH, width);
      }
      setHeight(height) {
        height = `${height}px`;
        this.style(_constants.HEIGHT, height);
      }
      hasAttribute(name) {
        return this.domElement.hasAttribute(name);
      }
      getAttribute(name) {
        return this.domElement.getAttribute(name);
      }
      setAttribute(name, value) {
        this.domElement.setAttribute(name, value);
      }
      clearAttribute(name) {
        this.domElement.removeAttribute(name);
      }
      addAttribute(name, value) {
        this.setAttribute(name, value);
      }
      removeAttribute(name) {
        this.clearAttribute(name);
      }
      hasClass(className) {
        return this.domElement.classList.contains(className);
      }
      setClass(className) {
        this.domElement.className = className;
      }
      addClass(className) {
        this.domElement.classList.add(className);
      }
      removeClass(className) {
        this.domElement.classList.remove(className);
      }
      toggleClass(className) {
        this.domElement.classList.toggle(className);
      }
      removeAllClasses() {
        this.domElement.className = _constants.EMPTY_STRING;
      }
      addTo(parentElement) {
        parentElement.add(this);
      }
      appendTo(parentElement) {
        parentElement.append(this);
      }
      prependTo(parentElement) {
        parentElement.prepend(this);
      }
      removeFrom(parentElement) {
        parentElement.remove(this);
      }
      insert(element) {
        this.append(element);
      }
      add(element) {
        this.append(element);
      }
      remove(element) {
        if (element) {
          element.remove();
          return;
        }
        this.domElement.remove();
      }
      prepend(element) {
        const domElement = element.domElement, referenceDOMElement = this.domElement.firstChild;
        this.domElement.insertBefore(domElement, referenceDOMElement);
      }
      append(element) {
        const domElement = element.domElement, referenceDOMElement = null;
        this.domElement.insertBefore(domElement, referenceDOMElement);
      }
      insertBefore(siblingElement) {
        const parentDOMNode = siblingElement.domElement.parentNode, referenceDOMElement = siblingElement.domElement;
        parentDOMNode.insertBefore(this.domElement, referenceDOMElement);
      }
      insertAfter(siblingElement) {
        const parentDOMNode = siblingElement.domElement.parentNode, referenceDOMElement = siblingElement.domElement.nextSibling;
        parentDOMNode.insertBefore(this.domElement, referenceDOMElement);
      }
      mount(element) {
        this.add(element);
        (0, _element1.mountElement)(element);
      }
      unmount(element) {
        (0, _element1.unmountElement)(element);
        this.remove(element);
      }
      mountBefore(siblingElement) {
        this.insertBefore(siblingElement);
        const element = this;
        (0, _element1.mountElement)(element);
      }
      mountAfter(siblingElement) {
        this.insertAfter(siblingElement);
        const element = this;
        (0, _element1.mountElement)(element);
      }
      show(displayStyle = _constants.BLOCK) {
        this.display(displayStyle);
      }
      hide() {
        this.style(_constants.DISPLAY, _constants.NONE);
      }
      display(display) {
        this.style(_constants.DISPLAY, display);
      }
      enable() {
        this.clearAttribute(_constants.DISABLED);
      }
      disable() {
        this.setAttribute(_constants.DISABLED, _constants.DISABLED);
      }
      isEnabled() {
        const disabled = this.isDisabled(), enabled = !disabled;
        return enabled;
      }
      isDisabled() {
        const disabled = this.hasAttribute(_constants.DISABLED);
        return disabled;
      }
      isDisplayed() {
        const display = this.css(_constants.DISPLAY), displayed = display !== _constants.NONE;
        return displayed;
      }
      isShowing() {
        const displayed = this.isDisplayed(), showing = displayed;
        return showing;
      }
      isHidden() {
        const displayed = this.isDisplayed(), hidden = !displayed;
        return hidden;
      }
      style(name, value = null) {
        if (value !== null) {
          this.domElement.style[name] = value;
          return;
        }
        const style = this.domElement.style[name];
        return style;
      }
      html(html = null) {
        if (html !== null) {
          const innerHTML2 = html;
          this.domElement.innerHTML = innerHTML2;
          return;
        }
        const innerHTML = this.domElement.innerHTML;
        html = innerHTML;
        return html;
      }
      css(css = null) {
        if (css === null) {
          css = {};
          const computedStyles = getComputedStyle(this.domElement);
          for (let index = 0; index < computedStyles.length; index++) {
            const computedStyle = computedStyles[index], name = computedStyle, value = computedStyles.getPropertyValue(name);
            css[name] = value;
          }
        } else if (typeof css === _constants.STRING) {
          let name = css;
          const computedStyles = getComputedStyle(this.domElement), value = computedStyles.getPropertyValue(name);
          css = value;
        } else {
          const names = Object.keys(css);
          names.forEach((name) => {
            const value = css[name];
            this.style(name, value);
          });
        }
        return css;
      }
      destroy() {
        const element = this;
        (0, _element1.destroyElement)(element);
      }
      static fromClass(Class, properties, ...remainingArguments) {
        const {tagName} = Class, element = elementFromTagName(Class, tagName, ...remainingArguments), defaultProperties = defaultPropertiesFromClass(Class), ignoredProperties = ignoredPropertiesFromClass(Class);
        element.applyProperties(properties, defaultProperties, ignoredProperties);
        element.initialise && element.initialise();
        return element;
      }
      static fromTagName(tagName, properties, ...remainingArguments) {
        const Class = Element, element = elementFromTagName(Class, tagName, ...remainingArguments), defaultProperties = {}, ignoredProperties = [];
        element.applyProperties(properties, defaultProperties, ignoredProperties);
        element.initialise && element.initialise();
        return element;
      }
    };
    Object.assign(Element.prototype, _jsx.default);
    Object.assign(Element.prototype, _key.default);
    Object.assign(Element.prototype, _mouse.default);
    Object.assign(Element.prototype, _click.default);
    Object.assign(Element.prototype, _state.default);
    Object.assign(Element.prototype, _event.default);
    Object.assign(Element.prototype, _touch.default);
    Object.assign(Element.prototype, _scroll.default);
    Object.assign(Element.prototype, _resize.default);
    Object.assign(Element.prototype, _element.default);
    Object.assign(Element.prototype, _fullScreen.default);
    Object.assign(Element.prototype, _customEvent.default);
    function elementFromTagName(Class, tagName, ...remainingArguments) {
      const selector = null, element = new (Function.prototype.bind.call(Class, null, selector, ...remainingArguments))(), domElement = (0, _name.isSVGTagName)(tagName) ? document.createElementNS(_constants.SVG_NAMESPACE_URI, tagName) : document.createElement(tagName);
      (0, _element1.constructElement)(element, domElement);
      return element;
    }
    function defaultPropertiesFromClass(Class, defaultProperties = {}) {
      if (Class.hasOwnProperty(_constants.DEFAULT_PROPERTIES)) {
        defaultProperties = (0, _object.combine)(defaultProperties, Class[_constants.DEFAULT_PROPERTIES]);
      }
      const superClass = Object.getPrototypeOf(Class);
      if (superClass !== null) {
        defaultProperties = defaultPropertiesFromClass(superClass, defaultProperties);
      }
      return defaultProperties;
    }
    function ignoredPropertiesFromClass(Class, ignoredProperties = []) {
      if (Class.hasOwnProperty(_constants.IGNORED_PROPERTIES)) {
        ignoredProperties = (0, _array.augment)(ignoredProperties, Class[_constants.IGNORED_PROPERTIES], (ignoredProperty) => {
          if (!ignoredProperties.includes(ignoredProperty)) {
            return true;
          }
        });
      }
      const superClass = Object.getPrototypeOf(Class);
      if (superClass !== null) {
        ignoredProperties = ignoredPropertiesFromClass(superClass, ignoredProperties);
      }
      return ignoredProperties;
    }
  });

  // node_modules/easy/lib/react.js
  var require_react = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    var _element = /* @__PURE__ */ _interop_require_default(require_element3());
    var _array = require_array();
    var _constants = require_constants();
    var _elements = require_elements();
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function createElement(firstArgument, properties, ...childElements) {
      let element = null;
      if (firstArgument) {
        childElements = sanitiseChildElements(childElements);
        properties = Object.assign({
          childElements
        }, properties);
        if (false) {
        } else if (_element.default.isPrototypeOf(firstArgument)) {
          const Class = firstArgument;
          element = Class.fromClass(Class, properties);
        } else if (typeof firstArgument === _constants.STRING) {
          const tagName = firstArgument;
          element = _element.default.fromTagName(tagName, properties);
        } else if (typeof firstArgument === _constants.FUNCTION) {
          const elementFunction = firstArgument;
          element = elementFunction(properties);
        }
      }
      return element;
    }
    var React2 = {
      createElement
    };
    var _default = React2;
    function sanitiseChildElements(childElements) {
      childElements = (0, _array.flatten)(childElements);
      childElements = (0, _elements.removeFalseyElements)(childElements);
      childElements = (0, _elements.replaceStringsWithTextElements)(childElements);
      return childElements;
    }
  });

  // node_modules/easy/lib/mouseButtons.js
  var require_mouseButtons = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get LEFT_MOUSE_BUTTON() {
        return LEFT_MOUSE_BUTTON;
      },
      get MIDDLE_MOUSE_BUTTON() {
        return MIDDLE_MOUSE_BUTTON;
      },
      get RIGHT_MOUSE_BUTTON() {
        return RIGHT_MOUSE_BUTTON;
      },
      get default() {
        return _default;
      }
    });
    var LEFT_MOUSE_BUTTON = 0;
    var RIGHT_MOUSE_BUTTON = 2;
    var MIDDLE_MOUSE_BUTTON = 1;
    var _default = {
      LEFT_MOUSE_BUTTON,
      RIGHT_MOUSE_BUTTON,
      MIDDLE_MOUSE_BUTTON
    };
  });

  // node_modules/easy/lib/mixins/input.js
  var require_input = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    var _eventTypes = require_eventTypes();
    function onInput(inputHandler, element) {
      this.onEvent(_eventTypes.INPUT_EVENT_TYPE, inputHandler, element);
    }
    function offInput(inputHandler, element) {
      this.offEvent(_eventTypes.INPUT_EVENT_TYPE, inputHandler, element);
    }
    function onChange(changeHandler, element) {
      this.onEvent(_eventTypes.CHANGE_EVENT_TYPE, changeHandler, element);
    }
    function offChange(changeHandler, element) {
      this.offEvent(_eventTypes.CHANGE_EVENT_TYPE, changeHandler, element);
    }
    function getValue() {
      return this.domElement.value;
    }
    function setValue(value) {
      this.domElement.value = value;
    }
    function isReadOnly() {
      return this.domElement.readOnly;
    }
    function setReadOnly(readOnly) {
      this.domElement.readOnly = readOnly;
    }
    var inputMixins = {
      onInput,
      offInput,
      onChange,
      offChange,
      getValue,
      setValue,
      isReadOnly,
      setReadOnly
    };
    var _default = inputMixins;
  });

  // node_modules/easy/lib/mixins/focus.js
  var require_focus = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    var _eventTypes = require_eventTypes();
    function onBlur(blurHandler, element) {
      this.onEvent(_eventTypes.BLUR_EVENT_TYPE, blurHandler, element);
    }
    function offBlur(blurHandler, element) {
      this.offEvent(_eventTypes.BLUR_EVENT_TYPE, blurHandler, element);
    }
    function onFocus(focusHandler, element) {
      this.onEvent(_eventTypes.FOCUS_EVENT_TYPE, focusHandler, element);
    }
    function offFocus(focusHandler, element) {
      this.offEvent(_eventTypes.FOCUS_EVENT_TYPE, focusHandler, element);
    }
    function blur() {
      this.domElement.blur();
    }
    function focus() {
      this.domElement.focus();
    }
    function hasFocus() {
      const focus2 = document.activeElement === this.domElement;
      return focus2;
    }
    var focusMixins = {
      onBlur,
      offBlur,
      onFocus,
      offFocus,
      blur,
      focus,
      hasFocus
    };
    var _default = focusMixins;
  });

  // node_modules/easy/lib/mixins/selection.js
  var require_selection = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    var _eventTypes = require_eventTypes();
    function onCut(cutHandler, element) {
      this.onEvent(_eventTypes.CUT_EVENT_TYPE, cutHandler, element);
    }
    function offCut(cutHandler, element) {
      this.offEvent(_eventTypes.CUT_EVENT_TYPE, cutHandler, element);
    }
    function onCopy(copyHandler, element) {
      this.onEvent(_eventTypes.COPY_EVENT_TYPE, copyHandler, element);
    }
    function offCopy(copyHandler, element) {
      this.offEvent(_eventTypes.COPY_EVENT_TYPE, copyHandler, element);
    }
    function onPaste(pasteHandler, element) {
      this.onEvent(_eventTypes.PASTE_EVENT_TYPE, pasteHandler, element);
    }
    function offPaste(pasteHandler, element) {
      this.offEvent(_eventTypes.PASTE_EVENT_TYPE, pasteHandler, element);
    }
    function getSelectionStart() {
      return this.domElement.selectionStart;
    }
    function getSelectionEnd() {
      return this.domElement.selectionEnd;
    }
    function setSelectionStart(selectionStart) {
      this.domElement.selectionStart = selectionStart;
    }
    function setSelectionEnd(selectionEnd) {
      this.domElement.selectionEnd = selectionEnd;
    }
    function select() {
      this.domElement.select();
    }
    var selectionMixins = {
      onCut,
      offCut,
      onCopy,
      offCopy,
      onPaste,
      offPaste,
      getSelectionStart,
      getSelectionEnd,
      setSelectionStart,
      setSelectionEnd,
      select
    };
    var _default = selectionMixins;
  });

  // node_modules/easy/lib/document.js
  var require_document = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    var _key = /* @__PURE__ */ _interop_require_default(require_key());
    var _event = /* @__PURE__ */ _interop_require_default(require_event());
    var _mouse = /* @__PURE__ */ _interop_require_default(require_mouse());
    var _click = /* @__PURE__ */ _interop_require_default(require_click());
    var _constants = require_constants();
    var _eventTypes = require_eventTypes();
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var Document = class {
      constructor() {
        this.domElement = document;
      }
      getDOMElement() {
        return this.domElement;
      }
      getSelection() {
        return this.domElement.getSelection();
      }
      createRange() {
        return this.domElement.createRange();
      }
      createTextNode(data) {
        return this.domElement.createTextNode(data);
      }
      onSelectionChange(selectionChangeHandler, element) {
        this.onEvent(_eventTypes.SELECTIONCHANGE_EVENT_TYPE, selectionChangeHandler, element);
      }
      offSelectionChange(selectionChangeHandler, element) {
        this.offEvent(_eventTypes.SELECTIONCHANGE_EVENT_TYPE, selectionChangeHandler, element);
      }
      createEventListener(eventType, handler, element) {
        let eventListener;
        const handlerElement = element;
        eventListener = (event) => {
          if (eventType === _eventTypes.SELECTIONCHANGE_EVENT_TYPE) {
            const {domElement} = handlerElement, {currentTarget} = event, {activeElement} = currentTarget;
            if (domElement !== activeElement) {
              return;
            }
          }
          const element2 = this;
          handler.call(handlerElement, event, element2);
        };
        Object.assign(eventListener, {
          element,
          handler,
          eventType
        });
        return eventListener;
      }
    };
    Object.assign(Document.prototype, _key.default);
    Object.assign(Document.prototype, _event.default);
    Object.assign(Document.prototype, _mouse.default);
    Object.assign(Document.prototype, _click.default);
    var _default = typeof document === _constants.UNDEFINED ? void 0 : new Document();
  });

  // node_modules/easy/lib/window.js
  var require_window = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    var _key = /* @__PURE__ */ _interop_require_default(require_key());
    var _event = /* @__PURE__ */ _interop_require_default(require_event());
    var _mouse = /* @__PURE__ */ _interop_require_default(require_mouse());
    var _click = /* @__PURE__ */ _interop_require_default(require_click());
    var _focus = /* @__PURE__ */ _interop_require_default(require_focus());
    var _constants = require_constants();
    var _eventTypes = require_eventTypes();
    var _scroll = require_scroll();
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var Window = class {
      constructor() {
        this.domElement = window;
      }
      getDOMElement() {
        return this.domElement;
      }
      assign(...sources) {
        const target = this.domElement;
        Object.assign(target, ...sources);
      }
      reload() {
        window.location.reload();
      }
      getWidth() {
        return this.domElement.innerWidth;
      }
      getHeight() {
        return this.domElement.innerHeight;
      }
      getScrollTop() {
        return this.domElement.pageYOffset;
      }
      getScrollLeft() {
        return this.domElement.pageXOffset;
      }
      getSelection() {
        return this.domElement.getSelection();
      }
      getScreenWidth() {
        return this.domElement.screen.width;
      }
      getScreenHeight() {
        return this.domElement.screen.height;
      }
      scrollTo(scrollTop, scrollLeft) {
        this.domElement.scrollTo(scrollLeft, scrollTop);
      }
      onResize(resizeHandler, element) {
        const eventType = _eventTypes.RESIZE_EVENT_TYPE, eventListener = this.addEventListener(eventType, resizeHandler, element);
        this.domElement.addEventListener(eventType, eventListener);
      }
      offResize(resizeHandler, element) {
        const eventType = _eventTypes.RESIZE_EVENT_TYPE, eventListener = this.removeEventListener(eventType, resizeHandler, element);
        this.domElement.removeEventListener(eventType, eventListener);
      }
    };
    Object.assign(Window.prototype, _key.default);
    Object.assign(Window.prototype, _event.default);
    Object.assign(Window.prototype, _mouse.default);
    Object.assign(Window.prototype, _click.default);
    Object.assign(Window.prototype, _focus.default);
    Object.assign(Window.prototype, {
      onScroll: _scroll.onScroll,
      offScroll: _scroll.offScroll
    });
    var _default = typeof window === _constants.UNDEFINED ? void 0 : new Window();
  });

  // node_modules/easy/lib/element/body.js
  var require_body = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return Body;
      }
    });
    var _element = /* @__PURE__ */ _interop_require_default(require_element3());
    var _constants = require_constants();
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var Body = class extends _element.default {
      constructor(selector = _constants.BODY) {
        super(selector);
      }
    };
    __publicField(Body, "tagName", "body");
  });

  // node_modules/easy/lib/element/link.js
  var require_link = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return Link;
      }
    });
    var _element = /* @__PURE__ */ _interop_require_default(require_element3());
    var _focus = /* @__PURE__ */ _interop_require_default(require_focus());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var Link = class extends _element.default {
      getHref() {
        return this.getAttribute("href");
      }
      setHref(href) {
        return this.setAttribute("href", href);
      }
    };
    __publicField(Link, "tagName", "a");
    Object.assign(Link.prototype, _focus.default);
  });

  // node_modules/easy/lib/element/input.js
  var require_input2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return Input;
      }
    });
    var _element = /* @__PURE__ */ _interop_require_default(require_element3());
    var _input = /* @__PURE__ */ _interop_require_default(require_input());
    var _focus = /* @__PURE__ */ _interop_require_default(require_focus());
    var _selection = /* @__PURE__ */ _interop_require_default(require_selection());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var Input = class extends _element.default {
    };
    __publicField(Input, "tagName", "input");
    Object.assign(Input.prototype, _input.default);
    Object.assign(Input.prototype, _focus.default);
    Object.assign(Input.prototype, _selection.default);
  });

  // node_modules/easy/lib/element/button.js
  var require_button = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return Button;
      }
    });
    var _element = /* @__PURE__ */ _interop_require_default(require_element3());
    var _focus = /* @__PURE__ */ _interop_require_default(require_focus());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var Button = class extends _element.default {
    };
    __publicField(Button, "tagName", "button");
    Object.assign(Button.prototype, _focus.default);
  });

  // node_modules/easy/lib/element/select.js
  var require_select = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return Select;
      }
    });
    var _element = /* @__PURE__ */ _interop_require_default(require_element3());
    var _input = /* @__PURE__ */ _interop_require_default(require_input());
    var _focus = /* @__PURE__ */ _interop_require_default(require_focus());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var Select = class extends _element.default {
    };
    __publicField(Select, "tagName", "select");
    Object.assign(Select.prototype, _input.default);
    Object.assign(Select.prototype, _focus.default);
  });

  // node_modules/easy/lib/element/checkbox.js
  var require_checkbox = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return Checkbox;
      }
    });
    var _element = /* @__PURE__ */ _interop_require_default(require_element3());
    var _input = /* @__PURE__ */ _interop_require_default(require_input());
    var _focus = /* @__PURE__ */ _interop_require_default(require_focus());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var Checkbox = class extends _element.default {
      isChecked() {
        return this.domElement.checked;
      }
      check(checked = true) {
        this.domElement.checked = checked;
      }
    };
    __publicField(Checkbox, "tagName", "input");
    __publicField(Checkbox, "defaultProperties", {
      type: "checkbox"
    });
    Object.assign(Checkbox.prototype, _input.default);
    Object.assign(Checkbox.prototype, _focus.default);
  });

  // node_modules/easy/lib/element/textarea.js
  var require_textarea = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return Textarea;
      }
    });
    var _element = /* @__PURE__ */ _interop_require_default(require_element3());
    var _input = /* @__PURE__ */ _interop_require_default(require_input());
    var _focus = /* @__PURE__ */ _interop_require_default(require_focus());
    var _selection = /* @__PURE__ */ _interop_require_default(require_selection());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var Textarea = class extends _element.default {
    };
    __publicField(Textarea, "tagName", "textarea");
    Object.assign(Textarea.prototype, _input.default);
    Object.assign(Textarea.prototype, _focus.default);
    Object.assign(Textarea.prototype, _selection.default);
  });

  // node_modules/easy/lib/index.js
  var require_lib = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get Body() {
        return _body.default;
      },
      get Bounds() {
        return _bounds.default;
      },
      get Button() {
        return _button.default;
      },
      get Checkbox() {
        return _checkbox.default;
      },
      get Element() {
        return _element1.default;
      },
      get Input() {
        return _input1.default;
      },
      get Link() {
        return _link.default;
      },
      get Offset() {
        return _offset.default;
      },
      get React() {
        return _react.default;
      },
      get Select() {
        return _select.default;
      },
      get TextElement() {
        return _textElement.default;
      },
      get Textarea() {
        return _textarea.default;
      },
      get customEventMixins() {
        return _customEvent.default;
      },
      get document() {
        return _document.default;
      },
      get elementUtilities() {
        return _element.default;
      },
      get eventTypes() {
        return _eventTypes.default;
      },
      get focusMixins() {
        return _focus.default;
      },
      get inputMixins() {
        return _input.default;
      },
      get mouseButtons() {
        return _mouseButtons.default;
      },
      get selectionMixins() {
        return _selection.default;
      },
      get window() {
        return _window.default;
      }
    });
    var _react = /* @__PURE__ */ _interop_require_default(require_react());
    var _bounds = /* @__PURE__ */ _interop_require_default(require_bounds());
    var _offset = /* @__PURE__ */ _interop_require_default(require_offset());
    var _eventTypes = /* @__PURE__ */ _interop_require_default(require_eventTypes());
    var _mouseButtons = /* @__PURE__ */ _interop_require_default(require_mouseButtons());
    var _element = /* @__PURE__ */ _interop_require_default(require_element());
    var _input = /* @__PURE__ */ _interop_require_default(require_input());
    var _focus = /* @__PURE__ */ _interop_require_default(require_focus());
    var _selection = /* @__PURE__ */ _interop_require_default(require_selection());
    var _customEvent = /* @__PURE__ */ _interop_require_default(require_customEvent());
    var _element1 = /* @__PURE__ */ _interop_require_default(require_element3());
    var _textElement = /* @__PURE__ */ _interop_require_default(require_textElement());
    var _document = /* @__PURE__ */ _interop_require_default(require_document());
    var _window = /* @__PURE__ */ _interop_require_default(require_window());
    var _body = /* @__PURE__ */ _interop_require_default(require_body());
    var _link = /* @__PURE__ */ _interop_require_default(require_link());
    var _input1 = /* @__PURE__ */ _interop_require_default(require_input2());
    var _button = /* @__PURE__ */ _interop_require_default(require_button());
    var _select = /* @__PURE__ */ _interop_require_default(require_select());
    var _checkbox = /* @__PURE__ */ _interop_require_default(require_checkbox());
    var _textarea = /* @__PURE__ */ _interop_require_default(require_textarea());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
  });

  // lib/juxtapose.js
  var require_juxtapose = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _easy = require_lib();
    Object.assign(globalThis, {
      React: _easy.React
    });
  });

  // lib/index.js
  var require_lib2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    require_juxtapose();
  });

  // lib/example/mvcApplication/controller.js
  var require_controller = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    var controller = {};
    var _default = controller;
  });

  // lib/example/mvcApplication/constants.js
  var require_constants2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get EMPTY_STRING() {
        return EMPTY_STRING;
      },
      get ERROR_DELAY() {
        return ERROR_DELAY;
      }
    });
    var ERROR_DELAY = 1e3;
    var EMPTY_STRING = "";
  });

  // lib/example/mvcApplication/view/input/password.js
  var require_password = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return PasswordInput;
      }
    });
    var _easy = require_lib();
    var _constants = require_constants2();
    var PasswordInput = class extends _easy.InputElement {
      getPassword() {
        const value = this.getValue(), password = value;
        return password;
      }
      clearPassword() {
        const password = _constants.EMPTY_STRING, value = password;
        this.setValue(value);
      }
      parentContext() {
        const getPassword = this.getPassword.bind(this), clearPassword = this.clearPassword.bind(this);
        return {
          getPassword,
          clearPassword
        };
      }
    };
    __publicField(PasswordInput, "tagName", "input");
    __publicField(PasswordInput, "defaultProperties", {
      type: "password"
    });
  });

  // lib/example/mvcApplication/view/paragraph/validationError.js
  var require_validationError = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return ValidationErrorParagraph;
      }
    });
    var _easy = require_lib();
    var _constants = require_constants2();
    var ValidationErrorParagraph = class extends _easy.Element {
      constructor(selector, timeout) {
        super(selector);
        this.timeout = timeout;
      }
      clearValidationError() {
        const html = _constants.EMPTY_STRING;
        this.html(html);
      }
      showValidationError(validationError) {
        const html = validationError;
        this.html(html);
        if (this.timeout !== null) {
          clearTimeout(this.timeout);
        }
        this.timeout = setTimeout(() => {
          this.timeout = null;
          this.clearValidationError();
        }, _constants.ERROR_DELAY);
      }
      parentContext() {
        return {
          showValidationError: this.showValidationError.bind(this)
        };
      }
      static fromClass(Class, properties, ...remainingArguments) {
        const timeout = null, validationErrorParagraph = _easy.Element.fromClass(Class, properties, timeout, ...remainingArguments);
        return validationErrorParagraph;
      }
    };
    __publicField(ValidationErrorParagraph, "tagName", "p");
    __publicField(ValidationErrorParagraph, "defaultProperties", {
      className: "validation error"
    });
  });

  // lib/example/mvcApplication/view/form/password.js
  var require_password2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return PasswordForm;
      }
    });
    var _easy = require_lib();
    var _controller = /* @__PURE__ */ _interop_require_default(require_controller());
    var _password = /* @__PURE__ */ _interop_require_default(require_password());
    var _validationError = /* @__PURE__ */ _interop_require_default(require_validationError());
    var _constants = require_constants2();
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var PasswordForm = class extends _easy.Element {
      validateAndSubmitForm() {
        const passwordValid = this.validateForm();
        if (!passwordValid) {
          this.showValidationError("The password is invalid");
        } else {
          this.submitForm();
        }
      }
      validateForm() {
        const password = this.getPassword(), passwordValid = isPasswordValid(password);
        return passwordValid;
      }
      submitForm() {
        const password = this.getPassword();
        _controller.default.setPassword(password);
        this.clearPassword();
      }
      childElements() {
        return [
          /* @__PURE__ */ React.createElement(_password.default, null),
          /* @__PURE__ */ React.createElement(_validationError.default, null),
          /* @__PURE__ */ React.createElement(_easy.Button, {
            className: "submit",
            onClick: (event, element) => {
              event.preventDefault();
              this.validateAndSubmitForm();
            }
          }, "Submit")
        ];
      }
      initialise() {
        this.assignContext();
      }
    };
    __publicField(PasswordForm, "tagName", "form");
    __publicField(PasswordForm, "defaultProperties", {
      className: "password"
    });
    function isPasswordValid(password) {
      const passwordValid = password !== _constants.EMPTY_STRING;
      return passwordValid;
    }
  });

  // lib/example/mvcApplication/view/paragraph/message.js
  var require_message = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return MessageParagraph;
      }
    });
    var _easy = require_lib();
    var MessageParagraph = class extends _easy.Element {
      showMessage(message) {
        const html = message;
        this.html(html);
      }
      parentContext() {
        const showMessage = this.showMessage.bind(this);
        return {
          showMessage
        };
      }
    };
    __publicField(MessageParagraph, "tagName", "p");
    __publicField(MessageParagraph, "defaultProperties", {
      className: "message"
    });
  });

  // lib/example/mvcApplication/view/button/resetPassword.js
  var require_resetPassword = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return ResetPasswordButton;
      }
    });
    var _easy = require_lib();
    var _controller = /* @__PURE__ */ _interop_require_default(require_controller());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var ResetPasswordButton = class extends _easy.Element {
      clickHandler = (event, element) => {
        _controller.default.resetPassword();
      };
      didMount() {
        this.onClick(this.clickHandler, this);
      }
      willMount() {
        this.offClick(this.clickHandler, this);
      }
      childElements() {
        return "Reset password";
      }
    };
    __publicField(ResetPasswordButton, "tagName", "button");
    __publicField(ResetPasswordButton, "defaultProperties", {
      className: "reset-password"
    });
  });

  // lib/example/mvcApplication/view.js
  var require_view = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return View;
      }
    });
    var _easy = require_lib();
    var _password = /* @__PURE__ */ _interop_require_default(require_password2());
    var _message = /* @__PURE__ */ _interop_require_default(require_message());
    var _resetPassword = /* @__PURE__ */ _interop_require_default(require_resetPassword());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var View = class extends _easy.Element {
      childElements() {
        return [
          /* @__PURE__ */ React.createElement(_password.default, null),
          /* @__PURE__ */ React.createElement(_resetPassword.default, null),
          /* @__PURE__ */ React.createElement(_message.default, null)
        ];
      }
      initialise() {
        this.assignContext();
      }
    };
    __publicField(View, "tagName", "div");
    __publicField(View, "defaultProperties", {
      className: "view"
    });
  });

  // lib/example/mvcApplication/model.js
  var require_model = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return Model;
      }
    });
    var Model = class {
      constructor() {
        this.password = null;
      }
      setPassword(password) {
        this.password = password;
      }
      resetPassword() {
        this.password = null;
      }
    };
  });

  // lib/example/mvcApplication.js
  var require_mvcApplication = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return mvcApplication;
      }
    });
    require_lib2();
    var _easy = require_lib();
    var _view = /* @__PURE__ */ _interop_require_default(require_view());
    var _model = /* @__PURE__ */ _interop_require_default(require_model());
    var _controller = /* @__PURE__ */ _interop_require_default(require_controller());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function mvcApplication() {
      const model = new _model.default(), view = /* @__PURE__ */ React.createElement(_view.default, null);
      Object.assign(_controller.default, {
        setPassword,
        resetPassword
      });
      const body = new _easy.Body();
      body.mount(view);
      function setPassword(password) {
        model.setPassword(password);
        view.showMessage("The password has been set.");
      }
      function resetPassword() {
        model.resetPassword();
        view.showMessage("The password has been reset.");
      }
    }
  });

  // lib/example/simpleApplication.js
  var require_simpleApplication = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return simpleApplication;
      }
    });
    require_lib2();
    var _easy = require_lib();
    function simpleApplication() {
      const body = new _easy.Body();
      body.mount(/* @__PURE__ */ React.createElement("p", null, "A simple application."));
    }
  });

  // lib/examples.js
  var require_examples = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _mvcApplication = /* @__PURE__ */ _interop_require_default(require_mvcApplication());
    var _simpleApplication = /* @__PURE__ */ _interop_require_default(require_simpleApplication());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    Object.assign(window, {
      mvcApplication: _mvcApplication.default,
      simpleApplication: _simpleApplication.default
    });
  });
  require_examples();
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL29mZnNldC5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvYm91bmRzLmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy91dGlsaXRpZXMvYXJyYXkuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL2NvbnN0YW50cy5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvdXRpbGl0aWVzL29iamVjdC5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvdXRpbGl0aWVzL3N0cmluZy5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvdXRpbGl0aWVzL25hbWUuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL3V0aWxpdGllcy9lbGVtZW50LmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy91dGlsaXRpZXMvZG9tLmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy9taXhpbnMvZWxlbWVudC5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvdGV4dEVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL3V0aWxpdGllcy9lbGVtZW50cy5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvZXZlbnRUeXBlcy5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvbWl4aW5zL2pzeC5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvbWl4aW5zL2tleS5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvbWl4aW5zL3N0YXRlLmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy9taXhpbnMvZXZlbnQuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL21peGlucy9tb3VzZS5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvbWl4aW5zL2NsaWNrLmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy9taXhpbnMvdG91Y2guanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL21peGlucy9zY3JvbGwuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL21peGlucy9yZXNpemUuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL21peGlucy9mdWxsU2NyZWVuLmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy91dGlsaXRpZXMvYXN5bmMuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL21peGlucy9jdXN0b21FdmVudC5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvZWxlbWVudC5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvcmVhY3QuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL21vdXNlQnV0dG9ucy5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvbWl4aW5zL2lucHV0LmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy9taXhpbnMvZm9jdXMuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL21peGlucy9zZWxlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL2RvY3VtZW50LmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy93aW5kb3cuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL2VsZW1lbnQvYm9keS5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvZWxlbWVudC9saW5rLmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy9lbGVtZW50L2lucHV0LmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy9lbGVtZW50L2J1dHRvbi5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvZWxlbWVudC9zZWxlY3QuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL2VsZW1lbnQvY2hlY2tib3guanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL2VsZW1lbnQvdGV4dGFyZWEuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL2luZGV4LmpzIiwgInNyYy9qdXh0YXBvc2UuanMiLCAic3JjL2luZGV4LmpzIiwgInNyYy9leGFtcGxlL212Y0FwcGxpY2F0aW9uL2NvbnRyb2xsZXIuanMiLCAic3JjL2V4YW1wbGUvbXZjQXBwbGljYXRpb24vY29uc3RhbnRzLmpzIiwgInNyYy9leGFtcGxlL212Y0FwcGxpY2F0aW9uL3ZpZXcvaW5wdXQvcGFzc3dvcmQuanMiLCAic3JjL2V4YW1wbGUvbXZjQXBwbGljYXRpb24vdmlldy9wYXJhZ3JhcGgvdmFsaWRhdGlvbkVycm9yLmpzIiwgInNyYy9leGFtcGxlL212Y0FwcGxpY2F0aW9uL3ZpZXcvZm9ybS9wYXNzd29yZC5qcyIsICJzcmMvZXhhbXBsZS9tdmNBcHBsaWNhdGlvbi92aWV3L3BhcmFncmFwaC9tZXNzYWdlLmpzIiwgInNyYy9leGFtcGxlL212Y0FwcGxpY2F0aW9uL3ZpZXcvYnV0dG9uL3Jlc2V0UGFzc3dvcmQuanMiLCAic3JjL2V4YW1wbGUvbXZjQXBwbGljYXRpb24vdmlldy5qcyIsICJzcmMvZXhhbXBsZS9tdmNBcHBsaWNhdGlvbi9tb2RlbC5qcyIsICJzcmMvZXhhbXBsZS9tdmNBcHBsaWNhdGlvbi5qcyIsICJzcmMvZXhhbXBsZS9zaW1wbGVBcHBsaWNhdGlvbi5qcyIsICJzcmMvZXhhbXBsZXMuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPZmZzZXQge1xuICBjb25zdHJ1Y3Rvcih0b3AsIGxlZnQpIHtcbiAgICB0aGlzLnRvcCA9IHRvcDtcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICB9XG5cbiAgZ2V0VG9wKCkge1xuICAgIHJldHVybiB0aGlzLnRvcDtcbiAgfVxuXG4gIGdldExlZnQoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50KSB7XG4gICAgY29uc3QgeyBvZmZzZXRUb3AsIG9mZnNldExlZnQgfSA9IGRvbUVsZW1lbnQsXG4gICAgICAgICAgdG9wID0gb2Zmc2V0VG9wLCAgLy8vXG4gICAgICAgICAgbGVmdCA9IG9mZnNldExlZnQsICAvLy9cbiAgICAgICAgICBvZmZzZXQgPSBuZXcgT2Zmc2V0KHRvcCwgbGVmdCk7XG5cbiAgICByZXR1cm4gb2Zmc2V0O1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvdW5kcyB7XG4gIGNvbnN0cnVjdG9yKHRvcCwgbGVmdCwgcmlnaHQsIGJvdHRvbSkge1xuICAgIHRoaXMudG9wID0gdG9wO1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICAgIHRoaXMuYm90dG9tID0gYm90dG9tO1xuICB9XG5cbiAgZ2V0VG9wKCkge1xuICAgIHJldHVybiB0aGlzLnRvcDtcbiAgfVxuXG4gIGdldExlZnQoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdDtcbiAgfVxuXG4gIGdldFJpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLnJpZ2h0O1xuICB9XG5cbiAgZ2V0Qm90dG9tKCkge1xuICAgIHJldHVybiB0aGlzLmJvdHRvbTtcbiAgfVxuXG4gIGdldFdpZHRoKCkge1xuICAgIGNvbnN0IHdpZHRoID0gKHRoaXMucmlnaHQgLSB0aGlzLmxlZnQpO1xuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KCkge1xuICAgIGNvbnN0IGhlaWdodCA9ICh0aGlzLmJvdHRvbSAtIHRoaXMudG9wKTtcblxuICAgIHJldHVybiBoZWlnaHQ7XG4gIH1cbiAgXG4gIHNldFRvcCh0b3ApIHtcbiAgICB0aGlzLnRvcCA9IHRvcDtcbiAgfVxuXG4gIHNldExlZnQobGVmdCkge1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gIH1cblxuICBzZXRSaWdodChyaWdodCkge1xuICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgfVxuXG4gIHNldEJvdHRvbShib3R0b20pIHtcbiAgICB0aGlzLmJvdHRvbSA9IGJvdHRvbTtcbiAgfVxuXG4gIGFyZU92ZXJsYXBwaW5nKGJvdW5kcykge1xuICAgIGNvbnN0IGJvdHRvbSA9IGJvdW5kcy5nZXRCb3R0b20oKSxcbiAgICAgICAgICByaWdodCA9IGJvdW5kcy5nZXRSaWdodCgpLFxuICAgICAgICAgIGxlZnQgPSBib3VuZHMuZ2V0TGVmdCgpLFxuICAgICAgICAgIHRvcCA9IGJvdW5kcy5nZXRUb3AoKSxcbiAgICAgICAgICBvdmVybGFwcGluZyA9ICgodGhpcy50b3AgPCBib3R0b20pXG4gICAgICAgICAgICAgICAgICAgICAgJiYgKHRoaXMubGVmdCA8IHJpZ2h0KVxuICAgICAgICAgICAgICAgICAgICAgICYmICh0aGlzLnJpZ2h0ID4gbGVmdClcbiAgICAgICAgICAgICAgICAgICAgICAmJiAodGhpcy5ib3R0b20gPiB0b3ApKTtcblxuICAgIHJldHVybiBvdmVybGFwcGluZztcbiAgfVxuXG4gIGFyZU92ZXJsYXBwaW5nQnlUb3BBbmRMZWZ0KHRvcCwgbGVmdCkge1xuICAgIGNvbnN0IG92ZXJsYXBwaW5nID0gKCh0aGlzLnRvcCA8PSB0b3ApXG4gICAgICAgICAgICAgICAgICAgICAgJiYgKHRoaXMubGVmdCA8PSBsZWZ0KVxuICAgICAgICAgICAgICAgICAgICAgICYmICh0aGlzLnJpZ2h0ID4gbGVmdClcbiAgICAgICAgICAgICAgICAgICAgICAmJiAodGhpcy5ib3R0b20gPiB0b3ApKTtcblxuICAgIHJldHVybiBvdmVybGFwcGluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50KSB7XG4gICAgY29uc3QgeyBwYWdlWE9mZnNldCwgcGFnZVlPZmZzZXQgfSA9IHdpbmRvdyxcbiAgICAgICAgICBib3VuZGluZ0NsaWVudFJlY3QgPSBkb21FbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgIHdpbmRvd1Njcm9sbFRvcCA9IHBhZ2VZT2Zmc2V0LCAvLy9cbiAgICAgICAgICB3aW5kb3dTY3JvbGxMZWZ0ID0gcGFnZVhPZmZzZXQsICAvLy9cbiAgICAgICAgICB0b3AgPSBib3VuZGluZ0NsaWVudFJlY3QudG9wICsgd2luZG93U2Nyb2xsVG9wLFxuICAgICAgICAgIGxlZnQgPSBib3VuZGluZ0NsaWVudFJlY3QubGVmdCArIHdpbmRvd1Njcm9sbExlZnQsXG4gICAgICAgICAgcmlnaHQgPSBib3VuZGluZ0NsaWVudFJlY3QucmlnaHQgKyB3aW5kb3dTY3JvbGxMZWZ0LFxuICAgICAgICAgIGJvdHRvbSA9IGJvdW5kaW5nQ2xpZW50UmVjdC5ib3R0b20gKyB3aW5kb3dTY3JvbGxUb3AsXG4gICAgICAgICAgYm91bmRzID0gbmV3IEJvdW5kcyh0b3AsIGxlZnQsIHJpZ2h0LCBib3R0b20pO1xuXG4gICAgcmV0dXJuIGJvdW5kcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVG9wTGVmdFdpZHRoQW5kSGVpZ2h0KHRvcCwgbGVmdCwgd2lkdGgsIGhlaWdodCkge1xuICAgIGNvbnN0IGJvdHRvbSA9IHRvcCArIGhlaWdodCxcbiAgICAgICAgICByaWdodCA9IGxlZnQgKyB3aWR0aCxcbiAgICAgICAgICBib3VuZHMgPSBuZXcgQm91bmRzKHRvcCwgbGVmdCwgcmlnaHQsIGJvdHRvbSk7XG5cbiAgICByZXR1cm4gYm91bmRzO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHB1c2goYXJyYXkxLCBhcnJheTIpIHsgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoYXJyYXkxLCBhcnJheTIpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBhdWdtZW50KGFycmF5MSwgYXJyYXkyLCB0ZXN0KSB7XG4gIGFycmF5MSA9IFsgLi4uYXJyYXkxIF07IC8vL1xuXG4gIGFycmF5Mi5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgYXJyYXkxLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gYXJyYXkxO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmxhdHRlbihhcnJheSkge1xuICByZXR1cm4gYXJyYXkucmVkdWNlKChhcnJheSwgZWxlbWVudCkgPT4ge1xuICAgIGFycmF5ID0gYXJyYXkuY29uY2F0KGVsZW1lbnQpOyAgLy8vXG5cbiAgICByZXR1cm4gYXJyYXk7XG4gIH0sIFtdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGd1YXJhbnRlZShhcnJheU9yRWxlbWVudCkge1xuICBhcnJheU9yRWxlbWVudCA9IGFycmF5T3JFbGVtZW50IHx8IFtdO1xuXG4gIHJldHVybiBBcnJheS5pc0FycmF5KGFycmF5T3JFbGVtZW50KSA/XG4gICAgICAgICAgICBhcnJheU9yRWxlbWVudCA6XG4gICAgICAgICAgICAgIFthcnJheU9yRWxlbWVudF07XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBGT1IgPSBcImZvclwiO1xuZXhwb3J0IGNvbnN0IEJPRFkgPSBcImJvZHlcIjtcbmV4cG9ydCBjb25zdCBOT05FID0gXCJub25lXCI7XG5leHBvcnQgY29uc3QgU1BBQ0UgPSBcIiBcIjtcbmV4cG9ydCBjb25zdCBDTEFTUyA9IFwiY2xhc3NcIjtcbmV4cG9ydCBjb25zdCBXSURUSCA9IFwid2lkdGhcIjtcbmV4cG9ydCBjb25zdCBCTE9DSyA9IFwiYmxvY2tcIjtcbmV4cG9ydCBjb25zdCBIRUlHSFQgPSBcImhlaWdodFwiO1xuZXhwb3J0IGNvbnN0IE9CSkVDVCA9IFwib2JqZWN0XCI7XG5leHBvcnQgY29uc3QgU1RSSU5HID0gXCJzdHJpbmdcIjtcbmV4cG9ydCBjb25zdCBESVNQTEFZID0gXCJkaXNwbGF5XCI7XG5leHBvcnQgY29uc3QgQk9PTEVBTiA9IFwiYm9vbGVhblwiO1xuZXhwb3J0IGNvbnN0IERJU0FCTEVEID0gXCJkaXNhYmxlZFwiO1xuZXhwb3J0IGNvbnN0IEZVTkNUSU9OID0gXCJmdW5jdGlvblwiO1xuZXhwb3J0IGNvbnN0IFdJTERDQVJEID0gXCIqXCI7XG5leHBvcnQgY29uc3QgSFRNTF9GT1IgPSBcImh0bWxGb3JcIjtcbmV4cG9ydCBjb25zdCBVTkRFRklORUQgPSAndW5kZWZpbmVkJztcbmV4cG9ydCBjb25zdCBDTEFTU19OQU1FID0gXCJjbGFzc05hbWVcIjtcbmV4cG9ydCBjb25zdCBFTVBUWV9TVFJJTkcgPSBcIlwiO1xuZXhwb3J0IGNvbnN0IFNWR19OQU1FU1BBQ0VfVVJJID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfUFJPUEVSVElFUyA9IFwiZGVmYXVsdFByb3BlcnRpZXNcIjtcbmV4cG9ydCBjb25zdCBJR05PUkVEX1BST1BFUlRJRVMgPSBcImlnbm9yZWRQcm9wZXJ0aWVzXCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEJPT0xFQU4gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lKHRhcmdldCwgc291cmNlID0ge30pIHtcbiAgdGFyZ2V0ID0geyAgLy8vXG4gICAgLi4udGFyZ2V0XG4gIH07XG5cbiAgY29uc3QgbmFtZXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpOyAgLy8vXG5cbiAgbmFtZXMuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgIGNvbnN0IHRhcmdldFZhbHVlID0gdGFyZ2V0W25hbWVdLFxuICAgICAgICAgIHNvdXJjZVZhbHVlID0gc291cmNlW25hbWVdLFxuICAgICAgICAgIHRhcmdldEhhc093blByb3BlcnR5ID0gdGFyZ2V0Lmhhc093blByb3BlcnR5KG5hbWUpO1xuXG4gICAgdGFyZ2V0W25hbWVdID0gdGFyZ2V0SGFzT3duUHJvcGVydHkgP1xuICAgICAgICAgICAgICAgICAgICAgY29tYmluZVZhbHVlcyh0YXJnZXRWYWx1ZSwgc291cmNlVmFsdWUpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgc291cmNlVmFsdWU7IC8vL1xuICB9KTtcblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJ1bmUodGFyZ2V0LCBuYW1lcyA9IFtdKSB7XG4gIHRhcmdldCA9IHsgIC8vL1xuICAgIC4uLnRhcmdldFxuICB9O1xuXG4gIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICBjb25zdCB0YXJnZXRIYXNPd25Qcm9wZXJ0eSA9IHRhcmdldC5oYXNPd25Qcm9wZXJ0eShuYW1lKTtcblxuICAgIGlmICh0YXJnZXRIYXNPd25Qcm9wZXJ0eSkge1xuICAgICAgZGVsZXRlIHRhcmdldFtuYW1lXTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIGNvbWJpbmVWYWx1ZXModGFyZ2V0VmFsdWUsIHNvdXJjZVZhbHVlKSB7XG4gIGNvbnN0IHRhcmdldFZhbHVlQm9vbGVhbiA9IGlzVmFsdWVCb29sZWFuKHRhcmdldFZhbHVlKSxcbiAgICAgICAgc291cmNlVmFsdWVCb29sZWFuID0gaXNWYWx1ZUJvb2xlYW4oc291cmNlVmFsdWUpLFxuICAgICAgICBjb21iaW5lZFZhbHVlID0gKHRhcmdldFZhbHVlQm9vbGVhbiAmJiBzb3VyY2VWYWx1ZUJvb2xlYW4pID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0VmFsdWUgOiAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHt0YXJnZXRWYWx1ZX0gJHtzb3VyY2VWYWx1ZX1gO1xuXG4gIHJldHVybiBjb21iaW5lZFZhbHVlO1xufVxuXG5mdW5jdGlvbiBpc1ZhbHVlQm9vbGVhbih2YWx1ZSkge1xuICBjb25zdCB2YWx1ZUJvb2xlYW4gPSAodHlwZW9mIHZhbHVlID09PSBCT09MRUFOKTtcblxuICByZXR1cm4gdmFsdWVCb29sZWFuO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY2FtZWxDYXNlVG9TbmFrZUNhc2Uoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZSgvKFtBLVpdKykvZywgKG1hdGNoLCBjaGFyYWN0ZXJzKSA9PiB7XG4gICAgY29uc3QgdXBwZXJDYXNlQ2hhcmFjdGVycyA9IGNoYXJhY3RlcnMudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICBzbmFrZUNhc2VDaGFyYWN0ZXJzID0gYC0ke3VwcGVyQ2FzZUNoYXJhY3RlcnN9YDtcblxuICAgIHJldHVybiBzbmFrZUNhc2VDaGFyYWN0ZXJzO1xuICB9KTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzU1ZHVGFnTmFtZSh0YWdOYW1lKSB7XG4gIHJldHVybiBzdmdUYWdOYW1lcy5pbmNsdWRlcyh0YWdOYW1lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU1ZHQXR0cmlidXRlTmFtZShhdHRyaWJ1dGVOYW1lKSB7XG4gIHJldHVybiBzdmdBdHRyaWJ1dGVOYW1lcy5pbmNsdWRlcyhhdHRyaWJ1dGVOYW1lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzSFRNTEF0dHJpYnV0ZU5hbWUoYXR0cmlidXRlTmFtZSkge1xuICByZXR1cm4gaHRtbEF0dHJpYnV0ZU5hbWVzLmluY2x1ZGVzKGF0dHJpYnV0ZU5hbWUpO1xufVxuXG5jb25zdCBzdmdUYWdOYW1lcyA9IFtcbiAgICAgICAgXCJhbHRHbHlwaFwiLCBcImFuaW1hdGVcIiwgXCJhbmltYXRlQ29sb3JcIiwgXCJhbmltYXRlTW90aW9uXCIsIFwiYW5pbWF0ZVRyYW5zZm9ybVwiLCBcImFuaW1hdGlvblwiLCBcImF1ZGlvXCIsXG4gICAgICAgIFwiY2lyY2xlXCIsIFwiY2xpcFBhdGhcIiwgXCJjb2xvci1wcm9maWxlXCIsIFwiY3Vyc29yXCIsXG4gICAgICAgIFwiZGVmc1wiLCBcImRlc2NcIiwgXCJkaXNjYXJkXCIsXG4gICAgICAgIFwiZWxsaXBzZVwiLFxuICAgICAgICBcImZlQmxlbmRcIiwgXCJmZUNvbG9yTWF0cml4XCIsIFwiZmVDb21wb25lbnRUcmFuc2ZlclwiLCBcImZlQ29tcG9zaXRlXCIsIFwiZmVDb252b2x2ZU1hdHJpeFwiLCBcImZlRGlmZnVzZUxpZ2h0aW5nXCIsIFwiZmVEaXNwbGFjZW1lbnRNYXBcIiwgXCJmZURpc3RhbnRMaWdodFwiLCBcImZlRHJvcFNoYWRvd1wiLCBcImZlRmxvb2RcIiwgXCJmZUZ1bmNBXCIsIFwiZmVGdW5jQlwiLCBcImZlRnVuY0dcIiwgXCJmZUZ1bmNSXCIsIFwiZmVHYXVzc2lhbkJsdXJcIiwgXCJmZUltYWdlXCIsIFwiZmVNZXJnZVwiLCBcImZlTWVyZ2VOb2RlXCIsIFwiZmVNb3JwaG9sb2d5XCIsIFwiZmVPZmZzZXRcIiwgXCJmZVBvaW50TGlnaHRcIiwgXCJmZVNwZWN1bGFyTGlnaHRpbmdcIiwgXCJmZVNwb3RMaWdodFwiLCBcImZlVGlsZVwiLCBcImZlVHVyYnVsZW5jZVwiLCBcImZpbHRlclwiLCBcImZvbnRcIiwgXCJmb250LWZhY2VcIiwgXCJmb250LWZhY2UtZm9ybWF0XCIsIFwiZm9udC1mYWNlLW5hbWVcIiwgXCJmb250LWZhY2UtdXJpXCIsIFwiZm9yZWlnbk9iamVjdFwiLFxuICAgICAgICBcImdcIiwgXCJnbHlwaFwiLCBcImdseXBoUmVmXCIsXG4gICAgICAgIFwiaGFuZGxlclwiLCBcImhhdGNoXCIsIFwiaGF0Y2hwYXRoXCIsIFwiaGtlcm5cIixcbiAgICAgICAgXCJpbWFnZVwiLCBcImxpbmVcIiwgXCJsaW5lYXJHcmFkaWVudFwiLFxuICAgICAgICBcImxpc3RlbmVyXCIsXG4gICAgICAgIFwibWFya2VyXCIsIFwibWFza1wiLCBcIm1lc2hcIiwgXCJtZXNoZ3JhZGllbnRcIiwgXCJtZXNocGF0Y2hcIiwgXCJtZXNocm93XCIsIFwibWV0YWRhdGFcIiwgXCJtaXNzaW5nLWdseXBoXCIsIFwibXBhdGhcIixcbiAgICAgICAgXCJwYXRoXCIsIFwicGF0dGVyblwiLCBcInBvbHlnb25cIiwgXCJwb2x5bGluZVwiLCBcInByZWZldGNoXCIsXG4gICAgICAgIFwicmFkaWFsR3JhZGllbnRcIiwgXCJyZWN0XCIsXG4gICAgICAgIFwic2NyaXB0XCIsIFwic2V0XCIsIFwic29saWRjb2xvclwiLCBcInN0b3BcIiwgXCJzdHlsZVwiLCBcInN2Z1wiLCBcInN3aXRjaFwiLCBcInN5bWJvbFwiLFxuICAgICAgICBcInRicmVha1wiLCBcInRleHRcIiwgXCJ0ZXh0QXJlYVwiLCBcInRleHRQYXRoXCIsIFwidGl0bGVcIiwgXCJ0cmVmXCIsIFwidHNwYW5cIixcbiAgICAgICAgXCJ1bmtub3duXCIsIFwidXNlXCIsXG4gICAgICAgIFwidmlkZW9cIiwgXCJ2aWV3XCIsIFwidmtlcm5cIlxuICAgICAgXSxcbiAgICAgIHN2Z0F0dHJpYnV0ZU5hbWVzID0gW1xuICAgICAgICBcImFjY2VudC1oZWlnaHRcIiwgXCJhY2N1bXVsYXRlXCIsIFwiYWRkaXRpdmVcIiwgXCJhbGlnbm1lbnQtYmFzZWxpbmVcIiwgXCJhbHBoYWJldGljXCIsIFwiYW1wbGl0dWRlXCIsIFwiYXJhYmljLWZvcm1cIiwgXCJhc2NlbnRcIiwgXCJhdHRyaWJ1dGVOYW1lXCIsIFwiYXR0cmlidXRlVHlwZVwiLCBcImF6aW11dGhcIixcbiAgICAgICAgXCJiYW5kd2lkdGhcIiwgXCJiYXNlRnJlcXVlbmN5XCIsIFwiYmFzZVByb2ZpbGVcIiwgXCJiYXNlbGluZS1zaGlmdFwiLCBcImJib3hcIiwgXCJiZWdpblwiLCBcImJpYXNcIiwgXCJieVwiLFxuICAgICAgICBcImNhbGNNb2RlXCIsIFwiY2FwLWhlaWdodFwiLCBcImNsaXBcIiwgXCJjbGFzc05hbWVcIiwgXCJjbGlwLXBhdGhcIiwgXCJjbGlwLXJ1bGVcIiwgXCJjbGlwUGF0aFVuaXRzXCIsIFwiY29sb3JcIiwgXCJjb2xvci1pbnRlcnBvbGF0aW9uXCIsIFwiY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzXCIsIFwiY29sb3ItcHJvZmlsZVwiLCBcImNvbG9yLXJlbmRlcmluZ1wiLCBcImNvbnRlbnRTY3JpcHRUeXBlXCIsIFwiY29udGVudFN0eWxlVHlwZVwiLCBcImNyb3Nzb3JpZ2luXCIsIFwiY3Vyc29yXCIsIFwiY3hcIiwgXCJjeVwiLFxuICAgICAgICBcImRcIiwgXCJkZWZhdWx0QWN0aW9uXCIsIFwiZGVzY2VudFwiLCBcImRpZmZ1c2VDb25zdGFudFwiLCBcImRpcmVjdGlvblwiLCBcImRpc3BsYXlcIiwgXCJkaXZpc29yXCIsIFwiZG9taW5hbnQtYmFzZWxpbmVcIiwgXCJkb3dubG9hZFwiLCBcImR1clwiLCBcImR4XCIsIFwiZHlcIixcbiAgICAgICAgXCJlZGdlTW9kZVwiLCBcImVkaXRhYmxlXCIsIFwiZWxldmF0aW9uXCIsIFwiZW5hYmxlLWJhY2tncm91bmRcIiwgXCJlbmRcIiwgXCJldmVudFwiLCBcImV4cG9uZW50XCIsIFwiZXh0ZXJuYWxSZXNvdXJjZXNSZXF1aXJlZFwiLFxuICAgICAgICBcImZpbGxcIiwgXCJmaWxsLW9wYWNpdHlcIiwgXCJmaWxsLXJ1bGVcIiwgXCJmaWx0ZXJcIiwgXCJmaWx0ZXJSZXNcIiwgXCJmaWx0ZXJVbml0c1wiLCBcImZsb29kLWNvbG9yXCIsIFwiZmxvb2Qtb3BhY2l0eVwiLCBcImZvY3VzSGlnaGxpZ2h0XCIsIFwiZm9jdXNhYmxlXCIsIFwiZm9udC1mYW1pbHlcIiwgXCJmb250LXNpemVcIiwgXCJmb250LXNpemUtYWRqdXN0XCIsIFwiZm9udC1zdHJldGNoXCIsIFwiZm9udC1zdHlsZVwiLCBcImZvbnQtdmFyaWFudFwiLCBcImZvbnQtd2VpZ2h0XCIsIFwiZm9ybWF0XCIsIFwiZnJcIiwgXCJmcm9tXCIsIFwiZnhcIiwgXCJmeVwiLFxuICAgICAgICBcImcxXCIsIFwiZzJcIiwgXCJnbHlwaC1uYW1lXCIsIFwiZ2x5cGgtb3JpZW50YXRpb24taG9yaXpvbnRhbFwiLCBcImdseXBoLW9yaWVudGF0aW9uLXZlcnRpY2FsXCIsIFwiZ2x5cGhSZWZcIiwgXCJncmFkaWVudFRyYW5zZm9ybVwiLCBcImdyYWRpZW50VW5pdHNcIixcbiAgICAgICAgXCJoYW5kbGVyXCIsIFwiaGFuZ2luZ1wiLCBcImhhdGNoQ29udGVudFVuaXRzXCIsIFwiaGF0Y2hVbml0c1wiLCBcImhlaWdodFwiLCBcImhvcml6LWFkdi14XCIsIFwiaG9yaXotb3JpZ2luLXhcIiwgXCJob3Jpei1vcmlnaW4teVwiLCBcImhyZWZcIiwgXCJocmVmbGFuZ1wiLFxuICAgICAgICBcImlkXCIsIFwiaWRlb2dyYXBoaWNcIiwgXCJpbWFnZS1yZW5kZXJpbmdcIiwgXCJpblwiLCBcImluMlwiLCBcImluaXRpYWxWaXNpYmlsaXR5XCIsIFwiaW50ZXJjZXB0XCIsXG4gICAgICAgIFwia1wiLCBcImsxXCIsIFwiazJcIiwgXCJrM1wiLCBcIms0XCIsIFwia2VybmVsTWF0cml4XCIsIFwia2VybmVsVW5pdExlbmd0aFwiLCBcImtlcm5pbmdcIiwgXCJrZXlQb2ludHNcIiwgXCJrZXlTcGxpbmVzXCIsIFwia2V5VGltZXNcIixcbiAgICAgICAgXCJsZW5ndGhBZGp1c3RcIiwgXCJsZXR0ZXItc3BhY2luZ1wiLCBcImxpZ2h0aW5nLWNvbG9yXCIsIFwibGltaXRpbmdDb25lQW5nbGVcIiwgXCJsb2NhbFwiLFxuICAgICAgICBcIm1hcmtlci1lbmRcIiwgXCJtYXJrZXItbWlkXCIsIFwibWFya2VyLXN0YXJ0XCIsIFwibWFya2VySGVpZ2h0XCIsIFwibWFya2VyVW5pdHNcIiwgXCJtYXJrZXJXaWR0aFwiLCBcIm1hc2tcIiwgXCJtYXNrQ29udGVudFVuaXRzXCIsIFwibWFza1VuaXRzXCIsIFwibWF0aGVtYXRpY2FsXCIsIFwibWF4XCIsIFwibWVkaWFcIiwgXCJtZWRpYUNoYXJhY3RlckVuY29kaW5nXCIsIFwibWVkaWFDb250ZW50RW5jb2RpbmdzXCIsIFwibWVkaWFTaXplXCIsIFwibWVkaWFUaW1lXCIsIFwibWV0aG9kXCIsIFwibWluXCIsIFwibW9kZVwiLFxuICAgICAgICBcIm5hbWVcIiwgXCJuYXYtZG93blwiLCBcIm5hdi1kb3duLWxlZnRcIiwgXCJuYXYtZG93bi1yaWdodFwiLCBcIm5hdi1sZWZ0XCIsIFwibmF2LW5leHRcIiwgXCJuYXYtcHJldlwiLCBcIm5hdi1yaWdodFwiLCBcIm5hdi11cFwiLCBcIm5hdi11cC1sZWZ0XCIsIFwibmF2LXVwLXJpZ2h0XCIsIFwibnVtT2N0YXZlc1wiLFxuICAgICAgICBcIm9ic2VydmVyXCIsIFwib2Zmc2V0XCIsIFwib3BhY2l0eVwiLCBcIm9wZXJhdG9yXCIsIFwib3JkZXJcIiwgXCJvcmllbnRcIiwgXCJvcmllbnRhdGlvblwiLCBcIm9yaWdpblwiLCBcIm92ZXJmbG93XCIsIFwib3ZlcmxheVwiLCBcIm92ZXJsaW5lLXBvc2l0aW9uXCIsIFwib3ZlcmxpbmUtdGhpY2tuZXNzXCIsXG4gICAgICAgIFwicGFub3NlLTFcIiwgXCJwYXRoXCIsIFwicGF0aExlbmd0aFwiLCBcInBhdHRlcm5Db250ZW50VW5pdHNcIiwgXCJwYXR0ZXJuVHJhbnNmb3JtXCIsIFwicGF0dGVyblVuaXRzXCIsIFwicGhhc2VcIiwgXCJwaXRjaFwiLCBcInBsYXliYWNrT3JkZXJcIiwgXCJwbGF5YmFja29yZGVyXCIsIFwicG9pbnRlci1ldmVudHNcIiwgXCJwb2ludHNcIiwgXCJwb2ludHNBdFhcIiwgXCJwb2ludHNBdFlcIiwgXCJwb2ludHNBdFpcIiwgXCJwcmVzZXJ2ZUFscGhhXCIsIFwicHJlc2VydmVBc3BlY3RSYXRpb1wiLCBcInByaW1pdGl2ZVVuaXRzXCIsIFwicHJvcGFnYXRlXCIsXG4gICAgICAgIFwiclwiLCBcInJhZGl1c1wiLCBcInJlZlhcIiwgXCJyZWZZXCIsIFwicmVuZGVyaW5nLWludGVudFwiLCBcInJlcGVhdENvdW50XCIsIFwicmVwZWF0RHVyXCIsIFwicmVxdWlyZWRFeHRlbnNpb25zXCIsIFwicmVxdWlyZWRGZWF0dXJlc1wiLCBcInJlcXVpcmVkRm9udHNcIiwgXCJyZXF1aXJlZEZvcm1hdHNcIiwgXCJyZXN0YXJ0XCIsIFwicmVzdWx0XCIsIFwicm90YXRlXCIsIFwicnhcIiwgXCJyeVwiLFxuICAgICAgICBcInNjYWxlXCIsIFwic2VlZFwiLCBcInNoYXBlLXJlbmRlcmluZ1wiLCBcInNpZGVcIiwgXCJzbG9wZVwiLCBcInNuYXBzaG90VGltZVwiLCBcInNwYWNpbmdcIiwgXCJzcGVjdWxhckNvbnN0YW50XCIsIFwic3BlY3VsYXJFeHBvbmVudFwiLCBcInNwcmVhZE1ldGhvZFwiLCBcInNyY1wiLCBcInN0YXJ0T2Zmc2V0XCIsIFwic3RkRGV2aWF0aW9uXCIsIFwic3RlbWhcIiwgXCJzdGVtdlwiLCBcInN0aXRjaFRpbGVzXCIsIFwic3RvcC1jb2xvclwiLCBcInN0b3Atb3BhY2l0eVwiLCBcInN0cmlrZXRocm91Z2gtcG9zaXRpb25cIiwgXCJzdHJpa2V0aHJvdWdoLXRoaWNrbmVzc1wiLCBcInN0cmluZ1wiLCBcInN0cm9rZVwiLCBcInN0cm9rZS1kYXNoYXJyYXlcIiwgXCJzdHJva2UtZGFzaG9mZnNldFwiLCBcInN0cm9rZS1saW5lY2FwXCIsIFwic3Ryb2tlLWxpbmVqb2luXCIsIFwic3Ryb2tlLW1pdGVybGltaXRcIiwgXCJzdHJva2Utb3BhY2l0eVwiLCBcInN0cm9rZS13aWR0aFwiLCBcInN0eWxlXCIsIFwic3VyZmFjZVNjYWxlXCIsIFwic3luY0JlaGF2aW9yXCIsIFwic3luY0JlaGF2aW9yRGVmYXVsdFwiLCBcInN5bmNNYXN0ZXJcIiwgXCJzeW5jVG9sZXJhbmNlXCIsIFwic3luY1RvbGVyYW5jZURlZmF1bHRcIiwgXCJzeXN0ZW1MYW5ndWFnZVwiLFxuICAgICAgICBcInRhYmxlVmFsdWVzXCIsIFwidGFyZ2V0XCIsIFwidGFyZ2V0WFwiLCBcInRhcmdldFlcIiwgXCJ0ZXh0LWFuY2hvclwiLCBcInRleHQtZGVjb3JhdGlvblwiLCBcInRleHQtcmVuZGVyaW5nXCIsIFwidGV4dExlbmd0aFwiLCBcInRpbWVsaW5lQmVnaW5cIiwgXCJ0aW1lbGluZWJlZ2luXCIsIFwidGl0bGVcIiwgXCJ0b1wiLCBcInRyYW5zZm9ybVwiLCBcInRyYW5zZm9ybUJlaGF2aW9yXCIsIFwidHlwZVwiLFxuICAgICAgICBcInUxXCIsIFwidTJcIiwgXCJ1bmRlcmxpbmUtcG9zaXRpb25cIiwgXCJ1bmRlcmxpbmUtdGhpY2tuZXNzXCIsIFwidW5pY29kZVwiLCBcInVuaWNvZGUtYmlkaVwiLCBcInVuaWNvZGUtcmFuZ2VcIiwgXCJ1bml0cy1wZXItZW1cIixcbiAgICAgICAgXCJ2LWFscGhhYmV0aWNcIiwgXCJ2LWhhbmdpbmdcIiwgXCJ2LWlkZW9ncmFwaGljXCIsIFwidi1tYXRoZW1hdGljYWxcIiwgXCJ2YWx1ZXNcIiwgXCJ2ZXJzaW9uXCIsIFwidmVydC1hZHYteVwiLCBcInZlcnQtb3JpZ2luLXhcIiwgXCJ2ZXJ0LW9yaWdpbi15XCIsIFwidmlld0JveFwiLCBcInZpZXdUYXJnZXRcIiwgXCJ2aXNpYmlsaXR5XCIsXG4gICAgICAgIFwid2lkdGhcIiwgXCJ3aWR0aHNcIiwgXCJ3b3JkLXNwYWNpbmdcIiwgXCJ3cml0aW5nLW1vZGVcIixcbiAgICAgICAgXCJ4XCIsIFwieC1oZWlnaHRcIiwgXCJ4MVwiLCBcIngyXCIsIFwieENoYW5uZWxTZWxlY3RvclwiLFxuICAgICAgICBcInlcIiwgXCJ5MVwiLCBcInkyXCIsIFwieUNoYW5uZWxTZWxlY3RvclwiLFxuICAgICAgICBcInpcIiwgXCJ6b29tQW5kUGFuXCJcbiAgICAgIF0sXG4gICAgICBodG1sQXR0cmlidXRlTmFtZXMgPSBbXG4gICAgICAgIFwiYWNjZXB0XCIsIFwiYWNjZXB0Q2hhcnNldFwiLCBcImFjY2Vzc0tleVwiLCBcImFjdGlvblwiLCBcImFsbG93XCIsIFwiYWxsb3dGdWxsU2NyZWVuXCIsIFwiYWxsb3dUcmFuc3BhcmVuY3lcIiwgXCJhbHRcIiwgXCJhc3luY1wiLCBcImF1dG9Db21wbGV0ZVwiLCBcImF1dG9Gb2N1c1wiLCBcImF1dG9QbGF5XCIsXG4gICAgICAgIFwiY2FwdHVyZVwiLCBcImNlbGxQYWRkaW5nXCIsIFwiY2VsbFNwYWNpbmdcIiwgXCJjaGFsbGVuZ2VcIiwgXCJjaGFyU2V0XCIsIFwiY2hlY2tlZFwiLCBcImNpdGVcIiwgXCJjbGFzc0lEXCIsIFwiY2xhc3NOYW1lXCIsIFwiY29sU3BhblwiLCBcImNvbHNcIiwgXCJjb250ZW50XCIsIFwiY29udGVudEVkaXRhYmxlXCIsIFwiY29udGV4dE1lbnVcIiwgXCJjb250cm9sc1wiLCBcImNvb3Jkc1wiLCBcImNyb3NzT3JpZ2luXCIsXG4gICAgICAgIFwiZGF0YVwiLCBcImRhdGVUaW1lXCIsIFwiZGVmYXVsdFwiLCBcImRlZmVyXCIsIFwiZGlyXCIsIFwiZGlzYWJsZWRcIiwgXCJkb3dubG9hZFwiLCBcImRyYWdnYWJsZVwiLFxuICAgICAgICBcImVuY1R5cGVcIixcbiAgICAgICAgXCJmb3JtXCIsIFwiZm9ybUFjdGlvblwiLCBcImZvcm1FbmNUeXBlXCIsIFwiZm9ybU1ldGhvZFwiLCBcImZvcm1Ob1ZhbGlkYXRlXCIsIFwiZm9ybVRhcmdldFwiLCBcImZyYW1lQm9yZGVyXCIsXG4gICAgICAgIFwiaGVhZGVyc1wiLCBcImhlaWdodFwiLCBcImhpZGRlblwiLCBcImhpZ2hcIiwgXCJocmVmXCIsIFwiaHJlZkxhbmdcIiwgXCJodG1sRm9yXCIsIFwiaHR0cEVxdWl2XCIsXG4gICAgICAgIFwiaWNvblwiLCBcImlkXCIsIFwiaW5wdXRNb2RlXCIsIFwiaW50ZWdyaXR5XCIsIFwiaXNcIixcbiAgICAgICAgXCJrZXlQYXJhbXNcIiwgXCJrZXlUeXBlXCIsIFwia2luZFwiLFxuICAgICAgICBcImxhYmVsXCIsIFwibGFuZ1wiLCBcImxpc3RcIiwgXCJsb29wXCIsIFwibG93XCIsXG4gICAgICAgIFwibWFuaWZlc3RcIiwgXCJtYXJnaW5IZWlnaHRcIiwgXCJtYXJnaW5XaWR0aFwiLCBcIm1heFwiLCBcIm1heExlbmd0aFwiLCBcIm1lZGlhXCIsIFwibWVkaWFHcm91cFwiLCBcIm1ldGhvZFwiLCBcIm1pblwiLCBcIm1pbkxlbmd0aFwiLCBcIm11bHRpcGxlXCIsIFwibXV0ZWRcIixcbiAgICAgICAgXCJuYW1lXCIsIFwibm9WYWxpZGF0ZVwiLCBcIm5vbmNlXCIsXG4gICAgICAgIFwib3BlblwiLCBcIm9wdGltdW1cIixcbiAgICAgICAgXCJwYXR0ZXJuXCIsIFwicGxhY2Vob2xkZXJcIiwgXCJwb3N0ZXJcIiwgXCJwcmVsb2FkXCIsIFwicHJvZmlsZVwiLFxuICAgICAgICBcInJhZGlvR3JvdXBcIiwgXCJyZWFkT25seVwiLCBcInJlbFwiLCBcInJlcXVpcmVkXCIsIFwicmV2ZXJzZWRcIiwgXCJyb2xlXCIsIFwicm93U3BhblwiLCBcInJvd3NcIixcbiAgICAgICAgXCJzYW5kYm94XCIsIFwic2NvcGVcIiwgXCJzY29wZWRcIiwgXCJzY3JvbGxpbmdcIiwgXCJzZWFtbGVzc1wiLCBcInNlbGVjdGVkXCIsIFwic2hhcGVcIiwgXCJzaXplXCIsIFwic2l6ZXNcIiwgXCJzcGFuXCIsIFwic3BlbGxDaGVja1wiLCBcInNyY1wiLCBcInNyY0RvY1wiLCBcInNyY0xhbmdcIiwgXCJzcmNTZXRcIiwgXCJzdGFydFwiLCBcInN0ZXBcIiwgXCJzdHlsZVwiLCBcInN1bW1hcnlcIixcbiAgICAgICAgXCJ0YWJJbmRleFwiLCBcInRhcmdldFwiLCBcInRpdGxlXCIsIFwidHlwZVwiLFxuICAgICAgICBcInVzZU1hcFwiLFxuICAgICAgICBcInZhbHVlXCIsXG4gICAgICAgIFwid2lkdGhcIixcbiAgICAgICAgXCJ3bW9kZVwiLFxuICAgICAgICBcIndyYXBcIlxuICAgICAgXTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdEVsZW1lbnQoZWxlbWVudCwgZG9tRWxlbWVudCkge1xuICBlbGVtZW50LmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuXG4gIGRvbUVsZW1lbnQuX19lbGVtZW50X18gPSBlbGVtZW50OyAvLy9cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlc3Ryb3lFbGVtZW50KGVsZW1lbnQpIHtcbiAgY29uc3QgZGVzY2VuZGFudEVsZW1lbnRzID0gZWxlbWVudC5nZXREZXNjZW5kYW50RWxlbWVudHMoKSxcbiAgICAgICAgZWxlbWVudHMgPSBbXG4gICAgICAgICAgZWxlbWVudCxcbiAgICAgICAgICAuLi5kZXNjZW5kYW50RWxlbWVudHNcbiAgICAgICAgXTtcblxuICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGVsZW1lbnQuZ2V0RE9NRWxlbWVudCgpO1xuXG4gICAgZGVsZXRlIGVsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIGRlbGV0ZSBkb21FbGVtZW50Ll9fZWxlbWVudF9fO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1vdW50RWxlbWVudChlbGVtZW50KSB7XG4gIGNvbnN0IGRlc2NlbmRhbnRFbGVtZW50cyA9IGVsZW1lbnQuZ2V0RGVzY2VuZGFudEVsZW1lbnRzKCksXG4gICAgICAgIGVsZW1lbnRzID0gW1xuICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgLi4uZGVzY2VuZGFudEVsZW1lbnRzXG4gICAgICAgIF07XG5cbiAgZWxlbWVudHMucmV2ZXJzZSgpOyAvLy9cblxuICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5kaWRNb3VudCAmJiBlbGVtZW50LmRpZE1vdW50KCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5tb3VudEVsZW1lbnQoZWxlbWVudCkge1xuICBjb25zdCBkZXNjZW5kYW50RWxlbWVudHMgPSBlbGVtZW50LmdldERlc2NlbmRhbnRFbGVtZW50cygpLFxuICAgICAgICBlbGVtZW50cyA9IFtcbiAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgIC4uLmRlc2NlbmRhbnRFbGVtZW50c1xuICAgICAgICBdO1xuXG4gIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LndpbGxVbm1vdW50ICYmIGVsZW1lbnQud2lsbFVubW91bnQoKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29uc3RydWN0RWxlbWVudCxcbiAgZGVzdHJveUVsZW1lbnQsXG4gIG1vdW50RWxlbWVudCxcbiAgdW5tb3VudEVsZW1lbnRcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHB1c2ggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBXSUxEQ0FSRCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGRvbUVsZW1lbnRzKSB7XG4gIGNvbnN0IGRvbUVsZW1lbnRzV2l0aEVsZW1lbnRzID0gZmlsdGVyRE9NTm9kZXMoZG9tRWxlbWVudHMsIChkb21FbGVtZW50KSA9PiB7XG4gICAgICAgICAgaWYgKChkb21FbGVtZW50Ll9fZWxlbWVudF9fKSkgeyAvLy9cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIGVsZW1lbnRzID0gZG9tRWxlbWVudHNXaXRoRWxlbWVudHMubWFwKChkb21FbGVtZW50KSA9PiB7XG4gICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvbUVsZW1lbnQuX19lbGVtZW50X187IC8vL1xuXG4gICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUoZG9tTm9kZSwgaGVpZ2h0LCBhc2NlbmRhbnRET01Ob2RlcyA9IFtdKSB7XG4gIGlmIChoZWlnaHQgPiAwKSB7XG4gICAgY29uc3QgcGFyZW50RE9NTm9kZSA9IGRvbU5vZGUucGFyZW50RWxlbWVudDsgIC8vL1xuXG4gICAgaWYgKHBhcmVudERPTU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGFzY2VuZGFudERPTU5vZGVzLnB1c2gocGFyZW50RE9NTm9kZSk7XG5cbiAgICAgIGhlaWdodC0tO1xuXG4gICAgICBhc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlKHBhcmVudERPTU5vZGUsIGhlaWdodCwgYXNjZW5kYW50RE9NTm9kZXMpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhc2NlbmRhbnRET01Ob2Rlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlKGRvbU5vZGUsIGRlcHRoLCBkZXNjZW5kYW50RE9NTm9kZXMgPSBbXSkge1xuICBpZiAoZGVwdGggPiAwKSB7XG4gICAgY29uc3QgY2hpbGRET01Ob2RlcyA9IGRvbU5vZGUuY2hpbGROb2RlczsgIC8vL1xuXG4gICAgcHVzaChkZXNjZW5kYW50RE9NTm9kZXMsIGNoaWxkRE9NTm9kZXMpO1xuXG4gICAgZGVwdGgtLTtcblxuICAgIGNoaWxkRE9NTm9kZXMuZm9yRWFjaCgoY2hpbGRET01Ob2RlKSA9PiB7XG4gICAgICBkZXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZShjaGlsZERPTU5vZGUsIGRlcHRoLCBkZXNjZW5kYW50RE9NTm9kZXMpO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGRlc2NlbmRhbnRET01Ob2Rlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckRPTU5vZGVzQnlTZWxlY3Rvcihkb21Ob2Rlcywgc2VsZWN0b3IpIHtcbiAgY29uc3QgZmlsdGVyZWRET01Ob2RlcyA9IGZpbHRlckRPTU5vZGVzKGRvbU5vZGVzLCAoZG9tTm9kZSkgPT4ge1xuICAgIGlmIChkb21Ob2RlTWF0Y2hlc1NlbGVjdG9yKGRvbU5vZGUsIHNlbGVjdG9yKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZmlsdGVyZWRET01Ob2Rlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRvbU5vZGVNYXRjaGVzU2VsZWN0b3IoZG9tTm9kZSwgc2VsZWN0b3IpIHtcbiAgY29uc3QgZG9tTm9kZVR5cGUgPSBkb21Ob2RlLm5vZGVUeXBlOyAvLy9cblxuICBzd2l0Y2ggKGRvbU5vZGVUeXBlKSB7XG4gICAgY2FzZSBOb2RlLkVMRU1FTlRfTk9ERToge1xuICAgICAgY29uc3QgZG9tRWxlbWVudCA9IGRvbU5vZGU7IC8vL1xuXG4gICAgICByZXR1cm4gZG9tRWxlbWVudC5tYXRjaGVzKHNlbGVjdG9yKTtcbiAgICB9XG5cbiAgICBjYXNlIE5vZGUuVEVYVF9OT0RFOiB7XG4gICAgICBpZiAoc2VsZWN0b3IgPT09IFdJTERDQVJEKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckRPTU5vZGVzKGRvbU5vZGVzLCB0ZXN0KSB7XG4gIGNvbnN0IGZpbHRlcmVkRE9NTm9kZXMgPSBbXSxcbiAgICAgICAgZG9tTm9kZXNMZW5ndGggPSBkb21Ob2Rlcy5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGRvbU5vZGVzTGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZG9tTm9kZSA9IGRvbU5vZGVzW2luZGV4XSxcbiAgICAgICAgICByZXN1bHQgPSB0ZXN0KGRvbU5vZGUpO1xuXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgZmlsdGVyZWRET01Ob2Rlcy5wdXNoKGRvbU5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmaWx0ZXJlZERPTU5vZGVzO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IFdJTERDQVJEIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZG9tTm9kZU1hdGNoZXNTZWxlY3RvciwgZWxlbWVudHNGcm9tRE9NRWxlbWVudHMsIGZpbHRlckRPTU5vZGVzQnlTZWxlY3RvciwgYXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZSwgZGVzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2RvbVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGFyZW50RWxlbWVudChzZWxlY3RvciA9IFdJTERDQVJEKSB7XG4gIGxldCBwYXJlbnRFbGVtZW50ID0gbnVsbDtcblxuICBjb25zdCBwYXJlbnRET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50LnBhcmVudEVsZW1lbnQ7IC8vL1xuXG4gIGlmIChwYXJlbnRET01FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgaWYgKHBhcmVudERPTUVsZW1lbnQubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnRzID0gW1xuICAgICAgICAgICAgICBwYXJlbnRET01FbGVtZW50XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgcGFyZW50RWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhwYXJlbnRET01FbGVtZW50cyksXG4gICAgICAgICAgICBmaXJzdFBhcmVudEVsZW1lbnQgPSBmaXJzdChwYXJlbnRFbGVtZW50cyk7XG5cbiAgICAgIHBhcmVudEVsZW1lbnQgPSBmaXJzdFBhcmVudEVsZW1lbnQgfHwgbnVsbDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFyZW50RWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENoaWxkRWxlbWVudHMoc2VsZWN0b3IgPSBXSUxEQ0FSRCkge1xuICBjb25zdCBjaGlsZERPTU5vZGVzID0gdGhpcy5kb21FbGVtZW50LmNoaWxkTm9kZXMsIC8vL1xuICAgICAgICBjaGlsZERPTUVsZW1lbnRzID0gZmlsdGVyRE9NTm9kZXNCeVNlbGVjdG9yKGNoaWxkRE9NTm9kZXMsIHNlbGVjdG9yKSxcbiAgICAgICAgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGNoaWxkRE9NRWxlbWVudHMpO1xuXG4gIHJldHVybiBjaGlsZEVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXNjZW5kYW50RWxlbWVudHMoc2VsZWN0b3IgPSBXSUxEQ0FSRCwgbWF4aW11bUhlaWdodCA9IEluZmluaXR5KSB7XG4gIGNvbnN0IGhlaWdodCA9IG1heGltdW1IZWlnaHQsIC8vL1xuICAgICAgICBkb21Ob2RlID0gdGhpcy5kb21FbGVtZW50LCAgLy8vXG4gICAgICAgIGFzY2VuZGFudERPTU5vZGVzID0gYXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZShkb21Ob2RlLCBoZWlnaHQpLFxuICAgICAgICBhc2NlbmRhbnRET01FbGVtZW50cyA9IGZpbHRlckRPTU5vZGVzQnlTZWxlY3Rvcihhc2NlbmRhbnRET01Ob2Rlcywgc2VsZWN0b3IpLFxuICAgICAgICBhc2NlbmRhbnRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGFzY2VuZGFudERPTUVsZW1lbnRzKTtcblxuICByZXR1cm4gYXNjZW5kYW50RWxlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREZXNjZW5kYW50RWxlbWVudHMoc2VsZWN0b3IgPSBXSUxEQ0FSRCwgbWF4aW11bURlcHRoID0gSW5maW5pdHkpIHtcbiAgY29uc3QgZGVwdGggPSBtYXhpbXVtRGVwdGgsIC8vL1xuICAgICAgICBkb21Ob2RlID0gdGhpcy5kb21FbGVtZW50LCAgLy8vXG4gICAgICAgIGRlc2NlbmRhbnRET01Ob2RlcyA9IGRlc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlKGRvbU5vZGUsIGRlcHRoKSxcbiAgICAgICAgZGVzY2VuZGFudERPTUVsZW1lbnRzID0gZmlsdGVyRE9NTm9kZXNCeVNlbGVjdG9yKGRlc2NlbmRhbnRET01Ob2Rlcywgc2VsZWN0b3IpLFxuICAgICAgICBkZXNjZW5kYW50RWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhkZXNjZW5kYW50RE9NRWxlbWVudHMpO1xuXG4gIHJldHVybiBkZXNjZW5kYW50RWxlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROZXh0U2libGluZ0VsZW1lbnQoc2VsZWN0b3IgPSBXSUxEQ0FSRCkge1xuICBsZXQgbmV4dFNpYmxpbmdFbGVtZW50ID0gbnVsbDtcblxuICBjb25zdCBuZXh0U2libGluZ0RPTU5vZGUgPSB0aGlzLmRvbUVsZW1lbnQubmV4dFNpYmxpbmc7IC8vL1xuXG4gIGlmICgobmV4dFNpYmxpbmdET01Ob2RlICE9PSBudWxsKSAmJiBkb21Ob2RlTWF0Y2hlc1NlbGVjdG9yKG5leHRTaWJsaW5nRE9NTm9kZSwgc2VsZWN0b3IpKSB7XG4gICAgbmV4dFNpYmxpbmdFbGVtZW50ID0gbmV4dFNpYmxpbmdET01Ob2RlLl9fZWxlbWVudF9fIHx8IG51bGw7XG4gIH1cblxuICByZXR1cm4gbmV4dFNpYmxpbmdFbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJldmlvdXNTaWJsaW5nRWxlbWVudChzZWxlY3RvciA9IFdJTERDQVJEKSB7XG4gIGxldCBwcmV2aW91c1NpYmxpbmdFbGVtZW50ID0gbnVsbDtcblxuICBjb25zdCBwcmV2aW91c1NpYmxpbmdET01Ob2RlID0gdGhpcy5kb21FbGVtZW50LnByZXZpb3VzU2libGluZzsgIC8vL1xuXG4gIGlmICgocHJldmlvdXNTaWJsaW5nRE9NTm9kZSAhPT0gbnVsbCkgJiYgZG9tTm9kZU1hdGNoZXNTZWxlY3RvcihwcmV2aW91c1NpYmxpbmdET01Ob2RlLCBzZWxlY3RvcikpIHtcbiAgICBwcmV2aW91c1NpYmxpbmdFbGVtZW50ID0gcHJldmlvdXNTaWJsaW5nRE9NTm9kZS5fX2VsZW1lbnRfXyB8fCBudWxsO1xuICB9XG5cbiAgcmV0dXJuIHByZXZpb3VzU2libGluZ0VsZW1lbnQ7XG59XG5cbmNvbnN0IGVsZW1lbnRNaXhpbnMgPSB7XG4gIGdldFBhcmVudEVsZW1lbnQsXG4gIGdldENoaWxkRWxlbWVudHMsXG4gIGdldEFzY2VuZGFudEVsZW1lbnRzLFxuICBnZXREZXNjZW5kYW50RWxlbWVudHMsXG4gIGdldE5leHRTaWJsaW5nRWxlbWVudCxcbiAgZ2V0UHJldmlvdXNTaWJsaW5nRWxlbWVudFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZWxlbWVudE1peGlucztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE9mZnNldCBmcm9tIFwiLi9vZmZzZXRcIjtcbmltcG9ydCBCb3VuZHMgZnJvbSBcIi4vYm91bmRzXCI7XG5cbmltcG9ydCB7IGNvbnN0cnVjdEVsZW1lbnQsIGRlc3Ryb3lFbGVtZW50IH0gZnJvbSBcIi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IGdldFBhcmVudEVsZW1lbnQsIGdldEFzY2VuZGFudEVsZW1lbnRzLCBnZXROZXh0U2libGluZ0VsZW1lbnQsIGdldFByZXZpb3VzU2libGluZ0VsZW1lbnQgfSBmcm9tIFwiLi9taXhpbnMvZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0RWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHRleHQpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcywgLy8vXG4gICAgICAgICAgZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpOyAvLy9cblxuICAgIGNvbnN0cnVjdEVsZW1lbnQoZWxlbWVudCwgZG9tRWxlbWVudCk7XG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRPZmZzZXQoKSB7XG4gICAgY29uc3Qgb2Zmc2V0ID0gT2Zmc2V0LmZyb21ET01FbGVtZW50KHRoaXMuZG9tRWxlbWVudCk7XG5cbiAgICByZXR1cm4gb2Zmc2V0O1xuICB9XG5cbiAgZ2V0Qm91bmRzKCkge1xuICAgIGNvbnN0IGJvdW5kcyA9IEJvdW5kcy5mcm9tRE9NRWxlbWVudCh0aGlzLmRvbUVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIGJvdW5kcztcbiAgfVxuXG4gIGdldFdpZHRoKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50Lm9mZnNldFdpZHRoOyB9ICAvLy9cblxuICBnZXRIZWlnaHQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0SGVpZ2h0OyB9ICAvLy9cblxuICBnZXRUZXh0KCkge1xuICAgIGNvbnN0IG5vZGVWYWx1ZSA9IHRoaXMuZG9tRWxlbWVudC5ub2RlVmFsdWUsXG4gICAgICAgICAgdGV4dCA9IG5vZGVWYWx1ZTsgLy8vXG5cbiAgICByZXR1cm4gdGV4dDtcbiAgfVxuXG4gIHNldFRleHQodGV4dCkge1xuICAgIGNvbnN0IG5vZGVWYWx1ZSA9IHRleHQ7IC8vL1xuXG4gICAgdGhpcy5kb21FbGVtZW50Lm5vZGVWYWx1ZSA9IG5vZGVWYWx1ZTtcbiAgfVxuXG4gIHByZXBlbmRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQucHJlcGVuZCh0aGlzKTsgfVxuXG4gIGFwcGVuZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5hcHBlbmQodGhpcyk7IH1cblxuICBhZGRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQuYWRkKHRoaXMpOyB9XG5cbiAgcmVtb3ZlRnJvbShwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQucmVtb3ZlKHRoaXMpOyB9XG5cbiAgaW5zZXJ0QmVmb3JlKHNpYmxpbmdFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NTm9kZSA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQucGFyZW50Tm9kZSwgLy8vXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50OyAgLy8vXG5cbiAgICBwYXJlbnRET01Ob2RlLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50KTtcbiAgfVxuXG4gIGluc2VydEFmdGVyKHNpYmxpbmdFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NTm9kZSA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQucGFyZW50Tm9kZSwgLy8vXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50OyAgLy8vXG5cbiAgICBwYXJlbnRET01Ob2RlLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50Lm5leHRTaWJsaW5nKTsgIC8vL1xuICB9XG5cbiAgcmVtb3ZlKCkge1xuICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmUoKTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXM7IC8vL1xuXG4gICAgZGVzdHJveUVsZW1lbnQoZWxlbWVudCk7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihUZXh0RWxlbWVudC5wcm90b3R5cGUsIHtcbiAgZ2V0UGFyZW50RWxlbWVudCxcbiAgZ2V0QXNjZW5kYW50RWxlbWVudHMsXG4gIGdldE5leHRTaWJsaW5nRWxlbWVudCxcbiAgZ2V0UHJldmlvdXNTaWJsaW5nRWxlbWVudFxufSk7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUZXh0RWxlbWVudCBmcm9tIFwiLi4vdGV4dEVsZW1lbnRcIjtcblxuaW1wb3J0IHsgU1RSSU5HIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRmFsc2V5RWxlbWVudHMoZWxlbWVudHMpIHtcbiAgZWxlbWVudHMgPSBlbGVtZW50cy5yZWR1Y2UoKGVsZW1lbnRzLCBlbGVtZW50KSA9PiB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnRzO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZVN0cmluZ3NXaXRoVGV4dEVsZW1lbnRzKGVsZW1lbnRzKSB7XG4gIGVsZW1lbnRzID0gZWxlbWVudHMubWFwKChlbGVtZW50KSA9PiB7ICAvLy9cbiAgICBpZiAodHlwZW9mIGVsZW1lbnQgPT09IFNUUklORykge1xuICAgICAgY29uc3QgdGV4dCA9IGVsZW1lbnQsICAvLy9cbiAgICAgICAgICAgIHRleHRFbGVtZW50ID0gbmV3IFRleHRFbGVtZW50KHRleHQpO1xuXG4gICAgICBlbGVtZW50ID0gdGV4dEVsZW1lbnQ7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9KTtcblxuICByZXR1cm4gZWxlbWVudHM7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBDVVRfRVZFTlRfVFlQRSA9IFwiY3V0XCI7XG5leHBvcnQgY29uc3QgQ09QWV9FVkVOVF9UWVBFID0gXCJjb3B5XCI7XG5leHBvcnQgY29uc3QgQkxVUl9FVkVOVF9UWVBFID0gXCJibHVyXCI7XG5leHBvcnQgY29uc3QgRVJST1JfRVZFTlRfVFlQRSA9IFwiZXJyb3JcIjtcbmV4cG9ydCBjb25zdCBQQVNURV9FVkVOVF9UWVBFID0gXCJwYXN0ZVwiO1xuZXhwb3J0IGNvbnN0IFdIRUVMX0VWRU5UX1RZUEUgPSBcIndoZWVsXCI7XG5leHBvcnQgY29uc3QgSU5QVVRfRVZFTlRfVFlQRSA9IFwiaW5wdXRcIjtcbmV4cG9ydCBjb25zdCBGT0NVU19FVkVOVF9UWVBFID0gXCJmb2N1c1wiO1xuZXhwb3J0IGNvbnN0IENMSUNLX0VWRU5UX1RZUEUgPSBcImNsaWNrXCI7XG5leHBvcnQgY29uc3QgS0VZVVBfRVZFTlRfVFlQRSA9IFwia2V5dXBcIjtcbmV4cG9ydCBjb25zdCBTRUxFQ1RfRVZFTlRfVFlQRSA9IFwic2VsZWN0XCI7XG5leHBvcnQgY29uc3QgQ0hBTkdFX0VWRU5UX1RZUEUgPSBcImNoYW5nZVwiO1xuZXhwb3J0IGNvbnN0IFJFU0laRV9FVkVOVF9UWVBFID0gXCJyZXNpemVcIjtcbmV4cG9ydCBjb25zdCBTQ1JPTExfRVZFTlRfVFlQRSA9IFwic2Nyb2xsXCI7XG5leHBvcnQgY29uc3QgS0VZRE9XTl9FVkVOVF9UWVBFID0gXCJrZXlkb3duXCI7XG5leHBvcnQgY29uc3QgTU9VU0VVUF9FVkVOVF9UWVBFID0gXCJtb3VzZXVwXCI7XG5leHBvcnQgY29uc3QgQVVYQ0xJQ0tfRVZFTlRfVFlQRSA9IFwiYXV4Y2xpY2tcIjtcbmV4cG9ydCBjb25zdCBNT1VTRU9VVF9FVkVOVF9UWVBFID0gXCJtb3VzZW91dFwiO1xuZXhwb3J0IGNvbnN0IERCTENMSUNLX0VWRU5UX1RZUEUgPSBcImRibGNsaWNrXCI7XG5leHBvcnQgY29uc3QgVE9VQ0hFTkRfRVZFTlRfVFlQRSA9IFwidG91Y2hlbmRcIjtcbmV4cG9ydCBjb25zdCBUT1VDSE1PVkVfRVZFTlRfVFlQRSA9IFwidG91Y2htb3ZlXCI7XG5leHBvcnQgY29uc3QgTU9VU0VPVkVSX0VWRU5UX1RZUEUgPSBcIm1vdXNlb3ZlclwiO1xuZXhwb3J0IGNvbnN0IE1PVVNFRE9XTl9FVkVOVF9UWVBFID0gXCJtb3VzZWRvd25cIjtcbmV4cG9ydCBjb25zdCBNT1VTRU1PVkVfRVZFTlRfVFlQRSA9IFwibW91c2Vtb3ZlXCI7XG5leHBvcnQgY29uc3QgVE9VQ0hTVEFSVF9FVkVOVF9UWVBFID0gXCJ0b3VjaHN0YXJ0XCI7XG5leHBvcnQgY29uc3QgQ09OVEVYVE1FTlVfRVZFTlRfVFlQRSA9IFwiY29udGV4dG1lbnVcIjtcbmV4cG9ydCBjb25zdCBTRUxFQ1RJT05DSEFOR0VfRVZFTlRfVFlQRSA9IFwic2VsZWN0aW9uY2hhbmdlXCI7XG5leHBvcnQgY29uc3QgRlVMTFNDUkVFTkNIQU5HRV9FVkVOVF9UWVBFID0gXCJmdWxsc2NyZWVuY2hhbmdlXCI7XG5leHBvcnQgY29uc3QgVU5IQU5ETEVEUkVKRUNUSU9OX0VWRU5UX1RZUEUgPSBcInVuaGFuZGxlZHJlamVjdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIENVVF9FVkVOVF9UWVBFLFxuICBDT1BZX0VWRU5UX1RZUEUsXG4gIEJMVVJfRVZFTlRfVFlQRSxcbiAgRVJST1JfRVZFTlRfVFlQRSxcbiAgUEFTVEVfRVZFTlRfVFlQRSxcbiAgV0hFRUxfRVZFTlRfVFlQRSxcbiAgSU5QVVRfRVZFTlRfVFlQRSxcbiAgRk9DVVNfRVZFTlRfVFlQRSxcbiAgQ0xJQ0tfRVZFTlRfVFlQRSxcbiAgS0VZVVBfRVZFTlRfVFlQRSxcbiAgU0VMRUNUX0VWRU5UX1RZUEUsXG4gIENIQU5HRV9FVkVOVF9UWVBFLFxuICBSRVNJWkVfRVZFTlRfVFlQRSxcbiAgU0NST0xMX0VWRU5UX1RZUEUsXG4gIEtFWURPV05fRVZFTlRfVFlQRSxcbiAgTU9VU0VVUF9FVkVOVF9UWVBFLFxuICBBVVhDTElDS19FVkVOVF9UWVBFLFxuICBNT1VTRU9VVF9FVkVOVF9UWVBFLFxuICBEQkxDTElDS19FVkVOVF9UWVBFLFxuICBUT1VDSEVORF9FVkVOVF9UWVBFLFxuICBUT1VDSE1PVkVfRVZFTlRfVFlQRSxcbiAgTU9VU0VPVkVSX0VWRU5UX1RZUEUsXG4gIE1PVVNFRE9XTl9FVkVOVF9UWVBFLFxuICBNT1VTRU1PVkVfRVZFTlRfVFlQRSxcbiAgVE9VQ0hTVEFSVF9FVkVOVF9UWVBFLFxuICBDT05URVhUTUVOVV9FVkVOVF9UWVBFLFxuICBTRUxFQ1RJT05DSEFOR0VfRVZFTlRfVFlQRSxcbiAgRlVMTFNDUkVFTkNIQU5HRV9FVkVOVF9UWVBFLFxuICBVTkhBTkRMRURSRUpFQ1RJT05fRVZFTlRfVFlQRVxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZ3VhcmFudGVlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgY29tYmluZSwgcHJ1bmUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL29iamVjdFwiO1xuaW1wb3J0IHsgY2FtZWxDYXNlVG9TbmFrZUNhc2UgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgaXNIVE1MQXR0cmlidXRlTmFtZSwgaXNTVkdBdHRyaWJ1dGVOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9uYW1lXCI7XG5pbXBvcnQgeyByZW1vdmVGYWxzZXlFbGVtZW50cywgcmVwbGFjZVN0cmluZ3NXaXRoVGV4dEVsZW1lbnRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50c1wiO1xuaW1wb3J0IHsgREJMQ0xJQ0tfRVZFTlRfVFlQRSwgU0VMRUNUSU9OQ0hBTkdFX0VWRU5UX1RZUEUsIEZVTExTQ1JFRU5DSEFOR0VfRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9ldmVudFR5cGVzXCI7XG5pbXBvcnQgeyBGT1IsIENMQVNTLCBPQkpFQ1QsIEhUTUxfRk9SLCBDTEFTU19OQU1FLCBCT09MRUFOLCBGVU5DVElPTiwgU1ZHX05BTUVTUEFDRV9VUkkgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IERPVUJMRV9DTElDS19FVkVOVF9UWVBFID0gXCJkb3VibGVjbGlja1wiLFxuICAgICAgU0VMRUNUSU9OX0NIQU5HRV9FVkVOVF9UWVBFID0gXCJzZWxlY3Rpb25DaGFuZ2VcIixcbiAgICAgIEZVTExfU0NSRUVOX0NIQU5HRV9FVkVOVF9UWVBFID0gXCJmdWxsU2NyZWVuQ2hhbmdlXCI7XG5cbmZ1bmN0aW9uIGFwcGx5UHJvcGVydGllcyhwcm9wZXJ0aWVzLCBkZWZhdWx0UHJvcGVydGllcywgaWdub3JlZFByb3BlcnRpZXMpIHtcbiAgdGhpcy5wcm9wZXJ0aWVzID0gY29tYmluZShwcm9wZXJ0aWVzLCBkZWZhdWx0UHJvcGVydGllcyk7XG5cbiAgcHJvcGVydGllcyA9IHBydW5lKHRoaXMucHJvcGVydGllcywgaWdub3JlZFByb3BlcnRpZXMpOyAvLy9cblxuICBjb25zdCBuYW1lc3BhY2VVUkkgPSB0aGlzLmRvbUVsZW1lbnQubmFtZXNwYWNlVVJJLFxuICAgICAgICBzdmcgPSAobmFtZXNwYWNlVVJJID09PSBTVkdfTkFNRVNQQUNFX1VSSSksIC8vL1xuICAgICAgICBwcm9wZXJ0aWVzS2V5cyA9IE9iamVjdC5rZXlzKHByb3BlcnRpZXMpLFxuICAgICAgICBuYW1lcyA9IHByb3BlcnRpZXNLZXlzOyAgLy8vPVxuXG4gIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IHByb3BlcnRpZXNbbmFtZV0sXG4gICAgICAgICAgbmFtZUhhbmRsZXJOYW1lID0gaXNOYW1lSGFuZGxlck5hbWUobmFtZSksXG4gICAgICAgICAgbmFtZUN1c3RvbUhhbmRsZXJOYW1lID0gaXNOYW1lQ3VzdG9tSGFuZGxlck5hbWUobmFtZSk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAobmFtZUhhbmRsZXJOYW1lKSB7XG4gICAgICBhZGRIYW5kbGVyKHRoaXMsIG5hbWUsIHZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKG5hbWVDdXN0b21IYW5kbGVyTmFtZSkge1xuICAgICAgYWRkQ3VzdG9tSGFuZGxlcih0aGlzLCBuYW1lLCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5hbWVBdHRyaWJ1dGVOYW1lID0gaXNOYW1lQXR0cmlidXRlTmFtZShuYW1lLCBzdmcpO1xuXG4gICAgICBpZiAobmFtZUF0dHJpYnV0ZU5hbWUpIHtcbiAgICAgICAgYWRkQXR0cmlidXRlKHRoaXMsIG5hbWUsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGNoaWxkRWxlbWVudHMgPSBjaGlsZEVsZW1lbnRzRnJvbUVsZW1lbnQodGhpcykgfHwgcHJvcGVydGllcy5jaGlsZEVsZW1lbnRzLCAgLy8vXG4gICAgICAgIGNvbnRleHQgPSB7fTtcblxuICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4ge1xuICAgIHVwZGF0ZUNvbnRleHQoY2hpbGRFbGVtZW50LCBjb250ZXh0KTtcblxuICAgIHRoaXMuYWRkKGNoaWxkRWxlbWVudCk7XG4gIH0pO1xuXG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG59XG5cbmZ1bmN0aW9uIGdldFByb3BlcnRpZXMoKSB7XG4gIHJldHVybiB0aGlzLnByb3BlcnRpZXM7XG59XG5cbmZ1bmN0aW9uIGdldENvbnRleHQoKSB7XG4gIHJldHVybiB0aGlzLmNvbnRleHQ7XG59XG5cbmZ1bmN0aW9uIGFzc2lnbkNvbnRleHQobmFtZXMpIHtcbiAgaWYgKG5hbWVzID09PSB1bmRlZmluZWQpIHtcbiAgICBuYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMuY29udGV4dClcbiAgfVxuXG4gIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuY29udGV4dFtuYW1lXSxcbiAgICAgICAgICBwcm9wZXJ0eU5hbWUgPSBuYW1lLCAgLy8vXG4gICAgICAgICAgZGVzY3JpcHRvciA9IHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICAgIH07XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgcHJvcGVydHlOYW1lLCBkZXNjcmlwdG9yKTtcblxuICAgIGRlbGV0ZSB0aGlzLmNvbnRleHRbbmFtZV07XG4gIH0pO1xufVxuXG5jb25zdCBqc3hNaXhpbnMgPSB7XG4gIGFwcGx5UHJvcGVydGllcyxcbiAgZ2V0UHJvcGVydGllcyxcbiAgZ2V0Q29udGV4dCxcbiAgYXNzaWduQ29udGV4dFxufTtcblxuZXhwb3J0IGRlZmF1bHQganN4TWl4aW5zO1xuXG5mdW5jdGlvbiBjaGlsZEVsZW1lbnRzRnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICBsZXQgY2hpbGRFbGVtZW50cyA9IG51bGw7XG5cbiAgaWYgKHR5cGVvZiBlbGVtZW50LmNoaWxkRWxlbWVudHMgPT09IEZVTkNUSU9OKSB7XG4gICAgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnQuY2hpbGRFbGVtZW50cy5jYWxsKGVsZW1lbnQpO1xuXG4gICAgY2hpbGRFbGVtZW50cyA9IGd1YXJhbnRlZShjaGlsZEVsZW1lbnRzKTtcblxuICAgIGNoaWxkRWxlbWVudHMgPSByZW1vdmVGYWxzZXlFbGVtZW50cyhjaGlsZEVsZW1lbnRzKTtcblxuICAgIGNoaWxkRWxlbWVudHMgPSByZXBsYWNlU3RyaW5nc1dpdGhUZXh0RWxlbWVudHMoY2hpbGRFbGVtZW50cyk7XG4gIH1cblxuICByZXR1cm4gY2hpbGRFbGVtZW50cztcbn1cblxuZnVuY3Rpb24gdXBkYXRlQ29udGV4dChjaGlsZEVsZW1lbnQsIGNvbnRleHQpIHtcbiAgY29uc3QgcGFyZW50Q29udGV4dCA9ICh0eXBlb2YgY2hpbGRFbGVtZW50LnBhcmVudENvbnRleHQgPT09IEZVTkNUSU9OKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRWxlbWVudC5wYXJlbnRDb250ZXh0KCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRWxlbWVudC5jb250ZXh0OyAvLy9cblxuICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHBhcmVudENvbnRleHQpO1xufVxuXG5mdW5jdGlvbiBhZGRIYW5kbGVyKGVsZW1lbnQsIG5hbWUsIHZhbHVlKSB7XG4gIGxldCBldmVudFR5cGUgPSBuYW1lLnN1YnN0cmluZygyKS50b0xvd2VyQ2FzZSgpOyAvLy9cblxuICBzd2l0Y2ggKGV2ZW50VHlwZSkge1xuICAgIGNhc2UgRE9VQkxFX0NMSUNLX0VWRU5UX1RZUEU6IHtcbiAgICAgIGV2ZW50VHlwZSA9IERCTENMSUNLX0VWRU5UX1RZUEU7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgU0VMRUNUSU9OX0NIQU5HRV9FVkVOVF9UWVBFOiB7XG4gICAgICBldmVudFR5cGUgPSBTRUxFQ1RJT05DSEFOR0VfRVZFTlRfVFlQRTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBGVUxMX1NDUkVFTl9DSEFOR0VfRVZFTlRfVFlQRToge1xuICAgICAgZXZlbnRUeXBlID0gRlVMTFNDUkVFTkNIQU5HRV9FVkVOVF9UWVBFO1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZXIgPSB2YWx1ZTsgIC8vL1xuXG4gIGVsZW1lbnQub25FdmVudChldmVudFR5cGUsIGhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBhZGRDdXN0b21IYW5kbGVyKGVsZW1lbnQsIG5hbWUsIHZhbHVlKSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IGNhbWVsQ2FzZVRvU25ha2VDYXNlKG5hbWUpLnJlcGxhY2UoL29uLWN1c3RvbS0vLCBcIlwiKSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHZhbHVlOyAgLy8vXG5cbiAgZWxlbWVudC5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJpYnV0ZShlbGVtZW50LCBuYW1lLCB2YWx1ZSkge1xuICBpZiAobmFtZSA9PT0gQ0xBU1NfTkFNRSkge1xuICAgIG5hbWUgPSBDTEFTUztcbiAgfVxuXG4gIGlmIChuYW1lID09PSBIVE1MX0ZPUikge1xuICAgIG5hbWUgPSBGT1I7XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSBPQkpFQ1QpIHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xuXG4gICAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGVsZW1lbnQuZG9tRWxlbWVudFtuYW1lXVtrZXldID0gdmFsdWVba2V5XTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IEJPT0xFQU4pIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHZhbHVlID0gbmFtZTsgLy8vXG5cbiAgICAgIGVsZW1lbnQuYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudC5hZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzTmFtZUhhbmRsZXJOYW1lKG5hbWUpIHtcbiAgY29uc3QgbmFtZUhhbmRsZXJOYW1lID0gIC9eb24oPyFDdXN0b20pLy50ZXN0KG5hbWUpOyAgLy8vXG5cbiAgcmV0dXJuIG5hbWVIYW5kbGVyTmFtZTtcbn1cblxuZnVuY3Rpb24gaXNOYW1lQXR0cmlidXRlTmFtZShuYW1lLCBzdmcpIHtcbiAgY29uc3QgbmFtZUF0dHJpYnV0ZU5hbWUgPSBzdmcgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1NWR0F0dHJpYnV0ZU5hbWUobmFtZSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSFRNTEF0dHJpYnV0ZU5hbWUobmFtZSk7XG5cbiAgcmV0dXJuIG5hbWVBdHRyaWJ1dGVOYW1lO1xufVxuXG5mdW5jdGlvbiBpc05hbWVDdXN0b21IYW5kbGVyTmFtZShuYW1lKSB7XG4gIGNvbnN0IG5hbWVDdXN0b21IYW5kbGVyTmFtZSA9IC9eb25DdXN0b20vLnRlc3QobmFtZSk7XG5cbiAgcmV0dXJuIG5hbWVDdXN0b21IYW5kbGVyTmFtZTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgS0VZVVBfRVZFTlRfVFlQRSwgS0VZRE9XTl9FVkVOVF9UWVBFIH0gZnJvbSBcIi4uL2V2ZW50VHlwZXNcIjtcblxuZnVuY3Rpb24gb25LZXlVcChrZXlVcEhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vbkV2ZW50KEtFWVVQX0VWRU5UX1RZUEUsIGtleVVwSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb2ZmS2V5VXAoa2V5VXBIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmRXZlbnQoS0VZVVBfRVZFTlRfVFlQRSwga2V5VXBIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvbktleURvd24oa2V5RG93bkhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vbkV2ZW50KEtFWURPV05fRVZFTlRfVFlQRSwga2V5RG93bkhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9mZktleURvd24oa2V5RG93bkhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vZmZFdmVudChLRVlET1dOX0VWRU5UX1RZUEUsIGtleURvd25IYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5jb25zdCBrZXlNaXhpbnMgPSB7XG4gIG9uS2V5VXAsXG4gIG9mZktleVVwLFxuICBvbktleURvd24sXG4gIG9mZktleURvd25cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGtleU1peGlucztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gZ2V0U3RhdGUoKSB7XG4gIHJldHVybiB0aGlzLnN0YXRlO1xufVxuXG5mdW5jdGlvbiBzZXRTdGF0ZShzdGF0ZSkge1xuICB0aGlzLnN0YXRlID0gc3RhdGU7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVN0YXRlKHN0YXRlKSB7XG4gICh0aGlzLnN0YXRlID09PSB1bmRlZmluZWQpID9cbiAgICB0aGlzLnN0YXRlID0gc3RhdGUgOlxuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLnN0YXRlLCBzdGF0ZSk7XG59XG5cbmNvbnN0IHN0YXRlTWl4aW5zID0ge1xuICBnZXRTdGF0ZSxcbiAgc2V0U3RhdGUsXG4gIHVwZGF0ZVN0YXRlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBzdGF0ZU1peGlucztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgU1BBQ0UgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBSRVNJWkVfRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9ldmVudFR5cGVzXCI7XG5cbmZ1bmN0aW9uIG9uRXZlbnQoZXZlbnRUeXBlcywgaGFuZGxlciwgZWxlbWVudCA9IHRoaXMpIHtcbiAgZXZlbnRUeXBlcyA9IGV2ZW50VHlwZXMuc3BsaXQoU1BBQ0UpOyAvLy9cblxuICBldmVudFR5cGVzLmZvckVhY2goKGV2ZW50VHlwZSkgPT4ge1xuICAgIGlmIChldmVudFR5cGUgPT09IFJFU0laRV9FVkVOVF9UWVBFKSB7XG4gICAgICBjb25zdCByZXNpemVFdmVudExpc3RlbmVycyA9IHRoaXMuZmluZEV2ZW50TGlzdGVuZXJzKFJFU0laRV9FVkVOVF9UWVBFKSxcbiAgICAgICAgICAgIHJlc2l6ZUV2ZW50TGlzdGVuZXJzTGVuZ3RoID0gcmVzaXplRXZlbnRMaXN0ZW5lcnMubGVuZ3RoO1xuXG4gICAgICBpZiAocmVzaXplRXZlbnRMaXN0ZW5lcnNMZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy5yZXNpemVPYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgICAgICAgIGNvbnN0IHJlc2l6ZUV2ZW50TGlzdGVuZXJzID0gdGhpcy5maW5kRXZlbnRMaXN0ZW5lcnMoUkVTSVpFX0VWRU5UX1RZUEUpO1xuXG4gICAgICAgICAgcmVzaXplRXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgocmVzaXplRXZlbnRMaXN0ZW5lcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBudWxsO1xuXG4gICAgICAgICAgICByZXNpemVFdmVudExpc3RlbmVyKGV2ZW50KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5yZXNpemVPYnNlcnZlci5vYnNlcnZlKHRoaXMuZG9tRWxlbWVudClcbiAgICAgIH1cblxuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGV2ZW50TGlzdGVuZXIgPSB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcblxuICAgICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBldmVudExpc3RlbmVyKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBvZmZFdmVudChldmVudFR5cGVzLCBoYW5kbGVyLCBlbGVtZW50ID0gdGhpcykge1xuICBldmVudFR5cGVzID0gZXZlbnRUeXBlcy5zcGxpdChTUEFDRSk7IC8vL1xuXG4gIGV2ZW50VHlwZXMuZm9yRWFjaCgoZXZlbnRUeXBlKSA9PiB7XG4gICAgaWYgKGV2ZW50VHlwZSA9PT0gUkVTSVpFX0VWRU5UX1RZUEUpIHtcbiAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuXG4gICAgICBjb25zdCByZXNpemVFdmVudExpc3RlbmVycyA9IHRoaXMuZmluZEV2ZW50TGlzdGVuZXJzKFJFU0laRV9FVkVOVF9UWVBFKSxcbiAgICAgICAgICAgIHJlc2l6ZUV2ZW50TGlzdGVuZXJzTGVuZ3RoID0gcmVzaXplRXZlbnRMaXN0ZW5lcnMubGVuZ3RoO1xuXG4gICAgICBpZiAocmVzaXplRXZlbnRMaXN0ZW5lcnNMZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy5yZXNpemVPYnNlcnZlci51bm9ic2VydmUodGhpcy5kb21FbGVtZW50KTtcblxuICAgICAgICBkZWxldGUgdGhpcy5yZXNpemVPYnNlcnZlcjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZXZlbnRMaXN0ZW5lciA9IHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGV2ZW50TGlzdGVuZXIpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGV2ZW50TGlzdGVuZXIgPSB0aGlzLmNyZWF0ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcblxuICBpZiAoIXRoaXMuZXZlbnRMaXN0ZW5lcnMpIHtcbiAgICB0aGlzLmV2ZW50TGlzdGVuZXJzID0gW107XG4gIH1cblxuICB0aGlzLmV2ZW50TGlzdGVuZXJzLnB1c2goZXZlbnRMaXN0ZW5lcik7XG5cbiAgcmV0dXJuIGV2ZW50TGlzdGVuZXI7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGV2ZW50TGlzdGVuZXIgPSB0aGlzLmZpbmRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCksXG4gICAgICAgIGluZGV4ID0gdGhpcy5ldmVudExpc3RlbmVycy5pbmRleE9mKGV2ZW50TGlzdGVuZXIpLFxuICAgICAgICBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICB0aGlzLmV2ZW50TGlzdGVuZXJzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuXG4gIGlmICh0aGlzLmV2ZW50TGlzdGVuZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgIGRlbGV0ZSB0aGlzLmV2ZW50TGlzdGVuZXJzO1xuICB9XG5cbiAgcmV0dXJuIGV2ZW50TGlzdGVuZXI7XG59XG5cbmZ1bmN0aW9uIGZpbmRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBldmVudExpc3RlbmVyID0gdGhpcy5ldmVudExpc3RlbmVycy5maW5kKChldmVudExpc3RlbmVyKSA9PiB7XG4gICAgaWYgKChldmVudExpc3RlbmVyLmVsZW1lbnQgPT09IGVsZW1lbnQpICYmIChldmVudExpc3RlbmVyLmhhbmRsZXIgPT09IGhhbmRsZXIpICYmIChldmVudExpc3RlbmVyLmV2ZW50VHlwZSA9PT0gZXZlbnRUeXBlKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZXZlbnRMaXN0ZW5lcjtcbn1cblxuZnVuY3Rpb24gZmluZEV2ZW50TGlzdGVuZXJzKGV2ZW50VHlwZSkge1xuICBjb25zdCBldmVudExpc3RlbmVycyA9IFtdO1xuXG4gIGlmICh0aGlzLmV2ZW50TGlzdGVuZXJzKSB7XG4gICAgdGhpcy5ldmVudExpc3RlbmVycy5mb3JFYWNoKChldmVudExpc3RlbmVyKSA9PiB7XG4gICAgICBjb25zdCBmb3VuZCA9IChldmVudExpc3RlbmVyLmV2ZW50VHlwZSA9PT0gZXZlbnRUeXBlKTtcblxuICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgIGV2ZW50TGlzdGVuZXJzLnB1c2goZXZlbnRMaXN0ZW5lcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZXZlbnRMaXN0ZW5lcnM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KSB7XG4gIGxldCBldmVudExpc3RlbmVyO1xuXG4gIGNvbnN0IGhhbmRsZXJFbGVtZW50ID0gZWxlbWVudDsgLy8vXG5cbiAgZXZlbnRMaXN0ZW5lciA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgIGhhbmRsZXIuY2FsbChoYW5kbGVyRWxlbWVudCwgZXZlbnQsIGVsZW1lbnQpO1xuICB9O1xuXG4gIE9iamVjdC5hc3NpZ24oZXZlbnRMaXN0ZW5lciwge1xuICAgIGVsZW1lbnQsXG4gICAgaGFuZGxlcixcbiAgICBldmVudFR5cGVcbiAgfSk7XG5cbiAgcmV0dXJuIGV2ZW50TGlzdGVuZXI7XG59XG5cbmNvbnN0IGV2ZW50TWl4aW5zID0ge1xuICBvbkV2ZW50LFxuICBvZmZFdmVudCxcbiAgYWRkRXZlbnRMaXN0ZW5lcixcbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcixcbiAgZmluZEV2ZW50TGlzdGVuZXIsXG4gIGZpbmRFdmVudExpc3RlbmVycyxcbiAgY3JlYXRlRXZlbnRMaXN0ZW5lclxufTtcblxuZXhwb3J0IGRlZmF1bHQgZXZlbnRNaXhpbnM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IE1PVVNFVVBfRVZFTlRfVFlQRSwgTU9VU0VPVVRfRVZFTlRfVFlQRSwgTU9VU0VET1dOX0VWRU5UX1RZUEUsIE1PVVNFT1ZFUl9FVkVOVF9UWVBFLCBNT1VTRU1PVkVfRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9ldmVudFR5cGVzXCI7XG5cbmZ1bmN0aW9uIG9uTW91c2VVcChtb3VzZVVwSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uRXZlbnQoTU9VU0VVUF9FVkVOVF9UWVBFLCBtb3VzZVVwSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb2ZmTW91c2VVcChtb3VzZVVwSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZkV2ZW50KE1PVVNFVVBfRVZFTlRfVFlQRSwgbW91c2VVcEhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9uTW91c2VPdXQobW91c2VPdXRIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub25FdmVudChNT1VTRU9VVF9FVkVOVF9UWVBFLCBtb3VzZU91dEhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9mZk1vdXNlT3V0KG1vdXNlT3V0SGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZkV2ZW50KE1PVVNFT1VUX0VWRU5UX1RZUEUsIG1vdXNlT3V0SGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb25Nb3VzZURvd24obW91c2VEb3duSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uRXZlbnQoTU9VU0VET1dOX0VWRU5UX1RZUEUsIG1vdXNlRG93bkhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9mZk1vdXNlRG93bihtb3VzZURvd25IYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmRXZlbnQoTU9VU0VET1dOX0VWRU5UX1RZUEUsIG1vdXNlRG93bkhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9uTW91c2VPdmVyKG1vdXNlT3ZlckhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vbkV2ZW50KE1PVVNFT1ZFUl9FVkVOVF9UWVBFLCBtb3VzZU92ZXJIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvZmZNb3VzZU92ZXIobW91c2VPdmVySGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZkV2ZW50KE1PVVNFT1ZFUl9FVkVOVF9UWVBFLCBtb3VzZU92ZXJIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvbk1vdXNlTW92ZShtb3VzZU1vdmVIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub25FdmVudChNT1VTRU1PVkVfRVZFTlRfVFlQRSwgbW91c2VNb3ZlSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb2ZmTW91c2VNb3ZlKG1vdXNlTW92ZUhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vZmZFdmVudChNT1VTRU1PVkVfRVZFTlRfVFlQRSwgbW91c2VNb3ZlSGFuZGxlciwgZWxlbWVudCk7IH1cblxuY29uc3QgbW91c2VNaXhpbnMgPSB7XG4gIG9uTW91c2VVcCxcbiAgb2ZmTW91c2VVcCxcbiAgb25Nb3VzZU91dCxcbiAgb2ZmTW91c2VPdXQsXG4gIG9uTW91c2VEb3duLFxuICBvZmZNb3VzZURvd24sXG4gIG9uTW91c2VPdmVyLFxuICBvZmZNb3VzZU92ZXIsXG4gIG9uTW91c2VNb3ZlLFxuICBvZmZNb3VzZU1vdmVcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1vdXNlTWl4aW5zO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDTElDS19FVkVOVF9UWVBFLCBEQkxDTElDS19FVkVOVF9UWVBFLCBBVVhDTElDS19FVkVOVF9UWVBFIH0gZnJvbSBcIi4uL2V2ZW50VHlwZXNcIjtcblxuZnVuY3Rpb24gb25DbGljayhjbGlja0hhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vbkV2ZW50KENMSUNLX0VWRU5UX1RZUEUsIGNsaWNrSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb2ZmQ2xpY2soY2xpY2tIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmRXZlbnQoQ0xJQ0tfRVZFTlRfVFlQRSwgY2xpY2tIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvbkF1eENsaWNrKGF1eENsaWNrSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uRXZlbnQoQVVYQ0xJQ0tfRVZFTlRfVFlQRSwgYXV4Q2xpY2tIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvZmZBdXhDbGljayhhdXhDbGlja0hhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vZmZFdmVudChBVVhDTElDS19FVkVOVF9UWVBFLCBhdXhDbGlja0hhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9uRG91YmxlQ2xpY2soZG91YmxlQ2xpY2tIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub25FdmVudChEQkxDTElDS19FVkVOVF9UWVBFLCBkb3VibGVDbGlja0hhbmRsZXIsIGVsZW1lbnQpOyB9IC8vL1xuXG5mdW5jdGlvbiBvZmZEb3VibGVDbGljayhkb3VibGVDbGlja0hhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vZmZFdmVudChEQkxDTElDS19FVkVOVF9UWVBFLCBkb3VibGVDbGlja0hhbmRsZXIsIGVsZW1lbnQpOyB9IC8vL1xuXG5jb25zdCBjbGlja01peGlucyA9IHtcbiAgb25DbGljayxcbiAgb2ZmQ2xpY2ssXG4gIG9uQXV4Q2xpY2ssXG4gIG9mZkF1eENsaWNrLFxuICBvbkRvdWJsZUNsaWNrLFxuICBvZmZEb3VibGVDbGlja1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xpY2tNaXhpbnM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFRPVUNIU1RBUlRfRVZFTlRfVFlQRSwgVE9VQ0hNT1ZFX0VWRU5UX1RZUEUsIFRPVUNIRU5EX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi4vZXZlbnRUeXBlc1wiO1xuXG5mdW5jdGlvbiBvblRvdWNoU3RhcnQodG91Y2hTdGFydEhhbmRsZXIpIHsgdGhpcy5vbkV2ZW50KFRPVUNIU1RBUlRfRVZFTlRfVFlQRSwgdG91Y2hTdGFydEhhbmRsZXIpOyB9XG5cbmZ1bmN0aW9uIG9mZlRvdWNoU3RhcnQodG91Y2hTdGFydEhhbmRsZXIpIHsgdGhpcy5vZmZFdmVudChUT1VDSFNUQVJUX0VWRU5UX1RZUEUsIHRvdWNoU3RhcnRIYW5kbGVyKTsgfVxuXG5mdW5jdGlvbiBvblRvdWNoTW92ZSh0b3VjaFN0YXJ0SGFuZGxlcikgeyB0aGlzLm9uRXZlbnQoVE9VQ0hNT1ZFX0VWRU5UX1RZUEUsIHRvdWNoU3RhcnRIYW5kbGVyKTsgfVxuXG5mdW5jdGlvbiBvZmZUb3VjaE1vdmUodG91Y2hTdGFydEhhbmRsZXIpIHsgdGhpcy5vZmZFdmVudChUT1VDSE1PVkVfRVZFTlRfVFlQRSwgdG91Y2hTdGFydEhhbmRsZXIpOyB9XG5cbmZ1bmN0aW9uIG9uVG91Y2hFbmQodG91Y2hTdGFydEhhbmRsZXIpIHsgdGhpcy5vbkV2ZW50KFRPVUNIRU5EX0VWRU5UX1RZUEUsIHRvdWNoU3RhcnRIYW5kbGVyKTsgfVxuXG5mdW5jdGlvbiBvZmZUb3VjaEVuZCh0b3VjaFN0YXJ0SGFuZGxlcikgeyB0aGlzLm9mZkV2ZW50KFRPVUNIRU5EX0VWRU5UX1RZUEUsIHRvdWNoU3RhcnRIYW5kbGVyKTsgfVxuXG5jb25zdCBjbGlja01peGlucyA9IHtcbiAgb25Ub3VjaFN0YXJ0LFxuICBvZmZUb3VjaFN0YXJ0LFxuICBvblRvdWNoTW92ZSxcbiAgb2ZmVG91Y2hNb3ZlLFxuICBvblRvdWNoRW5kLFxuICBvZmZUb3VjaEVuZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xpY2tNaXhpbnM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFNDUk9MTF9FVkVOVF9UWVBFIH0gZnJvbSBcIi4uL2V2ZW50VHlwZXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG9uU2Nyb2xsKHNjcm9sbEhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vbkV2ZW50KFNDUk9MTF9FVkVOVF9UWVBFLCBzY3JvbGxIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gb2ZmU2Nyb2xsKHNjcm9sbEhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vZmZFdmVudChTQ1JPTExfRVZFTlRfVFlQRSwgc2Nyb2xsSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gc2Nyb2xsVG8oc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KSB7IHRoaXMuZG9tRWxlbWVudC5zY3JvbGxUbyhzY3JvbGxMZWZ0LCBzY3JvbGxUb3ApOyB9IC8vL1xuXG5mdW5jdGlvbiBnZXRTY3JvbGxUb3AoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuc2Nyb2xsVG9wOyB9XG5cbmZ1bmN0aW9uIGdldFNjcm9sbExlZnQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuc2Nyb2xsTGVmdDsgfVxuXG5mdW5jdGlvbiBnZXRTY3JvbGxXaWR0aCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5zY3JvbGxXaWR0aDsgfVxuXG5mdW5jdGlvbiBnZXRTY3JvbGxIZWlnaHQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuc2Nyb2xsSGVpZ2h0OyB9XG5cbmZ1bmN0aW9uIHNldFNjcm9sbFRvcChzY3JvbGxUb3ApIHsgdGhpcy5kb21FbGVtZW50LnNjcm9sbFRvcCA9IHNjcm9sbFRvcDsgfVxuXG5mdW5jdGlvbiBzZXRTY3JvbGxMZWZ0KHNjcm9sbExlZnQpIHsgdGhpcy5kb21FbGVtZW50LnNjcm9sbExlZnQgPSBzY3JvbGxMZWZ0OyB9XG5cbmNvbnN0IHNjcm9sbE1peGlucyA9IHtcbiAgb25TY3JvbGwsXG4gIG9mZlNjcm9sbCxcbiAgc2Nyb2xsVG8sXG4gIGdldFNjcm9sbFRvcCxcbiAgZ2V0U2Nyb2xsTGVmdCxcbiAgZ2V0U2Nyb2xsV2lkdGgsXG4gIGdldFNjcm9sbEhlaWdodCxcbiAgc2V0U2Nyb2xsVG9wLFxuICBzZXRTY3JvbGxMZWZ0XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzY3JvbGxNaXhpbnM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJFU0laRV9FVkVOVF9UWVBFIH0gZnJvbSBcIi4uL2V2ZW50VHlwZXNcIjtcblxuZnVuY3Rpb24gb25SZXNpemUocmVzaXplSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uRXZlbnQoUkVTSVpFX0VWRU5UX1RZUEUsIHJlc2l6ZUhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9mZlJlc2l6ZShyZXNpemVIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmRXZlbnQoUkVTSVpFX0VWRU5UX1RZUEUsIHJlc2l6ZUhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmNvbnN0IHJlc2l6ZU1peGlucyA9IHtcbiAgb25SZXNpemUsXG4gIG9mZlJlc2l6ZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVzaXplTWl4aW5zO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBGVUxMU0NSRUVOQ0hBTkdFX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi4vZXZlbnRUeXBlc1wiO1xuXG5mdW5jdGlvbiBvbkZ1bGxTY3JlZW5DaGFuZ2UoZnVsbFNjcmVlbkNoYW5nZUhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vbkV2ZW50KEZVTExTQ1JFRU5DSEFOR0VfRVZFTlRfVFlQRSwgZnVsbFNjcmVlbkNoYW5nZUhhbmRsZXIsIGVsZW1lbnQpOyB9ICAvLy9cblxuZnVuY3Rpb24gb2ZmRnVsbFNjcmVlbkNoYW5nZShmdWxsU2NyZWVuQ2hhbmdlSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZkV2ZW50KEZVTExTQ1JFRU5DSEFOR0VfRVZFTlRfVFlQRSwgZnVsbFNjcmVlbkNoYW5nZUhhbmRsZXIsIGVsZW1lbnQpOyB9ICAvLy9cblxuZnVuY3Rpb24gcmVxdWVzdEZ1bGxTY3JlZW4oZXJyb3JIYW5kbGVyKSB7XG4gIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcblxuICBkb21FbGVtZW50LnJlcXVlc3RGdWxsc2NyZWVuKClcbiAgICAuY2F0Y2goZXJyb3JIYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gZXhpdEZ1bGxTY3JlZW4oKSB7XG4gIGRvY3VtZW50LmV4aXRGdWxsc2NyZWVuKCk7XG59XG5cbmZ1bmN0aW9uIGlzRnVsbFNjcmVlbigpIHtcbiAgY29uc3QgeyBmdWxsc2NyZWVuRWxlbWVudCB9ID0gZG9jdW1lbnQsXG4gICAgICAgIGZ1bGxTY3JlZW4gPSAoZnVsbHNjcmVlbkVsZW1lbnQgIT09IG51bGwpO1xuXG4gIHJldHVybiBmdWxsU2NyZWVuO1xufVxuXG5jb25zdCBmdWxsc2NyZWVuTWl4aW5zID0ge1xuICBvbkZ1bGxTY3JlZW5DaGFuZ2UsXG4gIG9mZkZ1bGxTY3JlZW5DaGFuZ2UsXG4gIHJlcXVlc3RGdWxsU2NyZWVuLFxuICBleGl0RnVsbFNjcmVlbixcbiAgaXNGdWxsU2NyZWVuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdWxsc2NyZWVuTWl4aW5zO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZm9yRWFjaChhcnJheSwgb3BlcmF0aW9uLCBkb25lLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgIC8vL1xuXG4gIGxldCBjb3VudCA9IC0xO1xuXG4gIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgY291bnQrKztcblxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gbGVuZ3RoKTtcblxuICAgIGlmICh0ZXJtaW5hdGUpIHtcbiAgICAgIGRvbmUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xuICAgICAgICAgICAgZWxlbWVudCA9IGFycmF5W2luZGV4XTtcblxuICAgICAgb3BlcmF0aW9uKGVsZW1lbnQsIG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcbiAgICB9XG4gIH1cblxuICBuZXh0KCk7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFNQQUNFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZm9yRWFjaCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXN5bmNcIjtcblxuZnVuY3Rpb24gb25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGVzLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50ID0gdGhpcykge1xuICBjdXN0b21FdmVudFR5cGVzID0gY3VzdG9tRXZlbnRUeXBlcy5zcGxpdChTUEFDRSk7IC8vL1xuXG4gIGN1c3RvbUV2ZW50VHlwZXMuZm9yRWFjaCgoY3VzdG9tRXZlbnRUeXBlKSA9PiB7XG4gICAgdGhpcy5hZGRDdXN0b21FdmVudExpc3RlbmVyKGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBvZmZDdXN0b21FdmVudChjdXN0b21FdmVudFR5cGVzLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50ID0gdGhpcykge1xuICBjdXN0b21FdmVudFR5cGVzID0gY3VzdG9tRXZlbnRUeXBlcy5zcGxpdChTUEFDRSk7IC8vL1xuXG4gIGN1c3RvbUV2ZW50VHlwZXMuZm9yRWFjaCgoY3VzdG9tRXZlbnRUeXBlKSA9PiB7XG4gICAgdGhpcy5yZW1vdmVDdXN0b21FdmVudExpc3RlbmVyKGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjYWxsQ3VzdG9tSGFuZGxlcnMoY3VzdG9tRXZlbnRUeXBlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmZpbmRDdXN0b21FdmVudExpc3RlbmVycyhjdXN0b21FdmVudFR5cGUpO1xuXG4gIGN1c3RvbUV2ZW50TGlzdGVuZXJzLmZvckVhY2goKGN1c3RvbUV2ZW50TGlzdGVuZXIpID0+IHtcbiAgICBjb25zdCB7IGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQ6IGN1c3RvbUhhbmRsZXJFbGVtZW50IH0gPSBjdXN0b21FdmVudExpc3RlbmVyOyAvLy9cblxuICAgIGN1c3RvbUhhbmRsZXIuY2FsbChjdXN0b21IYW5kbGVyRWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNhbGxDdXN0b21IYW5kbGVyc0FzeW5jKGN1c3RvbUV2ZW50VHlwZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50TGlzdGVuZXJzID0gdGhpcy5maW5kQ3VzdG9tRXZlbnRMaXN0ZW5lcnMoY3VzdG9tRXZlbnRUeXBlKSxcbiAgICAgICAgZG9uZSA9IHJlbWFpbmluZ0FyZ3VtZW50cy5wb3AoKTsgIC8vL1xuXG4gIGZvckVhY2goY3VzdG9tRXZlbnRMaXN0ZW5lcnMsIChjdXN0b21FdmVudExpc3RlbmVyLCBuZXh0KSA9PiB7XG4gICAgY29uc3QgeyBjdXN0b21IYW5kbGVyLCBlbGVtZW50OiBjdXN0b21IYW5kbGVyRWxlbWVudCB9ID0gY3VzdG9tRXZlbnRMaXN0ZW5lcixcbiAgICAgICAgICBkb25lID0gbmV4dDsgIC8vL1xuXG4gICAgY3VzdG9tSGFuZGxlci5jYWxsKGN1c3RvbUhhbmRsZXJFbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMsIGRvbmUpO1xuICB9LCBkb25lKTtcbn1cblxuZnVuY3Rpb24gYWRkQ3VzdG9tRXZlbnRMaXN0ZW5lcihjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRMaXN0ZW5lciA9IHRoaXMuY3JlYXRlQ3VzdG9tRXZlbnRMaXN0ZW5lcihjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xuXG4gIGlmICghdGhpcy5jdXN0b21FdmVudExpc3RlbmVycykge1xuICAgIHRoaXMuY3VzdG9tRXZlbnRMaXN0ZW5lcnMgPSBbXTtcbiAgfVxuXG4gIHRoaXMuY3VzdG9tRXZlbnRMaXN0ZW5lcnMucHVzaChjdXN0b21FdmVudExpc3RlbmVyKTtcblxuICByZXR1cm4gY3VzdG9tRXZlbnRMaXN0ZW5lcjtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ3VzdG9tRXZlbnRMaXN0ZW5lcihjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRMaXN0ZW5lciA9IHRoaXMuZmluZEN1c3RvbUV2ZW50TGlzdGVuZXIoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KSxcbiAgICAgICAgaW5kZXggPSB0aGlzLmN1c3RvbUV2ZW50TGlzdGVuZXJzLmluZGV4T2YoY3VzdG9tRXZlbnRMaXN0ZW5lciksXG4gICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gIHRoaXMuY3VzdG9tRXZlbnRMaXN0ZW5lcnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG5cbiAgaWYgKHRoaXMuY3VzdG9tRXZlbnRMaXN0ZW5lcnMubGVuZ3RoID09PSAwKSB7XG4gICAgZGVsZXRlIHRoaXMuY3VzdG9tRXZlbnRMaXN0ZW5lcnM7XG4gIH1cblxuICByZXR1cm4gY3VzdG9tRXZlbnRMaXN0ZW5lcjtcbn1cblxuZnVuY3Rpb24gZmluZEN1c3RvbUV2ZW50TGlzdGVuZXIoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50TGlzdGVuZXIgPSB0aGlzLmN1c3RvbUV2ZW50TGlzdGVuZXJzLmZpbmQoKGN1c3RvbUV2ZW50TGlzdGVuZXIpID0+IHtcbiAgICBpZiAoKGN1c3RvbUV2ZW50TGlzdGVuZXIuZWxlbWVudCA9PT0gZWxlbWVudCkgJiYgKGN1c3RvbUV2ZW50TGlzdGVuZXIuY3VzdG9tSGFuZGxlciA9PT0gY3VzdG9tSGFuZGxlcikgJiYgKGN1c3RvbUV2ZW50TGlzdGVuZXIuY3VzdG9tRXZlbnRUeXBlID09PSBjdXN0b21FdmVudFR5cGUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBjdXN0b21FdmVudExpc3RlbmVyO1xufVxuXG5mdW5jdGlvbiBmaW5kQ3VzdG9tRXZlbnRMaXN0ZW5lcnMoY3VzdG9tRXZlbnRUeXBlKSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50TGlzdGVuZXJzID0gW107XG5cbiAgaWYgKHRoaXMuY3VzdG9tRXZlbnRMaXN0ZW5lcnMpIHtcbiAgICB0aGlzLmN1c3RvbUV2ZW50TGlzdGVuZXJzLmZvckVhY2goKGN1c3RvbUV2ZW50TGlzdGVuZXIpID0+IHtcbiAgICAgIGNvbnN0IGZvdW5kID0gKGN1c3RvbUV2ZW50TGlzdGVuZXIuY3VzdG9tRXZlbnRUeXBlID09PSBjdXN0b21FdmVudFR5cGUpO1xuXG4gICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgY3VzdG9tRXZlbnRMaXN0ZW5lcnMucHVzaChjdXN0b21FdmVudExpc3RlbmVyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBjdXN0b21FdmVudExpc3RlbmVycztcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ3VzdG9tRXZlbnRMaXN0ZW5lcihjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgbGV0IGN1c3RvbUV2ZW50TGlzdGVuZXI7XG5cbiAgY3VzdG9tRXZlbnRMaXN0ZW5lciA9ICgpID0+IHt9OyAvLy9cblxuICBPYmplY3QuYXNzaWduKGN1c3RvbUV2ZW50TGlzdGVuZXIsIHtcbiAgICBlbGVtZW50LFxuICAgIGN1c3RvbUhhbmRsZXIsXG4gICAgY3VzdG9tRXZlbnRUeXBlXG4gIH0pO1xuXG4gIHJldHVybiBjdXN0b21FdmVudExpc3RlbmVyO1xufVxuXG5jb25zdCBjdXN0b21FdmVudE1peGlucyA9IHtcbiAgb25DdXN0b21FdmVudCxcbiAgb2ZmQ3VzdG9tRXZlbnQsXG4gIGNhbGxDdXN0b21IYW5kbGVycyxcbiAgY2FsbEN1c3RvbUhhbmRsZXJzQXN5bmMsXG4gIGFkZEN1c3RvbUV2ZW50TGlzdGVuZXIsXG4gIHJlbW92ZUN1c3RvbUV2ZW50TGlzdGVuZXIsXG4gIGZpbmRDdXN0b21FdmVudExpc3RlbmVyLFxuICBmaW5kQ3VzdG9tRXZlbnRMaXN0ZW5lcnMsXG4gIGNyZWF0ZUN1c3RvbUV2ZW50TGlzdGVuZXJcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGN1c3RvbUV2ZW50TWl4aW5zO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgT2Zmc2V0IGZyb20gXCIuL29mZnNldFwiO1xuaW1wb3J0IEJvdW5kcyBmcm9tIFwiLi9ib3VuZHNcIjtcbmltcG9ydCBqc3hNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2pzeFwiO1xuaW1wb3J0IGtleU1peGlucyBmcm9tIFwiLi9taXhpbnMva2V5XCI7XG5pbXBvcnQgc3RhdGVNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3N0YXRlXCI7XG5pbXBvcnQgZXZlbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2V2ZW50XCI7XG5pbXBvcnQgbW91c2VNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL21vdXNlXCI7XG5pbXBvcnQgY2xpY2tNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2NsaWNrXCI7XG5pbXBvcnQgdG91Y2hNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3RvdWNoXCI7XG5pbXBvcnQgc2Nyb2xsTWl4aW5zIGZyb20gXCIuL21peGlucy9zY3JvbGxcIjtcbmltcG9ydCByZXNpemVNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3Jlc2l6ZVwiO1xuaW1wb3J0IGVsZW1lbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2VsZW1lbnRcIjtcbmltcG9ydCBmdWxsU2NyZWVuTWl4aW5zIGZyb20gXCIuL21peGlucy9mdWxsU2NyZWVuXCI7XG5pbXBvcnQgY3VzdG9tRXZlbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2N1c3RvbUV2ZW50XCI7XG5cbmltcG9ydCB7IGF1Z21lbnQgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGNvbWJpbmUgfSBmcm9tIFwiLi91dGlsaXRpZXMvb2JqZWN0XCI7XG5pbXBvcnQgeyBpc1NWR1RhZ05hbWUgfSBmcm9tIFwiLi91dGlsaXRpZXMvbmFtZVwiO1xuaW1wb3J0IHsgY29uc3RydWN0RWxlbWVudCwgZGVzdHJveUVsZW1lbnQsIG1vdW50RWxlbWVudCwgdW5tb3VudEVsZW1lbnQgfSBmcm9tIFwiLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgTk9ORSxcbiAgICAgICAgIEJMT0NLLFxuICAgICAgICAgV0lEVEgsXG4gICAgICAgICBTVFJJTkcsXG4gICAgICAgICBIRUlHSFQsXG4gICAgICAgICBESVNQTEFZLFxuICAgICAgICAgRElTQUJMRUQsXG4gICAgICAgICBFTVBUWV9TVFJJTkcsXG4gICAgICAgICBTVkdfTkFNRVNQQUNFX1VSSSxcbiAgICAgICAgIERFRkFVTFRfUFJPUEVSVElFUyxcbiAgICAgICAgIElHTk9SRURfUFJPUEVSVElFUyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IpIHtcbiAgICBpZiAoc2VsZWN0b3IgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPXRoaXMsICAvLy9cbiAgICAgICAgICAgIGRvbUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcblxuICAgICAgY29uc3RydWN0RWxlbWVudChlbGVtZW50LCBkb21FbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRPZmZzZXQoKSB7XG4gICAgY29uc3Qgb2Zmc2V0ID0gT2Zmc2V0LmZyb21ET01FbGVtZW50KHRoaXMuZG9tRWxlbWVudCk7XG5cbiAgICByZXR1cm4gb2Zmc2V0O1xuICB9XG5cbiAgZ2V0Qm91bmRzKCkge1xuICAgIGNvbnN0IGJvdW5kcyA9IEJvdW5kcy5mcm9tRE9NRWxlbWVudCh0aGlzLmRvbUVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIGJvdW5kcztcbiAgfVxuXG4gIGdldFdpZHRoKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50Lm9mZnNldFdpZHRoOyB9ICAvLy9cblxuICBnZXRIZWlnaHQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0SGVpZ2h0OyB9ICAvLy9cblxuICBnZXRJbm5lcldpZHRoKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsaWVudFdpZHRoOyB9IC8vL1xuXG4gIGdldElubmVySGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsaWVudEhlaWdodDsgfSAvLy9cblxuICBzZXRXaWR0aCh3aWR0aCkge1xuICAgIHdpZHRoID0gYCR7d2lkdGh9cHhgOyAvLy9cblxuICAgIHRoaXMuc3R5bGUoV0lEVEgsIHdpZHRoKTtcbiAgfVxuXG4gIHNldEhlaWdodChoZWlnaHQpIHtcbiAgICBoZWlnaHQgPSBgJHtoZWlnaHR9cHhgOyAvLy9cblxuICAgIHRoaXMuc3R5bGUoSEVJR0hULCBoZWlnaHQpO1xuICB9XG5cbiAgaGFzQXR0cmlidXRlKG5hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5oYXNBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBnZXRBdHRyaWJ1dGUobmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmdldEF0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIHNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkgeyB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTsgfVxuXG4gIGNsZWFyQXR0cmlidXRlKG5hbWUpIHsgdGhpcy5kb21FbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIGFkZEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkgeyB0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7IH1cblxuICByZW1vdmVBdHRyaWJ1dGUobmFtZSkgeyB0aGlzLmNsZWFyQXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgaGFzQ2xhc3MoY2xhc3NOYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7IH1cblxuICBzZXRDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTsgfVxuXG4gIGFkZENsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpOyB9XG5cbiAgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7IH1cblxuICB0b2dnbGVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lKTsgfVxuXG4gIHJlbW92ZUFsbENsYXNzZXMoKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc05hbWUgPSBFTVBUWV9TVFJJTkc7IH1cblxuICBhZGRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQuYWRkKHRoaXMpOyB9XG5cbiAgYXBwZW5kVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LmFwcGVuZCh0aGlzKTsgfVxuXG4gIHByZXBlbmRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQucHJlcGVuZCh0aGlzKTsgfVxuXG4gIHJlbW92ZUZyb20ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LnJlbW92ZSh0aGlzKTsgfVxuXG4gIGluc2VydChlbGVtZW50KSB7IHRoaXMuYXBwZW5kKGVsZW1lbnQpOyB9XG5cbiAgYWRkKGVsZW1lbnQpIHsgdGhpcy5hcHBlbmQoZWxlbWVudCk7IH1cblxuICByZW1vdmUoZWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBlbGVtZW50LnJlbW92ZSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZSgpO1xuICB9XG5cbiAgcHJlcGVuZChlbGVtZW50KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudCxcbiAgICAgICAgICByZWZlcmVuY2VET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50LmZpcnN0Q2hpbGQ7ICAvLy9cblxuICAgIHRoaXMuZG9tRWxlbWVudC5pbnNlcnRCZWZvcmUoZG9tRWxlbWVudCwgcmVmZXJlbmNlRE9NRWxlbWVudCk7XG4gIH1cblxuICBhcHBlbmQoZWxlbWVudCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQsXG4gICAgICAgICAgcmVmZXJlbmNlRE9NRWxlbWVudCA9IG51bGw7IC8vL1xuXG4gICAgdGhpcy5kb21FbGVtZW50Lmluc2VydEJlZm9yZShkb21FbGVtZW50LCByZWZlcmVuY2VET01FbGVtZW50KTtcbiAgfVxuXG4gIGluc2VydEJlZm9yZShzaWJsaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50LnBhcmVudE5vZGUsIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZURPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50OyAgLy8vXG5cbiAgICBwYXJlbnRET01Ob2RlLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHJlZmVyZW5jZURPTUVsZW1lbnQpO1xuICB9XG5cbiAgaW5zZXJ0QWZ0ZXIoc2libGluZ0VsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01Ob2RlID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudC5wYXJlbnROb2RlLCAvLy9cbiAgICAgICAgICByZWZlcmVuY2VET01FbGVtZW50ID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudC5uZXh0U2libGluZzsgIC8vL1xuXG4gICAgcGFyZW50RE9NTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCByZWZlcmVuY2VET01FbGVtZW50KTtcbiAgfVxuXG4gIG1vdW50KGVsZW1lbnQpIHtcbiAgICB0aGlzLmFkZChlbGVtZW50KTtcblxuICAgIG1vdW50RWxlbWVudChlbGVtZW50KTtcbiAgfVxuXG4gIHVubW91bnQoZWxlbWVudCkge1xuICAgIHVubW91bnRFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgdGhpcy5yZW1vdmUoZWxlbWVudCk7XG4gIH1cblxuICBtb3VudEJlZm9yZShzaWJsaW5nRWxlbWVudCkge1xuICAgIHRoaXMuaW5zZXJ0QmVmb3JlKHNpYmxpbmdFbGVtZW50KTtcblxuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgIG1vdW50RWxlbWVudChlbGVtZW50KTtcbiAgfVxuXG4gIG1vdW50QWZ0ZXIoc2libGluZ0VsZW1lbnQpIHtcbiAgICB0aGlzLmluc2VydEFmdGVyKHNpYmxpbmdFbGVtZW50KTtcblxuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgIG1vdW50RWxlbWVudChlbGVtZW50KTtcbiAgfVxuXG4gIHNob3coZGlzcGxheVN0eWxlID0gQkxPQ0spIHsgdGhpcy5kaXNwbGF5KGRpc3BsYXlTdHlsZSk7IH1cblxuICBoaWRlKCkgeyB0aGlzLnN0eWxlKERJU1BMQVksIE5PTkUpOyB9XG5cbiAgZGlzcGxheShkaXNwbGF5KSB7IHRoaXMuc3R5bGUoRElTUExBWSwgZGlzcGxheSk7IH1cblxuICBlbmFibGUoKSB7IHRoaXMuY2xlYXJBdHRyaWJ1dGUoRElTQUJMRUQpOyB9XG5cbiAgZGlzYWJsZSgpIHsgdGhpcy5zZXRBdHRyaWJ1dGUoRElTQUJMRUQsIERJU0FCTEVEKTsgfVxuXG4gIGlzRW5hYmxlZCgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpLFxuICAgICAgICAgIGVuYWJsZWQgPSAhZGlzYWJsZWQ7XG5cbiAgICByZXR1cm4gZW5hYmxlZDtcbiAgfVxuXG4gIGlzRGlzYWJsZWQoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmhhc0F0dHJpYnV0ZShESVNBQkxFRCk7XG5cbiAgICByZXR1cm4gZGlzYWJsZWQ7XG4gIH1cbiAgXG4gIGlzRGlzcGxheWVkKCkge1xuICAgIGNvbnN0IGRpc3BsYXkgPSB0aGlzLmNzcyhESVNQTEFZKSxcbiAgICAgICAgICBkaXNwbGF5ZWQgPSAoZGlzcGxheSAhPT0gTk9ORSk7XG4gICAgXG4gICAgcmV0dXJuIGRpc3BsYXllZDtcbiAgfVxuXG4gIGlzU2hvd2luZygpIHtcbiAgICBjb25zdCBkaXNwbGF5ZWQgPSB0aGlzLmlzRGlzcGxheWVkKCksXG4gICAgICAgICAgc2hvd2luZyA9IGRpc3BsYXllZDsgIC8vL1xuXG4gICAgcmV0dXJuIHNob3dpbmc7XG4gIH1cblxuICBpc0hpZGRlbigpIHtcbiAgICBjb25zdCBkaXNwbGF5ZWQgPSB0aGlzLmlzRGlzcGxheWVkKCksXG4gICAgICAgICAgaGlkZGVuID0gIWRpc3BsYXllZDtcblxuICAgIHJldHVybiBoaWRkZW47XG4gIH1cblxuICBzdHlsZShuYW1lLCB2YWx1ZSA9IG51bGwpIHtcbiAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5zdHlsZVtuYW1lXSA9IHZhbHVlO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc3R5bGUgPSB0aGlzLmRvbUVsZW1lbnQuc3R5bGVbbmFtZV07XG5cbiAgICByZXR1cm4gc3R5bGU7XG4gIH1cblxuICBodG1sKGh0bWwgPSBudWxsKSB7XG4gICAgaWYgKGh0bWwgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGlubmVySFRNTCA9IGh0bWw7IC8vL1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIVE1MID0gaW5uZXJIVE1MXG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBpbm5lckhUTUwgPSB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIVE1MO1xuXG4gICAgaHRtbCA9IGlubmVySFRNTDsgLy8vXG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGNzcyhjc3MgPSBudWxsKSB7XG4gICAgaWYgKGNzcyA9PT0gbnVsbCkge1xuICAgICAgY3NzID0ge307XG5cbiAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGVzID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmRvbUVsZW1lbnQpOyAvLy9cblxuICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvbXB1dGVkU3R5bGVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gY29tcHV0ZWRTdHlsZXNbaW5kZXhdLFxuICAgICAgICAgICAgICBuYW1lID0gY29tcHV0ZWRTdHlsZSwgIC8vL1xuICAgICAgICAgICAgICB2YWx1ZSA9IGNvbXB1dGVkU3R5bGVzLmdldFByb3BlcnR5VmFsdWUobmFtZSk7IC8vL1xuXG4gICAgICAgIGNzc1tuYW1lXSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNzcyA9PT0gU1RSSU5HKSB7XG4gICAgICBsZXQgbmFtZSA9IGNzczsgLy8vXG5cbiAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGVzID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmRvbUVsZW1lbnQpLCAvLy9cbiAgICAgICAgICAgIHZhbHVlID0gY29tcHV0ZWRTdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTsgLy8vXG5cbiAgICAgIGNzcyA9IHZhbHVlOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXMoY3NzKTsgLy8vXG5cbiAgICAgIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBjc3NbbmFtZV07XG5cbiAgICAgICAgdGhpcy5zdHlsZShuYW1lLCB2YWx1ZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3NzO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICBkZXN0cm95RWxlbWVudChlbGVtZW50KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHsgdGFnTmFtZSB9ID0gQ2xhc3MsXG4gICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnRGcm9tVGFnTmFtZShDbGFzcywgdGFnTmFtZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSxcbiAgICAgICAgICBkZWZhdWx0UHJvcGVydGllcyA9IGRlZmF1bHRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzKSxcbiAgICAgICAgICBpZ25vcmVkUHJvcGVydGllcyA9IGlnbm9yZWRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzKTtcblxuICAgIGVsZW1lbnQuYXBwbHlQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGRlZmF1bHRQcm9wZXJ0aWVzLCBpZ25vcmVkUHJvcGVydGllcyk7XG5cbiAgICBlbGVtZW50LmluaXRpYWxpc2UgJiYgZWxlbWVudC5pbml0aWFsaXNlKCk7IC8vL1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVRhZ05hbWUodGFnTmFtZSwgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgQ2xhc3MgPSBFbGVtZW50LCAgLy8vXG4gICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnRGcm9tVGFnTmFtZShDbGFzcywgdGFnTmFtZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSxcbiAgICAgICAgICBkZWZhdWx0UHJvcGVydGllcyA9IHt9LCAvLy9cbiAgICAgICAgICBpZ25vcmVkUHJvcGVydGllcyA9IFtdOyAvLy9cblxuICAgIGVsZW1lbnQuYXBwbHlQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGRlZmF1bHRQcm9wZXJ0aWVzLCBpZ25vcmVkUHJvcGVydGllcyk7XG5cbiAgICBlbGVtZW50LmluaXRpYWxpc2UgJiYgZWxlbWVudC5pbml0aWFsaXNlKCk7IC8vL1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwganN4TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGtleU1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBtb3VzZU1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBjbGlja01peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBzdGF0ZU1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBldmVudE1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCB0b3VjaE1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBzY3JvbGxNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgcmVzaXplTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGVsZW1lbnRNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgZnVsbFNjcmVlbk1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBjdXN0b21FdmVudE1peGlucyk7XG5cbmZ1bmN0aW9uIGVsZW1lbnRGcm9tVGFnTmFtZShDbGFzcywgdGFnTmFtZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gIGNvbnN0IHNlbGVjdG9yID0gbnVsbCxcbiAgICAgICAgZWxlbWVudCA9IG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuY2FsbChDbGFzcywgbnVsbCwgc2VsZWN0b3IsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykpLFxuICAgICAgICBkb21FbGVtZW50ID0gaXNTVkdUYWdOYW1lKHRhZ05hbWUpID9cbiAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFNWR19OQU1FU1BBQ0VfVVJJLCB0YWdOYW1lKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcblxuICBjb25zdHJ1Y3RFbGVtZW50KGVsZW1lbnQsIGRvbUVsZW1lbnQpO1xuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0UHJvcGVydGllc0Zyb21DbGFzcyhDbGFzcywgZGVmYXVsdFByb3BlcnRpZXMgPSB7fSkge1xuICBpZiAoQ2xhc3MuaGFzT3duUHJvcGVydHkoREVGQVVMVF9QUk9QRVJUSUVTKSkge1xuICAgIGRlZmF1bHRQcm9wZXJ0aWVzID0gY29tYmluZShkZWZhdWx0UHJvcGVydGllcywgQ2xhc3NbREVGQVVMVF9QUk9QRVJUSUVTXSk7XG4gIH1cblxuICBjb25zdCBzdXBlckNsYXNzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKENsYXNzKTsgIC8vL1xuXG4gIGlmIChzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgZGVmYXVsdFByb3BlcnRpZXMgPSBkZWZhdWx0UHJvcGVydGllc0Zyb21DbGFzcyhzdXBlckNsYXNzLCBkZWZhdWx0UHJvcGVydGllcyk7XG4gIH1cblxuICByZXR1cm4gZGVmYXVsdFByb3BlcnRpZXM7XG59XG5cbmZ1bmN0aW9uIGlnbm9yZWRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzLCBpZ25vcmVkUHJvcGVydGllcyA9IFtdKSB7XG4gIGlmIChDbGFzcy5oYXNPd25Qcm9wZXJ0eShJR05PUkVEX1BST1BFUlRJRVMpKSB7XG4gICAgaWdub3JlZFByb3BlcnRpZXMgPSBhdWdtZW50KGlnbm9yZWRQcm9wZXJ0aWVzLCBDbGFzc1tJR05PUkVEX1BST1BFUlRJRVNdLCAoaWdub3JlZFByb3BlcnR5KSA9PiB7XG4gICAgICBpZiAoIWlnbm9yZWRQcm9wZXJ0aWVzLmluY2x1ZGVzKGlnbm9yZWRQcm9wZXJ0eSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBzdXBlckNsYXNzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKENsYXNzKTtcblxuICBpZiAoc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIGlnbm9yZWRQcm9wZXJ0aWVzID0gaWdub3JlZFByb3BlcnRpZXNGcm9tQ2xhc3Moc3VwZXJDbGFzcywgaWdub3JlZFByb3BlcnRpZXMpO1xuICB9XG5cbiAgcmV0dXJuIGlnbm9yZWRQcm9wZXJ0aWVzO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi9lbGVtZW50XCI7XG5cbmltcG9ydCB7IGZsYXR0ZW4gfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IFNUUklORywgRlVOQ1RJT04gfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHJlbW92ZUZhbHNleUVsZW1lbnRzLCByZXBsYWNlU3RyaW5nc1dpdGhUZXh0RWxlbWVudHMgfSBmcm9tIFwiLi91dGlsaXRpZXMvZWxlbWVudHNcIjtcblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudChmaXJzdEFyZ3VtZW50LCBwcm9wZXJ0aWVzLCAuLi5jaGlsZEVsZW1lbnRzKSB7XG4gIGxldCBlbGVtZW50ID0gbnVsbDtcblxuICBpZiAoZmlyc3RBcmd1bWVudCkge1xuICAgIGNoaWxkRWxlbWVudHMgPSBzYW5pdGlzZUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cyk7XG5cbiAgICBwcm9wZXJ0aWVzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjaGlsZEVsZW1lbnRzXG4gICAgfSwgcHJvcGVydGllcyk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAoRWxlbWVudC5pc1Byb3RvdHlwZU9mKGZpcnN0QXJndW1lbnQpKSB7XG4gICAgICBjb25zdCBDbGFzcyA9IGZpcnN0QXJndW1lbnQ7ICAvLy9cblxuICAgICAgZWxlbWVudCA9IENsYXNzLmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gU1RSSU5HKSB7XG4gICAgICBjb25zdCB0YWdOYW1lID0gZmlyc3RBcmd1bWVudDsgLy8vXG5cbiAgICAgIGVsZW1lbnQgPSBFbGVtZW50LmZyb21UYWdOYW1lKHRhZ05hbWUsIHByb3BlcnRpZXMpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09IEZVTkNUSU9OKSB7XG4gICAgICBjb25zdCBlbGVtZW50RnVuY3Rpb24gPSBmaXJzdEFyZ3VtZW50OyAgLy8vXG5cbiAgICAgIGVsZW1lbnQgPSBlbGVtZW50RnVuY3Rpb24ocHJvcGVydGllcyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmNvbnN0IFJlYWN0ID0ge1xuICBjcmVhdGVFbGVtZW50XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdDtcblxuZnVuY3Rpb24gc2FuaXRpc2VDaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpIHtcbiAgY2hpbGRFbGVtZW50cyA9IGZsYXR0ZW4oY2hpbGRFbGVtZW50cyk7IC8vL1xuXG4gIGNoaWxkRWxlbWVudHMgPSByZW1vdmVGYWxzZXlFbGVtZW50cyhjaGlsZEVsZW1lbnRzKTsgIC8vL1xuXG4gIGNoaWxkRWxlbWVudHMgPSByZXBsYWNlU3RyaW5nc1dpdGhUZXh0RWxlbWVudHMoY2hpbGRFbGVtZW50cyk7ICAvLy9cblxuICByZXR1cm4gY2hpbGRFbGVtZW50cztcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IExFRlRfTU9VU0VfQlVUVE9OID0gMDtcbmV4cG9ydCBjb25zdCBSSUdIVF9NT1VTRV9CVVRUT04gPSAyO1xuZXhwb3J0IGNvbnN0IE1JRERMRV9NT1VTRV9CVVRUT04gPSAxO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIExFRlRfTU9VU0VfQlVUVE9OLFxuICBSSUdIVF9NT1VTRV9CVVRUT04sXG4gIE1JRERMRV9NT1VTRV9CVVRUT05cbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IElOUFVUX0VWRU5UX1RZUEUsIENIQU5HRV9FVkVOVF9UWVBFIH0gZnJvbSBcIi4uL2V2ZW50VHlwZXNcIjtcblxuZnVuY3Rpb24gb25JbnB1dChpbnB1dEhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vbkV2ZW50KElOUFVUX0VWRU5UX1RZUEUsIGlucHV0SGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb2ZmSW5wdXQoaW5wdXRIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmRXZlbnQoSU5QVVRfRVZFTlRfVFlQRSwgaW5wdXRIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvbkNoYW5nZShjaGFuZ2VIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub25FdmVudChDSEFOR0VfRVZFTlRfVFlQRSwgY2hhbmdlSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb2ZmQ2hhbmdlKGNoYW5nZUhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vZmZFdmVudChDSEFOR0VfRVZFTlRfVFlQRSwgY2hhbmdlSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gZ2V0VmFsdWUoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQudmFsdWU7IH1cblxuZnVuY3Rpb24gc2V0VmFsdWUodmFsdWUpIHsgdGhpcy5kb21FbGVtZW50LnZhbHVlID0gdmFsdWU7IH1cblxuZnVuY3Rpb24gaXNSZWFkT25seSgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5yZWFkT25seTsgfVxuXG5mdW5jdGlvbiBzZXRSZWFkT25seShyZWFkT25seSkgeyB0aGlzLmRvbUVsZW1lbnQucmVhZE9ubHkgPSByZWFkT25seTsgfVxuXG5jb25zdCBpbnB1dE1peGlucyA9IHtcbiAgb25JbnB1dCxcbiAgb2ZmSW5wdXQsXG4gIG9uQ2hhbmdlLFxuICBvZmZDaGFuZ2UsXG4gIGdldFZhbHVlLFxuICBzZXRWYWx1ZSxcbiAgaXNSZWFkT25seSxcbiAgc2V0UmVhZE9ubHlcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGlucHV0TWl4aW5zO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBCTFVSX0VWRU5UX1RZUEUsIEZPQ1VTX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi4vZXZlbnRUeXBlc1wiO1xuXG5mdW5jdGlvbiBvbkJsdXIoYmx1ckhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vbkV2ZW50KEJMVVJfRVZFTlRfVFlQRSwgYmx1ckhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9mZkJsdXIoYmx1ckhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vZmZFdmVudChCTFVSX0VWRU5UX1RZUEUsIGJsdXJIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvbkZvY3VzKGZvY3VzSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uRXZlbnQoRk9DVVNfRVZFTlRfVFlQRSwgZm9jdXNIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvZmZGb2N1cyhmb2N1c0hhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vZmZFdmVudChGT0NVU19FVkVOVF9UWVBFLCBmb2N1c0hhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIGJsdXIoKSB7IHRoaXMuZG9tRWxlbWVudC5ibHVyKCk7IH1cblxuZnVuY3Rpb24gZm9jdXMoKSB7IHRoaXMuZG9tRWxlbWVudC5mb2N1cygpOyB9XG5cbmZ1bmN0aW9uIGhhc0ZvY3VzKCkge1xuICBjb25zdCBmb2N1cyA9IChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSB0aGlzLmRvbUVsZW1lbnQpOyAgLy8vXG5cbiAgcmV0dXJuIGZvY3VzO1xufVxuXG5jb25zdCBmb2N1c01peGlucyA9IHtcbiAgb25CbHVyLFxuICBvZmZCbHVyLFxuICBvbkZvY3VzLFxuICBvZmZGb2N1cyxcbiAgYmx1cixcbiAgZm9jdXMsXG4gIGhhc0ZvY3VzXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb2N1c01peGlucztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ1VUX0VWRU5UX1RZUEUsIENPUFlfRVZFTlRfVFlQRSwgUEFTVEVfRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9ldmVudFR5cGVzXCI7XG5cbmZ1bmN0aW9uIG9uQ3V0KGN1dEhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vbkV2ZW50KENVVF9FVkVOVF9UWVBFLCBjdXRIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvZmZDdXQoY3V0SGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZkV2ZW50KENVVF9FVkVOVF9UWVBFLCBjdXRIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvbkNvcHkoY29weUhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vbkV2ZW50KENPUFlfRVZFTlRfVFlQRSwgY29weUhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9mZkNvcHkoY29weUhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vZmZFdmVudChDT1BZX0VWRU5UX1RZUEUsIGNvcHlIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvblBhc3RlKHBhc3RlSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uRXZlbnQoUEFTVEVfRVZFTlRfVFlQRSwgcGFzdGVIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvZmZQYXN0ZShwYXN0ZUhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vZmZFdmVudChQQVNURV9FVkVOVF9UWVBFLCBwYXN0ZUhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIGdldFNlbGVjdGlvblN0YXJ0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnNlbGVjdGlvblN0YXJ0OyB9XG5cbmZ1bmN0aW9uIGdldFNlbGVjdGlvbkVuZCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5zZWxlY3Rpb25FbmQ7IH1cblxuZnVuY3Rpb24gc2V0U2VsZWN0aW9uU3RhcnQoc2VsZWN0aW9uU3RhcnQpIHsgdGhpcy5kb21FbGVtZW50LnNlbGVjdGlvblN0YXJ0ID0gc2VsZWN0aW9uU3RhcnQ7IH1cblxuZnVuY3Rpb24gc2V0U2VsZWN0aW9uRW5kKHNlbGVjdGlvbkVuZCkgeyB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0aW9uRW5kID0gc2VsZWN0aW9uRW5kOyB9XG5cbmZ1bmN0aW9uIHNlbGVjdCgpIHsgdGhpcy5kb21FbGVtZW50LnNlbGVjdCgpOyB9XG5cbmNvbnN0IHNlbGVjdGlvbk1peGlucyA9IHtcbiAgb25DdXQsXG4gIG9mZkN1dCxcbiAgb25Db3B5LFxuICBvZmZDb3B5LFxuICBvblBhc3RlLFxuICBvZmZQYXN0ZSxcbiAgZ2V0U2VsZWN0aW9uU3RhcnQsXG4gIGdldFNlbGVjdGlvbkVuZCxcbiAgc2V0U2VsZWN0aW9uU3RhcnQsXG4gIHNldFNlbGVjdGlvbkVuZCxcbiAgc2VsZWN0XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzZWxlY3Rpb25NaXhpbnM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBrZXlNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2tleVwiO1xuaW1wb3J0IGV2ZW50TWl4aW5zIGZyb20gXCIuL21peGlucy9ldmVudFwiO1xuaW1wb3J0IG1vdXNlTWl4aW5zIGZyb20gXCIuL21peGlucy9tb3VzZVwiO1xuaW1wb3J0IGNsaWNrTWl4aW5zIGZyb20gXCIuL21peGlucy9jbGlja1wiO1xuXG5pbXBvcnQgeyBVTkRFRklORUQgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IFNFTEVDVElPTkNIQU5HRV9FVkVOVF9UWVBFIH0gZnJvbSBcIi4vZXZlbnRUeXBlc1wiO1xuXG5jbGFzcyBEb2N1bWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvY3VtZW50OyAvLy9cbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldFNlbGVjdGlvbigpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5nZXRTZWxlY3Rpb24oKTsgfVxuXG4gIGNyZWF0ZVJhbmdlKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNyZWF0ZVJhbmdlKCk7IH1cblxuICBjcmVhdGVUZXh0Tm9kZShkYXRhKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY3JlYXRlVGV4dE5vZGUoZGF0YSk7IH1cblxuICBvblNlbGVjdGlvbkNoYW5nZShzZWxlY3Rpb25DaGFuZ2VIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub25FdmVudChTRUxFQ1RJT05DSEFOR0VfRVZFTlRfVFlQRSwgc2VsZWN0aW9uQ2hhbmdlSGFuZGxlciwgZWxlbWVudCk7IH0gLy8vXG5cbiAgb2ZmU2VsZWN0aW9uQ2hhbmdlKHNlbGVjdGlvbkNoYW5nZUhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vZmZFdmVudChTRUxFQ1RJT05DSEFOR0VfRVZFTlRfVFlQRSwgc2VsZWN0aW9uQ2hhbmdlSGFuZGxlciwgZWxlbWVudCk7IH0gLy8vXG5cbiAgY3JlYXRlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgICBsZXQgZXZlbnRMaXN0ZW5lcjtcblxuICAgIGNvbnN0IGhhbmRsZXJFbGVtZW50ID0gZWxlbWVudDsgLy8vXG5cbiAgICBldmVudExpc3RlbmVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnRUeXBlID09PSBTRUxFQ1RJT05DSEFOR0VfRVZFTlRfVFlQRSkge1xuICAgICAgICBjb25zdCB7IGRvbUVsZW1lbnQgfSA9IGhhbmRsZXJFbGVtZW50LFxuICAgICAgICAgICAgICB7IGN1cnJlbnRUYXJnZXQgfSA9IGV2ZW50LFxuICAgICAgICAgICAgICB7IGFjdGl2ZUVsZW1lbnQgfSA9IGN1cnJlbnRUYXJnZXQ7XG5cbiAgICAgICAgaWYgKGRvbUVsZW1lbnQgIT09IGFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXM7IC8vL1xuXG4gICAgICBoYW5kbGVyLmNhbGwoaGFuZGxlckVsZW1lbnQsIGV2ZW50LCBlbGVtZW50KTtcbiAgICB9O1xuXG4gICAgT2JqZWN0LmFzc2lnbihldmVudExpc3RlbmVyLCB7XG4gICAgICBlbGVtZW50LFxuICAgICAgaGFuZGxlcixcbiAgICAgIGV2ZW50VHlwZVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGV2ZW50TGlzdGVuZXI7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihEb2N1bWVudC5wcm90b3R5cGUsIGtleU1peGlucyk7XG5PYmplY3QuYXNzaWduKERvY3VtZW50LnByb3RvdHlwZSwgZXZlbnRNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihEb2N1bWVudC5wcm90b3R5cGUsIG1vdXNlTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRG9jdW1lbnQucHJvdG90eXBlLCBjbGlja01peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0ICh0eXBlb2YgZG9jdW1lbnQgPT09IFVOREVGSU5FRCkgPyB1bmRlZmluZWQgOiBuZXcgRG9jdW1lbnQoKTsgIC8vL1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQga2V5TWl4aW5zIGZyb20gXCIuL21peGlucy9rZXlcIjtcbmltcG9ydCBldmVudE1peGlucyBmcm9tIFwiLi9taXhpbnMvZXZlbnRcIjtcbmltcG9ydCBtb3VzZU1peGlucyBmcm9tIFwiLi9taXhpbnMvbW91c2VcIjtcbmltcG9ydCBjbGlja01peGlucyBmcm9tIFwiLi9taXhpbnMvY2xpY2tcIjtcbmltcG9ydCBmb2N1c01peGlucyBmcm9tIFwiLi9taXhpbnMvZm9jdXNcIjtcblxuaW1wb3J0IHsgVU5ERUZJTkVEIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBSRVNJWkVfRVZFTlRfVFlQRSB9IGZyb20gXCIuL2V2ZW50VHlwZXNcIjtcbmltcG9ydCB7IG9uU2Nyb2xsLCBvZmZTY3JvbGwgfSBmcm9tIFwiLi9taXhpbnMvc2Nyb2xsXCI7XG5cbmNsYXNzIFdpbmRvdyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IHdpbmRvdzsgLy8vXG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBhc3NpZ24oLi4uc291cmNlcykge1xuICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuZG9tRWxlbWVudDsgLy8vXG5cbiAgICBPYmplY3QuYXNzaWduKHRhcmdldCwgLi4uc291cmNlcyk7XG4gIH1cblxuICByZWxvYWQoKSB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpOyAvLy9cbiAgfVxuXG4gIGdldFdpZHRoKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmlubmVyV2lkdGg7IH0gLy8vXG4gIFxuICBnZXRIZWlnaHQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIZWlnaHQ7IH0gLy8vXG5cbiAgZ2V0U2Nyb2xsVG9wKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnBhZ2VZT2Zmc2V0OyB9ICAvLy9cblxuICBnZXRTY3JvbGxMZWZ0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnBhZ2VYT2Zmc2V0OyB9IC8vL1xuXG4gIGdldFNlbGVjdGlvbigpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5nZXRTZWxlY3Rpb24oKTsgfVxuXG4gIGdldFNjcmVlbldpZHRoKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnNjcmVlbi53aWR0aDsgfVxuXG4gIGdldFNjcmVlbkhlaWdodCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5zY3JlZW4uaGVpZ2h0OyB9XG5cbiAgc2Nyb2xsVG8oc2Nyb2xsVG9wLCBzY3JvbGxMZWZ0KSB7IHRoaXMuZG9tRWxlbWVudC5zY3JvbGxUbyhzY3JvbGxMZWZ0LCBzY3JvbGxUb3ApOyB9XG5cbiAgb25SZXNpemUocmVzaXplSGFuZGxlciwgZWxlbWVudCkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IFJFU0laRV9FVkVOVF9UWVBFLFxuICAgICAgICAgIGV2ZW50TGlzdGVuZXIgPSB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCByZXNpemVIYW5kbGVyLCBlbGVtZW50KTtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgZXZlbnRMaXN0ZW5lcik7XG4gIH1cblxuICBvZmZSZXNpemUocmVzaXplSGFuZGxlciwgZWxlbWVudCkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IFJFU0laRV9FVkVOVF9UWVBFLFxuICAgICAgICAgIGV2ZW50TGlzdGVuZXIgPSB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCByZXNpemVIYW5kbGVyLCBlbGVtZW50KTtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgZXZlbnRMaXN0ZW5lcik7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihXaW5kb3cucHJvdG90eXBlLCBrZXlNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihXaW5kb3cucHJvdG90eXBlLCBldmVudE1peGlucyk7XG5PYmplY3QuYXNzaWduKFdpbmRvdy5wcm90b3R5cGUsIG1vdXNlTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwgY2xpY2tNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihXaW5kb3cucHJvdG90eXBlLCBmb2N1c01peGlucyk7XG5PYmplY3QuYXNzaWduKFdpbmRvdy5wcm90b3R5cGUsIHtcbiAgb25TY3JvbGwsXG4gIG9mZlNjcm9sbFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0ICh0eXBlb2Ygd2luZG93ID09PSBVTkRFRklORUQpID8gdW5kZWZpbmVkIDogbmV3IFdpbmRvdygpOyAgLy8vXG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5cbmltcG9ydCB7IEJPRFkgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvZHkgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IgPSBCT0RZKSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImJvZHlcIjtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcbmltcG9ydCBmb2N1c01peGlucyBmcm9tIFwiLi4vbWl4aW5zL2ZvY3VzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmsgZXh0ZW5kcyBFbGVtZW50IHtcbiAgZ2V0SHJlZigpIHsgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTsgfVxuXG4gIHNldEhyZWYoaHJlZikgeyByZXR1cm4gdGhpcy5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGhyZWYpOyB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImFcIjtcbn1cblxuT2JqZWN0LmFzc2lnbihMaW5rLnByb3RvdHlwZSwgZm9jdXNNaXhpbnMpO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IGlucHV0TWl4aW5zIGZyb20gXCIuLi9taXhpbnMvaW5wdXRcIjtcbmltcG9ydCBmb2N1c01peGlucyBmcm9tIFwiLi4vbWl4aW5zL2ZvY3VzXCI7XG5pbXBvcnQgc2VsZWN0aW9uTWl4aW5zIGZyb20gXCIuLi9taXhpbnMvc2VsZWN0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0IGV4dGVuZHMgRWxlbWVudCB7XG4gIHN0YXRpYyB0YWdOYW1lID0gXCJpbnB1dFwiO1xufVxuXG5PYmplY3QuYXNzaWduKElucHV0LnByb3RvdHlwZSwgaW5wdXRNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihJbnB1dC5wcm90b3R5cGUsIGZvY3VzTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oSW5wdXQucHJvdG90eXBlLCBzZWxlY3Rpb25NaXhpbnMpO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IGZvY3VzTWl4aW5zIGZyb20gXCIuLi9taXhpbnMvZm9jdXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgRWxlbWVudCB7XG4gIHN0YXRpYyB0YWdOYW1lID0gXCJidXR0b25cIjtcbn1cblxuT2JqZWN0LmFzc2lnbihCdXR0b24ucHJvdG90eXBlLCBmb2N1c01peGlucyk7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgaW5wdXRNaXhpbnMgZnJvbSBcIi4uL21peGlucy9pbnB1dFwiO1xuaW1wb3J0IGZvY3VzTWl4aW5zIGZyb20gXCIuLi9taXhpbnMvZm9jdXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0IGV4dGVuZHMgRWxlbWVudCB7XG4gIHN0YXRpYyB0YWdOYW1lID0gXCJzZWxlY3RcIjtcbn1cblxuT2JqZWN0LmFzc2lnbihTZWxlY3QucHJvdG90eXBlLCBpbnB1dE1peGlucyk7XG5PYmplY3QuYXNzaWduKFNlbGVjdC5wcm90b3R5cGUsIGZvY3VzTWl4aW5zKTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcbmltcG9ydCBpbnB1dE1peGlucyBmcm9tIFwiLi4vbWl4aW5zL2lucHV0XCI7XG5pbXBvcnQgZm9jdXNNaXhpbnMgZnJvbSBcIi4uL21peGlucy9mb2N1c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGVja2JveCBleHRlbmRzIEVsZW1lbnQge1xuICBpc0NoZWNrZWQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2hlY2tlZDsgfVxuXG4gIGNoZWNrKGNoZWNrZWQgPSB0cnVlKSB7IHRoaXMuZG9tRWxlbWVudC5jaGVja2VkID0gY2hlY2tlZDsgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJpbnB1dFwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICB0eXBlOiBcImNoZWNrYm94XCJcbiAgfTtcbn1cblxuT2JqZWN0LmFzc2lnbihDaGVja2JveC5wcm90b3R5cGUsIGlucHV0TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oQ2hlY2tib3gucHJvdG90eXBlLCBmb2N1c01peGlucyk7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgaW5wdXRNaXhpbnMgZnJvbSBcIi4uL21peGlucy9pbnB1dFwiO1xuaW1wb3J0IGZvY3VzTWl4aW5zIGZyb20gXCIuLi9taXhpbnMvZm9jdXNcIjtcbmltcG9ydCBzZWxlY3Rpb25NaXhpbnMgZnJvbSBcIi4uL21peGlucy9zZWxlY3Rpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dGFyZWEgZXh0ZW5kcyBFbGVtZW50IHtcbiAgc3RhdGljIHRhZ05hbWUgPSBcInRleHRhcmVhXCI7XG59XG5cbk9iamVjdC5hc3NpZ24oVGV4dGFyZWEucHJvdG90eXBlLCBpbnB1dE1peGlucyk7XG5PYmplY3QuYXNzaWduKFRleHRhcmVhLnByb3RvdHlwZSwgZm9jdXNNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihUZXh0YXJlYS5wcm90b3R5cGUsIHNlbGVjdGlvbk1peGlucyk7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgUmVhY3QgfSBmcm9tIFwiLi9yZWFjdFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBCb3VuZHMgfSBmcm9tIFwiLi9ib3VuZHNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgT2Zmc2V0IH0gZnJvbSBcIi4vb2Zmc2V0XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGV2ZW50VHlwZXMgfSBmcm9tIFwiLi9ldmVudFR5cGVzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIG1vdXNlQnV0dG9ucyB9IGZyb20gXCIuL21vdXNlQnV0dG9uc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBlbGVtZW50VXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaW5wdXRNaXhpbnMgfSBmcm9tIFwiLi9taXhpbnMvaW5wdXRcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZm9jdXNNaXhpbnMgfSBmcm9tIFwiLi9taXhpbnMvZm9jdXNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc2VsZWN0aW9uTWl4aW5zIH0gZnJvbSBcIi4vbWl4aW5zL3NlbGVjdGlvblwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjdXN0b21FdmVudE1peGlucyB9IGZyb20gXCIuL21peGlucy9jdXN0b21FdmVudFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBFbGVtZW50IH0gZnJvbSBcIi4vZWxlbWVudFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUZXh0RWxlbWVudCB9IGZyb20gXCIuL3RleHRFbGVtZW50XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGRvY3VtZW50IH0gZnJvbSBcIi4vZG9jdW1lbnRcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2luZG93IH0gZnJvbSBcIi4vd2luZG93XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEJvZHkgfSBmcm9tIFwiLi9lbGVtZW50L2JvZHlcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTGluayB9IGZyb20gXCIuL2VsZW1lbnQvbGlua1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBJbnB1dCB9IGZyb20gXCIuL2VsZW1lbnQvaW5wdXRcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQnV0dG9uIH0gZnJvbSBcIi4vZWxlbWVudC9idXR0b25cIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2VsZWN0IH0gZnJvbSBcIi4vZWxlbWVudC9zZWxlY3RcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2hlY2tib3ggfSBmcm9tIFwiLi9lbGVtZW50L2NoZWNrYm94XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRleHRhcmVhIH0gZnJvbSBcIi4vZWxlbWVudC90ZXh0YXJlYVwiO1xuXG5cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwiZWFzeVwiO1xuXG5PYmplY3QuYXNzaWduKGdsb2JhbFRoaXMsIHtcbiAgUmVhY3Rcbn0pO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCIuL2p1eHRhcG9zZVwiO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBjb250cm9sbGVyID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRyb2xsZXI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBFUlJPUl9ERUxBWSA9IDEwMDA7XG5leHBvcnQgY29uc3QgRU1QVFlfU1RSSU5HID0gXCJcIjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgSW5wdXRFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXNzd29yZElucHV0IGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgZ2V0UGFzc3dvcmQoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAgcGFzc3dvcmQgPSB2YWx1ZTsgLy8vXG5cbiAgICByZXR1cm4gcGFzc3dvcmQ7XG4gIH1cblxuICBjbGVhclBhc3N3b3JkKCkge1xuICAgIGNvbnN0IHBhc3N3b3JkID0gRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIHZhbHVlID0gcGFzc3dvcmQ7IC8vL1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuXHQgIGNvbnN0IGdldFBhc3N3b3JkID0gdGhpcy5nZXRQYXNzd29yZC5iaW5kKHRoaXMpLFxuXHRcdFx0XHQgIGNsZWFyUGFzc3dvcmQgPSB0aGlzLmNsZWFyUGFzc3dvcmQuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0UGFzc3dvcmQsXG4gICAgICBjbGVhclBhc3N3b3JkXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiaW5wdXRcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgdHlwZTogXCJwYXNzd29yZFwiXG4gIH07XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcsIEVSUk9SX0RFTEFZIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWYWxpZGF0aW9uRXJyb3JQYXJhZ3JhcGggZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIHRpbWVvdXQpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICB0aGlzLnRpbWVvdXQgPSB0aW1lb3V0O1xuICB9XG5cbiAgY2xlYXJWYWxpZGF0aW9uRXJyb3IoKSB7XG4gICAgY29uc3QgaHRtbCA9IEVNUFRZX1NUUklORztcblxuICAgIHRoaXMuaHRtbChodG1sKTtcbiAgfVxuXG4gIHNob3dWYWxpZGF0aW9uRXJyb3IodmFsaWRhdGlvbkVycm9yKSB7XG4gICAgY29uc3QgaHRtbCA9IHZhbGlkYXRpb25FcnJvcjsgLy8vXG5cbiAgICB0aGlzLmh0bWwoaHRtbCk7XG5cbiAgICBpZiAodGhpcy50aW1lb3V0ICE9PSBudWxsKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgICB9XG5cbiAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMudGltZW91dCA9IG51bGw7XG5cbiAgICAgIHRoaXMuY2xlYXJWYWxpZGF0aW9uRXJyb3IoKTtcbiAgICB9LCBFUlJPUl9ERUxBWSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIHJldHVybiAoe1xuICAgICAgc2hvd1ZhbGlkYXRpb25FcnJvcjogdGhpcy5zaG93VmFsaWRhdGlvbkVycm9yLmJpbmQodGhpcylcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJwXCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2YWxpZGF0aW9uIGVycm9yXCJcbiAgfTtcblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB0aW1lb3V0ID0gbnVsbCxcbiAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JQYXJhZ3JhcGggPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcywgdGltZW91dCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiB2YWxpZGF0aW9uRXJyb3JQYXJhZ3JhcGg7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCwgQnV0dG9uIH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IGNvbnRyb2xsZXIgZnJvbSBcIi4uLy4uL2NvbnRyb2xsZXJcIjtcbmltcG9ydCBQYXNzd29yZElucHV0IGZyb20gXCIuLi9pbnB1dC9wYXNzd29yZFwiO1xuaW1wb3J0IFZhbGlkYXRpb25FcnJvclBhcmFncmFwaCBmcm9tIFwiLi4vcGFyYWdyYXBoL3ZhbGlkYXRpb25FcnJvclwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhc3N3b3JkRm9ybSBleHRlbmRzIEVsZW1lbnQge1xuICB2YWxpZGF0ZUFuZFN1Ym1pdEZvcm0oKSB7XG4gICAgY29uc3QgcGFzc3dvcmRWYWxpZCA9IHRoaXMudmFsaWRhdGVGb3JtKCk7XG5cbiAgICBpZiAoIXBhc3N3b3JkVmFsaWQpIHtcbiAgICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcihcIlRoZSBwYXNzd29yZCBpcyBpbnZhbGlkXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN1Ym1pdEZvcm0oKTtcbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZUZvcm0oKSB7XG4gICAgY29uc3QgcGFzc3dvcmQgPSB0aGlzLmdldFBhc3N3b3JkKCksXG4gICAgICAgICAgcGFzc3dvcmRWYWxpZCA9IGlzUGFzc3dvcmRWYWxpZChwYXNzd29yZCk7XG5cbiAgICByZXR1cm4gcGFzc3dvcmRWYWxpZDtcbiAgfVxuXG4gIHN1Ym1pdEZvcm0oKSB7XG4gICAgY29uc3QgcGFzc3dvcmQgPSB0aGlzLmdldFBhc3N3b3JkKCk7XG5cbiAgICBjb250cm9sbGVyLnNldFBhc3N3b3JkKHBhc3N3b3JkKTtcblxuICAgIHRoaXMuY2xlYXJQYXNzd29yZCgpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4oW1xuXG4gICAgICA8UGFzc3dvcmRJbnB1dCAvPixcbiAgICAgIDxWYWxpZGF0aW9uRXJyb3JQYXJhZ3JhcGggLz4sXG4gICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCwgZWxlbWVudCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGVBbmRTdWJtaXRGb3JtKCk7XG5cbiAgICAgICAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgU3VibWl0XG4gICAgICA8L0J1dHRvbj5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJmb3JtXCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJwYXNzd29yZFwiXG4gIH07XG59XG5cbmZ1bmN0aW9uIGlzUGFzc3dvcmRWYWxpZChwYXNzd29yZCkge1xuICBjb25zdCBwYXNzd29yZFZhbGlkID0gKHBhc3N3b3JkICE9PSBFTVBUWV9TVFJJTkcpO1xuXG4gIHJldHVybiBwYXNzd29yZFZhbGlkO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVzc2FnZVBhcmFncmFwaCBleHRlbmRzIEVsZW1lbnQge1xuICBzaG93TWVzc2FnZShtZXNzYWdlKSB7XG4gICAgY29uc3QgaHRtbCA9IG1lc3NhZ2U7IC8vL1xuXG4gICAgdGhpcy5odG1sKGh0bWwpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcblx0ICBjb25zdCBzaG93TWVzc2FnZSA9IHRoaXMuc2hvd01lc3NhZ2UuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgc2hvd01lc3NhZ2VcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJwXCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJtZXNzYWdlXCJcbiAgfTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBjb250cm9sbGVyIGZyb20gXCIuLi8uLi9jb250cm9sbGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc2V0UGFzc3dvcmRCdXR0b24gZXh0ZW5kcyBFbGVtZW50IHtcbiAgY2xpY2tIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29udHJvbGxlci5yZXNldFBhc3N3b3JkKCk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICB0aGlzLm9uQ2xpY2sodGhpcy5jbGlja0hhbmRsZXIsIHRoaXMpO1xuICB9XG5cbiAgd2lsbE1vdW50KCkge1xuICAgIHRoaXMub2ZmQ2xpY2sodGhpcy5jbGlja0hhbmRsZXIsIHRoaXMpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gXCJSZXNldCBwYXNzd29yZFwiO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImJ1dHRvblwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwicmVzZXQtcGFzc3dvcmRcIlxuICB9O1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IFBhc3N3b3JkRm9ybSBmcm9tIFwiLi92aWV3L2Zvcm0vcGFzc3dvcmRcIjtcbmltcG9ydCBNZXNzYWdlUGFyYWdyYXBoIGZyb20gXCIuL3ZpZXcvcGFyYWdyYXBoL21lc3NhZ2VcIjtcbmltcG9ydCBSZXNldFBhc3N3b3JkQnV0dG9uIGZyb20gXCIuL3ZpZXcvYnV0dG9uL3Jlc2V0UGFzc3dvcmRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybihbXG5cbiAgICAgIDxQYXNzd29yZEZvcm0vPixcbiAgICAgIDxSZXNldFBhc3N3b3JkQnV0dG9uLz4sXG4gICAgICA8TWVzc2FnZVBhcmFncmFwaC8+XG5cbiAgICBdKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kZWwge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnBhc3N3b3JkID0gbnVsbDtcbiAgfVxuXG4gIHNldFBhc3N3b3JkKHBhc3N3b3JkKSB7XG4gICAgdGhpcy5wYXNzd29yZCA9IHBhc3N3b3JkO1xuICB9XG5cbiAgcmVzZXRQYXNzd29yZCgpIHtcbiAgICB0aGlzLnBhc3N3b3JkID0gbnVsbDtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCIuLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCB7IEJvZHkgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiLi9tdmNBcHBsaWNhdGlvbi92aWV3XCI7XG5pbXBvcnQgTW9kZWwgZnJvbSBcIi4vbXZjQXBwbGljYXRpb24vbW9kZWxcIjtcbmltcG9ydCBjb250cm9sbGVyIGZyb20gXCIuL212Y0FwcGxpY2F0aW9uL2NvbnRyb2xsZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbXZjQXBwbGljYXRpb24oKSB7XG4gIGNvbnN0IG1vZGVsID0gbmV3IE1vZGVsKCksXG4gICAgICAgIHZpZXcgPVxuXG4gICAgICAgICAgPFZpZXcvPlxuXG4gICAgICAgIDtcblxuICBPYmplY3QuYXNzaWduKGNvbnRyb2xsZXIsIHtcbiAgICBzZXRQYXNzd29yZCxcbiAgICByZXNldFBhc3N3b3JkXG4gIH0pO1xuXG4gIGNvbnN0IGJvZHkgPSBuZXcgQm9keSgpO1xuXG4gIGJvZHkubW91bnQodmlldyk7XG5cbiAgZnVuY3Rpb24gc2V0UGFzc3dvcmQocGFzc3dvcmQpIHtcbiAgICBtb2RlbC5zZXRQYXNzd29yZChwYXNzd29yZCk7XG5cbiAgICB2aWV3LnNob3dNZXNzYWdlKFwiVGhlIHBhc3N3b3JkIGhhcyBiZWVuIHNldC5cIik7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFBhc3N3b3JkKCkge1xuICAgIG1vZGVsLnJlc2V0UGFzc3dvcmQoKTtcblxuICAgIHZpZXcuc2hvd01lc3NhZ2UoXCJUaGUgcGFzc3dvcmQgaGFzIGJlZW4gcmVzZXQuXCIpO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBcIi4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IHsgQm9keSB9IGZyb20gXCJlYXN5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNpbXBsZUFwcGxpY2F0aW9uKCkge1xuICBjb25zdCBib2R5ID0gbmV3IEJvZHkoKTtcblxuICBib2R5Lm1vdW50KFxuXG4gICAgPHA+XG4gICAgICBBIHNpbXBsZSBhcHBsaWNhdGlvbi5cbiAgICA8L3A+XG5cbiAgKTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtdmNBcHBsaWNhdGlvbiB9IGZyb20gXCIuL2V4YW1wbGUvbXZjQXBwbGljYXRpb25cIjtcbmltcG9ydCB7IGRlZmF1bHQgYXMgc2ltcGxlQXBwbGljYXRpb24gfSBmcm9tIFwiLi9leGFtcGxlL3NpbXBsZUFwcGxpY2F0aW9uXCI7XG5cbk9iamVjdC5hc3NpZ24od2luZG93LCB7XG4gIG12Y0FwcGxpY2F0aW9uLFxuICBzaW1wbGVBcHBsaWNhdGlvblxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7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
