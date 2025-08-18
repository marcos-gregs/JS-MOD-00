const get_main_element = document.getElementById('root_main')

let content_display = CreateContent('section','content_display')

let title_content_display = CreateText('h1','title_content_display','Exerc 2 - Calc');
let subtitle_content_display = CreateText('p', 'subtitle_content_display', `Um programa em javascript que permita inserir dois valores numéricos e então calcule o resultado das quatro operações básicas (soma, subtração, multiplicação e divisão)`)

let action_display = CreateContent('section', 'action_display')
let table_display = CreateContent('div', 'table_display')
let operation_chance = CreateContent('div', 'operation_display')

let view_calc_display = CreateContent('div', 'view_calc_display')
let view_element_content = CreateViewDisplay('view_element_content', '00000')

let render_table = RenderTable();
let render_chance = RenderChanceCalc()

get_main_element.appendChild(content_display);
get_main_element.appendChild(action_display)

content_display.appendChild(title_content_display);
content_display.appendChild(subtitle_content_display);

action_display.appendChild(view_calc_display);
action_display.appendChild(operation_chance);
action_display.appendChild(table_display);
view_calc_display.appendChild(view_element_content);





function CreateContent(tagg, id){
    let create_element = document.createElement(tagg)
    create_element.setAttribute('id',id)
    return create_element
}

function CreateViewDisplay(idName){
    let input = document.createElement('input');
    input.setAttribute('type', 'text')
    input.setAttribute('id', idName)
    input.setAttribute('onkeydown','return false;')
    input.setAttribute('value','')
    return input
}

function CreateButtonNumber(className, value){
    let btn = document.createElement('input');
    btn.setAttribute('type','submit')
    btn.setAttribute('class',className);
    btn.setAttribute('value', value);
    return btn
}

function CreateText(tag, className, text){
    let element = document.createElement(tag);
    element.setAttribute('class', className);
    element.innerText = text
    return element;
}

function RenderTable(){
    for(i=0; i <= 9; i++){
        let for_render;
       
        if(i < 9){
            for_render = CreateButtonNumber('table_number', i +1);
        }
        if(i === 9){
            for_render = CreateButtonNumber('table_number', 0);
        }
        
        
        table_display.appendChild(for_render)
    }
    
}

function RenderChanceCalc(){
    let list_chance = ['-','+','*','/','%','=']

    for( i=0; i < list_chance.length; i++ ){
        let create_btn = CreateButtonNumber('table_operation', list_chance[i])
        
        operation_chance.appendChild(create_btn)
    }
}