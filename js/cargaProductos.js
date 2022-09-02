
 const backupProductos = async () => {
    const responsive = await fetch("./json/productos.json")
    const productos = await responsive.json()
    return productos
 }


//generar paginas 1,2.3 para vistas de 5 productos en las cart
let paguinaVista = 0 
const contenedorProduction = document.querySelector(".container")
const pageLink1 = document.querySelector(".page-item1")
const pageLink2 = document.querySelector(".page-item2")
const pageLink3 = document.querySelector(".page-item3")
const pageLink4 = document.querySelector(".page-item4")
const pageLink_L = document.querySelector(".page-link-L")
const pageLink_R = document.querySelector(".page-link-R")

//funcion crea clase "active"
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
                cargarAlCarrito()
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
                cargarAlCarrito()
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
                cargarAlCarrito()
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
            cargarAlCarrito()
        }
})

    //Eventos click en flechas
    pageLink_L.addEventListener("click",()=>{
        if (paguinaVista>0){
            paguinaVista --
            creaRow(paguinaVista)
            cargarAlCarrito()
            paginaActiva()
        }
    })
    pageLink_R.addEventListener("click",()=>{
        if (paguinaVista<3){
            paguinaVista ++
            creaRow(paguinaVista)
            cargarAlCarrito()
            paginaActiva()
        }
    })

    //Copias de backup de array 
 
 /*   const productoRow1 = backupProductos().then(e=>{
        return e.slice(0,5)})
    const productoRow2 = backupProductos().then(e=>{
        return e.slice(5,10)})
    const productoRow3 = backupProductos().then(e=>{
        return  e.slice(5,10)})
    const productoRow4 = backupProductos().then(e=>{
        return e.slice(5,10)}) 
    
        let listaProducto = [productoRow1,productoRow2,productoRow3,productoRow4]
    */
    //Clase principal para crear nuevos productos
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
    
    //Se crea fila de cart principal
    const nuevaRow = document.createElement("div")
    nuevaRow.classList.add("row")
    nuevaRow.classList.add(`row${0}`)
    contenedorProduction.appendChild(nuevaRow)

    creaRow(paguinaVista)
     
    function creaRow(paguinaVista,encontrado){   
        const containerModalCart = document.querySelector(`.modal-cart`)
        
        //const containerRow = contenedorProduction.querySelector(`.row${indice}`)
        const containerRow = contenedorProduction.querySelector(`.row${0}`)
        containerRow.innerHTML =``
        containerModalCart.innerHTML =``
        //cadaProducto.forEach((e,indice)=>{
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
            
        } else  {
        console.log("en el else")
            
    
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
            console.log(e)
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
    })
        }
    }



