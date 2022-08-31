const productoCatalogoHTML = (producto) =>{             //le paso un producto del arreglo productos
    return `<div class="card" style="width: 33rem;">             
                  <img src="${producto.img}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${producto.nombre}</h5>
                      <p class="card-text">Precio: $${producto.precio}</p>
                      <button href="#" id="btn-catalogo-${producto.id}" class="btn btn-sucess">Agregar</button>
                    </div>
                </div>` // creo la constante texto que tendra las propiedades del objeto para crear las cards
                       // la funcion retorna el codigo HTML literal con las propiedades del objeto     
  };
  
  
  const productoCarritoHTML  = (producto) =>{                       //como se vera el carrito de compras en html con las propiedades del objeto que tomamos
    return `<div class="card" style="width: 13rem;">
                      <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text">Precio: $${producto.precio}</p>
                        <p class="card-text">Cantidad: ${producto.cantidad}</p>
                        <button href="#" id="btn-carrito-${producto.idCompra}" class="btn btn-danger">Quitar</button>
                      </div>
                    </div>`
                      //devuelve la card del carrito
  };
 