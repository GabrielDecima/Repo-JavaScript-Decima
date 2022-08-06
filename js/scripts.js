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


// 



const carrito = [];


   const productos = [
   { id:"1", marca: "adidas",precio:10000 ,talle: "46"},
   {id:"2" ,marca:"puma",precio:8000 ,talle:"42"},
   {id:"3" ,marca:"Nike",precio:15000 ,talle:"44",img:""},
   {id:"4" ,marca:"Loto",precio:4000 ,talle:"38"},
   ];


productos.forEach((producto) => {
   const idButton = `add-cart${producto.id}`
   document.getElementById("espacio-card").innerHTML += `<div class="card h-100 d-flex m-4">
   <img class="card-img-top" src="${producto.img}" alt="..." />
   <div class="card-body p-4">
  <div class="text-center">
  <h5 class="fw-bolder">${producto.marca}</h5>
  <p>Talle ${producto.talle}</p>
   <div>$ ${producto.precio} </div>
  <a class="boton" id="${idButton}" data-id="${producto.id}">Agregar al Carrito</a>
  </div>
  </div>`;

})



productos.forEach((producto) => {
   const idButton = `add-cart${producto.id}`
   document.getElementById(idButton).addEventListener('click', () =>{
      carrito.push(producto);
     const totalCart = carrito.reduce((acumulador,producto) => acumulador + producto.precio, 0);

      document.getElementById("cart-total").innerHTML = carrito.length + "- $"+totalCart;

      })


})

