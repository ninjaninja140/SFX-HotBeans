export default function paginate(arr: Array<unknown>, size: number) {
	return arr.reduce((acc: any, val: any, i: number) => {
		let idx = Math.floor(i / size);
		let page = acc[idx] || (acc[idx] = []);
		page.push(val);

		return acc;
	}, []);
}
