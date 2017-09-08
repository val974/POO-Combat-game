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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _script = __webpack_require__(1);

var _hero = __webpack_require__(2);

var _ennemis = __webpack_require__(3);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// my parent - characters
var Characters = exports.Characters = function Characters(nom, health, damage) {
	_classCallCheck(this, Characters);

	this.nom = nom;
	this.health = health;
	this.damage = damage;
};

exports.default = Characters;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Heros = undefined;

var _script = __webpack_require__(1);

var _script2 = _interopRequireDefault(_script);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //j'étends ma classe characters à heros

var Heros = exports.Heros = function (_Characters) {
	_inherits(Heros, _Characters);

	function Heros(name, health, damage) {
		_classCallCheck(this, Heros);

		return _possibleConstructorReturn(this, (Heros.__proto__ || Object.getPrototypeOf(Heros)).call(this, name, health, damage));
	}

	return Heros;
}(_script2.default);

/*//j'étends ma classe characters à heros

import {Characters} from "../js/script.js";

export class MyHero extends Characters {
	constructor(nom, health,damage,armor){
		super(nom,health,damage);
		this.armor = armor;
	}

	healthBonus() {
		this.health += 50;
		/*return this.health += 50;
		console.log(this.nom + ' a reçu un bonus de vie. ses pv sont a '+this.health);
		
	}
	

	
	armorBonus(){
		this.armor +=20;
		console.log(this.nom +  " a reçu un bonus d'armure. ses points d'armure sont a " + this.armor );
		/*return this.armor;
	}
}


je donne des attributs à mon héro
let jack = new MyHero("Jack",200,15,0);

console.log(jack.healthBonus());
console.log(jack.health);
console.log(jack.armorBonus());
console.log(jack.armor);

/*export default MyHero;*/

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Ennemies = undefined;

var _script = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //j'étends ma classe characters à ennemis


var Ennemies = exports.Ennemies = function (_Characters) {
	_inherits(Ennemies, _Characters);

	function Ennemies(nom, health, damage) {
		_classCallCheck(this, Ennemies);

		return _possibleConstructorReturn(this, (Ennemies.__proto__ || Object.getPrototypeOf(Ennemies)).call(this, nom, health, damage));
	}

	return Ennemies;
}(_script.Characters);

//je donne des attributs à mes ennemis


var minion = new Ennemies("minion", 10, 10, 0);
var lieutenantMinion = new Ennemies("Lieutenant Minion", 30, 30, 0);
var chefMinion = new Ennemies("chefMinion", 100, 100, 0);

/*export {Ennemies}*/

/***/ })
/******/ ]);