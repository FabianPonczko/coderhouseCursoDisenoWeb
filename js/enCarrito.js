
let enStorage1 = []
let enStorage = []
let total = 0

const carrito = document.querySelector(".carrito")


actualizar()

function actualizar(){
    enStorage1 = localStorage.getItem("carrito")
    enStorage = JSON.parse(enStorage1)
    
    
    
     
    carrito.innerHTML=``
    
     //Actualizo DOM con item en carrito
     enStorage.forEach(element => {
        const productos = document.createElement("div")
        productos.classList.add("items")
        productos.innerHTML =`
        <div class="row mb-2" style="align-items: baseline;">
            <p class="id visually-hidden">${element.id}</p>
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
                <input class="cantidad" type="number" value="${element.cantidad}"  style="width: 40px;">
            </div>
            <div class="col-2">
                <a href="#">
                    <span class="badge rounded-pill text-bg-danger fs-5">X</span>
                </a>
            </div>
            
        </div><hr>  `
        
        carrito.appendChild(productos)
        total += parseFloat(element.precio)*element.cantidad
    });
    
    //Actualizo img carrito con items agregados
    carrito.innerHTML +=`
    <div class="col-2 offset-8 fs-5 mt-1 ">
        <p>Total: $${total}</p>
    </div>`
               
    //Borrado con boton de borrar items del carrito
    const btnBorrarItem = document.querySelectorAll(".badge")

    btnBorrarItem.forEach((element)=>{
        element.addEventListener("click",(e)=>{
            const evento = e.target
            const contenedor = evento.closest(".row")
            const id = contenedor.querySelector(".id").textContent
            const itemBorrarIndex = enStorage.findIndex(ele=>ele.id==id)
            enStorage.splice(itemBorrarIndex,1)
            localStorage.setItem("carrito",JSON.stringify(enStorage))
            actualizar()
        })
    })
    
}

    //Actualizo cantidad de items en carrito
    const itemCantidad = document.querySelectorAll(".cantidad")

    itemCantidad.forEach(element=>{
        element.addEventListener("change",(e)=>{
            console.log(e.target)
            
            const target=e.target
            const cantidad = Number(target.value)
            
            const contenedor = target.closest(".row")
            const id = contenedor.querySelector(".id").textContent
            const itemIndex = enStorage.findIndex(ele=>ele.id==id)
            enStorage[itemIndex].cantidad=cantidad
            localStorage.setItem("carrito",JSON.stringify(enStorage))
            //actualizar()
       
        })
        
    })