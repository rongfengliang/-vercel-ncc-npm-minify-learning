const {hashids,shortid} = require('myshortid');

let id = shortid.generate();

console.log(id);

let hash = new hashids('this is my salt');

let hashid = hash.encode(1,2,3,4,5);

console.log(hashid);

