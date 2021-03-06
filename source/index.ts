/** Get the first item in the array */
export function first<T>(arr: Array<T>) {
	return arr[0]
}

/** Get the last item in the array */
export function last<T>(arr: Array<T>) {
	return arr[arr.length - 1]
}

/** Check if the list includes the item, regardless of wether the list is an Array, Set, or Plain Object */
export function has(list: any = [], item: any): boolean {
	const check = list.has || list.includes
	return check ? check.call(list, item) : list[item] != null
}

/** Add the item(s) to the list, regardless of whether the list is an Array or Set */
export function add(list: any, ...items: any) {
	const add = list.add || list.push
	for (const item of items) {
		add.call(list, item)
	}
	return list
}

/** Add or remove the item within the set based on whether a flag is truthy */
export function toggle<T>(list: Set<T>, value: T, flag: any) {
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
 *
 */
export function complement<T>(list: Array<T>, blacklist: Array<T>) {
	return list.filter((value) => blacklist.includes(value) === false)
}
