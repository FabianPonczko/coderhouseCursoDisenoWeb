
const enStorage1 = localStorage.getItem("carrito")
const enStorage = JSON.parse(enStorage1)
const imagen = enStorage.imagen
const producto = enStorage.producto
const precio = enStorage.precio
const cantidad = enStorage.cantidad


enStorage.forEach(element => {
    
    
    const productos = document.createElement("div")
    const carrito = document.querySelector(".carrito")
    
    
    productos.innerHTML =`
        <div class="row mb-2" style="align-items: baseline;">
            <div class="col-2">
                <img src="${element.imagen}" alt="" style="width:100px ;">
            </div>
            <div class="col-4">
                <p>${element.producto}</p>
            </div>
            <div class="col-2">
                <p>$${element.precio}</p>
            </div>
            <div class="col-2">
                <input type="number" value="${element.cantidad}"  style="width: 40px;">
            </div>
            <div class="col-2">
                <a href="#">
                    <span class="badge rounded-pill text-bg-danger fs-5">X</span>
                </a>
            </div>
            
        </div><hr>  `
    
    carrito.appendChild(productos)
    
});