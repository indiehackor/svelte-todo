import App from './App.svelte';

let items = [
	{ name: "Kake", done: false },
	{ name: "Proteins", done: false },
	{ name: "Eggs", done: false }
];

const app = new App({
	target: document.body,
	props: {
		items,
	}
});

export default app;