
//comienzo del carrito


// Funcion para traer productos fon Fetch - Mercado Libre

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
   <h2>${producto.price}</h2>
   <button class="boton" id="${idButton}">Agregar</button>
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
    
   })


  
 
})

 })

 
 let funcionBoton = document.getElementById("boton-carrito")
 funcionBoton.addEventListener('click', llamado)

 function llamado(){

   Swal.fire({
      title: 'Carrito!',
      html:`<div>${producto.title}</div>
      <p>lorem lorem</p>`,

    })
 
}


   
      
   // while(nombreUsuario == ""){
   
   //     nombreUsuario= prompt("Ingrese nombre de usuario");
       
   
   //     if (nombreUsuario != ""){
   //       Swal.fire(
   //          'Good job!',
   //          'You clicked the button!',
   //          'success'
   //        )
         
   // }
   //  else {
   //     alert("No ingresaste un nombre, por favor volve, e ingresa un nombre");

   //  }
   // }
   
    


       // ---------------------------------------------------------------------------
   
   // function validacionDatos (){    

   //    Swal.fire({
   //       title: 'Ingresar usuario',
         
   //       html:
   //       '<span>Nombre <span/> <input id="swal-input1" class="swal2-input">' +
   //           '<span>Email<span/><input id="swal-input2" class="swal2-input">',
   //       icon: 'info',
   //       confirmButtonText: 'Enviar'
         
   //       })      
      
   //    }
      