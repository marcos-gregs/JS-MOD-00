const data_base_user = [];

const create_User = document.querySelector('#input_submit');

create_User.addEventListener('click', () => {
    let get_name = document.getElementById('input_name').value;
    let get_course = document.getElementById('input_study').value;
    let get_datnascimento = document.getElementById('input_dtnasc').value
    AddUser(get_name,get_course,get_datnascimento)   
})

const search_User = document.querySelector('#input_search');



search_User.addEventListener('click',() => {
    let search_value = document.getElementById('input_dtnasc_search').value;
    console.log(search_value)
    getUser(search_value)
})

function AddUser(nome,campo, ano) {
    const user = {
        name:nome,
        course:campo,
        nasc:ano
    }
    if(data_base_user.length <= 9){
     data_base_user.push(user)   

    }else{
        alert('Sem espaço de armazenamento')
    }
    

    return data_base_user;

}

function getUser(ano){
    data_base_user.map((element)=>{
        if(element.nasc === ano){
          console.log(element)
        }
        
        
    })
}