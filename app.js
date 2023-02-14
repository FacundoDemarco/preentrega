
let nombre = prompt('indique su nombre')
let password = prompt('indique su password')

alert('Bienvenido'+''+nombre)
alert('A continuacion pon el precio de los productos seleccionados')
let precioProducto1 = Number(prompt('indique el precio'));
let precioProducto2 = Number(prompt('indique el precio'));

let total = precioProducto1 + precioProducto2;



if (total >=100){
    alert('Tienes un descuento de 5%');
    let descuento = total * 0.05;
    total = total - descuento;
}
else if (total <=100){
    alert('Recuerda que si gastas 100 dls tiene un descuento de 5%')
    total = total;
}


alert('el precio con descuento es'+''+ total)


console.log("El precio total con descuento es: " + total);