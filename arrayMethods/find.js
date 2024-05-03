// El método find se utiliza para buscar el primer
// elemento en un array que cumpla con una condición especificada en una
// función.


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

const findPersons =  persons.find((person) => person.name  === "Mario"); 


console.log(find); 
