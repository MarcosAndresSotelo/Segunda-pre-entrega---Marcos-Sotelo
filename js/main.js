
//Variables
let nombreDeUsuario
let contraseña
let nombreDeUsuarioConfirm
let contraseñaConfirm

//Registro de usuario
/*function nombreUsuario() {
    nombreDeUsuario = prompt("Registre su nombre de usuario");
    contraseña = prompt("Registre su contraseña");
}

nombreUsuario()

while (confirm("¿Estos son sus datos? " + nombreDeUsuario + " " + contraseña) == false) {
    nombreDeUsuario = prompt("Registre su nombre de usuario");
    contraseña = prompt("Registre si contraseña");
}

//Confirmacion de datos
function nombreUsuarioConfirm() {
    nombreDeUsuarioConfirm = prompt("Ingrese su nombre de ususario para confirmar");
    contraseñaConfirm = prompt("Ingrese su contraseña para confirmar");
}

nombreUsuarioConfirm()

while (nombreDeUsuarioConfirm != nombreDeUsuario || contraseñaConfirm != contraseña) {
    alert("Sus datos no coinciden");
    nombreDeUsuarioConfirm = prompt("Ingrese su nombre de usuario para confirmar");
    contraseñaConfirm = prompt("Ingrese su contraseña para confirmar");
}

alert("BIENVENIDO")

//Productos de compra
function productosDeCompra() { 
    let productoSeleccionado
    while (productoSeleccionado != "Almohada" && productoSeleccionado != "Mantel estampado" && productoSeleccionado != "Mantel liso" && productoSeleccionado != "Acolchado") {
        productoSeleccionado = prompt("Seleccione un producto: Almohada, Mantel estampado, Mantel liso, Acolchado")
        switch (productoSeleccionado) {
            case "Almohada":
                alert("Usted compró: Almohada")
                break;
            case "Mantel estampado":
                alert("Usted compró: Mantel estampado")
                break;
            case "Mantel liso":
                alert("usted compró: Mantel liso")
                break;
            case "Acolchado":
                alert("Usted compró: Acolchado")
                break;
            default:
                alert("El producto seleccionado no está disponible")
                break;
        }
    }
}

productosDeCompra()*/


function productos(nombre, tipo, precio) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.precio = precio;
}



const arrayProductos = [
    accesorio1 = new productos("Set de manoplas", "Accesorio", 4500),
    accesorio2 = new productos("Almohada", "Accesorio", 4600),
    mantel1 = new productos("Mantel estampado", "Mantel", 5200),
    mantel2 = new productos("Mantel liso", "Mantel", 5500),
    acolchado1 = new productos("Acolchado de estación", "Acolchado", 10500),
    acolchado2 = new productos("Acolchado liso", "Acolchado", 15600),
    alfombra1 = new productos("Alfombra suave", "Alfombra", 6500),
    alfombra2 = new productos("Alfombra lisa", "Alfombra", 5600),
]

let carritoVacio = []

let confirmacion = prompt("¿Desea comprar algun producto? Ingrese SI o NO").toLocaleLowerCase()

while (confirmacion != "si" && confirmacion != "no") {
    alert("Gracias por vicitarnos")
    let confirmacion = prompt("¿Desea comprar algun producto? Ingrese SI o NO").toLowerCase()
}

if (confirmacion == "si") {
    alert("Seleccione un artículo")
    let mostrarProductos = arrayProductos.map((producto) => "Nombre: " + producto.nombre + " , " + "Precio: " + "$" + producto.precio)
    alert(mostrarProductos.join("---"))
} else if (confirmacion == "no") {
    alert("Gracias por vicitarnos")
}

while (confirmacion != "no") {
    let producto = prompt("Esciba el nombre del producto que desea comprar")
    let precio = 0
    if (producto == "Set de Manoplas" || producto == "Almohada" || producto == "Mantel Estampado" || producto == "Mantel liso" || producto == "Acolchado de estación" || producto == "Acolchado liso" || producto == "Alfombra suave" || producto == "Alfombra lisa") {
        switch (producto) {
            case "Set de Manoplas":
                precio = 4500;
                break;

            case "Almohada":
                precio = 4600;
                break;

            case "Mantel Estampado":
                precio = 5200;
                break;

            case "Mantel liso":
                precio = 5500;
                break;

            case "Acolchado de estación":
                precio = 10500;
                break;

            case "Acolchado liso":
                precio = 15600;
                break;

            case "Alfombra suave":
                precio = 6500;
                break;

            case "Alfombra lisa":
                precio = 5600;
                break;
            default:
                break;
        }
        carritoVacio.push({ producto, precio })
        console.log(carritoVacio)
    }
    confirmacion = prompt("¿Quiere seleccionar otro producto? Ingrese SI o NO").toLocaleLowerCase()
    while (confirmacion == "no") {
        alert("Muchas gracias, vuelva pronto")
        carritoVacio.forEach((carrito) => { console.log(`Nombre del producto: ${carrito.producto},Precio final: $ ${carrito.precio}`) })
        break
    }
}


//let mostrarArray = arrayProductos.map((producto) => producto.nombre + " " + "$" + producto.precio)
//alert("Eliga el producto")
//let producto = prompt(mostrarArray.join(" -- "))




//arrayProductos.forEach((producto) => {
  //  console.log(producto.nombre, producto.precio)
//})

//console.log(arrayProductos)



//alert("GRACIAS POR SU COMPRA")





