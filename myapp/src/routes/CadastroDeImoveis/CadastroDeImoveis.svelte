<script lang="ts">

type Imovel ={
    nomeProprietario:string,
    quantidadeQuarto:number,
    quantidadeBanheiro:number,
    contemGaragem:string,
    precoImovel:number
}

const imoveis: Imovel[] = [];

let inputNomePropritario:string =''
let inputQuantidadeQuarto:number = 0
let inputQuantidadeBanheiro:number = 0
let radioContemGaragem:string =''
let inputPrecoImovel:number = 0

let chamaJanela:boolean = false;
let janelaDeConsultaImovel: boolean = false;

function ChamandoFormulario(){
    if(!chamaJanela){
        chamaJanela = true
    }else{
        chamaJanela = false
    }  
}

function CadastrandoImóvel(nome:string, quarto:number, banheiro:number, garagem:string, preco:number){

    let novoImóvel:Imovel ={
        nomeProprietario:nome, 
        quantidadeQuarto:quarto, 
        quantidadeBanheiro:banheiro, 
        contemGaragem:garagem,
        precoImovel:preco
    }
    console.log(`Antes do push ${imoveis.length}`)
    imoveis.push(novoImóvel)
    alert(`Parbens sr(a) ${nome} seu imóvel foi cadastrado`);
    console.log(`Depois do push ${imoveis.length}`)
}

function ChamandoLista(){
      if(!janelaDeConsultaImovel){
        janelaDeConsultaImovel = true
    }else{
        janelaDeConsultaImovel = false
    }  
}

</script>

<section class="section is-half ">
  <article class="message">
  <div class="message-header">
    <p class="has-text-primary-100">Cadastro de Imóveis</p>
    {#if chamaJanela === false}
    <button class="button is-white" on:click={() => ChamandoFormulario()}>Adicionar Imóvel.</button>
    {:else}
        <article class="is-flex is-flex-direction-row is-flex-wrap-wrap	is-justify-content-space-between pl-2 containerCadastroImovel">
       <label class="is-flex is-flex-direction-column has-text-primary-100" >
        Nome do proprietário:
        <input
        class="input estiloInput is-rounded is-small mt-2"
        type="text"
        placeholder="Nome aqui"
        bind:value={inputNomePropritario}
        />
       </label>

       <label class="is-flex is-flex-direction-column has-text-primary-100">
        Quantidade de Quartos:
         <input
        class="input estiloInput is-rounded is-small mt-2"
        type="number"
        placeholder="0"
        bind:value={inputQuantidadeQuarto}
        />
       </label>
       <label class="is-flex is-flex-direction-column has-text-primary-100" >
        Quantidade de Banheiros:
         <input
        class="input estiloInput is-rounded is-small mt-2"
        type="number"
        placeholder="0"
        bind:value={inputQuantidadeBanheiro}
        />
       </label>

        <label class="is-flex is-flex-direction-column has-text-primary-100">
        Preço do Imóvel:
         <input
        class="input estiloInput is-rounded is-small mt-2"
        type="number"
        placeholder="Link input"
        bind:group={inputPrecoImovel}
        />
       </label>

       <div>
         <p class="has-text-primary-100">Possui garagem:</p>
        <label><input type="radio" bind:group={radioContemGaragem} value="sim"/> Sim </label>
        <label><input type="radio" bind:group={radioContemGaragem} value="não"/> Não </label>
       </div>

       

       <button class="button is-white mt-2" on:click={() => CadastrandoImóvel(inputNomePropritario, inputQuantidadeQuarto, inputQuantidadeBanheiro, radioContemGaragem, inputPrecoImovel)}>Cadastrar Imóvel.</button>
       
    </article>
    {/if}

   {#if chamaJanela === true}
   <button class="delete" aria-label="delete" on:click={() => ChamandoFormulario()}></button>
   {/if}
  

</div>
  <div class="message-body is-flex is-flex-direction-row is-justify-content-space-between">
    <p class="has-text-primary-dark">Listar imóveis</p>
  
    {#if janelaDeConsultaImovel === false}
    <button class="button is-white" on:click={() => ChamandoLista()}>Listar Imóvel.</button>
    {:else}
        {#if imoveis.length === 0}
            <p>
                Sem imóvel cadastrado.
            </p>
        {:else}
        <article class="is-flex is-flex-direction-row is-flex-wrap-wrap	is-justify-content-space-between pl-2 containerListaImovel">
          
            {#each imoveis as imovel}
             <div class="card config_layou_card">
             
                <div class="card-content">
                    <div class="media">
                    <div class="media-content">
                        <p class="title is-4">{imovel.nomeProprietario}</p>
                        <p class="subtitle is-6">@{imovel.nomeProprietario}</p>
                    </div>
                    </div>

                    <div class="content">
                     <p>Quantidade de Quarto: <strong>{imovel.quantidadeQuarto}</strong></p>
                     <p>Quantidade de Banheiro: <strong>{imovel.quantidadeBanheiro}</strong></p>
                     <p>Contem Garagem: <strong>{imovel.contemGaragem}</strong></p>
                     <p>Preço pedido: <strong>{imovel.precoImovel}</strong></p>
                    <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                    </div>

                </div>
            </div>

            {/each}
        </article>

        {/if}
    {/if}

   {#if janelaDeConsultaImovel === true}
   <button class="delete" aria-label="delete" on:click={() => ChamandoLista()}></button>
   {/if}
  
    
  </div>
  </article>


</section>

<style>
    .estiloInput{
        width: 100%;
    }
    .config_layout_card{
        width: 20%;
        height: 20%;
    }
</style>