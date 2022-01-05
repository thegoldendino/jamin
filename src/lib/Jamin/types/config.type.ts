export type Config = {
	site: string;
	schemaVersion: string;
	startUrl: string;
	rootEl: string;
	global: { [k: string]: InputConfig };
	pages: { [k: string]: InputConfig };
};

export type InputConfig = {
	label?: string;
	fields?: { [k: string]: InputConfig };
	type?: 'object' | 'array' | 'text' | 'email' | 'image' | 'multiline';
	applyTo?: string;
};
