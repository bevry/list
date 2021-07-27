import { deepEqual } from 'assert-helpers'
import kava from 'kava'

import { unique, flatten, until } from './index.js'

kava.suite('@bevry/list', function (suite, test) {
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
