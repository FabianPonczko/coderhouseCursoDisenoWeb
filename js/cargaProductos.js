
const BackupProductos = [
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
    "id":6,
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

const contenedorProduction = document.querySelector(".container")
const containerRow = contenedorProduction.querySelector(".row")

 

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

BackupProductos.forEach((e,index)=>{
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
   
    if (index == 4){
        containerRow.innerHTML +=`
        <div class="row">
        </div>`
    }
})

