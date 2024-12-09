interface Headers {
	subject: string;
	body: string;
}

export const toSearchString = (searchParams: Record<string, string> = {}) => {
	return Object.keys(searchParams)
		.map((key) => `${key}=${encodeURIComponent(searchParams[key])}`)
		.join('&');
};

export const createMailtoLink = (email: string, headers: Headers) => {
	let link = `mailto:${email}`;
	if (headers) {
		link += `?${toSearchString(headers as unknown as Record<string, string>)}`;
	}
	return link;
};
