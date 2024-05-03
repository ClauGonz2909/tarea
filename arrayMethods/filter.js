

//Sirve para crear un nuevo array con los elementos del array original
//que cumplan la condicion especifica que le hayamos dado en el callback
const persons = [
{
dni : 12345678,
name : "Mario",
age : 35,
gender : "male",
city : "Lima",
job : "Policia",


},

{
dni : 86523147,
name : "Fabian",
age : 56,
gender : "male",
city : "Lima",
job : "Doctor",
},

{
dni : 65872413,
name : "Carla",
age : 21,
gender : "female",
city : "Chiclayo",
job : "Enfermera",
},
]

const idFilter = "female";
const filterPersons =  persons.filter((person) => person.gender !==idFilter); 


console.log(filterPersons); 
