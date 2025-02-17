//Closures

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`Passenger count: ${passengerCount}`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();
console.dir(booker);

//More closure examples
//Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir();

//Reassigning f function
h();
f();

console.dir(f);

//Example 2

const boardPassengers = function(n, wait) {
  const perGroup = n / 3;
  setTimeout(function(){
    console.log(`We are now boarding ${n} passengers`);
    console.log(`There are 3 groups, weach with ${perGroup} passengers`);
  }, wait * 1000)

  console.log(`Will start boarding in ${wait}`);
};

const perGroup = 1000;
boardPassengers(180, 3);
