// Exercises:

// 1.a)
/*  Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma
    de ambos números en una 3er variable.*/

var a = 5;
var b = 4;
var c = a + b;
console.log('(a = ' + a + ') (b = ' + b + ') (c = a + b) (c = ' + c + ')');

// 1.b)
/*  Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er
    variable.*/

var firstString = 'Hello';
var secondString = 'World';
var concatString = firstString + secondString;

// 1.c)
/*  Crear dos variables de tipo String y sumar el largo de cada variable
    (cantidad de letras del string) guardando el resultado la suma una 3er variable
    (utilizar length).*/

var _string1 = 'car';
var _string2 = 'wheel';
var howLong = _string1.length + _string2.length;
console.log(_string1+': ' + _string1.length + ', ' + _string2 + ': ' + _string2.length + ' ,How long: '+ howLong);

//2.a)
/*  Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto
    en mayúscula (utilizar toUpperCase)*/

var lowerCase = 'hello world';
var upperCase = lowerCase.toUpperCase();
console.log(upperCase);

//2.b)
/*  Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
    con los primeros 5 caracteres guardando el resultado en una nueva variable
    (utilizar substring)*/

var teenCharWord = 'programming';
var fiveCharWord = teenCharWord.substring(0,5);
console.log(fiveCharWord);

//2.c)
/*  Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
    con los últimos 3 caracteres guardando el resultado en una nueva variable
    (utilizar substring)*/

var _teenCharWord = '1234567890';
var startPoint = _teenCharWord.length-3;
var _lastThree = _teenCharWord.substring(startPoint);
console.log(_lastThree);

//2.d)
/*  Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
    con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado
    en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).*/

var anotherOne = 'Deutschland';
var firstChar = anotherOne.substring(0,1);
var rest = anotherOne.substring(1);
var finalString = firstChar.toUpperCase() + rest.toLowerCase();
console.log(firstChar,rest,finalString)

//2.e)
/*  Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
    Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/

var $anotherOne = 'Hello World';
var position = $anotherOne.indexOf(' ');
console.log(position);

//2.f)
/*  Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio
    entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string
    que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula
    (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).*/

var Sentence = 'canadian breakfast';
var start = Sentence.substring(0,1);
var spacePoint = Sentence.indexOf(' ');
var firstHalf = Sentence.substring(1,spacePoint+1);
var secondStart = Sentence.substring(spacePoint+1, spacePoint+2);
var secondHalf = Sentence.substring(spacePoint+2);
var finalSentence = start.toUpperCase() + firstHalf.toLowerCase() + secondStart.toUpperCase() + secondHalf.toLowerCase();
console.log(finalSentence);

//3.a)
/*  Dado el siguiente array:
    ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    mostrar por consola los meses 5 y 11 (utilizar console.log)*/

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(months[5],months[11]);

//3.b)
/*  Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).*/

var orderedMonths = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
orderedMonths.sort()
console.log(orderedMonths);

//3.c) Agregar un elemento al principio y al final del array (utilizar unshift y push).

months.unshift('FirstMonth');
months.push('LastMonth');
console.log(months)

//3.d) Quitar un elemento del principio y del final del array (utilizar shift y pop).

months.shift();
months.pop();
console.log(months);

//3.e) Invertir el orden del array (utilizar reverse)

var monthReverse = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
monthReverse.reverse();
console.log(monthReverse);

//3.f) Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join)

var everyMonth = months.join('-');
console.log(everyMonth);

//3.g) Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
var mayToNovember = months.slice(4,11);
console.log(mayToNovember);

//4.a)
/*  Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es
    mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta
    con el mensaje “Lower than 0,5”*/

var randomNumber = Math.random()
    if(randomNumber >= 0.5){
        alert('Greater than 0,5');
    } else {
        alert('Lower than 0,5');
    }

//4.b)
/*  Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre
    los siguientes mensajes de alerta:*/

var Age = 20;
    if(Age < 2){
        alert('Bebe');
    } else if (2 <= Age && 12 >= Age){
        alert('Niño');
    } else if (13 <= Age && 19 >= Age){
        alert('Adolecente');
    } else if (20 <= Age && 30 >= Age){
        alert('Joven');
    } else if (31 <= Age && 60 >= Age){
        alert('Adulto');
    } else if (61 <= Age && 75 >= Age){
        alert('Adulto Mayor');
    } else if (75 <= Age){
        alert('Anciano')
    }

//5.a)
/*  Crear un array que contenga 5 palabras y recorrer dicho array utilizando
    un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.*/

var $array = ['this','is','using','a','loop'];
for(var i = 0; i < $array.length; i++){
    alert($array[i]);
}

//5.b)
/*  Al array anterior convertir la primera letra de cada palabra en mayúscula
    y mostrar una alerta por cada palabra modificada.*/

for(var i = 0; i < $array.length; i++){
    var firstCharacter = $array[i].substring(0,1);
    var otherChars = $array[i].substring(1);
    $array[i] = firstCharacter.toUpperCase() + otherChars;
    alert($array[i]);
}

//5.c)
/*  Crear una variable llamada “sentence” que tenga un string vacío, luego al
    array del punto a) recorrerlo con un bucle for para ir guardando cada palabra
    dentro de la variable sentence. Al final mostrar una única alerta con la cadena completa.*/

var sentence = '';
for(var i = 0; i < $array.length; i++){
    sentence += $array[i] + ' ';
};
alert(sentence);

//5.d)
/*  Crear una array vacío y con un bucle for de 10 repeticiones llenar el array con el número
    de la repetición, es decir que al final de la ejecución del bucle for deberia haber 10 elementos
    dentro del array, desde el número 0 hasta al numero 9. Mostrar por la consola del navegador el al
    array final (utilizar console.log).*/

var emptyArray = [];
for(var p = 0; p < 10; p++){
    emptyArray[p] = p;
}
console.log(emptyArray);

//6.a)
/*  Crear una función suma que reciba dos valores numéricos y retorne el resultado.
    Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha
    variable en la consola del navegador.*/

function suma(a,b){
    return a + b;
}
var result = suma(5,5);
console.log(result);

//6.b)
/*  A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros
    no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar
    el valor NaN como resultado*/

function suma(a,b){
    if( || typeof b !== 'number'){
        alert('Theres an error with one of the parameters');
        return NaN;
    }
    return a + b;
}

//6.c)
/*  Crear una función validate integer que reciba un número como parámetro
    y devuelva verdadero si es un número entero.*/

function validateInteger(number){
    truncedNumber = Math.trunc(number);
    return !(number - truncedNumber > 0)
}

//6.d)
/*  A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros.
    En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero
    (redondeado).*/

function suma(a,b){
    if( typeof a !== 'number' || typeof b !== 'number') {
        alert('Theres an error with one of the parameters');
        return NaN;
    }
    if ( !validateInteger(a) || !validateInteger(b) ){
        alert('Error: One of the parameters is not an interger')
        return Math.round(a+b);
    }
    return a + b;
}

//6.e)
/*  Convertir la validación del ejercicio 6b) en una función separada y llamarla dentro de la función
    suma probando que todo siga funcionando igual.*/

function checkType(number){
    return typeof number === 'number';
}
function suma(a,b){
    if ( !checkType(a) && !checkType(b) ){
        alert('Theres an error with one of the parameters');
        return NaN;
    }
    if ( !validateInteger(a) || !validateInteger(b) ){
        alert('Error: One of the parameters is not an interger')
        return Math.round(a+b);
    }
    return a + b;
}