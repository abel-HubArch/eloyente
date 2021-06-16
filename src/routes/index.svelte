<script>
	import RedesSociales from './../components/Redes-sociales.svelte';
	export let segment;
</script>
<h1>El Oyente</h1>

<h2>Redes sociales</h2>
<RedesSociales></RedesSociales>


<li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="noticias/cancilleria-de-peru-envia-nota-de-protesta-a-bolivia">about</a></li>