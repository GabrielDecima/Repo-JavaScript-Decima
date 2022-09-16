
//comienzo del carrito


// Funcion para traer productos con Fetch - Mercado Libre

const consultarDatosProducto = () => {
   fetch('https://api.mercadolibre.com/sites/MLA/search?q=zapatillas')
   .then((response) => response.json())
   .then(informacion => {
   let acumuladorCards = ``;
   informacion.results.forEach((producto) => {

   // console.log(informacion.results);
   const idButton = `add-cart-${producto.id}`
   acumuladorCards +=  `<div class= "card">
   <img src="${producto.thumbnail}">
   <h2>${producto.title}</h2>
   <h2>$ ${producto.price}</h2>
   <button class="boton-agregar" id="${idButton}">Agregar</button>
   </div>`
   
})
   document.getElementById('espacio-card').innerHTML = acumuladorCards;
   
   })
 
}

consultarDatosProducto();


// Evento de agregar al carrito

const carrito = JSON.parse(localStorage.getItem("carrito")) ?? [] ; 
const total = carrito.reduce((acumulador, producto) => acumulador + producto.price, 0);
document.getElementById("cart-total").innerHTML = `${carrito.length} - $ ${total}`;


fetch('https://api.mercadolibre.com/sites/MLA/search?q=zapatillas')
   .then((response) => response.json())
   .then(informacion => {
   informacion.results.forEach((producto) => {

   const idButton = `add-cart-${producto.id}`
   document.getElementById(idButton).addEventListener('click', () =>{

      carrito.push(producto);
      localStorage.setItem("carrito", JSON.stringify(carrito));
      localStorage.setItem("cantidadCarrito", JSON.stringify(carrito.length));
      const total = carrito.reduce((acumulador,producto) => acumulador + producto.price, 0);
      document.getElementById("cart-total").innerHTML = `${carrito.length} - $ ${total}`;  

       const Toast = Swal.mixin({
         toast: true,
         position: 'top-end',
         showConfirmButton: false,
         timer: 2000,
         timerProgressBar: true,
         didOpen: (toast) => {
           toast.addEventListener('mouseenter', Swal.stopTimer)
           toast.addEventListener('mouseleave', Swal.resumeTimer)
         }
       })
       
       Toast.fire({
         icon: 'success',
         title: 'Agregaste una nueva Zapatilla'
       })
    
   })


})

 })




//  Boton para mostrar carrito //

document.getElementById('mostrarCarrito').addEventListener('click', () =>{

   if(carrito.length<=0){
      document.getElementById("cuerpoCarrito").innerHTML = `<div>   Tu carrito esta vacio 😞 </div>`
   } else{

document.getElementById("cuerpoCarrito").innerHTML="";

carrito.forEach((producto) => {
   const idButtonEliminar = `add-cart-${producto.id}`

let Elimin = document.getElementById("cuerpoCarrito").innerHTML += `
   <div class="p-3" style="border:solid 0.1px">
    <tr>
      <th scope="row">Precio: </th>
      
      <td>$${producto.price}</td>
      <img class="m-2"src="${producto.thumbnail}" style="border:solid 0.2px">
      <td><button id=${idButtonEliminar} onclick="eliminarCarrito()">Eliminar</button></td><br>
    </tr>
   </div>

`
})
}
localStorage.setItem("carrito", JSON.stringify(carrito));
localStorage.setItem("cantidadCarrito", JSON.stringify(carrito.length));
const total = carrito.reduce((acumulador,producto) => acumulador + producto.price, 0);
document.getElementById("cart-total").innerHTML = `${carrito.length} - $ ${total}`; 

document.getElementById("pieModal").innerHTML=`<div class="d-flex p-2 flex-fill">Total Carrito: $ ${total}</div>
<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
<button type="button" class="btn btn-primary">Confirmar</button>`


})





// Función Eliminar Carrito 
function eliminarCarrito(){
  
  
   carrito.forEach((producto) => {
      
   carrito.splice(producto,1)
   localStorage.setItem("carrito", JSON.stringify(carrito));
   localStorage.setItem("cantidadCarrito", JSON.stringify(carrito.length));
   const total = carrito.reduce((acumulador,producto) => acumulador + producto.price, 0);
   document.getElementById("cart-total").innerHTML = `${carrito.length} - $ ${total}`;  
   
   document.getElementById("cuerpoCarrito").innerHTML= Elimin;
   

})

}