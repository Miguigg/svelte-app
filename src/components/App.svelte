<script>
    //Export para poder pasarle la variable por parametro
    export let name = 'Svelte';
    let src =  'favicon.png';
    /**
	 * @type {any[]}
	 */
    let numbers = [];
    $: if(numbers.length > 0){
        alert(numbers)
    }

    let inc = 0;

    //Cuando la variable inc cambie, esta se reasignará
    $: doble = inc * 2;
    //Cuando el valor cambie se hace un console log
    $: if(doble > 1){
        console.log(`El valor actual es ${inc}`)
        numbers.push(doble);
        numbers = numbers;
    }
    //Funcion que llamma el click del boton
    function incremento(){
        inc += 1;
    }

</script>
















<h1>Hola Mundo, Hola {name.toLocaleUpperCase()}</h1>

<img src={src} alt="Logo"/>
<br/>

<button class="buttonClass" on:click={incremento}>
    Numero actual {inc}
    {inc === 1 ? 'time' : 'times'}
</button><br/><br/>

<div class="card">
    <p class="heading">
        El doble del valor es {doble}
      </p>
    
</div>

<!--Renderizado condicional-->
{#if inc > 0}
    <p>{inc} ya supera el 0</p>
{:else if inc > 5}
    <p>Es mayor que 5</p>
{:else}
    <p>El valor aun no supera el 0</p>
{/if}









<style>
    p{
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        color:brown;
        font-size: large;
    }

    .buttonClass {
        font-size:15px;
        font-family:Arial;
        width:140px;
        height:50px;
        border-width:1px;
        color:#fff;
        border-color:#18ab29;
        font-weight:bold;
        border-top-left-radius:28px;
        border-top-right-radius:28px;
        border-bottom-left-radius:28px;
        border-bottom-right-radius:28px;
        text-shadow: 1px 1px 0px #2f6627;
        background:#44c767;
    }

    .buttonClass:hover {
        background: #5cbf2a
    }

    .card {
    position: relative;
    width: 190px;
    height: 254px;
    background-color: #000;
    display: flex;
    flex-direction: column;
    justify-content: end;
    padding: 12px;
    gap: 12px;
    border-radius: 8px;
    cursor: pointer;
    }

    .card::before {
    content: '';
    position: absolute;
    inset: 0;
    left: -5px;
    margin: auto;
    width: 200px;
    height: 264px;
    border-radius: 10px;
    background: linear-gradient(-45deg, #e81cff 0%, #40c9ff 100% );
    z-index: -10;
    pointer-events: none;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .card::after {
    content: "";
    z-index: -1;
    position: absolute;
    inset: 0;
    background: linear-gradient(-45deg, #fc00ff 0%, #00dbde 100% );
    transform: translate3d(0, 0, 0) scale(0.95);
    filter: blur(20px);
    }

    .heading {
    font-size: 20px;
    text-transform: capitalize;
    font-weight: 700;
    }

    .card p:not(.heading) {
    font-size: 14px;
    }

    .card p:last-child {
    color: #e81cff;
    font-weight: 600;
    }

    .card:hover::after {
    filter: blur(30px);
    }

    .card:hover::before {
    transform: rotate(-90deg) scaleX(1.34) scaleY(0.77);
    }
    
</style>