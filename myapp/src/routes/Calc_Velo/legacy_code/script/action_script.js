let get_first_name_car = document.getElementById('input_first_car_name');
let get_first_velocidade_car = document.getElementById('input_first_car_move_speed');

let get_second_name_car = document.getElementById('input_second_car_name');
let get_second_velocidade_car = document.getElementById('input_second_car_move_speed');

let view_comparison_speed = document.getElementById('input_third_car_result')

let action_click_event = document.getElementById('input_third_car_btn')

action_click_event.addEventListener('click',()=>{
    SpeedComparison(get_first_name_car,get_first_velocidade_car,get_second_name_car,get_second_velocidade_car,view_comparison_speed)
})


function SpeedComparison(first_name,first_velo, second_name, second_velo,view_info){
    if(first_velo.value > second_velo.value){
        
        let template_data =`O carro ${first_name.value} está mais veloz\nVelocidade${first_velo.value}`
        view_info.value = template_data
        alert(template_data)
    }if(first_velo.value < second_velo.value){  
        let template_data =`O carro ${second_name.value}está mais veloz\n Velocidade${second_velo.value}`
        alert(template_data)
        
    }if(first_velo.value === second_velo.value){  
                alert('valores iguais')
        
    }
}