(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TIMEOUT_DELAY = void 0;
var TIMEOUT_DELAY = 1000;
exports.TIMEOUT_DELAY = TIMEOUT_DELAY;

},{}],2:[function(require,module,exports){
"use strict";

var _mvcApp = _interopRequireDefault(require("./examples/mvcApp"));

var _simpleApp = _interopRequireDefault(require("./examples/simpleApp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

Object.assign(window, {
  mvcApp: _mvcApp["default"],
  simpleApp: _simpleApp["default"]
});

},{"./examples/mvcApp":3,"./examples/simpleApp":13}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = mvcApp;

require("../index");

var _easy = require("easy");

var _view = _interopRequireDefault(require("./mvcApp/view"));

var _model = _interopRequireDefault(require("./mvcApp/model"));

var _controller = _interopRequireDefault(require("./mvcApp/controller"));

var _createMethods = _interopRequireDefault(require("./mvcApp/controller/createMethods"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

///
function mvcApp() {
  var model = new _model["default"](),
      view = React.createElement(_view["default"], null);

  _controller["default"].assignMethods(_createMethods["default"], model, view);

  var body = new _easy.Body();
  body.prepend(view);
}

},{"../index":14,"./mvcApp/controller":4,"./mvcApp/controller/createMethods":5,"./mvcApp/model":6,"./mvcApp/view":7,"easy":24}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Controller = /*#__PURE__*/function () {
  function Controller() {
    _classCallCheck(this, Controller);
  }

  _createClass(Controller, [{
    key: "assignMethods",
    value: function assignMethods(createMethods, model, view) {
      var methods = createMethods(model, view);
      Object.assign(this, methods);
    }
  }]);

  return Controller;
}();

var controller = new Controller();
var _default = controller;
exports["default"] = _default;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createMethods;

function createMethods(model, view) {
  function setPassword(password) {
    model.setPassword(password);
    view.showMessage("The password has been set.");
  }

  function resetPassword() {
    model.resetPassword();
    view.showMessage("The password has been reset.");
  }

  return {
    setPassword: setPassword,
    resetPassword: resetPassword
  };
}

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Model = /*#__PURE__*/function () {
  function Model() {
    _classCallCheck(this, Model);

    this.password = null;
  }

  _createClass(Model, [{
    key: "setPassword",
    value: function setPassword(password) {
      this.password = password;
    }
  }, {
    key: "resetPassword",
    value: function resetPassword() {
      this.password = null;
    }
  }]);

  return Model;
}();

exports["default"] = Model;

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easy = require("easy");

var _message = _interopRequireDefault(require("./view/message"));

var _passwordForm = _interopRequireDefault(require("./view/passwordForm"));

var _resetPasswordButton = _interopRequireDefault(require("./view/resetPasswordButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var View = /*#__PURE__*/function (_Element) {
  _inherits(View, _Element);

  function View() {
    _classCallCheck(this, View);

    return _possibleConstructorReturn(this, _getPrototypeOf(View).apply(this, arguments));
  }

  _createClass(View, [{
    key: "childElements",
    value: function childElements() {
      return [React.createElement(_passwordForm["default"], null), React.createElement(_resetPasswordButton["default"], null), React.createElement(_message["default"], null)];
    }
  }, {
    key: "initialise",
    value: function initialise(properties) {
      this.assignContext();
    }
  }], [{
    key: "fromClass",
    value: function fromClass(Class, properties) {
      var view = _easy.Element.fromClass(Class, properties);

      view.initialise(properties);
      return view;
    }
  }]);

  return View;
}(_easy.Element);

exports["default"] = View;

_defineProperty(View, "tagName", "div");

_defineProperty(View, "defaultProperties", {
  className: "view"
});

},{"./view/message":8,"./view/passwordForm":9,"./view/resetPasswordButton":11,"easy":24}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easy = require("easy");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Message = /*#__PURE__*/function (_Element) {
  _inherits(Message, _Element);

  function Message() {
    _classCallCheck(this, Message);

    return _possibleConstructorReturn(this, _getPrototypeOf(Message).apply(this, arguments));
  }

  _createClass(Message, [{
    key: "showMessage",
    value: function showMessage(message) {
      var html = message; ///

      this.html(html);
    }
  }, {
    key: "parentContext",
    value: function parentContext() {
      var showMessage = this.showMessage.bind(this);
      return {
        showMessage: showMessage
      };
    }
  }]);

  return Message;
}(_easy.Element);

exports["default"] = Message;

_defineProperty(Message, "tagName", "p");

_defineProperty(Message, "defaultProperties", {
  className: "message"
});

},{"easy":24}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easy = require("easy");

var _controller = _interopRequireDefault(require("../controller"));

var _passwordInput = _interopRequireDefault(require("./passwordInput"));

var _validationError = _interopRequireDefault(require("./validationError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PasswordForm = /*#__PURE__*/function (_Element) {
  _inherits(PasswordForm, _Element);

  function PasswordForm() {
    _classCallCheck(this, PasswordForm);

    return _possibleConstructorReturn(this, _getPrototypeOf(PasswordForm).apply(this, arguments));
  }

  _createClass(PasswordForm, [{
    key: "validateAndSubmitForm",
    value: function validateAndSubmitForm() {
      var passwordValid = this.validateForm();

      if (!passwordValid) {
        this.showValidationError("The password is invalid");
      } else {
        this.submitForm();
      }
    }
  }, {
    key: "validateForm",
    value: function validateForm() {
      var password = this.getPassword(),
          passwordValid = isPasswordValid(password);
      return passwordValid;
    }
  }, {
    key: "submitForm",
    value: function submitForm() {
      var password = this.getPassword();

      _controller["default"].setPassword(password);

      this.clearPassword();
    }
  }, {
    key: "childElements",
    value: function childElements() {
      var _this = this;

      return [React.createElement(_passwordInput["default"], null), React.createElement(_validationError["default"], null), React.createElement(_easy.Button, {
        className: "submit",
        onClick: function onClick(event, element) {
          event.preventDefault();

          _this.validateAndSubmitForm();
        }
      }, "Submit")];
    }
  }, {
    key: "initialise",
    value: function initialise(properties) {
      this.assignContext();
    }
  }], [{
    key: "fromClass",
    value: function fromClass(Class, properties) {
      var passwordForm = _easy.Element.fromClass(Class, properties);

      passwordForm.initialise(properties);
      return passwordForm;
    }
  }]);

  return PasswordForm;
}(_easy.Element);

exports["default"] = PasswordForm;

_defineProperty(PasswordForm, "tagName", "form");

_defineProperty(PasswordForm, "defaultProperties", {
  className: "password"
});

function isPasswordValid(password) {
  var passwordValid = password !== ""; ///

  return passwordValid;
}

},{"../controller":4,"./passwordInput":10,"./validationError":12,"easy":24}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easy = require("easy");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PasswordInput = /*#__PURE__*/function (_InputElement) {
  _inherits(PasswordInput, _InputElement);

  function PasswordInput() {
    _classCallCheck(this, PasswordInput);

    return _possibleConstructorReturn(this, _getPrototypeOf(PasswordInput).apply(this, arguments));
  }

  _createClass(PasswordInput, [{
    key: "getPassword",
    value: function getPassword() {
      var value = this.getValue(),
          password = value; ///

      return password;
    }
  }, {
    key: "clearPassword",
    value: function clearPassword() {
      var password = "",
          value = password; ///

      this.setValue(value);
    }
  }, {
    key: "parentContext",
    value: function parentContext() {
      var getPassword = this.getPassword.bind(this),
          clearPassword = this.clearPassword.bind(this);
      return {
        getPassword: getPassword,
        clearPassword: clearPassword
      };
    }
  }]);

  return PasswordInput;
}(_easy.InputElement);

exports["default"] = PasswordInput;

_defineProperty(PasswordInput, "tagName", "input");

_defineProperty(PasswordInput, "defaultProperties", {
  type: "password"
});

},{"easy":24}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easy = require("easy");

var _controller = _interopRequireDefault(require("../controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ResetPasswordButton = /*#__PURE__*/function (_Element) {
  _inherits(ResetPasswordButton, _Element);

  function ResetPasswordButton() {
    _classCallCheck(this, ResetPasswordButton);

    return _possibleConstructorReturn(this, _getPrototypeOf(ResetPasswordButton).apply(this, arguments));
  }

  _createClass(ResetPasswordButton, [{
    key: "clickHandler",
    value: function clickHandler() {
      _controller["default"].resetPassword();
    }
  }, {
    key: "childElements",
    value: function childElements() {
      return "Reset password";
    }
  }, {
    key: "initialise",
    value: function initialise(properties) {
      this.onClick(this.clickHandler);
    }
  }], [{
    key: "fromClass",
    value: function fromClass(Class, properties) {
      var resetPasswordButton = _easy.Element.fromClass(Class, properties);

      resetPasswordButton.initialise(properties);
      return resetPasswordButton;
    }
  }]);

  return ResetPasswordButton;
}(_easy.Element);

exports["default"] = ResetPasswordButton;

_defineProperty(ResetPasswordButton, "tagName", "button");

_defineProperty(ResetPasswordButton, "defaultProperties", {
  className: "resetPassword"
});

},{"../controller":4,"easy":24}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easy = require("easy");

var _constants = require("../../../constants");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ValidationError = /*#__PURE__*/function (_Element) {
  _inherits(ValidationError, _Element);

  function ValidationError(selectorOrDomElement) {
    var _this;

    _classCallCheck(this, ValidationError);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ValidationError).call(this, selectorOrDomElement));
    _this.timeout = null;
    return _this;
  }

  _createClass(ValidationError, [{
    key: "clearValidationError",
    value: function clearValidationError() {
      var html = "";
      this.html(html);
    }
  }, {
    key: "showValidationError",
    value: function showValidationError(validationError) {
      var _this2 = this;

      var html = validationError; ///

      this.html(html);

      if (this.timeout !== null) {
        clearTimeout(this.timeout);
      }

      this.timeout = setTimeout(function () {
        _this2.timemout = null;

        _this2.clearValidationError();
      }, _constants.TIMEOUT_DELAY);
    }
  }, {
    key: "parentContext",
    value: function parentContext() {
      return {
        showValidationError: this.showValidationError.bind(this)
      };
    }
  }]);

  return ValidationError;
}(_easy.Element);

exports["default"] = ValidationError;

_defineProperty(ValidationError, "tagName", "p");

_defineProperty(ValidationError, "defaultProperties", {
  className: "validation error"
});

},{"../../../constants":1,"easy":24}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = simpleApp;

require("../index");

var _easy = require("easy");

///
function simpleApp() {
  var body = new _easy.Body();
  body.prepend(React.createElement("div", null, React.createElement("p", null, "A simple application.")));
}

},{"../index":14,"easy":24}],14:[function(require,module,exports){
"use strict";

require("./juxtapose");

},{"./juxtapose":15}],15:[function(require,module,exports){
"use strict";

var _easy = require("easy");

_easy.window.assign({
  React: _easy.React
});

},{"easy":24}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MIDDLE_MOUSE_BUTTON = exports.RIGHT_MOUSE_BUTTON = exports.LEFT_MOUSE_BUTTON = exports.SVG_NAMESPACE_URI = void 0;
var SVG_NAMESPACE_URI = "http://www.w3.org/2000/svg";
exports.SVG_NAMESPACE_URI = SVG_NAMESPACE_URI;
var LEFT_MOUSE_BUTTON = 0;
exports.LEFT_MOUSE_BUTTON = LEFT_MOUSE_BUTTON;
var RIGHT_MOUSE_BUTTON = 2;
exports.RIGHT_MOUSE_BUTTON = RIGHT_MOUSE_BUTTON;
var MIDDLE_MOUSE_BUTTON = 1;
exports.MIDDLE_MOUSE_BUTTON = MIDDLE_MOUSE_BUTTON;
var _default = {
  LEFT_MOUSE_BUTTON: LEFT_MOUSE_BUTTON,
  RIGHT_MOUSE_BUTTON: RIGHT_MOUSE_BUTTON,
  MIDDLE_MOUSE_BUTTON: MIDDLE_MOUSE_BUTTON
};
exports["default"] = _default;

},{}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _key = _interopRequireDefault(require("./mixins/key"));

var _click = _interopRequireDefault(require("./mixins/click"));

var _event = _interopRequireDefault(require("./mixins/event"));

var _mouse = _interopRequireDefault(require("./mixins/mouse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Document = function Document() {
  _classCallCheck(this, Document);

  this.domElement = document; ///
};

var _default = typeof document === "undefined" ? undefined : new Document(); ///


exports["default"] = _default;
Object.assign(Document.prototype, _key["default"]);
Object.assign(Document.prototype, _click["default"]);
Object.assign(Document.prototype, _event["default"]);
Object.assign(Document.prototype, _mouse["default"]);

},{"./mixins/click":30,"./mixins/event":31,"./mixins/key":33,"./mixins/mouse":34}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _offset = _interopRequireDefault(require("./miscellaneous/offset"));

var _bounds = _interopRequireDefault(require("./miscellaneous/bounds"));

var _jsx = _interopRequireDefault(require("./mixins/jsx"));

var _key5 = _interopRequireDefault(require("./mixins/key"));

var _click = _interopRequireDefault(require("./mixins/click"));

var _state = _interopRequireDefault(require("./mixins/state"));

var _event = _interopRequireDefault(require("./mixins/event"));

var _mouse = _interopRequireDefault(require("./mixins/mouse"));

var _resize = _interopRequireDefault(require("./mixins/resize"));

var _scroll = _interopRequireDefault(require("./mixins/scroll"));

var _object = require("./utilities/object");

var _name2 = require("./utilities/name");

var _array = require("./utilities/array");

var _constants = require("./constants");

var _dom = require("./utilities/dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Element = /*#__PURE__*/function () {
  function Element(selectorOrDOMElement) {
    _classCallCheck(this, Element);

    if (typeof selectorOrDOMElement === "string") {
      var selector = selectorOrDOMElement;
      this.domElement = document.querySelector(selector);
    } else {
      var domElement = selectorOrDOMElement; ///

      this.domElement = domElement;
    }

    this.domElement.__element__ = this; ///
  }

  _createClass(Element, [{
    key: "getDOMElement",
    value: function getDOMElement() {
      return this.domElement;
    }
  }, {
    key: "getOffset",
    value: function getOffset() {
      var top = this.domElement.offsetTop,
          ///
      left = this.domElement.offsetLeft,
          ///
      offset = new _offset["default"](top, left);
      return offset;
    }
  }, {
    key: "getBounds",
    value: function getBounds() {
      var boundingClientRect = this.domElement.getBoundingClientRect(),
          bounds = _bounds["default"].fromBoundingClientRect(boundingClientRect);

      return bounds;
    }
  }, {
    key: "getWidth",
    value: function getWidth() {
      var includeBorder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var width = includeBorder ? this.domElement.offsetWidth : this.domElement.clientWidth;
      return width;
    }
  }, {
    key: "setWidth",
    value: function setWidth(width) {
      width = "".concat(width, "px"); ///

      this.style("width", width);
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      var includeBorder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var height = includeBorder ? this.domElement.offsetHeight : this.domElement.clientHeight;
      return height;
    }
  }, {
    key: "setHeight",
    value: function setHeight(height) {
      height = "".concat(height, "px"); ///

      this.style("height", height);
    }
  }, {
    key: "hasAttribute",
    value: function hasAttribute(name) {
      return this.domElement.hasAttribute(name);
    }
  }, {
    key: "getAttribute",
    value: function getAttribute(name) {
      return this.domElement.getAttribute(name);
    }
  }, {
    key: "setAttribute",
    value: function setAttribute(name, value) {
      this.domElement.setAttribute(name, value);
    }
  }, {
    key: "clearAttribute",
    value: function clearAttribute(name) {
      this.domElement.removeAttribute(name);
    }
  }, {
    key: "addAttribute",
    value: function addAttribute(name, value) {
      this.setAttribute(name, value);
    }
  }, {
    key: "removeAttribute",
    value: function removeAttribute(name) {
      this.clearAttribute(name);
    }
  }, {
    key: "setClass",
    value: function setClass(className) {
      this.domElement.className = className;
    }
  }, {
    key: "addClass",
    value: function addClass(className) {
      this.domElement.classList.add(className);
    }
  }, {
    key: "removeClass",
    value: function removeClass(className) {
      this.domElement.classList.remove(className);
    }
  }, {
    key: "toggleClass",
    value: function toggleClass(className) {
      this.domElement.classList.toggle(className);
    }
  }, {
    key: "hasClass",
    value: function hasClass(className) {
      return this.domElement.classList.contains(className);
    }
  }, {
    key: "clearClasses",
    value: function clearClasses() {
      this.domElement.className = "";
    }
  }, {
    key: "prependTo",
    value: function prependTo(parentElement) {
      parentElement.prepend(this);
    }
  }, {
    key: "appendTo",
    value: function appendTo(parentElement) {
      parentElement.append(this);
    }
  }, {
    key: "addTo",
    value: function addTo(parentElement) {
      parentElement.add(this);
    }
  }, {
    key: "removeFrom",
    value: function removeFrom(parentElement) {
      parentElement.remove(this);
    }
  }, {
    key: "insertBefore",
    value: function insertBefore(siblingElement) {
      var parentDOMNode = siblingElement.domElement.parentNode,
          siblingDOMElement = siblingElement.domElement;
      parentDOMNode.insertBefore(this.domElement, siblingDOMElement);
    }
  }, {
    key: "insertAfter",
    value: function insertAfter(siblingElement) {
      var parentDOMNode = siblingElement.domElement.parentNode,
          siblingDOMElement = siblingElement.domElement;
      parentDOMNode.insertBefore(this.domElement, siblingDOMElement.nextSibling); ///
    }
  }, {
    key: "prepend",
    value: function prepend(element) {
      var domElement = element.domElement,
          firstChildDOMElement = this.domElement.firstChild;
      this.domElement.insertBefore(domElement, firstChildDOMElement);
    }
  }, {
    key: "append",
    value: function append(element) {
      var domElement = element.domElement;
      this.domElement.insertBefore(domElement, null); ///
    }
  }, {
    key: "add",
    value: function add(element) {
      this.append(element);
    }
  }, {
    key: "remove",
    value: function remove(element) {
      if (element) {
        var domElement = element.domElement;
        this.domElement.removeChild(domElement);
      } else {
        this.domElement.remove();
      }
    }
  }, {
    key: "mount",
    value: function mount(element) {
      this.add(element);
      var descendantElements = this.getDescendantElements();
      descendantElements.forEach(function (descendantElement) {
        return descendantElement.didMount && descendantElement.didMount();
      }); ///
    }
  }, {
    key: "unmount",
    value: function unmount(element) {
      var descendantElements = this.getDescendantElements();
      descendantElements.forEach(function (descendantElement) {
        return descendantElement.willUnmount && descendantElement.willUnmount();
      }); ///

      this.remove(element);
    }
  }, {
    key: "show",
    value: function show() {
      var displayStyle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "block";
      this.display(displayStyle);
    }
  }, {
    key: "hide",
    value: function hide() {
      this.style("display", "none");
    }
  }, {
    key: "display",
    value: function display(_display) {
      this.style("display", _display);
    }
  }, {
    key: "enable",
    value: function enable() {
      this.clearAttribute("disabled");
    }
  }, {
    key: "disable",
    value: function disable() {
      this.setAttribute("disabled", "disabled");
    }
  }, {
    key: "isEnabled",
    value: function isEnabled() {
      var disabled = this.isDisabled(),
          enabled = !disabled;
      return enabled;
    }
  }, {
    key: "isDisabled",
    value: function isDisabled() {
      var disabled = this.hasAttribute("disabled");
      return disabled;
    }
  }, {
    key: "isDisplayed",
    value: function isDisplayed() {
      var display = this.style("display"),
          displayed = display !== "none";
      return displayed;
    }
  }, {
    key: "isShowing",
    value: function isShowing() {
      var displayed = this.isDisplayed(),
          showing = displayed; ///

      return showing;
    }
  }, {
    key: "isHidden",
    value: function isHidden() {
      var displayed = this.isDisplayed(),
          hidden = !displayed;
      return hidden;
    }
  }, {
    key: "style",
    value: function style(name, value) {
      if (value !== undefined) {
        this.domElement.style[name] = value;
      } else {
        var style = this.domElement.style[name];
        return style;
      }
    }
  }, {
    key: "html",
    value: function html(_html) {
      if (_html === undefined) {
        var innerHTML = this.domElement.innerHTML;
        _html = innerHTML; ///

        return _html;
      } else {
        var _innerHTML = _html; ///

        this.domElement.innerHTML = _innerHTML;
      }
    }
  }, {
    key: "css",
    value: function css(_css) {
      var _this = this;

      if (_css === undefined) {
        var computedStyle = getComputedStyle(this.domElement),
            css = {};

        for (var index = 0; index < computedStyle.length; index++) {
          var name = computedStyle[0],
              ///
          value = computedStyle.getPropertyValue(name); ///

          css[name] = value;
        }

        return css;
      } else if (typeof _css === "string") {
        var _name = _css; ///

        var _computedStyle = getComputedStyle(this.domElement),
            _value = _computedStyle.getPropertyValue(_name); ///


        _css = _value; ///

        return _css;
      } else {
        var names = Object.keys(_css); ///

        names.forEach(function (name) {
          var value = _css[name];

          _this.style(name, value);
        });
      }
    }
  }, {
    key: "blur",
    value: function blur() {
      this.domElement.blur();
    }
  }, {
    key: "focus",
    value: function focus() {
      this.domElement.focus();
    }
  }, {
    key: "hasFocus",
    value: function hasFocus() {
      var focus = document.activeElement === this.domElement; ///

      return focus;
    }
  }, {
    key: "getDescendantElements",
    value: function getDescendantElements() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "*";
      var domNode = this.domElement,
          ///
      descendantDOMNodes = (0, _dom.descendantDOMNodesFromDOMNode)(domNode),
          descendantDOMElements = (0, _dom.filterDOMNodesBySelector)(descendantDOMNodes, selector),
          descendantElements = (0, _dom.elementsFromDOMElements)(descendantDOMElements);
      return descendantElements;
    }
  }, {
    key: "getChildElements",
    value: function getChildElements() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "*";
      var childDOMNodes = this.domElement.childNodes,
          childDOMElements = (0, _dom.filterDOMNodesBySelector)(childDOMNodes, selector),
          childElements = (0, _dom.elementsFromDOMElements)(childDOMElements);
      return childElements;
    }
  }, {
    key: "getParentElement",
    value: function getParentElement() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "*";
      var parentElement = null;
      var parentDOMElement = this.domElement.parentElement;

      if (parentDOMElement !== null) {
        if (parentDOMElement.matches(selector)) {
          var parentDOMElements = [parentDOMElement],
              parentElements = (0, _dom.elementsFromDOMElements)(parentDOMElements),
              firstParentElement = (0, _array.first)(parentElements);
          parentElement = firstParentElement || null;
        }
      }

      return parentElement;
    }
  }, {
    key: "getAscendantElements",
    value: function getAscendantElements() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "*";
      var ascendantDOMElements = [],
          parentDOMElement = this.domElement.parentElement;
      var ascendantDOMElement = parentDOMElement; ///

      while (ascendantDOMElement !== null) {
        if (ascendantDOMElement.matches(selector)) {
          ascendantDOMElements.push(ascendantDOMElement);
        }

        ascendantDOMElement = ascendantDOMElement.parentElement;
      }

      var ascendantElements = (0, _dom.elementsFromDOMElements)(ascendantDOMElements);
      return ascendantElements;
    }
  }, {
    key: "getPreviousSiblingElement",
    value: function getPreviousSiblingElement() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "*";
      var previousSiblingElement = null;
      var previousSiblingDOMNode = this.domElement.previousSibling; ///

      if (previousSiblingDOMNode !== null && (0, _dom.domNodeMatchesSelector)(previousSiblingDOMNode, selector)) {
        previousSiblingElement = previousSiblingDOMNode.__element__ || null;
      }

      return previousSiblingElement;
    }
  }, {
    key: "getNextSiblingElement",
    value: function getNextSiblingElement() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "*";
      var nextSiblingElement = null;
      var nextSiblingDOMNode = this.domElement.nextSibling;

      if (nextSiblingDOMNode !== null && (0, _dom.domNodeMatchesSelector)(nextSiblingDOMNode, selector)) {
        nextSiblingElement = nextSiblingDOMNode.__element__ || null;
      }

      return nextSiblingElement;
    }
  }], [{
    key: "fromTagName",
    value: function fromTagName(tagName, properties) {
      for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        remainingArguments[_key - 2] = arguments[_key];
      }

      var element = _fromTagName.apply(void 0, [Element, tagName].concat(remainingArguments)),
          defaultProperties = {},
          ///
      ignoredProperties = []; ///


      element.applyProperties(properties, defaultProperties, ignoredProperties);
      return element;
    }
  }, {
    key: "fromClass",
    value: function fromClass(Class, properties) {
      for (var _len2 = arguments.length, remainingArguments = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        remainingArguments[_key2 - 2] = arguments[_key2];
      }

      var tagName = Class.tagName,
          element = _fromTagName.apply(void 0, [Class, tagName].concat(remainingArguments)),
          defaultProperties = defaultPropertiesFromClass(Class),
          ignoredProperties = ignoredPropertiesFromClass(Class);

      element.applyProperties(properties, defaultProperties, ignoredProperties);
      return element;
    }
  }]);

  return Element;
}();

