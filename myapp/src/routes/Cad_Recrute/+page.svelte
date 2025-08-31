<script lang="ts">
    import DescripeExe from "./DescripeExe.svelte";
    let NameUser = '';
    let CourseUser = '';
    let DataNascUser = '';
    let getDataNascUser = '';

    let objResultSearch:Record<string, unknown> ;
    
    let ListUser= [];

    function AddUser(nameUser: string, courseUser:string, dateNascUser:string){
      const PropriedadesDoUsuário = {name: nameUser, course: courseUser, data_nasc: dateNascUser}
      ListUser.push(PropriedadesDoUsuário);
      return alert(`Usuário ${nameUser} adicionado com sucesso!`);
    }

    function SearchUser(){
      const SearchDataNascimento = ListUser.find((user) => user.data_nasc === getDataNascUser);
      if(!SearchDataNascimento){
        console.log('Usuáio não localizado');
      }else{
        console.log(SearchDataNascimento);
        objResultSearch = SearchDataNascimento;
        
      }
      
    }

</script>
<div id="root_main">
  <!-- Conteúdo principal -->
  <DescripeExe></DescripeExe>

  <!-- Ações principais -->
  <div class="main_action_display">
    
    <!-- Formulário de cadastro -->
    <section id="form_display">
      <label for="input_name">Digite seu nome
        <input type="text" class="input_name" placeholder="Digite seu nome" bind:value={NameUser} />
      </label>
      <label for="input_study">Digite seu curso
        <input type="text" class="input_study" placeholder="Digite seu curso" bind:value={CourseUser}/>
      </label>
      <label for="input_dtnasc">Digite sua data de nascimento
        <input type="date" class="input_dtnasc" placeholder="Digite sua data de nascimento" bind:value={DataNascUser} />
      </label>
      <button class="input_submit" on:click = { () => AddUser(NameUser, CourseUser, DataNascUser) }>
        Cadastrar usuário
      </button>
    </section>

    <!-- Formulário de pesquisa -->
    <section id="search_display">
      <label for="input_dtnasc_search">Digite a data de nascimento do usuário
        <input type="date" id="input_dtnasc_search" bind:value= {getDataNascUser} placeholder="Digite a data de nascimento do usuário" />
      </label>
      <input type="submit" id="input_search" on:click={ ()=> SearchUser() } class="input_search" value="Pesquisa usuário" />
    
      <div>
        {#if !objResultSearch}
        <h1>sem div</h1>
        {:else}
        <h1>User: {objResultSearch.name}</h1>
        <p>Course: {objResultSearch.course}</p>
        <p>Date: {objResultSearch.data_nasc}</p>

        {/if}
      </div>

    </section>

  
  </div>
</div>

<style>

    #root_main{
    background-color: black;
    display: flex;
    flex-direction: row;
    
}

.main_action_display{
    display: flex;
    flex-direction: column;    
    width: 60%;
    height: 100vh;
    background: white; 
}
#form_display{
    display: flex;
    flex-direction: column;    
    width: 80%;
    height: 50vh;
    background: white; 
    
}

.intput_name,.intput_study,.intput_dtnasc{
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 16px;
}
</style>      