<script>
    import {tweened} from 'svelte/motion'
    //para darle animacion bonita
    import {cubicOut} from 'svelte/easing'
    import {fade} from 'svelte/transition'

    const progressBar = tweened(0, {
        duration:400,
        easing: cubicOut
    })
    let visible = true;
    let todos = [
        {done: false, text: 'anotacion 1'},
        {done: false, text: 'anotacion 2'},
        {done: false, text: 'anotacion 3'}
    ]

    //añade un campo nuevo a la lista, sin nombre porque lo establece el usuario
    function add(){
        todos = todos.concat({
            done:false,
            text:''
        })
    }

    //Filtra y elimina los dones
    function clear(){
        todos = todos.filter((t) => !t.done);
    }

    $: quedan = todos.filter((t) => !t.done).length;
    /*
    
    delay — milliseconds before the tween starts

    duration — either the duration of the tween in milliseconds, or a (from, to) => milliseconds function allowing you to (e.g.) specify longer tweens for larger changes in value
    
    easing — a p => t function
    
    */
   /**
	 * @type {number}
	 */
   let porcentaje
   progressBar.subscribe((valor)=>{
        porcentaje = valor;
    })
</script>

<progress value={$progressBar}/>

<button on:click={() => progressBar.set(0)}>
	0%
</button>

<button on:click={() => progressBar.set(0.25)}>
	25%
</button>

<button on:click={() => progressBar.set(0.5)}>
	50%
</button>

<button on:click={() => progressBar.set(0.75)}>
	75%
</button>

<button on:click={() => progressBar.set(1)}>
	100%
</button>

{#if porcentaje === 1}
<p>Has llegado al maximo</p>
{/if}
<br/>
<label>
    <input type="checkbox" bind:checked={visible}/>
    Visible o no
</label>

{#if visible}
    <p transition:fade>Textoooo</p>
{/if}



<ul class="todos">
    {#each todos as elegido }
        <li class:done = {elegido.done}>
            <input
                type="checkbox"
                bind:checked={elegido.done}
            />
            <input
                type="text"
                bind:value={elegido.text}
            />
        </li>
    {/each}
</ul>


<p>Quedan {quedan}</p>

<button on:click={add}>
    Añadir
</button>
<button on:click={clear}>
    Eliminar
</button>

<style>
	progress {
		display: block;
		width: 100%;
	}

    .centered {
		max-width: 20em;
		margin: 0 auto;
	}

	.done {
		opacity: 0.4;
	}

	li {
		display: flex;
	}

	input[type="text"] {
		flex: 1;
		padding: 0.5em;
		margin: -0.2em 0;
		border: none;
	}
</style>