'use strict';

/* const bookings = [];

const createBooking = function (flightNum, numOfPassengers = 2, price) {
  const booking = {
    flightNum,
    numOfPassengers,
    price,
  };
  console.log('Booking details: ', booking);
  bookings.push(booking);
};

createBooking('ANZ233', 20, 100);
createBooking('ANZ233', undefined, 300);
 */

/* const flight = 'ANZ233';
const desmond = {
  firstName: 'Desmond',
  passportNum: 'CN58911',
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'SAA320';
  passenger.firstName = 'Mr ' + passenger.firstName;
  if (passenger.passportNum === 'CN58911') {
    alert('Check In🚀');
  } else {
    stop('Wrong Passport');
  }
};
checkIn(flight, desmond);
console.log('Flight: ', flight);
console.log('Passenger: ', flight); */

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperfirstWord = function (str) {
  const [first, ...restOfWords] = str.split(' ');
  return [first.toUpperCase(), ...restOfWords].join(' ');
};

const transformer = function (str, fn) {
  console.log('Transformed string ', fn(str));
  console.log('Function name ', fn.name);
};

transformer('Desmond is the new developer', upperfirstWord);
transformer('Desmond is the new developer', oneWord);

const high5 = function () {
  console.log('Giving you a 🖐🏽');
};

document.body.addEventListener('click', high5);

['Desmond', 'Noks', 'Sbongs', 'SimbonG'].forEach(high5);

/* const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} Mr ${name}`);
  };
};

const letsgreet = greet('Hello ');
letsgreet('Desmond '); */

/* const greet = greeting => {
  return name => {
    console.log(`${greeting} Mr ${name}`);
  };
};

const letsgreet = greet('Hello ');
letsgreet('Mary '); */

const qantas = {
  airline: 'Qantas',
  iataCode: 'QT',
  booking: [],
  book(flightNum, name) {
    console.log(
      `Name: ${name} booked a seat on ${this.airline}, Flight number is ${flightNum} IATA code ${this.iataCode}`
    );
    this.booking.push({ flight: `${this.iataCode} ${flightNum}`, name });
  },
};

qantas.book(4000, 'Desmond Mpofu');
qantas.book(4010, 'Nokwanda Mthembu');

const turkish = {
  name: 'Turkish',
  iataCode: 'TK',
  booking: [],
};
const book = qantas.book;
book.call(turkish, 4020, 'Simbonge Mpofu');
