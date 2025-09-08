// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(drivers, string){
    return drivers.filter (driver => driver.toLowerCase() === string.toLowerCase());
}

function fuzzyMatch(drivers, string){
    return drivers.filter (driver => driver.toLowerCase().startsWith(string.toLowerCase()));
}

function matchName(drivers, string){
    return drivers.filter (driver => driver.name.toLowerCase() === string.toLowerCase());
}