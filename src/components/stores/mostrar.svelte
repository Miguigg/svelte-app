<script>
    import {count} from './store.js'
    import {onDestroy} from 'svelte'
    import Sumar from './sumar.svelte';
    import Restar from './restar.svelte';
    import Reset from './reset.svelte';

    /**
	 * @type {number}
	 */
    let valorActual;

    count.subscribe((valor)=>{
        valorActual = valor;
    })

</script>

<h1>El valor actual es {valorActual}</h1>

<Sumar/>
<Restar/>
<Reset/>