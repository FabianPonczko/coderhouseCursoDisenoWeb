

const btnDecompra = document.querySelectorAll(".btn-primary")
const enCarrito = document.querySelector(".encarrito")

const storage1 = localStorage.getItem("carrito")
const storage = JSON.parse(storage1)
let contenedorCarrito =[]
let numeroCarrito=0
storage.forEach(elemento=>{
    numeroCarrito += elemento.cantidad
})
//Actualiza cuantos items hay en el carrito
if (storage){
    enCarrito.innerHTML = numeroCarrito
    contenedorCarrito = storage
}

//clase padre
class Carrito {
    constructor(id,imagen,producto,precio,cantidad=1){
        this.id= id
        this.imagen= imagen
        this.producto= producto
        this.precio= precio
        this.cantidad = cantidad
    }
    
}


//Por cada btn de compra genero un evento click
btnDecompra.forEach((btn)=>{
    btn.addEventListener("click",(event)=>{
        const cadaBoton = event.target
        const contenedor = cadaBoton.closest(".modal-content")
       const id = contenedor.querySelector(".id").textContent
       const titulo = contenedor.querySelector(".modal-title").textContent
       const imagen = contenedor.querySelector(".img-fluid").src
       const precio = contenedor.querySelector(".precio").textContent
       
       //genero los item del carrito y lo cargo en el contenedor
       const nuevoItem = new Carrito(id,imagen,titulo,precio)
       
       for (i = 0 ;i<storage.length;i++){
        if(storage[i].id==id){
            storage[i].cantidad +=1
            numeroCarrito +=1
       
       //actualizo el store
       localStorage.setItem("carrito",JSON.stringify(contenedorCarrito))
            return     
        }
       }
       
  
     // console.log(index)
        

       contenedorCarrito.push(nuevoItem)
       localStorage.setItem("carrito",JSON.stringify(contenedorCarrito))
      
      
       storage.forEach(elemento=>{
        numeroCarrito += elemento.cantidad
    })
       enCarrito.innerHTML = numeroCarrito
       
       //actualizo el store
        
    })
   
})





