<script>
import Things from "./Things.svelte"
    	let things = [
		{ id: 1, name: 'apple' },
		{ id: 2, name: 'banana' },
		{ id: 3, name: 'carrot' },
		{ id: 4, name: 'doughnut' },
		{ id: 5, name: 'egg' }
	];

function eliminarElemento(){
    things = things.slice(1)
}

</script>
<!--Bucle each usando un elemento id como referencia para poder eliminar un valor-->
{#each things as elemento(elemento.id)}
    <Things nombre={elemento.name}/>
{/each}

<button class="buttonClass" on:click={eliminarElemento}>
    Eliminar objeto
</button>

<style>
    .buttonClass {
    font-size:15px;
    font-family:Arial;
    width:140px;
    height:50px;
    border-width:1px;
    color:#fff;
    border-color:#d02718;
    font-weight:bold;
    border-top-left-radius:6px;
    border-top-right-radius:6px;
    border-bottom-left-radius:6px;
    border-bottom-right-radius:6px;
    box-shadow:inset 0px 1px 0px 0px #f5978e;
    text-shadow:inset 0px 1px 0px #810e05;
    background:linear-gradient(#f24537, #c62d1f);
    }

    .buttonClass:hover {
    background: linear-gradient(#c62d1f, #f24537);
    }
</style>