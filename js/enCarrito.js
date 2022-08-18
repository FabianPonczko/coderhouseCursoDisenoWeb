// enCarrito
//Variables del storage 
let enStorage1 = []
let enStorage = []


const carrito = document.querySelector(".carrito")


actualizar()
//funcion principal
function actualizar(){
    let total = 0
    enStorage1 = localStorage.getItem("carrito")
    enStorage = JSON.parse(enStorage1)
    
    //Actualizo DOM con item en carrito
    carrito.innerHTML=``
    enStorage.forEach(element => {
        const productos = document.createElement("div")
        productos.classList.add("items")
        productos.innerHTML =
                            `<div class="row contenedorCarrito mb-2" style="align-items: baseline;">
                                <p class="id visually-hidden">${element.id}</p>
                                <div class="col-2">
                                    <img src="${element.imagen}" alt="" style="width:100px ;">
                                </div>
                                <div class="col-4">
                                    <p>${element.producto}</p>
                                </div>
                                <div class="col-2 precio">
                                    <p>$ <span class="valorPrecio">${element.precio}</span></p>
                                </div>
                                <div class="col-2">
                                    <input class="cantidad" type="number" min=1 value="${element.cantidad}"  style="width: 40px;">
                                </div>
                                <div class="col-2">
                                    <a href="#">
                                        <span class="badge rounded-pill text-bg-danger fs-5">X</span>
                                    </a>
                                </div>
                                    
                             </div><hr>`
                
                carrito.appendChild(productos)
                total += parseFloat(element.precio)*element.cantidad   
        });
        
        //Actualizo img carrito con items agregados
        carrito.innerHTML +=`
        <div class="col-4 offset-8 fs-5 mt-1 ">
        <p class="sumaTotal">Total: $${total}</p>
        </div>`
        
        //Boton de borrar los items del carrito
        const btnBorrarItem = document.querySelectorAll(".badge")
        btnBorrarItem.forEach((element)=>{
            element.addEventListener("click",(e)=>{
                const evento = e.target
                const contenedor = evento.closest(".row")
                const id = contenedor.querySelector(".id").textContent
                const itemBorrarIndex = enStorage.findIndex(ele=>ele.id==id)
                enStorage.splice(itemBorrarIndex,1)
                localStorage.setItem("carrito",JSON.stringify(enStorage))
                
                //Actualizar el DOM despues de borrar un item
                actualizar()
            })
        })
            
            
        //Variación cantidad de items en carrito
        const itemCantidad = document.querySelectorAll(".contenedorCarrito")
        const totalSuma = document.querySelector(".sumaTotal")
        itemCantidad.forEach((element)=>{
            element.addEventListener("change",(e)=>{
                const target=e.target
                let cantidad = Number(target.value)
                const contenedor = target.closest(".row")
                const id = contenedor.querySelector(".id").textContent
                const itemIndex = enStorage.findIndex(ele=>ele.id==id)
                totalSuma.innerHTML =`<p class="sumaTotal">Total: $${total}</p>`
                enStorage[itemIndex].cantidad=cantidad
                localStorage.setItem("carrito",JSON.stringify(enStorage))
                actualizaTotal()
            })
            
        })
        
        //Actualiza sumaTotal
        function actualizaTotal(){
            total=0
            enStorage.forEach(e=>{                
                total += e.precio * e.cantidad
                totalSuma.innerHTML =`  
                <p class="sumaTotal">Total: $${total}</p>`
            })
            
        }
}