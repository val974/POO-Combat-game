/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// my parent - characters

var Characters = exports.Characters = function () {
	function Characters(nom, health, damage) {
		_classCallCheck(this, Characters);

		this.nom = nom;
		this.health = health;
		this.damage = damage;
	}

	_createClass(Characters, [{
		key: "getattacked",
		value: function getattacked(ennemis) {
			this.health -= ennemis.damage;
			if (this.health <= 0) {
				this.health = 0;
			}
		}
	}]);

	return Characters;
}();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.MyHero = undefined;

var _characters = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//j'étends ma classe characters à heros

var MyHero = exports.MyHero = function (_Characters) {
	_inherits(MyHero, _Characters);

	function MyHero(nom, health, damage) {
		_classCallCheck(this, MyHero);

		return _possibleConstructorReturn(this, (MyHero.__proto__ || Object.getPrototypeOf(MyHero)).call(this, nom, health, damage));
	}

	return MyHero;
}(_characters.Characters);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Ennemies = undefined;

var _characters = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Ennemies = exports.Ennemies = function (_Characters) {
	_inherits(Ennemies, _Characters);

	function Ennemies(nom, health, damage) {
		_classCallCheck(this, Ennemies);

		return _possibleConstructorReturn(this, (Ennemies.__proto__ || Object.getPrototypeOf(Ennemies)).call(this, nom, health, damage));
	}

	return Ennemies;
}(_characters.Characters);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.jack = undefined;

var _characters = __webpack_require__(0);

var _hero = __webpack_require__(1);

var _ennemis = __webpack_require__(2);

var _minion = __webpack_require__(4);

var jack = exports.jack = new _hero.MyHero("Jack", 200, 15);

var getButton = document.querySelectorAll('button');
getButton[1].addEventListener("click", function essai() {
	jack.getattacked(_minion.minion);
	ecrire();
});

function ecrire() {
	document.getElementById("pointsheros").innerHTML = "Les pv du héros sont de " + jack.health;
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.minion = undefined;

var _characters = __webpack_require__(0);

var _hero = __webpack_require__(1);

var _ennemis = __webpack_require__(2);

var _jack = __webpack_require__(3);

var minion = exports.minion = new _ennemis.Ennemies("minion", 30, 10);

var getButton = document.querySelectorAll('button');
getButton[0].addEventListener("click", function ajout() {
	pointsminion();
	minion.getattacked(_jack.jack);
});

function pointsminion() {
	document.getElementById("pointsMinion").innerHTML = "Les pv de l'ennemi sont de " + minion.health;
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _characters = __webpack_require__(0);

var _hero = __webpack_require__(1);

var _ennemis = __webpack_require__(2);

__webpack_require__(3);

__webpack_require__(4);

/***/ })
/******/ ]);