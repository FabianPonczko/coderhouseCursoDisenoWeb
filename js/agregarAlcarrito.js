const btnDecompra = document.querySelectorAll(".btn-primary")
const enCarrito = document.querySelector(".encarrito")

const storage1 = localStorage.getItem("carrito")
const storage = JSON.parse(storage1)
if (storage){
    enCarrito.innerHTML = storage.length
}

const contenedorCarrito =[]
class Carrito {
    constructor(imagen,producto,precio,cantidad=1){
        this.imagen= imagen
        this.producto= producto
        this.precio= precio
        this.cantidad = cantidad
    }
}

btnDecompra.forEach((btn)=>{
    btn.addEventListener("click",(event)=>{
        const cadaBoton = event.target
        const contenedor = cadaBoton.closest(".modal-content")
       const titulo = contenedor.querySelector(".modal-title").textContent
       const imagen = contenedor.querySelector(".img-fluid").src
       const precio = contenedor.querySelector(".precio").textContent
       
       const nuevoItem = new Carrito(imagen,titulo,precio)
       contenedorCarrito.push(nuevoItem)
       enCarrito.innerHTML = contenedorCarrito.length
       
       localStorage.setItem("carrito",JSON.stringify(contenedorCarrito))
        
    })
   
})





