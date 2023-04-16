document.querySelector(".btn").addEventListener("click", () =>{
    alert("Buen dia. En esta pagina podra ver nuestra variedad de vehiculos!!");
    class carro {
        constructor(marca, modelo, anio, puertas, kilometraje, motor, transmision, num_cilindros, potencia, precio_base) {
            this.marca = marca;
            this.modelo = modelo;
            this.anio = anio;
            this.puertas = puertas;
            this.kilometraje = kilometraje;
            this.motor = motor;
            this.transmision = transmision;
            this.num_cilindros = num_cilindros;
            this.potencia = potencia;
            this.precio_base = parseFloat(precio_base);
        }

        iva(x){
            x = x*1.08;
            return x;
        }

        descuento(y){
            if (y >= 350000 && y <= 500000) {
                console.log("El descuento sera del 15% !!");
                return (y) => y-(y*0.15);
            }else if (y > 500000 && y <= 1000000){
                console.log("El descuento sera del 30% !!");
                return (y) => y-(y*0.30);
            }
        }
    };

    let array_carros = [];

    let condicion = true;
    do{
        let start = parseInt(prompt("Desea iniciar? (si = 1/no = 0)"));
        if (start == 1)  //. !isNaN(opcion) Verificar si el valor ingresado no es diferente a "NaN" 
        {
            condicion = false;
            desarrollo();
        }
        

        else if (start == 0) {
            condicion = false;
            alert('Gracias, vuelva pronto!!!');
        }

        else{
            alert("Ha ingresado un valor incorrectamente. Favor de volver a intentarlo");
        }
    }while(condicion);

    function desarrollo(){
        let cantidad = parseFloat(prompt("Cuantos vehiculos quiere comprar?"));

        for (let i = 0; i < cantidad; i++){
            let marca = prompt("Selecciona la marca del vehiculo: ");
            let modelo = prompt("Selecciona el modelo del vehiculo: ");
            let anio = prompt("Selecciona el año del vehiculo: ");
            let puertas = prompt("Selecciona la cantidad de puertas del vehiculo: ");
            let kilometraje = prompt("Selecciona cuantos kilometros tiene el vehiculo: ");
            let motor = prompt("Selecciona el tipo de motor del vehiculo: ");
            let transmision = prompt("Selecciona el tipo de transmision del vehiculo: ");
            let num_cilindros = prompt("Selecciona el numero de cilindros del vehiculo: ");
            let potencia = prompt("Selecciona la potencia del vehiculo: ");
            let precio_base = parseInt(prompt("Selecciona el precio normal del vehiculo: "));
            array_carros.push(new carro(marca, modelo, anio, puertas, kilometraje, motor, transmision, num_cilindros, potencia, precio_base));

        let precioConIva = array_carros[i].iva(precio_base)
            if (precioConIva>=350000) {
                let res = array_carros[i].descuento(array_carros[i].precio_base);
                console.log("Los especificaciones tecnicas del vehiculo son: ", array_carros[i]);
                let desc = res(precioConIva)
                console.log("El descuento del vehiculo es: "+ desc);
                array_carros[i].precio_base = desc;

            }else if (precioConIva <= 350000 && precioConIva >= 0) {
                console.log("Los especificaciones tecnicas del vehiculo son: ", array_carros[i]);
                console.log("El precio final junto con el IVA del vehiculo "+ array_carros[i].marca+ " "+ array_carros[i].modelo+" es: "+ precioConIva); 
                array_carros[i].precio_base = precioConIva;
            }
            console.log("\n");
        }

        console.log("EL nuevo arreglo es: ", array_carros);
        let suma = 0;
        for (const barrido of array_carros) {
            suma = suma + barrido.precio_base;
        }
        console.log("\nLa suma total de la compra es de $"+ suma+". Gracias por su compra!!");
    }
}) 
