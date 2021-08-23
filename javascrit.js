
/*   var num = 10;
    var str="FERNANDO";
    var bol = true;
    var und =undefined;
    var nul = null;

    var obj = {
    numero:10,
    texto: "Fernando",

    objHijo:{
        numero2:10,
    texto2: "Fernando"
    },
    };
*/

var persona={
    nombre:"juana",
    apellido:"delapaz",
    edad:25,
    direccion:{
    Pais:"Peru",
    Ciudad:"Lima",
    edificio:{
        nombre:"principal",
        telefono:1234556,
        cuadra:"piso"
    }

}
};

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);
console.log(persona.direccion.Pais);
console.log(persona.direccion);

persona.direccion.zipcode =1110;

console.log(persona.direccion);
console.log(persona.direccion.zipcode);

console.log(persona.direccion.edificio.telefono);




var edificio=persona.direccion.edificio.telefono;
var edificio2=persona.direccion.edificio.nombre;

console.log(edificio);
console.log(edificio2);














