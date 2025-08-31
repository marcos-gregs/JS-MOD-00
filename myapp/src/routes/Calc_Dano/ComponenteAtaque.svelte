   
<script lang="ts">
    export let NomeDoAtacante:string;
    export let PontosDeAtaque:number;
</script>   
<article class="display_atacante">
    <label for="input_nome_atacante">Nome do atacante</label>
    <input type="text" id="input_nome_atacante" bind:value={NomeDoAtacante} >
    <label for="input_pontos_ataque_atacante">Poder de ataque</label>
    <input type="text" id="input_pontos_ataque_atacante" bind:value={PontosDeAtaque}>
</article>

<style>
    .display_atacante{
        width: 20vw;
    }
</style>