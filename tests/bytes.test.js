'use strict'

import { expect } from 'chai'
import { ConverterBytes as Bytes } from '../src/helper/converter'

describe('# BYTES', () => {
	it('Test: 50 B should be 50 B', () => {
		expect(Bytes('50 B')).to.be.equals('50 B')
	})
	it('Test: 2000 B should be 2 kB', () => {
		expect(Bytes('2000 B')).to.be.equals('2 kB')
	})
	it('Test: 2000000000 B should be 2 MB', () => {
		expect(Bytes('2000000000 B')).to.be.equals('2 MB')
	})	
})
