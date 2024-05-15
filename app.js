// paso de parametros por referencias solo arreglos y objetos//

function vehiculos(auto){
    auto.marca='JEEP'
}

let auto={marca:'Mercedes',modelo:'jeep',anio:2020}

document.write("Fuera de la función ",auto.marca)

vehiculos(auto)

document.write("<br>"+"despues de la ejecución de la función ",auto.marca)

// paso de parametros por valor se afectan las variables//

function porvalor(auto){
    auto='JEEP'
    document.write("<br>"+"el contenido de la variable es ",auto1)
}

let auto1='Camioneta'

porvalor(auto1)

document.write("el contenido de la variable es ",auto1)

//let alumnos=[{nombre:'Ana',edad:12},{nombre:'Carlos',edad:23}]

//let suma=0

//alumnos.forEach(calcular)

//function calcular(item){
   // suma+=parseInt(item.edad)
    //return suma
//}

//document.write("<br>"+`el total de la suma de las edades es : ${suma}`)


let alumno=["Ana","Boris","Carlos","Daniel","Ernesto"]
let notas=[1.6,3.3,5.5,6.2,6.8]
let numMay=0
let suma=0;
for (i=0;i<notas.length;i++){
    suma=suma+notas[i]
    // if (i==0){
    //     numMay=notas[i]
    // } else{
        if (numMay<notas[i]){
            numMay=notas[i]
        }
    // }
}
let posicion=notas.indexOf(numMay)
console.log("El alumno "+alumnos[posicion]+" tiene la nota "+notas[posicion])
prom=suma/notas.length
console.log("promedio ", prom)
console.log("El promedio es : ",prom.toFixed(3))
console.log("El promedio es : ",Math.ceil(prom))
console.log("El promedio es : ",Math.floor(prom))


// cree un arreglo que almacene las temperaturas de una semana de Lunes a Viernes
// Muestre cual es la tempetarura promedio
// Muestre el dia de la temperatura mas alta y mas baja

// realice como minimo 2 funciones

// con el siguiente arreglo
// datos=[25,4,7,8,55,2,24,44,1]
// Muestre ordenado  de menor a mayor los datos

//utilice como minimo una función

