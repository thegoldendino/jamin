import type { SvelteComponent } from 'svelte';
import type { InputConfig } from './config.type';

export type FieldType = {
	dbKey: Array<string>;
	config: InputConfig;
	el: HTMLElement;
	component?: SvelteComponent;
};
