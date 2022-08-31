const mostrarCatalogo = () =>{
    const nodoCatalogo = document.getElementById("catalogo");
    let catalogoHTML = "";
    for(const producto of productos){
      catalogoHTML += productoCatalogoHTML(producto);
    }
    nodoCatalogo.innerHTML = catalogoHTML;
    botonesCatalogo();
  };
  
  const mostrarCarrito = ()=>{
    const nodoCarrito = document.getElementById("carrito");
    const nodoPrecio = document.getElementById("precioTotal");

    let carritoHTML = JSON.parse(localStorage.getItem("carrito"));
    let precio = 0;

    for (const producto of carrito){
      carritoHTML += productoCarritoHTML(producto);
      precio += producto.precio;
    }
    let precioTotal = precio;
    localStorage.setItem("precioTotal",precioTotal);
    nodoPrecio.innerHTML = precioTotal;
    nodoCarrito.innerHTML = carritoHTML;
    actualizarCantidad(localStorage.getItem("cantidad"));
    botonesCarrito();
  }