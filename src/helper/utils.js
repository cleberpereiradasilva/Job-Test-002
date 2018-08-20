'use strict'

const Divide = (value, factor, n = 1) => {
	const result = value / factor
	if (result % 1 === 0) {
		/* no decimal places */
		return result
	}
	/* fix to 'n' decimal place */
	return result.toFixed(n)
}

const Multiply = (value, factor, n = 1) => {
	const result = +(value * factor).toFixed(n)	
	// I fix first becouse 0.14 * 100 is equal 14.00...02 lololololollollollollol
	if (result % 1 === 0) {
		/* no decimal places */
		return result.toFixed(0)
	}
	/* fix to 'n' decimal place */
	return result.toFixed(n)
}

const More = (x, y) => (x >= y)
const Less = (x, y) => (x <= y)
const RegexFomat = {
	time: /^[+-]?\d+(\.\d+)?(\s+ms)$/,
	bytes: /^[+-]?\d+(\.\d+)?(\s+B)$/,
	percent: /^[+-]?\d+(\.\d+)?$/,
	milimeters: /^[+-]?\d+(\.\d+)?(\s+mm)$/,
}

export {
	Divide, 
	Multiply, 
	More, 
	Less,
	RegexFomat,
}
