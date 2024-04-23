"use strict";
// Question: 49
function listHobbies(...hobbies) {
    hobbies.forEach(hobby => {
        console.log(`You enjoy ${hobby}.`);
    });
}
// three hobbies
listHobbies('reading', 'painting', 'hiking');
// Question: 50
let myIdealDay = `my ideol day:
I start with a refreshing morning hike
followed by a leisurely brunch with friends,
and then spend the afternoon reading a good book
in a cozy cafe.
`;
console.log(myIdealDay);
// Question: 51
// Original function
function calculateArea(width, height) {
    return width * height;
}
// Refactored into an arrow function
let calculateAreaArrow = (width, height) => width * height;
// Example usage of the arrow function
console.log(calculateAreaArrow(6, 9));
