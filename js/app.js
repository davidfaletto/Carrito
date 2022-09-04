

let sumadorCarrito = localStorage.getItem('cantidad') || 0;
const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
console.log( carrito?.nombre || "El carrito esta vacio");




buscarProductos();
mostrarCarrito();
vaciarCarrito();
