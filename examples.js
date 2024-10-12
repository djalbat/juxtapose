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
      DOUBLE_CLICK_EVENT_TYPE: function() {
        return DOUBLE_CLICK_EVENT_TYPE;
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
    var TOUCHEND_EVENT_TYPE = "touchend";
    var TOUCHMOVE_EVENT_TYPE = "touchmove";
    var MOUSEOVER_EVENT_TYPE = "mouseover";
    var MOUSEDOWN_EVENT_TYPE = "mousedown";
    var MOUSEMOVE_EVENT_TYPE = "mousemove";
    var TOUCHSTART_EVENT_TYPE = "touchstart";
    var CONTEXTMENU_EVENT_TYPE = "contextmenu";
    var DOUBLE_CLICK_EVENT_TYPE = "doubleclick";
    var SELECTIONCHANGE_EVENT_TYPE = "selectionchange";
    var FULLSCREENCHANGE_EVENT_TYPE = "fullscreenchange";
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
      TOUCHEND_EVENT_TYPE,
      TOUCHMOVE_EVENT_TYPE,
      MOUSEOVER_EVENT_TYPE,
      MOUSEDOWN_EVENT_TYPE,
      MOUSEMOVE_EVENT_TYPE,
      TOUCHSTART_EVENT_TYPE,
      CONTEXTMENU_EVENT_TYPE,
      DOUBLE_CLICK_EVENT_TYPE,
      SELECTIONCHANGE_EVENT_TYPE,
      FULLSCREENCHANGE_EVENT_TYPE
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

  // node_modules/easy/lib/mixins/textElement.js
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
    var _element = require_element();
    var textElementMixins = {
      getParentElement: _element.getParentElement,
      getAscendantElements: _element.getAscendantElements,
      getNextSiblingElement: _element.getNextSiblingElement,
      getPreviousSiblingElement: _element.getPreviousSiblingElement
    };
    var _default = textElementMixins;
  });

  // node_modules/easy/lib/textElement.js
  var require_textElement2 = __commonJS((exports) => {
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
    var _textElement = /* @__PURE__ */ _interop_require_default(require_textElement());
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
    Object.assign(TextElement.prototype, _textElement.default);
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
    var _textElement = /* @__PURE__ */ _interop_require_default(require_textElement2());
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
    var _eventTypes = require_eventTypes();
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
      var eventType = name.substring(2).toLowerCase();
      if (eventType === _eventTypes.DOUBLE_CLICK_EVENT_TYPE) {
        eventType = _eventTypes.DBLCLICK_EVENT_TYPE;
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
      this.domElement.scrollTo(scrollTop, scrollLeft);
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
    var _focus = /* @__PURE__ */ _interop_require_default(require_focus());
    var _scroll = /* @__PURE__ */ _interop_require_default(require_scroll());
    var _resize = /* @__PURE__ */ _interop_require_default(require_resize());
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
    Object.assign(Element.prototype, _focus.default);
    Object.assign(Element.prototype, _scroll.default);
    Object.assign(Element.prototype, _resize.default);
    Object.assign(Element.prototype, _element.default);
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
    var _default = (typeof document === "undefined" ? "undefined" : _type_of(document)) === _constants.UNDEFINED ? void 0 : new Document();
    Object.assign(Document.prototype, _key.default);
    Object.assign(Document.prototype, _event.default);
    Object.assign(Document.prototype, _mouse.default);
    Object.assign(Document.prototype, _click.default);
    Object.assign(Document.prototype, _selection.default);
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
    var _element = /* @__PURE__ */ _interop_require_default(require_element3());
    var _textElement = /* @__PURE__ */ _interop_require_default(require_textElement2());
    var _body = /* @__PURE__ */ _interop_require_default(require_body());
    var _link = /* @__PURE__ */ _interop_require_default(require_link());
    var _input = /* @__PURE__ */ _interop_require_default(require_input2());
    var _button = /* @__PURE__ */ _interop_require_default(require_button());
    var _select = /* @__PURE__ */ _interop_require_default(require_select());
    var _checkbox = /* @__PURE__ */ _interop_require_default(require_checkbox());
    var _textarea = /* @__PURE__ */ _interop_require_default(require_textarea());
    var _window = /* @__PURE__ */ _interop_require_default(require_window());
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL29mZnNldC5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvYm91bmRzLmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy9jb25zdGFudHMuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL3V0aWxpdGllcy9vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL3V0aWxpdGllcy9hcnJheS5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvdXRpbGl0aWVzL3N0cmluZy5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvdXRpbGl0aWVzL25hbWUuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL2V2ZW50VHlwZXMuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL3V0aWxpdGllcy9kb20uanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL21peGlucy9lbGVtZW50LmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy9taXhpbnMvdGV4dEVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL3RleHRFbGVtZW50LmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy91dGlsaXRpZXMvZWxlbWVudHMuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL21peGlucy9qc3guanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL21peGlucy9rZXkuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL21peGlucy9zdGF0ZS5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvbWl4aW5zL2V2ZW50LmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy9taXhpbnMvbW91c2UuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL21peGlucy9jbGljay5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvbWl4aW5zL2ZvY3VzLmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy9taXhpbnMvc2Nyb2xsLmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy9taXhpbnMvcmVzaXplLmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy91dGlsaXRpZXMvYXN5bmMuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL21peGlucy9jdXN0b21FdmVudC5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvdXRpbGl0aWVzL2VsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL2VsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL3JlYWN0LmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy9lbGVtZW50L2JvZHkuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL2VsZW1lbnQvbGluay5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvbWl4aW5zL2lucHV0LmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy9taXhpbnMvc2VsZWN0aW9uLmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy9lbGVtZW50L2lucHV0LmpzIiwgIm5vZGVfbW9kdWxlcy9lYXN5L3NyYy9lbGVtZW50L2J1dHRvbi5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvZWxlbWVudC9zZWxlY3QuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL2VsZW1lbnQvY2hlY2tib3guanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL2VsZW1lbnQvdGV4dGFyZWEuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL3dpbmRvdy5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvZG9jdW1lbnQuanMiLCAibm9kZV9tb2R1bGVzL2Vhc3kvc3JjL21vdXNlQnV0dG9ucy5qcyIsICJub2RlX21vZHVsZXMvZWFzeS9zcmMvaW5kZXguanMiLCAic3JjL2p1eHRhcG9zZS5qcyIsICJzcmMvaW5kZXguanMiLCAic3JjL2V4YW1wbGUvbXZjQXBwbGljYXRpb24vY29udHJvbGxlci5qcyIsICJzcmMvZXhhbXBsZS9tdmNBcHBsaWNhdGlvbi9jb25zdGFudHMuanMiLCAic3JjL2V4YW1wbGUvbXZjQXBwbGljYXRpb24vdmlldy9pbnB1dC9wYXNzd29yZC5qcyIsICJzcmMvZXhhbXBsZS9tdmNBcHBsaWNhdGlvbi92aWV3L3BhcmFncmFwaC92YWxpZGF0aW9uRXJyb3IuanMiLCAic3JjL2V4YW1wbGUvbXZjQXBwbGljYXRpb24vdmlldy9mb3JtL3Bhc3N3b3JkLmpzIiwgInNyYy9leGFtcGxlL212Y0FwcGxpY2F0aW9uL3ZpZXcvcGFyYWdyYXBoL21lc3NhZ2UuanMiLCAic3JjL2V4YW1wbGUvbXZjQXBwbGljYXRpb24vdmlldy9idXR0b24vcmVzZXRQYXNzd29yZC5qcyIsICJzcmMvZXhhbXBsZS9tdmNBcHBsaWNhdGlvbi92aWV3LmpzIiwgInNyYy9leGFtcGxlL212Y0FwcGxpY2F0aW9uL21vZGVsLmpzIiwgInNyYy9leGFtcGxlL212Y0FwcGxpY2F0aW9uLmpzIiwgInNyYy9leGFtcGxlL3NpbXBsZUFwcGxpY2F0aW9uLmpzIiwgInNyYy9leGFtcGxlcy5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9mZnNldCB7XG4gIGNvbnN0cnVjdG9yKHRvcCwgbGVmdCkge1xuICAgIHRoaXMudG9wID0gdG9wO1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gIH1cblxuICBnZXRUb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9wO1xuICB9XG5cbiAgZ2V0TGVmdCgpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0O1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvdW5kcyB7XG4gIGNvbnN0cnVjdG9yKHRvcCwgbGVmdCwgcmlnaHQsIGJvdHRvbSkge1xuICAgIHRoaXMudG9wID0gdG9wO1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICAgIHRoaXMuYm90dG9tID0gYm90dG9tO1xuICB9XG5cbiAgZ2V0VG9wKCkge1xuICAgIHJldHVybiB0aGlzLnRvcDtcbiAgfVxuXG4gIGdldExlZnQoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdDtcbiAgfVxuXG4gIGdldFJpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLnJpZ2h0O1xuICB9XG5cbiAgZ2V0Qm90dG9tKCkge1xuICAgIHJldHVybiB0aGlzLmJvdHRvbTtcbiAgfVxuXG4gIGdldFdpZHRoKCkge1xuICAgIGNvbnN0IHdpZHRoID0gKHRoaXMucmlnaHQgLSB0aGlzLmxlZnQpO1xuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KCkge1xuICAgIGNvbnN0IGhlaWdodCA9ICh0aGlzLmJvdHRvbSAtIHRoaXMudG9wKTtcblxuICAgIHJldHVybiBoZWlnaHQ7XG4gIH1cbiAgXG4gIHNldFRvcCh0b3ApIHtcbiAgICB0aGlzLnRvcCA9IHRvcDtcbiAgfVxuXG4gIHNldExlZnQobGVmdCkge1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gIH1cblxuICBzZXRSaWdodChyaWdodCkge1xuICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgfVxuXG4gIHNldEJvdHRvbShib3R0b20pIHtcbiAgICB0aGlzLmJvdHRvbSA9IGJvdHRvbTtcbiAgfVxuXG4gIGFyZU92ZXJsYXBwaW5nKGJvdW5kcykge1xuICAgIGNvbnN0IGJvdHRvbSA9IGJvdW5kcy5nZXRCb3R0b20oKSxcbiAgICAgICAgICByaWdodCA9IGJvdW5kcy5nZXRSaWdodCgpLFxuICAgICAgICAgIGxlZnQgPSBib3VuZHMuZ2V0TGVmdCgpLFxuICAgICAgICAgIHRvcCA9IGJvdW5kcy5nZXRUb3AoKSxcbiAgICAgICAgICBvdmVybGFwcGluZyA9ICgodGhpcy50b3AgPCBib3R0b20pXG4gICAgICAgICAgICAgICAgICAgICAgJiYgKHRoaXMubGVmdCA8IHJpZ2h0KVxuICAgICAgICAgICAgICAgICAgICAgICYmICh0aGlzLnJpZ2h0ID4gbGVmdClcbiAgICAgICAgICAgICAgICAgICAgICAmJiAodGhpcy5ib3R0b20gPiB0b3ApKTtcblxuICAgIHJldHVybiBvdmVybGFwcGluZztcbiAgfVxuXG4gIGFyZU92ZXJsYXBwaW5nQnlUb3BBbmRMZWZ0KHRvcCwgbGVmdCkge1xuICAgIGNvbnN0IG92ZXJsYXBwaW5nID0gKCh0aGlzLnRvcCA8PSB0b3ApXG4gICAgICAgICAgICAgICAgICAgICAgJiYgKHRoaXMubGVmdCA8PSBsZWZ0KVxuICAgICAgICAgICAgICAgICAgICAgICYmICh0aGlzLnJpZ2h0ID4gbGVmdClcbiAgICAgICAgICAgICAgICAgICAgICAmJiAodGhpcy5ib3R0b20gPiB0b3ApKTtcblxuICAgIHJldHVybiBvdmVybGFwcGluZztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQm91bmRpbmdDbGllbnRSZWN0KGJvdW5kaW5nQ2xpZW50UmVjdCkge1xuICAgIGNvbnN0IHdpbmRvd1Njcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCwgLy8vXG4gICAgICAgICAgd2luZG93U2Nyb2xsTGVmdCA9IHdpbmRvdy5wYWdlWE9mZnNldCwgIC8vL1xuICAgICAgICAgIHRvcCA9IGJvdW5kaW5nQ2xpZW50UmVjdC50b3AgKyB3aW5kb3dTY3JvbGxUb3AsXG4gICAgICAgICAgbGVmdCA9IGJvdW5kaW5nQ2xpZW50UmVjdC5sZWZ0ICsgd2luZG93U2Nyb2xsTGVmdCxcbiAgICAgICAgICByaWdodCA9IGJvdW5kaW5nQ2xpZW50UmVjdC5yaWdodCArIHdpbmRvd1Njcm9sbExlZnQsXG4gICAgICAgICAgYm90dG9tID0gYm91bmRpbmdDbGllbnRSZWN0LmJvdHRvbSArIHdpbmRvd1Njcm9sbFRvcCxcbiAgICAgICAgICBib3VuZHMgPSBuZXcgQm91bmRzKHRvcCwgbGVmdCwgcmlnaHQsIGJvdHRvbSk7XG5cbiAgICByZXR1cm4gYm91bmRzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ub3BMZWZ0V2lkdGhBbmRIZWlnaHQodG9wLCBsZWZ0LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgY29uc3QgYm90dG9tID0gdG9wICsgaGVpZ2h0LFxuICAgICAgICAgIHJpZ2h0ID0gbGVmdCArIHdpZHRoLFxuICAgICAgICAgIGJvdW5kcyA9IG5ldyBCb3VuZHModG9wLCBsZWZ0LCByaWdodCwgYm90dG9tKTtcblxuICAgIHJldHVybiBib3VuZHM7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IEZPUiA9IFwiZm9yXCI7XG5leHBvcnQgY29uc3QgQk9EWSA9IFwiYm9keVwiO1xuZXhwb3J0IGNvbnN0IE5PTkUgPSBcIm5vbmVcIjtcbmV4cG9ydCBjb25zdCBTUEFDRSA9IFwiIFwiO1xuZXhwb3J0IGNvbnN0IENMQVNTID0gXCJjbGFzc1wiO1xuZXhwb3J0IGNvbnN0IFdJRFRIID0gXCJ3aWR0aFwiO1xuZXhwb3J0IGNvbnN0IEJMT0NLID0gXCJibG9ja1wiO1xuZXhwb3J0IGNvbnN0IEhFSUdIVCA9IFwiaGVpZ2h0XCI7XG5leHBvcnQgY29uc3QgT0JKRUNUID0gXCJvYmplY3RcIjtcbmV4cG9ydCBjb25zdCBTVFJJTkcgPSBcInN0cmluZ1wiO1xuZXhwb3J0IGNvbnN0IERJU1BMQVkgPSBcImRpc3BsYXlcIjtcbmV4cG9ydCBjb25zdCBCT09MRUFOID0gXCJib29sZWFuXCI7XG5leHBvcnQgY29uc3QgRElTQUJMRUQgPSBcImRpc2FibGVkXCI7XG5leHBvcnQgY29uc3QgRlVOQ1RJT04gPSBcImZ1bmN0aW9uXCI7XG5leHBvcnQgY29uc3QgV0lMRENBUkQgPSBcIipcIjtcbmV4cG9ydCBjb25zdCBIVE1MX0ZPUiA9IFwiaHRtbEZvclwiO1xuZXhwb3J0IGNvbnN0IFVOREVGSU5FRCA9ICd1bmRlZmluZWQnO1xuZXhwb3J0IGNvbnN0IENMQVNTX05BTUUgPSBcImNsYXNzTmFtZVwiO1xuZXhwb3J0IGNvbnN0IEVNUFRZX1NUUklORyA9IFwiXCI7XG5leHBvcnQgY29uc3QgU1ZHX05BTUVTUEFDRV9VUkkgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7XG5leHBvcnQgY29uc3QgREVGQVVMVF9QUk9QRVJUSUVTID0gXCJkZWZhdWx0UHJvcGVydGllc1wiO1xuZXhwb3J0IGNvbnN0IElHTk9SRURfUFJPUEVSVElFUyA9IFwiaWdub3JlZFByb3BlcnRpZXNcIjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQk9PTEVBTiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmUodGFyZ2V0LCBzb3VyY2UgPSB7fSkge1xuICB0YXJnZXQgPSB7ICAvLy9cbiAgICAuLi50YXJnZXRcbiAgfTtcblxuICBjb25zdCBuYW1lcyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7ICAvLy9cblxuICBuYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0VmFsdWUgPSB0YXJnZXRbbmFtZV0sXG4gICAgICAgICAgc291cmNlVmFsdWUgPSBzb3VyY2VbbmFtZV0sXG4gICAgICAgICAgdGFyZ2V0SGFzT3duUHJvcGVydHkgPSB0YXJnZXQuaGFzT3duUHJvcGVydHkobmFtZSk7XG5cbiAgICB0YXJnZXRbbmFtZV0gPSB0YXJnZXRIYXNPd25Qcm9wZXJ0eSA/XG4gICAgICAgICAgICAgICAgICAgICBjb21iaW5lVmFsdWVzKHRhcmdldFZhbHVlLCBzb3VyY2VWYWx1ZSkgOlxuICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VWYWx1ZTsgLy8vXG4gIH0pO1xuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcnVuZSh0YXJnZXQsIG5hbWVzID0gW10pIHtcbiAgdGFyZ2V0ID0geyAgLy8vXG4gICAgLi4udGFyZ2V0XG4gIH07XG5cbiAgbmFtZXMuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgIGNvbnN0IHRhcmdldEhhc093blByb3BlcnR5ID0gdGFyZ2V0Lmhhc093blByb3BlcnR5KG5hbWUpO1xuXG4gICAgaWYgKHRhcmdldEhhc093blByb3BlcnR5KSB7XG4gICAgICBkZWxldGUgdGFyZ2V0W25hbWVdO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gY29tYmluZVZhbHVlcyh0YXJnZXRWYWx1ZSwgc291cmNlVmFsdWUpIHtcbiAgY29uc3QgdGFyZ2V0VmFsdWVCb29sZWFuID0gaXNWYWx1ZUJvb2xlYW4odGFyZ2V0VmFsdWUpLFxuICAgICAgICBzb3VyY2VWYWx1ZUJvb2xlYW4gPSBpc1ZhbHVlQm9vbGVhbihzb3VyY2VWYWx1ZSksXG4gICAgICAgIGNvbWJpbmVkVmFsdWUgPSAodGFyZ2V0VmFsdWVCb29sZWFuICYmIHNvdXJjZVZhbHVlQm9vbGVhbikgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRWYWx1ZSA6IC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3RhcmdldFZhbHVlfSAke3NvdXJjZVZhbHVlfWA7XG5cbiAgcmV0dXJuIGNvbWJpbmVkVmFsdWU7XG59XG5cbmZ1bmN0aW9uIGlzVmFsdWVCb29sZWFuKHZhbHVlKSB7XG4gIGNvbnN0IHZhbHVlQm9vbGVhbiA9ICh0eXBlb2YgdmFsdWUgPT09IEJPT0xFQU4pO1xuXG4gIHJldHVybiB2YWx1ZUJvb2xlYW47XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHB1c2goYXJyYXkxLCBhcnJheTIpIHsgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoYXJyYXkxLCBhcnJheTIpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBhdWdtZW50KGFycmF5MSwgYXJyYXkyLCB0ZXN0KSB7XG4gIGFycmF5MSA9IFsgLi4uYXJyYXkxIF07IC8vL1xuXG4gIGFycmF5Mi5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgYXJyYXkxLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gYXJyYXkxO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmxhdHRlbihhcnJheSkge1xuICByZXR1cm4gYXJyYXkucmVkdWNlKChhcnJheSwgZWxlbWVudCkgPT4ge1xuICAgIGFycmF5ID0gYXJyYXkuY29uY2F0KGVsZW1lbnQpOyAgLy8vXG5cbiAgICByZXR1cm4gYXJyYXk7XG4gIH0sIFtdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGd1YXJhbnRlZShhcnJheU9yRWxlbWVudCkge1xuICBhcnJheU9yRWxlbWVudCA9IGFycmF5T3JFbGVtZW50IHx8IFtdO1xuXG4gIHJldHVybiAoYXJyYXlPckVsZW1lbnQgaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICAgYXJyYXlPckVsZW1lbnQgOlxuICAgICAgICAgICAgICBbYXJyYXlPckVsZW1lbnRdO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY2FtZWxDYXNlVG9TbmFrZUNhc2Uoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZSgvKFtBLVpdKykvZywgKG1hdGNoLCBjaGFyYWN0ZXJzKSA9PiB7XG4gICAgY29uc3QgdXBwZXJDYXNlQ2hhcmFjdGVycyA9IGNoYXJhY3RlcnMudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICBzbmFrZUNhc2VDaGFyYWN0ZXJzID0gYC0ke3VwcGVyQ2FzZUNoYXJhY3RlcnN9YDtcblxuICAgIHJldHVybiBzbmFrZUNhc2VDaGFyYWN0ZXJzO1xuICB9KTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzU1ZHVGFnTmFtZSh0YWdOYW1lKSB7XG4gIHJldHVybiBzdmdUYWdOYW1lcy5pbmNsdWRlcyh0YWdOYW1lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU1ZHQXR0cmlidXRlTmFtZShhdHRyaWJ1dGVOYW1lKSB7XG4gIHJldHVybiBzdmdBdHRyaWJ1dGVOYW1lcy5pbmNsdWRlcyhhdHRyaWJ1dGVOYW1lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzSFRNTEF0dHJpYnV0ZU5hbWUoYXR0cmlidXRlTmFtZSkge1xuICByZXR1cm4gaHRtbEF0dHJpYnV0ZU5hbWVzLmluY2x1ZGVzKGF0dHJpYnV0ZU5hbWUpO1xufVxuXG5jb25zdCBzdmdUYWdOYW1lcyA9IFtcbiAgICAgICAgXCJhbHRHbHlwaFwiLCBcImFuaW1hdGVcIiwgXCJhbmltYXRlQ29sb3JcIiwgXCJhbmltYXRlTW90aW9uXCIsIFwiYW5pbWF0ZVRyYW5zZm9ybVwiLCBcImFuaW1hdGlvblwiLCBcImF1ZGlvXCIsXG4gICAgICAgIFwiY2lyY2xlXCIsIFwiY2xpcFBhdGhcIiwgXCJjb2xvci1wcm9maWxlXCIsIFwiY3Vyc29yXCIsXG4gICAgICAgIFwiZGVmc1wiLCBcImRlc2NcIiwgXCJkaXNjYXJkXCIsXG4gICAgICAgIFwiZWxsaXBzZVwiLFxuICAgICAgICBcImZlQmxlbmRcIiwgXCJmZUNvbG9yTWF0cml4XCIsIFwiZmVDb21wb25lbnRUcmFuc2ZlclwiLCBcImZlQ29tcG9zaXRlXCIsIFwiZmVDb252b2x2ZU1hdHJpeFwiLCBcImZlRGlmZnVzZUxpZ2h0aW5nXCIsIFwiZmVEaXNwbGFjZW1lbnRNYXBcIiwgXCJmZURpc3RhbnRMaWdodFwiLCBcImZlRHJvcFNoYWRvd1wiLCBcImZlRmxvb2RcIiwgXCJmZUZ1bmNBXCIsIFwiZmVGdW5jQlwiLCBcImZlRnVuY0dcIiwgXCJmZUZ1bmNSXCIsIFwiZmVHYXVzc2lhbkJsdXJcIiwgXCJmZUltYWdlXCIsIFwiZmVNZXJnZVwiLCBcImZlTWVyZ2VOb2RlXCIsIFwiZmVNb3JwaG9sb2d5XCIsIFwiZmVPZmZzZXRcIiwgXCJmZVBvaW50TGlnaHRcIiwgXCJmZVNwZWN1bGFyTGlnaHRpbmdcIiwgXCJmZVNwb3RMaWdodFwiLCBcImZlVGlsZVwiLCBcImZlVHVyYnVsZW5jZVwiLCBcImZpbHRlclwiLCBcImZvbnRcIiwgXCJmb250LWZhY2VcIiwgXCJmb250LWZhY2UtZm9ybWF0XCIsIFwiZm9udC1mYWNlLW5hbWVcIiwgXCJmb250LWZhY2UtdXJpXCIsIFwiZm9yZWlnbk9iamVjdFwiLFxuICAgICAgICBcImdcIiwgXCJnbHlwaFwiLCBcImdseXBoUmVmXCIsXG4gICAgICAgIFwiaGFuZGxlclwiLCBcImhhdGNoXCIsIFwiaGF0Y2hwYXRoXCIsIFwiaGtlcm5cIixcbiAgICAgICAgXCJpbWFnZVwiLCBcImxpbmVcIiwgXCJsaW5lYXJHcmFkaWVudFwiLFxuICAgICAgICBcImxpc3RlbmVyXCIsXG4gICAgICAgIFwibWFya2VyXCIsIFwibWFza1wiLCBcIm1lc2hcIiwgXCJtZXNoZ3JhZGllbnRcIiwgXCJtZXNocGF0Y2hcIiwgXCJtZXNocm93XCIsIFwibWV0YWRhdGFcIiwgXCJtaXNzaW5nLWdseXBoXCIsIFwibXBhdGhcIixcbiAgICAgICAgXCJwYXRoXCIsIFwicGF0dGVyblwiLCBcInBvbHlnb25cIiwgXCJwb2x5bGluZVwiLCBcInByZWZldGNoXCIsXG4gICAgICAgIFwicmFkaWFsR3JhZGllbnRcIiwgXCJyZWN0XCIsXG4gICAgICAgIFwic2NyaXB0XCIsIFwic2V0XCIsIFwic29saWRjb2xvclwiLCBcInN0b3BcIiwgXCJzdHlsZVwiLCBcInN2Z1wiLCBcInN3aXRjaFwiLCBcInN5bWJvbFwiLFxuICAgICAgICBcInRicmVha1wiLCBcInRleHRcIiwgXCJ0ZXh0QXJlYVwiLCBcInRleHRQYXRoXCIsIFwidGl0bGVcIiwgXCJ0cmVmXCIsIFwidHNwYW5cIixcbiAgICAgICAgXCJ1bmtub3duXCIsIFwidXNlXCIsXG4gICAgICAgIFwidmlkZW9cIiwgXCJ2aWV3XCIsIFwidmtlcm5cIlxuICAgICAgXSxcbiAgICAgIHN2Z0F0dHJpYnV0ZU5hbWVzID0gW1xuICAgICAgICBcImFjY2VudC1oZWlnaHRcIiwgXCJhY2N1bXVsYXRlXCIsIFwiYWRkaXRpdmVcIiwgXCJhbGlnbm1lbnQtYmFzZWxpbmVcIiwgXCJhbHBoYWJldGljXCIsIFwiYW1wbGl0dWRlXCIsIFwiYXJhYmljLWZvcm1cIiwgXCJhc2NlbnRcIiwgXCJhdHRyaWJ1dGVOYW1lXCIsIFwiYXR0cmlidXRlVHlwZVwiLCBcImF6aW11dGhcIixcbiAgICAgICAgXCJiYW5kd2lkdGhcIiwgXCJiYXNlRnJlcXVlbmN5XCIsIFwiYmFzZVByb2ZpbGVcIiwgXCJiYXNlbGluZS1zaGlmdFwiLCBcImJib3hcIiwgXCJiZWdpblwiLCBcImJpYXNcIiwgXCJieVwiLFxuICAgICAgICBcImNhbGNNb2RlXCIsIFwiY2FwLWhlaWdodFwiLCBcImNsaXBcIiwgXCJjbGFzc05hbWVcIiwgXCJjbGlwLXBhdGhcIiwgXCJjbGlwLXJ1bGVcIiwgXCJjbGlwUGF0aFVuaXRzXCIsIFwiY29sb3JcIiwgXCJjb2xvci1pbnRlcnBvbGF0aW9uXCIsIFwiY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzXCIsIFwiY29sb3ItcHJvZmlsZVwiLCBcImNvbG9yLXJlbmRlcmluZ1wiLCBcImNvbnRlbnRTY3JpcHRUeXBlXCIsIFwiY29udGVudFN0eWxlVHlwZVwiLCBcImNyb3Nzb3JpZ2luXCIsIFwiY3Vyc29yXCIsIFwiY3hcIiwgXCJjeVwiLFxuICAgICAgICBcImRcIiwgXCJkZWZhdWx0QWN0aW9uXCIsIFwiZGVzY2VudFwiLCBcImRpZmZ1c2VDb25zdGFudFwiLCBcImRpcmVjdGlvblwiLCBcImRpc3BsYXlcIiwgXCJkaXZpc29yXCIsIFwiZG9taW5hbnQtYmFzZWxpbmVcIiwgXCJkb3dubG9hZFwiLCBcImR1clwiLCBcImR4XCIsIFwiZHlcIixcbiAgICAgICAgXCJlZGdlTW9kZVwiLCBcImVkaXRhYmxlXCIsIFwiZWxldmF0aW9uXCIsIFwiZW5hYmxlLWJhY2tncm91bmRcIiwgXCJlbmRcIiwgXCJldmVudFwiLCBcImV4cG9uZW50XCIsIFwiZXh0ZXJuYWxSZXNvdXJjZXNSZXF1aXJlZFwiLFxuICAgICAgICBcImZpbGxcIiwgXCJmaWxsLW9wYWNpdHlcIiwgXCJmaWxsLXJ1bGVcIiwgXCJmaWx0ZXJcIiwgXCJmaWx0ZXJSZXNcIiwgXCJmaWx0ZXJVbml0c1wiLCBcImZsb29kLWNvbG9yXCIsIFwiZmxvb2Qtb3BhY2l0eVwiLCBcImZvY3VzSGlnaGxpZ2h0XCIsIFwiZm9jdXNhYmxlXCIsIFwiZm9udC1mYW1pbHlcIiwgXCJmb250LXNpemVcIiwgXCJmb250LXNpemUtYWRqdXN0XCIsIFwiZm9udC1zdHJldGNoXCIsIFwiZm9udC1zdHlsZVwiLCBcImZvbnQtdmFyaWFudFwiLCBcImZvbnQtd2VpZ2h0XCIsIFwiZm9ybWF0XCIsIFwiZnJcIiwgXCJmcm9tXCIsIFwiZnhcIiwgXCJmeVwiLFxuICAgICAgICBcImcxXCIsIFwiZzJcIiwgXCJnbHlwaC1uYW1lXCIsIFwiZ2x5cGgtb3JpZW50YXRpb24taG9yaXpvbnRhbFwiLCBcImdseXBoLW9yaWVudGF0aW9uLXZlcnRpY2FsXCIsIFwiZ2x5cGhSZWZcIiwgXCJncmFkaWVudFRyYW5zZm9ybVwiLCBcImdyYWRpZW50VW5pdHNcIixcbiAgICAgICAgXCJoYW5kbGVyXCIsIFwiaGFuZ2luZ1wiLCBcImhhdGNoQ29udGVudFVuaXRzXCIsIFwiaGF0Y2hVbml0c1wiLCBcImhlaWdodFwiLCBcImhvcml6LWFkdi14XCIsIFwiaG9yaXotb3JpZ2luLXhcIiwgXCJob3Jpei1vcmlnaW4teVwiLCBcImhyZWZcIiwgXCJocmVmbGFuZ1wiLFxuICAgICAgICBcImlkXCIsIFwiaWRlb2dyYXBoaWNcIiwgXCJpbWFnZS1yZW5kZXJpbmdcIiwgXCJpblwiLCBcImluMlwiLCBcImluaXRpYWxWaXNpYmlsaXR5XCIsIFwiaW50ZXJjZXB0XCIsXG4gICAgICAgIFwia1wiLCBcImsxXCIsIFwiazJcIiwgXCJrM1wiLCBcIms0XCIsIFwia2VybmVsTWF0cml4XCIsIFwia2VybmVsVW5pdExlbmd0aFwiLCBcImtlcm5pbmdcIiwgXCJrZXlQb2ludHNcIiwgXCJrZXlTcGxpbmVzXCIsIFwia2V5VGltZXNcIixcbiAgICAgICAgXCJsZW5ndGhBZGp1c3RcIiwgXCJsZXR0ZXItc3BhY2luZ1wiLCBcImxpZ2h0aW5nLWNvbG9yXCIsIFwibGltaXRpbmdDb25lQW5nbGVcIiwgXCJsb2NhbFwiLFxuICAgICAgICBcIm1hcmtlci1lbmRcIiwgXCJtYXJrZXItbWlkXCIsIFwibWFya2VyLXN0YXJ0XCIsIFwibWFya2VySGVpZ2h0XCIsIFwibWFya2VyVW5pdHNcIiwgXCJtYXJrZXJXaWR0aFwiLCBcIm1hc2tcIiwgXCJtYXNrQ29udGVudFVuaXRzXCIsIFwibWFza1VuaXRzXCIsIFwibWF0aGVtYXRpY2FsXCIsIFwibWF4XCIsIFwibWVkaWFcIiwgXCJtZWRpYUNoYXJhY3RlckVuY29kaW5nXCIsIFwibWVkaWFDb250ZW50RW5jb2RpbmdzXCIsIFwibWVkaWFTaXplXCIsIFwibWVkaWFUaW1lXCIsIFwibWV0aG9kXCIsIFwibWluXCIsIFwibW9kZVwiLFxuICAgICAgICBcIm5hbWVcIiwgXCJuYXYtZG93blwiLCBcIm5hdi1kb3duLWxlZnRcIiwgXCJuYXYtZG93bi1yaWdodFwiLCBcIm5hdi1sZWZ0XCIsIFwibmF2LW5leHRcIiwgXCJuYXYtcHJldlwiLCBcIm5hdi1yaWdodFwiLCBcIm5hdi11cFwiLCBcIm5hdi11cC1sZWZ0XCIsIFwibmF2LXVwLXJpZ2h0XCIsIFwibnVtT2N0YXZlc1wiLFxuICAgICAgICBcIm9ic2VydmVyXCIsIFwib2Zmc2V0XCIsIFwib3BhY2l0eVwiLCBcIm9wZXJhdG9yXCIsIFwib3JkZXJcIiwgXCJvcmllbnRcIiwgXCJvcmllbnRhdGlvblwiLCBcIm9yaWdpblwiLCBcIm92ZXJmbG93XCIsIFwib3ZlcmxheVwiLCBcIm92ZXJsaW5lLXBvc2l0aW9uXCIsIFwib3ZlcmxpbmUtdGhpY2tuZXNzXCIsXG4gICAgICAgIFwicGFub3NlLTFcIiwgXCJwYXRoXCIsIFwicGF0aExlbmd0aFwiLCBcInBhdHRlcm5Db250ZW50VW5pdHNcIiwgXCJwYXR0ZXJuVHJhbnNmb3JtXCIsIFwicGF0dGVyblVuaXRzXCIsIFwicGhhc2VcIiwgXCJwaXRjaFwiLCBcInBsYXliYWNrT3JkZXJcIiwgXCJwbGF5YmFja29yZGVyXCIsIFwicG9pbnRlci1ldmVudHNcIiwgXCJwb2ludHNcIiwgXCJwb2ludHNBdFhcIiwgXCJwb2ludHNBdFlcIiwgXCJwb2ludHNBdFpcIiwgXCJwcmVzZXJ2ZUFscGhhXCIsIFwicHJlc2VydmVBc3BlY3RSYXRpb1wiLCBcInByaW1pdGl2ZVVuaXRzXCIsIFwicHJvcGFnYXRlXCIsXG4gICAgICAgIFwiclwiLCBcInJhZGl1c1wiLCBcInJlZlhcIiwgXCJyZWZZXCIsIFwicmVuZGVyaW5nLWludGVudFwiLCBcInJlcGVhdENvdW50XCIsIFwicmVwZWF0RHVyXCIsIFwicmVxdWlyZWRFeHRlbnNpb25zXCIsIFwicmVxdWlyZWRGZWF0dXJlc1wiLCBcInJlcXVpcmVkRm9udHNcIiwgXCJyZXF1aXJlZEZvcm1hdHNcIiwgXCJyZXN0YXJ0XCIsIFwicmVzdWx0XCIsIFwicm90YXRlXCIsIFwicnhcIiwgXCJyeVwiLFxuICAgICAgICBcInNjYWxlXCIsIFwic2VlZFwiLCBcInNoYXBlLXJlbmRlcmluZ1wiLCBcInNpZGVcIiwgXCJzbG9wZVwiLCBcInNuYXBzaG90VGltZVwiLCBcInNwYWNpbmdcIiwgXCJzcGVjdWxhckNvbnN0YW50XCIsIFwic3BlY3VsYXJFeHBvbmVudFwiLCBcInNwcmVhZE1ldGhvZFwiLCBcInNyY1wiLCBcInN0YXJ0T2Zmc2V0XCIsIFwic3RkRGV2aWF0aW9uXCIsIFwic3RlbWhcIiwgXCJzdGVtdlwiLCBcInN0aXRjaFRpbGVzXCIsIFwic3RvcC1jb2xvclwiLCBcInN0b3Atb3BhY2l0eVwiLCBcInN0cmlrZXRocm91Z2gtcG9zaXRpb25cIiwgXCJzdHJpa2V0aHJvdWdoLXRoaWNrbmVzc1wiLCBcInN0cmluZ1wiLCBcInN0cm9rZVwiLCBcInN0cm9rZS1kYXNoYXJyYXlcIiwgXCJzdHJva2UtZGFzaG9mZnNldFwiLCBcInN0cm9rZS1saW5lY2FwXCIsIFwic3Ryb2tlLWxpbmVqb2luXCIsIFwic3Ryb2tlLW1pdGVybGltaXRcIiwgXCJzdHJva2Utb3BhY2l0eVwiLCBcInN0cm9rZS13aWR0aFwiLCBcInN0eWxlXCIsIFwic3VyZmFjZVNjYWxlXCIsIFwic3luY0JlaGF2aW9yXCIsIFwic3luY0JlaGF2aW9yRGVmYXVsdFwiLCBcInN5bmNNYXN0ZXJcIiwgXCJzeW5jVG9sZXJhbmNlXCIsIFwic3luY1RvbGVyYW5jZURlZmF1bHRcIiwgXCJzeXN0ZW1MYW5ndWFnZVwiLFxuICAgICAgICBcInRhYmxlVmFsdWVzXCIsIFwidGFyZ2V0XCIsIFwidGFyZ2V0WFwiLCBcInRhcmdldFlcIiwgXCJ0ZXh0LWFuY2hvclwiLCBcInRleHQtZGVjb3JhdGlvblwiLCBcInRleHQtcmVuZGVyaW5nXCIsIFwidGV4dExlbmd0aFwiLCBcInRpbWVsaW5lQmVnaW5cIiwgXCJ0aW1lbGluZWJlZ2luXCIsIFwidGl0bGVcIiwgXCJ0b1wiLCBcInRyYW5zZm9ybVwiLCBcInRyYW5zZm9ybUJlaGF2aW9yXCIsIFwidHlwZVwiLFxuICAgICAgICBcInUxXCIsIFwidTJcIiwgXCJ1bmRlcmxpbmUtcG9zaXRpb25cIiwgXCJ1bmRlcmxpbmUtdGhpY2tuZXNzXCIsIFwidW5pY29kZVwiLCBcInVuaWNvZGUtYmlkaVwiLCBcInVuaWNvZGUtcmFuZ2VcIiwgXCJ1bml0cy1wZXItZW1cIixcbiAgICAgICAgXCJ2LWFscGhhYmV0aWNcIiwgXCJ2LWhhbmdpbmdcIiwgXCJ2LWlkZW9ncmFwaGljXCIsIFwidi1tYXRoZW1hdGljYWxcIiwgXCJ2YWx1ZXNcIiwgXCJ2ZXJzaW9uXCIsIFwidmVydC1hZHYteVwiLCBcInZlcnQtb3JpZ2luLXhcIiwgXCJ2ZXJ0LW9yaWdpbi15XCIsIFwidmlld0JveFwiLCBcInZpZXdUYXJnZXRcIiwgXCJ2aXNpYmlsaXR5XCIsXG4gICAgICAgIFwid2lkdGhcIiwgXCJ3aWR0aHNcIiwgXCJ3b3JkLXNwYWNpbmdcIiwgXCJ3cml0aW5nLW1vZGVcIixcbiAgICAgICAgXCJ4XCIsIFwieC1oZWlnaHRcIiwgXCJ4MVwiLCBcIngyXCIsIFwieENoYW5uZWxTZWxlY3RvclwiLFxuICAgICAgICBcInlcIiwgXCJ5MVwiLCBcInkyXCIsIFwieUNoYW5uZWxTZWxlY3RvclwiLFxuICAgICAgICBcInpcIiwgXCJ6b29tQW5kUGFuXCJcbiAgICAgIF0sXG4gICAgICBodG1sQXR0cmlidXRlTmFtZXMgPSBbXG4gICAgICAgIFwiYWNjZXB0XCIsIFwiYWNjZXB0Q2hhcnNldFwiLCBcImFjY2Vzc0tleVwiLCBcImFjdGlvblwiLCBcImFsbG93XCIsIFwiYWxsb3dGdWxsU2NyZWVuXCIsIFwiYWxsb3dUcmFuc3BhcmVuY3lcIiwgXCJhbHRcIiwgXCJhc3luY1wiLCBcImF1dG9Db21wbGV0ZVwiLCBcImF1dG9Gb2N1c1wiLCBcImF1dG9QbGF5XCIsXG4gICAgICAgIFwiY2FwdHVyZVwiLCBcImNlbGxQYWRkaW5nXCIsIFwiY2VsbFNwYWNpbmdcIiwgXCJjaGFsbGVuZ2VcIiwgXCJjaGFyU2V0XCIsIFwiY2hlY2tlZFwiLCBcImNpdGVcIiwgXCJjbGFzc0lEXCIsIFwiY2xhc3NOYW1lXCIsIFwiY29sU3BhblwiLCBcImNvbHNcIiwgXCJjb250ZW50XCIsIFwiY29udGVudEVkaXRhYmxlXCIsIFwiY29udGV4dE1lbnVcIiwgXCJjb250cm9sc1wiLCBcImNvb3Jkc1wiLCBcImNyb3NzT3JpZ2luXCIsXG4gICAgICAgIFwiZGF0YVwiLCBcImRhdGVUaW1lXCIsIFwiZGVmYXVsdFwiLCBcImRlZmVyXCIsIFwiZGlyXCIsIFwiZGlzYWJsZWRcIiwgXCJkb3dubG9hZFwiLCBcImRyYWdnYWJsZVwiLFxuICAgICAgICBcImVuY1R5cGVcIixcbiAgICAgICAgXCJmb3JtXCIsIFwiZm9ybUFjdGlvblwiLCBcImZvcm1FbmNUeXBlXCIsIFwiZm9ybU1ldGhvZFwiLCBcImZvcm1Ob1ZhbGlkYXRlXCIsIFwiZm9ybVRhcmdldFwiLCBcImZyYW1lQm9yZGVyXCIsXG4gICAgICAgIFwiaGVhZGVyc1wiLCBcImhlaWdodFwiLCBcImhpZGRlblwiLCBcImhpZ2hcIiwgXCJocmVmXCIsIFwiaHJlZkxhbmdcIiwgXCJodG1sRm9yXCIsIFwiaHR0cEVxdWl2XCIsXG4gICAgICAgIFwiaWNvblwiLCBcImlkXCIsIFwiaW5wdXRNb2RlXCIsIFwiaW50ZWdyaXR5XCIsIFwiaXNcIixcbiAgICAgICAgXCJrZXlQYXJhbXNcIiwgXCJrZXlUeXBlXCIsIFwia2luZFwiLFxuICAgICAgICBcImxhYmVsXCIsIFwibGFuZ1wiLCBcImxpc3RcIiwgXCJsb29wXCIsIFwibG93XCIsXG4gICAgICAgIFwibWFuaWZlc3RcIiwgXCJtYXJnaW5IZWlnaHRcIiwgXCJtYXJnaW5XaWR0aFwiLCBcIm1heFwiLCBcIm1heExlbmd0aFwiLCBcIm1lZGlhXCIsIFwibWVkaWFHcm91cFwiLCBcIm1ldGhvZFwiLCBcIm1pblwiLCBcIm1pbkxlbmd0aFwiLCBcIm11bHRpcGxlXCIsIFwibXV0ZWRcIixcbiAgICAgICAgXCJuYW1lXCIsIFwibm9WYWxpZGF0ZVwiLCBcIm5vbmNlXCIsXG4gICAgICAgIFwib3BlblwiLCBcIm9wdGltdW1cIixcbiAgICAgICAgXCJwYXR0ZXJuXCIsIFwicGxhY2Vob2xkZXJcIiwgXCJwb3N0ZXJcIiwgXCJwcmVsb2FkXCIsIFwicHJvZmlsZVwiLFxuICAgICAgICBcInJhZGlvR3JvdXBcIiwgXCJyZWFkT25seVwiLCBcInJlbFwiLCBcInJlcXVpcmVkXCIsIFwicmV2ZXJzZWRcIiwgXCJyb2xlXCIsIFwicm93U3BhblwiLCBcInJvd3NcIixcbiAgICAgICAgXCJzYW5kYm94XCIsIFwic2NvcGVcIiwgXCJzY29wZWRcIiwgXCJzY3JvbGxpbmdcIiwgXCJzZWFtbGVzc1wiLCBcInNlbGVjdGVkXCIsIFwic2hhcGVcIiwgXCJzaXplXCIsIFwic2l6ZXNcIiwgXCJzcGFuXCIsIFwic3BlbGxDaGVja1wiLCBcInNyY1wiLCBcInNyY0RvY1wiLCBcInNyY0xhbmdcIiwgXCJzcmNTZXRcIiwgXCJzdGFydFwiLCBcInN0ZXBcIiwgXCJzdHlsZVwiLCBcInN1bW1hcnlcIixcbiAgICAgICAgXCJ0YWJJbmRleFwiLCBcInRhcmdldFwiLCBcInRpdGxlXCIsIFwidHlwZVwiLFxuICAgICAgICBcInVzZU1hcFwiLFxuICAgICAgICBcInZhbHVlXCIsXG4gICAgICAgIFwid2lkdGhcIixcbiAgICAgICAgXCJ3bW9kZVwiLFxuICAgICAgICBcIndyYXBcIlxuICAgICAgXTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IENVVF9FVkVOVF9UWVBFID0gXCJjdXRcIjtcbmV4cG9ydCBjb25zdCBDT1BZX0VWRU5UX1RZUEUgPSBcImNvcHlcIjtcbmV4cG9ydCBjb25zdCBCTFVSX0VWRU5UX1RZUEUgPSBcImJsdXJcIjtcbmV4cG9ydCBjb25zdCBQQVNURV9FVkVOVF9UWVBFID0gXCJwYXN0ZVwiO1xuZXhwb3J0IGNvbnN0IFdIRUVMX0VWRU5UX1RZUEUgPSBcIndoZWVsXCI7XG5leHBvcnQgY29uc3QgSU5QVVRfRVZFTlRfVFlQRSA9IFwiaW5wdXRcIjtcbmV4cG9ydCBjb25zdCBGT0NVU19FVkVOVF9UWVBFID0gXCJmb2N1c1wiO1xuZXhwb3J0IGNvbnN0IENMSUNLX0VWRU5UX1RZUEUgPSBcImNsaWNrXCI7XG5leHBvcnQgY29uc3QgS0VZVVBfRVZFTlRfVFlQRSA9IFwia2V5dXBcIjtcbmV4cG9ydCBjb25zdCBTRUxFQ1RfRVZFTlRfVFlQRSA9IFwic2VsZWN0XCI7XG5leHBvcnQgY29uc3QgQ0hBTkdFX0VWRU5UX1RZUEUgPSBcImNoYW5nZVwiO1xuZXhwb3J0IGNvbnN0IFJFU0laRV9FVkVOVF9UWVBFID0gXCJyZXNpemVcIjtcbmV4cG9ydCBjb25zdCBTQ1JPTExfRVZFTlRfVFlQRSA9IFwic2Nyb2xsXCI7XG5leHBvcnQgY29uc3QgS0VZRE9XTl9FVkVOVF9UWVBFID0gXCJrZXlkb3duXCI7XG5leHBvcnQgY29uc3QgTU9VU0VVUF9FVkVOVF9UWVBFID0gXCJtb3VzZXVwXCI7XG5leHBvcnQgY29uc3QgQVVYQ0xJQ0tfRVZFTlRfVFlQRSA9IFwiYXV4Y2xpY2tcIjtcbmV4cG9ydCBjb25zdCBNT1VTRU9VVF9FVkVOVF9UWVBFID0gXCJtb3VzZW91dFwiO1xuZXhwb3J0IGNvbnN0IERCTENMSUNLX0VWRU5UX1RZUEUgPSBcImRibGNsaWNrXCI7XG5leHBvcnQgY29uc3QgVE9VQ0hFTkRfRVZFTlRfVFlQRSA9IFwidG91Y2hlbmRcIjtcbmV4cG9ydCBjb25zdCBUT1VDSE1PVkVfRVZFTlRfVFlQRSA9IFwidG91Y2htb3ZlXCI7XG5leHBvcnQgY29uc3QgTU9VU0VPVkVSX0VWRU5UX1RZUEUgPSBcIm1vdXNlb3ZlclwiO1xuZXhwb3J0IGNvbnN0IE1PVVNFRE9XTl9FVkVOVF9UWVBFID0gXCJtb3VzZWRvd25cIjtcbmV4cG9ydCBjb25zdCBNT1VTRU1PVkVfRVZFTlRfVFlQRSA9IFwibW91c2Vtb3ZlXCI7XG5leHBvcnQgY29uc3QgVE9VQ0hTVEFSVF9FVkVOVF9UWVBFID0gXCJ0b3VjaHN0YXJ0XCI7XG5leHBvcnQgY29uc3QgQ09OVEVYVE1FTlVfRVZFTlRfVFlQRSA9IFwiY29udGV4dG1lbnVcIjtcbmV4cG9ydCBjb25zdCBET1VCTEVfQ0xJQ0tfRVZFTlRfVFlQRSA9IFwiZG91YmxlY2xpY2tcIjtcbmV4cG9ydCBjb25zdCBTRUxFQ1RJT05DSEFOR0VfRVZFTlRfVFlQRSA9IFwic2VsZWN0aW9uY2hhbmdlXCI7XG5leHBvcnQgY29uc3QgRlVMTFNDUkVFTkNIQU5HRV9FVkVOVF9UWVBFID0gXCJmdWxsc2NyZWVuY2hhbmdlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgQ1VUX0VWRU5UX1RZUEUsXG4gIENPUFlfRVZFTlRfVFlQRSxcbiAgQkxVUl9FVkVOVF9UWVBFLFxuICBQQVNURV9FVkVOVF9UWVBFLFxuICBXSEVFTF9FVkVOVF9UWVBFLFxuICBJTlBVVF9FVkVOVF9UWVBFLFxuICBGT0NVU19FVkVOVF9UWVBFLFxuICBDTElDS19FVkVOVF9UWVBFLFxuICBLRVlVUF9FVkVOVF9UWVBFLFxuICBTRUxFQ1RfRVZFTlRfVFlQRSxcbiAgQ0hBTkdFX0VWRU5UX1RZUEUsXG4gIFJFU0laRV9FVkVOVF9UWVBFLFxuICBTQ1JPTExfRVZFTlRfVFlQRSxcbiAgS0VZRE9XTl9FVkVOVF9UWVBFLFxuICBNT1VTRVVQX0VWRU5UX1RZUEUsXG4gIEFVWENMSUNLX0VWRU5UX1RZUEUsXG4gIE1PVVNFT1VUX0VWRU5UX1RZUEUsXG4gIERCTENMSUNLX0VWRU5UX1RZUEUsXG4gIFRPVUNIRU5EX0VWRU5UX1RZUEUsXG4gIFRPVUNITU9WRV9FVkVOVF9UWVBFLFxuICBNT1VTRU9WRVJfRVZFTlRfVFlQRSxcbiAgTU9VU0VET1dOX0VWRU5UX1RZUEUsXG4gIE1PVVNFTU9WRV9FVkVOVF9UWVBFLFxuICBUT1VDSFNUQVJUX0VWRU5UX1RZUEUsXG4gIENPTlRFWFRNRU5VX0VWRU5UX1RZUEUsXG4gIERPVUJMRV9DTElDS19FVkVOVF9UWVBFLFxuICBTRUxFQ1RJT05DSEFOR0VfRVZFTlRfVFlQRSxcbiAgRlVMTFNDUkVFTkNIQU5HRV9FVkVOVF9UWVBFXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgV0lMRENBUkQgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhkb21FbGVtZW50cykge1xuICBjb25zdCBkb21FbGVtZW50c1dpdGhFbGVtZW50cyA9IGZpbHRlckRPTU5vZGVzKGRvbUVsZW1lbnRzLCAoZG9tRWxlbWVudCkgPT4ge1xuICAgICAgICAgIGlmICgoZG9tRWxlbWVudC5fX2VsZW1lbnRfXykpIHsgLy8vXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBlbGVtZW50cyA9IGRvbUVsZW1lbnRzV2l0aEVsZW1lbnRzLm1hcCgoZG9tRWxlbWVudCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb21FbGVtZW50Ll9fZWxlbWVudF9fOyAvLy9cblxuICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICB9KTtcblxuICByZXR1cm4gZWxlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlKGRvbU5vZGUsIGhlaWdodCwgYXNjZW5kYW50RE9NTm9kZXMgPSBbXSkge1xuICBpZiAoaGVpZ2h0ID4gMCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBkb21Ob2RlLnBhcmVudEVsZW1lbnQ7ICAvLy9cblxuICAgIGlmIChwYXJlbnRET01Ob2RlICE9PSBudWxsKSB7XG4gICAgICBhc2NlbmRhbnRET01Ob2Rlcy5wdXNoKHBhcmVudERPTU5vZGUpO1xuXG4gICAgICBoZWlnaHQtLTtcblxuICAgICAgYXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZShwYXJlbnRET01Ob2RlLCBoZWlnaHQsIGFzY2VuZGFudERPTU5vZGVzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXNjZW5kYW50RE9NTm9kZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZShkb21Ob2RlLCBkZXB0aCwgZGVzY2VuZGFudERPTU5vZGVzID0gW10pIHtcbiAgaWYgKGRlcHRoID4gMCkge1xuICAgIGNvbnN0IGNoaWxkRE9NTm9kZXMgPSBkb21Ob2RlLmNoaWxkTm9kZXM7ICAvLy9cblxuICAgIHB1c2goZGVzY2VuZGFudERPTU5vZGVzLCBjaGlsZERPTU5vZGVzKTtcblxuICAgIGRlcHRoLS07XG5cbiAgICBjaGlsZERPTU5vZGVzLmZvckVhY2goKGNoaWxkRE9NTm9kZSkgPT4ge1xuICAgICAgZGVzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUoY2hpbGRET01Ob2RlLCBkZXB0aCwgZGVzY2VuZGFudERPTU5vZGVzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBkZXNjZW5kYW50RE9NTm9kZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJET01Ob2Rlc0J5U2VsZWN0b3IoZG9tTm9kZXMsIHNlbGVjdG9yKSB7XG4gIGNvbnN0IGZpbHRlcmVkRE9NTm9kZXMgPSBmaWx0ZXJET01Ob2Rlcyhkb21Ob2RlcywgKGRvbU5vZGUpID0+IHtcbiAgICBpZiAoZG9tTm9kZU1hdGNoZXNTZWxlY3Rvcihkb21Ob2RlLCBzZWxlY3RvcikpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGZpbHRlcmVkRE9NTm9kZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkb21Ob2RlTWF0Y2hlc1NlbGVjdG9yKGRvbU5vZGUsIHNlbGVjdG9yKSB7XG4gIGNvbnN0IGRvbU5vZGVUeXBlID0gZG9tTm9kZS5ub2RlVHlwZTsgLy8vXG5cbiAgc3dpdGNoIChkb21Ob2RlVHlwZSkge1xuICAgIGNhc2UgTm9kZS5FTEVNRU5UX05PREU6IHtcbiAgICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb21Ob2RlOyAvLy9cblxuICAgICAgcmV0dXJuIGRvbUVsZW1lbnQubWF0Y2hlcyhzZWxlY3Rvcik7XG4gICAgfVxuXG4gICAgY2FzZSBOb2RlLlRFWFRfTk9ERToge1xuICAgICAgaWYgKHNlbGVjdG9yID09PSBXSUxEQ0FSRCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJET01Ob2Rlcyhkb21Ob2RlcywgdGVzdCkge1xuICBjb25zdCBmaWx0ZXJlZERPTU5vZGVzID0gW10sXG4gICAgICAgIGRvbU5vZGVzTGVuZ3RoID0gZG9tTm9kZXMubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkb21Ob2Rlc0xlbmd0aDsgaW5kZXgrKykge1xuICAgIGNvbnN0IGRvbU5vZGUgPSBkb21Ob2Rlc1tpbmRleF0sXG4gICAgICAgICAgcmVzdWx0ID0gdGVzdChkb21Ob2RlKTtcblxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIGZpbHRlcmVkRE9NTm9kZXMucHVzaChkb21Ob2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmlsdGVyZWRET01Ob2Rlcztcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBXSUxEQ0FSRCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGRvbU5vZGVNYXRjaGVzU2VsZWN0b3IsIGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzLCBmaWx0ZXJET01Ob2Rlc0J5U2VsZWN0b3IsIGFzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUsIGRlc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9kb21cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBhcmVudEVsZW1lbnQoc2VsZWN0b3IgPSBXSUxEQ0FSRCkge1xuICBsZXQgcGFyZW50RWxlbWVudCA9IG51bGw7XG5cbiAgY29uc3QgcGFyZW50RE9NRWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudC5wYXJlbnRFbGVtZW50OyAvLy9cblxuICBpZiAocGFyZW50RE9NRWxlbWVudCAhPT0gbnVsbCkge1xuICAgIGlmIChwYXJlbnRET01FbGVtZW50Lm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICBjb25zdCBwYXJlbnRET01FbGVtZW50cyA9IFtcbiAgICAgICAgICAgICAgcGFyZW50RE9NRWxlbWVudFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHBhcmVudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMocGFyZW50RE9NRWxlbWVudHMpLFxuICAgICAgICAgICAgZmlyc3RQYXJlbnRFbGVtZW50ID0gZmlyc3QocGFyZW50RWxlbWVudHMpO1xuXG4gICAgICBwYXJlbnRFbGVtZW50ID0gZmlyc3RQYXJlbnRFbGVtZW50IHx8IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcmVudEVsZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDaGlsZEVsZW1lbnRzKHNlbGVjdG9yID0gV0lMRENBUkQpIHtcbiAgY29uc3QgY2hpbGRET01Ob2RlcyA9IHRoaXMuZG9tRWxlbWVudC5jaGlsZE5vZGVzLCAvLy9cbiAgICAgICAgY2hpbGRET01FbGVtZW50cyA9IGZpbHRlckRPTU5vZGVzQnlTZWxlY3RvcihjaGlsZERPTU5vZGVzLCBzZWxlY3RvciksXG4gICAgICAgIGNoaWxkRWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhjaGlsZERPTUVsZW1lbnRzKTtcblxuICByZXR1cm4gY2hpbGRFbGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFzY2VuZGFudEVsZW1lbnRzKHNlbGVjdG9yID0gV0lMRENBUkQsIG1heGltdW1IZWlnaHQgPSBJbmZpbml0eSkge1xuICBjb25zdCBoZWlnaHQgPSBtYXhpbXVtSGVpZ2h0LCAvLy9cbiAgICAgICAgZG9tTm9kZSA9IHRoaXMuZG9tRWxlbWVudCwgIC8vL1xuICAgICAgICBhc2NlbmRhbnRET01Ob2RlcyA9IGFzY2VuZGFudERPTU5vZGVzRnJvbURPTU5vZGUoZG9tTm9kZSwgaGVpZ2h0KSxcbiAgICAgICAgYXNjZW5kYW50RE9NRWxlbWVudHMgPSBmaWx0ZXJET01Ob2Rlc0J5U2VsZWN0b3IoYXNjZW5kYW50RE9NTm9kZXMsIHNlbGVjdG9yKSxcbiAgICAgICAgYXNjZW5kYW50RWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhhc2NlbmRhbnRET01FbGVtZW50cyk7XG5cbiAgcmV0dXJuIGFzY2VuZGFudEVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVzY2VuZGFudEVsZW1lbnRzKHNlbGVjdG9yID0gV0lMRENBUkQsIG1heGltdW1EZXB0aCA9IEluZmluaXR5KSB7XG4gIGNvbnN0IGRlcHRoID0gbWF4aW11bURlcHRoLCAvLy9cbiAgICAgICAgZG9tTm9kZSA9IHRoaXMuZG9tRWxlbWVudCwgIC8vL1xuICAgICAgICBkZXNjZW5kYW50RE9NTm9kZXMgPSBkZXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZShkb21Ob2RlLCBkZXB0aCksXG4gICAgICAgIGRlc2NlbmRhbnRET01FbGVtZW50cyA9IGZpbHRlckRPTU5vZGVzQnlTZWxlY3RvcihkZXNjZW5kYW50RE9NTm9kZXMsIHNlbGVjdG9yKSxcbiAgICAgICAgZGVzY2VuZGFudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoZGVzY2VuZGFudERPTUVsZW1lbnRzKTtcblxuICByZXR1cm4gZGVzY2VuZGFudEVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmV4dFNpYmxpbmdFbGVtZW50KHNlbGVjdG9yID0gV0lMRENBUkQpIHtcbiAgbGV0IG5leHRTaWJsaW5nRWxlbWVudCA9IG51bGw7XG5cbiAgY29uc3QgbmV4dFNpYmxpbmdET01Ob2RlID0gdGhpcy5kb21FbGVtZW50Lm5leHRTaWJsaW5nOyAvLy9cblxuICBpZiAoKG5leHRTaWJsaW5nRE9NTm9kZSAhPT0gbnVsbCkgJiYgZG9tTm9kZU1hdGNoZXNTZWxlY3RvcihuZXh0U2libGluZ0RPTU5vZGUsIHNlbGVjdG9yKSkge1xuICAgIG5leHRTaWJsaW5nRWxlbWVudCA9IG5leHRTaWJsaW5nRE9NTm9kZS5fX2VsZW1lbnRfXyB8fCBudWxsO1xuICB9XG5cbiAgcmV0dXJuIG5leHRTaWJsaW5nRWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByZXZpb3VzU2libGluZ0VsZW1lbnQoc2VsZWN0b3IgPSBXSUxEQ0FSRCkge1xuICBsZXQgcHJldmlvdXNTaWJsaW5nRWxlbWVudCA9IG51bGw7XG5cbiAgY29uc3QgcHJldmlvdXNTaWJsaW5nRE9NTm9kZSA9IHRoaXMuZG9tRWxlbWVudC5wcmV2aW91c1NpYmxpbmc7ICAvLy9cblxuICBpZiAoKHByZXZpb3VzU2libGluZ0RPTU5vZGUgIT09IG51bGwpICYmIGRvbU5vZGVNYXRjaGVzU2VsZWN0b3IocHJldmlvdXNTaWJsaW5nRE9NTm9kZSwgc2VsZWN0b3IpKSB7XG4gICAgcHJldmlvdXNTaWJsaW5nRWxlbWVudCA9IHByZXZpb3VzU2libGluZ0RPTU5vZGUuX19lbGVtZW50X18gfHwgbnVsbDtcbiAgfVxuXG4gIHJldHVybiBwcmV2aW91c1NpYmxpbmdFbGVtZW50O1xufVxuXG5jb25zdCBlbGVtZW50TWl4aW5zID0ge1xuICBnZXRQYXJlbnRFbGVtZW50LFxuICBnZXRDaGlsZEVsZW1lbnRzLFxuICBnZXRBc2NlbmRhbnRFbGVtZW50cyxcbiAgZ2V0RGVzY2VuZGFudEVsZW1lbnRzLFxuICBnZXROZXh0U2libGluZ0VsZW1lbnQsXG4gIGdldFByZXZpb3VzU2libGluZ0VsZW1lbnRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVsZW1lbnRNaXhpbnM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGdldFBhcmVudEVsZW1lbnQsIGdldEFzY2VuZGFudEVsZW1lbnRzLCBnZXROZXh0U2libGluZ0VsZW1lbnQsIGdldFByZXZpb3VzU2libGluZ0VsZW1lbnQgfSBmcm9tIFwiLi4vbWl4aW5zL2VsZW1lbnRcIjtcblxuY29uc3QgdGV4dEVsZW1lbnRNaXhpbnMgPSB7XG4gIGdldFBhcmVudEVsZW1lbnQsXG4gIGdldEFzY2VuZGFudEVsZW1lbnRzLFxuICBnZXROZXh0U2libGluZ0VsZW1lbnQsXG4gIGdldFByZXZpb3VzU2libGluZ0VsZW1lbnRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRleHRFbGVtZW50TWl4aW5zO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgT2Zmc2V0IGZyb20gXCIuL29mZnNldFwiO1xuaW1wb3J0IEJvdW5kcyBmcm9tIFwiLi9ib3VuZHNcIjtcbmltcG9ydCB0ZXh0RWxlbWVudE1peGlucyBmcm9tIFwiLi9taXhpbnMvdGV4dEVsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih0ZXh0KSB7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCk7IC8vL1xuXG4gICAgdGhpcy5kb21FbGVtZW50Ll9fZWxlbWVudF9fID0gdGhpczsgLy8vXG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRUZXh0KCkge1xuICAgIGNvbnN0IG5vZGVWYWx1ZSA9IHRoaXMuZG9tRWxlbWVudC5ub2RlVmFsdWUsXG4gICAgICAgICAgdGV4dCA9IG5vZGVWYWx1ZTsgLy8vXG5cbiAgICByZXR1cm4gdGV4dDtcbiAgfVxuXG4gIHNldFRleHQodGV4dCkge1xuICAgIGNvbnN0IG5vZGVWYWx1ZSA9IHRleHQ7IC8vL1xuXG4gICAgdGhpcy5kb21FbGVtZW50Lm5vZGVWYWx1ZSA9IG5vZGVWYWx1ZTtcbiAgfVxuXG4gIGdldE9mZnNldCgpIHtcbiAgICBjb25zdCB0b3AgPSB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0VG9wLCAgLy8vXG4gICAgICAgICAgbGVmdCA9IHRoaXMuZG9tRWxlbWVudC5vZmZzZXRMZWZ0LCAgLy8vXG4gICAgICAgICAgb2Zmc2V0ID0gbmV3IE9mZnNldCh0b3AsIGxlZnQpO1xuXG4gICAgcmV0dXJuIG9mZnNldDtcbiAgfVxuXG4gIGdldEJvdW5kcygpIHtcbiAgICBjb25zdCBib3VuZGluZ0NsaWVudFJlY3QgPSB0aGlzLmRvbUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgYm91bmRzID0gQm91bmRzLmZyb21Cb3VuZGluZ0NsaWVudFJlY3QoYm91bmRpbmdDbGllbnRSZWN0KTtcblxuICAgIHJldHVybiBib3VuZHM7XG4gIH1cblxuICBnZXRXaWR0aCgpIHtcbiAgICBjb25zdCBjbGllbnRXaWR0aCA9IHRoaXMuZG9tRWxlbWVudC5jbGllbnRXaWR0aCxcbiAgICAgICAgICB3aWR0aCA9IGNsaWVudFdpZHRoOyAgLy8vXG5cbiAgICByZXR1cm4gd2lkdGg7XG4gIH1cblxuICBnZXRIZWlnaHQoKSB7XG4gICAgY29uc3QgY2xpZW50SGVpZ2h0ID0gdGhpcy5kb21FbGVtZW50LmNsaWVudEhlaWdodCxcbiAgICAgICAgICBoZWlnaHQgPSBjbGllbnRIZWlnaHQ7ICAvLy9cblxuICAgIHJldHVybiBoZWlnaHQ7XG4gIH1cblxuICBwcmVwZW5kVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LnByZXBlbmQodGhpcyk7IH1cblxuICBhcHBlbmRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQuYXBwZW5kKHRoaXMpOyB9XG5cbiAgYWRkVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LmFkZCh0aGlzKTsgfVxuXG4gIHJlbW92ZUZyb20ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LnJlbW92ZSh0aGlzKTsgfVxuXG4gIGluc2VydEJlZm9yZShzaWJsaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50LnBhcmVudE5vZGUsIC8vL1xuICAgICAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudDsgIC8vL1xuXG4gICAgcGFyZW50RE9NTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCk7XG4gIH1cblxuICBpbnNlcnRBZnRlcihzaWJsaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50LnBhcmVudE5vZGUsIC8vL1xuICAgICAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudDsgIC8vL1xuXG4gICAgcGFyZW50RE9NTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudC5uZXh0U2libGluZyk7ICAvLy9cbiAgfVxuXG4gIHJlbW92ZSgpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlKCk7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihUZXh0RWxlbWVudC5wcm90b3R5cGUsIHRleHRFbGVtZW50TWl4aW5zKTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRleHRFbGVtZW50IGZyb20gXCIuLi90ZXh0RWxlbWVudFwiO1xuXG5pbXBvcnQgeyBTVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVGYWxzZXlFbGVtZW50cyhlbGVtZW50cykge1xuICBlbGVtZW50cyA9IGVsZW1lbnRzLnJlZHVjZSgoZWxlbWVudHMsIGVsZW1lbnQpID0+IHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgZWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudHM7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gZWxlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlU3RyaW5nc1dpdGhUZXh0RWxlbWVudHMoZWxlbWVudHMpIHtcbiAgZWxlbWVudHMgPSBlbGVtZW50cy5tYXAoKGVsZW1lbnQpID0+IHsgIC8vL1xuICAgIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gU1RSSU5HKSB7XG4gICAgICBjb25zdCB0ZXh0ID0gZWxlbWVudCwgIC8vL1xuICAgICAgICAgICAgdGV4dEVsZW1lbnQgPSBuZXcgVGV4dEVsZW1lbnQodGV4dCk7XG5cbiAgICAgIGVsZW1lbnQgPSB0ZXh0RWxlbWVudDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH0pO1xuXG4gIHJldHVybiBlbGVtZW50cztcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY29tYmluZSwgcHJ1bmUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL29iamVjdFwiO1xuaW1wb3J0IHsgZmlyc3QsIGd1YXJhbnRlZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGNhbWVsQ2FzZVRvU25ha2VDYXNlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IGlzSFRNTEF0dHJpYnV0ZU5hbWUsIGlzU1ZHQXR0cmlidXRlTmFtZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvbmFtZVwiO1xuaW1wb3J0IHsgREJMQ0xJQ0tfRVZFTlRfVFlQRSwgRE9VQkxFX0NMSUNLX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi4vZXZlbnRUeXBlc1wiO1xuaW1wb3J0IHsgcmVtb3ZlRmFsc2V5RWxlbWVudHMsIHJlcGxhY2VTdHJpbmdzV2l0aFRleHRFbGVtZW50cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudHNcIjtcbmltcG9ydCB7IEZPUiwgQ0xBU1MsIE9CSkVDVCwgSFRNTF9GT1IsIENMQVNTX05BTUUsIEJPT0xFQU4sIEZVTkNUSU9OLCBTVkdfTkFNRVNQQUNFX1VSSSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZnVuY3Rpb24gYXBwbHlQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGRlZmF1bHRQcm9wZXJ0aWVzLCBpZ25vcmVkUHJvcGVydGllcykge1xuICB0aGlzLnByb3BlcnRpZXMgPSBjb21iaW5lKHByb3BlcnRpZXMsIGRlZmF1bHRQcm9wZXJ0aWVzKTtcblxuICBwcm9wZXJ0aWVzID0gcHJ1bmUodGhpcy5wcm9wZXJ0aWVzLCBpZ25vcmVkUHJvcGVydGllcyk7IC8vL1xuXG4gIGNvbnN0IG5hbWVzcGFjZVVSSSA9IHRoaXMuZG9tRWxlbWVudC5uYW1lc3BhY2VVUkksXG4gICAgICAgIHN2ZyA9IChuYW1lc3BhY2VVUkkgPT09IFNWR19OQU1FU1BBQ0VfVVJJKSwgLy8vXG4gICAgICAgIHByb3BlcnRpZXNLZXlzID0gT2JqZWN0LmtleXMocHJvcGVydGllcyksXG4gICAgICAgIG5hbWVzID0gcHJvcGVydGllc0tleXM7ICAvLy89XG5cbiAgbmFtZXMuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gcHJvcGVydGllc1tuYW1lXSxcbiAgICAgICAgICBuYW1lSGFuZGxlck5hbWUgPSBpc05hbWVIYW5kbGVyTmFtZShuYW1lKSxcbiAgICAgICAgICBuYW1lQ3VzdG9tSGFuZGxlck5hbWUgPSBpc05hbWVDdXN0b21IYW5kbGVyTmFtZShuYW1lKTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmIChuYW1lSGFuZGxlck5hbWUpIHtcbiAgICAgIGFkZEhhbmRsZXIodGhpcywgbmFtZSwgdmFsdWUpO1xuICAgIH0gZWxzZSBpZiAobmFtZUN1c3RvbUhhbmRsZXJOYW1lKSB7XG4gICAgICBhZGRDdXN0b21IYW5kbGVyKHRoaXMsIG5hbWUsIHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbmFtZUF0dHJpYnV0ZU5hbWUgPSBpc05hbWVBdHRyaWJ1dGVOYW1lKG5hbWUsIHN2Zyk7XG5cbiAgICAgIGlmIChuYW1lQXR0cmlidXRlTmFtZSkge1xuICAgICAgICBhZGRBdHRyaWJ1dGUodGhpcywgbmFtZSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgY2hpbGRFbGVtZW50cyA9IGNoaWxkRWxlbWVudHNGcm9tRWxlbWVudCh0aGlzKSB8fCBwcm9wZXJ0aWVzLmNoaWxkRWxlbWVudHMsICAvLy9cbiAgICAgICAgY29udGV4dCA9IHt9O1xuXG4gIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgdXBkYXRlQ29udGV4dChjaGlsZEVsZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgdGhpcy5hZGQoY2hpbGRFbGVtZW50KTtcbiAgfSk7XG5cbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbn1cblxuZnVuY3Rpb24gZ2V0UHJvcGVydGllcygpIHtcbiAgcmV0dXJuIHRoaXMucHJvcGVydGllcztcbn1cblxuZnVuY3Rpb24gZ2V0Q29udGV4dCgpIHtcbiAgcmV0dXJuIHRoaXMuY29udGV4dDtcbn1cblxuZnVuY3Rpb24gYXNzaWduQ29udGV4dChuYW1lcywgdGhlbkRlbGV0ZSkge1xuICBjb25zdCBhcmd1bWVudHNMZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuXG4gIGlmIChhcmd1bWVudHNMZW5ndGggPT09IDEpIHtcbiAgICBjb25zdCBmaXJzdEFyZ3VtZW50ID0gZmlyc3QoYXJndW1lbnRzKTtcblxuICAgIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gQk9PTEVBTikge1xuICAgICAgbmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLmNvbnRleHQpO1xuXG4gICAgICB0aGVuRGVsZXRlID0gZmlyc3RBcmd1bWVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhlbkRlbGV0ZSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgaWYgKGFyZ3VtZW50c0xlbmd0aCA9PT0gMCkge1xuICAgIG5hbWVzID0gT2JqZWN0LmtleXModGhpcy5jb250ZXh0KTtcblxuICAgIHRoZW5EZWxldGUgPSB0cnVlO1xuICB9XG5cbiAgbmFtZXMuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5jb250ZXh0W25hbWVdLFxuICAgICAgICAgIHByb3BlcnR5TmFtZSA9IG5hbWUsICAvLy9cbiAgICAgICAgICBkZXNjcmlwdG9yID0ge1xuICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgICAgfTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBwcm9wZXJ0eU5hbWUsIGRlc2NyaXB0b3IpO1xuXG4gICAgaWYgKHRoZW5EZWxldGUpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLmNvbnRleHRbbmFtZV07XG4gICAgfVxuICB9LCBbXSk7XG59XG5cbmNvbnN0IGpzeE1peGlucyA9IHtcbiAgYXBwbHlQcm9wZXJ0aWVzLFxuICBnZXRQcm9wZXJ0aWVzLFxuICBnZXRDb250ZXh0LFxuICBhc3NpZ25Db250ZXh0XG59O1xuXG5leHBvcnQgZGVmYXVsdCBqc3hNaXhpbnM7XG5cbmZ1bmN0aW9uIGNoaWxkRWxlbWVudHNGcm9tRWxlbWVudChlbGVtZW50KSB7XG4gIGxldCBjaGlsZEVsZW1lbnRzID0gbnVsbDtcblxuICBpZiAodHlwZW9mIGVsZW1lbnQuY2hpbGRFbGVtZW50cyA9PT0gRlVOQ1RJT04pIHtcbiAgICBjaGlsZEVsZW1lbnRzID0gZWxlbWVudC5jaGlsZEVsZW1lbnRzLmNhbGwoZWxlbWVudCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzID0gZ3VhcmFudGVlKGNoaWxkRWxlbWVudHMpO1xuXG4gICAgY2hpbGRFbGVtZW50cyA9IHJlbW92ZUZhbHNleUVsZW1lbnRzKGNoaWxkRWxlbWVudHMpO1xuXG4gICAgY2hpbGRFbGVtZW50cyA9IHJlcGxhY2VTdHJpbmdzV2l0aFRleHRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKTtcbiAgfVxuXG4gIHJldHVybiBjaGlsZEVsZW1lbnRzO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVDb250ZXh0KGNoaWxkRWxlbWVudCwgY29udGV4dCkge1xuICBjb25zdCBwYXJlbnRDb250ZXh0ID0gKHR5cGVvZiBjaGlsZEVsZW1lbnQucGFyZW50Q29udGV4dCA9PT0gRlVOQ1RJT04pID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRFbGVtZW50LnBhcmVudENvbnRleHQoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRFbGVtZW50LmNvbnRleHQ7IC8vL1xuXG4gIE9iamVjdC5hc3NpZ24oY29udGV4dCwgcGFyZW50Q29udGV4dCk7XG59XG5cbmZ1bmN0aW9uIGFkZEhhbmRsZXIoZWxlbWVudCwgbmFtZSwgdmFsdWUpIHtcbiAgbGV0IGV2ZW50VHlwZSA9IG5hbWUuc3Vic3RyaW5nKDIpLnRvTG93ZXJDYXNlKCk7IC8vL1xuXG4gIGlmIChldmVudFR5cGUgPT09IERPVUJMRV9DTElDS19FVkVOVF9UWVBFKSB7XG4gICAgZXZlbnRUeXBlID0gREJMQ0xJQ0tfRVZFTlRfVFlQRTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZXIgPSB2YWx1ZTsgIC8vL1xuXG4gIGVsZW1lbnQub25FdmVudChldmVudFR5cGUsIGhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBhZGRDdXN0b21IYW5kbGVyKGVsZW1lbnQsIG5hbWUsIHZhbHVlKSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50VHlwZSA9IGNhbWVsQ2FzZVRvU25ha2VDYXNlKG5hbWUpLnJlcGxhY2UoL29uLWN1c3RvbS0vLCBcIlwiKSxcbiAgICAgICAgY3VzdG9tSGFuZGxlciA9IHZhbHVlOyAgLy8vXG5cbiAgZWxlbWVudC5vbkN1c3RvbUV2ZW50KGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJpYnV0ZShlbGVtZW50LCBuYW1lLCB2YWx1ZSkge1xuICBpZiAobmFtZSA9PT0gQ0xBU1NfTkFNRSkge1xuICAgIG5hbWUgPSBDTEFTUztcbiAgfVxuXG4gIGlmIChuYW1lID09PSBIVE1MX0ZPUikge1xuICAgIG5hbWUgPSBGT1I7XG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSBPQkpFQ1QpIHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xuXG4gICAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGVsZW1lbnQuZG9tRWxlbWVudFtuYW1lXVtrZXldID0gdmFsdWVba2V5XTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IEJPT0xFQU4pIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHZhbHVlID0gbmFtZTsgLy8vXG5cbiAgICAgIGVsZW1lbnQuYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudC5hZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzTmFtZUhhbmRsZXJOYW1lKG5hbWUpIHtcbiAgY29uc3QgbmFtZUhhbmRsZXJOYW1lID0gIC9eb24oPyFDdXN0b20pLy50ZXN0KG5hbWUpOyAgLy8vXG5cbiAgcmV0dXJuIG5hbWVIYW5kbGVyTmFtZTtcbn1cblxuZnVuY3Rpb24gaXNOYW1lQXR0cmlidXRlTmFtZShuYW1lLCBzdmcpIHtcbiAgY29uc3QgbmFtZUF0dHJpYnV0ZU5hbWUgPSBzdmcgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1NWR0F0dHJpYnV0ZU5hbWUobmFtZSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSFRNTEF0dHJpYnV0ZU5hbWUobmFtZSk7XG5cbiAgcmV0dXJuIG5hbWVBdHRyaWJ1dGVOYW1lO1xufVxuXG5mdW5jdGlvbiBpc05hbWVDdXN0b21IYW5kbGVyTmFtZShuYW1lKSB7XG4gIGNvbnN0IG5hbWVDdXN0b21IYW5kbGVyTmFtZSA9IC9eb25DdXN0b20vLnRlc3QobmFtZSk7XG5cbiAgcmV0dXJuIG5hbWVDdXN0b21IYW5kbGVyTmFtZTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgS0VZVVBfRVZFTlRfVFlQRSwgS0VZRE9XTl9FVkVOVF9UWVBFIH0gZnJvbSBcIi4uL2V2ZW50VHlwZXNcIjtcblxuZnVuY3Rpb24gb25LZXlVcChrZXlVcEhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vbkV2ZW50KEtFWVVQX0VWRU5UX1RZUEUsIGtleVVwSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb2ZmS2V5VXAoa2V5VXBIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmRXZlbnQoS0VZVVBfRVZFTlRfVFlQRSwga2V5VXBIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvbktleURvd24oa2V5RG93bkhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vbkV2ZW50KEtFWURPV05fRVZFTlRfVFlQRSwga2V5RG93bkhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9mZktleURvd24oa2V5RG93bkhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vZmZFdmVudChLRVlET1dOX0VWRU5UX1RZUEUsIGtleURvd25IYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5jb25zdCBrZXlNaXhpbnMgPSB7XG4gIG9uS2V5VXAsXG4gIG9mZktleVVwLFxuICBvbktleURvd24sXG4gIG9mZktleURvd25cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGtleU1peGlucztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gZ2V0U3RhdGUoKSB7XG4gIHJldHVybiB0aGlzLnN0YXRlO1xufVxuXG5mdW5jdGlvbiBzZXRTdGF0ZShzdGF0ZSkge1xuICB0aGlzLnN0YXRlID0gc3RhdGU7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVN0YXRlKHN0YXRlKSB7XG4gICh0aGlzLnN0YXRlID09PSB1bmRlZmluZWQpID9cbiAgICB0aGlzLnN0YXRlID0gc3RhdGUgOlxuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLnN0YXRlLCBzdGF0ZSk7XG59XG5cbmNvbnN0IHN0YXRlTWl4aW5zID0ge1xuICBnZXRTdGF0ZSxcbiAgc2V0U3RhdGUsXG4gIHVwZGF0ZVN0YXRlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBzdGF0ZU1peGlucztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgU1BBQ0UgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBSRVNJWkVfRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9ldmVudFR5cGVzXCI7XG5cbmZ1bmN0aW9uIG9uRXZlbnQoZXZlbnRUeXBlcywgaGFuZGxlciwgZWxlbWVudCA9IHRoaXMpIHtcbiAgZXZlbnRUeXBlcyA9IGV2ZW50VHlwZXMuc3BsaXQoU1BBQ0UpOyAvLy9cblxuICBldmVudFR5cGVzLmZvckVhY2goKGV2ZW50VHlwZSkgPT4ge1xuICAgIGlmIChldmVudFR5cGUgPT09IFJFU0laRV9FVkVOVF9UWVBFKSB7XG4gICAgICBjb25zdCByZXNpemVFdmVudExpc3RlbmVycyA9IHRoaXMuZmluZEV2ZW50TGlzdGVuZXJzKFJFU0laRV9FVkVOVF9UWVBFKSxcbiAgICAgICAgICAgIHJlc2l6ZUV2ZW50TGlzdGVuZXJzTGVuZ3RoID0gcmVzaXplRXZlbnRMaXN0ZW5lcnMubGVuZ3RoO1xuXG4gICAgICBpZiAocmVzaXplRXZlbnRMaXN0ZW5lcnNMZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy5yZXNpemVPYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgICAgICAgIGNvbnN0IHJlc2l6ZUV2ZW50TGlzdGVuZXJzID0gdGhpcy5maW5kRXZlbnRMaXN0ZW5lcnMoUkVTSVpFX0VWRU5UX1RZUEUpO1xuXG4gICAgICAgICAgcmVzaXplRXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgocmVzaXplRXZlbnRMaXN0ZW5lcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBudWxsO1xuXG4gICAgICAgICAgICByZXNpemVFdmVudExpc3RlbmVyKGV2ZW50KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5yZXNpemVPYnNlcnZlci5vYnNlcnZlKHRoaXMuZG9tRWxlbWVudClcbiAgICAgIH1cblxuICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGV2ZW50TGlzdGVuZXIgPSB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcblxuICAgICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBldmVudExpc3RlbmVyKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBvZmZFdmVudChldmVudFR5cGVzLCBoYW5kbGVyLCBlbGVtZW50ID0gdGhpcykge1xuICBldmVudFR5cGVzID0gZXZlbnRUeXBlcy5zcGxpdChTUEFDRSk7IC8vL1xuXG4gIGV2ZW50VHlwZXMuZm9yRWFjaCgoZXZlbnRUeXBlKSA9PiB7XG4gICAgaWYgKGV2ZW50VHlwZSA9PT0gUkVTSVpFX0VWRU5UX1RZUEUpIHtcbiAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuXG4gICAgICBjb25zdCByZXNpemVFdmVudExpc3RlbmVycyA9IHRoaXMuZmluZEV2ZW50TGlzdGVuZXJzKFJFU0laRV9FVkVOVF9UWVBFKSxcbiAgICAgICAgICAgIHJlc2l6ZUV2ZW50TGlzdGVuZXJzTGVuZ3RoID0gcmVzaXplRXZlbnRMaXN0ZW5lcnMubGVuZ3RoO1xuXG4gICAgICBpZiAocmVzaXplRXZlbnRMaXN0ZW5lcnNMZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy5yZXNpemVPYnNlcnZlci51bm9ic2VydmUodGhpcy5kb21FbGVtZW50KTtcblxuICAgICAgICBkZWxldGUgdGhpcy5yZXNpemVPYnNlcnZlcjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZXZlbnRMaXN0ZW5lciA9IHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpO1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGV2ZW50TGlzdGVuZXIpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGV2ZW50TGlzdGVuZXIgPSB0aGlzLmNyZWF0ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcblxuICBpZiAoIXRoaXMuZXZlbnRMaXN0ZW5lcnMpIHtcbiAgICB0aGlzLmV2ZW50TGlzdGVuZXJzID0gW107XG4gIH1cblxuICB0aGlzLmV2ZW50TGlzdGVuZXJzLnB1c2goZXZlbnRMaXN0ZW5lcik7XG5cbiAgcmV0dXJuIGV2ZW50TGlzdGVuZXI7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGV2ZW50TGlzdGVuZXIgPSB0aGlzLmZpbmRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCksXG4gICAgICAgIGluZGV4ID0gdGhpcy5ldmVudExpc3RlbmVycy5pbmRleE9mKGV2ZW50TGlzdGVuZXIpLFxuICAgICAgICBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICB0aGlzLmV2ZW50TGlzdGVuZXJzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuXG4gIGlmICh0aGlzLmV2ZW50TGlzdGVuZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgIGRlbGV0ZSB0aGlzLmV2ZW50TGlzdGVuZXJzO1xuICB9XG5cbiAgcmV0dXJuIGV2ZW50TGlzdGVuZXI7XG59XG5cbmZ1bmN0aW9uIGZpbmRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBldmVudExpc3RlbmVyID0gdGhpcy5ldmVudExpc3RlbmVycy5maW5kKChldmVudExpc3RlbmVyKSA9PiB7XG4gICAgaWYgKChldmVudExpc3RlbmVyLmVsZW1lbnQgPT09IGVsZW1lbnQpICYmIChldmVudExpc3RlbmVyLmhhbmRsZXIgPT09IGhhbmRsZXIpICYmIChldmVudExpc3RlbmVyLmV2ZW50VHlwZSA9PT0gZXZlbnRUeXBlKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZXZlbnRMaXN0ZW5lcjtcbn1cblxuZnVuY3Rpb24gZmluZEV2ZW50TGlzdGVuZXJzKGV2ZW50VHlwZSkge1xuICBjb25zdCBldmVudExpc3RlbmVycyA9IFtdO1xuXG4gIGlmICh0aGlzLmV2ZW50TGlzdGVuZXJzKSB7XG4gICAgdGhpcy5ldmVudExpc3RlbmVycy5mb3JFYWNoKChldmVudExpc3RlbmVyKSA9PiB7XG4gICAgICBjb25zdCBmb3VuZCA9IChldmVudExpc3RlbmVyLmV2ZW50VHlwZSA9PT0gZXZlbnRUeXBlKTtcblxuICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgIGV2ZW50TGlzdGVuZXJzLnB1c2goZXZlbnRMaXN0ZW5lcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZXZlbnRMaXN0ZW5lcnM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KSB7XG4gIGxldCBldmVudExpc3RlbmVyO1xuXG4gIGNvbnN0IGhhbmRsZXJFbGVtZW50ID0gZWxlbWVudDsgLy8vXG5cbiAgZXZlbnRMaXN0ZW5lciA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgIGhhbmRsZXIuY2FsbChoYW5kbGVyRWxlbWVudCwgZXZlbnQsIGVsZW1lbnQpO1xuICB9O1xuXG4gIE9iamVjdC5hc3NpZ24oZXZlbnRMaXN0ZW5lciwge1xuICAgIGVsZW1lbnQsXG4gICAgaGFuZGxlcixcbiAgICBldmVudFR5cGVcbiAgfSk7XG5cbiAgcmV0dXJuIGV2ZW50TGlzdGVuZXI7XG59XG5cbmNvbnN0IGV2ZW50TWl4aW5zID0ge1xuICBvbkV2ZW50LFxuICBvZmZFdmVudCxcbiAgYWRkRXZlbnRMaXN0ZW5lcixcbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcixcbiAgZmluZEV2ZW50TGlzdGVuZXIsXG4gIGZpbmRFdmVudExpc3RlbmVycyxcbiAgY3JlYXRlRXZlbnRMaXN0ZW5lclxufTtcblxuZXhwb3J0IGRlZmF1bHQgZXZlbnRNaXhpbnM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IE1PVVNFVVBfRVZFTlRfVFlQRSwgTU9VU0VPVVRfRVZFTlRfVFlQRSwgTU9VU0VET1dOX0VWRU5UX1RZUEUsIE1PVVNFT1ZFUl9FVkVOVF9UWVBFLCBNT1VTRU1PVkVfRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9ldmVudFR5cGVzXCI7XG5cbmZ1bmN0aW9uIG9uTW91c2VVcChtb3VzZVVwSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uRXZlbnQoTU9VU0VVUF9FVkVOVF9UWVBFLCBtb3VzZVVwSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb2ZmTW91c2VVcChtb3VzZVVwSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZkV2ZW50KE1PVVNFVVBfRVZFTlRfVFlQRSwgbW91c2VVcEhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9uTW91c2VPdXQobW91c2VPdXRIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub25FdmVudChNT1VTRU9VVF9FVkVOVF9UWVBFLCBtb3VzZU91dEhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9mZk1vdXNlT3V0KG1vdXNlT3V0SGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZkV2ZW50KE1PVVNFT1VUX0VWRU5UX1RZUEUsIG1vdXNlT3V0SGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb25Nb3VzZURvd24obW91c2VEb3duSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uRXZlbnQoTU9VU0VET1dOX0VWRU5UX1RZUEUsIG1vdXNlRG93bkhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9mZk1vdXNlRG93bihtb3VzZURvd25IYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmRXZlbnQoTU9VU0VET1dOX0VWRU5UX1RZUEUsIG1vdXNlRG93bkhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9uTW91c2VPdmVyKG1vdXNlT3ZlckhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vbkV2ZW50KE1PVVNFT1ZFUl9FVkVOVF9UWVBFLCBtb3VzZU92ZXJIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvZmZNb3VzZU92ZXIobW91c2VPdmVySGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZkV2ZW50KE1PVVNFT1ZFUl9FVkVOVF9UWVBFLCBtb3VzZU92ZXJIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvbk1vdXNlTW92ZShtb3VzZU1vdmVIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub25FdmVudChNT1VTRU1PVkVfRVZFTlRfVFlQRSwgbW91c2VNb3ZlSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb2ZmTW91c2VNb3ZlKG1vdXNlTW92ZUhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vZmZFdmVudChNT1VTRU1PVkVfRVZFTlRfVFlQRSwgbW91c2VNb3ZlSGFuZGxlciwgZWxlbWVudCk7IH1cblxuY29uc3QgbW91c2VNaXhpbnMgPSB7XG4gIG9uTW91c2VVcCxcbiAgb2ZmTW91c2VVcCxcbiAgb25Nb3VzZU91dCxcbiAgb2ZmTW91c2VPdXQsXG4gIG9uTW91c2VEb3duLFxuICBvZmZNb3VzZURvd24sXG4gIG9uTW91c2VPdmVyLFxuICBvZmZNb3VzZU92ZXIsXG4gIG9uTW91c2VNb3ZlLFxuICBvZmZNb3VzZU1vdmVcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1vdXNlTWl4aW5zO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDTElDS19FVkVOVF9UWVBFLCBEQkxDTElDS19FVkVOVF9UWVBFIH0gZnJvbSBcIi4uL2V2ZW50VHlwZXNcIjtcblxuZnVuY3Rpb24gb25DbGljayhjbGlja0hhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vbkV2ZW50KENMSUNLX0VWRU5UX1RZUEUsIGNsaWNrSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb2ZmQ2xpY2soY2xpY2tIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmRXZlbnQoQ0xJQ0tfRVZFTlRfVFlQRSwgY2xpY2tIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvbkRvdWJsZUNsaWNrKGNsaWNrSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uRXZlbnQoREJMQ0xJQ0tfRVZFTlRfVFlQRSwgY2xpY2tIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvZmZEb3VibGVDbGljayhjbGlja0hhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vZmZFdmVudChEQkxDTElDS19FVkVOVF9UWVBFLCBjbGlja0hhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmNvbnN0IGNsaWNrTWl4aW5zID0ge1xuICBvbkNsaWNrLFxuICBvZmZDbGljayxcbiAgb25Eb3VibGVDbGljayxcbiAgb2ZmRG91YmxlQ2xpY2tcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsaWNrTWl4aW5zO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBCTFVSX0VWRU5UX1RZUEUsIEZPQ1VTX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi4vZXZlbnRUeXBlc1wiO1xuXG5mdW5jdGlvbiBvbkJsdXIoYmx1ckhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vbkV2ZW50KEJMVVJfRVZFTlRfVFlQRSwgYmx1ckhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9mZkJsdXIoYmx1ckhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vZmZFdmVudChCTFVSX0VWRU5UX1RZUEUsIGJsdXJIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvbkZvY3VzKGZvY3VzSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uRXZlbnQoRk9DVVNfRVZFTlRfVFlQRSwgZm9jdXNIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvZmZGb2N1cyhmb2N1c0hhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vZmZFdmVudChGT0NVU19FVkVOVF9UWVBFLCBmb2N1c0hhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIGJsdXIoKSB7IHRoaXMuZG9tRWxlbWVudC5ibHVyKCk7IH1cblxuZnVuY3Rpb24gZm9jdXMoKSB7IHRoaXMuZG9tRWxlbWVudC5mb2N1cygpOyB9XG5cbmZ1bmN0aW9uIGhhc0ZvY3VzKCkge1xuICBjb25zdCBmb2N1cyA9IChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSB0aGlzLmRvbUVsZW1lbnQpOyAgLy8vXG5cbiAgcmV0dXJuIGZvY3VzO1xufVxuXG5jb25zdCBmb2N1c01peGlucyA9IHtcbiAgb25CbHVyLFxuICBvZmZCbHVyLFxuICBvbkZvY3VzLFxuICBvZmZGb2N1cyxcbiAgYmx1cixcbiAgZm9jdXMsXG4gIGhhc0ZvY3VzXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb2N1c01peGlucztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgU0NST0xMX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi4vZXZlbnRUeXBlc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gb25TY3JvbGwoc2Nyb2xsSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uRXZlbnQoU0NST0xMX0VWRU5UX1RZUEUsIHNjcm9sbEhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBvZmZTY3JvbGwoc2Nyb2xsSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZkV2ZW50KFNDUk9MTF9FVkVOVF9UWVBFLCBzY3JvbGxIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBzY3JvbGxUbyhzY3JvbGxUb3AsIHNjcm9sbExlZnQpIHsgdGhpcy5kb21FbGVtZW50LnNjcm9sbFRvKHNjcm9sbFRvcCwgc2Nyb2xsTGVmdCk7IH1cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsVG9wKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnNjcm9sbFRvcDsgfVxuXG5mdW5jdGlvbiBnZXRTY3JvbGxMZWZ0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnNjcm9sbExlZnQ7IH1cblxuZnVuY3Rpb24gc2V0U2Nyb2xsVG9wKHNjcm9sbFRvcCkgeyB0aGlzLmRvbUVsZW1lbnQuc2Nyb2xsVG9wID0gc2Nyb2xsVG9wOyB9XG5cbmZ1bmN0aW9uIHNldFNjcm9sbExlZnQoc2Nyb2xsTGVmdCkgeyB0aGlzLmRvbUVsZW1lbnQuc2Nyb2xsTGVmdCA9IHNjcm9sbExlZnQ7IH1cblxuY29uc3Qgc2Nyb2xsTWl4aW5zID0ge1xuICBvblNjcm9sbCxcbiAgb2ZmU2Nyb2xsLFxuICBzY3JvbGxUbyxcbiAgZ2V0U2Nyb2xsVG9wLFxuICBnZXRTY3JvbGxMZWZ0LFxuICBzZXRTY3JvbGxUb3AsXG4gIHNldFNjcm9sbExlZnRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNjcm9sbE1peGlucztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUkVTSVpFX0VWRU5UX1RZUEUgfSBmcm9tIFwiLi4vZXZlbnRUeXBlc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gb25SZXNpemUocmVzaXplSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uRXZlbnQoUkVTSVpFX0VWRU5UX1RZUEUsIHJlc2l6ZUhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBvZmZSZXNpemUocmVzaXplSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZkV2ZW50KFJFU0laRV9FVkVOVF9UWVBFLCByZXNpemVIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5jb25zdCByZXNpemVNaXhpbnMgPSB7XG4gIG9uUmVzaXplLFxuICBvZmZSZXNpemVcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlc2l6ZU1peGlucztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGZvckVhY2goYXJyYXksIG9wZXJhdGlvbiwgZG9uZSwgY29udGV4dCkge1xuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7ICAvLy9cblxuICBsZXQgY291bnQgPSAtMTtcblxuICBmdW5jdGlvbiBuZXh0KCkge1xuICAgIGNvdW50Kys7XG5cbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XG5cbiAgICBpZiAodGVybWluYXRlKSB7XG4gICAgICBkb25lKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gY291bnQsICAvLy9cbiAgICAgICAgICAgIGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICAgIG9wZXJhdGlvbihlbGVtZW50LCBuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XG4gICAgfVxuICB9XG5cbiAgbmV4dCgpO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBTUEFDRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGZvckVhY2ggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FzeW5jXCI7XG5cbmZ1bmN0aW9uIG9uQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlcywgY3VzdG9tSGFuZGxlciwgZWxlbWVudCA9IHRoaXMpIHtcbiAgY3VzdG9tRXZlbnRUeXBlcyA9IGN1c3RvbUV2ZW50VHlwZXMuc3BsaXQoU1BBQ0UpOyAvLy9cblxuICBjdXN0b21FdmVudFR5cGVzLmZvckVhY2goKGN1c3RvbUV2ZW50VHlwZSkgPT4ge1xuICAgIHRoaXMuYWRkQ3VzdG9tRXZlbnRMaXN0ZW5lcihjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gb2ZmQ3VzdG9tRXZlbnQoY3VzdG9tRXZlbnRUeXBlcywgY3VzdG9tSGFuZGxlciwgZWxlbWVudCA9IHRoaXMpIHtcbiAgY3VzdG9tRXZlbnRUeXBlcyA9IGN1c3RvbUV2ZW50VHlwZXMuc3BsaXQoU1BBQ0UpOyAvLy9cblxuICBjdXN0b21FdmVudFR5cGVzLmZvckVhY2goKGN1c3RvbUV2ZW50VHlwZSkgPT4ge1xuICAgIHRoaXMucmVtb3ZlQ3VzdG9tRXZlbnRMaXN0ZW5lcihjdXN0b21FdmVudFR5cGUsIGN1c3RvbUhhbmRsZXIsIGVsZW1lbnQpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2FsbEN1c3RvbUhhbmRsZXJzKGN1c3RvbUV2ZW50VHlwZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50TGlzdGVuZXJzID0gdGhpcy5maW5kQ3VzdG9tRXZlbnRMaXN0ZW5lcnMoY3VzdG9tRXZlbnRUeXBlKTtcblxuICBjdXN0b21FdmVudExpc3RlbmVycy5mb3JFYWNoKChjdXN0b21FdmVudExpc3RlbmVyKSA9PiB7XG4gICAgY29uc3QgeyBjdXN0b21IYW5kbGVyLCBlbGVtZW50OiBjdXN0b21IYW5kbGVyRWxlbWVudCB9ID0gY3VzdG9tRXZlbnRMaXN0ZW5lcjsgLy8vXG5cbiAgICBjdXN0b21IYW5kbGVyLmNhbGwoY3VzdG9tSGFuZGxlckVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjYWxsQ3VzdG9tSGFuZGxlcnNBc3luYyhjdXN0b21FdmVudFR5cGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICBjb25zdCBjdXN0b21FdmVudExpc3RlbmVycyA9IHRoaXMuZmluZEN1c3RvbUV2ZW50TGlzdGVuZXJzKGN1c3RvbUV2ZW50VHlwZSksXG4gICAgICAgIGRvbmUgPSByZW1haW5pbmdBcmd1bWVudHMucG9wKCk7ICAvLy9cblxuICBmb3JFYWNoKGN1c3RvbUV2ZW50TGlzdGVuZXJzLCAoY3VzdG9tRXZlbnRMaXN0ZW5lciwgbmV4dCkgPT4ge1xuICAgIGNvbnN0IHsgY3VzdG9tSGFuZGxlciwgZWxlbWVudDogY3VzdG9tSGFuZGxlckVsZW1lbnQgfSA9IGN1c3RvbUV2ZW50TGlzdGVuZXIsXG4gICAgICAgICAgZG9uZSA9IG5leHQ7ICAvLy9cblxuICAgIGN1c3RvbUhhbmRsZXIuY2FsbChjdXN0b21IYW5kbGVyRWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzLCBkb25lKTtcbiAgfSwgZG9uZSk7XG59XG5cbmZ1bmN0aW9uIGFkZEN1c3RvbUV2ZW50TGlzdGVuZXIoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50TGlzdGVuZXIgPSB0aGlzLmNyZWF0ZUN1c3RvbUV2ZW50TGlzdGVuZXIoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KTtcblxuICBpZiAoIXRoaXMuY3VzdG9tRXZlbnRMaXN0ZW5lcnMpIHtcbiAgICB0aGlzLmN1c3RvbUV2ZW50TGlzdGVuZXJzID0gW107XG4gIH1cblxuICB0aGlzLmN1c3RvbUV2ZW50TGlzdGVuZXJzLnB1c2goY3VzdG9tRXZlbnRMaXN0ZW5lcik7XG5cbiAgcmV0dXJuIGN1c3RvbUV2ZW50TGlzdGVuZXI7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUN1c3RvbUV2ZW50TGlzdGVuZXIoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGNvbnN0IGN1c3RvbUV2ZW50TGlzdGVuZXIgPSB0aGlzLmZpbmRDdXN0b21FdmVudExpc3RlbmVyKGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCksXG4gICAgICAgIGluZGV4ID0gdGhpcy5jdXN0b21FdmVudExpc3RlbmVycy5pbmRleE9mKGN1c3RvbUV2ZW50TGlzdGVuZXIpLFxuICAgICAgICBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gMTtcblxuICB0aGlzLmN1c3RvbUV2ZW50TGlzdGVuZXJzLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xuXG4gIGlmICh0aGlzLmN1c3RvbUV2ZW50TGlzdGVuZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgIGRlbGV0ZSB0aGlzLmN1c3RvbUV2ZW50TGlzdGVuZXJzO1xuICB9XG5cbiAgcmV0dXJuIGN1c3RvbUV2ZW50TGlzdGVuZXI7XG59XG5cbmZ1bmN0aW9uIGZpbmRDdXN0b21FdmVudExpc3RlbmVyKGN1c3RvbUV2ZW50VHlwZSwgY3VzdG9tSGFuZGxlciwgZWxlbWVudCkge1xuICBjb25zdCBjdXN0b21FdmVudExpc3RlbmVyID0gdGhpcy5jdXN0b21FdmVudExpc3RlbmVycy5maW5kKChjdXN0b21FdmVudExpc3RlbmVyKSA9PiB7XG4gICAgaWYgKChjdXN0b21FdmVudExpc3RlbmVyLmVsZW1lbnQgPT09IGVsZW1lbnQpICYmIChjdXN0b21FdmVudExpc3RlbmVyLmN1c3RvbUhhbmRsZXIgPT09IGN1c3RvbUhhbmRsZXIpICYmIChjdXN0b21FdmVudExpc3RlbmVyLmN1c3RvbUV2ZW50VHlwZSA9PT0gY3VzdG9tRXZlbnRUeXBlKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gY3VzdG9tRXZlbnRMaXN0ZW5lcjtcbn1cblxuZnVuY3Rpb24gZmluZEN1c3RvbUV2ZW50TGlzdGVuZXJzKGN1c3RvbUV2ZW50VHlwZSkge1xuICBjb25zdCBjdXN0b21FdmVudExpc3RlbmVycyA9IFtdO1xuXG4gIGlmICh0aGlzLmN1c3RvbUV2ZW50TGlzdGVuZXJzKSB7XG4gICAgdGhpcy5jdXN0b21FdmVudExpc3RlbmVycy5mb3JFYWNoKChjdXN0b21FdmVudExpc3RlbmVyKSA9PiB7XG4gICAgICBjb25zdCBmb3VuZCA9IChjdXN0b21FdmVudExpc3RlbmVyLmN1c3RvbUV2ZW50VHlwZSA9PT0gY3VzdG9tRXZlbnRUeXBlKTtcblxuICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgIGN1c3RvbUV2ZW50TGlzdGVuZXJzLnB1c2goY3VzdG9tRXZlbnRMaXN0ZW5lcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gY3VzdG9tRXZlbnRMaXN0ZW5lcnM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUN1c3RvbUV2ZW50TGlzdGVuZXIoY3VzdG9tRXZlbnRUeXBlLCBjdXN0b21IYW5kbGVyLCBlbGVtZW50KSB7XG4gIGxldCBjdXN0b21FdmVudExpc3RlbmVyO1xuXG4gIGN1c3RvbUV2ZW50TGlzdGVuZXIgPSAoKSA9PiB7fTsgLy8vXG5cbiAgT2JqZWN0LmFzc2lnbihjdXN0b21FdmVudExpc3RlbmVyLCB7XG4gICAgZWxlbWVudCxcbiAgICBjdXN0b21IYW5kbGVyLFxuICAgIGN1c3RvbUV2ZW50VHlwZVxuICB9KTtcblxuICByZXR1cm4gY3VzdG9tRXZlbnRMaXN0ZW5lcjtcbn1cblxuY29uc3QgY3VzdG9tRXZlbnRNaXhpbnMgPSB7XG4gIG9uQ3VzdG9tRXZlbnQsXG4gIG9mZkN1c3RvbUV2ZW50LFxuICBjYWxsQ3VzdG9tSGFuZGxlcnMsXG4gIGNhbGxDdXN0b21IYW5kbGVyc0FzeW5jLFxuICBhZGRDdXN0b21FdmVudExpc3RlbmVyLFxuICByZW1vdmVDdXN0b21FdmVudExpc3RlbmVyLFxuICBmaW5kQ3VzdG9tRXZlbnRMaXN0ZW5lcixcbiAgZmluZEN1c3RvbUV2ZW50TGlzdGVuZXJzLFxuICBjcmVhdGVDdXN0b21FdmVudExpc3RlbmVyXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjdXN0b21FdmVudE1peGlucztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1vdW50RWxlbWVudChlbGVtZW50KSB7XG4gIGNvbnN0IGRlc2NlbmRhbnRFbGVtZW50cyA9IGVsZW1lbnQuZ2V0RGVzY2VuZGFudEVsZW1lbnRzKCksXG4gICAgICAgIGVsZW1lbnRzID0gW1xuICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgLi4uZGVzY2VuZGFudEVsZW1lbnRzXG4gICAgICAgIF07XG5cbiAgZWxlbWVudHMucmV2ZXJzZSgpOyAvLy9cblxuICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5kaWRNb3VudCAmJiBlbGVtZW50LmRpZE1vdW50KCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5tb3VudEVsZW1lbnQoZWxlbWVudCkge1xuICBjb25zdCBkZXNjZW5kYW50RWxlbWVudHMgPSBlbGVtZW50LmdldERlc2NlbmRhbnRFbGVtZW50cygpLFxuICAgICAgICBlbGVtZW50cyA9IFtcbiAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgIC4uLmRlc2NlbmRhbnRFbGVtZW50c1xuICAgICAgICBdO1xuXG4gIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LndpbGxVbm1vdW50ICYmIGVsZW1lbnQud2lsbFVubW91bnQoKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbW91bnRFbGVtZW50LFxuICB1bm1vdW50RWxlbWVudFxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE9mZnNldCBmcm9tIFwiLi9vZmZzZXRcIjtcbmltcG9ydCBCb3VuZHMgZnJvbSBcIi4vYm91bmRzXCI7XG5pbXBvcnQganN4TWl4aW5zIGZyb20gXCIuL21peGlucy9qc3hcIjtcbmltcG9ydCBrZXlNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2tleVwiO1xuaW1wb3J0IHN0YXRlTWl4aW5zIGZyb20gXCIuL21peGlucy9zdGF0ZVwiO1xuaW1wb3J0IGV2ZW50TWl4aW5zIGZyb20gXCIuL21peGlucy9ldmVudFwiO1xuaW1wb3J0IG1vdXNlTWl4aW5zIGZyb20gXCIuL21peGlucy9tb3VzZVwiO1xuaW1wb3J0IGNsaWNrTWl4aW5zIGZyb20gXCIuL21peGlucy9jbGlja1wiO1xuaW1wb3J0IGZvY3VzTWl4aW5zIGZyb20gXCIuL21peGlucy9mb2N1c1wiO1xuaW1wb3J0IHNjcm9sbE1peGlucyBmcm9tIFwiLi9taXhpbnMvc2Nyb2xsXCI7XG5pbXBvcnQgcmVzaXplTWl4aW5zIGZyb20gXCIuL21peGlucy9yZXNpemVcIjtcbmltcG9ydCBlbGVtZW50TWl4aW5zIGZyb20gXCIuL21peGlucy9lbGVtZW50XCI7XG5pbXBvcnQgY3VzdG9tRXZlbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2N1c3RvbUV2ZW50XCI7XG5cbmltcG9ydCB7IGNvbWJpbmUgfSBmcm9tIFwiLi91dGlsaXRpZXMvb2JqZWN0XCI7XG5pbXBvcnQgeyBpc1NWR1RhZ05hbWUgfSBmcm9tIFwiLi91dGlsaXRpZXMvbmFtZVwiO1xuaW1wb3J0IHsgZmlyc3QsIGF1Z21lbnQgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG1vdW50RWxlbWVudCwgdW5tb3VudEVsZW1lbnQgfSBmcm9tIFwiLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgTk9ORSxcbiAgICAgICAgIEJMT0NLLFxuICAgICAgICAgV0lEVEgsXG4gICAgICAgICBTVFJJTkcsXG4gICAgICAgICBIRUlHSFQsXG4gICAgICAgICBESVNQTEFZLFxuICAgICAgICAgRElTQUJMRUQsXG4gICAgICAgICBFTVBUWV9TVFJJTkcsXG4gICAgICAgICBTVkdfTkFNRVNQQUNFX1VSSSxcbiAgICAgICAgIERFRkFVTFRfUFJPUEVSVElFUyxcbiAgICAgICAgIElHTk9SRURfUFJPUEVSVElFUyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IpIHtcbiAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQuX19lbGVtZW50X18gPSB0aGlzOyAvLy9cbiAgICB9XG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRPZmZzZXQoKSB7XG4gICAgY29uc3QgdG9wID0gdGhpcy5kb21FbGVtZW50Lm9mZnNldFRvcCwgIC8vL1xuICAgICAgICAgIGxlZnQgPSB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0TGVmdCwgIC8vL1xuICAgICAgICAgIG9mZnNldCA9IG5ldyBPZmZzZXQodG9wLCBsZWZ0KTtcblxuICAgIHJldHVybiBvZmZzZXQ7XG4gIH1cblxuICBnZXRCb3VuZHMoKSB7XG4gICAgY29uc3QgYm91bmRpbmdDbGllbnRSZWN0ID0gdGhpcy5kb21FbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgIGJvdW5kcyA9IEJvdW5kcy5mcm9tQm91bmRpbmdDbGllbnRSZWN0KGJvdW5kaW5nQ2xpZW50UmVjdCk7XG5cbiAgICByZXR1cm4gYm91bmRzO1xuICB9XG5cbiAgZ2V0V2lkdGgoaW5jbHVkZUJvcmRlciA9IHRydWUpIHtcbiAgICBjb25zdCB3aWR0aCA9IGluY2x1ZGVCb3JkZXIgP1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0V2lkdGggOlxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5jbGllbnRXaWR0aDtcblxuICAgIHJldHVybiB3aWR0aDtcbiAgfVxuXG4gIHNldFdpZHRoKHdpZHRoKSB7XG4gICAgd2lkdGggPSBgJHt3aWR0aH1weGA7IC8vL1xuXG4gICAgdGhpcy5zdHlsZShXSURUSCwgd2lkdGgpO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KGluY2x1ZGVCb3JkZXIgPSB0cnVlKSB7XG4gICAgY29uc3QgaGVpZ2h0ID0gaW5jbHVkZUJvcmRlciA/XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0SGVpZ2h0IDpcbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50LmNsaWVudEhlaWdodDtcblxuICAgIHJldHVybiBoZWlnaHQ7XG4gIH1cblxuICBzZXRIZWlnaHQoaGVpZ2h0KSB7XG4gICAgaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDsgLy8vXG5cbiAgICB0aGlzLnN0eWxlKEhFSUdIVCwgaGVpZ2h0KTtcbiAgfVxuXG4gIGhhc0F0dHJpYnV0ZShuYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaGFzQXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgZ2V0QXR0cmlidXRlKG5hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBzZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7IH1cblxuICBjbGVhckF0dHJpYnV0ZShuYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBhZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHsgdGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpOyB9XG5cbiAgcmVtb3ZlQXR0cmlidXRlKG5hbWUpIHsgdGhpcy5jbGVhckF0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIHNldENsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOYW1lOyB9XG5cbiAgYWRkQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7IH1cblxuICByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTsgfVxuXG4gIHRvZ2dsZUNsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUpOyB9XG5cbiAgaGFzQ2xhc3MoY2xhc3NOYW1lKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7IH1cblxuICBjbGVhckNsYXNzZXMoKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc05hbWUgPSBFTVBUWV9TVFJJTkc7IH1cblxuICBwcmVwZW5kVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LnByZXBlbmQodGhpcyk7IH1cblxuICBhcHBlbmRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQuYXBwZW5kKHRoaXMpOyB9XG5cbiAgYWRkVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LmFkZCh0aGlzKTsgfVxuXG4gIHJlbW92ZUZyb20ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LnJlbW92ZSh0aGlzKTsgfVxuXG4gIGluc2VydEJlZm9yZShzaWJsaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50LnBhcmVudE5vZGUsIC8vL1xuICAgICAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudDsgIC8vL1xuXG4gICAgcGFyZW50RE9NTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCk7XG4gIH1cblxuICBpbnNlcnRBZnRlcihzaWJsaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50LnBhcmVudE5vZGUsIC8vL1xuICAgICAgICAgIHNpYmxpbmdET01FbGVtZW50ID0gc2libGluZ0VsZW1lbnQuZG9tRWxlbWVudDsgIC8vL1xuXG4gICAgcGFyZW50RE9NTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudC5uZXh0U2libGluZyk7ICAvLy9cbiAgfVxuXG4gIHByZXBlbmQoZWxlbWVudCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQsXG4gICAgICAgICAgZmlyc3RDaGlsZERPTUVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQuZmlyc3RDaGlsZDsgIC8vL1xuXG4gICAgdGhpcy5kb21FbGVtZW50Lmluc2VydEJlZm9yZShkb21FbGVtZW50LCBmaXJzdENoaWxkRE9NRWxlbWVudCk7XG4gIH1cblxuICBhcHBlbmQoZWxlbWVudCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGRvbUVsZW1lbnQsIG51bGwpOyAvLy9cbiAgfVxuXG4gIGluc2VydChlbGVtZW50KSB7IHRoaXMuYXBwZW5kKGVsZW1lbnQpOyB9XG5cbiAgYWRkKGVsZW1lbnQpIHsgdGhpcy5hcHBlbmQoZWxlbWVudCk7IH1cblxuICByZW1vdmUoZWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBjb25zdCBkb21FbGVtZW50ID0gZWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlQ2hpbGQoZG9tRWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmUoKTtcbiAgICB9XG4gIH1cblxuICBtb3VudEJlZm9yZShzaWJsaW5nRWxlbWVudCkge1xuICAgIHRoaXMuaW5zZXJ0QmVmb3JlKHNpYmxpbmdFbGVtZW50KTtcblxuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzOyAvLy9cblxuICAgIG1vdW50RWxlbWVudChlbGVtZW50KTtcbiAgfVxuXG4gIG1vdW50QWZ0ZXIoc2libGluZ0VsZW1lbnQpIHtcbiAgICB0aGlzLmluc2VydEJlZm9yZShzaWJsaW5nRWxlbWVudCk7XG5cbiAgICBjb25zdCBlbGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICBtb3VudEVsZW1lbnQoZWxlbWVudCk7XG4gIH1cblxuICBtb3VudChlbGVtZW50KSB7XG4gICAgdGhpcy5hZGQoZWxlbWVudCk7XG5cbiAgICBtb3VudEVsZW1lbnQoZWxlbWVudCk7XG4gIH1cblxuICB1bm1vdW50KGVsZW1lbnQpIHtcbiAgICB1bm1vdW50RWxlbWVudChlbGVtZW50KTtcblxuICAgIHRoaXMucmVtb3ZlKGVsZW1lbnQpO1xuICB9XG5cbiAgc2hvdyhkaXNwbGF5U3R5bGUgPSBCTE9DSykgeyB0aGlzLmRpc3BsYXkoZGlzcGxheVN0eWxlKTsgfVxuXG4gIGhpZGUoKSB7IHRoaXMuc3R5bGUoRElTUExBWSwgTk9ORSk7IH1cblxuICBkaXNwbGF5KGRpc3BsYXkpIHsgdGhpcy5zdHlsZShESVNQTEFZLCBkaXNwbGF5KTsgfVxuXG4gIGVuYWJsZSgpIHsgdGhpcy5jbGVhckF0dHJpYnV0ZShESVNBQkxFRCk7IH1cblxuICBkaXNhYmxlKCkgeyB0aGlzLnNldEF0dHJpYnV0ZShESVNBQkxFRCwgRElTQUJMRUQpOyB9XG5cbiAgaXNFbmFibGVkKCkge1xuICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKCksXG4gICAgICAgICAgZW5hYmxlZCA9ICFkaXNhYmxlZDtcblxuICAgIHJldHVybiBlbmFibGVkO1xuICB9XG5cbiAgaXNEaXNhYmxlZCgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaGFzQXR0cmlidXRlKERJU0FCTEVEKTtcblxuICAgIHJldHVybiBkaXNhYmxlZDtcbiAgfVxuICBcbiAgaXNEaXNwbGF5ZWQoKSB7XG4gICAgY29uc3QgZGlzcGxheSA9IHRoaXMuY3NzKERJU1BMQVkpLFxuICAgICAgICAgIGRpc3BsYXllZCA9IChkaXNwbGF5ICE9PSBOT05FKTtcbiAgICBcbiAgICByZXR1cm4gZGlzcGxheWVkO1xuICB9XG5cbiAgaXNTaG93aW5nKCkge1xuICAgIGNvbnN0IGRpc3BsYXllZCA9IHRoaXMuaXNEaXNwbGF5ZWQoKSxcbiAgICAgICAgICBzaG93aW5nID0gZGlzcGxheWVkOyAgLy8vXG5cbiAgICByZXR1cm4gc2hvd2luZztcbiAgfVxuXG4gIGlzSGlkZGVuKCkge1xuICAgIGNvbnN0IGRpc3BsYXllZCA9IHRoaXMuaXNEaXNwbGF5ZWQoKSxcbiAgICAgICAgICBoaWRkZW4gPSAhZGlzcGxheWVkO1xuXG4gICAgcmV0dXJuIGhpZGRlbjtcbiAgfVxuXG4gIHN0eWxlKG5hbWUsIHZhbHVlID0gbnVsbCkge1xuICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5kb21FbGVtZW50LnN0eWxlW25hbWVdID0gdmFsdWU7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzdHlsZSA9IHRoaXMuZG9tRWxlbWVudC5zdHlsZVtuYW1lXTtcblxuICAgIHJldHVybiBzdHlsZTtcbiAgfVxuXG4gIGh0bWwoaHRtbCA9IG51bGwpIHtcbiAgICBpZiAoaHRtbCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgaW5uZXJIVE1MID0gaHRtbDsgLy8vXG5cbiAgICAgIHRoaXMuZG9tRWxlbWVudC5pbm5lckhUTUwgPSBpbm5lckhUTUxcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGlubmVySFRNTCA9IHRoaXMuZG9tRWxlbWVudC5pbm5lckhUTUw7XG5cbiAgICBodG1sID0gaW5uZXJIVE1MOyAvLy9cblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgY3NzKGNzcyA9IG51bGwpIHtcbiAgICBpZiAoY3NzID09PSBudWxsKSB7XG4gICAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmRvbUVsZW1lbnQpLFxuICAgICAgICAgICAgY3NzID0ge307XG5cbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb21wdXRlZFN0eWxlLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBmaXJzdENvbXB1dGVkU3R5bGUgPSBmaXJzdFtjb21wdXRlZFN0eWxlXSxcbiAgICAgICAgICAgICAgbmFtZSA9IGZpcnN0Q29tcHV0ZWRTdHlsZSwgIC8vL1xuICAgICAgICAgICAgICB2YWx1ZSA9IGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTsgLy8vXG5cbiAgICAgICAgY3NzW25hbWVdID0gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjc3MgPT09IFNUUklORykge1xuICAgICAgbGV0IG5hbWUgPSBjc3M7IC8vL1xuXG4gICAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmRvbUVsZW1lbnQpLFxuICAgICAgICAgICAgdmFsdWUgPSBjb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUobmFtZSk7IC8vL1xuXG4gICAgICBjc3MgPSB2YWx1ZTsgIC8vL1xuXG4gICAgICByZXR1cm4gY3NzO1xuICAgIH1cblxuICAgIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXMoY3NzKTsgLy8vXG5cbiAgICBuYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGNzc1tuYW1lXTtcblxuICAgICAgdGhpcy5zdHlsZShuYW1lLCB2YWx1ZSk7XG4gICAgfSk7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHsgdGFnTmFtZSB9ID0gQ2xhc3MsXG4gICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnRGcm9tVGFnTmFtZShDbGFzcywgdGFnTmFtZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSxcbiAgICAgICAgICBkZWZhdWx0UHJvcGVydGllcyA9IGRlZmF1bHRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzKSxcbiAgICAgICAgICBpZ25vcmVkUHJvcGVydGllcyA9IGlnbm9yZWRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzKTtcblxuICAgIGVsZW1lbnQuYXBwbHlQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGRlZmF1bHRQcm9wZXJ0aWVzLCBpZ25vcmVkUHJvcGVydGllcyk7XG5cbiAgICBlbGVtZW50LmluaXRpYWxpc2UgJiYgZWxlbWVudC5pbml0aWFsaXNlKCk7IC8vL1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVRhZ05hbWUodGFnTmFtZSwgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgQ2xhc3MgPSBFbGVtZW50LCAgLy8vXG4gICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnRGcm9tVGFnTmFtZShDbGFzcywgdGFnTmFtZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSxcbiAgICAgICAgICBkZWZhdWx0UHJvcGVydGllcyA9IHt9LCAvLy9cbiAgICAgICAgICBpZ25vcmVkUHJvcGVydGllcyA9IFtdOyAvLy9cblxuICAgIGVsZW1lbnQuYXBwbHlQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGRlZmF1bHRQcm9wZXJ0aWVzLCBpZ25vcmVkUHJvcGVydGllcyk7XG5cbiAgICBlbGVtZW50LmluaXRpYWxpc2UgJiYgZWxlbWVudC5pbml0aWFsaXNlKCk7IC8vL1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwganN4TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGtleU1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBtb3VzZU1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBjbGlja01peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBzdGF0ZU1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBldmVudE1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBmb2N1c01peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBzY3JvbGxNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgcmVzaXplTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGVsZW1lbnRNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwgY3VzdG9tRXZlbnRNaXhpbnMpO1xuXG5mdW5jdGlvbiBlbGVtZW50RnJvbVRhZ05hbWUoQ2xhc3MsIHRhZ05hbWUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICBjb25zdCBzZWxlY3RvciA9IG51bGwsXG4gICAgICAgIGVsZW1lbnQgPSBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmNhbGwoQ2xhc3MsIG51bGwsIHNlbGVjdG9yLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpKTtcblxuICBlbGVtZW50LmRvbUVsZW1lbnQgPSBpc1NWR1RhZ05hbWUodGFnTmFtZSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhTVkdfTkFNRVNQQUNFX1VSSSwgdGFnTmFtZSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcblxuICBlbGVtZW50LmRvbUVsZW1lbnQuX19lbGVtZW50X18gPSBlbGVtZW50OyAvLy9cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdFByb3BlcnRpZXNGcm9tQ2xhc3MoQ2xhc3MsIGRlZmF1bHRQcm9wZXJ0aWVzID0ge30pIHtcbiAgaWYgKENsYXNzLmhhc093blByb3BlcnR5KERFRkFVTFRfUFJPUEVSVElFUykpIHtcbiAgICBkZWZhdWx0UHJvcGVydGllcyA9IGNvbWJpbmUoZGVmYXVsdFByb3BlcnRpZXMsIENsYXNzW0RFRkFVTFRfUFJPUEVSVElFU10pO1xuICB9XG5cbiAgY29uc3Qgc3VwZXJDbGFzcyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihDbGFzcyk7ICAvLy9cblxuICBpZiAoc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIGRlZmF1bHRQcm9wZXJ0aWVzID0gZGVmYXVsdFByb3BlcnRpZXNGcm9tQ2xhc3Moc3VwZXJDbGFzcywgZGVmYXVsdFByb3BlcnRpZXMpO1xuICB9XG5cbiAgcmV0dXJuIGRlZmF1bHRQcm9wZXJ0aWVzO1xufVxuXG5mdW5jdGlvbiBpZ25vcmVkUHJvcGVydGllc0Zyb21DbGFzcyhDbGFzcywgaWdub3JlZFByb3BlcnRpZXMgPSBbXSkge1xuICBpZiAoQ2xhc3MuaGFzT3duUHJvcGVydHkoSUdOT1JFRF9QUk9QRVJUSUVTKSkge1xuICAgIGlnbm9yZWRQcm9wZXJ0aWVzID0gYXVnbWVudChpZ25vcmVkUHJvcGVydGllcywgQ2xhc3NbSUdOT1JFRF9QUk9QRVJUSUVTXSwgKGlnbm9yZWRQcm9wZXJ0eSkgPT4ge1xuICAgICAgaWYgKCFpZ25vcmVkUHJvcGVydGllcy5pbmNsdWRlcyhpZ25vcmVkUHJvcGVydHkpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY29uc3Qgc3VwZXJDbGFzcyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihDbGFzcyk7XG5cbiAgaWYgKHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICBpZ25vcmVkUHJvcGVydGllcyA9IGlnbm9yZWRQcm9wZXJ0aWVzRnJvbUNsYXNzKHN1cGVyQ2xhc3MsIGlnbm9yZWRQcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIHJldHVybiBpZ25vcmVkUHJvcGVydGllcztcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4vZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBmbGF0dGVuIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBTVFJJTkcsIEZVTkNUSU9OIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyByZW1vdmVGYWxzZXlFbGVtZW50cywgcmVwbGFjZVN0cmluZ3NXaXRoVGV4dEVsZW1lbnRzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2VsZW1lbnRzXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoZmlyc3RBcmd1bWVudCwgcHJvcGVydGllcywgLi4uY2hpbGRFbGVtZW50cykge1xuICBsZXQgZWxlbWVudCA9IG51bGw7XG5cbiAgaWYgKGZpcnN0QXJndW1lbnQpIHtcbiAgICBjaGlsZEVsZW1lbnRzID0gc2FuaXRpc2VDaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpO1xuXG4gICAgcHJvcGVydGllcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgY2hpbGRFbGVtZW50c1xuICAgIH0sIHByb3BlcnRpZXMpO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKGlzU3ViY2xhc3NPZihmaXJzdEFyZ3VtZW50LCBFbGVtZW50KSkge1xuICAgICAgY29uc3QgQ2xhc3MgPSBmaXJzdEFyZ3VtZW50OyAgLy8vXG5cbiAgICAgIGVsZW1lbnQgPSBDbGFzcy5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09IFNUUklORykge1xuICAgICAgY29uc3QgdGFnTmFtZSA9IGZpcnN0QXJndW1lbnQ7IC8vL1xuXG4gICAgICBlbGVtZW50ID0gRWxlbWVudC5mcm9tVGFnTmFtZSh0YWdOYW1lLCBwcm9wZXJ0aWVzKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSBGVU5DVElPTikge1xuICAgICAgY29uc3QgZWxlbWVudEZ1bmN0aW9uID0gZmlyc3RBcmd1bWVudDsgIC8vL1xuXG4gICAgICBlbGVtZW50ID0gZWxlbWVudEZ1bmN0aW9uKHByb3BlcnRpZXMpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5jb25zdCBSZWFjdCA9IHtcbiAgY3JlYXRlRWxlbWVudFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3Q7XG5cbmZ1bmN0aW9uIHNhbml0aXNlQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKSB7XG4gIGNoaWxkRWxlbWVudHMgPSBmbGF0dGVuKGNoaWxkRWxlbWVudHMpOyAvLy9cblxuICBjaGlsZEVsZW1lbnRzID0gcmVtb3ZlRmFsc2V5RWxlbWVudHMoY2hpbGRFbGVtZW50cyk7ICAvLy9cblxuICBjaGlsZEVsZW1lbnRzID0gcmVwbGFjZVN0cmluZ3NXaXRoVGV4dEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpOyAgLy8vXG5cbiAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG59XG5cblxuZnVuY3Rpb24gaXNTdWJjbGFzc09mKGFyZ3VtZW50LCBDbGFzcykge1xuICBjb25zdCBzdWJjbGFzc09mID0gKGFyZ3VtZW50LnByb3RvdHlwZSBpbnN0YW5jZW9mIENsYXNzKTtcblxuICByZXR1cm4gc3ViY2xhc3NPZjtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcblxuaW1wb3J0IHsgQk9EWSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9keSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciA9IEJPRFkpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiYm9keVwiO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IGZvY3VzTWl4aW5zIGZyb20gXCIuLi9taXhpbnMvZm9jdXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGluayBleHRlbmRzIEVsZW1lbnQge1xuICBnZXRIUmVmKCkgeyByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpOyB9XG5cbiAgc2V0SFJlZihocmVmKSB7IHJldHVybiB0aGlzLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgaHJlZik7IH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiYVwiO1xufVxuXG5PYmplY3QuYXNzaWduKExpbmsucHJvdG90eXBlLCBmb2N1c01peGlucyk7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IElOUFVUX0VWRU5UX1RZUEUsIENIQU5HRV9FVkVOVF9UWVBFIH0gZnJvbSBcIi4uL2V2ZW50VHlwZXNcIjtcblxuZnVuY3Rpb24gb25JbnB1dChpbnB1dEhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vbkV2ZW50KElOUFVUX0VWRU5UX1RZUEUsIGlucHV0SGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb2ZmSW5wdXQoaW5wdXRIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmRXZlbnQoSU5QVVRfRVZFTlRfVFlQRSwgaW5wdXRIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvbkNoYW5nZShjaGFuZ2VIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub25FdmVudChDSEFOR0VfRVZFTlRfVFlQRSwgY2hhbmdlSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb2ZmQ2hhbmdlKGNoYW5nZUhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vZmZFdmVudChDSEFOR0VfRVZFTlRfVFlQRSwgY2hhbmdlSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gZ2V0VmFsdWUoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQudmFsdWU7IH1cblxuZnVuY3Rpb24gc2V0VmFsdWUodmFsdWUpIHsgdGhpcy5kb21FbGVtZW50LnZhbHVlID0gdmFsdWU7IH1cblxuZnVuY3Rpb24gaXNSZWFkT25seSgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5yZWFkT25seTsgfVxuXG5mdW5jdGlvbiBzZXRSZWFkT25seShyZWFkT25seSkgeyB0aGlzLmRvbUVsZW1lbnQucmVhZE9ubHkgPSByZWFkT25seTsgfVxuXG5jb25zdCBpbnB1dE1peGlucyA9IHtcbiAgb25JbnB1dCxcbiAgb2ZmSW5wdXQsXG4gIG9uQ2hhbmdlLFxuICBvZmZDaGFuZ2UsXG4gIGdldFZhbHVlLFxuICBzZXRWYWx1ZSxcbiAgaXNSZWFkT25seSxcbiAgc2V0UmVhZE9ubHlcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGlucHV0TWl4aW5zO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDVVRfRVZFTlRfVFlQRSwgQ09QWV9FVkVOVF9UWVBFLCBQQVNURV9FVkVOVF9UWVBFIH0gZnJvbSBcIi4uL2V2ZW50VHlwZXNcIjtcblxuZnVuY3Rpb24gb25DdXQoY3V0SGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uRXZlbnQoQ1VUX0VWRU5UX1RZUEUsIGN1dEhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9mZkN1dChjdXRIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmRXZlbnQoQ1VUX0VWRU5UX1RZUEUsIGN1dEhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9uQ29weShjb3B5SGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uRXZlbnQoQ09QWV9FVkVOVF9UWVBFLCBjb3B5SGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb2ZmQ29weShjb3B5SGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZkV2ZW50KENPUFlfRVZFTlRfVFlQRSwgY29weUhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9uUGFzdGUocGFzdGVIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub25FdmVudChQQVNURV9FVkVOVF9UWVBFLCBwYXN0ZUhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9mZlBhc3RlKHBhc3RlSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZkV2ZW50KFBBU1RFX0VWRU5UX1RZUEUsIHBhc3RlSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gZ2V0U2VsZWN0aW9uU3RhcnQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQ7IH1cblxuZnVuY3Rpb24gZ2V0U2VsZWN0aW9uRW5kKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnNlbGVjdGlvbkVuZDsgfVxuXG5mdW5jdGlvbiBzZXRTZWxlY3Rpb25TdGFydChzZWxlY3Rpb25TdGFydCkgeyB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQgPSBzZWxlY3Rpb25TdGFydDsgfVxuXG5mdW5jdGlvbiBzZXRTZWxlY3Rpb25FbmQoc2VsZWN0aW9uRW5kKSB7IHRoaXMuZG9tRWxlbWVudC5zZWxlY3Rpb25FbmQgPSBzZWxlY3Rpb25FbmQ7IH1cblxuZnVuY3Rpb24gc2VsZWN0KCkgeyB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0KCk7IH1cblxuY29uc3Qgc2VsZWN0aW9uTWl4aW5zID0ge1xuICBvbkN1dCxcbiAgb2ZmQ3V0LFxuICBvbkNvcHksXG4gIG9mZkNvcHksXG4gIG9uUGFzdGUsXG4gIG9mZlBhc3RlLFxuICBnZXRTZWxlY3Rpb25TdGFydCxcbiAgZ2V0U2VsZWN0aW9uRW5kLFxuICBzZXRTZWxlY3Rpb25TdGFydCxcbiAgc2V0U2VsZWN0aW9uRW5kLFxuICBzZWxlY3Rcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNlbGVjdGlvbk1peGlucztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcbmltcG9ydCBpbnB1dE1peGlucyBmcm9tIFwiLi4vbWl4aW5zL2lucHV0XCI7XG5pbXBvcnQgZm9jdXNNaXhpbnMgZnJvbSBcIi4uL21peGlucy9mb2N1c1wiO1xuaW1wb3J0IHNlbGVjdGlvbk1peGlucyBmcm9tIFwiLi4vbWl4aW5zL3NlbGVjdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dCBleHRlbmRzIEVsZW1lbnQge1xuICBzdGF0aWMgdGFnTmFtZSA9IFwiaW5wdXRcIjtcbn1cblxuT2JqZWN0LmFzc2lnbihJbnB1dC5wcm90b3R5cGUsIGlucHV0TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oSW5wdXQucHJvdG90eXBlLCBmb2N1c01peGlucyk7XG5PYmplY3QuYXNzaWduKElucHV0LnByb3RvdHlwZSwgc2VsZWN0aW9uTWl4aW5zKTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcbmltcG9ydCBmb2N1c01peGlucyBmcm9tIFwiLi4vbWl4aW5zL2ZvY3VzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIEVsZW1lbnQge1xuICBzdGF0aWMgdGFnTmFtZSA9IFwiYnV0dG9uXCI7XG59XG5cbk9iamVjdC5hc3NpZ24oQnV0dG9uLnByb3RvdHlwZSwgZm9jdXNNaXhpbnMpO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IGlucHV0TWl4aW5zIGZyb20gXCIuLi9taXhpbnMvaW5wdXRcIjtcbmltcG9ydCBmb2N1c01peGlucyBmcm9tIFwiLi4vbWl4aW5zL2ZvY3VzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdCBleHRlbmRzIEVsZW1lbnQge1xuICBzdGF0aWMgdGFnTmFtZSA9IFwic2VsZWN0XCI7XG59XG5cbk9iamVjdC5hc3NpZ24oU2VsZWN0LnByb3RvdHlwZSwgaW5wdXRNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihTZWxlY3QucHJvdG90eXBlLCBmb2N1c01peGlucyk7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgaW5wdXRNaXhpbnMgZnJvbSBcIi4uL21peGlucy9pbnB1dFwiO1xuaW1wb3J0IGZvY3VzTWl4aW5zIGZyb20gXCIuLi9taXhpbnMvZm9jdXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hlY2tib3ggZXh0ZW5kcyBFbGVtZW50IHtcbiAgaXNDaGVja2VkKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNoZWNrZWQ7IH1cblxuICBjaGVjayhjaGVja2VkID0gdHJ1ZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2hlY2tlZCA9IGNoZWNrZWQ7IH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiaW5wdXRcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgdHlwZTogXCJjaGVja2JveFwiXG4gIH07XG59XG5cbk9iamVjdC5hc3NpZ24oQ2hlY2tib3gucHJvdG90eXBlLCBpbnB1dE1peGlucyk7XG5PYmplY3QuYXNzaWduKENoZWNrYm94LnByb3RvdHlwZSwgZm9jdXNNaXhpbnMpO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IGlucHV0TWl4aW5zIGZyb20gXCIuLi9taXhpbnMvaW5wdXRcIjtcbmltcG9ydCBmb2N1c01peGlucyBmcm9tIFwiLi4vbWl4aW5zL2ZvY3VzXCI7XG5pbXBvcnQgc2VsZWN0aW9uTWl4aW5zIGZyb20gXCIuLi9taXhpbnMvc2VsZWN0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRhcmVhIGV4dGVuZHMgRWxlbWVudCB7XG4gIHN0YXRpYyB0YWdOYW1lID0gXCJ0ZXh0YXJlYVwiO1xufVxuXG5PYmplY3QuYXNzaWduKFRleHRhcmVhLnByb3RvdHlwZSwgaW5wdXRNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihUZXh0YXJlYS5wcm90b3R5cGUsIGZvY3VzTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oVGV4dGFyZWEucHJvdG90eXBlLCBzZWxlY3Rpb25NaXhpbnMpO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQga2V5TWl4aW5zIGZyb20gXCIuL21peGlucy9rZXlcIjtcbmltcG9ydCBldmVudE1peGlucyBmcm9tIFwiLi9taXhpbnMvZXZlbnRcIjtcbmltcG9ydCBtb3VzZU1peGlucyBmcm9tIFwiLi9taXhpbnMvbW91c2VcIjtcbmltcG9ydCBjbGlja01peGlucyBmcm9tIFwiLi9taXhpbnMvY2xpY2tcIjtcbmltcG9ydCBmb2N1c01peGlucyBmcm9tIFwiLi9taXhpbnMvZm9jdXNcIjtcblxuaW1wb3J0IHsgVU5ERUZJTkVEIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBSRVNJWkVfRVZFTlRfVFlQRSB9IGZyb20gXCIuL2V2ZW50VHlwZXNcIjtcbmltcG9ydCB7IG9uU2Nyb2xsLCBvZmZTY3JvbGwgfSBmcm9tIFwiLi9taXhpbnMvc2Nyb2xsXCI7XG5cbmNsYXNzIFdpbmRvdyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IHdpbmRvdzsgLy8vXG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBhc3NpZ24oLi4uc291cmNlcykge1xuICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuZG9tRWxlbWVudDsgLy8vXG5cbiAgICBPYmplY3QuYXNzaWduKHRhcmdldCwgLi4uc291cmNlcyk7XG4gIH1cblxuICBnZXRXaWR0aCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5pbm5lcldpZHRoOyB9IC8vL1xuICBcbiAgZ2V0SGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmlubmVySGVpZ2h0OyB9IC8vL1xuXG4gIGdldFNjcm9sbFRvcCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5wYWdlWU9mZnNldDsgfSAgLy8vXG5cbiAgZ2V0U2Nyb2xsTGVmdCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5wYWdlWE9mZnNldDsgfSAvLy9cblxuICBnZXRTZWxlY3Rpb24oKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuZ2V0U2VsZWN0aW9uKCk7IH1cblxuICBvblJlc2l6ZShyZXNpemVIYW5kbGVyLCBlbGVtZW50KSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gUkVTSVpFX0VWRU5UX1RZUEUsXG4gICAgICAgICAgZXZlbnRMaXN0ZW5lciA9IHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIHJlc2l6ZUhhbmRsZXIsIGVsZW1lbnQpO1xuXG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBldmVudExpc3RlbmVyKTtcbiAgfVxuXG4gIG9mZlJlc2l6ZShyZXNpemVIYW5kbGVyLCBlbGVtZW50KSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gUkVTSVpFX0VWRU5UX1RZUEUsXG4gICAgICAgICAgZXZlbnRMaXN0ZW5lciA9IHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIHJlc2l6ZUhhbmRsZXIsIGVsZW1lbnQpO1xuXG4gICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBldmVudExpc3RlbmVyKTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFdpbmRvdy5wcm90b3R5cGUsIGtleU1peGlucyk7XG5PYmplY3QuYXNzaWduKFdpbmRvdy5wcm90b3R5cGUsIGV2ZW50TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwgbW91c2VNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihXaW5kb3cucHJvdG90eXBlLCBjbGlja01peGlucyk7XG5PYmplY3QuYXNzaWduKFdpbmRvdy5wcm90b3R5cGUsIGZvY3VzTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwge1xuICBvblNjcm9sbCxcbiAgb2ZmU2Nyb2xsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgKHR5cGVvZiB3aW5kb3cgPT09IFVOREVGSU5FRCkgPyB1bmRlZmluZWQgOiBuZXcgV2luZG93KCk7ICAvLy9cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGtleU1peGlucyBmcm9tIFwiLi9taXhpbnMva2V5XCI7XG5pbXBvcnQgZXZlbnRNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2V2ZW50XCI7XG5pbXBvcnQgbW91c2VNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL21vdXNlXCI7XG5pbXBvcnQgY2xpY2tNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2NsaWNrXCI7XG5pbXBvcnQgc2VsZWN0aW9uTWl4aW5zIGZyb20gXCIuL21peGlucy9zZWxlY3Rpb25cIjtcblxuaW1wb3J0IHsgVU5ERUZJTkVEIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBTRUxFQ1RJT05DSEFOR0VfRVZFTlRfVFlQRSB9IGZyb20gXCIuL2V2ZW50VHlwZXNcIjtcblxuY2xhc3MgRG9jdW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb2N1bWVudDsgLy8vXG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBjcmVhdGVSYW5nZSgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jcmVhdGVSYW5nZSgpOyB9XG5cbiAgY3JlYXRlVGV4dE5vZGUoZGF0YSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNyZWF0ZVRleHROb2RlKGRhdGEpOyB9XG5cbiAgb25TZWxlY3Rpb25DaGFuZ2Uoc2VsZWN0aW9uQ2hhbmdlSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uRXZlbnQoU0VMRUNUSU9OQ0hBTkdFX0VWRU5UX1RZUEUsIHNlbGVjdGlvbkNoYW5nZUhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbiAgb2ZmU2VsZWN0aW9uQ2hhbmdlKHNlbGVjdGlvbkNoYW5nZUhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vZmZFdmVudChTRUxFQ1RJT05DSEFOR0VfRVZFTlRfVFlQRSwgc2VsZWN0aW9uQ2hhbmdlSGFuZGxlciwgZWxlbWVudCk7IH1cblxuICBjcmVhdGVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCkge1xuICAgIGxldCBldmVudExpc3RlbmVyO1xuXG4gICAgY29uc3QgaGFuZGxlckVsZW1lbnQgPSBlbGVtZW50OyAvLy9cblxuICAgIGV2ZW50TGlzdGVuZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudFR5cGUgPT09IFNFTEVDVElPTkNIQU5HRV9FVkVOVF9UWVBFKSB7XG4gICAgICAgIGNvbnN0IHsgZG9tRWxlbWVudCB9ID0gaGFuZGxlckVsZW1lbnQsXG4gICAgICAgICAgICAgIHsgY3VycmVudFRhcmdldCB9ID0gZXZlbnQsXG4gICAgICAgICAgICAgIHsgYWN0aXZlRWxlbWVudCB9ID0gY3VycmVudFRhcmdldDtcblxuICAgICAgICBpZiAoZG9tRWxlbWVudCAhPT0gYWN0aXZlRWxlbWVudCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBlbGVtZW50ID0gdGhpczsgLy8vXG5cbiAgICAgIGhhbmRsZXIuY2FsbChoYW5kbGVyRWxlbWVudCwgZXZlbnQsIGVsZW1lbnQpO1xuICAgIH07XG5cbiAgICBPYmplY3QuYXNzaWduKGV2ZW50TGlzdGVuZXIsIHtcbiAgICAgIGVsZW1lbnQsXG4gICAgICBoYW5kbGVyLFxuICAgICAgZXZlbnRUeXBlXG4gICAgfSk7XG5cbiAgICByZXR1cm4gZXZlbnRMaXN0ZW5lcjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAodHlwZW9mIGRvY3VtZW50ID09PSBVTkRFRklORUQpID8gdW5kZWZpbmVkIDogbmV3IERvY3VtZW50KCk7ICAvLy9cblxuT2JqZWN0LmFzc2lnbihEb2N1bWVudC5wcm90b3R5cGUsIGtleU1peGlucyk7XG5PYmplY3QuYXNzaWduKERvY3VtZW50LnByb3RvdHlwZSwgZXZlbnRNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihEb2N1bWVudC5wcm90b3R5cGUsIG1vdXNlTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRG9jdW1lbnQucHJvdG90eXBlLCBjbGlja01peGlucyk7XG5PYmplY3QuYXNzaWduKERvY3VtZW50LnByb3RvdHlwZSwgc2VsZWN0aW9uTWl4aW5zKTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IExFRlRfTU9VU0VfQlVUVE9OID0gMDtcbmV4cG9ydCBjb25zdCBSSUdIVF9NT1VTRV9CVVRUT04gPSAyO1xuZXhwb3J0IGNvbnN0IE1JRERMRV9NT1VTRV9CVVRUT04gPSAxO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIExFRlRfTU9VU0VfQlVUVE9OLFxuICBSSUdIVF9NT1VTRV9CVVRUT04sXG4gIE1JRERMRV9NT1VTRV9CVVRUT05cbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgUmVhY3QgfSBmcm9tIFwiLi9yZWFjdFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBCb3VuZHMgfSBmcm9tIFwiLi9ib3VuZHNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgT2Zmc2V0IH0gZnJvbSBcIi4vb2Zmc2V0XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEVsZW1lbnQgfSBmcm9tIFwiLi9lbGVtZW50XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRleHRFbGVtZW50IH0gZnJvbSBcIi4vdGV4dEVsZW1lbnRcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQm9keSB9IGZyb20gXCIuL2VsZW1lbnQvYm9keVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMaW5rIH0gZnJvbSBcIi4vZWxlbWVudC9saW5rXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIElucHV0IH0gZnJvbSBcIi4vZWxlbWVudC9pbnB1dFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBCdXR0b24gfSBmcm9tIFwiLi9lbGVtZW50L2J1dHRvblwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZWxlY3QgfSBmcm9tIFwiLi9lbGVtZW50L3NlbGVjdFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDaGVja2JveCB9IGZyb20gXCIuL2VsZW1lbnQvY2hlY2tib3hcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVGV4dGFyZWEgfSBmcm9tIFwiLi9lbGVtZW50L3RleHRhcmVhXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpbmRvdyB9IGZyb20gXCIuL3dpbmRvd1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBkb2N1bWVudCB9IGZyb20gXCIuL2RvY3VtZW50XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGV2ZW50VHlwZXMgfSBmcm9tIFwiLi9ldmVudFR5cGVzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIG1vdXNlQnV0dG9ucyB9IGZyb20gXCIuL21vdXNlQnV0dG9uc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBlbGVtZW50VXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwiZWFzeVwiO1xuXG5PYmplY3QuYXNzaWduKGdsb2JhbFRoaXMsIHtcbiAgUmVhY3Rcbn0pO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCIuL2p1eHRhcG9zZVwiO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBjb250cm9sbGVyID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRyb2xsZXI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBFUlJPUl9ERUxBWSA9IDEwMDA7XG5leHBvcnQgY29uc3QgRU1QVFlfU1RSSU5HID0gXCJcIjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgSW5wdXRFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXNzd29yZElucHV0IGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgZ2V0UGFzc3dvcmQoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAgcGFzc3dvcmQgPSB2YWx1ZTsgLy8vXG5cbiAgICByZXR1cm4gcGFzc3dvcmQ7XG4gIH1cblxuICBjbGVhclBhc3N3b3JkKCkge1xuICAgIGNvbnN0IHBhc3N3b3JkID0gRU1QVFlfU1RSSU5HLFxuICAgICAgICAgIHZhbHVlID0gcGFzc3dvcmQ7IC8vL1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuXHQgIGNvbnN0IGdldFBhc3N3b3JkID0gdGhpcy5nZXRQYXNzd29yZC5iaW5kKHRoaXMpLFxuXHRcdFx0XHQgIGNsZWFyUGFzc3dvcmQgPSB0aGlzLmNsZWFyUGFzc3dvcmQuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0UGFzc3dvcmQsXG4gICAgICBjbGVhclBhc3N3b3JkXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiaW5wdXRcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgdHlwZTogXCJwYXNzd29yZFwiXG4gIH07XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcsIEVSUk9SX0RFTEFZIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWYWxpZGF0aW9uRXJyb3JQYXJhZ3JhcGggZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIHRpbWVvdXQpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICB0aGlzLnRpbWVvdXQgPSB0aW1lb3V0O1xuICB9XG5cbiAgY2xlYXJWYWxpZGF0aW9uRXJyb3IoKSB7XG4gICAgY29uc3QgaHRtbCA9IEVNUFRZX1NUUklORztcblxuICAgIHRoaXMuaHRtbChodG1sKTtcbiAgfVxuXG4gIHNob3dWYWxpZGF0aW9uRXJyb3IodmFsaWRhdGlvbkVycm9yKSB7XG4gICAgY29uc3QgaHRtbCA9IHZhbGlkYXRpb25FcnJvcjsgLy8vXG5cbiAgICB0aGlzLmh0bWwoaHRtbCk7XG5cbiAgICBpZiAodGhpcy50aW1lb3V0ICE9PSBudWxsKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgICB9XG5cbiAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMudGltZW1vdXQgPSBudWxsO1xuXG4gICAgICB0aGlzLmNsZWFyVmFsaWRhdGlvbkVycm9yKCk7XG4gICAgfSwgRVJST1JfREVMQVkpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICByZXR1cm4gKHtcbiAgICAgIHNob3dWYWxpZGF0aW9uRXJyb3I6IHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvci5iaW5kKHRoaXMpXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwicFwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmFsaWRhdGlvbiBlcnJvclwiXG4gIH07XG5cbiAgc3RhdGljIGZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgdGltZW91dCA9IG51bGwsXG4gICAgICAgICAgdmFsaWRhdGlvbkVycm9yUGFyYWdyYXBoID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIHRpbWVvdXQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gdmFsaWRhdGlvbkVycm9yUGFyYWdyYXBoO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQsIEJ1dHRvbiB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBjb250cm9sbGVyIGZyb20gXCIuLi8uLi9jb250cm9sbGVyXCI7XG5pbXBvcnQgUGFzc3dvcmRJbnB1dCBmcm9tIFwiLi4vaW5wdXQvcGFzc3dvcmRcIjtcbmltcG9ydCBWYWxpZGF0aW9uRXJyb3JQYXJhZ3JhcGggZnJvbSBcIi4uL3BhcmFncmFwaC92YWxpZGF0aW9uRXJyb3JcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXNzd29yZEZvcm0gZXh0ZW5kcyBFbGVtZW50IHtcbiAgdmFsaWRhdGVBbmRTdWJtaXRGb3JtKCkge1xuICAgIGNvbnN0IHBhc3N3b3JkVmFsaWQgPSB0aGlzLnZhbGlkYXRlRm9ybSgpO1xuXG4gICAgaWYgKCFwYXNzd29yZFZhbGlkKSB7XG4gICAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3IoXCJUaGUgcGFzc3dvcmQgaXMgaW52YWxpZFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdWJtaXRGb3JtKCk7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGVGb3JtKCkge1xuICAgIGNvbnN0IHBhc3N3b3JkID0gdGhpcy5nZXRQYXNzd29yZCgpLFxuICAgICAgICAgIHBhc3N3b3JkVmFsaWQgPSBpc1Bhc3N3b3JkVmFsaWQocGFzc3dvcmQpO1xuXG4gICAgcmV0dXJuIHBhc3N3b3JkVmFsaWQ7XG4gIH1cblxuICBzdWJtaXRGb3JtKCkge1xuICAgIGNvbnN0IHBhc3N3b3JkID0gdGhpcy5nZXRQYXNzd29yZCgpO1xuXG4gICAgY29udHJvbGxlci5zZXRQYXNzd29yZChwYXNzd29yZCk7XG5cbiAgICB0aGlzLmNsZWFyUGFzc3dvcmQoKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuKFtcblxuICAgICAgPFBhc3N3b3JkSW5wdXQgLz4sXG4gICAgICA8VmFsaWRhdGlvbkVycm9yUGFyYWdyYXBoIC8+LFxuICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQsIGVsZW1lbnQpID0+IHtcblxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRlQW5kU3VibWl0Rm9ybSgpO1xuXG4gICAgICAgICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIFN1Ym1pdFxuICAgICAgPC9CdXR0b24+XG5cbiAgICBdKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZm9ybVwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwicGFzc3dvcmRcIlxuICB9O1xufVxuXG5mdW5jdGlvbiBpc1Bhc3N3b3JkVmFsaWQocGFzc3dvcmQpIHtcbiAgY29uc3QgcGFzc3dvcmRWYWxpZCA9IChwYXNzd29yZCAhPT0gRU1QVFlfU1RSSU5HKTtcblxuICByZXR1cm4gcGFzc3dvcmRWYWxpZDtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lc3NhZ2VQYXJhZ3JhcGggZXh0ZW5kcyBFbGVtZW50IHtcbiAgc2hvd01lc3NhZ2UobWVzc2FnZSkge1xuICAgIGNvbnN0IGh0bWwgPSBtZXNzYWdlOyAvLy9cblxuICAgIHRoaXMuaHRtbChodG1sKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG5cdCAgY29uc3Qgc2hvd01lc3NhZ2UgPSB0aGlzLnNob3dNZXNzYWdlLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIHNob3dNZXNzYWdlXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwicFwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwibWVzc2FnZVwiXG4gIH07XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgY29udHJvbGxlciBmcm9tIFwiLi4vLi4vY29udHJvbGxlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNldFBhc3N3b3JkQnV0dG9uIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNsaWNrSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnRyb2xsZXIucmVzZXRQYXNzd29yZCgpO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgdGhpcy5vbkNsaWNrKHRoaXMuY2xpY2tIYW5kbGVyLCB0aGlzKTtcbiAgfVxuXG4gIHdpbGxNb3VudCgpIHtcbiAgICB0aGlzLm9mZkNsaWNrKHRoaXMuY2xpY2tIYW5kbGVyLCB0aGlzKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIFwiUmVzZXQgcGFzc3dvcmRcIjtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJidXR0b25cIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInJlc2V0LXBhc3N3b3JkXCJcbiAgfTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBQYXNzd29yZEZvcm0gZnJvbSBcIi4vdmlldy9mb3JtL3Bhc3N3b3JkXCI7XG5pbXBvcnQgTWVzc2FnZVBhcmFncmFwaCBmcm9tIFwiLi92aWV3L3BhcmFncmFwaC9tZXNzYWdlXCI7XG5pbXBvcnQgUmVzZXRQYXNzd29yZEJ1dHRvbiBmcm9tIFwiLi92aWV3L2J1dHRvbi9yZXNldFBhc3N3b3JkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4oW1xuXG4gICAgICA8UGFzc3dvcmRGb3JtLz4sXG4gICAgICA8UmVzZXRQYXNzd29yZEJ1dHRvbi8+LFxuICAgICAgPE1lc3NhZ2VQYXJhZ3JhcGgvPlxuXG4gICAgXSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGVsIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wYXNzd29yZCA9IG51bGw7XG4gIH1cblxuICBzZXRQYXNzd29yZChwYXNzd29yZCkge1xuICAgIHRoaXMucGFzc3dvcmQgPSBwYXNzd29yZDtcbiAgfVxuXG4gIHJlc2V0UGFzc3dvcmQoKSB7XG4gICAgdGhpcy5wYXNzd29yZCA9IG51bGw7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFwiLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgeyBCb2R5IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IFZpZXcgZnJvbSBcIi4vbXZjQXBwbGljYXRpb24vdmlld1wiO1xuaW1wb3J0IE1vZGVsIGZyb20gXCIuL212Y0FwcGxpY2F0aW9uL21vZGVsXCI7XG5pbXBvcnQgY29udHJvbGxlciBmcm9tIFwiLi9tdmNBcHBsaWNhdGlvbi9jb250cm9sbGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG12Y0FwcGxpY2F0aW9uKCkge1xuICBjb25zdCBtb2RlbCA9IG5ldyBNb2RlbCgpLFxuICAgICAgICB2aWV3ID1cblxuICAgICAgICAgIDxWaWV3Lz5cblxuICAgICAgICA7XG5cbiAgT2JqZWN0LmFzc2lnbihjb250cm9sbGVyLCB7XG4gICAgc2V0UGFzc3dvcmQsXG4gICAgcmVzZXRQYXNzd29yZFxuICB9KTtcblxuICBjb25zdCBib2R5ID0gbmV3IEJvZHkoKTtcblxuICBib2R5Lm1vdW50KHZpZXcpO1xuXG4gIGZ1bmN0aW9uIHNldFBhc3N3b3JkKHBhc3N3b3JkKSB7XG4gICAgbW9kZWwuc2V0UGFzc3dvcmQocGFzc3dvcmQpO1xuXG4gICAgdmlldy5zaG93TWVzc2FnZShcIlRoZSBwYXNzd29yZCBoYXMgYmVlbiBzZXQuXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRQYXNzd29yZCgpIHtcbiAgICBtb2RlbC5yZXNldFBhc3N3b3JkKCk7XG5cbiAgICB2aWV3LnNob3dNZXNzYWdlKFwiVGhlIHBhc3N3b3JkIGhhcyBiZWVuIHJlc2V0LlwiKTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCIuLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCB7IEJvZHkgfSBmcm9tIFwiZWFzeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaW1wbGVBcHBsaWNhdGlvbigpIHtcbiAgY29uc3QgYm9keSA9IG5ldyBCb2R5KCk7XG5cbiAgYm9keS5tb3VudChcblxuICAgIDxwPlxuICAgICAgQSBzaW1wbGUgYXBwbGljYXRpb24uXG4gICAgPC9wPlxuXG4gICk7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGRlZmF1bHQgYXMgbXZjQXBwbGljYXRpb24gfSBmcm9tIFwiLi9leGFtcGxlL212Y0FwcGxpY2F0aW9uXCI7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIHNpbXBsZUFwcGxpY2F0aW9uIH0gZnJvbSBcIi4vZXhhbXBsZS9zaW1wbGVBcHBsaWNhdGlvblwiO1xuXG5PYmplY3QuYXNzaWduKHdpbmRvdywge1xuICBtdmNBcHBsaWNhdGlvbixcbiAgc2ltcGxlQXBwbGljYXRpb25cbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7OztBQUFBOzs7Ozs7OztlQUVxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFOLFFBQU0sU0FBTiwyQkFBQTt1QkFDRCxLQUFLLE1BQUk7Z0NBREY7QUFFakIsYUFBSyxNQUFNO0FBQ1gsYUFBSyxPQUFPOztvQkFISyxTQUFBOztVQU1uQixLQUFBO2lCQUFBLGtCQUFBO0FBQ0UsbUJBQU8sS0FBSzs7OztVQUdkLEtBQUE7aUJBQUEsbUJBQUE7QUFDRSxtQkFBTyxLQUFLOzs7O2FBWEs7Ozs7O0FDRnJCOzs7Ozs7OztlQUVxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFOLFFBQU0sU0FBTiwyQkFBQTt1QkFDRCxLQUFLLE1BQU0sT0FBTyxRQUFNO2dDQURqQjtBQUVqQixhQUFLLE1BQU07QUFDWCxhQUFLLE9BQU87QUFDWixhQUFLLFFBQVE7QUFDYixhQUFLLFNBQVM7O29CQUxHLFNBQUE7O1VBUW5CLEtBQUE7aUJBQUEsa0JBQUE7QUFDRSxtQkFBTyxLQUFLOzs7O1VBR2QsS0FBQTtpQkFBQSxtQkFBQTtBQUNFLG1CQUFPLEtBQUs7Ozs7VUFHZCxLQUFBO2lCQUFBLG9CQUFBO0FBQ0UsbUJBQU8sS0FBSzs7OztVQUdkLEtBQUE7aUJBQUEscUJBQUE7QUFDRSxtQkFBTyxLQUFLOzs7O1VBR2QsS0FBQTtpQkFBQSxvQkFBQTtBQUNFLGdCQUFNLFFBQVMsS0FBSyxRQUFRLEtBQUs7QUFFakMsbUJBQU87Ozs7VUFHVCxLQUFBO2lCQUFBLHFCQUFBO0FBQ0UsZ0JBQU0sU0FBVSxL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
