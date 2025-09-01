<script lang="ts">
    import DescripeExer from "./DescripeExer.svelte";
    import '../injectBulma.css'
    import AcaoConversao from "./AcaoConversao.svelte";
   



</script>
<div id="root_main">

  <!-- Descrição do exercício -->
  <DescripeExer/>

  <!-- Ações -->
    <AcaoConversao/>
</div>

<style>
    *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
#root_main{
    background-color: black;
    height: 100vh;
    display: flex;
    flex-direction: row;
    
}

</style>