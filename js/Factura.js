//crear una funcion
function calcular(){
    //definir variables para el iva, precio y cantidades
    const iva = 0.19;
    let precio = document.simuladorFactura.precio.value; 
    let cantidad = document.simuladorFactura.cantidad.value;
    //capturar el producto
    producto=document.getElementById('producto').value;

    /*
    crear una variacion para editar una operación con datos nulos o vacios; y que la cantidad o precio no sea 0.
    Se hace con una estructura condicional if-then 
    */
    if(precio==0 || precio==null || cantidad==0 || cantidad==null){
        alert("cantidad o precio =0 o sin llenar, llene todos los campos por favor");
    } else{
        //declarar variables para la operación
        //valor total vt
        let vt= precio*cantidad;
        //valor del producto con porcentaje de iva vi
        let vi= vt*iva;
        //total a pagar 
        let tp= vi+vt;

        //imprimir resultados en la pagina web se utiliza un elemento llamado InnerHTML
        //mostrar el producto seleccionado
        document.getElementById("valorProducto").innerHTML=producto;
        //mostrar el precio
        document.getElementById("valorPrecio").innerHTML=precio;
        //mostrar total
        document.getElementById("valorTotal").innerHTML=vt;
        //Mostrar iva 
        document.getElementById("valorIva").innerHTML=vi;
        //MOSTRAR total
        document.getElementById("totalPagar").innerHTML=tp;

    
    }
}