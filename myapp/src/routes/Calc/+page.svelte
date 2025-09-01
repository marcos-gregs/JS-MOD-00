<script lang="ts">
  import '../injectBulma.css'   

  let displayNumber = ['0','1','2','3','4','5','6','7','8','9']
  let displayOpeChance =['-','+','*','/','%','=']
  let displayValue ='';
  let orderCount = [];
  function postNumber(num:string){
       displayValue += num;
  }

  function postOperation(simbolo:string){
        if(displayValue.length ==0){
            alert('Insira um numero.')
        } 
        orderCount.push(Number(displayValue))
        
        if (simbolo === '='){
          let getSimbol = orderCount[1];
          let resultaOperacao = execCalc(orderCount,getSimbol);
          displayValue = String(resultaOperacao)
        }
        else{
          if(orderCount.length <2){
          displayValue = simbolo          
          orderCount.push(simbolo)
          displayValue = ''
          }else {
          alert('Não é possivel')
          }
          
        }
  }
  function execCalc(element, branch_element){
        switch (branch_element){
            case "+":
                let acount_amount =  Number(element[0]) + Number(element[2]);
                element.splice(0, element.length);
                return acount_amount;
                
                
            case "-":
                let acount_subtract =  Number(element[0]) - Number(element[2])
                element.splice(0, element.length);
                return acount_subtract
            case "*":
                let acount_multiplication =  Number(element[0]) * Number(element[2])
                element.splice(0, element.length);
                return acount_multiplication
            case "/":
                let acount_division =  Number(element[0]) / Number(element[2])
                element.splice(0, element.length);
                return acount_division
            case "%":
                element.splice(0, element.length);
                let acount_division_real =  Number(element[0]) % Number(element[2])          
                return acount_division_real
  }}
   
  

</script>
<div id="root_main">
  <section id="content_display">
    <h1 class="title_content_display">Exerc 2 - Calc</h1>
    <p class="subtitle_content_display">
      Um programa em javascript que permita inserir dois valores numéricos e então calcule o resultado das quatro operações básicas (soma, subtração, multiplicação e divisão)
    </p>
  </section>

  <section id="action_display">
    <div id="view_calc_display">
      <input
        type="text"
        id="view_element_content"
        
        bind:value={displayValue}
      />
    </div>

    <div id="operation_display">
      {#each displayOpeChance as operation_display }
        <input type="submit" class="table_operation" on:click={()=> postOperation(operation_display)} bind:value={operation_display} />  
      {/each}
    </div>

    <form id="table_display" >
      {#each displayNumber as numeros}
      
      <input type="submit" on:click={() => postNumber(numeros)} class="table_number" bind:value={numeros} />
          

      {/each}
    </form>
  </section>
</div>


<style>
    *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
#root_main{
    width: 100%;
    height: 100%;
    background-color: black;
    display: flex;
    flex-direction: row;
    
}
#content_display{
    width: 40%;
    height: 100vh;
    display: flex;
    flex-direction: column; 
    row-gap: 5%;
    
}
.title_content_display{
    color: white;
    margin-left: 5%;
    margin-top: 2%;
}
.subtitle_content_display{
    width: 80%;
    color: white;
    margin-left: 5%;
}
#action_display{
    display: flex;
    flex-direction: column;
    background-color: white;
    row-gap: 1%;
    width: 60%;
}
#table_display{
    margin-left: 2%;
    height: 40%;
    width: 60%;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    column-gap: 2%;
    
}
.table_number{
    width: 15rem;
    height: 3rem;
}
#operation_display{
    margin-left: 2%;

    display:grid;
    grid-template-columns: repeat(6, 1fr);
}
.table_operation{
    height: 40%;
    width: 90%;
    height: 2rem;
    align-items: center;
}
#view_calc_display{
    width: 96%;
    height: 4rem;
    margin-top: 2%;
    margin-left: 2%;
}
#view_element_content{
    height: 100%;
    width: 100%;
    font-size: 2rem;
}
</style>