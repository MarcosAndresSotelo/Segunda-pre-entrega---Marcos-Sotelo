
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

alert("REALICE SU COMPRA")

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

function productosFun(nombre, tipo, precio) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.precio = precio;
}

let accesorio1 = new productosFun("Set de manopla", "Accesorio", 4500)
let accesorio2 = new productosFun("Almohada", "Accesorio", 4600)
let mantel1 = new productosFun("Mantel estampado", "Mantel", 5200)
let mantel2 = new productosFun("Mantel liso", "Mantel", 5500)
let acolchado1 = new productosFun("Acolchado de estacion", "Acolchado", 10500)
let acolchado2 = new productosFun("Acolchado liso", "Acolchado", 15600)
let alfombra1 = new productosFun("Alfombra suave", "Alfombra", 6500)
let alfombra2 = new productosFun("Alfombra lisa", "Alfombra", 5600)

const arrayProductos = [
    accesorio1,
    accesorio2,
    mantel1,
    mantel2,
    acolchado1,
    acolchado2,
    alfombra1,
    alfombra2,
]

let carritoVacio = []


if (confirm("¿Desea comprar algun producto?")) {
    let mostrarArray = arrayProductos.map((productosFun) => productosFun.nombre + " " + "$" + productosFun.precio)
    alert("Eliga el producto")
    let producto = prompt(mostrarArray.join(" -- "))
    let cantidad = parseInt(prompt("¿Cuantos quiere llevar?"))
    if (producto == arrayProductos) { carritoVacio.push(productosFun.producto, productosFun.precio, cantidad) }
    console.log(carritoVacio)
} else { alert("Gracias por vicitarnos") }











//alert("GRACIAS POR SU COMPRA")





