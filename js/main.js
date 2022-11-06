
//Variables
let nombreDeUsuario
let contraseña
let nombreDeUsuarioConfirm
let contraseñaConfirm

//Registro de usuario
function nombreUsuario() {
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

let confirmacion = prompt("¿Desea comprar algún producto? Ingrese SI o NO").toLowerCase()

while (confirmacion != "si" && confirmacion != "no") {
    alert("Gracias por visitarnos")
    let confirmacion = prompt("¿Desea comprar algún producto? Ingrese SI o NO").toLowerCase()
}

if (confirmacion == "si") {
    alert("Seleccione un artículo")
    let mostrarProductos = arrayProductos.map((producto) => "Nombre: " + producto.nombre + " , " + "Precio: " + "$" + producto.precio)
    alert(mostrarProductos.join("---"))
} else if (confirmacion == "no") {
    alert("Gracias por visitarnos")
}

while (confirmacion != "no") {
    let producto = prompt("Escriba el nombre del producto que desea comprar")
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


        carritoVacio.push({ producto, precio, })
        console.log(carritoVacio)

    } else {
        alert("Ese producto no está disponible")
    }
    confirmacion = prompt("¿Quiere seleccionar otro producto? Ingrese SI o NO").toLocaleLowerCase()



    while (confirmacion == "no") {
        alert("Muchas gracias, vuelva pronto")
        carritoVacio.forEach((carrito) => { console.log(`Nombre del producto: ${carrito.producto},Precio final: $ ${carrito.precio}`) })
        break
    }
}
const precioTotalDeProductos = carritoVacio.reduce((acc, el) => acc + el.precio + 0)
alert("El precio final de su compra es de: " + precioTotalDeProductos)

