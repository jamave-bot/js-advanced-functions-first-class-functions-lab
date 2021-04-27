// Code your solution in this file!
const returnFirstTwoDrivers = (arr) => arr.slice(0,2);


const returnLastTwoDrivers = (arr) => arr.slice(arr.length-2)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

// function createFareMultiplier(num){
//     return (fare) => num *fare;
// }

const createFareMultiplier = (num) => (fare)=> num * fare;

const fareDoubler = (fare) => createFareMultiplier(2)(fare);

const fareTripler = (fare) => createFareMultiplier(3)(fare);

// function selectDifferentDrivers(arrayOfDrivers, fun){
//     return fun(arrayOfDrivers);
// }

const selectDifferentDrivers = (arr, fun) => fun(arr);