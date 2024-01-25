<script>
    let valor = 'init'
    let checkBoxValue = false;

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

    }
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
</form>