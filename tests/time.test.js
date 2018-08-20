'use strict'

import { expect } from 'chai'
import { ConverterTime as Time } from '../src/helper/converter'

describe('# TEMPOS', () => {
	it('Test: 1000 ms should be 1 s', () => {
		expect(Time('1000 ms')).to.be.equals('1 s')
	})
	it('Test: 1000 ds should be error', () => {
		expect(Time('1000 ds')).to.be.equals('Expected input like 000 ms')
	})
	it('Test: 1000 ds should be error', () => {
		expect(Time('aser ms')).to.be.equals('Expected input like 000 ms')
	})
	it('Test: ms should be error', () => {
		expect(Time(' ms')).to.be.equals('Expected input like 000 ms')
	})
	it('Test: 1000 ms should be 1 s', () => {
		expect(Time('1200 ms')).to.be.equals('1.2 s')
	})
	it('Test: 100 ms should be 100 ms', () => {
		expect(Time('100 ms')).to.be.equals('100 ms')
	})
	it('Test: 450 ms should be 450 ms', () => {
		expect(Time('450 ms')).to.be.equals('450 ms')
	})
	it('Test: 5000 ms should be 5 ms', () => {
		expect(Time('5000 ms')).to.be.equals('5 s')
	})
	it('Test: 3000000 ms should be 5 min', () => {
		expect(Time('300000 ms')).to.be.equals('5 min')
	})
	it('Test: 5400000 ms should be 1.5 h', () => {
		expect(Time('5400000 ms')).to.be.equals('1.5 h')
	})
	it('Test: -10 ms should be Ops! Negative value not accept!', () => {
		expect(Time('-10 ms')).to.be.equals('Ops! Negative value not accept!')
	})
	it('Test: 86400000 ms should be 1 d', () => {
		expect(Time('86400000 ms')).to.be.equals('1 d')
	})
})
