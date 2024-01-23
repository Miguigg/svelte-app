<script>
    /**
	 * @type {string | number}
	 */
     export let nombre;

    const emojis = {
		apple: '🍎',
		banana: '🍌',
		carrot: '🥕',
		doughnut: '🍩',
		egg: '🥚'
	};

    // @ts-ignore
    const emoji = emojis[nombre];

</script>

<p>{emoji} = {nombre}</p>