Object.assign(Element.prototype, _jsx["default"]);
Object.assign(Element.prototype, _key5["default"]);
Object.assign(Element.prototype, _click["default"]);
Object.assign(Element.prototype, _state["default"]);
Object.assign(Element.prototype, _event["default"]);
Object.assign(Element.prototype, _mouse["default"]);
Object.assign(Element.prototype, _resize["default"]);
Object.assign(Element.prototype, _scroll["default"]);
var _default = Element;
exports["default"] = _default;

function _fromTagName(Class, tagName) {
  var domElement = (0, _name2.isSVGTagName)(tagName) ? document.createElementNS(_constants.SVG_NAMESPACE_URI, tagName) : document.createElement(tagName);

  for (var _len3 = arguments.length, remainingArguments = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
    remainingArguments[_key3 - 2] = arguments[_key3];
  }

  return fromDOMElement.apply(void 0, [Class, domElement].concat(remainingArguments));
}

function fromDOMElement(Class, domElement) {
  var _Function$prototype$b;

  for (var _len4 = arguments.length, remainingArguments = new Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
    remainingArguments[_key4 - 2] = arguments[_key4];
  }

  remainingArguments.unshift(domElement);
  remainingArguments.unshift(null);
  return new ((_Function$prototype$b = Function.prototype.bind).call.apply(_Function$prototype$b, [Class].concat(remainingArguments)))();
}

function defaultPropertiesFromClass(Class) {
  var defaultProperties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (Class.hasOwnProperty("defaultProperties")) {
    (0, _object.combine)(defaultProperties, Class.defaultProperties);
  }

  var superClass = Object.getPrototypeOf(Class);

  if (superClass !== null) {
    defaultPropertiesFromClass(superClass, defaultProperties);
  }

  return defaultProperties;
}

function ignoredPropertiesFromClass(Class) {
  var ignoredProperties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (Class.hasOwnProperty("ignoredProperties")) {
    (0, _array.augment)(ignoredProperties, Class.ignoredProperties, function (ignoredProperty) {
      return !ignoredProperties.includes(ignoredProperty);
    });
  }

  var superClass = Object.getPrototypeOf(Class);

  if (superClass !== null) {
    ignoredPropertiesFromClass(superClass, ignoredProperties);
  }

  return ignoredProperties;
}

},{"./constants":16,"./miscellaneous/bounds":28,"./miscellaneous/offset":29,"./mixins/click":30,"./mixins/event":31,"./mixins/jsx":32,"./mixins/key":33,"./mixins/mouse":34,"./mixins/resize":35,"./mixins/scroll":36,"./mixins/state":37,"./utilities/array":40,"./utilities/dom":41,"./utilities/name":43,"./utilities/object":44}],19:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _element = _interopRequireDefault(require("../element"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Body = /*#__PURE__*/function (_Element) {
  _inherits(Body, _Element);

  function Body() {
    var selectorOrDOMElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "body";

    _classCallCheck(this, Body);

    return _possibleConstructorReturn(this, _getPrototypeOf(Body).call(this, selectorOrDOMElement));
  }

  return Body;
}(_element["default"]);

exports["default"] = Body;

_defineProperty(Body, "tagName", "body");

},{"../element":18}],20:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _element = _interopRequireDefault(require("../element"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Button = /*#__PURE__*/function (_Element) {
  _inherits(Button, _Element);

  function Button(selectorOrDOMElement, clickHandler) {
    var _this;

    _classCallCheck(this, Button);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Button).call(this, selectorOrDOMElement));

    if (clickHandler !== null) {
      _this.onClick(clickHandler);
    }

    return _this;
  }

  _createClass(Button, null, [{
    key: "fromClass",
    value: function fromClass(Class, properties) {
      var _properties$onClick = properties.onClick,
          onClick = _properties$onClick === void 0 ? null : _properties$onClick,
          clickHandler = onClick,
          button = _element["default"].fromClass(Class, properties, clickHandler);

      return button;
    }
  }]);

  return Button;
}(_element["default"]);

exports["default"] = Button;

_defineProperty(Button, "tagName", "button");

_defineProperty(Button, "ignoredProperties", ["onClick"]);

},{"../element":18}],21:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _element = _interopRequireDefault(require("../element"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Checkbox = /*#__PURE__*/function (_Element) {
  _inherits(Checkbox, _Element);

  function Checkbox(selectorOrDOMElement, changeHandler, checked) {
    var _this;

    _classCallCheck(this, Checkbox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Checkbox).call(this, selectorOrDOMElement));

    if (changeHandler !== null) {
      _this.onChange(changeHandler);
    }

    _this.check(checked);

    return _this;
  }

  _createClass(Checkbox, [{
    key: "onChange",
    value: function onChange(changeHandler, element) {
      this.on("click", changeHandler, element);
    } ///

  }, {
    key: "offChange",
    value: function offChange(changeHandler, element) {
      this.off("click", changeHandler, element);
    } ///

  }, {
    key: "check",
    value: function check() {
      var checked = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.domElement.checked = checked;
    }
  }, {
    key: "isChecked",
    value: function isChecked() {
      return this.domElement.checked;
    }
  }], [{
    key: "fromClass",
    value: function fromClass(Class, properties) {
      var _properties$onChange = properties.onChange,
          onChange = _properties$onChange === void 0 ? null : _properties$onChange,
          _properties$checked = properties.checked,
          checked = _properties$checked === void 0 ? null : _properties$checked,
          changeHandler = onChange,
          checkbox = _element["default"].fromClass(Class, properties, changeHandler, checked);

      return checkbox;
    }
  }]);

  return Checkbox;
}(_element["default"]);

exports["default"] = Checkbox;

_defineProperty(Checkbox, "tagName", "input");

_defineProperty(Checkbox, "ignoredProperties", ["onChange", "checked"]);

_defineProperty(Checkbox, "defaultProperties", {
  type: "checkbox"
});

},{"../element":18}],22:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _element = _interopRequireDefault(require("../element"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Link = /*#__PURE__*/function (_Element) {
  _inherits(Link, _Element);

  function Link(selectorOrDOMElement, clickHandler) {
    var _this;

    _classCallCheck(this, Link);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Link).call(this, selectorOrDOMElement));

    if (clickHandler !== null) {
      _this.onClick(clickHandler);
    }

    return _this;
  }

  _createClass(Link, [{
    key: "getHRef",
    value: function getHRef() {
      return this.getAttribute("href");
    }
  }, {
    key: "setHRef",
    value: function setHRef(href) {
      return this.setAttribute("href", href);
    }
  }], [{
    key: "fromClass",
    value: function fromClass(Class, properties) {
      var _properties$onClick = properties.onClick,
          onClick = _properties$onClick === void 0 ? null : _properties$onClick,
          clickHandler = onClick,
          link = _element["default"].fromClass(Class, properties, clickHandler);

      return link;
    }
  }]);

  return Link;
}(_element["default"]);

exports["default"] = Link;

_defineProperty(Link, "tagName", "a");

_defineProperty(Link, "ignoredProperties", ["onClick"]);

},{"../element":18}],23:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _element = _interopRequireDefault(require("../element"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Select = /*#__PURE__*/function (_Element) {
  _inherits(Select, _Element);

  function Select(selectorOrDOMElement, changeHandler) {
    var _this;

    _classCallCheck(this, Select);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Select).call(this, selectorOrDOMElement));

    if (changeHandler !== null) {
      _this.onChange(changeHandler);
    }

    return _this;
  }

  _createClass(Select, [{
    key: "onChange",
    value: function onChange(changeHandler, element) {
      this.on("change", changeHandler, element);
    }
  }, {
    key: "offChange",
    value: function offChange(changeHandler, element) {
      this.off("change", changeHandler, element);
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.domElement.value;
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      this.domElement.value = value;
    }
  }], [{
    key: "fromClass",
    value: function fromClass(Class, properties) {
      var _properties$onChange = properties.onChange,
          onChange = _properties$onChange === void 0 ? null : _properties$onChange,
          changeHandler = onChange,
          select = _element["default"].fromClass(Class, properties, changeHandler);

      return select;
    }
  }]);

  return Select;
}(_element["default"]);

exports["default"] = Select;

_defineProperty(Select, "tagName", "select");

_defineProperty(Select, "ignoredProperties", ["onChange"]);

},{"../element":18}],24:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Body", {
  enumerable: true,
  get: function get() {
    return _body["default"];
  }
});
Object.defineProperty(exports, "Button", {
  enumerable: true,
  get: function get() {
    return _button["default"];
  }
});
Object.defineProperty(exports, "Checkbox", {
  enumerable: true,
  get: function get() {
    return _checkbox["default"];
  }
});
Object.defineProperty(exports, "Link", {
  enumerable: true,
  get: function get() {
    return _link["default"];
  }
});
Object.defineProperty(exports, "Select", {
  enumerable: true,
  get: function get() {
    return _select["default"];
  }
});
Object.defineProperty(exports, "Input", {
  enumerable: true,
  get: function get() {
    return _input["default"];
  }
});
Object.defineProperty(exports, "Textarea", {
  enumerable: true,
  get: function get() {
    return _textarea["default"];
  }
});
Object.defineProperty(exports, "Element", {
  enumerable: true,
  get: function get() {
    return _element["default"];
  }
});
Object.defineProperty(exports, "TextElement", {
  enumerable: true,
  get: function get() {
    return _textElement["default"];
  }
});
Object.defineProperty(exports, "InputElement", {
  enumerable: true,
  get: function get() {
    return _inputElement["default"];
  }
});
Object.defineProperty(exports, "window", {
  enumerable: true,
  get: function get() {
    return _window["default"];
  }
});
Object.defineProperty(exports, "document", {
  enumerable: true,
  get: function get() {
    return _document["default"];
  }
});
Object.defineProperty(exports, "constants", {
  enumerable: true,
  get: function get() {
    return _constants["default"];
  }
});
Object.defineProperty(exports, "Bounds", {
  enumerable: true,
  get: function get() {
    return _bounds["default"];
  }
});
Object.defineProperty(exports, "Offset", {
  enumerable: true,
  get: function get() {
    return _offset["default"];
  }
});
Object.defineProperty(exports, "React", {
  enumerable: true,
  get: function get() {
    return _react["default"];
  }
});

var _body = _interopRequireDefault(require("./element/body"));

var _button = _interopRequireDefault(require("./element/button"));

var _checkbox = _interopRequireDefault(require("./element/checkbox"));

var _link = _interopRequireDefault(require("./element/link"));

var _select = _interopRequireDefault(require("./element/select"));

var _input = _interopRequireDefault(require("./inputElement/input"));

var _textarea = _interopRequireDefault(require("./inputElement/textarea"));

var _element = _interopRequireDefault(require("./element"));

var _textElement = _interopRequireDefault(require("./textElement"));

var _inputElement = _interopRequireDefault(require("./inputElement"));

var _window = _interopRequireDefault(require("./window"));

var _document = _interopRequireDefault(require("./document"));

var _constants = _interopRequireDefault(require("./constants"));

var _bounds = _interopRequireDefault(require("./miscellaneous/bounds"));

var _offset = _interopRequireDefault(require("./miscellaneous/offset"));

var _react = _interopRequireDefault(require("./react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

},{"./constants":16,"./document":17,"./element":18,"./element/body":19,"./element/button":20,"./element/checkbox":21,"./element/link":22,"./element/select":23,"./inputElement":25,"./inputElement/input":26,"./inputElement/textarea":27,"./miscellaneous/bounds":28,"./miscellaneous/offset":29,"./react":38,"./textElement":39,"./window":45}],25:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _element = _interopRequireDefault(require("./element"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var InputElement = /*#__PURE__*/function (_Element) {
  _inherits(InputElement, _Element);

  function InputElement(selectorOrDOMElement, changeHandler) {
    var _this;

    _classCallCheck(this, InputElement);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InputElement).call(this, selectorOrDOMElement));

    if (changeHandler !== null) {
      _this.onChange(changeHandler);
    }

    return _this;
  }

  _createClass(InputElement, [{
    key: "onChange",
    value: function onChange(changeHandler, element) {
      this.on("change", changeHandler, element);
    }
  }, {
    key: "offChange",
    value: function offChange(changeHandler, element) {
      this.off("change", changeHandler, element);
    }
  }, {
    key: "onResize",
    value: function onResize(resizeHandler, element) {} ///

  }, {
    key: "offResize",
    value: function offResize(resizeHandler, element) {} ///

  }, {
    key: "getValue",
    value: function getValue() {
      return this.domElement.value;
    }
  }, {
    key: "getSelectionStart",
    value: function getSelectionStart() {
      return this.domElement.selectionStart;
    }
  }, {
    key: "getSelectionEnd",
    value: function getSelectionEnd() {
      return this.domElement.selectionEnd;
    }
  }, {
    key: "isReadOnly",
    value: function isReadOnly() {
      return this.domElement.readOnly;
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      this.domElement.value = value;
    }
  }, {
    key: "setSelectionStart",
    value: function setSelectionStart(selectionStart) {
      this.domElement.selectionStart = selectionStart;
    }
  }, {
    key: "setSelectionEnd",
    value: function setSelectionEnd(selectionEnd) {
      this.domElement.selectionEnd = selectionEnd;
    }
  }, {
    key: "setReadOnly",
    value: function setReadOnly(readOnly) {
      this.domElement.readOnly = readOnly;
    }
  }, {
    key: "select",
    value: function select() {
      this.domElement.select();
    }
  }], [{
    key: "fromClass",
    value: function fromClass(Class, properties) {
      var _properties$onChange = properties.onChange,
          onChange = _properties$onChange === void 0 ? null : _properties$onChange,
          changeHandler = onChange; ///

      for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        remainingArguments[_key - 2] = arguments[_key];
      }

      return _element["default"].fromClass.apply(_element["default"], [Class, properties, changeHandler].concat(remainingArguments));
    }
  }]);

  return InputElement;
}(_element["default"]);

exports["default"] = InputElement;

_defineProperty(InputElement, "ignoredProperties", ["onChange"]);

},{"./element":18}],26:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _inputElement = _interopRequireDefault(require("../inputElement"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Input = /*#__PURE__*/function (_InputElement) {
  _inherits(Input, _InputElement);

  function Input() {
    _classCallCheck(this, Input);

    return _possibleConstructorReturn(this, _getPrototypeOf(Input).apply(this, arguments));
  }

  return Input;
}(_inputElement["default"]);

exports["default"] = Input;

_defineProperty(Input, "tagName", "input");

},{"../inputElement":25}],27:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _inputElement = _interopRequireDefault(require("../inputElement"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Textarea = /*#__PURE__*/function (_InputElement) {
  _inherits(Textarea, _InputElement);

  function Textarea() {
    _classCallCheck(this, Textarea);

    return _possibleConstructorReturn(this, _getPrototypeOf(Textarea).apply(this, arguments));
  }

  return Textarea;
}(_inputElement["default"]);

exports["default"] = Textarea;

_defineProperty(Textarea, "tagName", "textarea");

},{"../inputElement":25}],28:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Bounds = /*#__PURE__*/function () {
  function Bounds(top, left, bottom, right) {
    _classCallCheck(this, Bounds);

    this.top = top;
    this.left = left;
    this.bottom = bottom;
    this.right = right;
  }

  _createClass(Bounds, [{
    key: "getTop",
    value: function getTop() {
      return this.top;
    }
  }, {
    key: "getLeft",
    value: function getLeft() {
      return this.left;
    }
  }, {
    key: "getBottom",
    value: function getBottom() {
      return this.bottom;
    }
  }, {
    key: "getRight",
    value: function getRight() {
      return this.right;
    }
  }, {
    key: "getWidth",
    value: function getWidth() {
      var width = this.right - this.left;
      return width;
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      var height = this.bottom - this.top;
      return height;
    }
  }, {
    key: "setTop",
    value: function setTop(top) {
      this.top = top;
    }
  }, {
    key: "setLeft",
    value: function setLeft(left) {
      this.left = left;
    }
  }, {
    key: "setBottom",
    value: function setBottom(bottom) {
      this.bottom = bottom;
    }
  }, {
    key: "setRight",
    value: function setRight(right) {
      this.right = right;
    }
  }, {
    key: "shift",
    value: function shift(horizontalOffset, verticalOffset) {
      this.top += verticalOffset;
      this.left += horizontalOffset;
      this.bottom += verticalOffset;
      this.right += horizontalOffset;
    }
  }, {
    key: "isOverlappingMouse",
    value: function isOverlappingMouse(mouseTop, mouseLeft) {
      return this.top < mouseTop && this.left < mouseLeft && this.bottom > mouseTop && this.right > mouseLeft;
    }
  }, {
    key: "areOverlapping",
    value: function areOverlapping(bounds) {
      return this.top < bounds.bottom && this.left < bounds.right && this.bottom > bounds.top && this.right > bounds.left;
    }
  }], [{
    key: "fromBoundingClientRect",
    value: function fromBoundingClientRect(boundingClientRect) {
      var windowScrollTop = window.pageYOffset,
          ///
      windowScrollLeft = window.pageXOffset,
          ///
      top = boundingClientRect.top + windowScrollTop,
          left = boundingClientRect.left + windowScrollLeft,
          bottom = boundingClientRect.bottom + windowScrollTop,
          right = boundingClientRect.right + windowScrollLeft,
          bounds = new Bounds(top, left, bottom, right);
      return bounds;
    }
  }, {
    key: "fromTopLeftWidthAndHeight",
    value: function fromTopLeftWidthAndHeight(top, left, width, height) {
      var bottom = top + height,
          right = left + width,
          bounds = new Bounds(top, left, bottom, right);
      return bounds;
    }
  }]);

  return Bounds;
}();

exports["default"] = Bounds;

},{}],29:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Offset = /*#__PURE__*/function () {
  function Offset(top, left) {
    _classCallCheck(this, Offset);

    this.top = top;
    this.left = left;
  }

  _createClass(Offset, [{
    key: "getTop",
    value: function getTop() {
      return this.top;
    }
  }, {
    key: "getLeft",
    value: function getLeft() {
      return this.left;
    }
  }]);

  return Offset;
}();

exports["default"] = Offset;

},{}],30:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function onClick(clickHandler, element) {
  this.on("click", clickHandler, element);
}

function offClick(clickHandler, element) {
  this.off("click", clickHandler, element);
}

var _default = {
  onClick: onClick,
  offClick: offClick
};
exports["default"] = _default;

},{}],31:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _resize = require("./resize");

function on(eventTypes, handler, element) {
  var _this = this;

  eventTypes = eventTypes.split(" "); ///

  eventTypes.forEach(function (eventType) {
    if (eventType === "resize") {
      var resizeEventListeners = _this.findEventListeners("resize"),
          resizeEventListenersLength = resizeEventListeners.length;

      if (resizeEventListenersLength === 0) {
        _this.addResizeObject();
      }
    }

    var eventListener = _this.addEventListener(eventType, handler, element);

    _this.domElement.addEventListener(eventType, eventListener);
  });
}

function off(eventTypes, handler, element) {
  var _this2 = this;

  eventTypes = eventTypes.split(" "); ///

  eventTypes.forEach(function (eventType) {
    var eventListener = _this2.removeEventListener(eventType, handler, element);

    _this2.domElement.removeEventListener(eventType, eventListener);

    if (eventType === "resize") {
      var resizeEventListeners = _this2.findEventListeners("resize"),
          resizeEventListenersLength = resizeEventListeners.length;

      if (resizeEventListenersLength === 0) {
        (0, _resize.removeResizeObject)(_this2);
      }
    }
  });
}

function addEventListener(eventType, handler) {
  var element = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this;

  if (!this.hasOwnProperty("eventListeners")) {
    this.eventListeners = [];
  }

  var eventListener = createEventListener(eventType, handler, element);
  this.eventListeners.push(eventListener);
  return eventListener;
}

function removeEventListener(eventType, handler) {
  var element = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this;
  var eventListener = this.findEventListener(eventType, handler, element),
      index = this.eventListeners.indexOf(eventListener),
      start = index,
      ///
  deleteCount = 1;
  this.eventListeners.splice(start, deleteCount);

  if (this.eventListeners.length === 0) {
    delete this.eventListeners;
  }

  return eventListener;
}

function findEventListener(eventType, handler, element) {
  var eventListener = this.eventListeners.find(function (eventListener) {
    var found = eventListener.element === element && eventListener.handler === handler && eventListener.eventType === eventType;

    if (found) {
      return true;
    }
  });
  return eventListener;
}

function findEventListeners(eventType) {
  var eventListeners = [];

  if (this.hasOwnProperty("eventListeners")) {
    this.eventListeners.forEach(function (eventListener) {
      var found = eventListener.eventType === eventType;

      if (found) {
        eventListeners.push(eventListener);
      }
    });
  }

  return eventListeners;
}

function createEventListener(eventType, handler, element) {
  var eventListener;

  eventListener = function eventListener(event) {
    handler.call(element, event, element);
  };

  Object.assign(eventListener, {
    element: element,
    handler: handler,
    eventType: eventType
  });
  return eventListener;
}

var _default = {
  on: on,
  off: off,
  addEventListener: addEventListener,
  removeEventListener: removeEventListener,
  findEventListener: findEventListener,
  findEventListeners: findEventListeners
};
exports["default"] = _default;

},{"./resize":35}],32:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _object = require("../utilities/object");

var _array = require("../utilities/array");

var _constants = require("../constants");

var _name = require("../utilities/name");

var _elements = require("../utilities/elements");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function applyProperties(properties, defaultProperties, ignoredProperties) {
  var _this = this;

  properties = Object.assign({}, properties); ///

  (0, _object.combine)(properties, defaultProperties);
  var childElements = childElementsFromElementAndProperties(this, properties) || properties.childElements; ///

  (0, _object.prune)(properties, ignoredProperties);
  var svg = this.domElement.namespaceURI === _constants.SVG_NAMESPACE_URI,
      ///
  names = Object.keys(properties); ///

  names.forEach(function (name) {
    var value = properties[name];

    if (false) {///
    } else if (isHandlerName(name)) {
      addHandler(_this, name, value);
    } else if (isAttributeName(name, svg)) {
      addAttribute(_this, name, value);
    } else {
      if (!_this.hasOwnProperty("properties")) {
        var _properties = {};
        Object.assign(_this, {
          properties: _properties
        });
      }

      _this.properties[name] = value;
    }
  });
  var context = {};
  childElements.forEach(function (childElement) {
    updateContext(childElement, context);
    childElement.addTo(_this);
  });
  Object.assign(this, {
    context: context
  });
}

function getProperties() {
  return this.properties;
}

function getContext() {
  return this.context;
}

function assignContext(names, thenDelete) {
  var _this2 = this;

  var argumentsLength = arguments.length;

  if (argumentsLength === 1) {
    var firstArgument = (0, _array.first)(arguments);

    if (typeof firstArgument === "boolean") {
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

  names.forEach(function (name) {
    var value = _this2.context[name],
        propertyName = name,
        ///
    descriptor = {
      value: value
    };
    Object.defineProperty(_this2, propertyName, descriptor);

    if (thenDelete) {
      delete _this2.context[name];
    }
  }, []);
}

var _default = {
  applyProperties: applyProperties,
  getProperties: getProperties,
  getContext: getContext,
  assignContext: assignContext
};
exports["default"] = _default;

function childElementsFromElementAndProperties(element, properties) {
  var childElements = null;

  if (typeof element.childElements === "function") {
    childElements = element.childElements.call(element, properties);
    childElements = (0, _array.guarantee)(childElements);
    childElements = (0, _elements.removeFalseyElements)(childElements);
    childElements = (0, _elements.replaceStringsWithTextElements)(childElements);
  }

  return childElements;
}

function updateContext(childElement, context) {
  var parentContext = typeof childElement.parentContext === "function" ? childElement.parentContext() : childElement.context; ///

  Object.assign(context, parentContext);
  delete childElement.context;
}

function addHandler(element, name, value) {
  var eventType = name.substr(2).toLowerCase(),
      ///
  handler = value; ///

  element.on(eventType, handler);
}

function addAttribute(element, name, value) {
  if (name === "className") {
    name = "class";
  }

  if (name === "htmlFor") {
    name = "for";
  }

  if (_typeof(value) === "object") {
    var keys = Object.keys(value);
    keys.forEach(function (key) {
      element.domElement[name][key] = value[key];
    });
  } else if (typeof value === "boolean") {
    if (value) {
      value = name; ///

      element.addAttribute(name, value);
    }
  } else {
    element.addAttribute(name, value);
  }
}

function isHandlerName(name) {
  return name.match(/^on/);
}

function isAttributeName(name, svg) {
  return svg ? (0, _name.isSVGAttributeName)(name) : (0, _name.isHTMLAttributeName)(name);
}

},{"../constants":16,"../utilities/array":40,"../utilities/elements":42,"../utilities/name":43,"../utilities/object":44}],33:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function onKeyUp(keyUpHandler, element) {
  this.on("keyup", keyUpHandler, element);
}

