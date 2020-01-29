const imagenes = [
    "https://newbiz-master-uqgespkghu.now.sh/img/clients/client-1.png",
    "https://newbiz-master-uqgespkghu.now.sh/img/clients/client-2.png",
    "https://newbiz-master-uqgespkghu.now.sh/img/clients/client-3.png",
    "https://newbiz-master-uqgespkghu.now.sh/img/clients/client-4.png",
    "https://newbiz-master-uqgespkghu.now.sh/img/clients/client-5.png",
    "https://newbiz-master-uqgespkghu.now.sh/img/clients/client-6.png",
    "https://newbiz-master-uqgespkghu.now.sh/img/clients/client-7.png",
    "https://newbiz-master-uqgespkghu.now.sh/img/clients/client-8.png",
    ]
  
const tarjetas = document.querySelector(".tarjeta")
const descripcion = document.querySelector(".title")

descripcion.innerHTML = `
<h3> Our Clients </h3>
<p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
    Iusto vitae cumque at autem temporibus. </p>
 `

let nuevo = " "
for (let i = 0; i < imagenes.length; i++) {
  nuevo = nuevo + `
  <div class = contenedor>
  <div class = "card"> 
    <img src = "${imagenes[i]}">
  </div>
  </div>`
}

tarjetas.innerHTML = nuevo

