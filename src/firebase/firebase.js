import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAcZWW6NyegdlSgxnMR2n2yGZ_fHaxEXfg",
  authDomain: "expensify-3f27c.firebaseapp.com",
  databaseURL: "https://expensify-3f27c-default-rtdb.firebaseio.com",
  projectId: "expensify-3f27c",
  storageBucket: "expensify-3f27c.appspot.com",
  messagingSenderId: "638120408174",
  appId: "1:638120408174:web:58215be39f3afe4dc2227f"
};

firebase.initializeApp(config);

const database = firebase.database();

// child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

//child_added
database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// database.ref('expenses')
// .once('value')
// .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id:childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });

// database.ref('expenses')
// .on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id:childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });









database.ref('expenses').push({
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: 5411561651623
});

// database.ref('expenses').push({
//     description: 'Phone bill',
//     note: '',
//     amount: 9500,
//     createdAt: 5411561651623
// });

// database.ref('expenses').push({
//     description: 'Internet',
//     note: '',
//     amount: 8500,
//     createdAt: 5411561651623
// });

// database.ref('notes/-MpF-WQUjH_QDl4uMS7u').remove()




// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React Native, Angular, Python'
// });



// const firebaseNotes = {
//     notes: {
//         apsdjaofi: {
//             title: 'First note!',
//             body: 'This is my note'        
//         },
//         sdgfkjnsgd: {
//             title: 'Another note!',
//             body: 'This is my note'        
//         }
//     }
// };

// const notes = [{
//     id: '12',
//     title: 'First note!',
//     body: 'This is my note'
// }, {
//     id: '241421',
//     title: 'Another note!',
//     body: 'This is my note'
// }];

// database.ref('notes').set(notes);
// database.ref('notes/12')

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//     database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(30);
// }, 10500);



// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e)
//     });



// database.ref().set({
//     name: 'Will M',
//     age: 30,
//     stressLevel: 6,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Hollywood',
//         country: 'USA'
//     }
// }).then(() => {
//     console.log('Data is saved!');
// }).catch((e) => {
//     console.log('This failed.', e);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });

// database.ref()
//     .remove()
//     .then(() => {
//         console.log("Data was removed");
//     }).catch((e) => {
//         console.log("Did not remove data", e);
//     });
