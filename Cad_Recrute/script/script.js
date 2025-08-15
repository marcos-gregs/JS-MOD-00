
let root_display = document.getElementById("root_main");

const content_display = document.createElement("div");
content_display.setAttribute("id", "content_display");

const title_display = createText("h1", "title_display", "Cadastro de Recrutas");
const subtitle_display = createText("p", "subtitle_display", "Exercicio de criação/pesquisa de usuários com JavaScript");
const text_display = createText("p", "text_display", `Um programa em javascript que permita salvar informações de um recruta. As informações a serem salvas são:-o primeiro nome, o sobrenome, o campo de estudo, o ano de nascimento.
Depois o programa deve exibir o nome completo do recruta, seu campo de estudo e sua idade (apenas baseada no ano de nascimento).`);

const main_action_display = document.createElement("div")
main_action_display.setAttribute('class', 'main_action_display')

const form_display = document.createElement("section");
form_display.setAttribute("id", "form_display");

const search_display = document.createElement("section");
search_display.setAttribute("id","search_display")

const input_name = createInput("text", "Digite seu nome", "input_name");
const input_study = createInput("text", "Digite seu curso","input_study");
const input_dtnasc = createInput("date", "Digite sua data de nascimento","input_dtnasc");
const input_submit = createButton("submit","Adicionar usuário","input_submit")

const input_dtnasc_search = createInput("date", "Digite a data de nascimento do usuário","input_dtnasc_search");
const input_submit_search = createButton("submit","Pesquisa usuário","input_search")


root_display.appendChild(content_display);
root_display.appendChild(main_action_display);

content_display.appendChild(title_display);
content_display.appendChild(subtitle_display);
content_display.appendChild(text_display);


main_action_display.appendChild(form_display);
form_display.appendChild(input_name);
form_display.appendChild(input_study);
form_display.appendChild(input_dtnasc);
form_display.appendChild(input_submit);

main_action_display.appendChild(search_display);
search_display.appendChild(input_dtnasc_search);
search_display.appendChild(input_submit_search)


function createInput(type,placeholder, className) {
let input = document.createElement("input");
let label = createLabel(className, placeholder);
input.setAttribute("id", className);
input.setAttribute("type", type);

input.setAttribute("placeholder", placeholder);
label.appendChild(input);
return label;
}

function createButton(type, value, className){
const input = document.createElement("input");
input.setAttribute("id", className);
input.setAttribute("type", type);
input.setAttribute("value", value);
input.setAttribute("class", className);
return input
}

function createLabel(className, text) {
    let label = document.createElement("label");
    label.setAttribute("for", className);
    label.innerText = text;

    return label;
}
function createText(tag, className, text) {
    let element = document.createElement(tag);
    element.setAttribute("class", className);
    element.innerText = text;
    return element;
}
