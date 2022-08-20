
const backupProductos = [
    {
    "id":1,
    "marca":"Epson",
    "titulo": "Impresora Epson FX 5000",
    "descripcion":"Impresora color choro de tinta 400 dp",
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
    "id":1,
    "marca":"Epson",
    "titulo": "Impresora Epson FX 5000",
    "descripcion":"Impresora color choro de tinta 400 dp",
    "precio": 25000,
    "cantidad": 5,
    "imagen":"./assets/impresora.jpeg",
    "altImagen":"impresora epson"
}
]

let paguinaVista = 0
const contenedorProduction = document.querySelector(".container")
const pageLink1 = document.querySelector(".page-item1")
const pageLink2 = document.querySelector(".page-item2")


 



pageLink1.addEventListener("click",()=>{
    console.log("clase1",pageLink1.classList.contains("disabled"))
        if (!pageLink1.classList.contains("disabled")){
            pageLink1.classList.add("disabled")
            pageLink2.classList.remove("disabled")
            paguinaVista=0
            creaRow(paguinaVista)
        }
})
pageLink2.addEventListener("click",()=>{
    console.log("clase2",pageLink2.classList.contains("disabled"))
        if (!pageLink2.classList.contains("disabled")){
            pageLink2.classList.add("disabled")
            pageLink1.classList.remove("disabled")           
            paguinaVista=1
            creaRow(paguinaVista)
        }
})
const productoRow1 = backupProductos.slice(0,5)
const productoRow2 = backupProductos.slice(5,10)
const listaProducto = [productoRow1,productoRow2]
console.log(listaProducto)
console.log(productoRow1)
console.log(productoRow2)
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
//listaProducto.forEach((cadaProducto,indice)=>{
    function creaRow(paguinaVista){
        
        
    
    //const containerRow = contenedorProduction.querySelector(`.row${indice}`)
    const containerRow = contenedorProduction.querySelector(`.row${0}`)
    containerRow.innerHTML =``
    //cadaProducto.forEach((e,indice)=>{
        listaProducto[paguinaVista].forEach((e,indice)=>{
        containerRow.innerHTML +=`
        <div class="col-12 col-md-6 col-lg">
        <div class="card mb-4 rounded-2 fade-in">
        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal${e.id}" style="height:20rem;">
        <img src=${e.imagen} class="img-fluid" alt="${e.altImagen}" >
        <h5>${e.titulo}</h5>
        <p>${e.descripcion}</p>
        </button>  
        </div>
        </div>
        `
    })

    }
//})