<script>
    import {count} from './store.js'

    function sumar(){
        count.update((n) => n+1);
    }
</script>

<button on:click={sumar}>
    +
</button>