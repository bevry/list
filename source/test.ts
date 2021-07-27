import { deepEqual } from 'assert-helpers'
import kava from 'kava'

import { unique, flatten } from './index.js'

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
})
