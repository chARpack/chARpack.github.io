// import { writable } from 'svelte/store';
// import { browser } from '$app/environment';

// const DEFAULT_VERSION = 'master';
// const stored = localStorage.getItem('selectedVersion');
// const initial = browser	? JSON.parse(localStorage.getItem('selectedVersion') || DEFAULT_VERSION): DEFAULT_VERSION;
// export const selectedVersion = writable(initial);

// // Save version to localStorage when it changes
// if (browser) {
//     selectedVersion.subscribe((value) => {
//         localStorage.setItem('selectedVersion', JSON.stringify(value));
//     });
// }
import { writable } from 'svelte/store';
const DEFAULT_VERSION = 'master';
export const versionstore = writable(DEFAULT_VERSION);
