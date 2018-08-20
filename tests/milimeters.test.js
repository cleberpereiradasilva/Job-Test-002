'use strict'

import { expect } from 'chai'
import { ConverterMilimeters as Milimeters } from '../src/helper/converter'

describe('# MILIMETERS', () => {
	it('Test: 100 mm should be 10 cm', () => {
		expect(Milimeters('100 mm')).to.be.equals('10 cm')
	})	
})
