let nombreUsuario="";



function logueo(){

while(nombreUsuario == ""){

    nombreUsuario= prompt ("Ingrese nombre de usuario");

    if (nombreUsuario != ""){

    alert ("Bienvenido " + nombreUsuario)
 }
 else {
    alert("No ingresaste un nombre, por favor volve, e ingresa un nombre")
 }
}

}

logueo();


let pregunta="";


function compra(){

const carrito = [];


alert("Vamos a realizar una compra!!");


while(pregunta !="NO") { 

const producto1 = { id:"1", marca: "adidas",talle: "46"}
const producto2 = {id:"2" ,marca:"puma",talle:"42"}
const producto3 = {id:"3" ,marca:"Nike",talle:"44"}
const producto4 = {id:"4" ,marca:"Loto",talle:"38"}


carrito.push(prompt("Selecciona el producto,Tenemos disponibles las sigiuentes Zapatillas: " + (producto1.marca) + " - " + (producto2.marca) + " - " + (producto3.marca) + " - " + (producto4.marca)));

pregunta = prompt("¿Quieres seguir comprando? (Ingresa SI - NO)");

}

alert("Gracias por confiar en nosotros " + nombreUsuario);
alert ("Añadiste al carrito las siguientes Zapas : " + carrito + " En total tenes " + carrito.length + " Productos") ;



}
compra();








