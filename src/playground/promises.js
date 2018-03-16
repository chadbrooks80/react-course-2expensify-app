const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'chad',
            age: 37
        });
        // reject('Something went wrong');
    },10000)

});

console.log('before');

promise.then((data) => {
    console.log('1', data);
    return 'some string';
}).then((str) => {
    console.log(str);
}).catch((error) => {
    console.log('error: ', error);
});


console.log('after');