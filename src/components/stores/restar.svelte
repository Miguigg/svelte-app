<script>
    import {count} from './store.js'

    function resta(){
        count.update((n)=> n-1);
    }
</script>

<button on:click={resta}>
    -
</button>