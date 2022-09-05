
const backupProductos = async () => {
    const responsive = await fetch("./json/productos.json")
    const productos = await responsive.json()
    return productos
 }

let enStorage = []

//carrito en el DOM
const carrito = document.querySelector(".carrito")

actualizar()

function actualizar(){
    let total = 0
    enStorage =JSON.parse(localStorage.getItem("carrito"))
        
    //Actualizo DOM carrito con items del storage
    carrito.innerHTML=``
    backupProductos().then(producto=>{  
        enStorage.forEach(element => {
            const encontrado = producto.filter((ele => ele.id == element.id))
            const productosEnCarrito = document.createElement("div")
            productosEnCarrito.classList.add("items")
            productosEnCarrito.innerHTML =`  <div class="row contenedorCarrito mb-2 text-center" style="align-items: baseline;">
                                    <p class="id visually-hidden">${encontrado[0].id}</p>
                                    <div class="col-12 col-lg-2">
                                        <img src="${encontrado[0].imagen}" alt="" style="width:100px ;">
                                    </div>
                                    <div class="col-12 col-lg-4">
                                        <p>${encontrado[0].titulo}</p>
                                    </div>
                                    <div class="col-12 col-lg-2 precio">
                                        <p>$ <span class="valorPrecio">${encontrado[0].precio}</span></p>
                                    </div>
                                    <div class="col-6 col-lg-2">
                                        <input class="cantidad" type="number" min=1 value="${element.cantidad}"  style="width: 40px;">
                                    </div>
                                    <div class="col-6 col-lg-2">
                                        <a href="#">
                                            <span class="badge rounded-pill text-bg-danger fs-5">X</span>
                                        </a>
                                    </div>
                                        
                                </div><hr>`
                    
                    carrito.appendChild(productosEnCarrito)
                    total += parseFloat(encontrado[0].precio)*element.cantidad   
            })  
        

        //Si carrito vacio cartel
        if (enStorage.length<1){
            carrito.innerHTML=` <div class="col-12  fs-5 mt-4 text-danger text-center">
                                    <p> Ups... el carrito parece estar vacio!!!</p>
                                </div> 
                                <div class="col-lg-12 text-center">
                                    <a href="index.html">
                                        <button type="button" class="btn btn-warning btn-lg mb-5">Siguir Comprando</button>
                                    </a>
                                </div>`
        //Cargo total y botones de compra
        }else{
            carrito.innerHTML +=`<div class="row justify-content-end">
                                    <div class="col-12 col-sm-6 col-lg-4 fs-5 mt-1 ">
                                        <p class="sumaTotal" style="
                                        text-align: center">Total: $${total}</p>
                                    </div>
                                </div>
                                <div class="row justify-content-evenly text-center">
                                    <div class="col-8 col-sm-6 col-lg-4">
                                        <button type="button" id="btnCompra" class="btn btn-success btn-lg">Realizar Compra</button>
                                    </div>
                                    <div class="col-8 col-sm-6 col-lg-4 ">
                                        <a href="index.html">
                                            <button type="button" class="btn btn-warning btn-lg mb-5">Siguir Comprando</button>
                                        </a>
                                    </div>
                                </div>  `
        
            //Boton compra
            const btnCompra = document.getElementById("btnCompra")
            btnCompra.addEventListener("click",()=>{
            Swal.fire('Gracias por su compra!')
            localStorage.setItem("carrito",JSON.stringify([]))
            actualizar()
            })
        }
        
      
       
       
        //Boton de borrar los items del carrito
        const btnBorrarItem = document.querySelectorAll(".badge")
        btnBorrarItem.forEach((element)=>{
            element.addEventListener("click",(e)=>{
                Swal.fire({
                    title: 'Esta seguro?',
                    text: "El producto se eliminara del carrito!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Si, Eliminar!'
                  }).then((result) => {
                    if (result.isConfirmed) {
                        const evento = e.target
                        const contenedor = evento.closest(".row")
                        const id = contenedor.querySelector(".id").textContent
                        const itemBorrarIndex = enStorage.findIndex(ele=>ele.id==id)
                        enStorage.splice(itemBorrarIndex,1)
                        localStorage.setItem("carrito",JSON.stringify(enStorage))
                        actualizar()
                      Swal.fire({
                        icon: 'success',
                        title: 'Producto eliminado del carrito.',
                        showConfirmButton: false,
                        timer: 1200}

                      )
                    }
                  })

                
                
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
                const precioProducto = producto.filter((ele => ele.id == e.id))
                total += precioProducto[0].precio * e.cantidad
                totalSuma.innerHTML =`<p class="sumaTotal">Total: $${total}</p>`
            })
        }
        
        //Detecto tamaño de la pagina para borrar titulo para mejorar el responsive
        const pageWidth  = document.documentElement.scrollWidth;
        const tituloCarrito = document.querySelector("#tituloListado")
        
        pageWidth < 769 ? tituloCarrito.style.display="" : tituloCarrito.style.display= "none"
    })
    }
