db = db.getSiblingDB('test');

db.createUser({
    user: "test",
    pwd: "test",
    roles: [{
        role: 'readWrite',
        db: 'test'
    }]
});


/*
Increase what you want to initialize when mongo starts up
 */


db.createCollection('test_user');

db.test_user.insertMany([
    {
        user: 'DaShaun',
        company: 'Spring'
    },
    {
        user: 'Josh Long',
        company: 'Spring'
    }
]);


