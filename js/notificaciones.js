
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

const notificacion = () =>{
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Producto agregado al carrito',
      showConfirmButton: false,
      timer: 500
    })
  }
  