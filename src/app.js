'use strict'

import { 
	ConverterTime, 
	ConverterBytes, 
	ConverterPercent, 
	ConverterMilimeters,
} from './helper/converter'
import { RegexFomat } from './helper/utils'

const welcome = '\tEnter your data to convert'
const invalid = '\tInvalid input data'


function converter(props) {
	const inputData = String(props).replace(/(\r\n\t|\n|\r\t)/gm, '')	
	let result = ''
	if (RegexFomat.time.test(String(inputData))) {		
		result = ConverterTime(String(inputData))
	} else {
		if (RegexFomat.bytes.test(String(inputData))) {			
			result = ConverterBytes(String(inputData))
		} else {
			if (RegexFomat.percent.test(String(inputData))) {			
				result = ConverterPercent(String(inputData))
			} else {
				if (RegexFomat.milimeters.test(String(inputData))) {			
					result = ConverterMilimeters(String(inputData))
				} else {
					result = invalid
				}
			}
		}
	}
	return result
}

let result = ''
if (process.argv[2] !== undefined) {	
	const data = process.argv.slice(2, 4).join(' ')
	result = converter(data)	
	console.log(result)	
} else {
	console.log(welcome)
	process.stdin.on('data', (data) => {		
		result = converter(data)
		console.log(result)	
		process.exit(0)
	})
}
