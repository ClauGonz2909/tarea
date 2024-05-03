// Se utiliza patra navegar sobre todos los elementos de un array 
// y aplicar una funcion a  cada uno de ellos, devolviendome un nuevo array.


const persons = [
{
dni : 12345678,
name : "Mario",
age : 35,
city : "Lima",
job : "Policia",


},

{
dni : 86523147,
name : "Fabian",
age : 56,
city : "Lima",
job : "Doctor",
},

{
dni : 65872413,
name : "Carla",
age : 21,
city : "Chiclayo",
job : "Enfermera",
},
]

const doubleAgePersons =  persons.map((person) => person.age * 2); 


console.log(doubleAgePersons); 