function offKeyUp(keyUpHandler, element) {
  this.off("keyup", keyUpHandler, element);
}

function onKeyDown(keyDownHandler, element) {
  this.on("keydown", keyDownHandler, element);
}

function offKeyDown(keyDownHandler, element) {
  this.off("keydown", keyDownHandler, element);
}

var _default = {
  onKeyUp: onKeyUp,
  offKeyUp: offKeyUp,
  onKeyDown: onKeyDown,
  offKeyDown: offKeyDown
};
exports["default"] = _default;

},{}],34:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function onMouseUp(mouseUpHandler, element) {
  this.on("mouseup", mouseUpHandler, element);
}

function offMouseUp(mouseUpHandler, element) {
  this.off("mouseup", mouseUpHandler, element);
}

function onMouseOut(mouseOutHandler, element) {
  this.on("mouseout", mouseOutHandler, element);
}

function offMouseOut(mouseOutHandler, element) {
  this.off("mouseout", mouseOutHandler, element);
}

function onMouseDown(mouseDownHandler, element) {
  this.on("mousedown", mouseDownHandler, element);
}

function offMouseDown(mouseDownHandler, element) {
  this.off("mousedown", mouseDownHandler, element);
}

function onMouseOver(mouseOverHandler, element) {
  this.on("mouseover", mouseOverHandler, element);
}

function offMouseOver(mouseOverHandler, element) {
  this.off("mouseover", mouseOverHandler, element);
}

function onMouseMove(mouseMoveHandler, element) {
  this.on("mousemove", mouseMoveHandler, element);
}

function offMouseMove(mouseMoveHandler, element) {
  this.off("mousemove", mouseMoveHandler, element);
}

var _default = {
  onMouseUp: onMouseUp,
  offMouseUp: offMouseUp,
  onMouseOut: onMouseOut,
  offMouseOut: offMouseOut,
  onMouseDown: onMouseDown,
  offMouseDown: offMouseDown,
  onMouseOver: onMouseOver,
  offMouseOver: offMouseOver,
  onMouseMove: onMouseMove,
  offMouseMove: offMouseMove
};
exports["default"] = _default;

},{}],35:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function onResize(resizeHandler, element) {
  this.on("resize", resizeHandler, element);
}

function offResize(resizeHandler, element) {
  this.off("resize", resizeHandler, element);
}

function addResizeObject() {
  var _this = this;

  var resizeObject = document.createElement("object"),
      style = "display: block; \n                 position: absolute; \n                 top: 0; \n                 left: 0; \n                 height: 100%; \n                 width: 100%; \n                 overflow: hidden; \n                 pointer-events: none; \n                 z-index: -1;",
      data = "about:blank",
      type = "text/html";
  resizeObject.setAttribute("style", style);
  resizeObject.data = data;
  resizeObject.type = type;
  this.__resizeObject__ = resizeObject;

  resizeObject.onload = function () {
    return resizeObjectLoadHandler(_this);
  };

  this.domElement.appendChild(resizeObject);
}

function removeResizeObject() {
  var resizeObject = this.__resizeObject__,
      objectWindow = resizeObject.contentDocument.defaultView; ///

  objectWindow.removeEventListener("resize", resizeEventListener);
  this.domElement.removeChild(resizeObject);
}

var _default = {
  onResize: onResize,
  offResize: offResize,
  addResizeObject: addResizeObject,
  removeResizeObject: removeResizeObject
};
exports["default"] = _default;

function resizeObjectLoadHandler(element) {
  var resizeObject = element.__resizeObject__,
      resizeObjectWindow = resizeObject.contentDocument.defaultView; ///

  resizeObjectWindow.addEventListener("resize", function (event) {
    var resizeEventListeners = element.findEventListeners("resize");
    resizeEventListeners.forEach(function (resizeEventListener) {
      return resizeEventListener(event);
    });
  });
}

},{}],36:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function onScroll(scrollHandler, element) {
  this.on("scroll", scrollHandler, element);
}

function offScroll(scrollHandler, element) {
  this.off("scroll", scrollHandler, element);
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

var _default = {
  onScroll: onScroll,
  offScroll: offScroll,
  getScrollTop: getScrollTop,
  getScrollLeft: getScrollLeft,
  setScrollTop: setScrollTop,
  setScrollLeft: setScrollLeft
};
exports["default"] = _default;

},{}],37:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function getState() {
  return this.state;
}

function setState(state) {
  this.state = state;
}

function updateState(state) {
  Object.assign(this.state, state);
}

var _default = {
  getState: getState,
  setState: setState,
  updateState: updateState
};
exports["default"] = _default;

},{}],38:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _element = _interopRequireDefault(require("./element"));

var _array = require("./utilities/array");

var _elements = require("./utilities/elements");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function createElement(firstArgument, properties) {
  var element = null;

  if (firstArgument !== undefined) {
    for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      remainingArguments[_key - 2] = arguments[_key];
    }

    var childElements = childElementsFromRemainingArguments(remainingArguments);
    properties = Object.assign({
      childElements: childElements
    }, properties);

    if (false) {///
    } else if (isSubclassOf(firstArgument, _element["default"])) {
      var Class = firstArgument; ///

      element = Class.fromClass(Class, properties);
    } else if (typeof firstArgument === "string") {
      var tagName = firstArgument; ///

      element = _element["default"].fromTagName(tagName, properties);
    } else if (typeof firstArgument === "function") {
      var elementFunction = firstArgument; ///

      element = elementFunction(properties);
    }
  }

  return element;
}

var React = {
  createElement: createElement
};
var _default = React;
exports["default"] = _default;

function childElementsFromRemainingArguments(remainingArguments) {
  remainingArguments = (0, _array.flatten)(remainingArguments); ///

  var childElements = remainingArguments; ///

  childElements = (0, _elements.removeFalseyElements)(childElements);
  childElements = (0, _elements.replaceStringsWithTextElements)(childElements);
  return childElements;
}

function isSubclassOf(argument, Class) {
  var typeOf = false;

  if (argument.name === Class.name) {
    ///
    typeOf = true;
  } else {
    argument = Object.getPrototypeOf(argument); ///

    if (argument) {
      typeOf = isSubclassOf(argument, Class);
    }
  }

  return typeOf;
}

},{"./element":18,"./utilities/array":40,"./utilities/elements":42}],39:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _offset = _interopRequireDefault(require("./miscellaneous/offset"));

var _bounds = _interopRequireDefault(require("./miscellaneous/bounds"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TextElement = /*#__PURE__*/function () {
  function TextElement(text) {
    _classCallCheck(this, TextElement);

    this.domElement = document.createTextNode(text); ///

    this.domElement.__element__ = this;
  }

  _createClass(TextElement, [{
    key: "getText",
    value: function getText() {
      var nodeValue = this.domElement.nodeValue,
          text = nodeValue; ///

      return text;
    }
  }, {
    key: "setText",
    value: function setText(text) {
      var nodeValue = text; ///

      this.domElement.nodeValue = nodeValue;
    }
  }, {
    key: "getOffset",
    value: function getOffset() {
      var top = this.domElement.offsetTop,
          ///
      left = this.domElement.offsetLeft,
          ///
      offset = new _offset["default"](top, left);
      return offset;
    }
  }, {
    key: "getBounds",
    value: function getBounds() {
      var boundingClientRect = this.domElement.getBoundingClientRect(),
          bounds = _bounds["default"].fromBoundingClientRect(boundingClientRect);

      return bounds;
    }
  }, {
    key: "getWidth",
    value: function getWidth() {
      var clientWidth = this.domElement.clientWidth,
          width = clientWidth; ///

      return width;
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      var clientHeight = this.domElement.clientHeight,
          height = clientHeight; ///

      return height;
    }
  }, {
    key: "prependTo",
    value: function prependTo(parentElement) {
      parentElement.prepend(this);
    }
  }, {
    key: "appendTo",
    value: function appendTo(parentElement) {
      parentElement.append(this);
    }
  }, {
    key: "addTo",
    value: function addTo(parentElement) {
      parentElement.add(this);
    }
  }, {
    key: "removeFrom",
    value: function removeFrom(parentElement) {
      parentElement.remove(this);
    }
  }, {
    key: "insertBefore",
    value: function insertBefore(siblingElement) {
      var parentDOMNode = siblingElement.domElement.parentNode,
          siblingDOMElement = siblingElement.domElement;
      parentDOMNode.insertBefore(this.domElement, siblingDOMElement);
    }
  }, {
    key: "insertAfter",
    value: function insertAfter(siblingElement) {
      var parentDOMNode = siblingElement.domElement.parentNode,
          siblingDOMElement = siblingElement.domElement;
      parentDOMNode.insertBefore(this.domElement, siblingDOMElement.nextSibling); ///
    }
  }, {
    key: "remove",
    value: function remove() {
      this.domElement.remove();
    }
  }]);

  return TextElement;
}();

exports["default"] = TextElement;

},{"./miscellaneous/bounds":28,"./miscellaneous/offset":29}],40:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.first = first;
exports.splice = splice;
exports.flatten = flatten;
exports.guarantee = guarantee;
exports.augment = augment;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function first(array) {
  return array[0];
}

function splice(array1, start) {
  var deleteCount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Infinity;
  var array2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var args = [start, deleteCount].concat(_toConsumableArray(array2)),
      deletedItemsArray = Array.prototype.splice.apply(array1, args);
  return deletedItemsArray;
}

function flatten(array) {
  return array.reduce(function (array, element) {
    array = array.concat(element); ///

    return array;
  }, []);
}

function guarantee(arrayOrElement) {
  arrayOrElement = arrayOrElement || [];
  return arrayOrElement instanceof Array ? arrayOrElement : [arrayOrElement];
}

function augment(array1, array2, test) {
  array2.forEach(function (element, index) {
    var passed = test(element, index);

    if (passed) {
      array1.push(element);
    }
  });
}

},{}],41:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.elementsFromDOMElements = elementsFromDOMElements;
exports.descendantDOMNodesFromDOMNode = descendantDOMNodesFromDOMNode;
exports.filterDOMNodesBySelector = filterDOMNodesBySelector;
exports.domNodeMatchesSelector = domNodeMatchesSelector;
exports.filterDOMNodes = filterDOMNodes;

var _array = require("../utilities/array");

function elementsFromDOMElements(domElements) {
  var domElementsWithElements = filterDOMNodes(domElements, function (domElement) {
    return domElement.__element__ !== undefined;
  }),
      elements = domElementsWithElements.map(function (domElement) {
    return domElement.__element__;
  });
  return elements;
}

function descendantDOMNodesFromDOMNode(domNode) {
  var descendantDOMNodes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var start = -1,
      deleteCount = 0,
      childDOMNodes = domNode.childNodes; ///

  (0, _array.splice)(descendantDOMNodes, start, deleteCount, childDOMNodes);
  childDOMNodes.forEach(function (childDOMNode) {
    return descendantDOMNodesFromDOMNode(childDOMNode, descendantDOMNodes);
  });
  return descendantDOMNodes;
}

function filterDOMNodesBySelector(domNodes, selector) {
  var filteredDOMNodes = filterDOMNodes(domNodes, function (domNode) {
    return domNodeMatchesSelector(domNode, selector);
  });
  return filteredDOMNodes;
}

function domNodeMatchesSelector(domNode, selector) {
  var domNodeType = domNode.nodeType;

  switch (domNodeType) {
    case Node.ELEMENT_NODE:
      {
        var domElement = domNode; ///

        return domElement.matches(selector);
      }

    case Node.TEXT_NODE:
      {
        if (selector === "*") {
          return true;
        }
      }
  }

  return false;
}

function filterDOMNodes(domNodes, test) {
  var filteredDOMNodes = [],
      domNodesLength = domNodes.length;

  for (var index = 0; index < domNodesLength; index++) {
    var domNode = domNodes[index],
        result = test(domNode);

    if (result) {
      filteredDOMNodes.push(domNode);
    }
  }

  return filteredDOMNodes;
}

},{"../utilities/array":40}],42:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeFalseyElements = removeFalseyElements;
exports.replaceStringsWithTextElements = replaceStringsWithTextElements;

var _textElement = _interopRequireDefault(require("../textElement"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function removeFalseyElements(elements) {
  elements = elements.reduce(function (elements, element) {
    if (element) {
      elements.push(element);
    }

    return elements;
  }, []);
  return elements;
}

function replaceStringsWithTextElements(elements) {
  elements = elements.map(function (element) {
    ///
    if (typeof element === "string") {
      var text = element,
          ///
      textElement = new _textElement["default"](text);
      element = textElement; ///
    }

    return element;
  });
  return elements;
}

},{"../textElement":39}],43:[function(require,module,exports){
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

var svgTagNames = ["altGlyph", "animate", "animateColor", "animateMotion", "animateTransform", "animation", "audio", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "discard", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-uri", "foreignObject", "g", "glyph", "glyphRef", "handler", "hatch", "hatchpath", "hkern", "image", "line", "linearGradient", "listener", "marker", "mask", "mesh", "meshgradient", "meshpatch", "meshrow", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "prefetch", "radialGradient", "rect", "script", "set", "solidcolor", "stop", "style", "svg", "switch", "symbol", "tbreak", "text", "textArea", "textPath", "title", "tref", "tspan", "unknown", "use", "video", "view", "vkern"],
    svgAttributeNames = ["accent-height", "accumulate", "additive", "alignment-baseline", "alphabetic", "amplitude", "arabic-form", "ascent", "attributeName", "attributeType", "azimuth", "bandwidth", "baseFrequency", "baseProfile", "baseline-shift", "bbox", "begin", "bias", "by", "calcMode", "cap-height", "clip", "className", "clip-path", "clip-rule", "clipPathUnits", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "contentScriptType", "contentStyleType", "crossorigin", "cursor", "cx", "cy", "d", "defaultAction", "descent", "diffuseConstant", "direction", "display", "divisor", "dominant-baseline", "download", "dur", "dx", "dy", "edgeMode", "editable", "elevation", "enable-background", "end", "event", "exponent", "externalResourcesRequired", "fill", "fill-opacity", "fill-rule", "filter", "filterRes", "filterUnits", "flood-color", "flood-opacity", "focusHighlight", "focusable", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "format", "fr", "from", "fx", "fy", "g1", "g2", "glyph-name", "glyph-orientation-horizontal", "glyph-orientation-vertical", "glyphRef", "gradientTransform", "gradientUnits", "handler", "hanging", "hatchContentUnits", "hatchUnits", "height", "horiz-adv-x", "horiz-origin-x", "horiz-origin-y", "href", "hreflang", "ideographic", "image-rendering", "in", "in2", "initialVisibility", "intercept", "k", "k1", "k2", "k3", "k4", "kernelMatrix", "kernelUnitLength", "kerning", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "letter-spacing", "lighting-color", "limitingConeAngle", "local", "marker-end", "marker-mid", "marker-start", "markerHeight", "markerUnits", "markerWidth", "mask", "maskContentUnits", "maskUnits", "mathematical", "max", "media", "mediaCharacterEncoding", "mediaContentEncodings", "mediaSize", "mediaTime", "method", "min", "mode", "name", "nav-down", "nav-down-left", "nav-down-right", "nav-left", "nav-next", "nav-prev", "nav-right", "nav-up", "nav-up-left", "nav-up-right", "numOctaves", "observer", "offset", "opacity", "operator", "order", "orient", "orientation", "origin", "overflow", "overlay", "overline-position", "overline-thickness", "panose-1", "path", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "phase", "pitch", "playbackOrder", "playbackorder", "pointer-events", "points", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "propagate", "r", "radius", "refX", "refY", "rendering-intent", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "requiredFonts", "requiredFormats", "restart", "result", "rotate", "rx", "ry", "scale", "seed", "shape-rendering", "side", "slope", "snapshotTime", "spacing", "specularConstant", "specularExponent", "spreadMethod", "src", "startOffset", "stdDeviation", "stemh", "stemv", "stitchTiles", "stop-color", "stop-opacity", "strikethrough-position", "strikethrough-thickness", "string", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "style", "surfaceScale", "syncBehavior", "syncBehaviorDefault", "syncMaster", "syncTolerance", "syncToleranceDefault", "systemLanguage", "tableValues", "target", "targetX", "targetY", "text-anchor", "text-decoration", "text-rendering", "textLength", "timelineBegin", "timelinebegin", "title", "to", "transform", "transformBehavior", "type", "u1", "u2", "underline-position", "underline-thickness", "unicode", "unicode-bidi", "unicode-range", "units-per-em", "v-alphabetic", "v-hanging", "v-ideographic", "v-mathematical", "values", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "viewBox", "viewTarget", "visibility", "width", "widths", "word-spacing", "writing-mode", "x", "x-height", "x1", "x2", "xChannelSelector", "y", "y1", "y2", "yChannelSelector", "z", "zoomAndPan"],
    htmlAttributeNames = ["accept", "acceptCharset", "accessKey", "action", "allow", "allowFullScreen", "allowTransparency", "alt", "async", "autoComplete", "autoFocus", "autoPlay", "capture", "cellPadding", "cellSpacing", "challenge", "charSet", "checked", "cite", "classID", "className", "colSpan", "cols", "content", "contentEditable", "contextMenu", "controls", "coords", "crossOrigin", "data", "dateTime", "default", "defer", "dir", "disabled", "download", "draggable", "encType", "form", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "frameBorder", "headers", "height", "hidden", "high", "href", "hrefLang", "htmlFor", "httpEquiv", "icon", "id", "inputMode", "integrity", "is", "keyParams", "keyType", "kind", "label", "lang", "list", "loop", "low", "manifest", "marginHeight", "marginWidth", "max", "maxLength", "media", "mediaGroup", "method", "min", "minLength", "multiple", "muted", "name", "noValidate", "nonce", "open", "optimum", "pattern", "placeholder", "poster", "preload", "profile", "radioGroup", "readOnly", "rel", "required", "reversed", "role", "rowSpan", "rows", "sandbox", "scope", "scoped", "scrolling", "seamless", "selected", "shape", "size", "sizes", "span", "spellCheck", "src", "srcDoc", "srcLang", "srcSet", "start", "step", "style", "summary", "tabIndex", "target", "title", "type", "useMap", "value", "width", "wmode", "wrap"];

},{}],44:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.combine = combine;
exports.prune = prune;

function combine(targetObject) {
  var sourceObject = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var sourceKeys = Object.keys(sourceObject);
  sourceKeys.forEach(function (sourceKey) {
    var targetProperty = targetObject[sourceKey],
        sourceProperty = sourceObject[sourceKey];
    targetObject[sourceKey] = targetObject.hasOwnProperty(sourceKey) ? "".concat(targetProperty, " ").concat(sourceProperty) : sourceProperty;
  });
}

function prune(targetObject, sourceKeys) {
  sourceKeys.forEach(function (sourceKey) {
    if (targetObject.hasOwnProperty(sourceKey)) {
      delete targetObject[sourceKey];
    }
  });
}

},{}],45:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _key2 = _interopRequireDefault(require("./mixins/key"));

var _event = _interopRequireDefault(require("./mixins/event"));

var _mouse = _interopRequireDefault(require("./mixins/mouse"));

var _click = _interopRequireDefault(require("./mixins/click"));

