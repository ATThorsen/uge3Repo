
//Function Declaration
       //Observe: no return type, no type on parameters
function add(n1, n2){
   return n1 +n2;
}

//Function Expression
var sub = function(n1,n2){
  return n1 - n2;
} 

var mul = function(n1,n2){
  return n1 * n2;
} 

var div = function(n1,n2){
  return n1 / n2;
} 
//Callback example
var cb = function(n1,n2, callback){
    try {
        if(callback === undefined){
        callback = div    
        }
  return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
    } catch (e) {
  console.error("n1 or n2 i not a number");
    }
};

console.log( add(1,2) ); // 3
console.log( add );          // NaN // Not a number
console.log( add(1,2,3) ) ; // 3
console.log( add(1) );	  // NAN // Not a number 	
console.log( cb(3,3,add) ); // Result from the two numbers: 3+3=6
console.log( cb(4,3,sub) ); // Result from the two numbers: 4+3=1
console.log(cb(3,3,add())); // callback is not a function
console.log(cb(3,"hh",add));// Result from the two numbers: 3+hh=3hh

console.log(cb(3,4,mul)); // new function multi
console.log(cb(12,4));

var list = ["Lars", "Peter", "Jan", "Ian", "Bo", "Bob", "ib"];
console.log(list);
const result = list.filter(word => word.length <= 3);
console.log(result);



toUpper = function(x){ 
  return x.toUpperCase();
};
var uppercase = result.map(toUpper);
console.log(uppercase);






var cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

newCars = cars.filter(function(car){
    if(car.year >= 1999){
        return car;
        }
    })

volvoCars = cars.filter(function(car){
    if(car.make == "Volvo"){
        return car;
        }
    })
    
    
cheapCars = cars.filter(function(car){
    if(car.price < 5000){
        return car;
        }
    })

console.log(newCars);
console.log(volvoCars);
console.log(cheapCars);