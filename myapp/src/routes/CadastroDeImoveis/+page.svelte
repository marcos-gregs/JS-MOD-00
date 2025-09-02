<script lang="ts">
 import '../injectBulma.css'
    import CadastroDeImoveis from './CadastroDeImoveis.svelte';
    import DescribeExe from './DescribeExe.svelte';
</script>
<main class="main_root is-flex-direction-row">
    <DescribeExe/>
    <CadastroDeImoveis/>
</main>

<style>
.main_root{
    width: 100vw;
    height: 100vh;
}

</style>