document.querySelector(".btn").addEventListener("click", () =>{

    alert("Buen dia. En esta pagina podra ver nuestra variedad de vehiculos!!");
    
    let condicion = true;
    do{
        let start = parseInt(prompt("Desea iniciar? (si = 1/no = 0)"));
        if (start == 1)  /* !isNaN(opcion) Verificar si el valor ingresado no es diferente a "NaN" */
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

    function desarrollo() 
    {
        function iva(sub)
        {
            res = sub*1.08;
            return res;
        }

        function descuento(des){
            total = des - (des*0.15);
            return total;
        }

        let total = 0;
        let cantidad = parseFloat(prompt("Cuantos vehiculos quiere comprar?"));
    
        for (let i = 0; i < cantidad; i++) 
        {
            const tipo = parseInt(prompt("Seleccione el modelo (Sedan = 1, Pickup = 2, Deportivo = 3, Camion = 4)"));
            switch (tipo) 
            {
                case 1:
                console.log('Ha seleccionado un Sedan, y su precio es de 150000 pesos mexicanos');
                const sedan = 150000;
                res1 = parseFloat(iva(sedan));
                total = total + res1;
                break;
                
                case 2:
                console.log('Ha seleccionado un Pickup, y su precio es de 280000 pesos mexicanos');
                const pickup = 280000;
                res2 = parseFloat(iva(pickup));
                total = total + res2;
                break;
            
                case 3:
                console.log('Ha seleccionado un Deportivo, y su precio es de 350000 pesos mexicanos');
                const deportivo = 350000;
                res3 = parseFloat(iva(deportivo));
                total = total + res3;
                break;
    
                case 4:
                console.log('Ha seleccionado un Camion, y su precio es de 300000 pesos mexicanos');
                const camion = 300000;
                res4 = parseFloat(iva(camion));
                total = total + res4;
                break;
    
                default:
                console.log('No es un numero valido');
            }        
        }
        console.log("El valor total de la inversion es: "+ total);

        if (total >= 1000000) {
            console.log("Debido a que su compra fue mayor a 1000000 pesos, se le descontara el 15% del valor final, el cual es: "+descuento(total));
        }

    };
})