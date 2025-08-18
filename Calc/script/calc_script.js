export { number } from "https://esm.sh/mathjs";

const get_value = document.querySelectorAll('.table_number');
const get_operation = document.querySelectorAll('.table_operation');
const flux_oper = [];
const inject_display = document.querySelector('#view_element_content')


get_value.forEach( element => {
 
     element.addEventListener('click',(eve)=>{
     
    if(inject_display.value == '+' ||inject_display.value == '-' ||inject_display.value == '/'||inject_display.value == '*' ||inject_display.value == '%' ){
        inject_display.value = '';
        inject_display.value += eve.target.value
    }else{
        inject_display.value += eve.target.value
    }
     
     
     
       
    })
});

get_operation.forEach(element =>{
    element.addEventListener('click',(eve)=>{
        if(inject_display.value.length ==0){
            alert('Insira um numero.')
        }if(eve.target.value === '='){
            flux_oper.push(inject_display.value)
            console.log(flux_oper.length)
            if(flux_oper.length > 3){
                alert('Não é possivel')
            }
            execCalc(flux_oper, flux_oper[1], inject_display)  
        }
        else{
            flux_oper.push(inject_display.value)
            inject_display.value = eve.target.value
            flux_oper.push(inject_display.value)
        }            

        
    })
})

function execCalc(element, branch_element, inject_element){
    switch (branch_element){
        case "+":
            let acount_amount =  Number(element[0]) + Number(element[2])
            inject_element.value = acount_amount
            element.splice(0, element.length);
            break;
            
        case "-":
            let acount_subtract =  Number(element[0]) - Number(element[2])
            inject_element.value = acount_subtract
            element.splice(0, element.length);
            break;
        case "*":
            let acount_multiplication =  Number(element[0]) * Number(element[2])
            inject_element.value = acount_multiplication
            element.splice(0, element.length);
            break;
        case "/":
            let acount_division =  Number(element[0]) / Number(element[2])
            inject_element.value = acount_division
            element.splice(0, element.length);
            break;
        case "%":
            let acount_division_real =  Number(element[0]) % Number(element[2])          
            inject_element.value = acount_division_real
            element.splice(0, element.length);
            break;
    }
}
