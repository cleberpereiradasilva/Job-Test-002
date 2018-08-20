'use strict'

import { expect } from 'chai'
import { ConverterPercent as Percent } from '../src/helper/converter'

describe('# PERCENT', () => {
	it('Test: 0.14 should be 14%', () => {
		expect(Percent('0.14')).to.be.equals('14%')
	})	
	it('Test: 0.98 should be 98%', () => {
		expect(Percent('0.98')).to.be.equals('98%')
	})
	it('Test: 0.985 should be 98.5%', () => {
		expect(Percent('0.985')).to.be.equals('98.5%')
	})	
	it('Test: 0000.98 should be 98%', () => {
		expect(Percent('0000.98')).to.be.equals('98%')
	})	
	it('Test: 2 should be 200%', () => {
		expect(Percent('2')).to.be.equals('200%')
	})	
	it('Test: -2 should be -200%', () => {
		expect(Percent('-2')).to.be.equals('-200%')
	})
	it('Test: xyz should be Expected input in like 0.00', () => {
		expect(Percent('xyz')).to.be.equals('Expected input like 0.00')
	})	
})
