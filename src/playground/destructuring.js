//
// Object Destructuring
//

// const person = {
//     name: 'Will',
//     age: 30,
//     location: {
//         city: 'Hollywood',
//         temp: 90
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age}.`)

// const{ city, temp: temperature } = person.location;
// if (city && temperature) {
// console.log(`It's ${temperature} in ${city}`)
// }

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher

// console.log(publisherName); // Self-Published


//
// Array destructuring
//

// const address = ['1299 S Juniper St', 'Philadelphia', 'Pennsylvania', '19147'];

// const [, city, state = 'New York'] = address;

// console.log(`You are in ${city} ${state}`);

const item = ['coffee (iced)', '$3.00', '$3.50', '$3.75'];
const [drink, , mediumPrice] = item

console.log(`A medium ${drink} costs ${mediumPrice}`);