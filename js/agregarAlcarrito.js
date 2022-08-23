

cargarAlCarrito()

//funcion principal
function cargarAlCarrito (){

    //Boton Compra
    const btnDecompra = document.querySelectorAll(".btn-primary")

    //Img Carrito
    const enCarrito = document.querySelector(".encarrito")

    //Boton de cantidad
    constbtnCantidad = document.querySelectorAll("cantidad")

    //Obtener el storage
    const storage1 = localStorage.getItem("carrito")
    const storage = JSON.parse(storage1)
    
    //Variables
    let contenedorCarrito =[]
    let numeroCarrito=0

    //calcula numero de productos en carrito
    storage.forEach(elemento=>{
        numeroCarrito += elemento.cantidad
    })

    //Actualiza el DOM con items en el carrito
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


    //Por cada boton de compra genero un evento click
    btnDecompra.forEach((btn)=>{
        btn.addEventListener("click",(event)=>{
            console.log(btnDecompra)
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
                        enCarrito.innerHTML = numeroCarrito
                    return     
                    }
                }
        
                
            //Agrego nuevo item al carrito    
            contenedorCarrito.push(nuevoItem)
            
            //Suma item en carrito
            numeroCarrito +=1
            
            //actualizo store
            localStorage.setItem("carrito",JSON.stringify(contenedorCarrito))
            
            
            //Actualizo DOM - carrito
            enCarrito.innerHTML = numeroCarrito
            
        })
    
    })

}