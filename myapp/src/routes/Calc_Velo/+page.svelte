<script lang="ts">
    import DescripeExer from "./DescripeExer.svelte";
    import '../injectBulma.css';
    type Car ={
      nome:string,
      velocidade:number
    }
    
    let NomePrimeiroCar:string;
    let NomeSegundoCar:string
    let VelocidadePrimeiroCar:number;
    let VelocidadeSegundoCar:number;
    let ResultadoTesteCarro:string='';


    function TesteDeVelocidade(parametroNomePrimeiroCarro:string, parametroVelocidadePrimeiroCarro:number, parametroNomeSegundoCarro:string, parametroVelocidadeSegundoCarro:number){
      let propriedadePrimeiroCarro:Car ={
        nome:parametroNomePrimeiroCarro,
        velocidade:parametroVelocidadePrimeiroCarro
      }
      let propriedadeSegundoCarro:Car ={
        nome:parametroNomeSegundoCarro,
        velocidade:parametroVelocidadeSegundoCarro
      }

      if(propriedadePrimeiroCarro.velocidade > propriedadeSegundoCarro.velocidade){
        let DifenrecaDeVelocidade = propriedadePrimeiroCarro.velocidade - propriedadeSegundoCarro.velocidade
        ResultadoTesteCarro = `Nome:${propriedadePrimeiroCarro.nome}\nVelocida:${propriedadePrimeiroCarro.velocidade}`

      }else if(propriedadePrimeiroCarro.velocidade === propriedadeSegundoCarro.velocidade){
         ResultadoTesteCarro = `As velocidades do carros são iguais`
      }else{
        let DifenrecaDeVelocidade = propriedadeSegundoCarro.velocidade - propriedadePrimeiroCarro.velocidade  
        ResultadoTesteCarro = `Nome:${propriedadeSegundoCarro.nome}\nVelocida:${propriedadeSegundoCarro.velocidade}`
      }

    }
    

</script>
<div id="root_main">

  <!-- Descrição do exercício -->
  <DescripeExer></DescripeExer>

  <!-- Ações -->
  <section id="content_action">

    <!-- Primeiro veículo -->
    <div id="first_car_content">
      <label for="input_first_car_name" class="label_text">
        Digite o nome do Primeiro Veiculo:
        <input type="text" id="input_first_car_name" bind:value={NomePrimeiroCar} />
      </label>

      <label for="input_first_car_move_speed" class="label_text">
        Digite a velocidade do Primeiro Veiculo:
        <input type="number" id="input_first_car_move_speed" bind:value={VelocidadePrimeiroCar}/>
      </label>
    </div>

    <!-- Segundo veículo -->
    <div id="second_car_content">
      <label for="input_second_car_name" class="label_text">
        Digite o nome do Segundo Veiculo:
        <input type="text" id="input_second_car_name" bind:value={NomeSegundoCar}/>
      </label>

      <label for="input_second_car_move_speed" class="label_text">
        Digite a velocidade do Segundo Veiculo:
        <input type="number" id="input_second_car_move_speed" bind:value={VelocidadeSegundoCar} />
      </label>
    </div>

    <!-- Resultado -->
    <div id="third_car_content">
      <h4>
        Automóvel mais rapido
      </h4>
        <p>{ResultadoTesteCarro}</p>    
          
    
      <input type="submit" id="input_third_car_btn" on:click={()=> TesteDeVelocidade(NomePrimeiroCar,VelocidadePrimeiroCar,NomeSegundoCar,VelocidadeSegundoCar)} value="Comparar" />
    </div>

  </section>
</div>


<style>
  
#root_main{
    background-color: black;
     display: flex;
    flex-direction: row;
    
}
#content_descripe{
    width: 50%;
    height: 100vh;
   
}
#content_action{
    width: 50%;
    height: 100vh;
    display:flex;
    flex-direction: column;
    padding-left: 5%;
    padding-top: 2%;  
    background-color: white;
}
#first_car_content, #second_car_content, #third_car_content{
    width: 70%;
    align-items: center;
    height: 15%;
    display: grid;
    grid-template-columns: repeat(2,1fr);
   
}
#input_third_car_result{
    height: 20vh;
}
#input_third_car_btn{
    width: 50%;
    height: 35%;
    border-radius: 2vh;
    border-style: none;
}
</style>