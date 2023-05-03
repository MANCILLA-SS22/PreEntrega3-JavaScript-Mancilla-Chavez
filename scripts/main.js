//Creacion de listas para el tag select, dirigido a años del vehiculo
const years = [
    new Year("2017"),
    new Year("2018"),
    new Year("2019"),
    new Year("2020"),
    new Year("2021"),
    new Year("2022"),
    new Year("2023"),
];
let listaAnios = document.getElementById("disabledSelect0");
years.forEach((e) => {
    let item = document.createElement("option");
    item.innerText = e.anio;
    listaAnios.append(item);
});

//Creacion de listas para el tag select, dirigido al precio del vehiculo
const precios = [
    new Precio(`$ ${100000}`),
    new Precio(`$ ${200000}`),
    new Precio(`$ ${300000}`),
    new Precio(`$ ${400000}`),
    new Precio(`$ ${500000}`),
    new Precio(`$ ${600000}`),
    new Precio(`$ ${700000}`),
    new Precio(`$ ${800000}`),
    new Precio(`$ ${900000}`),
    new Precio(`$ ${100000}`)
];
let listaPrecios = document.getElementById("disabledSelect1");
precios.forEach((e) => {
    let item = document.createElement("option");
    item.innerText = e.precio;
    listaPrecios.append(item);
});

//Creacion de listas para el tag select, dirigido al tipo de motor del vehiculo
const motores = [
    new Motor("Diesel"),
    new Motor("Gasolina"),
    new Motor("Electrico"),
    new Motor("Gas"),
];
let listaMotores = document.getElementById("disabledSelect2");
motores.forEach((e) => {
    let item = document.createElement("option");
    item.innerText = e.motor;
    listaMotores.append(item);
});

//Creacion de listas para el tag select, dirigido al tipo de transmision del vehiculo
const transmisiones = [
    new Transmision("Estandar"),
    new Transmision("Automatico"),
];
let listaTransmision = document.getElementById("disabledSelect3");
transmisiones.forEach((e) => {
    let item = document.createElement("option");
    item.innerText = e.transmision;
    listaTransmision.append(item);
});0


//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

let array_carros = [];
let carrosJSON = [];

const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    event.target.setAttribute("class", "needs-validation"); 

    let resultado = crearAuto();

    return resultado;
});

if (localStorage.getItem("array_carros")) {
    carrosJSON = JSON.parse(localStorage.getItem("array_carros"));
    array_carros = carrosJSON.map((element) => new Carro(element.marca, element.modelo, element.anio, element.precio, element.motor, element.transmision));
    imprimirTabla(array_carros);
}

function crearAuto() {
    const nombreVehiculo = document.getElementById("disabledTextInput0").value;
    const modeloVehiculo = document.getElementById("disabledTextInput1").value;
    const anoVehiculo = document.getElementById("disabledSelect0").value;
    const precioVehiculo = document.getElementById("disabledSelect1").value;
    const motorVehiculo = document.getElementById("disabledSelect2").value;
    const transmisionVehiculo = document.getElementById("disabledSelect3").value;

    // Buscamos o creamos a una Carrera
    let unVehiculo = new Carro(nombreVehiculo, modeloVehiculo, anoVehiculo, precioVehiculo, motorVehiculo, transmisionVehiculo);
    array_carros.push(unVehiculo);
    localStorage.setItem("array_carros", JSON.stringify(array_carros));// Almacewnar en el local storage todas las carreras
    imprimirTabla(array_carros);

    limpiar();
    return true;
} 

function imprimirTabla(arreglo = []){
    let bodyTable = document.getElementById("autosTableBody");
    bodyTable.innerHTML = "";
    array_carros.forEach((evento) => {
    let tabla = document.createElement("tr");
    tabla.innerHTML = 
        `<tr>
        <td scope="row">${evento.marca}</td>
        <td>${evento.modelo}</td>
        <td>${evento.anio}</td>
        <td>${evento.precio}</td>
        <td>${evento.motor}</td>
        <td>${evento.transmision}</td>
        </tr>`;
    bodyTable.append(tabla);
    });
}

function limpiar(){
    document.getElementById("disabledTextInput0").value = "";
    document.getElementById("disabledTextInput1").value = "";
    document.getElementById("disabledSelect0").value = "";
    document.getElementById("disabledSelect1").value = "";
    document.getElementById("disabledSelect2").value = "";
    document.getElementById("disabledSelect3").value = "";
}
