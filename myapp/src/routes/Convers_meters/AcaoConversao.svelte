<script lang="ts">
    
    let ValorEmMetros:number;
    let EscolhaUnidadeDeConversão:string;
    let ValorConvertido:number;
    let TextoResultado:string;

    function ConvertValue(valorBruto:number, unidadeConversao:string){
        
        switch(unidadeConversao){
            case 'milímetro':
            ValorConvertido = valorBruto*1000
            TextoResultado = `${ValorConvertido} ${unidadeConversao.charAt(0).toUpperCase() + unidadeConversao.slice(1)}`    
            break;
            case 'centímetro':
                ValorConvertido = valorBruto*100
                TextoResultado = `${ValorConvertido} ${unidadeConversao.charAt(0).toUpperCase() + unidadeConversao.slice(1)}`
            break;
            case 'decímetro':
                ValorConvertido = valorBruto*10
                TextoResultado = `${ValorConvertido} ${unidadeConversao.charAt(0).toUpperCase() + unidadeConversao.slice(1)}`

            break;
            case 'decâmetro':
                ValorConvertido = valorBruto/10
                TextoResultado = `${ValorConvertido} ${unidadeConversao.charAt(0).toUpperCase() + unidadeConversao.slice(1)}`

            break;
            case 'hectômetro':
                ValorConvertido = valorBruto/100
                TextoResultado = `${ValorConvertido} ${unidadeConversao.charAt(0).toUpperCase() + unidadeConversao.slice(1)}`

            break;
            case 'quilometro':
                ValorConvertido = valorBruto/1000
                TextoResultado = `${ValorConvertido} ${unidadeConversao.charAt(0).toUpperCase() + unidadeConversao.slice(1)}`
            break;
        }
    
        
    
    }

</script>


<section class="section is-flex-direction-column has-background-white ">
   <article class="pb-2">
    <label class="subtitle">Insira o valor em metros:
    <input class="input is-rounded" type="number" bind:value={ValorEmMetros}  placeholder="Rounded input" />
    </label>

    <h1 class="subtitle">Escolha para qual unidade deseja converte:</h1>
    <div class="control is-flex-direction-column">
    <label class="radio ">
        <input type="radio" bind:group={EscolhaUnidadeDeConversão} value="milímetro" name="answer" />
        Milímetro(mm)
    </label>
    <label class="radio">
        <input type="radio" bind:group={EscolhaUnidadeDeConversão} value="centímetro" name="answer" />
        Centímetro(cm)
    </label>
    <label class="radio">
        <input type="radio" bind:group={EscolhaUnidadeDeConversão} value="decímetro" name="answer" />
        Decímetro (dm)
    </label>

   <label class="radio">
    <input type="radio" bind:group={EscolhaUnidadeDeConversão} value="decâmetro" name="answer" />
    Decâmetro (dam)
   </label>
   <label class="radio">
   <input type="radio" name="answer" bind:group={EscolhaUnidadeDeConversão} value="hectômetro"/>
    Hectômetro (hm)
   </label>
   <label class="radio">
   <input type="radio" name="answer"bind:group={EscolhaUnidadeDeConversão} value="quilometro" />
    Quilometro (km)
   </label>
    </div>

    <button class="button is-info is-light" on:click={()=> ConvertValue(ValorEmMetros, EscolhaUnidadeDeConversão)} >Converter</button>
   </article>
    

<article class="message is-dark">
  <div class="message-header">
    <p>Unidade Escolhida:
        {#if !EscolhaUnidadeDeConversão}
          <strong>-----</strong> 
        {:else}
        <strong>{EscolhaUnidadeDeConversão.charAt(0).toUpperCase() + EscolhaUnidadeDeConversão.slice(1)}</strong>
        {/if}
    </p>
    
  </div>
  <div class="message-body">
   {#if !TextoResultado}
   <p></p>
    {:else}
    <h1>{TextoResultado}</h1>
   {/if}
  </div>
</article>

</section>

