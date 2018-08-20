'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var Divide = function Divide(value, factor) {
	var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

	var result = value / factor;
	if (result % 1 === 0) {
		/* no decimal places */
		return result;
	}
	/* fix to 'n' decimal place */
	return result.toFixed(n);
};

var Multiply = function Multiply(value, factor) {
	var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

	var result = +(value * factor).toFixed(n);
	// I fix first becouse 0.14 * 100 is equal 14.00...02 lololololollollollollol
	if (result % 1 === 0) {
		/* no decimal places */
		return result.toFixed(0);
	}
	/* fix to 'n' decimal place */
	return result.toFixed(n);
};

var More = function More(x, y) {
	return x >= y;
};
var Less = function Less(x, y) {
	return x <= y;
};
var RegexFomat = {
	time: /^[+-]?\d+(\.\d+)?(\s+ms)$/,
	bytes: /^[+-]?\d+(\.\d+)?(\s+B)$/,
	percent: /^[+-]?\d+(\.\d+)?$/,
	milimeters: /^[+-]?\d+(\.\d+)?(\s+mm)$/
};

exports.Divide = Divide;
exports.Multiply = Multiply;
exports.More = More;
exports.Less = Less;
exports.RegexFomat = RegexFomat;