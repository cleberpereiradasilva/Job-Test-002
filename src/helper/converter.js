'use strict'

import { 
	Divide, 
	Multiply, 
	More, 
	Less,
	RegexFomat,
} from './utils'

const metrics = { 
	time: {
		index: ' ms',
		action: Divide, // [Divide or Multiply]
		compare: More, // [More or Less]		
		regex: RegexFomat.time,
		expected: 'Expected input like 000 ms', // message to show on error
		acceptNegative: false, // [true or false]
		intervals: [
			{ desc: ' s', quant: 1000 },
			{ desc: ' min', quant: 60 },
			{ desc: ' h', quant: 60 },
			{ desc: ' d', quant: 24 }, // easy to add itens
		],
	},
	bytes: {
		index: ' B',
		action: Divide, // [Divide or Multiply]
		compare: More, // [More or Less]		
		regex: RegexFomat.bytes,
		acceptNegative: false, // [true or false]
		expected: 'Expected input like 000 B', // message to show on error
		intervals: [				
			{ desc: ' kB', quant: 1000 },
			{ desc: ' MB', quant: 1000 ** 2 }, // easy to add itens
		],
	},
	percent: {
		index: '%',
		action: Multiply, // [Divide or Multiply]
		compare: Less, // [More or Less]		
		regex: RegexFomat.percent,
		acceptNegative: true, // [true or false]
		expected: 'Expected input like 0.00', // message to show on error
		intervals: [				
			{ desc: '%', quant: 100 },				
		],
	},
	milimeters: {
		index: ' mm',
		action: Divide, // [Divide or Multiply]
		compare: More, // [More or Less]		
		regex: RegexFomat.milimeters,
		acceptNegative: false, // [true or false]
		expected: 'Expected input like 000 B', // message to show on error
		intervals: [				
			{ desc: ' cm', quant: 10 },
			{ desc: ' m', quant: 100 }, 
			{ desc: ' km', quant: 100 }, 
		],
	},
}	

const Converter = (unit, input) => {
	const props = input.replace(/(\r\n\t|\n|\r\t)/gm, '')	
	const node = metrics[unit]

	/* validate input */			
	if (!node.regex.test(props)) {
		return node.expected
	}	

	/* convert body */
	const num = 1 * (+props.replace(`${node.index}`, ''))		

	if (!node.acceptNegative && num < 0) {
		return 'Ops! Negative value not accept!'
	}

	/* reduce function to convert any item in list */
	const convert = node.intervals.reduce((prevVal, elem, index) => {				
		if (node.compare(prevVal.value, elem.quant) && index <= prevVal.index) {
			return { 
				value: node.action(prevVal.value, elem.quant), 
				index: prevVal.index + 1,
				desc: elem.desc,
			}
		}		
		return prevVal
	}, { value: num, index: 0, desc: node.index })	
	return `${convert.value}${convert.desc}`
}

const ConverterTime = props => Converter('time', props)
const ConverterBytes = props => Converter('bytes', props)
const ConverterPercent = props => Converter('percent', props)
const ConverterMilimeters = props => Converter('milimeters', props)

export { 
	ConverterTime, 
	ConverterBytes, 
	ConverterPercent, 
	ConverterMilimeters, 
}
