var arr = [
    1,
    false,
    {
        name: 'Bill',
        address: '111 Main St.'
    },
    function(name) {
        var greeting = 'Hello ';
        console.log(greeting + name);
    },
    "Hello"
];

console.log(arr);
arr[3](arr[2].name) // say you want to reference the function and invoke (run) it and give it the name that is in the Array w/in the array? This is how.