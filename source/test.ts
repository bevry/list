import { deepEqual } from 'assert-helpers'
import kava from 'kava'

import { add, append, unique, flatten, until } from './index.js'

kava.suite('@bevry/list', function (suite, test) {
	test('append', function () {
		const expected = append(new Set([1, 2, 3]), [3, 4])
		const actual = new Set([1, 2, 3, 4])
		deepEqual(actual, expected)
	})
	test('add', function () {
		const expected = add([1, 2, 3], 3, 4)
		const actual = [1, 2, 3, 3, 4]
		deepEqual(actual, expected)
	})
	test('flatten', function () {
		const expected = [1, 2, 3, 4]
		const actual = flatten([1, [2, [3, [4]]]])
		deepEqual(actual, expected)
	})
	test('unique', function () {
		const expected = [1, 2, 3, 4]
		const actual = unique([1, 2, 3, 4, 1, 2, 3, 4])
		deepEqual(actual, expected)
	})
	test('until', function () {
		const input = [1, 2, 3, 4]
		deepEqual([1, 2, 3], until(input, 3, true))
		deepEqual([1, 2], until(input, 3, false))
		deepEqual([1, 2], until(input, 3))
	})
})
