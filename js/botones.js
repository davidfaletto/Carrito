
const botonesCatalogo = () =>{
  fetch("/js/api.json")
  .then((response) => response.json())
  .then((datos) => {
    datos.forEach(producto => {
      const botonId = `btn-catalogo-${producto.id}`;
        const botonNodo = document.getElementById(botonId);
        botonNodo.addEventListener("click", () =>{
        const productoAlCarrito = {
                nombre : producto.nombre,
                idCompra: sumadorCarrito,
                precio: producto.precio,
                cantidad: producto.cantidad,
                };
            sumadorCarrito++; 
            carrito.push(productoAlCarrito);

            const carritoJson = JSON.stringify(carrito);       
            localStorage.setItem("carrito",carritoJson);    
            mostrarCarrito();      
            
            localStorage.setItem("cantidad",sumadorCarrito);

            actualizarCantidad(localStorage.getItem("cantidad"));
            notificacion();
          })
        }
      );    
    }
  );
}


const botonesCarrito = () =>{
  for(const producto of carrito){
    const botonId = `btn-carrito-${producto.idCompra}`;
    const botonNodo = document.getElementById(botonId);
    botonNodo.addEventListener("click", () =>{
      const index = carrito.findIndex((p) => p.idCompra == producto.idCompra);
      sumadorCarrito--;
      carrito.splice(index,1);
      const carritoJson = JSON.stringify(carrito); 
      localStorage.setItem("carrito",carritoJson);  
      mostrarCarrito();
      
      localStorage.setItem("cantidad", sumadorCarrito);
      actualizarCantidad(localStorage.getItem("cantidad"));
     })
  }
};


const vaciarCarrito = () =>{
  const vaciar = document.getElementById("vaciar-carrito");
  vaciar.addEventListener("click",() =>{
    notificacionVaciar();
    mostrarCarrito();
  })
}



const actualizarCantidad = (cantidad) =>{
  const mostrarNumero = document.getElementById("contador-carrito");
  mostrarNumero.innerText = cantidad;
}


