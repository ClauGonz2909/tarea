// // Se utiliza para veroificar si todos cumplen la condicion retornara true 
// de lo contrario retornara false.


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

const everyPersons =  persons.every((person) => person.city.includes('Lima')); 


console.log(everyPersons); 
