
const botonesCatalogo = () =>{
    productos.forEach((producto) => {
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

const notificacionVaciar = () =>{
  Swal.fire({
    title: 'Desea Eliminar todos los productos?',
    text: "Estas apunto de quitar todos los productos que agregaste!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, Eliminar todo!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Carrito vacio!',
        'Sigue buscando, algo te va a gustar',
        'success'
      )
      carrito.length = 0;
      sumadorCarrito = 0;
      localStorage.setItem("cantidad", sumadorCarrito);
      actualizarCantidad(localStorage.getItem("cantidad"));
      localStorage.removeItem("carrito");
      mostrarCarrito();
    }
  })
}

const actualizarCantidad = (cantidad) =>{
  const mostrarNumero = document.getElementById("contador-carrito");
  mostrarNumero.innerText = cantidad;
}

const notificacion = () =>{
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Producto agregado al carrito',
    showConfirmButton: false,
    timer: 500
  })
}

