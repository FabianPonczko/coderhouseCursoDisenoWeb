const btnDecompra = document.querySelectorAll(".btn-primary")

btnDecompra.forEach((btn)=>{
    btn.addEventListener("click",(event)=>{
        const cadaBoton = event.target
        const contenedor = cadaBoton.closest(".modal-content")
       const titulo = contenedor.querySelector(".modal-title").textContent
       const imagen = contenedor.querySelector(".img-fluid").src
       const precio = contenedor.querySelector(".precio").textContent
       
        agregarAlCarrito(imagen,titulo,precio)
        
    })
   
})

function agregarAlCarrito(imagen,producto,precio){
console.log("🚀 ~ file: carrito.js ~ line 18 ~ agregarAlCarrito ~ imagen", imagen,producto,precio)

const productos = document.createElement("div")
const carrito = document.querySelector(".container")


productos.innerHTML =`
                    <div class="row mb-2" style="align-items: baseline;" >
                    <div class="col-2">
                    <img src="./assets/auricular.jpeg" alt="" style="width:100px ;">
                    </div>

                    <div class="col-4">
                    <p>Impresora</p>
                    </div>
                    <div class="col-2">
                    <p>$1500</p>
                    </div>
                    <div class="col-2">
                    <input type="number" value="1"  style="width: 50px;">
                    </div>
                    </div>  `

carrito.appendChild(productos)
}




