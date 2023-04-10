/***********************************************************************
Write a function `valuePair(obj1, obj2, key)` that takes in two objects
and a key (string). The function should return an array containing the
corresponding values of the objects for the given key.

Examples:
let object1 = {name: 'One', location: 'NY', age: 3};
let object2 = {name: 'Two', location: 'SF'};
valuePair(object1, object2, 'location'); // => [ 'NY', 'SF' ]
valuePair(object1, object2, 'name'); // => [ 'One', 'Two' ]
***********************************************************************/

function valuePair(obj1, obj2, key) {
  // Your code here
  let values=[]
  let objList1 = Object.entries(obj1)
  let objList2 = Object.entries(obj2)
  
  for( const [key1, value1] of objList1) {
    if(key1===key) {
      values.push(value1)
    }
  }
  
  for( const [key2, value2] of objList2) {
      if(key2===key) {
        values.push(value2)
      }
    }
    return values
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = valuePair;