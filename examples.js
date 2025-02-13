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
      ], [
        {
          key: "fromDOMElement",
          value: function fromDOMElement(domElement) {
            var offsetTop = domElement.offsetTop, offsetLeft = domElement.offsetLeft, top = offsetTop, left = offsetLeft, offset = new Offset2(top, left);
            return offset;
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
          key: "areOverlapping",
          value: function areOverlapping(bounds) {
            var bottom = bounds.getBottom(), right = bounds.getRight(), left = bounds.getLeft(), top = bounds.getTop(), overlapping = this.top < bottom && this.left < right && this.right > left && this.bottom > top;
            return overlapping;
          }
        },
        {
          key: "areOverlappingByTopAndLeft",
          value: function areOverlappingByTopAndLeft(top, left) {
            var overlapping = this.top <= top && this.left <= left && this.right > left && this.bottom > top;
            return overlapping;
          }
        }
      ], [
        {
          key: "fromDOMElement",
          value: function fromDOMElement(domElement) {
            var pageXOffset = window.pageXOffset, pageYOffset = window.pageYOffset, boundingClientRect = domElement.getBoundingClientRect(), windowScrollTop = pageYOffset, windowScrollLeft = pageXOffset, top = boundingClientRect.top + windowScrollTop, left = boundingClientRect.left + windowScrollLeft, right = boundingClientRect.right + windowScrollLeft, bottom = boundingClientRect.bottom + windowScrollTop, bounds = new Bounds2(top, left, right, bottom);
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
    function camelCaseToSnakeCase(string) {
      return string.replace(/([A-Z]+)/g, function(match, characters) {
        var upperCaseCharacters = characters.toLowerCase(), snakeCaseCharacters = "-".concat(upperCaseCharacters);
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
          get: all[name]
        });
    }
    _export(exports, {
      constructElement: function() {
        return constructElement;
      },
      default: function() {
        return _default;
      },
      destroyElement: function() {
        return destroyElement;
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
    function constructElement(element, domElement) {
      element.domElement = domElement;
      domElement.__element__ = element;
    }
    function destroyElement(element) {
      var descendantElements = element.getDescendantElements(), elements = [
        element
      ].concat(_to_consumable_array(descendantElements));
      elements.forEach(function(element2) {
        var domElement = element2.getDOMElement();
        delete element2.domElement;
        delete domElement.__element__;
      });
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
      getAscendantElements: function() {
        return getAscendantElements;
      },
      getChildElements: function() {
        return getChildElements;
      },
      getDescendantElements: function() {
        return getDescendantElements;
      },
      getNextSiblingElement: function() {
        return getNextSiblingElement;
      },
      getParentElement: function() {
        return getParentElement;
      },
      getPreviousSiblingElement: function() {
        return getPreviousSiblingElement;
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
        return TextElement;
      }
    });
    var _offset = /* @__PURE__ */ _interop_require_default(require_offset());
    var _bounds = /* @__PURE__ */ _interop_require_default(require_bounds());
    var _element = require_element();
    var _element1 = require_element2();
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
        var element = this, domElement = document.createTextNode(text);
        (0, _element.constructElement)(element, domElement);
      }
      _create_class(TextElement2, [
        {
          key: "getDOMElement",
          value: function getDOMElement() {
            return this.domElement;
          }
        },
        {
          key: "getOffset",
          value: function getOffset() {
            var offset = _offset.default.fromDOMElement(this.domElement);
            return offset;
          }
        },
        {
          key: "getBounds",
          value: function getBounds() {
            var bounds = _bounds.default.fromDOMElement(this.domElement);
            return bounds;
          }
        },
        {
          key: "getWidth",
          value: function getWidth() {
            return this.domElement.offsetWidth;
          }
        },
        {
          key: "getHeight",
          value: function getHeight() {
            return this.domElement.offsetHeight;
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
        },
        {
          key: "destroy",
          value: function destroy() {
            var element = this;
            (0, _element.destroyElement)(element);
          }
        }
      ]);
      return TextElement2;
    }();
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
      ERROR_EVENT_TYPE: function() {
        return ERROR_EVENT_TYPE;
      },
      FOCUS_EVENT_TYPE: function() {
        return FOCUS_EVENT_TYPE;
      },
      FULLSCREENCHANGE_EVENT_TYPE: function() {
        return FULLSCREENCHANGE_EVENT_TYPE;
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
      TOUCHEND_EVENT_TYPE: function() {
        return TOUCHEND_EVENT_TYPE;
      },
      TOUCHMOVE_EVENT_TYPE: function() {
        return TOUCHMOVE_EVENT_TYPE;
      },
      TOUCHSTART_EVENT_TYPE: function() {
        return TOUCHSTART_EVENT_TYPE;
      },
      UNHANDLEDREJECTION_EVENT_TYPE: function() {
        return UNHANDLEDREJECTION_EVENT_TYPE;
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
    var _object = require_object();
    var _array = require_array();
    var _string = require_string();
    var _name = require_name();
    var _elements = require_elements();
    var _eventTypes = require_eventTypes();
    var _constants = require_constants();
    function _type_of(obj) {
      "@swc/helpers - typeof";
      return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
    }
    var DOUBLE_CLICK_EVENT_TYPE = "doubleclick";
    var SELECTION_CHANGE_EVENT_TYPE = "selectionChange";
    var FULL_SCREEN_CHANGE_EVENT_TYPE = "fullScreenChange";
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
      var eventType = name.substring(2).toLowerCase();
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
      var handler = value;
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
    function onEvent(eventTypes, handler) {
      var _this = this;
      var element = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this;
      eventTypes = eventTypes.split(_constants.SPACE);
      eventTypes.forEach(function(eventType) {
        if (eventType === _eventTypes.RESIZE_EVENT_TYPE) {
          var resizeEventListeners = _this.findEventListeners(_eventTypes.RESIZE_EVENT_TYPE), resizeEventListenersLength = resizeEventListeners.length;
          if (resizeEventListenersLength === 0) {
            _this.resizeObserver = new ResizeObserver(function(entries) {
              var resizeEventListeners2 = _this.findEventListeners(_eventTypes.RESIZE_EVENT_TYPE);
              resizeEventListeners2.forEach(function(resizeEventListener) {
                var event = null;
                resizeEventListener(event);
              });
            });
            _this.resizeObserver.observe(_this.domElement);
          }
          _this.addEventListener(eventType, handler, element);
        } else {
          var eventListener = _this.addEventListener(eventType, handler, element);
          _this.domElement.addEventListener(eventType, eventListener);
        }
      });
    }
    function offEvent(eventTypes, handler) {
      var _this = this;
      var element = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this;
      eventTypes = eventTypes.split(_constants.SPACE);
      eventTypes.forEach(function(eventType) {
        if (eventType === _eventTypes.RESIZE_EVENT_TYPE) {
          _this.removeEventListener(eventType, handler, element);
          var resizeEventListeners = _this.findEventListeners(_eventTypes.RESIZE_EVENT_TYPE), resizeEventListenersLength = resizeEventListeners.length;
          if (resizeEventListenersLength === 0) {
            _this.resizeObserver.unobserve(_this.domElement);
            delete _this.resizeObserver;
          }
        } else {
          var eventListener = _this.removeEventListener(eventType, handler, element);
          _this.domElement.removeEventListener(eventType, eventListener);
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
          get: all[name]
        });
    }
    _export(exports, {
      default: function() {
        return _default;
      },
      offScroll: function() {
        return offScroll;
      },
      onScroll: function() {
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
      var domElement = this.getDOMElement();
      domElement.requestFullscreen().catch(errorHandler);
    }
    function exitFullScreen() {
      document.exitFullscreen();
    }
    function isFullScreen() {
      var fullscreenElement = document.fullscreenElement, fullScreen = fullscreenElement !== null;
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
      for (var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        remainingArguments[_key - 1] = arguments[_key];
      }
      var customEventListeners = this.findCustomEventListeners(customEventType);
      customEventListeners.forEach(function(customEventListener) {
        var _customHandler;
        var customHandler = customEventListener.customHandler, customHandlerElement = customEventListener.element;
        (_customHandler = customHandler).call.apply(_customHandler, [
          customHandlerElement
        ].concat(_to_consumable_array(remainingArguments)));
      });
    }
    function callCustomHandlersAsync(customEventType) {
      for (var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        remainingArguments[_key - 1] = arguments[_key];
      }
      var customEventListeners = this.findCustomEventListeners(customEventType), done = remainingArguments.pop();
      (0, _async.forEach)(customEventListeners, function(customEventListener, next) {
        var _customHandler;
        var customHandler = customEventListener.customHandler, customHandlerElement = customEventListener.element, done2 = next;
        (_customHandler = customHandler).call.apply(_customHandler, [
          customHandlerElement
        ].concat(_to_consumable_array(remainingArguments), [
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
    var _object = require_object();
    var _name = require_name();
    var _array = require_array();
    var _element1 = require_element();
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
        if (selector !== null) {
          var element = this, domElement = document.querySelector(selector);
          (0, _element1.constructElement)(element, domElement);
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
            var offset = _offset.default.fromDOMElement(this.domElement);
            return offset;
          }
        },
        {
          key: "getBounds",
          value: function getBounds() {
            var bounds = _bounds.default.fromDOMElement(this.domElement);
            return bounds;
          }
        },
        {
          key: "getWidth",
          value: function getWidth() {
            return this.domElement.offsetWidth;
          }
        },
        {
          key: "getHeight",
          value: function getHeight() {
            return this.domElement.offsetHeight;
          }
        },
        {
          key: "getInnerWidth",
          value: function getInnerWidth() {
            return this.domElement.clientWidth;
          }
        },
        {
          key: "getInnerHeight",
          value: function getInnerHeight() {
            return this.domElement.clientHeight;
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
          key: "hasClass",
          value: function hasClass(className) {
            return this.domElement.classList.contains(className);
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
          key: "removeAllClasses",
          value: function removeAllClasses() {
            this.domElement.className = _constants.EMPTY_STRING;
          }
        },
        {
          key: "addTo",
          value: function addTo(parentElement) {
            parentElement.add(this);
          }
        },
        {
          key: "appendTo",
          value: function appendTo(parentElement) {
            parentElement.append(this);
          }
        },
        {
          key: "prependTo",
          value: function prependTo(parentElement) {
            parentElement.prepend(this);
          }
        },
        {
          key: "removeFrom",
          value: function removeFrom(parentElement) {
            parentElement.remove(this);
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
              element.remove();
              return;
            }
            this.domElement.remove();
          }
        },
        {
          key: "prepend",
          value: function prepend(element) {
            var domElement = element.domElement, referenceDOMElement = this.domElement.firstChild;
            this.domElement.insertBefore(domElement, referenceDOMElement);
          }
        },
        {
          key: "append",
          value: function append(element) {
            var domElement = element.domElement, referenceDOMElement = null;
            this.domElement.insertBefore(domElement, referenceDOMElement);
          }
        },
        {
          key: "insertBefore",
          value: function insertBefore(siblingElement) {
            var parentDOMNode = siblingElement.domElement.parentNode, referenceDOMElement = siblingElement.domElement;
            parentDOMNode.insertBefore(this.domElement, referenceDOMElement);
          }
        },
        {
          key: "insertAfter",
          value: function insertAfter(siblingElement) {
            var parentDOMNode = siblingElement.domElement.parentNode, referenceDOMElement = siblingElement.domElement.nextSibling;
            parentDOMNode.insertBefore(this.domElement, referenceDOMElement);
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
            this.insertAfter(siblingElement);
            var element = this;
            (0, _element1.mountElement)(element);
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
          key: "destroy",
          value: function destroy() {
            var element = this;
            (0, _element1.destroyElement)(element);
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
    function elementFromTagName(Class, tagName) {
      for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key2 = 2; _key2 < _len; _key2++) {
        remainingArguments[_key2 - 2] = arguments[_key2];
      }
      var _Function_prototype_bind;
      var selector = null, element = new ((_Function_prototype_bind = Function.prototype.bind).call.apply(_Function_prototype_bind, [
        Class,
        null,
        selector
      ].concat(_to_consumable_array(remainingArguments))))(), domElement = (0, _name.isSVGTagName)(tagName) ? document.createElementNS(_constants.SVG_NAMESPACE_URI, tagName) : document.createElement(tagName);
      (0, _element1.constructElement)(element, domElement);
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
      var _$focus = document.activeElement === this.domElement;
      return _$focus;
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
    var _selection = /* @__PURE__ */ _interop_require_default(require_selection());
    var _constants = require_constants();
    var _eventTypes = require_eventTypes();
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
          key: "getInnerWidth",
          value: function getInnerWidth() {
            return this.domElement.clientWidth;
          }
        },
        {
          key: "getInnerHeight",
          value: function getInnerHeight() {
            return this.domElement.clientHeight;
          }
        },
        {
          key: "getSelection",
          value: function getSelection() {
            return this.domElement.getSelection();
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
        },
        {
          key: "onSelectionChange",
          value: function onSelectionChange(selectionChangeHandler, element) {
            this.onEvent(_eventTypes.SELECTIONCHANGE_EVENT_TYPE, selectionChangeHandler, element);
          }
        },
        {
          key: "offSelectionChange",
          value: function offSelectionChange(selectionChangeHandler, element) {
            this.offEvent(_eventTypes.SELECTIONCHANGE_EVENT_TYPE, selectionChangeHandler, element);
          }
        },
        {
          key: "createEventListener",
          value: function createEventListener(eventType, handler, element) {
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
        }
      ]);
      return Document2;
    }();
    Object.assign(Document.prototype, _key.default);
    Object.assign(Document.prototype, _event.default);
    Object.assign(Document.prototype, _mouse.default);
    Object.assign(Document.prototype, _click.default);
    Object.assign(Document.prototype, _selection.default);
    var _default = (typeof document === "undefined" ? "undefined" : _type_of(document)) === _constants.UNDEFINED ? void 0 : new Document();
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
          key: "getDOMElement",
          value: function getDOMElement() {
            return this.domElement;
          }
        },
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
          key: "reload",
          value: function reload() {
            window.location.reload();
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
        },
        {
          key: "onResize",
          value: function onResize(resizeHandler, element) {
            var eventType = _eventTypes.RESIZE_EVENT_TYPE, eventListener = this.addEventListener(eventType, resizeHandler, element);
            this.domElement.addEventListener(eventType, eventListener);
          }
        },
        {
          key: "offResize",
          value: function offResize(resizeHandler, element) {
            var eventType = _eventTypes.RESIZE_EVENT_TYPE, eventListener = this.removeEventListener(eventType, resizeHandler, element);
            this.domElement.removeEventListener(eventType, eventListener);
          }
        }
      ]);
      return Window2;
    }();
    Object.assign(Window.prototype, _key.default);
    Object.assign(Window.prototype, _event.default);
    Object.assign(Window.prototype, _mouse.default);
    Object.assign(Window.prototype, _click.default);
    Object.assign(Window.prototype, _focus.default);
    Object.assign(Window.prototype, {
      onScroll: _scroll.onScroll,
      offScroll: _scroll.offScroll
    });
    var _default = (typeof window === "undefined" ? "undefined" : _type_of(window)) === _constants.UNDEFINED ? void 0 : new Window();
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
    function _call_super(_this, derived, args) {
      derived = _get_prototype_of(derived);
      return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
      try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
      } catch (_) {
      }
      return (_is_native_reflect_construct = function() {
        return !!result;
      })();
    }
    var Body = /* @__PURE__ */ function(Element) {
      _inherits(Body2, Element);
      function Body2() {
        var selector = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _constants.BODY;
        _class_call_check(this, Body2);
        return _call_super(this, Body2, [
          selector
        ]);
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
    var _focus = /* @__PURE__ */ _interop_require_default(require_focus());
    function _assert_this_initialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _call_super(_this, derived, args) {
      derived = _get_prototype_of(derived);
      return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
      try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
      } catch (_) {
      }
      return (_is_native_reflect_construct = function() {
        return !!result;
      })();
    }
    var Link = /* @__PURE__ */ function(Element) {
      _inherits(Link2, Element);
      function Link2() {
        _class_call_check(this, Link2);
        return _call_super(this, Link2, arguments);
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
    function _assert_this_initialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _call_super(_this, derived, args) {
      derived = _get_prototype_of(derived);
      return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
      try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
      } catch (_) {
      }
      return (_is_native_reflect_construct = function() {
        return !!result;
      })();
    }
    var Input = /* @__PURE__ */ function(Element) {
      _inherits(Input2, Element);
      function Input2() {
        _class_call_check(this, Input2);
        return _call_super(this, Input2, arguments);
      }
      return Input2;
    }(_wrap_native_super(_element.default));
    _define_property(Input, "tagName", "input");
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
    function _assert_this_initialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _call_super(_this, derived, args) {
      derived = _get_prototype_of(derived);
      return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
      try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
      } catch (_) {
      }
      return (_is_native_reflect_construct = function() {
        return !!result;
      })();
    }
    var Button = /* @__PURE__ */ function(Element) {
      _inherits(Button2, Element);
      function Button2() {
        _class_call_check(this, Button2);
        return _call_super(this, Button2, arguments);
      }
      return Button2;
    }(_wrap_native_super(_element.default));
    _define_property(Button, "tagName", "button");
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
    function _assert_this_initialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _call_super(_this, derived, args) {
      derived = _get_prototype_of(derived);
      return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
      try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
      } catch (_) {
      }
      return (_is_native_reflect_construct = function() {
        return !!result;
      })();
    }
    var Select = /* @__PURE__ */ function(Element) {
      _inherits(Select2, Element);
      function Select2() {
        _class_call_check(this, Select2);
        return _call_super(this, Select2, arguments);
      }
      return Select2;
    }(_wrap_native_super(_element.default));
    _define_property(Select, "tagName", "select");
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
    function _assert_this_initialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _call_super(_this, derived, args) {
      derived = _get_prototype_of(derived);
      return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
      try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
      } catch (_) {
      }
      return (_is_native_reflect_construct = function() {
        return !!result;
      })();
    }
    var Checkbox = /* @__PURE__ */ function(Element) {
      _inherits(Checkbox2, Element);
      function Checkbox2() {
        _class_call_check(this, Checkbox2);
        return _call_super(this, Checkbox2, arguments);
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
    function _assert_this_initialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _call_super(_this, derived, args) {
      derived = _get_prototype_of(derived);
      return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
      try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
      } catch (_) {
      }
      return (_is_native_reflect_construct = function() {
        return !!result;
      })();
    }
    var Textarea = /* @__PURE__ */ function(Element) {
      _inherits(Textarea2, Element);
      function Textarea2() {
        _class_call_check(this, Textarea2);
        return _call_super(this, Textarea2, arguments);
      }
      return Textarea2;
    }(_wrap_native_super(_element.default));
    _define_property(Textarea, "tagName", "textarea");
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
        return _element1.default;
      },
      Input: function() {
        return _input1.default;
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
      customEventMixins: function() {
        return _customEvent.default;
      },
      document: function() {
        return _document.default;
      },
      elementUtilities: function() {
        return _element.default;
      },
      eventTypes: function() {
        return _eventTypes.default;
      },
      focusMixins: function() {
        return _focus.default;
      },
      inputMixins: function() {
        return _input.default;
      },
      mouseButtons: function() {
        return _mouseButtons.default;
      },
      selectionMixins: function() {
        return _selection.default;
      },
      window: function() {
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
    function _call_super(_this, derived, args) {
      derived = _get_prototype_of(derived);
      return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
      try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
      } catch (_) {
      }
      return (_is_native_reflect_construct = function() {
        return !!result;
      })();
    }
    var PasswordInput = /* @__PURE__ */ function(InputElement) {
      _inherits(PasswordInput2, InputElement);
      function PasswordInput2() {
        _class_call_check(this, PasswordInput2);
        return _call_super(this, PasswordInput2, arguments);
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
    function _call_super(_this, derived, args) {
      derived = _get_prototype_of(derived);
      return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
      try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
      } catch (_) {
      }
      return (_is_native_reflect_construct = function() {
        return !!result;
      })();
    }
    var ValidationErrorParagraph = /* @__PURE__ */ function(Element) {
      _inherits(ValidationErrorParagraph2, Element);
      function ValidationErrorParagraph2(selector, timeout) {
        _class_call_check(this, ValidationErrorParagraph2);
        var _this;
        _this = _call_super(this, ValidationErrorParagraph2, [
          selector
        ]);
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
    function _call_super(_this, derived, args) {
      derived = _get_prototype_of(derived);
      return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
      try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
      } catch (_) {
      }
      return (_is_native_reflect_construct = function() {
        return !!result;
      })();
    }
    var PasswordForm = /* @__PURE__ */ function(Element) {
      _inherits(PasswordForm2, Element);
      function PasswordForm2() {
        _class_call_check(this, PasswordForm2);
        return _call_super(this, PasswordForm2, arguments);
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
    function _call_super(_this, derived, args) {
      derived = _get_prototype_of(derived);
      return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
      try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
      } catch (_) {
      }
      return (_is_native_reflect_construct = function() {
        return !!result;
      })();
    }
    var MessageParagraph = /* @__PURE__ */ function(Element) {
      _inherits(MessageParagraph2, Element);
      function MessageParagraph2() {
        _class_call_check(this, MessageParagraph2);
        return _call_super(this, MessageParagraph2, arguments);
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
    function _call_super(_this, derived, args) {
      derived = _get_prototype_of(derived);
      return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
      try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
      } catch (_) {
      }
      return (_is_native_reflect_construct = function() {
        return !!result;
      })();
    }
    var ResetPasswordButton = /* @__PURE__ */ function(Element) {
      _inherits(ResetPasswordButton2, Element);
      function ResetPasswordButton2() {
        _class_call_check(this, ResetPasswordButton2);
        var _this;
        _this = _call_super(this, ResetPasswordButton2, arguments), _define_property(_this, "clickHandler", function(event, element) {
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
    function _call_super(_this, derived, args) {
      derived = _get_prototype_of(derived);
      return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
      try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
      } catch (_) {
      }
      return (_is_native_reflect_construct = function() {
        return !!result;
      })();
    }
    var View = /* @__PURE__ */ function(Element) {
      _inherits(View2, Element);
      function View2() {
        _class_call_check(this, View2);
        return _call_super(this, View2, arguments);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL29mZnNldC5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvYm91bmRzLmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy9jb25zdGFudHMuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL3V0aWxpdGllcy9vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL3V0aWxpdGllcy9hcnJheS5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvdXRpbGl0aWVzL3N0cmluZy5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvdXRpbGl0aWVzL25hbWUuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL3V0aWxpdGllcy9lbGVtZW50LmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy91dGlsaXRpZXMvZG9tLmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy9taXhpbnMvZWxlbWVudC5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvdGV4dEVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL3V0aWxpdGllcy9lbGVtZW50cy5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvZXZlbnRUeXBlcy5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvbWl4aW5zL2pzeC5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvbWl4aW5zL2tleS5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvbWl4aW5zL3N0YXRlLmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy9taXhpbnMvZXZlbnQuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL21peGlucy9tb3VzZS5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvbWl4aW5zL2NsaWNrLmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy9taXhpbnMvdG91Y2guanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL21peGlucy9zY3JvbGwuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL21peGlucy9yZXNpemUuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL21peGlucy9mdWxsU2NyZWVuLmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy91dGlsaXRpZXMvYXN5bmMuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL21peGlucy9jdXN0b21FdmVudC5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvZWxlbWVudC5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvcmVhY3QuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL21vdXNlQnV0dG9ucy5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvbWl4aW5zL2lucHV0LmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy9taXhpbnMvZm9jdXMuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL21peGlucy9zZWxlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL2RvY3VtZW50LmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy93aW5kb3cuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL2VsZW1lbnQvYm9keS5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvZWxlbWVudC9saW5rLmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy9lbGVtZW50L2lucHV0LmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy9lbGVtZW50L2J1dHRvbi5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvZWxlbWVudC9zZWxlY3QuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL2VsZW1lbnQvY2hlY2tib3guanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL2VsZW1lbnQvdGV4dGFyZWEuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL2luZGV4LmpzIiwgInNyYy9qdXh0YXBvc2UuanMiLCAic3JjL2luZGV4LmpzIiwgInNyYy9leGFtcGxlL212Y0FwcGxpY2F0aW9uL2NvbnRyb2xsZXIuanMiLCAic3JjL2V4YW1wbGUvbXZjQXBwbGljYXRpb24vY29uc3RhbnRzLmpzIiwgInNyYy9leGFtcGxlL212Y0FwcGxpY2F0aW9uL3ZpZXcvaW5wdXQvcGFzc3dvcmQuanMiLCAic3JjL2V4YW1wbGUvbXZjQXBwbGljYXRpb24vdmlldy9wYXJhZ3JhcGgvdmFsaWRhdGlvbkVycm9yLmpzIiwgInNyYy9leGFtcGxlL212Y0FwcGxpY2F0aW9uL3ZpZXcvZm9ybS9wYXNzd29yZC5qcyIsICJzcmMvZXhhbXBsZS9tdmNBcHBsaWNhdGlvbi92aWV3L3BhcmFncmFwaC9tZXNzYWdlLmpzIiwgInNyYy9leGFtcGxlL212Y0FwcGxpY2F0aW9uL3ZpZXcvYnV0dG9uL3Jlc2V0UGFzc3dvcmQuanMiLCAic3JjL2V4YW1wbGUvbXZjQXBwbGljYXRpb24vdmlldy5qcyIsICJzcmMvZXhhbXBsZS9tdmNBcHBsaWNhdGlvbi9tb2RlbC5qcyIsICJzcmMvZXhhbXBsZS9tdmNBcHBsaWNhdGlvbi5qcyIsICJzcmMvZXhhbXBsZS9zaW1wbGVBcHBsaWNhdGlvbi5qcyIsICJzcmMvZXhhbXBsZXMuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPZmZzZXQge1xuICBjb25zdHJ1Y3Rvcih0b3AsIGxlZnQpIHtcbiAgICB0aGlzLnRvcCA9IHRvcDtcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICB9XG5cbiAgZ2V0VG9wKCkge1xuICAgIHJldHVybiB0aGlzLnRvcDtcbiAgfVxuXG4gIGdldExlZnQoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50KSB7XG4gICAgY29uc3QgeyBvZmZzZXRUb3AsIG9mZnNldExlZnQgfSA9IGRvbUVsZW1lbnQsXG4gICAgICAgICAgdG9wID0gb2Zmc2V0VG9wLCAgLy8vXG4gICAgICAgICAgbGVmdCA9IG9mZnNldExlZnQsICAvLy9cbiAgICAgICAgICBvZmZzZXQgPSBuZXcgT2Zmc2V0KHRvcCwgbGVmdCk7XG5cbiAgICByZXR1cm4gb2Zmc2V0O1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvdW5kcyB7XG4gIGNvbnN0cnVjdG9yKHRvcCwgbGVmdCwgcmlnaHQsIGJvdHRvbSkge1xuICAgIHRoaXMudG9wID0gdG9wO1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICAgIHRoaXMuYm90dG9tID0gYm90dG9tO1xuICB9XG5cbiAgZ2V0VG9wKCkge1xuICAgIHJldHVybiB0aGlzLnRvcDtcbiAgfVxuXG4gIGdldExlZnQoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdDtcbiAgfVxuXG4gIGdldFJpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLnJpZ2h0O1xuICB9XG5cbiAgZ2V0Qm90dG9tKCkge1xuICAgIHJldHVybiB0aGlzLmJvdHRvbTtcbiAgfVxuXG4gIGdldFdpZHRoKCkge1xuICAgIGNvbnN0IHdpZHRoID0gKHRoaXMucmlnaHQgLSB0aGlzLmxlZnQpO1xuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KCkge1xuICAgIGNvbnN0IGhlaWdodCA9ICh0aGlzLmJvdHRvbSAtIHRoaXMudG9wKTtcblxuICAgIHJldHVybiBoZWlnaHQ7XG4gIH1cbiAgXG4gIHNldFRvcCh0b3ApIHtcbiAgICB0aGlzLnRvcCA9IHRvcDtcbiAgfVxuXG4gIHNldExlZnQobGVmdCkge1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gIH1cblxuICBzZXRSaWdodChyaWdodCkge1xuICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgfVxuXG4gIHNldEJvdHRvbShib3R0b20pIHtcbiAgICB0aGlzLmJvdHRvbSA9IGJvdHRvbTtcbiAgfVxuXG4gIGFyZU92ZXJsYXBwaW5nKGJvdW5kcykge1xuICAgIGNvbnN0IGJvdHRvbSA9IGJvdW5kcy5nZXRCb3R0b20oKSxcbiAgICAgICAgICByaWdodCA9IGJvdW5kcy5nZXRSaWdodCgpLFxuICAgICAgICAgIGxlZnQgPSBib3VuZHMuZ2V0TGVmdCgpLFxuICAgICAgICAgIHRvcCA9IGJvdW5kcy5nZXRUb3AoKSxcbiAgICAgICAgICBvdmVybGFwcGluZyA9ICgodGhpcy50b3AgPCBib3R0b20pXG4gICAgICAgICAgICAgICAgICAgICAgJiYgKHRoaXMubGVmdCA8IHJpZ2h0KVxuICAgICAgICAgICAgICAgICAgICAgICYmICh0aGlzLnJpZ2h0ID4gbGVmdClcbiAgICAgICAgICAgICAgICAgICAgICAmJiAodGhpcy5ib3R0b20gPiB0b3ApKTtcblxuICAgIHJldHVybiBvdmVybGFwcGluZztcbiAgfVxuXG4gIGFyZU92ZXJsYXBwaW5nQnlUb3BBbmRMZWZ0KHRvcCwgbGVmdCkge1xuICAgIGNvbnN0IG92ZXJsYXBwaW5nID0gKCh0aGlzLnRvcCA8PSB0b3ApXG4gICAgICAgICAgICAgICAgICAgICAgJiYgKHRoaXMubGVmdCA8PSBsZWZ0KVxuICAgICAgICAgICAgICAgICAgICAgICYmICh0aGlzLnJpZ2h0ID4gbGVmdClcbiAgICAgICAgICAgICAgICAgICAgICAmJiAodGhpcy5ib3R0b20gPiB0b3ApKTtcblxuICAgIHJldHVybiBvdmVybGFwcGluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRE9NRWxlbWVudChkb21FbGVtZW50KSB7XG4gICAgY29uc3QgeyBwYWdlWE9mZnNldCwgcGFnZVlPZmZzZXQgfSA9IHdpbmRvdyxcbiAgICAgICAgICBib3VuZGluZ0NsaWVudFJlY3QgPSBkb21FbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgIHdpbmRvd1Njcm9sbFRvcCA9IHBhZ2VZT2Zmc2V0LCAvLy9cbiAgICAgICAgICB3aW5kb3dTY3JvbGxMZWZ0ID0gcGFnZVhPZmZzZXQsICAvLy9cbiAgICAgICAgICB0b3AgPSBib3VuZGluZ0NsaWVudFJlY3QudG9wICsgd2luZG93U2Nyb2xsVG9wLFxuICAgICAgICAgIGxlZnQgPSBib3VuZGluZ0NsaWVudFJlY3QubGVmdCArIHdpbmRvd1Njcm9sbExlZnQsXG4gICAgICAgICAgcmlnaHQgPSBib3VuZGluZ0NsaWVudFJlY3QucmlnaHQgKyB3aW5kb3dTY3JvbGxMZWZ0LFxuICAgICAgICAgIGJvdHRvbSA9IGJvdW5kaW5nQ2xpZW50UmVjdC5ib3R0b20gKyB3aW5kb3dTY3JvbGxUb3AsXG4gICAgICAgICAgYm91bmRzID0gbmV3IEJvdW5kcyh0b3AsIGxlZnQsIHJpZ2h0LCBib3R0b20pO1xuXG4gICAgcmV0dXJuIGJvdW5kcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVG9wTGVmdFdpZHRoQW5kSGVpZ2h0KHRvcCwgbGVmdCwgd2lkdGgsIGhlaWdodCkge1xuICAgIGNvbnN0IGJvdHRvbSA9IHRvcCArIGhlaWdodCxcbiAgICAgICAgICByaWdodCA9IGxlZnQgKyB3aWR0aCxcbiAgICAgICAgICBib3VuZHMgPSBuZXcgQm91bmRzKHRvcCwgbGVmdCwgcmlnaHQsIGJvdHRvbSk7XG5cbiAgICByZXR1cm4gYm91bmRzO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBGT1IgPSBcImZvclwiO1xuZXhwb3J0IGNvbnN0IEJPRFkgPSBcImJvZHlcIjtcbmV4cG9ydCBjb25zdCBOT05FID0gXCJub25lXCI7XG5leHBvcnQgY29uc3QgU1BBQ0UgPSBcIiBcIjtcbmV4cG9ydCBjb25zdCBDTEFTUyA9IFwiY2xhc3NcIjtcbmV4cG9ydCBjb25zdCBXSURUSCA9IFwid2lkdGhcIjtcbmV4cG9ydCBjb25zdCBCTE9DSyA9IFwiYmxvY2tcIjtcbmV4cG9ydCBjb25zdCBIRUlHSFQgPSBcImhlaWdodFwiO1xuZXhwb3J0IGNvbnN0IE9CSkVDVCA9IFwib2JqZWN0XCI7XG5leHBvcnQgY29uc3QgU1RSSU5HID0gXCJzdHJpbmdcIjtcbmV4cG9ydCBjb25zdCBESVNQTEFZID0gXCJkaXNwbGF5XCI7XG5leHBvcnQgY29uc3QgQk9PTEVBTiA9IFwiYm9vbGVhblwiO1xuZXhwb3J0IGNvbnN0IERJU0FCTEVEID0gXCJkaXNhYmxlZFwiO1xuZXhwb3J0IGNvbnN0IEZVTkNUSU9OID0gXCJmdW5jdGlvblwiO1xuZXhwb3J0IGNvbnN0IFdJTERDQVJEID0gXCIqXCI7XG5leHBvcnQgY29uc3QgSFRNTF9GT1IgPSBcImh0bWxGb3JcIjtcbmV4cG9ydCBjb25zdCBVTkRFRklORUQgPSAndW5kZWZpbmVkJztcbmV4cG9ydCBjb25zdCBDTEFTU19OQU1FID0gXCJjbGFzc05hbWVcIjtcbmV4cG9ydCBjb25zdCBFTVBUWV9TVFJJTkcgPSBcIlwiO1xuZXhwb3J0IGNvbnN0IFNWR19OQU1FU1BBQ0VfVVJJID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfUFJPUEVSVElFUyA9IFwiZGVmYXVsdFByb3BlcnRpZXNcIjtcbmV4cG9ydCBjb25zdCBJR05PUkVEX1BST1BFUlRJRVMgPSBcImlnbm9yZWRQcm9wZXJ0aWVzXCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEJPT0xFQU4gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lKHRhcmdldCwgc291cmNlID0ge30pIHtcbiAgdGFyZ2V0ID0geyAgLy8vXG4gICAgLi4udGFyZ2V0XG4gIH07XG5cbiAgY29uc3QgbmFtZXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpOyAgLy8vXG5cbiAgbmFtZXMuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgIGNvbnN0IHRhcmdldFZhbHVlID0gdGFyZ2V0W25hbWVdLFxuICAgICAgICAgIHNvdXJjZVZhbHVlID0gc291cmNlW25hbWVdLFxuICAgICAgICAgIHRhcmdldEhhc093blByb3BlcnR5ID0gdGFyZ2V0Lmhhc093blByb3BlcnR5KG5hbWUpO1xuXG4gICAgdGFyZ2V0W25hbWVdID0gdGFyZ2V0SGFzT3duUHJvcGVydHkgP1xuICAgICAgICAgICAgICAgICAgICAgY29tYmluZVZhbHVlcyh0YXJnZXRWYWx1ZSwgc291cmNlVmFsdWUpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgc291cmNlVmFsdWU7IC8vL1xuICB9KTtcblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJ1bmUodGFyZ2V0LCBuYW1lcyA9IFtdKSB7XG4gIHRhcmdldCA9IHsgIC8vL1xuICAgIC4uLnRhcmdldFxuICB9O1xuXG4gIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICBjb25zdCB0YXJnZXRIYXNPd25Qcm9wZXJ0eSA9IHRhcmdldC5oYXNPd25Qcm9wZXJ0eShuYW1lKTtcblxuICAgIGlmICh0YXJnZXRIYXNPd25Qcm9wZXJ0eSkge1xuICAgICAgZGVsZXRlIHRhcmdldFtuYW1lXTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIGNvbWJpbmVWYWx1ZXModGFyZ2V0VmFsdWUsIHNvdXJjZVZhbHVlKSB7XG4gIGNvbnN0IHRhcmdldFZhbHVlQm9vbGVhbiA9IGlzVmFsdWVCb29sZWFuKHRhcmdldFZhbHVlKSxcbiAgICAgICAgc291cmNlVmFsdWVCb29sZWFuID0gaXNWYWx1ZUJvb2xlYW4oc291cmNlVmFsdWUpLFxuICAgICAgICBjb21iaW5lZFZhbHVlID0gKHRhcmdldFZhbHVlQm9vbGVhbiAmJiBzb3VyY2VWYWx1ZUJvb2xlYW4pID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0VmFsdWUgOiAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHt0YXJnZXRWYWx1ZX0gJHtzb3VyY2VWYWx1ZX1gO1xuXG4gIHJldHVybiBjb21iaW5lZFZhbHVlO1xufVxuXG5mdW5jdGlvbiBpc1ZhbHVlQm9vbGVhbih2YWx1ZSkge1xuICBjb25zdCB2YWx1ZUJvb2xlYW4gPSAodHlwZW9mIHZhbHVlID09PSBCT09MRUFOKTtcblxuICByZXR1cm4gdmFsdWVCb29sZWFuO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBwdXNoKGFycmF5MSwgYXJyYXkyKSB7IEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGFycmF5MSwgYXJyYXkyKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gYXVnbWVudChhcnJheTEsIGFycmF5MiwgdGVzdCkge1xuICBhcnJheTEgPSBbIC4uLmFycmF5MSBdOyAvLy9cblxuICBhcnJheTIuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIGFycmF5MS5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGFycmF5MTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZsYXR0ZW4oYXJyYXkpIHtcbiAgcmV0dXJuIGFycmF5LnJlZHVjZSgoYXJyYXksIGVsZW1lbnQpID0+IHtcbiAgICBhcnJheSA9IGFycmF5LmNvbmNhdChlbGVtZW50KTsgIC8vL1xuXG4gICAgcmV0dXJuIGFycmF5O1xuICB9LCBbXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBndWFyYW50ZWUoYXJyYXlPckVsZW1lbnQpIHtcbiAgYXJyYXlPckVsZW1lbnQgPSBhcnJheU9yRWxlbWVudCB8fCBbXTtcblxuICByZXR1cm4gKGFycmF5T3JFbGVtZW50IGluc3RhbmNlb2YgQXJyYXkpID9cbiAgICAgICAgICAgIGFycmF5T3JFbGVtZW50IDpcbiAgICAgICAgICAgICAgW2FycmF5T3JFbGVtZW50XTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNhbWVsQ2FzZVRvU25ha2VDYXNlKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoLyhbQS1aXSspL2csIChtYXRjaCwgY2hhcmFjdGVycykgPT4ge1xuICAgIGNvbnN0IHVwcGVyQ2FzZUNoYXJhY3RlcnMgPSBjaGFyYWN0ZXJzLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgc25ha2VDYXNlQ2hhcmFjdGVycyA9IGAtJHt1cHBlckNhc2VDaGFyYWN0ZXJzfWA7XG5cbiAgICByZXR1cm4gc25ha2VDYXNlQ2hhcmFjdGVycztcbiAgfSk7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1NWR1RhZ05hbWUodGFnTmFtZSkge1xuICByZXR1cm4gc3ZnVGFnTmFtZXMuaW5jbHVkZXModGFnTmFtZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1NWR0F0dHJpYnV0ZU5hbWUoYXR0cmlidXRlTmFtZSkge1xuICByZXR1cm4gc3ZnQXR0cmlidXRlTmFtZXMuaW5jbHVkZXMoYXR0cmlidXRlTmFtZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0hUTUxBdHRyaWJ1dGVOYW1lKGF0dHJpYnV0ZU5hbWUpIHtcbiAgcmV0dXJuIGh0bWxBdHRyaWJ1dGVOYW1lcy5pbmNsdWRlcyhhdHRyaWJ1dGVOYW1lKTtcbn1cblxuY29uc3Qgc3ZnVGFnTmFtZXMgPSBbXG4gICAgICAgIFwiYWx0R2x5cGhcIiwgXCJhbmltYXRlXCIsIFwiYW5pbWF0ZUNvbG9yXCIsIFwiYW5pbWF0ZU1vdGlvblwiLCBcImFuaW1hdGVUcmFuc2Zvcm1cIiwgXCJhbmltYXRpb25cIiwgXCJhdWRpb1wiLFxuICAgICAgICBcImNpcmNsZVwiLCBcImNsaXBQYXRoXCIsIFwiY29sb3ItcHJvZmlsZVwiLCBcImN1cnNvclwiLFxuICAgICAgICBcImRlZnNcIiwgXCJkZXNjXCIsIFwiZGlzY2FyZFwiLFxuICAgICAgICBcImVsbGlwc2VcIixcbiAgICAgICAgXCJmZUJsZW5kXCIsIFwiZmVDb2xvck1hdHJpeFwiLCBcImZlQ29tcG9uZW50VHJhbnNmZXJcIiwgXCJmZUNvbXBvc2l0ZVwiLCBcImZlQ29udm9sdmVNYXRyaXhcIiwgXCJmZURpZmZ1c2VMaWdodGluZ1wiLCBcImZlRGlzcGxhY2VtZW50TWFwXCIsIFwiZmVEaXN0YW50TGlnaHRcIiwgXCJmZURyb3BTaGFkb3dcIiwgXCJmZUZsb29kXCIsIFwiZmVGdW5jQVwiLCBcImZlRnVuY0JcIiwgXCJmZUZ1bmNHXCIsIFwiZmVGdW5jUlwiLCBcImZlR2F1c3NpYW5CbHVyXCIsIFwiZmVJbWFnZVwiLCBcImZlTWVyZ2VcIiwgXCJmZU1lcmdlTm9kZVwiLCBcImZlTW9ycGhvbG9neVwiLCBcImZlT2Zmc2V0XCIsIFwiZmVQb2ludExpZ2h0XCIsIFwiZmVTcGVjdWxhckxpZ2h0aW5nXCIsIFwiZmVTcG90TGlnaHRcIiwgXCJmZVRpbGVcIiwgXCJmZVR1cmJ1bGVuY2VcIiwgXCJmaWx0ZXJcIiwgXCJmb250XCIsIFwiZm9udC1mYWNlXCIsIFwiZm9udC1mYWNlLWZvcm1hdFwiLCBcImZvbnQtZmFjZS1uYW1lXCIsIFwiZm9udC1mYWNlLXVyaVwiLCBcImZvcmVpZ25PYmplY3RcIixcbiAgICAgICAgXCJnXCIsIFwiZ2x5cGhcIiwgXCJnbHlwaFJlZlwiLFxuICAgICAgICBcImhhbmRsZXJcIiwgXCJoYXRjaFwiLCBcImhhdGNocGF0aFwiLCBcImhrZXJuXCIsXG4gICAgICAgIFwiaW1hZ2VcIiwgXCJsaW5lXCIsIFwibGluZWFyR3JhZGllbnRcIixcbiAgICAgICAgXCJsaXN0ZW5lclwiLFxuICAgICAgICBcIm1hcmtlclwiLCBcIm1hc2tcIiwgXCJtZXNoXCIsIFwibWVzaGdyYWRpZW50XCIsIFwibWVzaHBhdGNoXCIsIFwibWVzaHJvd1wiLCBcIm1ldGFkYXRhXCIsIFwibWlzc2luZy1nbHlwaFwiLCBcIm1wYXRoXCIsXG4gICAgICAgIFwicGF0aFwiLCBcInBhdHRlcm5cIiwgXCJwb2x5Z29uXCIsIFwicG9seWxpbmVcIiwgXCJwcmVmZXRjaFwiLFxuICAgICAgICBcInJhZGlhbEdyYWRpZW50XCIsIFwicmVjdFwiLFxuICAgICAgICBcInNjcmlwdFwiLCBcInNldFwiLCBcInNvbGlkY29sb3JcIiwgXCJzdG9wXCIsIFwic3R5bGVcIiwgXCJzdmdcIiwgXCJzd2l0Y2hcIiwgXCJzeW1ib2xcIixcbiAgICAgICAgXCJ0YnJlYWtcIiwgXCJ0ZXh0XCIsIFwidGV4dEFyZWFcIiwgXCJ0ZXh0UGF0aFwiLCBcInRpdGxlXCIsIFwidHJlZlwiLCBcInRzcGFuXCIsXG4gICAgICAgIFwidW5rbm93blwiLCBcInVzZVwiLFxuICAgICAgICBcInZpZGVvXCIsIFwidmlld1wiLCBcInZrZXJuXCJcbiAgICAgIF0sXG4gICAgICBzdmdBdHRyaWJ1dGVOYW1lcyA9IFtcbiAgICAgICAgXCJhY2NlbnQtaGVpZ2h0XCIsIFwiYWNjdW11bGF0ZVwiLCBcImFkZGl0aXZlXCIsIFwiYWxpZ25tZW50LWJhc2VsaW5lXCIsIFwiYWxwaGFiZXRpY1wiLCBcImFtcGxpdHVkZVwiLCBcImFyYWJpYy1mb3JtXCIsIFwiYXNjZW50XCIsIFwiYXR0cmlidXRlTmFtZVwiLCBcImF0dHJpYnV0ZVR5cGVcIiwgXCJhemltdXRoXCIsXG4gICAgICAgIFwiYmFuZHdpZHRoXCIsIFwiYmFzZUZyZXF1ZW5jeVwiLCBcImJhc2VQcm9maWxlXCIsIFwiYmFzZWxpbmUtc2hpZnRcIiwgXCJiYm94XCIsIFwiYmVnaW5cIiwgXCJiaWFzXCIsIFwiYnlcIixcbiAgICAgICAgXCJjYWxjTW9kZVwiLCBcImNhcC1oZWlnaHRcIiwgXCJjbGlwXCIsIFwiY2xhc3NOYW1lXCIsIFwiY2xpcC1wYXRoXCIsIFwiY2xpcC1ydWxlXCIsIFwiY2xpcFBhdGhVbml0c1wiLCBcImNvbG9yXCIsIFwiY29sb3ItaW50ZXJwb2xhdGlvblwiLCBcImNvbG9yLWludGVycG9sYXRpb24tZmlsdGVyc1wiLCBcImNvbG9yLXByb2ZpbGVcIiwgXCJjb2xvci1yZW5kZXJpbmdcIiwgXCJjb250ZW50U2NyaXB0VHlwZVwiLCBcImNvbnRlbnRTdHlsZVR5cGVcIiwgXCJjcm9zc29yaWdpblwiLCBcImN1cnNvclwiLCBcImN4XCIsIFwiY3lcIixcbiAgICAgICAgXCJkXCIsIFwiZGVmYXVsdEFjdGlvblwiLCBcImRlc2NlbnRcIiwgXCJkaWZmdXNlQ29uc3RhbnRcIiwgXCJkaXJlY3Rpb25cIiwgXCJkaXNwbGF5XCIsIFwiZGl2aXNvclwiLCBcImRvbWluYW50LWJhc2VsaW5lXCIsIFwiZG93bmxvYWRcIiwgXCJkdXJcIiwgXCJkeFwiLCBcImR5XCIsXG4gICAgICAgIFwiZWRnZU1vZGVcIiwgXCJlZGl0YWJsZVwiLCBcImVsZXZhdGlvblwiLCBcImVuYWJsZS1iYWNrZ3JvdW5kXCIsIFwiZW5kXCIsIFwiZXZlbnRcIiwgXCJleHBvbmVudFwiLCBcImV4dGVybmFsUmVzb3VyY2VzUmVxdWlyZWRcIixcbiAgICAgICAgXCJmaWxsXCIsIFwiZmlsbC1vcGFjaXR5XCIsIFwiZmlsbC1ydWxlXCIsIFwiZmlsdGVyXCIsIFwiZmlsdGVyUmVzXCIsIFwiZmlsdGVyVW5pdHNcIiwgXCJmbG9vZC1jb2xvclwiLCBcImZsb29kLW9wYWNpdHlcIiwgXCJmb2N1c0hpZ2hsaWdodFwiLCBcImZvY3VzYWJsZVwiLCBcImZvbnQtZmFtaWx5XCIsIFwiZm9udC1zaXplXCIsIFwiZm9udC1zaXplLWFkanVzdFwiLCBcImZvbnQtc3RyZXRjaFwiLCBcImZvbnQtc3R5bGVcIiwgXCJmb250LXZhcmlhbnRcIiwgXCJmb250LXdlaWdodFwiLCBcImZvcm1hdFwiLCBcImZyXCIsIFwiZnJvbVwiLCBcImZ4XCIsIFwiZnlcIixcbiAgICAgICAgXCJnMVwiLCBcImcyXCIsIFwiZ2x5cGgtbmFtZVwiLCBcImdseXBoLW9yaWVudGF0aW9uLWhvcml6b250YWxcIiwgXCJnbHlwaC1vcmllbnRhdGlvbi12ZXJ0aWNhbFwiLCBcImdseXBoUmVmXCIsIFwiZ3JhZGllbnRUcmFuc2Zvcm1cIiwgXCJncmFkaWVudFVuaXRzXCIsXG4gICAgICAgIFwiaGFuZGxlclwiLCBcImhhbmdpbmdcIiwgXCJoYXRjaENvbnRlbnRVbml0c1wiLCBcImhhdGNoVW5pdHNcIiwgXCJoZWlnaHRcIiwgXCJob3Jpei1hZHYteFwiLCBcImhvcml6LW9yaWdpbi14XCIsIFwiaG9yaXotb3JpZ2luLXlcIiwgXCJocmVmXCIsIFwiaHJlZmxhbmdcIixcbiAgICAgICAgXCJpZFwiLCBcImlkZW9ncmFwaGljXCIsIFwiaW1hZ2UtcmVuZGVyaW5nXCIsIFwiaW5cIiwgXCJpbjJcIiwgXCJpbml0aWFsVmlzaWJpbGl0eVwiLCBcImludGVyY2VwdFwiLFxuICAgICAgICBcImtcIiwgXCJrMVwiLCBcImsyXCIsIFwiazNcIiwgXCJrNFwiLCBcImtlcm5lbE1hdHJpeFwiLCBcImtlcm5lbFVuaXRMZW5ndGhcIiwgXCJrZXJuaW5nXCIsIFwia2V5UG9pbnRzXCIsIFwia2V5U3BsaW5lc1wiLCBcImtleVRpbWVzXCIsXG4gICAgICAgIFwibGVuZ3RoQWRqdXN0XCIsIFwibGV0dGVyLXNwYWNpbmdcIiwgXCJsaWdodGluZy1jb2xvclwiLCBcImxpbWl0aW5nQ29uZUFuZ2xlXCIsIFwibG9jYWxcIixcbiAgICAgICAgXCJtYXJrZXItZW5kXCIsIFwibWFya2VyLW1pZFwiLCBcIm1hcmtlci1zdGFydFwiLCBcIm1hcmtlckhlaWdodFwiLCBcIm1hcmtlclVuaXRzXCIsIFwibWFya2VyV2lkdGhcIiwgXCJtYXNrXCIsIFwibWFza0NvbnRlbnRVbml0c1wiLCBcIm1hc2tVbml0c1wiLCBcIm1hdGhlbWF0aWNhbFwiLCBcIm1heFwiLCBcIm1lZGlhXCIsIFwibWVkaWFDaGFyYWN0ZXJFbmNvZGluZ1wiLCBcIm1lZGlhQ29udGVudEVuY29kaW5nc1wiLCBcIm1lZGlhU2l6ZVwiLCBcIm1lZGlhVGltZVwiLCBcIm1ldGhvZFwiLCBcIm1pblwiLCBcIm1vZGVcIixcbiAgICAgICAgXCJuYW1lXCIsIFwibmF2LWRvd25cIiwgXCJuYXYtZG93bi1sZWZ0XCIsIFwibmF2LWRvd24tcmlnaHRcIiwgXCJuYXYtbGVmdFwiLCBcIm5hdi1uZXh0XCIsIFwibmF2LXByZXZcIiwgXCJuYXYtcmlnaHRcIiwgXCJuYXYtdXBcIiwgXCJuYXYtdXAtbGVmdFwiLCBcIm5hdi11cC1yaWdodFwiLCBcIm51bU9jdGF2ZXNcIixcbiAgICAgICAgXCJvYnNlcnZlclwiLCBcIm9mZnNldFwiLCBcIm9wYWNpdHlcIiwgXCJvcGVyYXRvclwiLCBcIm9yZGVyXCIsIFwib3JpZW50XCIsIFwib3JpZW50YXRpb25cIiwgXCJvcmlnaW5cIiwgXCJvdmVyZmxvd1wiLCBcIm92ZXJsYXlcIiwgXCJvdmVybGluZS1wb3NpdGlvblwiLCBcIm92ZXJsaW5lLXRoaWNrbmVzc1wiLFxuICAgICAgICBcInBhbm9zZS0xXCIsIFwicGF0aFwiLCBcInBhdGhMZW5ndGhcIiwgXCJwYXR0ZXJuQ29udGVudFVuaXRzXCIsIFwicGF0dGVyblRyYW5zZm9ybVwiLCBcInBhdHRlcm5Vbml0c1wiLCBcInBoYXNlXCIsIFwicGl0Y2hcIiwgXCJwbGF5YmFja09yZGVyXCIsIFwicGxheWJhY2tvcmRlclwiLCBcInBvaW50ZXItZXZlbnRzXCIsIFwicG9pbnRzXCIsIFwicG9pbnRzQXRYXCIsIFwicG9pbnRzQXRZXCIsIFwicG9pbnRzQXRaXCIsIFwicHJlc2VydmVBbHBoYVwiLCBcInByZXNlcnZlQXNwZWN0UmF0aW9cIiwgXCJwcmltaXRpdmVVbml0c1wiLCBcInByb3BhZ2F0ZVwiLFxuICAgICAgICBcInJcIiwgXCJyYWRpdXNcIiwgXCJyZWZYXCIsIFwicmVmWVwiLCBcInJlbmRlcmluZy1pbnRlbnRcIiwgXCJyZXBlYXRDb3VudFwiLCBcInJlcGVhdER1clwiLCBcInJlcXVpcmVkRXh0ZW5zaW9uc1wiLCBcInJlcXVpcmVkRmVhdHVyZXNcIiwgXCJyZXF1aXJlZEZvbnRzXCIsIFwicmVxdWlyZWRGb3JtYXRzXCIsIFwicmVzdGFydFwiLCBcInJlc3VsdFwiLCBcInJvdGF0ZVwiLCBcInJ4XCIsIFwicnlcIixcbiAgICAgICAgXCJzY2FsZVwiLCBcInNlZWRcIiwgXCJzaGFwZS1yZW5kZXJpbmdcIiwgXCJzaWRlXCIsIFwic2xvcGVcIiwgXCJzbmFwc2hvdFRpbWVcIiwgXCJzcGFjaW5nXCIsIFwic3BlY3VsYXJDb25zdGFudFwiLCBcInNwZWN1bGFyRXhwb25lbnRcIiwgXCJzcHJlYWRNZXRob2RcIiwgXCJzcmNcIiwgXCJzdGFydE9mZnNldFwiLCBcInN0ZERldmlhdGlvblwiLCBcInN0ZW1oXCIsIFwic3RlbXZcIiwgXCJzdGl0Y2hUaWxlc1wiLCBcInN0b3AtY29sb3JcIiwgXCJzdG9wLW9wYWNpdHlcIiwgXCJzdHJpa2V0aHJvdWdoLXBvc2l0aW9uXCIsIFwic3RyaWtldGhyb3VnaC10aGlja25lc3NcIiwgXCJzdHJpbmdcIiwgXCJzdHJva2VcIiwgXCJzdHJva2UtZGFzaGFycmF5XCIsIFwic3Ryb2tlLWRhc2hvZmZzZXRcIiwgXCJzdHJva2UtbGluZWNhcFwiLCBcInN0cm9rZS1saW5lam9pblwiLCBcInN0cm9rZS1taXRlcmxpbWl0XCIsIFwic3Ryb2tlLW9wYWNpdHlcIiwgXCJzdHJva2Utd2lkdGhcIiwgXCJzdHlsZVwiLCBcInN1cmZhY2VTY2FsZVwiLCBcInN5bmNCZWhhdmlvclwiLCBcInN5bmNCZWhhdmlvckRlZmF1bHRcIiwgXCJzeW5jTWFzdGVyXCIsIFwic3luY1RvbGVyYW5jZVwiLCBcInN5bmNUb2xlcmFuY2VEZWZhdWx0XCIsIFwic3lzdGVtTGFuZ3VhZ2VcIixcbiAgICAgICAgXCJ0YWJsZVZhbHVlc1wiLCBcInRhcmdldFwiLCBcInRhcmdldFhcIiwgXCJ0YXJnZXRZXCIsIFwidGV4dC1hbmNob3JcIiwgXCJ0ZXh0LWRlY29yYXRpb25cIiwgXCJ0ZXh0LXJlbmRlcmluZ1wiLCBcInRleHRMZW5ndGhcIiwgXCJ0aW1lbGluZUJlZ2luXCIsIFwidGltZWxpbmViZWdpblwiLCBcInRpdGxlXCIsIFwidG9cIiwgXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2Zvcm1CZWhhdmlvclwiLCBcInR5cGVcIixcbiAgICAgICAgXCJ1MVwiLCBcInUyXCIsIFwidW5kZXJsaW5lLXBvc2l0aW9uXCIsIFwidW5kZXJsaW5lLXRoaWNrbmVzc1wiLCBcInVuaWNvZGVcIiwgXCJ1bmljb2RlLWJpZGlcIiwgXCJ1bmljb2RlLXJhbmdlXCIsIFwidW5pdHMtcGVyLWVtXCIsXG4gICAgICAgIFwidi1hbHBoYWJldGljXCIsIFwidi1oYW5naW5nXCIsIFwidi1pZGVvZ3JhcGhpY1wiLCBcInYtbWF0aGVtYXRpY2FsXCIsIFwidmFsdWVzXCIsIFwidmVyc2lvblwiLCBcInZlcnQtYWR2LXlcIiwgXCJ2ZXJ0LW9yaWdpbi14XCIsIFwidmVydC1vcmlnaW4teVwiLCBcInZpZXdCb3hcIiwgXCJ2aWV3VGFyZ2V0XCIsIFwidmlzaWJpbGl0eVwiLFxuICAgICAgICBcIndpZHRoXCIsIFwid2lkdGhzXCIsIFwid29yZC1zcGFjaW5nXCIsIFwid3JpdGluZy1tb2RlXCIsXG4gICAgICAgIFwieFwiLCBcIngtaGVpZ2h0XCIsIFwieDFcIiwgXCJ4MlwiLCBcInhDaGFubmVsU2VsZWN0b3JcIixcbiAgICAgICAgXCJ5XCIsIFwieTFcIiwgXCJ5MlwiLCBcInlDaGFubmVsU2VsZWN0b3JcIixcbiAgICAgICAgXCJ6XCIsIFwiem9vbUFuZFBhblwiXG4gICAgICBdLFxuICAgICAgaHRtbEF0dHJpYnV0ZU5hbWVzID0gW1xuICAgICAgICBcImFjY2VwdFwiLCBcImFjY2VwdENoYXJzZXRcIiwgXCJhY2Nlc3NLZXlcIiwgXCJhY3Rpb25cIiwgXCJhbGxvd1wiLCBcImFsbG93RnVsbFNjcmVlblwiLCBcImFsbG93VHJhbnNwYXJlbmN5XCIsIFwiYWx0XCIsIFwiYXN5bmNcIiwgXCJhdXRvQ29tcGxldGVcIiwgXCJhdXRvRm9jdXNcIiwgXCJhdXRvUGxheVwiLFxuICAgICAgICBcImNhcHR1cmVcIiwgXCJjZWxsUGFkZGluZ1wiLCBcImNlbGxTcGFjaW5nXCIsIFwiY2hhbGxlbmdlXCIsIFwiY2hhclNldFwiLCBcImNoZWNrZWRcIiwgXCJjaXRlXCIsIFwiY2xhc3NJRFwiLCBcImNsYXNzTmFtZVwiLCBcImNvbFNwYW5cIiwgXCJjb2xzXCIsIFwiY29udGVudFwiLCBcImNvbnRlbnRFZGl0YWJsZVwiLCBcImNvbnRleHRNZW51XCIsIFwiY29udHJvbHNcIiwgXCJjb29yZHNcIiwgXCJjcm9zc09yaWdpblwiLFxuICAgICAgICBcImRhdGFcIiwgXCJkYXRlVGltZVwiLCBcImRlZmF1bHRcIiwgXCJkZWZlclwiLCBcImRpclwiLCBcImRpc2FibGVkXCIsIFwiZG93bmxvYWRcIiwgXCJkcmFnZ2FibGVcIixcbiAgICAgICAgXCJlbmNUeXBlXCIsXG4gICAgICAgIFwiZm9ybVwiLCBcImZvcm1BY3Rpb25cIiwgXCJmb3JtRW5jVHlwZVwiLCBcImZvcm1NZXRob2RcIiwgXCJmb3JtTm9WYWxpZGF0ZVwiLCBcImZvcm1UYXJnZXRcIiwgXCJmcmFtZUJvcmRlclwiLFxuICAgICAgICBcImhlYWRlcnNcIiwgXCJoZWlnaHRcIiwgXCJoaWRkZW5cIiwgXCJoaWdoXCIsIFwiaHJlZlwiLCBcImhyZWZMYW5nXCIsIFwiaHRtbEZvclwiLCBcImh0dHBFcXVpdlwiLFxuICAgICAgICBcImljb25cIiwgXCJpZFwiLCBcImlucHV0TW9kZVwiLCBcImludGVncml0eVwiLCBcImlzXCIsXG4gICAgICAgIFwia2V5UGFyYW1zXCIsIFwia2V5VHlwZVwiLCBcImtpbmRcIixcbiAgICAgICAgXCJsYWJlbFwiLCBcImxhbmdcIiwgXCJsaXN0XCIsIFwibG9vcFwiLCBcImxvd1wiLFxuICAgICAgICBcIm1hbmlmZXN0XCIsIFwibWFyZ2luSGVpZ2h0XCIsIFwibWFyZ2luV2lkdGhcIiwgXCJtYXhcIiwgXCJtYXhMZW5ndGhcIiwgXCJtZWRpYVwiLCBcIm1lZGlhR3JvdXBcIiwgXCJtZXRob2RcIiwgXCJtaW5cIiwgXCJtaW5MZW5ndGhcIiwgXCJtdWx0aXBsZVwiLCBcIm11dGVkXCIsXG4gICAgICAgIFwibmFtZVwiLCBcIm5vVmFsaWRhdGVcIiwgXCJub25jZVwiLFxuICAgICAgICBcIm9wZW5cIiwgXCJvcHRpbXVtXCIsXG4gICAgICAgIFwicGF0dGVyblwiLCBcInBsYWNlaG9sZGVyXCIsIFwicG9zdGVyXCIsIFwicHJlbG9hZFwiLCBcInByb2ZpbGVcIixcbiAgICAgICAgXCJyYWRpb0dyb3VwXCIsIFwicmVhZE9ubHlcIiwgXCJyZWxcIiwgXCJyZXF1aXJlZFwiLCBcInJldmVyc2VkXCIsIFwicm9sZVwiLCBcInJvd1NwYW5cIiwgXCJyb3dzXCIsXG4gICAgICAgIFwic2FuZGJveFwiLCBcInNjb3BlXCIsIFwic2NvcGVkXCIsIFwic2Nyb2xsaW5nXCIsIFwic2VhbWxlc3NcIiwgXCJzZWxlY3RlZFwiLCBcInNoYXBlXCIsIFwic2l6ZVwiLCBcInNpemVzXCIsIFwic3BhblwiLCBcInNwZWxsQ2hlY2tcIiwgXCJzcmNcIiwgXCJzcmNEb2NcIiwgXCJzcmNMYW5nXCIsIFwic3JjU2V0XCIsIFwic3RhcnRcIiwgXCJzdGVwXCIsIFwic3R5bGVcIiwgXCJzdW1tYXJ5XCIsXG4gICAgICAgIFwidGFiSW5kZXhcIiwgXCJ0YXJnZXRcIiwgXCJ0aXRsZVwiLCBcInR5cGVcIixcbiAgICAgICAgXCJ1c2VNYXBcIixcbiAgICAgICAgXCJ2YWx1ZVwiLFxuICAgICAgICBcIndpZHRoXCIsXG4gICAgICAgIFwid21vZGVcIixcbiAgICAgICAgXCJ3cmFwXCJcbiAgICAgIF07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3RFbGVtZW50KGVsZW1lbnQsIGRvbUVsZW1lbnQpIHtcbiAgZWxlbWVudC5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcblxuICBkb21FbGVtZW50Ll9fZWxlbWVudF9fID0gZWxlbWVudDsgLy8vXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXN0cm95RWxlbWVudChlbGVtZW50KSB7XG4gIGNvbnN0IGRlc2NlbmRhbnRFbGVtZW50cyA9IGVsZW1lbnQuZ2V0RGVzY2VuZGFudEVsZW1lbnRzKCksXG4gICAgICAgIGVsZW1lbnRzID0gW1xuICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgLi4uZGVzY2VuZGFudEVsZW1lbnRzXG4gICAgICAgIF07XG5cbiAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBlbGVtZW50LmdldERPTUVsZW1lbnQoKTtcblxuICAgIGRlbGV0ZSBlbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICBkZWxldGUgZG9tRWxlbWVudC5fX2VsZW1lbnRfXztcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtb3VudEVsZW1lbnQoZWxlbWVudCkge1xuICBjb25zdCBkZXNjZW5kYW50RWxlbWVudHMgPSBlbGVtZW50LmdldERlc2NlbmRhbnRFbGVtZW50cygpLFxuICAgICAgICBlbGVtZW50cyA9IFtcbiAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgIC4uLmRlc2NlbmRhbnRFbGVtZW50c1xuICAgICAgICBdO1xuXG4gIGVsZW1lbnRzLnJldmVyc2UoKTsgLy8vXG5cbiAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQuZGlkTW91bnQgJiYgZWxlbWVudC5kaWRNb3VudCgpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVubW91bnRFbGVtZW50KGVsZW1lbnQpIHtcbiAgY29uc3QgZGVzY2VuZGFudEVsZW1lbnRzID0gZWxlbWVudC5nZXREZXNjZW5kYW50RWxlbWVudHMoKSxcbiAgICAgICAgZWxlbWVudHMgPSBbXG4gICAgICAgICAgZWxlbWVudCxcbiAgICAgICAgICAuLi5kZXNjZW5kYW50RWxlbWVudHNcbiAgICAgICAgXTtcblxuICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC53aWxsVW5tb3VudCAmJiBlbGVtZW50LndpbGxVbm1vdW50KCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbnN0cnVjdEVsZW1lbnQsXG4gIGRlc3Ryb3lFbGVtZW50LFxuICBtb3VudEVsZW1lbnQsXG4gIHVubW91bnRFbGVtZW50XG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgV0lMRENBUkQgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhkb21FbGVtZW50cykge1xuICBjb25zdCBkb21FbGVtZW50c1dpdGhFbGVtZW50cyA9IGZpbHRlckRPTU5vZGVzKGRvbUVsZW1lbnRzLCAoZG9tRWxlbWVudCkgPT4ge1xuICAgICAgICAgIGlmICgoZG9tRWxlbWVudC5fX2VsZW1lbnRfXykpIHsgLy8vXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBlbGVtZW50cyA9IGRvbUVsZW1lbnRzV2l0aEVsZW1lbnRzLm1hcCgoZG9tRWxlbWVudCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb21FbGVtZW50Ll9fZWxlbWVudF9fOyAvLy9cblxuICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICB9KTtcblxuICByZXR1cm4gZWxlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlKGRvbU5vZGUsIGhlaWdodCwgYXNjZW5kYW50RE9NTm9kZXMgPSBbXSkge1xuICBpZiAoaGVpZ2h0ID4gMCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBkb21Ob2RlLnBhcmVudEVsZW1lbnQ7ICAvLy9cblxuICAgIGlmIChwYXJlbnRET01Ob2RlICE9PSBudWxsKSB7XG4gICAgICBhc2NlbmRhbnRET01Ob2Rlcy5wdXNoKHBhcmVudERPTU5vZGUpO1xuXG4gICAgICBoZWlnaHQtLTtcblxuICAgICAgYXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZShwYXJlbnRET01Ob2RlLCBoZWlnaHQsIGFzY2VuZGFudERPTU5vZGVzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXNjZW5kYW50RE9NTm9kZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZShkb21Ob2RlLCBkZXB0aCwgZGVzY2VuZGFudERPTU5vZGVzID0gW10pIHtcbiAgaWYgKGRlcHRoID4gMCkge1xuICAgIGNvbnN0IGNoaWxkRE9NTm9kZXMgPSBkb21Ob2RlLmNoaWxkTm9kZXM7ICAvLy9cblxuICAgIHB1c2goZGVzY2VuZGFudERPTU5vZGVzLCBjaGlsZERPTU5vZGVzKTtcblxuICAgIGRlcHRoLS07XG5cbiAgICBjaGlsZERPTU5vZGVzLmZvckVhY2goKGNoaWxkRE9NTm9kZSkgPT4ge1xuICAgICAgZGVzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUoY2hpbGRET01Ob2RlLCBkZXB0aCwgZGVzY2VuZGFudERPTU5vZGVzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBkZXNjZW5kYW50RE9NTm9kZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJET01Ob2Rlc0J5U2VsZWN0b3IoZG9tTm9kZXMsIHNlbGVjdG9yKSB7XG4gIGNvbnN0IGZpbHRlcmVkRE9NTm9kZXMgPSBmaWx0ZXJET01Ob2Rlcyhkb21Ob2RlcywgKGRvbU5vZGUpID0+IHtcbiAgICBpZiAoZG9tTm9kZU1hdGNoZXNTZWxlY3Rvcihkb21Ob2RlLCBzZWxlY3RvcikpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGZpbHRlcmVkRE9NTm9kZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkb21Ob2RlTWF0Y2hlc1NlbGVjdG9yKGRvbU5vZGUsIHNlbGVjdG9yKSB7XG4gIGNvbnN0IGRvbU5vZGVUeXBlID0gZG9tTm9kZS5ub2RlVHlwZTsgLy8vXG5cbiAgc3dpdGNoIChkb21Ob2RlVHlwZSkge1xuICAgIGNhc2UgTm9kZS5FTEVNRU5UX05PREU6IHtcbiAgICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb21Ob2RlOyAvLy9cblxuICAgICAgcmV0dXJuIGRvbUVsZW1lbnQubWF0Y2hlcyhzZWxlY3Rvcik7XG4gICAgfVxuXG4gICAgY2FzZSBOb2RlLlRFWFRfTk9ERToge1xuICAgICAgaWYgKHNlbGVjdG9yID09PSBXSUxEQ0FSRCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJET01Ob2Rlcyhkb21Ob2RlcywgdGVzdCkge1xuICBjb25zdCBmaWx0ZXJlZERPTU5vZGVzID0gW10sXG4gICAgICAgIGRvbU5vZGVzTGVuZ3RoID0gZG9tTm9kZXMubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkb21Ob2Rlc0xlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGRvbU5vZGUgPSBkb21Ob2Rlc1tpbmRleF0sXG4gICAgICAgICAgcmVzdWx0ID0gdGVzdChkb21Ob2RlKTtcblxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIGZpbHRlcmVkRE9NTm9kZXMucHVzaChkb21Ob2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmlsdGVyZWRET01Ob2Rlcztcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBXSUxEQ0FSRCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGRvbU5vZGVNYXRjaGVzU2VsZWN0b3IsIGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzLCBmaWx0ZXJET01Ob2Rlc0J5U2VsZWN0b3IsIGFzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUsIGRlc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9kb21cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBhcmVudEVsZW1lbnQoc2VsZWN0b3IgPSBXSUxEQ0FSRCkge1xuICBsZXQgcGFyZW50RWxlbWVudCA9IG51bGw7XG5cbiAgY29uc3QgcGFyZW50RE9NRWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudC5wYXJlbnRFbGVtZW50OyAvLy9cblxuICBpZiAocGFyZW50RE9NRWxlbWVudCAhPT0gbnVsbCkge1xuICAgIGlmIChwYXJlbnRET01FbGVtZW50Lm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICBjb25zdCBwYXJlbnRET01FbGVtZW50cyA9IFtcbiAgICAgICAgICAgICAgcGFyZW50RE9NRWxlbWVudFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHBhcmVudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMocGFyZW50RE9NRWxlbWVudHMpLFxuICAgICAgICAgICAgZmlyc3RQYXJlbnRFbGVtZW50ID0gZmlyc3QocGFyZW50RWxlbWVudHMpO1xuXG4gICAgICBwYXJlbnRFbGVtZW50ID0gZmlyc3RQYXJlbnRFbGVtZW50IHx8IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDaGlsZEVsZW1lbnRzKHNlbGVjdG9yID0gV0lMRENBUkQpIHtcbiAgY29uc3QgY2hpbGRET01Ob2RlcyA9IHRoaXMuZG9tRWxlbWVudC5jaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgY2hpbGRET01FbGVtZW50cyA9IGZpbHRlckRPTU5vZGVzQnlTZWxlY3RvcihjaGlsZERPTU5vZGVzLCBzZWxlY3RvciksXG4gICAgICAgIGNoaWxkRWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhjaGlsZERPTUVsZW1lbnRzKTtcblxuICByZXR1cm4gY2hpbGRFbGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFzY2VuZGFudEVsZW1lbnRzKHNlbGVjdG9yID0gV0lMRENBUkQsIG1heGltdW1IZWlnaHQgPSBJbmZpbml0eSkge1xuICBjb25zdCBoZWlnaHQgPSBtYXhpbXVtSGVpZ2h0LCAvLy9cbiAgICAgICAgZG9tTm9kZSA9IHRoaXMuZG9tRWxlbWVudCwgIC8vL1xuICAgICAgICBhc2NlbmRhbnRET01Ob2RlcyA9IGFzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUoZG9tTm9kZSwgaGVpZ2h0KSxcbiAgICAgICAgYXNjZW5kYW50RE9NRWxlbWVudHMgPSBmaWx0ZXJET01Ob2Rlc0J5U2VsZWN0b3IoYXNjZW5kYW50RE9NTm9kZXMsIHNlbGVjdG9yKSxcbiAgICAgICAgYXNjZW5kYW50RWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhhc2NlbmRhbnRET01FbGVtZW50cyk7XG5cbiAgcmV0dXJuIGFzY2VuZGFudEVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVzY2VuZGFudEVsZW1lbnRzKHNlbGVjdG9yID0gV0lMRENBUkQsIG1heGltdW1EZXB0aCA9IEluZmluaXR5KSB7XG4gIGNvbnN0IGRlcHRoID0gbWF4aW11bURlcHRoLCAvLy9cbiAgICAgICAgZG9tTm9kZSA9IHRoaXMuZG9tRWxlbWVudCwgIC8vL1xuICAgICAgICBkZXNjZW5kYW50RE9NTm9kZXMgPSBkZXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZShkb21Ob2RlLCBkZXB0aCksXG4gICAgICAgIGRlc2NlbmRhbnRET01FbGVtZW50cyA9IGZpbHRlckRPTU5vZGVzQnlTZWxlY3RvcihkZXNjZW5kYW50RE9NTm9kZXMsIHNlbGVjdG9yKSxcbiAgICAgICAgZGVzY2VuZGFudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoZGVzY2VuZGFudERPTUVsZW1lbnRzKTtcblxuICByZXR1cm4gZGVzY2VuZGFudEVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmV4dFNpYmxpbmdFbGVtZW50KHNlbGVjdG9yID0gV0lMRENBUkQpIHtcbiAgbGV0IG5leHRTaWJsaW5nRWxlbWVudCA9IG51bGw7XG5cbiAgY29uc3QgbmV4dFNpYmxpbmdET01Ob2RlID0gdGhpcy5kb21FbGVtZW50Lm5leHRTaWJsaW5nOyAvLy9cblxuICBpZiAoKG5leHRTaWJsaW5nRE9NTm9kZSAhPT0gbnVsbCkgJiYgZG9tTm9kZU1hdGNoZXNTZWxlY3RvcihuZXh0U2libGluZ0RPTU5vZGUsIHNlbGVjdG9yKSkge1xuICAgIG5leHRTaWJsaW5nRWxlbWVudCA9IG5leHRTaWJsaW5nRE9NTm9kZS5fX2VsZW1lbnRfXyB8fCBudWxsO1xuICB9XG5cbiAgcmV0dXJuIG5leHRTaWJsaW5nRWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByZXZpb3VzU2libGluZ0VsZW1lbnQoc2VsZWN0b3IgPSBXSUxEQ0FSRCkge1xuICBsZXQgcHJldmlvdXNTaWJsaW5nRWxlbWVudCA9IG51bGw7XG5cbiAgY29uc3QgcHJldmlvdXNTaWJsaW5nRE9NTm9kZSA9IHRoaXMuZG9tRWxlbWVudC5wcmV2aW91c1NpYmxpbmc7ICAvLy9cblxuICBpZiAoKHByZXZpb3VzU2libGluZ0RPTU5vZGUgIT09IG51bGwpICYmIGRvbU5vZGVNYXRjaGVzU2VsZWN0b3IocHJldmlvdXNTaWJsaW5nRE9NTm9kZSwgc2VsZWN0b3IpKSB7XG4gICAgcHJldmlvdXNTaWJsaW5nRWxlbWVudCA9IHByZXZpb3VzU2libGluZ0RPTU5vZGUuX19lbGVtZW50X18gfHwgbnVsbDtcbiAgfVxuXG4gIHJldHVybiBwcmV2aW91c1NpYmxpbmdFbGVtZW50O1xufVxuXG5jb25zdCBlbGVtZW50TWl4aW5zID0ge1xuICBnZXRQYXJlbnRFbGVtZW50LFxuICBnZXRDaGlsZEVsZW1lbnRzLFxuICBnZXRBc2NlbmRhbnRFbGVtZW50cyxcbiAgZ2V0RGVzY2VuZGFudEVsZW1lbnRzLFxuICBnZXROZXh0U2libGluZ0VsZW1lbnQsXG4gIGdldFByZXZpb3VzU2libGluZ0VsZW1lbnRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVsZW1lbnRNaXhpbnM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBPZmZzZXQgZnJvbSBcIi4vb2Zmc2V0XCI7XG5pbXBvcnQgQm91bmRzIGZyb20gXCIuL2JvdW5kc1wiO1xuXG5pbXBvcnQgeyBjb25zdHJ1Y3RFbGVtZW50LCBkZXN0cm95RWxlbWVudCB9IGZyb20gXCIuL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBnZXRQYXJlbnRFbGVtZW50LCBnZXRBc2NlbmRhbnRFbGVtZW50cywgZ2V0TmV4dFNpYmxpbmdFbGVtZW50LCBnZXRQcmV2aW91c1NpYmxpbmdFbGVtZW50IH0gZnJvbSBcIi4vbWl4aW5zL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih0ZXh0KSB7XG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMsIC8vL1xuICAgICAgICAgIGRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0KTsgLy8vXG5cbiAgICBjb25zdHJ1Y3RFbGVtZW50KGVsZW1lbnQsIGRvbUVsZW1lbnQpO1xuICB9XG5cbiAgZ2V0RE9NRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5kb21FbGVtZW50O1xuICB9XG5cbiAgZ2V0T2Zmc2V0KCkge1xuICAgIGNvbnN0IG9mZnNldCA9IE9mZnNldC5mcm9tRE9NRWxlbWVudCh0aGlzLmRvbUVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIG9mZnNldDtcbiAgfVxuXG4gIGdldEJvdW5kcygpIHtcbiAgICBjb25zdCBib3VuZHMgPSBCb3VuZHMuZnJvbURPTUVsZW1lbnQodGhpcy5kb21FbGVtZW50KTtcblxuICAgIHJldHVybiBib3VuZHM7XG4gIH1cblxuICBnZXRXaWR0aCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5vZmZzZXRXaWR0aDsgfSAgLy8vXG5cbiAgZ2V0SGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50Lm9mZnNldEhlaWdodDsgfSAgLy8vXG5cbiAgZ2V0VGV4dCgpIHtcbiAgICBjb25zdCBub2RlVmFsdWUgPSB0aGlzLmRvbUVsZW1lbnQubm9kZVZhbHVlLFxuICAgICAgICAgIHRleHQgPSBub2RlVmFsdWU7IC8vL1xuXG4gICAgcmV0dXJuIHRleHQ7XG4gIH1cblxuICBzZXRUZXh0KHRleHQpIHtcbiAgICBjb25zdCBub2RlVmFsdWUgPSB0ZXh0OyAvLy9cblxuICAgIHRoaXMuZG9tRWxlbWVudC5ub2RlVmFsdWUgPSBub2RlVmFsdWU7XG4gIH1cblxuICBwcmVwZW5kVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LnByZXBlbmQodGhpcyk7IH1cblxuICBhcHBlbmRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQuYXBwZW5kKHRoaXMpOyB9XG5cbiAgYWRkVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LmFkZCh0aGlzKTsgfVxuXG4gIHJlbW92ZUZyb20ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LnJlbW92ZSh0aGlzKTsgfVxuXG4gIGluc2VydEJlZm9yZShzaWJsaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50LnBhcmVudE5vZGUsIC8vL1xuICAgICAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudDsgIC8vL1xuXG4gICAgcGFyZW50RE9NTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCk7XG4gIH1cblxuICBpbnNlcnRBZnRlcihzaWJsaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50LnBhcmVudE5vZGUsIC8vL1xuICAgICAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudDsgIC8vL1xuXG4gICAgcGFyZW50RE9NTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudC5uZXh0U2libGluZyk7ICAvLy9cbiAgfVxuXG4gIHJlbW92ZSgpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlKCk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgIGRlc3Ryb3lFbGVtZW50KGVsZW1lbnQpO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oVGV4dEVsZW1lbnQucHJvdG90eXBlLCB7XG4gIGdldFBhcmVudEVsZW1lbnQsXG4gIGdldEFzY2VuZGFudEVsZW1lbnRzLFxuICBnZXROZXh0U2libGluZ0VsZW1lbnQsXG4gIGdldFByZXZpb3VzU2libGluZ0VsZW1lbnRcbn0pO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGV4dEVsZW1lbnQgZnJvbSBcIi4uL3RleHRFbGVtZW50XCI7XG5cbmltcG9ydCB7IFNUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUZhbHNleUVsZW1lbnRzKGVsZW1lbnRzKSB7XG4gIGVsZW1lbnRzID0gZWxlbWVudHMucmVkdWNlKChlbGVtZW50cywgZWxlbWVudCkgPT4ge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50cztcbiAgfSwgW10pO1xuXG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VTdHJpbmdzV2l0aFRleHRFbGVtZW50cyhlbGVtZW50cykge1xuICBlbGVtZW50cyA9IGVsZW1lbnRzLm1hcCgoZWxlbWVudCkgPT4geyAgLy8vXG4gICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSBTVFJJTkcpIHtcbiAgICAgIGNvbnN0IHRleHQgPSBlbGVtZW50LCAgLy8vXG4gICAgICAgICAgICB0ZXh0RWxlbWVudCA9IG5ldyBUZXh0RWxlbWVudCh0ZXh0KTtcblxuICAgICAgZWxlbWVudCA9IHRleHRFbGVtZW50OyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfSk7XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgQ1VUX0VWRU5UX1RZUEUgPSBcImN1dFwiO1xuZXhwb3J0IGNvbnN0IENPUFlfRVZFTlRfVFlQRSA9IFwiY29weVwiO1xuZXhwb3J0IGNvbnN0IEJMVVJfRVZFTlRfVFlQRSA9IFwiYmx1clwiO1xuZXhwb3J0IGNvbnN0IEVSUk9SX0VWRU5UX1RZUEUgPSBcImVycm9yXCI7XG5leHBvcnQgY29uc3QgUEFTVEVfRVZFTlRfVFlQRSA9IFwicGFzdGVcIjtcbmV4cG9ydCBjb25zdCBXSEVFTF9FVkVOVF9UWVBFID0gXCJ3aGVlbFwiO1xuZXhwb3J0IGNvbnN0IElOUFVUX0VWRU5UX1RZUEUgPSBcImlucHV0XCI7XG5leHBvcnQgY29uc3QgRk9DVVNfRVZFTlRfVFlQRSA9IFwiZm9jdXNcIjtcbmV4cG9ydCBjb25zdCBDTElDS19FVkVOVF9UWVBFID0gXCJjbGlja1wiO1xuZXhwb3J0IGNvbnN0IEtFWVVQX0VWRU5UX1RZUEUgPSBcImtleXVwXCI7XG5leHBvcnQgY29uc3QgU0VMRUNUX0VWRU5UX1RZUEUgPSBcInNlbGVjdFwiO1xuZXhwb3J0IGNvbnN0IENIQU5HRV9FVkVOVF9UWVBFID0gXCJjaGFuZ2VcIjtcbmV4cG9ydCBjb25zdCBSRVNJWkVfRVZFTlRfVFlQRSA9IFwicmVzaXplXCI7XG5leHBvcnQgY29uc3QgU0NST0xMX0VWRU5UX1RZUEUgPSBcInNjcm9sbFwiO1xuZXhwb3J0IGNvbnN0IEtFWURPV05fRVZFTlRfVFlQRSA9IFwia2V5ZG93blwiO1xuZXhwb3J0IGNvbnN0IE1PVVNFVVBfRVZFTlRfVFlQRSA9IFwibW91c2V1cFwiO1xuZXhwb3J0IGNvbnN0IEFVWENMSUNLX0VWRU5UX1RZUEUgPSBcImF1eGNsaWNrXCI7XG5leHBvcnQgY29uc3QgTU9VU0VPVVRfRVZFTlRfVFlQRSA9IFwibW91c2VvdXRcIjtcbmV4cG9ydCBjb25zdCBEQkxDTElDS19FVkVOVF9UWVBFID0gXCJkYmxjbGlja1wiO1xuZXhwb3J0IGNvbnN0IFRPVUNIRU5EX0VWRU5UX1RZUEUgPSBcInRvdWNoZW5kXCI7XG5leHBvcnQgY29uc3QgVE9VQ0hNT1ZFX0VWRU5UX1RZUEUgPSBcInRvdWNobW92ZVwiO1xuZXhwb3J0IGNvbnN0IE1PVVNFT1ZFUl9FVkVOVF9UWVBFID0gXCJtb3VzZW92ZXJcIjtcbmV4cG9ydCBjb25zdCBNT1VTRURPV05fRVZFTlRfVFlQRSA9IFwibW91c2Vkb3duXCI7XG5leHBvcnQgY29uc3QgTU9VU0VNT1ZFX0VWRU5UX1RZUEUgPSBcIm1vdXNlbW92ZVwiO1xuZXhwb3J0IGNvbnN0IFRPVUNIU1RBUlRfRVZFTlRfVFlQRSA9IFwidG91Y2hzdGFydFwiO1xuZXhwb3J0IGNvbnN0IENPTlRFWFRNRU5VX0VWRU5UX1RZUEUgPSBcImNvbnRleHRtZW51XCI7XG5leHBvcnQgY29uc3QgU0VMRUNUSU9OQ0hBTkdFX0VWRU5UX1RZUEUgPSBcInNlbGVjdGlvbmNoYW5nZVwiO1xuZXhwb3J0IGNvbnN0IEZVTExTQ1JFRU5DSEFOR0VfRVZFTlRfVFlQRSA9IFwiZnVsbHNjcmVlbmNoYW5nZVwiO1xuZXhwb3J0IGNvbnN0IFVOSEFORExFRFJFSkVDVElPTl9FVkVOVF9UWVBFID0gXCJ1bmhhbmRsZWRyZWplY3Rpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBDVVRfRVZFTlRfVFlQRSxcbiAgQ09QWV9FVkVOVF9UWVBFLFxuICBCTFVSX0VWRU5UX1RZUEUsXG4gIEVSUk9SX0VWRU5UX1RZUEUsXG4gIFBBU1RFX0VWRU5UX1RZUEUsXG4gIFdIRUVMX0VWRU5UX1RZUEUsXG4gIElOUFVUX0VWRU5UX1RZUEUsXG4gIEZPQ1VTX0VWRU5UX1RZUEUsXG4gIENMSUNLX0VWRU5UX1RZUEUsXG4gIEtFWVVQX0VWRU5UX1RZUEUsXG4gIFNFTEVDVF9FVkVOVF9UWVBFLFxuICBDSEFOR0VfRVZFTlRfVFlQRSxcbiAgUkVTSVpFX0VWRU5UX1RZUEUsXG4gIFNDUk9MTF9FVkVOVF9UWVBFLFxuICBLRVlET1dOX0VWRU5UX1RZUEUsXG4gIE1PVVNFVVBfRVZFTlRfVFlQRSxcbiAgQVVYQ0xJQ0tfRVZFTlRfVFlQRSxcbiAgTU9VU0VPVVRfRVZFTlRfVFlQRSxcbiAgREJMQ0xJQ0tfRVZFTlRfVFlQRSxcbiAgVE9VQ0hFTkRfRVZFTlRfVFlQRSxcbiAgVE9VQ0hNT1ZFX0VWRU5UX1RZUEUsXG4gIE1PVVNFT1ZFUl9FVkVOVF9UWVBFLFxuICBNT1VTRURPV05fRVZFTlRfVFlQRSxcbiAgTU9VU0VNT1ZFX0VWRU5UX1RZUEUsXG4gIFRPVUNIU1RBUlRfRVZFTlRfVFlQRSxcbiAgQ09OVEVYVE1FTlVfRVZFTlRfVFlQRSxcbiAgU0VMRUNUSU9OQ0hBTkdFX0VWRU5UX1RZUEUsXG4gIEZVTExTQ1JFRU5DSEFOR0VfRVZFTlRfVFlQRSxcbiAgVU5IQU5ETEVEUkVKRUNUSU9OX0VWRU5UX1RZUEVcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGNvbWJpbmUsIHBydW5lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9vYmplY3RcIjtcbmltcG9ydCB7IGZpcnN0LCBndWFyYW50ZWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBjYW1lbENhc2VUb1NuYWtlQ2FzZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBpc0hUTUxBdHRyaWJ1dGVOYW1lLCBpc1NWR0F0dHJpYnV0ZU5hbWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25hbWVcIjtcbmltcG9ydCB7IHJlbW92ZUZhbHNleUVsZW1lbnRzLCByZXBsYWNlU3RyaW5nc1dpdGhUZXh0RWxlbWVudHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBEQkxDTElDS19FVkVOVF9UWVBFLCBTRUxFQ1RJT05DSEFOR0VfRVZFTlRfVFlQRSwgRlVMTFNDUkVFTkNIQU5HRV9FVkVOVF9UWVBFIH0gZnJvbSBcIi4uL2V2ZW50VHlwZXNcIjtcbmltcG9ydCB7IEZPUiwgQ0xBU1MsIE9CSkVDVCwgSFRNTF9GT1IsIENMQVNTX05BTUUsIEJPT0xFQU4sIEZVTkNUSU9OLCBTVkdfTkFNRVNQQUNFX1VSSSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgRE9VQkxFX0NMSUNLX0VWRU5UX1RZUEUgPSBcImRvdWJsZWNsaWNrXCIsXG4gICAgICBTRUxFQ1RJT05fQ0hBTkdFX0VWRU5UX1RZUEUgPSBcInNlbGVjdGlvbkNoYW5nZVwiLFxuICAgICAgRlVMTF9TQ1JFRU5fQ0hBTkdFX0VWRU5UX1RZUEUgPSBcImZ1bGxTY3JlZW5DaGFuZ2VcIjtcblxuZnVuY3Rpb24gYXBwbHlQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGRlZmF1bHRQcm9wZXJ0aWVzLCBpZ25vcmVkUHJvcGVydGllcykge1xuICB0aGlzLnByb3BlcnRpZXMgPSBjb21iaW5lKHByb3BlcnRpZXMsIGRlZmF1bHRQcm9wZXJ0aWVzKTtcblxuICBwcm9wZXJ0aWVzID0gcHJ1bmUodGhpcy5wcm9wZXJ0aWVzLCBpZ25vcmVkUHJvcGVydGllcyk7IC8vL1xuXG4gIGNvbnN0IG5hbWVzcGFjZVVSSSA9IHRoaXMuZG9tRWxlbWVudC5uYW1lc3BhY2VVUkksXG4gICAgICAgIHN2ZyA9IChuYW1lc3BhY2VVUkkgPT09IFNWR19OQU1FU1BBQ0VfVVJJKSwgLy8vXG4gICAgICAgIHByb3BlcnRpZXNLZXlzID0gT2JqZWN0LmtleXMocHJvcGVydGllcyksXG4gICAgICAgIG5hbWVzID0gcHJvcGVydGllc0tleXM7ICAvLy89XG5cbiAgbmFtZXMuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gcHJvcGVydGllc1tuYW1lXSxcbiAgICAgICAgICBuYW1lSGFuZGxlck5hbWUgPSBpc05hbWVIYW5kbGVyTmFtZShuYW1lKSxcbiAgICAgICAgICBuYW1lQ3VzdG9tSGFuZGxlck5hbWUgPSBpc05hbWVDdXN0b21IYW5kbGVyTmFtZShuYW1lKTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmIChuYW1lSGFuZGxlck5hbWUpIHtcbiAgICAgIGFkZEhhbmRsZXIodGhpcywgbmFtZSwgdmFsdWUpO1xuICAgIH0gZWxzZSBpZiAobmFtZUN1c3RvbUhhbmRsZXJOYW1lKSB7XG4gICAgICBhZGRDdXN0b21IYW5kbGVyKHRoaXMsIG5hbWUsIHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbmFtZUF0dHJpYnV0ZU5hbWUgPSBpc05hbWVBdHRyaWJ1dGVOYW1lKG5hbWUsIHN2Zyk7XG5cbiAgICAgIGlmIChuYW1lQXR0cmlidXRlTmFtZSkge1xuICAgICAgICBhZGRBdHRyaWJ1dGUodGhpcywgbmFtZSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgY2hpbGRFbGVtZW50cyA9IGNoaWxkRWxlbWVudHNGcm9tRWxlbWVudCh0aGlzKSB8fCBwcm9wZXJ0aWVzLmNoaWxkRWxlbWVudHMsICAvLy9cbiAgICAgICAgY29udGV4dCA9IHt9O1xuXG4gIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgdXBkYXRlQ29udGV4dChjaGlsZEVsZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgdGhpcy5hZGQoY2hpbGRFbGVtZW50KTtcbiAgfSk7XG5cbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbn1cblxuZnVuY3Rpb24gZ2V0UHJvcGVydGllcygpIHtcbiAgcmV0dXJuIHRoaXMucHJvcGVydGllcztcbn1cblxuZnVuY3Rpb24gZ2V0Q29udGV4dCgpIHtcbiAgcmV0dXJuIHRoaXMuY29udGV4dDtcbn1cblxuZnVuY3Rpb24gYXNzaWduQ29udGV4dChuYW1lcywgdGhlbkRlbGV0ZSkge1xuICBjb25zdCBhcmd1bWVudHNMZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuXG4gIGlmIChhcmd1bWVudHNMZW5ndGggPT09IDEpIHtcbiAgICBjb25zdCBmaXJzdEFyZ3VtZW50ID0gZmlyc3QoYXJndW1lbnRzKTtcblxuICAgIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gQk9PTEVBTikge1xuICAgICAgbmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLmNvbnRleHQpO1xuXG4gICAgICB0aGVuRGVsZXRlID0gZmlyc3RBcmd1bWVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhlbkRlbGV0ZSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgaWYgKGFyZ3VtZW50c0xlbmd0aCA9PT0gMCkge1xuICAgIG5hbWVzID0gT2JqZWN0LmtleXModGhpcy5jb250ZXh0KTtcblxuICAgIHRoZW5EZWxldGUgPSB0cnVlO1xuICB9XG5cbiAgbmFtZXMuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5jb250ZXh0W25hbWVdLFxuICAgICAgICAgIHByb3BlcnR5TmFtZSA9IG5hbWUsICAvLy9cbiAgICAgICAgICBkZXNjcmlwdG9yID0ge1xuICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgICAgfTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBwcm9wZXJ0eU5hbWUsIGRlc2NyaXB0b3IpO1xuXG4gICAgaWYgKHRoZW5EZWxldGUpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLmNvbnRleHRbbmFtZV07XG4gICAgfVxuICB9LCBbXSk7XG59XG5cbmNvbnN0IGpzeE1peGlucyA9IHtcbiAgYXBwbHlQcm9wZXJ0aWVzLFxuICBnZXRQcm9wZXJ0aWVzLFxuICBnZXRDb250ZXh0LFxuICBhc3NpZ25Db250ZXh0XG59O1xuXG5leHBvcnQgZGVmYXVsdCBqc3hNaXhpbnM7XG5cbmZ1bmN0aW9uIGNoaWxkRWxlbWVudHNGcm9tRWxlbWVudChlbGVtZW50KSB7XG4gIGxldCBjaGlsZEVsZW1lbnRzID0gbnVsbDtcblxuICBpZiAodHlwZW9mIGVsZW1lbnQuY2hpbGRFbGVtZW50cyA9PT0gRlVOQ1RJT04pIHtcbiAgICBjaGlsZEVsZW1lbnRzID0gZWxlbWVudC5jaGlsZEVsZW1lbnRzLmNhbGwoZWxlbWVudCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzID0gZ3VhcmFudGVlKGNoaWxkRWxlbWVudHMpO1xuXG4gICAgY2hpbGRFbGVtZW50cyA9IHJlbW92ZUZhbHNleUVsZW1lbnRzKGNoaWxkRWxlbWVudHMpO1xuXG4gICAgY2hpbGRFbGVtZW50cyA9IHJlcGxhY2VTdHJpbmdzV2l0aFRleHRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKTtcbiAgfVxuXG4gIHJldHVybiBjaGlsZEVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVDb250ZXh0KGNoaWxkRWxlbWVudCwgY29udGV4dCkge1xuICBjb25zdCBwYXJlbnRDb250ZXh0ID0gKHR5cGVvZiBjaGlsZEVsZW1lbnQucGFyZW50Q29udGV4dCA9PT0gRlVOQ1RJT04pID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRFbGVtZW50LnBhcmVudENvbnRleHQoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRFbGVtZW50LmNvbnRleHQ7IC8vL1xuXG4gIE9iamVjdC5hc3NpZ24oY29udGV4dCwgcGFyZW50Q29udGV4dCk7XG59XG5cbmZ1bmN0aW9uIGFkZEhhbmRsZXIoZWxlbWVudCwgbmFtZSwgdmFsdWUpIHtcbiAgbGV0IGV2ZW50VHlwZSA9IG5hbWUuc3Vic3RyaW5nKDIpLnRvTG93ZXJDYXNlKCk7IC8vL1xuXG4gIHN3aXRjaCAoZXZlbnRUeXBlKSB7XG4gICAgY2FzZSBET1VCTEVfQ0xJQ0tfRVZFTlRfVFlQRToge1xuICAgICAgZXZlbnRUeXBlID0gREJMQ0xJQ0tfRVZFTlRfVFlQRTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBTRUxFQ1RJT05fQ0hBTkdFX0VWRU5UX1RZUEU6IHtcbiAgICAgIGV2ZW50VHlwZSA9IFNFTEVDVElPTkNIQU5HRV9FVkVOVF9UWVBFO1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIEZVTExfU0NSRUVOX0NIQU5HRV9FVkVOVF9UWVBFOiB7XG4gICAgICBldmVudFR5cGUgPSBGVUxMU0NSRUVOQ0hBTkdFX0VWRU5UX1RZUEU7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICB9XG5cbiAgY29uc3QgaGFuZGxlciA9IHZhbHVlOyAgLy8vXG5cbiAgZWxlbWVudC5vbkV2ZW50KGV2ZW50VHlwZSwgaGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIGFkZEN1c3RvbUhhbmRsZXIoZWxlbWVudCwgbmFtZSwgdmFsdWUpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRUeXBlID0gY2FtZWxDYXNlVG9TbmFrZUNhc2UobmFtZSkucmVwbGFjZSgvb24tY3VzdG9tLS8sIFwiXCIpLFxuICAgICAgICBjdXN0b21IYW5kbGVyID0gdmFsdWU7ICAvLy9cblxuICBlbGVtZW50Lm9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gYWRkQXR0cmlidXRlKGVsZW1lbnQsIG5hbWUsIHZhbHVlKSB7XG4gIGlmIChuYW1lID09PSBDTEFTU19OQU1FKSB7XG4gICAgbmFtZSA9IENMQVNTO1xuICB9XG5cbiAgaWYgKG5hbWUgPT09IEhUTUxfRk9SKSB7XG4gICAgbmFtZSA9IEZPUjtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09IE9CSkVDVCkge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSk7XG5cbiAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZWxlbWVudC5kb21FbGVtZW50W25hbWVdW2tleV0gPSB2YWx1ZVtrZXldO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gQk9PTEVBTikge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdmFsdWUgPSBuYW1lOyAvLy9cblxuICAgICAgZWxlbWVudC5hZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50LmFkZEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNOYW1lSGFuZGxlck5hbWUobmFtZSkge1xuICBjb25zdCBuYW1lSGFuZGxlck5hbWUgPSAgL15vbig/IUN1c3RvbSkvLnRlc3QobmFtZSk7ICAvLy9cblxuICByZXR1cm4gbmFtZUhhbmRsZXJOYW1lO1xufVxuXG5mdW5jdGlvbiBpc05hbWVBdHRyaWJ1dGVOYW1lKG5hbWUsIHN2Zykge1xuICBjb25zdCBuYW1lQXR0cmlidXRlTmFtZSA9IHN2ZyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzU1ZHQXR0cmlidXRlTmFtZShuYW1lKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNIVE1MQXR0cmlidXRlTmFtZShuYW1lKTtcblxuICByZXR1cm4gbmFtZUF0dHJpYnV0ZU5hbWU7XG59XG5cbmZ1bmN0aW9uIGlzTmFtZUN1c3RvbUhhbmRsZXJOYW1lKG5hbWUpIHtcbiAgY29uc3QgbmFtZUN1c3RvbUhhbmRsZXJOYW1lID0gL15vbkN1c3RvbS8udGVzdChuYW1lKTtcblxuICByZXR1cm4gbmFtZUN1c3RvbUhhbmRsZXJOYW1lO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBLRVlVUF9FVkVOVF9UWVBFLCBLRVlET1dOX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi4vZXZlbnRUeXBlc1wiO1xuXG5mdW5jdGlvbiBvbktleVVwKGtleVVwSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uRXZlbnQoS0VZVVBfRVZFTlRfVFlQRSwga2V5VXBIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvZmZLZXlVcChrZXlVcEhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vZmZFdmVudChLRVlVUF9FVkVOVF9UWVBFLCBrZXlVcEhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9uS2V5RG93bihrZXlEb3duSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uRXZlbnQoS0VZRE9XTl9FVkVOVF9UWVBFLCBrZXlEb3duSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb2ZmS2V5RG93bihrZXlEb3duSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZkV2ZW50KEtFWURPV05fRVZFTlRfVFlQRSwga2V5RG93bkhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmNvbnN0IGtleU1peGlucyA9IHtcbiAgb25LZXlVcCxcbiAgb2ZmS2V5VXAsXG4gIG9uS2V5RG93bixcbiAgb2ZmS2V5RG93blxufTtcblxuZXhwb3J0IGRlZmF1bHQga2V5TWl4aW5zO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBnZXRTdGF0ZSgpIHtcbiAgcmV0dXJuIHRoaXMuc3RhdGU7XG59XG5cbmZ1bmN0aW9uIHNldFN0YXRlKHN0YXRlKSB7XG4gIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlU3RhdGUoc3RhdGUpIHtcbiAgKHRoaXMuc3RhdGUgPT09IHVuZGVmaW5lZCkgP1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZSA6XG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMuc3RhdGUsIHN0YXRlKTtcbn1cblxuY29uc3Qgc3RhdGVNaXhpbnMgPSB7XG4gIGdldFN0YXRlLFxuICBzZXRTdGF0ZSxcbiAgdXBkYXRlU3RhdGVcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN0YXRlTWl4aW5zO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBTUEFDRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IFJFU0laRV9FVkVOVF9UWVBFIH0gZnJvbSBcIi4uL2V2ZW50VHlwZXNcIjtcblxuZnVuY3Rpb24gb25FdmVudChldmVudFR5cGVzLCBoYW5kbGVyLCBlbGVtZW50ID0gdGhpcykge1xuICBldmVudFR5cGVzID0gZXZlbnRUeXBlcy5zcGxpdChTUEFDRSk7IC8vL1xuXG4gIGV2ZW50VHlwZXMuZm9yRWFjaCgoZXZlbnRUeXBlKSA9PiB7XG4gICAgaWYgKGV2ZW50VHlwZSA9PT0gUkVTSVpFX0VWRU5UX1RZUEUpIHtcbiAgICAgIGNvbnN0IHJlc2l6ZUV2ZW50TGlzdGVuZXJzID0gdGhpcy5maW5kRXZlbnRMaXN0ZW5lcnMoUkVTSVpFX0VWRU5UX1RZUEUpLFxuICAgICAgICAgICAgcmVzaXplRXZlbnRMaXN0ZW5lcnNMZW5ndGggPSByZXNpemVFdmVudExpc3RlbmVycy5sZW5ndGg7XG5cbiAgICAgIGlmIChyZXNpemVFdmVudExpc3RlbmVyc0xlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzLnJlc2l6ZU9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgICAgICAgY29uc3QgcmVzaXplRXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmZpbmRFdmVudExpc3RlbmVycyhSRVNJWkVfRVZFTlRfVFlQRSk7XG5cbiAgICAgICAgICByZXNpemVFdmVudExpc3RlbmVycy5mb3JFYWNoKChyZXNpemVFdmVudExpc3RlbmVyKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBldmVudCA9IG51bGw7XG5cbiAgICAgICAgICAgIHJlc2l6ZUV2ZW50TGlzdGVuZXIoZXZlbnQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLm9ic2VydmUodGhpcy5kb21FbGVtZW50KVxuICAgICAgfVxuXG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZXZlbnRMaXN0ZW5lciA9IHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGV2ZW50TGlzdGVuZXIpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG9mZkV2ZW50KGV2ZW50VHlwZXMsIGhhbmRsZXIsIGVsZW1lbnQgPSB0aGlzKSB7XG4gIGV2ZW50VHlwZXMgPSBldmVudFR5cGVzLnNwbGl0KFNQQUNFKTsgLy8vXG5cbiAgZXZlbnRUeXBlcy5mb3JFYWNoKChldmVudFR5cGUpID0+IHtcbiAgICBpZiAoZXZlbnRUeXBlID09PSBSRVNJWkVfRVZFTlRfVFlQRSkge1xuICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG5cbiAgICAgIGNvbnN0IHJlc2l6ZUV2ZW50TGlzdGVuZXJzID0gdGhpcy5maW5kRXZlbnRMaXN0ZW5lcnMoUkVTSVpFX0VWRU5UX1RZUEUpLFxuICAgICAgICAgICAgcmVzaXplRXZlbnRMaXN0ZW5lcnNMZW5ndGggPSByZXNpemVFdmVudExpc3RlbmVycy5sZW5ndGg7XG5cbiAgICAgIGlmIChyZXNpemVFdmVudExpc3RlbmVyc0xlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzLnJlc2l6ZU9ic2VydmVyLnVub2JzZXJ2ZSh0aGlzLmRvbUVsZW1lbnQpO1xuXG4gICAgICAgIGRlbGV0ZSB0aGlzLnJlc2l6ZU9ic2VydmVyO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBldmVudExpc3RlbmVyID0gdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG5cbiAgICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgZXZlbnRMaXN0ZW5lcik7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgZXZlbnRMaXN0ZW5lciA9IHRoaXMuY3JlYXRlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuXG4gIGlmICghdGhpcy5ldmVudExpc3RlbmVycykge1xuICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMgPSBbXTtcbiAgfVxuXG4gIHRoaXMuZXZlbnRMaXN0ZW5lcnMucHVzaChldmVudExpc3RlbmVyKTtcblxuICByZXR1cm4gZXZlbnRMaXN0ZW5lcjtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgZXZlbnRMaXN0ZW5lciA9IHRoaXMuZmluZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KSxcbiAgICAgICAgaW5kZXggPSB0aGlzLmV2ZW50TGlzdGVuZXJzLmluZGV4T2YoZXZlbnRMaXN0ZW5lciksXG4gICAgICAgIHN0YXJ0ID0gaW5kZXgsICAvLy9cbiAgICAgICAgZGVsZXRlQ291bnQgPSAxO1xuXG4gIHRoaXMuZXZlbnRMaXN0ZW5lcnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG5cbiAgaWYgKHRoaXMuZXZlbnRMaXN0ZW5lcnMubGVuZ3RoID09PSAwKSB7XG4gICAgZGVsZXRlIHRoaXMuZXZlbnRMaXN0ZW5lcnM7XG4gIH1cblxuICByZXR1cm4gZXZlbnRMaXN0ZW5lcjtcbn1cblxuZnVuY3Rpb24gZmluZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGV2ZW50TGlzdGVuZXIgPSB0aGlzLmV2ZW50TGlzdGVuZXJzLmZpbmQoKGV2ZW50TGlzdGVuZXIpID0+IHtcbiAgICBpZiAoKGV2ZW50TGlzdGVuZXIuZWxlbWVudCA9PT0gZWxlbWVudCkgJiYgKGV2ZW50TGlzdGVuZXIuaGFuZGxlciA9PT0gaGFuZGxlcikgJiYgKGV2ZW50TGlzdGVuZXIuZXZlbnRUeXBlID09PSBldmVudFR5cGUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBldmVudExpc3RlbmVyO1xufVxuXG5mdW5jdGlvbiBmaW5kRXZlbnRMaXN0ZW5lcnMoZXZlbnRUeXBlKSB7XG4gIGNvbnN0IGV2ZW50TGlzdGVuZXJzID0gW107XG5cbiAgaWYgKHRoaXMuZXZlbnRMaXN0ZW5lcnMpIHtcbiAgICB0aGlzLmV2ZW50TGlzdGVuZXJzLmZvckVhY2goKGV2ZW50TGlzdGVuZXIpID0+IHtcbiAgICAgIGNvbnN0IGZvdW5kID0gKGV2ZW50TGlzdGVuZXIuZXZlbnRUeXBlID09PSBldmVudFR5cGUpO1xuXG4gICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgZXZlbnRMaXN0ZW5lcnMucHVzaChldmVudExpc3RlbmVyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBldmVudExpc3RlbmVycztcbn1cblxuZnVuY3Rpb24gY3JlYXRlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgbGV0IGV2ZW50TGlzdGVuZXI7XG5cbiAgY29uc3QgaGFuZGxlckVsZW1lbnQgPSBlbGVtZW50OyAvLy9cblxuICBldmVudExpc3RlbmVyID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXM7IC8vL1xuXG4gICAgaGFuZGxlci5jYWxsKGhhbmRsZXJFbGVtZW50LCBldmVudCwgZWxlbWVudCk7XG4gIH07XG5cbiAgT2JqZWN0LmFzc2lnbihldmVudExpc3RlbmVyLCB7XG4gICAgZWxlbWVudCxcbiAgICBoYW5kbGVyLFxuICAgIGV2ZW50VHlwZVxuICB9KTtcblxuICByZXR1cm4gZXZlbnRMaXN0ZW5lcjtcbn1cblxuY29uc3QgZXZlbnRNaXhpbnMgPSB7XG4gIG9uRXZlbnQsXG4gIG9mZkV2ZW50LFxuICBhZGRFdmVudExpc3RlbmVyLFxuICByZW1vdmVFdmVudExpc3RlbmVyLFxuICBmaW5kRXZlbnRMaXN0ZW5lcixcbiAgZmluZEV2ZW50TGlzdGVuZXJzLFxuICBjcmVhdGVFdmVudExpc3RlbmVyXG59O1xuXG5leHBvcnQgZGVmYXVsdCBldmVudE1peGlucztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgTU9VU0VVUF9FVkVOVF9UWVBFLCBNT1VTRU9VVF9FVkVOVF9UWVBFLCBNT1VTRURPV05fRVZFTlRfVFlQRSwgTU9VU0VPVkVSX0VWRU5UX1RZUEUsIE1PVVNFTU9WRV9FVkVOVF9UWVBFIH0gZnJvbSBcIi4uL2V2ZW50VHlwZXNcIjtcblxuZnVuY3Rpb24gb25Nb3VzZVVwKG1vdXNlVXBIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub25FdmVudChNT1VTRVVQX0VWRU5UX1RZUEUsIG1vdXNlVXBIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvZmZNb3VzZVVwKG1vdXNlVXBIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmRXZlbnQoTU9VU0VVUF9FVkVOVF9UWVBFLCBtb3VzZVVwSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb25Nb3VzZU91dChtb3VzZU91dEhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vbkV2ZW50KE1PVVNFT1VUX0VWRU5UX1RZUEUsIG1vdXNlT3V0SGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb2ZmTW91c2VPdXQobW91c2VPdXRIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmRXZlbnQoTU9VU0VPVVRfRVZFTlRfVFlQRSwgbW91c2VPdXRIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvbk1vdXNlRG93bihtb3VzZURvd25IYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub25FdmVudChNT1VTRURPV05fRVZFTlRfVFlQRSwgbW91c2VEb3duSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb2ZmTW91c2VEb3duKG1vdXNlRG93bkhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vZmZFdmVudChNT1VTRURPV05fRVZFTlRfVFlQRSwgbW91c2VEb3duSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb25Nb3VzZU92ZXIobW91c2VPdmVySGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uRXZlbnQoTU9VU0VPVkVSX0VWRU5UX1RZUEUsIG1vdXNlT3ZlckhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9mZk1vdXNlT3Zlcihtb3VzZU92ZXJIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmRXZlbnQoTU9VU0VPVkVSX0VWRU5UX1RZUEUsIG1vdXNlT3ZlckhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9uTW91c2VNb3ZlKG1vdXNlTW92ZUhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vbkV2ZW50KE1PVVNFTU9WRV9FVkVOVF9UWVBFLCBtb3VzZU1vdmVIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvZmZNb3VzZU1vdmUobW91c2VNb3ZlSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZkV2ZW50KE1PVVNFTU9WRV9FVkVOVF9UWVBFLCBtb3VzZU1vdmVIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5jb25zdCBtb3VzZU1peGlucyA9IHtcbiAgb25Nb3VzZVVwLFxuICBvZmZNb3VzZVVwLFxuICBvbk1vdXNlT3V0LFxuICBvZmZNb3VzZU91dCxcbiAgb25Nb3VzZURvd24sXG4gIG9mZk1vdXNlRG93bixcbiAgb25Nb3VzZU92ZXIsXG4gIG9mZk1vdXNlT3ZlcixcbiAgb25Nb3VzZU1vdmUsXG4gIG9mZk1vdXNlTW92ZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbW91c2VNaXhpbnM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENMSUNLX0VWRU5UX1RZUEUsIERCTENMSUNLX0VWRU5UX1RZUEUsIEFVWENMSUNLX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi4vZXZlbnRUeXBlc1wiO1xuXG5mdW5jdGlvbiBvbkNsaWNrKGNsaWNrSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uRXZlbnQoQ0xJQ0tfRVZFTlRfVFlQRSwgY2xpY2tIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvZmZDbGljayhjbGlja0hhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vZmZFdmVudChDTElDS19FVkVOVF9UWVBFLCBjbGlja0hhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9uQXV4Q2xpY2soYXV4Q2xpY2tIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub25FdmVudChBVVhDTElDS19FVkVOVF9UWVBFLCBhdXhDbGlja0hhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9mZkF1eENsaWNrKGF1eENsaWNrSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZkV2ZW50KEFVWENMSUNLX0VWRU5UX1RZUEUsIGF1eENsaWNrSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb25Eb3VibGVDbGljayhkb3VibGVDbGlja0hhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vbkV2ZW50KERCTENMSUNLX0VWRU5UX1RZUEUsIGRvdWJsZUNsaWNrSGFuZGxlciwgZWxlbWVudCk7IH0gLy8vXG5cbmZ1bmN0aW9uIG9mZkRvdWJsZUNsaWNrKGRvdWJsZUNsaWNrSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZkV2ZW50KERCTENMSUNLX0VWRU5UX1RZUEUsIGRvdWJsZUNsaWNrSGFuZGxlciwgZWxlbWVudCk7IH0gLy8vXG5cbmNvbnN0IGNsaWNrTWl4aW5zID0ge1xuICBvbkNsaWNrLFxuICBvZmZDbGljayxcbiAgb25BdXhDbGljayxcbiAgb2ZmQXV4Q2xpY2ssXG4gIG9uRG91YmxlQ2xpY2ssXG4gIG9mZkRvdWJsZUNsaWNrXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGlja01peGlucztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgVE9VQ0hTVEFSVF9FVkVOVF9UWVBFLCBUT1VDSE1PVkVfRVZFTlRfVFlQRSwgVE9VQ0hFTkRfRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9ldmVudFR5cGVzXCI7XG5cbmZ1bmN0aW9uIG9uVG91Y2hTdGFydCh0b3VjaFN0YXJ0SGFuZGxlcikgeyB0aGlzLm9uRXZlbnQoVE9VQ0hTVEFSVF9FVkVOVF9UWVBFLCB0b3VjaFN0YXJ0SGFuZGxlcik7IH1cblxuZnVuY3Rpb24gb2ZmVG91Y2hTdGFydCh0b3VjaFN0YXJ0SGFuZGxlcikgeyB0aGlzLm9mZkV2ZW50KFRPVUNIU1RBUlRfRVZFTlRfVFlQRSwgdG91Y2hTdGFydEhhbmRsZXIpOyB9XG5cbmZ1bmN0aW9uIG9uVG91Y2hNb3ZlKHRvdWNoU3RhcnRIYW5kbGVyKSB7IHRoaXMub25FdmVudChUT1VDSE1PVkVfRVZFTlRfVFlQRSwgdG91Y2hTdGFydEhhbmRsZXIpOyB9XG5cbmZ1bmN0aW9uIG9mZlRvdWNoTW92ZSh0b3VjaFN0YXJ0SGFuZGxlcikgeyB0aGlzLm9mZkV2ZW50KFRPVUNITU9WRV9FVkVOVF9UWVBFLCB0b3VjaFN0YXJ0SGFuZGxlcik7IH1cblxuZnVuY3Rpb24gb25Ub3VjaEVuZCh0b3VjaFN0YXJ0SGFuZGxlcikgeyB0aGlzLm9uRXZlbnQoVE9VQ0hFTkRfRVZFTlRfVFlQRSwgdG91Y2hTdGFydEhhbmRsZXIpOyB9XG5cbmZ1bmN0aW9uIG9mZlRvdWNoRW5kKHRvdWNoU3RhcnRIYW5kbGVyKSB7IHRoaXMub2ZmRXZlbnQoVE9VQ0hFTkRfRVZFTlRfVFlQRSwgdG91Y2hTdGFydEhhbmRsZXIpOyB9XG5cbmNvbnN0IGNsaWNrTWl4aW5zID0ge1xuICBvblRvdWNoU3RhcnQsXG4gIG9mZlRvdWNoU3RhcnQsXG4gIG9uVG91Y2hNb3ZlLFxuICBvZmZUb3VjaE1vdmUsXG4gIG9uVG91Y2hFbmQsXG4gIG9mZlRvdWNoRW5kXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGlja01peGlucztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgU0NST0xMX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi4vZXZlbnRUeXBlc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gb25TY3JvbGwoc2Nyb2xsSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uRXZlbnQoU0NST0xMX0VWRU5UX1RZUEUsIHNjcm9sbEhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBvZmZTY3JvbGwoc2Nyb2xsSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZkV2ZW50KFNDUk9MTF9FVkVOVF9UWVBFLCBzY3JvbGxIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBzY3JvbGxUbyhzY3JvbGxUb3AsIHNjcm9sbExlZnQpIHsgdGhpcy5kb21FbGVtZW50LnNjcm9sbFRvKHNjcm9sbExlZnQsIHNjcm9sbFRvcCk7IH0gLy8vXG5cbmZ1bmN0aW9uIGdldFNjcm9sbFRvcCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5zY3JvbGxUb3A7IH1cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsTGVmdCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5zY3JvbGxMZWZ0OyB9XG5cbmZ1bmN0aW9uIHNldFNjcm9sbFRvcChzY3JvbGxUb3ApIHsgdGhpcy5kb21FbGVtZW50LnNjcm9sbFRvcCA9IHNjcm9sbFRvcDsgfVxuXG5mdW5jdGlvbiBzZXRTY3JvbGxMZWZ0KHNjcm9sbExlZnQpIHsgdGhpcy5kb21FbGVtZW50LnNjcm9sbExlZnQgPSBzY3JvbGxMZWZ0OyB9XG5cbmNvbnN0IHNjcm9sbE1peGlucyA9IHtcbiAgb25TY3JvbGwsXG4gIG9mZlNjcm9sbCxcbiAgc2Nyb2xsVG8sXG4gIGdldFNjcm9sbFRvcCxcbiAgZ2V0U2Nyb2xsTGVmdCxcbiAgc2V0U2Nyb2xsVG9wLFxuICBzZXRTY3JvbGxMZWZ0XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzY3JvbGxNaXhpbnM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJFU0laRV9FVkVOVF9UWVBFIH0gZnJvbSBcIi4uL2V2ZW50VHlwZXNcIjtcblxuZnVuY3Rpb24gb25SZXNpemUocmVzaXplSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uRXZlbnQoUkVTSVpFX0VWRU5UX1RZUEUsIHJlc2l6ZUhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9mZlJlc2l6ZShyZXNpemVIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmRXZlbnQoUkVTSVpFX0VWRU5UX1RZUEUsIHJlc2l6ZUhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmNvbnN0IHJlc2l6ZU1peGlucyA9IHtcbiAgb25SZXNpemUsXG4gIG9mZlJlc2l6ZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVzaXplTWl4aW5zO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBGVUxMU0NSRUVOQ0hBTkdFX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi4vZXZlbnRUeXBlc1wiO1xuXG5mdW5jdGlvbiBvbkZ1bGxTY3JlZW5DaGFuZ2UoZnVsbFNjcmVlbkNoYW5nZUhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vbkV2ZW50KEZVTExTQ1JFRU5DSEFOR0VfRVZFTlRfVFlQRSwgZnVsbFNjcmVlbkNoYW5nZUhhbmRsZXIsIGVsZW1lbnQpOyB9ICAvLy9cblxuZnVuY3Rpb24gb2ZmRnVsbFNjcmVlbkNoYW5nZShmdWxsU2NyZWVuQ2hhbmdlSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZkV2ZW50KEZVTExTQ1JFRU5DSEFOR0VfRVZFTlRfVFlQRSwgZnVsbFNjcmVlbkNoYW5nZUhhbmRsZXIsIGVsZW1lbnQpOyB9ICAvLy9cblxuZnVuY3Rpb24gcmVxdWVzdEZ1bGxTY3JlZW4oZXJyb3JIYW5kbGVyKSB7XG4gIGNvbnN0IGRvbUVsZW1lbnQgPSB0aGlzLmdldERPTUVsZW1lbnQoKTtcblxuICBkb21FbGVtZW50LnJlcXVlc3RGdWxsc2NyZWVuKClcbiAgICAuY2F0Y2goZXJyb3JIYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gZXhpdEZ1bGxTY3JlZW4oKSB7XG4gIGRvY3VtZW50LmV4aXRGdWxsc2NyZWVuKCk7XG59XG5cbmZ1bmN0aW9uIGlzRnVsbFNjcmVlbigpIHtcbiAgY29uc3QgeyBmdWxsc2NyZWVuRWxlbWVudCB9ID0gZG9jdW1lbnQsXG4gICAgICAgIGZ1bGxTY3JlZW4gPShmdWxsc2NyZWVuRWxlbWVudCAhPT0gbnVsbCk7XG5cbiAgcmV0dXJuIGZ1bGxTY3JlZW47XG59XG5cbmNvbnN0IGZ1bGxzY3JlZW5NaXhpbnMgPSB7XG4gIG9uRnVsbFNjcmVlbkNoYW5nZSxcbiAgb2ZmRnVsbFNjcmVlbkNoYW5nZSxcbiAgcmVxdWVzdEZ1bGxTY3JlZW4sXG4gIGV4aXRGdWxsU2NyZWVuLFxuICBpc0Z1bGxTY3JlZW5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bGxzY3JlZW5NaXhpbnM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JFYWNoKGFycmF5LCBvcGVyYXRpb24sIGRvbmUsIGNvbnRleHQpIHtcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoOyAgLy8vXG5cbiAgbGV0IGNvdW50ID0gLTE7XG5cbiAgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICBjb3VudCsrO1xuXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xuXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xuICAgICAgZG9uZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBpbmRleCA9IGNvdW50LCAgLy8vXG4gICAgICAgICAgICBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgICBvcGVyYXRpb24oZWxlbWVudCwgbmV4dCwgZG9uZSwgY29udGV4dCwgaW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIG5leHQoKTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgU1BBQ0UgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBmb3JFYWNoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hc3luY1wiO1xuXG5mdW5jdGlvbiBvbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZXMsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQgPSB0aGlzKSB7XG4gIGN1c3RvbUV2ZW50VHlwZXMgPSBjdXN0b21FdmVudFR5cGVzLnNwbGl0KFNQQUNFKTsgLy8vXG5cbiAgY3VzdG9tRXZlbnRUeXBlcy5mb3JFYWNoKChjdXN0b21FdmVudFR5cGUpID0+IHtcbiAgICB0aGlzLmFkZEN1c3RvbUV2ZW50TGlzdGVuZXIoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG9mZkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZXMsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQgPSB0aGlzKSB7XG4gIGN1c3RvbUV2ZW50VHlwZXMgPSBjdXN0b21FdmVudFR5cGVzLnNwbGl0KFNQQUNFKTsgLy8vXG5cbiAgY3VzdG9tRXZlbnRUeXBlcy5mb3JFYWNoKChjdXN0b21FdmVudFR5cGUpID0+IHtcbiAgICB0aGlzLnJlbW92ZUN1c3RvbUV2ZW50TGlzdGVuZXIoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNhbGxDdXN0b21IYW5kbGVycyhjdXN0b21FdmVudFR5cGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICBjb25zdCBjdXN0b21FdmVudExpc3RlbmVycyA9IHRoaXMuZmluZEN1c3RvbUV2ZW50TGlzdGVuZXJzKGN1c3RvbUV2ZW50VHlwZSk7XG5cbiAgY3VzdG9tRXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoY3VzdG9tRXZlbnRMaXN0ZW5lcikgPT4ge1xuICAgIGNvbnN0IHsgY3VzdG9tSGFuZGxlciwgZWxlbWVudDogY3VzdG9tSGFuZGxlckVsZW1lbnQgfSA9IGN1c3RvbUV2ZW50TGlzdGVuZXI7IC8vL1xuXG4gICAgY3VzdG9tSGFuZGxlci5jYWxsKGN1c3RvbUhhbmRsZXJFbGVtZW50LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2FsbEN1c3RvbUhhbmRsZXJzQXN5bmMoY3VzdG9tRXZlbnRUeXBlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmZpbmRDdXN0b21FdmVudExpc3RlbmVycyhjdXN0b21FdmVudFR5cGUpLFxuICAgICAgICBkb25lID0gcmVtYWluaW5nQXJndW1lbnRzLnBvcCgpOyAgLy8vXG5cbiAgZm9yRWFjaChjdXN0b21FdmVudExpc3RlbmVycywgKGN1c3RvbUV2ZW50TGlzdGVuZXIsIG5leHQpID0+IHtcbiAgICBjb25zdCB7IGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQ6IGN1c3RvbUhhbmRsZXJFbGVtZW50IH0gPSBjdXN0b21FdmVudExpc3RlbmVyLFxuICAgICAgICAgIGRvbmUgPSBuZXh0OyAgLy8vXG5cbiAgICBjdXN0b21IYW5kbGVyLmNhbGwoY3VzdG9tSGFuZGxlckVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cywgZG9uZSk7XG4gIH0sIGRvbmUpO1xufVxuXG5mdW5jdGlvbiBhZGRDdXN0b21FdmVudExpc3RlbmVyKGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudExpc3RlbmVyID0gdGhpcy5jcmVhdGVDdXN0b21FdmVudExpc3RlbmVyKGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCk7XG5cbiAgaWYgKCF0aGlzLmN1c3RvbUV2ZW50TGlzdGVuZXJzKSB7XG4gICAgdGhpcy5jdXN0b21FdmVudExpc3RlbmVycyA9IFtdO1xuICB9XG5cbiAgdGhpcy5jdXN0b21FdmVudExpc3RlbmVycy5wdXNoKGN1c3RvbUV2ZW50TGlzdGVuZXIpO1xuXG4gIHJldHVybiBjdXN0b21FdmVudExpc3RlbmVyO1xufVxuXG5mdW5jdGlvbiByZW1vdmVDdXN0b21FdmVudExpc3RlbmVyKGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudExpc3RlbmVyID0gdGhpcy5maW5kQ3VzdG9tRXZlbnRMaXN0ZW5lcihjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpLFxuICAgICAgICBpbmRleCA9IHRoaXMuY3VzdG9tRXZlbnRMaXN0ZW5lcnMuaW5kZXhPZihjdXN0b21FdmVudExpc3RlbmVyKSxcbiAgICAgICAgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgdGhpcy5jdXN0b21FdmVudExpc3RlbmVycy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcblxuICBpZiAodGhpcy5jdXN0b21FdmVudExpc3RlbmVycy5sZW5ndGggPT09IDApIHtcbiAgICBkZWxldGUgdGhpcy5jdXN0b21FdmVudExpc3RlbmVycztcbiAgfVxuXG4gIHJldHVybiBjdXN0b21FdmVudExpc3RlbmVyO1xufVxuXG5mdW5jdGlvbiBmaW5kQ3VzdG9tRXZlbnRMaXN0ZW5lcihjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRMaXN0ZW5lciA9IHRoaXMuY3VzdG9tRXZlbnRMaXN0ZW5lcnMuZmluZCgoY3VzdG9tRXZlbnRMaXN0ZW5lcikgPT4ge1xuICAgIGlmICgoY3VzdG9tRXZlbnRMaXN0ZW5lci5lbGVtZW50ID09PSBlbGVtZW50KSAmJiAoY3VzdG9tRXZlbnRMaXN0ZW5lci5jdXN0b21IYW5kbGVyID09PSBjdXN0b21IYW5kbGVyKSAmJiAoY3VzdG9tRXZlbnRMaXN0ZW5lci5jdXN0b21FdmVudFR5cGUgPT09IGN1c3RvbUV2ZW50VHlwZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGN1c3RvbUV2ZW50TGlzdGVuZXI7XG59XG5cbmZ1bmN0aW9uIGZpbmRDdXN0b21FdmVudExpc3RlbmVycyhjdXN0b21FdmVudFR5cGUpIHtcbiAgY29uc3QgY3VzdG9tRXZlbnRMaXN0ZW5lcnMgPSBbXTtcblxuICBpZiAodGhpcy5jdXN0b21FdmVudExpc3RlbmVycykge1xuICAgIHRoaXMuY3VzdG9tRXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoY3VzdG9tRXZlbnRMaXN0ZW5lcikgPT4ge1xuICAgICAgY29uc3QgZm91bmQgPSAoY3VzdG9tRXZlbnRMaXN0ZW5lci5jdXN0b21FdmVudFR5cGUgPT09IGN1c3RvbUV2ZW50VHlwZSk7XG5cbiAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICBjdXN0b21FdmVudExpc3RlbmVycy5wdXNoKGN1c3RvbUV2ZW50TGlzdGVuZXIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGN1c3RvbUV2ZW50TGlzdGVuZXJzO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDdXN0b21FdmVudExpc3RlbmVyKGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBsZXQgY3VzdG9tRXZlbnRMaXN0ZW5lcjtcblxuICBjdXN0b21FdmVudExpc3RlbmVyID0gKCkgPT4ge307IC8vL1xuXG4gIE9iamVjdC5hc3NpZ24oY3VzdG9tRXZlbnRMaXN0ZW5lciwge1xuICAgIGVsZW1lbnQsXG4gICAgY3VzdG9tSGFuZGxlcixcbiAgICBjdXN0b21FdmVudFR5cGVcbiAgfSk7XG5cbiAgcmV0dXJuIGN1c3RvbUV2ZW50TGlzdGVuZXI7XG59XG5cbmNvbnN0IGN1c3RvbUV2ZW50TWl4aW5zID0ge1xuICBvbkN1c3RvbUV2ZW50LFxuICBvZmZDdXN0b21FdmVudCxcbiAgY2FsbEN1c3RvbUhhbmRsZXJzLFxuICBjYWxsQ3VzdG9tSGFuZGxlcnNBc3luYyxcbiAgYWRkQ3VzdG9tRXZlbnRMaXN0ZW5lcixcbiAgcmVtb3ZlQ3VzdG9tRXZlbnRMaXN0ZW5lcixcbiAgZmluZEN1c3RvbUV2ZW50TGlzdGVuZXIsXG4gIGZpbmRDdXN0b21FdmVudExpc3RlbmVycyxcbiAgY3JlYXRlQ3VzdG9tRXZlbnRMaXN0ZW5lclxufTtcblxuZXhwb3J0IGRlZmF1bHQgY3VzdG9tRXZlbnRNaXhpbnM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBPZmZzZXQgZnJvbSBcIi4vb2Zmc2V0XCI7XG5pbXBvcnQgQm91bmRzIGZyb20gXCIuL2JvdW5kc1wiO1xuaW1wb3J0IGpzeE1peGlucyBmcm9tIFwiLi9taXhpbnMvanN4XCI7XG5pbXBvcnQga2V5TWl4aW5zIGZyb20gXCIuL21peGlucy9rZXlcIjtcbmltcG9ydCBzdGF0ZU1peGlucyBmcm9tIFwiLi9taXhpbnMvc3RhdGVcIjtcbmltcG9ydCBldmVudE1peGlucyBmcm9tIFwiLi9taXhpbnMvZXZlbnRcIjtcbmltcG9ydCBtb3VzZU1peGlucyBmcm9tIFwiLi9taXhpbnMvbW91c2VcIjtcbmltcG9ydCBjbGlja01peGlucyBmcm9tIFwiLi9taXhpbnMvY2xpY2tcIjtcbmltcG9ydCB0b3VjaE1peGlucyBmcm9tIFwiLi9taXhpbnMvdG91Y2hcIjtcbmltcG9ydCBzY3JvbGxNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3Njcm9sbFwiO1xuaW1wb3J0IHJlc2l6ZU1peGlucyBmcm9tIFwiLi9taXhpbnMvcmVzaXplXCI7XG5pbXBvcnQgZWxlbWVudE1peGlucyBmcm9tIFwiLi9taXhpbnMvZWxlbWVudFwiO1xuaW1wb3J0IGZ1bGxTY3JlZW5NaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2Z1bGxTY3JlZW5cIjtcbmltcG9ydCBjdXN0b21FdmVudE1peGlucyBmcm9tIFwiLi9taXhpbnMvY3VzdG9tRXZlbnRcIjtcblxuaW1wb3J0IHsgY29tYmluZSB9IGZyb20gXCIuL3V0aWxpdGllcy9vYmplY3RcIjtcbmltcG9ydCB7IGlzU1ZHVGFnTmFtZSB9IGZyb20gXCIuL3V0aWxpdGllcy9uYW1lXCI7XG5pbXBvcnQgeyBmaXJzdCwgYXVnbWVudCB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgY29uc3RydWN0RWxlbWVudCwgZGVzdHJveUVsZW1lbnQsIG1vdW50RWxlbWVudCwgdW5tb3VudEVsZW1lbnQgfSBmcm9tIFwiLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgTk9ORSxcbiAgICAgICAgIEJMT0NLLFxuICAgICAgICAgV0lEVEgsXG4gICAgICAgICBTVFJJTkcsXG4gICAgICAgICBIRUlHSFQsXG4gICAgICAgICBESVNQTEFZLFxuICAgICAgICAgRElTQUJMRUQsXG4gICAgICAgICBFTVBUWV9TVFJJTkcsXG4gICAgICAgICBTVkdfTkFNRVNQQUNFX1VSSSxcbiAgICAgICAgIERFRkFVTFRfUFJPUEVSVElFUyxcbiAgICAgICAgIElHTk9SRURfUFJPUEVSVElFUyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IpIHtcbiAgICBpZiAoc2VsZWN0b3IgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPXRoaXMsICAvLy9cbiAgICAgICAgICAgIGRvbUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcblxuICAgICAgY29uc3RydWN0RWxlbWVudChlbGVtZW50LCBkb21FbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRPZmZzZXQoKSB7XG4gICAgY29uc3Qgb2Zmc2V0ID0gT2Zmc2V0LmZyb21ET01FbGVtZW50KHRoaXMuZG9tRWxlbWVudCk7XG5cbiAgICByZXR1cm4gb2Zmc2V0O1xuICB9XG5cbiAgZ2V0Qm91bmRzKCkge1xuICAgIGNvbnN0IGJvdW5kcyA9IEJvdW5kcy5mcm9tRE9NRWxlbWVudCh0aGlzLmRvbUVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIGJvdW5kcztcbiAgfVxuXG4gIGdldFdpZHRoKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50Lm9mZnNldFdpZHRoOyB9ICAvLy9cblxuICBnZXRIZWlnaHQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0SGVpZ2h0OyB9ICAvLy9cblxuICBnZXRJbm5lcldpZHRoKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsaWVudFdpZHRoOyB9IC8vL1xuXG4gIGdldElubmVySGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsaWVudEhlaWdodDsgfSAvLy9cblxuICBzZXRXaWR0aCh3aWR0aCkge1xuICAgIHdpZHRoID0gYCR7d2lkdGh9cHhgOyAvLy9cblxuICAgIHRoaXMuc3R5bGUoV0lEVEgsIHdpZHRoKTtcbiAgfVxuXG4gIHNldEhlaWdodChoZWlnaHQpIHtcbiAgICBoZWlnaHQgPSBgJHtoZWlnaHR9cHhgOyAvLy9cblxuICAgIHRoaXMuc3R5bGUoSEVJR0hULCBoZWlnaHQpO1xuICB9XG5cbiAgaGFzQXR0cmlidXRlKG5hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5oYXNBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBnZXRBdHRyaWJ1dGUobmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmdldEF0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIHNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkgeyB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTsgfVxuXG4gIGNsZWFyQXR0cmlidXRlKG5hbWUpIHsgdGhpcy5kb21FbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIGFkZEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkgeyB0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7IH1cblxuICByZW1vdmVBdHRyaWJ1dGUobmFtZSkgeyB0aGlzLmNsZWFyQXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgaGFzQ2xhc3MoY2xhc3NOYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7IH1cblxuICBzZXRDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTsgfVxuXG4gIGFkZENsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpOyB9XG5cbiAgcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7IH1cblxuICB0b2dnbGVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lKTsgfVxuXG4gIHJlbW92ZUFsbENsYXNzZXMoKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc05hbWUgPSBFTVBUWV9TVFJJTkc7IH1cblxuICBhZGRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQuYWRkKHRoaXMpOyB9XG5cbiAgYXBwZW5kVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LmFwcGVuZCh0aGlzKTsgfVxuXG4gIHByZXBlbmRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQucHJlcGVuZCh0aGlzKTsgfVxuXG4gIHJlbW92ZUZyb20ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LnJlbW92ZSh0aGlzKTsgfVxuXG4gIGluc2VydChlbGVtZW50KSB7IHRoaXMuYXBwZW5kKGVsZW1lbnQpOyB9XG5cbiAgYWRkKGVsZW1lbnQpIHsgdGhpcy5hcHBlbmQoZWxlbWVudCk7IH1cblxuICByZW1vdmUoZWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBlbGVtZW50LnJlbW92ZSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZSgpO1xuICB9XG5cbiAgcHJlcGVuZChlbGVtZW50KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGVsZW1lbnQuZG9tRWxlbWVudCxcbiAgICAgICAgICByZWZlcmVuY2VET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50LmZpcnN0Q2hpbGQ7ICAvLy9cblxuICAgIHRoaXMuZG9tRWxlbWVudC5pbnNlcnRCZWZvcmUoZG9tRWxlbWVudCwgcmVmZXJlbmNlRE9NRWxlbWVudCk7XG4gIH1cblxuICBhcHBlbmQoZWxlbWVudCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQsXG4gICAgICAgICAgcmVmZXJlbmNlRE9NRWxlbWVudCA9IG51bGw7IC8vL1xuXG4gICAgdGhpcy5kb21FbGVtZW50Lmluc2VydEJlZm9yZShkb21FbGVtZW50LCByZWZlcmVuY2VET01FbGVtZW50KTtcbiAgfVxuXG4gIGluc2VydEJlZm9yZShzaWJsaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50LnBhcmVudE5vZGUsIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZURPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50OyAgLy8vXG5cbiAgICBwYXJlbnRET01Ob2RlLmluc2VydEJlZm9yZSh0aGlzLmRvbUVsZW1lbnQsIHJlZmVyZW5jZURPTUVsZW1lbnQpO1xuICB9XG5cbiAgaW5zZXJ0QWZ0ZXIoc2libGluZ0VsZW1lbnQpIHtcbiAgICBjb25zdCBwYXJlbnRET01Ob2RlID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudC5wYXJlbnROb2RlLCAvLy9cbiAgICAgICAgICByZWZlcmVuY2VET01FbGVtZW50ID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudC5uZXh0U2libGluZzsgIC8vL1xuXG4gICAgcGFyZW50RE9NTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCByZWZlcmVuY2VET01FbGVtZW50KTtcbiAgfVxuXG4gIG1vdW50KGVsZW1lbnQpIHtcbiAgICB0aGlzLmFkZChlbGVtZW50KTtcblxuICAgIG1vdW50RWxlbWVudChlbGVtZW50KTtcbiAgfVxuXG4gIHVubW91bnQoZWxlbWVudCkge1xuICAgIHVubW91bnRFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgdGhpcy5yZW1vdmUoZWxlbWVudCk7XG4gIH1cblxuICBtb3VudEJlZm9yZShzaWJsaW5nRWxlbWVudCkge1xuICAgIHRoaXMuaW5zZXJ0QmVmb3JlKHNpYmxpbmdFbGVtZW50KTtcblxuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgIG1vdW50RWxlbWVudChlbGVtZW50KTtcbiAgfVxuXG4gIG1vdW50QWZ0ZXIoc2libGluZ0VsZW1lbnQpIHtcbiAgICB0aGlzLmluc2VydEFmdGVyKHNpYmxpbmdFbGVtZW50KTtcblxuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgIG1vdW50RWxlbWVudChlbGVtZW50KTtcbiAgfVxuXG4gIHNob3coZGlzcGxheVN0eWxlID0gQkxPQ0spIHsgdGhpcy5kaXNwbGF5KGRpc3BsYXlTdHlsZSk7IH1cblxuICBoaWRlKCkgeyB0aGlzLnN0eWxlKERJU1BMQVksIE5PTkUpOyB9XG5cbiAgZGlzcGxheShkaXNwbGF5KSB7IHRoaXMuc3R5bGUoRElTUExBWSwgZGlzcGxheSk7IH1cblxuICBlbmFibGUoKSB7IHRoaXMuY2xlYXJBdHRyaWJ1dGUoRElTQUJMRUQpOyB9XG5cbiAgZGlzYWJsZSgpIHsgdGhpcy5zZXRBdHRyaWJ1dGUoRElTQUJMRUQsIERJU0FCTEVEKTsgfVxuXG4gIGlzRW5hYmxlZCgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpLFxuICAgICAgICAgIGVuYWJsZWQgPSAhZGlzYWJsZWQ7XG5cbiAgICByZXR1cm4gZW5hYmxlZDtcbiAgfVxuXG4gIGlzRGlzYWJsZWQoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmhhc0F0dHJpYnV0ZShESVNBQkxFRCk7XG5cbiAgICByZXR1cm4gZGlzYWJsZWQ7XG4gIH1cbiAgXG4gIGlzRGlzcGxheWVkKCkge1xuICAgIGNvbnN0IGRpc3BsYXkgPSB0aGlzLmNzcyhESVNQTEFZKSxcbiAgICAgICAgICBkaXNwbGF5ZWQgPSAoZGlzcGxheSAhPT0gTk9ORSk7XG4gICAgXG4gICAgcmV0dXJuIGRpc3BsYXllZDtcbiAgfVxuXG4gIGlzU2hvd2luZygpIHtcbiAgICBjb25zdCBkaXNwbGF5ZWQgPSB0aGlzLmlzRGlzcGxheWVkKCksXG4gICAgICAgICAgc2hvd2luZyA9IGRpc3BsYXllZDsgIC8vL1xuXG4gICAgcmV0dXJuIHNob3dpbmc7XG4gIH1cblxuICBpc0hpZGRlbigpIHtcbiAgICBjb25zdCBkaXNwbGF5ZWQgPSB0aGlzLmlzRGlzcGxheWVkKCksXG4gICAgICAgICAgaGlkZGVuID0gIWRpc3BsYXllZDtcblxuICAgIHJldHVybiBoaWRkZW47XG4gIH1cblxuICBzdHlsZShuYW1lLCB2YWx1ZSA9IG51bGwpIHtcbiAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5zdHlsZVtuYW1lXSA9IHZhbHVlO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc3R5bGUgPSB0aGlzLmRvbUVsZW1lbnQuc3R5bGVbbmFtZV07XG5cbiAgICByZXR1cm4gc3R5bGU7XG4gIH1cblxuICBodG1sKGh0bWwgPSBudWxsKSB7XG4gICAgaWYgKGh0bWwgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGlubmVySFRNTCA9IGh0bWw7IC8vL1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIVE1MID0gaW5uZXJIVE1MXG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBpbm5lckhUTUwgPSB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIVE1MO1xuXG4gICAgaHRtbCA9IGlubmVySFRNTDsgLy8vXG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIGNzcyhjc3MgPSBudWxsKSB7XG4gICAgaWYgKGNzcyA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5kb21FbGVtZW50KSxcbiAgICAgICAgICAgIGNzcyA9IHt9O1xuXG4gICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY29tcHV0ZWRTdHlsZS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3QgZmlyc3RDb21wdXRlZFN0eWxlID0gZmlyc3RbY29tcHV0ZWRTdHlsZV0sXG4gICAgICAgICAgICAgIG5hbWUgPSBmaXJzdENvbXB1dGVkU3R5bGUsICAvLy9cbiAgICAgICAgICAgICAgdmFsdWUgPSBjb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUobmFtZSk7IC8vL1xuXG4gICAgICAgIGNzc1tuYW1lXSA9IHZhbHVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY3NzO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY3NzID09PSBTVFJJTkcpIHtcbiAgICAgIGxldCBuYW1lID0gY3NzOyAvLy9cblxuICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5kb21FbGVtZW50KSxcbiAgICAgICAgICAgIHZhbHVlID0gY29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpOyAvLy9cblxuICAgICAgY3NzID0gdmFsdWU7ICAvLy9cblxuICAgICAgcmV0dXJuIGNzcztcbiAgICB9XG5cbiAgICBjb25zdCBuYW1lcyA9IE9iamVjdC5rZXlzKGNzcyk7IC8vL1xuXG4gICAgbmFtZXMuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBjc3NbbmFtZV07XG5cbiAgICAgIHRoaXMuc3R5bGUobmFtZSwgdmFsdWUpO1xuICAgIH0pO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICBkZXN0cm95RWxlbWVudChlbGVtZW50KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHsgdGFnTmFtZSB9ID0gQ2xhc3MsXG4gICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnRGcm9tVGFnTmFtZShDbGFzcywgdGFnTmFtZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSxcbiAgICAgICAgICBkZWZhdWx0UHJvcGVydGllcyA9IGRlZmF1bHRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzKSxcbiAgICAgICAgICBpZ25vcmVkUHJvcGVydGllcyA9IGlnbm9yZWRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzKTtcblxuICAgIGVsZW1lbnQuYXBwbHlQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGRlZmF1bHRQcm9wZXJ0aWVzLCBpZ25vcmVkUHJvcGVydGllcyk7XG5cbiAgICBlbGVtZW50LmluaXRpYWxpc2UgJiYgZWxlbWVudC5pbml0aWFsaXNlKCk7IC8vL1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVRhZ05hbWUodGFnTmFtZSwgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgQ2xhc3MgPSBFbGVtZW50LCAgLy8vXG4gICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnRGcm9tVGFnTmFtZShDbGFzcywgdGFnTmFtZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSxcbiAgICAgICAgICBkZWZhdWx0UHJvcGVydGllcyA9IHt9LCAvLy9cbiAgICAgICAgICBpZ25vcmVkUHJvcGVydGllcyA9IFtdOyAvLy9cblxuICAgIGVsZW1lbnQuYXBwbHlQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGRlZmF1bHRQcm9wZXJ0aWVzLCBpZ25vcmVkUHJvcGVydGllcyk7XG5cbiAgICBlbGVtZW50LmluaXRpYWxpc2UgJiYgZWxlbWVudC5pbml0aWFsaXNlKCk7IC8vL1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwganN4TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGtleU1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBtb3VzZU1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBjbGlja01peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBzdGF0ZU1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBldmVudE1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCB0b3VjaE1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBzY3JvbGxNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgcmVzaXplTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGVsZW1lbnRNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgZnVsbFNjcmVlbk1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBjdXN0b21FdmVudE1peGlucyk7XG5cbmZ1bmN0aW9uIGVsZW1lbnRGcm9tVGFnTmFtZShDbGFzcywgdGFnTmFtZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gIGNvbnN0IHNlbGVjdG9yID0gbnVsbCxcbiAgICAgICAgZWxlbWVudCA9IG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuY2FsbChDbGFzcywgbnVsbCwgc2VsZWN0b3IsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykpLFxuICAgICAgICBkb21FbGVtZW50ID0gaXNTVkdUYWdOYW1lKHRhZ05hbWUpID9cbiAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFNWR19OQU1FU1BBQ0VfVVJJLCB0YWdOYW1lKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcblxuICBjb25zdHJ1Y3RFbGVtZW50KGVsZW1lbnQsIGRvbUVsZW1lbnQpO1xuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0UHJvcGVydGllc0Zyb21DbGFzcyhDbGFzcywgZGVmYXVsdFByb3BlcnRpZXMgPSB7fSkge1xuICBpZiAoQ2xhc3MuaGFzT3duUHJvcGVydHkoREVGQVVMVF9QUk9QRVJUSUVTKSkge1xuICAgIGRlZmF1bHRQcm9wZXJ0aWVzID0gY29tYmluZShkZWZhdWx0UHJvcGVydGllcywgQ2xhc3NbREVGQVVMVF9QUk9QRVJUSUVTXSk7XG4gIH1cblxuICBjb25zdCBzdXBlckNsYXNzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKENsYXNzKTsgIC8vL1xuXG4gIGlmIChzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgZGVmYXVsdFByb3BlcnRpZXMgPSBkZWZhdWx0UHJvcGVydGllc0Zyb21DbGFzcyhzdXBlckNsYXNzLCBkZWZhdWx0UHJvcGVydGllcyk7XG4gIH1cblxuICByZXR1cm4gZGVmYXVsdFByb3BlcnRpZXM7XG59XG5cbmZ1bmN0aW9uIGlnbm9yZWRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzLCBpZ25vcmVkUHJvcGVydGllcyA9IFtdKSB7XG4gIGlmIChDbGFzcy5oYXNPd25Qcm9wZXJ0eShJR05PUkVEX1BST1BFUlRJRVMpKSB7XG4gICAgaWdub3JlZFByb3BlcnRpZXMgPSBhdWdtZW50KGlnbm9yZWRQcm9wZXJ0aWVzLCBDbGFzc1tJR05PUkVEX1BST1BFUlRJRVNdLCAoaWdub3JlZFByb3BlcnR5KSA9PiB7XG4gICAgICBpZiAoIWlnbm9yZWRQcm9wZXJ0aWVzLmluY2x1ZGVzKGlnbm9yZWRQcm9wZXJ0eSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBzdXBlckNsYXNzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKENsYXNzKTtcblxuICBpZiAoc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIGlnbm9yZWRQcm9wZXJ0aWVzID0gaWdub3JlZFByb3BlcnRpZXNGcm9tQ2xhc3Moc3VwZXJDbGFzcywgaWdub3JlZFByb3BlcnRpZXMpO1xuICB9XG5cbiAgcmV0dXJuIGlnbm9yZWRQcm9wZXJ0aWVzO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi9lbGVtZW50XCI7XG5cbmltcG9ydCB7IGZsYXR0ZW4gfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IFNUUklORywgRlVOQ1RJT04gfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHJlbW92ZUZhbHNleUVsZW1lbnRzLCByZXBsYWNlU3RyaW5nc1dpdGhUZXh0RWxlbWVudHMgfSBmcm9tIFwiLi91dGlsaXRpZXMvZWxlbWVudHNcIjtcblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudChmaXJzdEFyZ3VtZW50LCBwcm9wZXJ0aWVzLCAuLi5jaGlsZEVsZW1lbnRzKSB7XG4gIGxldCBlbGVtZW50ID0gbnVsbDtcblxuICBpZiAoZmlyc3RBcmd1bWVudCkge1xuICAgIGNoaWxkRWxlbWVudHMgPSBzYW5pdGlzZUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cyk7XG5cbiAgICBwcm9wZXJ0aWVzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjaGlsZEVsZW1lbnRzXG4gICAgfSwgcHJvcGVydGllcyk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAoaXNTdWJjbGFzc09mKGZpcnN0QXJndW1lbnQsIEVsZW1lbnQpKSB7XG4gICAgICBjb25zdCBDbGFzcyA9IGZpcnN0QXJndW1lbnQ7ICAvLy9cblxuICAgICAgZWxlbWVudCA9IENsYXNzLmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gU1RSSU5HKSB7XG4gICAgICBjb25zdCB0YWdOYW1lID0gZmlyc3RBcmd1bWVudDsgLy8vXG5cbiAgICAgIGVsZW1lbnQgPSBFbGVtZW50LmZyb21UYWdOYW1lKHRhZ05hbWUsIHByb3BlcnRpZXMpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09IEZVTkNUSU9OKSB7XG4gICAgICBjb25zdCBlbGVtZW50RnVuY3Rpb24gPSBmaXJzdEFyZ3VtZW50OyAgLy8vXG5cbiAgICAgIGVsZW1lbnQgPSBlbGVtZW50RnVuY3Rpb24ocHJvcGVydGllcyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmNvbnN0IFJlYWN0ID0ge1xuICBjcmVhdGVFbGVtZW50XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdDtcblxuZnVuY3Rpb24gc2FuaXRpc2VDaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpIHtcbiAgY2hpbGRFbGVtZW50cyA9IGZsYXR0ZW4oY2hpbGRFbGVtZW50cyk7IC8vL1xuXG4gIGNoaWxkRWxlbWVudHMgPSByZW1vdmVGYWxzZXlFbGVtZW50cyhjaGlsZEVsZW1lbnRzKTsgIC8vL1xuXG4gIGNoaWxkRWxlbWVudHMgPSByZXBsYWNlU3RyaW5nc1dpdGhUZXh0RWxlbWVudHMoY2hpbGRFbGVtZW50cyk7ICAvLy9cblxuICByZXR1cm4gY2hpbGRFbGVtZW50cztcbn1cblxuXG5mdW5jdGlvbiBpc1N1YmNsYXNzT2YoYXJndW1lbnQsIENsYXNzKSB7XG4gIGNvbnN0IHN1YmNsYXNzT2YgPSAoYXJndW1lbnQucHJvdG90eXBlIGluc3RhbmNlb2YgQ2xhc3MpO1xuXG4gIHJldHVybiBzdWJjbGFzc09mO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgTEVGVF9NT1VTRV9CVVRUT04gPSAwO1xuZXhwb3J0IGNvbnN0IFJJR0hUX01PVVNFX0JVVFRPTiA9IDI7XG5leHBvcnQgY29uc3QgTUlERExFX01PVVNFX0JVVFRPTiA9IDE7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgTEVGVF9NT1VTRV9CVVRUT04sXG4gIFJJR0hUX01PVVNFX0JVVFRPTixcbiAgTUlERExFX01PVVNFX0JVVFRPTlxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgSU5QVVRfRVZFTlRfVFlQRSwgQ0hBTkdFX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi4vZXZlbnRUeXBlc1wiO1xuXG5mdW5jdGlvbiBvbklucHV0KGlucHV0SGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uRXZlbnQoSU5QVVRfRVZFTlRfVFlQRSwgaW5wdXRIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvZmZJbnB1dChpbnB1dEhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vZmZFdmVudChJTlBVVF9FVkVOVF9UWVBFLCBpbnB1dEhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9uQ2hhbmdlKGNoYW5nZUhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vbkV2ZW50KENIQU5HRV9FVkVOVF9UWVBFLCBjaGFuZ2VIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvZmZDaGFuZ2UoY2hhbmdlSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZkV2ZW50KENIQU5HRV9FVkVOVF9UWVBFLCBjaGFuZ2VIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBnZXRWYWx1ZSgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC52YWx1ZTsgfVxuXG5mdW5jdGlvbiBzZXRWYWx1ZSh2YWx1ZSkgeyB0aGlzLmRvbUVsZW1lbnQudmFsdWUgPSB2YWx1ZTsgfVxuXG5mdW5jdGlvbiBpc1JlYWRPbmx5KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnJlYWRPbmx5OyB9XG5cbmZ1bmN0aW9uIHNldFJlYWRPbmx5KHJlYWRPbmx5KSB7IHRoaXMuZG9tRWxlbWVudC5yZWFkT25seSA9IHJlYWRPbmx5OyB9XG5cbmNvbnN0IGlucHV0TWl4aW5zID0ge1xuICBvbklucHV0LFxuICBvZmZJbnB1dCxcbiAgb25DaGFuZ2UsXG4gIG9mZkNoYW5nZSxcbiAgZ2V0VmFsdWUsXG4gIHNldFZhbHVlLFxuICBpc1JlYWRPbmx5LFxuICBzZXRSZWFkT25seVxufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5wdXRNaXhpbnM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEJMVVJfRVZFTlRfVFlQRSwgRk9DVVNfRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9ldmVudFR5cGVzXCI7XG5cbmZ1bmN0aW9uIG9uQmx1cihibHVySGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uRXZlbnQoQkxVUl9FVkVOVF9UWVBFLCBibHVySGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb2ZmQmx1cihibHVySGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZkV2ZW50KEJMVVJfRVZFTlRfVFlQRSwgYmx1ckhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9uRm9jdXMoZm9jdXNIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub25FdmVudChGT0NVU19FVkVOVF9UWVBFLCBmb2N1c0hhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9mZkZvY3VzKGZvY3VzSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZkV2ZW50KEZPQ1VTX0VWRU5UX1RZUEUsIGZvY3VzSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gYmx1cigpIHsgdGhpcy5kb21FbGVtZW50LmJsdXIoKTsgfVxuXG5mdW5jdGlvbiBmb2N1cygpIHsgdGhpcy5kb21FbGVtZW50LmZvY3VzKCk7IH1cblxuZnVuY3Rpb24gaGFzRm9jdXMoKSB7XG4gIGNvbnN0IGZvY3VzID0gKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IHRoaXMuZG9tRWxlbWVudCk7ICAvLy9cblxuICByZXR1cm4gZm9jdXM7XG59XG5cbmNvbnN0IGZvY3VzTWl4aW5zID0ge1xuICBvbkJsdXIsXG4gIG9mZkJsdXIsXG4gIG9uRm9jdXMsXG4gIG9mZkZvY3VzLFxuICBibHVyLFxuICBmb2N1cyxcbiAgaGFzRm9jdXNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvY3VzTWl4aW5zO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDVVRfRVZFTlRfVFlQRSwgQ09QWV9FVkVOVF9UWVBFLCBQQVNURV9FVkVOVF9UWVBFIH0gZnJvbSBcIi4uL2V2ZW50VHlwZXNcIjtcblxuZnVuY3Rpb24gb25DdXQoY3V0SGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uRXZlbnQoQ1VUX0VWRU5UX1RZUEUsIGN1dEhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9mZkN1dChjdXRIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmRXZlbnQoQ1VUX0VWRU5UX1RZUEUsIGN1dEhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9uQ29weShjb3B5SGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uRXZlbnQoQ09QWV9FVkVOVF9UWVBFLCBjb3B5SGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb2ZmQ29weShjb3B5SGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZkV2ZW50KENPUFlfRVZFTlRfVFlQRSwgY29weUhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9uUGFzdGUocGFzdGVIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub25FdmVudChQQVNURV9FVkVOVF9UWVBFLCBwYXN0ZUhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9mZlBhc3RlKHBhc3RlSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZkV2ZW50KFBBU1RFX0VWRU5UX1RZUEUsIHBhc3RlSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gZ2V0U2VsZWN0aW9uU3RhcnQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQ7IH1cblxuZnVuY3Rpb24gZ2V0U2VsZWN0aW9uRW5kKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnNlbGVjdGlvbkVuZDsgfVxuXG5mdW5jdGlvbiBzZXRTZWxlY3Rpb25TdGFydChzZWxlY3Rpb25TdGFydCkgeyB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgPSBzZWxlY3Rpb25TdGFydDsgfVxuXG5mdW5jdGlvbiBzZXRTZWxlY3Rpb25FbmQoc2VsZWN0aW9uRW5kKSB7IHRoaXMuZG9tRWxlbWVudC5zZWxlY3Rpb25FbmQgPSBzZWxlY3Rpb25FbmQ7IH1cblxuZnVuY3Rpb24gc2VsZWN0KCkgeyB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0KCk7IH1cblxuY29uc3Qgc2VsZWN0aW9uTWl4aW5zID0ge1xuICBvbkN1dCxcbiAgb2ZmQ3V0LFxuICBvbkNvcHksXG4gIG9mZkNvcHksXG4gIG9uUGFzdGUsXG4gIG9mZlBhc3RlLFxuICBnZXRTZWxlY3Rpb25TdGFydCxcbiAgZ2V0U2VsZWN0aW9uRW5kLFxuICBzZXRTZWxlY3Rpb25TdGFydCxcbiAgc2V0U2VsZWN0aW9uRW5kLFxuICBzZWxlY3Rcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNlbGVjdGlvbk1peGlucztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGtleU1peGlucyBmcm9tIFwiLi9taXhpbnMva2V5XCI7XG5pbXBvcnQgZXZlbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2V2ZW50XCI7XG5pbXBvcnQgbW91c2VNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL21vdXNlXCI7XG5pbXBvcnQgY2xpY2tNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2NsaWNrXCI7XG5pbXBvcnQgc2VsZWN0aW9uTWl4aW5zIGZyb20gXCIuL21peGlucy9zZWxlY3Rpb25cIjtcblxuaW1wb3J0IHsgVU5ERUZJTkVEIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBTRUxFQ1RJT05DSEFOR0VfRVZFTlRfVFlQRSB9IGZyb20gXCIuL2V2ZW50VHlwZXNcIjtcblxuY2xhc3MgRG9jdW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb2N1bWVudDsgLy8vXG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRJbm5lcldpZHRoKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsaWVudFdpZHRoOyB9IC8vL1xuXG4gIGdldElubmVySGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsaWVudEhlaWdodDsgfSAvLy9cblxuICBnZXRTZWxlY3Rpb24oKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuZ2V0U2VsZWN0aW9uKCk7IH1cblxuICBjcmVhdGVSYW5nZSgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jcmVhdGVSYW5nZSgpOyB9XG5cbiAgY3JlYXRlVGV4dE5vZGUoZGF0YSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNyZWF0ZVRleHROb2RlKGRhdGEpOyB9XG5cbiAgb25TZWxlY3Rpb25DaGFuZ2Uoc2VsZWN0aW9uQ2hhbmdlSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uRXZlbnQoU0VMRUNUSU9OQ0hBTkdFX0VWRU5UX1RZUEUsIHNlbGVjdGlvbkNoYW5nZUhhbmRsZXIsIGVsZW1lbnQpOyB9IC8vL1xuXG4gIG9mZlNlbGVjdGlvbkNoYW5nZShzZWxlY3Rpb25DaGFuZ2VIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmRXZlbnQoU0VMRUNUSU9OQ0hBTkdFX0VWRU5UX1RZUEUsIHNlbGVjdGlvbkNoYW5nZUhhbmRsZXIsIGVsZW1lbnQpOyB9IC8vL1xuXG4gIGNyZWF0ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KSB7XG4gICAgbGV0IGV2ZW50TGlzdGVuZXI7XG5cbiAgICBjb25zdCBoYW5kbGVyRWxlbWVudCA9IGVsZW1lbnQ7IC8vL1xuXG4gICAgZXZlbnRMaXN0ZW5lciA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50VHlwZSA9PT0gU0VMRUNUSU9OQ0hBTkdFX0VWRU5UX1RZUEUpIHtcbiAgICAgICAgY29uc3QgeyBkb21FbGVtZW50IH0gPSBoYW5kbGVyRWxlbWVudCxcbiAgICAgICAgICAgICAgeyBjdXJyZW50VGFyZ2V0IH0gPSBldmVudCxcbiAgICAgICAgICAgICAgeyBhY3RpdmVFbGVtZW50IH0gPSBjdXJyZW50VGFyZ2V0O1xuXG4gICAgICAgIGlmIChkb21FbGVtZW50ICE9PSBhY3RpdmVFbGVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgICAgaGFuZGxlci5jYWxsKGhhbmRsZXJFbGVtZW50LCBldmVudCwgZWxlbWVudCk7XG4gICAgfTtcblxuICAgIE9iamVjdC5hc3NpZ24oZXZlbnRMaXN0ZW5lciwge1xuICAgICAgZWxlbWVudCxcbiAgICAgIGhhbmRsZXIsXG4gICAgICBldmVudFR5cGVcbiAgICB9KTtcblxuICAgIHJldHVybiBldmVudExpc3RlbmVyO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oRG9jdW1lbnQucHJvdG90eXBlLCBrZXlNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihEb2N1bWVudC5wcm90b3R5cGUsIGV2ZW50TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRG9jdW1lbnQucHJvdG90eXBlLCBtb3VzZU1peGlucyk7XG5PYmplY3QuYXNzaWduKERvY3VtZW50LnByb3RvdHlwZSwgY2xpY2tNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihEb2N1bWVudC5wcm90b3R5cGUsIHNlbGVjdGlvbk1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0ICh0eXBlb2YgZG9jdW1lbnQgPT09IFVOREVGSU5FRCkgPyB1bmRlZmluZWQgOiBuZXcgRG9jdW1lbnQoKTsgIC8vL1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQga2V5TWl4aW5zIGZyb20gXCIuL21peGlucy9rZXlcIjtcbmltcG9ydCBldmVudE1peGlucyBmcm9tIFwiLi9taXhpbnMvZXZlbnRcIjtcbmltcG9ydCBtb3VzZU1peGlucyBmcm9tIFwiLi9taXhpbnMvbW91c2VcIjtcbmltcG9ydCBjbGlja01peGlucyBmcm9tIFwiLi9taXhpbnMvY2xpY2tcIjtcbmltcG9ydCBmb2N1c01peGlucyBmcm9tIFwiLi9taXhpbnMvZm9jdXNcIjtcblxuaW1wb3J0IHsgVU5ERUZJTkVEIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBSRVNJWkVfRVZFTlRfVFlQRSB9IGZyb20gXCIuL2V2ZW50VHlwZXNcIjtcbmltcG9ydCB7IG9uU2Nyb2xsLCBvZmZTY3JvbGwgfSBmcm9tIFwiLi9taXhpbnMvc2Nyb2xsXCI7XG5cbmNsYXNzIFdpbmRvdyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IHdpbmRvdzsgLy8vXG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBhc3NpZ24oLi4uc291cmNlcykge1xuICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuZG9tRWxlbWVudDsgLy8vXG5cbiAgICBPYmplY3QuYXNzaWduKHRhcmdldCwgLi4uc291cmNlcyk7XG4gIH1cblxuICByZWxvYWQoKSB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpOyAvLy9cbiAgfVxuXG4gIGdldFdpZHRoKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmlubmVyV2lkdGg7IH0gLy8vXG4gIFxuICBnZXRIZWlnaHQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIZWlnaHQ7IH0gLy8vXG5cbiAgZ2V0U2Nyb2xsVG9wKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnBhZ2VZT2Zmc2V0OyB9ICAvLy9cblxuICBnZXRTY3JvbGxMZWZ0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnBhZ2VYT2Zmc2V0OyB9IC8vL1xuXG4gIGdldFNlbGVjdGlvbigpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5nZXRTZWxlY3Rpb24oKTsgfVxuXG4gIG9uUmVzaXplKHJlc2l6ZUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBSRVNJWkVfRVZFTlRfVFlQRSxcbiAgICAgICAgICBldmVudExpc3RlbmVyID0gdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgcmVzaXplSGFuZGxlciwgZWxlbWVudCk7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGV2ZW50TGlzdGVuZXIpO1xuICB9XG5cbiAgb2ZmUmVzaXplKHJlc2l6ZUhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBldmVudFR5cGUgPSBSRVNJWkVfRVZFTlRfVFlQRSxcbiAgICAgICAgICBldmVudExpc3RlbmVyID0gdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgcmVzaXplSGFuZGxlciwgZWxlbWVudCk7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGV2ZW50TGlzdGVuZXIpO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwga2V5TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwgZXZlbnRNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihXaW5kb3cucHJvdG90eXBlLCBtb3VzZU1peGlucyk7XG5PYmplY3QuYXNzaWduKFdpbmRvdy5wcm90b3R5cGUsIGNsaWNrTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwgZm9jdXNNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihXaW5kb3cucHJvdG90eXBlLCB7XG4gIG9uU2Nyb2xsLFxuICBvZmZTY3JvbGxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCAodHlwZW9mIHdpbmRvdyA9PT0gVU5ERUZJTkVEKSA/IHVuZGVmaW5lZCA6IG5ldyBXaW5kb3coKTsgIC8vL1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBCT0RZIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb2R5IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yID0gQk9EWSkge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJib2R5XCI7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgZm9jdXNNaXhpbnMgZnJvbSBcIi4uL21peGlucy9mb2N1c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5rIGV4dGVuZHMgRWxlbWVudCB7XG4gIGdldEhSZWYoKSB7IHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZShcImhyZWZcIik7IH1cblxuICBzZXRIUmVmKGhyZWYpIHsgcmV0dXJuIHRoaXMuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBocmVmKTsgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJhXCI7XG59XG5cbk9iamVjdC5hc3NpZ24oTGluay5wcm90b3R5cGUsIGZvY3VzTWl4aW5zKTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcbmltcG9ydCBpbnB1dE1peGlucyBmcm9tIFwiLi4vbWl4aW5zL2lucHV0XCI7XG5pbXBvcnQgZm9jdXNNaXhpbnMgZnJvbSBcIi4uL21peGlucy9mb2N1c1wiO1xuaW1wb3J0IHNlbGVjdGlvbk1peGlucyBmcm9tIFwiLi4vbWl4aW5zL3NlbGVjdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dCBleHRlbmRzIEVsZW1lbnQge1xuICBzdGF0aWMgdGFnTmFtZSA9IFwiaW5wdXRcIjtcbn1cblxuT2JqZWN0LmFzc2lnbihJbnB1dC5wcm90b3R5cGUsIGlucHV0TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oSW5wdXQucHJvdG90eXBlLCBmb2N1c01peGlucyk7XG5PYmplY3QuYXNzaWduKElucHV0LnByb3RvdHlwZSwgc2VsZWN0aW9uTWl4aW5zKTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcbmltcG9ydCBmb2N1c01peGlucyBmcm9tIFwiLi4vbWl4aW5zL2ZvY3VzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIEVsZW1lbnQge1xuICBzdGF0aWMgdGFnTmFtZSA9IFwiYnV0dG9uXCI7XG59XG5cbk9iamVjdC5hc3NpZ24oQnV0dG9uLnByb3RvdHlwZSwgZm9jdXNNaXhpbnMpO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IGlucHV0TWl4aW5zIGZyb20gXCIuLi9taXhpbnMvaW5wdXRcIjtcbmltcG9ydCBmb2N1c01peGlucyBmcm9tIFwiLi4vbWl4aW5zL2ZvY3VzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdCBleHRlbmRzIEVsZW1lbnQge1xuICBzdGF0aWMgdGFnTmFtZSA9IFwic2VsZWN0XCI7XG59XG5cbk9iamVjdC5hc3NpZ24oU2VsZWN0LnByb3RvdHlwZSwgaW5wdXRNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihTZWxlY3QucHJvdG90eXBlLCBmb2N1c01peGlucyk7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgaW5wdXRNaXhpbnMgZnJvbSBcIi4uL21peGlucy9pbnB1dFwiO1xuaW1wb3J0IGZvY3VzTWl4aW5zIGZyb20gXCIuLi9taXhpbnMvZm9jdXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hlY2tib3ggZXh0ZW5kcyBFbGVtZW50IHtcbiAgaXNDaGVja2VkKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNoZWNrZWQ7IH1cblxuICBjaGVjayhjaGVja2VkID0gdHJ1ZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2hlY2tlZCA9IGNoZWNrZWQ7IH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiaW5wdXRcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgdHlwZTogXCJjaGVja2JveFwiXG4gIH07XG59XG5cbk9iamVjdC5hc3NpZ24oQ2hlY2tib3gucHJvdG90eXBlLCBpbnB1dE1peGlucyk7XG5PYmplY3QuYXNzaWduKENoZWNrYm94LnByb3RvdHlwZSwgZm9jdXNNaXhpbnMpO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IGlucHV0TWl4aW5zIGZyb20gXCIuLi9taXhpbnMvaW5wdXRcIjtcbmltcG9ydCBmb2N1c01peGlucyBmcm9tIFwiLi4vbWl4aW5zL2ZvY3VzXCI7XG5pbXBvcnQgc2VsZWN0aW9uTWl4aW5zIGZyb20gXCIuLi9taXhpbnMvc2VsZWN0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRhcmVhIGV4dGVuZHMgRWxlbWVudCB7XG4gIHN0YXRpYyB0YWdOYW1lID0gXCJ0ZXh0YXJlYVwiO1xufVxuXG5PYmplY3QuYXNzaWduKFRleHRhcmVhLnByb3RvdHlwZSwgaW5wdXRNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihUZXh0YXJlYS5wcm90b3R5cGUsIGZvY3VzTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oVGV4dGFyZWEucHJvdG90eXBlLCBzZWxlY3Rpb25NaXhpbnMpO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIFJlYWN0IH0gZnJvbSBcIi4vcmVhY3RcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQm91bmRzIH0gZnJvbSBcIi4vYm91bmRzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE9mZnNldCB9IGZyb20gXCIuL29mZnNldFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBldmVudFR5cGVzIH0gZnJvbSBcIi4vZXZlbnRUeXBlc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBtb3VzZUJ1dHRvbnMgfSBmcm9tIFwiLi9tb3VzZUJ1dHRvbnNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZWxlbWVudFV0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9lbGVtZW50XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGlucHV0TWl4aW5zIH0gZnJvbSBcIi4vbWl4aW5zL2lucHV0XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGZvY3VzTWl4aW5zIH0gZnJvbSBcIi4vbWl4aW5zL2ZvY3VzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHNlbGVjdGlvbk1peGlucyB9IGZyb20gXCIuL21peGlucy9zZWxlY3Rpb25cIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY3VzdG9tRXZlbnRNaXhpbnMgfSBmcm9tIFwiLi9taXhpbnMvY3VzdG9tRXZlbnRcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRWxlbWVudCB9IGZyb20gXCIuL2VsZW1lbnRcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVGV4dEVsZW1lbnQgfSBmcm9tIFwiLi90ZXh0RWxlbWVudFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBkb2N1bWVudCB9IGZyb20gXCIuL2RvY3VtZW50XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpbmRvdyB9IGZyb20gXCIuL3dpbmRvd1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBCb2R5IH0gZnJvbSBcIi4vZWxlbWVudC9ib2R5XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIExpbmsgfSBmcm9tIFwiLi9lbGVtZW50L2xpbmtcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSW5wdXQgfSBmcm9tIFwiLi9lbGVtZW50L2lucHV0XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEJ1dHRvbiB9IGZyb20gXCIuL2VsZW1lbnQvYnV0dG9uXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlbGVjdCB9IGZyb20gXCIuL2VsZW1lbnQvc2VsZWN0XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENoZWNrYm94IH0gZnJvbSBcIi4vZWxlbWVudC9jaGVja2JveFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUZXh0YXJlYSB9IGZyb20gXCIuL2VsZW1lbnQvdGV4dGFyZWFcIjtcblxuXG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcImVhc3lcIjtcblxuT2JqZWN0LmFzc2lnbihnbG9iYWxUaGlzLCB7XG4gIFJlYWN0XG59KTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFwiLi9qdXh0YXBvc2VcIjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgY29udHJvbGxlciA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBjb250cm9sbGVyO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgRVJST1JfREVMQVkgPSAxMDAwO1xuZXhwb3J0IGNvbnN0IEVNUFRZX1NUUklORyA9IFwiXCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IElucHV0RWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFzc3dvcmRJbnB1dCBleHRlbmRzIElucHV0RWxlbWVudCB7XG4gIGdldFBhc3N3b3JkKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIHBhc3N3b3JkID0gdmFsdWU7IC8vL1xuXG4gICAgcmV0dXJuIHBhc3N3b3JkO1xuICB9XG5cbiAgY2xlYXJQYXNzd29yZCgpIHtcbiAgICBjb25zdCBwYXNzd29yZCA9IEVNUFRZX1NUUklORyxcbiAgICAgICAgICB2YWx1ZSA9IHBhc3N3b3JkOyAvLy9cblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcblx0ICBjb25zdCBnZXRQYXNzd29yZCA9IHRoaXMuZ2V0UGFzc3dvcmQuYmluZCh0aGlzKSxcblx0XHRcdFx0ICBjbGVhclBhc3N3b3JkID0gdGhpcy5jbGVhclBhc3N3b3JkLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldFBhc3N3b3JkLFxuICAgICAgY2xlYXJQYXNzd29yZFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImlucHV0XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIHR5cGU6IFwicGFzc3dvcmRcIlxuICB9O1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HLCBFUlJPUl9ERUxBWSB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmFsaWRhdGlvbkVycm9yUGFyYWdyYXBoIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yLCB0aW1lb3V0KSB7XG4gICAgc3VwZXIoc2VsZWN0b3IpO1xuXG4gICAgdGhpcy50aW1lb3V0ID0gdGltZW91dDtcbiAgfVxuXG4gIGNsZWFyVmFsaWRhdGlvbkVycm9yKCkge1xuICAgIGNvbnN0IGh0bWwgPSBFTVBUWV9TVFJJTkc7XG5cbiAgICB0aGlzLmh0bWwoaHRtbCk7XG4gIH1cblxuICBzaG93VmFsaWRhdGlvbkVycm9yKHZhbGlkYXRpb25FcnJvcikge1xuICAgIGNvbnN0IGh0bWwgPSB2YWxpZGF0aW9uRXJyb3I7IC8vL1xuXG4gICAgdGhpcy5odG1sKGh0bWwpO1xuXG4gICAgaWYgKHRoaXMudGltZW91dCAhPT0gbnVsbCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgfVxuXG4gICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnRpbWVtb3V0ID0gbnVsbDtcblxuICAgICAgdGhpcy5jbGVhclZhbGlkYXRpb25FcnJvcigpO1xuICAgIH0sIEVSUk9SX0RFTEFZKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgcmV0dXJuICh7XG4gICAgICBzaG93VmFsaWRhdGlvbkVycm9yOiB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3IuYmluZCh0aGlzKVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcInBcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZhbGlkYXRpb24gZXJyb3JcIlxuICB9O1xuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHRpbWVvdXQgPSBudWxsLFxuICAgICAgICAgIHZhbGlkYXRpb25FcnJvclBhcmFncmFwaCA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCB0aW1lb3V0LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHZhbGlkYXRpb25FcnJvclBhcmFncmFwaDtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50LCBCdXR0b24gfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgY29udHJvbGxlciBmcm9tIFwiLi4vLi4vY29udHJvbGxlclwiO1xuaW1wb3J0IFBhc3N3b3JkSW5wdXQgZnJvbSBcIi4uL2lucHV0L3Bhc3N3b3JkXCI7XG5pbXBvcnQgVmFsaWRhdGlvbkVycm9yUGFyYWdyYXBoIGZyb20gXCIuLi9wYXJhZ3JhcGgvdmFsaWRhdGlvbkVycm9yXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFzc3dvcmRGb3JtIGV4dGVuZHMgRWxlbWVudCB7XG4gIHZhbGlkYXRlQW5kU3VibWl0Rm9ybSgpIHtcbiAgICBjb25zdCBwYXNzd29yZFZhbGlkID0gdGhpcy52YWxpZGF0ZUZvcm0oKTtcblxuICAgIGlmICghcGFzc3dvcmRWYWxpZCkge1xuICAgICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9yKFwiVGhlIHBhc3N3b3JkIGlzIGludmFsaWRcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3VibWl0Rm9ybSgpO1xuICAgIH1cbiAgfVxuXG4gIHZhbGlkYXRlRm9ybSgpIHtcbiAgICBjb25zdCBwYXNzd29yZCA9IHRoaXMuZ2V0UGFzc3dvcmQoKSxcbiAgICAgICAgICBwYXNzd29yZFZhbGlkID0gaXNQYXNzd29yZFZhbGlkKHBhc3N3b3JkKTtcblxuICAgIHJldHVybiBwYXNzd29yZFZhbGlkO1xuICB9XG5cbiAgc3VibWl0Rm9ybSgpIHtcbiAgICBjb25zdCBwYXNzd29yZCA9IHRoaXMuZ2V0UGFzc3dvcmQoKTtcblxuICAgIGNvbnRyb2xsZXIuc2V0UGFzc3dvcmQocGFzc3dvcmQpO1xuXG4gICAgdGhpcy5jbGVhclBhc3N3b3JkKCk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybihbXG5cbiAgICAgIDxQYXNzd29yZElucHV0IC8+LFxuICAgICAgPFZhbGlkYXRpb25FcnJvclBhcmFncmFwaCAvPixcbiAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50LCBlbGVtZW50KSA9PiB7XG5cbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0ZUFuZFN1Ym1pdEZvcm0oKTtcblxuICAgICAgICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICBTdWJtaXRcbiAgICAgIDwvQnV0dG9uPlxuXG4gICAgXSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImZvcm1cIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInBhc3N3b3JkXCJcbiAgfTtcbn1cblxuZnVuY3Rpb24gaXNQYXNzd29yZFZhbGlkKHBhc3N3b3JkKSB7XG4gIGNvbnN0IHBhc3N3b3JkVmFsaWQgPSAocGFzc3dvcmQgIT09IEVNUFRZX1NUUklORyk7XG5cbiAgcmV0dXJuIHBhc3N3b3JkVmFsaWQ7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXNzYWdlUGFyYWdyYXBoIGV4dGVuZHMgRWxlbWVudCB7XG4gIHNob3dNZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICBjb25zdCBodG1sID0gbWVzc2FnZTsgLy8vXG5cbiAgICB0aGlzLmh0bWwoaHRtbCk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuXHQgIGNvbnN0IHNob3dNZXNzYWdlID0gdGhpcy5zaG93TWVzc2FnZS5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBzaG93TWVzc2FnZVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcInBcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcIm1lc3NhZ2VcIlxuICB9O1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IGNvbnRyb2xsZXIgZnJvbSBcIi4uLy4uL2NvbnRyb2xsZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzZXRQYXNzd29yZEJ1dHRvbiBleHRlbmRzIEVsZW1lbnQge1xuICBjbGlja0hhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICBjb250cm9sbGVyLnJlc2V0UGFzc3dvcmQoKTtcbiAgfVxuXG4gIGRpZE1vdW50KCkge1xuICAgIHRoaXMub25DbGljayh0aGlzLmNsaWNrSGFuZGxlciwgdGhpcyk7XG4gIH1cblxuICB3aWxsTW91bnQoKSB7XG4gICAgdGhpcy5vZmZDbGljayh0aGlzLmNsaWNrSGFuZGxlciwgdGhpcyk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiBcIlJlc2V0IHBhc3N3b3JkXCI7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiYnV0dG9uXCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJyZXNldC1wYXNzd29yZFwiXG4gIH07XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgUGFzc3dvcmRGb3JtIGZyb20gXCIuL3ZpZXcvZm9ybS9wYXNzd29yZFwiO1xuaW1wb3J0IE1lc3NhZ2VQYXJhZ3JhcGggZnJvbSBcIi4vdmlldy9wYXJhZ3JhcGgvbWVzc2FnZVwiO1xuaW1wb3J0IFJlc2V0UGFzc3dvcmRCdXR0b24gZnJvbSBcIi4vdmlldy9idXR0b24vcmVzZXRQYXNzd29yZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuKFtcblxuICAgICAgPFBhc3N3b3JkRm9ybS8+LFxuICAgICAgPFJlc2V0UGFzc3dvcmRCdXR0b24vPixcbiAgICAgIDxNZXNzYWdlUGFyYWdyYXBoLz5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RlbCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucGFzc3dvcmQgPSBudWxsO1xuICB9XG5cbiAgc2V0UGFzc3dvcmQocGFzc3dvcmQpIHtcbiAgICB0aGlzLnBhc3N3b3JkID0gcGFzc3dvcmQ7XG4gIH1cblxuICByZXNldFBhc3N3b3JkKCkge1xuICAgIHRoaXMucGFzc3dvcmQgPSBudWxsO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBcIi4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IHsgQm9keSB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBWaWV3IGZyb20gXCIuL212Y0FwcGxpY2F0aW9uL3ZpZXdcIjtcbmltcG9ydCBNb2RlbCBmcm9tIFwiLi9tdmNBcHBsaWNhdGlvbi9tb2RlbFwiO1xuaW1wb3J0IGNvbnRyb2xsZXIgZnJvbSBcIi4vbXZjQXBwbGljYXRpb24vY29udHJvbGxlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtdmNBcHBsaWNhdGlvbigpIHtcbiAgY29uc3QgbW9kZWwgPSBuZXcgTW9kZWwoKSxcbiAgICAgICAgdmlldyA9XG5cbiAgICAgICAgICA8Vmlldy8+XG5cbiAgICAgICAgO1xuXG4gIE9iamVjdC5hc3NpZ24oY29udHJvbGxlciwge1xuICAgIHNldFBhc3N3b3JkLFxuICAgIHJlc2V0UGFzc3dvcmRcbiAgfSk7XG5cbiAgY29uc3QgYm9keSA9IG5ldyBCb2R5KCk7XG5cbiAgYm9keS5tb3VudCh2aWV3KTtcblxuICBmdW5jdGlvbiBzZXRQYXNzd29yZChwYXNzd29yZCkge1xuICAgIG1vZGVsLnNldFBhc3N3b3JkKHBhc3N3b3JkKTtcblxuICAgIHZpZXcuc2hvd01lc3NhZ2UoXCJUaGUgcGFzc3dvcmQgaGFzIGJlZW4gc2V0LlwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0UGFzc3dvcmQoKSB7XG4gICAgbW9kZWwucmVzZXRQYXNzd29yZCgpO1xuXG4gICAgdmlldy5zaG93TWVzc2FnZShcIlRoZSBwYXNzd29yZCBoYXMgYmVlbiByZXNldC5cIik7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFwiLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgeyBCb2R5IH0gZnJvbSBcImVhc3lcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2ltcGxlQXBwbGljYXRpb24oKSB7XG4gIGNvbnN0IGJvZHkgPSBuZXcgQm9keSgpO1xuXG4gIGJvZHkubW91bnQoXG5cbiAgICA8cD5cbiAgICAgIEEgc2ltcGxlIGFwcGxpY2F0aW9uLlxuICAgIDwvcD5cblxuICApO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBkZWZhdWx0IGFzIG12Y0FwcGxpY2F0aW9uIH0gZnJvbSBcIi4vZXhhbXBsZS9tdmNBcHBsaWNhdGlvblwiO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBzaW1wbGVBcHBsaWNhdGlvbiB9IGZyb20gXCIuL2V4YW1wbGUvc2ltcGxlQXBwbGljYXRpb25cIjtcblxuT2JqZWN0LmFzc2lnbih3aW5kb3csIHtcbiAgbXZjQXBwbGljYXRpb24sXG4gIHNpbXBsZUFwcGxpY2F0aW9uXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7ZUFFcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTixRQUFNLFNBQU4sMkJBQUE7dUJBQ0QsS0FBSyxNQUFJO2dDQURGO0FBRWpCLGFBQUssTUFBTTtBQUNYLGFBQUssT0FBTzs7b0JBSEssU0FBQTs7VUFNbkIsS0FBQTtpQkFBQSxrQkFBQTtBQUNFLG1CQUFPLEtBQUs7Ozs7VUFHZCxLQUFBO2lCQUFBLG1CQUFBO0FBQ0UsbUJBQU8sS0FBSzs7Ozs7VUFHUCxLQUFBO2lCQUFQLHdCQUFzQixZQUFVO0FBQzlCLGdCQUFRLFlBQTBCLFdBQTFCLFdBQVcsYUFBZSxXQUFmLFlBQ2IsTUFBTSxXQUNOLE9BQU8sWUFDUCxTQUFTLElBbEJFLFFBa0JTLEtBQUs7QUFFL0IsbUJBQU87Ozs7YUFwQlU7Ozs7O0FDRnJCOzs7Ozs7OztlQUVxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFOLFFBQU0sU0FBTiwyQkFBQTt1QkFDRCxLQUFLLE1BQU0sT0FBTyxRQUFNO2dDQURqQjtBQUVqQixhQUFLLE1BQU07QUFDWCxhQUFLLE9BQU87QUFDWixhQUFLLFFBQVE7QUFDYixhQUFLLFNBQVM7O29CQUxH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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFOLFFBQU0sT0FBTix5QkFBQSxTQUFBO2dCQUFNLE9BQUE7dUJBQUE7Z0NBQUE7ZUFBTixZQUFBLE1BQU0sT0FBQTs7b0JBQUEsT0FBQTs7VUFDbkIsS0FBQTtpQkFBQSx5QkFBQTtBQUNFLG1CQUFPO2NBRUwsc0JBQUEsY0FBQyxVQUFBLFNBQVk7Y0FDYixzQkFBQSxjQUFDLGVBQUEsU0FBbUI7Y0FDcEIsc0JBQUEsY0FBQyxTQUFBLFNBQWdCOzs7OztVQUtyQixLQUFBO2lCQUFBLHNCQUFBO0FBQ0UsaUJBQUs7Ozs7YUFaWTt5QkFBYSxNQUFBO0FBZWhDLHFCQWZtQixNQWVaLFdBQVU7QUFFakIscUJBakJtQixNQWlCWixxQkFBb0I7TUFDekIsV0FBVzs7Ozs7QUMxQmY7Ozs7Ozs7O2VBRXFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU4sUUFBTSxRQUFOLDJCQUFBO3dCQUFNO2dDQUFBO0FBRWpCLGFBQUssV0FBVzs7b0JBRkMsUUFBQTs7VUFLbkIsS0FBQTtpQkFBQSxxQkFBWSxVQUFRO0FBQ2xCLGlCQUFLLFdBQVc7Ozs7VUFHbEIsS0FBQTtpQkFBQSx5QkFBQTtBQUNFLGlCQUFLLFdBQVc7Ozs7YUFWQzs7Ozs7QUNGckI7Ozs7O21DQVVBLFdBQUE7OztlQUF3Qjs7Ozs7Ozs7Ozs7OztBQUFULDhCQUFTO0FBQ3RCLFVBQU0sUUFBUSxJQUFJLE9BQUEsV0FDWixPQUVFLHNCQUFBLGNBQUMsTUFBQSxTQUFJO0FBSWIsYUFBTyxPQUFPLFlBQUEsU0FBWTtRQUN4QjtRQUNBOztBQUdGLFVBQU0sT0FBTyxJQUFJLE1BQUE7QUFFakIsV0FBSyxNQUFNO0FBRVgsMkJBQXFCLFVBQVE7QUFDM0IsY0FBTSxZQUFZO0FBRWxCLGFBQUssWUFBWTs7QUFHbkIsK0JBQVM7QUFDUCxjQUFNO0FBRU4sYUFBSyxZQUFZOzs7Ozs7QUNwQ3JCOzs7OzttQ0FNQSxXQUFBOzs7ZUFBd0I7Ozs7O0FBQVQsaUNBQVM7QUFDdEIsVUFBTSxPQUFPLElBQUksTUFBQTtBQUVqQixXQUFLLE1BRUgsc0JBQUEsY0FBQyxLQUFBLE1BQUU7Ozs7O0FDWFA7Ozs7Ozs7Ozs7OztBQUtBLFdBQU8sT0FBTyxRQUFRO01BQ3BCLGdCQUFBLGdCQUFBO01BQ0EsbUJBQUEsbUJBQUE7OzsiLAogICJuYW1lcyI6IFtdCn0K
