const data = [
	{ id: 1, data: 5 },
	{ id: 2, data: 5 },
	{ id: 3, data: 5 },
	{ id: 4, data: 5 },
	{ id: 5, data: 5 },
];
export default function handler(req, res) {
	console.log("Data request");
	return res.json(data);
}
