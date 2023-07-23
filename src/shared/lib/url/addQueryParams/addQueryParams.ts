type ParameterName = string;
type ParameterValue = string;
type Parameters = OptionalRecord<ParameterName, ParameterValue>;

export function getQueryParams(params: Parameters) {
	const searchParams = new URLSearchParams(window.location.search);
	/*console.log('@getQueryParams/searchParams', searchParams.toString());*/

	Object.entries(params).forEach(([name, value]) => {
		if (value !== undefined) {
			searchParams.set(name, value);
		} else {
			searchParams.delete(name);
		}
	});

	return `?${searchParams.toString()}`;
}

export function addQueryParams(params: Parameters) {
	window.history.pushState(null, '', getQueryParams(params));
}
