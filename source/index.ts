export type List<I> = Array<I> | Set<I>

/** Get the first item in the array */
export function first<T>(arr: Array<T>) {
	return arr[0]
}

/** Get the last item in the array */
export function last<T>(arr: Array<T>) {
	return arr[arr.length - 1]
}

/** Check if the list includes the item */
export function has<T>(list: List<T> = [], item: T): boolean {
	// @ts-ignore
	const check = list.has || list.includes
	return check.call(list, item)
}

/** Add the items to the list */
export function append<T>(list: List<T>, items: List<T>) {
	// @ts-ignore
	const add = list.add || list.push
	for (const item of items) {
		add.call(list, item)
	}
	return list
}

/** Add the item(s) to the list */
export function add<T>(list: List<T>, ...items: Array<T>) {
	return append(list, items)
}

/** Add or remove the item within the set based on whether a flag is truthy */
export function toggle<T>(list: Set<T>, value: T | Array<T>, flag: any) {
	if (Array.isArray(value)) {
		for (const v of value) {
			toggle(list, v, flag)
		}
		return list
	}
	if (flag) {
		list.add(value)
	} else {
		list.delete(value)
	}
	return list
}

/** Get a new array with only truthy and non-duplicates returned */
export function unique<T>(list: Array<T>) {
	return Array.from(new Set(list.filter((i) => i)).values())
}

/**
 * Get the distinct elements from both the lists.
 * Given two sets A and B, their union is the set consisting of all objects which are elements of A or of B or of both (see axiom of union). It is denoted by A ∪ B.
 * https://en.wikipedia.org/wiki/Naive_set_theory
 * @param list The left subset.
 * @param include The right subset.
 * @returns the superset/combination of both lists, without redundancy.
 */
export function union<T>(list: Array<T>, include: Array<T>) {
	return Array.from(new Set(list.concat(include)).values())
}

/**
 * Get the elements from the list that only also exist within the other list.
 * The intersection of A and B is the set of all objects which are both in A and in B. It is denoted by A ∩ B.
 * https://en.wikipedia.org/wiki/Naive_set_theory
 * @param list The left set to intersect.
 * @param allowlist The right set to intersect.
 * @returns the intersection, the values that are within both sets
 */
export function intersect<T>(list: Array<T>, allowlist: Array<T>) {
	return list.filter((value) => allowlist.includes(value))
}

/**
 * Get the list without elements from the other list.
 * Finally, the relative complement of B relative to A, also known as the set theoretic difference of A and B, is the set of all objects that belong to A but not to B. It is written as A \ B or A − B.
 * https://en.wikipedia.org/wiki/Naive_set_theory
 * @param list The superset.
 * @param blacklist The excluded subset.
 */
export function complement<T>(list: Array<T>, blacklist: Array<T>) {
	return list.filter((value) => blacklist.includes(value) === false)
}

/** Flatten the array, merging any nested array no matter the depth, into a single array. */
export function flatten<T>(list: Array<T | Array<T>>): Array<T> {
	const result = []
	for (const item of list) {
		if (Array.isArray(item)) {
			result.push(...flatten(item))
		} else {
			result.push(item)
		}
	}
	return result
}

/** Fetch every item in the list, until a particular one. */
export function until<T>(
	list: List<T>,
	until: T,
	inclusive: boolean = false
): Array<T> {
	const result = []
	for (const item of list) {
		if (item === until) {
			if (inclusive) result.push(item)
			break
		}
		result.push(item)
	}
	return result
}
