<script>
    import Cuerpo from "../components/App.svelte";
    import Colores from "../components/inputList.svelte";
    import ListaComida from "../components/listaComida.svelte";
    import DomForward from "../components/DomForward.svelte";
    import Inputs from "../components/inputs.svelte";
	import InputList from "../components/inputList.svelte";
    import CicloDeVida from "../components/cicloDeVida.svelte";
    import Mostrar from "../components/stores/mostrar.svelte";
    import Motion from "../components/parte2/motion.svelte";
    import Teclado from "../components/parte2/teclado.svelte";
    function forward(){
        alert('forward')
    }
    /**
	 * @type {string}
	 */
    let pin 
    $: view = pin ? pin.replace(/\d(?!$)/g, '•') : 'Introduce tu pin';
</script>

<div class="parent">
    <div class="div1">
       <!--<TestComponent name="someone"/>-->
        <Cuerpo name="Mano"/>
        <Colores/>
        <Mostrar/>
        <Motion/><br/><br/>
        <h1 style="opacity: {pin ? 1 : 0.4}">{view}</h1>
        <Teclado
        bind:value = {pin}
        />
    </div>
    <div class="div2">
        <ListaComida/>
        <DomForward on:click={forward}/>
        <InputList/>
        <Inputs/>
        <div class="divimg">
            <CicloDeVida/>
        </div>
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
    .divimg{
        position:fixed;
        bottom:0;
        left:5%;
        width:auto;
    }
</style>