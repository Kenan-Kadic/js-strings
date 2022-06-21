'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const airline = 'TAP air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0])

console.log(airline.length);
console.log('B737', length);

//you can get an index and last index
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));

// you can search for stuff

console.log(airline.indexOf('portugal'));

// you can slice stuff
console.log(airline.slice(4));
//slice does not change the original string

console.log(airline.slice(4,7));
// gives u air...stops extracting  before it reaches index number 7

// slice with indexes
console.log(airline.slice(0, airline.indexOf(' ')))

console.log(airline.slice(airline.lastIndexOf(' ') + 1));

//remove items -- pull out last 2 letters
console.log(airline.slice(-2));

console.log(airline.slice(1, -1));

// CHECK MIDDLE SEAT
const checkMiddleSeat = function(seat){
  const s = seat.slice(-1);
  if(s === 'B' || s === 'E') {
    console.log('You got the middle seat 😂')
  } else {
    console.log('you got lucky 😎')
  }
}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('CE');










































