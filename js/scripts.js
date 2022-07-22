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

let producto=" ";
let contador=0;
let pregunta="";
let lista="";


function compra(){


alert("Vamos a realizar una compra!!");


while(pregunta !="NO") { 


producto=prompt("Indicanos, ¿que producto quieres?")

alert("Perfecto, haz agredado al carrito tus nuevas " + producto);

pregunta = prompt("¿Quieres seguir comprando? (Ingresa SI - NO)");

}

alert("Gracias por confiar en nosotros, volve pronto");

}
compra();

