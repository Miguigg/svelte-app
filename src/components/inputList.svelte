<script>
    let lista = ['red','green','blue']
    let seleccionado = lista[0]
</script>


<!--

En los eventos de botones (por ejemplo) se le pueden meter modificadores

preventDefault — calls event.preventDefault() before running the handler. Useful for client-side form handling, for example.
once — remove the handler after the first time it run

https://learn.svelte.dev/tutorial/event-modifiers
	
-->

<div>
    <p style="color: {seleccionado}">Selecciona color</p>
	<!--Bucle each por la lista-->
    {#each lista as color}
        <button
        aria-current={seleccionado === color}
        aria-label={color}
        style="background: {color}"
        on:click={() => seleccionado= color}
        ></button>
    {/each}
</div>


<!--El |once hace que solo funcione una vez-->
<button on:click|once={()=>alert('Click una y no más')}>
	Click
</button>


<style>
	h1 {
		transition: color 0.2s;
	}

	div {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		grid-gap: 5px;
		max-width: 400px;
	}

	button {
		aspect-ratio: 1;
		border-radius: 50%;
		background: var(--color, #fff);
		transform: translate(-2px,-2px);
		filter: drop-shadow(2px 2px 3px rgba(0,0,0,0.2));
		transition: all 0.1s;
	}

	button[aria-current="true"] {
		transform: none;
		filter: none;
		box-shadow: inset 3px 3px 4px rgba(0,0,0,0.2);
	}
</style>