const productos = [
  {
    id: 1,
    nombre: "Teclado RetroIluminado RedDragon",
    precio: 5000,
    img: "img/teclado retro.png",
    cantidad: 1,
  },
  {
    id: 2,
    nombre: "Mouse ASUS ROG STRIX Evolve RGB",
    precio: 5350,
    img: "img/mouse 3.png",
    cantidad: 1,
  },
  {
    id: 3,
    nombre: "Placa de Video ASUS GeForce GTX 1650",
    precio: 40000,
    img: "img/placa video.png",
    cantidad: 1,
  },
  {
    id: 4,
    nombre: "Mother ASUS ROG STRIX Z590-I GAMING WIFI",
    precio: 40000,
    img: "img/mother.png",
    cantidad: 1,
  },
  {
    id: 5,
    nombre: "Mouse Glorious Model D Minus - Matte White",
    precio: 6350,
    img: "img/mouse 2.png",
    cantidad: 1,
  },
  {
    id: 6,
    nombre: "VIDEO GEFORCE RTX 3070 8GB EVGA FTW3",
    precio: 180000,
    img: "img/placa.png",
    cantidad: 1,
  }
];


let sumadorCarrito = localStorage.getItem('cantidad') || 0;
const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
console.log( carrito?.nombre || "El carrito esta vacio");



mostrarCarrito();
mostrarCatalogo();
vaciarCarrito();
