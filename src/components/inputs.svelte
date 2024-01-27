<script>
    let valor = 'init'
    let checkBoxValue = false;
    let texto = `Hola mundo`
    let valoresSelect = [
        {
            id: 1,
            text: `Valor 1`
        },
        {
            id: 2,
            text: `Valor 2`
        },
        {
            id: 3,
            text: `Valor 3`
        }
    ];
    //variable a la que se le asigna el valor del select
    /**
	 * @type {any}
	 */
    let opcionSeleccionada;
    function procesarForm(){
        alert(opcionSeleccionada)
    }
    //array donde se van metiendo los elemetos seleccionados
    let comidas = []
</script>

<input bind:value={valor}/>
<label>
    <input type="checkbox" checked={checkBoxValue}/>
</label>

<h1>Hola {valor}</h1>

{#if checkBoxValue}
<p>
    Has seleccionado el checkbox
</p>
{:else}
<p>
    No has seleccionado el checkbox
</p>
{/if}

<button disabled={!checkBoxValue}>Aceptar</button>

<form on:submit|preventDefault={procesarForm}>
    <select
    bind:value={opcionSeleccionada}
    >

    {#each valoresSelect as valor}
        <option value={valor.id}>
            {valor.text}
        </option>
    {/each}

    </select>
    <button type="submit">Mandar</button>
</form>

{#each ["cookies","Bread","Meat","Milk"] as elemet}
    <label>
        <input
        type="checkbox"
        name="food"
        value={elemet}
        bind:group={comidas}
        />
        {elemet}
    </label>
{/each}

{#if comidas.length === 0}
<p>No hay elemetos seleccionados</p>
{:else}
<p>Has seleccionado</p>
{/if}

<div class="grid">
    Input
    <textarea bind:value={texto}></textarea>
    <p>{texto}</p>
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: 5em 1fr;
		grid-template-rows: 1fr 1fr;
		grid-gap: 1em;
		height: 100%;
	}

	textarea {
		flex: 1;
		resize: none;
	}
</style>