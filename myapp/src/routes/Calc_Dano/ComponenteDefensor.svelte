<script lang="ts">
    export let NomeDoDefensor:string;
    export let PontosDeVida:number;
    export let PontosDeDefesa:number;
    export let StatusShield:boolean;
</script>

<article class="display_tanque">
      <label for="input_nome_tanque">Nome do Defensor</label>
      <input type="text" id="input_nome_tanque" bind:value={NomeDoDefensor}>
      <label for="input_pontos_vidas_tanque">Pontos de vida</label>
      <input type="text" id="input_pontos_vidas_tanque" bind:value={PontosDeVida} >
      <label for="input_pontos_defesa_tanque" >Poder de defesa</label>
      <input type="text" id="input_pontos_defesa_tanque" bind:value={PontosDeDefesa}>
      <label for="input_escudo_tanque">Possui escudo</label>
      <input type="checkbox" id="input_escudo_tanque" bind:checked={StatusShield}>
    </article>