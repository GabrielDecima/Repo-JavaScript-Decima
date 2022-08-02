// let nombreUsuario="";



// function logueo(){

// while(nombreUsuario == ""){

//     nombreUsuario= prompt ("Ingrese nombre de usuario");

//     if (nombreUsuario != ""){

//     alert ("Bienvenido " + nombreUsuario)
//  }
//  else {
//     alert("No ingresaste un nombre, por favor volve, e ingresa un nombre")
//  }
// }

// }

// logueo();


// let pregunta="";


// function compra(){

// const carrito = [];


// alert("Vamos a realizar una compra!!");


// while(pregunta !="NO") { 

// const producto1 = { id:"1", marca: "adidas",talle: "46"}
// const producto2 = {id:"2" ,marca:"puma",talle:"42"}
// const producto3 = {id:"3" ,marca:"Nike",talle:"44"}
// const producto4 = {id:"4" ,marca:"Loto",talle:"38"}


// carrito.push(prompt("Selecciona el producto,Tenemos disponibles las sigiuentes Zapatillas: " + (producto1.marca) + " - " + (producto2.marca) + " - " + (producto3.marca) + " - " + (producto4.marca)));

// pregunta = prompt("¿Quieres seguir comprando? (Ingresa SI - NO)");

// }

// alert("Gracias por confiar en nosotros " + nombreUsuario);
// alert ("Añadiste al carrito las siguientes Zapas : " + carrito + " En total tenes " + carrito.length + " Productos") ;



// }
// compra();

   const productos = [
   { id:"1", marca: "adidas",precio:"$10.000",talle: "46"},
   {id:"2" ,marca:"puma",precio:"$8.000",talle:"42"},
   {id:"3" ,marca:"Nike",precio:"$15.000",talle:"44",img:""},
   {id:"4" ,marca:"Loto",precio:"$4.000",talle:"38"},
   ];


productos.forEach((producto) => {
   const idButton = `add-cart${producto.id}`
   document.getElementById("espacio-card").innerHTML += `<div class="card h-100 d-flex m-4">
   <img class="card-img-top" src="${producto.img}" alt="..." />
   <div class="card-body p-4">
  <div class="text-center">
  <h5 class="fw-bolder">${producto.marca}</h5>
  <p>Talle ${producto.talle}</p>
   <div> ${producto.precio} </div>
  <a class="boton" onClick ="agregarAlCarrito ('')" href="#">Agregar al Carrito</a>
  </div>
  </div>`;

})