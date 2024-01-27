<script>
    import {paint} from '../lib/gradient.js';
    import {onMount} from 'svelte';

    onMount(()=>{
        const canvas = document.getElementById('colorines')
        const context = canvas.getContext('2d')
        let frame = requestAnimationFrame(function loop(t) {
			frame = requestAnimationFrame(loop);
			paint(context, t);
		});

		return () => {
			cancelAnimationFrame(frame);
		};
	});
</script>

<!--
<canvas
id="colorines"	
width={12}
height={12}/>

-->

<style>
	canvas {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: #666;
		mask: url(./svelte-logo-mask.svg) 50% 50% no-repeat;
		mask-size: 60vmin;
		-webkit-mask: url(./svelte-logo-mask.svg) 50% 50% no-repeat;
		-webkit-mask-size: 60vmin;
	}
</style>