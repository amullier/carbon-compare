<script>
  import NavBar from "./navbar/NavBar.svelte";
  import Core from "./core/Core.svelte";
</script>

<NavBar />
<div class="container">
  <Core />
</div>

<style>
	.container{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		max-width: 1200px;
		min-height: calc(100% - 85px);
		margin: auto;
	}
</style>
