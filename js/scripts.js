//comienzo del carrito

const carrito = [];



// const productos = [
//    { id:"1", marca: "Adidas",precio:10000 ,talle: "46", img:"https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwad70818c/products/AD_FX3581/AD_FX3581-1.JPG"},
//    {id:"2" ,marca:"Puma",precio:8000 ,talle:"42", img:"https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw1686a8f4/products/PU_195648-01/PU_195648-01-1.JPG"},
//    {id:"3" ,marca:"Nike",precio:15000 ,talle:"44",img:"https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwa6297e94/products/NI_DA2776-008/NI_DA2776-008-1.JPG"},
//    {id:"4" ,marca:"Loto",precio:4000 ,talle:"38", img:"https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw25b06e25/products/LO_SS22C0002/LO_SS22C0002-1.JPG"},
//    ];

const consultarDatosProducto = () => {
   fetch('https://api.mercadolibre.com/sites/MLA/search?q=zapatillas')
   .then((response) => response.json())
   .then(informacion => {
      let acumuladorCards = ``;
      informacion.results.forEach((producto) => {
      const idButton = `add-cart${producto.id}`
   acumuladorCards +=  
      
   `<div class ="card">
   <img src="${producto.thumbnail}">
   <span>
  <h5 class="fw-bolder">${producto.title}</h5>
  <span/>
 <h2>$ ${producto.price} </h2>
 <a class="boton" id="${idButton}" data-id="${producto.id}">Agregar al Carrito</a> 
  
  </div>`;

})
   document.getElementById('espacio-card').innerHTML = acumuladorCards;
   
   })
}

consultarDatosProducto();



informacion.results.forEach((producto) => {
   const idButton = `add-cart${producto.id}`
   document.getElementById(idButton).addEventListener('click', () =>{
      carrito.push(producto);
     const total = carrito.reduce((acumulador,producto) => acumulador + producto.precio, 0);

      document.getElementById("cart-total").innerHTML = carrito.length + "- $"+ total;
      localStorage.setItem("TotalCarrito",carrito.length)
      localStorage.setItem("Carrito", JSON.stringify(carrito));
      
   
   })
       
})
  
   








// function log (){


// let nombreUsuario="";
   
   
// while(nombreUsuario == ""){

//     nombreUsuario= prompt ("Ingrese nombre de usuario");
    

//     if (nombreUsuario != ""){

//       const Toast = Swal.mixin({
//          toast: true,
//          position: 'top-end',
//          showConfirmButton: false,
//          timer: 3000,
//          timerProgressBar: true,
//          didOpen: (toast) => {
//            toast.addEventListener('mouseenter', Swal.stopTimer)
//            toast.addEventListener('mouseleave', Swal.resumeTimer)
//          }
//        })
       
//        Toast.fire({
//          icon: 'success',
//          title: 'Bienvenido'+ nombreUsuario
//        })
      
      
      
// }
//  else {
//     alert("No ingresaste un nombre, por favor volve, e ingresa un nombre");
   
//  }
// }

// }

















// function validacionDatos (){    
// Swal.fire({
//    title: 'Ingresar usuario',
   
//    html:
//    '<span>Nombre <span/> <input id="swal-input1" class="swal2-input">' +
//        '<span>Email<span/><input id="swal-input2" class="swal2-input">',
//    icon: 'info',
//    confirmButtonText: 'Enviar'
   
//    })      

// }

// validacionDatos();



