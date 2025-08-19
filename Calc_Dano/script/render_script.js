const root_main = document.getElementById('root_main');


let content_descripe = CreateContent('content_descripe','section');
let title_content_descripe = CreateTextContent('h1','4- Exe: Teste Dano','title_content_descripe');
let subtitle_content_descripe = CreateTextContent('p',`Um programa em javas que permita inserir o nome e o poder de ataque de um personagem, depois o nome, a quantidade de pontos de vida, o poder de defesa de outro personagem e se ele possui um escudo, e então calcule a quantidade de dano causado`,"subtitle_content_descripe");


let content_gameboard = CreateContent('content_gameboard', 'section')

let dashboard_gameboard = CreateContent('dashboard_gameboard', 'article')

let dashboard_attack_damage = CreateContent('dashboard_attack_damage','div')
let dashboard_power_defense = CreateContent('dashboard_power_defense','div')
let dashboard_arena = CreateContent('dashboard_arena','div')

let user_attack_damage = CreateInputContent('text','user_attack_damage','Name')
let user_power_attack_damage = CreateInputContent('number','user_attack_damage','Power Attack:')

let user_power_defense = CreateInputContent('text','user_power_defense','Name')
let user_health_point = CreateInputContent('number','user_health_point','Health point user:')

 
root_main.appendChild(content_descripe)
content_descripe.appendChild(title_content_descripe)
content_descripe.appendChild(subtitle_content_descripe)
root_main.appendChild(content_gameboard)
content_gameboard.appendChild(dashboard_gameboard)
dashboard_gameboard.appendChild(dashboard_attack_damage);

dashboard_attack_damage.appendChild(user_attack_damage);
dashboard_attack_damage.appendChild(user_power_attack_damage);

dashboard_gameboard.appendChild(dashboard_power_defense);
dashboard_gameboard.appendChild(dashboard_arena);


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