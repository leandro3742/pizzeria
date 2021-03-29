import img_pizza from '../Imagenes/pizza.jpg';
import img_burger from '../Imagenes/hamburguesa.jpg';

import img_brownie from '../Imagenes/brownie.png';

import img_pepsi_chica from '../Imagenes/pepsi_chica.jpg';
import img_mirinda_grande from '../Imagenes/mirinda_grande.jpg';
import img_paso_de_los_toros_grande from '../Imagenes/paso_de_los_toros.jpg';

//PLATOS PRINCIPALES//
let ingredientes_pizza = {
    nombres : ['bacon ', 'aceitunas ', 'huevos ' , 'extra queso '],
    precio : [40, 50, 60, 70 ]
}   

export const pizza = {
    nombre: 'Pizza',
    img: img_pizza,
    precio: 250,
    ingredientes: ingredientes_pizza
}

let ingredientes_burger = {
    nombres : ['extra carne ' , 'extra queso ', 'mayonesa ', 'ketchup ', 'mostaza '],
    precio : [50, 25, 0, 0, 0]
}

export let burger = {
    nombre: 'Burger',
    img: img_burger,
    precio: 200,
    ingredientes: ingredientes_burger
}

//POSTRES//
export let brownie = {
    nombre: 'Brownie',
    img: img_brownie,
    precio: 150,
    ingredientes: false
}

//BEBIDAS//
export let pepsi_chica = {
    nombre: 'Pepsi 600ml',
    img: img_pepsi_chica,
    precio: 70,
    ingredientes: false
}

export let paso_de_los_toros_grande = {
    nombre: 'Paso 1.2L',
    img: img_paso_de_los_toros_grande,
    precio: 120,
    ingredientes: false
}

export let mirinda_grande = {
    nombre: 'Mirinda 1.2L',
    img: img_mirinda_grande,
    precio: 120,
    ingredientes: false
}

export const productos = [pizza, burger, brownie, pepsi_chica, paso_de_los_toros_grande, mirinda_grande];
