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
console.log(_string1+': ' + _string1.length + ', ' + _string2 + ': ' + _string2.length + ' , How long: '+ howLong);

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