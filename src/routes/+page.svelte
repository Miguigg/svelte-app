<script>
    import TestComponent from "../components/test-component.svelte";
    import Cuerpo from "../components/App.svelte";
    import Colores from "../components/inputList.svelte";
    import ListaComida from "../components/listaComida.svelte";
    import DomForward from "../components/DomForward.svelte";
    import Inputs from "../components/inputs.svelte";
	import InputList from "../components/inputList.svelte";

    function forward(){
        alert('forward')
    }
</script>

<div class="parent">
    <div class="div1">
       <!--<TestComponent name="someone"/>-->
        <Cuerpo name="Mano"/>
        <Colores/>
    </div>
    <div class="div2">
        <ListaComida/>
        <DomForward on:click={forward}/>
        <InputList/>
        <Inputs/>
    </div>
</div>

<style>
    .parent {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    }

    .div1 { grid-area: 1 / 1 / 2 / 2; }
    .div2 { grid-area: 1 / 2 / 2 / 3; }

</style>