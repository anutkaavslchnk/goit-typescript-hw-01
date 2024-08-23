interface info{
    name:string;
    age:number;
    email:string;
    address?:{
        city:string;
        country:string;
    }
};
let mango:info={
    name: 'Mango',
    age: 30,
    email: 'john@example.com',
    address: {
        city: 'New York',
        country: 'USA'
    }
};
let poly:info={
    name: 'Mango',
    age: 30,
    email: 'john@example.com'
}