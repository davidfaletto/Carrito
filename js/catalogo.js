

const buscarProductos = () =>{
  fetch("/js/api.json")
  .then((response) => response.json())
  .then((datos) => {
      const nodoCatalogo = document.getElementById("catalogo");
      let catalogoHTML = "";
      for(const producto of datos){
        catalogoHTML += productoCatalogoHTML(producto);
      }
      nodoCatalogo.innerHTML = catalogoHTML;
      botonesCatalogo();
    });
};





  
const mostrarCarrito = ()=>{
  const nodoCarrito = document.getElementById("carrito");
  const nodoPrecio = document.getElementById("precioTotal");

  let item = JSON.parse(localStorage.getItem("carrito"));
  let precio = 0;
  let carritoHTML="";
  for (item of carrito){
    carritoHTML += productoCarritoHTML(item);
    precio += item.precio;
  }
  let precioTotal = precio;
  localStorage.setItem("precioTotal",precioTotal);
  nodoPrecio.innerHTML = precioTotal;
  nodoCarrito.innerHTML = carritoHTML;
  actualizarCantidad(localStorage.getItem("cantidad"));
  botonesCarrito();
}


  