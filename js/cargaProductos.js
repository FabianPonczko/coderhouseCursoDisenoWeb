
const backupProductos = [
    {
    "id":1,
    "marca":"Epson",
    "titulo": "Impresora Epson FX 5000",
    "descripcion":"Impresora color chorro de tinta 400 dp",
    "precio": 25000,
    "cantidad": 5,
    "imagen":"./assets/impresora.jpeg",
    "altImagen":"impresora epson"
},
{
    "id":3,
    "marca":"Hp",
    "titulo": "Notebook Hp 6000",
    "descripcion":"Notebook i7 de alto rendimiento pantalla 15,6 pulgadas ",
    "precio": 185000,
    "cantidad": 3,
    "imagen":"./assets/notebook_hp.jpeg",
    "altImagen":"notebook-hp"
},
{
    "id":2,
    "marca":"Philips",
    "titulo": "Auricular H-200",
    "descripcion":"Impresionante auriculas estereo con microfono incorporado",
    "precio": 14000,
    "cantidad": 15,
    "imagen":"./assets/auricular.jpeg",
    "altImagen":"auricular"
},
{
    "id":4,
    "marca":"Gigabyte",
    "titulo": "Monitor Gigabyte",
    "descripcion":"Monitor gamer con tasa de refresco de 144 mhz soporte lateral e inclinación",
    "precio": 52000,
    "cantidad": 9,
    "imagen":"./assets/monitor.jpeg",
    "altImagen":"monitor gigabyte"
},
{
    "id":5,
    "marca":"Amd",
    "titulo": "Micro Ryzen 7",
    "descripcion":"Micro Ryzen 7 clase D velocidad máxima 32000 ciclos por segundo",
    "precio": 45000,
    "cantidad": 4,
    "imagen":"./assets/ryzen.jpeg",
    "altImagen":"micro ryzen 7"
},
{
    "id":6,
    "marca":"Logitech",
    "titulo": "Cámara Web Logitech C922 Pro",
    "descripcion":"Full HD 1080p/ HD 720p Microfono incorporado.",
    "precio": 15000,
    "cantidad": 4,
    "imagen":"./assets/webCam_1.jpeg",
    "altImagen":"webCam"
},
{
    "id":7,
    "marca":"Logitech",
    "titulo": "Teclado y Mouse MK235 Inalámbrico",
    "descripcion":"Teclado y Mouse Logitech MK235 Inalámbrico Gris",
    "precio": 4500,
    "cantidad": 9,
    "imagen":"./assets/teclado_1.jpeg",
    "altImagen":"Teclado y Mouse"
},
{
    "id":8,
    "marca":"Kingston",
    "titulo": "Memoria Ram DDR4 - 4Gb",
    "descripcion":"Memoria Ram DDR4 - 4Gb 3200 Mhz Beast Kingston Fury",
    "precio": 7500,
    "cantidad": 3,
    "imagen":"./assets/mem_1.jpeg",
    "altImagen":"memoria ram"
},
{
    "id":9,
    "marca":"Cooler Master",
    "titulo": "Cooler Cpu MA410M Argb 150 W",
    "descripcion":"Cooler Cpu Cooler Master MasterAir MA410M Argb 150 W",
    "precio": 14000,
    "cantidad": 15,
    "imagen":"./assets/cooler_1.jpeg",
    "altImagen":"cooler"
},
{
    "id":10,
    "marca":"Logitech",
    "titulo": "Volante Logitech G29",
    "descripcion":"Volante secuencial con pedalera logitech",
    "precio": 25000,
    "cantidad": 5,
    "imagen":"./assets/volante_1.jpeg",
    "altImagen":"volante logitech"
},
{
    "id":11,
    "marca":"HyperX",
    "titulo": "Micrófono HyperX Quadcast S Rgb",
    "descripcion":"Estéreo, omnidireccional, cardioide, bidireccional",
    "precio": 30000,
    "cantidad": 5,
    "imagen":"./assets/microfono_1.jpeg",
    "altImagen":"Micrófono HyperX"
},
{
    "id":12,
    "marca":"Xp Pen",
    "titulo": "Tableta Gráfica Xp Pen Star 03",
    "descripcion":"1 x P01 Lápiz pasivo , 1 x Base del lápiz, 1 x Sacador de plumin, 1 x Guía Rápida, 8 x Plumines, 1 x Cable USB",
    "precio": 13000,
    "cantidad": 5,
    "imagen":"./assets/tableta_1.jpeg",
    "altImagen":"Tableta Gráfica"
},
{
    "id":13,
    "marca":"Cooler Master",
    "titulo": "Silla Gamer ",
    "descripcion":"Silla Gamer Cooler Master Caliber Cooling R2C Gris",
    "precio": 75000,
    "cantidad": 5,
    "imagen":"./assets/silla_1.jpeg",
    "altImagen":"Silla Gamer"
},
{
    "id":14,
    "marca":"GeForce",
    "titulo": "GeForce GTX 1630",
    "descripcion":"Placa De Video GeForce GTX 1630 4Gb Msi Ventus Xs Oc",
    "precio": 55000,
    "cantidad": 5,
    "imagen":"./assets/placa_1.jpeg",
    "altImagen":"Placa de video"
}
,{
    "id":15,
    "marca":"Redragon",
    "titulo": "Joystick PC Ps3 Redragon G807 Saturno",
    "descripcion":"2 motores de vibración para Force Feedback",
    "precio": 4500,
    "cantidad": 5,
    "imagen":"./assets/mando_1.jpeg",
    "altImagen":"Joystick"
}

]

//generar paginas 1,2.3 para vistas de 5 productos en las cart
let paguinaVista = 0 
const contenedorProduction = document.querySelector(".container")
const pageLink1 = document.querySelector(".page-item1")
const pageLink2 = document.querySelector(".page-item2")
const pageLink3 = document.querySelector(".page-item3")
const pageLink_L = document.querySelector(".page-link-L")
const pageLink_R = document.querySelector(".page-link-R")


//funcion crea clase "active"
function paginaActiva (){
    pageLink1.classList.remove("active")
    pageLink2.classList.remove("active")
    pageLink3.classList.remove("active")
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
        }
}

    //Eventos click por paginas
    pageLink1.addEventListener("click",()=>{
            if (!pageLink1.classList.contains("active")){
                pageLink1.classList.add("active")
                pageLink2.classList.remove("active")
                pageLink3.classList.remove("active")
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
                paguinaVista=2
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
        if (paguinaVista<2){
            paguinaVista ++
            creaRow(paguinaVista)
            cargarAlCarrito()
            paginaActiva()
        }
    })

    //Copias de backup de array 
    const productoRow1 = backupProductos.slice(0,5)
    const productoRow2 = backupProductos.slice(5,10)
    const productoRow3 = backupProductos.slice(10,15)
    const listaProducto = [productoRow1,productoRow2,productoRow3]
    
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
     
    function creaRow(paguinaVista){        
        const containerModalCart = document.querySelector(`.modal-cart`)
        console.log(containerModalCart)
        //const containerRow = contenedorProduction.querySelector(`.row${indice}`)
        const containerRow = contenedorProduction.querySelector(`.row${0}`)
        containerRow.innerHTML =``
        containerModalCart.innerHTML =``
        //cadaProducto.forEach((e,indice)=>{
        listaProducto[paguinaVista].forEach((e,indice)=>{
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
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Comprar</button>
                        </div>
                    </div>
                </div>`
        })

    }



