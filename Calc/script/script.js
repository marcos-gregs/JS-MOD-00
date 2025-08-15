

const get_main_element = document.getElementById('root_main')

let content_display = CreateContent('section','content_display')
let action_display = CreateContent('section', 'action_display')

get_main_element.appendChild(content_display);

function CreateContent(tagg, id){
    let create_element = document.createElement(tagg)
    create_element.setAttribute('id',id)
    return create_element
}

function CreateButtonNumber(className, value){
    let btn = createElement('input');
    btn.setAttribute('class',className);
    btn.setAttribute('value', value);

}