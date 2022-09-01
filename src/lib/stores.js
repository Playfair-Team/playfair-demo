import { writable } from 'svelte/store';
export let cellStore = writable([]);
export let variableStore = writable([]);
export let notebookStore = writable([]);
export const modal = writable(null);
