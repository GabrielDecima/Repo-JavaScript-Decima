
//comienzo del carrito


// Funcion para traer productos con Fetch - Mercado Libre

const consultarDatosProducto = () => {
   fetch('https://api.mercadolibre.com/sites/MLA/search?q=zapatillas')
   .then((response) => response.json())
   .then(informacion => {
   let acumuladorCards = ``;
   informacion.results.forEach((producto) => {

   console.log(informacion.results);
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
         timer: 3000,
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
const mostrarCarrito = JSON.stringify(localStorage.getItem("carrito"))
 
   
   document.getElementById('boton-carrito').addEventListener('click', () =>{
   
      carrito.forEach((producto) => {

      // Swal.fire({
      //    title: 'Carrito!',
      //    text: 'hola',
      //    imageUrl: 'https://unsplash.it/400/200',
      //    imageWidth: 200,
      //    imageHeight: 200,
      //    html:`${mostrarCarrito.title}`
         
      
      //  })

   alert(mostrarCarrito);


   })
}
 )
 
