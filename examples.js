(() => {
  var __commonJS = (callback, module) => () => {
    if (!module) {
      module = {exports: {}};
      callback(module.exports, module);
    }
    return module.exports;
  };

  // node_modules/easy/lib/offset.js
  var require_offset = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var Offset = /* @__PURE__ */ function() {
      function Offset2(top, left) {
        _classCallCheck(this, Offset2);
        this.top = top;
        this.left = left;
      }
      _createClass(Offset2, [
        {
          key: "getTop",
          value: function getTop() {
            return this.top;
          }
        },
        {
          key: "getLeft",
          value: function getLeft() {
            return this.left;
          }
        }
      ]);
      return Offset2;
    }();
    exports.default = Offset;
  });

  // node_modules/easy/lib/bounds.js
  var require_bounds = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var Bounds = /* @__PURE__ */ function() {
      function Bounds2(top, left, right, bottom) {
        _classCallCheck(this, Bounds2);
        this.top = top;
        this.left = left;
        this.right = right;
        this.bottom = bottom;
      }
      _createClass(Bounds2, [
        {
          key: "getTop",
          value: function getTop() {
            return this.top;
          }
        },
        {
          key: "getLeft",
          value: function getLeft() {
            return this.left;
          }
        },
        {
          key: "getRight",
          value: function getRight() {
            return this.right;
          }
        },
        {
          key: "getBottom",
          value: function getBottom() {
            return this.bottom;
          }
        },
        {
          key: "getWidth",
          value: function getWidth() {
            var width = this.right - this.left;
            return width;
          }
        },
        {
          key: "getHeight",
          value: function getHeight() {
            var height = this.bottom - this.top;
            return height;
          }
        },
        {
          key: "setTop",
          value: function setTop(top) {
            this.top = top;
          }
        },
        {
          key: "setLeft",
          value: function setLeft(left) {
            this.left = left;
          }
        },
        {
          key: "setRight",
          value: function setRight(right) {
            this.right = right;
          }
        },
        {
          key: "setBottom",
          value: function setBottom(bottom) {
            this.bottom = bottom;
          }
        },
        {
          key: "shift",
          value: function shift(horizontalOffset, verticalOffset) {
            this.top += verticalOffset;
            this.left += horizontalOffset;
            this.right += horizontalOffset;
            this.bottom += verticalOffset;
          }
        },
        {
          key: "isOverlappingMouse",
          value: function isOverlappingMouse(mouseTop, mouseLeft) {
            return this.top <= mouseTop && this.left <= mouseLeft && this.right > mouseLeft && this.bottom > mouseTop;
          }
        },
        {
          key: "areOverlapping",
          value: function areOverlapping(bounds) {
            return this.top < bounds.bottom && this.left < bounds.right && this.right > bounds.left && this.bottom > bounds.top;
          }
        }
      ], [
        {
          key: "fromBoundingClientRect",
          value: function fromBoundingClientRect(boundingClientRect) {
            var windowScrollTop = window.pageYOffset, windowScrollLeft = window.pageXOffset, top = boundingClientRect.top + windowScrollTop, left = boundingClientRect.left + windowScrollLeft, right = boundingClientRect.right + windowScrollLeft, bottom = boundingClientRect.bottom + windowScrollTop, bounds = new Bounds2(top, left, right, bottom);
            return bounds;
          }
        },
        {
          key: "fromTopLeftWidthAndHeight",
          value: function fromTopLeftWidthAndHeight(top, left, width, height) {
            var bottom = top + height, right = left + width, bounds = new Bounds2(top, left, right, bottom);
            return bounds;
          }
        }
      ]);
      return Bounds2;
    }();
    exports.default = Bounds;
  });

  // node_modules/easy/lib/constants.js
  var require_constants = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.IGNORED_PROPERTIES = exports.DEFAULT_PROPERTIES = exports.SVG_NAMESPACE_URI = exports.EMPTY_STRING = exports.ABOUT_BLANK = exports.CLASS_NAME = exports.UNDEFINED = exports.HTML_FOR = exports.WILDCARD = exports.FUNCTION = exports.DISABLED = exports.BOOLEAN = exports.DISPLAY = exports.STRING = exports.OBJECT = exports.HEIGHT = exports.BLOCK = exports.WIDTH = exports.CLASS = exports.SPACE = exports.NONE = exports.BODY = exports.FOR = void 0;
    var FOR = "for";
    exports.FOR = FOR;
    var BODY = "body";
    exports.BODY = BODY;
    var NONE = "none";
    exports.NONE = NONE;
    var SPACE = " ";
    exports.SPACE = SPACE;
    var CLASS = "class";
    exports.CLASS = CLASS;
    var WIDTH = "width";
    exports.WIDTH = WIDTH;
    var BLOCK = "block";
    exports.BLOCK = BLOCK;
    var HEIGHT = "height";
    exports.HEIGHT = HEIGHT;
    var OBJECT = "object";
    exports.OBJECT = OBJECT;
    var STRING = "string";
    exports.STRING = STRING;
    var DISPLAY = "display";
    exports.DISPLAY = DISPLAY;
    var BOOLEAN = "boolean";
    exports.BOOLEAN = BOOLEAN;
    var DISABLED = "disabled";
    exports.DISABLED = DISABLED;
    var FUNCTION = "function";
    exports.FUNCTION = FUNCTION;
    var WILDCARD = "*";
    exports.WILDCARD = WILDCARD;
    var HTML_FOR = "htmlFor";
    exports.HTML_FOR = HTML_FOR;
    var UNDEFINED = "undefined";
    exports.UNDEFINED = UNDEFINED;
    var CLASS_NAME = "className";
    exports.CLASS_NAME = CLASS_NAME;
    var ABOUT_BLANK = "about:blank";
    exports.ABOUT_BLANK = ABOUT_BLANK;
    var EMPTY_STRING = "";
    exports.EMPTY_STRING = EMPTY_STRING;
    var SVG_NAMESPACE_URI = "http://www.w3.org/2000/svg";
    exports.SVG_NAMESPACE_URI = SVG_NAMESPACE_URI;
    var DEFAULT_PROPERTIES = "defaultProperties";
    exports.DEFAULT_PROPERTIES = DEFAULT_PROPERTIES;
    var IGNORED_PROPERTIES = "ignoredProperties";
    exports.IGNORED_PROPERTIES = IGNORED_PROPERTIES;
  });

  // node_modules/easy/lib/utilities/object.js
  var require_object = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.combine = combine;
    exports.prune = prune;
    var _constants = require_constants();
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
          ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
          }));
        }
        ownKeys.forEach(function(key) {
          _defineProperty(target, key, source[key]);
        });
      }
      return target;
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function combine(target) {
      var source = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      target = _objectSpread({}, target);
      var names = Object.keys(source);
      names.forEach(function(name) {
        var targetValue = target[name], sourceValue = source[name], targetHasOwnProperty = target.hasOwnProperty(name);
        target[name] = targetHasOwnProperty ? combineValues(targetValue, sourceValue) : sourceValue;
      });
      return target;
    }
    function prune(target) {
      var names = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
      target = _objectSpread({}, target);
      names.forEach(function(name) {
        var targetHasOwnProperty = target.hasOwnProperty(name);
        if (targetHasOwnProperty) {
          delete target[name];
        }
      });
      return target;
    }
    function combineValues(targetValue, sourceValue) {
      var targetValueBoolean = isValueBoolean(targetValue), sourceValueBoolean = isValueBoolean(sourceValue), combinedValue = targetValueBoolean && sourceValueBoolean ? targetValue : "".concat(targetValue, " ").concat(sourceValue);
      return combinedValue;
    }
    function isValueBoolean(value) {
      var valueBoolean = (typeof value === "undefined" ? "undefined" : _typeof(value)) === _constants.BOOLEAN;
      return valueBoolean;
    }
  });

  // node_modules/easy/lib/utilities/array.js
  var require_array = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.first = first;
    exports.push = push;
    exports.augment = augment;
    exports.flatten = flatten;
    exports.guarantee = guarantee;
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++)
        arr2[i] = arr[i];
      return arr2;
    }
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr))
        return _arrayLikeToArray(arr);
    }
    function _instanceof(left, right) {
      if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return right[Symbol.hasInstance](left);
      } else {
        return left instanceof right;
      }
    }
    function _iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(n);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray(o, minLen);
    }
    function first(array) {
      return array[0];
    }
    function push(array1, array2) {
      Array.prototype.push.apply(array1, array2);
    }
    function augment(array1, array2, test) {
      array1 = _toConsumableArray(array1);
      array2.forEach(function(element, index) {
        var passed = test(element, index);
        if (passed) {
          array1.push(element);
        }
      });
      return array1;
    }
    function flatten(array1) {
      return array1.reduce(function(array, element) {
        array = array.concat(element);
        return array;
      }, []);
    }
    function guarantee(arrayOrElement) {
      arrayOrElement = arrayOrElement || [];
      return _instanceof(arrayOrElement, Array) ? arrayOrElement : [
        arrayOrElement
      ];
    }
  });

  // node_modules/easy/lib/utilities/name.js
  var require_name = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isSVGTagName = isSVGTagName;
    exports.isSVGAttributeName = isSVGAttributeName;
    exports.isHTMLAttributeName = isHTMLAttributeName;
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

  // node_modules/easy/lib/utilities/dom.js
  var require_dom = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.elementsFromDOMElements = elementsFromDOMElements;
    exports.ascendantDOMNodesFromDOMNode = ascendantDOMNodesFromDOMNode;
    exports.descendantDOMNodesFromDOMNode = descendantDOMNodesFromDOMNode;
    exports.filterDOMNodesBySelector = filterDOMNodesBySelector;
    exports.domNodeMatchesSelector = domNodeMatchesSelector;
    exports.filterDOMNodes = filterDOMNodes;
    var _array = require_array();
    var _constants = require_constants();
    function elementsFromDOMElements(domElements) {
      var domElementsWithElements = filterDOMNodes(domElements, function(domElement) {
        return domElement.__element__ !== void 0;
      }), elements = domElementsWithElements.map(function(domElement) {
        return domElement.__element__;
      });
      return elements;
    }
    function ascendantDOMNodesFromDOMNode(domNode, height) {
      var ascendantDOMNodes = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
      if (height > 0) {
        var parentDOMNode = domNode.parentElement;
        if (parentDOMNode !== null) {
          ascendantDOMNodes.push(parentDOMNode);
          height--;
          ascendantDOMNodesFromDOMNode(parentDOMNode, height, ascendantDOMNodes);
        }
      }
      return ascendantDOMNodes;
    }
    function descendantDOMNodesFromDOMNode(domNode, depth) {
      var descendantDOMNodes = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
      if (depth > 0) {
        var childDOMNodes = domNode.childNodes;
        (0, _array).push(descendantDOMNodes, childDOMNodes);
        depth--;
        childDOMNodes.forEach(function(childDOMNode) {
          return descendantDOMNodesFromDOMNode(childDOMNode, depth, descendantDOMNodes);
        });
      }
      return descendantDOMNodes;
    }
    function filterDOMNodesBySelector(domNodes, selector) {
      var filteredDOMNodes = filterDOMNodes(domNodes, function(domNode) {
        return domNodeMatchesSelector(domNode, selector);
      });
      return filteredDOMNodes;
    }
    function domNodeMatchesSelector(domNode, selector) {
      var domNodeType = domNode.nodeType;
      switch (domNodeType) {
        case Node.ELEMENT_NODE: {
          var domElement = domNode;
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
      var filteredDOMNodes = [], domNodesLength = domNodes.length;
      for (var index = 0; index < domNodesLength; index++) {
        var domNode = domNodes[index], result = test(domNode);
        if (result) {
          filteredDOMNodes.push(domNode);
        }
      }
      return filteredDOMNodes;
    }
  });

  // node_modules/easy/lib/mixins/element.js
  var require_element = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _array = require_array();
    var _constants = require_constants();
    var _dom = require_dom();
    function getParentElement() {
      var selector = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _constants.WILDCARD;
      var parentElement = null;
      var parentDOMElement = this.domElement.parentElement;
      if (parentDOMElement !== null) {
        if (parentDOMElement.matches(selector)) {
          var parentDOMElements = [
            parentDOMElement
          ], parentElements = (0, _dom).elementsFromDOMElements(parentDOMElements), firstParentElement = (0, _array).first(parentElements);
          parentElement = firstParentElement || null;
        }
      }
      return parentElement;
    }
    function getChildElements() {
      var selector = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _constants.WILDCARD;
      var childDOMNodes = this.domElement.childNodes, childDOMElements = (0, _dom).filterDOMNodesBySelector(childDOMNodes, selector), childElements = (0, _dom).elementsFromDOMElements(childDOMElements);
      return childElements;
    }
    function getAscendantElements() {
      var selector = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _constants.WILDCARD, maximumHeight = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Infinity;
      var height = maximumHeight, domNode = this.domElement, ascendantDOMNodes = (0, _dom).ascendantDOMNodesFromDOMNode(domNode, height), ascendantDOMElements = (0, _dom).filterDOMNodesBySelector(ascendantDOMNodes, selector), ascendantElements = (0, _dom).elementsFromDOMElements(ascendantDOMElements);
      return ascendantElements;
    }
    function getDescendantElements() {
      var selector = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _constants.WILDCARD, maximumDepth = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Infinity;
      var depth = maximumDepth, domNode = this.domElement, descendantDOMNodes = (0, _dom).descendantDOMNodesFromDOMNode(domNode, depth), descendantDOMElements = (0, _dom).filterDOMNodesBySelector(descendantDOMNodes, selector), descendantElements = (0, _dom).elementsFromDOMElements(descendantDOMElements);
      return descendantElements;
    }
    function getNextSiblingElement() {
      var selector = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _constants.WILDCARD;
      var nextSiblingElement = null;
      var nextSiblingDOMNode = this.domElement.nextSibling;
      if (nextSiblingDOMNode !== null && (0, _dom).domNodeMatchesSelector(nextSiblingDOMNode, selector)) {
        nextSiblingElement = nextSiblingDOMNode.__element__ || null;
      }
      return nextSiblingElement;
    }
    function getPreviousSiblingElement() {
      var selector = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _constants.WILDCARD;
      var previousSiblingElement = null;
      var previousSiblingDOMNode = this.domElement.previousSibling;
      if (previousSiblingDOMNode !== null && (0, _dom).domNodeMatchesSelector(previousSiblingDOMNode, selector)) {
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
    exports.default = _default;
  });

  // node_modules/easy/lib/textElement.js
  var require_textElement = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _offset = _interopRequireDefault2(require_offset());
    var _bounds = _interopRequireDefault2(require_bounds());
    var _element = _interopRequireDefault2(require_element());
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var TextElement = /* @__PURE__ */ function() {
      function TextElement2(text) {
        _classCallCheck(this, TextElement2);
        this.domElement = document.createTextNode(text);
        this.domElement.__element__ = this;
      }
      _createClass(TextElement2, [
        {
          key: "getText",
          value: function getText() {
            var nodeValue = this.domElement.nodeValue, text = nodeValue;
            return text;
          }
        },
        {
          key: "setText",
          value: function setText(text) {
            var nodeValue = text;
            this.domElement.nodeValue = nodeValue;
          }
        },
        {
          key: "getOffset",
          value: function getOffset() {
            var top = this.domElement.offsetTop, left = this.domElement.offsetLeft, offset = new _offset.default(top, left);
            return offset;
          }
        },
        {
          key: "getBounds",
          value: function getBounds() {
            var boundingClientRect = this.domElement.getBoundingClientRect(), bounds = _bounds.default.fromBoundingClientRect(boundingClientRect);
            return bounds;
          }
        },
        {
          key: "getWidth",
          value: function getWidth() {
            var clientWidth = this.domElement.clientWidth, width = clientWidth;
            return width;
          }
        },
        {
          key: "getHeight",
          value: function getHeight() {
            var clientHeight = this.domElement.clientHeight, height = clientHeight;
            return height;
          }
        },
        {
          key: "prependTo",
          value: function prependTo(parentElement) {
            parentElement.prepend(this);
          }
        },
        {
          key: "appendTo",
          value: function appendTo(parentElement) {
            parentElement.append(this);
          }
        },
        {
          key: "addTo",
          value: function addTo(parentElement) {
            parentElement.add(this);
          }
        },
        {
          key: "removeFrom",
          value: function removeFrom(parentElement) {
            parentElement.remove(this);
          }
        },
        {
          key: "insertBefore",
          value: function insertBefore(siblingElement) {
            var parentDOMNode = siblingElement.domElement.parentNode, siblingDOMElement = siblingElement.domElement;
            parentDOMNode.insertBefore(this.domElement, siblingDOMElement);
          }
        },
        {
          key: "insertAfter",
          value: function insertAfter(siblingElement) {
            var parentDOMNode = siblingElement.domElement.parentNode, siblingDOMElement = siblingElement.domElement;
            parentDOMNode.insertBefore(this.domElement, siblingDOMElement.nextSibling);
          }
        },
        {
          key: "remove",
          value: function remove() {
            this.domElement.remove();
          }
        }
      ]);
      return TextElement2;
    }();
    Object.assign(TextElement.prototype, _element.default);
    var _default = TextElement;
    exports.default = _default;
  });

  // node_modules/easy/lib/utilities/elements.js
  var require_elements = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.removeFalseyElements = removeFalseyElements;
    exports.replaceStringsWithTextElements = replaceStringsWithTextElements;
    var _textElement = _interopRequireDefault2(require_textElement());
    var _constants = require_constants();
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function removeFalseyElements(elements1) {
      elements1 = elements1.reduce(function(elements, element) {
        if (element) {
          elements.push(element);
        }
        return elements;
      }, []);
      return elements1;
    }
    function replaceStringsWithTextElements(elements) {
      elements = elements.map(function(element) {
        if ((typeof element === "undefined" ? "undefined" : _typeof(element)) === _constants.STRING) {
          var text = element, textElement = new _textElement.default(text);
          element = textElement;
        }
        return element;
      });
      return elements;
    }
  });

  // node_modules/easy/lib/mixins/jsx.js
  var require_jsx = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _object = require_object();
    var _array = require_array();
    var _name = require_name();
    var _elements = require_elements();
    var _constants = require_constants();
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function applyProperties(properties, defaultProperties, ignoredProperties) {
      var _this = this;
      this.properties = (0, _object).combine(properties, defaultProperties);
      properties = (0, _object).prune(this.properties, ignoredProperties);
      var namespaceURI = this.domElement.namespaceURI, svg = namespaceURI === _constants.SVG_NAMESPACE_URI, propertiesKeys = Object.keys(properties), names = propertiesKeys;
      names.forEach(function(name) {
        var value = properties[name], nameHandlerName = isNameHandlerName(name);
        if (nameHandlerName) {
          addHandler(_this, name, value);
        } else {
          var nameAttributeName = isNameAttributeName(name, svg);
          if (nameAttributeName) {
            addAttribute(_this, name, value);
          }
        }
      });
      var childElements = childElementsFromElement(this) || properties.childElements, context = {};
      childElements.forEach(function(childElement) {
        updateContext(childElement, context);
        _this.add(childElement);
      });
      this.context = context;
    }
    function getProperties() {
      return this.properties;
    }
    function getContext() {
      return this.context;
    }
    function assignContext(names, thenDelete) {
      var _this = this;
      var argumentsLength = arguments.length;
      if (argumentsLength === 1) {
        var firstArgument = (0, _array).first(arguments);
        if ((typeof firstArgument === "undefined" ? "undefined" : _typeof(firstArgument)) === _constants.BOOLEAN) {
          names = Object.keys(this.context);
          thenDelete = firstArgument;
        } else {
          thenDelete = true;
        }
      }
      if (argumentsLength === 0) {
        names = Object.keys(this.context);
        thenDelete = true;
      }
      names.forEach(function(name) {
        var value = _this.context[name], propertyName = name, descriptor = {
          value
        };
        Object.defineProperty(_this, propertyName, descriptor);
        if (thenDelete) {
          delete _this.context[name];
        }
      }, []);
    }
    var jsxMixins = {
      applyProperties,
      getProperties,
      getContext,
      assignContext
    };
    var _default = jsxMixins;
    exports.default = _default;
    function childElementsFromElement(element) {
      var childElements = null;
      if (_typeof(element.childElements) === _constants.FUNCTION) {
        childElements = element.childElements.call(element);
        childElements = (0, _array).guarantee(childElements);
        childElements = (0, _elements).removeFalseyElements(childElements);
        childElements = (0, _elements).replaceStringsWithTextElements(childElements);
      }
      return childElements;
    }
    function updateContext(childElement, context) {
      var parentContext = _typeof(childElement.parentContext) === _constants.FUNCTION ? childElement.parentContext() : childElement.context;
      Object.assign(context, parentContext);
    }
    function addHandler(element, name, value) {
      var eventType = name.substr(2).toLowerCase(), handler = value;
      element.on(eventType, handler);
    }
    function addAttribute(element, name, value) {
      if (name === _constants.CLASS_NAME) {
        name = _constants.CLASS;
      }
      if (name === _constants.HTML_FOR) {
        name = _constants.FOR;
      }
      if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === _constants.OBJECT) {
        var keys = Object.keys(value);
        keys.forEach(function(key) {
          element.domElement[name][key] = value[key];
        });
      } else if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === _constants.BOOLEAN) {
        if (value) {
          value = name;
          element.addAttribute(name, value);
        }
      } else {
        element.addAttribute(name, value);
      }
    }
    function isNameHandlerName(name) {
      return /^on/.test(name);
    }
    function isNameAttributeName(name, svg) {
      return svg ? (0, _name).isSVGAttributeName(name) : (0, _name).isHTMLAttributeName(name);
    }
  });

  // node_modules/easy/lib/eventTypes.js
  var require_eventTypes = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = exports.CONTEXTMENU_EVENT_TYPE = exports.START_DRAG_EVENT_TYPE = exports.STOP_DRAG_EVENT_TYPE = exports.DRAG_OVER_EVENT_TYPE = exports.MOUSEMOVE_EVENT_TYPE = exports.MOUSEDOWN_EVENT_TYPE = exports.MOUSEOVER_EVENT_TYPE = exports.DBLCLICK_EVENT_TYPE = exports.MOUSEOUT_EVENT_TYPE = exports.DRAG_OUT_EVENT_TYPE = exports.AUXCLICK_EVENT_TYPE = exports.MOUSEUP_EVENT_TYPE = exports.KEYDOWN_EVENT_TYPE = exports.SCROLL_EVENT_TYPE = exports.RESIZE_EVENT_TYPE = exports.CHANGE_EVENT_TYPE = exports.REMOVE_EVENT_TYPE = exports.KEYUP_EVENT_TYPE = exports.CLICK_EVENT_TYPE = exports.FOCUS_EVENT_TYPE = exports.INPUT_EVENT_TYPE = exports.WHEEL_EVENT_TYPE = exports.DROP_EVENT_TYPE = exports.DRAG_EVENT_TYPE = exports.BLUR_EVENT_TYPE = exports.MOVE_EVENT_TYPE = exports.OPEN_EVENT_TYPE = void 0;
    var OPEN_EVENT_TYPE = "open";
    exports.OPEN_EVENT_TYPE = OPEN_EVENT_TYPE;
    var MOVE_EVENT_TYPE = "move";
    exports.MOVE_EVENT_TYPE = MOVE_EVENT_TYPE;
    var BLUR_EVENT_TYPE = "blur";
    exports.BLUR_EVENT_TYPE = BLUR_EVENT_TYPE;
    var DRAG_EVENT_TYPE = "drag";
    exports.DRAG_EVENT_TYPE = DRAG_EVENT_TYPE;
    var DROP_EVENT_TYPE = "drop";
    exports.DROP_EVENT_TYPE = DROP_EVENT_TYPE;
    var WHEEL_EVENT_TYPE = "wheel";
    exports.WHEEL_EVENT_TYPE = WHEEL_EVENT_TYPE;
    var INPUT_EVENT_TYPE = "input";
    exports.INPUT_EVENT_TYPE = INPUT_EVENT_TYPE;
    var FOCUS_EVENT_TYPE = "focus";
    exports.FOCUS_EVENT_TYPE = FOCUS_EVENT_TYPE;
    var CLICK_EVENT_TYPE = "click";
    exports.CLICK_EVENT_TYPE = CLICK_EVENT_TYPE;
    var KEYUP_EVENT_TYPE = "keyup";
    exports.KEYUP_EVENT_TYPE = KEYUP_EVENT_TYPE;
    var REMOVE_EVENT_TYPE = "remove";
    exports.REMOVE_EVENT_TYPE = REMOVE_EVENT_TYPE;
    var CHANGE_EVENT_TYPE = "change";
    exports.CHANGE_EVENT_TYPE = CHANGE_EVENT_TYPE;
    var RESIZE_EVENT_TYPE = "resize";
    exports.RESIZE_EVENT_TYPE = RESIZE_EVENT_TYPE;
    var SCROLL_EVENT_TYPE = "scroll";
    exports.SCROLL_EVENT_TYPE = SCROLL_EVENT_TYPE;
    var KEYDOWN_EVENT_TYPE = "keydown";
    exports.KEYDOWN_EVENT_TYPE = KEYDOWN_EVENT_TYPE;
    var MOUSEUP_EVENT_TYPE = "mouseup";
    exports.MOUSEUP_EVENT_TYPE = MOUSEUP_EVENT_TYPE;
    var AUXCLICK_EVENT_TYPE = "auxclick";
    exports.AUXCLICK_EVENT_TYPE = AUXCLICK_EVENT_TYPE;
    var DRAG_OUT_EVENT_TYPE = "dragout";
    exports.DRAG_OUT_EVENT_TYPE = DRAG_OUT_EVENT_TYPE;
    var MOUSEOUT_EVENT_TYPE = "mouseout";
    exports.MOUSEOUT_EVENT_TYPE = MOUSEOUT_EVENT_TYPE;
    var DBLCLICK_EVENT_TYPE = "dblclick";
    exports.DBLCLICK_EVENT_TYPE = DBLCLICK_EVENT_TYPE;
    var MOUSEOVER_EVENT_TYPE = "mouseover";
    exports.MOUSEOVER_EVENT_TYPE = MOUSEOVER_EVENT_TYPE;
    var MOUSEDOWN_EVENT_TYPE = "mousedown";
    exports.MOUSEDOWN_EVENT_TYPE = MOUSEDOWN_EVENT_TYPE;
    var MOUSEMOVE_EVENT_TYPE = "mousemove";
    exports.MOUSEMOVE_EVENT_TYPE = MOUSEMOVE_EVENT_TYPE;
    var DRAG_OVER_EVENT_TYPE = "dragover";
    exports.DRAG_OVER_EVENT_TYPE = DRAG_OVER_EVENT_TYPE;
    var STOP_DRAG_EVENT_TYPE = "stopdrag";
    exports.STOP_DRAG_EVENT_TYPE = STOP_DRAG_EVENT_TYPE;
    var START_DRAG_EVENT_TYPE = "startdrag";
    exports.START_DRAG_EVENT_TYPE = START_DRAG_EVENT_TYPE;
    var CONTEXTMENU_EVENT_TYPE = "contextmenu";
    exports.CONTEXTMENU_EVENT_TYPE = CONTEXTMENU_EVENT_TYPE;
    var _default = {
      OPEN_EVENT_TYPE,
      MOVE_EVENT_TYPE,
      BLUR_EVENT_TYPE,
      DRAG_EVENT_TYPE,
      DROP_EVENT_TYPE,
      WHEEL_EVENT_TYPE,
      INPUT_EVENT_TYPE,
      FOCUS_EVENT_TYPE,
      CLICK_EVENT_TYPE,
      KEYUP_EVENT_TYPE,
      REMOVE_EVENT_TYPE,
      CHANGE_EVENT_TYPE,
      RESIZE_EVENT_TYPE,
      SCROLL_EVENT_TYPE,
      KEYDOWN_EVENT_TYPE,
      MOUSEUP_EVENT_TYPE,
      AUXCLICK_EVENT_TYPE,
      DRAG_OUT_EVENT_TYPE,
      MOUSEOUT_EVENT_TYPE,
      DBLCLICK_EVENT_TYPE,
      MOUSEOVER_EVENT_TYPE,
      MOUSEDOWN_EVENT_TYPE,
      MOUSEMOVE_EVENT_TYPE,
      DRAG_OVER_EVENT_TYPE,
      STOP_DRAG_EVENT_TYPE,
      START_DRAG_EVENT_TYPE,
      CONTEXTMENU_EVENT_TYPE
    };
    exports.default = _default;
  });

  // node_modules/easy/lib/mixins/key.js
  var require_key = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _eventTypes = require_eventTypes();
    function onKeyUp(keyUpHandler, element) {
      this.on(_eventTypes.KEYUP_EVENT_TYPE, keyUpHandler, element);
    }
    function offKeyUp(keyUpHandler, element) {
      this.off(_eventTypes.KEYUP_EVENT_TYPE, keyUpHandler, element);
    }
    function onKeyDown(keyDownHandler, element) {
      this.on(_eventTypes.KEYDOWN_EVENT_TYPE, keyDownHandler, element);
    }
    function offKeyDown(keyDownHandler, element) {
      this.off(_eventTypes.KEYDOWN_EVENT_TYPE, keyDownHandler, element);
    }
    var keyMixins = {
      onKeyUp,
      offKeyUp,
      onKeyDown,
      offKeyDown
    };
    var _default = keyMixins;
    exports.default = _default;
  });

  // node_modules/easy/lib/mixins/click.js
  var require_click = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _eventTypes = require_eventTypes();
    function onClick(clickHandler, element) {
      this.on(_eventTypes.CLICK_EVENT_TYPE, clickHandler, element);
    }
    function offClick(clickHandler, element) {
      this.off(_eventTypes.CLICK_EVENT_TYPE, clickHandler, element);
    }
    var clickMixins = {
      onClick,
      offClick
    };
    var _default = clickMixins;
    exports.default = _default;
  });

  // node_modules/easy/lib/mixins/state.js
  var require_state = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    function getState() {
      return this.state;
    }
    function setState(state) {
      this.state = state;
    }
    function updateState(state) {
      Object.assign(this.state, state);
    }
    var stateMixins = {
      getState,
      setState,
      updateState
    };
    var _default = stateMixins;
    exports.default = _default;
  });

  // node_modules/easy/lib/contentTypes.js
  var require_contentTypes = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.TEXT_HTML_CONTENT_TYPE = void 0;
    var TEXT_HTML_CONTENT_TYPE = "text/html";
    exports.TEXT_HTML_CONTENT_TYPE = TEXT_HTML_CONTENT_TYPE;
  });

  // node_modules/easy/lib/mixins/resize.js
  var require_resize = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.onResize = onResize;
    exports.offResize = offResize;
    exports.default = void 0;
    var _eventTypes = require_eventTypes();
    var _constants = require_constants();
    var _contentTypes = require_contentTypes();
    function onResize(resizeHandler, element) {
      this.on(_eventTypes.RESIZE_EVENT_TYPE, resizeHandler, element);
    }
    function offResize(resizeHandler, element) {
      this.off(_eventTypes.RESIZE_EVENT_TYPE, resizeHandler, element);
    }
    function addResizeObject() {
      var _this = this;
      var resizeObject = document.createElement(_constants.OBJECT), style = "display: block; \n                 position: absolute; \n                 top: 0; \n                 left: 0; \n                 height: 100%; \n                 width: 100%; \n                 overflow: hidden; \n                 pointer-events: none; \n                 z-index: -1;", data = _constants.ABOUT_BLANK, type = _contentTypes.TEXT_HTML_CONTENT_TYPE;
      resizeObject.setAttribute("style", style);
      resizeObject.data = data;
      resizeObject.type = type;
      this.__resizeObject__ = resizeObject;
      resizeObject.onload = function() {
        return resizeObjectLoadHandler(_this);
      };
      this.domElement.appendChild(resizeObject);
    }
    function removeResizeObject() {
      var resizeObject = this.__resizeObject__, objectWindow = resizeObject.contentDocument.defaultView;
      objectWindow.removeEventListener(_eventTypes.RESIZE_EVENT_TYPE, resizeEventListener);
      this.domElement.removeChild(resizeObject);
      delete this.__resizeObject__;
    }
    var resizeMixins = {
      onResize,
      offResize,
      addResizeObject,
      removeResizeObject
    };
    var _default = resizeMixins;
    exports.default = _default;
    function resizeObjectLoadHandler(element) {
      var resizeObject = element.__resizeObject__, resizeObjectWindow = resizeObject.contentDocument.defaultView;
      resizeObjectWindow.addEventListener(_eventTypes.RESIZE_EVENT_TYPE, function(event) {
        var resizeEventListeners = element.findEventListeners(_eventTypes.RESIZE_EVENT_TYPE);
        resizeEventListeners.forEach(function(resizeEventListener2) {
          return resizeEventListener2(event);
        });
      });
    }
  });

  // node_modules/easy/lib/mixins/event.js
  var require_event = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _constants = require_constants();
    var _eventTypes = require_eventTypes();
    var _resize = require_resize();
    function on(eventTypes, handler) {
      var element = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this;
      var _this = this;
      eventTypes = eventTypes.split(_constants.SPACE);
      eventTypes.forEach(function(eventType) {
        if (eventType === _eventTypes.RESIZE_EVENT_TYPE) {
          var resizeEventListeners = _this.findEventListeners(_eventTypes.RESIZE_EVENT_TYPE), resizeEventListenersLength = resizeEventListeners.length;
          if (resizeEventListenersLength === 0) {
            _this.addResizeObject();
          }
        }
        var eventListener = _this.addEventListener(eventType, handler, element);
        _this.domElement.addEventListener(eventType, eventListener);
      });
    }
    function off(eventTypes, handler) {
      var element = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this;
      var _this = this;
      eventTypes = eventTypes.split(_constants.SPACE);
      eventTypes.forEach(function(eventType) {
        var eventListener = _this.removeEventListener(eventType, handler, element);
        _this.domElement.removeEventListener(eventType, eventListener);
        if (eventType === _eventTypes.RESIZE_EVENT_TYPE) {
          var resizeEventListeners = _this.findEventListeners(_eventTypes.RESIZE_EVENT_TYPE), resizeEventListenersLength = resizeEventListeners.length;
          if (resizeEventListenersLength === 0) {
            (0, _resize).removeResizeObject(_this);
          }
        }
      });
    }
    function addEventListener(eventType, handler, element) {
      if (this.eventListeners === void 0) {
        this.eventListeners = [];
      }
      var eventListener = this.createEventListener(eventType, handler, element);
      this.eventListeners.push(eventListener);
      return eventListener;
    }
    function removeEventListener(eventType, handler, element) {
      var eventListener = this.findEventListener(eventType, handler, element), index = this.eventListeners.indexOf(eventListener), start = index, deleteCount = 1;
      this.eventListeners.splice(start, deleteCount);
      if (this.eventListeners.length === 0) {
        delete this.eventListeners;
      }
      return eventListener;
    }
    function findEventListener(eventType, handler, element) {
      var eventListener1 = this.eventListeners.find(function(eventListener) {
        if (eventListener.element === element && eventListener.handler === handler && eventListener.eventType === eventType) {
          return true;
        }
      });
      return eventListener1;
    }
    function findEventListeners(eventType) {
      var eventListeners = [];
      if (this.eventListeners !== void 0) {
        this.eventListeners.forEach(function(eventListener) {
          var found = eventListener.eventType === eventType;
          if (found) {
            eventListeners.push(eventListener);
          }
        });
      }
      return eventListeners;
    }
    function createEventListener(eventType, handler, element1) {
      var _this = this;
      var eventListener;
      var handlerElement = element1;
      eventListener = function(event) {
        var element = _this;
        handler.call(handlerElement, event, element);
      };
      Object.assign(eventListener, {
        element: element1,
        handler,
        eventType
      });
      return eventListener;
    }
    var eventMixins = {
      on,
      off,
      addEventListener,
      removeEventListener,
      createEventListener,
      findEventListener,
      findEventListeners
    };
    var _default = eventMixins;
    exports.default = _default;
  });

  // node_modules/easy/lib/mixins/mouse.js
  var require_mouse = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _eventTypes = require_eventTypes();
    function onMouseUp(mouseUpHandler, element) {
      this.on(_eventTypes.MOUSEUP_EVENT_TYPE, mouseUpHandler, element);
    }
    function offMouseUp(mouseUpHandler, element) {
      this.off(_eventTypes.MOUSEUP_EVENT_TYPE, mouseUpHandler, element);
    }
    function onMouseOut(mouseOutHandler, element) {
      this.on(_eventTypes.MOUSEOUT_EVENT_TYPE, mouseOutHandler, element);
    }
    function offMouseOut(mouseOutHandler, element) {
      this.off(_eventTypes.MOUSEOUT_EVENT_TYPE, mouseOutHandler, element);
    }
    function onMouseDown(mouseDownHandler, element) {
      this.on(_eventTypes.MOUSEDOWN_EVENT_TYPE, mouseDownHandler, element);
    }
    function offMouseDown(mouseDownHandler, element) {
      this.off(_eventTypes.MOUSEDOWN_EVENT_TYPE, mouseDownHandler, element);
    }
    function onMouseOver(mouseOverHandler, element) {
      this.on(_eventTypes.MOUSEOVER_EVENT_TYPE, mouseOverHandler, element);
    }
    function offMouseOver(mouseOverHandler, element) {
      this.off(_eventTypes.MOUSEOVER_EVENT_TYPE, mouseOverHandler, element);
    }
    function onMouseMove(mouseMoveHandler, element) {
      this.on(_eventTypes.MOUSEMOVE_EVENT_TYPE, mouseMoveHandler, element);
    }
    function offMouseMove(mouseMoveHandler, element) {
      this.off(_eventTypes.MOUSEMOVE_EVENT_TYPE, mouseMoveHandler, element);
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
    exports.default = _default;
  });

  // node_modules/easy/lib/mixins/scroll.js
  var require_scroll = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _eventTypes = require_eventTypes();
    function onScroll(scrollHandler, element) {
      this.on(_eventTypes.SCROLL_EVENT_TYPE, scrollHandler, element);
    }
    function offScroll(scrollHandler, element) {
      this.off(_eventTypes.SCROLL_EVENT_TYPE, scrollHandler, element);
    }
    function getScrollTop() {
      return this.domElement.scrollTop;
    }
    function getScrollLeft() {
      return this.domElement.scrollLeft;
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
      getScrollTop,
      getScrollLeft,
      setScrollTop,
      setScrollLeft
    };
    var _default = scrollMixins;
    exports.default = _default;
  });

  // node_modules/easy/lib/element.js
  var require_element2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _offset = _interopRequireDefault2(require_offset());
    var _bounds = _interopRequireDefault2(require_bounds());
    var _jsx = _interopRequireDefault2(require_jsx());
    var _key = _interopRequireDefault2(require_key());
    var _click = _interopRequireDefault2(require_click());
    var _state = _interopRequireDefault2(require_state());
    var _event = _interopRequireDefault2(require_event());
    var _mouse = _interopRequireDefault2(require_mouse());
    var _resize = _interopRequireDefault2(require_resize());
    var _scroll = _interopRequireDefault2(require_scroll());
    var _element = _interopRequireDefault2(require_element());
    var _object = require_object();
    var _name = require_name();
    var _array = require_array();
    var _constants = require_constants();
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++)
        arr2[i] = arr[i];
      return arr2;
    }
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr))
        return _arrayLikeToArray(arr);
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _unsupportedIterableToArray(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(n);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray(o, minLen);
    }
    var Element = /* @__PURE__ */ function() {
      function Element2(selector) {
        _classCallCheck(this, Element2);
        if (selector) {
          this.domElement = document.querySelector(selector);
          this.domElement.__element__ = this;
        }
      }
      _createClass(Element2, [
        {
          key: "getDOMElement",
          value: function getDOMElement() {
            return this.domElement;
          }
        },
        {
          key: "getOffset",
          value: function getOffset() {
            var top = this.domElement.offsetTop, left = this.domElement.offsetLeft, offset = new _offset.default(top, left);
            return offset;
          }
        },
        {
          key: "getBounds",
          value: function getBounds() {
            var boundingClientRect = this.domElement.getBoundingClientRect(), bounds = _bounds.default.fromBoundingClientRect(boundingClientRect);
            return bounds;
          }
        },
        {
          key: "getWidth",
          value: function getWidth() {
            var includeBorder = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
            var width = includeBorder ? this.domElement.offsetWidth : this.domElement.clientWidth;
            return width;
          }
        },
        {
          key: "setWidth",
          value: function setWidth(width) {
            width = "".concat(width, "px");
            this.style(_constants.WIDTH, width);
          }
        },
        {
          key: "getHeight",
          value: function getHeight() {
            var includeBorder = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
            var height = includeBorder ? this.domElement.offsetHeight : this.domElement.clientHeight;
            return height;
          }
        },
        {
          key: "setHeight",
          value: function setHeight(height) {
            height = "".concat(height, "px");
            this.style(_constants.HEIGHT, height);
          }
        },
        {
          key: "hasAttribute",
          value: function hasAttribute(name) {
            return this.domElement.hasAttribute(name);
          }
        },
        {
          key: "getAttribute",
          value: function getAttribute(name) {
            return this.domElement.getAttribute(name);
          }
        },
        {
          key: "setAttribute",
          value: function setAttribute(name, value) {
            this.domElement.setAttribute(name, value);
          }
        },
        {
          key: "clearAttribute",
          value: function clearAttribute(name) {
            this.domElement.removeAttribute(name);
          }
        },
        {
          key: "addAttribute",
          value: function addAttribute(name, value) {
            this.setAttribute(name, value);
          }
        },
        {
          key: "removeAttribute",
          value: function removeAttribute(name) {
            this.clearAttribute(name);
          }
        },
        {
          key: "setClass",
          value: function setClass(className) {
            this.domElement.className = className;
          }
        },
        {
          key: "addClass",
          value: function addClass(className) {
            this.domElement.classList.add(className);
          }
        },
        {
          key: "removeClass",
          value: function removeClass(className) {
            this.domElement.classList.remove(className);
          }
        },
        {
          key: "toggleClass",
          value: function toggleClass(className) {
            this.domElement.classList.toggle(className);
          }
        },
        {
          key: "hasClass",
          value: function hasClass(className) {
            return this.domElement.classList.contains(className);
          }
        },
        {
          key: "clearClasses",
          value: function clearClasses() {
            this.domElement.className = _constants.EMPTY_STRING;
          }
        },
        {
          key: "prependTo",
          value: function prependTo(parentElement) {
            parentElement.prepend(this);
          }
        },
        {
          key: "appendTo",
          value: function appendTo(parentElement) {
            parentElement.append(this);
          }
        },
        {
          key: "addTo",
          value: function addTo(parentElement) {
            parentElement.add(this);
          }
        },
        {
          key: "removeFrom",
          value: function removeFrom(parentElement) {
            parentElement.remove(this);
          }
        },
        {
          key: "insertBefore",
          value: function insertBefore(siblingElement) {
            var parentDOMNode = siblingElement.domElement.parentNode, siblingDOMElement = siblingElement.domElement;
            parentDOMNode.insertBefore(this.domElement, siblingDOMElement);
          }
        },
        {
          key: "insertAfter",
          value: function insertAfter(siblingElement) {
            var parentDOMNode = siblingElement.domElement.parentNode, siblingDOMElement = siblingElement.domElement;
            parentDOMNode.insertBefore(this.domElement, siblingDOMElement.nextSibling);
          }
        },
        {
          key: "prepend",
          value: function prepend(element) {
            var domElement = element.domElement, firstChildDOMElement = this.domElement.firstChild;
            this.domElement.insertBefore(domElement, firstChildDOMElement);
          }
        },
        {
          key: "append",
          value: function append(element) {
            var domElement = element.domElement;
            this.domElement.insertBefore(domElement, null);
          }
        },
        {
          key: "add",
          value: function add(element) {
            this.append(element);
          }
        },
        {
          key: "remove",
          value: function remove(element) {
            if (element) {
              var domElement = element.domElement;
              this.domElement.removeChild(domElement);
            } else {
              this.domElement.remove();
            }
          }
        },
        {
          key: "mount",
          value: function mount(element1) {
            var descendantElements = element1.getDescendantElements(), elements = [
              element1
            ].concat(_toConsumableArray(descendantElements));
            this.add(element1);
            elements.reverse();
            elements.forEach(function(element) {
              return element.didMount && element.didMount();
            });
          }
        },
        {
          key: "unmount",
          value: function unmount(element2) {
            var descendantElements = element2.getDescendantElements(), elements = [
              element2
            ].concat(_toConsumableArray(descendantElements));
            elements.forEach(function(element) {
              return element.willUnmount && element.willUnmount();
            });
            this.remove(element2);
          }
        },
        {
          key: "show",
          value: function show() {
            var displayStyle = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _constants.BLOCK;
            this.display(displayStyle);
          }
        },
        {
          key: "hide",
          value: function hide() {
            this.style(_constants.DISPLAY, _constants.NONE);
          }
        },
        {
          key: "display",
          value: function display1(display) {
            this.style(_constants.DISPLAY, display);
          }
        },
        {
          key: "enable",
          value: function enable() {
            this.clearAttribute(_constants.DISABLED);
          }
        },
        {
          key: "disable",
          value: function disable() {
            this.setAttribute(_constants.DISABLED, _constants.DISABLED);
          }
        },
        {
          key: "isEnabled",
          value: function isEnabled() {
            var disabled = this.isDisabled(), enabled = !disabled;
            return enabled;
          }
        },
        {
          key: "isDisabled",
          value: function isDisabled() {
            var disabled = this.hasAttribute(_constants.DISABLED);
            return disabled;
          }
        },
        {
          key: "isDisplayed",
          value: function isDisplayed() {
            var display = this.css(_constants.DISPLAY), displayed = display !== _constants.NONE;
            return displayed;
          }
        },
        {
          key: "isShowing",
          value: function isShowing() {
            var displayed = this.isDisplayed(), showing = displayed;
            return showing;
          }
        },
        {
          key: "isHidden",
          value: function isHidden() {
            var displayed = this.isDisplayed(), hidden = !displayed;
            return hidden;
          }
        },
        {
          key: "style",
          value: function style(name, value) {
            if (value !== void 0) {
              this.domElement.style[name] = value;
            } else {
              var style1 = this.domElement.style[name];
              return style1;
            }
          }
        },
        {
          key: "html",
          value: function html1(html) {
            if (html === void 0) {
              var innerHTML = this.domElement.innerHTML;
              html = innerHTML;
              return html;
            } else {
              var innerHTML1 = html;
              this.domElement.innerHTML = innerHTML1;
            }
          }
        },
        {
          key: "css",
          value: function css1(css) {
            if (css === void 0) {
              var computedStyle = getComputedStyle(this.domElement), css2 = {};
              for (var index = 0; index < computedStyle.length; index++) {
                var firstComputedStyle = _array.first[computedStyle], name = firstComputedStyle, value = computedStyle.getPropertyValue(name);
                css2[name] = value;
              }
              return css2;
            } else if ((typeof css === "undefined" ? "undefined" : _typeof(css)) === _constants.STRING) {
              var name1 = css;
              var computedStyle1 = getComputedStyle(this.domElement), value1 = computedStyle1.getPropertyValue(name1);
              css = value1;
              return css;
            } else {
              var _this = this;
              var names = Object.keys(css);
              names.forEach(function(name2) {
                var value2 = css[name2];
                _this.style(name2, value2);
              });
            }
          }
        },
        {
          key: "blur",
          value: function blur() {
            this.domElement.blur();
          }
        },
        {
          key: "focus",
          value: function focus() {
            this.domElement.focus();
          }
        },
        {
          key: "hasFocus",
          value: function hasFocus() {
            var focus = document.activeElement === this.domElement;
            return focus;
          }
        }
      ], [
        {
          key: "fromClass",
          value: function fromClass(Class, properties) {
            for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key1 = 2; _key1 < _len; _key1++) {
              remainingArguments[_key1 - 2] = arguments[_key1];
            }
            var tagName = Class.tagName, element = elementFromTagName.apply(void 0, [
              Class,
              tagName
            ].concat(_toConsumableArray(remainingArguments))), defaultProperties = defaultPropertiesFromClass(Class), ignoredProperties = ignoredPropertiesFromClass(Class);
            element.applyProperties(properties, defaultProperties, ignoredProperties);
            element.initialise && element.initialise();
            return element;
          }
        },
        {
          key: "fromTagName",
          value: function fromTagName(tagName, properties) {
            for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key2 = 2; _key2 < _len; _key2++) {
              remainingArguments[_key2 - 2] = arguments[_key2];
            }
            var Class = Element2, element = elementFromTagName.apply(void 0, [
              Class,
              tagName
            ].concat(_toConsumableArray(remainingArguments))), defaultProperties = {}, ignoredProperties = [];
            element.applyProperties(properties, defaultProperties, ignoredProperties);
            element.initialise && element.initialise();
            return element;
          }
        }
      ]);
      return Element2;
    }();
    Object.assign(Element.prototype, _jsx.default);
    Object.assign(Element.prototype, _key.default);
    Object.assign(Element.prototype, _click.default);
    Object.assign(Element.prototype, _state.default);
    Object.assign(Element.prototype, _event.default);
    Object.assign(Element.prototype, _mouse.default);
    Object.assign(Element.prototype, _resize.default);
    Object.assign(Element.prototype, _scroll.default);
    Object.assign(Element.prototype, _element.default);
    var _default = Element;
    exports.default = _default;
    function elementFromTagName(Class, tagName) {
      for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key3 = 2; _key3 < _len; _key3++) {
        remainingArguments[_key3 - 2] = arguments[_key3];
      }
      var _bind;
      var selector = null, element = new ((_bind = Function.prototype.bind).call.apply(_bind, [
        Class,
        null,
        selector
      ].concat(_toConsumableArray(remainingArguments))))();
      element.domElement = (0, _name).isSVGTagName(tagName) ? document.createElementNS(_constants.SVG_NAMESPACE_URI, tagName) : document.createElement(tagName);
      element.domElement.__element__ = element;
      return element;
    }
    function defaultPropertiesFromClass(Class) {
      var defaultProperties = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (Class.hasOwnProperty(_constants.DEFAULT_PROPERTIES)) {
        defaultProperties = (0, _object).combine(defaultProperties, Class[_constants.DEFAULT_PROPERTIES]);
      }
      var superClass = Object.getPrototypeOf(Class);
      if (superClass !== null) {
        defaultProperties = defaultPropertiesFromClass(superClass, defaultProperties);
      }
      return defaultProperties;
    }
    function ignoredPropertiesFromClass(Class) {
      var ignoredProperties = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
      if (Class.hasOwnProperty(_constants.IGNORED_PROPERTIES)) {
        ignoredProperties = (0, _array).augment(ignoredProperties, Class[_constants.IGNORED_PROPERTIES], function(ignoredProperty) {
          return !ignoredProperties.includes(ignoredProperty);
        });
      }
      var superClass = Object.getPrototypeOf(Class);
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
    exports.default = void 0;
    var _element = _interopRequireDefault2(require_element2());
    var _array = require_array();
    var _constants = require_constants();
    var _elements = require_elements();
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function createElement(firstArgument, properties) {
      for (var _len = arguments.length, childElements = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        childElements[_key - 2] = arguments[_key];
      }
      var element = null;
      if (firstArgument !== void 0) {
        childElements = sanitiseChildElements(childElements);
        properties = Object.assign({
          childElements
        }, properties);
        if (false) {
        } else if (isSubclassOf(firstArgument, _element.default)) {
          var Class = firstArgument;
          element = Class.fromClass(Class, properties);
        } else if ((typeof firstArgument === "undefined" ? "undefined" : _typeof(firstArgument)) === _constants.STRING) {
          var tagName = firstArgument;
          element = _element.default.fromTagName(tagName, properties);
        } else if ((typeof firstArgument === "undefined" ? "undefined" : _typeof(firstArgument)) === _constants.FUNCTION) {
          var elementFunction = firstArgument;
          element = elementFunction(properties);
        }
      }
      return element;
    }
    var React2 = {
      createElement
    };
    var _default = React2;
    exports.default = _default;
    function sanitiseChildElements(childElements) {
      childElements = (0, _array).flatten(childElements);
      childElements = (0, _elements).removeFalseyElements(childElements);
      childElements = (0, _elements).replaceStringsWithTextElements(childElements);
      return childElements;
    }
    function isSubclassOf(argument, Class) {
      var subclassOf = false;
      if (argument.name === Class.name) {
        subclassOf = true;
      } else {
        argument = Object.getPrototypeOf(argument);
        if (argument) {
          subclassOf = isSubclassOf(argument, Class);
        }
      }
      return subclassOf;
    }
  });

  // node_modules/easy/lib/element/body.js
  var require_body = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _element = _interopRequireDefault2(require_element2());
    var _constants = require_constants();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _construct(Parent, args, Class) {
      if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function _construct2(Parent2, args2, Class2) {
          var a = [
            null
          ];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2)
            _setPrototypeOf(instance, Class2.prototype);
          return instance;
        };
      }
      return _construct.apply(null, arguments);
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _isNativeFunction(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _wrapNativeSuper(Class) {
      var _cache = typeof Map === "function" ? new Map() : void 0;
      _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
        if (Class2 === null || !_isNativeFunction(Class2))
          return Class2;
        if (typeof Class2 !== "function") {
          throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
          if (_cache.has(Class2))
            return _cache.get(Class2);
          _cache.set(Class2, Wrapper);
        }
        function Wrapper() {
          return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class2.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _setPrototypeOf(Wrapper, Class2);
      };
      return _wrapNativeSuper(Class);
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
      };
    }
    var Body = /* @__PURE__ */ function(Element) {
      _inherits(Body2, Element);
      var _super = _createSuper(Body2);
      function Body2() {
        var selector = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _constants.BODY;
        _classCallCheck(this, Body2);
        return _super.call(this, selector);
      }
      return Body2;
    }(_wrapNativeSuper(_element.default));
    _defineProperty(Body, "tagName", "body");
    exports.default = Body;
  });

  // node_modules/easy/lib/element/link.js
  var require_link = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _element = _interopRequireDefault2(require_element2());
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _construct(Parent, args, Class) {
      if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function _construct2(Parent2, args2, Class2) {
          var a = [
            null
          ];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2)
            _setPrototypeOf(instance, Class2.prototype);
          return instance;
        };
      }
      return _construct.apply(null, arguments);
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _isNativeFunction(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _wrapNativeSuper(Class) {
      var _cache = typeof Map === "function" ? new Map() : void 0;
      _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
        if (Class2 === null || !_isNativeFunction(Class2))
          return Class2;
        if (typeof Class2 !== "function") {
          throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
          if (_cache.has(Class2))
            return _cache.get(Class2);
          _cache.set(Class2, Wrapper);
        }
        function Wrapper() {
          return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class2.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _setPrototypeOf(Wrapper, Class2);
      };
      return _wrapNativeSuper(Class);
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
      };
    }
    var Link = /* @__PURE__ */ function(Element) {
      _inherits(Link2, Element);
      var _super = _createSuper(Link2);
      function Link2() {
        _classCallCheck(this, Link2);
        return _super.apply(this, arguments);
      }
      _createClass(Link2, [
        {
          key: "getHRef",
          value: function getHRef() {
            return this.getAttribute("href");
          }
        },
        {
          key: "setHRef",
          value: function setHRef(href) {
            return this.setAttribute("href", href);
          }
        }
      ]);
      return Link2;
    }(_wrapNativeSuper(_element.default));
    _defineProperty(Link, "tagName", "a");
    exports.default = Link;
  });

  // node_modules/easy/lib/mixins/change.js
  var require_change = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _eventTypes = require_eventTypes();
    function onChange(changeHandler, element) {
      this.on(_eventTypes.CHANGE_EVENT_TYPE, changeHandler, element);
    }
    function offChange(changeHandler, element) {
      this.off(_eventTypes.CHANGE_EVENT_TYPE, changeHandler, element);
    }
    var changeMixins = {
      onChange,
      offChange
    };
    var _default = changeMixins;
    exports.default = _default;
  });

  // node_modules/easy/lib/inputElement.js
  var require_inputElement = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _element = _interopRequireDefault2(require_element2());
    var _change = _interopRequireDefault2(require_change());
    var _eventTypes = require_eventTypes();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _construct(Parent, args, Class) {
      if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function _construct2(Parent2, args2, Class2) {
          var a = [
            null
          ];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2)
            _setPrototypeOf(instance, Class2.prototype);
          return instance;
        };
      }
      return _construct.apply(null, arguments);
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _isNativeFunction(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _wrapNativeSuper(Class) {
      var _cache = typeof Map === "function" ? new Map() : void 0;
      _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
        if (Class2 === null || !_isNativeFunction(Class2))
          return Class2;
        if (typeof Class2 !== "function") {
          throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
          if (_cache.has(Class2))
            return _cache.get(Class2);
          _cache.set(Class2, Wrapper);
        }
        function Wrapper() {
          return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class2.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _setPrototypeOf(Wrapper, Class2);
      };
      return _wrapNativeSuper(Class);
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
      };
    }
    var InputElement = /* @__PURE__ */ function(Element) {
      _inherits(InputElement2, Element);
      var _super = _createSuper(InputElement2);
      function InputElement2() {
        _classCallCheck(this, InputElement2);
        return _super.apply(this, arguments);
      }
      _createClass(InputElement2, [
        {
          key: "onChange",
          value: function onChange(changeHandler, element) {
            this.on(_eventTypes.CHANGE_EVENT_TYPE, changeHandler, element);
          }
        },
        {
          key: "offChange",
          value: function offChange(changeHandler, element) {
            this.off(_eventTypes.CHANGE_EVENT_TYPE, changeHandler, element);
          }
        },
        {
          key: "onResize",
          value: function onResize(resizeHandler, element) {
          }
        },
        {
          key: "offResize",
          value: function offResize(resizeHandler, element) {
          }
        },
        {
          key: "getValue",
          value: function getValue() {
            return this.domElement.value;
          }
        },
        {
          key: "getSelectionStart",
          value: function getSelectionStart() {
            return this.domElement.selectionStart;
          }
        },
        {
          key: "getSelectionEnd",
          value: function getSelectionEnd() {
            return this.domElement.selectionEnd;
          }
        },
        {
          key: "isReadOnly",
          value: function isReadOnly() {
            return this.domElement.readOnly;
          }
        },
        {
          key: "setValue",
          value: function setValue(value) {
            this.domElement.value = value;
          }
        },
        {
          key: "setSelectionStart",
          value: function setSelectionStart(selectionStart) {
            this.domElement.selectionStart = selectionStart;
          }
        },
        {
          key: "setSelectionEnd",
          value: function setSelectionEnd(selectionEnd) {
            this.domElement.selectionEnd = selectionEnd;
          }
        },
        {
          key: "setReadOnly",
          value: function setReadOnly(readOnly) {
            this.domElement.readOnly = readOnly;
          }
        },
        {
          key: "select",
          value: function select() {
            this.domElement.select();
          }
        }
      ]);
      return InputElement2;
    }(_wrapNativeSuper(_element.default));
    Object.assign(InputElement.prototype, _change.default);
    var _default = InputElement;
    exports.default = _default;
  });

  // node_modules/easy/lib/inputElement/input.js
  var require_input = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _inputElement = _interopRequireDefault2(require_inputElement());
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
      };
    }
    var Input = /* @__PURE__ */ function(InputElement) {
      _inherits(Input2, InputElement);
      var _super = _createSuper(Input2);
      function Input2() {
        _classCallCheck(this, Input2);
        return _super.apply(this, arguments);
      }
      return Input2;
    }(_inputElement.default);
    _defineProperty(Input, "tagName", "input");
    exports.default = Input;
  });

  // node_modules/easy/lib/element/button.js
  var require_button = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _element = _interopRequireDefault2(require_element2());
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _construct(Parent, args, Class) {
      if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function _construct2(Parent2, args2, Class2) {
          var a = [
            null
          ];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2)
            _setPrototypeOf(instance, Class2.prototype);
          return instance;
        };
      }
      return _construct.apply(null, arguments);
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _isNativeFunction(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _wrapNativeSuper(Class) {
      var _cache = typeof Map === "function" ? new Map() : void 0;
      _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
        if (Class2 === null || !_isNativeFunction(Class2))
          return Class2;
        if (typeof Class2 !== "function") {
          throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
          if (_cache.has(Class2))
            return _cache.get(Class2);
          _cache.set(Class2, Wrapper);
        }
        function Wrapper() {
          return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class2.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _setPrototypeOf(Wrapper, Class2);
      };
      return _wrapNativeSuper(Class);
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
      };
    }
    var Button = /* @__PURE__ */ function(Element) {
      _inherits(Button2, Element);
      var _super = _createSuper(Button2);
      function Button2() {
        _classCallCheck(this, Button2);
        return _super.apply(this, arguments);
      }
      return Button2;
    }(_wrapNativeSuper(_element.default));
    _defineProperty(Button, "tagName", "button");
    exports.default = Button;
  });

  // node_modules/easy/lib/element/select.js
  var require_select = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _element = _interopRequireDefault2(require_element2());
    var _change = _interopRequireDefault2(require_change());
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _construct(Parent, args, Class) {
      if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function _construct2(Parent2, args2, Class2) {
          var a = [
            null
          ];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2)
            _setPrototypeOf(instance, Class2.prototype);
          return instance;
        };
      }
      return _construct.apply(null, arguments);
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _isNativeFunction(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _wrapNativeSuper(Class) {
      var _cache = typeof Map === "function" ? new Map() : void 0;
      _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
        if (Class2 === null || !_isNativeFunction(Class2))
          return Class2;
        if (typeof Class2 !== "function") {
          throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
          if (_cache.has(Class2))
            return _cache.get(Class2);
          _cache.set(Class2, Wrapper);
        }
        function Wrapper() {
          return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class2.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _setPrototypeOf(Wrapper, Class2);
      };
      return _wrapNativeSuper(Class);
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
      };
    }
    var Select = /* @__PURE__ */ function(Element) {
      _inherits(Select2, Element);
      var _super = _createSuper(Select2);
      function Select2() {
        _classCallCheck(this, Select2);
        return _super.apply(this, arguments);
      }
      _createClass(Select2, [
        {
          key: "onResize",
          value: function onResize(resizeHandler, element) {
          }
        },
        {
          key: "offResize",
          value: function offResize(resizeHandler, element) {
          }
        },
        {
          key: "getValue",
          value: function getValue() {
            return this.domElement.value;
          }
        },
        {
          key: "setValue",
          value: function setValue(value) {
            this.domElement.value = value;
          }
        }
      ]);
      return Select2;
    }(_wrapNativeSuper(_element.default));
    _defineProperty(Select, "tagName", "select");
    Object.assign(Select.prototype, _change.default);
    var _default = Select;
    exports.default = _default;
  });

  // node_modules/easy/lib/element/checkbox.js
  var require_checkbox = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _element = _interopRequireDefault2(require_element2());
    var _change = _interopRequireDefault2(require_change());
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _construct(Parent, args, Class) {
      if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function _construct2(Parent2, args2, Class2) {
          var a = [
            null
          ];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2)
            _setPrototypeOf(instance, Class2.prototype);
          return instance;
        };
      }
      return _construct.apply(null, arguments);
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _isNativeFunction(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _wrapNativeSuper(Class) {
      var _cache = typeof Map === "function" ? new Map() : void 0;
      _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
        if (Class2 === null || !_isNativeFunction(Class2))
          return Class2;
        if (typeof Class2 !== "function") {
          throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
          if (_cache.has(Class2))
            return _cache.get(Class2);
          _cache.set(Class2, Wrapper);
        }
        function Wrapper() {
          return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class2.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _setPrototypeOf(Wrapper, Class2);
      };
      return _wrapNativeSuper(Class);
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
      };
    }
    var Checkbox = /* @__PURE__ */ function(Element) {
      _inherits(Checkbox2, Element);
      var _super = _createSuper(Checkbox2);
      function Checkbox2() {
        _classCallCheck(this, Checkbox2);
        return _super.apply(this, arguments);
      }
      _createClass(Checkbox2, [
        {
          key: "isChecked",
          value: function isChecked() {
            return this.domElement.checked;
          }
        },
        {
          key: "check",
          value: function check() {
            var checked = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
            this.domElement.checked = checked;
          }
        }
      ]);
      return Checkbox2;
    }(_wrapNativeSuper(_element.default));
    _defineProperty(Checkbox, "tagName", "input");
    _defineProperty(Checkbox, "defaultProperties", {
      type: "checkbox"
    });
    Object.assign(Checkbox.prototype, _change.default);
    var _default = Checkbox;
    exports.default = _default;
  });

  // node_modules/easy/lib/inputElement/textarea.js
  var require_textarea = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _inputElement = _interopRequireDefault2(require_inputElement());
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
      };
    }
    var Textarea = /* @__PURE__ */ function(InputElement) {
      _inherits(Textarea2, InputElement);
      var _super = _createSuper(Textarea2);
      function Textarea2() {
        _classCallCheck(this, Textarea2);
        return _super.apply(this, arguments);
      }
      return Textarea2;
    }(_inputElement.default);
    _defineProperty(Textarea, "tagName", "textarea");
    exports.default = Textarea;
  });

  // node_modules/easy/lib/mixins/window.js
  var require_window = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _resize = require_resize();
    var _default = {
      onResize: _resize.onResize,
      offResize: _resize.offResize
    };
    exports.default = _default;
  });

  // node_modules/easy/lib/window.js
  var require_window2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _key = _interopRequireDefault2(require_key());
    var _event = _interopRequireDefault2(require_event());
    var _mouse = _interopRequireDefault2(require_mouse());
    var _click = _interopRequireDefault2(require_click());
    var _window = _interopRequireDefault2(require_window());
    var _constants = require_constants();
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++)
        arr2[i] = arr[i];
      return arr2;
    }
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr))
        return _arrayLikeToArray(arr);
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _unsupportedIterableToArray(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(n);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray(o, minLen);
    }
    var Window = /* @__PURE__ */ function() {
      function Window2() {
        _classCallCheck(this, Window2);
        this.domElement = window;
      }
      _createClass(Window2, [
        {
          key: "assign",
          value: function assign() {
            for (var _len = arguments.length, sources = new Array(_len), _key1 = 0; _key1 < _len; _key1++) {
              sources[_key1] = arguments[_key1];
            }
            var _Object;
            var target = this.domElement;
            (_Object = Object).assign.apply(_Object, [
              target
            ].concat(_toConsumableArray(sources)));
          }
        },
        {
          key: "addResizeObject",
          value: function addResizeObject() {
          }
        },
        {
          key: "removeResizeObject",
          value: function removeResizeObject() {
          }
        },
        {
          key: "getWidth",
          value: function getWidth() {
            return this.domElement.innerWidth;
          }
        },
        {
          key: "getHeight",
          value: function getHeight() {
            return this.domElement.innerHeight;
          }
        },
        {
          key: "getScrollTop",
          value: function getScrollTop() {
            return this.domElement.pageYOffset;
          }
        },
        {
          key: "getScrollLeft",
          value: function getScrollLeft() {
            return this.domElement.pageXOffset;
          }
        }
      ]);
      return Window2;
    }();
    Object.assign(Window.prototype, _key.default);
    Object.assign(Window.prototype, _event.default);
    Object.assign(Window.prototype, _mouse.default);
    Object.assign(Window.prototype, _click.default);
    Object.assign(Window.prototype, _window.default);
    var _default = (typeof window === "undefined" ? "undefined" : _typeof(window)) === _constants.UNDEFINED ? void 0 : new Window();
    exports.default = _default;
  });

  // node_modules/easy/lib/buttons.js
  var require_buttons = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = exports.MIDDLE_MOUSE_BUTTON = exports.RIGHT_MOUSE_BUTTON = exports.LEFT_MOUSE_BUTTON = void 0;
    var LEFT_MOUSE_BUTTON = 0;
    exports.LEFT_MOUSE_BUTTON = LEFT_MOUSE_BUTTON;
    var RIGHT_MOUSE_BUTTON = 2;
    exports.RIGHT_MOUSE_BUTTON = RIGHT_MOUSE_BUTTON;
    var MIDDLE_MOUSE_BUTTON = 1;
    exports.MIDDLE_MOUSE_BUTTON = MIDDLE_MOUSE_BUTTON;
    var _default = {
      LEFT_MOUSE_BUTTON,
      RIGHT_MOUSE_BUTTON,
      MIDDLE_MOUSE_BUTTON
    };
    exports.default = _default;
  });

  // node_modules/easy/lib/document.js
  var require_document = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _key = _interopRequireDefault2(require_key());
    var _click = _interopRequireDefault2(require_click());
    var _event = _interopRequireDefault2(require_event());
    var _mouse = _interopRequireDefault2(require_mouse());
    var _constants = require_constants();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    var Document = function Document2() {
      _classCallCheck(this, Document2);
      this.domElement = document;
    };
    var _default = (typeof document === "undefined" ? "undefined" : _typeof(document)) === _constants.UNDEFINED ? void 0 : new Document();
    exports.default = _default;
    Object.assign(Document.prototype, _key.default);
    Object.assign(Document.prototype, _click.default);
    Object.assign(Document.prototype, _event.default);
    Object.assign(Document.prototype, _mouse.default);
  });

  // node_modules/easy/lib/index.js
  var require_lib = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "React", {
      enumerable: true,
      get: function() {
        return _react.default;
      }
    });
    Object.defineProperty(exports, "Bounds", {
      enumerable: true,
      get: function() {
        return _bounds.default;
      }
    });
    Object.defineProperty(exports, "Offset", {
      enumerable: true,
      get: function() {
        return _offset.default;
      }
    });
    Object.defineProperty(exports, "Body", {
      enumerable: true,
      get: function() {
        return _body.default;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return _link.default;
      }
    });
    Object.defineProperty(exports, "Input", {
      enumerable: true,
      get: function() {
        return _input.default;
      }
    });
    Object.defineProperty(exports, "Button", {
      enumerable: true,
      get: function() {
        return _button.default;
      }
    });
    Object.defineProperty(exports, "Select", {
      enumerable: true,
      get: function() {
        return _select.default;
      }
    });
    Object.defineProperty(exports, "Element", {
      enumerable: true,
      get: function() {
        return _element.default;
      }
    });
    Object.defineProperty(exports, "Checkbox", {
      enumerable: true,
      get: function() {
        return _checkbox.default;
      }
    });
    Object.defineProperty(exports, "Textarea", {
      enumerable: true,
      get: function() {
        return _textarea.default;
      }
    });
    Object.defineProperty(exports, "TextElement", {
      enumerable: true,
      get: function() {
        return _textElement.default;
      }
    });
    Object.defineProperty(exports, "InputElement", {
      enumerable: true,
      get: function() {
        return _inputElement.default;
      }
    });
    Object.defineProperty(exports, "window", {
      enumerable: true,
      get: function() {
        return _window.default;
      }
    });
    Object.defineProperty(exports, "buttons", {
      enumerable: true,
      get: function() {
        return _buttons.default;
      }
    });
    Object.defineProperty(exports, "document", {
      enumerable: true,
      get: function() {
        return _document.default;
      }
    });
    Object.defineProperty(exports, "eventTypes", {
      enumerable: true,
      get: function() {
        return _eventTypes.default;
      }
    });
    var _react = _interopRequireDefault2(require_react());
    var _bounds = _interopRequireDefault2(require_bounds());
    var _offset = _interopRequireDefault2(require_offset());
    var _body = _interopRequireDefault2(require_body());
    var _link = _interopRequireDefault2(require_link());
    var _input = _interopRequireDefault2(require_input());
    var _button = _interopRequireDefault2(require_button());
    var _select = _interopRequireDefault2(require_select());
    var _element = _interopRequireDefault2(require_element2());
    var _checkbox = _interopRequireDefault2(require_checkbox());
    var _textarea = _interopRequireDefault2(require_textarea());
    var _textElement = _interopRequireDefault2(require_textElement());
    var _inputElement = _interopRequireDefault2(require_inputElement());
    var _window = _interopRequireDefault2(require_window2());
    var _buttons = _interopRequireDefault2(require_buttons());
    var _document = _interopRequireDefault2(require_document());
    var _eventTypes = _interopRequireDefault2(require_eventTypes());
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
  });

  // lib/juxtapose.js
  var require_juxtapose = __commonJS(() => {
    "use strict";
    var _easy = require_lib();
    _easy.window.assign({
      React: _easy.React
    });
  });

  // lib/index.js
  var require_lib2 = __commonJS(() => {
    "use strict";
    require_juxtapose();
  });

  // lib/example/mvcApplication/controller.js
  var require_controller = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var controller = {};
    var _default = controller;
    exports.default = _default;
  });

  // lib/example/mvcApplication/constants.js
  var require_constants2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.TIMEOUT_DELAY = exports.EMPTY_STRING = void 0;
    var EMPTY_STRING = "";
    exports.EMPTY_STRING = EMPTY_STRING;
    var TIMEOUT_DELAY = 1e3;
    exports.TIMEOUT_DELAY = TIMEOUT_DELAY;
  });

  // lib/example/mvcApplication/view/input/password.js
  var require_password = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _easy = require_lib();
    var _constants = require_constants2();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
      };
    }
    var PasswordInput = /* @__PURE__ */ function(InputElement) {
      _inherits(PasswordInput2, InputElement);
      var _super = _createSuper(PasswordInput2);
      function PasswordInput2() {
        _classCallCheck(this, PasswordInput2);
        return _super.apply(this, arguments);
      }
      _createClass(PasswordInput2, [
        {
          key: "getPassword",
          value: function getPassword() {
            var value = this.getValue(), password = value;
            return password;
          }
        },
        {
          key: "clearPassword",
          value: function clearPassword() {
            var password = _constants.EMPTY_STRING, value = password;
            this.setValue(value);
          }
        },
        {
          key: "parentContext",
          value: function parentContext() {
            var getPassword = this.getPassword.bind(this), clearPassword = this.clearPassword.bind(this);
            return {
              getPassword,
              clearPassword
            };
          }
        }
      ]);
      return PasswordInput2;
    }(_easy.InputElement);
    _defineProperty(PasswordInput, "tagName", "input");
    _defineProperty(PasswordInput, "defaultProperties", {
      type: "password"
    });
    exports.default = PasswordInput;
  });

  // lib/example/mvcApplication/view/paragraph/validationError.js
  var require_validationError = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _easy = require_lib();
    var _constants = require_constants2();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _construct(Parent, args, Class) {
      if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function _construct2(Parent2, args2, Class2) {
          var a = [
            null
          ];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2)
            _setPrototypeOf(instance, Class2.prototype);
          return instance;
        };
      }
      return _construct.apply(null, arguments);
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _isNativeFunction(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _wrapNativeSuper(Class) {
      var _cache = typeof Map === "function" ? new Map() : void 0;
      _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
        if (Class2 === null || !_isNativeFunction(Class2))
          return Class2;
        if (typeof Class2 !== "function") {
          throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
          if (_cache.has(Class2))
            return _cache.get(Class2);
          _cache.set(Class2, Wrapper);
        }
        function Wrapper() {
          return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class2.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _setPrototypeOf(Wrapper, Class2);
      };
      return _wrapNativeSuper(Class);
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
      };
    }
    var ValidationErrorParagraph = /* @__PURE__ */ function(Element) {
      _inherits(ValidationErrorParagraph2, Element);
      var _super = _createSuper(ValidationErrorParagraph2);
      function ValidationErrorParagraph2(selectorOrDomElement, timeout) {
        _classCallCheck(this, ValidationErrorParagraph2);
        var _this;
        _this = _super.call(this, selectorOrDomElement);
        _this.timeout = timeout;
        return _this;
      }
      _createClass(ValidationErrorParagraph2, [
        {
          key: "clearValidationError",
          value: function clearValidationError() {
            var html = _constants.EMPTY_STRING;
            this.html(html);
          }
        },
        {
          key: "showValidationError",
          value: function showValidationError(validationError) {
            var _this = this;
            var html = validationError;
            this.html(html);
            if (this.timeout !== null) {
              clearTimeout(this.timeout);
            }
            this.timeout = setTimeout(function() {
              _this.timemout = null;
              _this.clearValidationError();
            }, _constants.TIMEOUT_DELAY);
          }
        },
        {
          key: "parentContext",
          value: function parentContext() {
            return {
              showValidationError: this.showValidationError.bind(this)
            };
          }
        }
      ], [
        {
          key: "fromClass",
          value: function fromClass(Class, properties) {
            var timeout = null, validationErrorParagraph = _easy.Element.fromClass(Class, properties, timeout);
            return validationErrorParagraph;
          }
        }
      ]);
      return ValidationErrorParagraph2;
    }(_wrapNativeSuper(_easy.Element));
    _defineProperty(ValidationErrorParagraph, "tagName", "p");
    _defineProperty(ValidationErrorParagraph, "defaultProperties", {
      className: "validation error"
    });
    exports.default = ValidationErrorParagraph;
  });

  // lib/example/mvcApplication/view/form/password.js
  var require_password2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _easy = require_lib();
    var _controller = _interopRequireDefault2(require_controller());
    var _password = _interopRequireDefault2(require_password());
    var _validationError = _interopRequireDefault2(require_validationError());
    var _constants = require_constants2();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _construct(Parent, args, Class) {
      if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function _construct2(Parent2, args2, Class2) {
          var a = [
            null
          ];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2)
            _setPrototypeOf(instance, Class2.prototype);
          return instance;
        };
      }
      return _construct.apply(null, arguments);
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _isNativeFunction(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _wrapNativeSuper(Class) {
      var _cache = typeof Map === "function" ? new Map() : void 0;
      _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
        if (Class2 === null || !_isNativeFunction(Class2))
          return Class2;
        if (typeof Class2 !== "function") {
          throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
          if (_cache.has(Class2))
            return _cache.get(Class2);
          _cache.set(Class2, Wrapper);
        }
        function Wrapper() {
          return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class2.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _setPrototypeOf(Wrapper, Class2);
      };
      return _wrapNativeSuper(Class);
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
      };
    }
    var PasswordForm = /* @__PURE__ */ function(Element) {
      _inherits(PasswordForm2, Element);
      var _super = _createSuper(PasswordForm2);
      function PasswordForm2() {
        _classCallCheck(this, PasswordForm2);
        return _super.apply(this, arguments);
      }
      _createClass(PasswordForm2, [
        {
          key: "validateAndSubmitForm",
          value: function validateAndSubmitForm() {
            var passwordValid = this.validateForm();
            if (!passwordValid) {
              this.showValidationError("The password is invalid");
            } else {
              this.submitForm();
            }
          }
        },
        {
          key: "validateForm",
          value: function validateForm() {
            var password = this.getPassword(), passwordValid = isPasswordValid(password);
            return passwordValid;
          }
        },
        {
          key: "submitForm",
          value: function submitForm() {
            var password = this.getPassword();
            _controller.default.setPassword(password);
            this.clearPassword();
          }
        },
        {
          key: "childElements",
          value: function childElements() {
            var _this = this;
            return [
              /* @__PURE__ */ React.createElement(_password.default, null),
              /* @__PURE__ */ React.createElement(_validationError.default, null),
              /* @__PURE__ */ React.createElement(_easy.Button, {
                className: "submit",
                onClick: function(event, element) {
                  event.preventDefault();
                  _this.validateAndSubmitForm();
                }
              }, "Submit")
            ];
          }
        },
        {
          key: "initialise",
          value: function initialise() {
            this.assignContext();
          }
        }
      ]);
      return PasswordForm2;
    }(_wrapNativeSuper(_easy.Element));
    _defineProperty(PasswordForm, "tagName", "form");
    _defineProperty(PasswordForm, "defaultProperties", {
      className: "password"
    });
    exports.default = PasswordForm;
    function isPasswordValid(password) {
      var passwordValid = password !== _constants.EMPTY_STRING;
      return passwordValid;
    }
  });

  // lib/example/mvcApplication/view/paragraph/message.js
  var require_message = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _easy = require_lib();
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _construct(Parent, args, Class) {
      if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function _construct2(Parent2, args2, Class2) {
          var a = [
            null
          ];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2)
            _setPrototypeOf(instance, Class2.prototype);
          return instance;
        };
      }
      return _construct.apply(null, arguments);
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _isNativeFunction(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _wrapNativeSuper(Class) {
      var _cache = typeof Map === "function" ? new Map() : void 0;
      _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
        if (Class2 === null || !_isNativeFunction(Class2))
          return Class2;
        if (typeof Class2 !== "function") {
          throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
          if (_cache.has(Class2))
            return _cache.get(Class2);
          _cache.set(Class2, Wrapper);
        }
        function Wrapper() {
          return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class2.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _setPrototypeOf(Wrapper, Class2);
      };
      return _wrapNativeSuper(Class);
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
      };
    }
    var MessageParagraph = /* @__PURE__ */ function(Element) {
      _inherits(MessageParagraph2, Element);
      var _super = _createSuper(MessageParagraph2);
      function MessageParagraph2() {
        _classCallCheck(this, MessageParagraph2);
        return _super.apply(this, arguments);
      }
      _createClass(MessageParagraph2, [
        {
          key: "showMessage",
          value: function showMessage(message) {
            var html = message;
            this.html(html);
          }
        },
        {
          key: "parentContext",
          value: function parentContext() {
            var showMessage = this.showMessage.bind(this);
            return {
              showMessage
            };
          }
        }
      ]);
      return MessageParagraph2;
    }(_wrapNativeSuper(_easy.Element));
    _defineProperty(MessageParagraph, "tagName", "p");
    _defineProperty(MessageParagraph, "defaultProperties", {
      className: "message"
    });
    exports.default = MessageParagraph;
  });

  // lib/example/mvcApplication/view/button/resetPassword.js
  var require_resetPassword = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _easy = require_lib();
    var _controller = _interopRequireDefault2(require_controller());
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _construct(Parent, args, Class) {
      if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function _construct2(Parent2, args2, Class2) {
          var a = [
            null
          ];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2)
            _setPrototypeOf(instance, Class2.prototype);
          return instance;
        };
      }
      return _construct.apply(null, arguments);
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _isNativeFunction(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _wrapNativeSuper(Class) {
      var _cache = typeof Map === "function" ? new Map() : void 0;
      _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
        if (Class2 === null || !_isNativeFunction(Class2))
          return Class2;
        if (typeof Class2 !== "function") {
          throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
          if (_cache.has(Class2))
            return _cache.get(Class2);
          _cache.set(Class2, Wrapper);
        }
        function Wrapper() {
          return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class2.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _setPrototypeOf(Wrapper, Class2);
      };
      return _wrapNativeSuper(Class);
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
      };
    }
    var ResetPasswordButton = /* @__PURE__ */ function(Element) {
      _inherits(ResetPasswordButton2, Element);
      var _super = _createSuper(ResetPasswordButton2);
      function ResetPasswordButton2() {
        _classCallCheck(this, ResetPasswordButton2);
        return _super.apply(this, arguments);
      }
      _createClass(ResetPasswordButton2, [
        {
          key: "clickHandler",
          value: function clickHandler(event, element) {
            _controller.default.resetPassword();
          }
        },
        {
          key: "didMount",
          value: function didMount() {
            this.onClick(this.clickHandler, this);
          }
        },
        {
          key: "willMount",
          value: function willMount() {
            this.offClick(this.clickHandler, this);
          }
        },
        {
          key: "childElements",
          value: function childElements() {
            return "Reset password";
          }
        }
      ]);
      return ResetPasswordButton2;
    }(_wrapNativeSuper(_easy.Element));
    _defineProperty(ResetPasswordButton, "tagName", "button");
    _defineProperty(ResetPasswordButton, "defaultProperties", {
      className: "reset-password"
    });
    exports.default = ResetPasswordButton;
  });

  // lib/example/mvcApplication/view.js
  var require_view = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _easy = require_lib();
    var _password = _interopRequireDefault2(require_password2());
    var _message = _interopRequireDefault2(require_message());
    var _resetPassword = _interopRequireDefault2(require_resetPassword());
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _construct(Parent, args, Class) {
      if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function _construct2(Parent2, args2, Class2) {
          var a = [
            null
          ];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2)
            _setPrototypeOf(instance, Class2.prototype);
          return instance;
        };
      }
      return _construct.apply(null, arguments);
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _isNativeFunction(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function _wrapNativeSuper(Class) {
      var _cache = typeof Map === "function" ? new Map() : void 0;
      _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
        if (Class2 === null || !_isNativeFunction(Class2))
          return Class2;
        if (typeof Class2 !== "function") {
          throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
          if (_cache.has(Class2))
            return _cache.get(Class2);
          _cache.set(Class2, Wrapper);
        }
        function Wrapper() {
          return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class2.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _setPrototypeOf(Wrapper, Class2);
      };
      return _wrapNativeSuper(Class);
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
      };
    }
    var View = /* @__PURE__ */ function(Element) {
      _inherits(View2, Element);
      var _super = _createSuper(View2);
      function View2() {
        _classCallCheck(this, View2);
        return _super.apply(this, arguments);
      }
      _createClass(View2, [
        {
          key: "childElements",
          value: function childElements() {
            return [
              /* @__PURE__ */ React.createElement(_password.default, null),
              /* @__PURE__ */ React.createElement(_resetPassword.default, null),
              /* @__PURE__ */ React.createElement(_message.default, null)
            ];
          }
        },
        {
          key: "initialise",
          value: function initialise() {
            this.assignContext();
          }
        }
      ]);
      return View2;
    }(_wrapNativeSuper(_easy.Element));
    _defineProperty(View, "tagName", "div");
    _defineProperty(View, "defaultProperties", {
      className: "view"
    });
    exports.default = View;
  });

  // lib/example/mvcApplication/model.js
  var require_model = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var Model = /* @__PURE__ */ function() {
      function Model2() {
        _classCallCheck(this, Model2);
        this.password = null;
      }
      _createClass(Model2, [
        {
          key: "setPassword",
          value: function setPassword(password) {
            this.password = password;
          }
        },
        {
          key: "resetPassword",
          value: function resetPassword() {
            this.password = null;
          }
        }
      ]);
      return Model2;
    }();
    exports.default = Model;
  });

  // lib/example/mvcApplication.js
  var require_mvcApplication = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = mvcApplication;
    require_lib2();
    var _easy = require_lib();
    var _view = _interopRequireDefault2(require_view());
    var _model = _interopRequireDefault2(require_model());
    var _controller = _interopRequireDefault2(require_controller());
    function _interopRequireDefault2(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function mvcApplication() {
      var setPassword = function setPassword2(password) {
        model.setPassword(password);
        view.showMessage("The password has been set.");
      };
      var resetPassword = function resetPassword2() {
        model.resetPassword();
        view.showMessage("The password has been reset.");
      };
      var model = new _model.default(), view = /* @__PURE__ */ React.createElement(_view.default, null);
      Object.assign(_controller.default, {
        setPassword,
        resetPassword
      });
      var body = new _easy.Body();
      body.mount(view);
    }
  });

  // lib/example/simpleApplication.js
  var require_simpleApplication = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = simpleApplication;
    require_lib2();
    var _easy = require_lib();
    function simpleApplication() {
      var body = new _easy.Body();
      body.mount(/* @__PURE__ */ React.createElement("p", null, "A simple application."));
    }
  });

  // lib/examples.js
  "use strict";
  var _mvcApplication = _interopRequireDefault(require_mvcApplication());
  var _simpleApplication = _interopRequireDefault(require_simpleApplication());
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
  Object.assign(window, {
    mvcApplication: _mvcApplication.default,
    simpleApplication: _simpleApplication.default
  });
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL29mZnNldC5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvYm91bmRzLmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy9jb25zdGFudHMuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL3V0aWxpdGllcy9vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL3V0aWxpdGllcy9hcnJheS5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvdXRpbGl0aWVzL25hbWUuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL3V0aWxpdGllcy9kb20uanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL21peGlucy9lbGVtZW50LmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy90ZXh0RWxlbWVudC5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvdXRpbGl0aWVzL2VsZW1lbnRzLmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy9taXhpbnMvanN4LmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy9ldmVudFR5cGVzLmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy9taXhpbnMva2V5LmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy9taXhpbnMvY2xpY2suanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL21peGlucy9zdGF0ZS5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvY29udGVudFR5cGVzLmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy9taXhpbnMvcmVzaXplLmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy9taXhpbnMvZXZlbnQuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL21peGlucy9tb3VzZS5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvbWl4aW5zL3Njcm9sbC5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvZWxlbWVudC5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvcmVhY3QuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL2VsZW1lbnQvYm9keS5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvZWxlbWVudC9saW5rLmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy9taXhpbnMvY2hhbmdlLmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy9pbnB1dEVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL2lucHV0RWxlbWVudC9pbnB1dC5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvZWxlbWVudC9idXR0b24uanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL2VsZW1lbnQvc2VsZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy9lbGVtZW50L2NoZWNrYm94LmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy9pbnB1dEVsZW1lbnQvdGV4dGFyZWEuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL21peGlucy93aW5kb3cuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL3dpbmRvdy5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvYnV0dG9ucy5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvZG9jdW1lbnQuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL2luZGV4LmpzIiwgInNyYy9qdXh0YXBvc2UuanMiLCAic3JjL2luZGV4LmpzIiwgInNyYy9leGFtcGxlL212Y0FwcGxpY2F0aW9uL2NvbnRyb2xsZXIuanMiLCAic3JjL2V4YW1wbGUvbXZjQXBwbGljYXRpb24vY29uc3RhbnRzLmpzIiwgInNyYy9leGFtcGxlL212Y0FwcGxpY2F0aW9uL3ZpZXcvaW5wdXQvcGFzc3dvcmQuanMiLCAic3JjL2V4YW1wbGUvbXZjQXBwbGljYXRpb24vdmlldy9wYXJhZ3JhcGgvdmFsaWRhdGlvbkVycm9yLmpzIiwgInNyYy9leGFtcGxlL212Y0FwcGxpY2F0aW9uL3ZpZXcvZm9ybS9wYXNzd29yZC5qcyIsICJzcmMvZXhhbXBsZS9tdmNBcHBsaWNhdGlvbi92aWV3L3BhcmFncmFwaC9tZXNzYWdlLmpzIiwgInNyYy9leGFtcGxlL212Y0FwcGxpY2F0aW9uL3ZpZXcvYnV0dG9uL3Jlc2V0UGFzc3dvcmQuanMiLCAic3JjL2V4YW1wbGUvbXZjQXBwbGljYXRpb24vdmlldy5qcyIsICJzcmMvZXhhbXBsZS9tdmNBcHBsaWNhdGlvbi9tb2RlbC5qcyIsICJzcmMvZXhhbXBsZS9tdmNBcHBsaWNhdGlvbi5qcyIsICJzcmMvZXhhbXBsZS9zaW1wbGVBcHBsaWNhdGlvbi5qcyIsICJzcmMvZXhhbXBsZXMuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPZmZzZXQge1xuICBjb25zdHJ1Y3Rvcih0b3AsIGxlZnQpIHtcbiAgICB0aGlzLnRvcCA9IHRvcDtcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICB9XG5cbiAgZ2V0VG9wKCkge1xuICAgIHJldHVybiB0aGlzLnRvcDtcbiAgfVxuXG4gIGdldExlZnQoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdDtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb3VuZHMge1xuICBjb25zdHJ1Y3Rvcih0b3AsIGxlZnQsIHJpZ2h0LCBib3R0b20pIHtcbiAgICB0aGlzLnRvcCA9IHRvcDtcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgICB0aGlzLmJvdHRvbSA9IGJvdHRvbTtcbiAgfVxuXG4gIGdldFRvcCgpIHtcbiAgICByZXR1cm4gdGhpcy50b3A7XG4gIH1cblxuICBnZXRMZWZ0KCkge1xuICAgIHJldHVybiB0aGlzLmxlZnQ7XG4gIH1cblxuICBnZXRSaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5yaWdodDtcbiAgfVxuXG4gIGdldEJvdHRvbSgpIHtcbiAgICByZXR1cm4gdGhpcy5ib3R0b207XG4gIH1cblxuICBnZXRXaWR0aCgpIHtcbiAgICBjb25zdCB3aWR0aCA9ICh0aGlzLnJpZ2h0IC0gdGhpcy5sZWZ0KTtcblxuICAgIHJldHVybiB3aWR0aDtcbiAgfVxuXG4gIGdldEhlaWdodCgpIHtcbiAgICBjb25zdCBoZWlnaHQgPSAodGhpcy5ib3R0b20gLSB0aGlzLnRvcCk7XG5cbiAgICByZXR1cm4gaGVpZ2h0O1xuICB9XG4gIFxuICBzZXRUb3AodG9wKSB7XG4gICAgdGhpcy50b3AgPSB0b3A7XG4gIH1cblxuICBzZXRMZWZ0KGxlZnQpIHtcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICB9XG5cbiAgc2V0UmlnaHQocmlnaHQpIHtcbiAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XG4gIH1cblxuICBzZXRCb3R0b20oYm90dG9tKSB7XG4gICAgdGhpcy5ib3R0b20gPSBib3R0b207XG4gIH1cblxuICBzaGlmdChob3Jpem9udGFsT2Zmc2V0LCB2ZXJ0aWNhbE9mZnNldCkge1xuICAgIHRoaXMudG9wICs9IHZlcnRpY2FsT2Zmc2V0O1xuICAgIHRoaXMubGVmdCArPSBob3Jpem9udGFsT2Zmc2V0O1xuICAgIHRoaXMucmlnaHQgKz0gaG9yaXpvbnRhbE9mZnNldDtcbiAgICB0aGlzLmJvdHRvbSArPSB2ZXJ0aWNhbE9mZnNldDtcbiAgfVxuXG4gIGlzT3ZlcmxhcHBpbmdNb3VzZShtb3VzZVRvcCwgbW91c2VMZWZ0KSB7XG4gICAgcmV0dXJuICggICh0aGlzLnRvcCA8PSBtb3VzZVRvcClcbiAgICAgICAgICAgJiYgKHRoaXMubGVmdCA8PSBtb3VzZUxlZnQpXG4gICAgICAgICAgICYmICh0aGlzLnJpZ2h0ID4gbW91c2VMZWZ0KVxuICAgICAgICAgICAmJiAodGhpcy5ib3R0b20gPiBtb3VzZVRvcCkgICk7XG4gIH1cblxuICBhcmVPdmVybGFwcGluZyhib3VuZHMpIHtcbiAgICByZXR1cm4gKCAgKHRoaXMudG9wIDwgYm91bmRzLmJvdHRvbSlcbiAgICAgICAgICAgJiYgKHRoaXMubGVmdCA8IGJvdW5kcy5yaWdodClcbiAgICAgICAgICAgJiYgKHRoaXMucmlnaHQgPiBib3VuZHMubGVmdClcbiAgICAgICAgICAgJiYgKHRoaXMuYm90dG9tID4gYm91bmRzLnRvcCkgICk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUJvdW5kaW5nQ2xpZW50UmVjdChib3VuZGluZ0NsaWVudFJlY3QpIHtcbiAgICBjb25zdCB3aW5kb3dTY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQsIC8vL1xuICAgICAgICAgIHdpbmRvd1Njcm9sbExlZnQgPSB3aW5kb3cucGFnZVhPZmZzZXQsICAvLy9cbiAgICAgICAgICB0b3AgPSBib3VuZGluZ0NsaWVudFJlY3QudG9wICsgd2luZG93U2Nyb2xsVG9wLFxuICAgICAgICAgIGxlZnQgPSBib3VuZGluZ0NsaWVudFJlY3QubGVmdCArIHdpbmRvd1Njcm9sbExlZnQsXG4gICAgICAgICAgcmlnaHQgPSBib3VuZGluZ0NsaWVudFJlY3QucmlnaHQgKyB3aW5kb3dTY3JvbGxMZWZ0LFxuICAgICAgICAgIGJvdHRvbSA9IGJvdW5kaW5nQ2xpZW50UmVjdC5ib3R0b20gKyB3aW5kb3dTY3JvbGxUb3AsXG4gICAgICAgICAgYm91bmRzID0gbmV3IEJvdW5kcyh0b3AsIGxlZnQsIHJpZ2h0LCBib3R0b20pO1xuXG4gICAgcmV0dXJuIGJvdW5kcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVG9wTGVmdFdpZHRoQW5kSGVpZ2h0KHRvcCwgbGVmdCwgd2lkdGgsIGhlaWdodCkge1xuICAgIGNvbnN0IGJvdHRvbSA9IHRvcCArIGhlaWdodCxcbiAgICAgICAgICByaWdodCA9IGxlZnQgKyB3aWR0aCxcbiAgICAgICAgICBib3VuZHMgPSBuZXcgQm91bmRzKHRvcCwgbGVmdCwgcmlnaHQsIGJvdHRvbSk7XG5cbiAgICByZXR1cm4gYm91bmRzO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBGT1IgPSBcImZvclwiO1xuZXhwb3J0IGNvbnN0IEJPRFkgPSBcImJvZHlcIjtcbmV4cG9ydCBjb25zdCBOT05FID0gXCJub25lXCI7XG5leHBvcnQgY29uc3QgU1BBQ0UgPSBcIiBcIjtcbmV4cG9ydCBjb25zdCBDTEFTUyA9IFwiY2xhc3NcIjtcbmV4cG9ydCBjb25zdCBXSURUSCA9IFwid2lkdGhcIjtcbmV4cG9ydCBjb25zdCBCTE9DSyA9IFwiYmxvY2tcIjtcbmV4cG9ydCBjb25zdCBIRUlHSFQgPSBcImhlaWdodFwiO1xuZXhwb3J0IGNvbnN0IE9CSkVDVCA9IFwib2JqZWN0XCI7XG5leHBvcnQgY29uc3QgU1RSSU5HID0gXCJzdHJpbmdcIjtcbmV4cG9ydCBjb25zdCBESVNQTEFZID0gXCJkaXNwbGF5XCI7XG5leHBvcnQgY29uc3QgQk9PTEVBTiA9IFwiYm9vbGVhblwiO1xuZXhwb3J0IGNvbnN0IERJU0FCTEVEID0gXCJkaXNhYmxlZFwiO1xuZXhwb3J0IGNvbnN0IEZVTkNUSU9OID0gXCJmdW5jdGlvblwiO1xuZXhwb3J0IGNvbnN0IFdJTERDQVJEID0gXCIqXCI7XG5leHBvcnQgY29uc3QgSFRNTF9GT1IgPSBcImh0bWxGb3JcIjtcbmV4cG9ydCBjb25zdCBVTkRFRklORUQgPSAndW5kZWZpbmVkJztcbmV4cG9ydCBjb25zdCBDTEFTU19OQU1FID0gXCJjbGFzc05hbWVcIjtcbmV4cG9ydCBjb25zdCBBQk9VVF9CTEFOSyA9IFwiYWJvdXQ6YmxhbmtcIjtcbmV4cG9ydCBjb25zdCBFTVBUWV9TVFJJTkcgPSBcIlwiO1xuZXhwb3J0IGNvbnN0IFNWR19OQU1FU1BBQ0VfVVJJID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfUFJPUEVSVElFUyA9IFwiZGVmYXVsdFByb3BlcnRpZXNcIjtcbmV4cG9ydCBjb25zdCBJR05PUkVEX1BST1BFUlRJRVMgPSBcImlnbm9yZWRQcm9wZXJ0aWVzXCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEJPT0xFQU4gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lKHRhcmdldCwgc291cmNlID0ge30pIHtcbiAgdGFyZ2V0ID0geyAuLi50YXJnZXQgfTsgIC8vL1xuXG4gIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXMoc291cmNlKTsgIC8vL1xuXG4gIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICBjb25zdCB0YXJnZXRWYWx1ZSA9IHRhcmdldFtuYW1lXSxcbiAgICAgICAgICBzb3VyY2VWYWx1ZSA9IHNvdXJjZVtuYW1lXSxcbiAgICAgICAgICB0YXJnZXRIYXNPd25Qcm9wZXJ0eSA9IHRhcmdldC5oYXNPd25Qcm9wZXJ0eShuYW1lKTtcblxuICAgIHRhcmdldFtuYW1lXSA9IHRhcmdldEhhc093blByb3BlcnR5ID9cbiAgICAgICAgICAgICAgICAgICAgIGNvbWJpbmVWYWx1ZXModGFyZ2V0VmFsdWUsIHNvdXJjZVZhbHVlKSA6XG4gICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVZhbHVlOyAvLy9cbiAgfSk7XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBydW5lKHRhcmdldCwgbmFtZXMgPSBbXSkge1xuICB0YXJnZXQgPSB7IC4uLnRhcmdldCB9OyAgLy8vXG5cbiAgbmFtZXMuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgIGNvbnN0IHRhcmdldEhhc093blByb3BlcnR5ID0gdGFyZ2V0Lmhhc093blByb3BlcnR5KG5hbWUpO1xuXG4gICAgaWYgKHRhcmdldEhhc093blByb3BlcnR5KSB7XG4gICAgICBkZWxldGUgdGFyZ2V0W25hbWVdO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gY29tYmluZVZhbHVlcyh0YXJnZXRWYWx1ZSwgc291cmNlVmFsdWUpIHtcbiAgY29uc3QgdGFyZ2V0VmFsdWVCb29sZWFuID0gaXNWYWx1ZUJvb2xlYW4odGFyZ2V0VmFsdWUpLFxuICAgICAgICBzb3VyY2VWYWx1ZUJvb2xlYW4gPSBpc1ZhbHVlQm9vbGVhbihzb3VyY2VWYWx1ZSksXG4gICAgICAgIGNvbWJpbmVkVmFsdWUgPSAodGFyZ2V0VmFsdWVCb29sZWFuICYmIHNvdXJjZVZhbHVlQm9vbGVhbikgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRWYWx1ZSA6IC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3RhcmdldFZhbHVlfSAke3NvdXJjZVZhbHVlfWA7XG5cbiAgcmV0dXJuIGNvbWJpbmVkVmFsdWU7XG59XG5cbmZ1bmN0aW9uIGlzVmFsdWVCb29sZWFuKHZhbHVlKSB7XG4gIGNvbnN0IHZhbHVlQm9vbGVhbiA9ICh0eXBlb2YgdmFsdWUgPT09IEJPT0xFQU4pO1xuXG4gIHJldHVybiB2YWx1ZUJvb2xlYW47XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHB1c2goYXJyYXkxLCBhcnJheTIpIHsgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoYXJyYXkxLCBhcnJheTIpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBhdWdtZW50KGFycmF5MSwgYXJyYXkyLCB0ZXN0KSB7XG4gIGFycmF5MSA9IFsgLi4uYXJyYXkxIF07IC8vL1xuXG4gIGFycmF5Mi5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgYXJyYXkxLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gYXJyYXkxO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmxhdHRlbihhcnJheSkge1xuICByZXR1cm4gYXJyYXkucmVkdWNlKChhcnJheSwgZWxlbWVudCkgPT4ge1xuICAgIGFycmF5ID0gYXJyYXkuY29uY2F0KGVsZW1lbnQpOyAgLy8vXG5cbiAgICByZXR1cm4gYXJyYXk7XG4gIH0sIFtdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGd1YXJhbnRlZShhcnJheU9yRWxlbWVudCkge1xuICBhcnJheU9yRWxlbWVudCA9IGFycmF5T3JFbGVtZW50IHx8IFtdO1xuXG4gIHJldHVybiAoYXJyYXlPckVsZW1lbnQgaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICAgYXJyYXlPckVsZW1lbnQgOlxuICAgICAgICAgICAgICBbYXJyYXlPckVsZW1lbnRdO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNTVkdUYWdOYW1lKHRhZ05hbWUpIHtcbiAgcmV0dXJuIHN2Z1RhZ05hbWVzLmluY2x1ZGVzKHRhZ05hbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTVkdBdHRyaWJ1dGVOYW1lKGF0dHJpYnV0ZU5hbWUpIHtcbiAgcmV0dXJuIHN2Z0F0dHJpYnV0ZU5hbWVzLmluY2x1ZGVzKGF0dHJpYnV0ZU5hbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNIVE1MQXR0cmlidXRlTmFtZShhdHRyaWJ1dGVOYW1lKSB7XG4gIHJldHVybiBodG1sQXR0cmlidXRlTmFtZXMuaW5jbHVkZXMoYXR0cmlidXRlTmFtZSk7XG59XG5cbmNvbnN0IHN2Z1RhZ05hbWVzID0gW1xuICAgICAgICBcImFsdEdseXBoXCIsIFwiYW5pbWF0ZVwiLCBcImFuaW1hdGVDb2xvclwiLCBcImFuaW1hdGVNb3Rpb25cIiwgXCJhbmltYXRlVHJhbnNmb3JtXCIsIFwiYW5pbWF0aW9uXCIsIFwiYXVkaW9cIixcbiAgICAgICAgXCJjaXJjbGVcIiwgXCJjbGlwUGF0aFwiLCBcImNvbG9yLXByb2ZpbGVcIiwgXCJjdXJzb3JcIixcbiAgICAgICAgXCJkZWZzXCIsIFwiZGVzY1wiLCBcImRpc2NhcmRcIixcbiAgICAgICAgXCJlbGxpcHNlXCIsXG4gICAgICAgIFwiZmVCbGVuZFwiLCBcImZlQ29sb3JNYXRyaXhcIiwgXCJmZUNvbXBvbmVudFRyYW5zZmVyXCIsIFwiZmVDb21wb3NpdGVcIiwgXCJmZUNvbnZvbHZlTWF0cml4XCIsIFwiZmVEaWZmdXNlTGlnaHRpbmdcIiwgXCJmZURpc3BsYWNlbWVudE1hcFwiLCBcImZlRGlzdGFudExpZ2h0XCIsIFwiZmVEcm9wU2hhZG93XCIsIFwiZmVGbG9vZFwiLCBcImZlRnVuY0FcIiwgXCJmZUZ1bmNCXCIsIFwiZmVGdW5jR1wiLCBcImZlRnVuY1JcIiwgXCJmZUdhdXNzaWFuQmx1clwiLCBcImZlSW1hZ2VcIiwgXCJmZU1lcmdlXCIsIFwiZmVNZXJnZU5vZGVcIiwgXCJmZU1vcnBob2xvZ3lcIiwgXCJmZU9mZnNldFwiLCBcImZlUG9pbnRMaWdodFwiLCBcImZlU3BlY3VsYXJMaWdodGluZ1wiLCBcImZlU3BvdExpZ2h0XCIsIFwiZmVUaWxlXCIsIFwiZmVUdXJidWxlbmNlXCIsIFwiZmlsdGVyXCIsIFwiZm9udFwiLCBcImZvbnQtZmFjZVwiLCBcImZvbnQtZmFjZS1mb3JtYXRcIiwgXCJmb250LWZhY2UtbmFtZVwiLCBcImZvbnQtZmFjZS11cmlcIiwgXCJmb3JlaWduT2JqZWN0XCIsXG4gICAgICAgIFwiZ1wiLCBcImdseXBoXCIsIFwiZ2x5cGhSZWZcIixcbiAgICAgICAgXCJoYW5kbGVyXCIsIFwiaGF0Y2hcIiwgXCJoYXRjaHBhdGhcIiwgXCJoa2VyblwiLFxuICAgICAgICBcImltYWdlXCIsIFwibGluZVwiLCBcImxpbmVhckdyYWRpZW50XCIsXG4gICAgICAgIFwibGlzdGVuZXJcIixcbiAgICAgICAgXCJtYXJrZXJcIiwgXCJtYXNrXCIsIFwibWVzaFwiLCBcIm1lc2hncmFkaWVudFwiLCBcIm1lc2hwYXRjaFwiLCBcIm1lc2hyb3dcIiwgXCJtZXRhZGF0YVwiLCBcIm1pc3NpbmctZ2x5cGhcIiwgXCJtcGF0aFwiLFxuICAgICAgICBcInBhdGhcIiwgXCJwYXR0ZXJuXCIsIFwicG9seWdvblwiLCBcInBvbHlsaW5lXCIsIFwicHJlZmV0Y2hcIixcbiAgICAgICAgXCJyYWRpYWxHcmFkaWVudFwiLCBcInJlY3RcIixcbiAgICAgICAgXCJzY3JpcHRcIiwgXCJzZXRcIiwgXCJzb2xpZGNvbG9yXCIsIFwic3RvcFwiLCBcInN0eWxlXCIsIFwic3ZnXCIsIFwic3dpdGNoXCIsIFwic3ltYm9sXCIsXG4gICAgICAgIFwidGJyZWFrXCIsIFwidGV4dFwiLCBcInRleHRBcmVhXCIsIFwidGV4dFBhdGhcIiwgXCJ0aXRsZVwiLCBcInRyZWZcIiwgXCJ0c3BhblwiLFxuICAgICAgICBcInVua25vd25cIiwgXCJ1c2VcIixcbiAgICAgICAgXCJ2aWRlb1wiLCBcInZpZXdcIiwgXCJ2a2VyblwiXG4gICAgICBdLFxuICAgICAgc3ZnQXR0cmlidXRlTmFtZXMgPSBbXG4gICAgICAgIFwiYWNjZW50LWhlaWdodFwiLCBcImFjY3VtdWxhdGVcIiwgXCJhZGRpdGl2ZVwiLCBcImFsaWdubWVudC1iYXNlbGluZVwiLCBcImFscGhhYmV0aWNcIiwgXCJhbXBsaXR1ZGVcIiwgXCJhcmFiaWMtZm9ybVwiLCBcImFzY2VudFwiLCBcImF0dHJpYnV0ZU5hbWVcIiwgXCJhdHRyaWJ1dGVUeXBlXCIsIFwiYXppbXV0aFwiLFxuICAgICAgICBcImJhbmR3aWR0aFwiLCBcImJhc2VGcmVxdWVuY3lcIiwgXCJiYXNlUHJvZmlsZVwiLCBcImJhc2VsaW5lLXNoaWZ0XCIsIFwiYmJveFwiLCBcImJlZ2luXCIsIFwiYmlhc1wiLCBcImJ5XCIsXG4gICAgICAgIFwiY2FsY01vZGVcIiwgXCJjYXAtaGVpZ2h0XCIsIFwiY2xpcFwiLCBcImNsYXNzTmFtZVwiLCBcImNsaXAtcGF0aFwiLCBcImNsaXAtcnVsZVwiLCBcImNsaXBQYXRoVW5pdHNcIiwgXCJjb2xvclwiLCBcImNvbG9yLWludGVycG9sYXRpb25cIiwgXCJjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnNcIiwgXCJjb2xvci1wcm9maWxlXCIsIFwiY29sb3ItcmVuZGVyaW5nXCIsIFwiY29udGVudFNjcmlwdFR5cGVcIiwgXCJjb250ZW50U3R5bGVUeXBlXCIsIFwiY3Jvc3NvcmlnaW5cIiwgXCJjdXJzb3JcIiwgXCJjeFwiLCBcImN5XCIsXG4gICAgICAgIFwiZFwiLCBcImRlZmF1bHRBY3Rpb25cIiwgXCJkZXNjZW50XCIsIFwiZGlmZnVzZUNvbnN0YW50XCIsIFwiZGlyZWN0aW9uXCIsIFwiZGlzcGxheVwiLCBcImRpdmlzb3JcIiwgXCJkb21pbmFudC1iYXNlbGluZVwiLCBcImRvd25sb2FkXCIsIFwiZHVyXCIsIFwiZHhcIiwgXCJkeVwiLFxuICAgICAgICBcImVkZ2VNb2RlXCIsIFwiZWRpdGFibGVcIiwgXCJlbGV2YXRpb25cIiwgXCJlbmFibGUtYmFja2dyb3VuZFwiLCBcImVuZFwiLCBcImV2ZW50XCIsIFwiZXhwb25lbnRcIiwgXCJleHRlcm5hbFJlc291cmNlc1JlcXVpcmVkXCIsXG4gICAgICAgIFwiZmlsbFwiLCBcImZpbGwtb3BhY2l0eVwiLCBcImZpbGwtcnVsZVwiLCBcImZpbHRlclwiLCBcImZpbHRlclJlc1wiLCBcImZpbHRlclVuaXRzXCIsIFwiZmxvb2QtY29sb3JcIiwgXCJmbG9vZC1vcGFjaXR5XCIsIFwiZm9jdXNIaWdobGlnaHRcIiwgXCJmb2N1c2FibGVcIiwgXCJmb250LWZhbWlseVwiLCBcImZvbnQtc2l6ZVwiLCBcImZvbnQtc2l6ZS1hZGp1c3RcIiwgXCJmb250LXN0cmV0Y2hcIiwgXCJmb250LXN0eWxlXCIsIFwiZm9udC12YXJpYW50XCIsIFwiZm9udC13ZWlnaHRcIiwgXCJmb3JtYXRcIiwgXCJmclwiLCBcImZyb21cIiwgXCJmeFwiLCBcImZ5XCIsXG4gICAgICAgIFwiZzFcIiwgXCJnMlwiLCBcImdseXBoLW5hbWVcIiwgXCJnbHlwaC1vcmllbnRhdGlvbi1ob3Jpem9udGFsXCIsIFwiZ2x5cGgtb3JpZW50YXRpb24tdmVydGljYWxcIiwgXCJnbHlwaFJlZlwiLCBcImdyYWRpZW50VHJhbnNmb3JtXCIsIFwiZ3JhZGllbnRVbml0c1wiLFxuICAgICAgICBcImhhbmRsZXJcIiwgXCJoYW5naW5nXCIsIFwiaGF0Y2hDb250ZW50VW5pdHNcIiwgXCJoYXRjaFVuaXRzXCIsIFwiaGVpZ2h0XCIsIFwiaG9yaXotYWR2LXhcIiwgXCJob3Jpei1vcmlnaW4teFwiLCBcImhvcml6LW9yaWdpbi15XCIsIFwiaHJlZlwiLCBcImhyZWZsYW5nXCIsXG4gICAgICAgIFwiaWRcIiwgXCJpZGVvZ3JhcGhpY1wiLCBcImltYWdlLXJlbmRlcmluZ1wiLCBcImluXCIsIFwiaW4yXCIsIFwiaW5pdGlhbFZpc2liaWxpdHlcIiwgXCJpbnRlcmNlcHRcIixcbiAgICAgICAgXCJrXCIsIFwiazFcIiwgXCJrMlwiLCBcImszXCIsIFwiazRcIiwgXCJrZXJuZWxNYXRyaXhcIiwgXCJrZXJuZWxVbml0TGVuZ3RoXCIsIFwia2VybmluZ1wiLCBcImtleVBvaW50c1wiLCBcImtleVNwbGluZXNcIiwgXCJrZXlUaW1lc1wiLFxuICAgICAgICBcImxlbmd0aEFkanVzdFwiLCBcImxldHRlci1zcGFjaW5nXCIsIFwibGlnaHRpbmctY29sb3JcIiwgXCJsaW1pdGluZ0NvbmVBbmdsZVwiLCBcImxvY2FsXCIsXG4gICAgICAgIFwibWFya2VyLWVuZFwiLCBcIm1hcmtlci1taWRcIiwgXCJtYXJrZXItc3RhcnRcIiwgXCJtYXJrZXJIZWlnaHRcIiwgXCJtYXJrZXJVbml0c1wiLCBcIm1hcmtlcldpZHRoXCIsIFwibWFza1wiLCBcIm1hc2tDb250ZW50VW5pdHNcIiwgXCJtYXNrVW5pdHNcIiwgXCJtYXRoZW1hdGljYWxcIiwgXCJtYXhcIiwgXCJtZWRpYVwiLCBcIm1lZGlhQ2hhcmFjdGVyRW5jb2RpbmdcIiwgXCJtZWRpYUNvbnRlbnRFbmNvZGluZ3NcIiwgXCJtZWRpYVNpemVcIiwgXCJtZWRpYVRpbWVcIiwgXCJtZXRob2RcIiwgXCJtaW5cIiwgXCJtb2RlXCIsXG4gICAgICAgIFwibmFtZVwiLCBcIm5hdi1kb3duXCIsIFwibmF2LWRvd24tbGVmdFwiLCBcIm5hdi1kb3duLXJpZ2h0XCIsIFwibmF2LWxlZnRcIiwgXCJuYXYtbmV4dFwiLCBcIm5hdi1wcmV2XCIsIFwibmF2LXJpZ2h0XCIsIFwibmF2LXVwXCIsIFwibmF2LXVwLWxlZnRcIiwgXCJuYXYtdXAtcmlnaHRcIiwgXCJudW1PY3RhdmVzXCIsXG4gICAgICAgIFwib2JzZXJ2ZXJcIiwgXCJvZmZzZXRcIiwgXCJvcGFjaXR5XCIsIFwib3BlcmF0b3JcIiwgXCJvcmRlclwiLCBcIm9yaWVudFwiLCBcIm9yaWVudGF0aW9uXCIsIFwib3JpZ2luXCIsIFwib3ZlcmZsb3dcIiwgXCJvdmVybGF5XCIsIFwib3ZlcmxpbmUtcG9zaXRpb25cIiwgXCJvdmVybGluZS10aGlja25lc3NcIixcbiAgICAgICAgXCJwYW5vc2UtMVwiLCBcInBhdGhcIiwgXCJwYXRoTGVuZ3RoXCIsIFwicGF0dGVybkNvbnRlbnRVbml0c1wiLCBcInBhdHRlcm5UcmFuc2Zvcm1cIiwgXCJwYXR0ZXJuVW5pdHNcIiwgXCJwaGFzZVwiLCBcInBpdGNoXCIsIFwicGxheWJhY2tPcmRlclwiLCBcInBsYXliYWNrb3JkZXJcIiwgXCJwb2ludGVyLWV2ZW50c1wiLCBcInBvaW50c1wiLCBcInBvaW50c0F0WFwiLCBcInBvaW50c0F0WVwiLCBcInBvaW50c0F0WlwiLCBcInByZXNlcnZlQWxwaGFcIiwgXCJwcmVzZXJ2ZUFzcGVjdFJhdGlvXCIsIFwicHJpbWl0aXZlVW5pdHNcIiwgXCJwcm9wYWdhdGVcIixcbiAgICAgICAgXCJyXCIsIFwicmFkaXVzXCIsIFwicmVmWFwiLCBcInJlZllcIiwgXCJyZW5kZXJpbmctaW50ZW50XCIsIFwicmVwZWF0Q291bnRcIiwgXCJyZXBlYXREdXJcIiwgXCJyZXF1aXJlZEV4dGVuc2lvbnNcIiwgXCJyZXF1aXJlZEZlYXR1cmVzXCIsIFwicmVxdWlyZWRGb250c1wiLCBcInJlcXVpcmVkRm9ybWF0c1wiLCBcInJlc3RhcnRcIiwgXCJyZXN1bHRcIiwgXCJyb3RhdGVcIiwgXCJyeFwiLCBcInJ5XCIsXG4gICAgICAgIFwic2NhbGVcIiwgXCJzZWVkXCIsIFwic2hhcGUtcmVuZGVyaW5nXCIsIFwic2lkZVwiLCBcInNsb3BlXCIsIFwic25hcHNob3RUaW1lXCIsIFwic3BhY2luZ1wiLCBcInNwZWN1bGFyQ29uc3RhbnRcIiwgXCJzcGVjdWxhckV4cG9uZW50XCIsIFwic3ByZWFkTWV0aG9kXCIsIFwic3JjXCIsIFwic3RhcnRPZmZzZXRcIiwgXCJzdGREZXZpYXRpb25cIiwgXCJzdGVtaFwiLCBcInN0ZW12XCIsIFwic3RpdGNoVGlsZXNcIiwgXCJzdG9wLWNvbG9yXCIsIFwic3RvcC1vcGFjaXR5XCIsIFwic3RyaWtldGhyb3VnaC1wb3NpdGlvblwiLCBcInN0cmlrZXRocm91Z2gtdGhpY2tuZXNzXCIsIFwic3RyaW5nXCIsIFwic3Ryb2tlXCIsIFwic3Ryb2tlLWRhc2hhcnJheVwiLCBcInN0cm9rZS1kYXNob2Zmc2V0XCIsIFwic3Ryb2tlLWxpbmVjYXBcIiwgXCJzdHJva2UtbGluZWpvaW5cIiwgXCJzdHJva2UtbWl0ZXJsaW1pdFwiLCBcInN0cm9rZS1vcGFjaXR5XCIsIFwic3Ryb2tlLXdpZHRoXCIsIFwic3R5bGVcIiwgXCJzdXJmYWNlU2NhbGVcIiwgXCJzeW5jQmVoYXZpb3JcIiwgXCJzeW5jQmVoYXZpb3JEZWZhdWx0XCIsIFwic3luY01hc3RlclwiLCBcInN5bmNUb2xlcmFuY2VcIiwgXCJzeW5jVG9sZXJhbmNlRGVmYXVsdFwiLCBcInN5c3RlbUxhbmd1YWdlXCIsXG4gICAgICAgIFwidGFibGVWYWx1ZXNcIiwgXCJ0YXJnZXRcIiwgXCJ0YXJnZXRYXCIsIFwidGFyZ2V0WVwiLCBcInRleHQtYW5jaG9yXCIsIFwidGV4dC1kZWNvcmF0aW9uXCIsIFwidGV4dC1yZW5kZXJpbmdcIiwgXCJ0ZXh0TGVuZ3RoXCIsIFwidGltZWxpbmVCZWdpblwiLCBcInRpbWVsaW5lYmVnaW5cIiwgXCJ0aXRsZVwiLCBcInRvXCIsIFwidHJhbnNmb3JtXCIsIFwidHJhbnNmb3JtQmVoYXZpb3JcIiwgXCJ0eXBlXCIsXG4gICAgICAgIFwidTFcIiwgXCJ1MlwiLCBcInVuZGVybGluZS1wb3NpdGlvblwiLCBcInVuZGVybGluZS10aGlja25lc3NcIiwgXCJ1bmljb2RlXCIsIFwidW5pY29kZS1iaWRpXCIsIFwidW5pY29kZS1yYW5nZVwiLCBcInVuaXRzLXBlci1lbVwiLFxuICAgICAgICBcInYtYWxwaGFiZXRpY1wiLCBcInYtaGFuZ2luZ1wiLCBcInYtaWRlb2dyYXBoaWNcIiwgXCJ2LW1hdGhlbWF0aWNhbFwiLCBcInZhbHVlc1wiLCBcInZlcnNpb25cIiwgXCJ2ZXJ0LWFkdi15XCIsIFwidmVydC1vcmlnaW4teFwiLCBcInZlcnQtb3JpZ2luLXlcIiwgXCJ2aWV3Qm94XCIsIFwidmlld1RhcmdldFwiLCBcInZpc2liaWxpdHlcIixcbiAgICAgICAgXCJ3aWR0aFwiLCBcIndpZHRoc1wiLCBcIndvcmQtc3BhY2luZ1wiLCBcIndyaXRpbmctbW9kZVwiLFxuICAgICAgICBcInhcIiwgXCJ4LWhlaWdodFwiLCBcIngxXCIsIFwieDJcIiwgXCJ4Q2hhbm5lbFNlbGVjdG9yXCIsXG4gICAgICAgIFwieVwiLCBcInkxXCIsIFwieTJcIiwgXCJ5Q2hhbm5lbFNlbGVjdG9yXCIsXG4gICAgICAgIFwielwiLCBcInpvb21BbmRQYW5cIlxuICAgICAgXSxcbiAgICAgIGh0bWxBdHRyaWJ1dGVOYW1lcyA9IFtcbiAgICAgICAgXCJhY2NlcHRcIiwgXCJhY2NlcHRDaGFyc2V0XCIsIFwiYWNjZXNzS2V5XCIsIFwiYWN0aW9uXCIsIFwiYWxsb3dcIiwgXCJhbGxvd0Z1bGxTY3JlZW5cIiwgXCJhbGxvd1RyYW5zcGFyZW5jeVwiLCBcImFsdFwiLCBcImFzeW5jXCIsIFwiYXV0b0NvbXBsZXRlXCIsIFwiYXV0b0ZvY3VzXCIsIFwiYXV0b1BsYXlcIixcbiAgICAgICAgXCJjYXB0dXJlXCIsIFwiY2VsbFBhZGRpbmdcIiwgXCJjZWxsU3BhY2luZ1wiLCBcImNoYWxsZW5nZVwiLCBcImNoYXJTZXRcIiwgXCJjaGVja2VkXCIsIFwiY2l0ZVwiLCBcImNsYXNzSURcIiwgXCJjbGFzc05hbWVcIiwgXCJjb2xTcGFuXCIsIFwiY29sc1wiLCBcImNvbnRlbnRcIiwgXCJjb250ZW50RWRpdGFibGVcIiwgXCJjb250ZXh0TWVudVwiLCBcImNvbnRyb2xzXCIsIFwiY29vcmRzXCIsIFwiY3Jvc3NPcmlnaW5cIixcbiAgICAgICAgXCJkYXRhXCIsIFwiZGF0ZVRpbWVcIiwgXCJkZWZhdWx0XCIsIFwiZGVmZXJcIiwgXCJkaXJcIiwgXCJkaXNhYmxlZFwiLCBcImRvd25sb2FkXCIsIFwiZHJhZ2dhYmxlXCIsXG4gICAgICAgIFwiZW5jVHlwZVwiLFxuICAgICAgICBcImZvcm1cIiwgXCJmb3JtQWN0aW9uXCIsIFwiZm9ybUVuY1R5cGVcIiwgXCJmb3JtTWV0aG9kXCIsIFwiZm9ybU5vVmFsaWRhdGVcIiwgXCJmb3JtVGFyZ2V0XCIsIFwiZnJhbWVCb3JkZXJcIixcbiAgICAgICAgXCJoZWFkZXJzXCIsIFwiaGVpZ2h0XCIsIFwiaGlkZGVuXCIsIFwiaGlnaFwiLCBcImhyZWZcIiwgXCJocmVmTGFuZ1wiLCBcImh0bWxGb3JcIiwgXCJodHRwRXF1aXZcIixcbiAgICAgICAgXCJpY29uXCIsIFwiaWRcIiwgXCJpbnB1dE1vZGVcIiwgXCJpbnRlZ3JpdHlcIiwgXCJpc1wiLFxuICAgICAgICBcImtleVBhcmFtc1wiLCBcImtleVR5cGVcIiwgXCJraW5kXCIsXG4gICAgICAgIFwibGFiZWxcIiwgXCJsYW5nXCIsIFwibGlzdFwiLCBcImxvb3BcIiwgXCJsb3dcIixcbiAgICAgICAgXCJtYW5pZmVzdFwiLCBcIm1hcmdpbkhlaWdodFwiLCBcIm1hcmdpbldpZHRoXCIsIFwibWF4XCIsIFwibWF4TGVuZ3RoXCIsIFwibWVkaWFcIiwgXCJtZWRpYUdyb3VwXCIsIFwibWV0aG9kXCIsIFwibWluXCIsIFwibWluTGVuZ3RoXCIsIFwibXVsdGlwbGVcIiwgXCJtdXRlZFwiLFxuICAgICAgICBcIm5hbWVcIiwgXCJub1ZhbGlkYXRlXCIsIFwibm9uY2VcIixcbiAgICAgICAgXCJvcGVuXCIsIFwib3B0aW11bVwiLFxuICAgICAgICBcInBhdHRlcm5cIiwgXCJwbGFjZWhvbGRlclwiLCBcInBvc3RlclwiLCBcInByZWxvYWRcIiwgXCJwcm9maWxlXCIsXG4gICAgICAgIFwicmFkaW9Hcm91cFwiLCBcInJlYWRPbmx5XCIsIFwicmVsXCIsIFwicmVxdWlyZWRcIiwgXCJyZXZlcnNlZFwiLCBcInJvbGVcIiwgXCJyb3dTcGFuXCIsIFwicm93c1wiLFxuICAgICAgICBcInNhbmRib3hcIiwgXCJzY29wZVwiLCBcInNjb3BlZFwiLCBcInNjcm9sbGluZ1wiLCBcInNlYW1sZXNzXCIsIFwic2VsZWN0ZWRcIiwgXCJzaGFwZVwiLCBcInNpemVcIiwgXCJzaXplc1wiLCBcInNwYW5cIiwgXCJzcGVsbENoZWNrXCIsIFwic3JjXCIsIFwic3JjRG9jXCIsIFwic3JjTGFuZ1wiLCBcInNyY1NldFwiLCBcInN0YXJ0XCIsIFwic3RlcFwiLCBcInN0eWxlXCIsIFwic3VtbWFyeVwiLFxuICAgICAgICBcInRhYkluZGV4XCIsIFwidGFyZ2V0XCIsIFwidGl0bGVcIiwgXCJ0eXBlXCIsXG4gICAgICAgIFwidXNlTWFwXCIsXG4gICAgICAgIFwidmFsdWVcIixcbiAgICAgICAgXCJ3aWR0aFwiLFxuICAgICAgICBcIndtb2RlXCIsXG4gICAgICAgIFwid3JhcFwiXG4gICAgICBdO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgV0lMRENBUkQgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhkb21FbGVtZW50cykge1xuICBjb25zdCBkb21FbGVtZW50c1dpdGhFbGVtZW50cyA9IGZpbHRlckRPTU5vZGVzKGRvbUVsZW1lbnRzLCAoZG9tRWxlbWVudCkgPT4gKGRvbUVsZW1lbnQuX19lbGVtZW50X18gIT09IHVuZGVmaW5lZCkpLFxuICAgICAgICBlbGVtZW50cyA9IGRvbUVsZW1lbnRzV2l0aEVsZW1lbnRzLm1hcCgoZG9tRWxlbWVudCkgPT4gZG9tRWxlbWVudC5fX2VsZW1lbnRfXyk7XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZShkb21Ob2RlLCBoZWlnaHQsIGFzY2VuZGFudERPTU5vZGVzID0gW10pIHtcbiAgaWYgKGhlaWdodCA+IDApIHtcbiAgICBjb25zdCBwYXJlbnRET01Ob2RlID0gZG9tTm9kZS5wYXJlbnRFbGVtZW50OyAgLy8vXG5cbiAgICBpZiAocGFyZW50RE9NTm9kZSAhPT0gbnVsbCkge1xuICAgICAgYXNjZW5kYW50RE9NTm9kZXMucHVzaChwYXJlbnRET01Ob2RlKTtcblxuICAgICAgaGVpZ2h0LS07XG5cbiAgICAgIGFzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUocGFyZW50RE9NTm9kZSwgaGVpZ2h0LCBhc2NlbmRhbnRET01Ob2Rlcyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFzY2VuZGFudERPTU5vZGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUoZG9tTm9kZSwgZGVwdGgsIGRlc2NlbmRhbnRET01Ob2RlcyA9IFtdKSB7XG4gIGlmIChkZXB0aCA+IDApIHtcbiAgICBjb25zdCBjaGlsZERPTU5vZGVzID0gZG9tTm9kZS5jaGlsZE5vZGVzOyAgLy8vXG5cbiAgICBwdXNoKGRlc2NlbmRhbnRET01Ob2RlcywgY2hpbGRET01Ob2Rlcyk7XG5cbiAgICBkZXB0aC0tO1xuXG4gICAgY2hpbGRET01Ob2Rlcy5mb3JFYWNoKChjaGlsZERPTU5vZGUpID0+IGRlc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlKGNoaWxkRE9NTm9kZSwgZGVwdGgsIGRlc2NlbmRhbnRET01Ob2RlcykpO1xuICB9XG5cbiAgcmV0dXJuIGRlc2NlbmRhbnRET01Ob2Rlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckRPTU5vZGVzQnlTZWxlY3Rvcihkb21Ob2Rlcywgc2VsZWN0b3IpIHtcbiAgY29uc3QgZmlsdGVyZWRET01Ob2RlcyA9IGZpbHRlckRPTU5vZGVzKGRvbU5vZGVzLCAoZG9tTm9kZSkgPT4gZG9tTm9kZU1hdGNoZXNTZWxlY3Rvcihkb21Ob2RlLCBzZWxlY3RvcikpO1xuXG4gIHJldHVybiBmaWx0ZXJlZERPTU5vZGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZG9tTm9kZU1hdGNoZXNTZWxlY3Rvcihkb21Ob2RlLCBzZWxlY3Rvcikge1xuICBjb25zdCBkb21Ob2RlVHlwZSA9IGRvbU5vZGUubm9kZVR5cGU7XG5cbiAgc3dpdGNoIChkb21Ob2RlVHlwZSkge1xuICAgIGNhc2UgTm9kZS5FTEVNRU5UX05PREU6IHtcbiAgICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb21Ob2RlOyAvLy9cblxuICAgICAgcmV0dXJuIGRvbUVsZW1lbnQubWF0Y2hlcyhzZWxlY3Rvcik7XG4gICAgfVxuXG4gICAgY2FzZSBOb2RlLlRFWFRfTk9ERToge1xuICAgICAgaWYgKHNlbGVjdG9yID09PSBXSUxEQ0FSRCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJET01Ob2Rlcyhkb21Ob2RlcywgdGVzdCkge1xuICBjb25zdCBmaWx0ZXJlZERPTU5vZGVzID0gW10sXG4gICAgICAgIGRvbU5vZGVzTGVuZ3RoID0gZG9tTm9kZXMubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkb21Ob2Rlc0xlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGRvbU5vZGUgPSBkb21Ob2Rlc1tpbmRleF0sXG4gICAgICAgICAgcmVzdWx0ID0gdGVzdChkb21Ob2RlKTtcblxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIGZpbHRlcmVkRE9NTm9kZXMucHVzaChkb21Ob2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmlsdGVyZWRET01Ob2Rlcztcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBXSUxEQ0FSRCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGRvbU5vZGVNYXRjaGVzU2VsZWN0b3IsIGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzLCBmaWx0ZXJET01Ob2Rlc0J5U2VsZWN0b3IsIGFzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUsIGRlc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9kb21cIjtcblxuZnVuY3Rpb24gZ2V0UGFyZW50RWxlbWVudChzZWxlY3RvciA9IFdJTERDQVJEKSB7XG4gIGxldCBwYXJlbnRFbGVtZW50ID0gbnVsbDtcblxuICBjb25zdCBwYXJlbnRET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cbiAgaWYgKHBhcmVudERPTUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICBpZiAocGFyZW50RE9NRWxlbWVudC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgY29uc3QgcGFyZW50RE9NRWxlbWVudHMgPSBbcGFyZW50RE9NRWxlbWVudF0sXG4gICAgICAgICAgICBwYXJlbnRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKHBhcmVudERPTUVsZW1lbnRzKSxcbiAgICAgICAgICAgIGZpcnN0UGFyZW50RWxlbWVudCA9IGZpcnN0KHBhcmVudEVsZW1lbnRzKTtcblxuICAgICAgcGFyZW50RWxlbWVudCA9IGZpcnN0UGFyZW50RWxlbWVudCB8fCBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBnZXRDaGlsZEVsZW1lbnRzKHNlbGVjdG9yID0gV0lMRENBUkQpIHtcbiAgY29uc3QgY2hpbGRET01Ob2RlcyA9IHRoaXMuZG9tRWxlbWVudC5jaGlsZE5vZGVzLFxuICAgICAgICBjaGlsZERPTUVsZW1lbnRzID0gZmlsdGVyRE9NTm9kZXNCeVNlbGVjdG9yKGNoaWxkRE9NTm9kZXMsIHNlbGVjdG9yKSxcbiAgICAgICAgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGNoaWxkRE9NRWxlbWVudHMpO1xuXG4gIHJldHVybiBjaGlsZEVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiBnZXRBc2NlbmRhbnRFbGVtZW50cyhzZWxlY3RvciA9IFdJTERDQVJELCBtYXhpbXVtSGVpZ2h0ID0gSW5maW5pdHkpIHtcbiAgY29uc3QgaGVpZ2h0ID0gbWF4aW11bUhlaWdodCwgLy8vXG4gICAgICAgIGRvbU5vZGUgPSB0aGlzLmRvbUVsZW1lbnQsICAvLy9cbiAgICAgICAgYXNjZW5kYW50RE9NTm9kZXMgPSBhc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlKGRvbU5vZGUsIGhlaWdodCksXG4gICAgICAgIGFzY2VuZGFudERPTUVsZW1lbnRzID0gZmlsdGVyRE9NTm9kZXNCeVNlbGVjdG9yKGFzY2VuZGFudERPTU5vZGVzLCBzZWxlY3RvciksXG4gICAgICAgIGFzY2VuZGFudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoYXNjZW5kYW50RE9NRWxlbWVudHMpO1xuXG4gIHJldHVybiBhc2NlbmRhbnRFbGVtZW50cztcbn1cblxuZnVuY3Rpb24gZ2V0RGVzY2VuZGFudEVsZW1lbnRzKHNlbGVjdG9yID0gV0lMRENBUkQsIG1heGltdW1EZXB0aCA9IEluZmluaXR5KSB7XG4gIGNvbnN0IGRlcHRoID0gbWF4aW11bURlcHRoLCAvLy9cbiAgICAgICAgZG9tTm9kZSA9IHRoaXMuZG9tRWxlbWVudCwgIC8vL1xuICAgICAgICBkZXNjZW5kYW50RE9NTm9kZXMgPSBkZXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZShkb21Ob2RlLCBkZXB0aCksXG4gICAgICAgIGRlc2NlbmRhbnRET01FbGVtZW50cyA9IGZpbHRlckRPTU5vZGVzQnlTZWxlY3RvcihkZXNjZW5kYW50RE9NTm9kZXMsIHNlbGVjdG9yKSxcbiAgICAgICAgZGVzY2VuZGFudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoZGVzY2VuZGFudERPTUVsZW1lbnRzKTtcblxuICByZXR1cm4gZGVzY2VuZGFudEVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiBnZXROZXh0U2libGluZ0VsZW1lbnQoc2VsZWN0b3IgPSBXSUxEQ0FSRCkge1xuICBsZXQgbmV4dFNpYmxpbmdFbGVtZW50ID0gbnVsbDtcblxuICBjb25zdCBuZXh0U2libGluZ0RPTU5vZGUgPSB0aGlzLmRvbUVsZW1lbnQubmV4dFNpYmxpbmc7XG5cbiAgaWYgKChuZXh0U2libGluZ0RPTU5vZGUgIT09IG51bGwpICYmIGRvbU5vZGVNYXRjaGVzU2VsZWN0b3IobmV4dFNpYmxpbmdET01Ob2RlLCBzZWxlY3RvcikpIHtcbiAgICBuZXh0U2libGluZ0VsZW1lbnQgPSBuZXh0U2libGluZ0RPTU5vZGUuX19lbGVtZW50X18gfHwgbnVsbDtcbiAgfVxuXG4gIHJldHVybiBuZXh0U2libGluZ0VsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGdldFByZXZpb3VzU2libGluZ0VsZW1lbnQoc2VsZWN0b3IgPSBXSUxEQ0FSRCkge1xuICBsZXQgcHJldmlvdXNTaWJsaW5nRWxlbWVudCA9IG51bGw7XG5cbiAgY29uc3QgcHJldmlvdXNTaWJsaW5nRE9NTm9kZSA9IHRoaXMuZG9tRWxlbWVudC5wcmV2aW91c1NpYmxpbmc7ICAvLy9cblxuICBpZiAoKHByZXZpb3VzU2libGluZ0RPTU5vZGUgIT09IG51bGwpICYmIGRvbU5vZGVNYXRjaGVzU2VsZWN0b3IocHJldmlvdXNTaWJsaW5nRE9NTm9kZSwgc2VsZWN0b3IpKSB7XG4gICAgcHJldmlvdXNTaWJsaW5nRWxlbWVudCA9IHByZXZpb3VzU2libGluZ0RPTU5vZGUuX19lbGVtZW50X18gfHwgbnVsbDtcbiAgfVxuXG4gIHJldHVybiBwcmV2aW91c1NpYmxpbmdFbGVtZW50O1xufVxuXG5jb25zdCBlbGVtZW50TWl4aW5zID0ge1xuICBnZXRQYXJlbnRFbGVtZW50LFxuICBnZXRDaGlsZEVsZW1lbnRzLFxuICBnZXRBc2NlbmRhbnRFbGVtZW50cyxcbiAgZ2V0RGVzY2VuZGFudEVsZW1lbnRzLFxuICBnZXROZXh0U2libGluZ0VsZW1lbnQsXG4gIGdldFByZXZpb3VzU2libGluZ0VsZW1lbnRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVsZW1lbnRNaXhpbnM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBPZmZzZXQgZnJvbSBcIi4vb2Zmc2V0XCI7XG5pbXBvcnQgQm91bmRzIGZyb20gXCIuL2JvdW5kc1wiO1xuaW1wb3J0IGVsZW1lbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2VsZW1lbnRcIjtcblxuY2xhc3MgVGV4dEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih0ZXh0KSB7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCk7IC8vL1xuXG4gICAgdGhpcy5kb21FbGVtZW50Ll9fZWxlbWVudF9fID0gdGhpcztcbiAgfVxuXG4gIGdldFRleHQoKSB7XG4gICAgY29uc3Qgbm9kZVZhbHVlID0gdGhpcy5kb21FbGVtZW50Lm5vZGVWYWx1ZSxcbiAgICAgICAgICB0ZXh0ID0gbm9kZVZhbHVlOyAvLy9cblxuICAgIHJldHVybiB0ZXh0O1xuICB9XG5cbiAgc2V0VGV4dCh0ZXh0KSB7XG4gICAgY29uc3Qgbm9kZVZhbHVlID0gdGV4dDsgLy8vXG5cbiAgICB0aGlzLmRvbUVsZW1lbnQubm9kZVZhbHVlID0gbm9kZVZhbHVlO1xuICB9XG5cbiAgZ2V0T2Zmc2V0KCkge1xuICAgIGNvbnN0IHRvcCA9IHRoaXMuZG9tRWxlbWVudC5vZmZzZXRUb3AsICAvLy9cbiAgICAgICAgICBsZWZ0ID0gdGhpcy5kb21FbGVtZW50Lm9mZnNldExlZnQsICAvLy9cbiAgICAgICAgICBvZmZzZXQgPSBuZXcgT2Zmc2V0KHRvcCwgbGVmdCk7XG5cbiAgICByZXR1cm4gb2Zmc2V0O1xuICB9XG5cbiAgZ2V0Qm91bmRzKCkge1xuICAgIGNvbnN0IGJvdW5kaW5nQ2xpZW50UmVjdCA9IHRoaXMuZG9tRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICBib3VuZHMgPSBCb3VuZHMuZnJvbUJvdW5kaW5nQ2xpZW50UmVjdChib3VuZGluZ0NsaWVudFJlY3QpO1xuXG4gICAgcmV0dXJuIGJvdW5kcztcbiAgfVxuXG4gIGdldFdpZHRoKCkge1xuICAgIGNvbnN0IGNsaWVudFdpZHRoID0gdGhpcy5kb21FbGVtZW50LmNsaWVudFdpZHRoLFxuICAgICAgICAgIHdpZHRoID0gY2xpZW50V2lkdGg7ICAvLy9cblxuICAgIHJldHVybiB3aWR0aDtcbiAgfVxuXG4gIGdldEhlaWdodCgpIHtcbiAgICBjb25zdCBjbGllbnRIZWlnaHQgPSB0aGlzLmRvbUVsZW1lbnQuY2xpZW50SGVpZ2h0LFxuICAgICAgICAgIGhlaWdodCA9IGNsaWVudEhlaWdodDsgIC8vL1xuXG4gICAgcmV0dXJuIGhlaWdodDtcbiAgfVxuXG4gIHByZXBlbmRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQucHJlcGVuZCh0aGlzKTsgfVxuXG4gIGFwcGVuZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5hcHBlbmQodGhpcyk7IH1cblxuICBhZGRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQuYWRkKHRoaXMpOyB9XG5cbiAgcmVtb3ZlRnJvbShwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQucmVtb3ZlKHRoaXMpOyB9XG5cbiAgaW5zZXJ0QmVmb3JlKHNpYmxpbmdFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NTm9kZSA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQucGFyZW50Tm9kZSxcbiAgICAgICAgICBzaWJsaW5nRE9NRWxlbWVudCA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICBwYXJlbnRET01Ob2RlLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50KTtcbiAgfVxuXG4gIGluc2VydEFmdGVyKHNpYmxpbmdFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NTm9kZSA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQucGFyZW50Tm9kZSxcbiAgICAgICAgICBzaWJsaW5nRE9NRWxlbWVudCA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICBwYXJlbnRET01Ob2RlLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50Lm5leHRTaWJsaW5nKTsgIC8vL1xuICB9XG5cbiAgcmVtb3ZlKCkge1xuICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmUoKTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFRleHRFbGVtZW50LnByb3RvdHlwZSwgZWxlbWVudE1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IFRleHRFbGVtZW50O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGV4dEVsZW1lbnQgZnJvbSBcIi4uL3RleHRFbGVtZW50XCI7XG5cbmltcG9ydCB7IFNUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUZhbHNleUVsZW1lbnRzKGVsZW1lbnRzKSB7XG4gIGVsZW1lbnRzID0gZWxlbWVudHMucmVkdWNlKChlbGVtZW50cywgZWxlbWVudCkgPT4ge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50cztcbiAgfSwgW10pO1xuXG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VTdHJpbmdzV2l0aFRleHRFbGVtZW50cyhlbGVtZW50cykge1xuICBlbGVtZW50cyA9IGVsZW1lbnRzLm1hcCgoZWxlbWVudCkgPT4geyAgLy8vXG4gICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSBTVFJJTkcpIHtcbiAgICAgIGNvbnN0IHRleHQgPSBlbGVtZW50LCAgLy8vXG4gICAgICAgICAgICB0ZXh0RWxlbWVudCA9IG5ldyBUZXh0RWxlbWVudCh0ZXh0KTtcblxuICAgICAgZWxlbWVudCA9IHRleHRFbGVtZW50OyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfSk7XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBjb21iaW5lLCBwcnVuZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvb2JqZWN0XCI7XG5pbXBvcnQgeyBmaXJzdCwgZ3VhcmFudGVlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgaXNIVE1MQXR0cmlidXRlTmFtZSwgaXNTVkdBdHRyaWJ1dGVOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9uYW1lXCI7XG5pbXBvcnQgeyByZW1vdmVGYWxzZXlFbGVtZW50cywgcmVwbGFjZVN0cmluZ3NXaXRoVGV4dEVsZW1lbnRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50c1wiO1xuaW1wb3J0IHsgRk9SLCBDTEFTUywgT0JKRUNULCBIVE1MX0ZPUiwgQ0xBU1NfTkFNRSwgQk9PTEVBTiwgRlVOQ1RJT04sIFNWR19OQU1FU1BBQ0VfVVJJIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5mdW5jdGlvbiBhcHBseVByb3BlcnRpZXMocHJvcGVydGllcywgZGVmYXVsdFByb3BlcnRpZXMsIGlnbm9yZWRQcm9wZXJ0aWVzKSB7XG4gIHRoaXMucHJvcGVydGllcyA9IGNvbWJpbmUocHJvcGVydGllcywgZGVmYXVsdFByb3BlcnRpZXMpO1xuXG4gIHByb3BlcnRpZXMgPSBwcnVuZSh0aGlzLnByb3BlcnRpZXMsIGlnbm9yZWRQcm9wZXJ0aWVzKTsgLy8vXG5cbiAgY29uc3QgeyBuYW1lc3BhY2VVUkkgfSA9IHRoaXMuZG9tRWxlbWVudCxcbiAgICAgICAgc3ZnID0gKG5hbWVzcGFjZVVSSSA9PT0gU1ZHX05BTUVTUEFDRV9VUkkpLCAvLy9cbiAgICAgICAgcHJvcGVydGllc0tleXMgPSBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKSxcbiAgICAgICAgbmFtZXMgPSBwcm9wZXJ0aWVzS2V5czsgIC8vLz1cblxuICBuYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBwcm9wZXJ0aWVzW25hbWVdLFxuICAgICAgICAgIG5hbWVIYW5kbGVyTmFtZSA9IGlzTmFtZUhhbmRsZXJOYW1lKG5hbWUpO1xuXG4gICAgaWYgKG5hbWVIYW5kbGVyTmFtZSkge1xuICAgICAgYWRkSGFuZGxlcih0aGlzLCBuYW1lLCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5hbWVBdHRyaWJ1dGVOYW1lID0gaXNOYW1lQXR0cmlidXRlTmFtZShuYW1lLCBzdmcpO1xuXG4gICAgICBpZiAobmFtZUF0dHJpYnV0ZU5hbWUpIHtcbiAgICAgICAgYWRkQXR0cmlidXRlKHRoaXMsIG5hbWUsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGNoaWxkRWxlbWVudHMgPSBjaGlsZEVsZW1lbnRzRnJvbUVsZW1lbnQodGhpcykgfHwgcHJvcGVydGllcy5jaGlsZEVsZW1lbnRzLCAgLy8vXG4gICAgICAgIGNvbnRleHQgPSB7fTtcblxuICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4ge1xuICAgIHVwZGF0ZUNvbnRleHQoY2hpbGRFbGVtZW50LCBjb250ZXh0KTtcblxuICAgIHRoaXMuYWRkKGNoaWxkRWxlbWVudCk7XG4gIH0pO1xuXG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG59XG5cbmZ1bmN0aW9uIGdldFByb3BlcnRpZXMoKSB7XG4gIHJldHVybiB0aGlzLnByb3BlcnRpZXM7XG59XG5cbmZ1bmN0aW9uIGdldENvbnRleHQoKSB7XG4gIHJldHVybiB0aGlzLmNvbnRleHQ7XG59XG5cbmZ1bmN0aW9uIGFzc2lnbkNvbnRleHQobmFtZXMsIHRoZW5EZWxldGUpIHtcbiAgY29uc3QgYXJndW1lbnRzTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcblxuICBpZiAoYXJndW1lbnRzTGVuZ3RoID09PSAxKSB7XG4gICAgY29uc3QgZmlyc3RBcmd1bWVudCA9IGZpcnN0KGFyZ3VtZW50cyk7XG5cbiAgICBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09IEJPT0xFQU4pIHtcbiAgICAgIG5hbWVzID0gT2JqZWN0LmtleXModGhpcy5jb250ZXh0KTtcblxuICAgICAgdGhlbkRlbGV0ZSA9IGZpcnN0QXJndW1lbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoZW5EZWxldGUgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChhcmd1bWVudHNMZW5ndGggPT09IDApIHtcbiAgICBuYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMuY29udGV4dCk7XG5cbiAgICB0aGVuRGVsZXRlID0gdHJ1ZTtcbiAgfVxuXG4gIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuY29udGV4dFtuYW1lXSxcbiAgICAgICAgICBwcm9wZXJ0eU5hbWUgPSBuYW1lLCAgLy8vXG4gICAgICAgICAgZGVzY3JpcHRvciA9IHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICAgIH07XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgcHJvcGVydHlOYW1lLCBkZXNjcmlwdG9yKTtcblxuICAgIGlmICh0aGVuRGVsZXRlKSB7XG4gICAgICBkZWxldGUgdGhpcy5jb250ZXh0W25hbWVdO1xuICAgIH1cbiAgfSwgW10pO1xufVxuXG5jb25zdCBqc3hNaXhpbnMgPSB7XG4gIGFwcGx5UHJvcGVydGllcyxcbiAgZ2V0UHJvcGVydGllcyxcbiAgZ2V0Q29udGV4dCxcbiAgYXNzaWduQ29udGV4dFxufTtcblxuZXhwb3J0IGRlZmF1bHQganN4TWl4aW5zO1xuXG5mdW5jdGlvbiBjaGlsZEVsZW1lbnRzRnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICBsZXQgY2hpbGRFbGVtZW50cyA9IG51bGw7XG5cbiAgaWYgKHR5cGVvZiBlbGVtZW50LmNoaWxkRWxlbWVudHMgPT09IEZVTkNUSU9OKSB7XG4gICAgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnQuY2hpbGRFbGVtZW50cy5jYWxsKGVsZW1lbnQpO1xuXG4gICAgY2hpbGRFbGVtZW50cyA9IGd1YXJhbnRlZShjaGlsZEVsZW1lbnRzKTtcblxuICAgIGNoaWxkRWxlbWVudHMgPSByZW1vdmVGYWxzZXlFbGVtZW50cyhjaGlsZEVsZW1lbnRzKTtcblxuICAgIGNoaWxkRWxlbWVudHMgPSByZXBsYWNlU3RyaW5nc1dpdGhUZXh0RWxlbWVudHMoY2hpbGRFbGVtZW50cyk7XG4gIH1cblxuICByZXR1cm4gY2hpbGRFbGVtZW50cztcbn1cblxuZnVuY3Rpb24gdXBkYXRlQ29udGV4dChjaGlsZEVsZW1lbnQsIGNvbnRleHQpIHtcbiAgY29uc3QgcGFyZW50Q29udGV4dCA9ICh0eXBlb2YgY2hpbGRFbGVtZW50LnBhcmVudENvbnRleHQgPT09IEZVTkNUSU9OKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRWxlbWVudC5wYXJlbnRDb250ZXh0KCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRWxlbWVudC5jb250ZXh0OyAvLy9cblxuICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHBhcmVudENvbnRleHQpO1xufVxuXG5mdW5jdGlvbiBhZGRIYW5kbGVyKGVsZW1lbnQsIG5hbWUsIHZhbHVlKSB7XG4gIGNvbnN0IGV2ZW50VHlwZSA9IG5hbWUuc3Vic3RyKDIpLnRvTG93ZXJDYXNlKCksIC8vL1xuICAgICAgICBoYW5kbGVyID0gdmFsdWU7ICAvLy9cblxuICBlbGVtZW50Lm9uKGV2ZW50VHlwZSwgaGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJpYnV0ZShlbGVtZW50LCBuYW1lLCB2YWx1ZSkge1xuICBpZiAobmFtZSA9PT0gQ0xBU1NfTkFNRSkge1xuICAgIG5hbWUgPSBDTEFTUztcbiAgfVxuXG4gIGlmIChuYW1lID09PSBIVE1MX0ZPUikge1xuICAgIG5hbWUgPSBGT1I7XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSBPQkpFQ1QpIHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xuXG4gICAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGVsZW1lbnQuZG9tRWxlbWVudFtuYW1lXVtrZXldID0gdmFsdWVba2V5XTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IEJPT0xFQU4pIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHZhbHVlID0gbmFtZTsgLy8vXG5cbiAgICAgIGVsZW1lbnQuYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudC5hZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzTmFtZUhhbmRsZXJOYW1lKG5hbWUpIHtcbiAgcmV0dXJuIC9eb24vLnRlc3QobmFtZSk7XG59XG5cbmZ1bmN0aW9uIGlzTmFtZUF0dHJpYnV0ZU5hbWUobmFtZSwgc3ZnKSB7XG4gIHJldHVybiBzdmcgPyBpc1NWR0F0dHJpYnV0ZU5hbWUobmFtZSkgOiBpc0hUTUxBdHRyaWJ1dGVOYW1lKG5hbWUpXG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBPUEVOX0VWRU5UX1RZUEUgPSBcIm9wZW5cIjtcbmV4cG9ydCBjb25zdCBNT1ZFX0VWRU5UX1RZUEUgPSBcIm1vdmVcIjtcbmV4cG9ydCBjb25zdCBCTFVSX0VWRU5UX1RZUEUgPSBcImJsdXJcIjtcbmV4cG9ydCBjb25zdCBEUkFHX0VWRU5UX1RZUEUgPSBcImRyYWdcIjtcbmV4cG9ydCBjb25zdCBEUk9QX0VWRU5UX1RZUEUgPSBcImRyb3BcIjtcbmV4cG9ydCBjb25zdCBXSEVFTF9FVkVOVF9UWVBFID0gXCJ3aGVlbFwiO1xuZXhwb3J0IGNvbnN0IElOUFVUX0VWRU5UX1RZUEUgPSBcImlucHV0XCI7XG5leHBvcnQgY29uc3QgRk9DVVNfRVZFTlRfVFlQRSA9IFwiZm9jdXNcIjtcbmV4cG9ydCBjb25zdCBDTElDS19FVkVOVF9UWVBFID0gXCJjbGlja1wiO1xuZXhwb3J0IGNvbnN0IEtFWVVQX0VWRU5UX1RZUEUgPSBcImtleXVwXCI7XG5leHBvcnQgY29uc3QgUkVNT1ZFX0VWRU5UX1RZUEUgPSBcInJlbW92ZVwiO1xuZXhwb3J0IGNvbnN0IENIQU5HRV9FVkVOVF9UWVBFID0gXCJjaGFuZ2VcIjtcbmV4cG9ydCBjb25zdCBSRVNJWkVfRVZFTlRfVFlQRSA9IFwicmVzaXplXCI7XG5leHBvcnQgY29uc3QgU0NST0xMX0VWRU5UX1RZUEUgPSBcInNjcm9sbFwiO1xuZXhwb3J0IGNvbnN0IEtFWURPV05fRVZFTlRfVFlQRSA9IFwia2V5ZG93blwiO1xuZXhwb3J0IGNvbnN0IE1PVVNFVVBfRVZFTlRfVFlQRSA9IFwibW91c2V1cFwiO1xuZXhwb3J0IGNvbnN0IEFVWENMSUNLX0VWRU5UX1RZUEUgPSBcImF1eGNsaWNrXCI7XG5leHBvcnQgY29uc3QgRFJBR19PVVRfRVZFTlRfVFlQRSA9IFwiZHJhZ291dFwiO1xuZXhwb3J0IGNvbnN0IE1PVVNFT1VUX0VWRU5UX1RZUEUgPSBcIm1vdXNlb3V0XCI7XG5leHBvcnQgY29uc3QgREJMQ0xJQ0tfRVZFTlRfVFlQRSA9IFwiZGJsY2xpY2tcIjtcbmV4cG9ydCBjb25zdCBNT1VTRU9WRVJfRVZFTlRfVFlQRSA9IFwibW91c2VvdmVyXCI7XG5leHBvcnQgY29uc3QgTU9VU0VET1dOX0VWRU5UX1RZUEUgPSBcIm1vdXNlZG93blwiO1xuZXhwb3J0IGNvbnN0IE1PVVNFTU9WRV9FVkVOVF9UWVBFID0gXCJtb3VzZW1vdmVcIjtcbmV4cG9ydCBjb25zdCBEUkFHX09WRVJfRVZFTlRfVFlQRSA9IFwiZHJhZ292ZXJcIjtcbmV4cG9ydCBjb25zdCBTVE9QX0RSQUdfRVZFTlRfVFlQRSA9IFwic3RvcGRyYWdcIjtcbmV4cG9ydCBjb25zdCBTVEFSVF9EUkFHX0VWRU5UX1RZUEUgPSBcInN0YXJ0ZHJhZ1wiO1xuZXhwb3J0IGNvbnN0IENPTlRFWFRNRU5VX0VWRU5UX1RZUEUgPSBcImNvbnRleHRtZW51XCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgT1BFTl9FVkVOVF9UWVBFLFxuICBNT1ZFX0VWRU5UX1RZUEUsXG4gIEJMVVJfRVZFTlRfVFlQRSxcbiAgRFJBR19FVkVOVF9UWVBFLFxuICBEUk9QX0VWRU5UX1RZUEUsXG4gIFdIRUVMX0VWRU5UX1RZUEUsXG4gIElOUFVUX0VWRU5UX1RZUEUsXG4gIEZPQ1VTX0VWRU5UX1RZUEUsXG4gIENMSUNLX0VWRU5UX1RZUEUsXG4gIEtFWVVQX0VWRU5UX1RZUEUsXG4gIFJFTU9WRV9FVkVOVF9UWVBFLFxuICBDSEFOR0VfRVZFTlRfVFlQRSxcbiAgUkVTSVpFX0VWRU5UX1RZUEUsXG4gIFNDUk9MTF9FVkVOVF9UWVBFLFxuICBLRVlET1dOX0VWRU5UX1RZUEUsXG4gIE1PVVNFVVBfRVZFTlRfVFlQRSxcbiAgQVVYQ0xJQ0tfRVZFTlRfVFlQRSxcbiAgRFJBR19PVVRfRVZFTlRfVFlQRSxcbiAgTU9VU0VPVVRfRVZFTlRfVFlQRSxcbiAgREJMQ0xJQ0tfRVZFTlRfVFlQRSxcbiAgTU9VU0VPVkVSX0VWRU5UX1RZUEUsXG4gIE1PVVNFRE9XTl9FVkVOVF9UWVBFLFxuICBNT1VTRU1PVkVfRVZFTlRfVFlQRSxcbiAgRFJBR19PVkVSX0VWRU5UX1RZUEUsXG4gIFNUT1BfRFJBR19FVkVOVF9UWVBFLFxuICBTVEFSVF9EUkFHX0VWRU5UX1RZUEUsXG4gIENPTlRFWFRNRU5VX0VWRU5UX1RZUEVcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEtFWVVQX0VWRU5UX1RZUEUsIEtFWURPV05fRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9ldmVudFR5cGVzXCI7XG5cbmZ1bmN0aW9uIG9uS2V5VXAoa2V5VXBIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub24oS0VZVVBfRVZFTlRfVFlQRSwga2V5VXBIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvZmZLZXlVcChrZXlVcEhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vZmYoS0VZVVBfRVZFTlRfVFlQRSwga2V5VXBIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvbktleURvd24oa2V5RG93bkhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vbihLRVlET1dOX0VWRU5UX1RZUEUsIGtleURvd25IYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvZmZLZXlEb3duKGtleURvd25IYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmKEtFWURPV05fRVZFTlRfVFlQRSwga2V5RG93bkhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmNvbnN0IGtleU1peGlucyA9IHtcbiAgb25LZXlVcCxcbiAgb2ZmS2V5VXAsXG4gIG9uS2V5RG93bixcbiAgb2ZmS2V5RG93blxufTtcblxuZXhwb3J0IGRlZmF1bHQga2V5TWl4aW5zO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDTElDS19FVkVOVF9UWVBFIH0gZnJvbSBcIi4uL2V2ZW50VHlwZXNcIjtcblxuZnVuY3Rpb24gb25DbGljayhjbGlja0hhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vbihDTElDS19FVkVOVF9UWVBFLCBjbGlja0hhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9mZkNsaWNrKGNsaWNrSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZihDTElDS19FVkVOVF9UWVBFLCBjbGlja0hhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmNvbnN0IGNsaWNrTWl4aW5zID0ge1xuICBvbkNsaWNrLFxuICBvZmZDbGlja1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xpY2tNaXhpbnM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIGdldFN0YXRlKCkge1xuICByZXR1cm4gdGhpcy5zdGF0ZTtcbn1cblxuZnVuY3Rpb24gc2V0U3RhdGUoc3RhdGUpIHtcbiAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVTdGF0ZShzdGF0ZSkge1xuICBPYmplY3QuYXNzaWduKHRoaXMuc3RhdGUsIHN0YXRlKTtcbn1cblxuY29uc3Qgc3RhdGVNaXhpbnMgPSB7XG4gIGdldFN0YXRlLFxuICBzZXRTdGF0ZSxcbiAgdXBkYXRlU3RhdGVcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN0YXRlTWl4aW5zO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgVEVYVF9IVE1MX0NPTlRFTlRfVFlQRSA9IFwidGV4dC9odG1sXCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJFU0laRV9FVkVOVF9UWVBFIH0gZnJvbSBcIi4uL2V2ZW50VHlwZXNcIjtcbmltcG9ydCB7IE9CSkVDVCwgQUJPVVRfQkxBTksgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBURVhUX0hUTUxfQ09OVEVOVF9UWVBFIH0gZnJvbSBcIi4uL2NvbnRlbnRUeXBlc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gb25SZXNpemUocmVzaXplSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uKFJFU0laRV9FVkVOVF9UWVBFLCByZXNpemVIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gb2ZmUmVzaXplKHJlc2l6ZUhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vZmYoUkVTSVpFX0VWRU5UX1RZUEUsIHJlc2l6ZUhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIGFkZFJlc2l6ZU9iamVjdCgpIHtcbiAgY29uc3QgcmVzaXplT2JqZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChPQkpFQ1QpLFxuICAgICAgICBzdHlsZSA9IGBkaXNwbGF5OiBibG9jazsgXG4gICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gICAgICAgICAgICAgICAgIHRvcDogMDsgXG4gICAgICAgICAgICAgICAgIGxlZnQ6IDA7IFxuICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7IFxuICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTsgXG4gICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47IFxuICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgXG4gICAgICAgICAgICAgICAgIHotaW5kZXg6IC0xO2AsXG4gICAgICAgIGRhdGEgPSBBQk9VVF9CTEFOSyxcbiAgICAgICAgdHlwZSA9IFRFWFRfSFRNTF9DT05URU5UX1RZUEU7XG5cbiAgcmVzaXplT2JqZWN0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIHN0eWxlKTtcblxuICByZXNpemVPYmplY3QuZGF0YSA9IGRhdGE7XG5cbiAgcmVzaXplT2JqZWN0LnR5cGUgPSB0eXBlO1xuXG4gIHRoaXMuX19yZXNpemVPYmplY3RfXyA9IHJlc2l6ZU9iamVjdDtcblxuICByZXNpemVPYmplY3Qub25sb2FkID0gKCkgPT4gcmVzaXplT2JqZWN0TG9hZEhhbmRsZXIodGhpcyk7XG5cbiAgdGhpcy5kb21FbGVtZW50LmFwcGVuZENoaWxkKHJlc2l6ZU9iamVjdCk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVJlc2l6ZU9iamVjdCgpIHtcbiAgY29uc3QgcmVzaXplT2JqZWN0ID0gdGhpcy5fX3Jlc2l6ZU9iamVjdF9fLFxuICAgICAgICBvYmplY3RXaW5kb3cgPSByZXNpemVPYmplY3QuY29udGVudERvY3VtZW50LmRlZmF1bHRWaWV3OyAgLy8vXG5cbiAgb2JqZWN0V2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoUkVTSVpFX0VWRU5UX1RZUEUsIHJlc2l6ZUV2ZW50TGlzdGVuZXIpO1xuXG4gIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVDaGlsZChyZXNpemVPYmplY3QpO1xuXG4gIGRlbGV0ZSB0aGlzLl9fcmVzaXplT2JqZWN0X187XG59XG5cbmNvbnN0IHJlc2l6ZU1peGlucyA9IHtcbiAgb25SZXNpemUsXG4gIG9mZlJlc2l6ZSxcbiAgYWRkUmVzaXplT2JqZWN0LFxuICByZW1vdmVSZXNpemVPYmplY3Rcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlc2l6ZU1peGlucztcblxuZnVuY3Rpb24gcmVzaXplT2JqZWN0TG9hZEhhbmRsZXIoZWxlbWVudCkge1xuICBjb25zdCByZXNpemVPYmplY3QgPSBlbGVtZW50Ll9fcmVzaXplT2JqZWN0X18sXG4gICAgICAgIHJlc2l6ZU9iamVjdFdpbmRvdyA9IHJlc2l6ZU9iamVjdC5jb250ZW50RG9jdW1lbnQuZGVmYXVsdFZpZXc7ICAvLy9cblxuICByZXNpemVPYmplY3RXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihSRVNJWkVfRVZFTlRfVFlQRSwgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgcmVzaXplRXZlbnRMaXN0ZW5lcnMgPSBlbGVtZW50LmZpbmRFdmVudExpc3RlbmVycyhSRVNJWkVfRVZFTlRfVFlQRSk7XG5cbiAgICByZXNpemVFdmVudExpc3RlbmVycy5mb3JFYWNoKChyZXNpemVFdmVudExpc3RlbmVyKSA9PiByZXNpemVFdmVudExpc3RlbmVyKGV2ZW50KSk7XG4gIH0pO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBTUEFDRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IFJFU0laRV9FVkVOVF9UWVBFIH0gZnJvbSBcIi4uL2V2ZW50VHlwZXNcIjtcbmltcG9ydCB7IHJlbW92ZVJlc2l6ZU9iamVjdCB9IGZyb20gXCIuLi9taXhpbnMvcmVzaXplXCI7XG5cbmZ1bmN0aW9uIG9uKGV2ZW50VHlwZXMsIGhhbmRsZXIsIGVsZW1lbnQgPSB0aGlzKSB7XG4gIGV2ZW50VHlwZXMgPSBldmVudFR5cGVzLnNwbGl0KFNQQUNFKTtcblxuICBldmVudFR5cGVzLmZvckVhY2goKGV2ZW50VHlwZSkgPT4ge1xuICAgIGlmIChldmVudFR5cGUgPT09IFJFU0laRV9FVkVOVF9UWVBFKSB7XG4gICAgICBjb25zdCByZXNpemVFdmVudExpc3RlbmVycyA9IHRoaXMuZmluZEV2ZW50TGlzdGVuZXJzKFJFU0laRV9FVkVOVF9UWVBFKSxcbiAgICAgICAgICAgIHJlc2l6ZUV2ZW50TGlzdGVuZXJzTGVuZ3RoID0gcmVzaXplRXZlbnRMaXN0ZW5lcnMubGVuZ3RoO1xuXG4gICAgICBpZiAocmVzaXplRXZlbnRMaXN0ZW5lcnNMZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy5hZGRSZXNpemVPYmplY3QoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBldmVudExpc3RlbmVyID0gdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGV2ZW50TGlzdGVuZXIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gb2ZmKGV2ZW50VHlwZXMsIGhhbmRsZXIsIGVsZW1lbnQgPSB0aGlzKSB7XG4gIGV2ZW50VHlwZXMgPSBldmVudFR5cGVzLnNwbGl0KFNQQUNFKTtcblxuICBldmVudFR5cGVzLmZvckVhY2goKGV2ZW50VHlwZSkgPT4ge1xuICAgIGNvbnN0IGV2ZW50TGlzdGVuZXIgPSB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgZXZlbnRMaXN0ZW5lcik7XG5cbiAgICBpZiAoZXZlbnRUeXBlID09PSBSRVNJWkVfRVZFTlRfVFlQRSkge1xuICAgICAgY29uc3QgcmVzaXplRXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmZpbmRFdmVudExpc3RlbmVycyhSRVNJWkVfRVZFTlRfVFlQRSksXG4gICAgICAgICAgICByZXNpemVFdmVudExpc3RlbmVyc0xlbmd0aCA9IHJlc2l6ZUV2ZW50TGlzdGVuZXJzLmxlbmd0aDtcblxuICAgICAgaWYgKHJlc2l6ZUV2ZW50TGlzdGVuZXJzTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJlbW92ZVJlc2l6ZU9iamVjdCh0aGlzKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCkge1xuICBpZiAodGhpcy5ldmVudExpc3RlbmVycyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5ldmVudExpc3RlbmVycyA9IFtdO1xuICB9XG5cbiAgY29uc3QgZXZlbnRMaXN0ZW5lciA9IHRoaXMuY3JlYXRlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuXG4gIHRoaXMuZXZlbnRMaXN0ZW5lcnMucHVzaChldmVudExpc3RlbmVyKTtcblxuICByZXR1cm4gZXZlbnRMaXN0ZW5lcjtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgZXZlbnRMaXN0ZW5lciA9IHRoaXMuZmluZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KSxcbiAgICAgICAgaW5kZXggPSB0aGlzLmV2ZW50TGlzdGVuZXJzLmluZGV4T2YoZXZlbnRMaXN0ZW5lciksXG4gICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gIHRoaXMuZXZlbnRMaXN0ZW5lcnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG5cbiAgaWYgKHRoaXMuZXZlbnRMaXN0ZW5lcnMubGVuZ3RoID09PSAwKSB7XG4gICAgZGVsZXRlIHRoaXMuZXZlbnRMaXN0ZW5lcnM7XG4gIH1cblxuICByZXR1cm4gZXZlbnRMaXN0ZW5lcjtcbn1cblxuZnVuY3Rpb24gZmluZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGV2ZW50TGlzdGVuZXIgPSB0aGlzLmV2ZW50TGlzdGVuZXJzLmZpbmQoKGV2ZW50TGlzdGVuZXIpID0+IHtcbiAgICBpZiAoKGV2ZW50TGlzdGVuZXIuZWxlbWVudCA9PT0gZWxlbWVudCkgJiYgKGV2ZW50TGlzdGVuZXIuaGFuZGxlciA9PT0gaGFuZGxlcikgJiYgKGV2ZW50TGlzdGVuZXIuZXZlbnRUeXBlID09PSBldmVudFR5cGUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBldmVudExpc3RlbmVyO1xufVxuXG5mdW5jdGlvbiBmaW5kRXZlbnRMaXN0ZW5lcnMoZXZlbnRUeXBlKSB7XG4gIGNvbnN0IGV2ZW50TGlzdGVuZXJzID0gW107XG5cbiAgaWYgKHRoaXMuZXZlbnRMaXN0ZW5lcnMgIT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoZXZlbnRMaXN0ZW5lcikgPT4ge1xuICAgICAgY29uc3QgZm91bmQgPSAoZXZlbnRMaXN0ZW5lci5ldmVudFR5cGUgPT09IGV2ZW50VHlwZSk7XG5cbiAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICBldmVudExpc3RlbmVycy5wdXNoKGV2ZW50TGlzdGVuZXIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGV2ZW50TGlzdGVuZXJzO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCkge1xuICBsZXQgZXZlbnRMaXN0ZW5lcjtcblxuICBjb25zdCBoYW5kbGVyRWxlbWVudCA9IGVsZW1lbnQ7IC8vL1xuXG4gIGV2ZW50TGlzdGVuZXIgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICBoYW5kbGVyLmNhbGwoaGFuZGxlckVsZW1lbnQsIGV2ZW50LCBlbGVtZW50KTtcbiAgfTtcblxuICBPYmplY3QuYXNzaWduKGV2ZW50TGlzdGVuZXIsIHtcbiAgICBlbGVtZW50LFxuICAgIGhhbmRsZXIsXG4gICAgZXZlbnRUeXBlXG4gIH0pO1xuXG4gIHJldHVybiBldmVudExpc3RlbmVyO1xufVxuXG5jb25zdCBldmVudE1peGlucyA9IHtcbiAgb24sXG4gIG9mZixcbiAgYWRkRXZlbnRMaXN0ZW5lcixcbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcixcbiAgY3JlYXRlRXZlbnRMaXN0ZW5lcixcbiAgZmluZEV2ZW50TGlzdGVuZXIsXG4gIGZpbmRFdmVudExpc3RlbmVyc1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZXZlbnRNaXhpbnM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IE1PVVNFVVBfRVZFTlRfVFlQRSxcbiAgICAgICAgIE1PVVNFT1VUX0VWRU5UX1RZUEUsXG4gICAgICAgICBNT1VTRURPV05fRVZFTlRfVFlQRSxcbiAgICAgICAgIE1PVVNFT1ZFUl9FVkVOVF9UWVBFLFxuICAgICAgICAgTU9VU0VNT1ZFX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi4vZXZlbnRUeXBlc1wiO1xuXG5mdW5jdGlvbiBvbk1vdXNlVXAobW91c2VVcEhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vbihNT1VTRVVQX0VWRU5UX1RZUEUsIG1vdXNlVXBIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvZmZNb3VzZVVwKG1vdXNlVXBIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmKE1PVVNFVVBfRVZFTlRfVFlQRSwgbW91c2VVcEhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9uTW91c2VPdXQobW91c2VPdXRIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub24oTU9VU0VPVVRfRVZFTlRfVFlQRSwgbW91c2VPdXRIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvZmZNb3VzZU91dChtb3VzZU91dEhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vZmYoTU9VU0VPVVRfRVZFTlRfVFlQRSwgbW91c2VPdXRIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvbk1vdXNlRG93bihtb3VzZURvd25IYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub24oTU9VU0VET1dOX0VWRU5UX1RZUEUsIG1vdXNlRG93bkhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9mZk1vdXNlRG93bihtb3VzZURvd25IYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmKE1PVVNFRE9XTl9FVkVOVF9UWVBFLCBtb3VzZURvd25IYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvbk1vdXNlT3Zlcihtb3VzZU92ZXJIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub24oTU9VU0VPVkVSX0VWRU5UX1RZUEUsIG1vdXNlT3ZlckhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9mZk1vdXNlT3Zlcihtb3VzZU92ZXJIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmKE1PVVNFT1ZFUl9FVkVOVF9UWVBFLCBtb3VzZU92ZXJIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvbk1vdXNlTW92ZShtb3VzZU1vdmVIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub24oTU9VU0VNT1ZFX0VWRU5UX1RZUEUsIG1vdXNlTW92ZUhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9mZk1vdXNlTW92ZShtb3VzZU1vdmVIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmKE1PVVNFTU9WRV9FVkVOVF9UWVBFLCBtb3VzZU1vdmVIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5jb25zdCBtb3VzZU1peGlucyA9IHtcbiAgb25Nb3VzZVVwLFxuICBvZmZNb3VzZVVwLFxuICBvbk1vdXNlT3V0LFxuICBvZmZNb3VzZU91dCxcbiAgb25Nb3VzZURvd24sXG4gIG9mZk1vdXNlRG93bixcbiAgb25Nb3VzZU92ZXIsXG4gIG9mZk1vdXNlT3ZlcixcbiAgb25Nb3VzZU1vdmUsXG4gIG9mZk1vdXNlTW92ZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbW91c2VNaXhpbnM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFNDUk9MTF9FVkVOVF9UWVBFIH0gZnJvbSBcIi4uL2V2ZW50VHlwZXNcIjtcblxuZnVuY3Rpb24gb25TY3JvbGwoc2Nyb2xsSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uKFNDUk9MTF9FVkVOVF9UWVBFLCBzY3JvbGxIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvZmZTY3JvbGwoc2Nyb2xsSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZihTQ1JPTExfRVZFTlRfVFlQRSwgc2Nyb2xsSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsVG9wKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnNjcm9sbFRvcDsgfVxuXG5mdW5jdGlvbiBnZXRTY3JvbGxMZWZ0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnNjcm9sbExlZnQ7IH1cblxuZnVuY3Rpb24gc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCkgeyB0aGlzLmRvbUVsZW1lbnQuc2Nyb2xsVG9wID0gc2Nyb2xsVG9wOyB9XG5cbmZ1bmN0aW9uIHNldFNjcm9sbExlZnQoc2Nyb2xsTGVmdCkgeyB0aGlzLmRvbUVsZW1lbnQuc2Nyb2xsTGVmdCA9IHNjcm9sbExlZnQ7IH1cblxuY29uc3Qgc2Nyb2xsTWl4aW5zID0ge1xuICBvblNjcm9sbCxcbiAgb2ZmU2Nyb2xsLFxuICBnZXRTY3JvbGxUb3AsXG4gIGdldFNjcm9sbExlZnQsXG4gIHNldFNjcm9sbFRvcCxcbiAgc2V0U2Nyb2xsTGVmdFxufTtcblxuZXhwb3J0IGRlZmF1bHQgc2Nyb2xsTWl4aW5zO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgT2Zmc2V0IGZyb20gXCIuL29mZnNldFwiO1xuaW1wb3J0IEJvdW5kcyBmcm9tIFwiLi9ib3VuZHNcIjtcbmltcG9ydCBqc3hNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2pzeFwiO1xuaW1wb3J0IGtleU1peGlucyBmcm9tIFwiLi9taXhpbnMva2V5XCI7XG5pbXBvcnQgY2xpY2tNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2NsaWNrXCI7XG5pbXBvcnQgc3RhdGVNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3N0YXRlXCI7XG5pbXBvcnQgZXZlbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2V2ZW50XCI7XG5pbXBvcnQgbW91c2VNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL21vdXNlXCI7XG5pbXBvcnQgcmVzaXplTWl4aW5zIGZyb20gXCIuL21peGlucy9yZXNpemVcIjtcbmltcG9ydCBzY3JvbGxNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3Njcm9sbFwiO1xuaW1wb3J0IGVsZW1lbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2VsZW1lbnRcIjtcblxuaW1wb3J0IHsgY29tYmluZSB9IGZyb20gXCIuL3V0aWxpdGllcy9vYmplY3RcIjtcbmltcG9ydCB7IGlzU1ZHVGFnTmFtZSB9IGZyb20gXCIuL3V0aWxpdGllcy9uYW1lXCI7XG5pbXBvcnQgeyBmaXJzdCwgYXVnbWVudCB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgTk9ORSxcbiAgICAgICAgIEJMT0NLLFxuICAgICAgICAgV0lEVEgsXG4gICAgICAgICBTVFJJTkcsXG4gICAgICAgICBIRUlHSFQsXG4gICAgICAgICBESVNQTEFZLFxuICAgICAgICAgRElTQUJMRUQsXG4gICAgICAgICBFTVBUWV9TVFJJTkcsXG4gICAgICAgICBTVkdfTkFNRVNQQUNFX1VSSSxcbiAgICAgICAgIERFRkFVTFRfUFJPUEVSVElFUyxcbiAgICAgICAgIElHTk9SRURfUFJPUEVSVElFUyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5jbGFzcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IpIHtcbiAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQuX19lbGVtZW50X18gPSB0aGlzOyAvLy9cbiAgICB9XG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRPZmZzZXQoKSB7XG4gICAgY29uc3QgdG9wID0gdGhpcy5kb21FbGVtZW50Lm9mZnNldFRvcCwgIC8vL1xuICAgICAgICAgIGxlZnQgPSB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0TGVmdCwgIC8vL1xuICAgICAgICAgIG9mZnNldCA9IG5ldyBPZmZzZXQodG9wLCBsZWZ0KTtcblxuICAgIHJldHVybiBvZmZzZXQ7XG4gIH1cblxuICBnZXRCb3VuZHMoKSB7XG4gICAgY29uc3QgYm91bmRpbmdDbGllbnRSZWN0ID0gdGhpcy5kb21FbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgIGJvdW5kcyA9IEJvdW5kcy5mcm9tQm91bmRpbmdDbGllbnRSZWN0KGJvdW5kaW5nQ2xpZW50UmVjdCk7XG5cbiAgICByZXR1cm4gYm91bmRzO1xuICB9XG5cbiAgZ2V0V2lkdGgoaW5jbHVkZUJvcmRlciA9IHRydWUpIHtcbiAgICBjb25zdCB3aWR0aCA9IGluY2x1ZGVCb3JkZXIgP1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0V2lkdGggOlxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5jbGllbnRXaWR0aDtcblxuICAgIHJldHVybiB3aWR0aDtcbiAgfVxuXG4gIHNldFdpZHRoKHdpZHRoKSB7XG4gICAgd2lkdGggPSBgJHt3aWR0aH1weGA7IC8vL1xuXG4gICAgdGhpcy5zdHlsZShXSURUSCwgd2lkdGgpO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KGluY2x1ZGVCb3JkZXIgPSB0cnVlKSB7XG4gICAgY29uc3QgaGVpZ2h0ID0gaW5jbHVkZUJvcmRlciA/XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0SGVpZ2h0IDpcbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50LmNsaWVudEhlaWdodDtcblxuICAgIHJldHVybiBoZWlnaHQ7XG4gIH1cblxuICBzZXRIZWlnaHQoaGVpZ2h0KSB7XG4gICAgaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDsgLy8vXG5cbiAgICB0aGlzLnN0eWxlKEhFSUdIVCwgaGVpZ2h0KTtcbiAgfVxuXG4gIGhhc0F0dHJpYnV0ZShuYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaGFzQXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgZ2V0QXR0cmlidXRlKG5hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBzZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7IH1cblxuICBjbGVhckF0dHJpYnV0ZShuYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBhZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgdGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpOyB9XG5cbiAgcmVtb3ZlQXR0cmlidXRlKG5hbWUpIHsgdGhpcy5jbGVhckF0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIHNldENsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lOyB9XG5cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7IH1cblxuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTsgfVxuXG4gIHRvZ2dsZUNsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpOyB9XG5cbiAgaGFzQ2xhc3MoY2xhc3NOYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7IH1cblxuICBjbGVhckNsYXNzZXMoKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc05hbWUgPSBFTVBUWV9TVFJJTkc7IH1cblxuICBwcmVwZW5kVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LnByZXBlbmQodGhpcyk7IH1cblxuICBhcHBlbmRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQuYXBwZW5kKHRoaXMpOyB9XG5cbiAgYWRkVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LmFkZCh0aGlzKTsgfVxuXG4gIHJlbW92ZUZyb20ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LnJlbW92ZSh0aGlzKTsgfVxuXG4gIGluc2VydEJlZm9yZShzaWJsaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgcGFyZW50RE9NTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCk7XG4gIH1cblxuICBpbnNlcnRBZnRlcihzaWJsaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgcGFyZW50RE9NTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudC5uZXh0U2libGluZyk7ICAvLy9cbiAgfVxuXG4gIHByZXBlbmQoZWxlbWVudCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQsXG4gICAgICAgICAgZmlyc3RDaGlsZERPTUVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQuZmlyc3RDaGlsZDtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5pbnNlcnRCZWZvcmUoZG9tRWxlbWVudCwgZmlyc3RDaGlsZERPTUVsZW1lbnQpO1xuICB9XG5cbiAgYXBwZW5kKGVsZW1lbnQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgdGhpcy5kb21FbGVtZW50Lmluc2VydEJlZm9yZShkb21FbGVtZW50LCBudWxsKTsgLy8vXG4gIH1cblxuICBhZGQoZWxlbWVudCkgeyB0aGlzLmFwcGVuZChlbGVtZW50KTsgfVxuXG4gIHJlbW92ZShlbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVDaGlsZChkb21FbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZSgpO1xuICAgIH1cbiAgfVxuXG4gIG1vdW50KGVsZW1lbnQpIHtcbiAgICBjb25zdCBkZXNjZW5kYW50RWxlbWVudHMgPSBlbGVtZW50LmdldERlc2NlbmRhbnRFbGVtZW50cygpLFxuICAgICAgICAgIGVsZW1lbnRzID0gW1xuICAgICAgICAgICAgZWxlbWVudCxcbiAgICAgICAgICAgIC4uLmRlc2NlbmRhbnRFbGVtZW50c1xuICAgICAgICAgIF07XG5cbiAgICB0aGlzLmFkZChlbGVtZW50KTtcblxuICAgIGVsZW1lbnRzLnJldmVyc2UoKTsgLy8vXG5cbiAgICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiAoZWxlbWVudC5kaWRNb3VudCAmJiBlbGVtZW50LmRpZE1vdW50KCkpKTsgIC8vL1xuICB9XG5cbiAgdW5tb3VudChlbGVtZW50KSB7XG4gICAgY29uc3QgZGVzY2VuZGFudEVsZW1lbnRzID0gZWxlbWVudC5nZXREZXNjZW5kYW50RWxlbWVudHMoKSxcbiAgICAgICAgICBlbGVtZW50cyA9IFtcbiAgICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgICAuLi5kZXNjZW5kYW50RWxlbWVudHNcbiAgICAgICAgICBdO1xuXG4gICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4gKGVsZW1lbnQud2lsbFVubW91bnQgJiYgZWxlbWVudC53aWxsVW5tb3VudCgpKSk7ICAvLy9cblxuICAgIHRoaXMucmVtb3ZlKGVsZW1lbnQpO1xuICB9XG5cbiAgc2hvdyhkaXNwbGF5U3R5bGUgPSBCTE9DSykgeyB0aGlzLmRpc3BsYXkoZGlzcGxheVN0eWxlKTsgfVxuXG4gIGhpZGUoKSB7IHRoaXMuc3R5bGUoRElTUExBWSwgTk9ORSk7IH1cblxuICBkaXNwbGF5KGRpc3BsYXkpIHsgdGhpcy5zdHlsZShESVNQTEFZLCBkaXNwbGF5KTsgfVxuXG4gIGVuYWJsZSgpIHsgdGhpcy5jbGVhckF0dHJpYnV0ZShESVNBQkxFRCk7IH1cblxuICBkaXNhYmxlKCkgeyB0aGlzLnNldEF0dHJpYnV0ZShESVNBQkxFRCwgRElTQUJMRUQpOyB9XG5cbiAgaXNFbmFibGVkKCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCksXG4gICAgICAgICAgZW5hYmxlZCA9ICFkaXNhYmxlZDtcblxuICAgIHJldHVybiBlbmFibGVkO1xuICB9XG5cbiAgaXNEaXNhYmxlZCgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaGFzQXR0cmlidXRlKERJU0FCTEVEKTtcblxuICAgIHJldHVybiBkaXNhYmxlZDtcbiAgfVxuICBcbiAgaXNEaXNwbGF5ZWQoKSB7XG4gICAgY29uc3QgZGlzcGxheSA9IHRoaXMuY3NzKERJU1BMQVkpLFxuICAgICAgICAgIGRpc3BsYXllZCA9IChkaXNwbGF5ICE9PSBOT05FKTtcbiAgICBcbiAgICByZXR1cm4gZGlzcGxheWVkO1xuICB9XG5cbiAgaXNTaG93aW5nKCkge1xuICAgIGNvbnN0IGRpc3BsYXllZCA9IHRoaXMuaXNEaXNwbGF5ZWQoKSxcbiAgICAgICAgICBzaG93aW5nID0gZGlzcGxheWVkOyAgLy8vXG5cbiAgICByZXR1cm4gc2hvd2luZztcbiAgfVxuXG4gIGlzSGlkZGVuKCkge1xuICAgIGNvbnN0IGRpc3BsYXllZCA9IHRoaXMuaXNEaXNwbGF5ZWQoKSxcbiAgICAgICAgICBoaWRkZW4gPSAhZGlzcGxheWVkO1xuXG4gICAgcmV0dXJuIGhpZGRlbjtcbiAgfVxuXG4gIHN0eWxlKG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5zdHlsZVtuYW1lXSA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdHlsZSA9IHRoaXMuZG9tRWxlbWVudC5zdHlsZVtuYW1lXTtcblxuICAgICAgcmV0dXJuIHN0eWxlO1xuICAgIH1cbiAgfVxuXG4gIGh0bWwoaHRtbCkge1xuICAgIGlmIChodG1sID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGlubmVySFRNTCA9IHRoaXMuZG9tRWxlbWVudC5pbm5lckhUTUw7XG5cbiAgICAgIGh0bWwgPSBpbm5lckhUTUw7IC8vL1xuXG4gICAgICByZXR1cm4gaHRtbDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW5uZXJIVE1MID0gaHRtbDsgLy8vXG5cbiAgICAgIHRoaXMuZG9tRWxlbWVudC5pbm5lckhUTUwgPSBpbm5lckhUTUxcbiAgICB9XG4gIH1cblxuICBjc3MoY3NzKSB7XG4gICAgaWYgKGNzcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmRvbUVsZW1lbnQpLFxuICAgICAgICAgICAgY3NzID0ge307XG5cbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb21wdXRlZFN0eWxlLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBmaXJzdENvbXB1dGVkU3R5bGUgPSBmaXJzdFtjb21wdXRlZFN0eWxlXSxcbiAgICAgICAgICAgICAgbmFtZSA9IGZpcnN0Q29tcHV0ZWRTdHlsZSwgIC8vL1xuICAgICAgICAgICAgICB2YWx1ZSA9IGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTsgLy8vXG5cbiAgICAgICAgY3NzW25hbWVdID0gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY3NzID09PSBTVFJJTkcpIHtcbiAgICAgIGxldCBuYW1lID0gY3NzOyAvLy9cblxuICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5kb21FbGVtZW50KSxcbiAgICAgICAgICAgIHZhbHVlID0gY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpOyAvLy9cblxuICAgICAgY3NzID0gdmFsdWU7ICAvLy9cblxuICAgICAgcmV0dXJuIGNzcztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbmFtZXMgPSBPYmplY3Qua2V5cyhjc3MpOyAvLy9cblxuICAgICAgbmFtZXMuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGNzc1tuYW1lXTtcblxuICAgICAgICB0aGlzLnN0eWxlKG5hbWUsIHZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBcbiAgYmx1cigpIHsgdGhpcy5kb21FbGVtZW50LmJsdXIoKTsgfVxuXG4gIGZvY3VzKCkgeyB0aGlzLmRvbUVsZW1lbnQuZm9jdXMoKTsgfVxuXG4gIGhhc0ZvY3VzKCkge1xuICAgIGNvbnN0IGZvY3VzID0gKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IHRoaXMuZG9tRWxlbWVudCk7ICAvLy9cblxuICAgIHJldHVybiBmb2N1cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHsgdGFnTmFtZSB9ID0gQ2xhc3MsXG4gICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnRGcm9tVGFnTmFtZShDbGFzcywgdGFnTmFtZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSxcbiAgICAgICAgICBkZWZhdWx0UHJvcGVydGllcyA9IGRlZmF1bHRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzKSxcbiAgICAgICAgICBpZ25vcmVkUHJvcGVydGllcyA9IGlnbm9yZWRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzKTtcblxuICAgIGVsZW1lbnQuYXBwbHlQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGRlZmF1bHRQcm9wZXJ0aWVzLCBpZ25vcmVkUHJvcGVydGllcyk7XG5cbiAgICBlbGVtZW50LmluaXRpYWxpc2UgJiYgZWxlbWVudC5pbml0aWFsaXNlKCk7IC8vL1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVRhZ05hbWUodGFnTmFtZSwgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgQ2xhc3MgPSBFbGVtZW50LCAgLy8vXG4gICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnRGcm9tVGFnTmFtZShDbGFzcywgdGFnTmFtZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSxcbiAgICAgICAgICBkZWZhdWx0UHJvcGVydGllcyA9IHt9LCAvLy9cbiAgICAgICAgICBpZ25vcmVkUHJvcGVydGllcyA9IFtdOyAvLy9cblxuICAgIGVsZW1lbnQuYXBwbHlQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGRlZmF1bHRQcm9wZXJ0aWVzLCBpZ25vcmVkUHJvcGVydGllcyk7XG5cbiAgICBlbGVtZW50LmluaXRpYWxpc2UgJiYgZWxlbWVudC5pbml0aWFsaXNlKCk7IC8vL1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwganN4TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGtleU1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBjbGlja01peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBzdGF0ZU1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBldmVudE1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBtb3VzZU1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCByZXNpemVNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgc2Nyb2xsTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGVsZW1lbnRNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBFbGVtZW50O1xuXG5mdW5jdGlvbiBlbGVtZW50RnJvbVRhZ05hbWUoQ2xhc3MsIHRhZ05hbWUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICBjb25zdCBzZWxlY3RvciA9IG51bGwsXG4gICAgICAgIGVsZW1lbnQgPSBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmNhbGwoQ2xhc3MsIG51bGwsIHNlbGVjdG9yLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpKTtcblxuICBlbGVtZW50LmRvbUVsZW1lbnQgPSBpc1NWR1RhZ05hbWUodGFnTmFtZSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhTVkdfTkFNRVNQQUNFX1VSSSwgdGFnTmFtZSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcblxuICBlbGVtZW50LmRvbUVsZW1lbnQuX19lbGVtZW50X18gPSBlbGVtZW50OyAvLy9cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdFByb3BlcnRpZXNGcm9tQ2xhc3MoQ2xhc3MsIGRlZmF1bHRQcm9wZXJ0aWVzID0ge30pIHtcbiAgaWYgKENsYXNzLmhhc093blByb3BlcnR5KERFRkFVTFRfUFJPUEVSVElFUykpIHtcbiAgICBkZWZhdWx0UHJvcGVydGllcyA9IGNvbWJpbmUoZGVmYXVsdFByb3BlcnRpZXMsIENsYXNzW0RFRkFVTFRfUFJPUEVSVElFU10pO1xuICB9XG5cbiAgY29uc3Qgc3VwZXJDbGFzcyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihDbGFzcyk7XG5cbiAgaWYgKHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICBkZWZhdWx0UHJvcGVydGllcyA9IGRlZmF1bHRQcm9wZXJ0aWVzRnJvbUNsYXNzKHN1cGVyQ2xhc3MsIGRlZmF1bHRQcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIHJldHVybiBkZWZhdWx0UHJvcGVydGllcztcbn1cblxuZnVuY3Rpb24gaWdub3JlZFByb3BlcnRpZXNGcm9tQ2xhc3MoQ2xhc3MsIGlnbm9yZWRQcm9wZXJ0aWVzID0gW10pIHtcbiAgaWYgKENsYXNzLmhhc093blByb3BlcnR5KElHTk9SRURfUFJPUEVSVElFUykpIHtcbiAgICBpZ25vcmVkUHJvcGVydGllcyA9IGF1Z21lbnQoaWdub3JlZFByb3BlcnRpZXMsIENsYXNzW0lHTk9SRURfUFJPUEVSVElFU10sIChpZ25vcmVkUHJvcGVydHkpID0+ICFpZ25vcmVkUHJvcGVydGllcy5pbmNsdWRlcyhpZ25vcmVkUHJvcGVydHkpKTtcbiAgfVxuXG4gIGNvbnN0IHN1cGVyQ2xhc3MgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ2xhc3MpO1xuXG4gIGlmIChzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgaWdub3JlZFByb3BlcnRpZXMgPSBpZ25vcmVkUHJvcGVydGllc0Zyb21DbGFzcyhzdXBlckNsYXNzLCBpZ25vcmVkUHJvcGVydGllcyk7XG4gIH1cblxuICByZXR1cm4gaWdub3JlZFByb3BlcnRpZXM7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuL2VsZW1lbnRcIjtcblxuaW1wb3J0IHsgZmxhdHRlbiB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgU1RSSU5HLCBGVU5DVElPTiB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgcmVtb3ZlRmFsc2V5RWxlbWVudHMsIHJlcGxhY2VTdHJpbmdzV2l0aFRleHRFbGVtZW50cyB9IGZyb20gXCIuL3V0aWxpdGllcy9lbGVtZW50c1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KGZpcnN0QXJndW1lbnQsIHByb3BlcnRpZXMsIC4uLmNoaWxkRWxlbWVudHMpIHtcbiAgbGV0IGVsZW1lbnQgPSBudWxsO1xuXG4gIGlmIChmaXJzdEFyZ3VtZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICBjaGlsZEVsZW1lbnRzID0gc2FuaXRpc2VDaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpO1xuXG4gICAgcHJvcGVydGllcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY2hpbGRFbGVtZW50c1xuICAgIH0sIHByb3BlcnRpZXMpO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKGlzU3ViY2xhc3NPZihmaXJzdEFyZ3VtZW50LCBFbGVtZW50KSkge1xuICAgICAgY29uc3QgQ2xhc3MgPSBmaXJzdEFyZ3VtZW50OyAgLy8vXG5cbiAgICAgIGVsZW1lbnQgPSBDbGFzcy5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09IFNUUklORykge1xuICAgICAgY29uc3QgdGFnTmFtZSA9IGZpcnN0QXJndW1lbnQ7IC8vL1xuXG4gICAgICBlbGVtZW50ID0gRWxlbWVudC5mcm9tVGFnTmFtZSh0YWdOYW1lLCBwcm9wZXJ0aWVzKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSBGVU5DVElPTikge1xuICAgICAgY29uc3QgZWxlbWVudEZ1bmN0aW9uID0gZmlyc3RBcmd1bWVudDsgIC8vL1xuXG4gICAgICBlbGVtZW50ID0gZWxlbWVudEZ1bmN0aW9uKHByb3BlcnRpZXMpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5jb25zdCBSZWFjdCA9IHtcbiAgY3JlYXRlRWxlbWVudFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3Q7XG5cbmZ1bmN0aW9uIHNhbml0aXNlQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKSB7XG4gIGNoaWxkRWxlbWVudHMgPSBmbGF0dGVuKGNoaWxkRWxlbWVudHMpO1xuXG4gIGNoaWxkRWxlbWVudHMgPSByZW1vdmVGYWxzZXlFbGVtZW50cyhjaGlsZEVsZW1lbnRzKTtcblxuICBjaGlsZEVsZW1lbnRzID0gcmVwbGFjZVN0cmluZ3NXaXRoVGV4dEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpO1xuXG4gIHJldHVybiBjaGlsZEVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiBpc1N1YmNsYXNzT2YoYXJndW1lbnQsIENsYXNzKSB7XG4gIGxldCBzdWJjbGFzc09mID0gZmFsc2U7XG5cbiAgaWYgKGFyZ3VtZW50Lm5hbWUgPT09IENsYXNzLm5hbWUpIHsgLy8vXG4gICAgc3ViY2xhc3NPZiA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgYXJndW1lbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoYXJndW1lbnQpOyAvLy9cblxuICAgIGlmIChhcmd1bWVudCkge1xuICAgICAgc3ViY2xhc3NPZiA9IGlzU3ViY2xhc3NPZihhcmd1bWVudCwgQ2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdWJjbGFzc09mO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBCT0RZIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb2R5IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yID0gQk9EWSkge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJib2R5XCI7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmsgZXh0ZW5kcyBFbGVtZW50IHtcbiAgZ2V0SFJlZigpIHsgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTsgfVxuXG4gIHNldEhSZWYoaHJlZikgeyByZXR1cm4gdGhpcy5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGhyZWYpOyB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImFcIjtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ0hBTkdFX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi4vZXZlbnRUeXBlc1wiO1xuXG5mdW5jdGlvbiBvbkNoYW5nZShjaGFuZ2VIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub24oQ0hBTkdFX0VWRU5UX1RZUEUsIGNoYW5nZUhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9mZkNoYW5nZShjaGFuZ2VIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmKENIQU5HRV9FVkVOVF9UWVBFLCBjaGFuZ2VIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5jb25zdCBjaGFuZ2VNaXhpbnMgPSB7XG4gIG9uQ2hhbmdlLFxuICBvZmZDaGFuZ2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNoYW5nZU1peGlucztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4vZWxlbWVudFwiO1xuaW1wb3J0IGNoYW5nZU1peGlucyBmcm9tIFwiLi9taXhpbnMvY2hhbmdlXCI7XG5cbmltcG9ydCB7IENIQU5HRV9FVkVOVF9UWVBFIH0gZnJvbSBcIi4vZXZlbnRUeXBlc1wiO1xuXG5jbGFzcyBJbnB1dEVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgb25DaGFuZ2UoY2hhbmdlSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uKENIQU5HRV9FVkVOVF9UWVBFLCBjaGFuZ2VIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG4gIG9mZkNoYW5nZShjaGFuZ2VIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmKENIQU5HRV9FVkVOVF9UWVBFLCBjaGFuZ2VIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG4gIG9uUmVzaXplKHJlc2l6ZUhhbmRsZXIsIGVsZW1lbnQpIHt9IC8vL1xuXG4gIG9mZlJlc2l6ZShyZXNpemVIYW5kbGVyLCBlbGVtZW50KSB7fSAgLy8vXG5cbiAgZ2V0VmFsdWUoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQudmFsdWU7IH1cblxuICBnZXRTZWxlY3Rpb25TdGFydCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5zZWxlY3Rpb25TdGFydDsgfVxuXG4gIGdldFNlbGVjdGlvbkVuZCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5zZWxlY3Rpb25FbmQ7IH1cbiAgXG4gIGlzUmVhZE9ubHkoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQucmVhZE9ubHk7IH1cblxuICBzZXRWYWx1ZSh2YWx1ZSkgeyB0aGlzLmRvbUVsZW1lbnQudmFsdWUgPSB2YWx1ZTsgfVxuXG4gIHNldFNlbGVjdGlvblN0YXJ0KHNlbGVjdGlvblN0YXJ0KSB7IHRoaXMuZG9tRWxlbWVudC5zZWxlY3Rpb25TdGFydCA9IHNlbGVjdGlvblN0YXJ0OyB9XG5cbiAgc2V0U2VsZWN0aW9uRW5kKHNlbGVjdGlvbkVuZCkgeyB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0aW9uRW5kID0gc2VsZWN0aW9uRW5kOyB9XG5cbiAgc2V0UmVhZE9ubHkocmVhZE9ubHkpIHsgdGhpcy5kb21FbGVtZW50LnJlYWRPbmx5ID0gcmVhZE9ubHk7IH1cblxuICBzZWxlY3QoKSB7IHRoaXMuZG9tRWxlbWVudC5zZWxlY3QoKTsgfVxufVxuXG5PYmplY3QuYXNzaWduKElucHV0RWxlbWVudC5wcm90b3R5cGUsIGNoYW5nZU1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0RWxlbWVudDtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IElucHV0RWxlbWVudCBmcm9tIFwiLi4vaW5wdXRFbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0IGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgc3RhdGljIHRhZ05hbWUgPSBcImlucHV0XCI7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIEVsZW1lbnQge1xuICBzdGF0aWMgdGFnTmFtZSA9IFwiYnV0dG9uXCI7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgY2hhbmdlTWl4aW5zIGZyb20gXCIuLi9taXhpbnMvY2hhbmdlXCI7XG5cbmNsYXNzIFNlbGVjdCBleHRlbmRzIEVsZW1lbnQge1xuICBvblJlc2l6ZShyZXNpemVIYW5kbGVyLCBlbGVtZW50KSB7fSAvLy9cblxuICBvZmZSZXNpemUocmVzaXplSGFuZGxlciwgZWxlbWVudCkge30gIC8vL1xuXG4gIGdldFZhbHVlKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnZhbHVlOyB9XG5cbiAgc2V0VmFsdWUodmFsdWUpIHsgdGhpcy5kb21FbGVtZW50LnZhbHVlID0gdmFsdWU7IH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwic2VsZWN0XCI7XG59XG5cbk9iamVjdC5hc3NpZ24oU2VsZWN0LnByb3RvdHlwZSwgY2hhbmdlTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IGNoYW5nZU1peGlucyBmcm9tIFwiLi4vbWl4aW5zL2NoYW5nZVwiO1xuXG5jbGFzcyBDaGVja2JveCBleHRlbmRzIEVsZW1lbnQge1xuICBpc0NoZWNrZWQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2hlY2tlZDsgfVxuXG4gIGNoZWNrKGNoZWNrZWQgPSB0cnVlKSB7IHRoaXMuZG9tRWxlbWVudC5jaGVja2VkID0gY2hlY2tlZDsgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJpbnB1dFwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICB0eXBlOiBcImNoZWNrYm94XCJcbiAgfTtcbn1cblxuT2JqZWN0LmFzc2lnbihDaGVja2JveC5wcm90b3R5cGUsIGNoYW5nZU1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IENoZWNrYm94O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSW5wdXRFbGVtZW50IGZyb20gXCIuLi9pbnB1dEVsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dGFyZWEgZXh0ZW5kcyBJbnB1dEVsZW1lbnQge1xuICBzdGF0aWMgdGFnTmFtZSA9IFwidGV4dGFyZWFcIjtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgb25SZXNpemUsIG9mZlJlc2l6ZSB9IGZyb20gXCIuLi9taXhpbnMvcmVzaXplXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgb25SZXNpemUsXG4gIG9mZlJlc2l6ZVxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGtleU1peGlucyBmcm9tIFwiLi9taXhpbnMva2V5XCI7XG5pbXBvcnQgZXZlbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2V2ZW50XCI7XG5pbXBvcnQgbW91c2VNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL21vdXNlXCI7XG5pbXBvcnQgY2xpY2tNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2NsaWNrXCI7XG5pbXBvcnQgd2luZG93TWl4aW5zIGZyb20gXCIuL21peGlucy93aW5kb3dcIjtcblxuaW1wb3J0IHsgVU5ERUZJTkVEIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmNsYXNzIFdpbmRvdyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IHdpbmRvdzsgLy8vXG4gIH1cblxuICBhc3NpZ24oLi4uc291cmNlcykge1xuICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuZG9tRWxlbWVudDsgLy8vXG5cbiAgICBPYmplY3QuYXNzaWduKHRhcmdldCwgLi4uc291cmNlcyk7XG4gIH1cblxuICBhZGRSZXNpemVPYmplY3QoKSB7fSAvLy9cblxuICByZW1vdmVSZXNpemVPYmplY3QoKSB7fSAvLy9cblxuICBnZXRXaWR0aCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5pbm5lcldpZHRoOyB9IC8vL1xuICBcbiAgZ2V0SGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmlubmVySGVpZ2h0OyB9IC8vL1xuXG4gIGdldFNjcm9sbFRvcCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5wYWdlWU9mZnNldDsgfSAgLy8vXG5cbiAgZ2V0U2Nyb2xsTGVmdCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5wYWdlWE9mZnNldDsgfSAvLy9cbn1cblxuT2JqZWN0LmFzc2lnbihXaW5kb3cucHJvdG90eXBlLCBrZXlNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihXaW5kb3cucHJvdG90eXBlLCBldmVudE1peGlucyk7XG5PYmplY3QuYXNzaWduKFdpbmRvdy5wcm90b3R5cGUsIG1vdXNlTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwgY2xpY2tNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihXaW5kb3cucHJvdG90eXBlLCB3aW5kb3dNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCAodHlwZW9mIHdpbmRvdyA9PT0gVU5ERUZJTkVEKSA/IHVuZGVmaW5lZCA6IG5ldyBXaW5kb3coKTsgIC8vL1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgTEVGVF9NT1VTRV9CVVRUT04gPSAwO1xuZXhwb3J0IGNvbnN0IFJJR0hUX01PVVNFX0JVVFRPTiA9IDI7XG5leHBvcnQgY29uc3QgTUlERExFX01PVVNFX0JVVFRPTiA9IDE7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgTEVGVF9NT1VTRV9CVVRUT04sXG4gIFJJR0hUX01PVVNFX0JVVFRPTixcbiAgTUlERExFX01PVVNFX0JVVFRPTlxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGtleU1peGlucyBmcm9tIFwiLi9taXhpbnMva2V5XCI7XG5pbXBvcnQgY2xpY2tNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2NsaWNrXCI7XG5pbXBvcnQgZXZlbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2V2ZW50XCI7XG5pbXBvcnQgbW91c2VNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL21vdXNlXCI7XG5cbmltcG9ydCB7IFVOREVGSU5FRCB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5jbGFzcyBEb2N1bWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvY3VtZW50OyAvLy9cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAodHlwZW9mIGRvY3VtZW50ID09PSBVTkRFRklORUQpID8gdW5kZWZpbmVkIDogbmV3IERvY3VtZW50KCk7ICAvLy9cblxuT2JqZWN0LmFzc2lnbihEb2N1bWVudC5wcm90b3R5cGUsIGtleU1peGlucyk7XG5PYmplY3QuYXNzaWduKERvY3VtZW50LnByb3RvdHlwZSwgY2xpY2tNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihEb2N1bWVudC5wcm90b3R5cGUsIGV2ZW50TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRG9jdW1lbnQucHJvdG90eXBlLCBtb3VzZU1peGlucyk7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgUmVhY3QgfSBmcm9tIFwiLi9yZWFjdFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBCb3VuZHMgfSBmcm9tIFwiLi9ib3VuZHNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgT2Zmc2V0IH0gZnJvbSBcIi4vb2Zmc2V0XCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgQm9keSB9IGZyb20gXCIuL2VsZW1lbnQvYm9keVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMaW5rIH0gZnJvbSBcIi4vZWxlbWVudC9saW5rXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIElucHV0IH0gZnJvbSBcIi4vaW5wdXRFbGVtZW50L2lucHV0XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEJ1dHRvbiB9IGZyb20gXCIuL2VsZW1lbnQvYnV0dG9uXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlbGVjdCB9IGZyb20gXCIuL2VsZW1lbnQvc2VsZWN0XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEVsZW1lbnQgfSBmcm9tIFwiLi9lbGVtZW50XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENoZWNrYm94IH0gZnJvbSBcIi4vZWxlbWVudC9jaGVja2JveFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUZXh0YXJlYSB9IGZyb20gXCIuL2lucHV0RWxlbWVudC90ZXh0YXJlYVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUZXh0RWxlbWVudCB9IGZyb20gXCIuL3RleHRFbGVtZW50XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIElucHV0RWxlbWVudCB9IGZyb20gXCIuL2lucHV0RWxlbWVudFwiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpbmRvdyB9IGZyb20gXCIuL3dpbmRvd1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBidXR0b25zIH0gZnJvbSBcIi4vYnV0dG9uc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBkb2N1bWVudCB9IGZyb20gXCIuL2RvY3VtZW50XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGV2ZW50VHlwZXMgfSBmcm9tIFwiLi9ldmVudFR5cGVzXCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0LCB3aW5kb3cgfSBmcm9tIFwiZWFzeVwiO1xuXG53aW5kb3cuYXNzaWduKHtcbiAgUmVhY3Rcbn0pO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCIuL2p1eHRhcG9zZVwiO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBjb250cm9sbGVyID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRyb2xsZXI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBFTVBUWV9TVFJJTkcgPSBcIlwiO1xuZXhwb3J0IGNvbnN0IFRJTUVPVVRfREVMQVkgPSAxMDAwO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBJbnB1dEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhc3N3b3JkSW5wdXQgZXh0ZW5kcyBJbnB1dEVsZW1lbnQge1xuICBnZXRQYXNzd29yZCgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKSxcbiAgICAgICAgICBwYXNzd29yZCA9IHZhbHVlOyAvLy9cblxuICAgIHJldHVybiBwYXNzd29yZDtcbiAgfVxuXG4gIGNsZWFyUGFzc3dvcmQoKSB7XG4gICAgY29uc3QgcGFzc3dvcmQgPSBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgdmFsdWUgPSBwYXNzd29yZDsgLy8vXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG5cdCAgY29uc3QgZ2V0UGFzc3dvcmQgPSB0aGlzLmdldFBhc3N3b3JkLmJpbmQodGhpcyksXG5cdFx0XHRcdCAgY2xlYXJQYXNzd29yZCA9IHRoaXMuY2xlYXJQYXNzd29yZC5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRQYXNzd29yZCxcbiAgICAgIGNsZWFyUGFzc3dvcmRcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJpbnB1dFwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICB0eXBlOiBcInBhc3N3b3JkXCJcbiAgfTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORywgVElNRU9VVF9ERUxBWSB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmFsaWRhdGlvbkVycm9yUGFyYWdyYXBoIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yT3JEb21FbGVtZW50LCB0aW1lb3V0KSB7XG4gICAgc3VwZXIoc2VsZWN0b3JPckRvbUVsZW1lbnQpO1xuXG4gICAgdGhpcy50aW1lb3V0ID0gdGltZW91dDtcbiAgfVxuXG4gIGNsZWFyVmFsaWRhdGlvbkVycm9yKCkge1xuICAgIGNvbnN0IGh0bWwgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICB0aGlzLmh0bWwoaHRtbCk7XG4gIH1cblxuICBzaG93VmFsaWRhdGlvbkVycm9yKHZhbGlkYXRpb25FcnJvcikge1xuICAgIGNvbnN0IGh0bWwgPSB2YWxpZGF0aW9uRXJyb3I7IC8vL1xuXG4gICAgdGhpcy5odG1sKGh0bWwpO1xuXG4gICAgaWYgKHRoaXMudGltZW91dCAhPT0gbnVsbCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgfVxuXG4gICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnRpbWVtb3V0ID0gbnVsbDtcblxuICAgICAgdGhpcy5jbGVhclZhbGlkYXRpb25FcnJvcigpO1xuICAgIH0sIFRJTUVPVVRfREVMQVkpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICByZXR1cm4gKHtcbiAgICAgIHNob3dWYWxpZGF0aW9uRXJyb3I6IHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvci5iaW5kKHRoaXMpXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwicFwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmFsaWRhdGlvbiBlcnJvclwiXG4gIH07XG5cbiAgc3RhdGljIGZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGNvbnN0IHRpbWVvdXQgPSBudWxsLFxuICAgICAgICAgIHZhbGlkYXRpb25FcnJvclBhcmFncmFwaCA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCB0aW1lb3V0KTtcblxuICAgIHJldHVybiB2YWxpZGF0aW9uRXJyb3JQYXJhZ3JhcGg7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCwgQnV0dG9uIH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IGNvbnRyb2xsZXIgZnJvbSBcIi4uLy4uL2NvbnRyb2xsZXJcIjtcbmltcG9ydCBQYXNzd29yZElucHV0IGZyb20gXCIuLi9pbnB1dC9wYXNzd29yZFwiO1xuaW1wb3J0IFZhbGlkYXRpb25FcnJvclBhcmFncmFwaCBmcm9tIFwiLi4vcGFyYWdyYXBoL3ZhbGlkYXRpb25FcnJvclwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhc3N3b3JkRm9ybSBleHRlbmRzIEVsZW1lbnQge1xuICB2YWxpZGF0ZUFuZFN1Ym1pdEZvcm0oKSB7XG4gICAgY29uc3QgcGFzc3dvcmRWYWxpZCA9IHRoaXMudmFsaWRhdGVGb3JtKCk7XG5cbiAgICBpZiAoIXBhc3N3b3JkVmFsaWQpIHtcbiAgICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcihcIlRoZSBwYXNzd29yZCBpcyBpbnZhbGlkXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN1Ym1pdEZvcm0oKTtcbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZUZvcm0oKSB7XG4gICAgY29uc3QgcGFzc3dvcmQgPSB0aGlzLmdldFBhc3N3b3JkKCksXG4gICAgICAgICAgcGFzc3dvcmRWYWxpZCA9IGlzUGFzc3dvcmRWYWxpZChwYXNzd29yZCk7XG5cbiAgICByZXR1cm4gcGFzc3dvcmRWYWxpZDtcbiAgfVxuXG4gIHN1Ym1pdEZvcm0oKSB7XG4gICAgY29uc3QgcGFzc3dvcmQgPSB0aGlzLmdldFBhc3N3b3JkKCk7XG5cbiAgICBjb250cm9sbGVyLnNldFBhc3N3b3JkKHBhc3N3b3JkKTtcblxuICAgIHRoaXMuY2xlYXJQYXNzd29yZCgpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4oW1xuXG4gICAgICA8UGFzc3dvcmRJbnB1dCAvPixcbiAgICAgIDxWYWxpZGF0aW9uRXJyb3JQYXJhZ3JhcGggLz4sXG4gICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCwgZWxlbWVudCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGVBbmRTdWJtaXRGb3JtKCk7XG5cbiAgICAgICAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgU3VibWl0XG4gICAgICA8L0J1dHRvbj5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJmb3JtXCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJwYXNzd29yZFwiXG4gIH07XG59XG5cbmZ1bmN0aW9uIGlzUGFzc3dvcmRWYWxpZChwYXNzd29yZCkge1xuICBjb25zdCBwYXNzd29yZFZhbGlkID0gKHBhc3N3b3JkICE9PSBFTVBUWV9TVFJJTkcpO1xuXG4gIHJldHVybiBwYXNzd29yZFZhbGlkO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVzc2FnZVBhcmFncmFwaCBleHRlbmRzIEVsZW1lbnQge1xuICBzaG93TWVzc2FnZShtZXNzYWdlKSB7XG4gICAgY29uc3QgaHRtbCA9IG1lc3NhZ2U7IC8vL1xuXG4gICAgdGhpcy5odG1sKGh0bWwpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcblx0ICBjb25zdCBzaG93TWVzc2FnZSA9IHRoaXMuc2hvd01lc3NhZ2UuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgc2hvd01lc3NhZ2VcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJwXCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJtZXNzYWdlXCJcbiAgfTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBjb250cm9sbGVyIGZyb20gXCIuLi8uLi9jb250cm9sbGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc2V0UGFzc3dvcmRCdXR0b24gZXh0ZW5kcyBFbGVtZW50IHtcbiAgY2xpY2tIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY29udHJvbGxlci5yZXNldFBhc3N3b3JkKCk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICB0aGlzLm9uQ2xpY2sodGhpcy5jbGlja0hhbmRsZXIsIHRoaXMpO1xuICB9XG5cbiAgd2lsbE1vdW50KCkge1xuICAgIHRoaXMub2ZmQ2xpY2sodGhpcy5jbGlja0hhbmRsZXIsIHRoaXMpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gXCJSZXNldCBwYXNzd29yZFwiO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImJ1dHRvblwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwicmVzZXQtcGFzc3dvcmRcIlxuICB9O1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IFBhc3N3b3JkRm9ybSBmcm9tIFwiLi92aWV3L2Zvcm0vcGFzc3dvcmRcIjtcbmltcG9ydCBNZXNzYWdlUGFyYWdyYXBoIGZyb20gXCIuL3ZpZXcvcGFyYWdyYXBoL21lc3NhZ2VcIjtcbmltcG9ydCBSZXNldFBhc3N3b3JkQnV0dG9uIGZyb20gXCIuL3ZpZXcvYnV0dG9uL3Jlc2V0UGFzc3dvcmRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybihbXG5cbiAgICAgIDxQYXNzd29yZEZvcm0vPixcbiAgICAgIDxSZXNldFBhc3N3b3JkQnV0dG9uLz4sXG4gICAgICA8TWVzc2FnZVBhcmFncmFwaC8+XG5cbiAgICBdKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kZWwge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnBhc3N3b3JkID0gbnVsbDtcbiAgfVxuXG4gIHNldFBhc3N3b3JkKHBhc3N3b3JkKSB7XG4gICAgdGhpcy5wYXNzd29yZCA9IHBhc3N3b3JkO1xuICB9XG5cbiAgcmVzZXRQYXNzd29yZCgpIHtcbiAgICB0aGlzLnBhc3N3b3JkID0gbnVsbDtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCIuLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCB7IEJvZHkgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiLi9tdmNBcHBsaWNhdGlvbi92aWV3XCI7XG5pbXBvcnQgTW9kZWwgZnJvbSBcIi4vbXZjQXBwbGljYXRpb24vbW9kZWxcIjtcbmltcG9ydCBjb250cm9sbGVyIGZyb20gXCIuL212Y0FwcGxpY2F0aW9uL2NvbnRyb2xsZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbXZjQXBwbGljYXRpb24oKSB7XG4gIGNvbnN0IG1vZGVsID0gbmV3IE1vZGVsKCksXG4gICAgICAgIHZpZXcgPVxuXG4gICAgICAgICAgPFZpZXcgLz5cblxuICAgICAgICA7XG5cbiAgT2JqZWN0LmFzc2lnbihjb250cm9sbGVyLCB7XG4gICAgc2V0UGFzc3dvcmQsXG4gICAgcmVzZXRQYXNzd29yZFxuICB9KTtcblxuICBjb25zdCBib2R5ID0gbmV3IEJvZHkoKTtcblxuICBib2R5Lm1vdW50KHZpZXcpO1xuXG4gIGZ1bmN0aW9uIHNldFBhc3N3b3JkKHBhc3N3b3JkKSB7XG4gICAgbW9kZWwuc2V0UGFzc3dvcmQocGFzc3dvcmQpO1xuXG4gICAgdmlldy5zaG93TWVzc2FnZShcIlRoZSBwYXNzd29yZCBoYXMgYmVlbiBzZXQuXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRQYXNzd29yZCgpIHtcbiAgICBtb2RlbC5yZXNldFBhc3N3b3JkKCk7XG5cbiAgICB2aWV3LnNob3dNZXNzYWdlKFwiVGhlIHBhc3N3b3JkIGhhcyBiZWVuIHJlc2V0LlwiKTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCIuLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCB7IEJvZHkgfSBmcm9tIFwiZWFzeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaW1wbGVBcHBsaWNhdGlvbigpIHtcbiAgY29uc3QgYm9keSA9IG5ldyBCb2R5KCk7XG5cbiAgYm9keS5tb3VudChcblxuICAgIDxwPlxuICAgICAgQSBzaW1wbGUgYXBwbGljYXRpb24uXG4gICAgPC9wPlxuXG4gICk7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGRlZmF1bHQgYXMgbXZjQXBwbGljYXRpb24gfSBmcm9tIFwiLi9leGFtcGxlL212Y0FwcGxpY2F0aW9uXCI7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIHNpbXBsZUFwcGxpY2F0aW9uIH0gZnJvbSBcIi4vZXhhbXBsZS9zaW1wbGVBcHBsaWNhdGlvblwiO1xuXG5PYmplY3QuYXNzaWduKHdpbmRvdywge1xuICBtdmNBcHBsaWNhdGlvbixcbiAgc2ltcGxlQXBwbGljYXRpb25cbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBRXFCLFNBQU4sMkJBQVE7dUJBQ1QsS0FBSyxNQUFJOztBQUNuQixhQUFLLE1BQU07QUFDWCxhQUFLLE9BQU87Ozs7VUFHZCxLQUFBO2lCQUFBLGtCQUFTO0FBQ1AsbUJBQU8sS0FBSzs7OztVQUdkLEtBQUE7aUJBQUEsbUJBQVU7QUFDUixtQkFBTyxLQUFLOzs7Ozs7c0JBWEs7Ozs7QUNGckI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFFcUIsU0FBTiwyQkFBUTt1QkFDVCxLQUFLLE1BQU0sT0FBTyxRQUFNOztBQUNsQyxhQUFLLE1BQU07QUFDWCxhQUFLLE9BQU87QUFDWixhQUFLLFFBQVE7QUFDYixhQUFLLFNBQVM7Ozs7VUFHaEIsS0FBQTtpQkFBQSxrQkFBUztBQUNQLG1CQUFPLEtBQUs7Ozs7VUFHZCxLQUFBO2lCQUFBLG1CQUFVO0FBQ1IsbUJBQU8sS0FBSzs7OztVQUdkLEtBQUE7aUJBQUEsb0JB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
