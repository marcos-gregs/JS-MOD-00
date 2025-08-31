<script lang="ts">
    import DescripeExer from "./DescripeExer.svelte";

   



</script>
<div id="root_main">

  <!-- Descrição do exercício -->
  <DescripeExer/>

  <!-- Ações -->
  <section id="content_action">
  

  </section>
</div>

<style>
    *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
#root_main{
    background-color: black;
     display: flex;
    flex-direction: row;
    
}

#content_action{
    width: 50%;
    height: 100vh;
    display: grid;
    background-color: white;
}
</style>