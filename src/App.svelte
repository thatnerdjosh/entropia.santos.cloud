<script>
	export let name, x, y, z, label, selectedPlanet, command;

	let planets = ["Space", "Calypso", "Arkadia"]
	function updateCoords() {
		command = `/wp [${selectedPlanet}, ${x}, ${y}, ${z}, ${label}]`;
	}
	updateCoords();
</script>

<main>
	<h1>Hello {name}</h1>
	<select bind:value={selectedPlanet} on:change="{updateCoords}">
		{#each planets as planet}
		<option value={planet}>{planet}</option>
		{/each}
	</select>
	<label for="longitude">Longitude:</label>
	<input 
		type="text" 
		name="longitude"
		bind:value={x} 
		on:input="{updateCoords}"/>
	<label for="latitude">Latitude:</label>
	<input 
		type="text" 
		name="latitude"
		bind:value={y} 
		on:input="{updateCoords}"/>
	<label for="altitude">Altitude:</label>
	<input 
		type="text" 
		name="altitude"
		bind:value={z} 
		on:input="{updateCoords}"/>
	<label for=longitude>Label:</label>
	<input 
		type="text" 
		name="label"
		bind:value={label} 
		on:input="{updateCoords}"/>

		<p>Your waypoint command is:</p>
		<pre>{command}</pre>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
