

 //Cargo los productos desde backend
 const backupProductos = async () => {
    const responsive = await fetch("./json/productos.json")
    const productos = await responsive.json()
    return productos
 }

   let numeroCarrito=0
   let contenedorCarrito =[]
   let itemEncontrado=[]

    //Obtener el storage
    const storage = JSON.parse(localStorage.getItem("carrito"))||[] 

   //Img Carrito
    const enCarrito = document.querySelector(".encarrito")

    //calcula numero de productos en carrito           
    storage.forEach(elemento=>{
        numeroCarrito += elemento.cantidad
    })

    //Actualiza el DOM con items en el carrito
    if (storage){
        enCarrito.innerHTML = numeroCarrito
        contenedorCarrito = storage
    }
            
    
    //botonesn paginas 1,2,3,4 para vistas de 5 productos en las cart
    let paguinaVista = 0 
    const contenedorProduction = document.querySelector(".container")
    const pageLink1 = document.querySelector(".page-item1")
    const pageLink2 = document.querySelector(".page-item2")
    const pageLink3 = document.querySelector(".page-item3")
    const pageLink4 = document.querySelector(".page-item4")
    const pageLink_L = document.querySelector(".page-link-L")
    const pageLink_R = document.querySelector(".page-link-R")

    
    function paginaActiva (){
        pageLink1.classList.remove("active")
        pageLink2.classList.remove("active")
        pageLink3.classList.remove("active")
        pageLink4.classList.remove("active")
            switch (paguinaVista){
                case 0: 
                    pageLink1.classList.add("active")
                break
                case 1:
                    pageLink2.classList.add("active")
                break
                case 2:
                    pageLink3.classList.add("active")
                break
                case 3:
                    pageLink4.classList.add("active")
                break
            }
    }

    //Eventos click por paginas
    pageLink1.addEventListener("click",()=>{
        if (!pageLink1.classList.contains("active")){
            pageLink1.classList.add("active")
            pageLink2.classList.remove("active")
            pageLink3.classList.remove("active")
            pageLink4.classList.remove("active")
            paguinaVista=0
            creaRow(paguinaVista)
        }
    })
    pageLink2.addEventListener("click",()=>{
        if (!pageLink2.classList.contains("active")){
            pageLink2.classList.add("active")
            pageLink1.classList.remove("active")           
            pageLink3.classList.remove("active")
            pageLink4.classList.remove("active")
            paguinaVista=1
            creaRow(paguinaVista)
        }
    })
    pageLink3.addEventListener("click",()=>{
        if (!pageLink3.classList.contains("active")){
            pageLink3.classList.add("active")
            pageLink1.classList.remove("active")           
            pageLink2.classList.remove("active")
            pageLink4.classList.remove("active")
            paguinaVista=2
            creaRow(paguinaVista)
        }
    })
    pageLink4.addEventListener("click",()=>{
        if (!pageLink4.classList.contains("active")){
            pageLink4.classList.add("active")
            pageLink1.classList.remove("active")           
            pageLink2.classList.remove("active")
            pageLink3.classList.remove("active")
            paguinaVista=3
            creaRow(paguinaVista)
        }
    })

    //Eventos click en flechas
    pageLink_L.addEventListener("click",()=>{
        if (paguinaVista>0){
            paguinaVista --
            creaRow(paguinaVista)
            paginaActiva()
        }
    })
    pageLink_R.addEventListener("click",()=>{
        if (paguinaVista<3){
            paguinaVista ++
            creaRow(paguinaVista)
            paginaActiva()
        }
    })


    class Productos {
        constructor (id,marca,titulo,descripcion,precio,cantidad,imagen,altImagen){
            this.id = id
            this.marca = marca
            this.titulo = titulo
            this.descripcion = descripcion
            this.precio = precio
            this.cantidad = cantidad
            this.imagen = imagen
            this.altImagen = altImagen
        }
    }
    
    
    const nuevaRow = document.createElement("div")
    nuevaRow.classList.add("row")
    nuevaRow.classList.add(`row${0}`)
    contenedorProduction.appendChild(nuevaRow)

    creaRow(paguinaVista)
    
    //Se crea fila de cart principal
    function creaRow(paguinaVista,encontrado){   
        const containerModalCart = document.querySelector(`.modal-cart`)
        const containerRow = contenedorProduction.querySelector(`.row${0}`)
        containerRow.innerHTML =``
        containerModalCart.innerHTML =``
        
        if (encontrado){
            encontrado.forEach((e)=>{
                containerRow.innerHTML +=`
                    <div class="col-12 col-md-6 col-lg">
                        <div class="card mb-4 rounded-2 fade-in">
                            <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal${e.id}" style="height:20rem;">
                            <img src=${e.imagen} class="img-fluid" alt=${e.altImagen}>
                            <h5>${e.titulo}</h5>
                            <p>${e.descripcion}</p>
                            </button>  
                        </div>
                    </div>
                    `
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
            })
            btnsDecompra()
        } else  {
            backupProductos().then(producto=>{    
                let lista = []
                switch (paguinaVista){
                    case 0:
                        lista = producto.slice(0,5)
                    break
                    case 1:
                        lista = producto.slice(5,10)
                        break
                    case 2:
                        lista = producto.slice(10,15)
                        break
                    case 3:
                        lista = producto.slice(15,20)
                        break
                    default:
                        lista = producto.slice(0,5)
                        break
                }
                lista.forEach((e)=>{
                    containerRow.innerHTML +=`
                        <div class="col-12 col-md-6 col-lg">
                            <div class="card mb-4 rounded-2 fade-in">
                                <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal${e.id}" style="height:20rem;">
                                <img src=${e.imagen} class="img-fluid" alt=${e.altImagen}>
                                <h5>${e.titulo}</h5>
                                <p>${e.descripcion}</p>
                                </button>  
                            </div>
                        </div>
                    `
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
                })
                btnsDecompra()
        
            //modal de busqueda
            let buscando = ""
            const containerBusqueda = document.querySelector(".contBusqueda")
            const itemBuscado = document.getElementById("inputBuscado")
            const btnSearch = document.querySelector(".btn-outline-success")
       
            itemBuscado.addEventListener("input",(e)=>{    
                buscando = itemBuscado.value
                const encontrado = producto.filter((ele => ele.titulo.toUpperCase().includes(itemBuscado.value.toUpperCase())))
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
                    encontrado.forEach((e)=>{
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
                    }) 
                }
                btnSearch.addEventListener("click",(e)=>{
                    containerBusqueda.innerHTML=""
                    itemBuscado.value=""
                    if (itemEncontrado.length>0){
                        creaRow(0,itemEncontrado)
                    }
                })     
                btnsDecompra()
            })   
            })
        }
    }


function btnsDecompra(){
    class Carrito {
        constructor(id,cantidad=1){
            this.id= id
            this.cantidad = cantidad
        }
    }
    
    //Por cada boton de compra genero un evento click
    const btnDecompra = document.querySelectorAll(".btn-primary")
    btnDecompra.forEach((btn)=>{
        btn.addEventListener("click",(event)=>{        
            const cadaBoton = event.target
            const contenedor = cadaBoton.closest(".modal-content")
            const id = contenedor.querySelector(".id").textContent
                      
            //genero los item del carrito y lo cargo en el contenedor
            const nuevoItem = new Carrito(id)
            if (storage){
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
     })
 })
 

 //boton cancelar 
 const btnCancelar = document.querySelectorAll(".btn-secondary")
     btnCancelar.forEach((btn)=>{
         btn.addEventListener("click",()=>{
             itemBuscado.value=""       
             containerBusqueda.innerHTML=""  
         })
     })
}
