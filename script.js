let calc_btn_dot = document.querySelector(".calc-btn.dot");
let result_dot = document.querySelector(".result.dot");
let u_vec_dot = document.querySelector(".u-vector.dot").children; //u vector for dot product
let v_vec_dot = document.querySelector(".v-vector.dot").children; //v vector for dot product

let calc_btn_cross = document.querySelector(".calc-btn.cross");
let result_cross = document.querySelector(".result.cross");
let u_vec_cross = document.querySelector(".u-vector.cross").children; //u vector for cross product
let v_vec_cross = document.querySelector(".v-vector.cross").children; //v vector for cross product

// let particles = document.querySelector("#")
AOS.init();


let calc_selc = document.querySelector(".calc-selc");

calc_selc.addEventListener("input", () => {
    if (calc_selc.value == "c"){
        window.location.href = "#cross-product";
    } 
    if (calc_selc.value == "d"){
        window.location.href = "#dot-product";
    } 
})

calc_btn_dot.addEventListener("click", () => {
    u_vec_dot[1].defaultValue = 0;
    u_vec_dot[2].defaultValue = 0;
    u_vec_dot[3].defaultValue = 0;
    
    v_vec_dot[1].defaultValue = 0;
    v_vec_dot[2].defaultValue = 0;
    v_vec_dot[3].defaultValue = 0;

    let u_x = u_vec_dot[1].value;
    let u_y = u_vec_dot[2].value;
    let u_z = u_vec_dot[3].value;
    
    let v_x = v_vec_dot[1].value;
    let v_y = v_vec_dot[2].value;
    let v_z = v_vec_dot[3].value;
    

    let dot_result = (u_x * v_x) + (u_y * v_y) + (u_z * v_z)

    result_dot.textContent = " = " + u_x + " * " + v_x + " + " + u_y + " * " + v_y + " + " + u_z + " * " + v_z + " = " + dot_result;
})


console.log(calc_btn_cross);
calc_btn_cross.addEventListener("click", () => {
    u_vec_cross[1].defaultValue = 0;
    u_vec_cross[2].defaultValue = 0;
    u_vec_cross[3].defaultValue = 0;
    
    v_vec_cross[1].defaultValue = 0;
    v_vec_cross[2].defaultValue = 0;
    v_vec_cross[3].defaultValue = 0;
    
    let u_x = u_vec_cross[1].value;
    let u_y = u_vec_cross[2].value;
    let u_z = u_vec_cross[3].value;
    
    let v_x = v_vec_cross[1].value;
    let v_y = v_vec_cross[2].value;
    let v_z = v_vec_cross[3].value;

    let x_result = (u_y * v_z) - (u_z * v_y);
    let y_result = (u_z * v_x) - (u_x * v_z);
    let z_result = (u_x * v_y) - (u_y * v_x);



    result_cross.textContent = "= [" + x_result +", " + y_result + ", " + z_result +"]";
})

particlesJS.load('particle', 'particlesjs-config.json');

// ==========================================================================================
