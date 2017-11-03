(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Library", [], factory);
	else if(typeof exports === 'object')
		exports["Library"] = factory();
	else
		root["Library"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.numericallyIntegrate = exports.erfc = exports.erf = undefined;

var _erf = __webpack_require__(1);

var _erf2 = _interopRequireDefault(_erf);

var _erfc = __webpack_require__(3);

var _erfc2 = _interopRequireDefault(_erfc);

var _numericallyIntegrate = __webpack_require__(4);

var _numericallyIntegrate2 = _interopRequireDefault(_numericallyIntegrate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.erf = _erf2.default;
exports.erfc = _erfc2.default;
exports.numericallyIntegrate = _numericallyIntegrate2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = erf;
function erf(x) {
    var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 7;

    var a1 = 0.254829592;
    var a2 = -0.284496736;
    var a3 = 1.421413741;
    var a4 = -1.453152027;
    var a5 = 1.061405429;
    var p = 0.3275911;

    // Save the sign of x
    var sign = 1;

    if (x < 0) sign = -1;

    var absX = Math.abs(x);
    // A & S 7.1.26 with Horners Method
    var t = 1.0 / (1.0 + p * absX);
    var y = 1.0 - ((((a5 * t + a4) * t + a3) * t + a2) * t + a1) * t * Math.exp(-absX * absX);
    return (sign * y).toFixed(decimals);
}
module.exports = exports["default"];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transport1d = exports.mounding = exports.helpers = undefined;

var _helpers = __webpack_require__(0);

var helpers = _interopRequireWildcard(_helpers);

var _mounding = __webpack_require__(5);

var mounding = _interopRequireWildcard(_mounding);

var _transport1d = __webpack_require__(6);

var transport1d = _interopRequireWildcard(_transport1d);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.helpers = helpers;
exports.mounding = mounding;
exports.transport1d = transport1d;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = erfc;

var _erf = __webpack_require__(1);

var _erf2 = _interopRequireDefault(_erf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function erfc(x) {
    var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 7;

    return (1 - (0, _erf2.default)(x, decimals)).toFixed(decimals);
}
module.exports = exports['default'];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = numericallyIntegrate;
function numericallyIntegrate(a, b, dx, f) {
    // define the variable for area
    var area = 0;

    // loop to calculate the area of each trapezoid and sum.
    for (var x1 = a + dx; x1 <= b; x1 += dx) {
        // the x locations of the left and right side of each trapezoid
        var x0 = x1 - dx;

        // the area of each trapezoid
        var Ai = dx * (f(x0) + f(x1)) / 2.0;

        // cumulatively sum the areas
        area += Ai;
    }

    return area;
}
module.exports = exports["default"];

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.calculateHi = calculateHi;
exports.calculateHMax = calculateHMax;

var _index = __webpack_require__(0);

function S(alpha, beta) {
    var func = function func(tau) {
        if (tau !== 0) {
            var sqrtTau = Math.sqrt(tau);
            return (0, _index.erf)(alpha / sqrtTau) * (0, _index.erf)(beta / sqrtTau);
        }

        return 0;
    };

    return (0, _index.numericallyIntegrate)(0, 1, 0.001, func);
}

function calculateHi(x, y, w, L, W, hi, Sy, K, t) {
    var a = W / 2;
    var l = L / 2;
    var v = K * hi / Sy;
    var sqrt4vt = Math.sqrt(4 * v * t);

    var s1 = S((l + x) / sqrt4vt, (a + y) / sqrt4vt);
    var s2 = S((l + x) / sqrt4vt, (a - y) / sqrt4vt);
    var s3 = S((l - x) / sqrt4vt, (a + y) / sqrt4vt);
    var s4 = S((l - x) / sqrt4vt, (a - y) / sqrt4vt);

    return Math.sqrt(w / 2 / K * v * t * (s1 + s2 + s3 + s4) + hi * hi).toFixed(5) - hi.toFixed(5); // eq 1
}

function calculateHMax(w, L, W, hi, Sy, K, t) {
    return calculateHi(0, 0, w, L, W, hi, Sy, K, t) + hi;
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.calculateKd = calculateKd;
exports.calculateTmax = calculateTmax;
exports.calculateXmax = calculateXmax;
exports.calculateC = calculateC;

var _index = __webpack_require__(0);

/*
T08. 1D transport model (Ogata-Banks)

C	= Concentration of the solute in the fluid [ML-3]
C0	= Initial (t=0) concentration of the solute in the fluid [ML-3]
DL	= Longitudinal dispersion coefficient [L2T– 1]
vx	= Down gradient average fluid velocity [LT– 1]
x	= Down gradient distance from constant point concentration [L]
t	= Time since introduction of constant point concentration [T]
R	= Retardation factor [-]
erfc	= complementary error function
*/

/*
Longitudinal dispersion coefficient

DL	= Longitudinal dispersion coefficient [L2T– 1]
alphaL	= Longitudinal dispersivity [L]
vx	= Down gradient average fluid velocity [LT– 1]
*/
function calculateDL(alphaL, vx) {
    return alphaL * vx;
}

/*
Bulk density

rhoB= Bulk density [ML-3]
ne	= Effective porosity [-]
rhoS= Particle density [ML-3]
 */
function calculateRHob(ne) {
    var rhoS = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2.65;

    return (1 - ne) * rhoS;
}

/*
R	= Retardation factor [-]
Kd	= Sorption partition coefficient [L3M-1]
rhoB= Bulk density [ML-3]
ne	= Effective porosity [-]
 */
function calculateR(ne, Kd) {
    var rhoB = calculateRHob(ne);
    return 1 + Kd * rhoB / ne;
}

/*
Down gradient average fluid velocity (vX)

K = Hydraulic conductivity [m/d]
ne	= Effective porosity [-]
I = Hydraulic gradient
 */
function calculateVx(K, ne, I) {
    return K * I / ne;
}

/*
KOC	= Partition coefficient between organic carbon in the soil and water [LM-1]
KOW	= Octanol/water partition coefficient [LM-1]
a	= 1 (Constant according to Karickhoff et. al, 1979)
b	= 0.21 (Constant according to Karickhoff et. al, 1979)
*/
function calculateKoc(Kow) {
    var a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var b = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.21;

    return Math.exp(a * Math.log(Kow) - b);
}

/*
Kd	= Sorption partition coefficient [L3M-1]
Kow	= Octanol/water partition coefficient [LM-1]
cOrg	= Organic carbon content in the soil [MM]
 */
function calculateKd(Kow, cOrg) {
    return calculateKoc(Kow) * cOrg;
}

function calculateTmax(x, K, I, ne, alphaL, Kd) {
    var c = 0;
    var t = 0;
    while (c < 0.9999) {
        c = this.calculateC(x, t, K, I, ne, alphaL, Kd);
        t = t + 20;
    }

    return t;
}

function calculateXmax(t, K, I, ne, alphaL, Kd) {
    var c = 1;
    var x = 0;
    while (c > 0.0001) {
        c = this.calculateC(x, t, K, I, ne, alphaL, Kd);
        x = x + 20;
    }

    return x;
}

function calculateC(x, t, K, I, ne, alphaL, Kd) {
    var vx = calculateVx(K, ne, I);
    var DL = calculateDL(alphaL, vx);
    var R = calculateR(ne, Kd);

    var term1 = (0, _index.erfc)((x - vx * t / R) / (2 * Math.sqrt(DL * t / R)));
    var term2 = (0, _index.erfc)((x + vx * t / R) / (2 * Math.sqrt(DL * t / R)));

    return 0.5 * (term1 + Math.exp(vx * x / DL) * term2);
}

/***/ })
/******/ ]);
});
//# sourceMappingURL=Library.js.map