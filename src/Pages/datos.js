import img_pizza from '../Imagenes/pizza.jpg';
import img_burger from '../Imagenes/hamburguesa.jpg';
import img_brownie from '../Imagenes/hamburguesa.jpg';

let ingredientes_pizza = {
    nombres : [' Bacon ', ' Aceitunas ', ' Huevos ' , " Extra queso "],
    precio : [40, 50, 60, 70 ]
}   

export const pizza = {
    nombre: 'Pizza',
    img: img_pizza,
    precio: 250,
    ingredientes: ingredientes_pizza
}

let ingredientes_burger = {
    nombres : ['    Extra carne    ' , '    Extra queso    ', ' Mayonesa ', '   Ketchup   ', '    Mostaza    '],
    precio : [50, 25, 0, 0, 0]
}

export let burger = {
    nombre: 'Burger',
    img: img_burger,
    precio: 200,
    ingredientes: ingredientes_burger
}

export let brownie = {
    nombre: 'Brownie',
    img: img_brownie,
    precio: 150,
    ingredientes: false
}


export const productos = [pizza, burger];