var _resize = _interopRequireDefault(require("./mixins/resize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var onResize = _resize["default"].onResize,
    offResize = _resize["default"].offResize;

var Window = /*#__PURE__*/function () {
  function Window() {
    _classCallCheck(this, Window);

    this.domElement = window; ///
  }

  _createClass(Window, [{
    key: "assign",
    value: function assign() {
      var target = this.domElement; ///

      for (var _len = arguments.length, sources = new Array(_len), _key = 0; _key < _len; _key++) {
        sources[_key] = arguments[_key];
      }

      Object.assign.apply(Object, [target].concat(sources));
    }
  }, {
    key: "addResizeObject",
    value: function addResizeObject() {} ///

  }, {
    key: "removeResizeObject",
    value: function removeResizeObject() {} ///

  }, {
    key: "getWidth",
    value: function getWidth() {
      return this.domElement.innerWidth;
    } ///

  }, {
    key: "getHeight",
    value: function getHeight() {
      return this.domElement.innerHeight;
    } ///

  }, {
    key: "getScrollTop",
    value: function getScrollTop() {
      return this.domElement.pageYOffset;
    } ///

  }, {
    key: "getScrollLeft",
    value: function getScrollLeft() {
      return this.domElement.pageXOffset;
    } ///

  }]);

  return Window;
}();

Object.assign(Window.prototype, _key2["default"]);
Object.assign(Window.prototype, _event["default"]);
Object.assign(Window.prototype, _mouse["default"]);
Object.assign(Window.prototype, _click["default"]);
Object.assign(Window.prototype, {
  onResize: onResize,
  offResize: offResize
}); ///

var _default = typeof window === "undefined" ? undefined : new Window(); ///


exports["default"] = _default;

},{"./mixins/click":30,"./mixins/event":31,"./mixins/key":33,"./mixins/mouse":34,"./mixins/resize":35}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJsaWIvY29uc3RhbnRzLmpzIiwibGliL2V4YW1wbGVzLmpzIiwibGliL2V4YW1wbGVzL212Y0FwcC5qcyIsImxpYi9leGFtcGxlcy9tdmNBcHAvY29udHJvbGxlci5qcyIsImxpYi9leGFtcGxlcy9tdmNBcHAvY29udHJvbGxlci9jcmVhdGVNZXRob2RzLmpzIiwibGliL2V4YW1wbGVzL212Y0FwcC9tb2RlbC5qcyIsImxpYi9leGFtcGxlcy9tdmNBcHAvdmlldy5qcyIsImxpYi9leGFtcGxlcy9tdmNBcHAvdmlldy9tZXNzYWdlLmpzIiwibGliL2V4YW1wbGVzL212Y0FwcC92aWV3L3Bhc3N3b3JkRm9ybS5qcyIsImxpYi9leGFtcGxlcy9tdmNBcHAvdmlldy9wYXNzd29yZElucHV0LmpzIiwibGliL2V4YW1wbGVzL212Y0FwcC92aWV3L3Jlc2V0UGFzc3dvcmRCdXR0b24uanMiLCJsaWIvZXhhbXBsZXMvbXZjQXBwL3ZpZXcvdmFsaWRhdGlvbkVycm9yLmpzIiwibGliL2V4YW1wbGVzL3NpbXBsZUFwcC5qcyIsImxpYi9pbmRleC5qcyIsImxpYi9qdXh0YXBvc2UuanMiLCJub2RlX21vZHVsZXMvZWFzeS9saWIvY29uc3RhbnRzLmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvbGliL2RvY3VtZW50LmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvbGliL2VsZW1lbnQuanMiLCJub2RlX21vZHVsZXMvZWFzeS9saWIvZWxlbWVudC9ib2R5LmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvbGliL2VsZW1lbnQvYnV0dG9uLmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvbGliL2VsZW1lbnQvY2hlY2tib3guanMiLCJub2RlX21vZHVsZXMvZWFzeS9saWIvZWxlbWVudC9saW5rLmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvbGliL2VsZW1lbnQvc2VsZWN0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvbGliL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvbGliL2lucHV0RWxlbWVudC5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5L2xpYi9pbnB1dEVsZW1lbnQvaW5wdXQuanMiLCJub2RlX21vZHVsZXMvZWFzeS9saWIvaW5wdXRFbGVtZW50L3RleHRhcmVhLmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvbGliL21pc2NlbGxhbmVvdXMvYm91bmRzLmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvbGliL21pc2NlbGxhbmVvdXMvb2Zmc2V0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvbGliL21peGlucy9jbGljay5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5L2xpYi9taXhpbnMvZXZlbnQuanMiLCJub2RlX21vZHVsZXMvZWFzeS9saWIvbWl4aW5zL2pzeC5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5L2xpYi9taXhpbnMva2V5LmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvbGliL21peGlucy9tb3VzZS5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5L2xpYi9taXhpbnMvcmVzaXplLmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvbGliL21peGlucy9zY3JvbGwuanMiLCJub2RlX21vZHVsZXMvZWFzeS9saWIvbWl4aW5zL3N0YXRlLmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvbGliL3JlYWN0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvbGliL3RleHRFbGVtZW50LmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvbGliL3V0aWxpdGllcy9hcnJheS5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5L2xpYi91dGlsaXRpZXMvZG9tLmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvbGliL3V0aWxpdGllcy9lbGVtZW50cy5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5L2xpYi91dGlsaXRpZXMvbmFtZS5qcyIsIm5vZGVfbW9kdWxlcy9lYXN5L2xpYi91dGlsaXRpZXMvb2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2Vhc3kvbGliL3dpbmRvdy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoi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QThDLElBQUksTUFBSixFLEVBQWUiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IFRJTUVPVVRfREVMQVkgPSAxMDAwO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGRlZmF1bHQgYXMgbXZjQXBwIH0gZnJvbSBcIi4vZXhhbXBsZXMvbXZjQXBwXCI7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIHNpbXBsZUFwcCB9IGZyb20gXCIuL2V4YW1wbGVzL3NpbXBsZUFwcFwiO1xuXG5PYmplY3QuYXNzaWduKHdpbmRvdywge1xuICBtdmNBcHAsXG4gIHNpbXBsZUFwcFxufSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFwiLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgeyBCb2R5IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IFZpZXcgZnJvbSBcIi4vbXZjQXBwL3ZpZXdcIjtcbmltcG9ydCBNb2RlbCBmcm9tIFwiLi9tdmNBcHAvbW9kZWxcIjtcbmltcG9ydCBjb250cm9sbGVyIGZyb20gXCIuL212Y0FwcC9jb250cm9sbGVyXCI7XG5pbXBvcnQgY3JlYXRlTWV0aG9kcyBmcm9tIFwiLi9tdmNBcHAvY29udHJvbGxlci9jcmVhdGVNZXRob2RzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG12Y0FwcCgpIHtcbiAgY29uc3QgbW9kZWwgPSBuZXcgTW9kZWwoKSxcbiAgICAgICAgdmlldyA9XG5cbiAgICAgICAgICA8VmlldyAvPlxuXG4gICAgICAgIDtcblxuICBjb250cm9sbGVyLmFzc2lnbk1ldGhvZHMoY3JlYXRlTWV0aG9kcywgbW9kZWwsIHZpZXcpO1xuXG4gIGNvbnN0IGJvZHkgPSBuZXcgQm9keSgpO1xuXG4gIGJvZHkucHJlcGVuZCh2aWV3KTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5jbGFzcyBDb250cm9sbGVyIHtcbiAgYXNzaWduTWV0aG9kcyhjcmVhdGVNZXRob2RzLCBtb2RlbCwgdmlldykge1xuICAgIGNvbnN0IG1ldGhvZHMgPSBjcmVhdGVNZXRob2RzKG1vZGVsLCB2aWV3KTtcblxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgbWV0aG9kcyk7XG4gIH1cbn1cblxuY29uc3QgY29udHJvbGxlciA9IG5ldyBDb250cm9sbGVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRyb2xsZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTWV0aG9kcyhtb2RlbCwgdmlldykge1xuICBmdW5jdGlvbiBzZXRQYXNzd29yZChwYXNzd29yZCkge1xuICAgIG1vZGVsLnNldFBhc3N3b3JkKHBhc3N3b3JkKTtcblxuICAgIHZpZXcuc2hvd01lc3NhZ2UoXCJUaGUgcGFzc3dvcmQgaGFzIGJlZW4gc2V0LlwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0UGFzc3dvcmQoKSB7XG4gICAgbW9kZWwucmVzZXRQYXNzd29yZCgpO1xuXG4gICAgdmlldy5zaG93TWVzc2FnZShcIlRoZSBwYXNzd29yZCBoYXMgYmVlbiByZXNldC5cIik7XG4gIH1cblxuICByZXR1cm4gKHtcbiAgICBzZXRQYXNzd29yZCxcbiAgICByZXNldFBhc3N3b3JkXG4gIH0pO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGVsIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wYXNzd29yZCA9IG51bGw7XG4gIH1cblxuICBzZXRQYXNzd29yZChwYXNzd29yZCkge1xuICAgIHRoaXMucGFzc3dvcmQgPSBwYXNzd29yZDtcbiAgfVxuXG4gIHJlc2V0UGFzc3dvcmQoKSB7XG4gICAgdGhpcy5wYXNzd29yZCA9IG51bGw7XG4gIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IE1lc3NhZ2UgZnJvbSBcIi4vdmlldy9tZXNzYWdlXCI7XG5pbXBvcnQgUGFzc3dvcmRGb3JtIGZyb20gXCIuL3ZpZXcvcGFzc3dvcmRGb3JtXCI7XG5pbXBvcnQgUmVzZXRQYXNzd29yZEJ1dHRvbiBmcm9tIFwiLi92aWV3L3Jlc2V0UGFzc3dvcmRCdXR0b25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybihbXG5cbiAgICAgIDxQYXNzd29yZEZvcm0gLz4sXG4gICAgICA8UmVzZXRQYXNzd29yZEJ1dHRvbiAvPixcbiAgICAgIDxNZXNzYWdlIC8+XG5cbiAgICBdKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UocHJvcGVydGllcykge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG5cbiAgc3RhdGljIGZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGNvbnN0IHZpZXcgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcyk7XG5cbiAgICB2aWV3LmluaXRpYWxpc2UocHJvcGVydGllcyk7XG5cbiAgICByZXR1cm4gdmlldztcbiAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXNzYWdlIGV4dGVuZHMgRWxlbWVudCB7XG4gIHNob3dNZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICBjb25zdCBodG1sID0gbWVzc2FnZTsgLy8vXG5cbiAgICB0aGlzLmh0bWwoaHRtbCk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuXHQgIGNvbnN0IHNob3dNZXNzYWdlID0gdGhpcy5zaG93TWVzc2FnZS5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBzaG93TWVzc2FnZVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcInBcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcIm1lc3NhZ2VcIlxuICB9O1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQsIEJ1dHRvbiB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBjb250cm9sbGVyIGZyb20gXCIuLi9jb250cm9sbGVyXCI7XG5pbXBvcnQgUGFzc3dvcmRJbnB1dCBmcm9tIFwiLi9wYXNzd29yZElucHV0XCI7XG5pbXBvcnQgVmFsaWRhdGlvbkVycm9yIGZyb20gXCIuL3ZhbGlkYXRpb25FcnJvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXNzd29yZEZvcm0gZXh0ZW5kcyBFbGVtZW50IHtcbiAgdmFsaWRhdGVBbmRTdWJtaXRGb3JtKCkge1xuICAgIGNvbnN0IHBhc3N3b3JkVmFsaWQgPSB0aGlzLnZhbGlkYXRlRm9ybSgpO1xuXG4gICAgaWYgKCFwYXNzd29yZFZhbGlkKSB7XG4gICAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3IoXCJUaGUgcGFzc3dvcmQgaXMgaW52YWxpZFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdWJtaXRGb3JtKCk7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGVGb3JtKCkge1xuICAgIGNvbnN0IHBhc3N3b3JkID0gdGhpcy5nZXRQYXNzd29yZCgpLFxuICAgICAgICAgIHBhc3N3b3JkVmFsaWQgPSBpc1Bhc3N3b3JkVmFsaWQocGFzc3dvcmQpO1xuXG4gICAgcmV0dXJuIHBhc3N3b3JkVmFsaWQ7XG4gIH1cblxuICBzdWJtaXRGb3JtKCkge1xuICAgIGNvbnN0IHBhc3N3b3JkID0gdGhpcy5nZXRQYXNzd29yZCgpO1xuXG4gICAgY29udHJvbGxlci5zZXRQYXNzd29yZChwYXNzd29yZCk7XG5cbiAgICB0aGlzLmNsZWFyUGFzc3dvcmQoKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuKFtcblxuICAgICAgPFBhc3N3b3JkSW5wdXQgLz4sXG4gICAgICA8VmFsaWRhdGlvbkVycm9yLz4sXG4gICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCwgZWxlbWVudCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGVBbmRTdWJtaXRGb3JtKCk7XG5cbiAgICAgICAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgU3VibWl0XG4gICAgICA8L0J1dHRvbj5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZShwcm9wZXJ0aWVzKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZm9ybVwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwicGFzc3dvcmRcIlxuICB9O1xuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBwYXNzd29yZEZvcm0gPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcyk7XG5cbiAgICBwYXNzd29yZEZvcm0uaW5pdGlhbGlzZShwcm9wZXJ0aWVzKTtcblxuICAgIHJldHVybiBwYXNzd29yZEZvcm07XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNQYXNzd29yZFZhbGlkKHBhc3N3b3JkKSB7XG4gIGNvbnN0IHBhc3N3b3JkVmFsaWQgPSAocGFzc3dvcmQgIT09IFwiXCIpOyAgLy8vXG5cbiAgcmV0dXJuIHBhc3N3b3JkVmFsaWQ7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgSW5wdXRFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFzc3dvcmRJbnB1dCBleHRlbmRzIElucHV0RWxlbWVudCB7XG4gIGdldFBhc3N3b3JkKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIHBhc3N3b3JkID0gdmFsdWU7IC8vL1xuXG4gICAgcmV0dXJuIHBhc3N3b3JkO1xuICB9XG5cbiAgY2xlYXJQYXNzd29yZCgpIHtcbiAgICBjb25zdCBwYXNzd29yZCA9IFwiXCIsXG4gICAgICAgICAgdmFsdWUgPSBwYXNzd29yZDsgLy8vXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG5cdCAgY29uc3QgZ2V0UGFzc3dvcmQgPSB0aGlzLmdldFBhc3N3b3JkLmJpbmQodGhpcyksXG5cdFx0XHRcdCAgY2xlYXJQYXNzd29yZCA9IHRoaXMuY2xlYXJQYXNzd29yZC5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRQYXNzd29yZCxcbiAgICAgIGNsZWFyUGFzc3dvcmRcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJpbnB1dFwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICB0eXBlOiBcInBhc3N3b3JkXCJcbiAgfTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IGNvbnRyb2xsZXIgZnJvbSBcIi4uL2NvbnRyb2xsZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzZXRQYXNzd29yZEJ1dHRvbiBleHRlbmRzIEVsZW1lbnQge1xuICBjbGlja0hhbmRsZXIoKSB7XG4gICAgY29udHJvbGxlci5yZXNldFBhc3N3b3JkKCk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiBcIlJlc2V0IHBhc3N3b3JkXCI7XG4gIH1cblxuICBpbml0aWFsaXNlKHByb3BlcnRpZXMpIHtcbiAgICB0aGlzLm9uQ2xpY2sodGhpcy5jbGlja0hhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImJ1dHRvblwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwicmVzZXRQYXNzd29yZFwiXG4gIH07XG5cbiAgc3RhdGljIGZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGNvbnN0IHJlc2V0UGFzc3dvcmRCdXR0b24gPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcyk7XG5cbiAgICByZXNldFBhc3N3b3JkQnV0dG9uLmluaXRpYWxpc2UocHJvcGVydGllcyk7XG5cbiAgICByZXR1cm4gcmVzZXRQYXNzd29yZEJ1dHRvbjtcbiAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgeyBUSU1FT1VUX0RFTEFZIH0gZnJvbSBcIi4uLy4uLy4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWYWxpZGF0aW9uRXJyb3IgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3JPckRvbUVsZW1lbnQpIHtcbiAgICBzdXBlcihzZWxlY3Rvck9yRG9tRWxlbWVudCk7XG5cbiAgICB0aGlzLnRpbWVvdXQgPSBudWxsO1xuICB9XG5cbiAgY2xlYXJWYWxpZGF0aW9uRXJyb3IoKSB7XG4gICAgY29uc3QgaHRtbCA9IFwiXCI7XG5cbiAgICB0aGlzLmh0bWwoaHRtbCk7XG4gIH1cblxuICBzaG93VmFsaWRhdGlvbkVycm9yKHZhbGlkYXRpb25FcnJvcikge1xuICAgIGNvbnN0IGh0bWwgPSB2YWxpZGF0aW9uRXJyb3I7IC8vL1xuXG4gICAgdGhpcy5odG1sKGh0bWwpO1xuXG4gICAgaWYgKHRoaXMudGltZW91dCAhPT0gbnVsbCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgfVxuXG4gICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnRpbWVtb3V0ID0gbnVsbDtcblxuICAgICAgdGhpcy5jbGVhclZhbGlkYXRpb25FcnJvcigpO1xuICAgIH0sIFRJTUVPVVRfREVMQVkpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICByZXR1cm4gKHtcbiAgICAgIHNob3dWYWxpZGF0aW9uRXJyb3I6IHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvci5iaW5kKHRoaXMpXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwicFwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmFsaWRhdGlvbiBlcnJvclwiXG4gIH07XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFwiLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgeyBCb2R5IH0gZnJvbSBcImVhc3lcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2ltcGxlQXBwKCkge1xuICBjb25zdCBib2R5ID0gbmV3IEJvZHkoKTtcblxuICBib2R5LnByZXBlbmQoXG5cbiAgICA8ZGl2PlxuICAgICAgPHA+XG4gICAgICAgIEEgc2ltcGxlIGFwcGxpY2F0aW9uLlxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuXG4gICk7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFwiLi9qdXh0YXBvc2VcIjtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCwgd2luZG93IH0gZnJvbSBcImVhc3lcIjtcblxud2luZG93LmFzc2lnbih7XG4gIFJlYWN0XG59KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgU1ZHX05BTUVTUEFDRV9VUkkgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7XG5leHBvcnQgY29uc3QgTEVGVF9NT1VTRV9CVVRUT04gPSAwO1xuZXhwb3J0IGNvbnN0IFJJR0hUX01PVVNFX0JVVFRPTiA9IDI7XG5leHBvcnQgY29uc3QgTUlERExFX01PVVNFX0JVVFRPTiA9IDE7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgTEVGVF9NT1VTRV9CVVRUT04sXG4gIFJJR0hUX01PVVNFX0JVVFRPTixcbiAgTUlERExFX01PVVNFX0JVVFRPTlxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQga2V5TWl4aW5zIGZyb20gXCIuL21peGlucy9rZXlcIjtcbmltcG9ydCBjbGlja01peGlucyBmcm9tIFwiLi9taXhpbnMvY2xpY2tcIjtcbmltcG9ydCBldmVudE1peGlucyBmcm9tIFwiLi9taXhpbnMvZXZlbnRcIjtcbmltcG9ydCBtb3VzZU1peGlucyBmcm9tIFwiLi9taXhpbnMvbW91c2VcIjtcblxuY2xhc3MgRG9jdW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb2N1bWVudDsgLy8vXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikgPyB1bmRlZmluZWQgOiBuZXcgRG9jdW1lbnQoKTsgIC8vL1xuXG5PYmplY3QuYXNzaWduKERvY3VtZW50LnByb3RvdHlwZSwga2V5TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRG9jdW1lbnQucHJvdG90eXBlLCBjbGlja01peGlucyk7XG5PYmplY3QuYXNzaWduKERvY3VtZW50LnByb3RvdHlwZSwgZXZlbnRNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihEb2N1bWVudC5wcm90b3R5cGUsIG1vdXNlTWl4aW5zKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgT2Zmc2V0IGZyb20gXCIuL21pc2NlbGxhbmVvdXMvb2Zmc2V0XCI7XG5pbXBvcnQgQm91bmRzIGZyb20gXCIuL21pc2NlbGxhbmVvdXMvYm91bmRzXCI7XG5pbXBvcnQganN4TWl4aW5zIGZyb20gXCIuL21peGlucy9qc3hcIjtcbmltcG9ydCBrZXlNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2tleVwiO1xuaW1wb3J0IGNsaWNrTWl4aW5zIGZyb20gXCIuL21peGlucy9jbGlja1wiO1xuaW1wb3J0IHN0YXRlTWl4aW5zIGZyb20gXCIuL21peGlucy9zdGF0ZVwiO1xuaW1wb3J0IGV2ZW50TWl4aW5zIGZyb20gXCIuL21peGlucy9ldmVudFwiO1xuaW1wb3J0IG1vdXNlTWl4aW5zIGZyb20gXCIuL21peGlucy9tb3VzZVwiO1xuaW1wb3J0IHJlc2l6ZU1peGlucyBmcm9tIFwiLi9taXhpbnMvcmVzaXplXCI7XG5pbXBvcnQgc2Nyb2xsTWl4aW5zIGZyb20gXCIuL21peGlucy9zY3JvbGxcIjtcblxuaW1wb3J0IHsgY29tYmluZSB9IGZyb20gXCIuL3V0aWxpdGllcy9vYmplY3RcIjtcbmltcG9ydCB7IGlzU1ZHVGFnTmFtZSB9IGZyb20gXCIuL3V0aWxpdGllcy9uYW1lXCI7XG5pbXBvcnQgeyBmaXJzdCwgYXVnbWVudCB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgU1ZHX05BTUVTUEFDRV9VUkkgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGRvbU5vZGVNYXRjaGVzU2VsZWN0b3IsIGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzLCBmaWx0ZXJET01Ob2Rlc0J5U2VsZWN0b3IsIGRlc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2RvbVwiO1xuXG5jbGFzcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3JPckRPTUVsZW1lbnQpIHtcbiAgICBpZiAodHlwZW9mIHNlbGVjdG9yT3JET01FbGVtZW50ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBjb25zdCBzZWxlY3RvciA9IHNlbGVjdG9yT3JET01FbGVtZW50O1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZG9tRWxlbWVudCA9IHNlbGVjdG9yT3JET01FbGVtZW50OyAgLy8vXG5cbiAgICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvbUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgdGhpcy5kb21FbGVtZW50Ll9fZWxlbWVudF9fID0gdGhpczsgLy8vXG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICBnZXRPZmZzZXQoKSB7XG4gICAgY29uc3QgdG9wID0gdGhpcy5kb21FbGVtZW50Lm9mZnNldFRvcCwgIC8vL1xuICAgICAgICAgIGxlZnQgPSB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0TGVmdCwgIC8vL1xuICAgICAgICAgIG9mZnNldCA9IG5ldyBPZmZzZXQodG9wLCBsZWZ0KTtcblxuICAgIHJldHVybiBvZmZzZXQ7XG4gIH1cblxuICBnZXRCb3VuZHMoKSB7XG4gICAgY29uc3QgYm91bmRpbmdDbGllbnRSZWN0ID0gdGhpcy5kb21FbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgIGJvdW5kcyA9IEJvdW5kcy5mcm9tQm91bmRpbmdDbGllbnRSZWN0KGJvdW5kaW5nQ2xpZW50UmVjdCk7XG5cbiAgICByZXR1cm4gYm91bmRzO1xuICB9XG5cbiAgZ2V0V2lkdGgoaW5jbHVkZUJvcmRlciA9IHRydWUpIHtcbiAgICBjb25zdCB3aWR0aCA9IGluY2x1ZGVCb3JkZXIgP1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0V2lkdGggOlxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5jbGllbnRXaWR0aDtcblxuICAgIHJldHVybiB3aWR0aDtcbiAgfVxuXG4gIHNldFdpZHRoKHdpZHRoKSB7XG4gICAgd2lkdGggPSBgJHt3aWR0aH1weGA7IC8vL1xuXG4gICAgdGhpcy5zdHlsZShcIndpZHRoXCIsIHdpZHRoKTtcbiAgfVxuXG4gIGdldEhlaWdodChpbmNsdWRlQm9yZGVyID0gdHJ1ZSkge1xuICAgIGNvbnN0IGhlaWdodCA9IGluY2x1ZGVCb3JkZXIgP1xuICAgICAgICAgICAgICAgICAgICAgdGhpcy5kb21FbGVtZW50Lm9mZnNldEhlaWdodCA6XG4gICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG9tRWxlbWVudC5jbGllbnRIZWlnaHQ7XG5cbiAgICByZXR1cm4gaGVpZ2h0O1xuICB9XG5cbiAgc2V0SGVpZ2h0KGhlaWdodCkge1xuICAgIGhlaWdodCA9IGAke2hlaWdodH1weGA7IC8vL1xuXG4gICAgdGhpcy5zdHlsZShcImhlaWdodFwiLCBoZWlnaHQpO1xuICB9XG5cbiAgaGFzQXR0cmlidXRlKG5hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5oYXNBdHRyaWJ1dGUobmFtZSk7IH1cblxuICBnZXRBdHRyaWJ1dGUobmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmdldEF0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIHNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkgeyB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTsgfVxuXG4gIGNsZWFyQXR0cmlidXRlKG5hbWUpIHsgdGhpcy5kb21FbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTsgfVxuXG4gIGFkZEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkgeyB0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7IH1cblxuICByZW1vdmVBdHRyaWJ1dGUobmFtZSkgeyB0aGlzLmNsZWFyQXR0cmlidXRlKG5hbWUpOyB9XG5cbiAgc2V0Q2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc05hbWU7IH1cblxuICBhZGRDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTsgfVxuXG4gIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpOyB9XG5cbiAgdG9nZ2xlQ2xhc3MoY2xhc3NOYW1lKSB7IHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKGNsYXNzTmFtZSk7IH1cblxuICBoYXNDbGFzcyhjbGFzc05hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTsgfVxuXG4gIGNsZWFyQ2xhc3NlcygpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTmFtZSA9IFwiXCI7IH1cblxuICBwcmVwZW5kVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LnByZXBlbmQodGhpcyk7IH1cblxuICBhcHBlbmRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQuYXBwZW5kKHRoaXMpOyB9XG5cbiAgYWRkVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LmFkZCh0aGlzKTsgfVxuXG4gIHJlbW92ZUZyb20ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LnJlbW92ZSh0aGlzKTsgfVxuXG4gIGluc2VydEJlZm9yZShzaWJsaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgcGFyZW50RE9NTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCk7XG4gIH1cblxuICBpbnNlcnRBZnRlcihzaWJsaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgcGFyZW50RE9NTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudC5uZXh0U2libGluZyk7ICAvLy9cbiAgfVxuXG4gIHByZXBlbmQoZWxlbWVudCkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQsXG4gICAgICAgICAgZmlyc3RDaGlsZERPTUVsZW1lbnQgPSB0aGlzLmRvbUVsZW1lbnQuZmlyc3RDaGlsZDtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5pbnNlcnRCZWZvcmUoZG9tRWxlbWVudCwgZmlyc3RDaGlsZERPTUVsZW1lbnQpO1xuICB9XG5cbiAgYXBwZW5kKGVsZW1lbnQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgdGhpcy5kb21FbGVtZW50Lmluc2VydEJlZm9yZShkb21FbGVtZW50LCBudWxsKTsgLy8vXG4gIH1cblxuICBhZGQoZWxlbWVudCkgeyB0aGlzLmFwcGVuZChlbGVtZW50KTsgfVxuXG4gIHJlbW92ZShlbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBlbGVtZW50LmRvbUVsZW1lbnQ7XG5cbiAgICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVDaGlsZChkb21FbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kb21FbGVtZW50LnJlbW92ZSgpO1xuICAgIH1cbiAgfVxuXG4gIG1vdW50KGVsZW1lbnQpIHtcbiAgICB0aGlzLmFkZChlbGVtZW50KTtcblxuICAgIGNvbnN0IGRlc2NlbmRhbnRFbGVtZW50cyA9IHRoaXMuZ2V0RGVzY2VuZGFudEVsZW1lbnRzKCk7XG5cbiAgICBkZXNjZW5kYW50RWxlbWVudHMuZm9yRWFjaCgoZGVzY2VuZGFudEVsZW1lbnQpID0+IChkZXNjZW5kYW50RWxlbWVudC5kaWRNb3VudCAmJiBkZXNjZW5kYW50RWxlbWVudC5kaWRNb3VudCgpKSk7ICAvLy9cbiAgfVxuXG4gIHVubW91bnQoZWxlbWVudCkge1xuICAgIGNvbnN0IGRlc2NlbmRhbnRFbGVtZW50cyA9IHRoaXMuZ2V0RGVzY2VuZGFudEVsZW1lbnRzKCk7XG5cbiAgICBkZXNjZW5kYW50RWxlbWVudHMuZm9yRWFjaCgoZGVzY2VuZGFudEVsZW1lbnQpID0+IChkZXNjZW5kYW50RWxlbWVudC53aWxsVW5tb3VudCAmJiBkZXNjZW5kYW50RWxlbWVudC53aWxsVW5tb3VudCgpKSk7ICAvLy9cblxuICAgIHRoaXMucmVtb3ZlKGVsZW1lbnQpO1xuICB9XG5cbiAgc2hvdyhkaXNwbGF5U3R5bGUgPSBcImJsb2NrXCIpIHsgdGhpcy5kaXNwbGF5KGRpc3BsYXlTdHlsZSk7IH1cblxuICBoaWRlKCkgeyB0aGlzLnN0eWxlKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7IH1cblxuICBkaXNwbGF5KGRpc3BsYXkpIHsgdGhpcy5zdHlsZShcImRpc3BsYXlcIiwgZGlzcGxheSk7IH1cblxuICBlbmFibGUoKSB7IHRoaXMuY2xlYXJBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTsgfVxuXG4gIGRpc2FibGUoKSB7IHRoaXMuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTsgfVxuXG4gIGlzRW5hYmxlZCgpIHtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZCgpLFxuICAgICAgICAgIGVuYWJsZWQgPSAhZGlzYWJsZWQ7XG5cbiAgICByZXR1cm4gZW5hYmxlZDtcbiAgfVxuXG4gIGlzRGlzYWJsZWQoKSB7XG4gICAgY29uc3QgZGlzYWJsZWQgPSB0aGlzLmhhc0F0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuXG4gICAgcmV0dXJuIGRpc2FibGVkO1xuICB9XG4gIFxuICBpc0Rpc3BsYXllZCgpIHtcbiAgICBjb25zdCBkaXNwbGF5ID0gdGhpcy5zdHlsZShcImRpc3BsYXlcIiksXG4gICAgICAgICAgZGlzcGxheWVkID0gKGRpc3BsYXkgIT09IFwibm9uZVwiKTtcbiAgICBcbiAgICByZXR1cm4gZGlzcGxheWVkO1xuICB9XG5cbiAgaXNTaG93aW5nKCkge1xuICAgIGNvbnN0IGRpc3BsYXllZCA9IHRoaXMuaXNEaXNwbGF5ZWQoKSxcbiAgICAgICAgICBzaG93aW5nID0gZGlzcGxheWVkOyAgLy8vXG5cbiAgICByZXR1cm4gc2hvd2luZztcbiAgfVxuXG4gIGlzSGlkZGVuKCkge1xuICAgIGNvbnN0IGRpc3BsYXllZCA9IHRoaXMuaXNEaXNwbGF5ZWQoKSxcbiAgICAgICAgICBoaWRkZW4gPSAhZGlzcGxheWVkO1xuXG4gICAgcmV0dXJuIGhpZGRlbjtcbiAgfVxuXG4gIHN0eWxlKG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5zdHlsZVtuYW1lXSA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdHlsZSA9IHRoaXMuZG9tRWxlbWVudC5zdHlsZVtuYW1lXTtcblxuICAgICAgcmV0dXJuIHN0eWxlO1xuICAgIH1cbiAgfVxuXG4gIGh0bWwoaHRtbCkge1xuICAgIGlmIChodG1sID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IGlubmVySFRNTCA9IHRoaXMuZG9tRWxlbWVudC5pbm5lckhUTUw7XG5cbiAgICAgIGh0bWwgPSBpbm5lckhUTUw7IC8vL1xuXG4gICAgICByZXR1cm4gaHRtbDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW5uZXJIVE1MID0gaHRtbDsgLy8vXG5cbiAgICAgIHRoaXMuZG9tRWxlbWVudC5pbm5lckhUTUwgPSBpbm5lckhUTUxcbiAgICB9XG4gIH1cblxuICBjc3MoY3NzKSB7XG4gICAgaWYgKGNzcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBjb21wdXRlZFN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmRvbUVsZW1lbnQpLFxuICAgICAgICAgICAgY3NzID0ge307XG5cbiAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb21wdXRlZFN0eWxlLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBuYW1lID0gY29tcHV0ZWRTdHlsZVswXSwgIC8vL1xuICAgICAgICAgICAgICB2YWx1ZSA9IGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTsgLy8vXG5cbiAgICAgICAgY3NzW25hbWVdID0gdmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY3NzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBsZXQgbmFtZSA9IGNzczsgLy8vXG5cbiAgICAgIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZG9tRWxlbWVudCksXG4gICAgICAgICAgICB2YWx1ZSA9IGNvbXB1dGVkU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTsgLy8vXG5cbiAgICAgIGNzcyA9IHZhbHVlOyAgLy8vXG5cbiAgICAgIHJldHVybiBjc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXMoY3NzKTsgLy8vXG5cbiAgICAgIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBjc3NbbmFtZV07XG5cbiAgICAgICAgdGhpcy5zdHlsZShuYW1lLCB2YWx1ZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgXG4gIGJsdXIoKSB7IHRoaXMuZG9tRWxlbWVudC5ibHVyKCk7IH1cblxuICBmb2N1cygpIHsgdGhpcy5kb21FbGVtZW50LmZvY3VzKCk7IH1cblxuICBoYXNGb2N1cygpIHtcbiAgICBjb25zdCBmb2N1cyA9IChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSB0aGlzLmRvbUVsZW1lbnQpOyAgLy8vXG5cbiAgICByZXR1cm4gZm9jdXM7XG4gIH1cblxuICBnZXREZXNjZW5kYW50RWxlbWVudHMoc2VsZWN0b3IgPSBcIipcIikge1xuICAgIGNvbnN0IGRvbU5vZGUgPSB0aGlzLmRvbUVsZW1lbnQsICAvLy9cbiAgICAgICAgICBkZXNjZW5kYW50RE9NTm9kZXMgPSBkZXNjZW5kYW50RE9NTm9kZXNGcm9tRE9NTm9kZShkb21Ob2RlKSxcbiAgICAgICAgICBkZXNjZW5kYW50RE9NRWxlbWVudHMgPSBmaWx0ZXJET01Ob2Rlc0J5U2VsZWN0b3IoZGVzY2VuZGFudERPTU5vZGVzLCBzZWxlY3RvciksXG4gICAgICAgICAgZGVzY2VuZGFudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoZGVzY2VuZGFudERPTUVsZW1lbnRzKTtcblxuICAgIHJldHVybiBkZXNjZW5kYW50RWxlbWVudHM7XG4gIH1cblxuICBnZXRDaGlsZEVsZW1lbnRzKHNlbGVjdG9yID0gXCIqXCIpIHtcbiAgICBjb25zdCBjaGlsZERPTU5vZGVzID0gdGhpcy5kb21FbGVtZW50LmNoaWxkTm9kZXMsXG4gICAgICAgICAgY2hpbGRET01FbGVtZW50cyA9IGZpbHRlckRPTU5vZGVzQnlTZWxlY3RvcihjaGlsZERPTU5vZGVzLCBzZWxlY3RvciksXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnRzRnJvbURPTUVsZW1lbnRzKGNoaWxkRE9NRWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBnZXRQYXJlbnRFbGVtZW50KHNlbGVjdG9yID0gXCIqXCIpIHtcbiAgICBsZXQgcGFyZW50RWxlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBwYXJlbnRET01FbGVtZW50ID0gdGhpcy5kb21FbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cbiAgICBpZiAocGFyZW50RE9NRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgaWYgKHBhcmVudERPTUVsZW1lbnQubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgY29uc3QgcGFyZW50RE9NRWxlbWVudHMgPSBbcGFyZW50RE9NRWxlbWVudF0sXG4gICAgICAgICAgICAgIHBhcmVudEVsZW1lbnRzID0gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMocGFyZW50RE9NRWxlbWVudHMpLFxuICAgICAgICAgICAgICBmaXJzdFBhcmVudEVsZW1lbnQgPSBmaXJzdChwYXJlbnRFbGVtZW50cyk7XG5cbiAgICAgICAgcGFyZW50RWxlbWVudCA9IGZpcnN0UGFyZW50RWxlbWVudCB8fCBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnRFbGVtZW50O1xuICB9XG5cbiAgZ2V0QXNjZW5kYW50RWxlbWVudHMoc2VsZWN0b3IgPSBcIipcIikge1xuICAgIGNvbnN0IGFzY2VuZGFudERPTUVsZW1lbnRzID0gW10sXG4gICAgICAgICAgcGFyZW50RE9NRWxlbWVudCA9IHRoaXMuZG9tRWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXG4gICAgbGV0IGFzY2VuZGFudERPTUVsZW1lbnQgPSBwYXJlbnRET01FbGVtZW50OyAgLy8vXG4gICAgd2hpbGUgKGFzY2VuZGFudERPTUVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGlmIChhc2NlbmRhbnRET01FbGVtZW50Lm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIGFzY2VuZGFudERPTUVsZW1lbnRzLnB1c2goYXNjZW5kYW50RE9NRWxlbWVudCk7XG4gICAgICB9XG5cbiAgICAgIGFzY2VuZGFudERPTUVsZW1lbnQgPSBhc2NlbmRhbnRET01FbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgY29uc3QgYXNjZW5kYW50RWxlbWVudHMgPSBlbGVtZW50c0Zyb21ET01FbGVtZW50cyhhc2NlbmRhbnRET01FbGVtZW50cyk7XG5cbiAgICByZXR1cm4gYXNjZW5kYW50RWxlbWVudHM7XG4gIH1cblxuICBnZXRQcmV2aW91c1NpYmxpbmdFbGVtZW50KHNlbGVjdG9yID0gXCIqXCIpIHtcbiAgICBsZXQgcHJldmlvdXNTaWJsaW5nRWxlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBwcmV2aW91c1NpYmxpbmdET01Ob2RlID0gdGhpcy5kb21FbGVtZW50LnByZXZpb3VzU2libGluZzsgIC8vL1xuXG4gICAgaWYgKChwcmV2aW91c1NpYmxpbmdET01Ob2RlICE9PSBudWxsKSAmJiBkb21Ob2RlTWF0Y2hlc1NlbGVjdG9yKHByZXZpb3VzU2libGluZ0RPTU5vZGUsIHNlbGVjdG9yKSkge1xuICAgICAgcHJldmlvdXNTaWJsaW5nRWxlbWVudCA9IHByZXZpb3VzU2libGluZ0RPTU5vZGUuX19lbGVtZW50X18gfHwgbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJldmlvdXNTaWJsaW5nRWxlbWVudDtcbiAgfVxuXG4gIGdldE5leHRTaWJsaW5nRWxlbWVudChzZWxlY3RvciA9IFwiKlwiKSB7XG4gICAgbGV0IG5leHRTaWJsaW5nRWxlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCBuZXh0U2libGluZ0RPTU5vZGUgPSB0aGlzLmRvbUVsZW1lbnQubmV4dFNpYmxpbmc7XG5cbiAgICBpZiAoKG5leHRTaWJsaW5nRE9NTm9kZSAhPT0gbnVsbCkgJiYgZG9tTm9kZU1hdGNoZXNTZWxlY3RvcihuZXh0U2libGluZ0RPTU5vZGUsIHNlbGVjdG9yKSkge1xuICAgICAgbmV4dFNpYmxpbmdFbGVtZW50ID0gbmV4dFNpYmxpbmdET01Ob2RlLl9fZWxlbWVudF9fIHx8IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHRTaWJsaW5nRWxlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGFnTmFtZSh0YWdOYW1lLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZnJvbVRhZ05hbWUoRWxlbWVudCwgdGFnTmFtZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSxcbiAgICAgICAgICBkZWZhdWx0UHJvcGVydGllcyA9IHt9LCAvLy9cbiAgICAgICAgICBpZ25vcmVkUHJvcGVydGllcyA9IFtdOyAvLy9cblxuICAgIGVsZW1lbnQuYXBwbHlQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGRlZmF1bHRQcm9wZXJ0aWVzLCBpZ25vcmVkUHJvcGVydGllcyk7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHRhZ05hbWUgPSBDbGFzcy50YWdOYW1lLFxuICAgICAgICAgIGVsZW1lbnQgPSBmcm9tVGFnTmFtZShDbGFzcywgdGFnTmFtZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSxcbiAgICAgICAgICBkZWZhdWx0UHJvcGVydGllcyA9IGRlZmF1bHRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzKSxcbiAgICAgICAgICBpZ25vcmVkUHJvcGVydGllcyA9IGlnbm9yZWRQcm9wZXJ0aWVzRnJvbUNsYXNzKENsYXNzKTtcblxuICAgIGVsZW1lbnQuYXBwbHlQcm9wZXJ0aWVzKHByb3BlcnRpZXMsIGRlZmF1bHRQcm9wZXJ0aWVzLCBpZ25vcmVkUHJvcGVydGllcyk7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBqc3hNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihFbGVtZW50LnByb3RvdHlwZSwga2V5TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGNsaWNrTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIHN0YXRlTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGV2ZW50TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIG1vdXNlTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIHJlc2l6ZU1peGlucyk7XG5PYmplY3QuYXNzaWduKEVsZW1lbnQucHJvdG90eXBlLCBzY3JvbGxNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBFbGVtZW50O1xuXG5mdW5jdGlvbiBmcm9tVGFnTmFtZShDbGFzcywgdGFnTmFtZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gIGNvbnN0IGRvbUVsZW1lbnQgPSBpc1NWR1RhZ05hbWUodGFnTmFtZSkgP1xuICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoU1ZHX05BTUVTUEFDRV9VUkksIHRhZ05hbWUpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuXG4gIHJldHVybiBmcm9tRE9NRWxlbWVudChDbGFzcywgZG9tRWxlbWVudCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gZnJvbURPTUVsZW1lbnQoQ2xhc3MsIGRvbUVsZW1lbnQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICByZW1haW5pbmdBcmd1bWVudHMudW5zaGlmdChkb21FbGVtZW50KTtcblxuICByZW1haW5pbmdBcmd1bWVudHMudW5zaGlmdChudWxsKTtcblxuICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5jYWxsKENsYXNzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpKTtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdFByb3BlcnRpZXNGcm9tQ2xhc3MoQ2xhc3MsIGRlZmF1bHRQcm9wZXJ0aWVzID0ge30pIHtcbiAgaWYgKENsYXNzLmhhc093blByb3BlcnR5KFwiZGVmYXVsdFByb3BlcnRpZXNcIikpIHtcbiAgICBjb21iaW5lKGRlZmF1bHRQcm9wZXJ0aWVzLCBDbGFzcy5kZWZhdWx0UHJvcGVydGllcyk7XG4gIH1cblxuICBjb25zdCBzdXBlckNsYXNzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKENsYXNzKTtcblxuICBpZiAoc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIGRlZmF1bHRQcm9wZXJ0aWVzRnJvbUNsYXNzKHN1cGVyQ2xhc3MsIGRlZmF1bHRQcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIHJldHVybiBkZWZhdWx0UHJvcGVydGllcztcbn1cblxuZnVuY3Rpb24gaWdub3JlZFByb3BlcnRpZXNGcm9tQ2xhc3MoQ2xhc3MsIGlnbm9yZWRQcm9wZXJ0aWVzID0gW10pIHtcbiAgaWYgKENsYXNzLmhhc093blByb3BlcnR5KFwiaWdub3JlZFByb3BlcnRpZXNcIikpIHtcbiAgICBhdWdtZW50KGlnbm9yZWRQcm9wZXJ0aWVzLCBDbGFzcy5pZ25vcmVkUHJvcGVydGllcywgKGlnbm9yZWRQcm9wZXJ0eSkgPT4gIWlnbm9yZWRQcm9wZXJ0aWVzLmluY2x1ZGVzKGlnbm9yZWRQcm9wZXJ0eSkpO1xuICB9XG5cbiAgY29uc3Qgc3VwZXJDbGFzcyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihDbGFzcyk7XG5cbiAgaWYgKHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICBpZ25vcmVkUHJvcGVydGllc0Zyb21DbGFzcyhzdXBlckNsYXNzLCBpZ25vcmVkUHJvcGVydGllcyk7XG4gIH1cblxuICByZXR1cm4gaWdub3JlZFByb3BlcnRpZXM7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9keSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvck9yRE9NRWxlbWVudCA9IFwiYm9keVwiKSB7XG4gICAgc3VwZXIoc2VsZWN0b3JPckRPTUVsZW1lbnQpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImJvZHlcIjtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3JPckRPTUVsZW1lbnQsIGNsaWNrSGFuZGxlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yT3JET01FbGVtZW50KTtcblxuICAgIGlmIChjbGlja0hhbmRsZXIgIT09IG51bGwpIHtcbiAgICAgIHRoaXMub25DbGljayhjbGlja0hhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJidXR0b25cIjtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJvbkNsaWNrXCJcbiAgXTtcblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBvbkNsaWNrID0gbnVsbCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjbGlja0hhbmRsZXIgPSBvbkNsaWNrLCAvLy9cbiAgICAgICAgICBidXR0b24gPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcywgY2xpY2tIYW5kbGVyKTtcbiAgICBcbiAgICByZXR1cm4gYnV0dG9uO1xuICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hlY2tib3ggZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3JPckRPTUVsZW1lbnQsIGNoYW5nZUhhbmRsZXIsIGNoZWNrZWQpIHtcbiAgICBzdXBlcihzZWxlY3Rvck9yRE9NRWxlbWVudCk7XG5cbiAgICBpZiAoY2hhbmdlSGFuZGxlciAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5vbkNoYW5nZShjaGFuZ2VIYW5kbGVyKTtcbiAgICB9XG5cbiAgICB0aGlzLmNoZWNrKGNoZWNrZWQpO1xuICB9XG5cbiAgb25DaGFuZ2UoY2hhbmdlSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uKFwiY2xpY2tcIiwgY2hhbmdlSGFuZGxlciwgZWxlbWVudCk7IH0gLy8vXG5cbiAgb2ZmQ2hhbmdlKGNoYW5nZUhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vZmYoXCJjbGlja1wiLCBjaGFuZ2VIYW5kbGVyLCBlbGVtZW50KTsgfSAvLy9cblxuICBjaGVjayhjaGVja2VkID0gdHJ1ZSkgeyB0aGlzLmRvbUVsZW1lbnQuY2hlY2tlZCA9IGNoZWNrZWQ7IH1cblxuICBpc0NoZWNrZWQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuY2hlY2tlZDsgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJpbnB1dFwiO1xuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcIm9uQ2hhbmdlXCIsXG4gICAgXCJjaGVja2VkXCJcbiAgXTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgdHlwZTogXCJjaGVja2JveFwiXG4gIH07XG5cbiAgc3RhdGljIGZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UgPSBudWxsLCBjaGVja2VkID0gbnVsbCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjaGFuZ2VIYW5kbGVyID0gb25DaGFuZ2UsIC8vL1xuICAgICAgICAgIGNoZWNrYm94ID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIGNoYW5nZUhhbmRsZXIsIGNoZWNrZWQpO1xuXG4gICAgcmV0dXJuIGNoZWNrYm94O1xuICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGluayBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvck9yRE9NRWxlbWVudCwgY2xpY2tIYW5kbGVyKSB7XG4gICAgc3VwZXIoc2VsZWN0b3JPckRPTUVsZW1lbnQpO1xuXG4gICAgaWYgKGNsaWNrSGFuZGxlciAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5vbkNsaWNrKGNsaWNrSGFuZGxlcik7XG4gICAgfVxuICB9XG5cbiAgZ2V0SFJlZigpIHsgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTsgfVxuXG4gIHNldEhSZWYoaHJlZikgeyByZXR1cm4gdGhpcy5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGhyZWYpOyB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImFcIjtcblxuICBzdGF0aWMgaWdub3JlZFByb3BlcnRpZXMgPSBbXG4gICAgXCJvbkNsaWNrXCJcbiAgXTtcblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBvbkNsaWNrID0gbnVsbCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjbGlja0hhbmRsZXIgPSBvbkNsaWNrLCAvLy9cbiAgICAgICAgICBsaW5rID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIGNsaWNrSGFuZGxlcik7XG4gICAgXG4gICAgcmV0dXJuIGxpbms7XG4gIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3QgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3JPckRPTUVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICBzdXBlcihzZWxlY3Rvck9yRE9NRWxlbWVudCk7XG5cbiAgICBpZiAoY2hhbmdlSGFuZGxlciAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5vbkNoYW5nZShjaGFuZ2VIYW5kbGVyKTtcbiAgICB9XG4gIH1cblxuICBvbkNoYW5nZShjaGFuZ2VIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub24oXCJjaGFuZ2VcIiwgY2hhbmdlSGFuZGxlciwgZWxlbWVudCk7IH1cblxuICBvZmZDaGFuZ2UoY2hhbmdlSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZihcImNoYW5nZVwiLCBjaGFuZ2VIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG4gIGdldFZhbHVlKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnZhbHVlOyB9XG5cbiAgc2V0VmFsdWUodmFsdWUpIHsgdGhpcy5kb21FbGVtZW50LnZhbHVlID0gdmFsdWU7IH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwic2VsZWN0XCI7XG5cbiAgc3RhdGljIGlnbm9yZWRQcm9wZXJ0aWVzID0gW1xuICAgIFwib25DaGFuZ2VcIlxuICBdO1xuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlID0gbnVsbCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjaGFuZ2VIYW5kbGVyID0gb25DaGFuZ2UsIC8vL1xuICAgICAgICAgIHNlbGVjdCA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCBjaGFuZ2VIYW5kbGVyKTtcbiAgICBcbiAgICByZXR1cm4gc2VsZWN0O1xuICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBCb2R5IH0gZnJvbSBcIi4vZWxlbWVudC9ib2R5XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEJ1dHRvbiB9IGZyb20gXCIuL2VsZW1lbnQvYnV0dG9uXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENoZWNrYm94IH0gZnJvbSBcIi4vZWxlbWVudC9jaGVja2JveFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMaW5rIH0gZnJvbSBcIi4vZWxlbWVudC9saW5rXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlbGVjdCB9IGZyb20gXCIuL2VsZW1lbnQvc2VsZWN0XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIElucHV0IH0gZnJvbSBcIi4vaW5wdXRFbGVtZW50L2lucHV0XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRleHRhcmVhIH0gZnJvbSBcIi4vaW5wdXRFbGVtZW50L3RleHRhcmVhXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEVsZW1lbnQgfSBmcm9tIFwiLi9lbGVtZW50XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRleHRFbGVtZW50IH0gZnJvbSBcIi4vdGV4dEVsZW1lbnRcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSW5wdXRFbGVtZW50IH0gZnJvbSBcIi4vaW5wdXRFbGVtZW50XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpbmRvdyB9IGZyb20gXCIuL3dpbmRvd1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBkb2N1bWVudCB9IGZyb20gXCIuL2RvY3VtZW50XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNvbnN0YW50cyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBCb3VuZHMgfSBmcm9tIFwiLi9taXNjZWxsYW5lb3VzL2JvdW5kc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBPZmZzZXQgfSBmcm9tIFwiLi9taXNjZWxsYW5lb3VzL29mZnNldFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSZWFjdCB9IGZyb20gXCIuL3JlYWN0XCI7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4vZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dEVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3JPckRPTUVsZW1lbnQsIGNoYW5nZUhhbmRsZXIpIHtcbiAgICBzdXBlcihzZWxlY3Rvck9yRE9NRWxlbWVudCk7XG5cbiAgICBpZiAoY2hhbmdlSGFuZGxlciAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5vbkNoYW5nZShjaGFuZ2VIYW5kbGVyKTtcbiAgICB9XG4gIH1cblxuICBvbkNoYW5nZShjaGFuZ2VIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub24oXCJjaGFuZ2VcIiwgY2hhbmdlSGFuZGxlciwgZWxlbWVudCk7IH1cblxuICBvZmZDaGFuZ2UoY2hhbmdlSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZihcImNoYW5nZVwiLCBjaGFuZ2VIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG4gIG9uUmVzaXplKHJlc2l6ZUhhbmRsZXIsIGVsZW1lbnQpIHt9IC8vL1xuXG4gIG9mZlJlc2l6ZShyZXNpemVIYW5kbGVyLCBlbGVtZW50KSB7fSAgLy8vXG5cbiAgZ2V0VmFsdWUoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQudmFsdWU7IH1cblxuICBnZXRTZWxlY3Rpb25TdGFydCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5zZWxlY3Rpb25TdGFydDsgfVxuXG4gIGdldFNlbGVjdGlvbkVuZCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5zZWxlY3Rpb25FbmQ7IH1cbiAgXG4gIGlzUmVhZE9ubHkoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQucmVhZE9ubHk7IH1cblxuICBzZXRWYWx1ZSh2YWx1ZSkgeyB0aGlzLmRvbUVsZW1lbnQudmFsdWUgPSB2YWx1ZTsgfVxuXG4gIHNldFNlbGVjdGlvblN0YXJ0KHNlbGVjdGlvblN0YXJ0KSB7IHRoaXMuZG9tRWxlbWVudC5zZWxlY3Rpb25TdGFydCA9IHNlbGVjdGlvblN0YXJ0OyB9XG5cbiAgc2V0U2VsZWN0aW9uRW5kKHNlbGVjdGlvbkVuZCkgeyB0aGlzLmRvbUVsZW1lbnQuc2VsZWN0aW9uRW5kID0gc2VsZWN0aW9uRW5kOyB9XG5cbiAgc2V0UmVhZE9ubHkocmVhZE9ubHkpIHsgdGhpcy5kb21FbGVtZW50LnJlYWRPbmx5ID0gcmVhZE9ubHk7IH1cblxuICBzZWxlY3QoKSB7IHRoaXMuZG9tRWxlbWVudC5zZWxlY3QoKTsgfVxuXG4gIHN0YXRpYyBpZ25vcmVkUHJvcGVydGllcyA9IFtcbiAgICBcIm9uQ2hhbmdlXCJcbiAgXTtcblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlID0gbnVsbCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjaGFuZ2VIYW5kbGVyID0gb25DaGFuZ2U7IC8vL1xuXG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCBjaGFuZ2VIYW5kbGVyLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IElucHV0RWxlbWVudCBmcm9tIFwiLi4vaW5wdXRFbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0IGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgc3RhdGljIHRhZ05hbWUgPSBcImlucHV0XCI7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IElucHV0RWxlbWVudCBmcm9tIFwiLi4vaW5wdXRFbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRhcmVhIGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgc3RhdGljIHRhZ05hbWUgPSBcInRleHRhcmVhXCI7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm91bmRzIHtcbiAgY29uc3RydWN0b3IodG9wLCBsZWZ0LCBib3R0b20sIHJpZ2h0KSB7XG4gICAgdGhpcy50b3AgPSB0b3A7XG4gICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgICB0aGlzLmJvdHRvbSA9IGJvdHRvbTtcbiAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XG4gIH1cblxuICBnZXRUb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9wO1xuICB9XG5cbiAgZ2V0TGVmdCgpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0O1xuICB9XG5cbiAgZ2V0Qm90dG9tKCkge1xuICAgIHJldHVybiB0aGlzLmJvdHRvbTtcbiAgfVxuXG4gIGdldFJpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLnJpZ2h0O1xuICB9XG5cbiAgZ2V0V2lkdGgoKSB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLnJpZ2h0IC0gdGhpcy5sZWZ0O1xuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KCkge1xuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuYm90dG9tIC0gdGhpcy50b3A7XG5cbiAgICByZXR1cm4gaGVpZ2h0O1xuICB9XG4gIFxuICBzZXRUb3AodG9wKSB7XG4gICAgdGhpcy50b3AgPSB0b3A7XG4gIH1cblxuICBzZXRMZWZ0KGxlZnQpIHtcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICB9XG5cbiAgc2V0Qm90dG9tKGJvdHRvbSkge1xuICAgIHRoaXMuYm90dG9tID0gYm90dG9tO1xuICB9XG5cbiAgc2V0UmlnaHQocmlnaHQpIHtcbiAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XG4gIH1cblxuICBzaGlmdChob3Jpem9udGFsT2Zmc2V0LCB2ZXJ0aWNhbE9mZnNldCkge1xuICAgIHRoaXMudG9wICs9IHZlcnRpY2FsT2Zmc2V0O1xuICAgIHRoaXMubGVmdCArPSBob3Jpem9udGFsT2Zmc2V0O1xuICAgIHRoaXMuYm90dG9tICs9IHZlcnRpY2FsT2Zmc2V0O1xuICAgIHRoaXMucmlnaHQgKz0gaG9yaXpvbnRhbE9mZnNldDtcbiAgfVxuXG4gIGlzT3ZlcmxhcHBpbmdNb3VzZShtb3VzZVRvcCwgbW91c2VMZWZ0KSB7XG4gICAgcmV0dXJuICggICh0aGlzLnRvcCA8IG1vdXNlVG9wKVxuICAgICAgICAgICAmJiAodGhpcy5sZWZ0IDwgbW91c2VMZWZ0KVxuICAgICAgICAgICAmJiAodGhpcy5ib3R0b20gPiBtb3VzZVRvcClcbiAgICAgICAgICAgJiYgKHRoaXMucmlnaHQgPiBtb3VzZUxlZnQpICApO1xuICB9XG5cbiAgYXJlT3ZlcmxhcHBpbmcoYm91bmRzKSB7XG4gICAgcmV0dXJuICggICh0aGlzLnRvcCA8IGJvdW5kcy5ib3R0b20pXG4gICAgICAgICAgICYmICh0aGlzLmxlZnQgPCBib3VuZHMucmlnaHQpXG4gICAgICAgICAgICYmICh0aGlzLmJvdHRvbSA+IGJvdW5kcy50b3ApXG4gICAgICAgICAgICYmICh0aGlzLnJpZ2h0ID4gYm91bmRzLmxlZnQpICApO1xuICB9XG5cbiAgc3RhdGljIGZyb21Cb3VuZGluZ0NsaWVudFJlY3QoYm91bmRpbmdDbGllbnRSZWN0KSB7XG4gICAgY29uc3Qgd2luZG93U2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0LCAvLy9cbiAgICAgICAgICB3aW5kb3dTY3JvbGxMZWZ0ID0gd2luZG93LnBhZ2VYT2Zmc2V0LCAgLy8vXG4gICAgICAgICAgdG9wID0gYm91bmRpbmdDbGllbnRSZWN0LnRvcCArIHdpbmRvd1Njcm9sbFRvcCxcbiAgICAgICAgICBsZWZ0ID0gYm91bmRpbmdDbGllbnRSZWN0LmxlZnQgKyB3aW5kb3dTY3JvbGxMZWZ0LFxuICAgICAgICAgIGJvdHRvbSA9IGJvdW5kaW5nQ2xpZW50UmVjdC5ib3R0b20gKyB3aW5kb3dTY3JvbGxUb3AsXG4gICAgICAgICAgcmlnaHQgPSBib3VuZGluZ0NsaWVudFJlY3QucmlnaHQgKyB3aW5kb3dTY3JvbGxMZWZ0LFxuICAgICAgICAgIGJvdW5kcyA9IG5ldyBCb3VuZHModG9wLCBsZWZ0LCBib3R0b20sIHJpZ2h0KTtcblxuICAgIHJldHVybiBib3VuZHM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVRvcExlZnRXaWR0aEFuZEhlaWdodCh0b3AsIGxlZnQsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICBjb25zdCBib3R0b20gPSB0b3AgKyBoZWlnaHQsXG4gICAgICAgICAgcmlnaHQgPSBsZWZ0ICsgd2lkdGgsXG4gICAgICAgICAgYm91bmRzID0gbmV3IEJvdW5kcyh0b3AsIGxlZnQsIGJvdHRvbSwgcmlnaHQpO1xuXG4gICAgcmV0dXJuIGJvdW5kcztcbiAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9mZnNldCB7XG4gIGNvbnN0cnVjdG9yKHRvcCwgbGVmdCkge1xuICAgIHRoaXMudG9wID0gdG9wO1xuICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gIH1cblxuICBnZXRUb3AoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9wO1xuICB9XG5cbiAgZ2V0TGVmdCgpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0O1xuICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gb25DbGljayhjbGlja0hhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vbihcImNsaWNrXCIsIGNsaWNrSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb2ZmQ2xpY2soY2xpY2tIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmKFwiY2xpY2tcIiwgY2xpY2tIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG9uQ2xpY2ssXG4gIG9mZkNsaWNrXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7cmVtb3ZlUmVzaXplT2JqZWN0fSBmcm9tIFwiLi9yZXNpemVcIjtcblxuZnVuY3Rpb24gb24oZXZlbnRUeXBlcywgaGFuZGxlciwgZWxlbWVudCkge1xuICBldmVudFR5cGVzID0gZXZlbnRUeXBlcy5zcGxpdChcIiBcIik7IC8vL1xuXG4gIGV2ZW50VHlwZXMuZm9yRWFjaCgoZXZlbnRUeXBlKSA9PiB7XG4gICAgaWYgKGV2ZW50VHlwZSA9PT0gXCJyZXNpemVcIikge1xuICAgICAgY29uc3QgcmVzaXplRXZlbnRMaXN0ZW5lcnMgPSB0aGlzLmZpbmRFdmVudExpc3RlbmVycyhcInJlc2l6ZVwiKSxcbiAgICAgICAgICAgIHJlc2l6ZUV2ZW50TGlzdGVuZXJzTGVuZ3RoID0gcmVzaXplRXZlbnRMaXN0ZW5lcnMubGVuZ3RoO1xuXG4gICAgICBpZiAocmVzaXplRXZlbnRMaXN0ZW5lcnNMZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy5hZGRSZXNpemVPYmplY3QoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBldmVudExpc3RlbmVyID0gdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlciwgZWxlbWVudCk7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGV2ZW50TGlzdGVuZXIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gb2ZmKGV2ZW50VHlwZXMsIGhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgZXZlbnRUeXBlcyA9IGV2ZW50VHlwZXMuc3BsaXQoXCIgXCIpOyAvLy9cblxuICBldmVudFR5cGVzLmZvckVhY2goKGV2ZW50VHlwZSkgPT4ge1xuICAgIGNvbnN0IGV2ZW50TGlzdGVuZXIgPSB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcblxuICAgIHRoaXMuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgZXZlbnRMaXN0ZW5lcik7XG5cbiAgICBpZiAoZXZlbnRUeXBlID09PSBcInJlc2l6ZVwiKSB7XG4gICAgICBjb25zdCByZXNpemVFdmVudExpc3RlbmVycyA9IHRoaXMuZmluZEV2ZW50TGlzdGVuZXJzKFwicmVzaXplXCIpLFxuICAgICAgICAgICAgcmVzaXplRXZlbnRMaXN0ZW5lcnNMZW5ndGggPSByZXNpemVFdmVudExpc3RlbmVycy5sZW5ndGg7XG5cbiAgICAgIGlmIChyZXNpemVFdmVudExpc3RlbmVyc0xlbmd0aCA9PT0gMCkge1xuICAgICAgICByZW1vdmVSZXNpemVPYmplY3QodGhpcyk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQgPSB0aGlzKSB7XG4gIGlmICghdGhpcy5oYXNPd25Qcm9wZXJ0eShcImV2ZW50TGlzdGVuZXJzXCIpKSB7XG4gICAgdGhpcy5ldmVudExpc3RlbmVycyA9IFtdO1xuICB9XG5cbiAgY29uc3QgZXZlbnRMaXN0ZW5lciA9IGNyZWF0ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50KTtcblxuICB0aGlzLmV2ZW50TGlzdGVuZXJzLnB1c2goZXZlbnRMaXN0ZW5lcik7XG5cbiAgcmV0dXJuIGV2ZW50TGlzdGVuZXI7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyLCBlbGVtZW50ID0gdGhpcykge1xuICBjb25zdCBldmVudExpc3RlbmVyID0gdGhpcy5maW5kRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpLFxuICAgICAgICBpbmRleCA9IHRoaXMuZXZlbnRMaXN0ZW5lcnMuaW5kZXhPZihldmVudExpc3RlbmVyKSxcbiAgICAgICAgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICBkZWxldGVDb3VudCA9IDE7XG5cbiAgdGhpcy5ldmVudExpc3RlbmVycy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcblxuICBpZiAodGhpcy5ldmVudExpc3RlbmVycy5sZW5ndGggPT09IDApIHtcbiAgICBkZWxldGUgdGhpcy5ldmVudExpc3RlbmVycztcbiAgfVxuXG4gIHJldHVybiBldmVudExpc3RlbmVyO1xufVxuXG5mdW5jdGlvbiBmaW5kRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgY29uc3QgZXZlbnRMaXN0ZW5lciA9IHRoaXMuZXZlbnRMaXN0ZW5lcnMuZmluZCgoZXZlbnRMaXN0ZW5lcikgPT4ge1xuICAgIGNvbnN0IGZvdW5kID0gKCAoZXZlbnRMaXN0ZW5lci5lbGVtZW50ID09PSBlbGVtZW50KSAmJlxuICAgICAgICAgICAgICAgICAgICAoZXZlbnRMaXN0ZW5lci5oYW5kbGVyID09PSBoYW5kbGVyKSAmJlxuICAgICAgICAgICAgICAgICAgICAoZXZlbnRMaXN0ZW5lci5ldmVudFR5cGUgPT09IGV2ZW50VHlwZSkgKTtcblxuICAgIGlmIChmb3VuZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZXZlbnRMaXN0ZW5lcjtcbn1cblxuZnVuY3Rpb24gZmluZEV2ZW50TGlzdGVuZXJzKGV2ZW50VHlwZSkge1xuICBjb25zdCBldmVudExpc3RlbmVycyA9IFtdO1xuXG4gIGlmICh0aGlzLmhhc093blByb3BlcnR5KFwiZXZlbnRMaXN0ZW5lcnNcIikpIHtcbiAgICB0aGlzLmV2ZW50TGlzdGVuZXJzLmZvckVhY2goKGV2ZW50TGlzdGVuZXIpID0+IHtcbiAgICAgIGNvbnN0IGZvdW5kID0gKGV2ZW50TGlzdGVuZXIuZXZlbnRUeXBlID09PSBldmVudFR5cGUpO1xuXG4gICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgZXZlbnRMaXN0ZW5lcnMucHVzaChldmVudExpc3RlbmVyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBldmVudExpc3RlbmVycztcbn1cblxuZnVuY3Rpb24gY3JlYXRlRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIsIGVsZW1lbnQpIHtcbiAgbGV0IGV2ZW50TGlzdGVuZXI7XG5cbiAgZXZlbnRMaXN0ZW5lciA9IChldmVudCkgPT4ge1xuICAgIGhhbmRsZXIuY2FsbChlbGVtZW50LCBldmVudCwgZWxlbWVudClcbiAgfTtcblxuICBPYmplY3QuYXNzaWduKGV2ZW50TGlzdGVuZXIsIHtcbiAgICBlbGVtZW50LFxuICAgIGhhbmRsZXIsXG4gICAgZXZlbnRUeXBlXG4gIH0pO1xuXG4gIHJldHVybiBldmVudExpc3RlbmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG9uLFxuICBvZmYsXG4gIGFkZEV2ZW50TGlzdGVuZXIsXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXIsXG4gIGZpbmRFdmVudExpc3RlbmVyLFxuICBmaW5kRXZlbnRMaXN0ZW5lcnNcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgY29tYmluZSwgcHJ1bmUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL29iamVjdFwiO1xuaW1wb3J0IHsgZmlyc3QsIGd1YXJhbnRlZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IFNWR19OQU1FU1BBQ0VfVVJJIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgaXNIVE1MQXR0cmlidXRlTmFtZSwgaXNTVkdBdHRyaWJ1dGVOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9uYW1lXCI7XG5pbXBvcnQgeyByZW1vdmVGYWxzZXlFbGVtZW50cywgcmVwbGFjZVN0cmluZ3NXaXRoVGV4dEVsZW1lbnRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50c1wiO1xuXG5mdW5jdGlvbiBhcHBseVByb3BlcnRpZXMocHJvcGVydGllcywgZGVmYXVsdFByb3BlcnRpZXMsIGlnbm9yZWRQcm9wZXJ0aWVzKSB7XG4gIHByb3BlcnRpZXMgPSBPYmplY3QuYXNzaWduKHt9LCBwcm9wZXJ0aWVzKTsgLy8vXG5cbiAgY29tYmluZShwcm9wZXJ0aWVzLCBkZWZhdWx0UHJvcGVydGllcyk7XG5cbiAgY29uc3QgY2hpbGRFbGVtZW50cyA9IGNoaWxkRWxlbWVudHNGcm9tRWxlbWVudEFuZFByb3BlcnRpZXModGhpcywgcHJvcGVydGllcykgfHwgcHJvcGVydGllcy5jaGlsZEVsZW1lbnRzOyAgLy8vXG5cbiAgcHJ1bmUocHJvcGVydGllcywgaWdub3JlZFByb3BlcnRpZXMpO1xuXG4gIGNvbnN0IHN2ZyA9ICh0aGlzLmRvbUVsZW1lbnQubmFtZXNwYWNlVVJJID09PSBTVkdfTkFNRVNQQUNFX1VSSSksIC8vL1xuICAgICAgICBuYW1lcyA9IE9iamVjdC5rZXlzKHByb3BlcnRpZXMpOyAgLy8vXG5cbiAgbmFtZXMuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gcHJvcGVydGllc1tuYW1lXTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmIChpc0hhbmRsZXJOYW1lKG5hbWUpKSB7XG4gICAgICBhZGRIYW5kbGVyKHRoaXMsIG5hbWUsIHZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKGlzQXR0cmlidXRlTmFtZShuYW1lLCBzdmcpKSB7XG4gICAgICBhZGRBdHRyaWJ1dGUodGhpcywgbmFtZSwgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIXRoaXMuaGFzT3duUHJvcGVydHkoXCJwcm9wZXJ0aWVzXCIpKSB7XG4gICAgICAgIGNvbnN0IHByb3BlcnRpZXMgPSB7fTtcblxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIHtcbiAgICAgICAgICBwcm9wZXJ0aWVzXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnByb3BlcnRpZXNbbmFtZV0gPSB2YWx1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGNvbnRleHQgPSB7fTtcblxuICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4ge1xuICAgIHVwZGF0ZUNvbnRleHQoY2hpbGRFbGVtZW50LCBjb250ZXh0KTtcblxuICAgIGNoaWxkRWxlbWVudC5hZGRUbyh0aGlzKTtcbiAgfSk7XG5cbiAgT2JqZWN0LmFzc2lnbih0aGlzLCB7XG4gICAgY29udGV4dFxuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0UHJvcGVydGllcygpIHtcbiAgcmV0dXJuIHRoaXMucHJvcGVydGllcztcbn1cblxuZnVuY3Rpb24gZ2V0Q29udGV4dCgpIHtcbiAgcmV0dXJuIHRoaXMuY29udGV4dDtcbn1cblxuZnVuY3Rpb24gYXNzaWduQ29udGV4dChuYW1lcywgdGhlbkRlbGV0ZSkge1xuICBjb25zdCBhcmd1bWVudHNMZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuXG4gIGlmIChhcmd1bWVudHNMZW5ndGggPT09IDEpIHtcbiAgICBjb25zdCBmaXJzdEFyZ3VtZW50ID0gZmlyc3QoYXJndW1lbnRzKTtcblxuICAgIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgIG5hbWVzID0gT2JqZWN0LmtleXModGhpcy5jb250ZXh0KTtcblxuICAgICAgdGhlbkRlbGV0ZSA9IGZpcnN0QXJndW1lbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoZW5EZWxldGUgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChhcmd1bWVudHNMZW5ndGggPT09IDApIHtcbiAgICBuYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMuY29udGV4dCk7XG5cbiAgICB0aGVuRGVsZXRlID0gdHJ1ZTtcbiAgfVxuXG4gIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuY29udGV4dFtuYW1lXSxcbiAgICAgICAgICBwcm9wZXJ0eU5hbWUgPSBuYW1lLCAgLy8vXG4gICAgICAgICAgZGVzY3JpcHRvciA9IHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICAgIH07XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgcHJvcGVydHlOYW1lLCBkZXNjcmlwdG9yKTtcblxuICAgIGlmICh0aGVuRGVsZXRlKSB7XG4gICAgICBkZWxldGUgdGhpcy5jb250ZXh0W25hbWVdO1xuICAgIH1cbiAgfSwgW10pO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGFwcGx5UHJvcGVydGllcyxcbiAgZ2V0UHJvcGVydGllcyxcbiAgZ2V0Q29udGV4dCxcbiAgYXNzaWduQ29udGV4dFxufTtcblxuZnVuY3Rpb24gY2hpbGRFbGVtZW50c0Zyb21FbGVtZW50QW5kUHJvcGVydGllcyhlbGVtZW50LCBwcm9wZXJ0aWVzKSB7XG4gIGxldCBjaGlsZEVsZW1lbnRzID0gbnVsbDtcblxuICBpZiAodHlwZW9mIGVsZW1lbnQuY2hpbGRFbGVtZW50cyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnQuY2hpbGRFbGVtZW50cy5jYWxsKGVsZW1lbnQsIHByb3BlcnRpZXMpO1xuXG4gICAgY2hpbGRFbGVtZW50cyA9IGd1YXJhbnRlZShjaGlsZEVsZW1lbnRzKTtcblxuICAgIGNoaWxkRWxlbWVudHMgPSByZW1vdmVGYWxzZXlFbGVtZW50cyhjaGlsZEVsZW1lbnRzKTtcblxuICAgIGNoaWxkRWxlbWVudHMgPSByZXBsYWNlU3RyaW5nc1dpdGhUZXh0RWxlbWVudHMoY2hpbGRFbGVtZW50cyk7XG4gIH1cblxuICByZXR1cm4gY2hpbGRFbGVtZW50cztcbn1cblxuZnVuY3Rpb24gdXBkYXRlQ29udGV4dChjaGlsZEVsZW1lbnQsIGNvbnRleHQpIHtcbiAgY29uc3QgcGFyZW50Q29udGV4dCA9ICh0eXBlb2YgY2hpbGRFbGVtZW50LnBhcmVudENvbnRleHQgPT09IFwiZnVuY3Rpb25cIikgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZEVsZW1lbnQucGFyZW50Q29udGV4dCgpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZEVsZW1lbnQuY29udGV4dDsgLy8vXG5cbiAgT2JqZWN0LmFzc2lnbihjb250ZXh0LCBwYXJlbnRDb250ZXh0KTtcblxuICBkZWxldGUgY2hpbGRFbGVtZW50LmNvbnRleHQ7XG59XG5cbmZ1bmN0aW9uIGFkZEhhbmRsZXIoZWxlbWVudCwgbmFtZSwgdmFsdWUpIHtcbiAgY29uc3QgZXZlbnRUeXBlID0gbmFtZS5zdWJzdHIoMikudG9Mb3dlckNhc2UoKSwgLy8vXG4gICAgICAgIGhhbmRsZXIgPSB2YWx1ZTsgIC8vL1xuXG4gIGVsZW1lbnQub24oZXZlbnRUeXBlLCBoYW5kbGVyKTtcbn1cblxuZnVuY3Rpb24gYWRkQXR0cmlidXRlKGVsZW1lbnQsIG5hbWUsIHZhbHVlKSB7XG4gIGlmIChuYW1lID09PSBcImNsYXNzTmFtZVwiKSB7XG4gICAgbmFtZSA9IFwiY2xhc3NcIjtcbiAgfVxuXG4gIGlmIChuYW1lID09PSBcImh0bWxGb3JcIikge1xuICAgIG5hbWUgPSBcImZvclwiO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIikge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSk7XG5cbiAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgZWxlbWVudC5kb21FbGVtZW50W25hbWVdW2tleV0gPSB2YWx1ZVtrZXldO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJib29sZWFuXCIpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHZhbHVlID0gbmFtZTsgLy8vXG5cbiAgICAgIGVsZW1lbnQuYWRkQXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudC5hZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzSGFuZGxlck5hbWUobmFtZSkge1xuICByZXR1cm4gbmFtZS5tYXRjaCgvXm9uLyk7XG59XG5cbmZ1bmN0aW9uIGlzQXR0cmlidXRlTmFtZShuYW1lLCBzdmcpIHtcbiAgcmV0dXJuIHN2ZyA/IGlzU1ZHQXR0cmlidXRlTmFtZShuYW1lKSA6IGlzSFRNTEF0dHJpYnV0ZU5hbWUobmFtZSlcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBvbktleVVwKGtleVVwSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uKFwia2V5dXBcIiwga2V5VXBIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvZmZLZXlVcChrZXlVcEhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vZmYoXCJrZXl1cFwiLCBrZXlVcEhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9uS2V5RG93bihrZXlEb3duSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uKFwia2V5ZG93blwiLCBrZXlEb3duSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb2ZmS2V5RG93bihrZXlEb3duSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZihcImtleWRvd25cIiwga2V5RG93bkhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgb25LZXlVcCxcbiAgb2ZmS2V5VXAsXG4gIG9uS2V5RG93bixcbiAgb2ZmS2V5RG93blxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBvbk1vdXNlVXAobW91c2VVcEhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vbihcIm1vdXNldXBcIiwgbW91c2VVcEhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9mZk1vdXNlVXAobW91c2VVcEhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vZmYoXCJtb3VzZXVwXCIsIG1vdXNlVXBIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvbk1vdXNlT3V0KG1vdXNlT3V0SGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uKFwibW91c2VvdXRcIiwgbW91c2VPdXRIYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvZmZNb3VzZU91dChtb3VzZU91dEhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vZmYoXCJtb3VzZW91dFwiLCBtb3VzZU91dEhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9uTW91c2VEb3duKG1vdXNlRG93bkhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vbihcIm1vdXNlZG93blwiLCBtb3VzZURvd25IYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvZmZNb3VzZURvd24obW91c2VEb3duSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9mZihcIm1vdXNlZG93blwiLCBtb3VzZURvd25IYW5kbGVyLCBlbGVtZW50KTsgfVxuXG5mdW5jdGlvbiBvbk1vdXNlT3Zlcihtb3VzZU92ZXJIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub24oXCJtb3VzZW92ZXJcIiwgbW91c2VPdmVySGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb2ZmTW91c2VPdmVyKG1vdXNlT3ZlckhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vZmYoXCJtb3VzZW92ZXJcIiwgbW91c2VPdmVySGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb25Nb3VzZU1vdmUobW91c2VNb3ZlSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uKFwibW91c2Vtb3ZlXCIsIG1vdXNlTW92ZUhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9mZk1vdXNlTW92ZShtb3VzZU1vdmVIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmKFwibW91c2Vtb3ZlXCIsIG1vdXNlTW92ZUhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgb25Nb3VzZVVwLFxuICBvZmZNb3VzZVVwLFxuICBvbk1vdXNlT3V0LFxuICBvZmZNb3VzZU91dCxcbiAgb25Nb3VzZURvd24sXG4gIG9mZk1vdXNlRG93bixcbiAgb25Nb3VzZU92ZXIsXG4gIG9mZk1vdXNlT3ZlcixcbiAgb25Nb3VzZU1vdmUsXG4gIG9mZk1vdXNlTW92ZVxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBvblJlc2l6ZShyZXNpemVIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub24oXCJyZXNpemVcIiwgcmVzaXplSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gb2ZmUmVzaXplKHJlc2l6ZUhhbmRsZXIsIGVsZW1lbnQpIHsgdGhpcy5vZmYoXCJyZXNpemVcIiwgcmVzaXplSGFuZGxlciwgZWxlbWVudCk7IH1cblxuZnVuY3Rpb24gYWRkUmVzaXplT2JqZWN0KCkge1xuICBjb25zdCByZXNpemVPYmplY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib2JqZWN0XCIpLFxuICAgICAgICBzdHlsZSA9IGBkaXNwbGF5OiBibG9jazsgXG4gICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gICAgICAgICAgICAgICAgIHRvcDogMDsgXG4gICAgICAgICAgICAgICAgIGxlZnQ6IDA7IFxuICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7IFxuICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTsgXG4gICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47IFxuICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgXG4gICAgICAgICAgICAgICAgIHotaW5kZXg6IC0xO2AsXG4gICAgICAgIGRhdGEgPSBcImFib3V0OmJsYW5rXCIsXG4gICAgICAgIHR5cGUgPSBcInRleHQvaHRtbFwiO1xuXG4gIHJlc2l6ZU9iamVjdC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBzdHlsZSk7XG4gIHJlc2l6ZU9iamVjdC5kYXRhID0gZGF0YTtcbiAgcmVzaXplT2JqZWN0LnR5cGUgPSB0eXBlO1xuXG4gIHRoaXMuX19yZXNpemVPYmplY3RfXyA9IHJlc2l6ZU9iamVjdDtcblxuICByZXNpemVPYmplY3Qub25sb2FkID0gKCkgPT4gcmVzaXplT2JqZWN0TG9hZEhhbmRsZXIodGhpcyk7XG5cbiAgdGhpcy5kb21FbGVtZW50LmFwcGVuZENoaWxkKHJlc2l6ZU9iamVjdCk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVJlc2l6ZU9iamVjdCgpIHtcbiAgY29uc3QgcmVzaXplT2JqZWN0ID0gdGhpcy5fX3Jlc2l6ZU9iamVjdF9fLFxuICAgICAgICBvYmplY3RXaW5kb3cgPSByZXNpemVPYmplY3QuY29udGVudERvY3VtZW50LmRlZmF1bHRWaWV3OyAgLy8vXG5cbiAgb2JqZWN0V2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgcmVzaXplRXZlbnRMaXN0ZW5lcik7XG5cbiAgdGhpcy5kb21FbGVtZW50LnJlbW92ZUNoaWxkKHJlc2l6ZU9iamVjdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgb25SZXNpemUsXG4gIG9mZlJlc2l6ZSxcbiAgYWRkUmVzaXplT2JqZWN0LFxuICByZW1vdmVSZXNpemVPYmplY3Rcbn07XG5cbmZ1bmN0aW9uIHJlc2l6ZU9iamVjdExvYWRIYW5kbGVyKGVsZW1lbnQpIHtcbiAgY29uc3QgcmVzaXplT2JqZWN0ID0gZWxlbWVudC5fX3Jlc2l6ZU9iamVjdF9fLFxuICAgICAgICByZXNpemVPYmplY3RXaW5kb3cgPSByZXNpemVPYmplY3QuY29udGVudERvY3VtZW50LmRlZmF1bHRWaWV3OyAgLy8vXG5cbiAgcmVzaXplT2JqZWN0V2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgcmVzaXplRXZlbnRMaXN0ZW5lcnMgPSBlbGVtZW50LmZpbmRFdmVudExpc3RlbmVycyhcInJlc2l6ZVwiKTtcblxuICAgIHJlc2l6ZUV2ZW50TGlzdGVuZXJzLmZvckVhY2goKHJlc2l6ZUV2ZW50TGlzdGVuZXIpID0+IHJlc2l6ZUV2ZW50TGlzdGVuZXIoZXZlbnQpKTtcbiAgfSk7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gb25TY3JvbGwoc2Nyb2xsSGFuZGxlciwgZWxlbWVudCkgeyB0aGlzLm9uKFwic2Nyb2xsXCIsIHNjcm9sbEhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIG9mZlNjcm9sbChzY3JvbGxIYW5kbGVyLCBlbGVtZW50KSB7IHRoaXMub2ZmKFwic2Nyb2xsXCIsIHNjcm9sbEhhbmRsZXIsIGVsZW1lbnQpOyB9XG5cbmZ1bmN0aW9uIGdldFNjcm9sbFRvcCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5zY3JvbGxUb3A7IH1cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsTGVmdCgpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5zY3JvbGxMZWZ0OyB9XG5cbmZ1bmN0aW9uIHNldFNjcm9sbFRvcChzY3JvbGxUb3ApIHsgdGhpcy5kb21FbGVtZW50LnNjcm9sbFRvcCA9IHNjcm9sbFRvcDsgfVxuXG5mdW5jdGlvbiBzZXRTY3JvbGxMZWZ0KHNjcm9sbExlZnQpIHsgdGhpcy5kb21FbGVtZW50LnNjcm9sbExlZnQgPSBzY3JvbGxMZWZ0OyB9XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgb25TY3JvbGwsXG4gIG9mZlNjcm9sbCxcbiAgZ2V0U2Nyb2xsVG9wLFxuICBnZXRTY3JvbGxMZWZ0LFxuICBzZXRTY3JvbGxUb3AsXG4gIHNldFNjcm9sbExlZnRcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gZ2V0U3RhdGUoKSB7XG4gIHJldHVybiB0aGlzLnN0YXRlO1xufVxuXG5mdW5jdGlvbiBzZXRTdGF0ZShzdGF0ZSkge1xuICB0aGlzLnN0YXRlID0gc3RhdGU7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVN0YXRlKHN0YXRlKSB7XG4gIE9iamVjdC5hc3NpZ24odGhpcy5zdGF0ZSwgc3RhdGUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGdldFN0YXRlLFxuICBzZXRTdGF0ZSxcbiAgdXBkYXRlU3RhdGVcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4vZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBmbGF0dGVuIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyByZW1vdmVGYWxzZXlFbGVtZW50cywgcmVwbGFjZVN0cmluZ3NXaXRoVGV4dEVsZW1lbnRzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2VsZW1lbnRzXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoZmlyc3RBcmd1bWVudCwgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gIGxldCBlbGVtZW50ID0gbnVsbDtcblxuICBpZiAoZmlyc3RBcmd1bWVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IGNoaWxkRWxlbWVudHNGcm9tUmVtYWluaW5nQXJndW1lbnRzKHJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICBwcm9wZXJ0aWVzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICBjaGlsZEVsZW1lbnRzXG4gICAgfSwgcHJvcGVydGllcyk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAoaXNTdWJjbGFzc09mKGZpcnN0QXJndW1lbnQsIEVsZW1lbnQpKSB7XG4gICAgICBjb25zdCBDbGFzcyA9IGZpcnN0QXJndW1lbnQ7ICAvLy9cblxuICAgICAgZWxlbWVudCA9IENsYXNzLmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgY29uc3QgdGFnTmFtZSA9IGZpcnN0QXJndW1lbnQ7IC8vL1xuXG4gICAgICBlbGVtZW50ID0gRWxlbWVudC5mcm9tVGFnTmFtZSh0YWdOYW1lLCBwcm9wZXJ0aWVzKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnRGdW5jdGlvbiA9IGZpcnN0QXJndW1lbnQ7ICAvLy9cblxuICAgICAgZWxlbWVudCA9IGVsZW1lbnRGdW5jdGlvbihwcm9wZXJ0aWVzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuY29uc3QgUmVhY3QgPSB7XG4gIGNyZWF0ZUVsZW1lbnRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0O1xuXG5mdW5jdGlvbiBjaGlsZEVsZW1lbnRzRnJvbVJlbWFpbmluZ0FyZ3VtZW50cyhyZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgcmVtYWluaW5nQXJndW1lbnRzID0gZmxhdHRlbihyZW1haW5pbmdBcmd1bWVudHMpOyAvLy9cblxuICBsZXQgY2hpbGRFbGVtZW50cyA9IHJlbWFpbmluZ0FyZ3VtZW50czsgLy8vXG5cbiAgY2hpbGRFbGVtZW50cyA9IHJlbW92ZUZhbHNleUVsZW1lbnRzKGNoaWxkRWxlbWVudHMpO1xuXG4gIGNoaWxkRWxlbWVudHMgPSByZXBsYWNlU3RyaW5nc1dpdGhUZXh0RWxlbWVudHMoY2hpbGRFbGVtZW50cyk7XG5cbiAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG59XG5cbmZ1bmN0aW9uIGlzU3ViY2xhc3NPZihhcmd1bWVudCwgQ2xhc3MpIHtcbiAgbGV0IHR5cGVPZiA9IGZhbHNlO1xuXG4gIGlmIChhcmd1bWVudC5uYW1lID09PSBDbGFzcy5uYW1lKSB7IC8vL1xuICAgIHR5cGVPZiA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgYXJndW1lbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoYXJndW1lbnQpOyAvLy9cblxuICAgIGlmIChhcmd1bWVudCkge1xuICAgICAgdHlwZU9mID0gaXNTdWJjbGFzc09mKGFyZ3VtZW50LCBDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHR5cGVPZjtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgT2Zmc2V0IGZyb20gXCIuL21pc2NlbGxhbmVvdXMvb2Zmc2V0XCI7XG5pbXBvcnQgQm91bmRzIGZyb20gXCIuL21pc2NlbGxhbmVvdXMvYm91bmRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRFbGVtZW50IHtcbiAgY29uc3RydWN0b3IodGV4dCkge1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpOyAvLy9cblxuICAgIHRoaXMuZG9tRWxlbWVudC5fX2VsZW1lbnRfXyA9IHRoaXM7XG4gIH1cblxuICBnZXRUZXh0KCkge1xuICAgIGNvbnN0IG5vZGVWYWx1ZSA9IHRoaXMuZG9tRWxlbWVudC5ub2RlVmFsdWUsXG4gICAgICAgICAgdGV4dCA9IG5vZGVWYWx1ZTsgLy8vXG5cbiAgICByZXR1cm4gdGV4dDtcbiAgfVxuXG4gIHNldFRleHQodGV4dCkge1xuICAgIGNvbnN0IG5vZGVWYWx1ZSA9IHRleHQ7IC8vL1xuXG4gICAgdGhpcy5kb21FbGVtZW50Lm5vZGVWYWx1ZSA9IG5vZGVWYWx1ZTtcbiAgfVxuXG4gIGdldE9mZnNldCgpIHtcbiAgICBjb25zdCB0b3AgPSB0aGlzLmRvbUVsZW1lbnQub2Zmc2V0VG9wLCAgLy8vXG4gICAgICAgICAgbGVmdCA9IHRoaXMuZG9tRWxlbWVudC5vZmZzZXRMZWZ0LCAgLy8vXG4gICAgICAgICAgb2Zmc2V0ID0gbmV3IE9mZnNldCh0b3AsIGxlZnQpO1xuXG4gICAgcmV0dXJuIG9mZnNldDtcbiAgfVxuXG4gIGdldEJvdW5kcygpIHtcbiAgICBjb25zdCBib3VuZGluZ0NsaWVudFJlY3QgPSB0aGlzLmRvbUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgYm91bmRzID0gQm91bmRzLmZyb21Cb3VuZGluZ0NsaWVudFJlY3QoYm91bmRpbmdDbGllbnRSZWN0KTtcblxuICAgIHJldHVybiBib3VuZHM7XG4gIH1cblxuICBnZXRXaWR0aCgpIHtcbiAgICBjb25zdCBjbGllbnRXaWR0aCA9IHRoaXMuZG9tRWxlbWVudC5jbGllbnRXaWR0aCxcbiAgICAgICAgICB3aWR0aCA9IGNsaWVudFdpZHRoOyAgLy8vXG5cbiAgICByZXR1cm4gd2lkdGg7XG4gIH1cblxuICBnZXRIZWlnaHQoKSB7XG4gICAgY29uc3QgY2xpZW50SGVpZ2h0ID0gdGhpcy5kb21FbGVtZW50LmNsaWVudEhlaWdodCxcbiAgICAgICAgICBoZWlnaHQgPSBjbGllbnRIZWlnaHQ7ICAvLy9cblxuICAgIHJldHVybiBoZWlnaHQ7XG4gIH1cblxuICBwcmVwZW5kVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LnByZXBlbmQodGhpcyk7IH1cblxuICBhcHBlbmRUbyhwYXJlbnRFbGVtZW50KSB7IHBhcmVudEVsZW1lbnQuYXBwZW5kKHRoaXMpOyB9XG5cbiAgYWRkVG8ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LmFkZCh0aGlzKTsgfVxuXG4gIHJlbW92ZUZyb20ocGFyZW50RWxlbWVudCkgeyBwYXJlbnRFbGVtZW50LnJlbW92ZSh0aGlzKTsgfVxuXG4gIGluc2VydEJlZm9yZShzaWJsaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgcGFyZW50RE9NTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudCk7XG4gIH1cblxuICBpbnNlcnRBZnRlcihzaWJsaW5nRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudERPTU5vZGUgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICAgICAgc2libGluZ0RPTUVsZW1lbnQgPSBzaWJsaW5nRWxlbWVudC5kb21FbGVtZW50O1xuXG4gICAgcGFyZW50RE9NTm9kZS5pbnNlcnRCZWZvcmUodGhpcy5kb21FbGVtZW50LCBzaWJsaW5nRE9NRWxlbWVudC5uZXh0U2libGluZyk7ICAvLy9cbiAgfVxuXG4gIHJlbW92ZSgpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlKCk7XG4gIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBzcGxpY2UoYXJyYXkxLCBzdGFydCwgZGVsZXRlQ291bnQgPSBJbmZpbml0eSwgYXJyYXkyID0gW10pIHtcbiAgY29uc3QgYXJncyA9IFtzdGFydCwgZGVsZXRlQ291bnQsIC4uLmFycmF5Ml0sXG4gICAgICAgZGVsZXRlZEl0ZW1zQXJyYXkgPSBBcnJheS5wcm90b3R5cGUuc3BsaWNlLmFwcGx5KGFycmF5MSwgYXJncyk7XG5cbiAgcmV0dXJuIGRlbGV0ZWRJdGVtc0FycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmxhdHRlbihhcnJheSkge1xuICByZXR1cm4gYXJyYXkucmVkdWNlKChhcnJheSwgZWxlbWVudCkgPT4ge1xuICAgIGFycmF5ID0gYXJyYXkuY29uY2F0KGVsZW1lbnQpOyAgLy8vXG5cbiAgICByZXR1cm4gYXJyYXk7XG4gIH0sIFtdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGd1YXJhbnRlZShhcnJheU9yRWxlbWVudCkge1xuICBhcnJheU9yRWxlbWVudCA9IGFycmF5T3JFbGVtZW50IHx8IFtdO1xuXG4gIHJldHVybiAoYXJyYXlPckVsZW1lbnQgaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICAgYXJyYXlPckVsZW1lbnQgOlxuICAgICAgICAgICAgICBbYXJyYXlPckVsZW1lbnRdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXVnbWVudChhcnJheTEsIGFycmF5MiwgdGVzdCkge1xuICBhcnJheTIuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIGFycmF5MS5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgfSk7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BsaWNlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZWxlbWVudHNGcm9tRE9NRWxlbWVudHMoZG9tRWxlbWVudHMpIHtcbiAgY29uc3QgZG9tRWxlbWVudHNXaXRoRWxlbWVudHMgPSBmaWx0ZXJET01Ob2Rlcyhkb21FbGVtZW50cywgKGRvbUVsZW1lbnQpID0+IChkb21FbGVtZW50Ll9fZWxlbWVudF9fICE9PSB1bmRlZmluZWQpKSxcbiAgICAgICAgZWxlbWVudHMgPSBkb21FbGVtZW50c1dpdGhFbGVtZW50cy5tYXAoKGRvbUVsZW1lbnQpID0+IGRvbUVsZW1lbnQuX19lbGVtZW50X18pO1xuXG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlKGRvbU5vZGUsIGRlc2NlbmRhbnRET01Ob2RlcyA9IFtdKSB7XG4gIGNvbnN0IHN0YXJ0ID0gLTEsXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gMCxcbiAgICAgICAgY2hpbGRET01Ob2RlcyA9IGRvbU5vZGUuY2hpbGROb2RlczsgIC8vL1xuXG4gIHNwbGljZShkZXNjZW5kYW50RE9NTm9kZXMsIHN0YXJ0LCBkZWxldGVDb3VudCwgY2hpbGRET01Ob2Rlcyk7XG5cbiAgY2hpbGRET01Ob2Rlcy5mb3JFYWNoKChjaGlsZERPTU5vZGUpID0+IGRlc2NlbmRhbnRET01Ob2Rlc0Zyb21ET01Ob2RlKGNoaWxkRE9NTm9kZSwgZGVzY2VuZGFudERPTU5vZGVzKSk7XG5cbiAgcmV0dXJuIGRlc2NlbmRhbnRET01Ob2Rlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckRPTU5vZGVzQnlTZWxlY3Rvcihkb21Ob2Rlcywgc2VsZWN0b3IpIHtcbiAgY29uc3QgZmlsdGVyZWRET01Ob2RlcyA9IGZpbHRlckRPTU5vZGVzKGRvbU5vZGVzLCAoZG9tTm9kZSkgPT4gZG9tTm9kZU1hdGNoZXNTZWxlY3Rvcihkb21Ob2RlLCBzZWxlY3RvcikpO1xuXG4gIHJldHVybiBmaWx0ZXJlZERPTU5vZGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZG9tTm9kZU1hdGNoZXNTZWxlY3Rvcihkb21Ob2RlLCBzZWxlY3Rvcikge1xuICBjb25zdCBkb21Ob2RlVHlwZSA9IGRvbU5vZGUubm9kZVR5cGU7XG5cbiAgc3dpdGNoIChkb21Ob2RlVHlwZSkge1xuICAgIGNhc2UgTm9kZS5FTEVNRU5UX05PREUgOiB7XG4gICAgICBjb25zdCBkb21FbGVtZW50ID0gZG9tTm9kZTsgLy8vXG5cbiAgICAgIHJldHVybiBkb21FbGVtZW50Lm1hdGNoZXMoc2VsZWN0b3IpO1xuICAgIH1cblxuICAgIGNhc2UgTm9kZS5URVhUX05PREUgOiB7XG4gICAgICBpZiAoc2VsZWN0b3IgPT09IFwiKlwiKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckRPTU5vZGVzKGRvbU5vZGVzLCB0ZXN0KSB7XG4gIGNvbnN0IGZpbHRlcmVkRE9NTm9kZXMgPSBbXSxcbiAgICAgICAgZG9tTm9kZXNMZW5ndGggPSBkb21Ob2Rlcy5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGRvbU5vZGVzTGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZG9tTm9kZSA9IGRvbU5vZGVzW2luZGV4XSxcbiAgICAgICAgICByZXN1bHQgPSB0ZXN0KGRvbU5vZGUpO1xuXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgZmlsdGVyZWRET01Ob2Rlcy5wdXNoKGRvbU5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmaWx0ZXJlZERPTU5vZGVzO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUZXh0RWxlbWVudCBmcm9tIFwiLi4vdGV4dEVsZW1lbnRcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUZhbHNleUVsZW1lbnRzKGVsZW1lbnRzKSB7XG4gIGVsZW1lbnRzID0gZWxlbWVudHMucmVkdWNlKChlbGVtZW50cywgZWxlbWVudCkgPT4ge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50cztcbiAgfSwgW10pO1xuXG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VTdHJpbmdzV2l0aFRleHRFbGVtZW50cyhlbGVtZW50cykge1xuICBlbGVtZW50cyA9IGVsZW1lbnRzLm1hcCgoZWxlbWVudCkgPT4geyAgLy8vXG4gICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBjb25zdCB0ZXh0ID0gZWxlbWVudCwgIC8vL1xuICAgICAgICAgICAgdGV4dEVsZW1lbnQgPSBuZXcgVGV4dEVsZW1lbnQodGV4dCk7XG5cbiAgICAgIGVsZW1lbnQgPSB0ZXh0RWxlbWVudDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH0pO1xuXG4gIHJldHVybiBlbGVtZW50cztcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNTVkdUYWdOYW1lKHRhZ05hbWUpIHtcbiAgcmV0dXJuIHN2Z1RhZ05hbWVzLmluY2x1ZGVzKHRhZ05hbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTVkdBdHRyaWJ1dGVOYW1lKGF0dHJpYnV0ZU5hbWUpIHtcbiAgcmV0dXJuIHN2Z0F0dHJpYnV0ZU5hbWVzLmluY2x1ZGVzKGF0dHJpYnV0ZU5hbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNIVE1MQXR0cmlidXRlTmFtZShhdHRyaWJ1dGVOYW1lKSB7XG4gIHJldHVybiBodG1sQXR0cmlidXRlTmFtZXMuaW5jbHVkZXMoYXR0cmlidXRlTmFtZSk7XG59XG5cbmNvbnN0IHN2Z1RhZ05hbWVzID0gW1xuICAgICAgICBcImFsdEdseXBoXCIsIFwiYW5pbWF0ZVwiLCBcImFuaW1hdGVDb2xvclwiLCBcImFuaW1hdGVNb3Rpb25cIiwgXCJhbmltYXRlVHJhbnNmb3JtXCIsIFwiYW5pbWF0aW9uXCIsIFwiYXVkaW9cIixcbiAgICAgICAgXCJjaXJjbGVcIiwgXCJjbGlwUGF0aFwiLCBcImNvbG9yLXByb2ZpbGVcIiwgXCJjdXJzb3JcIixcbiAgICAgICAgXCJkZWZzXCIsIFwiZGVzY1wiLCBcImRpc2NhcmRcIixcbiAgICAgICAgXCJlbGxpcHNlXCIsXG4gICAgICAgIFwiZmVCbGVuZFwiLCBcImZlQ29sb3JNYXRyaXhcIiwgXCJmZUNvbXBvbmVudFRyYW5zZmVyXCIsIFwiZmVDb21wb3NpdGVcIiwgXCJmZUNvbnZvbHZlTWF0cml4XCIsIFwiZmVEaWZmdXNlTGlnaHRpbmdcIiwgXCJmZURpc3BsYWNlbWVudE1hcFwiLCBcImZlRGlzdGFudExpZ2h0XCIsIFwiZmVEcm9wU2hhZG93XCIsIFwiZmVGbG9vZFwiLCBcImZlRnVuY0FcIiwgXCJmZUZ1bmNCXCIsIFwiZmVGdW5jR1wiLCBcImZlRnVuY1JcIiwgXCJmZUdhdXNzaWFuQmx1clwiLCBcImZlSW1hZ2VcIiwgXCJmZU1lcmdlXCIsIFwiZmVNZXJnZU5vZGVcIiwgXCJmZU1vcnBob2xvZ3lcIiwgXCJmZU9mZnNldFwiLCBcImZlUG9pbnRMaWdodFwiLCBcImZlU3BlY3VsYXJMaWdodGluZ1wiLCBcImZlU3BvdExpZ2h0XCIsIFwiZmVUaWxlXCIsIFwiZmVUdXJidWxlbmNlXCIsIFwiZmlsdGVyXCIsIFwiZm9udFwiLCBcImZvbnQtZmFjZVwiLCBcImZvbnQtZmFjZS1mb3JtYXRcIiwgXCJmb250LWZhY2UtbmFtZVwiLCBcImZvbnQtZmFjZS11cmlcIiwgXCJmb3JlaWduT2JqZWN0XCIsXG4gICAgICAgIFwiZ1wiLCBcImdseXBoXCIsIFwiZ2x5cGhSZWZcIixcbiAgICAgICAgXCJoYW5kbGVyXCIsIFwiaGF0Y2hcIiwgXCJoYXRjaHBhdGhcIiwgXCJoa2VyblwiLFxuICAgICAgICBcImltYWdlXCIsIFwibGluZVwiLCBcImxpbmVhckdyYWRpZW50XCIsXG4gICAgICAgIFwibGlzdGVuZXJcIixcbiAgICAgICAgXCJtYXJrZXJcIiwgXCJtYXNrXCIsIFwibWVzaFwiLCBcIm1lc2hncmFkaWVudFwiLCBcIm1lc2hwYXRjaFwiLCBcIm1lc2hyb3dcIiwgXCJtZXRhZGF0YVwiLCBcIm1pc3NpbmctZ2x5cGhcIiwgXCJtcGF0aFwiLFxuICAgICAgICBcInBhdGhcIiwgXCJwYXR0ZXJuXCIsIFwicG9seWdvblwiLCBcInBvbHlsaW5lXCIsIFwicHJlZmV0Y2hcIixcbiAgICAgICAgXCJyYWRpYWxHcmFkaWVudFwiLCBcInJlY3RcIixcbiAgICAgICAgXCJzY3JpcHRcIiwgXCJzZXRcIiwgXCJzb2xpZGNvbG9yXCIsIFwic3RvcFwiLCBcInN0eWxlXCIsIFwic3ZnXCIsIFwic3dpdGNoXCIsIFwic3ltYm9sXCIsXG4gICAgICAgIFwidGJyZWFrXCIsIFwidGV4dFwiLCBcInRleHRBcmVhXCIsIFwidGV4dFBhdGhcIiwgXCJ0aXRsZVwiLCBcInRyZWZcIiwgXCJ0c3BhblwiLFxuICAgICAgICBcInVua25vd25cIiwgXCJ1c2VcIixcbiAgICAgICAgXCJ2aWRlb1wiLCBcInZpZXdcIiwgXCJ2a2VyblwiXG4gICAgICBdLFxuICAgICAgc3ZnQXR0cmlidXRlTmFtZXMgPSBbXG4gICAgICAgIFwiYWNjZW50LWhlaWdodFwiLCBcImFjY3VtdWxhdGVcIiwgXCJhZGRpdGl2ZVwiLCBcImFsaWdubWVudC1iYXNlbGluZVwiLCBcImFscGhhYmV0aWNcIiwgXCJhbXBsaXR1ZGVcIiwgXCJhcmFiaWMtZm9ybVwiLCBcImFzY2VudFwiLCBcImF0dHJpYnV0ZU5hbWVcIiwgXCJhdHRyaWJ1dGVUeXBlXCIsIFwiYXppbXV0aFwiLFxuICAgICAgICBcImJhbmR3aWR0aFwiLCBcImJhc2VGcmVxdWVuY3lcIiwgXCJiYXNlUHJvZmlsZVwiLCBcImJhc2VsaW5lLXNoaWZ0XCIsIFwiYmJveFwiLCBcImJlZ2luXCIsIFwiYmlhc1wiLCBcImJ5XCIsXG4gICAgICAgIFwiY2FsY01vZGVcIiwgXCJjYXAtaGVpZ2h0XCIsIFwiY2xpcFwiLCBcImNsYXNzTmFtZVwiLCBcImNsaXAtcGF0aFwiLCBcImNsaXAtcnVsZVwiLCBcImNsaXBQYXRoVW5pdHNcIiwgXCJjb2xvclwiLCBcImNvbG9yLWludGVycG9sYXRpb25cIiwgXCJjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnNcIiwgXCJjb2xvci1wcm9maWxlXCIsIFwiY29sb3ItcmVuZGVyaW5nXCIsIFwiY29udGVudFNjcmlwdFR5cGVcIiwgXCJjb250ZW50U3R5bGVUeXBlXCIsIFwiY3Jvc3NvcmlnaW5cIiwgXCJjdXJzb3JcIiwgXCJjeFwiLCBcImN5XCIsXG4gICAgICAgIFwiZFwiLCBcImRlZmF1bHRBY3Rpb25cIiwgXCJkZXNjZW50XCIsIFwiZGlmZnVzZUNvbnN0YW50XCIsIFwiZGlyZWN0aW9uXCIsIFwiZGlzcGxheVwiLCBcImRpdmlzb3JcIiwgXCJkb21pbmFudC1iYXNlbGluZVwiLCBcImRvd25sb2FkXCIsIFwiZHVyXCIsIFwiZHhcIiwgXCJkeVwiLFxuICAgICAgICBcImVkZ2VNb2RlXCIsIFwiZWRpdGFibGVcIiwgXCJlbGV2YXRpb25cIiwgXCJlbmFibGUtYmFja2dyb3VuZFwiLCBcImVuZFwiLCBcImV2ZW50XCIsIFwiZXhwb25lbnRcIiwgXCJleHRlcm5hbFJlc291cmNlc1JlcXVpcmVkXCIsXG4gICAgICAgIFwiZmlsbFwiLCBcImZpbGwtb3BhY2l0eVwiLCBcImZpbGwtcnVsZVwiLCBcImZpbHRlclwiLCBcImZpbHRlclJlc1wiLCBcImZpbHRlclVuaXRzXCIsIFwiZmxvb2QtY29sb3JcIiwgXCJmbG9vZC1vcGFjaXR5XCIsIFwiZm9jdXNIaWdobGlnaHRcIiwgXCJmb2N1c2FibGVcIiwgXCJmb250LWZhbWlseVwiLCBcImZvbnQtc2l6ZVwiLCBcImZvbnQtc2l6ZS1hZGp1c3RcIiwgXCJmb250LXN0cmV0Y2hcIiwgXCJmb250LXN0eWxlXCIsIFwiZm9udC12YXJpYW50XCIsIFwiZm9udC13ZWlnaHRcIiwgXCJmb3JtYXRcIiwgXCJmclwiLCBcImZyb21cIiwgXCJmeFwiLCBcImZ5XCIsXG4gICAgICAgIFwiZzFcIiwgXCJnMlwiLCBcImdseXBoLW5hbWVcIiwgXCJnbHlwaC1vcmllbnRhdGlvbi1ob3Jpem9udGFsXCIsIFwiZ2x5cGgtb3JpZW50YXRpb24tdmVydGljYWxcIiwgXCJnbHlwaFJlZlwiLCBcImdyYWRpZW50VHJhbnNmb3JtXCIsIFwiZ3JhZGllbnRVbml0c1wiLFxuICAgICAgICBcImhhbmRsZXJcIiwgXCJoYW5naW5nXCIsIFwiaGF0Y2hDb250ZW50VW5pdHNcIiwgXCJoYXRjaFVuaXRzXCIsIFwiaGVpZ2h0XCIsIFwiaG9yaXotYWR2LXhcIiwgXCJob3Jpei1vcmlnaW4teFwiLCBcImhvcml6LW9yaWdpbi15XCIsIFwiaHJlZlwiLCBcImhyZWZsYW5nXCIsXG4gICAgICAgIFwiaWRlb2dyYXBoaWNcIiwgXCJpbWFnZS1yZW5kZXJpbmdcIiwgXCJpblwiLCBcImluMlwiLCBcImluaXRpYWxWaXNpYmlsaXR5XCIsIFwiaW50ZXJjZXB0XCIsXG4gICAgICAgIFwia1wiLCBcImsxXCIsIFwiazJcIiwgXCJrM1wiLCBcIms0XCIsIFwia2VybmVsTWF0cml4XCIsIFwia2VybmVsVW5pdExlbmd0aFwiLCBcImtlcm5pbmdcIiwgXCJrZXlQb2ludHNcIiwgXCJrZXlTcGxpbmVzXCIsIFwia2V5VGltZXNcIixcbiAgICAgICAgXCJsZW5ndGhBZGp1c3RcIiwgXCJsZXR0ZXItc3BhY2luZ1wiLCBcImxpZ2h0aW5nLWNvbG9yXCIsIFwibGltaXRpbmdDb25lQW5nbGVcIiwgXCJsb2NhbFwiLFxuICAgICAgICBcIm1hcmtlci1lbmRcIiwgXCJtYXJrZXItbWlkXCIsIFwibWFya2VyLXN0YXJ0XCIsIFwibWFya2VySGVpZ2h0XCIsIFwibWFya2VyVW5pdHNcIiwgXCJtYXJrZXJXaWR0aFwiLCBcIm1hc2tcIiwgXCJtYXNrQ29udGVudFVuaXRzXCIsIFwibWFza1VuaXRzXCIsIFwibWF0aGVtYXRpY2FsXCIsIFwibWF4XCIsIFwibWVkaWFcIiwgXCJtZWRpYUNoYXJhY3RlckVuY29kaW5nXCIsIFwibWVkaWFDb250ZW50RW5jb2RpbmdzXCIsIFwibWVkaWFTaXplXCIsIFwibWVkaWFUaW1lXCIsIFwibWV0aG9kXCIsIFwibWluXCIsIFwibW9kZVwiLFxuICAgICAgICBcIm5hbWVcIiwgXCJuYXYtZG93blwiLCBcIm5hdi1kb3duLWxlZnRcIiwgXCJuYXYtZG93bi1yaWdodFwiLCBcIm5hdi1sZWZ0XCIsIFwibmF2LW5leHRcIiwgXCJuYXYtcHJldlwiLCBcIm5hdi1yaWdodFwiLCBcIm5hdi11cFwiLCBcIm5hdi11cC1sZWZ0XCIsIFwibmF2LXVwLXJpZ2h0XCIsIFwibnVtT2N0YXZlc1wiLFxuICAgICAgICBcIm9ic2VydmVyXCIsIFwib2Zmc2V0XCIsIFwib3BhY2l0eVwiLCBcIm9wZXJhdG9yXCIsIFwib3JkZXJcIiwgXCJvcmllbnRcIiwgXCJvcmllbnRhdGlvblwiLCBcIm9yaWdpblwiLCBcIm92ZXJmbG93XCIsIFwib3ZlcmxheVwiLCBcIm92ZXJsaW5lLXBvc2l0aW9uXCIsIFwib3ZlcmxpbmUtdGhpY2tuZXNzXCIsXG4gICAgICAgIFwicGFub3NlLTFcIiwgXCJwYXRoXCIsIFwicGF0aExlbmd0aFwiLCBcInBhdHRlcm5Db250ZW50VW5pdHNcIiwgXCJwYXR0ZXJuVHJhbnNmb3JtXCIsIFwicGF0dGVyblVuaXRzXCIsIFwicGhhc2VcIiwgXCJwaXRjaFwiLCBcInBsYXliYWNrT3JkZXJcIiwgXCJwbGF5YmFja29yZGVyXCIsIFwicG9pbnRlci1ldmVudHNcIiwgXCJwb2ludHNcIiwgXCJwb2ludHNBdFhcIiwgXCJwb2ludHNBdFlcIiwgXCJwb2ludHNBdFpcIiwgXCJwcmVzZXJ2ZUFscGhhXCIsIFwicHJlc2VydmVBc3BlY3RSYXRpb1wiLCBcInByaW1pdGl2ZVVuaXRzXCIsIFwicHJvcGFnYXRlXCIsXG4gICAgICAgIFwiclwiLCBcInJhZGl1c1wiLCBcInJlZlhcIiwgXCJyZWZZXCIsIFwicmVuZGVyaW5nLWludGVudFwiLCBcInJlcGVhdENvdW50XCIsIFwicmVwZWF0RHVyXCIsIFwicmVxdWlyZWRFeHRlbnNpb25zXCIsIFwicmVxdWlyZWRGZWF0dXJlc1wiLCBcInJlcXVpcmVkRm9udHNcIiwgXCJyZXF1aXJlZEZvcm1hdHNcIiwgXCJyZXN0YXJ0XCIsIFwicmVzdWx0XCIsIFwicm90YXRlXCIsIFwicnhcIiwgXCJyeVwiLFxuICAgICAgICBcInNjYWxlXCIsIFwic2VlZFwiLCBcInNoYXBlLXJlbmRlcmluZ1wiLCBcInNpZGVcIiwgXCJzbG9wZVwiLCBcInNuYXBzaG90VGltZVwiLCBcInNwYWNpbmdcIiwgXCJzcGVjdWxhckNvbnN0YW50XCIsIFwic3BlY3VsYXJFeHBvbmVudFwiLCBcInNwcmVhZE1ldGhvZFwiLCBcInNyY1wiLCBcInN0YXJ0T2Zmc2V0XCIsIFwic3RkRGV2aWF0aW9uXCIsIFwic3RlbWhcIiwgXCJzdGVtdlwiLCBcInN0aXRjaFRpbGVzXCIsIFwic3RvcC1jb2xvclwiLCBcInN0b3Atb3BhY2l0eVwiLCBcInN0cmlrZXRocm91Z2gtcG9zaXRpb25cIiwgXCJzdHJpa2V0aHJvdWdoLXRoaWNrbmVzc1wiLCBcInN0cmluZ1wiLCBcInN0cm9rZVwiLCBcInN0cm9rZS1kYXNoYXJyYXlcIiwgXCJzdHJva2UtZGFzaG9mZnNldFwiLCBcInN0cm9rZS1saW5lY2FwXCIsIFwic3Ryb2tlLWxpbmVqb2luXCIsIFwic3Ryb2tlLW1pdGVybGltaXRcIiwgXCJzdHJva2Utb3BhY2l0eVwiLCBcInN0cm9rZS13aWR0aFwiLCBcInN0eWxlXCIsIFwic3VyZmFjZVNjYWxlXCIsIFwic3luY0JlaGF2aW9yXCIsIFwic3luY0JlaGF2aW9yRGVmYXVsdFwiLCBcInN5bmNNYXN0ZXJcIiwgXCJzeW5jVG9sZXJhbmNlXCIsIFwic3luY1RvbGVyYW5jZURlZmF1bHRcIiwgXCJzeXN0ZW1MYW5ndWFnZVwiLFxuICAgICAgICBcInRhYmxlVmFsdWVzXCIsIFwidGFyZ2V0XCIsIFwidGFyZ2V0WFwiLCBcInRhcmdldFlcIiwgXCJ0ZXh0LWFuY2hvclwiLCBcInRleHQtZGVjb3JhdGlvblwiLCBcInRleHQtcmVuZGVyaW5nXCIsIFwidGV4dExlbmd0aFwiLCBcInRpbWVsaW5lQmVnaW5cIiwgXCJ0aW1lbGluZWJlZ2luXCIsIFwidGl0bGVcIiwgXCJ0b1wiLCBcInRyYW5zZm9ybVwiLCBcInRyYW5zZm9ybUJlaGF2aW9yXCIsIFwidHlwZVwiLFxuICAgICAgICBcInUxXCIsIFwidTJcIiwgXCJ1bmRlcmxpbmUtcG9zaXRpb25cIiwgXCJ1bmRlcmxpbmUtdGhpY2tuZXNzXCIsIFwidW5pY29kZVwiLCBcInVuaWNvZGUtYmlkaVwiLCBcInVuaWNvZGUtcmFuZ2VcIiwgXCJ1bml0cy1wZXItZW1cIixcbiAgICAgICAgXCJ2LWFscGhhYmV0aWNcIiwgXCJ2LWhhbmdpbmdcIiwgXCJ2LWlkZW9ncmFwaGljXCIsIFwidi1tYXRoZW1hdGljYWxcIiwgXCJ2YWx1ZXNcIiwgXCJ2ZXJzaW9uXCIsIFwidmVydC1hZHYteVwiLCBcInZlcnQtb3JpZ2luLXhcIiwgXCJ2ZXJ0LW9yaWdpbi15XCIsIFwidmlld0JveFwiLCBcInZpZXdUYXJnZXRcIiwgXCJ2aXNpYmlsaXR5XCIsXG4gICAgICAgIFwid2lkdGhcIiwgXCJ3aWR0aHNcIiwgXCJ3b3JkLXNwYWNpbmdcIiwgXCJ3cml0aW5nLW1vZGVcIixcbiAgICAgICAgXCJ4XCIsIFwieC1oZWlnaHRcIiwgXCJ4MVwiLCBcIngyXCIsIFwieENoYW5uZWxTZWxlY3RvclwiLFxuICAgICAgICBcInlcIiwgXCJ5MVwiLCBcInkyXCIsIFwieUNoYW5uZWxTZWxlY3RvclwiLFxuICAgICAgICBcInpcIiwgXCJ6b29tQW5kUGFuXCJcbiAgICAgIF0sXG4gICAgICBodG1sQXR0cmlidXRlTmFtZXMgPSBbXG4gICAgICAgIFwiYWNjZXB0XCIsIFwiYWNjZXB0Q2hhcnNldFwiLCBcImFjY2Vzc0tleVwiLCBcImFjdGlvblwiLCBcImFsbG93XCIsIFwiYWxsb3dGdWxsU2NyZWVuXCIsIFwiYWxsb3dUcmFuc3BhcmVuY3lcIiwgXCJhbHRcIiwgXCJhc3luY1wiLCBcImF1dG9Db21wbGV0ZVwiLCBcImF1dG9Gb2N1c1wiLCBcImF1dG9QbGF5XCIsXG4gICAgICAgIFwiY2FwdHVyZVwiLCBcImNlbGxQYWRkaW5nXCIsIFwiY2VsbFNwYWNpbmdcIiwgXCJjaGFsbGVuZ2VcIiwgXCJjaGFyU2V0XCIsIFwiY2hlY2tlZFwiLCBcImNpdGVcIiwgXCJjbGFzc0lEXCIsIFwiY2xhc3NOYW1lXCIsIFwiY29sU3BhblwiLCBcImNvbHNcIiwgXCJjb250ZW50XCIsIFwiY29udGVudEVkaXRhYmxlXCIsIFwiY29udGV4dE1lbnVcIiwgXCJjb250cm9sc1wiLCBcImNvb3Jkc1wiLCBcImNyb3NzT3JpZ2luXCIsXG4gICAgICAgIFwiZGF0YVwiLCBcImRhdGVUaW1lXCIsIFwiZGVmYXVsdFwiLCBcImRlZmVyXCIsIFwiZGlyXCIsIFwiZGlzYWJsZWRcIiwgXCJkb3dubG9hZFwiLCBcImRyYWdnYWJsZVwiLFxuICAgICAgICBcImVuY1R5cGVcIixcbiAgICAgICAgXCJmb3JtXCIsIFwiZm9ybUFjdGlvblwiLCBcImZvcm1FbmNUeXBlXCIsIFwiZm9ybU1ldGhvZFwiLCBcImZvcm1Ob1ZhbGlkYXRlXCIsIFwiZm9ybVRhcmdldFwiLCBcImZyYW1lQm9yZGVyXCIsXG4gICAgICAgIFwiaGVhZGVyc1wiLCBcImhlaWdodFwiLCBcImhpZGRlblwiLCBcImhpZ2hcIiwgXCJocmVmXCIsIFwiaHJlZkxhbmdcIiwgXCJodG1sRm9yXCIsIFwiaHR0cEVxdWl2XCIsXG4gICAgICAgIFwiaWNvblwiLCBcImlkXCIsIFwiaW5wdXRNb2RlXCIsIFwiaW50ZWdyaXR5XCIsIFwiaXNcIixcbiAgICAgICAgXCJrZXlQYXJhbXNcIiwgXCJrZXlUeXBlXCIsIFwia2luZFwiLFxuICAgICAgICBcImxhYmVsXCIsIFwibGFuZ1wiLCBcImxpc3RcIiwgXCJsb29wXCIsIFwibG93XCIsXG4gICAgICAgIFwibWFuaWZlc3RcIiwgXCJtYXJnaW5IZWlnaHRcIiwgXCJtYXJnaW5XaWR0aFwiLCBcIm1heFwiLCBcIm1heExlbmd0aFwiLCBcIm1lZGlhXCIsIFwibWVkaWFHcm91cFwiLCBcIm1ldGhvZFwiLCBcIm1pblwiLCBcIm1pbkxlbmd0aFwiLCBcIm11bHRpcGxlXCIsIFwibXV0ZWRcIixcbiAgICAgICAgXCJuYW1lXCIsIFwibm9WYWxpZGF0ZVwiLCBcIm5vbmNlXCIsXG4gICAgICAgIFwib3BlblwiLCBcIm9wdGltdW1cIixcbiAgICAgICAgXCJwYXR0ZXJuXCIsIFwicGxhY2Vob2xkZXJcIiwgXCJwb3N0ZXJcIiwgXCJwcmVsb2FkXCIsIFwicHJvZmlsZVwiLFxuICAgICAgICBcInJhZGlvR3JvdXBcIiwgXCJyZWFkT25seVwiLCBcInJlbFwiLCBcInJlcXVpcmVkXCIsIFwicmV2ZXJzZWRcIiwgXCJyb2xlXCIsIFwicm93U3BhblwiLCBcInJvd3NcIixcbiAgICAgICAgXCJzYW5kYm94XCIsIFwic2NvcGVcIiwgXCJzY29wZWRcIiwgXCJzY3JvbGxpbmdcIiwgXCJzZWFtbGVzc1wiLCBcInNlbGVjdGVkXCIsIFwic2hhcGVcIiwgXCJzaXplXCIsIFwic2l6ZXNcIiwgXCJzcGFuXCIsIFwic3BlbGxDaGVja1wiLCBcInNyY1wiLCBcInNyY0RvY1wiLCBcInNyY0xhbmdcIiwgXCJzcmNTZXRcIiwgXCJzdGFydFwiLCBcInN0ZXBcIiwgXCJzdHlsZVwiLCBcInN1bW1hcnlcIixcbiAgICAgICAgXCJ0YWJJbmRleFwiLCBcInRhcmdldFwiLCBcInRpdGxlXCIsIFwidHlwZVwiLFxuICAgICAgICBcInVzZU1hcFwiLFxuICAgICAgICBcInZhbHVlXCIsXG4gICAgICAgIFwid2lkdGhcIixcbiAgICAgICAgXCJ3bW9kZVwiLFxuICAgICAgICBcIndyYXBcIlxuICAgICAgXTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZSh0YXJnZXRPYmplY3QsIHNvdXJjZU9iamVjdCA9IHt9KSB7XG4gIGNvbnN0IHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2VPYmplY3QpO1xuXG4gIHNvdXJjZUtleXMuZm9yRWFjaCgoc291cmNlS2V5KSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0UHJvcGVydHkgPSB0YXJnZXRPYmplY3Rbc291cmNlS2V5XSxcbiAgICAgICAgICBzb3VyY2VQcm9wZXJ0eSA9IHNvdXJjZU9iamVjdFtzb3VyY2VLZXldO1xuXG4gICAgdGFyZ2V0T2JqZWN0W3NvdXJjZUtleV0gPSB0YXJnZXRPYmplY3QuaGFzT3duUHJvcGVydHkoc291cmNlS2V5KSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7dGFyZ2V0UHJvcGVydHl9ICR7c291cmNlUHJvcGVydHl9YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlUHJvcGVydHk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJ1bmUodGFyZ2V0T2JqZWN0LCBzb3VyY2VLZXlzKSB7XG4gIHNvdXJjZUtleXMuZm9yRWFjaCgoc291cmNlS2V5KSA9PiB7XG4gICAgaWYgKHRhcmdldE9iamVjdC5oYXNPd25Qcm9wZXJ0eShzb3VyY2VLZXkpKSB7XG4gICAgICBkZWxldGUgdGFyZ2V0T2JqZWN0W3NvdXJjZUtleV07XG4gICAgfVxuICB9KTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQga2V5TWl4aW5zIGZyb20gXCIuL21peGlucy9rZXlcIjtcbmltcG9ydCBldmVudE1peGlucyBmcm9tIFwiLi9taXhpbnMvZXZlbnRcIjtcbmltcG9ydCBtb3VzZU1peGlucyBmcm9tIFwiLi9taXhpbnMvbW91c2VcIjtcbmltcG9ydCBjbGlja01peGlucyBmcm9tIFwiLi9taXhpbnMvY2xpY2tcIjtcbmltcG9ydCByZXNpemVNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL3Jlc2l6ZVwiO1xuXG5jb25zdCB7IG9uUmVzaXplLCBvZmZSZXNpemUgfSA9IHJlc2l6ZU1peGlucztcblxuY2xhc3MgV2luZG93IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kb21FbGVtZW50ID0gd2luZG93OyAvLy9cbiAgfVxuXG4gIGFzc2lnbiguLi5zb3VyY2VzKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5kb21FbGVtZW50OyAvLy9cblxuICAgIE9iamVjdC5hc3NpZ24odGFyZ2V0LCAuLi5zb3VyY2VzKTtcbiAgfVxuXG4gIGFkZFJlc2l6ZU9iamVjdCgpIHt9IC8vL1xuXG4gIHJlbW92ZVJlc2l6ZU9iamVjdCgpIHt9IC8vL1xuXG4gIGdldFdpZHRoKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmlubmVyV2lkdGg7IH0gLy8vXG4gIFxuICBnZXRIZWlnaHQoKSB7IHJldHVybiB0aGlzLmRvbUVsZW1lbnQuaW5uZXJIZWlnaHQ7IH0gLy8vXG5cbiAgZ2V0U2Nyb2xsVG9wKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnBhZ2VZT2Zmc2V0OyB9ICAvLy9cblxuICBnZXRTY3JvbGxMZWZ0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnBhZ2VYT2Zmc2V0OyB9IC8vL1xufVxuXG5PYmplY3QuYXNzaWduKFdpbmRvdy5wcm90b3R5cGUsIGtleU1peGlucyk7XG5PYmplY3QuYXNzaWduKFdpbmRvdy5wcm90b3R5cGUsIGV2ZW50TWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oV2luZG93LnByb3RvdHlwZSwgbW91c2VNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihXaW5kb3cucHJvdG90eXBlLCBjbGlja01peGlucyk7XG5PYmplY3QuYXNzaWduKFdpbmRvdy5wcm90b3R5cGUsIHsgb25SZXNpemUsIG9mZlJlc2l6ZSB9KTsgLy8vXG5cbmV4cG9ydCBkZWZhdWx0ICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSA/IHVuZGVmaW5lZCA6IG5ldyBXaW5kb3coKTsgIC8vL1xuIl19
