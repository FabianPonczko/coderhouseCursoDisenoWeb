

cargarAlCarrito()

//funcion principal
function cargarAlCarrito (){

    //Img Carrito
    const enCarrito = document.querySelector(".encarrito")

    //Variables
    let contenedorCarrito =[]
    let numeroCarrito=0
    let itemEncontrado=[]

    //Obtener el storage
    const storage = JSON.parse(localStorage.getItem("carrito"))||localStorage.setItem("carrito",JSON.stringify([])) 
    
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


    //modal de busqueda
    let buscando = ""
    const containerBusqueda = document.querySelector(".contBusqueda")
    const itemBuscado = document.getElementById("inputBuscado")
    const containerModalCart = document.querySelector(".modal-cart")
    const btnSearch = document.querySelector(".btn-outline-success")
    
    
    itemBuscado.addEventListener("input",(e)=>{    
            buscando = itemBuscado.value
            const encontrado = backupProductos().then(e=> e.filter((ele => ele.titulo.toUpperCase().includes(itemBuscado.value.toUpperCase()))))
            console.log(encontrado)
            itemEncontrado =encontrado
            containerBusqueda.innerHTML=""
            
        if (buscando.length>1){ 
            encontrado.forEach((element)=>{
                const productos = document.createElement("div")
                productos.classList.add("items")
                productos.innerHTML = `
                        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal${element.id}" style="display:contents;">
                            <div class="row resBusqueda text-center m-2">
                                <p class="id visually-hidden">${element.id}</p>
                                <div class="col-12 col-lg-2">
                                    <img src="${element.imagen}" alt="" style="width:62px ;">
                                </div>
                                <div class="col-12 col-lg-6">
                                    <p>${element.titulo}</p>
                                </div>
                                <div class="col-12 col-lg-4 precio">
                                    <p>$ <span class="valorPrecio">${element.precio}</span></p>
                                </div>
                            </div>
                        </button>`
                containerBusqueda.appendChild(productos)
           
            })
           

            containerModalCart.innerHTML =``
            backupProductos.forEach((e)=>{
                containerModalCart.innerHTML +=` 
                    <div class="modal fade" id="exampleModal${e.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <p class ="id visually-hidden">${e.id}</p>
                            <div class="modal-header flex-column">
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                <h5 class="modal-title" id="exampleModalLabel${e.id}">${e.titulo}</h5>
                                <img src=${e.imagen} class="img-fluid" alt=${e.altImagen} >
                            </div>
                            <div class="modal-body">
                                <p>${e.descripcion}</p>
                                <p>Llevalo por $<span class="precio">${e.precio}</span>  -  contado</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Agregar Al Carrito</button>
                            </div>
                        </div>
                    </div>`
                    
            actualizo()
            }) 
                   
          
        }
        btnSearch.addEventListener("click",(e)=>{
            containerBusqueda.innerHTML=""
            itemBuscado.value=""
            creaRow(0,itemEncontrado)
        })     
    })
  

    actualizo()
    function actualizo(){
        
        //Por cada boton de compra genero un evento click
        const btnDecompra = document.querySelectorAll(".btn-primary")
        btnDecompra.forEach((btn)=>{
            btn.addEventListener("click",(event)=>{
                itemBuscado.value=""       
                containerBusqueda.innerHTML=""  
                console.log("boton apretado")
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
                            storage[i].cantidad ++
                            numeroCarrito ++
                
                            //actualizo el store
                            localStorage.setItem("carrito",JSON.stringify(contenedorCarrito))
                            enCarrito.innerHTML = numeroCarrito

                            //mensage agregado
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Producto agregado con exito',
                            })
                        return     
                        }
                    }
            
                //Agrego nuevo item al carrito    
                contenedorCarrito.push(nuevoItem)
                
                //mensage agregado
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Producto agregado con exito',
                })

                //Suma item en carrito
                numeroCarrito ++
                
                //actualizo store
                localStorage.setItem("carrito",JSON.stringify(contenedorCarrito))
                
                //Actualizo DOM - carrito
                enCarrito.innerHTML = numeroCarrito
                
                console.log("actualizo",itemBuscado.value )
            
            })
        
        })
        

        //Por cada cancelar de compra genero un evento click
        const btnCancelar = document.querySelectorAll(".btn-secondary")
            btnCancelar.forEach((btn)=>{
                btn.addEventListener("click",(event)=>{
                    console.log("cancelar compra")
                    itemBuscado.value=""       
                    containerBusqueda.innerHTML=""  
                })

            })
    }
     
}