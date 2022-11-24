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
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return Offset;
      }
    });
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
          get: all[name]
        });
    }
    _export(exports, {
      FOR: function() {
        return FOR;
      },
      BODY: function() {
        return BODY;
      },
      NONE: function() {
        return NONE;
      },
      SPACE: function() {
        return SPACE;
      },
      CLASS: function() {
        return CLASS;
      },
      WIDTH: function() {
        return WIDTH;
      },
      BLOCK: function() {
        return BLOCK;
      },
      HEIGHT: function() {
        return HEIGHT;
      },
      OBJECT: function() {
        return OBJECT;
      },
      STRING: function() {
        return STRING;
      },
      DISPLAY: function() {
        return DISPLAY;
      },
      BOOLEAN: function() {
        return BOOLEAN;
      },
      DISABLED: function() {
        return DISABLED;
      },
      FUNCTION: function() {
        return FUNCTION;
      },
      WILDCARD: function() {
        return WILDCARD;
      },
      HTML_FOR: function() {
        return HTML_FOR;
      },
      UNDEFINED: function() {
        return UNDEFINED;
      },
      CLASS_NAME: function() {
        return CLASS_NAME;
      },
      ABOUT_BLANK: function() {
        return ABOUT_BLANK;
      },
      EMPTY_STRING: function() {
        return EMPTY_STRING;
      },
      SVG_NAMESPACE_URI: function() {
        return SVG_NAMESPACE_URI;
      },
      DEFAULT_PROPERTIES: function() {
        return DEFAULT_PROPERTIES;
      },
      IGNORED_PROPERTIES: function() {
        return IGNORED_PROPERTIES;
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
    var ABOUT_BLANK = "about:blank";
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
          get: all[name]
        });
    }
    _export(exports, {
      combine: function() {
        return combine;
      },
      prune: function() {
        return prune;
      }
    });
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
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      first: function() {
        return first;
      },
      push: function() {
        return push;
      },
      augment: function() {
        return augment;
      },
      flatten: function() {
        return flatten;
      },
      guarantee: function() {
        return guarantee;
      }
    });
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
        return !!right[Symbol.hasInstance](left);
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
    function flatten(array) {
      return array.reduce(function(array2, element) {
        array2 = array2.concat(element);
        return array2;
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
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      isSVGTagName: function() {
        return isSVGTagName;
      },
      isSVGAttributeName: function() {
        return isSVGAttributeName;
      },
      isHTMLAttributeName: function() {
        return isHTMLAttributeName;
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
          get: all[name]
        });
    }
    _export(exports, {
      elementsFromDOMElements: function() {
        return elementsFromDOMElements;
      },
      ascendantDOMNodesFromDOMNode: function() {
        return ascendantDOMNodesFromDOMNode;
      },
      descendantDOMNodesFromDOMNode: function() {
        return descendantDOMNodesFromDOMNode;
      },
      filterDOMNodesBySelector: function() {
        return filterDOMNodesBySelector;
      },
      domNodeMatchesSelector: function() {
        return domNodeMatchesSelector;
      },
      filterDOMNodes: function() {
        return filterDOMNodes;
      }
    });
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
        (0, _array.push)(descendantDOMNodes, childDOMNodes);
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
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
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
          ], parentElements = (0, _dom.elementsFromDOMElements)(parentDOMElements), firstParentElement = (0, _array.first)(parentElements);
          parentElement = firstParentElement || null;
        }
      }
      return parentElement;
    }
    function getChildElements() {
      var selector = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _constants.WILDCARD;
      var childDOMNodes = this.domElement.childNodes, childDOMElements = (0, _dom.filterDOMNodesBySelector)(childDOMNodes, selector), childElements = (0, _dom.elementsFromDOMElements)(childDOMElements);
      return childElements;
    }
    function getAscendantElements() {
      var selector = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _constants.WILDCARD, maximumHeight = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Infinity;
      var height = maximumHeight, domNode = this.domElement, ascendantDOMNodes = (0, _dom.ascendantDOMNodesFromDOMNode)(domNode, height), ascendantDOMElements = (0, _dom.filterDOMNodesBySelector)(ascendantDOMNodes, selector), ascendantElements = (0, _dom.elementsFromDOMElements)(ascendantDOMElements);
      return ascendantElements;
    }
    function getDescendantElements() {
      var selector = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _constants.WILDCARD, maximumDepth = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Infinity;
      var depth = maximumDepth, domNode = this.domElement, descendantDOMNodes = (0, _dom.descendantDOMNodesFromDOMNode)(domNode, depth), descendantDOMElements = (0, _dom.filterDOMNodesBySelector)(descendantDOMNodes, selector), descendantElements = (0, _dom.elementsFromDOMElements)(descendantDOMElements);
      return descendantElements;
    }
    function getNextSiblingElement() {
      var selector = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _constants.WILDCARD;
      var nextSiblingElement = null;
      var nextSiblingDOMNode = this.domElement.nextSibling;
      if (nextSiblingDOMNode !== null && (0, _dom.domNodeMatchesSelector)(nextSiblingDOMNode, selector)) {
        nextSiblingElement = nextSiblingDOMNode.__element__ || null;
      }
      return nextSiblingElement;
    }
    function getPreviousSiblingElement() {
      var selector = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _constants.WILDCARD;
      var previousSiblingElement = null;
      var previousSiblingDOMNode = this.domElement.previousSibling;
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
        return _default;
      }
    });
    var _offset = /* @__PURE__ */ _interopRequireDefault(require_offset());
    var _bounds = /* @__PURE__ */ _interopRequireDefault(require_bounds());
    var _element = /* @__PURE__ */ _interopRequireDefault(require_element());
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
    function _interopRequireDefault(obj) {
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
          get: all[name]
        });
    }
    _export(exports, {
      removeFalseyElements: function() {
        return removeFalseyElements;
      },
      replaceStringsWithTextElements: function() {
        return replaceStringsWithTextElements;
      }
    });
    var _textElement = /* @__PURE__ */ _interopRequireDefault(require_textElement());
    var _constants = require_constants();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var _typeof = function(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    };
    function removeFalseyElements(elements) {
      elements = elements.reduce(function(elements2, element) {
        if (element) {
          elements2.push(element);
        }
        return elements2;
      }, []);
      return elements;
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
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
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
      this.properties = (0, _object.combine)(properties, defaultProperties);
      properties = (0, _object.prune)(this.properties, ignoredProperties);
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
        var firstArgument = (0, _array.first)(arguments);
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
    function childElementsFromElement(element) {
      var childElements = null;
      if (_typeof(element.childElements) === _constants.FUNCTION) {
        childElements = element.childElements.call(element);
        childElements = (0, _array.guarantee)(childElements);
        childElements = (0, _elements.removeFalseyElements)(childElements);
        childElements = (0, _elements.replaceStringsWithTextElements)(childElements);
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
      return svg ? (0, _name.isSVGAttributeName)(name) : (0, _name.isHTMLAttributeName)(name);
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
          get: all[name]
        });
    }
    _export(exports, {
      BLUR_EVENT_TYPE: function() {
        return BLUR_EVENT_TYPE;
      },
      WHEEL_EVENT_TYPE: function() {
        return WHEEL_EVENT_TYPE;
      },
      INPUT_EVENT_TYPE: function() {
        return INPUT_EVENT_TYPE;
      },
      FOCUS_EVENT_TYPE: function() {
        return FOCUS_EVENT_TYPE;
      },
      CLICK_EVENT_TYPE: function() {
        return CLICK_EVENT_TYPE;
      },
      KEYUP_EVENT_TYPE: function() {
        return KEYUP_EVENT_TYPE;
      },
      CHANGE_EVENT_TYPE: function() {
        return CHANGE_EVENT_TYPE;
      },
      RESIZE_EVENT_TYPE: function() {
        return RESIZE_EVENT_TYPE;
      },
      SCROLL_EVENT_TYPE: function() {
        return SCROLL_EVENT_TYPE;
      },
      KEYDOWN_EVENT_TYPE: function() {
        return KEYDOWN_EVENT_TYPE;
      },
      MOUSEUP_EVENT_TYPE: function() {
        return MOUSEUP_EVENT_TYPE;
      },
      AUXCLICK_EVENT_TYPE: function() {
        return AUXCLICK_EVENT_TYPE;
      },
      MOUSEOUT_EVENT_TYPE: function() {
        return MOUSEOUT_EVENT_TYPE;
      },
      DBLCLICK_EVENT_TYPE: function() {
        return DBLCLICK_EVENT_TYPE;
      },
      MOUSEOVER_EVENT_TYPE: function() {
        return MOUSEOVER_EVENT_TYPE;
      },
      MOUSEDOWN_EVENT_TYPE: function() {
        return MOUSEDOWN_EVENT_TYPE;
      },
      MOUSEMOVE_EVENT_TYPE: function() {
        return MOUSEMOVE_EVENT_TYPE;
      },
      CONTEXTMENU_EVENT_TYPE: function() {
        return CONTEXTMENU_EVENT_TYPE;
      },
      default: function() {
        return _default;
      }
    });
    var BLUR_EVENT_TYPE = "blur";
    var WHEEL_EVENT_TYPE = "wheel";
    var INPUT_EVENT_TYPE = "input";
    var FOCUS_EVENT_TYPE = "focus";
    var CLICK_EVENT_TYPE = "click";
    var KEYUP_EVENT_TYPE = "keyup";
    var CHANGE_EVENT_TYPE = "change";
    var RESIZE_EVENT_TYPE = "resize";
    var SCROLL_EVENT_TYPE = "scroll";
    var KEYDOWN_EVENT_TYPE = "keydown";
    var MOUSEUP_EVENT_TYPE = "mouseup";
    var AUXCLICK_EVENT_TYPE = "auxclick";
    var MOUSEOUT_EVENT_TYPE = "mouseout";
    var DBLCLICK_EVENT_TYPE = "dblclick";
    var MOUSEOVER_EVENT_TYPE = "mouseover";
    var MOUSEDOWN_EVENT_TYPE = "mousedown";
    var MOUSEMOVE_EVENT_TYPE = "mousemove";
    var CONTEXTMENU_EVENT_TYPE = "contextmenu";
    var _default = {
      BLUR_EVENT_TYPE,
      WHEEL_EVENT_TYPE,
      INPUT_EVENT_TYPE,
      FOCUS_EVENT_TYPE,
      CLICK_EVENT_TYPE,
      KEYUP_EVENT_TYPE,
      CHANGE_EVENT_TYPE,
      RESIZE_EVENT_TYPE,
      SCROLL_EVENT_TYPE,
      KEYDOWN_EVENT_TYPE,
      MOUSEUP_EVENT_TYPE,
      AUXCLICK_EVENT_TYPE,
      MOUSEOUT_EVENT_TYPE,
      DBLCLICK_EVENT_TYPE,
      MOUSEOVER_EVENT_TYPE,
      MOUSEDOWN_EVENT_TYPE,
      MOUSEMOVE_EVENT_TYPE,
      CONTEXTMENU_EVENT_TYPE
    };
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
      this.on(_eventTypes.CLICK_EVENT_TYPE, clickHandler, element);
    }
    function offClick(clickHandler, element) {
      this.off(_eventTypes.CLICK_EVENT_TYPE, clickHandler, element);
    }
    function onDoubleClick(clickHandler, element) {
      this.on(_eventTypes.DBLCLICK_EVENT_TYPE, clickHandler, element);
    }
    function offDoubleClick(clickHandler, element) {
      this.off(_eventTypes.DBLCLICK_EVENT_TYPE, clickHandler, element);
    }
    var clickMixins = {
      onClick,
      offClick,
      onDoubleClick,
      offDoubleClick
    };
    var _default = clickMixins;
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
      Object.assign(this.state, state);
    }
    var stateMixins = {
      getState,
      setState,
      updateState
    };
    var _default = stateMixins;
  });

  // node_modules/easy/lib/contentTypes.js
  var require_contentTypes = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "TEXT_HTML_CONTENT_TYPE", {
      enumerable: true,
      get: function() {
        return TEXT_HTML_CONTENT_TYPE;
      }
    });
    var TEXT_HTML_CONTENT_TYPE = "text/html";
  });

  // node_modules/easy/lib/mixins/resize.js
  var require_resize = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      onResize: function() {
        return onResize;
      },
      offResize: function() {
        return offResize;
      },
      default: function() {
        return _default;
      }
    });
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
    function resizeObjectLoadHandler(element) {
      var resizeObject = element.__resizeObject__, resizeObjectWindow = resizeObject.contentDocument.defaultView;
      resizeObjectWindow.addEventListener(_eventTypes.RESIZE_EVENT_TYPE, function(event) {
        var resizeEventListeners = element.findEventListeners(_eventTypes.RESIZE_EVENT_TYPE);
        resizeEventListeners.forEach(function(resizeEventListener1) {
          return resizeEventListener1(event);
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
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
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
            (0, _resize.removeResizeObject)(_this);
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
      var eventListener = this.eventListeners.find(function(eventListener2) {
        if (eventListener2.element === element && eventListener2.handler === handler && eventListener2.eventType === eventType) {
          return true;
        }
      });
      return eventListener;
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
    function createEventListener(eventType, handler, element) {
      var _this = this;
      var eventListener;
      var handlerElement = element;
      eventListener = function(event) {
        var _$element = _this;
        handler.call(handlerElement, event, _$element);
      };
      Object.assign(eventListener, {
        element,
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
  });

  // node_modules/easy/lib/mixins/scroll.js
  var require_scroll = __commonJS((exports) => {
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
  });

  // node_modules/easy/lib/element.js
  var require_element2 = __commonJS((exports) => {
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
    var _offset = /* @__PURE__ */ _interopRequireDefault(require_offset());
    var _bounds = /* @__PURE__ */ _interopRequireDefault(require_bounds());
    var _jsx = /* @__PURE__ */ _interopRequireDefault(require_jsx());
    var _key = /* @__PURE__ */ _interopRequireDefault(require_key());
    var _click = /* @__PURE__ */ _interopRequireDefault(require_click());
    var _state = /* @__PURE__ */ _interopRequireDefault(require_state());
    var _event = /* @__PURE__ */ _interopRequireDefault(require_event());
    var _mouse = /* @__PURE__ */ _interopRequireDefault(require_mouse());
    var _resize = /* @__PURE__ */ _interopRequireDefault(require_resize());
    var _scroll = /* @__PURE__ */ _interopRequireDefault(require_scroll());
    var _element = /* @__PURE__ */ _interopRequireDefault(require_element());
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
    function _interopRequireDefault(obj) {
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
          value: function mount(element) {
            var descendantElements = element.getDescendantElements(), elements = [
              element
            ].concat(_toConsumableArray(descendantElements));
            this.add(element);
            elements.reverse();
            elements.forEach(function(element2) {
              return element2.didMount && element2.didMount();
            });
          }
        },
        {
          key: "unmount",
          value: function unmount(element) {
            var descendantElements = element.getDescendantElements(), elements = [
              element
            ].concat(_toConsumableArray(descendantElements));
            elements.forEach(function(element2) {
              return element2.willUnmount && element2.willUnmount();
            });
            this.remove(element);
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
          value: function display(display) {
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
              var style2 = this.domElement.style[name];
              return style2;
            }
          }
        },
        {
          key: "html",
          value: function html(html) {
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
          value: function css(css) {
            var _this = this;
            if (css === void 0) {
              var computedStyle = getComputedStyle(this.domElement), _$css = {};
              for (var index = 0; index < computedStyle.length; index++) {
                var firstComputedStyle = _array.first[computedStyle], name = firstComputedStyle, value = computedStyle.getPropertyValue(name);
                _$css[name] = value;
              }
              return _$css;
            } else if ((typeof css === "undefined" ? "undefined" : _typeof(css)) === _constants.STRING) {
              var name1 = css;
              var computedStyle1 = getComputedStyle(this.domElement), value1 = computedStyle1.getPropertyValue(name1);
              css = value1;
              return css;
            } else {
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
            for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key2 = 2; _key2 < _len; _key2++) {
              remainingArguments[_key2 - 2] = arguments[_key2];
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
    function elementFromTagName(Class, tagName) {
      for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key2 = 2; _key2 < _len; _key2++) {
        remainingArguments[_key2 - 2] = arguments[_key2];
      }
      var _Function_prototype_bind;
      var selector = null, element = new ((_Function_prototype_bind = Function.prototype.bind).call.apply(_Function_prototype_bind, [
        Class,
        null,
        selector
      ].concat(_toConsumableArray(remainingArguments))))();
      element.domElement = (0, _name.isSVGTagName)(tagName) ? document.createElementNS(_constants.SVG_NAMESPACE_URI, tagName) : document.createElement(tagName);
      element.domElement.__element__ = element;
      return element;
    }
    function defaultPropertiesFromClass(Class) {
      var defaultProperties = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (Class.hasOwnProperty(_constants.DEFAULT_PROPERTIES)) {
        defaultProperties = (0, _object.combine)(defaultProperties, Class[_constants.DEFAULT_PROPERTIES]);
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
        ignoredProperties = (0, _array.augment)(ignoredProperties, Class[_constants.IGNORED_PROPERTIES], function(ignoredProperty) {
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
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    var _element = /* @__PURE__ */ _interopRequireDefault(require_element2());
    var _array = require_array();
    var _constants = require_constants();
    var _elements = require_elements();
    function _instanceof(left, right) {
      if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
      } else {
        return left instanceof right;
      }
    }
    function _interopRequireDefault(obj) {
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
    function sanitiseChildElements(childElements) {
      childElements = (0, _array.flatten)(childElements);
      childElements = (0, _elements.removeFalseyElements)(childElements);
      childElements = (0, _elements.replaceStringsWithTextElements)(childElements);
      return childElements;
    }
    function isSubclassOf(argument, Class) {
      var subclassOf = _instanceof(argument.prototype, Class);
      return subclassOf;
    }
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
    var _element = /* @__PURE__ */ _interopRequireDefault(require_element2());
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
    function _interopRequireDefault(obj) {
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
    var _element = /* @__PURE__ */ _interopRequireDefault(require_element2());
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
    function _interopRequireDefault(obj) {
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
  });

  // node_modules/easy/lib/mixins/change.js
  var require_change = __commonJS((exports) => {
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
  });

  // node_modules/easy/lib/inputElement.js
  var require_inputElement = __commonJS((exports) => {
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
    var _element = /* @__PURE__ */ _interopRequireDefault(require_element2());
    var _change = /* @__PURE__ */ _interopRequireDefault(require_change());
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
    function _interopRequireDefault(obj) {
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
  });

  // node_modules/easy/lib/inputElement/input.js
  var require_input = __commonJS((exports) => {
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
    var _inputElement = /* @__PURE__ */ _interopRequireDefault(require_inputElement());
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
    function _interopRequireDefault(obj) {
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
    var _element = /* @__PURE__ */ _interopRequireDefault(require_element2());
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
    function _interopRequireDefault(obj) {
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
        return _default;
      }
    });
    var _element = /* @__PURE__ */ _interopRequireDefault(require_element2());
    var _change = /* @__PURE__ */ _interopRequireDefault(require_change());
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
    function _interopRequireDefault(obj) {
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
        return _default;
      }
    });
    var _element = /* @__PURE__ */ _interopRequireDefault(require_element2());
    var _change = /* @__PURE__ */ _interopRequireDefault(require_change());
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
    function _interopRequireDefault(obj) {
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
  });

  // node_modules/easy/lib/inputElement/textarea.js
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
    var _inputElement = /* @__PURE__ */ _interopRequireDefault(require_inputElement());
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
    function _interopRequireDefault(obj) {
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
  });

  // node_modules/easy/lib/mixins/window.js
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
    var _resize = require_resize();
    var _default = {
      onResize: _resize.onResize,
      offResize: _resize.offResize
    };
  });

  // node_modules/easy/lib/window.js
  var require_window2 = __commonJS((exports) => {
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
    var _key = /* @__PURE__ */ _interopRequireDefault(require_key());
    var _event = /* @__PURE__ */ _interopRequireDefault(require_event());
    var _mouse = /* @__PURE__ */ _interopRequireDefault(require_mouse());
    var _click = /* @__PURE__ */ _interopRequireDefault(require_click());
    var _window = /* @__PURE__ */ _interopRequireDefault(require_window());
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
    function _interopRequireDefault(obj) {
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
            for (var _len = arguments.length, sources = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
              sources[_key2] = arguments[_key2];
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
  });

  // node_modules/easy/lib/buttons.js
  var require_buttons = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      LEFT_MOUSE_BUTTON: function() {
        return LEFT_MOUSE_BUTTON;
      },
      RIGHT_MOUSE_BUTTON: function() {
        return RIGHT_MOUSE_BUTTON;
      },
      MIDDLE_MOUSE_BUTTON: function() {
        return MIDDLE_MOUSE_BUTTON;
      },
      default: function() {
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
    var _key = /* @__PURE__ */ _interopRequireDefault(require_key());
    var _click = /* @__PURE__ */ _interopRequireDefault(require_click());
    var _event = /* @__PURE__ */ _interopRequireDefault(require_event());
    var _mouse = /* @__PURE__ */ _interopRequireDefault(require_mouse());
    var _constants = require_constants();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _interopRequireDefault(obj) {
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
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      React: function() {
        return _react.default;
      },
      Bounds: function() {
        return _bounds.default;
      },
      Offset: function() {
        return _offset.default;
      },
      Body: function() {
        return _body.default;
      },
      Link: function() {
        return _link.default;
      },
      Input: function() {
        return _input.default;
      },
      Button: function() {
        return _button.default;
      },
      Select: function() {
        return _select.default;
      },
      Element: function() {
        return _element.default;
      },
      Checkbox: function() {
        return _checkbox.default;
      },
      Textarea: function() {
        return _textarea.default;
      },
      TextElement: function() {
        return _textElement.default;
      },
      InputElement: function() {
        return _inputElement.default;
      },
      window: function() {
        return _window.default;
      },
      buttons: function() {
        return _buttons.default;
      },
      document: function() {
        return _document.default;
      },
      eventTypes: function() {
        return _eventTypes.default;
      }
    });
    var _react = /* @__PURE__ */ _interopRequireDefault(require_react());
    var _bounds = /* @__PURE__ */ _interopRequireDefault(require_bounds());
    var _offset = /* @__PURE__ */ _interopRequireDefault(require_offset());
    var _body = /* @__PURE__ */ _interopRequireDefault(require_body());
    var _link = /* @__PURE__ */ _interopRequireDefault(require_link());
    var _input = /* @__PURE__ */ _interopRequireDefault(require_input());
    var _button = /* @__PURE__ */ _interopRequireDefault(require_button());
    var _select = /* @__PURE__ */ _interopRequireDefault(require_select());
    var _element = /* @__PURE__ */ _interopRequireDefault(require_element2());
    var _checkbox = /* @__PURE__ */ _interopRequireDefault(require_checkbox());
    var _textarea = /* @__PURE__ */ _interopRequireDefault(require_textarea());
    var _textElement = /* @__PURE__ */ _interopRequireDefault(require_textElement());
    var _inputElement = /* @__PURE__ */ _interopRequireDefault(require_inputElement());
    var _window = /* @__PURE__ */ _interopRequireDefault(require_window2());
    var _buttons = /* @__PURE__ */ _interopRequireDefault(require_buttons());
    var _document = /* @__PURE__ */ _interopRequireDefault(require_document());
    var _eventTypes = /* @__PURE__ */ _interopRequireDefault(require_eventTypes());
    function _interopRequireDefault(obj) {
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
    _easy.window.assign({
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
          get: all[name]
        });
    }
    _export(exports, {
      EMPTY_STRING: function() {
        return EMPTY_STRING;
      },
      TIMEOUT_DELAY: function() {
        return TIMEOUT_DELAY;
      }
    });
    var EMPTY_STRING = "";
    var TIMEOUT_DELAY = 1e3;
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
    var _controller = /* @__PURE__ */ _interopRequireDefault(require_controller());
    var _password = /* @__PURE__ */ _interopRequireDefault(require_password());
    var _validationError = /* @__PURE__ */ _interopRequireDefault(require_validationError());
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
    function _interopRequireDefault(obj) {
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
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return MessageParagraph;
      }
    });
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
    var _controller = /* @__PURE__ */ _interopRequireDefault(require_controller());
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
    function _interopRequireDefault(obj) {
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
        var _this;
        _this = _super.apply(this, arguments);
        _defineProperty(_assertThisInitialized(_this), "clickHandler", function(event, element) {
          _controller.default.resetPassword();
        });
        return _this;
      }
      _createClass(ResetPasswordButton2, [
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
    var _password = /* @__PURE__ */ _interopRequireDefault(require_password2());
    var _message = /* @__PURE__ */ _interopRequireDefault(require_message());
    var _resetPassword = /* @__PURE__ */ _interopRequireDefault(require_resetPassword());
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
    function _interopRequireDefault(obj) {
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
    var _view = /* @__PURE__ */ _interopRequireDefault(require_view());
    var _model = /* @__PURE__ */ _interopRequireDefault(require_model());
    var _controller = /* @__PURE__ */ _interopRequireDefault(require_controller());
    function _interopRequireDefault(obj) {
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
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return simpleApplication;
      }
    });
    require_lib2();
    var _easy = require_lib();
    function simpleApplication() {
      var body = new _easy.Body();
      body.mount(/* @__PURE__ */ React.createElement("p", null, "A simple application."));
    }
  });

  // lib/examples.js
  var require_examples = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _mvcApplication = /* @__PURE__ */ _interopRequireDefault(require_mvcApplication());
    var _simpleApplication = /* @__PURE__ */ _interopRequireDefault(require_simpleApplication());
    function _interopRequireDefault(obj) {
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL29mZnNldC5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9saWIvPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+IiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy9ib3VuZHMuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvbGliLzw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvY29uc3RhbnRzLmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy91dGlsaXRpZXMvb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy91dGlsaXRpZXMvYXJyYXkuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL3V0aWxpdGllcy9uYW1lLmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy91dGlsaXRpZXMvZG9tLmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy9taXhpbnMvZWxlbWVudC5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvdGV4dEVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL3V0aWxpdGllcy9lbGVtZW50cy5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvbWl4aW5zL2pzeC5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvZXZlbnRUeXBlcy5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvbWl4aW5zL2tleS5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvbWl4aW5zL2NsaWNrLmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy9taXhpbnMvc3RhdGUuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL2NvbnRlbnRUeXBlcy5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvbWl4aW5zL3Jlc2l6ZS5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvbWl4aW5zL2V2ZW50LmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy9taXhpbnMvbW91c2UuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL21peGlucy9zY3JvbGwuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL2VsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL3JlYWN0LmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy9lbGVtZW50L2JvZHkuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvbGliL2VsZW1lbnQvPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+IiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy9lbGVtZW50L2xpbmsuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvbGliL2VsZW1lbnQvPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+IiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy9taXhpbnMvY2hhbmdlLmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy9pbnB1dEVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL2lucHV0RWxlbWVudC9pbnB1dC5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9saWIvaW5wdXRFbGVtZW50Lzw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvZWxlbWVudC9idXR0b24uanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvbGliL2VsZW1lbnQvPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+IiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy9lbGVtZW50L3NlbGVjdC5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvZWxlbWVudC9jaGVja2JveC5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvaW5wdXRFbGVtZW50L3RleHRhcmVhLmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L2xpYi9pbnB1dEVsZW1lbnQvPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+IiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy9taXhpbnMvd2luZG93LmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy93aW5kb3cuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL2J1dHRvbnMuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL2RvY3VtZW50LmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy9pbmRleC5qcyIsICJzcmMvanV4dGFwb3NlLmpzIiwgInNyYy9pbmRleC5qcyIsICJzcmMvZXhhbXBsZS9tdmNBcHBsaWNhdGlvbi9jb250cm9sbGVyLmpzIiwgInNyYy9leGFtcGxlL212Y0FwcGxpY2F0aW9uL2NvbnN0YW50cy5qcyIsICJzcmMvZXhhbXBsZS9tdmNBcHBsaWNhdGlvbi92aWV3L2lucHV0L3Bhc3N3b3JkLmpzIiwgImxpYi9leGFtcGxlL212Y0FwcGxpY2F0aW9uL3ZpZXcvaW5wdXQvPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+IiwgInNyYy9leGFtcGxlL212Y0FwcGxpY2F0aW9uL3ZpZXcvcGFyYWdyYXBoL3ZhbGlkYXRpb25FcnJvci5qcyIsICJsaWIvZXhhbXBsZS9tdmNBcHBsaWNhdGlvbi92aWV3L3BhcmFncmFwaC88PGpzeC1jb25maWctcHJhZ21hLmpzPj4iLCAic3JjL2V4YW1wbGUvbXZjQXBwbGljYXRpb24vdmlldy9mb3JtL3Bhc3N3b3JkLmpzIiwgInNyYy9leGFtcGxlL212Y0FwcGxpY2F0aW9uL3ZpZXcvcGFyYWdyYXBoL21lc3NhZ2UuanMiLCAibGliL2V4YW1wbGUvbXZjQXBwbGljYXRpb24vdmlldy9wYXJhZ3JhcGgvPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+IiwgInNyYy9leGFtcGxlL212Y0FwcGxpY2F0aW9uL3ZpZXcvYnV0dG9uL3Jlc2V0UGFzc3dvcmQuanMiLCAibGliL2V4YW1wbGUvbXZjQXBwbGljYXRpb24vdmlldy9idXR0b24vPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+IiwgInNyYy9leGFtcGxlL212Y0FwcGxpY2F0aW9uL3ZpZXcuanMiLCAibGliL2V4YW1wbGUvbXZjQXBwbGljYXRpb24vPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+IiwgInNyYy9leGFtcGxlL212Y0FwcGxpY2F0aW9uL21vZGVsLmpzIiwgImxpYi9leGFtcGxlL212Y0FwcGxpY2F0aW9uLzw8anN4LWNvbmZpZy1wcmFnbWEuanM+PiIsICJzcmMvZXhhbXBsZS9tdmNBcHBsaWNhdGlvbi5qcyIsICJzcmMvZXhhbXBsZS9zaW1wbGVBcHBsaWNhdGlvbi5qcyIsICJzcmMvZXhhbXBsZXMuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPZmZzZXQge1xuICBjb25zdHJ1Y3Rvcih0b3AsIGxlZnQpIHtcbiAgICB0aGlzLnRvcCA9IHRvcDtcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICB9XG5cbiAgZ2V0VG9wKCkge1xuICAgIHJldHVybiB0aGlzLnRvcDtcbiAgfVxuXG4gIGdldExlZnQoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdDtcbiAgfVxufVxuIiwgIlJlYWN0LmNyZWF0ZUVsZW1lbnQiLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvdW5kcyB7XG4gIGNvbnN0cnVjdG9yKHRvcCwgbGVmdCwgcmlnaHQsIGJvdHRvbSkge1xuICAgIHRoaXMudG9wID0gdG9wO1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICAgIHRoaXMuYm90dG9tID0gYm90dG9tO1xuICB9XG5cbiAgZ2V0VG9wKCkge1xuICAgIHJldHVybiB0aGlzLnRvcDtcbiAgfVxuXG4gIGdldExlZnQoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdDtcbiAgfVxuXG4gIGdldFJpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLnJpZ2h0O1xuICB9XG5cbiAgZ2V0Qm90dG9tKCkge1xuICAgIHJldHVybiB0aGlzLmJvdHRvbTtcbiAgfVxuXG4gIGdldFdpZHRoKCkge1xuICAgIGNvbnN0IHdpZHRoID0gKHRoaXMucmlnaHQgLSB0aGlzLmxlZnQpO1xuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KCkge1xuICAgIGNvbnN0IGhlaWdodCA9ICh0aGlzLmJvdHRvbSAtIHRoaXMudG9wKTtcblxuICAgIHJldHVybiBoZWlnaHQ7XG4gIH1cbiAgXG4gIHNldFRvcCh0b3ApIHtcbiAgICB0aGlzLnRvcCA9IHRvcDtcbiAgfVxuXG4gIHNldExlZnQobGVmdCkge1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gIH1cblxuICBzZXRSaWdodChyaWdodCkge1xuICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgfVxuXG4gIHNldEJvdHRvbShib3R0b20pIHtcbiAgICB0aGlzLmJvdHRvbSA9IGJvdHRvbTtcbiAgfVxuXG4gIHNoaWZ0KGhvcml6b250YWxPZmZzZXQsIHZlcnRpY2FsT2Zmc2V0KSB7XG4gICAgdGhpcy50b3AgKz0gdmVydGljYWxPZmZzZXQ7XG4gICAgdGhpcy5sZWZ0ICs9IGhvcml6b250YWxPZmZzZXQ7XG4gICAgdGhpcy5yaWdodCArPSBob3Jpem9udGFsT2Zmc2V0O1xuICAgIHRoaXMuYm90dG9tICs9IHZlcnRpY2FsT2Zmc2V0O1xuICB9XG5cbiAgaXNPdmVybGFwcGluZ01vdXNlKG1vdXNlVG9wLCBtb3VzZUxlZnQpIHtcbiAgICByZXR1cm4gKCAgKHRoaXMudG9wIDw9IG1vdXNlVG9wKVxuICAgICAgICAgICAmJiAodGhpcy5sZWZ0IDw9IG1vdXNlTGVmdClcbiAgICAgICAgICAgJiYgKHRoaXMucmlnaHQgPiBtb3VzZUxlZnQpXG4gICAgICAgICAgICYmICh0aGlzLmJvdHRvbSA+IG1vdXNlVG9wKSAgKTtcbiAgfVxuXG4gIGFyZU92ZXJsYXBwaW5nKGJvdW5kcykge1xuICAgIHJldHVybiAoICAodGhpcy50b3AgPCBib3VuZHMuYm90dG9tKVxuICAgICAgICAgICAmJiAodGhpcy5sZWZ0IDwgYm91bmRzLnJpZ2h0KVxuICAgICAgICAgICAmJiAodGhpcy5yaWdodCA+IGJvdW5kcy5sZWZ0KVxuICAgICAgICAgICAmJiAodGhpcy5ib3R0b20gPiBib3VuZHMudG9wKSAgKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQm91bmRpbmdDbGllbnRSZWN0KGJvdW5kaW5nQ2xpZW50UmVjdCkge1xuICAgIGNvbnN0IHdpbmRvd1Njcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCwgLy8vXG4gICAgICAgICAgd2luZG93U2Nyb2xsTGVmdCA9IHdpbmRvdy5wYWdlWE9mZnNldCwgIC8vL1xuICAgICAgICAgIHRvcCA9IGJvdW5kaW5nQ2xpZW50UmVjdC50b3AgKyB3aW5kb3dTY3JvbGxUb3AsXG4gICAgICAgICAgbGVmdCA9IGJvdW5kaW5nQ2xpZW50UmVjdC5sZWZ0ICsgd2luZG93U2Nyb2xsTGVmdCxcbiAgICAgICAgICByaWdodCA9IGJvdW5kaW5nQ2xpZW50UmVjdC5yaWdodCArIHdpbmRvd1Njcm9sbExlZnQsXG4gICAgICAgICAgYm90dG9tID0gYm91bmRpbmdDbGllbnRSZWN0LmJvdHRvbSArIHdpbmRvd1Njcm9sbFRvcCxcbiAgICAgICAgICBib3VuZHMgPSBuZXcgQm91bmRzKHRvcCwgbGVmdCwgcmlnaHQsIGJvdHRvbSk7XG5cbiAgICByZXR1cm4gYm91bmRzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ub3BMZWZ0V2lkdGhBbmRIZWlnaHQodG9wLCBsZWZ0LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgY29uc3QgYm90dG9tID0gdG9wICsgaGVpZ2h0LFxuICAgICAgICAgIHJpZ2h0ID0gbGVmdCArIHdpZHRoLFxuICAgICAgICAgIGJvdW5kcyA9IG5ldyBCb3VuZHModG9wLCBsZWZ0LCByaWdodCwgYm90dG9tKTtcblxuICAgIHJldHVybiBib3VuZHM7XG4gIH1cbn1cbiIsICJSZWFjdC5jcmVhdGVFbGVtZW50IiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgRk9SID0gXCJmb3JcIjtcbmV4cG9ydCBjb25zdCBCT0RZID0gXCJib2R5XCI7XG5leHBvcnQgY29uc3QgTk9ORSA9IFwibm9uZVwiO1xuZXhwb3J0IGNvbnN0IFNQQUNFID0gXCIgXCI7XG5leHBvcnQgY29uc3QgQ0xBU1MgPSBcImNsYXNzXCI7XG5leHBvcnQgY29uc3QgV0lEVEggPSBcIndpZHRoXCI7XG5leHBvcnQgY29uc3QgQkxPQ0sgPSBcImJsb2NrXCI7XG5leHBvcnQgY29uc3QgSEVJR0hUID0gXCJoZWlnaHRcIjtcbmV4cG9ydCBjb25zdCBPQkpFQ1QgPSBcIm9iamVjdFwiO1xuZXhwb3J0IGNvbnN0IFNUUklORyA9IFwic3RyaW5nXCI7XG5leHBvcnQgY29uc3QgRElTUExBWSA9IFwiZGlzcGxheVwiO1xuZXhwb3J0IGNvbnN0IEJPT0xFQU4gPSBcImJvb2xlYW5cIjtcbmV4cG9ydCBjb25zdCBESVNBQkxFRCA9IFwiZGlzYWJsZWRcIjtcbmV4cG9ydCBjb25zdCBGVU5DVElPTiA9IFwiZnVuY3Rpb25cIjtcbmV4cG9ydCBjb25zdCBXSUxEQ0FSRCA9IFwiKlwiO1xuZXhwb3J0IGNvbnN0IEhUTUxfRk9SID0gXCJodG1sRm9yXCI7XG5leHBvcnQgY29uc3QgVU5ERUZJTkVEID0gJ3VuZGVmaW5lZCc7XG5leHBvcnQgY29uc3QgQ0xBU1NfTkFNRSA9IFwiY2xhc3NOYW1lXCI7XG5leHBvcnQgY29uc3QgQUJPVVRfQkxBTksgPSBcImFib3V0OmJsYW5rXCI7XG5leHBvcnQgY29uc3QgRU1QVFlfU1RSSU5HID0gXCJcIjtcbmV4cG9ydCBjb25zdCBTVkdfTkFNRVNQQUNFX1VSSSA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtcbmV4cG9ydCBjb25zdCBERUZBVUxUX1BST1BFUlRJRVMgPSBcImRlZmF1bHRQcm9wZXJ0aWVzXCI7XG5leHBvcnQgY29uc3QgSUdOT1JFRF9QUk9QRVJUSUVTID0gXCJpZ25vcmVkUHJvcGVydGllc1wiO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBCT09MRUFOIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZSh0YXJnZXQsIHNvdXJjZSA9IHt9KSB7XG4gIHRhcmdldCA9IHsgLi4udGFyZ2V0IH07ICAvLy9cblxuICBjb25zdCBuYW1lcyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7ICAvLy9cblxuICBuYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0VmFsdWUgPSB0YXJnZXRbbmFtZV0sXG4gICAgICAgICAgc291cmNlVmFsdWUgPSBzb3VyY2VbbmFtZV0sXG4gICAgICAgICAgdGFyZ2V0SGFzT3duUHJvcGVydHkgPSB0YXJnZXQuaGFzT3duUHJvcGVydHkobmFtZSk7XG5cbiAgICB0YXJnZXRbbmFtZV0gPSB0YXJnZXRIYXNPd25Qcm9wZXJ0eSA/XG4gICAgICAgICAgICAgICAgICAgICBjb21iaW5lVmFsdWVzKHRhcmdldFZhbHVlLCBzb3VyY2VWYWx1ZSkgOlxuICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VWYWx1ZTsgLy8vXG4gIH0pO1xuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcnVuZSh0YXJnZXQsIG5hbWVzID0gW10pIHtcbiAgdGFyZ2V0ID0geyAuLi50YXJnZXQgfTsgIC8vL1xuXG4gIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICBjb25zdCB0YXJnZXRIYXNPd25Qcm9wZXJ0eSA9IHRhcmdldC5oYXNPd25Qcm9wZXJ0eShuYW1lKTtcblxuICAgIGlmICh0YXJnZXRIYXNPd25Qcm9wZXJ0eSkge1xuICAgICAgZGVsZXRlIHRhcmdldFtuYW1lXTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIGNvbWJpbmVWYWx1ZXModGFyZ2V0VmFsdWUsIHNvdXJjZVZhbHVlKSB7XG4gIGNvbnN0IHRhcmdldFZhbHVlQm9vbGVhbiA9IGlzVmFsdWVCb29sZWFuKHRhcmdldFZhbHVlKSxcbiAgICAgICAgc291cmNlVmFsdWVCb29sZWFuID0gaXNWYWx1ZUJvb2xlYW4oc291cmNlVmFsdWUpLFxuICAgICAgICBjb21iaW5lZFZhbHVlID0gKHRhcmdldFZhbHVlQm9vbGVhbiAmJiBzb3VyY2VWYWx1ZUJvb2xlYW4pID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0VmFsdWUgOiAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHt0YXJnZXRWYWx1ZX0gJHtzb3VyY2VWYWx1ZX1gO1xuXG4gIHJldHVybiBjb21iaW5lZFZhbHVlO1xufVxuXG5mdW5jdGlvbiBpc1ZhbHVlQm9vbGVhbih2YWx1ZSkge1xuICBjb25zdCB2YWx1ZUJvb2xlYW4gPSAodHlwZW9mIHZhbHVlID09PSBCT09MRUFOKTtcblxuICByZXR1cm4gdmFsdWVCb29sZWFuO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBwdXNoKGFycmF5MSwgYXJyYXkyKSB7IEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGFycmF5MSwgYXJyYXkyKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gYXVnbWVudChhcnJheTEsIGFycmF5MiwgdGVzdCkge1xuICBhcnJheTEgPSBbIC4uLmFycmF5MSBdOyAvLy9cblxuICBhcnJheTIuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIGFycmF5MS5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGFycmF5MTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZsYXR0ZW4oYXJyYXkpIHtcbiAgcmV0dXJuIGFycmF5LnJlZHVjZSgoYXJyYXksIGVsZW1lbnQpID0+IHtcbiAgICBhcnJheSA9IGFycmF5LmNvbmNhdChlbGVtZW50KTsgIC8vL1xuXG4gICAgcmV0dXJuIGFycmF5O1xuICB9LCBbXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBndWFyYW50ZWUoYXJyYXlPckVsZW1lbnQpIHtcbiAgYXJyYXlPckVsZW1lbnQgPSBhcnJheU9yRWxlbWVudCB8fCBbXTtcblxuICByZXR1cm4gKGFycmF5T3JFbGVtZW50IGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgICAgICAgIGFycmF5T3JFbGVtZW50IDpcbiAgICAgICAgICAgICAgW2FycmF5T3JFbGVtZW50XTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzU1ZHVGFnTmFtZSh0YWdOYW1lKSB7XG4gIHJldHVybiBzdmdUYWdOYW1lcy5pbmNsdWRlcyh0YWdOYW1lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU1ZHQXR0cmlidXRlTmFtZShhdHRyaWJ1dGVOYW1lKSB7XG4gIHJldHVybiBzdmdBdHRyaWJ1dGVOYW1lcy5pbmNsdWRlcyhhdHRyaWJ1dGVOYW1lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzSFRNTEF0dHJpYnV0ZU5hbWUoYXR0cmlidXRlTmFtZSkge1xuICByZXR1cm4gaHRtbEF0dHJpYnV0ZU5hbWVzLmluY2x1ZGVzKGF0dHJpYnV0ZU5hbWUpO1xufVxuXG5jb25zdCBzdmdUYWdOYW1lcyA9IFtcbiAgICAgICAgXCJhbHRHbHlwaFwiLCBcImFuaW1hdGVcIiwgXCJhbmltYXRlQ29sb3JcIiwgXCJhbmltYXRlTW90aW9uXCIsIFwiYW5pbWF0ZVRyYW5zZm9ybVwiLCBcImFuaW1hdGlvblwiLCBcImF1ZGlvXCIsXG4gICAgICAgIFwiY2lyY2xlXCIsIFwiY2xpcFBhdGhcIiwgXCJjb2xvci1wcm9maWxlXCIsIFwiY3Vyc29yXCIsXG4gICAgICAgIFwiZGVmc1wiLCBcImRlc2NcIiwgXCJkaXNjYXJkXCIsXG4gICAgICAgIFwiZWxsaXBzZVwiLFxuICAgICAgICBcImZlQmxlbmRcIiwgXCJmZUNvbG9yTWF0cml4XCIsIFwiZmVDb21wb25lbnRUcmFuc2ZlclwiLCBcImZlQ29tcG9zaXRlXCIsIFwiZmVDb252b2x2ZU1hdHJpeFwiLCBcImZlRGlmZnVzZUxpZ2h0aW5nXCIsIFwiZmVEaXNwbGFjZW1lbnRNYXBcIiwgXCJmZURpc3RhbnRMaWdodFwiLCBcImZlRHJvcFNoYWRvd1wiLCBcImZlRmxvb2RcIiwgXCJmZUZ1bmNBXCIsIFwiZmVGdW5jQlwiLCBcImZlRnVuY0dcIiwgXCJmZUZ1bmNSXCIsIFwiZmVHYXVzc2lhbkJsdXJcIiwgXCJmZUltYWdlXCIsIFwiZmVNZXJnZVwiLCBcImZlTWVyZ2VOb2RlXCIsIFwiZmVNb3JwaG9sb2d5XCIsIFwiZmVPZmZzZXRcIiwgXCJmZVBvaW50TGlnaHRcIiwgXCJmZVNwZWN1bGFyTGlnaHRpbmdcIiwgXCJmZVNwb3RMaWdodFwiLCBcImZlVGlsZVwiLCBcImZlVHVyYnVsZW5jZVwiLCBcImZpbHRlclwiLCBcImZvbnRcIiwgXCJmb250LWZhY2VcIiwgXCJmb250LWZhY2UtZm9ybWF0XCIsIFwiZm9udC1mYWNlLW5hbWVcIiwgXCJmb250LWZhY2UtdXJpXCIsIFwiZm9yZWlnbk9iamVjdFwiLFxuICAgICAgICBcImdcIiwgXCJnbHlwaFwiLCBcImdseXBoUmVmXCIsXG4gICAgICAgIFwiaGFuZGxlclwiLCBcImhhdGNoXCIsIFwiaGF0Y2hwYXRoXCIsIFwiaGtlcm5cIixcbiAgICAgICAgXCJpbWFnZVwiLCBcImxpbmVcIiwgXCJsaW5lYXJHcmFkaWVudFwiLFxuICAgICAgICBcImxpc3RlbmVyXCIsXG4gICAgICAgIFwibWFya2VyXCIsIFwibWFza1wiLCBcIm1lc2hcIiwgXCJtZXNoZ3JhZGllbnRcIiwgXCJtZXNocGF0Y2hcIiwgXCJtZXNocm93XCIsIFwibWV0YWRhdGFcIiwgXCJtaXNzaW5nLWdseXBoXCIsIFwibXBhdGhcIixcbiAgICAgICAgXCJwYXRoXCIsIFwicGF0dGVyblwiLCBcInBvbHlnb25cIiwgXCJwb2x5bGluZVwiLCBcInByZWZldGNoXCIsXG4gICAgICAgIFwicmFkaWFsR3JhZGllbnRcIiwgXCJyZWN0XCIsXG4gICAgICAgIFwic2NyaXB0XCIsIFwic2V0XCIsIFwic29saWRjb2xvclwiLCBcInN0b3BcIiwgXCJzdHlsZVwiLCBcInN2Z1wiLCBcInN3aXRjaFwiLCBcInN5bWJvbFwiLFxuICAgICAgICBcInRicmVha1wiLCBcInRleHRcIiwgXCJ0ZXh0QXJlYVwiLCBcInRleHRQYXRoXCIsIFwidGl0bGVcIiwgXCJ0cmVmXCIsIFwidHNwYW5cIixcbiAgICAgICAgXCJ1bmtub3duXCIsIFwidXNlXCIsXG4gICAgICAgIFwidmlkZW9cIiwgXCJ2aWV3XCIsIFwidmtlcm5cIlxuICAgICAgXSxcbiAgICAgIHN2Z0F0dHJpYnV0ZU5hbWVzID0gW1xuICAgICAgICBcImFjY2VudC1oZWlnaHRcIiwgXCJhY2N1bXVsYXRlXCIsIFwiYWRkaXRpdmVcIiwgXCJhbGlnbm1lbnQtYmFzZWxpbmVcIiwgXCJhbHBoYWJldGljXCIsIFwiYW1wbGl0dWRlXCIsIFwiYXJhYmljLWZvcm1cIiwgXCJhc2NlbnRcIiwgXCJhdHRyaWJ1dGVOYW1lXCIsIFwiYXR0cmlidXRlVHlwZVwiLCBcImF6aW11dGhcIixcbiAgICAgICAgXCJiYW5kd2lkdGhcIiwgXCJiYXNlRnJlcXVlbmN5XCIsIFwiYmFzZVByb2ZpbGVcIiwgXCJiYXNlbGluZS1zaGlmdFwiLCBcImJib3hcIiwgXCJiZWdpblwiLCBcImJpYXNcIiwgXCJieVwiLFxuICAgICAgICBcImNhbGNNb2RlXCIsIFwiY2FwLWhlaWdodFwiLCBcImNsaXBcIiwgXCJjbGFzc05hbWVcIiwgXCJjbGlwLXBhdGhcIiwgXCJjbGlwLXJ1bGVcIiwgXCJjbGlwUGF0aFVuaXRzXCIsIFwiY29sb3JcIiwgXCJjb2xvci1pbnRlcnBvbGF0aW9uXCIsIFwiY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzXCIsIFwiY29sb3ItcHJvZmlsZVwiLCBcImNvbG9yLXJlbmRlcmluZ1wiLCBcImNvbnRlbnRTY3JpcHRUeXBlXCIsIFwiY29udGVudFN0eWxlVHlwZVwiLCBcImNyb3Nzb3JpZ2luXCIsIFwiY3Vyc29yXCIsIFwiY3hcIiwgXCJjeVwiLFxuICAgICAgICBcImRcIiwgXCJkZWZhdWx0QWN0aW9uXCIsIFwiZGVzY2VudFwiLCBcImRpZmZ1c2VDb25zdGFudFwiLCBcImRpcmVjdGlvblwiLCBcImRpc3BsYXlcIiwgXCJkaXZpc29yXCIsIFwiZG9taW5hbnQtYmFzZWxpbmVcIiwgXCJkb3dubG9hZFwiLCBcImR1clwiLCBcImR4XCIsIFwiZHlcIixcbiAgICAgICAgXCJlZGdlTW9kZVwiLCBcImVkaXRhYmxlXCIsIFwiZWxldmF0aW9uXCIsIFwiZW5hYmxlLWJhY2tncm91bmRcIiwgXCJlbmRcIiwgXCJldmVudFwiLCBcImV4cG9uZW50XCIsIFwiZXh0ZXJuYWxSZXNvdXJjZXNSZXF1aXJlZFwiLFxuICAgICAgICBcImZpbGxcIiwgXCJmaWxsLW9wYWNpdHlcIiwgXCJmaWxsLXJ1bGVcIiwgXCJmaWx0ZXJcIiwgXCJmaWx0ZXJSZXNcIiwgXCJmaWx0ZXJVbml0c1wiLCBcImZsb29kLWNvbG9yXCIsIFwiZmxvb2Qtb3BhY2l0eVwiLCBcImZvY3VzSGlnaGxpZ2h0XCIsIFwiZm9jdXNhYmxlXCIsIFwiZm9udC1mYW1pbHlcIiwgXCJmb250LXNpemVcIiwgXCJmb250LXNpemUtYWRqdXN0XCIsIFwiZm9udC1zdHJldGNoXCIsIFwiZm9udC1zdHlsZVwiLCBcImZvbnQtdmFyaWFudFwiLCBcImZvbnQtd2VpZ2h0XCIsIFwiZm9ybWF0XCIsIFwiZnJcIiwgXCJmcm9tXCIsIFwiZnhcIiwgXCJmeVwiLFxuICAgICAgICBcImcxXCIsIFwiZzJcIiwgXCJnbHlwaC1uYW1lXCIsIFwiZ2x5cGgtb3JpZW50YXRpb24taG9yaXpvbnRhbFwiLCBcImdseXBoLW9yaWVudGF0aW9uLXZlcnRpY2FsXCIsIFwiZ2x5cGhSZWZcIiwgXCJncmFkaWVudFRyYW5zZm9ybVwiLCBcImdyYWRpZW50VW5pdHNcIixcbiAgICAgICAgXCJoYW5kbGVyXCIsIFwiaGFuZ2luZ1wiLCBcImhhdGNoQ29udGVudFVuaXRzXCIsIFwiaGF0Y2hVbml0c1wiLCBcImhlaWdodFwiLCBcImhvcml6LWFkdi14XCIsIFwiaG9yaXotb3JpZ2luLXhcIiwgXCJob3Jpei1vcmlnaW4teVwiLCBcImhyZWZcIiwgXCJocmVmbGFuZ1wiLFxuICAgICAgICBcImlkXCIsIFwiaWRlb2dyYXBoaWNcIiwgXCJpbWFnZS1yZW5kZXJpbmdcIiwgXCJpblwiLCBcImluMlwiLCBcImluaXRpYWxWaXNpYmlsaXR5XCIsIFwiaW50ZXJjZXB0XCIsXG4gICAgICAgIFwia1wiLCBcImsxXCIsIFwiazJcIiwgXCJrM1wiLCBcIms0XCIsIFwia2VybmVsTWF0cml4XCIsIFwia2VybmVsVW5pdExlbmd0aFwiLCBcImtlcm5pbmdcIiwgXCJrZXlQb2ludHNcIiwgXCJrZXlTcGxpbmVzXCIsIFwia2V5VGltZXNcIixcbiAgICAgICAgXCJsZW5ndGhBZGp1c3RcIiwgXCJsZXR0ZXItc3BhY2luZ1wiLCBcImxpZ2h0aW5nLWNvbG9yXCIsIFwibGltaXRpbmdDb25lQW5nbGVcIiwgXCJsb2NhbFwiLFxuICAgICAgICBcIm1hcmtlci1lbmRcIiwgXCJtYXJrZXItbWlkXCIsIFwibWFya2VyLXN0YXJ0XCIsIFwibWFya2VySGVpZ2h0XCIsIFwibWFya2VyVW5pdHNcIiwgXCJtYXJrZXJXaWR0aFwiLCBcIm1hc2tcIiwgXCJtYXNrQ29udGVudFVuaXRzXCIsIFwibWFza1VuaXRzXCIsIFwibWF0aGVtYXRpY2FsXCIsIFwibWF4XCIsIFwibWVkaWFcIiwgXCJtZWRpYUNoYXJhY3RlckVuY29kaW5nXCIsIFwibWVkaWFDb250ZW50RW5jb2RpbmdzXCIsIFwibWVkaWFTaXplXCIsIFwibWVkaWFUaW1lXCIsIFwibWV0aG9kXCIsIFwibWluXCIsIFwibW9kZVwiLFxuICAgICAgICBcIm5hbWVcIiwgXCJuYXYtZG93blwiLCBcIm5hdi1kb3duLWxlZnRcIiwgXCJuYXYtZG93bi1yaWdodFwiLCBcIm5hdi1sZWZ0XCIsIFwibmF2LW5leHRcIiwgXCJuYXYtcHJldlwiLCBcIm5hdi1yaWdodFwiLCBcIm5hdi11cFwiLCBcIm5hdi11cC1sZWZ0XCIsIFwibmF2LXVwLXJpZ2h0XCIsIFwibnVtT2N0YXZlc1wiLFxuICAgICAgICBcIm9ic2VydmVyXCIsIFwib2Zmc2V0XCIsIFwib3BhY2l0eVwiLCBcIm9wZXJhdG9yXCIsIFwib3JkZXJcIiwgXCJvcmllbnRcIiwgXCJvcmllbnRhdGlvblwiLCBcIm9yaWdpblwiLCBcIm92ZXJmbG93XCIsIFwib3ZlcmxheVwiLCBcIm92ZXJsaW5lLXBvc2l0aW9uXCIsIFwib3ZlcmxpbmUtdGhpY2tuZXNzXCIsXG4gICAgICAgIFwicGFub3NlLTFcIiwgXCJwYXRoXCIsIFwicGF0aExlbmd0aFwiLCBcInBhdHRlcm5Db250ZW50VW5pdHNcIiwgXCJwYXR0ZXJuVHJhbnNmb3JtXCIsIFwicGF0dGVyblVuaXRzXCIsIFwicGhhc2VcIiwgXCJwaXRjaFwiLCBcInBsYXliYWNrT3JkZXJcIiwgXCJwbGF5YmFja29yZGVyXCIsIFwicG9pbnRlci1ldmVudHNcIiwgXCJwb2ludHNcIiwgXCJwb2ludHNBdFhcIiwgXCJwb2ludHNBdFlcIiwgXCJwb2ludHNBdFpcIiwgXCJwcmVzZXJ2ZUFscGhhXCIsIFwicHJlc2VydmVBc3BlY3RSYXRpb1wiLCBcInByaW1pdGl2ZVVuaXRzXCIsIFwicHJvcGFnYXRlXCIsXG4gICAgICAgIFwiclwiLCBcInJhZGl1c1wiLCBcInJlZlhcIiwgXCJyZWZZXCIsIFwicmVuZGVyaW5nLWludGVudFwiLCBcInJlcGVhdENvdW50XCIsIFwicmVwZWF0RHVyXCIsIFwicmVxdWlyZWRFeHRlbnNpb25zXCIsIFwicmVxdWlyZWRGZWF0dXJlc1wiLCBcInJlcXVpcmVkRm9udHNcIiwgXCJyZXF1aXJlZEZvcm1hdHNcIiwgXCJyZXN0YXJ0XCIsIFwicmVzdWx0XCIsIFwicm90YXRlXCIsIFwicnhcIiwgXCJyeVwiLFxuICAgICAgICBcInNjYWxlXCIsIFwic2VlZFwiLCBcInNoYXBlLXJlbmRlcmluZ1wiLCBcInNpZGVcIiwgXCJzbG9wZVwiLCBcInNuYXBzaG90VGltZVwiLCBcInNwYWNpbmdcIiwgXCJzcGVjdWxhckNvbnN0YW50XCIsIFwic3BlY3VsYXJFeHBvbmVudFwiLCBcInNwcmVhZE1ldGhvZFwiLCBcInNyY1wiLCBcInN0YXJ0T2Zmc2V0XCIsIFwic3RkRGV2aWF0aW9uXCIsIFwic3RlbWhcIiwgXCJzdGVtdlwiLCBcInN0aXRjaFRpbGVzXCIsIFwic3RvcC1jb2xvclwiLCBcInN0b3Atb3BhY2l0eVwiLCBcInN0cmlrZXRocm91Z2gtcG9zaXRpb25cIiwgXCJzdHJpa2V0aHJvdWdoLXRoaWNrbmVzc1wiLCBcInN0cmluZ1wiLCBcInN0cm9rZVwiLCBcInN0cm9rZS1kYXNoYXJyYXlcIiwgXCJzdHJva2UtZGFzaG9mZnNldFwiLCBcInN0cm9rZS1saW5lY2FwXCIsIFwic3Ryb2tlLWxpbmVqb2luXCIsIFwic3Ryb2tlLW1pdGVybGltaXRcIiwgXCJzdHJva2Utb3BhY2l0eVwiLCBcInN0cm9rZS13aWR0aFwiLCBcInN0eWxlXCIsIFwic3VyZmFjZVNjYWxlXCIsIFwic3luY0JlaGF2aW9yXCIsIFwic3luY0JlaGF2aW9yRGVmYXVsdFwiLCBcInN5bmNNYXN0ZXJcIiwgXCJzeW5jVG9sZXJhbmNlXCIsIFwic3luY1RvbGVyYW5jZURlZmF1bHRcIiwgXCJzeXN0ZW1MYW5ndWFnZVwiLFxuICAgICAgICBcInRhYmxlVmFsdWVzXCIsIFwidGFyZ2V0XCIsIFwidGFyZ2V0WFwiLCBcInRhcmdldFlcIiwgXCJ0ZXh0LWFuY2hvclwiLCBcInRleHQtZGVjb3JhdGlvblwiLCBcInRleHQtcmVuZGVyaW5nXCIsIFwidGV4dExlbmd0aFwiLCBcInRpbWVsaW5lQmVnaW5cIiwgXCJ0aW1lbGluZWJlZ2luXCIsIFwidGl0bGVcIiwgXCJ0b1wiLCBcInRyYW5zZm9ybVwiLCBcInRyYW5zZm9ybUJlaGF2aW9yXCIsIFwidHlwZVwiLFxuICAgICAgICBcInUxXCIsIFwidTJcIiwgXCJ1bmRlcmxpbmUtcG9zaXRpb25cIiwgXCJ1bmRlcmxpbmUtdGhpY2tuZXNzXCIsIFwidW5pY29kZVwiLCBcInVuaWNvZGUtYmlkaVwiLCBcInVuaWNvZGUtcmFuZ2VcIiwgXCJ1bml0cy1wZXItZW1cIixcbiAgICAgICAgXCJ2LWFscGhhYmV0aWNcIiwgXCJ2LWhhbmdpbmdcIiwgXCJ2LWlkZW9ncmFwaGljXCIsIFwidi1tYXRoZW1hdGljYWxcIiwgXCJ2YWx1ZXNcIiwgXCJ2ZXJzaW9uXCIsIFwidmVydC1hZHYteVwiLCBcInZlcnQtb3JpZ2luLXhcIiwgXCJ2ZXJ0LW9yaWdpbi15XCIsIFwidmlld0JveFwiLCBcInZpZXdUYXJnZXRcIiwgXCJ2aXNpYmlsaXR5XCIsXG4gICAgICAgIFwid2lkdGhcIiwgXCJ3aWR0aHNcIiwgXCJ3b3JkLXNwYWNpbmdcIiwgXCJ3cml0aW5nLW1vZGVcIixcbiAgICAgICAgXCJ4XCIsIFwieC1oZWlnaHRcIiwgXCJ4MVwiLCBcIngyXCIsIFwieENoYW5uZWxTZWxlY3RvclwiLFxuICAgICAgICBcInlcIiwgXCJ5MVwiLCBcInkyXCIsIFwieUNoYW5uZWxTZWxlY3RvclwiLFxuICAgICAgICBcInpcIiwgXCJ6b29tQW5kUGFuXCJcbiAgICAgIF0sXG4gICAgICBodG1sQXR0cmlidXRlTmFtZXMgPSBbXG4gICAgICAgIFwiYWNjZXB0XCIsIFwiYWNjZXB0Q2hhcnNldFwiLCBcImFjY2Vzc0tleVwiLCBcImFjdGlvblwiLCBcImFsbG93XCIsIFwiYWxsb3dGdWxsU2NyZWVuXCIsIFwiYWxsb3dUcmFuc3BhcmVuY3lcIiwgXCJhbHRcIiwgXCJhc3luY1wiLCBcImF1dG9Db21wbGV0ZVwiLCBcImF1dG9Gb2N1c1wiLCBcImF1dG9QbGF5XCIsXG4gICAgICAgIFwiY2FwdHVyZVwiLCBcImNlbGxQYWRkaW5nXCIsIFwiY2VsbFNwYWNpbmdcIiwgXCJjaGFsbGVuZ2VcIiwgXCJjaGFyU2V0XCIsIFwiY2hlY2tlZFwiLCBcImNpdGVcIiwgXCJjbGFzc0lEXCIsIFwiY2xhc3NOYW1lXCIsIFwiY29sU3BhblwiLCBcImNvbHNcIiwgXCJjb250ZW50XCIsIFwiY29udGVudEVkaXRhYmxlXCIsIFwiY29udGV4dE1lbnVcIiwgXCJjb250cm9sc1wiLCBcImNvb3Jkc1wiLCBcImNyb3NzT3JpZ2luXCIsXG4gICAgICAgIFwiZGF0YVwiLCBcImRhdGVUaW1lXCIsIFwiZGVmYXVsdFwiLCBcImRlZmVyXCIsIFwiZGlyXCIsIFwiZGlzYWJsZWRcIiwgXCJkb3dubG9hZFwiLCBcImRyYWdnYWJsZVwiLFxuICAgICAgICBcImVuY1R5cGVcIixcbiAgICAgICAgXCJmb3JtXCIsIFwiZm9ybUFjdGlvblwiLCBcImZvcm1FbmNUeXBlXCIsIFwiZm9ybU1ldGhvZFwiLCBcImZvcm1Ob1ZhbGlkYXRlXCIsIFwiZm9ybVRhcmdldFwiLCBcImZyYW1lQm9yZGVyXCIsXG4gICAgICAgIFwiaGVhZGVyc1wiLCBcImhlaWdodFwiLCBcImhpZGRlblwiLCBcImhpZ2hcIiwgXCJocmVmXCIsIFwiaHJlZkxhbmdcIiwgXCJodG1sRm9yXCIsIFwiaHR0cEVxdWl2XCIsXG4gICAgICAgIFwiaWNvblwiLCBcImlkXCIsIFwiaW5wdXRNb2RlXCIsIFwiaW50ZWdyaXR5XCIsIFwiaXNcIixcbiAgICAgICAgXCJrZXlQYXJhbXNcIiwgXCJrZXlUeXBlXCIsIFwia2luZFwiLFxuICAgICAgICBcImxhYmVsXCIsIFwibGFuZ1wiLCBcImxpc3RcIiwgXCJsb29wXCIsIFwibG93XCIsXG4gICAgICAgIFwibWFuaWZlc3RcIiwgXCJtYXJnaW5IZWlnaHRcIiwgXCJtYXJnaW5XaWR0aFwiLCBcIm1heFwiLCBcIm1heExlbmd0aFwiLCBcIm1lZGlhXCIsIFwibWVkaWFHcm91cFwiLCBcIm1ldGhvZFwiLCBcIm1pblwiLCBcIm1pbkxlbmd0aFwiLCBcIm11bHRpcGxlXCIsIFwibXV0ZWRcIixcbiAgICAgICAgXCJuYW1lXCIsIFwibm9WYWxpZGF0ZVwiLCBcIm5vbmNlXCIsXG4gICAgICAgIFwib3BlblwiLCBcIm9wdGltdW1cIixcbiAgICAgICAgXCJwYXR0ZXJuXCIsIFwicGxhY2Vob2xkZXJcIiwgXCJwb3N0ZXJcIiwgXCJwcmVsb2FkXCIsIFwicHJvZmlsZVwiLFxuICAgICAgICBcInJhZGlvR3JvdXBcIiwgXCJyZWFkT25seVwiLCBcInJlbFwiLCBcInJlcXVpcmVkXCIsIFwicmV2ZXJzZWRcIiwgXCJyb2xlXCIsIFwicm93U3BhblwiLCBcInJvd3NcIixcbiAgICAgICAgXCJzYW5kYm94XCIsIFwic2NvcGVcIiwgXCJzY29wZWRcIiwgXCJzY3JvbGxpbmdcIiwgXCJzZWFtbGVzc1wiLCBcInNlbGVjdGVkXCIsIFwic2hhcGVcIiwgXCJzaXplXCIsIFwic2l6ZXNcIiwgXCJzcGFuXCIsIFwic3BlbGxDaGVja1wiLCBcInNyY1wiLCBcInNyY0RvY1wiLCBcInNyY0xhbmdcIiwgXCJzcmNTZXRcIiwgXCJzdGFydFwiLCBcInN0ZXBcIiwgXCJzdHlsZVwiLCBcInN1bW1hcnlcIixcbiAgICAgICAgXCJ0YWJJbmRleFwiLCBcInRhcmdldFwiLCBcInRpdGxlXCIsIFwidHlwZVwiLFxuICAgICAgICBcInVzZU1hcFwiLFxuICAgICAgICBcInZhbHVlXCIsXG4gICAgICAgIFwid2lkdGhcIixcbiAgICAgICAgXCJ3bW9kZVwiLFxuICAgICAgICBcIndyYXBcIlxuICAgICAgXTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcHVzaCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IFdJTERDQVJEIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoZG9tRWxlbWVudHMpIHtcbiAgY29uc3QgZG9tRWxlbWVudHNXaXRoRWxlbWVudHMgPSBmaWx0ZXJET01Ob2Rlcyhkb21FbGVtZW50cywgKGRvbUVsZW1lbnQpID0+IChkb21FbGVtZW50Ll9fZWxlbWVudF9fICE9PSB1bmRlZmluZWQpKSxcbiAgICAgICAgZWxlbWVudHMgPSBkb21FbGVtZW50c1dpdGhFbGVtZW50cy5tYXAoKGRvbUVsZW1lbnQpID0+IGRvbUVsZW1lbnQuX19lbGVtZW50X18pO1xuXG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUoZG9tTm9kZSwgaGVpZ2h0LCBhc2NlbmRhbnRET01Ob2RlcyA9IFtdKSB7XG4gIGlmIChoZWlnaHQgPiAwKSB7XG4gICAgY29uc3QgcGFyZW50RE9NTm9kZSA9IGRvbU5vZGUucGFyZW50RWxlbWVudDsgIC8vL1xuXG4gICAgaWYgKHBhcmVudERPTU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGFzY2VuZGFudERPTU5vZGVzLnB1c2gocGFyZW50RE9NTm9kZSk7XG5cbiAgICAgIGhlaWdodC0tO1xuXG4gICAgICBhc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlKHBhcmVudERPTU5vZGUsIGhlaWdodCwgYXNjZW5kYW50RE9NTm9kZXMpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhc2NlbmRhbnRET01Ob2Rlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlKGRvbU5vZGUsIGRlcHRoLCBkZXNjZW5kYW50RE9NTm9kZXMgPSBbXSkge1xuICBpZiAoZGVwdGggPiAwKSB7XG4gICAgY29uc3QgY2hpbGRET01Ob2RlcyA9IGRvbU5vZGUuY2hpbGROb2RlczsgIC8vL1xuXG4gICAgcHVzaChkZXNjZW5kYW50RE9NTm9kZXMsIGNoaWxkRE9NTm9kZXMpO1xuXG4gICAgZGVwdGgtLTtcblxuICAgIGNoaWxkRE9NTm9kZXMuZm9yRWFjaCgoY2hpbGRET01Ob2RlKSA9PiBkZXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZShjaGlsZERPTU5vZGUsIGRlcHRoLCBkZXNjZW5kYW50RE9NTm9kZXMpKTtcbiAgfVxuXG4gIHJldHVybiBkZXNjZW5kYW50RE9NTm9kZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJET01Ob2Rlc0J5U2VsZWN0b3IoZG9tTm9kZXMsIHNlbGVjdG9yKSB7XG4gIGNvbnN0IGZpbHRlcmVkRE9NTm9kZXMgPSBmaWx0ZXJET01Ob2Rlcyhkb21Ob2RlcywgKGRvbU5vZGUpID0+IGRvbU5vZGVNYXRjaGVzU2VsZWN0b3IoZG9tTm9kZSwgc2VsZWN0b3IpKTtcblxuICByZXR1cm4gZmlsdGVyZWRET01Ob2Rlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRvbU5vZGVNYXRjaGVzU2VsZWN0b3IoZG9tTm9kZSwgc2VsZWN0b3IpIHtcbiAgY29uc3QgZG9tTm9kZVR5cGUgPSBkb21Ob2RlLm5vZGVUeXBlO1xuXG4gIHN3aXRjaCAoZG9tTm9kZVR5cGUpIHtcbiAgICBjYXNlIE5vZGUuRUxFTUVOVF9OT0RFOiB7XG4gICAgICBjb25zdCBkb21FbGVtZW50ID0gZG9tTm9kZTsgLy8vXG5cbiAgICAgIHJldHVybiBkb21FbGVtZW50Lm1hdGNoZXMoc2VsZWN0b3IpO1xuICAgIH1cblxuICAgIGNhc2UgTm9kZS5URVhUX05PREU6IHtcbiAgICAgIGlmIChzZWxlY3RvciA9PT0gV0lMRENBUkQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyRE9NTm9kZXMoZG9tTm9kZXMsIHRlc3QpIHtcbiAgY29uc3QgZmlsdGVyZWRET01Ob2RlcyA9IFtdLFxuICAgICAgICBkb21Ob2Rlc0xlbmd0aCA9IGRvbU5vZGVzLmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZG9tTm9kZXNMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBkb21Ob2RlID0gZG9tTm9kZXNbaW5kZXhdLFxuICAgICAgICAgIHJlc3VsdCA9IHRlc3QoZG9tTm9kZSk7XG5cbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICBmaWx0ZXJlZERPTU5vZGVzLnB1c2goZG9tTm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZpbHRlcmVkRE9NTm9kZXM7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgV0lMRENBUkQgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBkb21Ob2RlTWF0Y2hlc1NlbGVjdG9yLCBlbGVtZW50c0Zyb21ET01FbGVtZW50cywgZmlsdGVyRE9NTm9kZXNCeVNlbGVjdG9yLCBhc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlLCBkZXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZG9tXCI7XG5cbmZ1bmN0aW9uIGdldFBhcmVudEVsZW1lbnQoc2VsZWN0b3IgPSBXSUxEQ0FSRCkge1xuICBsZXQgcGFyZW50RWxlbWVudCA9IG51bGw7XG5cbiAgY29uc3QgcGFyZW50RE9NRWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXG4gIGlmIChwYXJlbnRET01FbGVtZW50ICE9PSBudWxsKSB7XG4gICAgaWYgKHBhcmVudERPTUVsZW1lbnQubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgIGNvbnN0IHBhcmVudERPTUVsZW1lbnRzID0gW3BhcmVudERPTUVsZW1lbnRdLFxuICAgICAgICAgICAgcGFyZW50RWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhwYXJlbnRET01FbGVtZW50cyksXG4gICAgICAgICAgICBmaXJzdFBhcmVudEVsZW1lbnQgPSBmaXJzdChwYXJlbnRFbGVtZW50cyk7XG5cbiAgICAgIHBhcmVudEVsZW1lbnQgPSBmaXJzdFBhcmVudEVsZW1lbnQgfHwgbnVsbDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFyZW50RWxlbWVudDtcbn1cblxuZnVuY3Rpb24gZ2V0Q2hpbGRFbGVtZW50cyhzZWxlY3RvciA9IFdJTERDQVJEKSB7XG4gIGNvbnN0IGNoaWxkRE9NTm9kZXMgPSB0aGlzLmRvbUVsZW1lbnQuY2hpbGROb2RlcyxcbiAgICAgICAgY2hpbGRET01FbGVtZW50cyA9IGZpbHRlckRPTU5vZGVzQnlTZWxlY3RvcihjaGlsZERPTU5vZGVzLCBzZWxlY3RvciksXG4gICAgICAgIGNoaWxkRWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhjaGlsZERPTUVsZW1lbnRzKTtcblxuICByZXR1cm4gY2hpbGRFbGVtZW50cztcbn1cblxuZnVuY3Rpb24gZ2V0QXNjZW5kYW50RWxlbWVudHMoc2VsZWN0b3IgPSBXSUxEQ0FSRCwgbWF4aW11bUhlaWdodCA9IEluZmluaXR5KSB7XG4gIGNvbnN0IGhlaWdodCA9IG1heGltdW1IZWlnaHQsIC8vL1xuICAgICAgICBkb21Ob2RlID0gdGhpcy5kb21FbGVtZW50LCAgLy8vXG4gICAgICAgIGFzY2VuZGFudERPTU5vZGVzID0gYXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZShkb21Ob2RlLCBoZWlnaHQpLFxuICAgICAgICBhc2NlbmRhbnRET01FbGVtZW50cyA9IGZpbHRlckRPTU5vZGVzQnlTZWxlY3Rvcihhc2NlbmRhbnRET01Ob2Rlcywgc2VsZWN0b3IpLFxuICAgICAgICBhc2NlbmRhbnRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGFzY2VuZGFudERPTUVsZW1lbnRzKTtcblxuICByZXR1cm4gYXNjZW5kYW50RWxlbWVudHM7XG59XG5cbmZ1bmN0aW9uIGdldERlc2NlbmRhbnRFbGVtZW50cyhzZWxlY3RvciA9IFdJTERDQVJELCBtYXhpbXVtRGVwdGggPSBJbmZpbml0eSkge1xuICBjb25zdCBkZXB0aCA9IG1heGltdW1EZXB0aCwgLy8vXG4gICAgICAgIGRvbU5vZGUgPSB0aGlzLmRvbUVsZW1lbnQsICAvLy9cbiAgICAgICAgZGVzY2VuZGFudERPTU5vZGVzID0gZGVzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUoZG9tTm9kZSwgZGVwdGgpLFxuICAgICAgICBkZXNjZW5kYW50RE9NRWxlbWVudHMgPSBmaWx0ZXJET01Ob2Rlc0J5U2VsZWN0b3IoZGVzY2VuZGFudERPTU5vZGVzLCBzZWxlY3RvciksXG4gICAgICAgIGRlc2NlbmRhbnRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGRlc2NlbmRhbnRET01FbGVtZW50cyk7XG5cbiAgcmV0dXJuIGRlc2NlbmRhbnRFbGVtZW50cztcbn1cblxuZnVuY3Rpb24gZ2V0TmV4dFNpYmxpbmdFbGVtZW50KHNlbGVjdG9yID0gV0lMRENBUkQpIHtcbiAgbGV0IG5leHRTaWJsaW5nRWxlbWVudCA9IG51bGw7XG5cbiAgY29uc3QgbmV4dFNpYmxpbmdET01Ob2RlID0gdGhpcy5kb21FbGVtZW50Lm5leHRTaWJsaW5nO1xuXG4gIGlmICgobmV4dFNpYmxpbmdET01Ob2RlICE9PSBudWxsKSAmJiBkb21Ob2RlTWF0Y2hlc1NlbGVjdG9yKG5leHRTaWJsaW5nRE9NTm9kZSwgc2VsZWN0b3IpKSB7XG4gICAgbmV4dFNpYmxpbmdFbGVtZW50ID0gbmV4dFNpYmxpbmdET01Ob2RlLl9fZWxlbWVudF9fIHx8IG51bGw7XG4gIH1cblxuICByZXR1cm4gbmV4dFNpYmxpbmdFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBnZXRQcmV2aW91c1NpYmxpbmdFbGVtZW50KHNlbGVjdG9yID0gV0lMRENBUkQpIHtcbiAgbGV0IHByZXZpb3VzU2libGluZ0VsZW1lbnQgPSBudWxsO1xuXG4gIGNvbnN0IHByZXZpb3VzU2libGluZ0RPTU5vZGUgPSB0aGlzLmRvbUVsZW1lbnQucHJldmlvdXNTaWJsaW5nOyAgLy8vXG5cbiAgaWYgKChwcmV2aW91c1NpYmxpbmdET01Ob2RlICE9PSBudWxsKSAmJiBkb21Ob2RlTWF0Y2hlc1NlbGVjdG9yKHByZXZpb3VzU2libGluZ0RPTU5vZGUsIHNlbGVjdG9yKSkge1xuICAgIHByZXZpb3VzU2libGluZ0VsZW1lbnQgPSBwcmV2aW91c1NpYmxpbmdET01Ob2RlLl9fZWxlbWVudF9fIHx8IG51bGw7XG4gIH1cblxuICByZXR1cm4gcHJldmlvdXNTaWJsaW5nRWxlbWVudDtcbn1cblxuY29uc3QgZWxlbWVudE1peGlucyA9IHtcbiAgZ2V0UGFyZW50RWxlbWVudCxcbiAgZ2V0Q2hpbGRFbGVtZW50cyxcbiAgZ2V0QXNjZW5kYW50RWxlbWVudHMsXG4gIGdldERlc2NlbmRhbnRFbGVtZW50cyxcbiAgZ2V0TmV4dFNpYmxpbmdFbGVtZW50LFxuICBnZXRQcmV2aW91c1NpYmxpbmdFbGVtZW50XG59O1xuXG5leHBvcnQgZGVmYXVsdCBlbGVtZW50TWl4aW5zO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgT2Zmc2V0IGZyb20gXCIuL29mZnNldFwiO1xuaW1wb3J0IEJvdW5kcyBmcm9tIFwiLi9ib3VuZHNcIjtcbmltcG9ydCBlbGVtZW50TWl4aW5zIGZyb20gXCIuL21peGlucy9lbGVtZW50XCI7XG5cbmNsYXNzIFRleHRFbGVtZW50IHtcbiAgY29uc3RydWN0b3IodGV4dCkge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpOyAvLy9cblxuICAgIHRoaXMuZG9tRWxlbWVudC5fX2VsZW1lbnRfXyA9IHRoaXM7XG4gIH1cblxuICBnZXRUZXh0KCkge1xuICAgIGNvbnN0IG5vZGVWYWx1ZSA9IHRoaXMuZG9tRWxlbWVudC5ub2RlVmFsdWUsXG4gICAgICAgICAgdGV4dCA9IG5vZGVWYWx1ZTsgLy8vXG5cbiAgICByZXR1cm4gdGV4dDtcbiAgfVxuXG4gIHNldFRleHQodGV4dCkge1xuICAgIGNvbnN0IG5vZGVWYWx1ZSA9IHRleHQ7IC8vL1xuXG4gICAgdGhpcy5kb21FbGVtZW50Lm5vZGVWYWx1ZSA9IG5vZGVWYWx1ZTtcbiAgfVxuXG4gIGdldE9mZnNldCgpIHtcbiAgICBjb25zdCB0b3AgPSB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0VG9wLCAgLy8vXG4gICAgICAgICAgbGVmdCA9IHRoaXMuZG9tRWxlbWVudC5vZmZzZXRMZWZ0LCAgLy8vXG4gICAgICAgICAgb2Zmc2V0ID0gbmV3IE9mZnNldCh0b3AsIGxlZnQpO1xuXG4gICAgcmV0dXJuIG9mZnNldDtcbiAgfVxuXG4gIGdldEJvdW5kcygpIHtcbiAgICBjb25zdCBib3VuZGluZ0NsaWVudFJlY3QgPSB0aGlzLmRvbUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgYm91bmRzID0gQm91bmRzLmZyb21Cb3VuZGluZ0NsaWVudFJlY3QoYm91bmRpbmdDbGllbnRSZWN0KTtcblxuICAgIHJldHVybiBib3VuZHM7XG4gIH1cblxuICBnZXRXaWR0aCgpIHtcbiAgICBjb25zdCBjbGllbnRXaWR0aCA9IHRoaXMuZG9tRWxlbWVudC5jbGllbnRXaWR0aCxcbiAgICAgICAgICB3aWR0aCA9IGNsaWVudFdpZHRoOyAgLy8vXG5cbiAgICByZXR1cm4gd2lkdGg7XG4gIH1cblxuICBnZXRIZWlnaHQoKSB7XG4gICAgY29uc3QgY2xpZW50SGVpZ2h0ID0gdGhpcy5kb21FbGVtZW50LmNsaWVudEhlaWdodCxcbiAgICAgICAgICBoZWlnaHQgPSBjbGllbnRIZWlnaHQ7ICAvLy9cblxuICAgIHJldHVybiBoZWlnaHQ7XG4gIH1cblxuICBwcmVwZW5kVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LnByZXBlbmQodGhpcyk7IH1cblxuICBhcHBlbmRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQuYXBwZW5kKHRoaXMpOyB9XG5cbiAgYWRkVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LmFkZCh0aGlzKTsgfVxuXG4gIHJlbW92ZUZyb20ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LnJlbW92ZSh0aGlzKTsgfVxuXG4gIGluc2VydEJlZm9yZShzaWJsaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgcGFyZW50RE9NTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCk7XG4gIH1cblxuICBpbnNlcnRBZnRlcihzaWJsaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgcGFyZW50RE9NTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudC5uZXh0U2libGluZyk7ICAvLy9cbiAgfVxuXG4gIHJlbW92ZSgpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlKCk7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihUZXh0RWxlbWVudC5wcm90b3R5cGUsIGVsZW1lbnRNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBUZXh0RWxlbWVudDtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRleHRFbGVtZW50IGZyb20gXCIuLi90ZXh0RWxlbWVudFwiO1xuXG5pbXBvcnQgeyBTVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVGYWxzZXlFbGVtZW50cyhlbGVtZW50cykge1xuICBlbGVtZW50cyA9IGVsZW1lbnRzLnJlZHVjZSgoZWxlbWVudHMsIGVsZW1lbnQpID0+IHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgZWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudHM7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gZWxlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlU3RyaW5nc1dpdGhUZXh0RWxlbWVudHMoZWxlbWVudHMpIHtcbiAgZWxlbWVudHMgPSBlbGVtZW50cy5tYXAoKGVsZW1lbnQpID0+IHsgIC8vL1xuICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gU1RSSU5HKSB7XG4gICAgICBjb25zdCB0ZXh0ID0gZWxlbWVudCwgIC8vL1xuICAgICAgICAgICAgdGV4dEVsZW1lbnQgPSBuZXcgVGV4dEVsZW1lbnQodGV4dCk7XG5cbiAgICAgIGVsZW1lbnQgPSB0ZXh0RWxlbWVudDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH0pO1xuXG4gIHJldHVybiBlbGVtZW50cztcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY29tYmluZSwgcHJ1bmUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL29iamVjdFwiO1xuaW1wb3J0IHsgZmlyc3QsIGd1YXJhbnRlZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGlzSFRNTEF0dHJpYnV0ZU5hbWUsIGlzU1ZHQXR0cmlidXRlTmFtZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvbmFtZVwiO1xuaW1wb3J0IHsgcmVtb3ZlRmFsc2V5RWxlbWVudHMsIHJlcGxhY2VTdHJpbmdzV2l0aFRleHRFbGVtZW50cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudHNcIjtcbmltcG9ydCB7IEZPUiwgQ0xBU1MsIE9CSkVDVCwgSFRNTF9GT1IsIENMQVNTX05BTUUsIEJPT0xFQU4sIEZVTkNUSU9OLCBTVkdfTkFNRVNQQUNFX1VSSSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZnVuY3Rpb24gYXBwbHlQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGRlZmF1bHRQcm9wZXJ0aWVzLCBpZ25vcmVkUHJvcGVydGllcykge1xuICB0aGlzLnByb3BlcnRpZXMgPSBjb21iaW5lKHByb3BlcnRpZXMsIGRlZmF1bHRQcm9wZXJ0aWVzKTtcblxuICBwcm9wZXJ0aWVzID0gcHJ1bmUodGhpcy5wcm9wZXJ0aWVzLCBpZ25vcmVkUHJvcGVydGllcyk7IC8vL1xuXG4gIGNvbnN0IHsgbmFtZXNwYWNlVVJJIH0gPSB0aGlzLmRvbUVsZW1lbnQsXG4gICAgICAgIHN2ZyA9IChuYW1lc3BhY2VVUkkgPT09IFNWR19OQU1FU1BBQ0VfVVJJKSwgLy8vXG4gICAgICAgIHByb3BlcnRpZXNLZXlzID0gT2JqZWN0LmtleXMocHJvcGVydGllcyksXG4gICAgICAgIG5hbWVzID0gcHJvcGVydGllc0tleXM7ICAvLy89XG5cbiAgbmFtZXMuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gcHJvcGVydGllc1tuYW1lXSxcbiAgICAgICAgICBuYW1lSGFuZGxlck5hbWUgPSBpc05hbWVIYW5kbGVyTmFtZShuYW1lKTtcblxuICAgIGlmIChuYW1lSGFuZGxlck5hbWUpIHtcbiAgICAgIGFkZEhhbmRsZXIodGhpcywgbmFtZSwgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBuYW1lQXR0cmlidXRlTmFtZSA9IGlzTmFtZUF0dHJpYnV0ZU5hbWUobmFtZSwgc3ZnKTtcblxuICAgICAgaWYgKG5hbWVBdHRyaWJ1dGVOYW1lKSB7XG4gICAgICAgIGFkZEF0dHJpYnV0ZSh0aGlzLCBuYW1lLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBjaGlsZEVsZW1lbnRzID0gY2hpbGRFbGVtZW50c0Zyb21FbGVtZW50KHRoaXMpIHx8IHByb3BlcnRpZXMuY2hpbGRFbGVtZW50cywgIC8vL1xuICAgICAgICBjb250ZXh0ID0ge307XG5cbiAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IHtcbiAgICB1cGRhdGVDb250ZXh0KGNoaWxkRWxlbWVudCwgY29udGV4dCk7XG5cbiAgICB0aGlzLmFkZChjaGlsZEVsZW1lbnQpO1xuICB9KTtcblxuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xufVxuXG5mdW5jdGlvbiBnZXRQcm9wZXJ0aWVzKCkge1xuICByZXR1cm4gdGhpcy5wcm9wZXJ0aWVzO1xufVxuXG5mdW5jdGlvbiBnZXRDb250ZXh0KCkge1xuICByZXR1cm4gdGhpcy5jb250ZXh0O1xufVxuXG5mdW5jdGlvbiBhc3NpZ25Db250ZXh0KG5hbWVzLCB0aGVuRGVsZXRlKSB7XG4gIGNvbnN0IGFyZ3VtZW50c0xlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG5cbiAgaWYgKGFyZ3VtZW50c0xlbmd0aCA9PT0gMSkge1xuICAgIGNvbnN0IGZpcnN0QXJndW1lbnQgPSBmaXJzdChhcmd1bWVudHMpO1xuXG4gICAgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSBCT09MRUFOKSB7XG4gICAgICBuYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMuY29udGV4dCk7XG5cbiAgICAgIHRoZW5EZWxldGUgPSBmaXJzdEFyZ3VtZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGVuRGVsZXRlID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpZiAoYXJndW1lbnRzTGVuZ3RoID09PSAwKSB7XG4gICAgbmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLmNvbnRleHQpO1xuXG4gICAgdGhlbkRlbGV0ZSA9IHRydWU7XG4gIH1cblxuICBuYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmNvbnRleHRbbmFtZV0sXG4gICAgICAgICAgcHJvcGVydHlOYW1lID0gbmFtZSwgIC8vL1xuICAgICAgICAgIGRlc2NyaXB0b3IgPSB7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgICB9O1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIHByb3BlcnR5TmFtZSwgZGVzY3JpcHRvcik7XG5cbiAgICBpZiAodGhlbkRlbGV0ZSkge1xuICAgICAgZGVsZXRlIHRoaXMuY29udGV4dFtuYW1lXTtcbiAgICB9XG4gIH0sIFtdKTtcbn1cblxuY29uc3QganN4TWl4aW5zID0ge1xuICBhcHBseVByb3BlcnRpZXMsXG4gIGdldFByb3BlcnRpZXMsXG4gIGdldENvbnRleHQsXG4gIGFzc2lnbkNvbnRleHRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGpzeE1peGlucztcblxuZnVuY3Rpb24gY2hpbGRFbGVtZW50c0Zyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgbGV0IGNoaWxkRWxlbWVudHMgPSBudWxsO1xuXG4gIGlmICh0eXBlb2YgZWxlbWVudC5jaGlsZEVsZW1lbnRzID09PSBGVU5DVElPTikge1xuICAgIGNoaWxkRWxlbWVudHMgPSBlbGVtZW50LmNoaWxkRWxlbWVudHMuY2FsbChlbGVtZW50KTtcblxuICAgIGNoaWxkRWxlbWVudHMgPSBndWFyYW50ZWUoY2hpbGRFbGVtZW50cyk7XG5cbiAgICBjaGlsZEVsZW1lbnRzID0gcmVtb3ZlRmFsc2V5RWxlbWVudHMoY2hpbGRFbGVtZW50cyk7XG5cbiAgICBjaGlsZEVsZW1lbnRzID0gcmVwbGFjZVN0cmluZ3NXaXRoVGV4dEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpO1xuICB9XG5cbiAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUNvbnRleHQoY2hpbGRFbGVtZW50LCBjb250ZXh0KSB7XG4gIGNvbnN0IHBhcmVudENvbnRleHQgPSAodHlwZW9mIGNoaWxkRWxlbWVudC5wYXJlbnRDb250ZXh0ID09PSBGVU5DVElPTikgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZEVsZW1lbnQucGFyZW50Q29udGV4dCgpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZEVsZW1lbnQuY29udGV4dDsgLy8vXG5cbiAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCBwYXJlbnRDb250ZXh0KTtcbn1cblxuZnVuY3Rpb24gYWRkSGFuZGxlcihlbGVtZW50LCBuYW1lLCB2YWx1ZSkge1xuICBjb25zdCBldmVudFR5cGUgPSBuYW1lLnN1YnN0cigyKS50b0xvd2VyQ2FzZSgpLCAvLy9cbiAgICAgICAgaGFuZGxlciA9IHZhbHVlOyAgLy8vXG5cbiAgZWxlbWVudC5vbihldmVudFR5cGUsIGhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRyaWJ1dGUoZWxlbWVudCwgbmFtZSwgdmFsdWUpIHtcbiAgaWYgKG5hbWUgPT09IENMQVNTX05BTUUpIHtcbiAgICBuYW1lID0gQ0xBU1M7XG4gIH1cblxuICBpZiAobmFtZSA9PT0gSFRNTF9GT1IpIHtcbiAgICBuYW1lID0gRk9SO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gT0JKRUNUKSB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcblxuICAgIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBlbGVtZW50LmRvbUVsZW1lbnRbbmFtZV1ba2V5XSA9IHZhbHVlW2tleV07XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBCT09MRUFOKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB2YWx1ZSA9IG5hbWU7IC8vL1xuXG4gICAgICBlbGVtZW50LmFkZEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGVsZW1lbnQuYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc05hbWVIYW5kbGVyTmFtZShuYW1lKSB7XG4gIHJldHVybiAvXm9uLy50ZXN0KG5hbWUpO1xufVxuXG5mdW5jdGlvbiBpc05hbWVBdHRyaWJ1dGVOYW1lKG5hbWUsIHN2Zykge1xuICByZXR1cm4gc3ZnID8gaXNTVkdBdHRyaWJ1dGVOYW1lKG5hbWUpIDogaXNIVE1MQXR0cmlidXRlTmFtZShuYW1lKVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgQkxVUl9FVkVOVF9UWVBFID0gXCJibHVyXCI7XG5leHBvcnQgY29uc3QgV0hFRUxfRVZFTlRfVFlQRSA9IFwid2hlZWxcIjtcbmV4cG9ydCBjb25zdCBJTlBVVF9FVkVOVF9UWVBFID0gXCJpbnB1dFwiO1xuZXhwb3J0IGNvbnN0IEZPQ1VTX0VWRU5UX1RZUEUgPSBcImZvY3VzXCI7XG5leHBvcnQgY29uc3QgQ0xJQ0tfRVZFTlRfVFlQRSA9IFwiY2xpY2tcIjtcbmV4cG9ydCBjb25zdCBLRVlVUF9FVkVOVF9UWVBFID0gXCJrZXl1cFwiO1xuZXhwb3J0IGNvbnN0IENIQU5HRV9FVkVOVF9UWVBFID0gXCJjaGFuZ2VcIjtcbmV4cG9ydCBjb25zdCBSRVNJWkVfRVZFTlRfVFlQRSA9IFwicmVzaXplXCI7XG5leHBvcnQgY29uc3QgU0NST0xMX0VWRU5UX1RZUEUgPSBcInNjcm9sbFwiO1xuZXhwb3J0IGNvbnN0IEtFWURPV05fRVZFTlRfVFlQRSA9IFwia2V5ZG93blwiO1xuZXhwb3J0IGNvbnN0IE1PVVNFVVBfRVZFTlRfVFlQRSA9IFwibW91c2V1cFwiO1xuZXhwb3J0IGNvbnN0IEFVWENMSUNLX0VWRU5UX1RZUEUgPSBcImF1eGNsaWNrXCI7XG5leHBvcnQgY29uc3QgTU9VU0VPVVRfRVZFTlRfVFlQRSA9IFwibW91c2VvdXRcIjtcbmV4cG9ydCBjb25zdCBEQkxDTElDS19FVkVOVF9UWVBFID0gXCJkYmxjbGlja1wiO1xuZXhwb3J0IGNvbnN0IE1PVVNFT1ZFUl9FVkVOVF9UWVBFID0gXCJtb3VzZW92ZXJcIjtcbmV4cG9ydCBjb25zdCBNT1VTRURPV05fRVZFTlRfVFlQRSA9IFwibW91c2Vkb3duXCI7XG5leHBvcnQgY29uc3QgTU9VU0VNT1ZFX0VWRU5UX1RZUEUgPSBcIm1vdXNlbW92ZVwiO1xuZXhwb3J0IGNvbnN0IENPTlRFWFRNRU5VX0VWRU5UX1RZUEUgPSBcImNvbnRleHRtZW51XCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgQkxVUl9FVkVOVF9UWVBFLFxuICBXSEVFTF9FVkVOVF9UWVBFLFxuICBJTlBVVF9FVkVOVF9UWVBFLFxuICBGT0NVU19FVkVOVF9UWVBFLFxuICBDTElDS19FVkVOVF9UWVBFLFxuICBLRVlVUF9FVkVOVF9UWVBFLFxuICBDSEFOR0VfRVZFTlRfVFlQRSxcbiAgUkVTSVpFX0VWRU5UX1RZUEUsXG4gIFNDUk9MTF9FVkVOVF9UWVBFLFxuICBLRVlET1dOX0VWRU5UX1RZUEUsXG4gIE1PVVNFVVBfRVZFTlRfVFlQRSxcbiAgQVVYQ0xJQ0tfRVZFTlRfVFlQRSxcbiAgTU9VU0VPVVRfRVZFTlRfVFlQRSxcbiAgREJMQ0xJQ0tfRVZFTlRfVFlQRSxcbiAgTU9VU0VPVkVSX0VWRU5UX1RZUEUsXG4gIE1PVVNFRE9XTl9FVkVOVF9UWVBFLFxuICBNT1VTRU1PVkVfRVZFTlRfVFlQRSxcbiAgQ09OVEVYVE1FTlVfRVZFTlRfVFlQRVxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgS0VZVVBfRVZFTlRfVFlQRSwgS0VZRE9XTl9FVkVOVF9UWVBFIH0gZnJvbSBcIi4uL2V2ZW50VHlwZXNcIjtcblxuZnVuY3Rpb24gb25LZXlVcChrZXlVcEhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vbihLRVlVUF9FVkVOVF9UWVBFLCBrZXlVcEhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9mZktleVVwKGtleVVwSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZihLRVlVUF9FVkVOVF9UWVBFLCBrZXlVcEhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9uS2V5RG93bihrZXlEb3duSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uKEtFWURPV05fRVZFTlRfVFlQRSwga2V5RG93bkhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9mZktleURvd24oa2V5RG93bkhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vZmYoS0VZRE9XTl9FVkVOVF9UWVBFLCBrZXlEb3duSGFuZGxlciwgZWxlbWVudCk7IH1cblxuY29uc3Qga2V5TWl4aW5zID0ge1xuICBvbktleVVwLFxuICBvZmZLZXlVcCxcbiAgb25LZXlEb3duLFxuICBvZmZLZXlEb3duXG59O1xuXG5leHBvcnQgZGVmYXVsdCBrZXlNaXhpbnM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENMSUNLX0VWRU5UX1RZUEUsIERCTENMSUNLX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi4vZXZlbnRUeXBlc1wiO1xuXG5mdW5jdGlvbiBvbkNsaWNrKGNsaWNrSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uKENMSUNLX0VWRU5UX1RZUEUsIGNsaWNrSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb2ZmQ2xpY2soY2xpY2tIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmKENMSUNLX0VWRU5UX1RZUEUsIGNsaWNrSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb25Eb3VibGVDbGljayhjbGlja0hhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vbihEQkxDTElDS19FVkVOVF9UWVBFLCBjbGlja0hhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9mZkRvdWJsZUNsaWNrKGNsaWNrSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZihEQkxDTElDS19FVkVOVF9UWVBFLCBjbGlja0hhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmNvbnN0IGNsaWNrTWl4aW5zID0ge1xuICBvbkNsaWNrLFxuICBvZmZDbGljayxcbiAgb25Eb3VibGVDbGljayxcbiAgb2ZmRG91YmxlQ2xpY2tcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsaWNrTWl4aW5zO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBnZXRTdGF0ZSgpIHtcbiAgcmV0dXJuIHRoaXMuc3RhdGU7XG59XG5cbmZ1bmN0aW9uIHNldFN0YXRlKHN0YXRlKSB7XG4gIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlU3RhdGUoc3RhdGUpIHtcbiAgT2JqZWN0LmFzc2lnbih0aGlzLnN0YXRlLCBzdGF0ZSk7XG59XG5cbmNvbnN0IHN0YXRlTWl4aW5zID0ge1xuICBnZXRTdGF0ZSxcbiAgc2V0U3RhdGUsXG4gIHVwZGF0ZVN0YXRlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBzdGF0ZU1peGlucztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IFRFWFRfSFRNTF9DT05URU5UX1RZUEUgPSBcInRleHQvaHRtbFwiO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSRVNJWkVfRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9ldmVudFR5cGVzXCI7XG5pbXBvcnQgeyBPQkpFQ1QsIEFCT1VUX0JMQU5LIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgVEVYVF9IVE1MX0NPTlRFTlRfVFlQRSB9IGZyb20gXCIuLi9jb250ZW50VHlwZXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG9uUmVzaXplKHJlc2l6ZUhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vbihSRVNJWkVfRVZFTlRfVFlQRSwgcmVzaXplSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIG9mZlJlc2l6ZShyZXNpemVIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmKFJFU0laRV9FVkVOVF9UWVBFLCByZXNpemVIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBhZGRSZXNpemVPYmplY3QoKSB7XG4gIGNvbnN0IHJlc2l6ZU9iamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoT0JKRUNUKSxcbiAgICAgICAgc3R5bGUgPSBgZGlzcGxheTogYmxvY2s7IFxuICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICAgICAgICAgICAgICAgICB0b3A6IDA7IFxuICAgICAgICAgICAgICAgICBsZWZ0OiAwOyBcbiAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlOyBcbiAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7IFxuICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuOyBcbiAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IFxuICAgICAgICAgICAgICAgICB6LWluZGV4OiAtMTtgLFxuICAgICAgICBkYXRhID0gQUJPVVRfQkxBTkssXG4gICAgICAgIHR5cGUgPSBURVhUX0hUTUxfQ09OVEVOVF9UWVBFO1xuXG4gIHJlc2l6ZU9iamVjdC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBzdHlsZSk7XG5cbiAgcmVzaXplT2JqZWN0LmRhdGEgPSBkYXRhO1xuXG4gIHJlc2l6ZU9iamVjdC50eXBlID0gdHlwZTtcblxuICB0aGlzLl9fcmVzaXplT2JqZWN0X18gPSByZXNpemVPYmplY3Q7XG5cbiAgcmVzaXplT2JqZWN0Lm9ubG9hZCA9ICgpID0+IHJlc2l6ZU9iamVjdExvYWRIYW5kbGVyKHRoaXMpO1xuXG4gIHRoaXMuZG9tRWxlbWVudC5hcHBlbmRDaGlsZChyZXNpemVPYmplY3QpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVSZXNpemVPYmplY3QoKSB7XG4gIGNvbnN0IHJlc2l6ZU9iamVjdCA9IHRoaXMuX19yZXNpemVPYmplY3RfXyxcbiAgICAgICAgb2JqZWN0V2luZG93ID0gcmVzaXplT2JqZWN0LmNvbnRlbnREb2N1bWVudC5kZWZhdWx0VmlldzsgIC8vL1xuXG4gIG9iamVjdFdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFJFU0laRV9FVkVOVF9UWVBFLCByZXNpemVFdmVudExpc3RlbmVyKTtcblxuICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlQ2hpbGQocmVzaXplT2JqZWN0KTtcblxuICBkZWxldGUgdGhpcy5fX3Jlc2l6ZU9iamVjdF9fO1xufVxuXG5jb25zdCByZXNpemVNaXhpbnMgPSB7XG4gIG9uUmVzaXplLFxuICBvZmZSZXNpemUsXG4gIGFkZFJlc2l6ZU9iamVjdCxcbiAgcmVtb3ZlUmVzaXplT2JqZWN0XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZXNpemVNaXhpbnM7XG5cbmZ1bmN0aW9uIHJlc2l6ZU9iamVjdExvYWRIYW5kbGVyKGVsZW1lbnQpIHtcbiAgY29uc3QgcmVzaXplT2JqZWN0ID0gZWxlbWVudC5fX3Jlc2l6ZU9iamVjdF9fLFxuICAgICAgICByZXNpemVPYmplY3RXaW5kb3cgPSByZXNpemVPYmplY3QuY29udGVudERvY3VtZW50LmRlZmF1bHRWaWV3OyAgLy8vXG5cbiAgcmVzaXplT2JqZWN0V2luZG93LmFkZEV2ZW50TGlzdGVuZXIoUkVTSVpFX0VWRU5UX1RZUEUsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IHJlc2l6ZUV2ZW50TGlzdGVuZXJzID0gZWxlbWVudC5maW5kRXZlbnRMaXN0ZW5lcnMoUkVTSVpFX0VWRU5UX1RZUEUpO1xuXG4gICAgcmVzaXplRXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgocmVzaXplRXZlbnRMaXN0ZW5lcikgPT4gcmVzaXplRXZlbnRMaXN0ZW5lcihldmVudCkpO1xuICB9KTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgU1BBQ0UgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBSRVNJWkVfRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9ldmVudFR5cGVzXCI7XG5pbXBvcnQgeyByZW1vdmVSZXNpemVPYmplY3QgfSBmcm9tIFwiLi4vbWl4aW5zL3Jlc2l6ZVwiO1xuXG5mdW5jdGlvbiBvbihldmVudFR5cGVzLCBoYW5kbGVyLCBlbGVtZW50ID0gdGhpcykge1xuICBldmVudFR5cGVzID0gZXZlbnRUeXBlcy5zcGxpdChTUEFDRSk7XG5cbiAgZXZlbnRUeXBlcy5mb3JFYWNoKChldmVudFR5cGUpID0+IHtcbiAgICBpZiAoZXZlbnRUeXBlID09PSBSRVNJWkVfRVZFTlRfVFlQRSkge1xuICAgICAgY29uc3QgcmVzaXplRXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmZpbmRFdmVudExpc3RlbmVycyhSRVNJWkVfRVZFTlRfVFlQRSksXG4gICAgICAgICAgICByZXNpemVFdmVudExpc3RlbmVyc0xlbmd0aCA9IHJlc2l6ZUV2ZW50TGlzdGVuZXJzLmxlbmd0aDtcblxuICAgICAgaWYgKHJlc2l6ZUV2ZW50TGlzdGVuZXJzTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMuYWRkUmVzaXplT2JqZWN0KCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZXZlbnRMaXN0ZW5lciA9IHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuXG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBldmVudExpc3RlbmVyKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG9mZihldmVudFR5cGVzLCBoYW5kbGVyLCBlbGVtZW50ID0gdGhpcykge1xuICBldmVudFR5cGVzID0gZXZlbnRUeXBlcy5zcGxpdChTUEFDRSk7XG5cbiAgZXZlbnRUeXBlcy5mb3JFYWNoKChldmVudFR5cGUpID0+IHtcbiAgICBjb25zdCBldmVudExpc3RlbmVyID0gdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGV2ZW50TGlzdGVuZXIpO1xuXG4gICAgaWYgKGV2ZW50VHlwZSA9PT0gUkVTSVpFX0VWRU5UX1RZUEUpIHtcbiAgICAgIGNvbnN0IHJlc2l6ZUV2ZW50TGlzdGVuZXJzID0gdGhpcy5maW5kRXZlbnRMaXN0ZW5lcnMoUkVTSVpFX0VWRU5UX1RZUEUpLFxuICAgICAgICAgICAgcmVzaXplRXZlbnRMaXN0ZW5lcnNMZW5ndGggPSByZXNpemVFdmVudExpc3RlbmVycy5sZW5ndGg7XG5cbiAgICAgIGlmIChyZXNpemVFdmVudExpc3RlbmVyc0xlbmd0aCA9PT0gMCkge1xuICAgICAgICByZW1vdmVSZXNpemVPYmplY3QodGhpcyk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgaWYgKHRoaXMuZXZlbnRMaXN0ZW5lcnMgPT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMgPSBbXTtcbiAgfVxuXG4gIGNvbnN0IGV2ZW50TGlzdGVuZXIgPSB0aGlzLmNyZWF0ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcblxuICB0aGlzLmV2ZW50TGlzdGVuZXJzLnB1c2goZXZlbnRMaXN0ZW5lcik7XG5cbiAgcmV0dXJuIGV2ZW50TGlzdGVuZXI7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGV2ZW50TGlzdGVuZXIgPSB0aGlzLmZpbmRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCksXG4gICAgICAgIGluZGV4ID0gdGhpcy5ldmVudExpc3RlbmVycy5pbmRleE9mKGV2ZW50TGlzdGVuZXIpLFxuICAgICAgICBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICB0aGlzLmV2ZW50TGlzdGVuZXJzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuXG4gIGlmICh0aGlzLmV2ZW50TGlzdGVuZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgIGRlbGV0ZSB0aGlzLmV2ZW50TGlzdGVuZXJzO1xuICB9XG5cbiAgcmV0dXJuIGV2ZW50TGlzdGVuZXI7XG59XG5cbmZ1bmN0aW9uIGZpbmRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBldmVudExpc3RlbmVyID0gdGhpcy5ldmVudExpc3RlbmVycy5maW5kKChldmVudExpc3RlbmVyKSA9PiB7XG4gICAgaWYgKChldmVudExpc3RlbmVyLmVsZW1lbnQgPT09IGVsZW1lbnQpICYmIChldmVudExpc3RlbmVyLmhhbmRsZXIgPT09IGhhbmRsZXIpICYmIChldmVudExpc3RlbmVyLmV2ZW50VHlwZSA9PT0gZXZlbnRUeXBlKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZXZlbnRMaXN0ZW5lcjtcbn1cblxuZnVuY3Rpb24gZmluZEV2ZW50TGlzdGVuZXJzKGV2ZW50VHlwZSkge1xuICBjb25zdCBldmVudExpc3RlbmVycyA9IFtdO1xuXG4gIGlmICh0aGlzLmV2ZW50TGlzdGVuZXJzICE9PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzLmV2ZW50TGlzdGVuZXJzLmZvckVhY2goKGV2ZW50TGlzdGVuZXIpID0+IHtcbiAgICAgIGNvbnN0IGZvdW5kID0gKGV2ZW50TGlzdGVuZXIuZXZlbnRUeXBlID09PSBldmVudFR5cGUpO1xuXG4gICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgZXZlbnRMaXN0ZW5lcnMucHVzaChldmVudExpc3RlbmVyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBldmVudExpc3RlbmVycztcbn1cblxuZnVuY3Rpb24gY3JlYXRlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgbGV0IGV2ZW50TGlzdGVuZXI7XG5cbiAgY29uc3QgaGFuZGxlckVsZW1lbnQgPSBlbGVtZW50OyAvLy9cblxuICBldmVudExpc3RlbmVyID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXM7IC8vL1xuXG4gICAgaGFuZGxlci5jYWxsKGhhbmRsZXJFbGVtZW50LCBldmVudCwgZWxlbWVudCk7XG4gIH07XG5cbiAgT2JqZWN0LmFzc2lnbihldmVudExpc3RlbmVyLCB7XG4gICAgZWxlbWVudCxcbiAgICBoYW5kbGVyLFxuICAgIGV2ZW50VHlwZVxuICB9KTtcblxuICByZXR1cm4gZXZlbnRMaXN0ZW5lcjtcbn1cblxuY29uc3QgZXZlbnRNaXhpbnMgPSB7XG4gIG9uLFxuICBvZmYsXG4gIGFkZEV2ZW50TGlzdGVuZXIsXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXIsXG4gIGNyZWF0ZUV2ZW50TGlzdGVuZXIsXG4gIGZpbmRFdmVudExpc3RlbmVyLFxuICBmaW5kRXZlbnRMaXN0ZW5lcnNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGV2ZW50TWl4aW5zO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBNT1VTRVVQX0VWRU5UX1RZUEUsXG4gICAgICAgICBNT1VTRU9VVF9FVkVOVF9UWVBFLFxuICAgICAgICAgTU9VU0VET1dOX0VWRU5UX1RZUEUsXG4gICAgICAgICBNT1VTRU9WRVJfRVZFTlRfVFlQRSxcbiAgICAgICAgIE1PVVNFTU9WRV9FVkVOVF9UWVBFIH0gZnJvbSBcIi4uL2V2ZW50VHlwZXNcIjtcblxuZnVuY3Rpb24gb25Nb3VzZVVwKG1vdXNlVXBIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub24oTU9VU0VVUF9FVkVOVF9UWVBFLCBtb3VzZVVwSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb2ZmTW91c2VVcChtb3VzZVVwSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZihNT1VTRVVQX0VWRU5UX1RZUEUsIG1vdXNlVXBIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvbk1vdXNlT3V0KG1vdXNlT3V0SGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uKE1PVVNFT1VUX0VWRU5UX1RZUEUsIG1vdXNlT3V0SGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb2ZmTW91c2VPdXQobW91c2VPdXRIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmKE1PVVNFT1VUX0VWRU5UX1RZUEUsIG1vdXNlT3V0SGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb25Nb3VzZURvd24obW91c2VEb3duSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uKE1PVVNFRE9XTl9FVkVOVF9UWVBFLCBtb3VzZURvd25IYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvZmZNb3VzZURvd24obW91c2VEb3duSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZihNT1VTRURPV05fRVZFTlRfVFlQRSwgbW91c2VEb3duSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb25Nb3VzZU92ZXIobW91c2VPdmVySGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uKE1PVVNFT1ZFUl9FVkVOVF9UWVBFLCBtb3VzZU92ZXJIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvZmZNb3VzZU92ZXIobW91c2VPdmVySGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZihNT1VTRU9WRVJfRVZFTlRfVFlQRSwgbW91c2VPdmVySGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb25Nb3VzZU1vdmUobW91c2VNb3ZlSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uKE1PVVNFTU9WRV9FVkVOVF9UWVBFLCBtb3VzZU1vdmVIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvZmZNb3VzZU1vdmUobW91c2VNb3ZlSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZihNT1VTRU1PVkVfRVZFTlRfVFlQRSwgbW91c2VNb3ZlSGFuZGxlciwgZWxlbWVudCk7IH1cblxuY29uc3QgbW91c2VNaXhpbnMgPSB7XG4gIG9uTW91c2VVcCxcbiAgb2ZmTW91c2VVcCxcbiAgb25Nb3VzZU91dCxcbiAgb2ZmTW91c2VPdXQsXG4gIG9uTW91c2VEb3duLFxuICBvZmZNb3VzZURvd24sXG4gIG9uTW91c2VPdmVyLFxuICBvZmZNb3VzZU92ZXIsXG4gIG9uTW91c2VNb3ZlLFxuICBvZmZNb3VzZU1vdmVcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1vdXNlTWl4aW5zO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBTQ1JPTExfRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9ldmVudFR5cGVzXCI7XG5cbmZ1bmN0aW9uIG9uU2Nyb2xsKHNjcm9sbEhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vbihTQ1JPTExfRVZFTlRfVFlQRSwgc2Nyb2xsSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb2ZmU2Nyb2xsKHNjcm9sbEhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vZmYoU0NST0xMX0VWRU5UX1RZUEUsIHNjcm9sbEhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIGdldFNjcm9sbFRvcCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5zY3JvbGxUb3A7IH1cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsTGVmdCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5zY3JvbGxMZWZ0OyB9XG5cbmZ1bmN0aW9uIHNldFNjcm9sbFRvcChzY3JvbGxUb3ApIHsgdGhpcy5kb21FbGVtZW50LnNjcm9sbFRvcCA9IHNjcm9sbFRvcDsgfVxuXG5mdW5jdGlvbiBzZXRTY3JvbGxMZWZ0KHNjcm9sbExlZnQpIHsgdGhpcy5kb21FbGVtZW50LnNjcm9sbExlZnQgPSBzY3JvbGxMZWZ0OyB9XG5cbmNvbnN0IHNjcm9sbE1peGlucyA9IHtcbiAgb25TY3JvbGwsXG4gIG9mZlNjcm9sbCxcbiAgZ2V0U2Nyb2xsVG9wLFxuICBnZXRTY3JvbGxMZWZ0LFxuICBzZXRTY3JvbGxUb3AsXG4gIHNldFNjcm9sbExlZnRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNjcm9sbE1peGlucztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE9mZnNldCBmcm9tIFwiLi9vZmZzZXRcIjtcbmltcG9ydCBCb3VuZHMgZnJvbSBcIi4vYm91bmRzXCI7XG5pbXBvcnQganN4TWl4aW5zIGZyb20gXCIuL21peGlucy9qc3hcIjtcbmltcG9ydCBrZXlNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2tleVwiO1xuaW1wb3J0IGNsaWNrTWl4aW5zIGZyb20gXCIuL21peGlucy9jbGlja1wiO1xuaW1wb3J0IHN0YXRlTWl4aW5zIGZyb20gXCIuL21peGlucy9zdGF0ZVwiO1xuaW1wb3J0IGV2ZW50TWl4aW5zIGZyb20gXCIuL21peGlucy9ldmVudFwiO1xuaW1wb3J0IG1vdXNlTWl4aW5zIGZyb20gXCIuL21peGlucy9tb3VzZVwiO1xuaW1wb3J0IHJlc2l6ZU1peGlucyBmcm9tIFwiLi9taXhpbnMvcmVzaXplXCI7XG5pbXBvcnQgc2Nyb2xsTWl4aW5zIGZyb20gXCIuL21peGlucy9zY3JvbGxcIjtcbmltcG9ydCBlbGVtZW50TWl4aW5zIGZyb20gXCIuL21peGlucy9lbGVtZW50XCI7XG5cbmltcG9ydCB7IGNvbWJpbmUgfSBmcm9tIFwiLi91dGlsaXRpZXMvb2JqZWN0XCI7XG5pbXBvcnQgeyBpc1NWR1RhZ05hbWUgfSBmcm9tIFwiLi91dGlsaXRpZXMvbmFtZVwiO1xuaW1wb3J0IHsgZmlyc3QsIGF1Z21lbnQgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IE5PTkUsXG4gICAgICAgICBCTE9DSyxcbiAgICAgICAgIFdJRFRILFxuICAgICAgICAgU1RSSU5HLFxuICAgICAgICAgSEVJR0hULFxuICAgICAgICAgRElTUExBWSxcbiAgICAgICAgIERJU0FCTEVELFxuICAgICAgICAgRU1QVFlfU1RSSU5HLFxuICAgICAgICAgU1ZHX05BTUVTUEFDRV9VUkksXG4gICAgICAgICBERUZBVUxUX1BST1BFUlRJRVMsXG4gICAgICAgICBJR05PUkVEX1BST1BFUlRJRVMgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY2xhc3MgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yKSB7XG4gICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcblxuICAgICAgdGhpcy5kb21FbGVtZW50Ll9fZWxlbWVudF9fID0gdGhpczsgLy8vXG4gICAgfVxuICB9XG5cbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kb21FbGVtZW50O1xuICB9XG5cbiAgZ2V0T2Zmc2V0KCkge1xuICAgIGNvbnN0IHRvcCA9IHRoaXMuZG9tRWxlbWVudC5vZmZzZXRUb3AsICAvLy9cbiAgICAgICAgICBsZWZ0ID0gdGhpcy5kb21FbGVtZW50Lm9mZnNldExlZnQsICAvLy9cbiAgICAgICAgICBvZmZzZXQgPSBuZXcgT2Zmc2V0KHRvcCwgbGVmdCk7XG5cbiAgICByZXR1cm4gb2Zmc2V0O1xuICB9XG5cbiAgZ2V0Qm91bmRzKCkge1xuICAgIGNvbnN0IGJvdW5kaW5nQ2xpZW50UmVjdCA9IHRoaXMuZG9tRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICBib3VuZHMgPSBCb3VuZHMuZnJvbUJvdW5kaW5nQ2xpZW50UmVjdChib3VuZGluZ0NsaWVudFJlY3QpO1xuXG4gICAgcmV0dXJuIGJvdW5kcztcbiAgfVxuXG4gIGdldFdpZHRoKGluY2x1ZGVCb3JkZXIgPSB0cnVlKSB7XG4gICAgY29uc3Qgd2lkdGggPSBpbmNsdWRlQm9yZGVyID9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50Lm9mZnNldFdpZHRoIDpcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQuY2xpZW50V2lkdGg7XG5cbiAgICByZXR1cm4gd2lkdGg7XG4gIH1cblxuICBzZXRXaWR0aCh3aWR0aCkge1xuICAgIHdpZHRoID0gYCR7d2lkdGh9cHhgOyAvLy9cblxuICAgIHRoaXMuc3R5bGUoV0lEVEgsIHdpZHRoKTtcbiAgfVxuXG4gIGdldEhlaWdodChpbmNsdWRlQm9yZGVyID0gdHJ1ZSkge1xuICAgIGNvbnN0IGhlaWdodCA9IGluY2x1ZGVCb3JkZXIgP1xuICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50Lm9mZnNldEhlaWdodCA6XG4gICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5jbGllbnRIZWlnaHQ7XG5cbiAgICByZXR1cm4gaGVpZ2h0O1xuICB9XG5cbiAgc2V0SGVpZ2h0KGhlaWdodCkge1xuICAgIGhlaWdodCA9IGAke2hlaWdodH1weGA7IC8vL1xuXG4gICAgdGhpcy5zdHlsZShIRUlHSFQsIGhlaWdodCk7XG4gIH1cblxuICBoYXNBdHRyaWJ1dGUobmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50Lmhhc0F0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIGdldEF0dHJpYnV0ZShuYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuZ2V0QXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7IHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpOyB9XG5cbiAgY2xlYXJBdHRyaWJ1dGUobmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7IHRoaXMuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTsgfVxuXG4gIHJlbW92ZUF0dHJpYnV0ZShuYW1lKSB7IHRoaXMuY2xlYXJBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBzZXRDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTsgfVxuXG4gIGFkZENsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpOyB9XG5cbiAgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7IH1cblxuICB0b2dnbGVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lKTsgfVxuXG4gIGhhc0NsYXNzKGNsYXNzTmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpOyB9XG5cbiAgY2xlYXJDbGFzc2VzKCkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gRU1QVFlfU1RSSU5HOyB9XG5cbiAgcHJlcGVuZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5wcmVwZW5kKHRoaXMpOyB9XG5cbiAgYXBwZW5kVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LmFwcGVuZCh0aGlzKTsgfVxuXG4gIGFkZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5hZGQodGhpcyk7IH1cblxuICByZW1vdmVGcm9tKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5yZW1vdmUodGhpcyk7IH1cblxuICBpbnNlcnRCZWZvcmUoc2libGluZ0VsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01Ob2RlID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudC5wYXJlbnROb2RlLFxuICAgICAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHBhcmVudERPTU5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQpO1xuICB9XG5cbiAgaW5zZXJ0QWZ0ZXIoc2libGluZ0VsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01Ob2RlID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudC5wYXJlbnROb2RlLFxuICAgICAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHBhcmVudERPTU5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgc2libGluZ0RPTUVsZW1lbnQubmV4dFNpYmxpbmcpOyAgLy8vXG4gIH1cblxuICBwcmVwZW5kKGVsZW1lbnQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZWxlbWVudC5kb21FbGVtZW50LFxuICAgICAgICAgIGZpcnN0Q2hpbGRET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50LmZpcnN0Q2hpbGQ7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRvbUVsZW1lbnQsIGZpcnN0Q2hpbGRET01FbGVtZW50KTtcbiAgfVxuXG4gIGFwcGVuZChlbGVtZW50KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudDtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5pbnNlcnRCZWZvcmUoZG9tRWxlbWVudCwgbnVsbCk7IC8vL1xuICB9XG5cbiAgYWRkKGVsZW1lbnQpIHsgdGhpcy5hcHBlbmQoZWxlbWVudCk7IH1cblxuICByZW1vdmUoZWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBjb25zdCBkb21FbGVtZW50ID0gZWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlQ2hpbGQoZG9tRWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmUoKTtcbiAgICB9XG4gIH1cblxuICBtb3VudChlbGVtZW50KSB7XG4gICAgY29uc3QgZGVzY2VuZGFudEVsZW1lbnRzID0gZWxlbWVudC5nZXREZXNjZW5kYW50RWxlbWVudHMoKSxcbiAgICAgICAgICBlbGVtZW50cyA9IFtcbiAgICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgICAuLi5kZXNjZW5kYW50RWxlbWVudHNcbiAgICAgICAgICBdO1xuXG4gICAgdGhpcy5hZGQoZWxlbWVudCk7XG5cbiAgICBlbGVtZW50cy5yZXZlcnNlKCk7IC8vL1xuXG4gICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4gKGVsZW1lbnQuZGlkTW91bnQgJiYgZWxlbWVudC5kaWRNb3VudCgpKSk7ICAvLy9cbiAgfVxuXG4gIHVubW91bnQoZWxlbWVudCkge1xuICAgIGNvbnN0IGRlc2NlbmRhbnRFbGVtZW50cyA9IGVsZW1lbnQuZ2V0RGVzY2VuZGFudEVsZW1lbnRzKCksXG4gICAgICAgICAgZWxlbWVudHMgPSBbXG4gICAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgICAgLi4uZGVzY2VuZGFudEVsZW1lbnRzXG4gICAgICAgICAgXTtcblxuICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IChlbGVtZW50LndpbGxVbm1vdW50ICYmIGVsZW1lbnQud2lsbFVubW91bnQoKSkpOyAgLy8vXG5cbiAgICB0aGlzLnJlbW92ZShlbGVtZW50KTtcbiAgfVxuXG4gIHNob3coZGlzcGxheVN0eWxlID0gQkxPQ0spIHsgdGhpcy5kaXNwbGF5KGRpc3BsYXlTdHlsZSk7IH1cblxuICBoaWRlKCkgeyB0aGlzLnN0eWxlKERJU1BMQVksIE5PTkUpOyB9XG5cbiAgZGlzcGxheShkaXNwbGF5KSB7IHRoaXMuc3R5bGUoRElTUExBWSwgZGlzcGxheSk7IH1cblxuICBlbmFibGUoKSB7IHRoaXMuY2xlYXJBdHRyaWJ1dGUoRElTQUJMRUQpOyB9XG5cbiAgZGlzYWJsZSgpIHsgdGhpcy5zZXRBdHRyaWJ1dGUoRElTQUJMRUQsIERJU0FCTEVEKTsgfVxuXG4gIGlzRW5hYmxlZCgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpLFxuICAgICAgICAgIGVuYWJsZWQgPSAhZGlzYWJsZWQ7XG5cbiAgICByZXR1cm4gZW5hYmxlZDtcbiAgfVxuXG4gIGlzRGlzYWJsZWQoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmhhc0F0dHJpYnV0ZShESVNBQkxFRCk7XG5cbiAgICByZXR1cm4gZGlzYWJsZWQ7XG4gIH1cbiAgXG4gIGlzRGlzcGxheWVkKCkge1xuICAgIGNvbnN0IGRpc3BsYXkgPSB0aGlzLmNzcyhESVNQTEFZKSxcbiAgICAgICAgICBkaXNwbGF5ZWQgPSAoZGlzcGxheSAhPT0gTk9ORSk7XG4gICAgXG4gICAgcmV0dXJuIGRpc3BsYXllZDtcbiAgfVxuXG4gIGlzU2hvd2luZygpIHtcbiAgICBjb25zdCBkaXNwbGF5ZWQgPSB0aGlzLmlzRGlzcGxheWVkKCksXG4gICAgICAgICAgc2hvd2luZyA9IGRpc3BsYXllZDsgIC8vL1xuXG4gICAgcmV0dXJuIHNob3dpbmc7XG4gIH1cblxuICBpc0hpZGRlbigpIHtcbiAgICBjb25zdCBkaXNwbGF5ZWQgPSB0aGlzLmlzRGlzcGxheWVkKCksXG4gICAgICAgICAgaGlkZGVuID0gIWRpc3BsYXllZDtcblxuICAgIHJldHVybiBoaWRkZW47XG4gIH1cblxuICBzdHlsZShuYW1lLCB2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQuc3R5bGVbbmFtZV0gPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3R5bGUgPSB0aGlzLmRvbUVsZW1lbnQuc3R5bGVbbmFtZV07XG5cbiAgICAgIHJldHVybiBzdHlsZTtcbiAgICB9XG4gIH1cblxuICBodG1sKGh0bWwpIHtcbiAgICBpZiAoaHRtbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBpbm5lckhUTUwgPSB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIVE1MO1xuXG4gICAgICBodG1sID0gaW5uZXJIVE1MOyAvLy9cblxuICAgICAgcmV0dXJuIGh0bWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGlubmVySFRNTCA9IGh0bWw7IC8vL1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIVE1MID0gaW5uZXJIVE1MXG4gICAgfVxuICB9XG5cbiAgY3NzKGNzcykge1xuICAgIGlmIChjc3MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5kb21FbGVtZW50KSxcbiAgICAgICAgICAgIGNzcyA9IHt9O1xuXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY29tcHV0ZWRTdHlsZS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3QgZmlyc3RDb21wdXRlZFN0eWxlID0gZmlyc3RbY29tcHV0ZWRTdHlsZV0sXG4gICAgICAgICAgICAgIG5hbWUgPSBmaXJzdENvbXB1dGVkU3R5bGUsICAvLy9cbiAgICAgICAgICAgICAgdmFsdWUgPSBjb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUobmFtZSk7IC8vL1xuXG4gICAgICAgIGNzc1tuYW1lXSA9IHZhbHVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY3NzO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNzcyA9PT0gU1RSSU5HKSB7XG4gICAgICBsZXQgbmFtZSA9IGNzczsgLy8vXG5cbiAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZG9tRWxlbWVudCksXG4gICAgICAgICAgICB2YWx1ZSA9IGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTsgLy8vXG5cbiAgICAgIGNzcyA9IHZhbHVlOyAgLy8vXG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXMoY3NzKTsgLy8vXG5cbiAgICAgIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBjc3NbbmFtZV07XG5cbiAgICAgICAgdGhpcy5zdHlsZShuYW1lLCB2YWx1ZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgXG4gIGJsdXIoKSB7IHRoaXMuZG9tRWxlbWVudC5ibHVyKCk7IH1cblxuICBmb2N1cygpIHsgdGhpcy5kb21FbGVtZW50LmZvY3VzKCk7IH1cblxuICBoYXNGb2N1cygpIHtcbiAgICBjb25zdCBmb2N1cyA9IChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSB0aGlzLmRvbUVsZW1lbnQpOyAgLy8vXG5cbiAgICByZXR1cm4gZm9jdXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB7IHRhZ05hbWUgfSA9IENsYXNzLFxuICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50RnJvbVRhZ05hbWUoQ2xhc3MsIHRhZ05hbWUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyksXG4gICAgICAgICAgZGVmYXVsdFByb3BlcnRpZXMgPSBkZWZhdWx0UHJvcGVydGllc0Zyb21DbGFzcyhDbGFzcyksXG4gICAgICAgICAgaWdub3JlZFByb3BlcnRpZXMgPSBpZ25vcmVkUHJvcGVydGllc0Zyb21DbGFzcyhDbGFzcyk7XG5cbiAgICBlbGVtZW50LmFwcGx5UHJvcGVydGllcyhwcm9wZXJ0aWVzLCBkZWZhdWx0UHJvcGVydGllcywgaWdub3JlZFByb3BlcnRpZXMpO1xuXG4gICAgZWxlbWVudC5pbml0aWFsaXNlICYmIGVsZW1lbnQuaW5pdGlhbGlzZSgpOyAvLy9cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21UYWdOYW1lKHRhZ05hbWUsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IENsYXNzID0gRWxlbWVudCwgIC8vL1xuICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50RnJvbVRhZ05hbWUoQ2xhc3MsIHRhZ05hbWUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyksXG4gICAgICAgICAgZGVmYXVsdFByb3BlcnRpZXMgPSB7fSwgLy8vXG4gICAgICAgICAgaWdub3JlZFByb3BlcnRpZXMgPSBbXTsgLy8vXG5cbiAgICBlbGVtZW50LmFwcGx5UHJvcGVydGllcyhwcm9wZXJ0aWVzLCBkZWZhdWx0UHJvcGVydGllcywgaWdub3JlZFByb3BlcnRpZXMpO1xuXG4gICAgZWxlbWVudC5pbml0aWFsaXNlICYmIGVsZW1lbnQuaW5pdGlhbGlzZSgpOyAvLy9cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGpzeE1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBrZXlNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgY2xpY2tNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgc3RhdGVNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgZXZlbnRNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgbW91c2VNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgcmVzaXplTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIHNjcm9sbE1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBlbGVtZW50TWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgRWxlbWVudDtcblxuZnVuY3Rpb24gZWxlbWVudEZyb21UYWdOYW1lKENsYXNzLCB0YWdOYW1lLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgY29uc3Qgc2VsZWN0b3IgPSBudWxsLFxuICAgICAgICBlbGVtZW50ID0gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5jYWxsKENsYXNzLCBudWxsLCBzZWxlY3RvciwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSk7XG5cbiAgZWxlbWVudC5kb21FbGVtZW50ID0gaXNTVkdUYWdOYW1lKHRhZ05hbWUpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoU1ZHX05BTUVTUEFDRV9VUkksIHRhZ05hbWUpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG5cbiAgZWxlbWVudC5kb21FbGVtZW50Ll9fZWxlbWVudF9fID0gZWxlbWVudDsgLy8vXG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzLCBkZWZhdWx0UHJvcGVydGllcyA9IHt9KSB7XG4gIGlmIChDbGFzcy5oYXNPd25Qcm9wZXJ0eShERUZBVUxUX1BST1BFUlRJRVMpKSB7XG4gICAgZGVmYXVsdFByb3BlcnRpZXMgPSBjb21iaW5lKGRlZmF1bHRQcm9wZXJ0aWVzLCBDbGFzc1tERUZBVUxUX1BST1BFUlRJRVNdKTtcbiAgfVxuXG4gIGNvbnN0IHN1cGVyQ2xhc3MgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ2xhc3MpO1xuXG4gIGlmIChzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgZGVmYXVsdFByb3BlcnRpZXMgPSBkZWZhdWx0UHJvcGVydGllc0Zyb21DbGFzcyhzdXBlckNsYXNzLCBkZWZhdWx0UHJvcGVydGllcyk7XG4gIH1cblxuICByZXR1cm4gZGVmYXVsdFByb3BlcnRpZXM7XG59XG5cbmZ1bmN0aW9uIGlnbm9yZWRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzLCBpZ25vcmVkUHJvcGVydGllcyA9IFtdKSB7XG4gIGlmIChDbGFzcy5oYXNPd25Qcm9wZXJ0eShJR05PUkVEX1BST1BFUlRJRVMpKSB7XG4gICAgaWdub3JlZFByb3BlcnRpZXMgPSBhdWdtZW50KGlnbm9yZWRQcm9wZXJ0aWVzLCBDbGFzc1tJR05PUkVEX1BST1BFUlRJRVNdLCAoaWdub3JlZFByb3BlcnR5KSA9PiAhaWdub3JlZFByb3BlcnRpZXMuaW5jbHVkZXMoaWdub3JlZFByb3BlcnR5KSk7XG4gIH1cblxuICBjb25zdCBzdXBlckNsYXNzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKENsYXNzKTtcblxuICBpZiAoc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIGlnbm9yZWRQcm9wZXJ0aWVzID0gaWdub3JlZFByb3BlcnRpZXNGcm9tQ2xhc3Moc3VwZXJDbGFzcywgaWdub3JlZFByb3BlcnRpZXMpO1xuICB9XG5cbiAgcmV0dXJuIGlnbm9yZWRQcm9wZXJ0aWVzO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi9lbGVtZW50XCI7XG5cbmltcG9ydCB7IGZsYXR0ZW4gfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IFNUUklORywgRlVOQ1RJT04gfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHJlbW92ZUZhbHNleUVsZW1lbnRzLCByZXBsYWNlU3RyaW5nc1dpdGhUZXh0RWxlbWVudHMgfSBmcm9tIFwiLi91dGlsaXRpZXMvZWxlbWVudHNcIjtcblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudChmaXJzdEFyZ3VtZW50LCBwcm9wZXJ0aWVzLCAuLi5jaGlsZEVsZW1lbnRzKSB7XG4gIGxldCBlbGVtZW50ID0gbnVsbDtcblxuICBpZiAoZmlyc3RBcmd1bWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY2hpbGRFbGVtZW50cyA9IHNhbml0aXNlQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKTtcblxuICAgIHByb3BlcnRpZXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIGNoaWxkRWxlbWVudHNcbiAgICB9LCBwcm9wZXJ0aWVzKTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmIChpc1N1YmNsYXNzT2YoZmlyc3RBcmd1bWVudCwgRWxlbWVudCkpIHtcbiAgICAgIGNvbnN0IENsYXNzID0gZmlyc3RBcmd1bWVudDsgIC8vL1xuXG4gICAgICBlbGVtZW50ID0gQ2xhc3MuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSBTVFJJTkcpIHtcbiAgICAgIGNvbnN0IHRhZ05hbWUgPSBmaXJzdEFyZ3VtZW50OyAvLy9cblxuICAgICAgZWxlbWVudCA9IEVsZW1lbnQuZnJvbVRhZ05hbWUodGFnTmFtZSwgcHJvcGVydGllcyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gRlVOQ1RJT04pIHtcbiAgICAgIGNvbnN0IGVsZW1lbnRGdW5jdGlvbiA9IGZpcnN0QXJndW1lbnQ7ICAvLy9cblxuICAgICAgZWxlbWVudCA9IGVsZW1lbnRGdW5jdGlvbihwcm9wZXJ0aWVzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuY29uc3QgUmVhY3QgPSB7XG4gIGNyZWF0ZUVsZW1lbnRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0O1xuXG5mdW5jdGlvbiBzYW5pdGlzZUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cykge1xuICBjaGlsZEVsZW1lbnRzID0gZmxhdHRlbihjaGlsZEVsZW1lbnRzKTtcblxuICBjaGlsZEVsZW1lbnRzID0gcmVtb3ZlRmFsc2V5RWxlbWVudHMoY2hpbGRFbGVtZW50cyk7XG5cbiAgY2hpbGRFbGVtZW50cyA9IHJlcGxhY2VTdHJpbmdzV2l0aFRleHRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKTtcblxuICByZXR1cm4gY2hpbGRFbGVtZW50cztcbn1cblxuXG5mdW5jdGlvbiBpc1N1YmNsYXNzT2YoYXJndW1lbnQsIENsYXNzKSB7XG4gIGNvbnN0IHN1YmNsYXNzT2YgPSAoYXJndW1lbnQucHJvdG90eXBlIGluc3RhbmNlb2YgQ2xhc3MpO1xuXG4gIHJldHVybiBzdWJjbGFzc09mO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBCT0RZIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb2R5IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yID0gQk9EWSkge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJib2R5XCI7XG59XG4iLCAiUmVhY3QuY3JlYXRlRWxlbWVudCIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGluayBleHRlbmRzIEVsZW1lbnQge1xuICBnZXRIUmVmKCkgeyByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpOyB9XG5cbiAgc2V0SFJlZihocmVmKSB7IHJldHVybiB0aGlzLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgaHJlZik7IH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiYVwiO1xufVxuIiwgIlJlYWN0LmNyZWF0ZUVsZW1lbnQiLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENIQU5HRV9FVkVOVF9UWVBFIH0gZnJvbSBcIi4uL2V2ZW50VHlwZXNcIjtcblxuZnVuY3Rpb24gb25DaGFuZ2UoY2hhbmdlSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uKENIQU5HRV9FVkVOVF9UWVBFLCBjaGFuZ2VIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvZmZDaGFuZ2UoY2hhbmdlSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZihDSEFOR0VfRVZFTlRfVFlQRSwgY2hhbmdlSGFuZGxlciwgZWxlbWVudCk7IH1cblxuY29uc3QgY2hhbmdlTWl4aW5zID0ge1xuICBvbkNoYW5nZSxcbiAgb2ZmQ2hhbmdlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjaGFuZ2VNaXhpbnM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuL2VsZW1lbnRcIjtcbmltcG9ydCBjaGFuZ2VNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2NoYW5nZVwiO1xuXG5pbXBvcnQgeyBDSEFOR0VfRVZFTlRfVFlQRSB9IGZyb20gXCIuL2V2ZW50VHlwZXNcIjtcblxuY2xhc3MgSW5wdXRFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIG9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vbihDSEFOR0VfRVZFTlRfVFlQRSwgY2hhbmdlSGFuZGxlciwgZWxlbWVudCk7IH1cblxuICBvZmZDaGFuZ2UoY2hhbmdlSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZihDSEFOR0VfRVZFTlRfVFlQRSwgY2hhbmdlSGFuZGxlciwgZWxlbWVudCk7IH1cblxuICBvblJlc2l6ZShyZXNpemVIYW5kbGVyLCBlbGVtZW50KSB7fSAvLy9cblxuICBvZmZSZXNpemUocmVzaXplSGFuZGxlciwgZWxlbWVudCkge30gIC8vL1xuXG4gIGdldFZhbHVlKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnZhbHVlOyB9XG5cbiAgZ2V0U2VsZWN0aW9uU3RhcnQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQ7IH1cblxuICBnZXRTZWxlY3Rpb25FbmQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0aW9uRW5kOyB9XG4gIFxuICBpc1JlYWRPbmx5KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnJlYWRPbmx5OyB9XG5cbiAgc2V0VmFsdWUodmFsdWUpIHsgdGhpcy5kb21FbGVtZW50LnZhbHVlID0gdmFsdWU7IH1cblxuICBzZXRTZWxlY3Rpb25TdGFydChzZWxlY3Rpb25TdGFydCkgeyB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgPSBzZWxlY3Rpb25TdGFydDsgfVxuXG4gIHNldFNlbGVjdGlvbkVuZChzZWxlY3Rpb25FbmQpIHsgdGhpcy5kb21FbGVtZW50LnNlbGVjdGlvbkVuZCA9IHNlbGVjdGlvbkVuZDsgfVxuXG4gIHNldFJlYWRPbmx5KHJlYWRPbmx5KSB7IHRoaXMuZG9tRWxlbWVudC5yZWFkT25seSA9IHJlYWRPbmx5OyB9XG5cbiAgc2VsZWN0KCkgeyB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0KCk7IH1cbn1cblxuT2JqZWN0LmFzc2lnbihJbnB1dEVsZW1lbnQucHJvdG90eXBlLCBjaGFuZ2VNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBJbnB1dEVsZW1lbnQ7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBJbnB1dEVsZW1lbnQgZnJvbSBcIi4uL2lucHV0RWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dCBleHRlbmRzIElucHV0RWxlbWVudCB7XG4gIHN0YXRpYyB0YWdOYW1lID0gXCJpbnB1dFwiO1xufVxuIiwgIlJlYWN0LmNyZWF0ZUVsZW1lbnQiLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIEVsZW1lbnQge1xuICBzdGF0aWMgdGFnTmFtZSA9IFwiYnV0dG9uXCI7XG59XG4iLCAiUmVhY3QuY3JlYXRlRWxlbWVudCIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcbmltcG9ydCBjaGFuZ2VNaXhpbnMgZnJvbSBcIi4uL21peGlucy9jaGFuZ2VcIjtcblxuY2xhc3MgU2VsZWN0IGV4dGVuZHMgRWxlbWVudCB7XG4gIG9uUmVzaXplKHJlc2l6ZUhhbmRsZXIsIGVsZW1lbnQpIHt9IC8vL1xuXG4gIG9mZlJlc2l6ZShyZXNpemVIYW5kbGVyLCBlbGVtZW50KSB7fSAgLy8vXG5cbiAgZ2V0VmFsdWUoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQudmFsdWU7IH1cblxuICBzZXRWYWx1ZSh2YWx1ZSkgeyB0aGlzLmRvbUVsZW1lbnQudmFsdWUgPSB2YWx1ZTsgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJzZWxlY3RcIjtcbn1cblxuT2JqZWN0LmFzc2lnbihTZWxlY3QucHJvdG90eXBlLCBjaGFuZ2VNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3Q7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgY2hhbmdlTWl4aW5zIGZyb20gXCIuLi9taXhpbnMvY2hhbmdlXCI7XG5cbmNsYXNzIENoZWNrYm94IGV4dGVuZHMgRWxlbWVudCB7XG4gIGlzQ2hlY2tlZCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jaGVja2VkOyB9XG5cbiAgY2hlY2soY2hlY2tlZCA9IHRydWUpIHsgdGhpcy5kb21FbGVtZW50LmNoZWNrZWQgPSBjaGVja2VkOyB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImlucHV0XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIHR5cGU6IFwiY2hlY2tib3hcIlxuICB9O1xufVxuXG5PYmplY3QuYXNzaWduKENoZWNrYm94LnByb3RvdHlwZSwgY2hhbmdlTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tib3g7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBJbnB1dEVsZW1lbnQgZnJvbSBcIi4uL2lucHV0RWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0YXJlYSBleHRlbmRzIElucHV0RWxlbWVudCB7XG4gIHN0YXRpYyB0YWdOYW1lID0gXCJ0ZXh0YXJlYVwiO1xufVxuIiwgIlJlYWN0LmNyZWF0ZUVsZW1lbnQiLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG9uUmVzaXplLCBvZmZSZXNpemUgfSBmcm9tIFwiLi4vbWl4aW5zL3Jlc2l6ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG9uUmVzaXplLFxuICBvZmZSZXNpemVcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBrZXlNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2tleVwiO1xuaW1wb3J0IGV2ZW50TWl4aW5zIGZyb20gXCIuL21peGlucy9ldmVudFwiO1xuaW1wb3J0IG1vdXNlTWl4aW5zIGZyb20gXCIuL21peGlucy9tb3VzZVwiO1xuaW1wb3J0IGNsaWNrTWl4aW5zIGZyb20gXCIuL21peGlucy9jbGlja1wiO1xuaW1wb3J0IHdpbmRvd01peGlucyBmcm9tIFwiLi9taXhpbnMvd2luZG93XCI7XG5cbmltcG9ydCB7IFVOREVGSU5FRCB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5jbGFzcyBXaW5kb3cge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSB3aW5kb3c7IC8vL1xuICB9XG5cbiAgYXNzaWduKC4uLnNvdXJjZXMpIHtcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzLmRvbUVsZW1lbnQ7IC8vL1xuXG4gICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIC4uLnNvdXJjZXMpO1xuICB9XG5cbiAgYWRkUmVzaXplT2JqZWN0KCkge30gLy8vXG5cbiAgcmVtb3ZlUmVzaXplT2JqZWN0KCkge30gLy8vXG5cbiAgZ2V0V2lkdGgoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaW5uZXJXaWR0aDsgfSAvLy9cbiAgXG4gIGdldEhlaWdodCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5pbm5lckhlaWdodDsgfSAvLy9cblxuICBnZXRTY3JvbGxUb3AoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQucGFnZVlPZmZzZXQ7IH0gIC8vL1xuXG4gIGdldFNjcm9sbExlZnQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQucGFnZVhPZmZzZXQ7IH0gLy8vXG59XG5cbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwga2V5TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwgZXZlbnRNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihXaW5kb3cucHJvdG90eXBlLCBtb3VzZU1peGlucyk7XG5PYmplY3QuYXNzaWduKFdpbmRvdy5wcm90b3R5cGUsIGNsaWNrTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwgd2luZG93TWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgKHR5cGVvZiB3aW5kb3cgPT09IFVOREVGSU5FRCkgPyB1bmRlZmluZWQgOiBuZXcgV2luZG93KCk7ICAvLy9cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IExFRlRfTU9VU0VfQlVUVE9OID0gMDtcbmV4cG9ydCBjb25zdCBSSUdIVF9NT1VTRV9CVVRUT04gPSAyO1xuZXhwb3J0IGNvbnN0IE1JRERMRV9NT1VTRV9CVVRUT04gPSAxO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIExFRlRfTU9VU0VfQlVUVE9OLFxuICBSSUdIVF9NT1VTRV9CVVRUT04sXG4gIE1JRERMRV9NT1VTRV9CVVRUT05cbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBrZXlNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2tleVwiO1xuaW1wb3J0IGNsaWNrTWl4aW5zIGZyb20gXCIuL21peGlucy9jbGlja1wiO1xuaW1wb3J0IGV2ZW50TWl4aW5zIGZyb20gXCIuL21peGlucy9ldmVudFwiO1xuaW1wb3J0IG1vdXNlTWl4aW5zIGZyb20gXCIuL21peGlucy9tb3VzZVwiO1xuXG5pbXBvcnQgeyBVTkRFRklORUQgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY2xhc3MgRG9jdW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb2N1bWVudDsgLy8vXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKHR5cGVvZiBkb2N1bWVudCA9PT0gVU5ERUZJTkVEKSA/IHVuZGVmaW5lZCA6IG5ldyBEb2N1bWVudCgpOyAgLy8vXG5cbk9iamVjdC5hc3NpZ24oRG9jdW1lbnQucHJvdG90eXBlLCBrZXlNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihEb2N1bWVudC5wcm90b3R5cGUsIGNsaWNrTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRG9jdW1lbnQucHJvdG90eXBlLCBldmVudE1peGlucyk7XG5PYmplY3QuYXNzaWduKERvY3VtZW50LnByb3RvdHlwZSwgbW91c2VNaXhpbnMpO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIFJlYWN0IH0gZnJvbSBcIi4vcmVhY3RcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQm91bmRzIH0gZnJvbSBcIi4vYm91bmRzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE9mZnNldCB9IGZyb20gXCIuL29mZnNldFwiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIEJvZHkgfSBmcm9tIFwiLi9lbGVtZW50L2JvZHlcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTGluayB9IGZyb20gXCIuL2VsZW1lbnQvbGlua1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBJbnB1dCB9IGZyb20gXCIuL2lucHV0RWxlbWVudC9pbnB1dFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBCdXR0b24gfSBmcm9tIFwiLi9lbGVtZW50L2J1dHRvblwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZWxlY3QgfSBmcm9tIFwiLi9lbGVtZW50L3NlbGVjdFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBFbGVtZW50IH0gZnJvbSBcIi4vZWxlbWVudFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDaGVja2JveCB9IGZyb20gXCIuL2VsZW1lbnQvY2hlY2tib3hcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVGV4dGFyZWEgfSBmcm9tIFwiLi9pbnB1dEVsZW1lbnQvdGV4dGFyZWFcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVGV4dEVsZW1lbnQgfSBmcm9tIFwiLi90ZXh0RWxlbWVudFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBJbnB1dEVsZW1lbnQgfSBmcm9tIFwiLi9pbnB1dEVsZW1lbnRcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aW5kb3cgfSBmcm9tIFwiLi93aW5kb3dcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYnV0dG9ucyB9IGZyb20gXCIuL2J1dHRvbnNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZG9jdW1lbnQgfSBmcm9tIFwiLi9kb2N1bWVudFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBldmVudFR5cGVzIH0gZnJvbSBcIi4vZXZlbnRUeXBlc1wiO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCwgd2luZG93IH0gZnJvbSBcImVhc3lcIjtcblxud2luZG93LmFzc2lnbih7XG4gIFJlYWN0XG59KTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFwiLi9qdXh0YXBvc2VcIjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgY29udHJvbGxlciA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBjb250cm9sbGVyO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgRU1QVFlfU1RSSU5HID0gXCJcIjtcbmV4cG9ydCBjb25zdCBUSU1FT1VUX0RFTEFZID0gMTAwMDtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgSW5wdXRFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXNzd29yZElucHV0IGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgZ2V0UGFzc3dvcmQoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAgcGFzc3dvcmQgPSB2YWx1ZTsgLy8vXG5cbiAgICByZXR1cm4gcGFzc3dvcmQ7XG4gIH1cblxuICBjbGVhclBhc3N3b3JkKCkge1xuICAgIGNvbnN0IHBhc3N3b3JkID0gRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIHZhbHVlID0gcGFzc3dvcmQ7IC8vL1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuXHQgIGNvbnN0IGdldFBhc3N3b3JkID0gdGhpcy5nZXRQYXNzd29yZC5iaW5kKHRoaXMpLFxuXHRcdFx0XHQgIGNsZWFyUGFzc3dvcmQgPSB0aGlzLmNsZWFyUGFzc3dvcmQuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0UGFzc3dvcmQsXG4gICAgICBjbGVhclBhc3N3b3JkXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiaW5wdXRcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgdHlwZTogXCJwYXNzd29yZFwiXG4gIH07XG59XG4iLCAiUmVhY3QuY3JlYXRlRWxlbWVudCIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORywgVElNRU9VVF9ERUxBWSB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmFsaWRhdGlvbkVycm9yUGFyYWdyYXBoIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yT3JEb21FbGVtZW50LCB0aW1lb3V0KSB7XG4gICAgc3VwZXIoc2VsZWN0b3JPckRvbUVsZW1lbnQpO1xuXG4gICAgdGhpcy50aW1lb3V0ID0gdGltZW91dDtcbiAgfVxuXG4gIGNsZWFyVmFsaWRhdGlvbkVycm9yKCkge1xuICAgIGNvbnN0IGh0bWwgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICB0aGlzLmh0bWwoaHRtbCk7XG4gIH1cblxuICBzaG93VmFsaWRhdGlvbkVycm9yKHZhbGlkYXRpb25FcnJvcikge1xuICAgIGNvbnN0IGh0bWwgPSB2YWxpZGF0aW9uRXJyb3I7IC8vL1xuXG4gICAgdGhpcy5odG1sKGh0bWwpO1xuXG4gICAgaWYgKHRoaXMudGltZW91dCAhPT0gbnVsbCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgfVxuXG4gICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnRpbWVtb3V0ID0gbnVsbDtcblxuICAgICAgdGhpcy5jbGVhclZhbGlkYXRpb25FcnJvcigpO1xuICAgIH0sIFRJTUVPVVRfREVMQVkpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICByZXR1cm4gKHtcbiAgICAgIHNob3dWYWxpZGF0aW9uRXJyb3I6IHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvci5iaW5kKHRoaXMpXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwicFwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmFsaWRhdGlvbiBlcnJvclwiXG4gIH07XG5cbiAgc3RhdGljIGZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGNvbnN0IHRpbWVvdXQgPSBudWxsLFxuICAgICAgICAgIHZhbGlkYXRpb25FcnJvclBhcmFncmFwaCA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCB0aW1lb3V0KTtcblxuICAgIHJldHVybiB2YWxpZGF0aW9uRXJyb3JQYXJhZ3JhcGg7XG4gIH1cbn1cbiIsICJSZWFjdC5jcmVhdGVFbGVtZW50IiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50LCBCdXR0b24gfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgY29udHJvbGxlciBmcm9tIFwiLi4vLi4vY29udHJvbGxlclwiO1xuaW1wb3J0IFBhc3N3b3JkSW5wdXQgZnJvbSBcIi4uL2lucHV0L3Bhc3N3b3JkXCI7XG5pbXBvcnQgVmFsaWRhdGlvbkVycm9yUGFyYWdyYXBoIGZyb20gXCIuLi9wYXJhZ3JhcGgvdmFsaWRhdGlvbkVycm9yXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFzc3dvcmRGb3JtIGV4dGVuZHMgRWxlbWVudCB7XG4gIHZhbGlkYXRlQW5kU3VibWl0Rm9ybSgpIHtcbiAgICBjb25zdCBwYXNzd29yZFZhbGlkID0gdGhpcy52YWxpZGF0ZUZvcm0oKTtcblxuICAgIGlmICghcGFzc3dvcmRWYWxpZCkge1xuICAgICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9yKFwiVGhlIHBhc3N3b3JkIGlzIGludmFsaWRcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3VibWl0Rm9ybSgpO1xuICAgIH1cbiAgfVxuXG4gIHZhbGlkYXRlRm9ybSgpIHtcbiAgICBjb25zdCBwYXNzd29yZCA9IHRoaXMuZ2V0UGFzc3dvcmQoKSxcbiAgICAgICAgICBwYXNzd29yZFZhbGlkID0gaXNQYXNzd29yZFZhbGlkKHBhc3N3b3JkKTtcblxuICAgIHJldHVybiBwYXNzd29yZFZhbGlkO1xuICB9XG5cbiAgc3VibWl0Rm9ybSgpIHtcbiAgICBjb25zdCBwYXNzd29yZCA9IHRoaXMuZ2V0UGFzc3dvcmQoKTtcblxuICAgIGNvbnRyb2xsZXIuc2V0UGFzc3dvcmQocGFzc3dvcmQpO1xuXG4gICAgdGhpcy5jbGVhclBhc3N3b3JkKCk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybihbXG5cbiAgICAgIDxQYXNzd29yZElucHV0IC8+LFxuICAgICAgPFZhbGlkYXRpb25FcnJvclBhcmFncmFwaCAvPixcbiAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50LCBlbGVtZW50KSA9PiB7XG5cbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0ZUFuZFN1Ym1pdEZvcm0oKTtcblxuICAgICAgICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICBTdWJtaXRcbiAgICAgIDwvQnV0dG9uPlxuXG4gICAgXSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImZvcm1cIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInBhc3N3b3JkXCJcbiAgfTtcbn1cblxuZnVuY3Rpb24gaXNQYXNzd29yZFZhbGlkKHBhc3N3b3JkKSB7XG4gIGNvbnN0IHBhc3N3b3JkVmFsaWQgPSAocGFzc3dvcmQgIT09IEVNUFRZX1NUUklORyk7XG5cbiAgcmV0dXJuIHBhc3N3b3JkVmFsaWQ7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXNzYWdlUGFyYWdyYXBoIGV4dGVuZHMgRWxlbWVudCB7XG4gIHNob3dNZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICBjb25zdCBodG1sID0gbWVzc2FnZTsgLy8vXG5cbiAgICB0aGlzLmh0bWwoaHRtbCk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuXHQgIGNvbnN0IHNob3dNZXNzYWdlID0gdGhpcy5zaG93TWVzc2FnZS5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBzaG93TWVzc2FnZVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcInBcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcIm1lc3NhZ2VcIlxuICB9O1xufVxuIiwgIlJlYWN0LmNyZWF0ZUVsZW1lbnQiLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgY29udHJvbGxlciBmcm9tIFwiLi4vLi4vY29udHJvbGxlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNldFBhc3N3b3JkQnV0dG9uIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNsaWNrSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnRyb2xsZXIucmVzZXRQYXNzd29yZCgpO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgdGhpcy5vbkNsaWNrKHRoaXMuY2xpY2tIYW5kbGVyLCB0aGlzKTtcbiAgfVxuXG4gIHdpbGxNb3VudCgpIHtcbiAgICB0aGlzLm9mZkNsaWNrKHRoaXMuY2xpY2tIYW5kbGVyLCB0aGlzKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIFwiUmVzZXQgcGFzc3dvcmRcIjtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJidXR0b25cIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInJlc2V0LXBhc3N3b3JkXCJcbiAgfTtcbn1cbiIsICJSZWFjdC5jcmVhdGVFbGVtZW50IiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IFBhc3N3b3JkRm9ybSBmcm9tIFwiLi92aWV3L2Zvcm0vcGFzc3dvcmRcIjtcbmltcG9ydCBNZXNzYWdlUGFyYWdyYXBoIGZyb20gXCIuL3ZpZXcvcGFyYWdyYXBoL21lc3NhZ2VcIjtcbmltcG9ydCBSZXNldFBhc3N3b3JkQnV0dG9uIGZyb20gXCIuL3ZpZXcvYnV0dG9uL3Jlc2V0UGFzc3dvcmRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybihbXG5cbiAgICAgIDxQYXNzd29yZEZvcm0vPixcbiAgICAgIDxSZXNldFBhc3N3b3JkQnV0dG9uLz4sXG4gICAgICA8TWVzc2FnZVBhcmFncmFwaC8+XG5cbiAgICBdKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cbiIsICJSZWFjdC5jcmVhdGVFbGVtZW50IiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RlbCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucGFzc3dvcmQgPSBudWxsO1xuICB9XG5cbiAgc2V0UGFzc3dvcmQocGFzc3dvcmQpIHtcbiAgICB0aGlzLnBhc3N3b3JkID0gcGFzc3dvcmQ7XG4gIH1cblxuICByZXNldFBhc3N3b3JkKCkge1xuICAgIHRoaXMucGFzc3dvcmQgPSBudWxsO1xuICB9XG59XG4iLCAiUmVhY3QuY3JlYXRlRWxlbWVudCIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFwiLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgeyBCb2R5IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IFZpZXcgZnJvbSBcIi4vbXZjQXBwbGljYXRpb24vdmlld1wiO1xuaW1wb3J0IE1vZGVsIGZyb20gXCIuL212Y0FwcGxpY2F0aW9uL21vZGVsXCI7XG5pbXBvcnQgY29udHJvbGxlciBmcm9tIFwiLi9tdmNBcHBsaWNhdGlvbi9jb250cm9sbGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG12Y0FwcGxpY2F0aW9uKCkge1xuICBjb25zdCBtb2RlbCA9IG5ldyBNb2RlbCgpLFxuICAgICAgICB2aWV3ID1cblxuICAgICAgICAgIDxWaWV3Lz5cblxuICAgICAgICA7XG5cbiAgT2JqZWN0LmFzc2lnbihjb250cm9sbGVyLCB7XG4gICAgc2V0UGFzc3dvcmQsXG4gICAgcmVzZXRQYXNzd29yZFxuICB9KTtcblxuICBjb25zdCBib2R5ID0gbmV3IEJvZHkoKTtcblxuICBib2R5Lm1vdW50KHZpZXcpO1xuXG4gIGZ1bmN0aW9uIHNldFBhc3N3b3JkKHBhc3N3b3JkKSB7XG4gICAgbW9kZWwuc2V0UGFzc3dvcmQocGFzc3dvcmQpO1xuXG4gICAgdmlldy5zaG93TWVzc2FnZShcIlRoZSBwYXNzd29yZCBoYXMgYmVlbiBzZXQuXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRQYXNzd29yZCgpIHtcbiAgICBtb2RlbC5yZXNldFBhc3N3b3JkKCk7XG5cbiAgICB2aWV3LnNob3dNZXNzYWdlKFwiVGhlIHBhc3N3b3JkIGhhcyBiZWVuIHJlc2V0LlwiKTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCIuLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCB7IEJvZHkgfSBmcm9tIFwiZWFzeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaW1wbGVBcHBsaWNhdGlvbigpIHtcbiAgY29uc3QgYm9keSA9IG5ldyBCb2R5KCk7XG5cbiAgYm9keS5tb3VudChcblxuICAgIDxwPlxuICAgICAgQSBzaW1wbGUgYXBwbGljYXRpb24uXG4gICAgPC9wPlxuXG4gICk7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGRlZmF1bHQgYXMgbXZjQXBwbGljYXRpb24gfSBmcm9tIFwiLi9leGFtcGxlL212Y0FwcGxpY2F0aW9uXCI7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIHNpbXBsZUFwcGxpY2F0aW9uIH0gZnJvbSBcIi4vZXhhbXBsZS9zaW1wbGVBcHBsaWNhdGlvblwiO1xuXG5PYmplY3QuYXNzaWduKHdpbmRvdywge1xuICBtdmNBcHBsaWNhdGlvbixcbiAgc2ltcGxlQXBwbGljYXRpb25cbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7OztBQUFBOzs7Ozs7OztlQUVxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFOLFFBQU0sU0FBTiwyQkFBQTt1QkFDRCxLQUFLLE1BQUk7OEJBREY7QUFFakIsYUFBSyxNQUFNO0FBQ1gsYUFBSyxPQUFPOzttQkFISyxTQUFBOztVQU1uQixLQUFBO2lCQUFBLGtCQUFTO0FBQ1AsbUJBQU8sS0FBSzs7OztVQUdkLEtBQUE7aUJBQUEsbUJBQVU7QUFDUixtQkFBTyxLQUFLOzs7O2FBWEs7Ozs7O0FFRnJCOzs7Ozs7OztlQUVxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFOLFFBQU0sU0FBTiwyQkFBQTt1QkFDRCxLQUFLLE1BQU0sT0FBTyxRQUFNOzhCQURqQjtBQUVqQixhQUFLLE1BQU07QUFDWCxhQUFLLE9BQU87QUFDWixhQUFLLFFBQVE7QUFDYixhQUFLLFNBQVM7O21CQUxHLFNBQUE7O1VBUW5CLEtBQUE7aUJBQUEsa0JBQVM7QUFDUCxtQkFBTyxLQUFLOzs7O1VBR2QsS0FBQTtpQkFBQSxtQkFBVTtBQUNSLG1CQUFPLEtBQUs7Ozs7VUFHZCxLQUFBO2lCQUFBLG9CQUFXO0FBQ1QsbUJBQU8sS0FBSzs7OztVQUdkLEtBQUE7aUJBQUEscUJBQVk7QUFDVixtQkFBTyxLQUFLOzs7O1VBR2QsS0FBQTtpQkFBQSxvQkFBVztBQUNULGdCQUFNLFFBQVMsS0FBSyxRQUFRLEtBQUs7QUFFakMsbUJBQU87Ozs7VUFHVCxLQUFBO2lCQUFBLHFCQUFZO0FBQ1YsZ0JBQU0sU0FBVSxLQUFLLFNBQVMsS0FBSztBQUVuQyxtQkFBTzs7OztVQUdULEtBQUE7aUJBQUEsZ0JBQU8sS0FBSztBQUNWLGlCQUFLLE1BQU07Ozs7VUFHYixLQUFBO2lCQUFBLGlCQUFRLE1BQU07QUFDWixpQkFBSyxPQUFP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
