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
        const {pageXOffset, pageYOffset} = window, windowScrollTop = pageYOffset, windowScrollLeft = pageXOffset, boundingClientRect = domElement.getBoundingClientRect();
        let top, left, right, bottom;
        ({top, left, right, bottom} = boundingClientRect);
        top += top + windowScrollTop;
        left += left + windowScrollLeft;
        right += right + windowScrollLeft;
        bottom += bottom + windowScrollTop;
        const bounds = new Bounds(top, left, right, bottom);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL29mZnNldC5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvYm91bmRzLmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy91dGlsaXRpZXMvYXJyYXkuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL2NvbnN0YW50cy5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvdXRpbGl0aWVzL29iamVjdC5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvdXRpbGl0aWVzL3N0cmluZy5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvdXRpbGl0aWVzL25hbWUuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL3V0aWxpdGllcy9lbGVtZW50LmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy91dGlsaXRpZXMvZG9tLmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy9taXhpbnMvZWxlbWVudC5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvdGV4dEVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL3V0aWxpdGllcy9lbGVtZW50cy5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvZXZlbnRUeXBlcy5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvbWl4aW5zL2pzeC5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvbWl4aW5zL2tleS5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvbWl4aW5zL3N0YXRlLmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy9taXhpbnMvZXZlbnQuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL21peGlucy9tb3VzZS5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvbWl4aW5zL2NsaWNrLmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy9taXhpbnMvdG91Y2guanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL21peGlucy9zY3JvbGwuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL21peGlucy9yZXNpemUuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL21peGlucy9mdWxsU2NyZWVuLmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy91dGlsaXRpZXMvYXN5bmMuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL21peGlucy9jdXN0b21FdmVudC5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvZWxlbWVudC5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvcmVhY3QuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL21vdXNlQnV0dG9ucy5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvbWl4aW5zL2lucHV0LmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy9taXhpbnMvZm9jdXMuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL21peGlucy9zZWxlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL2RvY3VtZW50LmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy93aW5kb3cuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL2VsZW1lbnQvYm9keS5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvZWxlbWVudC9saW5rLmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy9lbGVtZW50L2lucHV0LmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy9lbGVtZW50L2J1dHRvbi5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvZWxlbWVudC9zZWxlY3QuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL2VsZW1lbnQvY2hlY2tib3guanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL2VsZW1lbnQvdGV4dGFyZWEuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL2luZGV4LmpzIiwgInNyYy9qdXh0YXBvc2UuanMiLCAic3JjL2luZGV4LmpzIiwgInNyYy9leGFtcGxlL212Y0FwcGxpY2F0aW9uL2NvbnRyb2xsZXIuanMiLCAic3JjL2V4YW1wbGUvbXZjQXBwbGljYXRpb24vY29uc3RhbnRzLmpzIiwgInNyYy9leGFtcGxlL212Y0FwcGxpY2F0aW9uL3ZpZXcvaW5wdXQvcGFzc3dvcmQuanMiLCAic3JjL2V4YW1wbGUvbXZjQXBwbGljYXRpb24vdmlldy9wYXJhZ3JhcGgvdmFsaWRhdGlvbkVycm9yLmpzIiwgInNyYy9leGFtcGxlL212Y0FwcGxpY2F0aW9uL3ZpZXcvZm9ybS9wYXNzd29yZC5qcyIsICJzcmMvZXhhbXBsZS9tdmNBcHBsaWNhdGlvbi92aWV3L3BhcmFncmFwaC9tZXNzYWdlLmpzIiwgInNyYy9leGFtcGxlL212Y0FwcGxpY2F0aW9uL3ZpZXcvYnV0dG9uL3Jlc2V0UGFzc3dvcmQuanMiLCAic3JjL2V4YW1wbGUvbXZjQXBwbGljYXRpb24vdmlldy5qcyIsICJzcmMvZXhhbXBsZS9tdmNBcHBsaWNhdGlvbi9tb2RlbC5qcyIsICJzcmMvZXhhbXBsZS9tdmNBcHBsaWNhdGlvbi5qcyIsICJzcmMvZXhhbXBsZS9zaW1wbGVBcHBsaWNhdGlvbi5qcyIsICJzcmMvZXhhbXBsZXMuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPZmZzZXQge1xuICBjb25zdHJ1Y3Rvcih0b3AsIGxlZnQpIHtcbiAgICB0aGlzLnRvcCA9IHRvcDtcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICB9XG5cbiAgZ2V0VG9wKCkge1xuICAgIHJldHVybiB0aGlzLnRvcDtcbiAgfVxuXG4gIGdldExlZnQoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50KSB7XG4gICAgY29uc3QgeyBvZmZzZXRUb3AsIG9mZnNldExlZnQgfSA9IGRvbUVsZW1lbnQsXG4gICAgICAgICAgdG9wID0gb2Zmc2V0VG9wLCAgLy8vXG4gICAgICAgICAgbGVmdCA9IG9mZnNldExlZnQsICAvLy9cbiAgICAgICAgICBvZmZzZXQgPSBuZXcgT2Zmc2V0KHRvcCwgbGVmdCk7XG5cbiAgICByZXR1cm4gb2Zmc2V0O1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvdW5kcyB7XG4gIGNvbnN0cnVjdG9yKHRvcCwgbGVmdCwgcmlnaHQsIGJvdHRvbSkge1xuICAgIHRoaXMudG9wID0gdG9wO1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICAgIHRoaXMuYm90dG9tID0gYm90dG9tO1xuICB9XG5cbiAgZ2V0VG9wKCkge1xuICAgIHJldHVybiB0aGlzLnRvcDtcbiAgfVxuXG4gIGdldExlZnQoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdDtcbiAgfVxuXG4gIGdldFJpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLnJpZ2h0O1xuICB9XG5cbiAgZ2V0Qm90dG9tKCkge1xuICAgIHJldHVybiB0aGlzLmJvdHRvbTtcbiAgfVxuXG4gIGdldFdpZHRoKCkge1xuICAgIGNvbnN0IHdpZHRoID0gKHRoaXMucmlnaHQgLSB0aGlzLmxlZnQpO1xuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KCkge1xuICAgIGNvbnN0IGhlaWdodCA9ICh0aGlzLmJvdHRvbSAtIHRoaXMudG9wKTtcblxuICAgIHJldHVybiBoZWlnaHQ7XG4gIH1cbiAgXG4gIHNldFRvcCh0b3ApIHtcbiAgICB0aGlzLnRvcCA9IHRvcDtcbiAgfVxuXG4gIHNldExlZnQobGVmdCkge1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gIH1cblxuICBzZXRSaWdodChyaWdodCkge1xuICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgfVxuXG4gIHNldEJvdHRvbShib3R0b20pIHtcbiAgICB0aGlzLmJvdHRvbSA9IGJvdHRvbTtcbiAgfVxuXG4gIGFyZU92ZXJsYXBwaW5nKGJvdW5kcykge1xuICAgIGNvbnN0IGJvdHRvbSA9IGJvdW5kcy5nZXRCb3R0b20oKSxcbiAgICAgICAgICByaWdodCA9IGJvdW5kcy5nZXRSaWdodCgpLFxuICAgICAgICAgIGxlZnQgPSBib3VuZHMuZ2V0TGVmdCgpLFxuICAgICAgICAgIHRvcCA9IGJvdW5kcy5nZXRUb3AoKSxcbiAgICAgICAgICBvdmVybGFwcGluZyA9ICgodGhpcy50b3AgPCBib3R0b20pXG4gICAgICAgICAgICAgICAgICAgICAgJiYgKHRoaXMubGVmdCA8IHJpZ2h0KVxuICAgICAgICAgICAgICAgICAgICAgICYmICh0aGlzLnJpZ2h0ID4gbGVmdClcbiAgICAgICAgICAgICAgICAgICAgICAmJiAodGhpcy5ib3R0b20gPiB0b3ApKTtcblxuICAgIHJldHVybiBvdmVybGFwcGluZztcbiAgfVxuXG4gIGFyZU92ZXJsYXBwaW5nQnlUb3BBbmRMZWZ0KHRvcCwgbGVmdCkge1xuICAgIGNvbnN0IG92ZXJsYXBwaW5nID0gKCh0aGlzLnRvcCA8PSB0b3ApXG4gICAgICAgICAgICAgICAgICAgICAgJiYgKHRoaXMubGVmdCA8PSBsZWZ0KVxuICAgICAgICAgICAgICAgICAgICAgICYmICh0aGlzLnJpZ2h0ID4gbGVmdClcbiAgICAgICAgICAgICAgICAgICAgICAmJiAodGhpcy5ib3R0b20gPiB0b3ApKTtcblxuICAgIHJldHVybiBvdmVybGFwcGluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50KSB7XG4gICAgY29uc3QgeyBwYWdlWE9mZnNldCwgcGFnZVlPZmZzZXQgfSA9IHdpbmRvdyxcbiAgICAgICAgICB3aW5kb3dTY3JvbGxUb3AgPSBwYWdlWU9mZnNldCwgLy8vXG4gICAgICAgICAgd2luZG93U2Nyb2xsTGVmdCA9IHBhZ2VYT2Zmc2V0LCAvLy9cbiAgICAgICAgICBib3VuZGluZ0NsaWVudFJlY3QgPSBkb21FbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgbGV0IHRvcCxcbiAgICAgICAgbGVmdCxcbiAgICAgICAgcmlnaHQsXG4gICAgICAgIGJvdHRvbTtcblxuICAgICh7IHRvcCwgbGVmdCwgcmlnaHQsIGJvdHRvbSB9ID0gYm91bmRpbmdDbGllbnRSZWN0KTtcblxuICAgIHRvcCArPSB0b3AgKyB3aW5kb3dTY3JvbGxUb3A7XG4gICAgbGVmdCArPSBsZWZ0ICsgd2luZG93U2Nyb2xsTGVmdDtcbiAgICByaWdodCArPSByaWdodCArIHdpbmRvd1Njcm9sbExlZnQ7XG4gICAgYm90dG9tICs9IGJvdHRvbSArIHdpbmRvd1Njcm9sbFRvcDtcblxuICAgIGNvbnN0IGJvdW5kcyA9IG5ldyBCb3VuZHModG9wLCBsZWZ0LCByaWdodCwgYm90dG9tKTtcblxuICAgIHJldHVybiBib3VuZHM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVRvcExlZnRXaWR0aEFuZEhlaWdodCh0b3AsIGxlZnQsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICBjb25zdCBib3R0b20gPSB0b3AgKyBoZWlnaHQsXG4gICAgICAgICAgcmlnaHQgPSBsZWZ0ICsgd2lkdGgsXG4gICAgICAgICAgYm91bmRzID0gbmV3IEJvdW5kcyh0b3AsIGxlZnQsIHJpZ2h0LCBib3R0b20pO1xuXG4gICAgcmV0dXJuIGJvdW5kcztcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBwdXNoKGFycmF5MSwgYXJyYXkyKSB7IEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGFycmF5MSwgYXJyYXkyKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gYXVnbWVudChhcnJheTEsIGFycmF5MiwgdGVzdCkge1xuICBhcnJheTEgPSBbIC4uLmFycmF5MSBdOyAvLy9cblxuICBhcnJheTIuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIGFycmF5MS5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGFycmF5MTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZsYXR0ZW4oYXJyYXkpIHtcbiAgcmV0dXJuIGFycmF5LnJlZHVjZSgoYXJyYXksIGVsZW1lbnQpID0+IHtcbiAgICBhcnJheSA9IGFycmF5LmNvbmNhdChlbGVtZW50KTsgIC8vL1xuXG4gICAgcmV0dXJuIGFycmF5O1xuICB9LCBbXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBndWFyYW50ZWUoYXJyYXlPckVsZW1lbnQpIHtcbiAgYXJyYXlPckVsZW1lbnQgPSBhcnJheU9yRWxlbWVudCB8fCBbXTtcblxuICByZXR1cm4gQXJyYXkuaXNBcnJheShhcnJheU9yRWxlbWVudCkgP1xuICAgICAgICAgICAgYXJyYXlPckVsZW1lbnQgOlxuICAgICAgICAgICAgICBbYXJyYXlPckVsZW1lbnRdO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgRk9SID0gXCJmb3JcIjtcbmV4cG9ydCBjb25zdCBCT0RZID0gXCJib2R5XCI7XG5leHBvcnQgY29uc3QgTk9ORSA9IFwibm9uZVwiO1xuZXhwb3J0IGNvbnN0IFNQQUNFID0gXCIgXCI7XG5leHBvcnQgY29uc3QgQ0xBU1MgPSBcImNsYXNzXCI7XG5leHBvcnQgY29uc3QgV0lEVEggPSBcIndpZHRoXCI7XG5leHBvcnQgY29uc3QgQkxPQ0sgPSBcImJsb2NrXCI7XG5leHBvcnQgY29uc3QgSEVJR0hUID0gXCJoZWlnaHRcIjtcbmV4cG9ydCBjb25zdCBPQkpFQ1QgPSBcIm9iamVjdFwiO1xuZXhwb3J0IGNvbnN0IFNUUklORyA9IFwic3RyaW5nXCI7XG5leHBvcnQgY29uc3QgRElTUExBWSA9IFwiZGlzcGxheVwiO1xuZXhwb3J0IGNvbnN0IEJPT0xFQU4gPSBcImJvb2xlYW5cIjtcbmV4cG9ydCBjb25zdCBESVNBQkxFRCA9IFwiZGlzYWJsZWRcIjtcbmV4cG9ydCBjb25zdCBGVU5DVElPTiA9IFwiZnVuY3Rpb25cIjtcbmV4cG9ydCBjb25zdCBXSUxEQ0FSRCA9IFwiKlwiO1xuZXhwb3J0IGNvbnN0IEhUTUxfRk9SID0gXCJodG1sRm9yXCI7XG5leHBvcnQgY29uc3QgVU5ERUZJTkVEID0gJ3VuZGVmaW5lZCc7XG5leHBvcnQgY29uc3QgQ0xBU1NfTkFNRSA9IFwiY2xhc3NOYW1lXCI7XG5leHBvcnQgY29uc3QgRU1QVFlfU1RSSU5HID0gXCJcIjtcbmV4cG9ydCBjb25zdCBTVkdfTkFNRVNQQUNFX1VSSSA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtcbmV4cG9ydCBjb25zdCBERUZBVUxUX1BST1BFUlRJRVMgPSBcImRlZmF1bHRQcm9wZXJ0aWVzXCI7XG5leHBvcnQgY29uc3QgSUdOT1JFRF9QUk9QRVJUSUVTID0gXCJpZ25vcmVkUHJvcGVydGllc1wiO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBCT09MRUFOIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZSh0YXJnZXQsIHNvdXJjZSA9IHt9KSB7XG4gIHRhcmdldCA9IHsgIC8vL1xuICAgIC4uLnRhcmdldFxuICB9O1xuXG4gIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXMoc291cmNlKTsgIC8vL1xuXG4gIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICBjb25zdCB0YXJnZXRWYWx1ZSA9IHRhcmdldFtuYW1lXSxcbiAgICAgICAgICBzb3VyY2VWYWx1ZSA9IHNvdXJjZVtuYW1lXSxcbiAgICAgICAgICB0YXJnZXRIYXNPd25Qcm9wZXJ0eSA9IHRhcmdldC5oYXNPd25Qcm9wZXJ0eShuYW1lKTtcblxuICAgIHRhcmdldFtuYW1lXSA9IHRhcmdldEhhc093blByb3BlcnR5ID9cbiAgICAgICAgICAgICAgICAgICAgIGNvbWJpbmVWYWx1ZXModGFyZ2V0VmFsdWUsIHNvdXJjZVZhbHVlKSA6XG4gICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVZhbHVlOyAvLy9cbiAgfSk7XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBydW5lKHRhcmdldCwgbmFtZXMgPSBbXSkge1xuICB0YXJnZXQgPSB7ICAvLy9cbiAgICAuLi50YXJnZXRcbiAgfTtcblxuICBuYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0SGFzT3duUHJvcGVydHkgPSB0YXJnZXQuaGFzT3duUHJvcGVydHkobmFtZSk7XG5cbiAgICBpZiAodGFyZ2V0SGFzT3duUHJvcGVydHkpIHtcbiAgICAgIGRlbGV0ZSB0YXJnZXRbbmFtZV07XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBjb21iaW5lVmFsdWVzKHRhcmdldFZhbHVlLCBzb3VyY2VWYWx1ZSkge1xuICBjb25zdCB0YXJnZXRWYWx1ZUJvb2xlYW4gPSBpc1ZhbHVlQm9vbGVhbih0YXJnZXRWYWx1ZSksXG4gICAgICAgIHNvdXJjZVZhbHVlQm9vbGVhbiA9IGlzVmFsdWVCb29sZWFuKHNvdXJjZVZhbHVlKSxcbiAgICAgICAgY29tYmluZWRWYWx1ZSA9ICh0YXJnZXRWYWx1ZUJvb2xlYW4gJiYgc291cmNlVmFsdWVCb29sZWFuKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFZhbHVlIDogLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7dGFyZ2V0VmFsdWV9ICR7c291cmNlVmFsdWV9YDtcblxuICByZXR1cm4gY29tYmluZWRWYWx1ZTtcbn1cblxuZnVuY3Rpb24gaXNWYWx1ZUJvb2xlYW4odmFsdWUpIHtcbiAgY29uc3QgdmFsdWVCb29sZWFuID0gKHR5cGVvZiB2YWx1ZSA9PT0gQk9PTEVBTik7XG5cbiAgcmV0dXJuIHZhbHVlQm9vbGVhbjtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNhbWVsQ2FzZVRvU25ha2VDYXNlKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoLyhbQS1aXSspL2csIChtYXRjaCwgY2hhcmFjdGVycykgPT4ge1xuICAgIGNvbnN0IHVwcGVyQ2FzZUNoYXJhY3RlcnMgPSBjaGFyYWN0ZXJzLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgc25ha2VDYXNlQ2hhcmFjdGVycyA9IGAtJHt1cHBlckNhc2VDaGFyYWN0ZXJzfWA7XG5cbiAgICByZXR1cm4gc25ha2VDYXNlQ2hhcmFjdGVycztcbiAgfSk7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1NWR1RhZ05hbWUodGFnTmFtZSkge1xuICByZXR1cm4gc3ZnVGFnTmFtZXMuaW5jbHVkZXModGFnTmFtZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1NWR0F0dHJpYnV0ZU5hbWUoYXR0cmlidXRlTmFtZSkge1xuICByZXR1cm4gc3ZnQXR0cmlidXRlTmFtZXMuaW5jbHVkZXMoYXR0cmlidXRlTmFtZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0hUTUxBdHRyaWJ1dGVOYW1lKGF0dHJpYnV0ZU5hbWUpIHtcbiAgcmV0dXJuIGh0bWxBdHRyaWJ1dGVOYW1lcy5pbmNsdWRlcyhhdHRyaWJ1dGVOYW1lKTtcbn1cblxuY29uc3Qgc3ZnVGFnTmFtZXMgPSBbXG4gICAgICAgIFwiYWx0R2x5cGhcIiwgXCJhbmltYXRlXCIsIFwiYW5pbWF0ZUNvbG9yXCIsIFwiYW5pbWF0ZU1vdGlvblwiLCBcImFuaW1hdGVUcmFuc2Zvcm1cIiwgXCJhbmltYXRpb25cIiwgXCJhdWRpb1wiLFxuICAgICAgICBcImNpcmNsZVwiLCBcImNsaXBQYXRoXCIsIFwiY29sb3ItcHJvZmlsZVwiLCBcImN1cnNvclwiLFxuICAgICAgICBcImRlZnNcIiwgXCJkZXNjXCIsIFwiZGlzY2FyZFwiLFxuICAgICAgICBcImVsbGlwc2VcIixcbiAgICAgICAgXCJmZUJsZW5kXCIsIFwiZmVDb2xvck1hdHJpeFwiLCBcImZlQ29tcG9uZW50VHJhbnNmZXJcIiwgXCJmZUNvbXBvc2l0ZVwiLCBcImZlQ29udm9sdmVNYXRyaXhcIiwgXCJmZURpZmZ1c2VMaWdodGluZ1wiLCBcImZlRGlzcGxhY2VtZW50TWFwXCIsIFwiZmVEaXN0YW50TGlnaHRcIiwgXCJmZURyb3BTaGFkb3dcIiwgXCJmZUZsb29kXCIsIFwiZmVGdW5jQVwiLCBcImZlRnVuY0JcIiwgXCJmZUZ1bmNHXCIsIFwiZmVGdW5jUlwiLCBcImZlR2F1c3NpYW5CbHVyXCIsIFwiZmVJbWFnZVwiLCBcImZlTWVyZ2VcIiwgXCJmZU1lcmdlTm9kZVwiLCBcImZlTW9ycGhvbG9neVwiLCBcImZlT2Zmc2V0XCIsIFwiZmVQb2ludExpZ2h0XCIsIFwiZmVTcGVjdWxhckxpZ2h0aW5nXCIsIFwiZmVTcG90TGlnaHRcIiwgXCJmZVRpbGVcIiwgXCJmZVR1cmJ1bGVuY2VcIiwgXCJmaWx0ZXJcIiwgXCJmb250XCIsIFwiZm9udC1mYWNlXCIsIFwiZm9udC1mYWNlLWZvcm1hdFwiLCBcImZvbnQtZmFjZS1uYW1lXCIsIFwiZm9udC1mYWNlLXVyaVwiLCBcImZvcmVpZ25PYmplY3RcIixcbiAgICAgICAgXCJnXCIsIFwiZ2x5cGhcIiwgXCJnbHlwaFJlZlwiLFxuICAgICAgICBcImhhbmRsZXJcIiwgXCJoYXRjaFwiLCBcImhhdGNocGF0aFwiLCBcImhrZXJuXCIsXG4gICAgICAgIFwiaW1hZ2VcIiwgXCJsaW5lXCIsIFwibGluZWFyR3JhZGllbnRcIixcbiAgICAgICAgXCJsaXN0ZW5lclwiLFxuICAgICAgICBcIm1hcmtlclwiLCBcIm1hc2tcIiwgXCJtZXNoXCIsIFwibWVzaGdyYWRpZW50XCIsIFwibWVzaHBhdGNoXCIsIFwibWVzaHJvd1wiLCBcIm1ldGFkYXRhXCIsIFwibWlzc2luZy1nbHlwaFwiLCBcIm1wYXRoXCIsXG4gICAgICAgIFwicGF0aFwiLCBcInBhdHRlcm5cIiwgXCJwb2x5Z29uXCIsIFwicG9seWxpbmVcIiwgXCJwcmVmZXRjaFwiLFxuICAgICAgICBcInJhZGlhbEdyYWRpZW50XCIsIFwicmVjdFwiLFxuICAgICAgICBcInNjcmlwdFwiLCBcInNldFwiLCBcInNvbGlkY29sb3JcIiwgXCJzdG9wXCIsIFwic3R5bGVcIiwgXCJzdmdcIiwgXCJzd2l0Y2hcIiwgXCJzeW1ib2xcIixcbiAgICAgICAgXCJ0YnJlYWtcIiwgXCJ0ZXh0XCIsIFwidGV4dEFyZWFcIiwgXCJ0ZXh0UGF0aFwiLCBcInRpdGxlXCIsIFwidHJlZlwiLCBcInRzcGFuXCIsXG4gICAgICAgIFwidW5rbm93blwiLCBcInVzZVwiLFxuICAgICAgICBcInZpZGVvXCIsIFwidmlld1wiLCBcInZrZXJuXCJcbiAgICAgIF0sXG4gICAgICBzdmdBdHRyaWJ1dGVOYW1lcyA9IFtcbiAgICAgICAgXCJhY2NlbnQtaGVpZ2h0XCIsIFwiYWNjdW11bGF0ZVwiLCBcImFkZGl0aXZlXCIsIFwiYWxpZ25tZW50LWJhc2VsaW5lXCIsIFwiYWxwaGFiZXRpY1wiLCBcImFtcGxpdHVkZVwiLCBcImFyYWJpYy1mb3JtXCIsIFwiYXNjZW50XCIsIFwiYXR0cmlidXRlTmFtZVwiLCBcImF0dHJpYnV0ZVR5cGVcIiwgXCJhemltdXRoXCIsXG4gICAgICAgIFwiYmFuZHdpZHRoXCIsIFwiYmFzZUZyZXF1ZW5jeVwiLCBcImJhc2VQcm9maWxlXCIsIFwiYmFzZWxpbmUtc2hpZnRcIiwgXCJiYm94XCIsIFwiYmVnaW5cIiwgXCJiaWFzXCIsIFwiYnlcIixcbiAgICAgICAgXCJjYWxjTW9kZVwiLCBcImNhcC1oZWlnaHRcIiwgXCJjbGlwXCIsIFwiY2xhc3NOYW1lXCIsIFwiY2xpcC1wYXRoXCIsIFwiY2xpcC1ydWxlXCIsIFwiY2xpcFBhdGhVbml0c1wiLCBcImNvbG9yXCIsIFwiY29sb3ItaW50ZXJwb2xhdGlvblwiLCBcImNvbG9yLWludGVycG9sYXRpb24tZmlsdGVyc1wiLCBcImNvbG9yLXByb2ZpbGVcIiwgXCJjb2xvci1yZW5kZXJpbmdcIiwgXCJjb250ZW50U2NyaXB0VHlwZVwiLCBcImNvbnRlbnRTdHlsZVR5cGVcIiwgXCJjcm9zc29yaWdpblwiLCBcImN1cnNvclwiLCBcImN4XCIsIFwiY3lcIixcbiAgICAgICAgXCJkXCIsIFwiZGVmYXVsdEFjdGlvblwiLCBcImRlc2NlbnRcIiwgXCJkaWZmdXNlQ29uc3RhbnRcIiwgXCJkaXJlY3Rpb25cIiwgXCJkaXNwbGF5XCIsIFwiZGl2aXNvclwiLCBcImRvbWluYW50LWJhc2VsaW5lXCIsIFwiZG93bmxvYWRcIiwgXCJkdXJcIiwgXCJkeFwiLCBcImR5XCIsXG4gICAgICAgIFwiZWRnZU1vZGVcIiwgXCJlZGl0YWJsZVwiLCBcImVsZXZhdGlvblwiLCBcImVuYWJsZS1iYWNrZ3JvdW5kXCIsIFwiZW5kXCIsIFwiZXZlbnRcIiwgXCJleHBvbmVudFwiLCBcImV4dGVybmFsUmVzb3VyY2VzUmVxdWlyZWRcIixcbiAgICAgICAgXCJmaWxsXCIsIFwiZmlsbC1vcGFjaXR5XCIsIFwiZmlsbC1ydWxlXCIsIFwiZmlsdGVyXCIsIFwiZmlsdGVyUmVzXCIsIFwiZmlsdGVyVW5pdHNcIiwgXCJmbG9vZC1jb2xvclwiLCBcImZsb29kLW9wYWNpdHlcIiwgXCJmb2N1c0hpZ2hsaWdodFwiLCBcImZvY3VzYWJsZVwiLCBcImZvbnQtZmFtaWx5XCIsIFwiZm9udC1zaXplXCIsIFwiZm9udC1zaXplLWFkanVzdFwiLCBcImZvbnQtc3RyZXRjaFwiLCBcImZvbnQtc3R5bGVcIiwgXCJmb250LXZhcmlhbnRcIiwgXCJmb250LXdlaWdodFwiLCBcImZvcm1hdFwiLCBcImZyXCIsIFwiZnJvbVwiLCBcImZ4XCIsIFwiZnlcIixcbiAgICAgICAgXCJnMVwiLCBcImcyXCIsIFwiZ2x5cGgtbmFtZVwiLCBcImdseXBoLW9yaWVudGF0aW9uLWhvcml6b250YWxcIiwgXCJnbHlwaC1vcmllbnRhdGlvbi12ZXJ0aWNhbFwiLCBcImdseXBoUmVmXCIsIFwiZ3JhZGllbnRUcmFuc2Zvcm1cIiwgXCJncmFkaWVudFVuaXRzXCIsXG4gICAgICAgIFwiaGFuZGxlclwiLCBcImhhbmdpbmdcIiwgXCJoYXRjaENvbnRlbnRVbml0c1wiLCBcImhhdGNoVW5pdHNcIiwgXCJoZWlnaHRcIiwgXCJob3Jpei1hZHYteFwiLCBcImhvcml6LW9yaWdpbi14XCIsIFwiaG9yaXotb3JpZ2luLXlcIiwgXCJocmVmXCIsIFwiaHJlZmxhbmdcIixcbiAgICAgICAgXCJpZFwiLCBcImlkZW9ncmFwaGljXCIsIFwiaW1hZ2UtcmVuZGVyaW5nXCIsIFwiaW5cIiwgXCJpbjJcIiwgXCJpbml0aWFsVmlzaWJpbGl0eVwiLCBcImludGVyY2VwdFwiLFxuICAgICAgICBcImtcIiwgXCJrMVwiLCBcImsyXCIsIFwiazNcIiwgXCJrNFwiLCBcImtlcm5lbE1hdHJpeFwiLCBcImtlcm5lbFVuaXRMZW5ndGhcIiwgXCJrZXJuaW5nXCIsIFwia2V5UG9pbnRzXCIsIFwia2V5U3BsaW5lc1wiLCBcImtleVRpbWVzXCIsXG4gICAgICAgIFwibGVuZ3RoQWRqdXN0XCIsIFwibGV0dGVyLXNwYWNpbmdcIiwgXCJsaWdodGluZy1jb2xvclwiLCBcImxpbWl0aW5nQ29uZUFuZ2xlXCIsIFwibG9jYWxcIixcbiAgICAgICAgXCJtYXJrZXItZW5kXCIsIFwibWFya2VyLW1pZFwiLCBcIm1hcmtlci1zdGFydFwiLCBcIm1hcmtlckhlaWdodFwiLCBcIm1hcmtlclVuaXRzXCIsIFwibWFya2VyV2lkdGhcIiwgXCJtYXNrXCIsIFwibWFza0NvbnRlbnRVbml0c1wiLCBcIm1hc2tVbml0c1wiLCBcIm1hdGhlbWF0aWNhbFwiLCBcIm1heFwiLCBcIm1lZGlhXCIsIFwibWVkaWFDaGFyYWN0ZXJFbmNvZGluZ1wiLCBcIm1lZGlhQ29udGVudEVuY29kaW5nc1wiLCBcIm1lZGlhU2l6ZVwiLCBcIm1lZGlhVGltZVwiLCBcIm1ldGhvZFwiLCBcIm1pblwiLCBcIm1vZGVcIixcbiAgICAgICAgXCJuYW1lXCIsIFwibmF2LWRvd25cIiwgXCJuYXYtZG93bi1sZWZ0XCIsIFwibmF2LWRvd24tcmlnaHRcIiwgXCJuYXYtbGVmdFwiLCBcIm5hdi1uZXh0XCIsIFwibmF2LXByZXZcIiwgXCJuYXYtcmlnaHRcIiwgXCJuYXYtdXBcIiwgXCJuYXYtdXAtbGVmdFwiLCBcIm5hdi11cC1yaWdodFwiLCBcIm51bU9jdGF2ZXNcIixcbiAgICAgICAgXCJvYnNlcnZlclwiLCBcIm9mZnNldFwiLCBcIm9wYWNpdHlcIiwgXCJvcGVyYXRvclwiLCBcIm9yZGVyXCIsIFwib3JpZW50XCIsIFwib3JpZW50YXRpb25cIiwgXCJvcmlnaW5cIiwgXCJvdmVyZmxvd1wiLCBcIm92ZXJsYXlcIiwgXCJvdmVybGluZS1wb3NpdGlvblwiLCBcIm92ZXJsaW5lLXRoaWNrbmVzc1wiLFxuICAgICAgICBcInBhbm9zZS0xXCIsIFwicGF0aFwiLCBcInBhdGhMZW5ndGhcIiwgXCJwYXR0ZXJuQ29udGVudFVuaXRzXCIsIFwicGF0dGVyblRyYW5zZm9ybVwiLCBcInBhdHRlcm5Vbml0c1wiLCBcInBoYXNlXCIsIFwicGl0Y2hcIiwgXCJwbGF5YmFja09yZGVyXCIsIFwicGxheWJhY2tvcmRlclwiLCBcInBvaW50ZXItZXZlbnRzXCIsIFwicG9pbnRzXCIsIFwicG9pbnRzQXRYXCIsIFwicG9pbnRzQXRZXCIsIFwicG9pbnRzQXRaXCIsIFwicHJlc2VydmVBbHBoYVwiLCBcInByZXNlcnZlQXNwZWN0UmF0aW9cIiwgXCJwcmltaXRpdmVVbml0c1wiLCBcInByb3BhZ2F0ZVwiLFxuICAgICAgICBcInJcIiwgXCJyYWRpdXNcIiwgXCJyZWZYXCIsIFwicmVmWVwiLCBcInJlbmRlcmluZy1pbnRlbnRcIiwgXCJyZXBlYXRDb3VudFwiLCBcInJlcGVhdER1clwiLCBcInJlcXVpcmVkRXh0ZW5zaW9uc1wiLCBcInJlcXVpcmVkRmVhdHVyZXNcIiwgXCJyZXF1aXJlZEZvbnRzXCIsIFwicmVxdWlyZWRGb3JtYXRzXCIsIFwicmVzdGFydFwiLCBcInJlc3VsdFwiLCBcInJvdGF0ZVwiLCBcInJ4XCIsIFwicnlcIixcbiAgICAgICAgXCJzY2FsZVwiLCBcInNlZWRcIiwgXCJzaGFwZS1yZW5kZXJpbmdcIiwgXCJzaWRlXCIsIFwic2xvcGVcIiwgXCJzbmFwc2hvdFRpbWVcIiwgXCJzcGFjaW5nXCIsIFwic3BlY3VsYXJDb25zdGFudFwiLCBcInNwZWN1bGFyRXhwb25lbnRcIiwgXCJzcHJlYWRNZXRob2RcIiwgXCJzcmNcIiwgXCJzdGFydE9mZnNldFwiLCBcInN0ZERldmlhdGlvblwiLCBcInN0ZW1oXCIsIFwic3RlbXZcIiwgXCJzdGl0Y2hUaWxlc1wiLCBcInN0b3AtY29sb3JcIiwgXCJzdG9wLW9wYWNpdHlcIiwgXCJzdHJpa2V0aHJvdWdoLXBvc2l0aW9uXCIsIFwic3RyaWtldGhyb3VnaC10aGlja25lc3NcIiwgXCJzdHJpbmdcIiwgXCJzdHJva2VcIiwgXCJzdHJva2UtZGFzaGFycmF5XCIsIFwic3Ryb2tlLWRhc2hvZmZzZXRcIiwgXCJzdHJva2UtbGluZWNhcFwiLCBcInN0cm9rZS1saW5lam9pblwiLCBcInN0cm9rZS1taXRlcmxpbWl0XCIsIFwic3Ryb2tlLW9wYWNpdHlcIiwgXCJzdHJva2Utd2lkdGhcIiwgXCJzdHlsZVwiLCBcInN1cmZhY2VTY2FsZVwiLCBcInN5bmNCZWhhdmlvclwiLCBcInN5bmNCZWhhdmlvckRlZmF1bHRcIiwgXCJzeW5jTWFzdGVyXCIsIFwic3luY1RvbGVyYW5jZVwiLCBcInN5bmNUb2xlcmFuY2VEZWZhdWx0XCIsIFwic3lzdGVtTGFuZ3VhZ2VcIixcbiAgICAgICAgXCJ0YWJsZVZhbHVlc1wiLCBcInRhcmdldFwiLCBcInRhcmdldFhcIiwgXCJ0YXJnZXRZXCIsIFwidGV4dC1hbmNob3JcIiwgXCJ0ZXh0LWRlY29yYXRpb25cIiwgXCJ0ZXh0LXJlbmRlcmluZ1wiLCBcInRleHRMZW5ndGhcIiwgXCJ0aW1lbGluZUJlZ2luXCIsIFwidGltZWxpbmViZWdpblwiLCBcInRpdGxlXCIsIFwidG9cIiwgXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2Zvcm1CZWhhdmlvclwiLCBcInR5cGVcIixcbiAgICAgICAgXCJ1MVwiLCBcInUyXCIsIFwidW5kZXJsaW5lLXBvc2l0aW9uXCIsIFwidW5kZXJsaW5lLXRoaWNrbmVzc1wiLCBcInVuaWNvZGVcIiwgXCJ1bmljb2RlLWJpZGlcIiwgXCJ1bmljb2RlLXJhbmdlXCIsIFwidW5pdHMtcGVyLWVtXCIsXG4gICAgICAgIFwidi1hbHBoYWJldGljXCIsIFwidi1oYW5naW5nXCIsIFwidi1pZGVvZ3JhcGhpY1wiLCBcInYtbWF0aGVtYXRpY2FsXCIsIFwidmFsdWVzXCIsIFwidmVyc2lvblwiLCBcInZlcnQtYWR2LXlcIiwgXCJ2ZXJ0LW9yaWdpbi14XCIsIFwidmVydC1vcmlnaW4teVwiLCBcInZpZXdCb3hcIiwgXCJ2aWV3VGFyZ2V0XCIsIFwidmlzaWJpbGl0eVwiLFxuICAgICAgICBcIndpZHRoXCIsIFwid2lkdGhzXCIsIFwid29yZC1zcGFjaW5nXCIsIFwid3JpdGluZy1tb2RlXCIsXG4gICAgICAgIFwieFwiLCBcIngtaGVpZ2h0XCIsIFwieDFcIiwgXCJ4MlwiLCBcInhDaGFubmVsU2VsZWN0b3JcIixcbiAgICAgICAgXCJ5XCIsIFwieTFcIiwgXCJ5MlwiLCBcInlDaGFubmVsU2VsZWN0b3JcIixcbiAgICAgICAgXCJ6XCIsIFwiem9vbUFuZFBhblwiXG4gICAgICBdLFxuICAgICAgaHRtbEF0dHJpYnV0ZU5hbWVzID0gW1xuICAgICAgICBcImFjY2VwdFwiLCBcImFjY2VwdENoYXJzZXRcIiwgXCJhY2Nlc3NLZXlcIiwgXCJhY3Rpb25cIiwgXCJhbGxvd1wiLCBcImFsbG93RnVsbFNjcmVlblwiLCBcImFsbG93VHJhbnNwYXJlbmN5XCIsIFwiYWx0XCIsIFwiYXN5bmNcIiwgXCJhdXRvQ29tcGxldGVcIiwgXCJhdXRvRm9jdXNcIiwgXCJhdXRvUGxheVwiLFxuICAgICAgICBcImNhcHR1cmVcIiwgXCJjZWxsUGFkZGluZ1wiLCBcImNlbGxTcGFjaW5nXCIsIFwiY2hhbGxlbmdlXCIsIFwiY2hhclNldFwiLCBcImNoZWNrZWRcIiwgXCJjaXRlXCIsIFwiY2xhc3NJRFwiLCBcImNsYXNzTmFtZVwiLCBcImNvbFNwYW5cIiwgXCJjb2xzXCIsIFwiY29udGVudFwiLCBcImNvbnRlbnRFZGl0YWJsZVwiLCBcImNvbnRleHRNZW51XCIsIFwiY29udHJvbHNcIiwgXCJjb29yZHNcIiwgXCJjcm9zc09yaWdpblwiLFxuICAgICAgICBcImRhdGFcIiwgXCJkYXRlVGltZVwiLCBcImRlZmF1bHRcIiwgXCJkZWZlclwiLCBcImRpclwiLCBcImRpc2FibGVkXCIsIFwiZG93bmxvYWRcIiwgXCJkcmFnZ2FibGVcIixcbiAgICAgICAgXCJlbmNUeXBlXCIsXG4gICAgICAgIFwiZm9ybVwiLCBcImZvcm1BY3Rpb25cIiwgXCJmb3JtRW5jVHlwZVwiLCBcImZvcm1NZXRob2RcIiwgXCJmb3JtTm9WYWxpZGF0ZVwiLCBcImZvcm1UYXJnZXRcIiwgXCJmcmFtZUJvcmRlclwiLFxuICAgICAgICBcImhlYWRlcnNcIiwgXCJoZWlnaHRcIiwgXCJoaWRkZW5cIiwgXCJoaWdoXCIsIFwiaHJlZlwiLCBcImhyZWZMYW5nXCIsIFwiaHRtbEZvclwiLCBcImh0dHBFcXVpdlwiLFxuICAgICAgICBcImljb25cIiwgXCJpZFwiLCBcImlucHV0TW9kZVwiLCBcImludGVncml0eVwiLCBcImlzXCIsXG4gICAgICAgIFwia2V5UGFyYW1zXCIsIFwia2V5VHlwZVwiLCBcImtpbmRcIixcbiAgICAgICAgXCJsYWJlbFwiLCBcImxhbmdcIiwgXCJsaXN0XCIsIFwibG9vcFwiLCBcImxvd1wiLFxuICAgICAgICBcIm1hbmlmZXN0XCIsIFwibWFyZ2luSGVpZ2h0XCIsIFwibWFyZ2luV2lkdGhcIiwgXCJtYXhcIiwgXCJtYXhMZW5ndGhcIiwgXCJtZWRpYVwiLCBcIm1lZGlhR3JvdXBcIiwgXCJtZXRob2RcIiwgXCJtaW5cIiwgXCJtaW5MZW5ndGhcIiwgXCJtdWx0aXBsZVwiLCBcIm11dGVkXCIsXG4gICAgICAgIFwibmFtZVwiLCBcIm5vVmFsaWRhdGVcIiwgXCJub25jZVwiLFxuICAgICAgICBcIm9wZW5cIiwgXCJvcHRpbXVtXCIsXG4gICAgICAgIFwicGF0dGVyblwiLCBcInBsYWNlaG9sZGVyXCIsIFwicG9zdGVyXCIsIFwicHJlbG9hZFwiLCBcInByb2ZpbGVcIixcbiAgICAgICAgXCJyYWRpb0dyb3VwXCIsIFwicmVhZE9ubHlcIiwgXCJyZWxcIiwgXCJyZXF1aXJlZFwiLCBcInJldmVyc2VkXCIsIFwicm9sZVwiLCBcInJvd1NwYW5cIiwgXCJyb3dzXCIsXG4gICAgICAgIFwic2FuZGJveFwiLCBcInNjb3BlXCIsIFwic2NvcGVkXCIsIFwic2Nyb2xsaW5nXCIsIFwic2VhbWxlc3NcIiwgXCJzZWxlY3RlZFwiLCBcInNoYXBlXCIsIFwic2l6ZVwiLCBcInNpemVzXCIsIFwic3BhblwiLCBcInNwZWxsQ2hlY2tcIiwgXCJzcmNcIiwgXCJzcmNEb2NcIiwgXCJzcmNMYW5nXCIsIFwic3JjU2V0XCIsIFwic3RhcnRcIiwgXCJzdGVwXCIsIFwic3R5bGVcIiwgXCJzdW1tYXJ5XCIsXG4gICAgICAgIFwidGFiSW5kZXhcIiwgXCJ0YXJnZXRcIiwgXCJ0aXRsZVwiLCBcInR5cGVcIixcbiAgICAgICAgXCJ1c2VNYXBcIixcbiAgICAgICAgXCJ2YWx1ZVwiLFxuICAgICAgICBcIndpZHRoXCIsXG4gICAgICAgIFwid21vZGVcIixcbiAgICAgICAgXCJ3cmFwXCJcbiAgICAgIF07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3RFbGVtZW50KGVsZW1lbnQsIGRvbUVsZW1lbnQpIHtcbiAgZWxlbWVudC5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcblxuICBkb21FbGVtZW50Ll9fZWxlbWVudF9fID0gZWxlbWVudDsgLy8vXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXN0cm95RWxlbWVudChlbGVtZW50KSB7XG4gIGNvbnN0IGRlc2NlbmRhbnRFbGVtZW50cyA9IGVsZW1lbnQuZ2V0RGVzY2VuZGFudEVsZW1lbnRzKCksXG4gICAgICAgIGVsZW1lbnRzID0gW1xuICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgLi4uZGVzY2VuZGFudEVsZW1lbnRzXG4gICAgICAgIF07XG5cbiAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBlbGVtZW50LmdldERPTUVsZW1lbnQoKTtcblxuICAgIGRlbGV0ZSBlbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICBkZWxldGUgZG9tRWxlbWVudC5fX2VsZW1lbnRfXztcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtb3VudEVsZW1lbnQoZWxlbWVudCkge1xuICBjb25zdCBkZXNjZW5kYW50RWxlbWVudHMgPSBlbGVtZW50LmdldERlc2NlbmRhbnRFbGVtZW50cygpLFxuICAgICAgICBlbGVtZW50cyA9IFtcbiAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgIC4uLmRlc2NlbmRhbnRFbGVtZW50c1xuICAgICAgICBdO1xuXG4gIGVsZW1lbnRzLnJldmVyc2UoKTsgLy8vXG5cbiAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQuZGlkTW91bnQgJiYgZWxlbWVudC5kaWRNb3VudCgpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVubW91bnRFbGVtZW50KGVsZW1lbnQpIHtcbiAgY29uc3QgZGVzY2VuZGFudEVsZW1lbnRzID0gZWxlbWVudC5nZXREZXNjZW5kYW50RWxlbWVudHMoKSxcbiAgICAgICAgZWxlbWVudHMgPSBbXG4gICAgICAgICAgZWxlbWVudCxcbiAgICAgICAgICAuLi5kZXNjZW5kYW50RWxlbWVudHNcbiAgICAgICAgXTtcblxuICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC53aWxsVW5tb3VudCAmJiBlbGVtZW50LndpbGxVbm1vdW50KCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbnN0cnVjdEVsZW1lbnQsXG4gIGRlc3Ryb3lFbGVtZW50LFxuICBtb3VudEVsZW1lbnQsXG4gIHVubW91bnRFbGVtZW50XG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgV0lMRENBUkQgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhkb21FbGVtZW50cykge1xuICBjb25zdCBkb21FbGVtZW50c1dpdGhFbGVtZW50cyA9IGZpbHRlckRPTU5vZGVzKGRvbUVsZW1lbnRzLCAoZG9tRWxlbWVudCkgPT4ge1xuICAgICAgICAgIGlmICgoZG9tRWxlbWVudC5fX2VsZW1lbnRfXykpIHsgLy8vXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBlbGVtZW50cyA9IGRvbUVsZW1lbnRzV2l0aEVsZW1lbnRzLm1hcCgoZG9tRWxlbWVudCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb21FbGVtZW50Ll9fZWxlbWVudF9fOyAvLy9cblxuICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICB9KTtcblxuICByZXR1cm4gZWxlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlKGRvbU5vZGUsIGhlaWdodCwgYXNjZW5kYW50RE9NTm9kZXMgPSBbXSkge1xuICBpZiAoaGVpZ2h0ID4gMCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBkb21Ob2RlLnBhcmVudEVsZW1lbnQ7ICAvLy9cblxuICAgIGlmIChwYXJlbnRET01Ob2RlICE9PSBudWxsKSB7XG4gICAgICBhc2NlbmRhbnRET01Ob2Rlcy5wdXNoKHBhcmVudERPTU5vZGUpO1xuXG4gICAgICBoZWlnaHQtLTtcblxuICAgICAgYXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZShwYXJlbnRET01Ob2RlLCBoZWlnaHQsIGFzY2VuZGFudERPTU5vZGVzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXNjZW5kYW50RE9NTm9kZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZShkb21Ob2RlLCBkZXB0aCwgZGVzY2VuZGFudERPTU5vZGVzID0gW10pIHtcbiAgaWYgKGRlcHRoID4gMCkge1xuICAgIGNvbnN0IGNoaWxkRE9NTm9kZXMgPSBkb21Ob2RlLmNoaWxkTm9kZXM7ICAvLy9cblxuICAgIHB1c2goZGVzY2VuZGFudERPTU5vZGVzLCBjaGlsZERPTU5vZGVzKTtcblxuICAgIGRlcHRoLS07XG5cbiAgICBjaGlsZERPTU5vZGVzLmZvckVhY2goKGNoaWxkRE9NTm9kZSkgPT4ge1xuICAgICAgZGVzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUoY2hpbGRET01Ob2RlLCBkZXB0aCwgZGVzY2VuZGFudERPTU5vZGVzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBkZXNjZW5kYW50RE9NTm9kZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJET01Ob2Rlc0J5U2VsZWN0b3IoZG9tTm9kZXMsIHNlbGVjdG9yKSB7XG4gIGNvbnN0IGZpbHRlcmVkRE9NTm9kZXMgPSBmaWx0ZXJET01Ob2Rlcyhkb21Ob2RlcywgKGRvbU5vZGUpID0+IHtcbiAgICBpZiAoZG9tTm9kZU1hdGNoZXNTZWxlY3Rvcihkb21Ob2RlLCBzZWxlY3RvcikpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGZpbHRlcmVkRE9NTm9kZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkb21Ob2RlTWF0Y2hlc1NlbGVjdG9yKGRvbU5vZGUsIHNlbGVjdG9yKSB7XG4gIGNvbnN0IGRvbU5vZGVUeXBlID0gZG9tTm9kZS5ub2RlVHlwZTsgLy8vXG5cbiAgc3dpdGNoIChkb21Ob2RlVHlwZSkge1xuICAgIGNhc2UgTm9kZS5FTEVNRU5UX05PREU6IHtcbiAgICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb21Ob2RlOyAvLy9cblxuICAgICAgcmV0dXJuIGRvbUVsZW1lbnQubWF0Y2hlcyhzZWxlY3Rvcik7XG4gICAgfVxuXG4gICAgY2FzZSBOb2RlLlRFWFRfTk9ERToge1xuICAgICAgaWYgKHNlbGVjdG9yID09PSBXSUxEQ0FSRCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJET01Ob2Rlcyhkb21Ob2RlcywgdGVzdCkge1xuICBjb25zdCBmaWx0ZXJlZERPTU5vZGVzID0gW10sXG4gICAgICAgIGRvbU5vZGVzTGVuZ3RoID0gZG9tTm9kZXMubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkb21Ob2Rlc0xlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGRvbU5vZGUgPSBkb21Ob2Rlc1tpbmRleF0sXG4gICAgICAgICAgcmVzdWx0ID0gdGVzdChkb21Ob2RlKTtcblxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIGZpbHRlcmVkRE9NTm9kZXMucHVzaChkb21Ob2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmlsdGVyZWRET01Ob2Rlcztcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBXSUxEQ0FSRCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGRvbU5vZGVNYXRjaGVzU2VsZWN0b3IsIGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzLCBmaWx0ZXJET01Ob2Rlc0J5U2VsZWN0b3IsIGFzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUsIGRlc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9kb21cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBhcmVudEVsZW1lbnQoc2VsZWN0b3IgPSBXSUxEQ0FSRCkge1xuICBsZXQgcGFyZW50RWxlbWVudCA9IG51bGw7XG5cbiAgY29uc3QgcGFyZW50RE9NRWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudC5wYXJlbnRFbGVtZW50OyAvLy9cblxuICBpZiAocGFyZW50RE9NRWxlbWVudCAhPT0gbnVsbCkge1xuICAgIGlmIChwYXJlbnRET01FbGVtZW50Lm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICBjb25zdCBwYXJlbnRET01FbGVtZW50cyA9IFtcbiAgICAgICAgICAgICAgcGFyZW50RE9NRWxlbWVudFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHBhcmVudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMocGFyZW50RE9NRWxlbWVudHMpLFxuICAgICAgICAgICAgZmlyc3RQYXJlbnRFbGVtZW50ID0gZmlyc3QocGFyZW50RWxlbWVudHMpO1xuXG4gICAgICBwYXJlbnRFbGVtZW50ID0gZmlyc3RQYXJlbnRFbGVtZW50IHx8IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDaGlsZEVsZW1lbnRzKHNlbGVjdG9yID0gV0lMRENBUkQpIHtcbiAgY29uc3QgY2hpbGRET01Ob2RlcyA9IHRoaXMuZG9tRWxlbWVudC5jaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgY2hpbGRET01FbGVtZW50cyA9IGZpbHRlckRPTU5vZGVzQnlTZWxlY3RvcihjaGlsZERPTU5vZGVzLCBzZWxlY3RvciksXG4gICAgICAgIGNoaWxkRWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhjaGlsZERPTUVsZW1lbnRzKTtcblxuICByZXR1cm4gY2hpbGRFbGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFzY2VuZGFudEVsZW1lbnRzKHNlbGVjdG9yID0gV0lMRENBUkQsIG1heGltdW1IZWlnaHQgPSBJbmZpbml0eSkge1xuICBjb25zdCBoZWlnaHQgPSBtYXhpbXVtSGVpZ2h0LCAvLy9cbiAgICAgICAgZG9tTm9kZSA9IHRoaXMuZG9tRWxlbWVudCwgIC8vL1xuICAgICAgICBhc2NlbmRhbnRET01Ob2RlcyA9IGFzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUoZG9tTm9kZSwgaGVpZ2h0KSxcbiAgICAgICAgYXNjZW5kYW50RE9NRWxlbWVudHMgPSBmaWx0ZXJET01Ob2Rlc0J5U2VsZWN0b3IoYXNjZW5kYW50RE9NTm9kZXMsIHNlbGVjdG9yKSxcbiAgICAgICAgYXNjZW5kYW50RWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhhc2NlbmRhbnRET01FbGVtZW50cyk7XG5cbiAgcmV0dXJuIGFzY2VuZGFudEVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVzY2VuZGFudEVsZW1lbnRzKHNlbGVjdG9yID0gV0lMRENBUkQsIG1heGltdW1EZXB0aCA9IEluZmluaXR5KSB7XG4gIGNvbnN0IGRlcHRoID0gbWF4aW11bURlcHRoLCAvLy9cbiAgICAgICAgZG9tTm9kZSA9IHRoaXMuZG9tRWxlbWVudCwgIC8vL1xuICAgICAgICBkZXNjZW5kYW50RE9NTm9kZXMgPSBkZXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZShkb21Ob2RlLCBkZXB0aCksXG4gICAgICAgIGRlc2NlbmRhbnRET01FbGVtZW50cyA9IGZpbHRlckRPTU5vZGVzQnlTZWxlY3RvcihkZXNjZW5kYW50RE9NTm9kZXMsIHNlbGVjdG9yKSxcbiAgICAgICAgZGVzY2VuZGFudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoZGVzY2VuZGFudERPTUVsZW1lbnRzKTtcblxuICByZXR1cm4gZGVzY2VuZGFudEVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmV4dFNpYmxpbmdFbGVtZW50KHNlbGVjdG9yID0gV0lMRENBUkQpIHtcbiAgbGV0IG5leHRTaWJsaW5nRWxlbWVudCA9IG51bGw7XG5cbiAgY29uc3QgbmV4dFNpYmxpbmdET01Ob2RlID0gdGhpcy5kb21FbGVtZW50Lm5leHRTaWJsaW5nOyAvLy9cblxuICBpZiAoKG5leHRTaWJsaW5nRE9NTm9kZSAhPT0gbnVsbCkgJiYgZG9tTm9kZU1hdGNoZXNTZWxlY3RvcihuZXh0U2libGluZ0RPTU5vZGUsIHNlbGVjdG9yKSkge1xuICAgIG5leHRTaWJsaW5nRWxlbWVudCA9IG5leHRTaWJsaW5nRE9NTm9kZS5fX2VsZW1lbnRfXyB8fCBudWxsO1xuICB9XG5cbiAgcmV0dXJuIG5leHRTaWJsaW5nRWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByZXZpb3VzU2libGluZ0VsZW1lbnQoc2VsZWN0b3IgPSBXSUxEQ0FSRCkge1xuICBsZXQgcHJldmlvdXNTaWJsaW5nRWxlbWVudCA9IG51bGw7XG5cbiAgY29uc3QgcHJldmlvdXNTaWJsaW5nRE9NTm9kZSA9IHRoaXMuZG9tRWxlbWVudC5wcmV2aW91c1NpYmxpbmc7ICAvLy9cblxuICBpZiAoKHByZXZpb3VzU2libGluZ0RPTU5vZGUgIT09IG51bGwpICYmIGRvbU5vZGVNYXRjaGVzU2VsZWN0b3IocHJldmlvdXNTaWJsaW5nRE9NTm9kZSwgc2VsZWN0b3IpKSB7XG4gICAgcHJldmlvdXNTaWJsaW5nRWxlbWVudCA9IHByZXZpb3VzU2libGluZ0RPTU5vZGUuX19lbGVtZW50X18gfHwgbnVsbDtcbiAgfVxuXG4gIHJldHVybiBwcmV2aW91c1NpYmxpbmdFbGVtZW50O1xufVxuXG5jb25zdCBlbGVtZW50TWl4aW5zID0ge1xuICBnZXRQYXJlbnRFbGVtZW50LFxuICBnZXRDaGlsZEVsZW1lbnRzLFxuICBnZXRBc2NlbmRhbnRFbGVtZW50cyxcbiAgZ2V0RGVzY2VuZGFudEVsZW1lbnRzLFxuICBnZXROZXh0U2libGluZ0VsZW1lbnQsXG4gIGdldFByZXZpb3VzU2libGluZ0VsZW1lbnRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVsZW1lbnRNaXhpbnM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBPZmZzZXQgZnJvbSBcIi4vb2Zmc2V0XCI7XG5pbXBvcnQgQm91bmRzIGZyb20gXCIuL2JvdW5kc1wiO1xuXG5pbXBvcnQgeyBjb25zdHJ1Y3RFbGVtZW50LCBkZXN0cm95RWxlbWVudCB9IGZyb20gXCIuL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBnZXRQYXJlbnRFbGVtZW50LCBnZXRBc2NlbmRhbnRFbGVtZW50cywgZ2V0TmV4dFNpYmxpbmdFbGVtZW50LCBnZXRQcmV2aW91c1NpYmxpbmdFbGVtZW50IH0gZnJvbSBcIi4vbWl4aW5zL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih0ZXh0KSB7XG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMsIC8vL1xuICAgICAgICAgIGRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0KTsgLy8vXG5cbiAgICBjb25zdHJ1Y3RFbGVtZW50KGVsZW1lbnQsIGRvbUVsZW1lbnQpO1xuICB9XG5cbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kb21FbGVtZW50O1xuICB9XG5cbiAgZ2V0T2Zmc2V0KCkge1xuICAgIGNvbnN0IG9mZnNldCA9IE9mZnNldC5mcm9tRE9NRWxlbWVudCh0aGlzLmRvbUVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIG9mZnNldDtcbiAgfVxuXG4gIGdldEJvdW5kcygpIHtcbiAgICBjb25zdCBib3VuZHMgPSBCb3VuZHMuZnJvbURPTUVsZW1lbnQodGhpcy5kb21FbGVtZW50KTtcblxuICAgIHJldHVybiBib3VuZHM7XG4gIH1cblxuICBnZXRXaWR0aCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5vZmZzZXRXaWR0aDsgfSAgLy8vXG5cbiAgZ2V0SGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50Lm9mZnNldEhlaWdodDsgfSAgLy8vXG5cbiAgZ2V0VGV4dCgpIHtcbiAgICBjb25zdCBub2RlVmFsdWUgPSB0aGlzLmRvbUVsZW1lbnQubm9kZVZhbHVlLFxuICAgICAgICAgIHRleHQgPSBub2RlVmFsdWU7IC8vL1xuXG4gICAgcmV0dXJuIHRleHQ7XG4gIH1cblxuICBzZXRUZXh0KHRleHQpIHtcbiAgICBjb25zdCBub2RlVmFsdWUgPSB0ZXh0OyAvLy9cblxuICAgIHRoaXMuZG9tRWxlbWVudC5ub2RlVmFsdWUgPSBub2RlVmFsdWU7XG4gIH1cblxuICBwcmVwZW5kVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LnByZXBlbmQodGhpcyk7IH1cblxuICBhcHBlbmRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQuYXBwZW5kKHRoaXMpOyB9XG5cbiAgYWRkVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LmFkZCh0aGlzKTsgfVxuXG4gIHJlbW92ZUZyb20ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LnJlbW92ZSh0aGlzKTsgfVxuXG4gIGluc2VydEJlZm9yZShzaWJsaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50LnBhcmVudE5vZGUsIC8vL1xuICAgICAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudDsgIC8vL1xuXG4gICAgcGFyZW50RE9NTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCk7XG4gIH1cblxuICBpbnNlcnRBZnRlcihzaWJsaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50LnBhcmVudE5vZGUsIC8vL1xuICAgICAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudDsgIC8vL1xuXG4gICAgcGFyZW50RE9NTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudC5uZXh0U2libGluZyk7ICAvLy9cbiAgfVxuXG4gIHJlbW92ZSgpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlKCk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgIGRlc3Ryb3lFbGVtZW50KGVsZW1lbnQpO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oVGV4dEVsZW1lbnQucHJvdG90eXBlLCB7XG4gIGdldFBhcmVudEVsZW1lbnQsXG4gIGdldEFzY2VuZGFudEVsZW1lbnRzLFxuICBnZXROZXh0U2libGluZ0VsZW1lbnQsXG4gIGdldFByZXZpb3VzU2libGluZ0VsZW1lbnRcbn0pO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGV4dEVsZW1lbnQgZnJvbSBcIi4uL3RleHRFbGVtZW50XCI7XG5cbmltcG9ydCB7IFNUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUZhbHNleUVsZW1lbnRzKGVsZW1lbnRzKSB7XG4gIGVsZW1lbnRzID0gZWxlbWVudHMucmVkdWNlKChlbGVtZW50cywgZWxlbWVudCkgPT4ge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50cztcbiAgfSwgW10pO1xuXG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VTdHJpbmdzV2l0aFRleHRFbGVtZW50cyhlbGVtZW50cykge1xuICBlbGVtZW50cyA9IGVsZW1lbnRzLm1hcCgoZWxlbWVudCkgPT4geyAgLy8vXG4gICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSBTVFJJTkcpIHtcbiAgICAgIGNvbnN0IHRleHQgPSBlbGVtZW50LCAgLy8vXG4gICAgICAgICAgICB0ZXh0RWxlbWVudCA9IG5ldyBUZXh0RWxlbWVudCh0ZXh0KTtcblxuICAgICAgZWxlbWVudCA9IHRleHRFbGVtZW50OyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfSk7XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgQ1VUX0VWRU5UX1RZUEUgPSBcImN1dFwiO1xuZXhwb3J0IGNvbnN0IENPUFlfRVZFTlRfVFlQRSA9IFwiY29weVwiO1xuZXhwb3J0IGNvbnN0IEJMVVJfRVZFTlRfVFlQRSA9IFwiYmx1clwiO1xuZXhwb3J0IGNvbnN0IEVSUk9SX0VWRU5UX1RZUEUgPSBcImVycm9yXCI7XG5leHBvcnQgY29uc3QgUEFTVEVfRVZFTlRfVFlQRSA9IFwicGFzdGVcIjtcbmV4cG9ydCBjb25zdCBXSEVFTF9FVkVOVF9UWVBFID0gXCJ3aGVlbFwiO1xuZXhwb3J0IGNvbnN0IElOUFVUX0VWRU5UX1RZUEUgPSBcImlucHV0XCI7XG5leHBvcnQgY29uc3QgRk9DVVNfRVZFTlRfVFlQRSA9IFwiZm9jdXNcIjtcbmV4cG9ydCBjb25zdCBDTElDS19FVkVOVF9UWVBFID0gXCJjbGlja1wiO1xuZXhwb3J0IGNvbnN0IEtFWVVQX0VWRU5UX1RZUEUgPSBcImtleXVwXCI7XG5leHBvcnQgY29uc3QgU0VMRUNUX0VWRU5UX1RZUEUgPSBcInNlbGVjdFwiO1xuZXhwb3J0IGNvbnN0IENIQU5HRV9FVkVOVF9UWVBFID0gXCJjaGFuZ2VcIjtcbmV4cG9ydCBjb25zdCBSRVNJWkVfRVZFTlRfVFlQRSA9IFwicmVzaXplXCI7XG5leHBvcnQgY29uc3QgU0NST0xMX0VWRU5UX1RZUEUgPSBcInNjcm9sbFwiO1xuZXhwb3J0IGNvbnN0IEtFWURPV05fRVZFTlRfVFlQRSA9IFwia2V5ZG93blwiO1xuZXhwb3J0IGNvbnN0IE1PVVNFVVBfRVZFTlRfVFlQRSA9IFwibW91c2V1cFwiO1xuZXhwb3J0IGNvbnN0IEFVWENMSUNLX0VWRU5UX1RZUEUgPSBcImF1eGNsaWNrXCI7XG5leHBvcnQgY29uc3QgTU9VU0VPVVRfRVZFTlRfVFlQRSA9IFwibW91c2VvdXRcIjtcbmV4cG9ydCBjb25zdCBEQkxDTElDS19FVkVOVF9UWVBFID0gXCJkYmxjbGlja1wiO1xuZXhwb3J0IGNvbnN0IFRPVUNIRU5EX0VWRU5UX1RZUEUgPSBcInRvdWNoZW5kXCI7XG5leHBvcnQgY29uc3QgVE9VQ0hNT1ZFX0VWRU5UX1RZUEUgPSBcInRvdWNobW92ZVwiO1xuZXhwb3J0IGNvbnN0IE1PVVNFT1ZFUl9FVkVOVF9UWVBFID0gXCJtb3VzZW92ZXJcIjtcbmV4cG9ydCBjb25zdCBNT1VTRURPV05fRVZFTlRfVFlQRSA9IFwibW91c2Vkb3duXCI7XG5leHBvcnQgY29uc3QgTU9VU0VNT1ZFX0VWRU5UX1RZUEUgPSBcIm1vdXNlbW92ZVwiO1xuZXhwb3J0IGNvbnN0IFRPVUNIU1RBUlRfRVZFTlRfVFlQRSA9IFwidG91Y2hzdGFydFwiO1xuZXhwb3J0IGNvbnN0IENPTlRFWFRNRU5VX0VWRU5UX1RZUEUgPSBcImNvbnRleHRtZW51XCI7XG5leHBvcnQgY29uc3QgU0VMRUNUSU9OQ0hBTkdFX0VWRU5UX1RZUEUgPSBcInNlbGVjdGlvbmNoYW5nZVwiO1xuZXhwb3J0IGNvbnN0IEZVTExTQ1JFRU5DSEFOR0VfRVZFTlRfVFlQRSA9IFwiZnVsbHNjcmVlbmNoYW5nZVwiO1xuZXhwb3J0IGNvbnN0IFVOSEFORExFRFJFSkVDVElPTl9FVkVOVF9UWVBFID0gXCJ1bmhhbmRsZWRyZWplY3Rpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBDVVRfRVZFTlRfVFlQRSxcbiAgQ09QWV9FVkVOVF9UWVBFLFxuICBCTFVSX0VWRU5UX1RZUEUsXG4gIEVSUk9SX0VWRU5UX1RZUEUsXG4gIFBBU1RFX0VWRU5UX1RZUEUsXG4gIFdIRUVMX0VWRU5UX1RZUEUsXG4gIElOUFVUX0VWRU5UX1RZUEUsXG4gIEZPQ1VTX0VWRU5UX1RZUEUsXG4gIENMSUNLX0VWRU5UX1RZUEUsXG4gIEtFWVVQX0VWRU5UX1RZUEUsXG4gIFNFTEVDVF9FVkVOVF9UWVBFLFxuICBDSEFOR0VfRVZFTlRfVFlQRSxcbiAgUkVTSVpFX0VWRU5UX1RZUEUsXG4gIFNDUk9MTF9FVkVOVF9UWVBFLFxuICBLRVlET1dOX0VWRU5UX1RZUEUsXG4gIE1PVVNFVVBfRVZFTlRfVFlQRSxcbiAgQVVYQ0xJQ0tfRVZFTlRfVFlQRSxcbiAgTU9VU0VPVVRfRVZFTlRfVFlQRSxcbiAgREJMQ0xJQ0tfRVZFTlRfVFlQRSxcbiAgVE9VQ0hFTkRfRVZFTlRfVFlQRSxcbiAgVE9VQ0hNT1ZFX0VWRU5UX1RZUEUsXG4gIE1PVVNFT1ZFUl9FVkVOVF9UWVBFLFxuICBNT1VTRURPV05fRVZFTlRfVFlQRSxcbiAgTU9VU0VNT1ZFX0VWRU5UX1RZUEUsXG4gIFRPVUNIU1RBUlRfRVZFTlRfVFlQRSxcbiAgQ09OVEVYVE1FTlVfRVZFTlRfVFlQRSxcbiAgU0VMRUNUSU9OQ0hBTkdFX0VWRU5UX1RZUEUsXG4gIEZVTExTQ1JFRU5DSEFOR0VfRVZFTlRfVFlQRSxcbiAgVU5IQU5ETEVEUkVKRUNUSU9OX0VWRU5UX1RZUEVcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGd1YXJhbnRlZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGNvbWJpbmUsIHBydW5lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9vYmplY3RcIjtcbmltcG9ydCB7IGNhbWVsQ2FzZVRvU25ha2VDYXNlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IGlzSFRNTEF0dHJpYnV0ZU5hbWUsIGlzU1ZHQXR0cmlidXRlTmFtZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvbmFtZVwiO1xuaW1wb3J0IHsgcmVtb3ZlRmFsc2V5RWxlbWVudHMsIHJlcGxhY2VTdHJpbmdzV2l0aFRleHRFbGVtZW50cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudHNcIjtcbmltcG9ydCB7IERCTENMSUNLX0VWRU5UX1RZUEUsIFNFTEVDVElPTkNIQU5HRV9FVkVOVF9UWVBFLCBGVUxMU0NSRUVOQ0hBTkdFX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi4vZXZlbnRUeXBlc1wiO1xuaW1wb3J0IHsgRk9SLCBDTEFTUywgT0JKRUNULCBIVE1MX0ZPUiwgQ0xBU1NfTkFNRSwgQk9PTEVBTiwgRlVOQ1RJT04sIFNWR19OQU1FU1BBQ0VfVVJJIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCBET1VCTEVfQ0xJQ0tfRVZFTlRfVFlQRSA9IFwiZG91YmxlY2xpY2tcIixcbiAgICAgIFNFTEVDVElPTl9DSEFOR0VfRVZFTlRfVFlQRSA9IFwic2VsZWN0aW9uQ2hhbmdlXCIsXG4gICAgICBGVUxMX1NDUkVFTl9DSEFOR0VfRVZFTlRfVFlQRSA9IFwiZnVsbFNjcmVlbkNoYW5nZVwiO1xuXG5mdW5jdGlvbiBhcHBseVByb3BlcnRpZXMocHJvcGVydGllcywgZGVmYXVsdFByb3BlcnRpZXMsIGlnbm9yZWRQcm9wZXJ0aWVzKSB7XG4gIHRoaXMucHJvcGVydGllcyA9IGNvbWJpbmUocHJvcGVydGllcywgZGVmYXVsdFByb3BlcnRpZXMpO1xuXG4gIHByb3BlcnRpZXMgPSBwcnVuZSh0aGlzLnByb3BlcnRpZXMsIGlnbm9yZWRQcm9wZXJ0aWVzKTsgLy8vXG5cbiAgY29uc3QgbmFtZXNwYWNlVVJJID0gdGhpcy5kb21FbGVtZW50Lm5hbWVzcGFjZVVSSSxcbiAgICAgICAgc3ZnID0gKG5hbWVzcGFjZVVSSSA9PT0gU1ZHX05BTUVTUEFDRV9VUkkpLCAvLy9cbiAgICAgICAgcHJvcGVydGllc0tleXMgPSBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKSxcbiAgICAgICAgbmFtZXMgPSBwcm9wZXJ0aWVzS2V5czsgIC8vLz1cblxuICBuYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBwcm9wZXJ0aWVzW25hbWVdLFxuICAgICAgICAgIG5hbWVIYW5kbGVyTmFtZSA9IGlzTmFtZUhhbmRsZXJOYW1lKG5hbWUpLFxuICAgICAgICAgIG5hbWVDdXN0b21IYW5kbGVyTmFtZSA9IGlzTmFtZUN1c3RvbUhhbmRsZXJOYW1lKG5hbWUpO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKG5hbWVIYW5kbGVyTmFtZSkge1xuICAgICAgYWRkSGFuZGxlcih0aGlzLCBuYW1lLCB2YWx1ZSk7XG4gICAgfSBlbHNlIGlmIChuYW1lQ3VzdG9tSGFuZGxlck5hbWUpIHtcbiAgICAgIGFkZEN1c3RvbUhhbmRsZXIodGhpcywgbmFtZSwgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBuYW1lQXR0cmlidXRlTmFtZSA9IGlzTmFtZUF0dHJpYnV0ZU5hbWUobmFtZSwgc3ZnKTtcblxuICAgICAgaWYgKG5hbWVBdHRyaWJ1dGVOYW1lKSB7XG4gICAgICAgIGFkZEF0dHJpYnV0ZSh0aGlzLCBuYW1lLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBjaGlsZEVsZW1lbnRzID0gY2hpbGRFbGVtZW50c0Zyb21FbGVtZW50KHRoaXMpIHx8IHByb3BlcnRpZXMuY2hpbGRFbGVtZW50cywgIC8vL1xuICAgICAgICBjb250ZXh0ID0ge307XG5cbiAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IHtcbiAgICB1cGRhdGVDb250ZXh0KGNoaWxkRWxlbWVudCwgY29udGV4dCk7XG5cbiAgICB0aGlzLmFkZChjaGlsZEVsZW1lbnQpO1xuICB9KTtcblxuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xufVxuXG5mdW5jdGlvbiBnZXRQcm9wZXJ0aWVzKCkge1xuICByZXR1cm4gdGhpcy5wcm9wZXJ0aWVzO1xufVxuXG5mdW5jdGlvbiBnZXRDb250ZXh0KCkge1xuICByZXR1cm4gdGhpcy5jb250ZXh0O1xufVxuXG5mdW5jdGlvbiBhc3NpZ25Db250ZXh0KG5hbWVzKSB7XG4gIGlmIChuYW1lcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLmNvbnRleHQpXG4gIH1cblxuICBuYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmNvbnRleHRbbmFtZV0sXG4gICAgICAgICAgcHJvcGVydHlOYW1lID0gbmFtZSwgIC8vL1xuICAgICAgICAgIGRlc2NyaXB0b3IgPSB7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgICB9O1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIHByb3BlcnR5TmFtZSwgZGVzY3JpcHRvcik7XG5cbiAgICBkZWxldGUgdGhpcy5jb250ZXh0W25hbWVdO1xuICB9KTtcbn1cblxuY29uc3QganN4TWl4aW5zID0ge1xuICBhcHBseVByb3BlcnRpZXMsXG4gIGdldFByb3BlcnRpZXMsXG4gIGdldENvbnRleHQsXG4gIGFzc2lnbkNvbnRleHRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGpzeE1peGlucztcblxuZnVuY3Rpb24gY2hpbGRFbGVtZW50c0Zyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgbGV0IGNoaWxkRWxlbWVudHMgPSBudWxsO1xuXG4gIGlmICh0eXBlb2YgZWxlbWVudC5jaGlsZEVsZW1lbnRzID09PSBGVU5DVElPTikge1xuICAgIGNoaWxkRWxlbWVudHMgPSBlbGVtZW50LmNoaWxkRWxlbWVudHMuY2FsbChlbGVtZW50KTtcblxuICAgIGNoaWxkRWxlbWVudHMgPSBndWFyYW50ZWUoY2hpbGRFbGVtZW50cyk7XG5cbiAgICBjaGlsZEVsZW1lbnRzID0gcmVtb3ZlRmFsc2V5RWxlbWVudHMoY2hpbGRFbGVtZW50cyk7XG5cbiAgICBjaGlsZEVsZW1lbnRzID0gcmVwbGFjZVN0cmluZ3NXaXRoVGV4dEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpO1xuICB9XG5cbiAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUNvbnRleHQoY2hpbGRFbGVtZW50LCBjb250ZXh0KSB7XG4gIGNvbnN0IHBhcmVudENvbnRleHQgPSAodHlwZW9mIGNoaWxkRWxlbWVudC5wYXJlbnRDb250ZXh0ID09PSBGVU5DVElPTikgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZEVsZW1lbnQucGFyZW50Q29udGV4dCgpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZEVsZW1lbnQuY29udGV4dDsgLy8vXG5cbiAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCBwYXJlbnRDb250ZXh0KTtcbn1cblxuZnVuY3Rpb24gYWRkSGFuZGxlcihlbGVtZW50LCBuYW1lLCB2YWx1ZSkge1xuICBsZXQgZXZlbnRUeXBlID0gbmFtZS5zdWJzdHJpbmcoMikudG9Mb3dlckNhc2UoKTsgLy8vXG5cbiAgc3dpdGNoIChldmVudFR5cGUpIHtcbiAgICBjYXNlIERPVUJMRV9DTElDS19FVkVOVF9UWVBFOiB7XG4gICAgICBldmVudFR5cGUgPSBEQkxDTElDS19FVkVOVF9UWVBFO1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIFNFTEVDVElPTl9DSEFOR0VfRVZFTlRfVFlQRToge1xuICAgICAgZXZlbnRUeXBlID0gU0VMRUNUSU9OQ0hBTkdFX0VWRU5UX1RZUEU7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgRlVMTF9TQ1JFRU5fQ0hBTkdFX0VWRU5UX1RZUEU6IHtcbiAgICAgIGV2ZW50VHlwZSA9IEZVTExTQ1JFRU5DSEFOR0VfRVZFTlRfVFlQRTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gIH1cblxuICBjb25zdCBoYW5kbGVyID0gdmFsdWU7ICAvLy9cblxuICBlbGVtZW50Lm9uRXZlbnQoZXZlbnRUeXBlLCBoYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gYWRkQ3VzdG9tSGFuZGxlcihlbGVtZW50LCBuYW1lLCB2YWx1ZSkge1xuICBjb25zdCBjdXN0b21FdmVudFR5cGUgPSBjYW1lbENhc2VUb1NuYWtlQ2FzZShuYW1lKS5yZXBsYWNlKC9vbi1jdXN0b20tLywgXCJcIiksXG4gICAgICAgIGN1c3RvbUhhbmRsZXIgPSB2YWx1ZTsgIC8vL1xuXG4gIGVsZW1lbnQub25DdXN0b21FdmVudChjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRyaWJ1dGUoZWxlbWVudCwgbmFtZSwgdmFsdWUpIHtcbiAgaWYgKG5hbWUgPT09IENMQVNTX05BTUUpIHtcbiAgICBuYW1lID0gQ0xBU1M7XG4gIH1cblxuICBpZiAobmFtZSA9PT0gSFRNTF9GT1IpIHtcbiAgICBuYW1lID0gRk9SO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gT0JKRUNUKSB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcblxuICAgIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBlbGVtZW50LmRvbUVsZW1lbnRbbmFtZV1ba2V5XSA9IHZhbHVlW2tleV07XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBCT09MRUFOKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB2YWx1ZSA9IG5hbWU7IC8vL1xuXG4gICAgICBlbGVtZW50LmFkZEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGVsZW1lbnQuYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc05hbWVIYW5kbGVyTmFtZShuYW1lKSB7XG4gIGNvbnN0IG5hbWVIYW5kbGVyTmFtZSA9ICAvXm9uKD8hQ3VzdG9tKS8udGVzdChuYW1lKTsgIC8vL1xuXG4gIHJldHVybiBuYW1lSGFuZGxlck5hbWU7XG59XG5cbmZ1bmN0aW9uIGlzTmFtZUF0dHJpYnV0ZU5hbWUobmFtZSwgc3ZnKSB7XG4gIGNvbnN0IG5hbWVBdHRyaWJ1dGVOYW1lID0gc3ZnID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNTVkdBdHRyaWJ1dGVOYW1lKG5hbWUpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0hUTUxBdHRyaWJ1dGVOYW1lKG5hbWUpO1xuXG4gIHJldHVybiBuYW1lQXR0cmlidXRlTmFtZTtcbn1cblxuZnVuY3Rpb24gaXNOYW1lQ3VzdG9tSGFuZGxlck5hbWUobmFtZSkge1xuICBjb25zdCBuYW1lQ3VzdG9tSGFuZGxlck5hbWUgPSAvXm9uQ3VzdG9tLy50ZXN0KG5hbWUpO1xuXG4gIHJldHVybiBuYW1lQ3VzdG9tSGFuZGxlck5hbWU7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEtFWVVQX0VWRU5UX1RZUEUsIEtFWURPV05fRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9ldmVudFR5cGVzXCI7XG5cbmZ1bmN0aW9uIG9uS2V5VXAoa2V5VXBIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub25FdmVudChLRVlVUF9FVkVOVF9UWVBFLCBrZXlVcEhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9mZktleVVwKGtleVVwSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZkV2ZW50KEtFWVVQX0VWRU5UX1RZUEUsIGtleVVwSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb25LZXlEb3duKGtleURvd25IYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub25FdmVudChLRVlET1dOX0VWRU5UX1RZUEUsIGtleURvd25IYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvZmZLZXlEb3duKGtleURvd25IYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmRXZlbnQoS0VZRE9XTl9FVkVOVF9UWVBFLCBrZXlEb3duSGFuZGxlciwgZWxlbWVudCk7IH1cblxuY29uc3Qga2V5TWl4aW5zID0ge1xuICBvbktleVVwLFxuICBvZmZLZXlVcCxcbiAgb25LZXlEb3duLFxuICBvZmZLZXlEb3duXG59O1xuXG5leHBvcnQgZGVmYXVsdCBrZXlNaXhpbnM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIGdldFN0YXRlKCkge1xuICByZXR1cm4gdGhpcy5zdGF0ZTtcbn1cblxuZnVuY3Rpb24gc2V0U3RhdGUoc3RhdGUpIHtcbiAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVTdGF0ZShzdGF0ZSkge1xuICAodGhpcy5zdGF0ZSA9PT0gdW5kZWZpbmVkKSA/XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlIDpcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5zdGF0ZSwgc3RhdGUpO1xufVxuXG5jb25zdCBzdGF0ZU1peGlucyA9IHtcbiAgZ2V0U3RhdGUsXG4gIHNldFN0YXRlLFxuICB1cGRhdGVTdGF0ZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgc3RhdGVNaXhpbnM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFNQQUNFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgUkVTSVpFX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi4vZXZlbnRUeXBlc1wiO1xuXG5mdW5jdGlvbiBvbkV2ZW50KGV2ZW50VHlwZXMsIGhhbmRsZXIsIGVsZW1lbnQgPSB0aGlzKSB7XG4gIGV2ZW50VHlwZXMgPSBldmVudFR5cGVzLnNwbGl0KFNQQUNFKTsgLy8vXG5cbiAgZXZlbnRUeXBlcy5mb3JFYWNoKChldmVudFR5cGUpID0+IHtcbiAgICBpZiAoZXZlbnRUeXBlID09PSBSRVNJWkVfRVZFTlRfVFlQRSkge1xuICAgICAgY29uc3QgcmVzaXplRXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmZpbmRFdmVudExpc3RlbmVycyhSRVNJWkVfRVZFTlRfVFlQRSksXG4gICAgICAgICAgICByZXNpemVFdmVudExpc3RlbmVyc0xlbmd0aCA9IHJlc2l6ZUV2ZW50TGlzdGVuZXJzLmxlbmd0aDtcblxuICAgICAgaWYgKHJlc2l6ZUV2ZW50TGlzdGVuZXJzTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICAgICAgICBjb25zdCByZXNpemVFdmVudExpc3RlbmVycyA9IHRoaXMuZmluZEV2ZW50TGlzdGVuZXJzKFJFU0laRV9FVkVOVF9UWVBFKTtcblxuICAgICAgICAgIHJlc2l6ZUV2ZW50TGlzdGVuZXJzLmZvckVhY2goKHJlc2l6ZUV2ZW50TGlzdGVuZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gbnVsbDtcblxuICAgICAgICAgICAgcmVzaXplRXZlbnRMaXN0ZW5lcihldmVudCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmRvbUVsZW1lbnQpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBldmVudExpc3RlbmVyID0gdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG5cbiAgICAgIHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgZXZlbnRMaXN0ZW5lcik7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gb2ZmRXZlbnQoZXZlbnRUeXBlcywgaGFuZGxlciwgZWxlbWVudCA9IHRoaXMpIHtcbiAgZXZlbnRUeXBlcyA9IGV2ZW50VHlwZXMuc3BsaXQoU1BBQ0UpOyAvLy9cblxuICBldmVudFR5cGVzLmZvckVhY2goKGV2ZW50VHlwZSkgPT4ge1xuICAgIGlmIChldmVudFR5cGUgPT09IFJFU0laRV9FVkVOVF9UWVBFKSB7XG4gICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcblxuICAgICAgY29uc3QgcmVzaXplRXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmZpbmRFdmVudExpc3RlbmVycyhSRVNJWkVfRVZFTlRfVFlQRSksXG4gICAgICAgICAgICByZXNpemVFdmVudExpc3RlbmVyc0xlbmd0aCA9IHJlc2l6ZUV2ZW50TGlzdGVuZXJzLmxlbmd0aDtcblxuICAgICAgaWYgKHJlc2l6ZUV2ZW50TGlzdGVuZXJzTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIudW5vYnNlcnZlKHRoaXMuZG9tRWxlbWVudCk7XG5cbiAgICAgICAgZGVsZXRlIHRoaXMucmVzaXplT2JzZXJ2ZXI7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGV2ZW50TGlzdGVuZXIgPSB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcblxuICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBldmVudExpc3RlbmVyKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBldmVudExpc3RlbmVyID0gdGhpcy5jcmVhdGVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG5cbiAgaWYgKCF0aGlzLmV2ZW50TGlzdGVuZXJzKSB7XG4gICAgdGhpcy5ldmVudExpc3RlbmVycyA9IFtdO1xuICB9XG5cbiAgdGhpcy5ldmVudExpc3RlbmVycy5wdXNoKGV2ZW50TGlzdGVuZXIpO1xuXG4gIHJldHVybiBldmVudExpc3RlbmVyO1xufVxuXG5mdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBldmVudExpc3RlbmVyID0gdGhpcy5maW5kRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpLFxuICAgICAgICBpbmRleCA9IHRoaXMuZXZlbnRMaXN0ZW5lcnMuaW5kZXhPZihldmVudExpc3RlbmVyKSxcbiAgICAgICAgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgdGhpcy5ldmVudExpc3RlbmVycy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcblxuICBpZiAodGhpcy5ldmVudExpc3RlbmVycy5sZW5ndGggPT09IDApIHtcbiAgICBkZWxldGUgdGhpcy5ldmVudExpc3RlbmVycztcbiAgfVxuXG4gIHJldHVybiBldmVudExpc3RlbmVyO1xufVxuXG5mdW5jdGlvbiBmaW5kRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgZXZlbnRMaXN0ZW5lciA9IHRoaXMuZXZlbnRMaXN0ZW5lcnMuZmluZCgoZXZlbnRMaXN0ZW5lcikgPT4ge1xuICAgIGlmICgoZXZlbnRMaXN0ZW5lci5lbGVtZW50ID09PSBlbGVtZW50KSAmJiAoZXZlbnRMaXN0ZW5lci5oYW5kbGVyID09PSBoYW5kbGVyKSAmJiAoZXZlbnRMaXN0ZW5lci5ldmVudFR5cGUgPT09IGV2ZW50VHlwZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGV2ZW50TGlzdGVuZXI7XG59XG5cbmZ1bmN0aW9uIGZpbmRFdmVudExpc3RlbmVycyhldmVudFR5cGUpIHtcbiAgY29uc3QgZXZlbnRMaXN0ZW5lcnMgPSBbXTtcblxuICBpZiAodGhpcy5ldmVudExpc3RlbmVycykge1xuICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoZXZlbnRMaXN0ZW5lcikgPT4ge1xuICAgICAgY29uc3QgZm91bmQgPSAoZXZlbnRMaXN0ZW5lci5ldmVudFR5cGUgPT09IGV2ZW50VHlwZSk7XG5cbiAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICBldmVudExpc3RlbmVycy5wdXNoKGV2ZW50TGlzdGVuZXIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGV2ZW50TGlzdGVuZXJzO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCkge1xuICBsZXQgZXZlbnRMaXN0ZW5lcjtcblxuICBjb25zdCBoYW5kbGVyRWxlbWVudCA9IGVsZW1lbnQ7IC8vL1xuXG4gIGV2ZW50TGlzdGVuZXIgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICBoYW5kbGVyLmNhbGwoaGFuZGxlckVsZW1lbnQsIGV2ZW50LCBlbGVtZW50KTtcbiAgfTtcblxuICBPYmplY3QuYXNzaWduKGV2ZW50TGlzdGVuZXIsIHtcbiAgICBlbGVtZW50LFxuICAgIGhhbmRsZXIsXG4gICAgZXZlbnRUeXBlXG4gIH0pO1xuXG4gIHJldHVybiBldmVudExpc3RlbmVyO1xufVxuXG5jb25zdCBldmVudE1peGlucyA9IHtcbiAgb25FdmVudCxcbiAgb2ZmRXZlbnQsXG4gIGFkZEV2ZW50TGlzdGVuZXIsXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXIsXG4gIGZpbmRFdmVudExpc3RlbmVyLFxuICBmaW5kRXZlbnRMaXN0ZW5lcnMsXG4gIGNyZWF0ZUV2ZW50TGlzdGVuZXJcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGV2ZW50TWl4aW5zO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBNT1VTRVVQX0VWRU5UX1RZUEUsIE1PVVNFT1VUX0VWRU5UX1RZUEUsIE1PVVNFRE9XTl9FVkVOVF9UWVBFLCBNT1VTRU9WRVJfRVZFTlRfVFlQRSwgTU9VU0VNT1ZFX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi4vZXZlbnRUeXBlc1wiO1xuXG5mdW5jdGlvbiBvbk1vdXNlVXAobW91c2VVcEhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vbkV2ZW50KE1PVVNFVVBfRVZFTlRfVFlQRSwgbW91c2VVcEhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9mZk1vdXNlVXAobW91c2VVcEhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vZmZFdmVudChNT1VTRVVQX0VWRU5UX1RZUEUsIG1vdXNlVXBIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvbk1vdXNlT3V0KG1vdXNlT3V0SGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uRXZlbnQoTU9VU0VPVVRfRVZFTlRfVFlQRSwgbW91c2VPdXRIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvZmZNb3VzZU91dChtb3VzZU91dEhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vZmZFdmVudChNT1VTRU9VVF9FVkVOVF9UWVBFLCBtb3VzZU91dEhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9uTW91c2VEb3duKG1vdXNlRG93bkhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vbkV2ZW50KE1PVVNFRE9XTl9FVkVOVF9UWVBFLCBtb3VzZURvd25IYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvZmZNb3VzZURvd24obW91c2VEb3duSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZkV2ZW50KE1PVVNFRE9XTl9FVkVOVF9UWVBFLCBtb3VzZURvd25IYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvbk1vdXNlT3Zlcihtb3VzZU92ZXJIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub25FdmVudChNT1VTRU9WRVJfRVZFTlRfVFlQRSwgbW91c2VPdmVySGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb2ZmTW91c2VPdmVyKG1vdXNlT3ZlckhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vZmZFdmVudChNT1VTRU9WRVJfRVZFTlRfVFlQRSwgbW91c2VPdmVySGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb25Nb3VzZU1vdmUobW91c2VNb3ZlSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uRXZlbnQoTU9VU0VNT1ZFX0VWRU5UX1RZUEUsIG1vdXNlTW92ZUhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9mZk1vdXNlTW92ZShtb3VzZU1vdmVIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmRXZlbnQoTU9VU0VNT1ZFX0VWRU5UX1RZUEUsIG1vdXNlTW92ZUhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmNvbnN0IG1vdXNlTWl4aW5zID0ge1xuICBvbk1vdXNlVXAsXG4gIG9mZk1vdXNlVXAsXG4gIG9uTW91c2VPdXQsXG4gIG9mZk1vdXNlT3V0LFxuICBvbk1vdXNlRG93bixcbiAgb2ZmTW91c2VEb3duLFxuICBvbk1vdXNlT3ZlcixcbiAgb2ZmTW91c2VPdmVyLFxuICBvbk1vdXNlTW92ZSxcbiAgb2ZmTW91c2VNb3ZlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBtb3VzZU1peGlucztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ0xJQ0tfRVZFTlRfVFlQRSwgREJMQ0xJQ0tfRVZFTlRfVFlQRSwgQVVYQ0xJQ0tfRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9ldmVudFR5cGVzXCI7XG5cbmZ1bmN0aW9uIG9uQ2xpY2soY2xpY2tIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub25FdmVudChDTElDS19FVkVOVF9UWVBFLCBjbGlja0hhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9mZkNsaWNrKGNsaWNrSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZkV2ZW50KENMSUNLX0VWRU5UX1RZUEUsIGNsaWNrSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb25BdXhDbGljayhhdXhDbGlja0hhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vbkV2ZW50KEFVWENMSUNLX0VWRU5UX1RZUEUsIGF1eENsaWNrSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb2ZmQXV4Q2xpY2soYXV4Q2xpY2tIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmRXZlbnQoQVVYQ0xJQ0tfRVZFTlRfVFlQRSwgYXV4Q2xpY2tIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvbkRvdWJsZUNsaWNrKGRvdWJsZUNsaWNrSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uRXZlbnQoREJMQ0xJQ0tfRVZFTlRfVFlQRSwgZG91YmxlQ2xpY2tIYW5kbGVyLCBlbGVtZW50KTsgfSAvLy9cblxuZnVuY3Rpb24gb2ZmRG91YmxlQ2xpY2soZG91YmxlQ2xpY2tIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmRXZlbnQoREJMQ0xJQ0tfRVZFTlRfVFlQRSwgZG91YmxlQ2xpY2tIYW5kbGVyLCBlbGVtZW50KTsgfSAvLy9cblxuY29uc3QgY2xpY2tNaXhpbnMgPSB7XG4gIG9uQ2xpY2ssXG4gIG9mZkNsaWNrLFxuICBvbkF1eENsaWNrLFxuICBvZmZBdXhDbGljayxcbiAgb25Eb3VibGVDbGljayxcbiAgb2ZmRG91YmxlQ2xpY2tcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsaWNrTWl4aW5zO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBUT1VDSFNUQVJUX0VWRU5UX1RZUEUsIFRPVUNITU9WRV9FVkVOVF9UWVBFLCBUT1VDSEVORF9FVkVOVF9UWVBFIH0gZnJvbSBcIi4uL2V2ZW50VHlwZXNcIjtcblxuZnVuY3Rpb24gb25Ub3VjaFN0YXJ0KHRvdWNoU3RhcnRIYW5kbGVyKSB7IHRoaXMub25FdmVudChUT1VDSFNUQVJUX0VWRU5UX1RZUEUsIHRvdWNoU3RhcnRIYW5kbGVyKTsgfVxuXG5mdW5jdGlvbiBvZmZUb3VjaFN0YXJ0KHRvdWNoU3RhcnRIYW5kbGVyKSB7IHRoaXMub2ZmRXZlbnQoVE9VQ0hTVEFSVF9FVkVOVF9UWVBFLCB0b3VjaFN0YXJ0SGFuZGxlcik7IH1cblxuZnVuY3Rpb24gb25Ub3VjaE1vdmUodG91Y2hTdGFydEhhbmRsZXIpIHsgdGhpcy5vbkV2ZW50KFRPVUNITU9WRV9FVkVOVF9UWVBFLCB0b3VjaFN0YXJ0SGFuZGxlcik7IH1cblxuZnVuY3Rpb24gb2ZmVG91Y2hNb3ZlKHRvdWNoU3RhcnRIYW5kbGVyKSB7IHRoaXMub2ZmRXZlbnQoVE9VQ0hNT1ZFX0VWRU5UX1RZUEUsIHRvdWNoU3RhcnRIYW5kbGVyKTsgfVxuXG5mdW5jdGlvbiBvblRvdWNoRW5kKHRvdWNoU3RhcnRIYW5kbGVyKSB7IHRoaXMub25FdmVudChUT1VDSEVORF9FVkVOVF9UWVBFLCB0b3VjaFN0YXJ0SGFuZGxlcik7IH1cblxuZnVuY3Rpb24gb2ZmVG91Y2hFbmQodG91Y2hTdGFydEhhbmRsZXIpIHsgdGhpcy5vZmZFdmVudChUT1VDSEVORF9FVkVOVF9UWVBFLCB0b3VjaFN0YXJ0SGFuZGxlcik7IH1cblxuY29uc3QgY2xpY2tNaXhpbnMgPSB7XG4gIG9uVG91Y2hTdGFydCxcbiAgb2ZmVG91Y2hTdGFydCxcbiAgb25Ub3VjaE1vdmUsXG4gIG9mZlRvdWNoTW92ZSxcbiAgb25Ub3VjaEVuZCxcbiAgb2ZmVG91Y2hFbmRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsaWNrTWl4aW5zO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBTQ1JPTExfRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9ldmVudFR5cGVzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBvblNjcm9sbChzY3JvbGxIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub25FdmVudChTQ1JPTExfRVZFTlRfVFlQRSwgc2Nyb2xsSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIG9mZlNjcm9sbChzY3JvbGxIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmRXZlbnQoU0NST0xMX0VWRU5UX1RZUEUsIHNjcm9sbEhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIHNjcm9sbFRvKHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCkgeyB0aGlzLmRvbUVsZW1lbnQuc2Nyb2xsVG8oc2Nyb2xsTGVmdCwgc2Nyb2xsVG9wKTsgfSAvLy9cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsVG9wKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnNjcm9sbFRvcDsgfVxuXG5mdW5jdGlvbiBnZXRTY3JvbGxMZWZ0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnNjcm9sbExlZnQ7IH1cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsV2lkdGgoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuc2Nyb2xsV2lkdGg7IH1cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsSGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnNjcm9sbEhlaWdodDsgfVxuXG5mdW5jdGlvbiBzZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKSB7IHRoaXMuZG9tRWxlbWVudC5zY3JvbGxUb3AgPSBzY3JvbGxUb3A7IH1cblxuZnVuY3Rpb24gc2V0U2Nyb2xsTGVmdChzY3JvbGxMZWZ0KSB7IHRoaXMuZG9tRWxlbWVudC5zY3JvbGxMZWZ0ID0gc2Nyb2xsTGVmdDsgfVxuXG5jb25zdCBzY3JvbGxNaXhpbnMgPSB7XG4gIG9uU2Nyb2xsLFxuICBvZmZTY3JvbGwsXG4gIHNjcm9sbFRvLFxuICBnZXRTY3JvbGxUb3AsXG4gIGdldFNjcm9sbExlZnQsXG4gIGdldFNjcm9sbFdpZHRoLFxuICBnZXRTY3JvbGxIZWlnaHQsXG4gIHNldFNjcm9sbFRvcCxcbiAgc2V0U2Nyb2xsTGVmdFxufTtcblxuZXhwb3J0IGRlZmF1bHQgc2Nyb2xsTWl4aW5zO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSRVNJWkVfRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9ldmVudFR5cGVzXCI7XG5cbmZ1bmN0aW9uIG9uUmVzaXplKHJlc2l6ZUhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vbkV2ZW50KFJFU0laRV9FVkVOVF9UWVBFLCByZXNpemVIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvZmZSZXNpemUocmVzaXplSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZkV2ZW50KFJFU0laRV9FVkVOVF9UWVBFLCByZXNpemVIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5jb25zdCByZXNpemVNaXhpbnMgPSB7XG4gIG9uUmVzaXplLFxuICBvZmZSZXNpemVcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlc2l6ZU1peGlucztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRlVMTFNDUkVFTkNIQU5HRV9FVkVOVF9UWVBFIH0gZnJvbSBcIi4uL2V2ZW50VHlwZXNcIjtcblxuZnVuY3Rpb24gb25GdWxsU2NyZWVuQ2hhbmdlKGZ1bGxTY3JlZW5DaGFuZ2VIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub25FdmVudChGVUxMU0NSRUVOQ0hBTkdFX0VWRU5UX1RZUEUsIGZ1bGxTY3JlZW5DaGFuZ2VIYW5kbGVyLCBlbGVtZW50KTsgfSAgLy8vXG5cbmZ1bmN0aW9uIG9mZkZ1bGxTY3JlZW5DaGFuZ2UoZnVsbFNjcmVlbkNoYW5nZUhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vZmZFdmVudChGVUxMU0NSRUVOQ0hBTkdFX0VWRU5UX1RZUEUsIGZ1bGxTY3JlZW5DaGFuZ2VIYW5kbGVyLCBlbGVtZW50KTsgfSAgLy8vXG5cbmZ1bmN0aW9uIHJlcXVlc3RGdWxsU2NyZWVuKGVycm9ySGFuZGxlcikge1xuICBjb25zdCBkb21FbGVtZW50ID0gdGhpcy5nZXRET01FbGVtZW50KCk7XG5cbiAgZG9tRWxlbWVudC5yZXF1ZXN0RnVsbHNjcmVlbigpXG4gICAgLmNhdGNoKGVycm9ySGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIGV4aXRGdWxsU2NyZWVuKCkge1xuICBkb2N1bWVudC5leGl0RnVsbHNjcmVlbigpO1xufVxuXG5mdW5jdGlvbiBpc0Z1bGxTY3JlZW4oKSB7XG4gIGNvbnN0IHsgZnVsbHNjcmVlbkVsZW1lbnQgfSA9IGRvY3VtZW50LFxuICAgICAgICBmdWxsU2NyZWVuID0gKGZ1bGxzY3JlZW5FbGVtZW50ICE9PSBudWxsKTtcblxuICByZXR1cm4gZnVsbFNjcmVlbjtcbn1cblxuY29uc3QgZnVsbHNjcmVlbk1peGlucyA9IHtcbiAgb25GdWxsU2NyZWVuQ2hhbmdlLFxuICBvZmZGdWxsU2NyZWVuQ2hhbmdlLFxuICByZXF1ZXN0RnVsbFNjcmVlbixcbiAgZXhpdEZ1bGxTY3JlZW4sXG4gIGlzRnVsbFNjcmVlblxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVsbHNjcmVlbk1peGlucztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGZvckVhY2goYXJyYXksIG9wZXJhdGlvbiwgZG9uZSwgY29udGV4dCkge1xuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7ICAvLy9cblxuICBsZXQgY291bnQgPSAtMTtcblxuICBmdW5jdGlvbiBuZXh0KCkge1xuICAgIGNvdW50Kys7XG5cbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XG5cbiAgICBpZiAodGVybWluYXRlKSB7XG4gICAgICBkb25lKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cbiAgICAgICAgICAgIGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICAgIG9wZXJhdGlvbihlbGVtZW50LCBuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XG4gICAgfVxuICB9XG5cbiAgbmV4dCgpO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBTUEFDRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGZvckVhY2ggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FzeW5jXCI7XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlcywgY3VzdG9tSGFuZGxlciwgZWxlbWVudCA9IHRoaXMpIHtcbiAgY3VzdG9tRXZlbnRUeXBlcyA9IGN1c3RvbUV2ZW50VHlwZXMuc3BsaXQoU1BBQ0UpOyAvLy9cblxuICBjdXN0b21FdmVudFR5cGVzLmZvckVhY2goKGN1c3RvbUV2ZW50VHlwZSkgPT4ge1xuICAgIHRoaXMuYWRkQ3VzdG9tRXZlbnRMaXN0ZW5lcihjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlcywgY3VzdG9tSGFuZGxlciwgZWxlbWVudCA9IHRoaXMpIHtcbiAgY3VzdG9tRXZlbnRUeXBlcyA9IGN1c3RvbUV2ZW50VHlwZXMuc3BsaXQoU1BBQ0UpOyAvLy9cblxuICBjdXN0b21FdmVudFR5cGVzLmZvckVhY2goKGN1c3RvbUV2ZW50VHlwZSkgPT4ge1xuICAgIHRoaXMucmVtb3ZlQ3VzdG9tRXZlbnRMaXN0ZW5lcihjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2FsbEN1c3RvbUhhbmRsZXJzKGN1c3RvbUV2ZW50VHlwZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50TGlzdGVuZXJzID0gdGhpcy5maW5kQ3VzdG9tRXZlbnRMaXN0ZW5lcnMoY3VzdG9tRXZlbnRUeXBlKTtcblxuICBjdXN0b21FdmVudExpc3RlbmVycy5mb3JFYWNoKChjdXN0b21FdmVudExpc3RlbmVyKSA9PiB7XG4gICAgY29uc3QgeyBjdXN0b21IYW5kbGVyLCBlbGVtZW50OiBjdXN0b21IYW5kbGVyRWxlbWVudCB9ID0gY3VzdG9tRXZlbnRMaXN0ZW5lcjsgLy8vXG5cbiAgICBjdXN0b21IYW5kbGVyLmNhbGwoY3VzdG9tSGFuZGxlckVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjYWxsQ3VzdG9tSGFuZGxlcnNBc3luYyhjdXN0b21FdmVudFR5cGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICBjb25zdCBjdXN0b21FdmVudExpc3RlbmVycyA9IHRoaXMuZmluZEN1c3RvbUV2ZW50TGlzdGVuZXJzKGN1c3RvbUV2ZW50VHlwZSksXG4gICAgICAgIGRvbmUgPSByZW1haW5pbmdBcmd1bWVudHMucG9wKCk7ICAvLy9cblxuICBmb3JFYWNoKGN1c3RvbUV2ZW50TGlzdGVuZXJzLCAoY3VzdG9tRXZlbnRMaXN0ZW5lciwgbmV4dCkgPT4ge1xuICAgIGNvbnN0IHsgY3VzdG9tSGFuZGxlciwgZWxlbWVudDogY3VzdG9tSGFuZGxlckVsZW1lbnQgfSA9IGN1c3RvbUV2ZW50TGlzdGVuZXIsXG4gICAgICAgICAgZG9uZSA9IG5leHQ7ICAvLy9cblxuICAgIGN1c3RvbUhhbmRsZXIuY2FsbChjdXN0b21IYW5kbGVyRWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzLCBkb25lKTtcbiAgfSwgZG9uZSk7XG59XG5cbmZ1bmN0aW9uIGFkZEN1c3RvbUV2ZW50TGlzdGVuZXIoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50TGlzdGVuZXIgPSB0aGlzLmNyZWF0ZUN1c3RvbUV2ZW50TGlzdGVuZXIoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcblxuICBpZiAoIXRoaXMuY3VzdG9tRXZlbnRMaXN0ZW5lcnMpIHtcbiAgICB0aGlzLmN1c3RvbUV2ZW50TGlzdGVuZXJzID0gW107XG4gIH1cblxuICB0aGlzLmN1c3RvbUV2ZW50TGlzdGVuZXJzLnB1c2goY3VzdG9tRXZlbnRMaXN0ZW5lcik7XG5cbiAgcmV0dXJuIGN1c3RvbUV2ZW50TGlzdGVuZXI7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUN1c3RvbUV2ZW50TGlzdGVuZXIoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50TGlzdGVuZXIgPSB0aGlzLmZpbmRDdXN0b21FdmVudExpc3RlbmVyKGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCksXG4gICAgICAgIGluZGV4ID0gdGhpcy5jdXN0b21FdmVudExpc3RlbmVycy5pbmRleE9mKGN1c3RvbUV2ZW50TGlzdGVuZXIpLFxuICAgICAgICBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICB0aGlzLmN1c3RvbUV2ZW50TGlzdGVuZXJzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuXG4gIGlmICh0aGlzLmN1c3RvbUV2ZW50TGlzdGVuZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgIGRlbGV0ZSB0aGlzLmN1c3RvbUV2ZW50TGlzdGVuZXJzO1xuICB9XG5cbiAgcmV0dXJuIGN1c3RvbUV2ZW50TGlzdGVuZXI7XG59XG5cbmZ1bmN0aW9uIGZpbmRDdXN0b21FdmVudExpc3RlbmVyKGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudExpc3RlbmVyID0gdGhpcy5jdXN0b21FdmVudExpc3RlbmVycy5maW5kKChjdXN0b21FdmVudExpc3RlbmVyKSA9PiB7XG4gICAgaWYgKChjdXN0b21FdmVudExpc3RlbmVyLmVsZW1lbnQgPT09IGVsZW1lbnQpICYmIChjdXN0b21FdmVudExpc3RlbmVyLmN1c3RvbUhhbmRsZXIgPT09IGN1c3RvbUhhbmRsZXIpICYmIChjdXN0b21FdmVudExpc3RlbmVyLmN1c3RvbUV2ZW50VHlwZSA9PT0gY3VzdG9tRXZlbnRUeXBlKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gY3VzdG9tRXZlbnRMaXN0ZW5lcjtcbn1cblxuZnVuY3Rpb24gZmluZEN1c3RvbUV2ZW50TGlzdGVuZXJzKGN1c3RvbUV2ZW50VHlwZSkge1xuICBjb25zdCBjdXN0b21FdmVudExpc3RlbmVycyA9IFtdO1xuXG4gIGlmICh0aGlzLmN1c3RvbUV2ZW50TGlzdGVuZXJzKSB7XG4gICAgdGhpcy5jdXN0b21FdmVudExpc3RlbmVycy5mb3JFYWNoKChjdXN0b21FdmVudExpc3RlbmVyKSA9PiB7XG4gICAgICBjb25zdCBmb3VuZCA9IChjdXN0b21FdmVudExpc3RlbmVyLmN1c3RvbUV2ZW50VHlwZSA9PT0gY3VzdG9tRXZlbnRUeXBlKTtcblxuICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgIGN1c3RvbUV2ZW50TGlzdGVuZXJzLnB1c2goY3VzdG9tRXZlbnRMaXN0ZW5lcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gY3VzdG9tRXZlbnRMaXN0ZW5lcnM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUN1c3RvbUV2ZW50TGlzdGVuZXIoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGxldCBjdXN0b21FdmVudExpc3RlbmVyO1xuXG4gIGN1c3RvbUV2ZW50TGlzdGVuZXIgPSAoKSA9PiB7fTsgLy8vXG5cbiAgT2JqZWN0LmFzc2lnbihjdXN0b21FdmVudExpc3RlbmVyLCB7XG4gICAgZWxlbWVudCxcbiAgICBjdXN0b21IYW5kbGVyLFxuICAgIGN1c3RvbUV2ZW50VHlwZVxuICB9KTtcblxuICByZXR1cm4gY3VzdG9tRXZlbnRMaXN0ZW5lcjtcbn1cblxuY29uc3QgY3VzdG9tRXZlbnRNaXhpbnMgPSB7XG4gIG9uQ3VzdG9tRXZlbnQsXG4gIG9mZkN1c3RvbUV2ZW50LFxuICBjYWxsQ3VzdG9tSGFuZGxlcnMsXG4gIGNhbGxDdXN0b21IYW5kbGVyc0FzeW5jLFxuICBhZGRDdXN0b21FdmVudExpc3RlbmVyLFxuICByZW1vdmVDdXN0b21FdmVudExpc3RlbmVyLFxuICBmaW5kQ3VzdG9tRXZlbnRMaXN0ZW5lcixcbiAgZmluZEN1c3RvbUV2ZW50TGlzdGVuZXJzLFxuICBjcmVhdGVDdXN0b21FdmVudExpc3RlbmVyXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjdXN0b21FdmVudE1peGlucztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE9mZnNldCBmcm9tIFwiLi9vZmZzZXRcIjtcbmltcG9ydCBCb3VuZHMgZnJvbSBcIi4vYm91bmRzXCI7XG5pbXBvcnQganN4TWl4aW5zIGZyb20gXCIuL21peGlucy9qc3hcIjtcbmltcG9ydCBrZXlNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2tleVwiO1xuaW1wb3J0IHN0YXRlTWl4aW5zIGZyb20gXCIuL21peGlucy9zdGF0ZVwiO1xuaW1wb3J0IGV2ZW50TWl4aW5zIGZyb20gXCIuL21peGlucy9ldmVudFwiO1xuaW1wb3J0IG1vdXNlTWl4aW5zIGZyb20gXCIuL21peGlucy9tb3VzZVwiO1xuaW1wb3J0IGNsaWNrTWl4aW5zIGZyb20gXCIuL21peGlucy9jbGlja1wiO1xuaW1wb3J0IHRvdWNoTWl4aW5zIGZyb20gXCIuL21peGlucy90b3VjaFwiO1xuaW1wb3J0IHNjcm9sbE1peGlucyBmcm9tIFwiLi9taXhpbnMvc2Nyb2xsXCI7XG5pbXBvcnQgcmVzaXplTWl4aW5zIGZyb20gXCIuL21peGlucy9yZXNpemVcIjtcbmltcG9ydCBlbGVtZW50TWl4aW5zIGZyb20gXCIuL21peGlucy9lbGVtZW50XCI7XG5pbXBvcnQgZnVsbFNjcmVlbk1peGlucyBmcm9tIFwiLi9taXhpbnMvZnVsbFNjcmVlblwiO1xuaW1wb3J0IGN1c3RvbUV2ZW50TWl4aW5zIGZyb20gXCIuL21peGlucy9jdXN0b21FdmVudFwiO1xuXG5pbXBvcnQgeyBhdWdtZW50IH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBjb21iaW5lIH0gZnJvbSBcIi4vdXRpbGl0aWVzL29iamVjdFwiO1xuaW1wb3J0IHsgaXNTVkdUYWdOYW1lIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25hbWVcIjtcbmltcG9ydCB7IGNvbnN0cnVjdEVsZW1lbnQsIGRlc3Ryb3lFbGVtZW50LCBtb3VudEVsZW1lbnQsIHVubW91bnRFbGVtZW50IH0gZnJvbSBcIi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IE5PTkUsXG4gICAgICAgICBCTE9DSyxcbiAgICAgICAgIFdJRFRILFxuICAgICAgICAgU1RSSU5HLFxuICAgICAgICAgSEVJR0hULFxuICAgICAgICAgRElTUExBWSxcbiAgICAgICAgIERJU0FCTEVELFxuICAgICAgICAgRU1QVFlfU1RSSU5HLFxuICAgICAgICAgU1ZHX05BTUVTUEFDRV9VUkksXG4gICAgICAgICBERUZBVUxUX1BST1BFUlRJRVMsXG4gICAgICAgICBJR05PUkVEX1BST1BFUlRJRVMgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yKSB7XG4gICAgaWYgKHNlbGVjdG9yICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID10aGlzLCAgLy8vXG4gICAgICAgICAgICBkb21FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG5cbiAgICAgIGNvbnN0cnVjdEVsZW1lbnQoZWxlbWVudCwgZG9tRWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kb21FbGVtZW50O1xuICB9XG5cbiAgZ2V0T2Zmc2V0KCkge1xuICAgIGNvbnN0IG9mZnNldCA9IE9mZnNldC5mcm9tRE9NRWxlbWVudCh0aGlzLmRvbUVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIG9mZnNldDtcbiAgfVxuXG4gIGdldEJvdW5kcygpIHtcbiAgICBjb25zdCBib3VuZHMgPSBCb3VuZHMuZnJvbURPTUVsZW1lbnQodGhpcy5kb21FbGVtZW50KTtcblxuICAgIHJldHVybiBib3VuZHM7XG4gIH1cblxuICBnZXRXaWR0aCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5vZmZzZXRXaWR0aDsgfSAgLy8vXG5cbiAgZ2V0SGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50Lm9mZnNldEhlaWdodDsgfSAgLy8vXG5cbiAgZ2V0SW5uZXJXaWR0aCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jbGllbnRXaWR0aDsgfSAvLy9cblxuICBnZXRJbm5lckhlaWdodCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jbGllbnRIZWlnaHQ7IH0gLy8vXG5cbiAgc2V0V2lkdGgod2lkdGgpIHtcbiAgICB3aWR0aCA9IGAke3dpZHRofXB4YDsgLy8vXG5cbiAgICB0aGlzLnN0eWxlKFdJRFRILCB3aWR0aCk7XG4gIH1cblxuICBzZXRIZWlnaHQoaGVpZ2h0KSB7XG4gICAgaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDsgLy8vXG5cbiAgICB0aGlzLnN0eWxlKEhFSUdIVCwgaGVpZ2h0KTtcbiAgfVxuXG4gIGhhc0F0dHJpYnV0ZShuYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaGFzQXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgZ2V0QXR0cmlidXRlKG5hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBzZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7IH1cblxuICBjbGVhckF0dHJpYnV0ZShuYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBhZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgdGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpOyB9XG5cbiAgcmVtb3ZlQXR0cmlidXRlKG5hbWUpIHsgdGhpcy5jbGVhckF0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIGhhc0NsYXNzKGNsYXNzTmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpOyB9XG5cbiAgc2V0Q2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc05hbWU7IH1cblxuICBhZGRDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTsgfVxuXG4gIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpOyB9XG5cbiAgdG9nZ2xlQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKGNsYXNzTmFtZSk7IH1cblxuICByZW1vdmVBbGxDbGFzc2VzKCkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gRU1QVFlfU1RSSU5HOyB9XG5cbiAgYWRkVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LmFkZCh0aGlzKTsgfVxuXG4gIGFwcGVuZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5hcHBlbmQodGhpcyk7IH1cblxuICBwcmVwZW5kVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LnByZXBlbmQodGhpcyk7IH1cblxuICByZW1vdmVGcm9tKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5yZW1vdmUodGhpcyk7IH1cblxuICBpbnNlcnQoZWxlbWVudCkgeyB0aGlzLmFwcGVuZChlbGVtZW50KTsgfVxuXG4gIGFkZChlbGVtZW50KSB7IHRoaXMuYXBwZW5kKGVsZW1lbnQpOyB9XG5cbiAgcmVtb3ZlKGVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgZWxlbWVudC5yZW1vdmUoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmUoKTtcbiAgfVxuXG4gIHByZXBlbmQoZWxlbWVudCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQsXG4gICAgICAgICAgcmVmZXJlbmNlRE9NRWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudC5maXJzdENoaWxkOyAgLy8vXG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRvbUVsZW1lbnQsIHJlZmVyZW5jZURPTUVsZW1lbnQpO1xuICB9XG5cbiAgYXBwZW5kKGVsZW1lbnQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZWxlbWVudC5kb21FbGVtZW50LFxuICAgICAgICAgIHJlZmVyZW5jZURPTUVsZW1lbnQgPSBudWxsOyAvLy9cblxuICAgIHRoaXMuZG9tRWxlbWVudC5pbnNlcnRCZWZvcmUoZG9tRWxlbWVudCwgcmVmZXJlbmNlRE9NRWxlbWVudCk7XG4gIH1cblxuICBpbnNlcnRCZWZvcmUoc2libGluZ0VsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01Ob2RlID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudC5wYXJlbnROb2RlLCAvLy9cbiAgICAgICAgICByZWZlcmVuY2VET01FbGVtZW50ID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudDsgIC8vL1xuXG4gICAgcGFyZW50RE9NTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCByZWZlcmVuY2VET01FbGVtZW50KTtcbiAgfVxuXG4gIGluc2VydEFmdGVyKHNpYmxpbmdFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NTm9kZSA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQucGFyZW50Tm9kZSwgLy8vXG4gICAgICAgICAgcmVmZXJlbmNlRE9NRWxlbWVudCA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQubmV4dFNpYmxpbmc7ICAvLy9cblxuICAgIHBhcmVudERPTU5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgcmVmZXJlbmNlRE9NRWxlbWVudCk7XG4gIH1cblxuICBtb3VudChlbGVtZW50KSB7XG4gICAgdGhpcy5hZGQoZWxlbWVudCk7XG5cbiAgICBtb3VudEVsZW1lbnQoZWxlbWVudCk7XG4gIH1cblxuICB1bm1vdW50KGVsZW1lbnQpIHtcbiAgICB1bm1vdW50RWxlbWVudChlbGVtZW50KTtcblxuICAgIHRoaXMucmVtb3ZlKGVsZW1lbnQpO1xuICB9XG5cbiAgbW91bnRCZWZvcmUoc2libGluZ0VsZW1lbnQpIHtcbiAgICB0aGlzLmluc2VydEJlZm9yZShzaWJsaW5nRWxlbWVudCk7XG5cbiAgICBjb25zdCBlbGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICBtb3VudEVsZW1lbnQoZWxlbWVudCk7XG4gIH1cblxuICBtb3VudEFmdGVyKHNpYmxpbmdFbGVtZW50KSB7XG4gICAgdGhpcy5pbnNlcnRBZnRlcihzaWJsaW5nRWxlbWVudCk7XG5cbiAgICBjb25zdCBlbGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICBtb3VudEVsZW1lbnQoZWxlbWVudCk7XG4gIH1cblxuICBzaG93KGRpc3BsYXlTdHlsZSA9IEJMT0NLKSB7IHRoaXMuZGlzcGxheShkaXNwbGF5U3R5bGUpOyB9XG5cbiAgaGlkZSgpIHsgdGhpcy5zdHlsZShESVNQTEFZLCBOT05FKTsgfVxuXG4gIGRpc3BsYXkoZGlzcGxheSkgeyB0aGlzLnN0eWxlKERJU1BMQVksIGRpc3BsYXkpOyB9XG5cbiAgZW5hYmxlKCkgeyB0aGlzLmNsZWFyQXR0cmlidXRlKERJU0FCTEVEKTsgfVxuXG4gIGRpc2FibGUoKSB7IHRoaXMuc2V0QXR0cmlidXRlKERJU0FCTEVELCBESVNBQkxFRCk7IH1cblxuICBpc0VuYWJsZWQoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKSxcbiAgICAgICAgICBlbmFibGVkID0gIWRpc2FibGVkO1xuXG4gICAgcmV0dXJuIGVuYWJsZWQ7XG4gIH1cblxuICBpc0Rpc2FibGVkKCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5oYXNBdHRyaWJ1dGUoRElTQUJMRUQpO1xuXG4gICAgcmV0dXJuIGRpc2FibGVkO1xuICB9XG4gIFxuICBpc0Rpc3BsYXllZCgpIHtcbiAgICBjb25zdCBkaXNwbGF5ID0gdGhpcy5jc3MoRElTUExBWSksXG4gICAgICAgICAgZGlzcGxheWVkID0gKGRpc3BsYXkgIT09IE5PTkUpO1xuICAgIFxuICAgIHJldHVybiBkaXNwbGF5ZWQ7XG4gIH1cblxuICBpc1Nob3dpbmcoKSB7XG4gICAgY29uc3QgZGlzcGxheWVkID0gdGhpcy5pc0Rpc3BsYXllZCgpLFxuICAgICAgICAgIHNob3dpbmcgPSBkaXNwbGF5ZWQ7ICAvLy9cblxuICAgIHJldHVybiBzaG93aW5nO1xuICB9XG5cbiAgaXNIaWRkZW4oKSB7XG4gICAgY29uc3QgZGlzcGxheWVkID0gdGhpcy5pc0Rpc3BsYXllZCgpLFxuICAgICAgICAgIGhpZGRlbiA9ICFkaXNwbGF5ZWQ7XG5cbiAgICByZXR1cm4gaGlkZGVuO1xuICB9XG5cbiAgc3R5bGUobmFtZSwgdmFsdWUgPSBudWxsKSB7XG4gICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQuc3R5bGVbbmFtZV0gPSB2YWx1ZTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHN0eWxlID0gdGhpcy5kb21FbGVtZW50LnN0eWxlW25hbWVdO1xuXG4gICAgcmV0dXJuIHN0eWxlO1xuICB9XG5cbiAgaHRtbChodG1sID0gbnVsbCkge1xuICAgIGlmIChodG1sICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBpbm5lckhUTUwgPSBodG1sOyAvLy9cblxuICAgICAgdGhpcy5kb21FbGVtZW50LmlubmVySFRNTCA9IGlubmVySFRNTFxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaW5uZXJIVE1MID0gdGhpcy5kb21FbGVtZW50LmlubmVySFRNTDtcblxuICAgIGh0bWwgPSBpbm5lckhUTUw7IC8vL1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBjc3MoY3NzID0gbnVsbCkge1xuICAgIGlmIChjc3MgPT09IG51bGwpIHtcbiAgICAgIGNzcyA9IHt9O1xuXG4gICAgICBjb25zdCBjb21wdXRlZFN0eWxlcyA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5kb21FbGVtZW50KTsgLy8vXG5cbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb21wdXRlZFN0eWxlcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IGNvbXB1dGVkU3R5bGVzW2luZGV4XSxcbiAgICAgICAgICAgICAgbmFtZSA9IGNvbXB1dGVkU3R5bGUsICAvLy9cbiAgICAgICAgICAgICAgdmFsdWUgPSBjb21wdXRlZFN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpOyAvLy9cblxuICAgICAgICBjc3NbbmFtZV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjc3MgPT09IFNUUklORykge1xuICAgICAgbGV0IG5hbWUgPSBjc3M7IC8vL1xuXG4gICAgICBjb25zdCBjb21wdXRlZFN0eWxlcyA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5kb21FbGVtZW50KSwgLy8vXG4gICAgICAgICAgICB2YWx1ZSA9IGNvbXB1dGVkU3R5bGVzLmdldFByb3BlcnR5VmFsdWUobmFtZSk7IC8vL1xuXG4gICAgICBjc3MgPSB2YWx1ZTsgIC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBuYW1lcyA9IE9iamVjdC5rZXlzKGNzcyk7IC8vL1xuXG4gICAgICBuYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gY3NzW25hbWVdO1xuXG4gICAgICAgIHRoaXMuc3R5bGUobmFtZSwgdmFsdWUpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXM7IC8vL1xuXG4gICAgZGVzdHJveUVsZW1lbnQoZWxlbWVudCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB7IHRhZ05hbWUgfSA9IENsYXNzLFxuICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50RnJvbVRhZ05hbWUoQ2xhc3MsIHRhZ05hbWUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyksXG4gICAgICAgICAgZGVmYXVsdFByb3BlcnRpZXMgPSBkZWZhdWx0UHJvcGVydGllc0Zyb21DbGFzcyhDbGFzcyksXG4gICAgICAgICAgaWdub3JlZFByb3BlcnRpZXMgPSBpZ25vcmVkUHJvcGVydGllc0Zyb21DbGFzcyhDbGFzcyk7XG5cbiAgICBlbGVtZW50LmFwcGx5UHJvcGVydGllcyhwcm9wZXJ0aWVzLCBkZWZhdWx0UHJvcGVydGllcywgaWdub3JlZFByb3BlcnRpZXMpO1xuXG4gICAgZWxlbWVudC5pbml0aWFsaXNlICYmIGVsZW1lbnQuaW5pdGlhbGlzZSgpOyAvLy9cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21UYWdOYW1lKHRhZ05hbWUsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IENsYXNzID0gRWxlbWVudCwgIC8vL1xuICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50RnJvbVRhZ05hbWUoQ2xhc3MsIHRhZ05hbWUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyksXG4gICAgICAgICAgZGVmYXVsdFByb3BlcnRpZXMgPSB7fSwgLy8vXG4gICAgICAgICAgaWdub3JlZFByb3BlcnRpZXMgPSBbXTsgLy8vXG5cbiAgICBlbGVtZW50LmFwcGx5UHJvcGVydGllcyhwcm9wZXJ0aWVzLCBkZWZhdWx0UHJvcGVydGllcywgaWdub3JlZFByb3BlcnRpZXMpO1xuXG4gICAgZWxlbWVudC5pbml0aWFsaXNlICYmIGVsZW1lbnQuaW5pdGlhbGlzZSgpOyAvLy9cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGpzeE1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBrZXlNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgbW91c2VNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgY2xpY2tNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgc3RhdGVNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgZXZlbnRNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgdG91Y2hNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgc2Nyb2xsTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIHJlc2l6ZU1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBlbGVtZW50TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGZ1bGxTY3JlZW5NaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgY3VzdG9tRXZlbnRNaXhpbnMpO1xuXG5mdW5jdGlvbiBlbGVtZW50RnJvbVRhZ05hbWUoQ2xhc3MsIHRhZ05hbWUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICBjb25zdCBzZWxlY3RvciA9IG51bGwsXG4gICAgICAgIGVsZW1lbnQgPSBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmNhbGwoQ2xhc3MsIG51bGwsIHNlbGVjdG9yLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpKSxcbiAgICAgICAgZG9tRWxlbWVudCA9IGlzU1ZHVGFnTmFtZSh0YWdOYW1lKSA/XG4gICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhTVkdfTkFNRVNQQUNFX1VSSSwgdGFnTmFtZSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG5cbiAgY29uc3RydWN0RWxlbWVudChlbGVtZW50LCBkb21FbGVtZW50KTtcblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdFByb3BlcnRpZXNGcm9tQ2xhc3MoQ2xhc3MsIGRlZmF1bHRQcm9wZXJ0aWVzID0ge30pIHtcbiAgaWYgKENsYXNzLmhhc093blByb3BlcnR5KERFRkFVTFRfUFJPUEVSVElFUykpIHtcbiAgICBkZWZhdWx0UHJvcGVydGllcyA9IGNvbWJpbmUoZGVmYXVsdFByb3BlcnRpZXMsIENsYXNzW0RFRkFVTFRfUFJPUEVSVElFU10pO1xuICB9XG5cbiAgY29uc3Qgc3VwZXJDbGFzcyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihDbGFzcyk7ICAvLy9cblxuICBpZiAoc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIGRlZmF1bHRQcm9wZXJ0aWVzID0gZGVmYXVsdFByb3BlcnRpZXNGcm9tQ2xhc3Moc3VwZXJDbGFzcywgZGVmYXVsdFByb3BlcnRpZXMpO1xuICB9XG5cbiAgcmV0dXJuIGRlZmF1bHRQcm9wZXJ0aWVzO1xufVxuXG5mdW5jdGlvbiBpZ25vcmVkUHJvcGVydGllc0Zyb21DbGFzcyhDbGFzcywgaWdub3JlZFByb3BlcnRpZXMgPSBbXSkge1xuICBpZiAoQ2xhc3MuaGFzT3duUHJvcGVydHkoSUdOT1JFRF9QUk9QRVJUSUVTKSkge1xuICAgIGlnbm9yZWRQcm9wZXJ0aWVzID0gYXVnbWVudChpZ25vcmVkUHJvcGVydGllcywgQ2xhc3NbSUdOT1JFRF9QUk9QRVJUSUVTXSwgKGlnbm9yZWRQcm9wZXJ0eSkgPT4ge1xuICAgICAgaWYgKCFpZ25vcmVkUHJvcGVydGllcy5pbmNsdWRlcyhpZ25vcmVkUHJvcGVydHkpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY29uc3Qgc3VwZXJDbGFzcyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihDbGFzcyk7XG5cbiAgaWYgKHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICBpZ25vcmVkUHJvcGVydGllcyA9IGlnbm9yZWRQcm9wZXJ0aWVzRnJvbUNsYXNzKHN1cGVyQ2xhc3MsIGlnbm9yZWRQcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIHJldHVybiBpZ25vcmVkUHJvcGVydGllcztcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4vZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBmbGF0dGVuIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBTVFJJTkcsIEZVTkNUSU9OIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyByZW1vdmVGYWxzZXlFbGVtZW50cywgcmVwbGFjZVN0cmluZ3NXaXRoVGV4dEVsZW1lbnRzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2VsZW1lbnRzXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoZmlyc3RBcmd1bWVudCwgcHJvcGVydGllcywgLi4uY2hpbGRFbGVtZW50cykge1xuICBsZXQgZWxlbWVudCA9IG51bGw7XG5cbiAgaWYgKGZpcnN0QXJndW1lbnQpIHtcbiAgICBjaGlsZEVsZW1lbnRzID0gc2FuaXRpc2VDaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpO1xuXG4gICAgcHJvcGVydGllcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY2hpbGRFbGVtZW50c1xuICAgIH0sIHByb3BlcnRpZXMpO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKEVsZW1lbnQuaXNQcm90b3R5cGVPZihmaXJzdEFyZ3VtZW50KSkge1xuICAgICAgY29uc3QgQ2xhc3MgPSBmaXJzdEFyZ3VtZW50OyAgLy8vXG5cbiAgICAgIGVsZW1lbnQgPSBDbGFzcy5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09IFNUUklORykge1xuICAgICAgY29uc3QgdGFnTmFtZSA9IGZpcnN0QXJndW1lbnQ7IC8vL1xuXG4gICAgICBlbGVtZW50ID0gRWxlbWVudC5mcm9tVGFnTmFtZSh0YWdOYW1lLCBwcm9wZXJ0aWVzKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSBGVU5DVElPTikge1xuICAgICAgY29uc3QgZWxlbWVudEZ1bmN0aW9uID0gZmlyc3RBcmd1bWVudDsgIC8vL1xuXG4gICAgICBlbGVtZW50ID0gZWxlbWVudEZ1bmN0aW9uKHByb3BlcnRpZXMpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5jb25zdCBSZWFjdCA9IHtcbiAgY3JlYXRlRWxlbWVudFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3Q7XG5cbmZ1bmN0aW9uIHNhbml0aXNlQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKSB7XG4gIGNoaWxkRWxlbWVudHMgPSBmbGF0dGVuKGNoaWxkRWxlbWVudHMpOyAvLy9cblxuICBjaGlsZEVsZW1lbnRzID0gcmVtb3ZlRmFsc2V5RWxlbWVudHMoY2hpbGRFbGVtZW50cyk7ICAvLy9cblxuICBjaGlsZEVsZW1lbnRzID0gcmVwbGFjZVN0cmluZ3NXaXRoVGV4dEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpOyAgLy8vXG5cbiAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBMRUZUX01PVVNFX0JVVFRPTiA9IDA7XG5leHBvcnQgY29uc3QgUklHSFRfTU9VU0VfQlVUVE9OID0gMjtcbmV4cG9ydCBjb25zdCBNSURETEVfTU9VU0VfQlVUVE9OID0gMTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBMRUZUX01PVVNFX0JVVFRPTixcbiAgUklHSFRfTU9VU0VfQlVUVE9OLFxuICBNSURETEVfTU9VU0VfQlVUVE9OXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBJTlBVVF9FVkVOVF9UWVBFLCBDSEFOR0VfRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9ldmVudFR5cGVzXCI7XG5cbmZ1bmN0aW9uIG9uSW5wdXQoaW5wdXRIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub25FdmVudChJTlBVVF9FVkVOVF9UWVBFLCBpbnB1dEhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9mZklucHV0KGlucHV0SGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZkV2ZW50KElOUFVUX0VWRU5UX1RZUEUsIGlucHV0SGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb25DaGFuZ2UoY2hhbmdlSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uRXZlbnQoQ0hBTkdFX0VWRU5UX1RZUEUsIGNoYW5nZUhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9mZkNoYW5nZShjaGFuZ2VIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmRXZlbnQoQ0hBTkdFX0VWRU5UX1RZUEUsIGNoYW5nZUhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIGdldFZhbHVlKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnZhbHVlOyB9XG5cbmZ1bmN0aW9uIHNldFZhbHVlKHZhbHVlKSB7IHRoaXMuZG9tRWxlbWVudC52YWx1ZSA9IHZhbHVlOyB9XG5cbmZ1bmN0aW9uIGlzUmVhZE9ubHkoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQucmVhZE9ubHk7IH1cblxuZnVuY3Rpb24gc2V0UmVhZE9ubHkocmVhZE9ubHkpIHsgdGhpcy5kb21FbGVtZW50LnJlYWRPbmx5ID0gcmVhZE9ubHk7IH1cblxuY29uc3QgaW5wdXRNaXhpbnMgPSB7XG4gIG9uSW5wdXQsXG4gIG9mZklucHV0LFxuICBvbkNoYW5nZSxcbiAgb2ZmQ2hhbmdlLFxuICBnZXRWYWx1ZSxcbiAgc2V0VmFsdWUsXG4gIGlzUmVhZE9ubHksXG4gIHNldFJlYWRPbmx5XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbnB1dE1peGlucztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQkxVUl9FVkVOVF9UWVBFLCBGT0NVU19FVkVOVF9UWVBFIH0gZnJvbSBcIi4uL2V2ZW50VHlwZXNcIjtcblxuZnVuY3Rpb24gb25CbHVyKGJsdXJIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub25FdmVudChCTFVSX0VWRU5UX1RZUEUsIGJsdXJIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvZmZCbHVyKGJsdXJIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmRXZlbnQoQkxVUl9FVkVOVF9UWVBFLCBibHVySGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb25Gb2N1cyhmb2N1c0hhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vbkV2ZW50KEZPQ1VTX0VWRU5UX1RZUEUsIGZvY3VzSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb2ZmRm9jdXMoZm9jdXNIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmRXZlbnQoRk9DVVNfRVZFTlRfVFlQRSwgZm9jdXNIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBibHVyKCkgeyB0aGlzLmRvbUVsZW1lbnQuYmx1cigpOyB9XG5cbmZ1bmN0aW9uIGZvY3VzKCkgeyB0aGlzLmRvbUVsZW1lbnQuZm9jdXMoKTsgfVxuXG5mdW5jdGlvbiBoYXNGb2N1cygpIHtcbiAgY29uc3QgZm9jdXMgPSAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gdGhpcy5kb21FbGVtZW50KTsgIC8vL1xuXG4gIHJldHVybiBmb2N1cztcbn1cblxuY29uc3QgZm9jdXNNaXhpbnMgPSB7XG4gIG9uQmx1cixcbiAgb2ZmQmx1cixcbiAgb25Gb2N1cyxcbiAgb2ZmRm9jdXMsXG4gIGJsdXIsXG4gIGZvY3VzLFxuICBoYXNGb2N1c1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9jdXNNaXhpbnM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENVVF9FVkVOVF9UWVBFLCBDT1BZX0VWRU5UX1RZUEUsIFBBU1RFX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi4vZXZlbnRUeXBlc1wiO1xuXG5mdW5jdGlvbiBvbkN1dChjdXRIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub25FdmVudChDVVRfRVZFTlRfVFlQRSwgY3V0SGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb2ZmQ3V0KGN1dEhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vZmZFdmVudChDVVRfRVZFTlRfVFlQRSwgY3V0SGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb25Db3B5KGNvcHlIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub25FdmVudChDT1BZX0VWRU5UX1RZUEUsIGNvcHlIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvZmZDb3B5KGNvcHlIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmRXZlbnQoQ09QWV9FVkVOVF9UWVBFLCBjb3B5SGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb25QYXN0ZShwYXN0ZUhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vbkV2ZW50KFBBU1RFX0VWRU5UX1RZUEUsIHBhc3RlSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb2ZmUGFzdGUocGFzdGVIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmRXZlbnQoUEFTVEVfRVZFTlRfVFlQRSwgcGFzdGVIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBnZXRTZWxlY3Rpb25TdGFydCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5zZWxlY3Rpb25TdGFydDsgfVxuXG5mdW5jdGlvbiBnZXRTZWxlY3Rpb25FbmQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0aW9uRW5kOyB9XG5cbmZ1bmN0aW9uIHNldFNlbGVjdGlvblN0YXJ0KHNlbGVjdGlvblN0YXJ0KSB7IHRoaXMuZG9tRWxlbWVudC5zZWxlY3Rpb25TdGFydCA9IHNlbGVjdGlvblN0YXJ0OyB9XG5cbmZ1bmN0aW9uIHNldFNlbGVjdGlvbkVuZChzZWxlY3Rpb25FbmQpIHsgdGhpcy5kb21FbGVtZW50LnNlbGVjdGlvbkVuZCA9IHNlbGVjdGlvbkVuZDsgfVxuXG5mdW5jdGlvbiBzZWxlY3QoKSB7IHRoaXMuZG9tRWxlbWVudC5zZWxlY3QoKTsgfVxuXG5jb25zdCBzZWxlY3Rpb25NaXhpbnMgPSB7XG4gIG9uQ3V0LFxuICBvZmZDdXQsXG4gIG9uQ29weSxcbiAgb2ZmQ29weSxcbiAgb25QYXN0ZSxcbiAgb2ZmUGFzdGUsXG4gIGdldFNlbGVjdGlvblN0YXJ0LFxuICBnZXRTZWxlY3Rpb25FbmQsXG4gIHNldFNlbGVjdGlvblN0YXJ0LFxuICBzZXRTZWxlY3Rpb25FbmQsXG4gIHNlbGVjdFxufTtcblxuZXhwb3J0IGRlZmF1bHQgc2VsZWN0aW9uTWl4aW5zO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQga2V5TWl4aW5zIGZyb20gXCIuL21peGlucy9rZXlcIjtcbmltcG9ydCBldmVudE1peGlucyBmcm9tIFwiLi9taXhpbnMvZXZlbnRcIjtcbmltcG9ydCBtb3VzZU1peGlucyBmcm9tIFwiLi9taXhpbnMvbW91c2VcIjtcbmltcG9ydCBjbGlja01peGlucyBmcm9tIFwiLi9taXhpbnMvY2xpY2tcIjtcblxuaW1wb3J0IHsgVU5ERUZJTkVEIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBTRUxFQ1RJT05DSEFOR0VfRVZFTlRfVFlQRSB9IGZyb20gXCIuL2V2ZW50VHlwZXNcIjtcblxuY2xhc3MgRG9jdW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb2N1bWVudDsgLy8vXG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRTZWxlY3Rpb24oKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuZ2V0U2VsZWN0aW9uKCk7IH1cblxuICBjcmVhdGVSYW5nZSgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jcmVhdGVSYW5nZSgpOyB9XG5cbiAgY3JlYXRlVGV4dE5vZGUoZGF0YSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNyZWF0ZVRleHROb2RlKGRhdGEpOyB9XG5cbiAgb25TZWxlY3Rpb25DaGFuZ2Uoc2VsZWN0aW9uQ2hhbmdlSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uRXZlbnQoU0VMRUNUSU9OQ0hBTkdFX0VWRU5UX1RZUEUsIHNlbGVjdGlvbkNoYW5nZUhhbmRsZXIsIGVsZW1lbnQpOyB9IC8vL1xuXG4gIG9mZlNlbGVjdGlvbkNoYW5nZShzZWxlY3Rpb25DaGFuZ2VIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmRXZlbnQoU0VMRUNUSU9OQ0hBTkdFX0VWRU5UX1RZUEUsIHNlbGVjdGlvbkNoYW5nZUhhbmRsZXIsIGVsZW1lbnQpOyB9IC8vL1xuXG4gIGNyZWF0ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KSB7XG4gICAgbGV0IGV2ZW50TGlzdGVuZXI7XG5cbiAgICBjb25zdCBoYW5kbGVyRWxlbWVudCA9IGVsZW1lbnQ7IC8vL1xuXG4gICAgZXZlbnRMaXN0ZW5lciA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50VHlwZSA9PT0gU0VMRUNUSU9OQ0hBTkdFX0VWRU5UX1RZUEUpIHtcbiAgICAgICAgY29uc3QgeyBkb21FbGVtZW50IH0gPSBoYW5kbGVyRWxlbWVudCxcbiAgICAgICAgICAgICAgeyBjdXJyZW50VGFyZ2V0IH0gPSBldmVudCxcbiAgICAgICAgICAgICAgeyBhY3RpdmVFbGVtZW50IH0gPSBjdXJyZW50VGFyZ2V0O1xuXG4gICAgICAgIGlmIChkb21FbGVtZW50ICE9PSBhY3RpdmVFbGVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgICAgaGFuZGxlci5jYWxsKGhhbmRsZXJFbGVtZW50LCBldmVudCwgZWxlbWVudCk7XG4gICAgfTtcblxuICAgIE9iamVjdC5hc3NpZ24oZXZlbnRMaXN0ZW5lciwge1xuICAgICAgZWxlbWVudCxcbiAgICAgIGhhbmRsZXIsXG4gICAgICBldmVudFR5cGVcbiAgICB9KTtcblxuICAgIHJldHVybiBldmVudExpc3RlbmVyO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oRG9jdW1lbnQucHJvdG90eXBlLCBrZXlNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihEb2N1bWVudC5wcm90b3R5cGUsIGV2ZW50TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRG9jdW1lbnQucHJvdG90eXBlLCBtb3VzZU1peGlucyk7XG5PYmplY3QuYXNzaWduKERvY3VtZW50LnByb3RvdHlwZSwgY2xpY2tNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCAodHlwZW9mIGRvY3VtZW50ID09PSBVTkRFRklORUQpID8gdW5kZWZpbmVkIDogbmV3IERvY3VtZW50KCk7ICAvLy9cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGtleU1peGlucyBmcm9tIFwiLi9taXhpbnMva2V5XCI7XG5pbXBvcnQgZXZlbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2V2ZW50XCI7XG5pbXBvcnQgbW91c2VNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL21vdXNlXCI7XG5pbXBvcnQgY2xpY2tNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2NsaWNrXCI7XG5pbXBvcnQgZm9jdXNNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2ZvY3VzXCI7XG5cbmltcG9ydCB7IFVOREVGSU5FRCB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgUkVTSVpFX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi9ldmVudFR5cGVzXCI7XG5pbXBvcnQgeyBvblNjcm9sbCwgb2ZmU2Nyb2xsIH0gZnJvbSBcIi4vbWl4aW5zL3Njcm9sbFwiO1xuXG5jbGFzcyBXaW5kb3cge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSB3aW5kb3c7IC8vL1xuICB9XG5cbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kb21FbGVtZW50O1xuICB9XG5cbiAgYXNzaWduKC4uLnNvdXJjZXMpIHtcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzLmRvbUVsZW1lbnQ7IC8vL1xuXG4gICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIC4uLnNvdXJjZXMpO1xuICB9XG5cbiAgcmVsb2FkKCkge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTsgLy8vXG4gIH1cblxuICBnZXRXaWR0aCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5pbm5lcldpZHRoOyB9IC8vL1xuICBcbiAgZ2V0SGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmlubmVySGVpZ2h0OyB9IC8vL1xuXG4gIGdldFNjcm9sbFRvcCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5wYWdlWU9mZnNldDsgfSAgLy8vXG5cbiAgZ2V0U2Nyb2xsTGVmdCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5wYWdlWE9mZnNldDsgfSAvLy9cblxuICBnZXRTZWxlY3Rpb24oKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuZ2V0U2VsZWN0aW9uKCk7IH1cblxuICBnZXRTY3JlZW5XaWR0aCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5zY3JlZW4ud2lkdGg7IH1cblxuICBnZXRTY3JlZW5IZWlnaHQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuc2NyZWVuLmhlaWdodDsgfVxuXG4gIHNjcm9sbFRvKHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCkgeyB0aGlzLmRvbUVsZW1lbnQuc2Nyb2xsVG8oc2Nyb2xsTGVmdCwgc2Nyb2xsVG9wKTsgfVxuXG4gIG9uUmVzaXplKHJlc2l6ZUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBSRVNJWkVfRVZFTlRfVFlQRSxcbiAgICAgICAgICBldmVudExpc3RlbmVyID0gdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgcmVzaXplSGFuZGxlciwgZWxlbWVudCk7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGV2ZW50TGlzdGVuZXIpO1xuICB9XG5cbiAgb2ZmUmVzaXplKHJlc2l6ZUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBSRVNJWkVfRVZFTlRfVFlQRSxcbiAgICAgICAgICBldmVudExpc3RlbmVyID0gdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgcmVzaXplSGFuZGxlciwgZWxlbWVudCk7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGV2ZW50TGlzdGVuZXIpO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwga2V5TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwgZXZlbnRNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihXaW5kb3cucHJvdG90eXBlLCBtb3VzZU1peGlucyk7XG5PYmplY3QuYXNzaWduKFdpbmRvdy5wcm90b3R5cGUsIGNsaWNrTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwgZm9jdXNNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihXaW5kb3cucHJvdG90eXBlLCB7XG4gIG9uU2Nyb2xsLFxuICBvZmZTY3JvbGxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCAodHlwZW9mIHdpbmRvdyA9PT0gVU5ERUZJTkVEKSA/IHVuZGVmaW5lZCA6IG5ldyBXaW5kb3coKTsgIC8vL1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBCT0RZIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb2R5IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yID0gQk9EWSkge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJib2R5XCI7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgZm9jdXNNaXhpbnMgZnJvbSBcIi4uL21peGlucy9mb2N1c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5rIGV4dGVuZHMgRWxlbWVudCB7XG4gIGdldEhyZWYoKSB7IHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZShcImhyZWZcIik7IH1cblxuICBzZXRIcmVmKGhyZWYpIHsgcmV0dXJuIHRoaXMuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBocmVmKTsgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJhXCI7XG59XG5cbk9iamVjdC5hc3NpZ24oTGluay5wcm90b3R5cGUsIGZvY3VzTWl4aW5zKTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcbmltcG9ydCBpbnB1dE1peGlucyBmcm9tIFwiLi4vbWl4aW5zL2lucHV0XCI7XG5pbXBvcnQgZm9jdXNNaXhpbnMgZnJvbSBcIi4uL21peGlucy9mb2N1c1wiO1xuaW1wb3J0IHNlbGVjdGlvbk1peGlucyBmcm9tIFwiLi4vbWl4aW5zL3NlbGVjdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dCBleHRlbmRzIEVsZW1lbnQge1xuICBzdGF0aWMgdGFnTmFtZSA9IFwiaW5wdXRcIjtcbn1cblxuT2JqZWN0LmFzc2lnbihJbnB1dC5wcm90b3R5cGUsIGlucHV0TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oSW5wdXQucHJvdG90eXBlLCBmb2N1c01peGlucyk7XG5PYmplY3QuYXNzaWduKElucHV0LnByb3RvdHlwZSwgc2VsZWN0aW9uTWl4aW5zKTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcbmltcG9ydCBmb2N1c01peGlucyBmcm9tIFwiLi4vbWl4aW5zL2ZvY3VzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIEVsZW1lbnQge1xuICBzdGF0aWMgdGFnTmFtZSA9IFwiYnV0dG9uXCI7XG59XG5cbk9iamVjdC5hc3NpZ24oQnV0dG9uLnByb3RvdHlwZSwgZm9jdXNNaXhpbnMpO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IGlucHV0TWl4aW5zIGZyb20gXCIuLi9taXhpbnMvaW5wdXRcIjtcbmltcG9ydCBmb2N1c01peGlucyBmcm9tIFwiLi4vbWl4aW5zL2ZvY3VzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdCBleHRlbmRzIEVsZW1lbnQge1xuICBzdGF0aWMgdGFnTmFtZSA9IFwic2VsZWN0XCI7XG59XG5cbk9iamVjdC5hc3NpZ24oU2VsZWN0LnByb3RvdHlwZSwgaW5wdXRNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihTZWxlY3QucHJvdG90eXBlLCBmb2N1c01peGlucyk7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgaW5wdXRNaXhpbnMgZnJvbSBcIi4uL21peGlucy9pbnB1dFwiO1xuaW1wb3J0IGZvY3VzTWl4aW5zIGZyb20gXCIuLi9taXhpbnMvZm9jdXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hlY2tib3ggZXh0ZW5kcyBFbGVtZW50IHtcbiAgaXNDaGVja2VkKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNoZWNrZWQ7IH1cblxuICBjaGVjayhjaGVja2VkID0gdHJ1ZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2hlY2tlZCA9IGNoZWNrZWQ7IH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiaW5wdXRcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgdHlwZTogXCJjaGVja2JveFwiXG4gIH07XG59XG5cbk9iamVjdC5hc3NpZ24oQ2hlY2tib3gucHJvdG90eXBlLCBpbnB1dE1peGlucyk7XG5PYmplY3QuYXNzaWduKENoZWNrYm94LnByb3RvdHlwZSwgZm9jdXNNaXhpbnMpO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IGlucHV0TWl4aW5zIGZyb20gXCIuLi9taXhpbnMvaW5wdXRcIjtcbmltcG9ydCBmb2N1c01peGlucyBmcm9tIFwiLi4vbWl4aW5zL2ZvY3VzXCI7XG5pbXBvcnQgc2VsZWN0aW9uTWl4aW5zIGZyb20gXCIuLi9taXhpbnMvc2VsZWN0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRhcmVhIGV4dGVuZHMgRWxlbWVudCB7XG4gIHN0YXRpYyB0YWdOYW1lID0gXCJ0ZXh0YXJlYVwiO1xufVxuXG5PYmplY3QuYXNzaWduKFRleHRhcmVhLnByb3RvdHlwZSwgaW5wdXRNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihUZXh0YXJlYS5wcm90b3R5cGUsIGZvY3VzTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oVGV4dGFyZWEucHJvdG90eXBlLCBzZWxlY3Rpb25NaXhpbnMpO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIFJlYWN0IH0gZnJvbSBcIi4vcmVhY3RcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQm91bmRzIH0gZnJvbSBcIi4vYm91bmRzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE9mZnNldCB9IGZyb20gXCIuL29mZnNldFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBldmVudFR5cGVzIH0gZnJvbSBcIi4vZXZlbnRUeXBlc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBtb3VzZUJ1dHRvbnMgfSBmcm9tIFwiLi9tb3VzZUJ1dHRvbnNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZWxlbWVudFV0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9lbGVtZW50XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGlucHV0TWl4aW5zIH0gZnJvbSBcIi4vbWl4aW5zL2lucHV0XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGZvY3VzTWl4aW5zIH0gZnJvbSBcIi4vbWl4aW5zL2ZvY3VzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHNlbGVjdGlvbk1peGlucyB9IGZyb20gXCIuL21peGlucy9zZWxlY3Rpb25cIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY3VzdG9tRXZlbnRNaXhpbnMgfSBmcm9tIFwiLi9taXhpbnMvY3VzdG9tRXZlbnRcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRWxlbWVudCB9IGZyb20gXCIuL2VsZW1lbnRcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVGV4dEVsZW1lbnQgfSBmcm9tIFwiLi90ZXh0RWxlbWVudFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBkb2N1bWVudCB9IGZyb20gXCIuL2RvY3VtZW50XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpbmRvdyB9IGZyb20gXCIuL3dpbmRvd1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBCb2R5IH0gZnJvbSBcIi4vZWxlbWVudC9ib2R5XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIExpbmsgfSBmcm9tIFwiLi9lbGVtZW50L2xpbmtcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSW5wdXQgfSBmcm9tIFwiLi9lbGVtZW50L2lucHV0XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEJ1dHRvbiB9IGZyb20gXCIuL2VsZW1lbnQvYnV0dG9uXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlbGVjdCB9IGZyb20gXCIuL2VsZW1lbnQvc2VsZWN0XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENoZWNrYm94IH0gZnJvbSBcIi4vZWxlbWVudC9jaGVja2JveFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUZXh0YXJlYSB9IGZyb20gXCIuL2VsZW1lbnQvdGV4dGFyZWFcIjtcblxuXG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcImVhc3lcIjtcblxuT2JqZWN0LmFzc2lnbihnbG9iYWxUaGlzLCB7XG4gIFJlYWN0XG59KTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFwiLi9qdXh0YXBvc2VcIjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgY29udHJvbGxlciA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBjb250cm9sbGVyO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgRVJST1JfREVMQVkgPSAxMDAwO1xuZXhwb3J0IGNvbnN0IEVNUFRZX1NUUklORyA9IFwiXCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IElucHV0RWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFzc3dvcmRJbnB1dCBleHRlbmRzIElucHV0RWxlbWVudCB7XG4gIGdldFBhc3N3b3JkKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIHBhc3N3b3JkID0gdmFsdWU7IC8vL1xuXG4gICAgcmV0dXJuIHBhc3N3b3JkO1xuICB9XG5cbiAgY2xlYXJQYXNzd29yZCgpIHtcbiAgICBjb25zdCBwYXNzd29yZCA9IEVNUFRZX1NUUklORyxcbiAgICAgICAgICB2YWx1ZSA9IHBhc3N3b3JkOyAvLy9cblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcblx0ICBjb25zdCBnZXRQYXNzd29yZCA9IHRoaXMuZ2V0UGFzc3dvcmQuYmluZCh0aGlzKSxcblx0XHRcdFx0ICBjbGVhclBhc3N3b3JkID0gdGhpcy5jbGVhclBhc3N3b3JkLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldFBhc3N3b3JkLFxuICAgICAgY2xlYXJQYXNzd29yZFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImlucHV0XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIHR5cGU6IFwicGFzc3dvcmRcIlxuICB9O1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HLCBFUlJPUl9ERUxBWSB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmFsaWRhdGlvbkVycm9yUGFyYWdyYXBoIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCB0aW1lb3V0KSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgdGhpcy50aW1lb3V0ID0gdGltZW91dDtcbiAgfVxuXG4gIGNsZWFyVmFsaWRhdGlvbkVycm9yKCkge1xuICAgIGNvbnN0IGh0bWwgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICB0aGlzLmh0bWwoaHRtbCk7XG4gIH1cblxuICBzaG93VmFsaWRhdGlvbkVycm9yKHZhbGlkYXRpb25FcnJvcikge1xuICAgIGNvbnN0IGh0bWwgPSB2YWxpZGF0aW9uRXJyb3I7IC8vL1xuXG4gICAgdGhpcy5odG1sKGh0bWwpO1xuXG4gICAgaWYgKHRoaXMudGltZW91dCAhPT0gbnVsbCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgfVxuXG4gICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnRpbWVvdXQgPSBudWxsO1xuXG4gICAgICB0aGlzLmNsZWFyVmFsaWRhdGlvbkVycm9yKCk7XG4gICAgfSwgRVJST1JfREVMQVkpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICByZXR1cm4gKHtcbiAgICAgIHNob3dWYWxpZGF0aW9uRXJyb3I6IHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvci5iaW5kKHRoaXMpXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwicFwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmFsaWRhdGlvbiBlcnJvclwiXG4gIH07XG5cbiAgc3RhdGljIGZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgdGltZW91dCA9IG51bGwsXG4gICAgICAgICAgdmFsaWRhdGlvbkVycm9yUGFyYWdyYXBoID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIHRpbWVvdXQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gdmFsaWRhdGlvbkVycm9yUGFyYWdyYXBoO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQsIEJ1dHRvbiB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBjb250cm9sbGVyIGZyb20gXCIuLi8uLi9jb250cm9sbGVyXCI7XG5pbXBvcnQgUGFzc3dvcmRJbnB1dCBmcm9tIFwiLi4vaW5wdXQvcGFzc3dvcmRcIjtcbmltcG9ydCBWYWxpZGF0aW9uRXJyb3JQYXJhZ3JhcGggZnJvbSBcIi4uL3BhcmFncmFwaC92YWxpZGF0aW9uRXJyb3JcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXNzd29yZEZvcm0gZXh0ZW5kcyBFbGVtZW50IHtcbiAgdmFsaWRhdGVBbmRTdWJtaXRGb3JtKCkge1xuICAgIGNvbnN0IHBhc3N3b3JkVmFsaWQgPSB0aGlzLnZhbGlkYXRlRm9ybSgpO1xuXG4gICAgaWYgKCFwYXNzd29yZFZhbGlkKSB7XG4gICAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3IoXCJUaGUgcGFzc3dvcmQgaXMgaW52YWxpZFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdWJtaXRGb3JtKCk7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGVGb3JtKCkge1xuICAgIGNvbnN0IHBhc3N3b3JkID0gdGhpcy5nZXRQYXNzd29yZCgpLFxuICAgICAgICAgIHBhc3N3b3JkVmFsaWQgPSBpc1Bhc3N3b3JkVmFsaWQocGFzc3dvcmQpO1xuXG4gICAgcmV0dXJuIHBhc3N3b3JkVmFsaWQ7XG4gIH1cblxuICBzdWJtaXRGb3JtKCkge1xuICAgIGNvbnN0IHBhc3N3b3JkID0gdGhpcy5nZXRQYXNzd29yZCgpO1xuXG4gICAgY29udHJvbGxlci5zZXRQYXNzd29yZChwYXNzd29yZCk7XG5cbiAgICB0aGlzLmNsZWFyUGFzc3dvcmQoKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuKFtcblxuICAgICAgPFBhc3N3b3JkSW5wdXQgLz4sXG4gICAgICA8VmFsaWRhdGlvbkVycm9yUGFyYWdyYXBoIC8+LFxuICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQsIGVsZW1lbnQpID0+IHtcblxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRlQW5kU3VibWl0Rm9ybSgpO1xuXG4gICAgICAgICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIFN1Ym1pdFxuICAgICAgPC9CdXR0b24+XG5cbiAgICBdKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZm9ybVwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwicGFzc3dvcmRcIlxuICB9O1xufVxuXG5mdW5jdGlvbiBpc1Bhc3N3b3JkVmFsaWQocGFzc3dvcmQpIHtcbiAgY29uc3QgcGFzc3dvcmRWYWxpZCA9IChwYXNzd29yZCAhPT0gRU1QVFlfU1RSSU5HKTtcblxuICByZXR1cm4gcGFzc3dvcmRWYWxpZDtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lc3NhZ2VQYXJhZ3JhcGggZXh0ZW5kcyBFbGVtZW50IHtcbiAgc2hvd01lc3NhZ2UobWVzc2FnZSkge1xuICAgIGNvbnN0IGh0bWwgPSBtZXNzYWdlOyAvLy9cblxuICAgIHRoaXMuaHRtbChodG1sKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG5cdCAgY29uc3Qgc2hvd01lc3NhZ2UgPSB0aGlzLnNob3dNZXNzYWdlLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIHNob3dNZXNzYWdlXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwicFwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwibWVzc2FnZVwiXG4gIH07XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgY29udHJvbGxlciBmcm9tIFwiLi4vLi4vY29udHJvbGxlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNldFBhc3N3b3JkQnV0dG9uIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNsaWNrSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnRyb2xsZXIucmVzZXRQYXNzd29yZCgpO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgdGhpcy5vbkNsaWNrKHRoaXMuY2xpY2tIYW5kbGVyLCB0aGlzKTtcbiAgfVxuXG4gIHdpbGxNb3VudCgpIHtcbiAgICB0aGlzLm9mZkNsaWNrKHRoaXMuY2xpY2tIYW5kbGVyLCB0aGlzKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIFwiUmVzZXQgcGFzc3dvcmRcIjtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJidXR0b25cIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInJlc2V0LXBhc3N3b3JkXCJcbiAgfTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBQYXNzd29yZEZvcm0gZnJvbSBcIi4vdmlldy9mb3JtL3Bhc3N3b3JkXCI7XG5pbXBvcnQgTWVzc2FnZVBhcmFncmFwaCBmcm9tIFwiLi92aWV3L3BhcmFncmFwaC9tZXNzYWdlXCI7XG5pbXBvcnQgUmVzZXRQYXNzd29yZEJ1dHRvbiBmcm9tIFwiLi92aWV3L2J1dHRvbi9yZXNldFBhc3N3b3JkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4oW1xuXG4gICAgICA8UGFzc3dvcmRGb3JtLz4sXG4gICAgICA8UmVzZXRQYXNzd29yZEJ1dHRvbi8+LFxuICAgICAgPE1lc3NhZ2VQYXJhZ3JhcGgvPlxuXG4gICAgXSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGVsIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wYXNzd29yZCA9IG51bGw7XG4gIH1cblxuICBzZXRQYXNzd29yZChwYXNzd29yZCkge1xuICAgIHRoaXMucGFzc3dvcmQgPSBwYXNzd29yZDtcbiAgfVxuXG4gIHJlc2V0UGFzc3dvcmQoKSB7XG4gICAgdGhpcy5wYXNzd29yZCA9IG51bGw7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFwiLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgeyBCb2R5IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IFZpZXcgZnJvbSBcIi4vbXZjQXBwbGljYXRpb24vdmlld1wiO1xuaW1wb3J0IE1vZGVsIGZyb20gXCIuL212Y0FwcGxpY2F0aW9uL21vZGVsXCI7XG5pbXBvcnQgY29udHJvbGxlciBmcm9tIFwiLi9tdmNBcHBsaWNhdGlvbi9jb250cm9sbGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG12Y0FwcGxpY2F0aW9uKCkge1xuICBjb25zdCBtb2RlbCA9IG5ldyBNb2RlbCgpLFxuICAgICAgICB2aWV3ID1cblxuICAgICAgICAgIDxWaWV3Lz5cblxuICAgICAgICA7XG5cbiAgT2JqZWN0LmFzc2lnbihjb250cm9sbGVyLCB7XG4gICAgc2V0UGFzc3dvcmQsXG4gICAgcmVzZXRQYXNzd29yZFxuICB9KTtcblxuICBjb25zdCBib2R5ID0gbmV3IEJvZHkoKTtcblxuICBib2R5Lm1vdW50KHZpZXcpO1xuXG4gIGZ1bmN0aW9uIHNldFBhc3N3b3JkKHBhc3N3b3JkKSB7XG4gICAgbW9kZWwuc2V0UGFzc3dvcmQocGFzc3dvcmQpO1xuXG4gICAgdmlldy5zaG93TWVzc2FnZShcIlRoZSBwYXNzd29yZCBoYXMgYmVlbiBzZXQuXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRQYXNzd29yZCgpIHtcbiAgICBtb2RlbC5yZXNldFBhc3N3b3JkKCk7XG5cbiAgICB2aWV3LnNob3dNZXNzYWdlKFwiVGhlIHBhc3N3b3JkIGhhcyBiZWVuIHJlc2V0LlwiKTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCIuLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCB7IEJvZHkgfSBmcm9tIFwiZWFzeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaW1wbGVBcHBsaWNhdGlvbigpIHtcbiAgY29uc3QgYm9keSA9IG5ldyBCb2R5KCk7XG5cbiAgYm9keS5tb3VudChcblxuICAgIDxwPlxuICAgICAgQSBzaW1wbGUgYXBwbGljYXRpb24uXG4gICAgPC9wPlxuXG4gICk7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGRlZmF1bHQgYXMgbXZjQXBwbGljYXRpb24gfSBmcm9tIFwiLi9leGFtcGxlL212Y0FwcGxpY2F0aW9uXCI7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIHNpbXBsZUFwcGxpY2F0aW9uIH0gZnJvbSBcIi4vZXhhbXBsZS9zaW1wbGVBcHBsaWNhdGlvblwiO1xuXG5PYmplY3QuYXNzaWduKHdpbmRvdywge1xuICBtdmNBcHBsaWNhdGlvbixcbiAgc2ltcGxlQXBwbGljYXRp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
