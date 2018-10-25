
console.log("CODIGO EJECTUADO FUERA DEL CUERPO HTML");

var a = "kevin tiene";
var edad = 57;

var edadAñoMedio = edad + 5.5;

var contestacion = a + edadAñoMedio + "años";

var persona = {
    //Las propiedades se establecen con < : > en vez de < = >
    nombre:"javi",
    saludo:"good morning",
    funcionHablar: function () {
        console.log("Hola soy"+" "+nombre+" "+saludo);
    }
}

console.log(persona.funcionHablar());
//Probamos no cortar con ";"
console.log(contestacion);

