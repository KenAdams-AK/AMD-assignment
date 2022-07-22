export const fields = [
	{
		name: "name",
		label: "Name",
		required: true,
		type: "text",
		nested: false,
	},
	{
		name: "email",
		label: "Email",
		required: true,
		type: "text",
		nested: false,
	},
	{
		name: "city",
		label: "City",
		required: true,
		type: "text",
		nested: true,
	},
	{
		name: "phone",
		label: "Phone",
		required: true,
		type: "text",
		nested: false,
	},
	{
		name: "website",
		label: "Website",
		required: true,
		type: "text",
		nested: false,
	},
	{
		name: "company",
		label: "Company",
		required: true,
		type: "text",
		nested: true,
	},
];

export function setNestedValue(obj, path, value) {
	let schema = obj;
	let propsList = path.split(".");
	for (let i = 0; i < propsList.length - 1; i++) {
		let elem = propsList[i];
		if (!schema[elem]) schema[elem] = {};
		schema = schema[elem];
	}
	schema[propsList[propsList.length - 1]] = value;
}
