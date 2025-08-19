const root_main = document.getElementById('root_main');


let content_descripe = CreateContent('content_descripe','section');
let title_content_descripe = CreateTextContent('h1','3- Exe: Teste Velocidade','title_content_descripe');
let subtitle_content_descripe = CreateTextContent('p',`Um programa em javascript que permita inserir o nome e a velocidade de dois veículos e exiba na tela uma mensagem dizendo qual dos dois é mais rápido (ou que as velocidades são iguais se este for o caso)`,'subtitle_content_descripe');


let content_action = CreateContent('content_action', 'section')

let first_car_content = CreateContent('first_car_content','div')
let second_car_content = CreateContent('second_car_content','div')
let third_car_content = CreateContent('third_car_content','div') 

let input_first_car_name = CreateInputContent('text',"input_first_car_name",'Digite o nome do Primeiro Veiculo:');
let input_first_car_move_speed = CreateInputContent('number',"input_first_car_move_speed",'Digite a velocidade do Primeiro Veiculo:');
let input_second_car_name = CreateInputContent('text',"input_second_car_name",'Digite o nome do Segundo Veiculo:');
let input_second_car_move_speed = CreateInputContent('number',"input_second_car_move_speed",'Digite a velocidade do Segundo Veiculo:');
let input_third_car_result = CreateInputContent('text','input_third_car_result','Automóvel mais rapido')
input_third_car_result.setAttribute('onkeydown','return false;')
let input_third_car_btn = CreateBtnSubmit('input_third_car_btn')

root_main.appendChild(content_descripe);
root_main.appendChild(content_action);


content_descripe.appendChild(title_content_descripe);
content_descripe.appendChild(subtitle_content_descripe);

content_action.appendChild(first_car_content);
first_car_content.appendChild(input_first_car_name);
first_car_content.appendChild(input_first_car_move_speed);

content_action.appendChild(second_car_content);
second_car_content.appendChild(input_second_car_name);
second_car_content.appendChild(input_second_car_move_speed);

content_action.appendChild(third_car_content);
third_car_content.appendChild(input_third_car_result);
third_car_content.appendChild(input_third_car_btn)



function CreateContent(idName,tag){
    let create_element = document.createElement(tag)
    create_element.setAttribute('id', idName)
    console.log(create_element)
    return create_element
}
function CreateTextContent(tag, text, nameclass){
    let create_text = document.createElement(tag)
    create_text.innerText = text;
    create_text.setAttribute('class', nameclass)
    return create_text
}
function CreateBtnSubmit(idName){
    let button = document.createElement('input');
    button.setAttribute('id', idName)
    button.setAttribute('type', 'submit')
    button.setAttribute('value','Comparar')
    return button
}
function CreateInputContent(type,idName,text){
    let input = document.createElement('input');
    input.setAttribute('type',type);
    input.setAttribute('id',idName);
    let label = CreateLabelContent(text,idName);
    label.appendChild(input)    
    return label
}

function CreateLabelContent(text, idName){
 let label = document.createElement('label')
 label.setAttribute('for',idName)
 label.setAttribute('class','label_text')
 label.innerText = text
 return label
}