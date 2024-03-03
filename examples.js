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
    function _class_call_check(instance, Constructor) {
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
    function _create_class(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var Offset = /* @__PURE__ */ function() {
      function Offset2(top, left) {
        _class_call_check(this, Offset2);
        this.top = top;
        this.left = left;
      }
      _create_class(Offset2, [
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
    function _class_call_check(instance, Constructor) {
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
    function _create_class(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var Bounds = /* @__PURE__ */ function() {
      function Bounds2(top, left, right, bottom) {
        _class_call_check(this, Bounds2);
        this.top = top;
        this.left = left;
        this.right = right;
        this.bottom = bottom;
      }
      _create_class(Bounds2, [
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
      ABOUT_BLANK: function() {
        return ABOUT_BLANK;
      },
      BLOCK: function() {
        return BLOCK;
      },
      BODY: function() {
        return BODY;
      },
      BOOLEAN: function() {
        return BOOLEAN;
      },
      CLASS: function() {
        return CLASS;
      },
      CLASS_NAME: function() {
        return CLASS_NAME;
      },
      DASH: function() {
        return DASH;
      },
      DEFAULT_PROPERTIES: function() {
        return DEFAULT_PROPERTIES;
      },
      DISABLED: function() {
        return DISABLED;
      },
      DISPLAY: function() {
        return DISPLAY;
      },
      EMPTY_STRING: function() {
        return EMPTY_STRING;
      },
      FOR: function() {
        return FOR;
      },
      FUNCTION: function() {
        return FUNCTION;
      },
      HEIGHT: function() {
        return HEIGHT;
      },
      HTML_FOR: function() {
        return HTML_FOR;
      },
      IGNORED_PROPERTIES: function() {
        return IGNORED_PROPERTIES;
      },
      NONE: function() {
        return NONE;
      },
      OBJECT: function() {
        return OBJECT;
      },
      SPACE: function() {
        return SPACE;
      },
      STRING: function() {
        return STRING;
      },
      SVG_NAMESPACE_URI: function() {
        return SVG_NAMESPACE_URI;
      },
      UNDEFINED: function() {
        return UNDEFINED;
      },
      WIDTH: function() {
        return WIDTH;
      },
      WILDCARD: function() {
        return WILDCARD;
      }
    });
    var FOR = "for";
    var BODY = "body";
    var NONE = "none";
    var DASH = "-";
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
    function _define_property(obj, key, value) {
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
    function _object_spread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
          ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
          }));
        }
        ownKeys.forEach(function(key) {
          _define_property(target, key, source[key]);
        });
      }
      return target;
    }
    function _type_of(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    }
    function combine(target) {
      var source = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      target = _object_spread({}, target);
      var names = Object.keys(source);
      names.forEach(function(name) {
        var targetValue = target[name], sourceValue = source[name], targetHasOwnProperty = target.hasOwnProperty(name);
        target[name] = targetHasOwnProperty ? combineValues(targetValue, sourceValue) : sourceValue;
      });
      return target;
    }
    function prune(target) {
      var names = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
      target = _object_spread({}, target);
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
      var valueBoolean = (typeof value === "undefined" ? "undefined" : _type_of(value)) === _constants.BOOLEAN;
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
      augment: function() {
        return augment;
      },
      first: function() {
        return first;
      },
      flatten: function() {
        return flatten;
      },
      guarantee: function() {
        return guarantee;
      },
      push: function() {
        return push;
      }
    });
    function _array_like_to_array(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++)
        arr2[i] = arr[i];
      return arr2;
    }
    function _array_without_holes(arr) {
      if (Array.isArray(arr))
        return _array_like_to_array(arr);
    }
    function _instanceof(left, right) {
      if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
      } else {
        return left instanceof right;
      }
    }
    function _iterable_to_array(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    function _non_iterable_spread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _to_consumable_array(arr) {
      return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
    }
    function _unsupported_iterable_to_array(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _array_like_to_array(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(n);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _array_like_to_array(o, minLen);
    }
    function first(array) {
      return array[0];
    }
    function push(array1, array2) {
      Array.prototype.push.apply(array1, array2);
    }
    function augment(array1, array2, test) {
      array1 = _to_consumable_array(array1);
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
    var _constants = require_constants();
    function camelCaseToSnakeCase(string) {
      return string.replace(/([A-Z])/g, function(match, character) {
        return _constants.DASH + character.toLowerCase();
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
          get: all[name]
        });
    }
    _export(exports, {
      isHTMLAttributeName: function() {
        return isHTMLAttributeName;
      },
      isSVGAttributeName: function() {
        return isSVGAttributeName;
      },
      isSVGTagName: function() {
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
      ascendantDOMNodesFromDOMNode: function() {
        return ascendantDOMNodesFromDOMNode;
      },
      descendantDOMNodesFromDOMNode: function() {
        return descendantDOMNodesFromDOMNode;
      },
      domNodeMatchesSelector: function() {
        return domNodeMatchesSelector;
      },
      elementsFromDOMElements: function() {
        return elementsFromDOMElements;
      },
      filterDOMNodes: function() {
        return filterDOMNodes;
      },
      filterDOMNodesBySelector: function() {
        return filterDOMNodesBySelector;
      }
    });
    var _array = require_array();
    var _constants = require_constants();
    function elementsFromDOMElements(domElements) {
      var domElementsWithElements = filterDOMNodes(domElements, function(domElement) {
        if (domElement.__element__) {
          return true;
        }
      }), elements = domElementsWithElements.map(function(domElement) {
        var element = domElement.__element__;
        return element;
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
          descendantDOMNodesFromDOMNode(childDOMNode, depth, descendantDOMNodes);
        });
      }
      return descendantDOMNodes;
    }
    function filterDOMNodesBySelector(domNodes, selector) {
      var filteredDOMNodes = filterDOMNodes(domNodes, function(domNode) {
        if (domNodeMatchesSelector(domNode, selector)) {
          return true;
        }
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
    var _offset = /* @__PURE__ */ _interop_require_default(require_offset());
    var _bounds = /* @__PURE__ */ _interop_require_default(require_bounds());
    var _element = /* @__PURE__ */ _interop_require_default(require_element());
    function _class_call_check(instance, Constructor) {
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
    function _create_class(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var TextElement = /* @__PURE__ */ function() {
      function TextElement2(text) {
        _class_call_check(this, TextElement2);
        this.domElement = document.createTextNode(text);
        this.domElement.__element__ = this;
      }
      _create_class(TextElement2, [
        {
          key: "getDOMElement",
          value: function getDOMElement() {
            return this.domElement;
          }
        },
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
    var _textElement = /* @__PURE__ */ _interop_require_default(require_textElement());
    var _constants = require_constants();
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _type_of(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    }
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
        if ((typeof element === "undefined" ? "undefined" : _type_of(element)) === _constants.STRING) {
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
    var _string = require_string();
    var _name = require_name();
    var _elements = require_elements();
    var _constants = require_constants();
    function _type_of(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    }
    function applyProperties(properties, defaultProperties, ignoredProperties) {
      var _this = this;
      this.properties = (0, _object.combine)(properties, defaultProperties);
      properties = (0, _object.prune)(this.properties, ignoredProperties);
      var namespaceURI = this.domElement.namespaceURI, svg = namespaceURI === _constants.SVG_NAMESPACE_URI, propertiesKeys = Object.keys(properties), names = propertiesKeys;
      names.forEach(function(name) {
        var value = properties[name], nameHandlerName = isNameHandlerName(name), nameCustomHandlerName = isNameCustomHandlerName(name);
        if (false) {
        } else if (nameHandlerName) {
          addHandler(_this, name, value);
        } else if (nameCustomHandlerName) {
          addCustomHandler(_this, name, value);
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
        if ((typeof firstArgument === "undefined" ? "undefined" : _type_of(firstArgument)) === _constants.BOOLEAN) {
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
      if (_type_of(element.childElements) === _constants.FUNCTION) {
        childElements = element.childElements.call(element);
        childElements = (0, _array.guarantee)(childElements);
        childElements = (0, _elements.removeFalseyElements)(childElements);
        childElements = (0, _elements.replaceStringsWithTextElements)(childElements);
      }
      return childElements;
    }
    function updateContext(childElement, context) {
      var parentContext = _type_of(childElement.parentContext) === _constants.FUNCTION ? childElement.parentContext() : childElement.context;
      Object.assign(context, parentContext);
    }
    function addHandler(element, name, value) {
      var eventType = name.substring(2).toLowerCase(), handler = value;
      element.onEvent(eventType, handler);
    }
    function addCustomHandler(element, name, value) {
      var customEventType = (0, _string.camelCaseToSnakeCase)(name).replace(/on-custom-/, ""), customHandler = value;
      element.onCustomEvent(customEventType, customHandler);
    }
    function addAttribute(element, name, value) {
      if (name === _constants.CLASS_NAME) {
        name = _constants.CLASS;
      }
      if (name === _constants.HTML_FOR) {
        name = _constants.FOR;
      }
      if ((typeof value === "undefined" ? "undefined" : _type_of(value)) === _constants.OBJECT) {
        var keys = Object.keys(value);
        keys.forEach(function(key) {
          element.domElement[name][key] = value[key];
        });
      } else if ((typeof value === "undefined" ? "undefined" : _type_of(value)) === _constants.BOOLEAN) {
        if (value) {
          value = name;
          element.addAttribute(name, value);
        }
      } else {
        element.addAttribute(name, value);
      }
    }
    function isNameHandlerName(name) {
      var nameHandlerName = /^on(?!Custom)/.test(name);
      return nameHandlerName;
    }
    function isNameAttributeName(name, svg) {
      var nameAttributeName = svg ? (0, _name.isSVGAttributeName)(name) : (0, _name.isHTMLAttributeName)(name);
      return nameAttributeName;
    }
    function isNameCustomHandlerName(name) {
      var nameCustomHandlerName = /^onCustom/.test(name);
      return nameCustomHandlerName;
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
      AUXCLICK_EVENT_TYPE: function() {
        return AUXCLICK_EVENT_TYPE;
      },
      BLUR_EVENT_TYPE: function() {
        return BLUR_EVENT_TYPE;
      },
      CHANGE_EVENT_TYPE: function() {
        return CHANGE_EVENT_TYPE;
      },
      CLICK_EVENT_TYPE: function() {
        return CLICK_EVENT_TYPE;
      },
      CONTEXTMENU_EVENT_TYPE: function() {
        return CONTEXTMENU_EVENT_TYPE;
      },
      COPY_EVENT_TYPE: function() {
        return COPY_EVENT_TYPE;
      },
      CUT_EVENT_TYPE: function() {
        return CUT_EVENT_TYPE;
      },
      DBLCLICK_EVENT_TYPE: function() {
        return DBLCLICK_EVENT_TYPE;
      },
      FOCUS_EVENT_TYPE: function() {
        return FOCUS_EVENT_TYPE;
      },
      INPUT_EVENT_TYPE: function() {
        return INPUT_EVENT_TYPE;
      },
      KEYDOWN_EVENT_TYPE: function() {
        return KEYDOWN_EVENT_TYPE;
      },
      KEYUP_EVENT_TYPE: function() {
        return KEYUP_EVENT_TYPE;
      },
      MOUSEDOWN_EVENT_TYPE: function() {
        return MOUSEDOWN_EVENT_TYPE;
      },
      MOUSEMOVE_EVENT_TYPE: function() {
        return MOUSEMOVE_EVENT_TYPE;
      },
      MOUSEOUT_EVENT_TYPE: function() {
        return MOUSEOUT_EVENT_TYPE;
      },
      MOUSEOVER_EVENT_TYPE: function() {
        return MOUSEOVER_EVENT_TYPE;
      },
      MOUSEUP_EVENT_TYPE: function() {
        return MOUSEUP_EVENT_TYPE;
      },
      PASTE_EVENT_TYPE: function() {
        return PASTE_EVENT_TYPE;
      },
      RESIZE_EVENT_TYPE: function() {
        return RESIZE_EVENT_TYPE;
      },
      SCROLL_EVENT_TYPE: function() {
        return SCROLL_EVENT_TYPE;
      },
      SELECTIONCHANGE_EVENT_TYPE: function() {
        return SELECTIONCHANGE_EVENT_TYPE;
      },
      SELECT_EVENT_TYPE: function() {
        return SELECT_EVENT_TYPE;
      },
      WHEEL_EVENT_TYPE: function() {
        return WHEEL_EVENT_TYPE;
      },
      default: function() {
        return _default;
      }
    });
    var CUT_EVENT_TYPE = "cut";
    var COPY_EVENT_TYPE = "copy";
    var BLUR_EVENT_TYPE = "blur";
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
    var MOUSEOVER_EVENT_TYPE = "mouseover";
    var MOUSEDOWN_EVENT_TYPE = "mousedown";
    var MOUSEMOVE_EVENT_TYPE = "mousemove";
    var CONTEXTMENU_EVENT_TYPE = "contextmenu";
    var SELECTIONCHANGE_EVENT_TYPE = "selectionchange";
    var _default = {
      CUT_EVENT_TYPE,
      COPY_EVENT_TYPE,
      BLUR_EVENT_TYPE,
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
      MOUSEOVER_EVENT_TYPE,
      MOUSEDOWN_EVENT_TYPE,
      MOUSEMOVE_EVENT_TYPE,
      CONTEXTMENU_EVENT_TYPE,
      SELECTIONCHANGE_EVENT_TYPE
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
    function onDoubleClick(clickHandler, element) {
      this.onEvent(_eventTypes.DBLCLICK_EVENT_TYPE, clickHandler, element);
    }
    function offDoubleClick(clickHandler, element) {
      this.offEvent(_eventTypes.DBLCLICK_EVENT_TYPE, clickHandler, element);
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
      this.state === void 0 ? this.state = state : Object.assign(this.state, state);
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
      default: function() {
        return _default;
      },
      offResize: function() {
        return offResize;
      },
      onResize: function() {
        return onResize;
      }
    });
    var _eventTypes = require_eventTypes();
    var _constants = require_constants();
    var _contentTypes = require_contentTypes();
    function onResize(resizeHandler, element) {
      this.onEvent(_eventTypes.RESIZE_EVENT_TYPE, resizeHandler, element);
    }
    function offResize(resizeHandler, element) {
      this.offEvent(_eventTypes.RESIZE_EVENT_TYPE, resizeHandler, element);
    }
    function addResizeObject() {
      var _this = this;
      var resizeObject = document.createElement(_constants.OBJECT), style = "display: block; \n                 position: absolute; \n                 top: 0; \n                 left: 0; \n                 height: 100%; \n                 width: 100%; \n                 overflow: hidden; \n                 pointer-events: none; \n                 z-index: -1;", data = _constants.ABOUT_BLANK, type = _contentTypes.TEXT_HTML_CONTENT_TYPE;
      resizeObject.setAttribute("style", style);
      resizeObject.data = data;
      resizeObject.type = type;
      this.__resizeObject__ = resizeObject;
      resizeObject.onload = function() {
        resizeObjectLoadHandler(_this);
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
          resizeEventListener1(event);
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
    function onEvent(eventTypes, handler) {
      var _this = this;
      var element = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this;
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
    function offEvent(eventTypes, handler) {
      var _this = this;
      var element = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this;
      eventTypes = eventTypes.split(_constants.SPACE);
      eventTypes.forEach(function(eventType) {
        var eventListener = _this.removeEventListener(eventType, handler, element);
        _this.domElement.removeEventListener(eventType, eventListener);
        if (eventType === _eventTypes.RESIZE_EVENT_TYPE) {
          var resizeEventListeners = _this.findEventListeners(_eventTypes.RESIZE_EVENT_TYPE), resizeEventListenersLength = resizeEventListeners.length;
          if (resizeEventListenersLength === 0) {
            _this.removeResizeObject();
          }
        }
      });
    }
    function addEventListener(eventType, handler, element) {
      var eventListener = this.createEventListener(eventType, handler, element);
      if (!this.eventListeners) {
        this.eventListeners = [];
      }
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
      if (this.eventListeners) {
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
      this.onEvent(_eventTypes.SCROLL_EVENT_TYPE, scrollHandler, element);
    }
    function offScroll(scrollHandler, element) {
      this.offEvent(_eventTypes.SCROLL_EVENT_TYPE, scrollHandler, element);
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
      var length = array.length;
      var count = -1;
      function next() {
        count++;
        var terminate = count === length;
        if (terminate) {
          done();
        } else {
          var index = count, element = array[index];
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
    function _array_like_to_array(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++)
        arr2[i] = arr[i];
      return arr2;
    }
    function _array_without_holes(arr) {
      if (Array.isArray(arr))
        return _array_like_to_array(arr);
    }
    function _iterable_to_array(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    function _non_iterable_spread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _to_consumable_array(arr) {
      return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
    }
    function _unsupported_iterable_to_array(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _array_like_to_array(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(n);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _array_like_to_array(o, minLen);
    }
    function onCustomEvent(customEventTypes, customHandler) {
      var _this = this;
      var element = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this;
      customEventTypes = customEventTypes.split(_constants.SPACE);
      customEventTypes.forEach(function(customEventType) {
        _this.addCustomEventListener(customEventType, customHandler, element);
      });
    }
    function offCustomEvent(customEventTypes, customHandler) {
      var _this = this;
      var element = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this;
      customEventTypes = customEventTypes.split(_constants.SPACE);
      customEventTypes.forEach(function(customEventType) {
        _this.removeCustomEventListener(customEventType, customHandler, element);
      });
    }
    function callCustomHandlers(customEventType) {
      var _this = this;
      for (var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        remainingArguments[_key - 1] = arguments[_key];
      }
      var customEventListeners = this.findCustomEventListeners(customEventType);
      customEventListeners.forEach(function(customEventListener) {
        var _customHandler;
        var customHandler = customEventListener.customHandler, customHandlerElement = customEventListener.element, element = _this;
        (_customHandler = customHandler).call.apply(_customHandler, [
          customHandlerElement
        ].concat(_to_consumable_array(remainingArguments), [
          element
        ]));
      });
    }
    function callCustomHandlersAsync(customEventType) {
      var _this = this;
      for (var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        remainingArguments[_key - 1] = arguments[_key];
      }
      var customEventListeners = this.findCustomEventListeners(customEventType), done = remainingArguments.pop();
      (0, _async.forEach)(customEventListeners, function(customEventListener, next) {
        var _customHandler;
        var customHandler = customEventListener.customHandler, customHandlerElement = customEventListener.element, element = _this, done2 = next;
        (_customHandler = customHandler).call.apply(_customHandler, [
          customHandlerElement
        ].concat(_to_consumable_array(remainingArguments), [
          element,
          done2
        ]));
      }, done);
    }
    function addCustomEventListener(customEventType, customHandler, element) {
      var customEventListener = this.createCustomEventListener(customEventType, customHandler, element);
      if (!this.customEventListeners) {
        this.customEventListeners = [];
      }
      this.customEventListeners.push(customEventListener);
      return customEventListener;
    }
    function removeCustomEventListener(customEventType, customHandler, element) {
      var customEventListener = this.findCustomEventListener(customEventType, customHandler, element), index = this.customEventListeners.indexOf(customEventListener), start = index, deleteCount = 1;
      this.customEventListeners.splice(start, deleteCount);
      if (this.customEventListeners.length === 0) {
        delete this.customEventListeners;
      }
      return customEventListener;
    }
    function findCustomEventListener(customEventType, customHandler, element) {
      var customEventListener = this.customEventListeners.find(function(customEventListener2) {
        if (customEventListener2.element === element && customEventListener2.customHandler === customHandler && customEventListener2.customEventType === customEventType) {
          return true;
        }
      });
      return customEventListener;
    }
    function findCustomEventListeners(customEventType) {
      var customEventListeners = [];
      if (this.customEventListeners) {
        this.customEventListeners.forEach(function(customEventListener) {
          var found = customEventListener.customEventType === customEventType;
          if (found) {
            customEventListeners.push(customEventListener);
          }
        });
      }
      return customEventListeners;
    }
    function createCustomEventListener(customEventType, customHandler, element) {
      var customEventListener;
      customEventListener = function() {
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

  // node_modules/easy/lib/utilities/element.js
  var require_element2 = __commonJS((exports) => {
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
      default: function() {
        return _default;
      },
      mountElement: function() {
        return mountElement;
      },
      unmountElement: function() {
        return unmountElement;
      }
    });
    function _array_like_to_array(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++)
        arr2[i] = arr[i];
      return arr2;
    }
    function _array_without_holes(arr) {
      if (Array.isArray(arr))
        return _array_like_to_array(arr);
    }
    function _iterable_to_array(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    function _non_iterable_spread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _to_consumable_array(arr) {
      return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
    }
    function _unsupported_iterable_to_array(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _array_like_to_array(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(n);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _array_like_to_array(o, minLen);
    }
    function mountElement(element) {
      var descendantElements = element.getDescendantElements(), elements = [
        element
      ].concat(_to_consumable_array(descendantElements));
      elements.reverse();
      elements.forEach(function(element2) {
        element2.didMount && element2.didMount();
      });
    }
    function unmountElement(element) {
      var descendantElements = element.getDescendantElements(), elements = [
        element
      ].concat(_to_consumable_array(descendantElements));
      elements.forEach(function(element2) {
        element2.willUnmount && element2.willUnmount();
      });
    }
    var _default = {
      mountElement,
      unmountElement
    };
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
        return _default;
      }
    });
    var _offset = /* @__PURE__ */ _interop_require_default(require_offset());
    var _bounds = /* @__PURE__ */ _interop_require_default(require_bounds());
    var _jsx = /* @__PURE__ */ _interop_require_default(require_jsx());
    var _key = /* @__PURE__ */ _interop_require_default(require_key());
    var _click = /* @__PURE__ */ _interop_require_default(require_click());
    var _state = /* @__PURE__ */ _interop_require_default(require_state());
    var _event = /* @__PURE__ */ _interop_require_default(require_event());
    var _mouse = /* @__PURE__ */ _interop_require_default(require_mouse());
    var _resize = /* @__PURE__ */ _interop_require_default(require_resize());
    var _scroll = /* @__PURE__ */ _interop_require_default(require_scroll());
    var _element = /* @__PURE__ */ _interop_require_default(require_element());
    var _customEvent = /* @__PURE__ */ _interop_require_default(require_customEvent());
    var _object = require_object();
    var _name = require_name();
    var _array = require_array();
    var _element1 = require_element2();
    var _constants = require_constants();
    function _array_like_to_array(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++)
        arr2[i] = arr[i];
      return arr2;
    }
    function _array_without_holes(arr) {
      if (Array.isArray(arr))
        return _array_like_to_array(arr);
    }
    function _class_call_check(instance, Constructor) {
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
    function _create_class(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _iterable_to_array(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    function _non_iterable_spread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _to_consumable_array(arr) {
      return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
    }
    function _type_of(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    }
    function _unsupported_iterable_to_array(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _array_like_to_array(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(n);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _array_like_to_array(o, minLen);
    }
    var Element = /* @__PURE__ */ function() {
      function Element2(selector) {
        _class_call_check(this, Element2);
        if (selector) {
          this.domElement = document.querySelector(selector);
          this.domElement.__element__ = this;
        }
      }
      _create_class(Element2, [
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
          key: "insert",
          value: function insert(element) {
            this.append(element);
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
          key: "mountBefore",
          value: function mountBefore(siblingElement) {
            this.insertBefore(siblingElement);
            var element = this;
            (0, _element1.mountElement)(element);
          }
        },
        {
          key: "mountAfter",
          value: function mountAfter(siblingElement) {
            this.insertBefore(siblingElement);
            var element = this;
            (0, _element1.mountElement)(element);
          }
        },
        {
          key: "mount",
          value: function mount(element) {
            this.add(element);
            (0, _element1.mountElement)(element);
          }
        },
        {
          key: "unmount",
          value: function unmount(element) {
            (0, _element1.unmountElement)(element);
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
          value: function style(name) {
            var value = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
            if (value !== null) {
              this.domElement.style[name] = value;
              return;
            }
            var style2 = this.domElement.style[name];
            return style2;
          }
        },
        {
          key: "html",
          value: function html() {
            var html2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
            if (html2 !== null) {
              var innerHTML = html2;
              this.domElement.innerHTML = innerHTML;
              return;
            }
            var innerHTML1 = this.domElement.innerHTML;
            html2 = innerHTML1;
            return html2;
          }
        },
        {
          key: "css",
          value: function css() {
            var _this = this;
            var css2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
            if (css2 === null) {
              var computedStyle = getComputedStyle(this.domElement), css1 = {};
              for (var index = 0; index < computedStyle.length; index++) {
                var firstComputedStyle = _array.first[computedStyle], name = firstComputedStyle, value = computedStyle.getPropertyValue(name);
                css1[name] = value;
              }
              return css1;
            }
            if ((typeof css2 === "undefined" ? "undefined" : _type_of(css2)) === _constants.STRING) {
              var name1 = css2;
              var computedStyle1 = getComputedStyle(this.domElement), value1 = computedStyle1.getPropertyValue(name1);
              css2 = value1;
              return css2;
            }
            var names = Object.keys(css2);
            names.forEach(function(name2) {
              var value2 = css2[name2];
              _this.style(name2, value2);
            });
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
            ].concat(_to_consumable_array(remainingArguments))), defaultProperties = defaultPropertiesFromClass(Class), ignoredProperties = ignoredPropertiesFromClass(Class);
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
            ].concat(_to_consumable_array(remainingArguments))), defaultProperties = {}, ignoredProperties = [];
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
    Object.assign(Element.prototype, _customEvent.default);
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
      ].concat(_to_consumable_array(remainingArguments))))();
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
          if (!ignoredProperties.includes(ignoredProperty)) {
            return true;
          }
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
    var _element = /* @__PURE__ */ _interop_require_default(require_element3());
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
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _type_of(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    }
    function createElement(firstArgument, properties) {
      for (var _len = arguments.length, childElements = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        childElements[_key - 2] = arguments[_key];
      }
      var element = null;
      if (firstArgument) {
        childElements = sanitiseChildElements(childElements);
        properties = Object.assign({
          childElements
        }, properties);
        if (false) {
        } else if (isSubclassOf(firstArgument, _element.default)) {
          var Class = firstArgument;
          element = Class.fromClass(Class, properties);
        } else if ((typeof firstArgument === "undefined" ? "undefined" : _type_of(firstArgument)) === _constants.STRING) {
          var tagName = firstArgument;
          element = _element.default.fromTagName(tagName, properties);
        } else if ((typeof firstArgument === "undefined" ? "undefined" : _type_of(firstArgument)) === _constants.FUNCTION) {
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
    var _element = /* @__PURE__ */ _interop_require_default(require_element3());
    var _constants = require_constants();
    function _assert_this_initialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _class_call_check(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _construct(Parent, args, Class) {
      if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function construct(Parent2, args2, Class2) {
          var a = [
            null
          ];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2)
            _set_prototype_of(instance, Class2.prototype);
          return instance;
        };
      }
      return _construct.apply(null, arguments);
    }
    function _define_property(obj, key, value) {
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
    function _get_prototype_of(o) {
      _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _get_prototype_of(o);
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
        _set_prototype_of(subClass, superClass);
    }
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _is_native_function(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }
    function _possible_constructor_return(self, call) {
      if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assert_this_initialized(self);
    }
    function _set_prototype_of(o, p) {
      _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _set_prototype_of(o, p);
    }
    function _type_of(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    }
    function _wrap_native_super(Class) {
      var _cache = typeof Map === "function" ? new Map() : void 0;
      _wrap_native_super = function wrapNativeSuper(Class2) {
        if (Class2 === null || !_is_native_function(Class2))
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
          return _construct(Class2, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class2.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _set_prototype_of(Wrapper, Class2);
      };
      return _wrap_native_super(Class);
    }
    function _is_native_reflect_construct() {
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
    function _create_super(Derived) {
      var hasNativeReflectConstruct = _is_native_reflect_construct();
      return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _get_prototype_of(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
      };
    }
    var Body = /* @__PURE__ */ function(Element) {
      _inherits(Body2, Element);
      var _super = _create_super(Body2);
      function Body2() {
        var selector = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _constants.BODY;
        _class_call_check(this, Body2);
        return _super.call(this, selector);
      }
      return Body2;
    }(_wrap_native_super(_element.default));
    _define_property(Body, "tagName", "body");
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
    function _assert_this_initialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _class_call_check(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _construct(Parent, args, Class) {
      if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function construct(Parent2, args2, Class2) {
          var a = [
            null
          ];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2)
            _set_prototype_of(instance, Class2.prototype);
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
    function _create_class(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _define_property(obj, key, value) {
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
    function _get_prototype_of(o) {
      _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _get_prototype_of(o);
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
        _set_prototype_of(subClass, superClass);
    }
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _is_native_function(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }
    function _possible_constructor_return(self, call) {
      if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assert_this_initialized(self);
    }
    function _set_prototype_of(o, p) {
      _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _set_prototype_of(o, p);
    }
    function _type_of(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    }
    function _wrap_native_super(Class) {
      var _cache = typeof Map === "function" ? new Map() : void 0;
      _wrap_native_super = function wrapNativeSuper(Class2) {
        if (Class2 === null || !_is_native_function(Class2))
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
          return _construct(Class2, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class2.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _set_prototype_of(Wrapper, Class2);
      };
      return _wrap_native_super(Class);
    }
    function _is_native_reflect_construct() {
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
    function _create_super(Derived) {
      var hasNativeReflectConstruct = _is_native_reflect_construct();
      return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _get_prototype_of(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
      };
    }
    var Link = /* @__PURE__ */ function(Element) {
      _inherits(Link2, Element);
      var _super = _create_super(Link2);
      function Link2() {
        _class_call_check(this, Link2);
        return _super.apply(this, arguments);
      }
      _create_class(Link2, [
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
    }(_wrap_native_super(_element.default));
    _define_property(Link, "tagName", "a");
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
      this.onEvent(_eventTypes.CHANGE_EVENT_TYPE, changeHandler, element);
    }
    function offChange(changeHandler, element) {
      this.offEvent(_eventTypes.CHANGE_EVENT_TYPE, changeHandler, element);
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
    var _element = /* @__PURE__ */ _interop_require_default(require_element3());
    var _change = /* @__PURE__ */ _interop_require_default(require_change());
    var _eventTypes = require_eventTypes();
    function _assert_this_initialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _class_call_check(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _construct(Parent, args, Class) {
      if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function construct(Parent2, args2, Class2) {
          var a = [
            null
          ];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2)
            _set_prototype_of(instance, Class2.prototype);
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
    function _create_class(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _get_prototype_of(o) {
      _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _get_prototype_of(o);
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
        _set_prototype_of(subClass, superClass);
    }
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _is_native_function(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }
    function _possible_constructor_return(self, call) {
      if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assert_this_initialized(self);
    }
    function _set_prototype_of(o, p) {
      _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _set_prototype_of(o, p);
    }
    function _type_of(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    }
    function _wrap_native_super(Class) {
      var _cache = typeof Map === "function" ? new Map() : void 0;
      _wrap_native_super = function wrapNativeSuper(Class2) {
        if (Class2 === null || !_is_native_function(Class2))
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
          return _construct(Class2, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class2.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _set_prototype_of(Wrapper, Class2);
      };
      return _wrap_native_super(Class);
    }
    function _is_native_reflect_construct() {
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
    function _create_super(Derived) {
      var hasNativeReflectConstruct = _is_native_reflect_construct();
      return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _get_prototype_of(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
      };
    }
    var InputElement = /* @__PURE__ */ function(Element) {
      _inherits(InputElement2, Element);
      var _super = _create_super(InputElement2);
      function InputElement2() {
        _class_call_check(this, InputElement2);
        return _super.apply(this, arguments);
      }
      _create_class(InputElement2, [
        {
          key: "onChange",
          value: function onChange(changeHandler, element) {
            this.onEvent(_eventTypes.CHANGE_EVENT_TYPE, changeHandler, element);
          }
        },
        {
          key: "offChange",
          value: function offChange(changeHandler, element) {
            this.offEvent(_eventTypes.CHANGE_EVENT_TYPE, changeHandler, element);
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
    }(_wrap_native_super(_element.default));
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
    var _inputElement = /* @__PURE__ */ _interop_require_default(require_inputElement());
    function _assert_this_initialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _class_call_check(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _define_property(obj, key, value) {
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
    function _get_prototype_of(o) {
      _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _get_prototype_of(o);
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
        _set_prototype_of(subClass, superClass);
    }
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possible_constructor_return(self, call) {
      if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assert_this_initialized(self);
    }
    function _set_prototype_of(o, p) {
      _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _set_prototype_of(o, p);
    }
    function _type_of(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    }
    function _is_native_reflect_construct() {
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
    function _create_super(Derived) {
      var hasNativeReflectConstruct = _is_native_reflect_construct();
      return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _get_prototype_of(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
      };
    }
    var Input = /* @__PURE__ */ function(InputElement) {
      _inherits(Input2, InputElement);
      var _super = _create_super(Input2);
      function Input2() {
        _class_call_check(this, Input2);
        return _super.apply(this, arguments);
      }
      return Input2;
    }(_inputElement.default);
    _define_property(Input, "tagName", "input");
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
    function _assert_this_initialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _class_call_check(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _construct(Parent, args, Class) {
      if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function construct(Parent2, args2, Class2) {
          var a = [
            null
          ];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2)
            _set_prototype_of(instance, Class2.prototype);
          return instance;
        };
      }
      return _construct.apply(null, arguments);
    }
    function _define_property(obj, key, value) {
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
    function _get_prototype_of(o) {
      _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _get_prototype_of(o);
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
        _set_prototype_of(subClass, superClass);
    }
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _is_native_function(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }
    function _possible_constructor_return(self, call) {
      if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assert_this_initialized(self);
    }
    function _set_prototype_of(o, p) {
      _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _set_prototype_of(o, p);
    }
    function _type_of(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    }
    function _wrap_native_super(Class) {
      var _cache = typeof Map === "function" ? new Map() : void 0;
      _wrap_native_super = function wrapNativeSuper(Class2) {
        if (Class2 === null || !_is_native_function(Class2))
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
          return _construct(Class2, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class2.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _set_prototype_of(Wrapper, Class2);
      };
      return _wrap_native_super(Class);
    }
    function _is_native_reflect_construct() {
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
    function _create_super(Derived) {
      var hasNativeReflectConstruct = _is_native_reflect_construct();
      return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _get_prototype_of(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
      };
    }
    var Button = /* @__PURE__ */ function(Element) {
      _inherits(Button2, Element);
      var _super = _create_super(Button2);
      function Button2() {
        _class_call_check(this, Button2);
        return _super.apply(this, arguments);
      }
      return Button2;
    }(_wrap_native_super(_element.default));
    _define_property(Button, "tagName", "button");
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
    var _element = /* @__PURE__ */ _interop_require_default(require_element3());
    var _change = /* @__PURE__ */ _interop_require_default(require_change());
    function _assert_this_initialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _class_call_check(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _construct(Parent, args, Class) {
      if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function construct(Parent2, args2, Class2) {
          var a = [
            null
          ];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2)
            _set_prototype_of(instance, Class2.prototype);
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
    function _create_class(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _define_property(obj, key, value) {
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
    function _get_prototype_of(o) {
      _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _get_prototype_of(o);
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
        _set_prototype_of(subClass, superClass);
    }
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _is_native_function(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }
    function _possible_constructor_return(self, call) {
      if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assert_this_initialized(self);
    }
    function _set_prototype_of(o, p) {
      _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _set_prototype_of(o, p);
    }
    function _type_of(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    }
    function _wrap_native_super(Class) {
      var _cache = typeof Map === "function" ? new Map() : void 0;
      _wrap_native_super = function wrapNativeSuper(Class2) {
        if (Class2 === null || !_is_native_function(Class2))
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
          return _construct(Class2, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class2.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _set_prototype_of(Wrapper, Class2);
      };
      return _wrap_native_super(Class);
    }
    function _is_native_reflect_construct() {
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
    function _create_super(Derived) {
      var hasNativeReflectConstruct = _is_native_reflect_construct();
      return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _get_prototype_of(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
      };
    }
    var Select = /* @__PURE__ */ function(Element) {
      _inherits(Select2, Element);
      var _super = _create_super(Select2);
      function Select2() {
        _class_call_check(this, Select2);
        return _super.apply(this, arguments);
      }
      _create_class(Select2, [
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
    }(_wrap_native_super(_element.default));
    _define_property(Select, "tagName", "select");
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
    var _element = /* @__PURE__ */ _interop_require_default(require_element3());
    var _change = /* @__PURE__ */ _interop_require_default(require_change());
    function _assert_this_initialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _class_call_check(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _construct(Parent, args, Class) {
      if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function construct(Parent2, args2, Class2) {
          var a = [
            null
          ];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2)
            _set_prototype_of(instance, Class2.prototype);
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
    function _create_class(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _define_property(obj, key, value) {
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
    function _get_prototype_of(o) {
      _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _get_prototype_of(o);
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
        _set_prototype_of(subClass, superClass);
    }
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _is_native_function(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }
    function _possible_constructor_return(self, call) {
      if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assert_this_initialized(self);
    }
    function _set_prototype_of(o, p) {
      _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _set_prototype_of(o, p);
    }
    function _type_of(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    }
    function _wrap_native_super(Class) {
      var _cache = typeof Map === "function" ? new Map() : void 0;
      _wrap_native_super = function wrapNativeSuper(Class2) {
        if (Class2 === null || !_is_native_function(Class2))
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
          return _construct(Class2, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class2.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _set_prototype_of(Wrapper, Class2);
      };
      return _wrap_native_super(Class);
    }
    function _is_native_reflect_construct() {
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
    function _create_super(Derived) {
      var hasNativeReflectConstruct = _is_native_reflect_construct();
      return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _get_prototype_of(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
      };
    }
    var Checkbox = /* @__PURE__ */ function(Element) {
      _inherits(Checkbox2, Element);
      var _super = _create_super(Checkbox2);
      function Checkbox2() {
        _class_call_check(this, Checkbox2);
        return _super.apply(this, arguments);
      }
      _create_class(Checkbox2, [
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
    }(_wrap_native_super(_element.default));
    _define_property(Checkbox, "tagName", "input");
    _define_property(Checkbox, "defaultProperties", {
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
    var _inputElement = /* @__PURE__ */ _interop_require_default(require_inputElement());
    function _assert_this_initialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _class_call_check(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _define_property(obj, key, value) {
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
    function _get_prototype_of(o) {
      _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _get_prototype_of(o);
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
        _set_prototype_of(subClass, superClass);
    }
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _possible_constructor_return(self, call) {
      if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assert_this_initialized(self);
    }
    function _set_prototype_of(o, p) {
      _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _set_prototype_of(o, p);
    }
    function _type_of(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    }
    function _is_native_reflect_construct() {
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
    function _create_super(Derived) {
      var hasNativeReflectConstruct = _is_native_reflect_construct();
      return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _get_prototype_of(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
      };
    }
    var Textarea = /* @__PURE__ */ function(InputElement) {
      _inherits(Textarea2, InputElement);
      var _super = _create_super(Textarea2);
      function Textarea2() {
        _class_call_check(this, Textarea2);
        return _super.apply(this, arguments);
      }
      return Textarea2;
    }(_inputElement.default);
    _define_property(Textarea, "tagName", "textarea");
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
    var _key = /* @__PURE__ */ _interop_require_default(require_key());
    var _event = /* @__PURE__ */ _interop_require_default(require_event());
    var _mouse = /* @__PURE__ */ _interop_require_default(require_mouse());
    var _click = /* @__PURE__ */ _interop_require_default(require_click());
    var _window = /* @__PURE__ */ _interop_require_default(require_window());
    var _customEvent = /* @__PURE__ */ _interop_require_default(require_customEvent());
    var _constants = require_constants();
    function _array_like_to_array(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++)
        arr2[i] = arr[i];
      return arr2;
    }
    function _array_without_holes(arr) {
      if (Array.isArray(arr))
        return _array_like_to_array(arr);
    }
    function _class_call_check(instance, Constructor) {
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
    function _create_class(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _iterable_to_array(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    function _non_iterable_spread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _to_consumable_array(arr) {
      return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
    }
    function _type_of(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    }
    function _unsupported_iterable_to_array(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _array_like_to_array(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(n);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _array_like_to_array(o, minLen);
    }
    var Window = /* @__PURE__ */ function() {
      function Window2() {
        _class_call_check(this, Window2);
        this.domElement = window;
      }
      _create_class(Window2, [
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
            ].concat(_to_consumable_array(sources)));
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
        },
        {
          key: "getSelection",
          value: function getSelection() {
            return this.domElement.getSelection();
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
    Object.assign(Window.prototype, _customEvent.default);
    var _default = (typeof window === "undefined" ? "undefined" : _type_of(window)) === _constants.UNDEFINED ? void 0 : new Window();
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
    function onSelectionChange(selectionChangeHandler, element) {
      this.onEvent(_eventTypes.SELECTIONCHANGE_EVENT_TYPE, selectionChangeHandler, element);
    }
    function offSelectionChange(selectionChangeHandler, element) {
      this.offEvent(_eventTypes.SELECTIONCHANGE_EVENT_TYPE, selectionChangeHandler, element);
    }
    function createEventListener(eventType, handler, element) {
      var _this = this;
      var eventListener;
      var handlerElement = element;
      eventListener = function(event) {
        if (eventType === _eventTypes.SELECTIONCHANGE_EVENT_TYPE) {
          var domElement = handlerElement.domElement, currentTarget = event.currentTarget, activeElement = currentTarget.activeElement;
          if (domElement !== activeElement) {
            return;
          }
        }
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
    var selectionMixins = {
      onSelectionChange,
      offSelectionChange,
      createEventListener
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
    var _click = /* @__PURE__ */ _interop_require_default(require_click());
    var _event = /* @__PURE__ */ _interop_require_default(require_event());
    var _mouse = /* @__PURE__ */ _interop_require_default(require_mouse());
    var _selection = /* @__PURE__ */ _interop_require_default(require_selection());
    var _customEvent = /* @__PURE__ */ _interop_require_default(require_customEvent());
    var _constants = require_constants();
    function _class_call_check(instance, Constructor) {
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
    function _create_class(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _type_of(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    }
    var Document = /* @__PURE__ */ function() {
      function Document2() {
        _class_call_check(this, Document2);
        this.domElement = document;
      }
      _create_class(Document2, [
        {
          key: "getDOMElement",
          value: function getDOMElement() {
            return this.domElement;
          }
        },
        {
          key: "createRange",
          value: function createRange() {
            return this.domElement.createRange();
          }
        },
        {
          key: "createTextNode",
          value: function createTextNode(data) {
            return this.domElement.createTextNode(data);
          }
        }
      ]);
      return Document2;
    }();
    var _default = (typeof document === "undefined" ? "undefined" : _type_of(document)) === _constants.UNDEFINED ? void 0 : new Document();
    Object.assign(Document.prototype, _key.default);
    Object.assign(Document.prototype, _click.default);
    Object.assign(Document.prototype, _event.default);
    Object.assign(Document.prototype, _mouse.default);
    Object.assign(Document.prototype, _selection.default);
    Object.assign(Document.prototype, _customEvent.default);
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
          get: all[name]
        });
    }
    _export(exports, {
      LEFT_MOUSE_BUTTON: function() {
        return LEFT_MOUSE_BUTTON;
      },
      MIDDLE_MOUSE_BUTTON: function() {
        return MIDDLE_MOUSE_BUTTON;
      },
      RIGHT_MOUSE_BUTTON: function() {
        return RIGHT_MOUSE_BUTTON;
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
      Body: function() {
        return _body.default;
      },
      Bounds: function() {
        return _bounds.default;
      },
      Button: function() {
        return _button.default;
      },
      Checkbox: function() {
        return _checkbox.default;
      },
      Element: function() {
        return _element.default;
      },
      Input: function() {
        return _input.default;
      },
      InputElement: function() {
        return _inputElement.default;
      },
      Link: function() {
        return _link.default;
      },
      Offset: function() {
        return _offset.default;
      },
      React: function() {
        return _react.default;
      },
      Select: function() {
        return _select.default;
      },
      TextElement: function() {
        return _textElement.default;
      },
      Textarea: function() {
        return _textarea.default;
      },
      document: function() {
        return _document.default;
      },
      elementUtilities: function() {
        return _element1.default;
      },
      eventTypes: function() {
        return _eventTypes.default;
      },
      mouseButtons: function() {
        return _mouseButtons.default;
      },
      window: function() {
        return _window.default;
      }
    });
    var _react = /* @__PURE__ */ _interop_require_default(require_react());
    var _bounds = /* @__PURE__ */ _interop_require_default(require_bounds());
    var _offset = /* @__PURE__ */ _interop_require_default(require_offset());
    var _body = /* @__PURE__ */ _interop_require_default(require_body());
    var _link = /* @__PURE__ */ _interop_require_default(require_link());
    var _input = /* @__PURE__ */ _interop_require_default(require_input());
    var _button = /* @__PURE__ */ _interop_require_default(require_button());
    var _select = /* @__PURE__ */ _interop_require_default(require_select());
    var _element = /* @__PURE__ */ _interop_require_default(require_element3());
    var _checkbox = /* @__PURE__ */ _interop_require_default(require_checkbox());
    var _textarea = /* @__PURE__ */ _interop_require_default(require_textarea());
    var _textElement = /* @__PURE__ */ _interop_require_default(require_textElement());
    var _inputElement = /* @__PURE__ */ _interop_require_default(require_inputElement());
    var _window = /* @__PURE__ */ _interop_require_default(require_window2());
    var _document = /* @__PURE__ */ _interop_require_default(require_document());
    var _eventTypes = /* @__PURE__ */ _interop_require_default(require_eventTypes());
    var _mouseButtons = /* @__PURE__ */ _interop_require_default(require_mouseButtons());
    var _element1 = /* @__PURE__ */ _interop_require_default(require_element2());
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
          get: all[name]
        });
    }
    _export(exports, {
      EMPTY_STRING: function() {
        return EMPTY_STRING;
      },
      ERROR_DELAY: function() {
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
    function _assert_this_initialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _class_call_check(instance, Constructor) {
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
    function _create_class(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _define_property(obj, key, value) {
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
    function _get_prototype_of(o) {
      _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _get_prototype_of(o);
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
        _set_prototype_of(subClass, superClass);
    }
    function _possible_constructor_return(self, call) {
      if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assert_this_initialized(self);
    }
    function _set_prototype_of(o, p) {
      _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _set_prototype_of(o, p);
    }
    function _type_of(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    }
    function _is_native_reflect_construct() {
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
    function _create_super(Derived) {
      var hasNativeReflectConstruct = _is_native_reflect_construct();
      return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _get_prototype_of(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
      };
    }
    var PasswordInput = /* @__PURE__ */ function(InputElement) {
      _inherits(PasswordInput2, InputElement);
      var _super = _create_super(PasswordInput2);
      function PasswordInput2() {
        _class_call_check(this, PasswordInput2);
        return _super.apply(this, arguments);
      }
      _create_class(PasswordInput2, [
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
    _define_property(PasswordInput, "tagName", "input");
    _define_property(PasswordInput, "defaultProperties", {
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
    function _array_like_to_array(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++)
        arr2[i] = arr[i];
      return arr2;
    }
    function _array_without_holes(arr) {
      if (Array.isArray(arr))
        return _array_like_to_array(arr);
    }
    function _assert_this_initialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _class_call_check(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _construct(Parent, args, Class) {
      if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function construct(Parent2, args2, Class2) {
          var a = [
            null
          ];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2)
            _set_prototype_of(instance, Class2.prototype);
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
    function _create_class(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _define_property(obj, key, value) {
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
    function _get_prototype_of(o) {
      _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _get_prototype_of(o);
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
        _set_prototype_of(subClass, superClass);
    }
    function _is_native_function(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }
    function _iterable_to_array(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    function _non_iterable_spread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _possible_constructor_return(self, call) {
      if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assert_this_initialized(self);
    }
    function _set_prototype_of(o, p) {
      _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _set_prototype_of(o, p);
    }
    function _to_consumable_array(arr) {
      return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
    }
    function _type_of(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    }
    function _unsupported_iterable_to_array(o, minLen) {
      if (!o)
        return;
      if (typeof o === "string")
        return _array_like_to_array(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor)
        n = o.constructor.name;
      if (n === "Map" || n === "Set")
        return Array.from(n);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _array_like_to_array(o, minLen);
    }
    function _wrap_native_super(Class) {
      var _cache = typeof Map === "function" ? new Map() : void 0;
      _wrap_native_super = function wrapNativeSuper(Class2) {
        if (Class2 === null || !_is_native_function(Class2))
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
          return _construct(Class2, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class2.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _set_prototype_of(Wrapper, Class2);
      };
      return _wrap_native_super(Class);
    }
    function _is_native_reflect_construct() {
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
    function _create_super(Derived) {
      var hasNativeReflectConstruct = _is_native_reflect_construct();
      return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _get_prototype_of(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
      };
    }
    var ValidationErrorParagraph = /* @__PURE__ */ function(Element) {
      _inherits(ValidationErrorParagraph2, Element);
      var _super = _create_super(ValidationErrorParagraph2);
      function ValidationErrorParagraph2(selector, timeout) {
        _class_call_check(this, ValidationErrorParagraph2);
        var _this;
        _this = _super.call(this, selector);
        _this.timeout = timeout;
        return _this;
      }
      _create_class(ValidationErrorParagraph2, [
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
            }, _constants.ERROR_DELAY);
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
            for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
              remainingArguments[_key - 2] = arguments[_key];
            }
            var _Element;
            var timeout = null, validationErrorParagraph = (_Element = _easy.Element).fromClass.apply(_Element, [
              Class,
              properties,
              timeout
            ].concat(_to_consumable_array(remainingArguments)));
            return validationErrorParagraph;
          }
        }
      ]);
      return ValidationErrorParagraph2;
    }(_wrap_native_super(_easy.Element));
    _define_property(ValidationErrorParagraph, "tagName", "p");
    _define_property(ValidationErrorParagraph, "defaultProperties", {
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
    function _assert_this_initialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _class_call_check(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _construct(Parent, args, Class) {
      if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function construct(Parent2, args2, Class2) {
          var a = [
            null
          ];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2)
            _set_prototype_of(instance, Class2.prototype);
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
    function _create_class(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _define_property(obj, key, value) {
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
    function _get_prototype_of(o) {
      _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _get_prototype_of(o);
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
        _set_prototype_of(subClass, superClass);
    }
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _is_native_function(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }
    function _possible_constructor_return(self, call) {
      if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assert_this_initialized(self);
    }
    function _set_prototype_of(o, p) {
      _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _set_prototype_of(o, p);
    }
    function _type_of(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    }
    function _wrap_native_super(Class) {
      var _cache = typeof Map === "function" ? new Map() : void 0;
      _wrap_native_super = function wrapNativeSuper(Class2) {
        if (Class2 === null || !_is_native_function(Class2))
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
          return _construct(Class2, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class2.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _set_prototype_of(Wrapper, Class2);
      };
      return _wrap_native_super(Class);
    }
    function _is_native_reflect_construct() {
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
    function _create_super(Derived) {
      var hasNativeReflectConstruct = _is_native_reflect_construct();
      return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _get_prototype_of(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
      };
    }
    var PasswordForm = /* @__PURE__ */ function(Element) {
      _inherits(PasswordForm2, Element);
      var _super = _create_super(PasswordForm2);
      function PasswordForm2() {
        _class_call_check(this, PasswordForm2);
        return _super.apply(this, arguments);
      }
      _create_class(PasswordForm2, [
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
    }(_wrap_native_super(_easy.Element));
    _define_property(PasswordForm, "tagName", "form");
    _define_property(PasswordForm, "defaultProperties", {
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
    function _assert_this_initialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _class_call_check(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _construct(Parent, args, Class) {
      if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function construct(Parent2, args2, Class2) {
          var a = [
            null
          ];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2)
            _set_prototype_of(instance, Class2.prototype);
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
    function _create_class(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _define_property(obj, key, value) {
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
    function _get_prototype_of(o) {
      _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _get_prototype_of(o);
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
        _set_prototype_of(subClass, superClass);
    }
    function _is_native_function(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }
    function _possible_constructor_return(self, call) {
      if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assert_this_initialized(self);
    }
    function _set_prototype_of(o, p) {
      _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _set_prototype_of(o, p);
    }
    function _type_of(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    }
    function _wrap_native_super(Class) {
      var _cache = typeof Map === "function" ? new Map() : void 0;
      _wrap_native_super = function wrapNativeSuper(Class2) {
        if (Class2 === null || !_is_native_function(Class2))
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
          return _construct(Class2, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class2.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _set_prototype_of(Wrapper, Class2);
      };
      return _wrap_native_super(Class);
    }
    function _is_native_reflect_construct() {
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
    function _create_super(Derived) {
      var hasNativeReflectConstruct = _is_native_reflect_construct();
      return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _get_prototype_of(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
      };
    }
    var MessageParagraph = /* @__PURE__ */ function(Element) {
      _inherits(MessageParagraph2, Element);
      var _super = _create_super(MessageParagraph2);
      function MessageParagraph2() {
        _class_call_check(this, MessageParagraph2);
        return _super.apply(this, arguments);
      }
      _create_class(MessageParagraph2, [
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
    }(_wrap_native_super(_easy.Element));
    _define_property(MessageParagraph, "tagName", "p");
    _define_property(MessageParagraph, "defaultProperties", {
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
    function _assert_this_initialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _class_call_check(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _construct(Parent, args, Class) {
      if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function construct(Parent2, args2, Class2) {
          var a = [
            null
          ];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2)
            _set_prototype_of(instance, Class2.prototype);
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
    function _create_class(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _define_property(obj, key, value) {
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
    function _get_prototype_of(o) {
      _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _get_prototype_of(o);
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
        _set_prototype_of(subClass, superClass);
    }
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _is_native_function(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }
    function _possible_constructor_return(self, call) {
      if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assert_this_initialized(self);
    }
    function _set_prototype_of(o, p) {
      _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _set_prototype_of(o, p);
    }
    function _type_of(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    }
    function _wrap_native_super(Class) {
      var _cache = typeof Map === "function" ? new Map() : void 0;
      _wrap_native_super = function wrapNativeSuper(Class2) {
        if (Class2 === null || !_is_native_function(Class2))
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
          return _construct(Class2, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class2.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _set_prototype_of(Wrapper, Class2);
      };
      return _wrap_native_super(Class);
    }
    function _is_native_reflect_construct() {
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
    function _create_super(Derived) {
      var hasNativeReflectConstruct = _is_native_reflect_construct();
      return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _get_prototype_of(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
      };
    }
    var ResetPasswordButton = /* @__PURE__ */ function(Element) {
      _inherits(ResetPasswordButton2, Element);
      var _super = _create_super(ResetPasswordButton2);
      function ResetPasswordButton2() {
        _class_call_check(this, ResetPasswordButton2);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "clickHandler", function(event, element) {
          _controller.default.resetPassword();
        });
        return _this;
      }
      _create_class(ResetPasswordButton2, [
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
    }(_wrap_native_super(_easy.Element));
    _define_property(ResetPasswordButton, "tagName", "button");
    _define_property(ResetPasswordButton, "defaultProperties", {
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
    function _assert_this_initialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _class_call_check(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _construct(Parent, args, Class) {
      if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function construct(Parent2, args2, Class2) {
          var a = [
            null
          ];
          a.push.apply(a, args2);
          var Constructor = Function.bind.apply(Parent2, a);
          var instance = new Constructor();
          if (Class2)
            _set_prototype_of(instance, Class2.prototype);
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
    function _create_class(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _define_property(obj, key, value) {
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
    function _get_prototype_of(o) {
      _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _get_prototype_of(o);
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
        _set_prototype_of(subClass, superClass);
    }
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _is_native_function(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }
    function _possible_constructor_return(self, call) {
      if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assert_this_initialized(self);
    }
    function _set_prototype_of(o, p) {
      _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _set_prototype_of(o, p);
    }
    function _type_of(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    }
    function _wrap_native_super(Class) {
      var _cache = typeof Map === "function" ? new Map() : void 0;
      _wrap_native_super = function wrapNativeSuper(Class2) {
        if (Class2 === null || !_is_native_function(Class2))
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
          return _construct(Class2, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class2.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _set_prototype_of(Wrapper, Class2);
      };
      return _wrap_native_super(Class);
    }
    function _is_native_reflect_construct() {
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
    function _create_super(Derived) {
      var hasNativeReflectConstruct = _is_native_reflect_construct();
      return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _get_prototype_of(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
      };
    }
    var View = /* @__PURE__ */ function(Element) {
      _inherits(View2, Element);
      var _super = _create_super(View2);
      function View2() {
        _class_call_check(this, View2);
        return _super.apply(this, arguments);
      }
      _create_class(View2, [
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
    }(_wrap_native_super(_easy.Element));
    _define_property(View, "tagName", "div");
    _define_property(View, "defaultProperties", {
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
    function _class_call_check(instance, Constructor) {
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
    function _create_class(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    var Model = /* @__PURE__ */ function() {
      function Model2() {
        _class_call_check(this, Model2);
        this.password = null;
      }
      _create_class(Model2, [
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
    var _view = /* @__PURE__ */ _interop_require_default(require_view());
    var _model = /* @__PURE__ */ _interop_require_default(require_model());
    var _controller = /* @__PURE__ */ _interop_require_default(require_controller());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function mvcApplication() {
      var model = new _model.default(), view = /* @__PURE__ */ React.createElement(_view.default, null);
      Object.assign(_controller.default, {
        setPassword,
        resetPassword
      });
      var body = new _easy.Body();
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL29mZnNldC5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvYm91bmRzLmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy9jb25zdGFudHMuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL3V0aWxpdGllcy9vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL3V0aWxpdGllcy9hcnJheS5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvdXRpbGl0aWVzL3N0cmluZy5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvdXRpbGl0aWVzL25hbWUuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL3V0aWxpdGllcy9kb20uanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL21peGlucy9lbGVtZW50LmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy90ZXh0RWxlbWVudC5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvdXRpbGl0aWVzL2VsZW1lbnRzLmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy9taXhpbnMvanN4LmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy9ldmVudFR5cGVzLmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy9taXhpbnMva2V5LmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy9taXhpbnMvY2xpY2suanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL21peGlucy9zdGF0ZS5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvY29udGVudFR5cGVzLmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy9taXhpbnMvcmVzaXplLmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy9taXhpbnMvZXZlbnQuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL21peGlucy9tb3VzZS5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvbWl4aW5zL3Njcm9sbC5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvdXRpbGl0aWVzL2FzeW5jLmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy9taXhpbnMvY3VzdG9tRXZlbnQuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL3V0aWxpdGllcy9lbGVtZW50LmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy9lbGVtZW50LmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy9yZWFjdC5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvZWxlbWVudC9ib2R5LmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy9lbGVtZW50L2xpbmsuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL21peGlucy9jaGFuZ2UuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL2lucHV0RWxlbWVudC5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvaW5wdXRFbGVtZW50L2lucHV0LmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy9lbGVtZW50L2J1dHRvbi5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvZWxlbWVudC9zZWxlY3QuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL2VsZW1lbnQvY2hlY2tib3guanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL2lucHV0RWxlbWVudC90ZXh0YXJlYS5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvbWl4aW5zL3dpbmRvdy5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvd2luZG93LmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy9taXhpbnMvc2VsZWN0aW9uLmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy9kb2N1bWVudC5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvbW91c2VCdXR0b25zLmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy9pbmRleC5qcyIsICJzcmMvanV4dGFwb3NlLmpzIiwgInNyYy9pbmRleC5qcyIsICJzcmMvZXhhbXBsZS9tdmNBcHBsaWNhdGlvbi9jb250cm9sbGVyLmpzIiwgInNyYy9leGFtcGxlL212Y0FwcGxpY2F0aW9uL2NvbnN0YW50cy5qcyIsICJzcmMvZXhhbXBsZS9tdmNBcHBsaWNhdGlvbi92aWV3L2lucHV0L3Bhc3N3b3JkLmpzIiwgInNyYy9leGFtcGxlL212Y0FwcGxpY2F0aW9uL3ZpZXcvcGFyYWdyYXBoL3ZhbGlkYXRpb25FcnJvci5qcyIsICJzcmMvZXhhbXBsZS9tdmNBcHBsaWNhdGlvbi92aWV3L2Zvcm0vcGFzc3dvcmQuanMiLCAic3JjL2V4YW1wbGUvbXZjQXBwbGljYXRpb24vdmlldy9wYXJhZ3JhcGgvbWVzc2FnZS5qcyIsICJzcmMvZXhhbXBsZS9tdmNBcHBsaWNhdGlvbi92aWV3L2J1dHRvbi9yZXNldFBhc3N3b3JkLmpzIiwgInNyYy9leGFtcGxlL212Y0FwcGxpY2F0aW9uL3ZpZXcuanMiLCAic3JjL2V4YW1wbGUvbXZjQXBwbGljYXRpb24vbW9kZWwuanMiLCAic3JjL2V4YW1wbGUvbXZjQXBwbGljYXRpb24uanMiLCAic3JjL2V4YW1wbGUvc2ltcGxlQXBwbGljYXRpb24uanMiLCAic3JjL2V4YW1wbGVzLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2Zmc2V0IHtcbiAgY29uc3RydWN0b3IodG9wLCBsZWZ0KSB7XG4gICAgdGhpcy50b3AgPSB0b3A7XG4gICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgfVxuXG4gIGdldFRvcCgpIHtcbiAgICByZXR1cm4gdGhpcy50b3A7XG4gIH1cblxuICBnZXRMZWZ0KCkge1xuICAgIHJldHVybiB0aGlzLmxlZnQ7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm91bmRzIHtcbiAgY29uc3RydWN0b3IodG9wLCBsZWZ0LCByaWdodCwgYm90dG9tKSB7XG4gICAgdGhpcy50b3AgPSB0b3A7XG4gICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XG4gICAgdGhpcy5ib3R0b20gPSBib3R0b207XG4gIH1cblxuICBnZXRUb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9wO1xuICB9XG5cbiAgZ2V0TGVmdCgpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0O1xuICB9XG5cbiAgZ2V0UmlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMucmlnaHQ7XG4gIH1cblxuICBnZXRCb3R0b20oKSB7XG4gICAgcmV0dXJuIHRoaXMuYm90dG9tO1xuICB9XG5cbiAgZ2V0V2lkdGgoKSB7XG4gICAgY29uc3Qgd2lkdGggPSAodGhpcy5yaWdodCAtIHRoaXMubGVmdCk7XG5cbiAgICByZXR1cm4gd2lkdGg7XG4gIH1cblxuICBnZXRIZWlnaHQoKSB7XG4gICAgY29uc3QgaGVpZ2h0ID0gKHRoaXMuYm90dG9tIC0gdGhpcy50b3ApO1xuXG4gICAgcmV0dXJuIGhlaWdodDtcbiAgfVxuICBcbiAgc2V0VG9wKHRvcCkge1xuICAgIHRoaXMudG9wID0gdG9wO1xuICB9XG5cbiAgc2V0TGVmdChsZWZ0KSB7XG4gICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgfVxuXG4gIHNldFJpZ2h0KHJpZ2h0KSB7XG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICB9XG5cbiAgc2V0Qm90dG9tKGJvdHRvbSkge1xuICAgIHRoaXMuYm90dG9tID0gYm90dG9tO1xuICB9XG5cbiAgc2hpZnQoaG9yaXpvbnRhbE9mZnNldCwgdmVydGljYWxPZmZzZXQpIHtcbiAgICB0aGlzLnRvcCArPSB2ZXJ0aWNhbE9mZnNldDtcbiAgICB0aGlzLmxlZnQgKz0gaG9yaXpvbnRhbE9mZnNldDtcbiAgICB0aGlzLnJpZ2h0ICs9IGhvcml6b250YWxPZmZzZXQ7XG4gICAgdGhpcy5ib3R0b20gKz0gdmVydGljYWxPZmZzZXQ7XG4gIH1cblxuICBpc092ZXJsYXBwaW5nTW91c2UobW91c2VUb3AsIG1vdXNlTGVmdCkge1xuICAgIHJldHVybiAoICAodGhpcy50b3AgPD0gbW91c2VUb3ApXG4gICAgICAgICAgICYmICh0aGlzLmxlZnQgPD0gbW91c2VMZWZ0KVxuICAgICAgICAgICAmJiAodGhpcy5yaWdodCA+IG1vdXNlTGVmdClcbiAgICAgICAgICAgJiYgKHRoaXMuYm90dG9tID4gbW91c2VUb3ApICApO1xuICB9XG5cbiAgYXJlT3ZlcmxhcHBpbmcoYm91bmRzKSB7XG4gICAgcmV0dXJuICggICh0aGlzLnRvcCA8IGJvdW5kcy5ib3R0b20pXG4gICAgICAgICAgICYmICh0aGlzLmxlZnQgPCBib3VuZHMucmlnaHQpXG4gICAgICAgICAgICYmICh0aGlzLnJpZ2h0ID4gYm91bmRzLmxlZnQpXG4gICAgICAgICAgICYmICh0aGlzLmJvdHRvbSA+IGJvdW5kcy50b3ApICApO1xuICB9XG5cbiAgc3RhdGljIGZyb21Cb3VuZGluZ0NsaWVudFJlY3QoYm91bmRpbmdDbGllbnRSZWN0KSB7XG4gICAgY29uc3Qgd2luZG93U2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0LCAvLy9cbiAgICAgICAgICB3aW5kb3dTY3JvbGxMZWZ0ID0gd2luZG93LnBhZ2VYT2Zmc2V0LCAgLy8vXG4gICAgICAgICAgdG9wID0gYm91bmRpbmdDbGllbnRSZWN0LnRvcCArIHdpbmRvd1Njcm9sbFRvcCxcbiAgICAgICAgICBsZWZ0ID0gYm91bmRpbmdDbGllbnRSZWN0LmxlZnQgKyB3aW5kb3dTY3JvbGxMZWZ0LFxuICAgICAgICAgIHJpZ2h0ID0gYm91bmRpbmdDbGllbnRSZWN0LnJpZ2h0ICsgd2luZG93U2Nyb2xsTGVmdCxcbiAgICAgICAgICBib3R0b20gPSBib3VuZGluZ0NsaWVudFJlY3QuYm90dG9tICsgd2luZG93U2Nyb2xsVG9wLFxuICAgICAgICAgIGJvdW5kcyA9IG5ldyBCb3VuZHModG9wLCBsZWZ0LCByaWdodCwgYm90dG9tKTtcblxuICAgIHJldHVybiBib3VuZHM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVRvcExlZnRXaWR0aEFuZEhlaWdodCh0b3AsIGxlZnQsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICBjb25zdCBib3R0b20gPSB0b3AgKyBoZWlnaHQsXG4gICAgICAgICAgcmlnaHQgPSBsZWZ0ICsgd2lkdGgsXG4gICAgICAgICAgYm91bmRzID0gbmV3IEJvdW5kcyh0b3AsIGxlZnQsIHJpZ2h0LCBib3R0b20pO1xuXG4gICAgcmV0dXJuIGJvdW5kcztcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgRk9SID0gXCJmb3JcIjtcbmV4cG9ydCBjb25zdCBCT0RZID0gXCJib2R5XCI7XG5leHBvcnQgY29uc3QgTk9ORSA9IFwibm9uZVwiO1xuZXhwb3J0IGNvbnN0IERBU0ggPSBcIi1cIjtcbmV4cG9ydCBjb25zdCBTUEFDRSA9IFwiIFwiO1xuZXhwb3J0IGNvbnN0IENMQVNTID0gXCJjbGFzc1wiO1xuZXhwb3J0IGNvbnN0IFdJRFRIID0gXCJ3aWR0aFwiO1xuZXhwb3J0IGNvbnN0IEJMT0NLID0gXCJibG9ja1wiO1xuZXhwb3J0IGNvbnN0IEhFSUdIVCA9IFwiaGVpZ2h0XCI7XG5leHBvcnQgY29uc3QgT0JKRUNUID0gXCJvYmplY3RcIjtcbmV4cG9ydCBjb25zdCBTVFJJTkcgPSBcInN0cmluZ1wiO1xuZXhwb3J0IGNvbnN0IERJU1BMQVkgPSBcImRpc3BsYXlcIjtcbmV4cG9ydCBjb25zdCBCT09MRUFOID0gXCJib29sZWFuXCI7XG5leHBvcnQgY29uc3QgRElTQUJMRUQgPSBcImRpc2FibGVkXCI7XG5leHBvcnQgY29uc3QgRlVOQ1RJT04gPSBcImZ1bmN0aW9uXCI7XG5leHBvcnQgY29uc3QgV0lMRENBUkQgPSBcIipcIjtcbmV4cG9ydCBjb25zdCBIVE1MX0ZPUiA9IFwiaHRtbEZvclwiO1xuZXhwb3J0IGNvbnN0IFVOREVGSU5FRCA9ICd1bmRlZmluZWQnO1xuZXhwb3J0IGNvbnN0IENMQVNTX05BTUUgPSBcImNsYXNzTmFtZVwiO1xuZXhwb3J0IGNvbnN0IEFCT1VUX0JMQU5LID0gXCJhYm91dDpibGFua1wiO1xuZXhwb3J0IGNvbnN0IEVNUFRZX1NUUklORyA9IFwiXCI7XG5leHBvcnQgY29uc3QgU1ZHX05BTUVTUEFDRV9VUkkgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7XG5leHBvcnQgY29uc3QgREVGQVVMVF9QUk9QRVJUSUVTID0gXCJkZWZhdWx0UHJvcGVydGllc1wiO1xuZXhwb3J0IGNvbnN0IElHTk9SRURfUFJPUEVSVElFUyA9IFwiaWdub3JlZFByb3BlcnRpZXNcIjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQk9PTEVBTiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmUodGFyZ2V0LCBzb3VyY2UgPSB7fSkge1xuICB0YXJnZXQgPSB7IC4uLnRhcmdldCB9OyAgLy8vXG5cbiAgY29uc3QgbmFtZXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpOyAgLy8vXG5cbiAgbmFtZXMuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgIGNvbnN0IHRhcmdldFZhbHVlID0gdGFyZ2V0W25hbWVdLFxuICAgICAgICAgIHNvdXJjZVZhbHVlID0gc291cmNlW25hbWVdLFxuICAgICAgICAgIHRhcmdldEhhc093blByb3BlcnR5ID0gdGFyZ2V0Lmhhc093blByb3BlcnR5KG5hbWUpO1xuXG4gICAgdGFyZ2V0W25hbWVdID0gdGFyZ2V0SGFzT3duUHJvcGVydHkgP1xuICAgICAgICAgICAgICAgICAgICAgY29tYmluZVZhbHVlcyh0YXJnZXRWYWx1ZSwgc291cmNlVmFsdWUpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgc291cmNlVmFsdWU7IC8vL1xuICB9KTtcblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJ1bmUodGFyZ2V0LCBuYW1lcyA9IFtdKSB7XG4gIHRhcmdldCA9IHsgLi4udGFyZ2V0IH07ICAvLy9cblxuICBuYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0SGFzT3duUHJvcGVydHkgPSB0YXJnZXQuaGFzT3duUHJvcGVydHkobmFtZSk7XG5cbiAgICBpZiAodGFyZ2V0SGFzT3duUHJvcGVydHkpIHtcbiAgICAgIGRlbGV0ZSB0YXJnZXRbbmFtZV07XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBjb21iaW5lVmFsdWVzKHRhcmdldFZhbHVlLCBzb3VyY2VWYWx1ZSkge1xuICBjb25zdCB0YXJnZXRWYWx1ZUJvb2xlYW4gPSBpc1ZhbHVlQm9vbGVhbih0YXJnZXRWYWx1ZSksXG4gICAgICAgIHNvdXJjZVZhbHVlQm9vbGVhbiA9IGlzVmFsdWVCb29sZWFuKHNvdXJjZVZhbHVlKSxcbiAgICAgICAgY29tYmluZWRWYWx1ZSA9ICh0YXJnZXRWYWx1ZUJvb2xlYW4gJiYgc291cmNlVmFsdWVCb29sZWFuKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFZhbHVlIDogLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7dGFyZ2V0VmFsdWV9ICR7c291cmNlVmFsdWV9YDtcblxuICByZXR1cm4gY29tYmluZWRWYWx1ZTtcbn1cblxuZnVuY3Rpb24gaXNWYWx1ZUJvb2xlYW4odmFsdWUpIHtcbiAgY29uc3QgdmFsdWVCb29sZWFuID0gKHR5cGVvZiB2YWx1ZSA9PT0gQk9PTEVBTik7XG5cbiAgcmV0dXJuIHZhbHVlQm9vbGVhbjtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGZpcnN0KGFycmF5KSB7IHJldHVybiBhcnJheVswXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gcHVzaChhcnJheTEsIGFycmF5MikgeyBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShhcnJheTEsIGFycmF5Mik7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1Z21lbnQoYXJyYXkxLCBhcnJheTIsIHRlc3QpIHtcbiAgYXJyYXkxID0gWyAuLi5hcnJheTEgXTsgLy8vXG5cbiAgYXJyYXkyLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBhcnJheTEucHVzaChlbGVtZW50KTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBhcnJheTE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuKGFycmF5KSB7XG4gIHJldHVybiBhcnJheS5yZWR1Y2UoKGFycmF5LCBlbGVtZW50KSA9PiB7XG4gICAgYXJyYXkgPSBhcnJheS5jb25jYXQoZWxlbWVudCk7ICAvLy9cblxuICAgIHJldHVybiBhcnJheTtcbiAgfSwgW10pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3VhcmFudGVlKGFycmF5T3JFbGVtZW50KSB7XG4gIGFycmF5T3JFbGVtZW50ID0gYXJyYXlPckVsZW1lbnQgfHwgW107XG5cbiAgcmV0dXJuIChhcnJheU9yRWxlbWVudCBpbnN0YW5jZW9mIEFycmF5KSA/XG4gICAgICAgICAgICBhcnJheU9yRWxlbWVudCA6XG4gICAgICAgICAgICAgIFthcnJheU9yRWxlbWVudF07XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IERBU0ggfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjYW1lbENhc2VUb1NuYWtlQ2FzZShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC8oW0EtWl0pL2csIChtYXRjaCwgY2hhcmFjdGVyKSA9PiBEQVNIICsgY2hhcmFjdGVyLnRvTG93ZXJDYXNlKCkpO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNTVkdUYWdOYW1lKHRhZ05hbWUpIHtcbiAgcmV0dXJuIHN2Z1RhZ05hbWVzLmluY2x1ZGVzKHRhZ05hbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTVkdBdHRyaWJ1dGVOYW1lKGF0dHJpYnV0ZU5hbWUpIHtcbiAgcmV0dXJuIHN2Z0F0dHJpYnV0ZU5hbWVzLmluY2x1ZGVzKGF0dHJpYnV0ZU5hbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNIVE1MQXR0cmlidXRlTmFtZShhdHRyaWJ1dGVOYW1lKSB7XG4gIHJldHVybiBodG1sQXR0cmlidXRlTmFtZXMuaW5jbHVkZXMoYXR0cmlidXRlTmFtZSk7XG59XG5cbmNvbnN0IHN2Z1RhZ05hbWVzID0gW1xuICAgICAgICBcImFsdEdseXBoXCIsIFwiYW5pbWF0ZVwiLCBcImFuaW1hdGVDb2xvclwiLCBcImFuaW1hdGVNb3Rpb25cIiwgXCJhbmltYXRlVHJhbnNmb3JtXCIsIFwiYW5pbWF0aW9uXCIsIFwiYXVkaW9cIixcbiAgICAgICAgXCJjaXJjbGVcIiwgXCJjbGlwUGF0aFwiLCBcImNvbG9yLXByb2ZpbGVcIiwgXCJjdXJzb3JcIixcbiAgICAgICAgXCJkZWZzXCIsIFwiZGVzY1wiLCBcImRpc2NhcmRcIixcbiAgICAgICAgXCJlbGxpcHNlXCIsXG4gICAgICAgIFwiZmVCbGVuZFwiLCBcImZlQ29sb3JNYXRyaXhcIiwgXCJmZUNvbXBvbmVudFRyYW5zZmVyXCIsIFwiZmVDb21wb3NpdGVcIiwgXCJmZUNvbnZvbHZlTWF0cml4XCIsIFwiZmVEaWZmdXNlTGlnaHRpbmdcIiwgXCJmZURpc3BsYWNlbWVudE1hcFwiLCBcImZlRGlzdGFudExpZ2h0XCIsIFwiZmVEcm9wU2hhZG93XCIsIFwiZmVGbG9vZFwiLCBcImZlRnVuY0FcIiwgXCJmZUZ1bmNCXCIsIFwiZmVGdW5jR1wiLCBcImZlRnVuY1JcIiwgXCJmZUdhdXNzaWFuQmx1clwiLCBcImZlSW1hZ2VcIiwgXCJmZU1lcmdlXCIsIFwiZmVNZXJnZU5vZGVcIiwgXCJmZU1vcnBob2xvZ3lcIiwgXCJmZU9mZnNldFwiLCBcImZlUG9pbnRMaWdodFwiLCBcImZlU3BlY3VsYXJMaWdodGluZ1wiLCBcImZlU3BvdExpZ2h0XCIsIFwiZmVUaWxlXCIsIFwiZmVUdXJidWxlbmNlXCIsIFwiZmlsdGVyXCIsIFwiZm9udFwiLCBcImZvbnQtZmFjZVwiLCBcImZvbnQtZmFjZS1mb3JtYXRcIiwgXCJmb250LWZhY2UtbmFtZVwiLCBcImZvbnQtZmFjZS11cmlcIiwgXCJmb3JlaWduT2JqZWN0XCIsXG4gICAgICAgIFwiZ1wiLCBcImdseXBoXCIsIFwiZ2x5cGhSZWZcIixcbiAgICAgICAgXCJoYW5kbGVyXCIsIFwiaGF0Y2hcIiwgXCJoYXRjaHBhdGhcIiwgXCJoa2VyblwiLFxuICAgICAgICBcImltYWdlXCIsIFwibGluZVwiLCBcImxpbmVhckdyYWRpZW50XCIsXG4gICAgICAgIFwibGlzdGVuZXJcIixcbiAgICAgICAgXCJtYXJrZXJcIiwgXCJtYXNrXCIsIFwibWVzaFwiLCBcIm1lc2hncmFkaWVudFwiLCBcIm1lc2hwYXRjaFwiLCBcIm1lc2hyb3dcIiwgXCJtZXRhZGF0YVwiLCBcIm1pc3NpbmctZ2x5cGhcIiwgXCJtcGF0aFwiLFxuICAgICAgICBcInBhdGhcIiwgXCJwYXR0ZXJuXCIsIFwicG9seWdvblwiLCBcInBvbHlsaW5lXCIsIFwicHJlZmV0Y2hcIixcbiAgICAgICAgXCJyYWRpYWxHcmFkaWVudFwiLCBcInJlY3RcIixcbiAgICAgICAgXCJzY3JpcHRcIiwgXCJzZXRcIiwgXCJzb2xpZGNvbG9yXCIsIFwic3RvcFwiLCBcInN0eWxlXCIsIFwic3ZnXCIsIFwic3dpdGNoXCIsIFwic3ltYm9sXCIsXG4gICAgICAgIFwidGJyZWFrXCIsIFwidGV4dFwiLCBcInRleHRBcmVhXCIsIFwidGV4dFBhdGhcIiwgXCJ0aXRsZVwiLCBcInRyZWZcIiwgXCJ0c3BhblwiLFxuICAgICAgICBcInVua25vd25cIiwgXCJ1c2VcIixcbiAgICAgICAgXCJ2aWRlb1wiLCBcInZpZXdcIiwgXCJ2a2VyblwiXG4gICAgICBdLFxuICAgICAgc3ZnQXR0cmlidXRlTmFtZXMgPSBbXG4gICAgICAgIFwiYWNjZW50LWhlaWdodFwiLCBcImFjY3VtdWxhdGVcIiwgXCJhZGRpdGl2ZVwiLCBcImFsaWdubWVudC1iYXNlbGluZVwiLCBcImFscGhhYmV0aWNcIiwgXCJhbXBsaXR1ZGVcIiwgXCJhcmFiaWMtZm9ybVwiLCBcImFzY2VudFwiLCBcImF0dHJpYnV0ZU5hbWVcIiwgXCJhdHRyaWJ1dGVUeXBlXCIsIFwiYXppbXV0aFwiLFxuICAgICAgICBcImJhbmR3aWR0aFwiLCBcImJhc2VGcmVxdWVuY3lcIiwgXCJiYXNlUHJvZmlsZVwiLCBcImJhc2VsaW5lLXNoaWZ0XCIsIFwiYmJveFwiLCBcImJlZ2luXCIsIFwiYmlhc1wiLCBcImJ5XCIsXG4gICAgICAgIFwiY2FsY01vZGVcIiwgXCJjYXAtaGVpZ2h0XCIsIFwiY2xpcFwiLCBcImNsYXNzTmFtZVwiLCBcImNsaXAtcGF0aFwiLCBcImNsaXAtcnVsZVwiLCBcImNsaXBQYXRoVW5pdHNcIiwgXCJjb2xvclwiLCBcImNvbG9yLWludGVycG9sYXRpb25cIiwgXCJjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnNcIiwgXCJjb2xvci1wcm9maWxlXCIsIFwiY29sb3ItcmVuZGVyaW5nXCIsIFwiY29udGVudFNjcmlwdFR5cGVcIiwgXCJjb250ZW50U3R5bGVUeXBlXCIsIFwiY3Jvc3NvcmlnaW5cIiwgXCJjdXJzb3JcIiwgXCJjeFwiLCBcImN5XCIsXG4gICAgICAgIFwiZFwiLCBcImRlZmF1bHRBY3Rpb25cIiwgXCJkZXNjZW50XCIsIFwiZGlmZnVzZUNvbnN0YW50XCIsIFwiZGlyZWN0aW9uXCIsIFwiZGlzcGxheVwiLCBcImRpdmlzb3JcIiwgXCJkb21pbmFudC1iYXNlbGluZVwiLCBcImRvd25sb2FkXCIsIFwiZHVyXCIsIFwiZHhcIiwgXCJkeVwiLFxuICAgICAgICBcImVkZ2VNb2RlXCIsIFwiZWRpdGFibGVcIiwgXCJlbGV2YXRpb25cIiwgXCJlbmFibGUtYmFja2dyb3VuZFwiLCBcImVuZFwiLCBcImV2ZW50XCIsIFwiZXhwb25lbnRcIiwgXCJleHRlcm5hbFJlc291cmNlc1JlcXVpcmVkXCIsXG4gICAgICAgIFwiZmlsbFwiLCBcImZpbGwtb3BhY2l0eVwiLCBcImZpbGwtcnVsZVwiLCBcImZpbHRlclwiLCBcImZpbHRlclJlc1wiLCBcImZpbHRlclVuaXRzXCIsIFwiZmxvb2QtY29sb3JcIiwgXCJmbG9vZC1vcGFjaXR5XCIsIFwiZm9jdXNIaWdobGlnaHRcIiwgXCJmb2N1c2FibGVcIiwgXCJmb250LWZhbWlseVwiLCBcImZvbnQtc2l6ZVwiLCBcImZvbnQtc2l6ZS1hZGp1c3RcIiwgXCJmb250LXN0cmV0Y2hcIiwgXCJmb250LXN0eWxlXCIsIFwiZm9udC12YXJpYW50XCIsIFwiZm9udC13ZWlnaHRcIiwgXCJmb3JtYXRcIiwgXCJmclwiLCBcImZyb21cIiwgXCJmeFwiLCBcImZ5XCIsXG4gICAgICAgIFwiZzFcIiwgXCJnMlwiLCBcImdseXBoLW5hbWVcIiwgXCJnbHlwaC1vcmllbnRhdGlvbi1ob3Jpem9udGFsXCIsIFwiZ2x5cGgtb3JpZW50YXRpb24tdmVydGljYWxcIiwgXCJnbHlwaFJlZlwiLCBcImdyYWRpZW50VHJhbnNmb3JtXCIsIFwiZ3JhZGllbnRVbml0c1wiLFxuICAgICAgICBcImhhbmRsZXJcIiwgXCJoYW5naW5nXCIsIFwiaGF0Y2hDb250ZW50VW5pdHNcIiwgXCJoYXRjaFVuaXRzXCIsIFwiaGVpZ2h0XCIsIFwiaG9yaXotYWR2LXhcIiwgXCJob3Jpei1vcmlnaW4teFwiLCBcImhvcml6LW9yaWdpbi15XCIsIFwiaHJlZlwiLCBcImhyZWZsYW5nXCIsXG4gICAgICAgIFwiaWRcIiwgXCJpZGVvZ3JhcGhpY1wiLCBcImltYWdlLXJlbmRlcmluZ1wiLCBcImluXCIsIFwiaW4yXCIsIFwiaW5pdGlhbFZpc2liaWxpdHlcIiwgXCJpbnRlcmNlcHRcIixcbiAgICAgICAgXCJrXCIsIFwiazFcIiwgXCJrMlwiLCBcImszXCIsIFwiazRcIiwgXCJrZXJuZWxNYXRyaXhcIiwgXCJrZXJuZWxVbml0TGVuZ3RoXCIsIFwia2VybmluZ1wiLCBcImtleVBvaW50c1wiLCBcImtleVNwbGluZXNcIiwgXCJrZXlUaW1lc1wiLFxuICAgICAgICBcImxlbmd0aEFkanVzdFwiLCBcImxldHRlci1zcGFjaW5nXCIsIFwibGlnaHRpbmctY29sb3JcIiwgXCJsaW1pdGluZ0NvbmVBbmdsZVwiLCBcImxvY2FsXCIsXG4gICAgICAgIFwibWFya2VyLWVuZFwiLCBcIm1hcmtlci1taWRcIiwgXCJtYXJrZXItc3RhcnRcIiwgXCJtYXJrZXJIZWlnaHRcIiwgXCJtYXJrZXJVbml0c1wiLCBcIm1hcmtlcldpZHRoXCIsIFwibWFza1wiLCBcIm1hc2tDb250ZW50VW5pdHNcIiwgXCJtYXNrVW5pdHNcIiwgXCJtYXRoZW1hdGljYWxcIiwgXCJtYXhcIiwgXCJtZWRpYVwiLCBcIm1lZGlhQ2hhcmFjdGVyRW5jb2RpbmdcIiwgXCJtZWRpYUNvbnRlbnRFbmNvZGluZ3NcIiwgXCJtZWRpYVNpemVcIiwgXCJtZWRpYVRpbWVcIiwgXCJtZXRob2RcIiwgXCJtaW5cIiwgXCJtb2RlXCIsXG4gICAgICAgIFwibmFtZVwiLCBcIm5hdi1kb3duXCIsIFwibmF2LWRvd24tbGVmdFwiLCBcIm5hdi1kb3duLXJpZ2h0XCIsIFwibmF2LWxlZnRcIiwgXCJuYXYtbmV4dFwiLCBcIm5hdi1wcmV2XCIsIFwibmF2LXJpZ2h0XCIsIFwibmF2LXVwXCIsIFwibmF2LXVwLWxlZnRcIiwgXCJuYXYtdXAtcmlnaHRcIiwgXCJudW1PY3RhdmVzXCIsXG4gICAgICAgIFwib2JzZXJ2ZXJcIiwgXCJvZmZzZXRcIiwgXCJvcGFjaXR5XCIsIFwib3BlcmF0b3JcIiwgXCJvcmRlclwiLCBcIm9yaWVudFwiLCBcIm9yaWVudGF0aW9uXCIsIFwib3JpZ2luXCIsIFwib3ZlcmZsb3dcIiwgXCJvdmVybGF5XCIsIFwib3ZlcmxpbmUtcG9zaXRpb25cIiwgXCJvdmVybGluZS10aGlja25lc3NcIixcbiAgICAgICAgXCJwYW5vc2UtMVwiLCBcInBhdGhcIiwgXCJwYXRoTGVuZ3RoXCIsIFwicGF0dGVybkNvbnRlbnRVbml0c1wiLCBcInBhdHRlcm5UcmFuc2Zvcm1cIiwgXCJwYXR0ZXJuVW5pdHNcIiwgXCJwaGFzZVwiLCBcInBpdGNoXCIsIFwicGxheWJhY2tPcmRlclwiLCBcInBsYXliYWNrb3JkZXJcIiwgXCJwb2ludGVyLWV2ZW50c1wiLCBcInBvaW50c1wiLCBcInBvaW50c0F0WFwiLCBcInBvaW50c0F0WVwiLCBcInBvaW50c0F0WlwiLCBcInByZXNlcnZlQWxwaGFcIiwgXCJwcmVzZXJ2ZUFzcGVjdFJhdGlvXCIsIFwicHJpbWl0aXZlVW5pdHNcIiwgXCJwcm9wYWdhdGVcIixcbiAgICAgICAgXCJyXCIsIFwicmFkaXVzXCIsIFwicmVmWFwiLCBcInJlZllcIiwgXCJyZW5kZXJpbmctaW50ZW50XCIsIFwicmVwZWF0Q291bnRcIiwgXCJyZXBlYXREdXJcIiwgXCJyZXF1aXJlZEV4dGVuc2lvbnNcIiwgXCJyZXF1aXJlZEZlYXR1cmVzXCIsIFwicmVxdWlyZWRGb250c1wiLCBcInJlcXVpcmVkRm9ybWF0c1wiLCBcInJlc3RhcnRcIiwgXCJyZXN1bHRcIiwgXCJyb3RhdGVcIiwgXCJyeFwiLCBcInJ5XCIsXG4gICAgICAgIFwic2NhbGVcIiwgXCJzZWVkXCIsIFwic2hhcGUtcmVuZGVyaW5nXCIsIFwic2lkZVwiLCBcInNsb3BlXCIsIFwic25hcHNob3RUaW1lXCIsIFwic3BhY2luZ1wiLCBcInNwZWN1bGFyQ29uc3RhbnRcIiwgXCJzcGVjdWxhckV4cG9uZW50XCIsIFwic3ByZWFkTWV0aG9kXCIsIFwic3JjXCIsIFwic3RhcnRPZmZzZXRcIiwgXCJzdGREZXZpYXRpb25cIiwgXCJzdGVtaFwiLCBcInN0ZW12XCIsIFwic3RpdGNoVGlsZXNcIiwgXCJzdG9wLWNvbG9yXCIsIFwic3RvcC1vcGFjaXR5XCIsIFwic3RyaWtldGhyb3VnaC1wb3NpdGlvblwiLCBcInN0cmlrZXRocm91Z2gtdGhpY2tuZXNzXCIsIFwic3RyaW5nXCIsIFwic3Ryb2tlXCIsIFwic3Ryb2tlLWRhc2hhcnJheVwiLCBcInN0cm9rZS1kYXNob2Zmc2V0XCIsIFwic3Ryb2tlLWxpbmVjYXBcIiwgXCJzdHJva2UtbGluZWpvaW5cIiwgXCJzdHJva2UtbWl0ZXJsaW1pdFwiLCBcInN0cm9rZS1vcGFjaXR5XCIsIFwic3Ryb2tlLXdpZHRoXCIsIFwic3R5bGVcIiwgXCJzdXJmYWNlU2NhbGVcIiwgXCJzeW5jQmVoYXZpb3JcIiwgXCJzeW5jQmVoYXZpb3JEZWZhdWx0XCIsIFwic3luY01hc3RlclwiLCBcInN5bmNUb2xlcmFuY2VcIiwgXCJzeW5jVG9sZXJhbmNlRGVmYXVsdFwiLCBcInN5c3RlbUxhbmd1YWdlXCIsXG4gICAgICAgIFwidGFibGVWYWx1ZXNcIiwgXCJ0YXJnZXRcIiwgXCJ0YXJnZXRYXCIsIFwidGFyZ2V0WVwiLCBcInRleHQtYW5jaG9yXCIsIFwidGV4dC1kZWNvcmF0aW9uXCIsIFwidGV4dC1yZW5kZXJpbmdcIiwgXCJ0ZXh0TGVuZ3RoXCIsIFwidGltZWxpbmVCZWdpblwiLCBcInRpbWVsaW5lYmVnaW5cIiwgXCJ0aXRsZVwiLCBcInRvXCIsIFwidHJhbnNmb3JtXCIsIFwidHJhbnNmb3JtQmVoYXZpb3JcIiwgXCJ0eXBlXCIsXG4gICAgICAgIFwidTFcIiwgXCJ1MlwiLCBcInVuZGVybGluZS1wb3NpdGlvblwiLCBcInVuZGVybGluZS10aGlja25lc3NcIiwgXCJ1bmljb2RlXCIsIFwidW5pY29kZS1iaWRpXCIsIFwidW5pY29kZS1yYW5nZVwiLCBcInVuaXRzLXBlci1lbVwiLFxuICAgICAgICBcInYtYWxwaGFiZXRpY1wiLCBcInYtaGFuZ2luZ1wiLCBcInYtaWRlb2dyYXBoaWNcIiwgXCJ2LW1hdGhlbWF0aWNhbFwiLCBcInZhbHVlc1wiLCBcInZlcnNpb25cIiwgXCJ2ZXJ0LWFkdi15XCIsIFwidmVydC1vcmlnaW4teFwiLCBcInZlcnQtb3JpZ2luLXlcIiwgXCJ2aWV3Qm94XCIsIFwidmlld1RhcmdldFwiLCBcInZpc2liaWxpdHlcIixcbiAgICAgICAgXCJ3aWR0aFwiLCBcIndpZHRoc1wiLCBcIndvcmQtc3BhY2luZ1wiLCBcIndyaXRpbmctbW9kZVwiLFxuICAgICAgICBcInhcIiwgXCJ4LWhlaWdodFwiLCBcIngxXCIsIFwieDJcIiwgXCJ4Q2hhbm5lbFNlbGVjdG9yXCIsXG4gICAgICAgIFwieVwiLCBcInkxXCIsIFwieTJcIiwgXCJ5Q2hhbm5lbFNlbGVjdG9yXCIsXG4gICAgICAgIFwielwiLCBcInpvb21BbmRQYW5cIlxuICAgICAgXSxcbiAgICAgIGh0bWxBdHRyaWJ1dGVOYW1lcyA9IFtcbiAgICAgICAgXCJhY2NlcHRcIiwgXCJhY2NlcHRDaGFyc2V0XCIsIFwiYWNjZXNzS2V5XCIsIFwiYWN0aW9uXCIsIFwiYWxsb3dcIiwgXCJhbGxvd0Z1bGxTY3JlZW5cIiwgXCJhbGxvd1RyYW5zcGFyZW5jeVwiLCBcImFsdFwiLCBcImFzeW5jXCIsIFwiYXV0b0NvbXBsZXRlXCIsIFwiYXV0b0ZvY3VzXCIsIFwiYXV0b1BsYXlcIixcbiAgICAgICAgXCJjYXB0dXJlXCIsIFwiY2VsbFBhZGRpbmdcIiwgXCJjZWxsU3BhY2luZ1wiLCBcImNoYWxsZW5nZVwiLCBcImNoYXJTZXRcIiwgXCJjaGVja2VkXCIsIFwiY2l0ZVwiLCBcImNsYXNzSURcIiwgXCJjbGFzc05hbWVcIiwgXCJjb2xTcGFuXCIsIFwiY29sc1wiLCBcImNvbnRlbnRcIiwgXCJjb250ZW50RWRpdGFibGVcIiwgXCJjb250ZXh0TWVudVwiLCBcImNvbnRyb2xzXCIsIFwiY29vcmRzXCIsIFwiY3Jvc3NPcmlnaW5cIixcbiAgICAgICAgXCJkYXRhXCIsIFwiZGF0ZVRpbWVcIiwgXCJkZWZhdWx0XCIsIFwiZGVmZXJcIiwgXCJkaXJcIiwgXCJkaXNhYmxlZFwiLCBcImRvd25sb2FkXCIsIFwiZHJhZ2dhYmxlXCIsXG4gICAgICAgIFwiZW5jVHlwZVwiLFxuICAgICAgICBcImZvcm1cIiwgXCJmb3JtQWN0aW9uXCIsIFwiZm9ybUVuY1R5cGVcIiwgXCJmb3JtTWV0aG9kXCIsIFwiZm9ybU5vVmFsaWRhdGVcIiwgXCJmb3JtVGFyZ2V0XCIsIFwiZnJhbWVCb3JkZXJcIixcbiAgICAgICAgXCJoZWFkZXJzXCIsIFwiaGVpZ2h0XCIsIFwiaGlkZGVuXCIsIFwiaGlnaFwiLCBcImhyZWZcIiwgXCJocmVmTGFuZ1wiLCBcImh0bWxGb3JcIiwgXCJodHRwRXF1aXZcIixcbiAgICAgICAgXCJpY29uXCIsIFwiaWRcIiwgXCJpbnB1dE1vZGVcIiwgXCJpbnRlZ3JpdHlcIiwgXCJpc1wiLFxuICAgICAgICBcImtleVBhcmFtc1wiLCBcImtleVR5cGVcIiwgXCJraW5kXCIsXG4gICAgICAgIFwibGFiZWxcIiwgXCJsYW5nXCIsIFwibGlzdFwiLCBcImxvb3BcIiwgXCJsb3dcIixcbiAgICAgICAgXCJtYW5pZmVzdFwiLCBcIm1hcmdpbkhlaWdodFwiLCBcIm1hcmdpbldpZHRoXCIsIFwibWF4XCIsIFwibWF4TGVuZ3RoXCIsIFwibWVkaWFcIiwgXCJtZWRpYUdyb3VwXCIsIFwibWV0aG9kXCIsIFwibWluXCIsIFwibWluTGVuZ3RoXCIsIFwibXVsdGlwbGVcIiwgXCJtdXRlZFwiLFxuICAgICAgICBcIm5hbWVcIiwgXCJub1ZhbGlkYXRlXCIsIFwibm9uY2VcIixcbiAgICAgICAgXCJvcGVuXCIsIFwib3B0aW11bVwiLFxuICAgICAgICBcInBhdHRlcm5cIiwgXCJwbGFjZWhvbGRlclwiLCBcInBvc3RlclwiLCBcInByZWxvYWRcIiwgXCJwcm9maWxlXCIsXG4gICAgICAgIFwicmFkaW9Hcm91cFwiLCBcInJlYWRPbmx5XCIsIFwicmVsXCIsIFwicmVxdWlyZWRcIiwgXCJyZXZlcnNlZFwiLCBcInJvbGVcIiwgXCJyb3dTcGFuXCIsIFwicm93c1wiLFxuICAgICAgICBcInNhbmRib3hcIiwgXCJzY29wZVwiLCBcInNjb3BlZFwiLCBcInNjcm9sbGluZ1wiLCBcInNlYW1sZXNzXCIsIFwic2VsZWN0ZWRcIiwgXCJzaGFwZVwiLCBcInNpemVcIiwgXCJzaXplc1wiLCBcInNwYW5cIiwgXCJzcGVsbENoZWNrXCIsIFwic3JjXCIsIFwic3JjRG9jXCIsIFwic3JjTGFuZ1wiLCBcInNyY1NldFwiLCBcInN0YXJ0XCIsIFwic3RlcFwiLCBcInN0eWxlXCIsIFwic3VtbWFyeVwiLFxuICAgICAgICBcInRhYkluZGV4XCIsIFwidGFyZ2V0XCIsIFwidGl0bGVcIiwgXCJ0eXBlXCIsXG4gICAgICAgIFwidXNlTWFwXCIsXG4gICAgICAgIFwidmFsdWVcIixcbiAgICAgICAgXCJ3aWR0aFwiLFxuICAgICAgICBcIndtb2RlXCIsXG4gICAgICAgIFwid3JhcFwiXG4gICAgICBdO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgV0lMRENBUkQgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhkb21FbGVtZW50cykge1xuICBjb25zdCBkb21FbGVtZW50c1dpdGhFbGVtZW50cyA9IGZpbHRlckRPTU5vZGVzKGRvbUVsZW1lbnRzLCAoZG9tRWxlbWVudCkgPT4ge1xuICAgICAgICAgIGlmICgoZG9tRWxlbWVudC5fX2VsZW1lbnRfXykpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIGVsZW1lbnRzID0gZG9tRWxlbWVudHNXaXRoRWxlbWVudHMubWFwKChkb21FbGVtZW50KSA9PiB7XG4gICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvbUVsZW1lbnQuX19lbGVtZW50X187XG5cbiAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZShkb21Ob2RlLCBoZWlnaHQsIGFzY2VuZGFudERPTU5vZGVzID0gW10pIHtcbiAgaWYgKGhlaWdodCA+IDApIHtcbiAgICBjb25zdCBwYXJlbnRET01Ob2RlID0gZG9tTm9kZS5wYXJlbnRFbGVtZW50OyAgLy8vXG5cbiAgICBpZiAocGFyZW50RE9NTm9kZSAhPT0gbnVsbCkge1xuICAgICAgYXNjZW5kYW50RE9NTm9kZXMucHVzaChwYXJlbnRET01Ob2RlKTtcblxuICAgICAgaGVpZ2h0LS07XG5cbiAgICAgIGFzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUocGFyZW50RE9NTm9kZSwgaGVpZ2h0LCBhc2NlbmRhbnRET01Ob2Rlcyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFzY2VuZGFudERPTU5vZGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUoZG9tTm9kZSwgZGVwdGgsIGRlc2NlbmRhbnRET01Ob2RlcyA9IFtdKSB7XG4gIGlmIChkZXB0aCA+IDApIHtcbiAgICBjb25zdCBjaGlsZERPTU5vZGVzID0gZG9tTm9kZS5jaGlsZE5vZGVzOyAgLy8vXG5cbiAgICBwdXNoKGRlc2NlbmRhbnRET01Ob2RlcywgY2hpbGRET01Ob2Rlcyk7XG5cbiAgICBkZXB0aC0tO1xuXG4gICAgY2hpbGRET01Ob2Rlcy5mb3JFYWNoKChjaGlsZERPTU5vZGUpID0+IHtcbiAgICAgIGRlc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlKGNoaWxkRE9NTm9kZSwgZGVwdGgsIGRlc2NlbmRhbnRET01Ob2Rlcyk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZGVzY2VuZGFudERPTU5vZGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyRE9NTm9kZXNCeVNlbGVjdG9yKGRvbU5vZGVzLCBzZWxlY3Rvcikge1xuICBjb25zdCBmaWx0ZXJlZERPTU5vZGVzID0gZmlsdGVyRE9NTm9kZXMoZG9tTm9kZXMsIChkb21Ob2RlKSA9PiB7XG4gICAgaWYgKGRvbU5vZGVNYXRjaGVzU2VsZWN0b3IoZG9tTm9kZSwgc2VsZWN0b3IpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBmaWx0ZXJlZERPTU5vZGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZG9tTm9kZU1hdGNoZXNTZWxlY3Rvcihkb21Ob2RlLCBzZWxlY3Rvcikge1xuICBjb25zdCBkb21Ob2RlVHlwZSA9IGRvbU5vZGUubm9kZVR5cGU7XG5cbiAgc3dpdGNoIChkb21Ob2RlVHlwZSkge1xuICAgIGNhc2UgTm9kZS5FTEVNRU5UX05PREU6IHtcbiAgICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb21Ob2RlOyAvLy9cblxuICAgICAgcmV0dXJuIGRvbUVsZW1lbnQubWF0Y2hlcyhzZWxlY3Rvcik7XG4gICAgfVxuXG4gICAgY2FzZSBOb2RlLlRFWFRfTk9ERToge1xuICAgICAgaWYgKHNlbGVjdG9yID09PSBXSUxEQ0FSRCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJET01Ob2Rlcyhkb21Ob2RlcywgdGVzdCkge1xuICBjb25zdCBmaWx0ZXJlZERPTU5vZGVzID0gW10sXG4gICAgICAgIGRvbU5vZGVzTGVuZ3RoID0gZG9tTm9kZXMubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkb21Ob2Rlc0xlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGRvbU5vZGUgPSBkb21Ob2Rlc1tpbmRleF0sXG4gICAgICAgICAgcmVzdWx0ID0gdGVzdChkb21Ob2RlKTtcblxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIGZpbHRlcmVkRE9NTm9kZXMucHVzaChkb21Ob2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmlsdGVyZWRET01Ob2Rlcztcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBXSUxEQ0FSRCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGRvbU5vZGVNYXRjaGVzU2VsZWN0b3IsIGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzLCBmaWx0ZXJET01Ob2Rlc0J5U2VsZWN0b3IsIGFzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUsIGRlc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9kb21cIjtcblxuZnVuY3Rpb24gZ2V0UGFyZW50RWxlbWVudChzZWxlY3RvciA9IFdJTERDQVJEKSB7XG4gIGxldCBwYXJlbnRFbGVtZW50ID0gbnVsbDtcblxuICBjb25zdCBwYXJlbnRET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cbiAgaWYgKHBhcmVudERPTUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICBpZiAocGFyZW50RE9NRWxlbWVudC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgY29uc3QgcGFyZW50RE9NRWxlbWVudHMgPSBbcGFyZW50RE9NRWxlbWVudF0sXG4gICAgICAgICAgICBwYXJlbnRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKHBhcmVudERPTUVsZW1lbnRzKSxcbiAgICAgICAgICAgIGZpcnN0UGFyZW50RWxlbWVudCA9IGZpcnN0KHBhcmVudEVsZW1lbnRzKTtcblxuICAgICAgcGFyZW50RWxlbWVudCA9IGZpcnN0UGFyZW50RWxlbWVudCB8fCBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJlbnRFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBnZXRDaGlsZEVsZW1lbnRzKHNlbGVjdG9yID0gV0lMRENBUkQpIHtcbiAgY29uc3QgY2hpbGRET01Ob2RlcyA9IHRoaXMuZG9tRWxlbWVudC5jaGlsZE5vZGVzLFxuICAgICAgICBjaGlsZERPTUVsZW1lbnRzID0gZmlsdGVyRE9NTm9kZXNCeVNlbGVjdG9yKGNoaWxkRE9NTm9kZXMsIHNlbGVjdG9yKSxcbiAgICAgICAgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGNoaWxkRE9NRWxlbWVudHMpO1xuXG4gIHJldHVybiBjaGlsZEVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiBnZXRBc2NlbmRhbnRFbGVtZW50cyhzZWxlY3RvciA9IFdJTERDQVJELCBtYXhpbXVtSGVpZ2h0ID0gSW5maW5pdHkpIHtcbiAgY29uc3QgaGVpZ2h0ID0gbWF4aW11bUhlaWdodCwgLy8vXG4gICAgICAgIGRvbU5vZGUgPSB0aGlzLmRvbUVsZW1lbnQsICAvLy9cbiAgICAgICAgYXNjZW5kYW50RE9NTm9kZXMgPSBhc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlKGRvbU5vZGUsIGhlaWdodCksXG4gICAgICAgIGFzY2VuZGFudERPTUVsZW1lbnRzID0gZmlsdGVyRE9NTm9kZXNCeVNlbGVjdG9yKGFzY2VuZGFudERPTU5vZGVzLCBzZWxlY3RvciksXG4gICAgICAgIGFzY2VuZGFudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoYXNjZW5kYW50RE9NRWxlbWVudHMpO1xuXG4gIHJldHVybiBhc2NlbmRhbnRFbGVtZW50cztcbn1cblxuZnVuY3Rpb24gZ2V0RGVzY2VuZGFudEVsZW1lbnRzKHNlbGVjdG9yID0gV0lMRENBUkQsIG1heGltdW1EZXB0aCA9IEluZmluaXR5KSB7XG4gIGNvbnN0IGRlcHRoID0gbWF4aW11bURlcHRoLCAvLy9cbiAgICAgICAgZG9tTm9kZSA9IHRoaXMuZG9tRWxlbWVudCwgIC8vL1xuICAgICAgICBkZXNjZW5kYW50RE9NTm9kZXMgPSBkZXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZShkb21Ob2RlLCBkZXB0aCksXG4gICAgICAgIGRlc2NlbmRhbnRET01FbGVtZW50cyA9IGZpbHRlckRPTU5vZGVzQnlTZWxlY3RvcihkZXNjZW5kYW50RE9NTm9kZXMsIHNlbGVjdG9yKSxcbiAgICAgICAgZGVzY2VuZGFudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoZGVzY2VuZGFudERPTUVsZW1lbnRzKTtcblxuICByZXR1cm4gZGVzY2VuZGFudEVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiBnZXROZXh0U2libGluZ0VsZW1lbnQoc2VsZWN0b3IgPSBXSUxEQ0FSRCkge1xuICBsZXQgbmV4dFNpYmxpbmdFbGVtZW50ID0gbnVsbDtcblxuICBjb25zdCBuZXh0U2libGluZ0RPTU5vZGUgPSB0aGlzLmRvbUVsZW1lbnQubmV4dFNpYmxpbmc7XG5cbiAgaWYgKChuZXh0U2libGluZ0RPTU5vZGUgIT09IG51bGwpICYmIGRvbU5vZGVNYXRjaGVzU2VsZWN0b3IobmV4dFNpYmxpbmdET01Ob2RlLCBzZWxlY3RvcikpIHtcbiAgICBuZXh0U2libGluZ0VsZW1lbnQgPSBuZXh0U2libGluZ0RPTU5vZGUuX19lbGVtZW50X18gfHwgbnVsbDtcbiAgfVxuXG4gIHJldHVybiBuZXh0U2libGluZ0VsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGdldFByZXZpb3VzU2libGluZ0VsZW1lbnQoc2VsZWN0b3IgPSBXSUxEQ0FSRCkge1xuICBsZXQgcHJldmlvdXNTaWJsaW5nRWxlbWVudCA9IG51bGw7XG5cbiAgY29uc3QgcHJldmlvdXNTaWJsaW5nRE9NTm9kZSA9IHRoaXMuZG9tRWxlbWVudC5wcmV2aW91c1NpYmxpbmc7ICAvLy9cblxuICBpZiAoKHByZXZpb3VzU2libGluZ0RPTU5vZGUgIT09IG51bGwpICYmIGRvbU5vZGVNYXRjaGVzU2VsZWN0b3IocHJldmlvdXNTaWJsaW5nRE9NTm9kZSwgc2VsZWN0b3IpKSB7XG4gICAgcHJldmlvdXNTaWJsaW5nRWxlbWVudCA9IHByZXZpb3VzU2libGluZ0RPTU5vZGUuX19lbGVtZW50X18gfHwgbnVsbDtcbiAgfVxuXG4gIHJldHVybiBwcmV2aW91c1NpYmxpbmdFbGVtZW50O1xufVxuXG5jb25zdCBlbGVtZW50TWl4aW5zID0ge1xuICBnZXRQYXJlbnRFbGVtZW50LFxuICBnZXRDaGlsZEVsZW1lbnRzLFxuICBnZXRBc2NlbmRhbnRFbGVtZW50cyxcbiAgZ2V0RGVzY2VuZGFudEVsZW1lbnRzLFxuICBnZXROZXh0U2libGluZ0VsZW1lbnQsXG4gIGdldFByZXZpb3VzU2libGluZ0VsZW1lbnRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVsZW1lbnRNaXhpbnM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBPZmZzZXQgZnJvbSBcIi4vb2Zmc2V0XCI7XG5pbXBvcnQgQm91bmRzIGZyb20gXCIuL2JvdW5kc1wiO1xuaW1wb3J0IGVsZW1lbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2VsZW1lbnRcIjtcblxuY2xhc3MgVGV4dEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih0ZXh0KSB7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCk7IC8vL1xuXG4gICAgdGhpcy5kb21FbGVtZW50Ll9fZWxlbWVudF9fID0gdGhpcztcbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldFRleHQoKSB7XG4gICAgY29uc3Qgbm9kZVZhbHVlID0gdGhpcy5kb21FbGVtZW50Lm5vZGVWYWx1ZSxcbiAgICAgICAgICB0ZXh0ID0gbm9kZVZhbHVlOyAvLy9cblxuICAgIHJldHVybiB0ZXh0O1xuICB9XG5cbiAgc2V0VGV4dCh0ZXh0KSB7XG4gICAgY29uc3Qgbm9kZVZhbHVlID0gdGV4dDsgLy8vXG5cbiAgICB0aGlzLmRvbUVsZW1lbnQubm9kZVZhbHVlID0gbm9kZVZhbHVlO1xuICB9XG5cbiAgZ2V0T2Zmc2V0KCkge1xuICAgIGNvbnN0IHRvcCA9IHRoaXMuZG9tRWxlbWVudC5vZmZzZXRUb3AsICAvLy9cbiAgICAgICAgICBsZWZ0ID0gdGhpcy5kb21FbGVtZW50Lm9mZnNldExlZnQsICAvLy9cbiAgICAgICAgICBvZmZzZXQgPSBuZXcgT2Zmc2V0KHRvcCwgbGVmdCk7XG5cbiAgICByZXR1cm4gb2Zmc2V0O1xuICB9XG5cbiAgZ2V0Qm91bmRzKCkge1xuICAgIGNvbnN0IGJvdW5kaW5nQ2xpZW50UmVjdCA9IHRoaXMuZG9tRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICBib3VuZHMgPSBCb3VuZHMuZnJvbUJvdW5kaW5nQ2xpZW50UmVjdChib3VuZGluZ0NsaWVudFJlY3QpO1xuXG4gICAgcmV0dXJuIGJvdW5kcztcbiAgfVxuXG4gIGdldFdpZHRoKCkge1xuICAgIGNvbnN0IGNsaWVudFdpZHRoID0gdGhpcy5kb21FbGVtZW50LmNsaWVudFdpZHRoLFxuICAgICAgICAgIHdpZHRoID0gY2xpZW50V2lkdGg7ICAvLy9cblxuICAgIHJldHVybiB3aWR0aDtcbiAgfVxuXG4gIGdldEhlaWdodCgpIHtcbiAgICBjb25zdCBjbGllbnRIZWlnaHQgPSB0aGlzLmRvbUVsZW1lbnQuY2xpZW50SGVpZ2h0LFxuICAgICAgICAgIGhlaWdodCA9IGNsaWVudEhlaWdodDsgIC8vL1xuXG4gICAgcmV0dXJuIGhlaWdodDtcbiAgfVxuXG4gIHByZXBlbmRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQucHJlcGVuZCh0aGlzKTsgfVxuXG4gIGFwcGVuZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5hcHBlbmQodGhpcyk7IH1cblxuICBhZGRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQuYWRkKHRoaXMpOyB9XG5cbiAgcmVtb3ZlRnJvbShwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQucmVtb3ZlKHRoaXMpOyB9XG5cbiAgaW5zZXJ0QmVmb3JlKHNpYmxpbmdFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NTm9kZSA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQucGFyZW50Tm9kZSxcbiAgICAgICAgICBzaWJsaW5nRE9NRWxlbWVudCA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICBwYXJlbnRET01Ob2RlLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50KTtcbiAgfVxuXG4gIGluc2VydEFmdGVyKHNpYmxpbmdFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NTm9kZSA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQucGFyZW50Tm9kZSxcbiAgICAgICAgICBzaWJsaW5nRE9NRWxlbWVudCA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICBwYXJlbnRET01Ob2RlLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50Lm5leHRTaWJsaW5nKTsgIC8vL1xuICB9XG5cbiAgcmVtb3ZlKCkge1xuICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmUoKTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFRleHRFbGVtZW50LnByb3RvdHlwZSwgZWxlbWVudE1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IFRleHRFbGVtZW50O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGV4dEVsZW1lbnQgZnJvbSBcIi4uL3RleHRFbGVtZW50XCI7XG5cbmltcG9ydCB7IFNUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUZhbHNleUVsZW1lbnRzKGVsZW1lbnRzKSB7XG4gIGVsZW1lbnRzID0gZWxlbWVudHMucmVkdWNlKChlbGVtZW50cywgZWxlbWVudCkgPT4ge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50cztcbiAgfSwgW10pO1xuXG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VTdHJpbmdzV2l0aFRleHRFbGVtZW50cyhlbGVtZW50cykge1xuICBlbGVtZW50cyA9IGVsZW1lbnRzLm1hcCgoZWxlbWVudCkgPT4geyAgLy8vXG4gICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSBTVFJJTkcpIHtcbiAgICAgIGNvbnN0IHRleHQgPSBlbGVtZW50LCAgLy8vXG4gICAgICAgICAgICB0ZXh0RWxlbWVudCA9IG5ldyBUZXh0RWxlbWVudCh0ZXh0KTtcblxuICAgICAgZWxlbWVudCA9IHRleHRFbGVtZW50OyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfSk7XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBjb21iaW5lLCBwcnVuZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvb2JqZWN0XCI7XG5pbXBvcnQgeyBmaXJzdCwgZ3VhcmFudGVlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgY2FtZWxDYXNlVG9TbmFrZUNhc2UgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgaXNIVE1MQXR0cmlidXRlTmFtZSwgaXNTVkdBdHRyaWJ1dGVOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9uYW1lXCI7XG5pbXBvcnQgeyByZW1vdmVGYWxzZXlFbGVtZW50cywgcmVwbGFjZVN0cmluZ3NXaXRoVGV4dEVsZW1lbnRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50c1wiO1xuaW1wb3J0IHsgRk9SLCBDTEFTUywgT0JKRUNULCBIVE1MX0ZPUiwgQ0xBU1NfTkFNRSwgQk9PTEVBTiwgRlVOQ1RJT04sIFNWR19OQU1FU1BBQ0VfVVJJIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5mdW5jdGlvbiBhcHBseVByb3BlcnRpZXMocHJvcGVydGllcywgZGVmYXVsdFByb3BlcnRpZXMsIGlnbm9yZWRQcm9wZXJ0aWVzKSB7XG4gIHRoaXMucHJvcGVydGllcyA9IGNvbWJpbmUocHJvcGVydGllcywgZGVmYXVsdFByb3BlcnRpZXMpO1xuXG4gIHByb3BlcnRpZXMgPSBwcnVuZSh0aGlzLnByb3BlcnRpZXMsIGlnbm9yZWRQcm9wZXJ0aWVzKTsgLy8vXG5cbiAgY29uc3QgeyBuYW1lc3BhY2VVUkkgfSA9IHRoaXMuZG9tRWxlbWVudCxcbiAgICAgICAgc3ZnID0gKG5hbWVzcGFjZVVSSSA9PT0gU1ZHX05BTUVTUEFDRV9VUkkpLCAvLy9cbiAgICAgICAgcHJvcGVydGllc0tleXMgPSBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKSxcbiAgICAgICAgbmFtZXMgPSBwcm9wZXJ0aWVzS2V5czsgIC8vLz1cblxuICBuYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBwcm9wZXJ0aWVzW25hbWVdLFxuICAgICAgICAgIG5hbWVIYW5kbGVyTmFtZSA9IGlzTmFtZUhhbmRsZXJOYW1lKG5hbWUpLFxuICAgICAgICAgIG5hbWVDdXN0b21IYW5kbGVyTmFtZSA9IGlzTmFtZUN1c3RvbUhhbmRsZXJOYW1lKG5hbWUpO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKG5hbWVIYW5kbGVyTmFtZSkge1xuICAgICAgYWRkSGFuZGxlcih0aGlzLCBuYW1lLCB2YWx1ZSk7XG4gICAgfSBlbHNlIGlmIChuYW1lQ3VzdG9tSGFuZGxlck5hbWUpIHtcbiAgICAgIGFkZEN1c3RvbUhhbmRsZXIodGhpcywgbmFtZSwgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBuYW1lQXR0cmlidXRlTmFtZSA9IGlzTmFtZUF0dHJpYnV0ZU5hbWUobmFtZSwgc3ZnKTtcblxuICAgICAgaWYgKG5hbWVBdHRyaWJ1dGVOYW1lKSB7XG4gICAgICAgIGFkZEF0dHJpYnV0ZSh0aGlzLCBuYW1lLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBjaGlsZEVsZW1lbnRzID0gY2hpbGRFbGVtZW50c0Zyb21FbGVtZW50KHRoaXMpIHx8IHByb3BlcnRpZXMuY2hpbGRFbGVtZW50cywgIC8vL1xuICAgICAgICBjb250ZXh0ID0ge307XG5cbiAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IHtcbiAgICB1cGRhdGVDb250ZXh0KGNoaWxkRWxlbWVudCwgY29udGV4dCk7XG5cbiAgICB0aGlzLmFkZChjaGlsZEVsZW1lbnQpO1xuICB9KTtcblxuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xufVxuXG5mdW5jdGlvbiBnZXRQcm9wZXJ0aWVzKCkge1xuICByZXR1cm4gdGhpcy5wcm9wZXJ0aWVzO1xufVxuXG5mdW5jdGlvbiBnZXRDb250ZXh0KCkge1xuICByZXR1cm4gdGhpcy5jb250ZXh0O1xufVxuXG5mdW5jdGlvbiBhc3NpZ25Db250ZXh0KG5hbWVzLCB0aGVuRGVsZXRlKSB7XG4gIGNvbnN0IGFyZ3VtZW50c0xlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG5cbiAgaWYgKGFyZ3VtZW50c0xlbmd0aCA9PT0gMSkge1xuICAgIGNvbnN0IGZpcnN0QXJndW1lbnQgPSBmaXJzdChhcmd1bWVudHMpO1xuXG4gICAgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSBCT09MRUFOKSB7XG4gICAgICBuYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMuY29udGV4dCk7XG5cbiAgICAgIHRoZW5EZWxldGUgPSBmaXJzdEFyZ3VtZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGVuRGVsZXRlID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpZiAoYXJndW1lbnRzTGVuZ3RoID09PSAwKSB7XG4gICAgbmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLmNvbnRleHQpO1xuXG4gICAgdGhlbkRlbGV0ZSA9IHRydWU7XG4gIH1cblxuICBuYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmNvbnRleHRbbmFtZV0sXG4gICAgICAgICAgcHJvcGVydHlOYW1lID0gbmFtZSwgIC8vL1xuICAgICAgICAgIGRlc2NyaXB0b3IgPSB7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgICB9O1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIHByb3BlcnR5TmFtZSwgZGVzY3JpcHRvcik7XG5cbiAgICBpZiAodGhlbkRlbGV0ZSkge1xuICAgICAgZGVsZXRlIHRoaXMuY29udGV4dFtuYW1lXTtcbiAgICB9XG4gIH0sIFtdKTtcbn1cblxuY29uc3QganN4TWl4aW5zID0ge1xuICBhcHBseVByb3BlcnRpZXMsXG4gIGdldFByb3BlcnRpZXMsXG4gIGdldENvbnRleHQsXG4gIGFzc2lnbkNvbnRleHRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGpzeE1peGlucztcblxuZnVuY3Rpb24gY2hpbGRFbGVtZW50c0Zyb21FbGVtZW50KGVsZW1lbnQpIHtcbiAgbGV0IGNoaWxkRWxlbWVudHMgPSBudWxsO1xuXG4gIGlmICh0eXBlb2YgZWxlbWVudC5jaGlsZEVsZW1lbnRzID09PSBGVU5DVElPTikge1xuICAgIGNoaWxkRWxlbWVudHMgPSBlbGVtZW50LmNoaWxkRWxlbWVudHMuY2FsbChlbGVtZW50KTtcblxuICAgIGNoaWxkRWxlbWVudHMgPSBndWFyYW50ZWUoY2hpbGRFbGVtZW50cyk7XG5cbiAgICBjaGlsZEVsZW1lbnRzID0gcmVtb3ZlRmFsc2V5RWxlbWVudHMoY2hpbGRFbGVtZW50cyk7XG5cbiAgICBjaGlsZEVsZW1lbnRzID0gcmVwbGFjZVN0cmluZ3NXaXRoVGV4dEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpO1xuICB9XG5cbiAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUNvbnRleHQoY2hpbGRFbGVtZW50LCBjb250ZXh0KSB7XG4gIGNvbnN0IHBhcmVudENvbnRleHQgPSAodHlwZW9mIGNoaWxkRWxlbWVudC5wYXJlbnRDb250ZXh0ID09PSBGVU5DVElPTikgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZEVsZW1lbnQucGFyZW50Q29udGV4dCgpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZEVsZW1lbnQuY29udGV4dDsgLy8vXG5cbiAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCBwYXJlbnRDb250ZXh0KTtcbn1cblxuZnVuY3Rpb24gYWRkSGFuZGxlcihlbGVtZW50LCBuYW1lLCB2YWx1ZSkge1xuICBjb25zdCBldmVudFR5cGUgPSBuYW1lLnN1YnN0cmluZygyKS50b0xvd2VyQ2FzZSgpLCAvLy9cbiAgICAgICAgaGFuZGxlciA9IHZhbHVlOyAgLy8vXG5cbiAgZWxlbWVudC5vbkV2ZW50KGV2ZW50VHlwZSwgaGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIGFkZEN1c3RvbUhhbmRsZXIoZWxlbWVudCwgbmFtZSwgdmFsdWUpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gY2FtZWxDYXNlVG9TbmFrZUNhc2UobmFtZSkucmVwbGFjZSgvb24tY3VzdG9tLS8sIFwiXCIpLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gdmFsdWU7ICAvLy9cblxuICBlbGVtZW50Lm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gYWRkQXR0cmlidXRlKGVsZW1lbnQsIG5hbWUsIHZhbHVlKSB7XG4gIGlmIChuYW1lID09PSBDTEFTU19OQU1FKSB7XG4gICAgbmFtZSA9IENMQVNTO1xuICB9XG5cbiAgaWYgKG5hbWUgPT09IEhUTUxfRk9SKSB7XG4gICAgbmFtZSA9IEZPUjtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09IE9CSkVDVCkge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSk7XG5cbiAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZWxlbWVudC5kb21FbGVtZW50W25hbWVdW2tleV0gPSB2YWx1ZVtrZXldO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gQk9PTEVBTikge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdmFsdWUgPSBuYW1lOyAvLy9cblxuICAgICAgZWxlbWVudC5hZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50LmFkZEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNOYW1lSGFuZGxlck5hbWUobmFtZSkge1xuICBjb25zdCBuYW1lSGFuZGxlck5hbWUgPSAgL15vbig/IUN1c3RvbSkvLnRlc3QobmFtZSk7ICAvLy9cblxuICByZXR1cm4gbmFtZUhhbmRsZXJOYW1lO1xufVxuXG5mdW5jdGlvbiBpc05hbWVBdHRyaWJ1dGVOYW1lKG5hbWUsIHN2Zykge1xuICBjb25zdCBuYW1lQXR0cmlidXRlTmFtZSA9IHN2ZyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzU1ZHQXR0cmlidXRlTmFtZShuYW1lKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNIVE1MQXR0cmlidXRlTmFtZShuYW1lKTtcblxuICByZXR1cm4gbmFtZUF0dHJpYnV0ZU5hbWU7XG59XG5cbmZ1bmN0aW9uIGlzTmFtZUN1c3RvbUhhbmRsZXJOYW1lKG5hbWUpIHtcbiAgY29uc3QgbmFtZUN1c3RvbUhhbmRsZXJOYW1lID0gL15vbkN1c3RvbS8udGVzdChuYW1lKTtcblxuICByZXR1cm4gbmFtZUN1c3RvbUhhbmRsZXJOYW1lO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgQ1VUX0VWRU5UX1RZUEUgPSBcImN1dFwiO1xuZXhwb3J0IGNvbnN0IENPUFlfRVZFTlRfVFlQRSA9IFwiY29weVwiO1xuZXhwb3J0IGNvbnN0IEJMVVJfRVZFTlRfVFlQRSA9IFwiYmx1clwiO1xuZXhwb3J0IGNvbnN0IFBBU1RFX0VWRU5UX1RZUEUgPSBcInBhc3RlXCI7XG5leHBvcnQgY29uc3QgV0hFRUxfRVZFTlRfVFlQRSA9IFwid2hlZWxcIjtcbmV4cG9ydCBjb25zdCBJTlBVVF9FVkVOVF9UWVBFID0gXCJpbnB1dFwiO1xuZXhwb3J0IGNvbnN0IEZPQ1VTX0VWRU5UX1RZUEUgPSBcImZvY3VzXCI7XG5leHBvcnQgY29uc3QgQ0xJQ0tfRVZFTlRfVFlQRSA9IFwiY2xpY2tcIjtcbmV4cG9ydCBjb25zdCBLRVlVUF9FVkVOVF9UWVBFID0gXCJrZXl1cFwiO1xuZXhwb3J0IGNvbnN0IFNFTEVDVF9FVkVOVF9UWVBFID0gXCJzZWxlY3RcIjtcbmV4cG9ydCBjb25zdCBDSEFOR0VfRVZFTlRfVFlQRSA9IFwiY2hhbmdlXCI7XG5leHBvcnQgY29uc3QgUkVTSVpFX0VWRU5UX1RZUEUgPSBcInJlc2l6ZVwiO1xuZXhwb3J0IGNvbnN0IFNDUk9MTF9FVkVOVF9UWVBFID0gXCJzY3JvbGxcIjtcbmV4cG9ydCBjb25zdCBLRVlET1dOX0VWRU5UX1RZUEUgPSBcImtleWRvd25cIjtcbmV4cG9ydCBjb25zdCBNT1VTRVVQX0VWRU5UX1RZUEUgPSBcIm1vdXNldXBcIjtcbmV4cG9ydCBjb25zdCBBVVhDTElDS19FVkVOVF9UWVBFID0gXCJhdXhjbGlja1wiO1xuZXhwb3J0IGNvbnN0IE1PVVNFT1VUX0VWRU5UX1RZUEUgPSBcIm1vdXNlb3V0XCI7XG5leHBvcnQgY29uc3QgREJMQ0xJQ0tfRVZFTlRfVFlQRSA9IFwiZGJsY2xpY2tcIjtcbmV4cG9ydCBjb25zdCBNT1VTRU9WRVJfRVZFTlRfVFlQRSA9IFwibW91c2VvdmVyXCI7XG5leHBvcnQgY29uc3QgTU9VU0VET1dOX0VWRU5UX1RZUEUgPSBcIm1vdXNlZG93blwiO1xuZXhwb3J0IGNvbnN0IE1PVVNFTU9WRV9FVkVOVF9UWVBFID0gXCJtb3VzZW1vdmVcIjtcbmV4cG9ydCBjb25zdCBDT05URVhUTUVOVV9FVkVOVF9UWVBFID0gXCJjb250ZXh0bWVudVwiO1xuZXhwb3J0IGNvbnN0IFNFTEVDVElPTkNIQU5HRV9FVkVOVF9UWVBFID0gXCJzZWxlY3Rpb25jaGFuZ2VcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBDVVRfRVZFTlRfVFlQRSxcbiAgQ09QWV9FVkVOVF9UWVBFLFxuICBCTFVSX0VWRU5UX1RZUEUsXG4gIFBBU1RFX0VWRU5UX1RZUEUsXG4gIFdIRUVMX0VWRU5UX1RZUEUsXG4gIElOUFVUX0VWRU5UX1RZUEUsXG4gIEZPQ1VTX0VWRU5UX1RZUEUsXG4gIENMSUNLX0VWRU5UX1RZUEUsXG4gIEtFWVVQX0VWRU5UX1RZUEUsXG4gIFNFTEVDVF9FVkVOVF9UWVBFLFxuICBDSEFOR0VfRVZFTlRfVFlQRSxcbiAgUkVTSVpFX0VWRU5UX1RZUEUsXG4gIFNDUk9MTF9FVkVOVF9UWVBFLFxuICBLRVlET1dOX0VWRU5UX1RZUEUsXG4gIE1PVVNFVVBfRVZFTlRfVFlQRSxcbiAgQVVYQ0xJQ0tfRVZFTlRfVFlQRSxcbiAgTU9VU0VPVVRfRVZFTlRfVFlQRSxcbiAgREJMQ0xJQ0tfRVZFTlRfVFlQRSxcbiAgTU9VU0VPVkVSX0VWRU5UX1RZUEUsXG4gIE1PVVNFRE9XTl9FVkVOVF9UWVBFLFxuICBNT1VTRU1PVkVfRVZFTlRfVFlQRSxcbiAgQ09OVEVYVE1FTlVfRVZFTlRfVFlQRSxcbiAgU0VMRUNUSU9OQ0hBTkdFX0VWRU5UX1RZUEVcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEtFWVVQX0VWRU5UX1RZUEUsIEtFWURPV05fRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9ldmVudFR5cGVzXCI7XG5cbmZ1bmN0aW9uIG9uS2V5VXAoa2V5VXBIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub25FdmVudChLRVlVUF9FVkVOVF9UWVBFLCBrZXlVcEhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9mZktleVVwKGtleVVwSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZkV2ZW50KEtFWVVQX0VWRU5UX1RZUEUsIGtleVVwSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb25LZXlEb3duKGtleURvd25IYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub25FdmVudChLRVlET1dOX0VWRU5UX1RZUEUsIGtleURvd25IYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvZmZLZXlEb3duKGtleURvd25IYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmRXZlbnQoS0VZRE9XTl9FVkVOVF9UWVBFLCBrZXlEb3duSGFuZGxlciwgZWxlbWVudCk7IH1cblxuY29uc3Qga2V5TWl4aW5zID0ge1xuICBvbktleVVwLFxuICBvZmZLZXlVcCxcbiAgb25LZXlEb3duLFxuICBvZmZLZXlEb3duXG59O1xuXG5leHBvcnQgZGVmYXVsdCBrZXlNaXhpbnM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENMSUNLX0VWRU5UX1RZUEUsIERCTENMSUNLX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi4vZXZlbnRUeXBlc1wiO1xuXG5mdW5jdGlvbiBvbkNsaWNrKGNsaWNrSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uRXZlbnQoQ0xJQ0tfRVZFTlRfVFlQRSwgY2xpY2tIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvZmZDbGljayhjbGlja0hhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vZmZFdmVudChDTElDS19FVkVOVF9UWVBFLCBjbGlja0hhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9uRG91YmxlQ2xpY2soY2xpY2tIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub25FdmVudChEQkxDTElDS19FVkVOVF9UWVBFLCBjbGlja0hhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9mZkRvdWJsZUNsaWNrKGNsaWNrSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZkV2ZW50KERCTENMSUNLX0VWRU5UX1RZUEUsIGNsaWNrSGFuZGxlciwgZWxlbWVudCk7IH1cblxuY29uc3QgY2xpY2tNaXhpbnMgPSB7XG4gIG9uQ2xpY2ssXG4gIG9mZkNsaWNrLFxuICBvbkRvdWJsZUNsaWNrLFxuICBvZmZEb3VibGVDbGlja1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xpY2tNaXhpbnM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIGdldFN0YXRlKCkge1xuICByZXR1cm4gdGhpcy5zdGF0ZTtcbn1cblxuZnVuY3Rpb24gc2V0U3RhdGUoc3RhdGUpIHtcbiAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVTdGF0ZShzdGF0ZSkge1xuICAodGhpcy5zdGF0ZSA9PT0gdW5kZWZpbmVkKSA/XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlIDpcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5zdGF0ZSwgc3RhdGUpO1xufVxuXG5jb25zdCBzdGF0ZU1peGlucyA9IHtcbiAgZ2V0U3RhdGUsXG4gIHNldFN0YXRlLFxuICB1cGRhdGVTdGF0ZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgc3RhdGVNaXhpbnM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBURVhUX0hUTUxfQ09OVEVOVF9UWVBFID0gXCJ0ZXh0L2h0bWxcIjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUkVTSVpFX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi4vZXZlbnRUeXBlc1wiO1xuaW1wb3J0IHsgT0JKRUNULCBBQk9VVF9CTEFOSyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IFRFWFRfSFRNTF9DT05URU5UX1RZUEUgfSBmcm9tIFwiLi4vY29udGVudFR5cGVzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBvblJlc2l6ZShyZXNpemVIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub25FdmVudChSRVNJWkVfRVZFTlRfVFlQRSwgcmVzaXplSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIG9mZlJlc2l6ZShyZXNpemVIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmRXZlbnQoUkVTSVpFX0VWRU5UX1RZUEUsIHJlc2l6ZUhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIGFkZFJlc2l6ZU9iamVjdCgpIHtcbiAgY29uc3QgcmVzaXplT2JqZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChPQkpFQ1QpLFxuICAgICAgICBzdHlsZSA9IGBkaXNwbGF5OiBibG9jazsgXG4gICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gICAgICAgICAgICAgICAgIHRvcDogMDsgXG4gICAgICAgICAgICAgICAgIGxlZnQ6IDA7IFxuICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7IFxuICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTsgXG4gICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47IFxuICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgXG4gICAgICAgICAgICAgICAgIHotaW5kZXg6IC0xO2AsXG4gICAgICAgIGRhdGEgPSBBQk9VVF9CTEFOSyxcbiAgICAgICAgdHlwZSA9IFRFWFRfSFRNTF9DT05URU5UX1RZUEU7XG5cbiAgcmVzaXplT2JqZWN0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIHN0eWxlKTtcblxuICByZXNpemVPYmplY3QuZGF0YSA9IGRhdGE7XG5cbiAgcmVzaXplT2JqZWN0LnR5cGUgPSB0eXBlO1xuXG4gIHRoaXMuX19yZXNpemVPYmplY3RfXyA9IHJlc2l6ZU9iamVjdDtcblxuICByZXNpemVPYmplY3Qub25sb2FkID0gKCkgPT4ge1xuICAgIHJlc2l6ZU9iamVjdExvYWRIYW5kbGVyKHRoaXMpO1xuICB9O1xuXG4gIHRoaXMuZG9tRWxlbWVudC5hcHBlbmRDaGlsZChyZXNpemVPYmplY3QpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVSZXNpemVPYmplY3QoKSB7XG4gIGNvbnN0IHJlc2l6ZU9iamVjdCA9IHRoaXMuX19yZXNpemVPYmplY3RfXyxcbiAgICAgICAgb2JqZWN0V2luZG93ID0gcmVzaXplT2JqZWN0LmNvbnRlbnREb2N1bWVudC5kZWZhdWx0VmlldzsgIC8vL1xuXG4gIG9iamVjdFdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFJFU0laRV9FVkVOVF9UWVBFLCByZXNpemVFdmVudExpc3RlbmVyKTtcblxuICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlQ2hpbGQocmVzaXplT2JqZWN0KTtcblxuICBkZWxldGUgdGhpcy5fX3Jlc2l6ZU9iamVjdF9fO1xufVxuXG5jb25zdCByZXNpemVNaXhpbnMgPSB7XG4gIG9uUmVzaXplLFxuICBvZmZSZXNpemUsXG4gIGFkZFJlc2l6ZU9iamVjdCxcbiAgcmVtb3ZlUmVzaXplT2JqZWN0XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZXNpemVNaXhpbnM7XG5cbmZ1bmN0aW9uIHJlc2l6ZU9iamVjdExvYWRIYW5kbGVyKGVsZW1lbnQpIHtcbiAgY29uc3QgcmVzaXplT2JqZWN0ID0gZWxlbWVudC5fX3Jlc2l6ZU9iamVjdF9fLFxuICAgICAgICByZXNpemVPYmplY3RXaW5kb3cgPSByZXNpemVPYmplY3QuY29udGVudERvY3VtZW50LmRlZmF1bHRWaWV3OyAgLy8vXG5cbiAgcmVzaXplT2JqZWN0V2luZG93LmFkZEV2ZW50TGlzdGVuZXIoUkVTSVpFX0VWRU5UX1RZUEUsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IHJlc2l6ZUV2ZW50TGlzdGVuZXJzID0gZWxlbWVudC5maW5kRXZlbnRMaXN0ZW5lcnMoUkVTSVpFX0VWRU5UX1RZUEUpO1xuXG4gICAgcmVzaXplRXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgocmVzaXplRXZlbnRMaXN0ZW5lcikgPT4ge1xuICAgICAgcmVzaXplRXZlbnRMaXN0ZW5lcihldmVudCk7XG4gICAgfSk7XG4gIH0pO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBTUEFDRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IFJFU0laRV9FVkVOVF9UWVBFIH0gZnJvbSBcIi4uL2V2ZW50VHlwZXNcIjtcbmltcG9ydCB7IHJlbW92ZVJlc2l6ZU9iamVjdCB9IGZyb20gXCIuLi9taXhpbnMvcmVzaXplXCI7XG5cbmZ1bmN0aW9uIG9uRXZlbnQoZXZlbnRUeXBlcywgaGFuZGxlciwgZWxlbWVudCA9IHRoaXMpIHtcbiAgZXZlbnRUeXBlcyA9IGV2ZW50VHlwZXMuc3BsaXQoU1BBQ0UpOyAvLy9cblxuICBldmVudFR5cGVzLmZvckVhY2goKGV2ZW50VHlwZSkgPT4ge1xuICAgIGlmIChldmVudFR5cGUgPT09IFJFU0laRV9FVkVOVF9UWVBFKSB7XG4gICAgICBjb25zdCByZXNpemVFdmVudExpc3RlbmVycyA9IHRoaXMuZmluZEV2ZW50TGlzdGVuZXJzKFJFU0laRV9FVkVOVF9UWVBFKSxcbiAgICAgICAgICAgIHJlc2l6ZUV2ZW50TGlzdGVuZXJzTGVuZ3RoID0gcmVzaXplRXZlbnRMaXN0ZW5lcnMubGVuZ3RoO1xuXG4gICAgICBpZiAocmVzaXplRXZlbnRMaXN0ZW5lcnNMZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy5hZGRSZXNpemVPYmplY3QoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBldmVudExpc3RlbmVyID0gdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGV2ZW50TGlzdGVuZXIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gb2ZmRXZlbnQoZXZlbnRUeXBlcywgaGFuZGxlciwgZWxlbWVudCA9IHRoaXMpIHtcbiAgZXZlbnRUeXBlcyA9IGV2ZW50VHlwZXMuc3BsaXQoU1BBQ0UpOyAvLy9cblxuICBldmVudFR5cGVzLmZvckVhY2goKGV2ZW50VHlwZSkgPT4ge1xuICAgIGNvbnN0IGV2ZW50TGlzdGVuZXIgPSB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgZXZlbnRMaXN0ZW5lcik7XG5cbiAgICBpZiAoZXZlbnRUeXBlID09PSBSRVNJWkVfRVZFTlRfVFlQRSkge1xuICAgICAgY29uc3QgcmVzaXplRXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmZpbmRFdmVudExpc3RlbmVycyhSRVNJWkVfRVZFTlRfVFlQRSksXG4gICAgICAgICAgICByZXNpemVFdmVudExpc3RlbmVyc0xlbmd0aCA9IHJlc2l6ZUV2ZW50TGlzdGVuZXJzLmxlbmd0aDtcblxuICAgICAgaWYgKHJlc2l6ZUV2ZW50TGlzdGVuZXJzTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlUmVzaXplT2JqZWN0KCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgZXZlbnRMaXN0ZW5lciA9IHRoaXMuY3JlYXRlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuXG4gIGlmICghdGhpcy5ldmVudExpc3RlbmVycykge1xuICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMgPSBbXTtcbiAgfVxuXG4gIHRoaXMuZXZlbnRMaXN0ZW5lcnMucHVzaChldmVudExpc3RlbmVyKTtcblxuICByZXR1cm4gZXZlbnRMaXN0ZW5lcjtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgZXZlbnRMaXN0ZW5lciA9IHRoaXMuZmluZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KSxcbiAgICAgICAgaW5kZXggPSB0aGlzLmV2ZW50TGlzdGVuZXJzLmluZGV4T2YoZXZlbnRMaXN0ZW5lciksXG4gICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gIHRoaXMuZXZlbnRMaXN0ZW5lcnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG5cbiAgaWYgKHRoaXMuZXZlbnRMaXN0ZW5lcnMubGVuZ3RoID09PSAwKSB7XG4gICAgZGVsZXRlIHRoaXMuZXZlbnRMaXN0ZW5lcnM7XG4gIH1cblxuICByZXR1cm4gZXZlbnRMaXN0ZW5lcjtcbn1cblxuZnVuY3Rpb24gZmluZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGV2ZW50TGlzdGVuZXIgPSB0aGlzLmV2ZW50TGlzdGVuZXJzLmZpbmQoKGV2ZW50TGlzdGVuZXIpID0+IHtcbiAgICBpZiAoKGV2ZW50TGlzdGVuZXIuZWxlbWVudCA9PT0gZWxlbWVudCkgJiYgKGV2ZW50TGlzdGVuZXIuaGFuZGxlciA9PT0gaGFuZGxlcikgJiYgKGV2ZW50TGlzdGVuZXIuZXZlbnRUeXBlID09PSBldmVudFR5cGUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBldmVudExpc3RlbmVyO1xufVxuXG5mdW5jdGlvbiBmaW5kRXZlbnRMaXN0ZW5lcnMoZXZlbnRUeXBlKSB7XG4gIGNvbnN0IGV2ZW50TGlzdGVuZXJzID0gW107XG5cbiAgaWYgKHRoaXMuZXZlbnRMaXN0ZW5lcnMpIHtcbiAgICB0aGlzLmV2ZW50TGlzdGVuZXJzLmZvckVhY2goKGV2ZW50TGlzdGVuZXIpID0+IHtcbiAgICAgIGNvbnN0IGZvdW5kID0gKGV2ZW50TGlzdGVuZXIuZXZlbnRUeXBlID09PSBldmVudFR5cGUpO1xuXG4gICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgZXZlbnRMaXN0ZW5lcnMucHVzaChldmVudExpc3RlbmVyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBldmVudExpc3RlbmVycztcbn1cblxuZnVuY3Rpb24gY3JlYXRlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgbGV0IGV2ZW50TGlzdGVuZXI7XG5cbiAgY29uc3QgaGFuZGxlckVsZW1lbnQgPSBlbGVtZW50OyAvLy9cblxuICBldmVudExpc3RlbmVyID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXM7IC8vL1xuXG4gICAgaGFuZGxlci5jYWxsKGhhbmRsZXJFbGVtZW50LCBldmVudCwgZWxlbWVudCk7XG4gIH07XG5cbiAgT2JqZWN0LmFzc2lnbihldmVudExpc3RlbmVyLCB7XG4gICAgZWxlbWVudCxcbiAgICBoYW5kbGVyLFxuICAgIGV2ZW50VHlwZVxuICB9KTtcblxuICByZXR1cm4gZXZlbnRMaXN0ZW5lcjtcbn1cblxuY29uc3QgZXZlbnRNaXhpbnMgPSB7XG4gIG9uRXZlbnQsXG4gIG9mZkV2ZW50LFxuICBhZGRFdmVudExpc3RlbmVyLFxuICByZW1vdmVFdmVudExpc3RlbmVyLFxuICBmaW5kRXZlbnRMaXN0ZW5lcixcbiAgZmluZEV2ZW50TGlzdGVuZXJzLFxuICBjcmVhdGVFdmVudExpc3RlbmVyXG59O1xuXG5leHBvcnQgZGVmYXVsdCBldmVudE1peGlucztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgTU9VU0VVUF9FVkVOVF9UWVBFLFxuICAgICAgICAgTU9VU0VPVVRfRVZFTlRfVFlQRSxcbiAgICAgICAgIE1PVVNFRE9XTl9FVkVOVF9UWVBFLFxuICAgICAgICAgTU9VU0VPVkVSX0VWRU5UX1RZUEUsXG4gICAgICAgICBNT1VTRU1PVkVfRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9ldmVudFR5cGVzXCI7XG5cbmZ1bmN0aW9uIG9uTW91c2VVcChtb3VzZVVwSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uRXZlbnQoTU9VU0VVUF9FVkVOVF9UWVBFLCBtb3VzZVVwSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb2ZmTW91c2VVcChtb3VzZVVwSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZkV2ZW50KE1PVVNFVVBfRVZFTlRfVFlQRSwgbW91c2VVcEhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9uTW91c2VPdXQobW91c2VPdXRIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub25FdmVudChNT1VTRU9VVF9FVkVOVF9UWVBFLCBtb3VzZU91dEhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9mZk1vdXNlT3V0KG1vdXNlT3V0SGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZkV2ZW50KE1PVVNFT1VUX0VWRU5UX1RZUEUsIG1vdXNlT3V0SGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb25Nb3VzZURvd24obW91c2VEb3duSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uRXZlbnQoTU9VU0VET1dOX0VWRU5UX1RZUEUsIG1vdXNlRG93bkhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9mZk1vdXNlRG93bihtb3VzZURvd25IYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmRXZlbnQoTU9VU0VET1dOX0VWRU5UX1RZUEUsIG1vdXNlRG93bkhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9uTW91c2VPdmVyKG1vdXNlT3ZlckhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vbkV2ZW50KE1PVVNFT1ZFUl9FVkVOVF9UWVBFLCBtb3VzZU92ZXJIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvZmZNb3VzZU92ZXIobW91c2VPdmVySGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZkV2ZW50KE1PVVNFT1ZFUl9FVkVOVF9UWVBFLCBtb3VzZU92ZXJIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvbk1vdXNlTW92ZShtb3VzZU1vdmVIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub25FdmVudChNT1VTRU1PVkVfRVZFTlRfVFlQRSwgbW91c2VNb3ZlSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb2ZmTW91c2VNb3ZlKG1vdXNlTW92ZUhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vZmZFdmVudChNT1VTRU1PVkVfRVZFTlRfVFlQRSwgbW91c2VNb3ZlSGFuZGxlciwgZWxlbWVudCk7IH1cblxuY29uc3QgbW91c2VNaXhpbnMgPSB7XG4gIG9uTW91c2VVcCxcbiAgb2ZmTW91c2VVcCxcbiAgb25Nb3VzZU91dCxcbiAgb2ZmTW91c2VPdXQsXG4gIG9uTW91c2VEb3duLFxuICBvZmZNb3VzZURvd24sXG4gIG9uTW91c2VPdmVyLFxuICBvZmZNb3VzZU92ZXIsXG4gIG9uTW91c2VNb3ZlLFxuICBvZmZNb3VzZU1vdmVcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1vdXNlTWl4aW5zO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBTQ1JPTExfRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9ldmVudFR5cGVzXCI7XG5cbmZ1bmN0aW9uIG9uU2Nyb2xsKHNjcm9sbEhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vbkV2ZW50KFNDUk9MTF9FVkVOVF9UWVBFLCBzY3JvbGxIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvZmZTY3JvbGwoc2Nyb2xsSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZkV2ZW50KFNDUk9MTF9FVkVOVF9UWVBFLCBzY3JvbGxIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBnZXRTY3JvbGxUb3AoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuc2Nyb2xsVG9wOyB9XG5cbmZ1bmN0aW9uIGdldFNjcm9sbExlZnQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuc2Nyb2xsTGVmdDsgfVxuXG5mdW5jdGlvbiBzZXRTY3JvbGxUb3Aoc2Nyb2xsVG9wKSB7IHRoaXMuZG9tRWxlbWVudC5zY3JvbGxUb3AgPSBzY3JvbGxUb3A7IH1cblxuZnVuY3Rpb24gc2V0U2Nyb2xsTGVmdChzY3JvbGxMZWZ0KSB7IHRoaXMuZG9tRWxlbWVudC5zY3JvbGxMZWZ0ID0gc2Nyb2xsTGVmdDsgfVxuXG5jb25zdCBzY3JvbGxNaXhpbnMgPSB7XG4gIG9uU2Nyb2xsLFxuICBvZmZTY3JvbGwsXG4gIGdldFNjcm9sbFRvcCxcbiAgZ2V0U2Nyb2xsTGVmdCxcbiAgc2V0U2Nyb2xsVG9wLFxuICBzZXRTY3JvbGxMZWZ0XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzY3JvbGxNaXhpbnM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JFYWNoKGFycmF5LCBvcGVyYXRpb24sIGRvbmUsIGNvbnRleHQpIHtcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyAgLy8vXG5cbiAgbGV0IGNvdW50ID0gLTE7XG5cbiAgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICBjb3VudCsrO1xuXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xuXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xuICAgICAgZG9uZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXG4gICAgICAgICAgICBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgICBvcGVyYXRpb24oZWxlbWVudCwgbmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIG5leHQoKTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgU1BBQ0UgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBmb3JFYWNoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hc3luY1wiO1xuXG5mdW5jdGlvbiBvbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZXMsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQgPSB0aGlzKSB7XG4gIGN1c3RvbUV2ZW50VHlwZXMgPSBjdXN0b21FdmVudFR5cGVzLnNwbGl0KFNQQUNFKTsgLy8vXG5cbiAgY3VzdG9tRXZlbnRUeXBlcy5mb3JFYWNoKChjdXN0b21FdmVudFR5cGUpID0+IHtcbiAgICB0aGlzLmFkZEN1c3RvbUV2ZW50TGlzdGVuZXIoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZXMsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQgPSB0aGlzKSB7XG4gIGN1c3RvbUV2ZW50VHlwZXMgPSBjdXN0b21FdmVudFR5cGVzLnNwbGl0KFNQQUNFKTsgLy8vXG5cbiAgY3VzdG9tRXZlbnRUeXBlcy5mb3JFYWNoKChjdXN0b21FdmVudFR5cGUpID0+IHtcbiAgICB0aGlzLnJlbW92ZUN1c3RvbUV2ZW50TGlzdGVuZXIoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNhbGxDdXN0b21IYW5kbGVycyhjdXN0b21FdmVudFR5cGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICBjb25zdCBjdXN0b21FdmVudExpc3RlbmVycyA9IHRoaXMuZmluZEN1c3RvbUV2ZW50TGlzdGVuZXJzKGN1c3RvbUV2ZW50VHlwZSk7XG5cbiAgY3VzdG9tRXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoY3VzdG9tRXZlbnRMaXN0ZW5lcikgPT4ge1xuICAgIGNvbnN0IHsgY3VzdG9tSGFuZGxlciwgZWxlbWVudDogY3VzdG9tSGFuZGxlckVsZW1lbnQgfSA9IGN1c3RvbUV2ZW50TGlzdGVuZXIsXG4gICAgICAgICAgZWxlbWVudCA9IHRoaXM7IC8vL1xuXG4gICAgY3VzdG9tSGFuZGxlci5jYWxsKGN1c3RvbUhhbmRsZXJFbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMsIGVsZW1lbnQpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2FsbEN1c3RvbUhhbmRsZXJzQXN5bmMoY3VzdG9tRXZlbnRUeXBlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmZpbmRDdXN0b21FdmVudExpc3RlbmVycyhjdXN0b21FdmVudFR5cGUpLFxuICAgICAgICBkb25lID0gcmVtYWluaW5nQXJndW1lbnRzLnBvcCgpOyAgLy8vXG5cbiAgZm9yRWFjaChjdXN0b21FdmVudExpc3RlbmVycywgKGN1c3RvbUV2ZW50TGlzdGVuZXIsIG5leHQpID0+IHtcbiAgICBjb25zdCB7IGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQ6IGN1c3RvbUhhbmRsZXJFbGVtZW50IH0gPSBjdXN0b21FdmVudExpc3RlbmVyLFxuICAgICAgICAgIGVsZW1lbnQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBkb25lID0gbmV4dDsgIC8vL1xuXG4gICAgY3VzdG9tSGFuZGxlci5jYWxsKGN1c3RvbUhhbmRsZXJFbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMsIGVsZW1lbnQsIGRvbmUpO1xuICB9LCBkb25lKTtcbn1cblxuZnVuY3Rpb24gYWRkQ3VzdG9tRXZlbnRMaXN0ZW5lcihjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRMaXN0ZW5lciA9IHRoaXMuY3JlYXRlQ3VzdG9tRXZlbnRMaXN0ZW5lcihjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xuXG4gIGlmICghdGhpcy5jdXN0b21FdmVudExpc3RlbmVycykge1xuICAgIHRoaXMuY3VzdG9tRXZlbnRMaXN0ZW5lcnMgPSBbXTtcbiAgfVxuXG4gIHRoaXMuY3VzdG9tRXZlbnRMaXN0ZW5lcnMucHVzaChjdXN0b21FdmVudExpc3RlbmVyKTtcblxuICByZXR1cm4gY3VzdG9tRXZlbnRMaXN0ZW5lcjtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ3VzdG9tRXZlbnRMaXN0ZW5lcihjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRMaXN0ZW5lciA9IHRoaXMuZmluZEN1c3RvbUV2ZW50TGlzdGVuZXIoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KSxcbiAgICAgICAgaW5kZXggPSB0aGlzLmN1c3RvbUV2ZW50TGlzdGVuZXJzLmluZGV4T2YoY3VzdG9tRXZlbnRMaXN0ZW5lciksXG4gICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gIHRoaXMuY3VzdG9tRXZlbnRMaXN0ZW5lcnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG5cbiAgaWYgKHRoaXMuY3VzdG9tRXZlbnRMaXN0ZW5lcnMubGVuZ3RoID09PSAwKSB7XG4gICAgZGVsZXRlIHRoaXMuY3VzdG9tRXZlbnRMaXN0ZW5lcnM7XG4gIH1cblxuICByZXR1cm4gY3VzdG9tRXZlbnRMaXN0ZW5lcjtcbn1cblxuZnVuY3Rpb24gZmluZEN1c3RvbUV2ZW50TGlzdGVuZXIoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50TGlzdGVuZXIgPSB0aGlzLmN1c3RvbUV2ZW50TGlzdGVuZXJzLmZpbmQoKGN1c3RvbUV2ZW50TGlzdGVuZXIpID0+IHtcbiAgICBpZiAoKGN1c3RvbUV2ZW50TGlzdGVuZXIuZWxlbWVudCA9PT0gZWxlbWVudCkgJiYgKGN1c3RvbUV2ZW50TGlzdGVuZXIuY3VzdG9tSGFuZGxlciA9PT0gY3VzdG9tSGFuZGxlcikgJiYgKGN1c3RvbUV2ZW50TGlzdGVuZXIuY3VzdG9tRXZlbnRUeXBlID09PSBjdXN0b21FdmVudFR5cGUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBjdXN0b21FdmVudExpc3RlbmVyO1xufVxuXG5mdW5jdGlvbiBmaW5kQ3VzdG9tRXZlbnRMaXN0ZW5lcnMoY3VzdG9tRXZlbnRUeXBlKSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50TGlzdGVuZXJzID0gW107XG5cbiAgaWYgKHRoaXMuY3VzdG9tRXZlbnRMaXN0ZW5lcnMpIHtcbiAgICB0aGlzLmN1c3RvbUV2ZW50TGlzdGVuZXJzLmZvckVhY2goKGN1c3RvbUV2ZW50TGlzdGVuZXIpID0+IHtcbiAgICAgIGNvbnN0IGZvdW5kID0gKGN1c3RvbUV2ZW50TGlzdGVuZXIuY3VzdG9tRXZlbnRUeXBlID09PSBjdXN0b21FdmVudFR5cGUpO1xuXG4gICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgY3VzdG9tRXZlbnRMaXN0ZW5lcnMucHVzaChjdXN0b21FdmVudExpc3RlbmVyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBjdXN0b21FdmVudExpc3RlbmVycztcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ3VzdG9tRXZlbnRMaXN0ZW5lcihjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgbGV0IGN1c3RvbUV2ZW50TGlzdGVuZXI7XG5cbiAgY3VzdG9tRXZlbnRMaXN0ZW5lciA9ICgpID0+IHt9OyAvLy9cblxuICBPYmplY3QuYXNzaWduKGN1c3RvbUV2ZW50TGlzdGVuZXIsIHtcbiAgICBlbGVtZW50LFxuICAgIGN1c3RvbUhhbmRsZXIsXG4gICAgY3VzdG9tRXZlbnRUeXBlXG4gIH0pO1xuXG4gIHJldHVybiBjdXN0b21FdmVudExpc3RlbmVyO1xufVxuXG5jb25zdCBjdXN0b21FdmVudE1peGlucyA9IHtcbiAgb25DdXN0b21FdmVudCxcbiAgb2ZmQ3VzdG9tRXZlbnQsXG4gIGNhbGxDdXN0b21IYW5kbGVycyxcbiAgY2FsbEN1c3RvbUhhbmRsZXJzQXN5bmMsXG4gIGFkZEN1c3RvbUV2ZW50TGlzdGVuZXIsXG4gIHJlbW92ZUN1c3RvbUV2ZW50TGlzdGVuZXIsXG4gIGZpbmRDdXN0b21FdmVudExpc3RlbmVyLFxuICBmaW5kQ3VzdG9tRXZlbnRMaXN0ZW5lcnMsXG4gIGNyZWF0ZUN1c3RvbUV2ZW50TGlzdGVuZXJcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGN1c3RvbUV2ZW50TWl4aW5zO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbW91bnRFbGVtZW50KGVsZW1lbnQpIHtcbiAgY29uc3QgZGVzY2VuZGFudEVsZW1lbnRzID0gZWxlbWVudC5nZXREZXNjZW5kYW50RWxlbWVudHMoKSxcbiAgICAgICAgZWxlbWVudHMgPSBbXG4gICAgICAgICAgZWxlbWVudCxcbiAgICAgICAgICAuLi5kZXNjZW5kYW50RWxlbWVudHNcbiAgICAgICAgXTtcblxuICBlbGVtZW50cy5yZXZlcnNlKCk7IC8vL1xuXG4gIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LmRpZE1vdW50ICYmIGVsZW1lbnQuZGlkTW91bnQoKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bm1vdW50RWxlbWVudChlbGVtZW50KSB7XG4gIGNvbnN0IGRlc2NlbmRhbnRFbGVtZW50cyA9IGVsZW1lbnQuZ2V0RGVzY2VuZGFudEVsZW1lbnRzKCksXG4gICAgICAgIGVsZW1lbnRzID0gW1xuICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgLi4uZGVzY2VuZGFudEVsZW1lbnRzXG4gICAgICAgIF07XG5cbiAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQud2lsbFVubW91bnQgJiYgZWxlbWVudC53aWxsVW5tb3VudCgpO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBtb3VudEVsZW1lbnQsXG4gIHVubW91bnRFbGVtZW50XG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgT2Zmc2V0IGZyb20gXCIuL29mZnNldFwiO1xuaW1wb3J0IEJvdW5kcyBmcm9tIFwiLi9ib3VuZHNcIjtcbmltcG9ydCBqc3hNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2pzeFwiO1xuaW1wb3J0IGtleU1peGlucyBmcm9tIFwiLi9taXhpbnMva2V5XCI7XG5pbXBvcnQgY2xpY2tNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2NsaWNrXCI7XG5pbXBvcnQgc3RhdGVNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3N0YXRlXCI7XG5pbXBvcnQgZXZlbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2V2ZW50XCI7XG5pbXBvcnQgbW91c2VNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL21vdXNlXCI7XG5pbXBvcnQgcmVzaXplTWl4aW5zIGZyb20gXCIuL21peGlucy9yZXNpemVcIjtcbmltcG9ydCBzY3JvbGxNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3Njcm9sbFwiO1xuaW1wb3J0IGVsZW1lbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2VsZW1lbnRcIjtcbmltcG9ydCBjdXN0b21FdmVudE1peGlucyBmcm9tIFwiLi9taXhpbnMvY3VzdG9tRXZlbnRcIjtcblxuaW1wb3J0IHsgY29tYmluZSB9IGZyb20gXCIuL3V0aWxpdGllcy9vYmplY3RcIjtcbmltcG9ydCB7IGlzU1ZHVGFnTmFtZSB9IGZyb20gXCIuL3V0aWxpdGllcy9uYW1lXCI7XG5pbXBvcnQgeyBmaXJzdCwgYXVnbWVudCB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbW91bnRFbGVtZW50LCB1bm1vdW50RWxlbWVudCB9IGZyb20gXCIuL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBOT05FLFxuICAgICAgICAgQkxPQ0ssXG4gICAgICAgICBXSURUSCxcbiAgICAgICAgIFNUUklORyxcbiAgICAgICAgIEhFSUdIVCxcbiAgICAgICAgIERJU1BMQVksXG4gICAgICAgICBESVNBQkxFRCxcbiAgICAgICAgIEVNUFRZX1NUUklORyxcbiAgICAgICAgIFNWR19OQU1FU1BBQ0VfVVJJLFxuICAgICAgICAgREVGQVVMVF9QUk9QRVJUSUVTLFxuICAgICAgICAgSUdOT1JFRF9QUk9QRVJUSUVTIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmNsYXNzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvcikge1xuICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgdGhpcy5kb21FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG5cbiAgICAgIHRoaXMuZG9tRWxlbWVudC5fX2VsZW1lbnRfXyA9IHRoaXM7IC8vL1xuICAgIH1cbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldE9mZnNldCgpIHtcbiAgICBjb25zdCB0b3AgPSB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0VG9wLCAgLy8vXG4gICAgICAgICAgbGVmdCA9IHRoaXMuZG9tRWxlbWVudC5vZmZzZXRMZWZ0LCAgLy8vXG4gICAgICAgICAgb2Zmc2V0ID0gbmV3IE9mZnNldCh0b3AsIGxlZnQpO1xuXG4gICAgcmV0dXJuIG9mZnNldDtcbiAgfVxuXG4gIGdldEJvdW5kcygpIHtcbiAgICBjb25zdCBib3VuZGluZ0NsaWVudFJlY3QgPSB0aGlzLmRvbUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgYm91bmRzID0gQm91bmRzLmZyb21Cb3VuZGluZ0NsaWVudFJlY3QoYm91bmRpbmdDbGllbnRSZWN0KTtcblxuICAgIHJldHVybiBib3VuZHM7XG4gIH1cblxuICBnZXRXaWR0aChpbmNsdWRlQm9yZGVyID0gdHJ1ZSkge1xuICAgIGNvbnN0IHdpZHRoID0gaW5jbHVkZUJvcmRlciA/XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5vZmZzZXRXaWR0aCA6XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50LmNsaWVudFdpZHRoO1xuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgc2V0V2lkdGgod2lkdGgpIHtcbiAgICB3aWR0aCA9IGAke3dpZHRofXB4YDsgLy8vXG5cbiAgICB0aGlzLnN0eWxlKFdJRFRILCB3aWR0aCk7XG4gIH1cblxuICBnZXRIZWlnaHQoaW5jbHVkZUJvcmRlciA9IHRydWUpIHtcbiAgICBjb25zdCBoZWlnaHQgPSBpbmNsdWRlQm9yZGVyID9cbiAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5vZmZzZXRIZWlnaHQgOlxuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuXG4gICAgcmV0dXJuIGhlaWdodDtcbiAgfVxuXG4gIHNldEhlaWdodChoZWlnaHQpIHtcbiAgICBoZWlnaHQgPSBgJHtoZWlnaHR9cHhgOyAvLy9cblxuICAgIHRoaXMuc3R5bGUoSEVJR0hULCBoZWlnaHQpO1xuICB9XG5cbiAgaGFzQXR0cmlidXRlKG5hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5oYXNBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBnZXRBdHRyaWJ1dGUobmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmdldEF0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIHNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkgeyB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTsgfVxuXG4gIGNsZWFyQXR0cmlidXRlKG5hbWUpIHsgdGhpcy5kb21FbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIGFkZEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkgeyB0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7IH1cblxuICByZW1vdmVBdHRyaWJ1dGUobmFtZSkgeyB0aGlzLmNsZWFyQXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgc2V0Q2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc05hbWU7IH1cblxuICBhZGRDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTsgfVxuXG4gIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpOyB9XG5cbiAgdG9nZ2xlQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKGNsYXNzTmFtZSk7IH1cblxuICBoYXNDbGFzcyhjbGFzc05hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTsgfVxuXG4gIGNsZWFyQ2xhc3NlcygpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTmFtZSA9IEVNUFRZX1NUUklORzsgfVxuXG4gIHByZXBlbmRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQucHJlcGVuZCh0aGlzKTsgfVxuXG4gIGFwcGVuZFRvKHBhcmVudEVsZW1lbnQpIHsgcGFyZW50RWxlbWVudC5hcHBlbmQodGhpcyk7IH1cblxuICBhZGRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQuYWRkKHRoaXMpOyB9XG5cbiAgcmVtb3ZlRnJvbShwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQucmVtb3ZlKHRoaXMpOyB9XG5cbiAgaW5zZXJ0QmVmb3JlKHNpYmxpbmdFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NTm9kZSA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQucGFyZW50Tm9kZSxcbiAgICAgICAgICBzaWJsaW5nRE9NRWxlbWVudCA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICBwYXJlbnRET01Ob2RlLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50KTtcbiAgfVxuXG4gIGluc2VydEFmdGVyKHNpYmxpbmdFbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50RE9NTm9kZSA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQucGFyZW50Tm9kZSxcbiAgICAgICAgICBzaWJsaW5nRE9NRWxlbWVudCA9IHNpYmxpbmdFbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICBwYXJlbnRET01Ob2RlLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHNpYmxpbmdET01FbGVtZW50Lm5leHRTaWJsaW5nKTsgIC8vL1xuICB9XG5cbiAgcHJlcGVuZChlbGVtZW50KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudCxcbiAgICAgICAgICBmaXJzdENoaWxkRE9NRWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudC5maXJzdENoaWxkO1xuXG4gICAgdGhpcy5kb21FbGVtZW50Lmluc2VydEJlZm9yZShkb21FbGVtZW50LCBmaXJzdENoaWxkRE9NRWxlbWVudCk7XG4gIH1cblxuICBhcHBlbmQoZWxlbWVudCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRvbUVsZW1lbnQsIG51bGwpOyAvLy9cbiAgfVxuXG4gIGluc2VydChlbGVtZW50KSB7IHRoaXMuYXBwZW5kKGVsZW1lbnQpOyB9XG5cbiAgYWRkKGVsZW1lbnQpIHsgdGhpcy5hcHBlbmQoZWxlbWVudCk7IH1cblxuICByZW1vdmUoZWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBjb25zdCBkb21FbGVtZW50ID0gZWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlQ2hpbGQoZG9tRWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmUoKTtcbiAgICB9XG4gIH1cblxuICBtb3VudEJlZm9yZShzaWJsaW5nRWxlbWVudCkge1xuICAgIHRoaXMuaW5zZXJ0QmVmb3JlKHNpYmxpbmdFbGVtZW50KTtcblxuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgIG1vdW50RWxlbWVudChlbGVtZW50KTtcbiAgfVxuXG4gIG1vdW50QWZ0ZXIoc2libGluZ0VsZW1lbnQpIHtcbiAgICB0aGlzLmluc2VydEJlZm9yZShzaWJsaW5nRWxlbWVudCk7XG5cbiAgICBjb25zdCBlbGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICBtb3VudEVsZW1lbnQoZWxlbWVudCk7XG4gIH1cblxuICBtb3VudChlbGVtZW50KSB7XG4gICAgdGhpcy5hZGQoZWxlbWVudCk7XG5cbiAgICBtb3VudEVsZW1lbnQoZWxlbWVudCk7XG4gIH1cblxuICB1bm1vdW50KGVsZW1lbnQpIHtcbiAgICB1bm1vdW50RWxlbWVudChlbGVtZW50KTtcblxuICAgIHRoaXMucmVtb3ZlKGVsZW1lbnQpO1xuICB9XG5cbiAgc2hvdyhkaXNwbGF5U3R5bGUgPSBCTE9DSykgeyB0aGlzLmRpc3BsYXkoZGlzcGxheVN0eWxlKTsgfVxuXG4gIGhpZGUoKSB7IHRoaXMuc3R5bGUoRElTUExBWSwgTk9ORSk7IH1cblxuICBkaXNwbGF5KGRpc3BsYXkpIHsgdGhpcy5zdHlsZShESVNQTEFZLCBkaXNwbGF5KTsgfVxuXG4gIGVuYWJsZSgpIHsgdGhpcy5jbGVhckF0dHJpYnV0ZShESVNBQkxFRCk7IH1cblxuICBkaXNhYmxlKCkgeyB0aGlzLnNldEF0dHJpYnV0ZShESVNBQkxFRCwgRElTQUJMRUQpOyB9XG5cbiAgaXNFbmFibGVkKCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCksXG4gICAgICAgICAgZW5hYmxlZCA9ICFkaXNhYmxlZDtcblxuICAgIHJldHVybiBlbmFibGVkO1xuICB9XG5cbiAgaXNEaXNhYmxlZCgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaGFzQXR0cmlidXRlKERJU0FCTEVEKTtcblxuICAgIHJldHVybiBkaXNhYmxlZDtcbiAgfVxuICBcbiAgaXNEaXNwbGF5ZWQoKSB7XG4gICAgY29uc3QgZGlzcGxheSA9IHRoaXMuY3NzKERJU1BMQVkpLFxuICAgICAgICAgIGRpc3BsYXllZCA9IChkaXNwbGF5ICE9PSBOT05FKTtcbiAgICBcbiAgICByZXR1cm4gZGlzcGxheWVkO1xuICB9XG5cbiAgaXNTaG93aW5nKCkge1xuICAgIGNvbnN0IGRpc3BsYXllZCA9IHRoaXMuaXNEaXNwbGF5ZWQoKSxcbiAgICAgICAgICBzaG93aW5nID0gZGlzcGxheWVkOyAgLy8vXG5cbiAgICByZXR1cm4gc2hvd2luZztcbiAgfVxuXG4gIGlzSGlkZGVuKCkge1xuICAgIGNvbnN0IGRpc3BsYXllZCA9IHRoaXMuaXNEaXNwbGF5ZWQoKSxcbiAgICAgICAgICBoaWRkZW4gPSAhZGlzcGxheWVkO1xuXG4gICAgcmV0dXJuIGhpZGRlbjtcbiAgfVxuXG4gIHN0eWxlKG5hbWUsIHZhbHVlID0gbnVsbCkge1xuICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5kb21FbGVtZW50LnN0eWxlW25hbWVdID0gdmFsdWU7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzdHlsZSA9IHRoaXMuZG9tRWxlbWVudC5zdHlsZVtuYW1lXTtcblxuICAgIHJldHVybiBzdHlsZTtcbiAgfVxuXG4gIGh0bWwoaHRtbCA9IG51bGwpIHtcbiAgICBpZiAoaHRtbCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgaW5uZXJIVE1MID0gaHRtbDsgLy8vXG5cbiAgICAgIHRoaXMuZG9tRWxlbWVudC5pbm5lckhUTUwgPSBpbm5lckhUTUxcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGlubmVySFRNTCA9IHRoaXMuZG9tRWxlbWVudC5pbm5lckhUTUw7XG5cbiAgICBodG1sID0gaW5uZXJIVE1MOyAvLy9cblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgY3NzKGNzcyA9IG51bGwpIHtcbiAgICBpZiAoY3NzID09PSBudWxsKSB7XG4gICAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmRvbUVsZW1lbnQpLFxuICAgICAgICAgICAgY3NzID0ge307XG5cbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb21wdXRlZFN0eWxlLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBmaXJzdENvbXB1dGVkU3R5bGUgPSBmaXJzdFtjb21wdXRlZFN0eWxlXSxcbiAgICAgICAgICAgICAgbmFtZSA9IGZpcnN0Q29tcHV0ZWRTdHlsZSwgIC8vL1xuICAgICAgICAgICAgICB2YWx1ZSA9IGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTsgLy8vXG5cbiAgICAgICAgY3NzW25hbWVdID0gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjc3MgPT09IFNUUklORykge1xuICAgICAgbGV0IG5hbWUgPSBjc3M7IC8vL1xuXG4gICAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmRvbUVsZW1lbnQpLFxuICAgICAgICAgICAgdmFsdWUgPSBjb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUobmFtZSk7IC8vL1xuXG4gICAgICBjc3MgPSB2YWx1ZTsgIC8vL1xuXG4gICAgICByZXR1cm4gY3NzO1xuICAgIH1cblxuICAgIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXMoY3NzKTsgLy8vXG5cbiAgICBuYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGNzc1tuYW1lXTtcblxuICAgICAgdGhpcy5zdHlsZShuYW1lLCB2YWx1ZSk7XG4gICAgfSk7XG4gIH1cbiAgXG4gIGJsdXIoKSB7IHRoaXMuZG9tRWxlbWVudC5ibHVyKCk7IH1cblxuICBmb2N1cygpIHsgdGhpcy5kb21FbGVtZW50LmZvY3VzKCk7IH1cblxuICBoYXNGb2N1cygpIHtcbiAgICBjb25zdCBmb2N1cyA9IChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSB0aGlzLmRvbUVsZW1lbnQpOyAgLy8vXG5cbiAgICByZXR1cm4gZm9jdXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB7IHRhZ05hbWUgfSA9IENsYXNzLFxuICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50RnJvbVRhZ05hbWUoQ2xhc3MsIHRhZ05hbWUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyksXG4gICAgICAgICAgZGVmYXVsdFByb3BlcnRpZXMgPSBkZWZhdWx0UHJvcGVydGllc0Zyb21DbGFzcyhDbGFzcyksXG4gICAgICAgICAgaWdub3JlZFByb3BlcnRpZXMgPSBpZ25vcmVkUHJvcGVydGllc0Zyb21DbGFzcyhDbGFzcyk7XG5cbiAgICBlbGVtZW50LmFwcGx5UHJvcGVydGllcyhwcm9wZXJ0aWVzLCBkZWZhdWx0UHJvcGVydGllcywgaWdub3JlZFByb3BlcnRpZXMpO1xuXG4gICAgZWxlbWVudC5pbml0aWFsaXNlICYmIGVsZW1lbnQuaW5pdGlhbGlzZSgpOyAvLy9cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgc3RhdGljIGZyb21UYWdOYW1lKHRhZ05hbWUsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IENsYXNzID0gRWxlbWVudCwgIC8vL1xuICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50RnJvbVRhZ05hbWUoQ2xhc3MsIHRhZ05hbWUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyksXG4gICAgICAgICAgZGVmYXVsdFByb3BlcnRpZXMgPSB7fSwgLy8vXG4gICAgICAgICAgaWdub3JlZFByb3BlcnRpZXMgPSBbXTsgLy8vXG5cbiAgICBlbGVtZW50LmFwcGx5UHJvcGVydGllcyhwcm9wZXJ0aWVzLCBkZWZhdWx0UHJvcGVydGllcywgaWdub3JlZFByb3BlcnRpZXMpO1xuXG4gICAgZWxlbWVudC5pbml0aWFsaXNlICYmIGVsZW1lbnQuaW5pdGlhbGlzZSgpOyAvLy9cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGpzeE1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBrZXlNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgY2xpY2tNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgc3RhdGVNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgZXZlbnRNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgbW91c2VNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgcmVzaXplTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIHNjcm9sbE1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBlbGVtZW50TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGN1c3RvbUV2ZW50TWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgRWxlbWVudDtcblxuZnVuY3Rpb24gZWxlbWVudEZyb21UYWdOYW1lKENsYXNzLCB0YWdOYW1lLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgY29uc3Qgc2VsZWN0b3IgPSBudWxsLFxuICAgICAgICBlbGVtZW50ID0gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5jYWxsKENsYXNzLCBudWxsLCBzZWxlY3RvciwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSk7XG5cbiAgZWxlbWVudC5kb21FbGVtZW50ID0gaXNTVkdUYWdOYW1lKHRhZ05hbWUpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoU1ZHX05BTUVTUEFDRV9VUkksIHRhZ05hbWUpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG5cbiAgZWxlbWVudC5kb21FbGVtZW50Ll9fZWxlbWVudF9fID0gZWxlbWVudDsgLy8vXG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzLCBkZWZhdWx0UHJvcGVydGllcyA9IHt9KSB7XG4gIGlmIChDbGFzcy5oYXNPd25Qcm9wZXJ0eShERUZBVUxUX1BST1BFUlRJRVMpKSB7XG4gICAgZGVmYXVsdFByb3BlcnRpZXMgPSBjb21iaW5lKGRlZmF1bHRQcm9wZXJ0aWVzLCBDbGFzc1tERUZBVUxUX1BST1BFUlRJRVNdKTtcbiAgfVxuXG4gIGNvbnN0IHN1cGVyQ2xhc3MgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ2xhc3MpO1xuXG4gIGlmIChzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgZGVmYXVsdFByb3BlcnRpZXMgPSBkZWZhdWx0UHJvcGVydGllc0Zyb21DbGFzcyhzdXBlckNsYXNzLCBkZWZhdWx0UHJvcGVydGllcyk7XG4gIH1cblxuICByZXR1cm4gZGVmYXVsdFByb3BlcnRpZXM7XG59XG5cbmZ1bmN0aW9uIGlnbm9yZWRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzLCBpZ25vcmVkUHJvcGVydGllcyA9IFtdKSB7XG4gIGlmIChDbGFzcy5oYXNPd25Qcm9wZXJ0eShJR05PUkVEX1BST1BFUlRJRVMpKSB7XG4gICAgaWdub3JlZFByb3BlcnRpZXMgPSBhdWdtZW50KGlnbm9yZWRQcm9wZXJ0aWVzLCBDbGFzc1tJR05PUkVEX1BST1BFUlRJRVNdLCAoaWdub3JlZFByb3BlcnR5KSA9PiB7XG4gICAgICBpZiAoIWlnbm9yZWRQcm9wZXJ0aWVzLmluY2x1ZGVzKGlnbm9yZWRQcm9wZXJ0eSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBzdXBlckNsYXNzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKENsYXNzKTtcblxuICBpZiAoc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIGlnbm9yZWRQcm9wZXJ0aWVzID0gaWdub3JlZFByb3BlcnRpZXNGcm9tQ2xhc3Moc3VwZXJDbGFzcywgaWdub3JlZFByb3BlcnRpZXMpO1xuICB9XG5cbiAgcmV0dXJuIGlnbm9yZWRQcm9wZXJ0aWVzO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi9lbGVtZW50XCI7XG5cbmltcG9ydCB7IGZsYXR0ZW4gfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IFNUUklORywgRlVOQ1RJT04gfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHJlbW92ZUZhbHNleUVsZW1lbnRzLCByZXBsYWNlU3RyaW5nc1dpdGhUZXh0RWxlbWVudHMgfSBmcm9tIFwiLi91dGlsaXRpZXMvZWxlbWVudHNcIjtcblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudChmaXJzdEFyZ3VtZW50LCBwcm9wZXJ0aWVzLCAuLi5jaGlsZEVsZW1lbnRzKSB7XG4gIGxldCBlbGVtZW50ID0gbnVsbDtcblxuICBpZiAoZmlyc3RBcmd1bWVudCkge1xuICAgIGNoaWxkRWxlbWVudHMgPSBzYW5pdGlzZUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cyk7XG5cbiAgICBwcm9wZXJ0aWVzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjaGlsZEVsZW1lbnRzXG4gICAgfSwgcHJvcGVydGllcyk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAoaXNTdWJjbGFzc09mKGZpcnN0QXJndW1lbnQsIEVsZW1lbnQpKSB7XG4gICAgICBjb25zdCBDbGFzcyA9IGZpcnN0QXJndW1lbnQ7ICAvLy9cblxuICAgICAgZWxlbWVudCA9IENsYXNzLmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gU1RSSU5HKSB7XG4gICAgICBjb25zdCB0YWdOYW1lID0gZmlyc3RBcmd1bWVudDsgLy8vXG5cbiAgICAgIGVsZW1lbnQgPSBFbGVtZW50LmZyb21UYWdOYW1lKHRhZ05hbWUsIHByb3BlcnRpZXMpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09IEZVTkNUSU9OKSB7XG4gICAgICBjb25zdCBlbGVtZW50RnVuY3Rpb24gPSBmaXJzdEFyZ3VtZW50OyAgLy8vXG5cbiAgICAgIGVsZW1lbnQgPSBlbGVtZW50RnVuY3Rpb24ocHJvcGVydGllcyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmNvbnN0IFJlYWN0ID0ge1xuICBjcmVhdGVFbGVtZW50XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdDtcblxuZnVuY3Rpb24gc2FuaXRpc2VDaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpIHtcbiAgY2hpbGRFbGVtZW50cyA9IGZsYXR0ZW4oY2hpbGRFbGVtZW50cyk7XG5cbiAgY2hpbGRFbGVtZW50cyA9IHJlbW92ZUZhbHNleUVsZW1lbnRzKGNoaWxkRWxlbWVudHMpO1xuXG4gIGNoaWxkRWxlbWVudHMgPSByZXBsYWNlU3RyaW5nc1dpdGhUZXh0RWxlbWVudHMoY2hpbGRFbGVtZW50cyk7XG5cbiAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG59XG5cblxuZnVuY3Rpb24gaXNTdWJjbGFzc09mKGFyZ3VtZW50LCBDbGFzcykge1xuICBjb25zdCBzdWJjbGFzc09mID0gKGFyZ3VtZW50LnByb3RvdHlwZSBpbnN0YW5jZW9mIENsYXNzKTtcblxuICByZXR1cm4gc3ViY2xhc3NPZjtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcblxuaW1wb3J0IHsgQk9EWSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9keSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciA9IEJPRFkpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiYm9keVwiO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5rIGV4dGVuZHMgRWxlbWVudCB7XG4gIGdldEhSZWYoKSB7IHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZShcImhyZWZcIik7IH1cblxuICBzZXRIUmVmKGhyZWYpIHsgcmV0dXJuIHRoaXMuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBocmVmKTsgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJhXCI7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENIQU5HRV9FVkVOVF9UWVBFIH0gZnJvbSBcIi4uL2V2ZW50VHlwZXNcIjtcblxuZnVuY3Rpb24gb25DaGFuZ2UoY2hhbmdlSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uRXZlbnQoQ0hBTkdFX0VWRU5UX1RZUEUsIGNoYW5nZUhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9mZkNoYW5nZShjaGFuZ2VIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmRXZlbnQoQ0hBTkdFX0VWRU5UX1RZUEUsIGNoYW5nZUhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmNvbnN0IGNoYW5nZU1peGlucyA9IHtcbiAgb25DaGFuZ2UsXG4gIG9mZkNoYW5nZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2hhbmdlTWl4aW5zO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi9lbGVtZW50XCI7XG5pbXBvcnQgY2hhbmdlTWl4aW5zIGZyb20gXCIuL21peGlucy9jaGFuZ2VcIjtcblxuaW1wb3J0IHsgQ0hBTkdFX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi9ldmVudFR5cGVzXCI7XG5cbmNsYXNzIElucHV0RWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBvbkNoYW5nZShjaGFuZ2VIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub25FdmVudChDSEFOR0VfRVZFTlRfVFlQRSwgY2hhbmdlSGFuZGxlciwgZWxlbWVudCk7IH1cblxuICBvZmZDaGFuZ2UoY2hhbmdlSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZkV2ZW50KENIQU5HRV9FVkVOVF9UWVBFLCBjaGFuZ2VIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG4gIG9uUmVzaXplKHJlc2l6ZUhhbmRsZXIsIGVsZW1lbnQpIHt9IC8vL1xuXG4gIG9mZlJlc2l6ZShyZXNpemVIYW5kbGVyLCBlbGVtZW50KSB7fSAgLy8vXG5cbiAgZ2V0VmFsdWUoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQudmFsdWU7IH1cblxuICBnZXRTZWxlY3Rpb25TdGFydCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5zZWxlY3Rpb25TdGFydDsgfVxuXG4gIGdldFNlbGVjdGlvbkVuZCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5zZWxlY3Rpb25FbmQ7IH1cbiAgXG4gIGlzUmVhZE9ubHkoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQucmVhZE9ubHk7IH1cblxuICBzZXRWYWx1ZSh2YWx1ZSkgeyB0aGlzLmRvbUVsZW1lbnQudmFsdWUgPSB2YWx1ZTsgfVxuXG4gIHNldFNlbGVjdGlvblN0YXJ0KHNlbGVjdGlvblN0YXJ0KSB7IHRoaXMuZG9tRWxlbWVudC5zZWxlY3Rpb25TdGFydCA9IHNlbGVjdGlvblN0YXJ0OyB9XG5cbiAgc2V0U2VsZWN0aW9uRW5kKHNlbGVjdGlvbkVuZCkgeyB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0aW9uRW5kID0gc2VsZWN0aW9uRW5kOyB9XG5cbiAgc2V0UmVhZE9ubHkocmVhZE9ubHkpIHsgdGhpcy5kb21FbGVtZW50LnJlYWRPbmx5ID0gcmVhZE9ubHk7IH1cblxuICBzZWxlY3QoKSB7IHRoaXMuZG9tRWxlbWVudC5zZWxlY3QoKTsgfVxufVxuXG5PYmplY3QuYXNzaWduKElucHV0RWxlbWVudC5wcm90b3R5cGUsIGNoYW5nZU1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0RWxlbWVudDtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IElucHV0RWxlbWVudCBmcm9tIFwiLi4vaW5wdXRFbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0IGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgc3RhdGljIHRhZ05hbWUgPSBcImlucHV0XCI7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIEVsZW1lbnQge1xuICBzdGF0aWMgdGFnTmFtZSA9IFwiYnV0dG9uXCI7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgY2hhbmdlTWl4aW5zIGZyb20gXCIuLi9taXhpbnMvY2hhbmdlXCI7XG5cbmNsYXNzIFNlbGVjdCBleHRlbmRzIEVsZW1lbnQge1xuICBvblJlc2l6ZShyZXNpemVIYW5kbGVyLCBlbGVtZW50KSB7fSAvLy9cblxuICBvZmZSZXNpemUocmVzaXplSGFuZGxlciwgZWxlbWVudCkge30gIC8vL1xuXG4gIGdldFZhbHVlKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnZhbHVlOyB9XG5cbiAgc2V0VmFsdWUodmFsdWUpIHsgdGhpcy5kb21FbGVtZW50LnZhbHVlID0gdmFsdWU7IH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwic2VsZWN0XCI7XG59XG5cbk9iamVjdC5hc3NpZ24oU2VsZWN0LnByb3RvdHlwZSwgY2hhbmdlTWl4aW5zKTtcblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IGNoYW5nZU1peGlucyBmcm9tIFwiLi4vbWl4aW5zL2NoYW5nZVwiO1xuXG5jbGFzcyBDaGVja2JveCBleHRlbmRzIEVsZW1lbnQge1xuICBpc0NoZWNrZWQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2hlY2tlZDsgfVxuXG4gIGNoZWNrKGNoZWNrZWQgPSB0cnVlKSB7IHRoaXMuZG9tRWxlbWVudC5jaGVja2VkID0gY2hlY2tlZDsgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJpbnB1dFwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICB0eXBlOiBcImNoZWNrYm94XCJcbiAgfTtcbn1cblxuT2JqZWN0LmFzc2lnbihDaGVja2JveC5wcm90b3R5cGUsIGNoYW5nZU1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IENoZWNrYm94O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSW5wdXRFbGVtZW50IGZyb20gXCIuLi9pbnB1dEVsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dGFyZWEgZXh0ZW5kcyBJbnB1dEVsZW1lbnQge1xuICBzdGF0aWMgdGFnTmFtZSA9IFwidGV4dGFyZWFcIjtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgb25SZXNpemUsIG9mZlJlc2l6ZSB9IGZyb20gXCIuLi9taXhpbnMvcmVzaXplXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgb25SZXNpemUsXG4gIG9mZlJlc2l6ZVxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGtleU1peGlucyBmcm9tIFwiLi9taXhpbnMva2V5XCI7XG5pbXBvcnQgZXZlbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2V2ZW50XCI7XG5pbXBvcnQgbW91c2VNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL21vdXNlXCI7XG5pbXBvcnQgY2xpY2tNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2NsaWNrXCI7XG5pbXBvcnQgd2luZG93TWl4aW5zIGZyb20gXCIuL21peGlucy93aW5kb3dcIjtcbmltcG9ydCBjdXN0b21FdmVudE1peGlucyBmcm9tIFwiLi9taXhpbnMvY3VzdG9tRXZlbnRcIjtcblxuaW1wb3J0IHsgVU5ERUZJTkVEIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmNsYXNzIFdpbmRvdyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IHdpbmRvdzsgLy8vXG4gIH1cblxuICBhc3NpZ24oLi4uc291cmNlcykge1xuICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuZG9tRWxlbWVudDsgLy8vXG5cbiAgICBPYmplY3QuYXNzaWduKHRhcmdldCwgLi4uc291cmNlcyk7XG4gIH1cblxuICBhZGRSZXNpemVPYmplY3QoKSB7fSAvLy9cblxuICByZW1vdmVSZXNpemVPYmplY3QoKSB7fSAvLy9cblxuICBnZXRXaWR0aCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5pbm5lcldpZHRoOyB9IC8vL1xuICBcbiAgZ2V0SGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmlubmVySGVpZ2h0OyB9IC8vL1xuXG4gIGdldFNjcm9sbFRvcCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5wYWdlWU9mZnNldDsgfSAgLy8vXG5cbiAgZ2V0U2Nyb2xsTGVmdCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5wYWdlWE9mZnNldDsgfSAvLy9cblxuICBnZXRTZWxlY3Rpb24oKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuZ2V0U2VsZWN0aW9uKCk7IH1cbn1cblxuT2JqZWN0LmFzc2lnbihXaW5kb3cucHJvdG90eXBlLCBrZXlNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihXaW5kb3cucHJvdG90eXBlLCBldmVudE1peGlucyk7XG5PYmplY3QuYXNzaWduKFdpbmRvdy5wcm90b3R5cGUsIG1vdXNlTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwgY2xpY2tNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihXaW5kb3cucHJvdG90eXBlLCB3aW5kb3dNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihXaW5kb3cucHJvdG90eXBlLCBjdXN0b21FdmVudE1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0ICh0eXBlb2Ygd2luZG93ID09PSBVTkRFRklORUQpID8gdW5kZWZpbmVkIDogbmV3IFdpbmRvdygpOyAgLy8vXG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFNFTEVDVElPTkNIQU5HRV9FVkVOVF9UWVBFIH0gZnJvbSBcIi4uL2V2ZW50VHlwZXNcIjtcblxuZnVuY3Rpb24gb25TZWxlY3Rpb25DaGFuZ2Uoc2VsZWN0aW9uQ2hhbmdlSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uRXZlbnQoU0VMRUNUSU9OQ0hBTkdFX0VWRU5UX1RZUEUsIHNlbGVjdGlvbkNoYW5nZUhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9mZlNlbGVjdGlvbkNoYW5nZShzZWxlY3Rpb25DaGFuZ2VIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmRXZlbnQoU0VMRUNUSU9OQ0hBTkdFX0VWRU5UX1RZUEUsIHNlbGVjdGlvbkNoYW5nZUhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIGNyZWF0ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KSB7XG4gIGxldCBldmVudExpc3RlbmVyO1xuXG4gIGNvbnN0IGhhbmRsZXJFbGVtZW50ID0gZWxlbWVudDsgLy8vXG5cbiAgZXZlbnRMaXN0ZW5lciA9IChldmVudCkgPT4ge1xuICAgIGlmIChldmVudFR5cGUgPT09IFNFTEVDVElPTkNIQU5HRV9FVkVOVF9UWVBFKSB7XG4gICAgICBjb25zdCB7IGRvbUVsZW1lbnQgfSA9IGhhbmRsZXJFbGVtZW50LFxuICAgICAgICAgICAgeyBjdXJyZW50VGFyZ2V0IH0gPSBldmVudCxcbiAgICAgICAgICAgIHsgYWN0aXZlRWxlbWVudCB9ID0gY3VycmVudFRhcmdldDtcblxuICAgICAgaWYgKGRvbUVsZW1lbnQgIT09IGFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgIGhhbmRsZXIuY2FsbChoYW5kbGVyRWxlbWVudCwgZXZlbnQsIGVsZW1lbnQpO1xuICB9O1xuXG4gIE9iamVjdC5hc3NpZ24oZXZlbnRMaXN0ZW5lciwge1xuICAgIGVsZW1lbnQsXG4gICAgaGFuZGxlcixcbiAgICBldmVudFR5cGVcbiAgfSk7XG5cbiAgcmV0dXJuIGV2ZW50TGlzdGVuZXI7XG59XG5cbmNvbnN0IHNlbGVjdGlvbk1peGlucyA9IHtcbiAgb25TZWxlY3Rpb25DaGFuZ2UsXG4gIG9mZlNlbGVjdGlvbkNoYW5nZSxcbiAgY3JlYXRlRXZlbnRMaXN0ZW5lclxufTtcblxuZXhwb3J0IGRlZmF1bHQgc2VsZWN0aW9uTWl4aW5zO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQga2V5TWl4aW5zIGZyb20gXCIuL21peGlucy9rZXlcIjtcbmltcG9ydCBjbGlja01peGlucyBmcm9tIFwiLi9taXhpbnMvY2xpY2tcIjtcbmltcG9ydCBldmVudE1peGlucyBmcm9tIFwiLi9taXhpbnMvZXZlbnRcIjtcbmltcG9ydCBtb3VzZU1peGlucyBmcm9tIFwiLi9taXhpbnMvbW91c2VcIjtcbmltcG9ydCBzZWxlY3Rpb25NaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3NlbGVjdGlvblwiO1xuaW1wb3J0IGN1c3RvbUV2ZW50TWl4aW5zIGZyb20gXCIuL21peGlucy9jdXN0b21FdmVudFwiO1xuXG5pbXBvcnQgeyBVTkRFRklORUQgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY2xhc3MgRG9jdW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb2N1bWVudDsgLy8vXG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBjcmVhdGVSYW5nZSgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jcmVhdGVSYW5nZSgpOyB9XG5cbiAgY3JlYXRlVGV4dE5vZGUoZGF0YSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNyZWF0ZVRleHROb2RlKGRhdGEpOyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0ICh0eXBlb2YgZG9jdW1lbnQgPT09IFVOREVGSU5FRCkgPyB1bmRlZmluZWQgOiBuZXcgRG9jdW1lbnQoKTsgIC8vL1xuXG5PYmplY3QuYXNzaWduKERvY3VtZW50LnByb3RvdHlwZSwga2V5TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRG9jdW1lbnQucHJvdG90eXBlLCBjbGlja01peGlucyk7XG5PYmplY3QuYXNzaWduKERvY3VtZW50LnByb3RvdHlwZSwgZXZlbnRNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihEb2N1bWVudC5wcm90b3R5cGUsIG1vdXNlTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRG9jdW1lbnQucHJvdG90eXBlLCBzZWxlY3Rpb25NaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihEb2N1bWVudC5wcm90b3R5cGUsIGN1c3RvbUV2ZW50TWl4aW5zKTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IExFRlRfTU9VU0VfQlVUVE9OID0gMDtcbmV4cG9ydCBjb25zdCBSSUdIVF9NT1VTRV9CVVRUT04gPSAyO1xuZXhwb3J0IGNvbnN0IE1JRERMRV9NT1VTRV9CVVRUT04gPSAxO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIExFRlRfTU9VU0VfQlVUVE9OLFxuICBSSUdIVF9NT1VTRV9CVVRUT04sXG4gIE1JRERMRV9NT1VTRV9CVVRUT05cbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgUmVhY3QgfSBmcm9tIFwiLi9yZWFjdFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBCb3VuZHMgfSBmcm9tIFwiLi9ib3VuZHNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgT2Zmc2V0IH0gZnJvbSBcIi4vb2Zmc2V0XCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgQm9keSB9IGZyb20gXCIuL2VsZW1lbnQvYm9keVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMaW5rIH0gZnJvbSBcIi4vZWxlbWVudC9saW5rXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIElucHV0IH0gZnJvbSBcIi4vaW5wdXRFbGVtZW50L2lucHV0XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEJ1dHRvbiB9IGZyb20gXCIuL2VsZW1lbnQvYnV0dG9uXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlbGVjdCB9IGZyb20gXCIuL2VsZW1lbnQvc2VsZWN0XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEVsZW1lbnQgfSBmcm9tIFwiLi9lbGVtZW50XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENoZWNrYm94IH0gZnJvbSBcIi4vZWxlbWVudC9jaGVja2JveFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUZXh0YXJlYSB9IGZyb20gXCIuL2lucHV0RWxlbWVudC90ZXh0YXJlYVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUZXh0RWxlbWVudCB9IGZyb20gXCIuL3RleHRFbGVtZW50XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIElucHV0RWxlbWVudCB9IGZyb20gXCIuL2lucHV0RWxlbWVudFwiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpbmRvdyB9IGZyb20gXCIuL3dpbmRvd1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBkb2N1bWVudCB9IGZyb20gXCIuL2RvY3VtZW50XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGV2ZW50VHlwZXMgfSBmcm9tIFwiLi9ldmVudFR5cGVzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIG1vdXNlQnV0dG9ucyB9IGZyb20gXCIuL21vdXNlQnV0dG9uc1wiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIGVsZW1lbnRVdGlsaXRpZXMgfSBmcm9tIFwiLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJlYXN5XCI7XG5cbk9iamVjdC5hc3NpZ24oZ2xvYmFsVGhpcywge1xuICBSZWFjdFxufSk7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBcIi4vanV4dGFwb3NlXCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGNvbnRyb2xsZXIgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgY29udHJvbGxlcjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IEVSUk9SX0RFTEFZID0gMTAwMDtcbmV4cG9ydCBjb25zdCBFTVBUWV9TVFJJTkcgPSBcIlwiO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBJbnB1dEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhc3N3b3JkSW5wdXQgZXh0ZW5kcyBJbnB1dEVsZW1lbnQge1xuICBnZXRQYXNzd29yZCgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKSxcbiAgICAgICAgICBwYXNzd29yZCA9IHZhbHVlOyAvLy9cblxuICAgIHJldHVybiBwYXNzd29yZDtcbiAgfVxuXG4gIGNsZWFyUGFzc3dvcmQoKSB7XG4gICAgY29uc3QgcGFzc3dvcmQgPSBFTVBUWV9TVFJJTkcsXG4gICAgICAgICAgdmFsdWUgPSBwYXNzd29yZDsgLy8vXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG5cdCAgY29uc3QgZ2V0UGFzc3dvcmQgPSB0aGlzLmdldFBhc3N3b3JkLmJpbmQodGhpcyksXG5cdFx0XHRcdCAgY2xlYXJQYXNzd29yZCA9IHRoaXMuY2xlYXJQYXNzd29yZC5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRQYXNzd29yZCxcbiAgICAgIGNsZWFyUGFzc3dvcmRcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJpbnB1dFwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICB0eXBlOiBcInBhc3N3b3JkXCJcbiAgfTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORywgRVJST1JfREVMQVkgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZhbGlkYXRpb25FcnJvclBhcmFncmFwaCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgdGltZW91dCkge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIHRoaXMudGltZW91dCA9IHRpbWVvdXQ7XG4gIH1cblxuICBjbGVhclZhbGlkYXRpb25FcnJvcigpIHtcbiAgICBjb25zdCBodG1sID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgdGhpcy5odG1sKGh0bWwpO1xuICB9XG5cbiAgc2hvd1ZhbGlkYXRpb25FcnJvcih2YWxpZGF0aW9uRXJyb3IpIHtcbiAgICBjb25zdCBodG1sID0gdmFsaWRhdGlvbkVycm9yOyAvLy9cblxuICAgIHRoaXMuaHRtbChodG1sKTtcblxuICAgIGlmICh0aGlzLnRpbWVvdXQgIT09IG51bGwpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICAgIH1cblxuICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy50aW1lbW91dCA9IG51bGw7XG5cbiAgICAgIHRoaXMuY2xlYXJWYWxpZGF0aW9uRXJyb3IoKTtcbiAgICB9LCBFUlJPUl9ERUxBWSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIHJldHVybiAoe1xuICAgICAgc2hvd1ZhbGlkYXRpb25FcnJvcjogdGhpcy5zaG93VmFsaWRhdGlvbkVycm9yLmJpbmQodGhpcylcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJwXCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2YWxpZGF0aW9uIGVycm9yXCJcbiAgfTtcblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB0aW1lb3V0ID0gbnVsbCxcbiAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JQYXJhZ3JhcGggPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcywgdGltZW91dCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiB2YWxpZGF0aW9uRXJyb3JQYXJhZ3JhcGg7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCwgQnV0dG9uIH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IGNvbnRyb2xsZXIgZnJvbSBcIi4uLy4uL2NvbnRyb2xsZXJcIjtcbmltcG9ydCBQYXNzd29yZElucHV0IGZyb20gXCIuLi9pbnB1dC9wYXNzd29yZFwiO1xuaW1wb3J0IFZhbGlkYXRpb25FcnJvclBhcmFncmFwaCBmcm9tIFwiLi4vcGFyYWdyYXBoL3ZhbGlkYXRpb25FcnJvclwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhc3N3b3JkRm9ybSBleHRlbmRzIEVsZW1lbnQge1xuICB2YWxpZGF0ZUFuZFN1Ym1pdEZvcm0oKSB7XG4gICAgY29uc3QgcGFzc3dvcmRWYWxpZCA9IHRoaXMudmFsaWRhdGVGb3JtKCk7XG5cbiAgICBpZiAoIXBhc3N3b3JkVmFsaWQpIHtcbiAgICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcihcIlRoZSBwYXNzd29yZCBpcyBpbnZhbGlkXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN1Ym1pdEZvcm0oKTtcbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZUZvcm0oKSB7XG4gICAgY29uc3QgcGFzc3dvcmQgPSB0aGlzLmdldFBhc3N3b3JkKCksXG4gICAgICAgICAgcGFzc3dvcmRWYWxpZCA9IGlzUGFzc3dvcmRWYWxpZChwYXNzd29yZCk7XG5cbiAgICByZXR1cm4gcGFzc3dvcmRWYWxpZDtcbiAgfVxuXG4gIHN1Ym1pdEZvcm0oKSB7XG4gICAgY29uc3QgcGFzc3dvcmQgPSB0aGlzLmdldFBhc3N3b3JkKCk7XG5cbiAgICBjb250cm9sbGVyLnNldFBhc3N3b3JkKHBhc3N3b3JkKTtcblxuICAgIHRoaXMuY2xlYXJQYXNzd29yZCgpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4oW1xuXG4gICAgICA8UGFzc3dvcmRJbnB1dCAvPixcbiAgICAgIDxWYWxpZGF0aW9uRXJyb3JQYXJhZ3JhcGggLz4sXG4gICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCwgZWxlbWVudCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGVBbmRTdWJtaXRGb3JtKCk7XG5cbiAgICAgICAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgU3VibWl0XG4gICAgICA8L0J1dHRvbj5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJmb3JtXCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJwYXNzd29yZFwiXG4gIH07XG59XG5cbmZ1bmN0aW9uIGlzUGFzc3dvcmRWYWxpZChwYXNzd29yZCkge1xuICBjb25zdCBwYXNzd29yZFZhbGlkID0gKHBhc3N3b3JkICE9PSBFTVBUWV9TVFJJTkcpO1xuXG4gIHJldHVybiBwYXNzd29yZFZhbGlkO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVzc2FnZVBhcmFncmFwaCBleHRlbmRzIEVsZW1lbnQge1xuICBzaG93TWVzc2FnZShtZXNzYWdlKSB7XG4gICAgY29uc3QgaHRtbCA9IG1lc3NhZ2U7IC8vL1xuXG4gICAgdGhpcy5odG1sKGh0bWwpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcblx0ICBjb25zdCBzaG93TWVzc2FnZSA9IHRoaXMuc2hvd01lc3NhZ2UuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgc2hvd01lc3NhZ2VcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJwXCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJtZXNzYWdlXCJcbiAgfTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBjb250cm9sbGVyIGZyb20gXCIuLi8uLi9jb250cm9sbGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc2V0UGFzc3dvcmRCdXR0b24gZXh0ZW5kcyBFbGVtZW50IHtcbiAgY2xpY2tIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgY29udHJvbGxlci5yZXNldFBhc3N3b3JkKCk7XG4gIH1cblxuICBkaWRNb3VudCgpIHtcbiAgICB0aGlzLm9uQ2xpY2sodGhpcy5jbGlja0hhbmRsZXIsIHRoaXMpO1xuICB9XG5cbiAgd2lsbE1vdW50KCkge1xuICAgIHRoaXMub2ZmQ2xpY2sodGhpcy5jbGlja0hhbmRsZXIsIHRoaXMpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gXCJSZXNldCBwYXNzd29yZFwiO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImJ1dHRvblwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwicmVzZXQtcGFzc3dvcmRcIlxuICB9O1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IFBhc3N3b3JkRm9ybSBmcm9tIFwiLi92aWV3L2Zvcm0vcGFzc3dvcmRcIjtcbmltcG9ydCBNZXNzYWdlUGFyYWdyYXBoIGZyb20gXCIuL3ZpZXcvcGFyYWdyYXBoL21lc3NhZ2VcIjtcbmltcG9ydCBSZXNldFBhc3N3b3JkQnV0dG9uIGZyb20gXCIuL3ZpZXcvYnV0dG9uL3Jlc2V0UGFzc3dvcmRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybihbXG5cbiAgICAgIDxQYXNzd29yZEZvcm0vPixcbiAgICAgIDxSZXNldFBhc3N3b3JkQnV0dG9uLz4sXG4gICAgICA8TWVzc2FnZVBhcmFncmFwaC8+XG5cbiAgICBdKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kZWwge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnBhc3N3b3JkID0gbnVsbDtcbiAgfVxuXG4gIHNldFBhc3N3b3JkKHBhc3N3b3JkKSB7XG4gICAgdGhpcy5wYXNzd29yZCA9IHBhc3N3b3JkO1xuICB9XG5cbiAgcmVzZXRQYXNzd29yZCgpIHtcbiAgICB0aGlzLnBhc3N3b3JkID0gbnVsbDtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCIuLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCB7IEJvZHkgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiLi9tdmNBcHBsaWNhdGlvbi92aWV3XCI7XG5pbXBvcnQgTW9kZWwgZnJvbSBcIi4vbXZjQXBwbGljYXRpb24vbW9kZWxcIjtcbmltcG9ydCBjb250cm9sbGVyIGZyb20gXCIuL212Y0FwcGxpY2F0aW9uL2NvbnRyb2xsZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbXZjQXBwbGljYXRpb24oKSB7XG4gIGNvbnN0IG1vZGVsID0gbmV3IE1vZGVsKCksXG4gICAgICAgIHZpZXcgPVxuXG4gICAgICAgICAgPFZpZXcvPlxuXG4gICAgICAgIDtcblxuICBPYmplY3QuYXNzaWduKGNvbnRyb2xsZXIsIHtcbiAgICBzZXRQYXNzd29yZCxcbiAgICByZXNldFBhc3N3b3JkXG4gIH0pO1xuXG4gIGNvbnN0IGJvZHkgPSBuZXcgQm9keSgpO1xuXG4gIGJvZHkubW91bnQodmlldyk7XG5cbiAgZnVuY3Rpb24gc2V0UGFzc3dvcmQocGFzc3dvcmQpIHtcbiAgICBtb2RlbC5zZXRQYXNzd29yZChwYXNzd29yZCk7XG5cbiAgICB2aWV3LnNob3dNZXNzYWdlKFwiVGhlIHBhc3N3b3JkIGhhcyBiZWVuIHNldC5cIik7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFBhc3N3b3JkKCkge1xuICAgIG1vZGVsLnJlc2V0UGFzc3dvcmQoKTtcblxuICAgIHZpZXcuc2hvd01lc3NhZ2UoXCJUaGUgcGFzc3dvcmQgaGFzIGJlZW4gcmVzZXQuXCIpO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBcIi4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IHsgQm9keSB9IGZyb20gXCJlYXN5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNpbXBsZUFwcGxpY2F0aW9uKCkge1xuICBjb25zdCBib2R5ID0gbmV3IEJvZHkoKTtcblxuICBib2R5Lm1vdW50KFxuXG4gICAgPHA+XG4gICAgICBBIHNpbXBsZSBhcHBsaWNhdGlvbi5cbiAgICA8L3A+XG5cbiAgKTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZGVmYXVsdCBhcyBtdmNBcHBsaWNhdGlvbiB9IGZyb20gXCIuL2V4YW1wbGUvbXZjQXBwbGljYXRpb25cIjtcbmltcG9ydCB7IGRlZmF1bHQgYXMgc2ltcGxlQXBwbGljYXRpb24gfSBmcm9tIFwiLi9leGFtcGxlL3NpbXBsZUFwcGxpY2F0aW9uXCI7XG5cbk9iamVjdC5hc3NpZ24od2luZG93LCB7XG4gIG12Y0FwcGxpY2F0aW9uLFxuICBzaW1wbGVBcHBsaWNhdGlvblxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7O2VBRXFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU4sUUFBTSxTQUFOLDJCQUFBO3VCQUNELEtBQUssTUFB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
