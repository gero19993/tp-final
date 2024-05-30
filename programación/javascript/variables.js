/*
    PARA DECLARAR UNA VARIABLE HAY QUE TENER EN CUENTA
    -NO debe iniciar con un numero
    -NO debe tener espacio de por medio
    -Darle un nombre descriptivo a la variable
    -Utilizar "lower CamelCase" ejemplo: nombreVariable
    -Javascript es sensible a la manera de escribir
    -NO utilizar acento o caracteres especiales solo texto se usa
*/

/* 
    var y let son variables que el valor que se les asigne
    se puede modificar mas adelante
    asi se escriben:
            -----var nombreVariable;-----
            -----var apodo = "gero" ;----
            -----let edad = 24;----------
*/


/*
    variable que no se va a poder cambiar su valor
    siempre tendra un valor constante no cambia
    ejemplo el numero pi= 3,14.....
    asi se escriben:
            ----const variableConstante = 0;----
*/

/* 
            var edad; --> es una declaración
            edad=24; --> es una asignación
            var edadAnterior = edad --> declaración con asignación directa
*/

/* tipos de variables*/
/*principales*/
//variables textuales//
var textoComillasDoble ="Hola mundo!";
var textoComillasSimple ='A';
//variables numericas//
var nuemrico = 0;
var promedio = 7;
var pi = 3.14151741234123;
var peso = 60.670;
var negativo = -350;
//variables V o F// (el 0 se interpreta falso y el 1 verdadero :v)
var booleano = true;
var booleanoFalsa = false;
////
var array =[];
var objeto = {};
var nulo = null;

console.log(negativo);
console.log(booleano);
console.log(textoComillasDoble);

//SCOPE=ALCANCE QUE TIENE UNA VARIABLE//

var variableVar; // var =scope o llegada global 
let variableLet; // let= scope o llegada local

function beber(){
    var bebida ="agua";
    console.log(bebida);
}
beber();
console.log(bebida);

//operadores//
var numero1 = 60;
var numero2 = 40;
var resultado = numero1 + numero2;
console.log(resultado);


var numero1 = 60;
var numero2 = 40;
var resultado = numero1 - numero2;
console.log(resultado);


var numero1 = 60;
var numero2 = 40;
var resultado = numero1 * numero2;
console.log(resultado);


var numero3 = 10;
var numero4 = 2;
var resultado = numero3 / numero4;
console.log(resultado);

//concatenar texto y numeros//
var numero3 ="MANUEL";
var numero4 = 2;
var resultado = numero3 + numero4;
console.log(resultado);
//concatenar texto y texto
var nombre ="Geronimo ";
var apellido = "Pasciullo";
var resultado = nombre + apellido;
console.log(resultado)

//incremento
var incremento = 1;

console.log(incremento);
incremento++ // el ++ es sumar 1 (+1)
console.log(incremento);

//decremento
var decremento = 1;

console.log(decremento);
decremento--
console.log(decremento);
//simbolo menos
var numero = 1;

console.log(numero);
console.log(-numero);
//comparativa ==//
var variable1 = "2";
var variable2 = 2 ;
var result;
result = variable1 == variable2;
console.log(result);
//basicamente hago una comparativa un booleano//
var variable1 = 1 ;
var variable2 = 2 ;
var result;
result = variable1 == variable2;
console.log(result);