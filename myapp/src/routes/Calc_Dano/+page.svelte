<script lang="ts">
    import { string } from "mathjs";
import ComponenteAtaque from "./ComponenteAtaque.svelte";
    import ComponenteDefensor from "./ComponenteDefensor.svelte";
import DescripeExer from "./DescripeExer.svelte";

type AttackerChampion = {
  nome:string,
  ataque:number
}

type DefenderChampion = {
  nome:string,
  vida:number,
  defesa:number,
  shield:boolean
}

let NomeDoAtacante:string, NomeDoDefensor:string;
let PontosDeAtaque:number, PontosDeDefesa:number, PontosDeVida:number;
let StatusShield: boolean;

function ActionCombat(NomeAtacante: string, PontosDeAtaque: number, NomeDefesa: string,  PontoDeDefesa:number, PontosDeVida:number, StatusShield:boolean ){
  
  let Atacante: AttackerChampion ={
    nome: NomeAtacante,
    ataque: PontosDeAtaque 
  }

  let Defesa: DefenderChampion ={
    nome:NomeDefesa,
    vida:PontosDeVida,
    defesa:PontoDeDefesa,
    shield:StatusShield
  }

  let DanoCausado:number = Atacante.ataque - Defesa.defesa

  if(Atacante.ataque > Defesa.defesa && Defesa.shield === false){
    Defesa.vida =- DanoCausado;
  } 
  if(Atacante.ataque > Defesa.defesa && Defesa.shield === true){
    Defesa.vida =- (DanoCausado/2);
  } 
  if(Atacante.ataque <= Defesa.defesa){
    Defesa.vida =- 0;
  }

}



</script>
<div id="root_main">

  <!-- Descrição do exercício -->
  <DescripeExer></DescripeExer>

  <!-- Ações -->
  <section id="content_action">
  
    <ComponenteAtaque bind:NomeDoAtacante={NomeDoAtacante} bind:PontosDeAtaque={PontosDeAtaque} /> 
    <ComponenteDefensor bind:NomeDoDefensor={NomeDoDefensor} bind:PontosDeDefesa={PontosDeDefesa} bind:PontosDeVida={PontosDeVida} bind:StatusShield={StatusShield} />


    <input type="button" value="teste" on:click={()=> ActionCombat(NomeDoAtacante,PontosDeAtaque, NomeDoDefensor, PontosDeDefesa, PontosDeVida, StatusShield)}>


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