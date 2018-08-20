'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ConverterPercent = exports.ConverterBytes = exports.ConverterTime = undefined;

var _utils = require('./utils');

var metrics = {
	time: {
		index: ' ms',
		action: _utils.Divide, // [Divide or Multiply]
		compare: _utils.More, // [More or Less]		
		regex: _utils.RegexFomat.time,
		expected: 'Expected input like 000 ms', // message to show on error
		acceptNegative: false, // [true or false]
		intervals: [{ desc: ' s', quant: 1000 }, { desc: ' min', quant: 60 }, { desc: ' h', quant: 60 }, { desc: ' d', quant: 24 }]
	},
	bytes: {
		index: ' B',
		action: _utils.Divide, // [Divide or Multiply]
		compare: _utils.More, // [More or Less]		
		regex: _utils.RegexFomat.bytes,
		acceptNegative: false, // [true or false]
		expected: 'Expected input like 000 B', // message to show on error
		intervals: [{ desc: ' kB', quant: 1000 }, { desc: ' MB', quant: Math.pow(1000, 2) }]
	},
	percent: {
		index: '%',
		action: _utils.Multiply, // [Divide or Multiply]
		compare: _utils.Less, // [More or Less]		
		regex: _utils.RegexFomat.percent,
		acceptNegative: true, // [true or false]
		expected: 'Expected input like 0.00', // message to show on error
		intervals: [{ desc: '%', quant: 100 }]
	}
};

var Converter = function Converter(unit, input) {
	var props = input.replace(/(\r\n\t|\n|\r\t)/gm, '');
	var node = metrics[unit];

	/* validate input */
	if (!node.regex.test(props)) {
		return node.expected;
	}

	/* convert body */
	var num = 1 * +props.replace('' + node.index, '');

	if (!node.acceptNegative && num < 0) {
		return 'Ops! Negative value not accept!';
	}

	/* reduce function to convert any item in list */
	var convert = node.intervals.reduce(function (prevVal, elem, index) {
		if (node.compare(prevVal.value, elem.quant) && index <= prevVal.index) {
			return {
				value: node.action(prevVal.value, elem.quant),
				index: prevVal.index + 1,
				desc: elem.desc
			};
		}
		return prevVal;
	}, { value: num, index: 0, desc: node.index });
	return '' + convert.value + convert.desc;
};

var ConverterTime = function ConverterTime(props) {
	return Converter('time', props);
};
var ConverterBytes = function ConverterBytes(props) {
	return Converter('bytes', props);
};
var ConverterPercent = function ConverterPercent(props) {
	return Converter('percent', props);
};

exports.ConverterTime = ConverterTime;
exports.ConverterBytes = ConverterBytes;
exports.ConverterPercent = ConverterPercent;