import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'entropian',
		selectedPlanet: 'Calypso',
		x: 0,
		y: 0,
		z: 0,
		label: "Waypoint"
	}
});

export default app;