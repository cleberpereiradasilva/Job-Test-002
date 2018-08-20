'use strict';

var _converter = require('./helper/converter');

var _utils = require('./helper/utils');

var welcome = '\tEnter your data to convert';
var invalid = '\tInvalid input data';

function converter(props) {
	var inputData = String(props).replace(/(\r\n\t|\n|\r\t)/gm, '');
	var result = '';
	if (_utils.RegexFomat.time.test(String(inputData))) {
		result = (0, _converter.ConverterTime)(String(inputData));
	} else {
		if (_utils.RegexFomat.bytes.test(String(inputData))) {
			result = (0, _converter.ConverterBytes)(String(inputData));
		} else {
			if (_utils.RegexFomat.percent.test(String(inputData))) {
				result = (0, _converter.ConverterPercent)(String(inputData));
			} else {
				if (_utils.RegexFomat.milimeters.test(String(inputData))) {
					result = (0, _converter.ConverterMilimeters)(String(inputData));
				} else {
					result = invalid;
				}
			}
		}
	}
	return result;
}

var result = '';
if (process.argv[2] !== undefined) {
	var data = process.argv.slice(2, 4).join(' ');
	result = converter(data);
	console.log(result);
} else {
	console.log(welcome);
	process.stdin.on('data', function (data) {
		result = converter(data);
		console.log(result);
		process.exit(0);
	});
}