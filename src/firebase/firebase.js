import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSANGING_SENDER_ID
  };


firebase.initializeApp(config);


const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default }


// database.ref('expenses').on('child_removed', (expense) => {
//     console.log(expense.key, expense.val());
// });

// database.ref('expenses').on('child_changed', (expense) => {
//     console.log(expense.key, expense.val());
// });

// database.ref('expenses').on('child_added', (expense) => {
//     console.log(expense.key, expense.val());
// });

// database.ref('expenses')
//     .once('value' )
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses)
//     });



// database.ref('expenses').on('value', (snapshot) => {
//     const myArray = [];
//     snapshot.forEach((expense) => {
//         myArray.push({
//             id: expense.key,
//             ...expense.val()
//         })
//     });
//     console.log(myArray)
// });

// const threeExpenses = [
//     {
//         description: 'this is descripton one',
//         note: 'this is note one',
//         amount: 25.88,
//         createdAt: 2828
//     },
//     {
//         description: 'this is descripton two',
//         note: 'this is note two',
//         amount: 212215.88,
//         createdAt: 283328
//     },
//     {
//         description: 'this is descripton three',
//         note: 'this is note three',
//         amount: 252.88,
//         createdAt: 222828
//     }
// ]

// for(let i = 0; i < threeExpenses.length; i++) {
//     database.ref('expenses').push({
//         description: threeExpenses[i].description,
//         note: threeExpenses[i].note,
//         amount: threeExpenses[i].amount,
//         createdAt: threeExpenses[i].createdAt
//     })
// }



// database.ref('notes/-L7VEXQlX6gUVrlC_rfQ').remove();

// database.ref('notes').push({
//     title: 'course topics',
//     body: 'Learning React, angular, python'
// });

// const notes = [{
//     id: 12,
//     title: "first title",
//     body: "ths is my first note"
// }, {
//     id: 13,
//     title: "second title",
//     body: "ths is my second note"
// }];

// const fireBaseNotes = {
//     notes: {
//         aksowkdd: {
//             title: 'title',
//             body: 'body'
//         },
//         akakakaa {
//             title: 'another title',
//             body: 'another body'
//         }
//     }
// };

// database.ref('notes').set(notes);



// const onValueChange = database.ref().on('value', (snapshot) => {
//     // console.log(snapshot.val())
//     const name = snapshot.val().name;
//     const title = snapshot.val().job.title;
//     const company = snapshot.val().job.company;
//     console.log(`${name} is a ${title} at ${company}`);
// });

// setTimeout(() => {
//     database.ref().update({
//         name: "johnny!"
//     })
// },5000);

// setTimeout(() => {
//     database.ref().update({
//         name: "bray"
//     })
// },10000);

// setTimeout(() => {
//     database.ref().update({
//         name: "chad"
//     })
// },15000);



// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('error', e);
// });

// setTimeout(() => {
//     database.ref().update({
//         age: 20
//     });
// },5000)

// setTimeout(() => {
//     database.ref().off('value', onValueChange);
// },8500)

// setTimeout(() => {
//     database.ref().update({
//         age: 28
//     });
// },12000)

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch(() => {
//         console.log('error fetching data', e)
//     })

// database.ref().set({
//     name: 'Chad Brooks',
//     age: 26,
//     stressLevel: 6,
//     job: {
//         title: 'sofware developer',
//         company: 'Google'
//     },
//     isSingle: false,
//     location: {
//         city: 'Bacolod',
//         country: 'Philippines'
//     }
// }).then(() => {
//     console.log('data is saved');
// }).catch((e) => {
//     console.log('this failed: ', e)
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': "Seattle"
// })

// database.ref('isSingle').set(null)

// database.ref('isSingle').remove()
//   .then(() => {
//     console.log('remove succesful')
//   })
//   .catch((e) => {
//     console.log('remove error: ', e)
//   });