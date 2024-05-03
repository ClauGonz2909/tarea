// Se utiliza para veroificar si al menos un
//  elemento en nuestro array cumple con la condicion,
//  retornar true.


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

const somePersons =  persons.some((person) => person.city.includes('Lima')); 


console.log(somePersons); 
