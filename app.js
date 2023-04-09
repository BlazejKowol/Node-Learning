const os = require('os');
const fs = require('fs');

genders = ['M', 'F'],
maleNames = ['Błażej', 'Maciej', 'Leszek', 'Wojciech', 'Seba', 'Marek', 'Paweł'],
femaleNames = ['Karolina', 'Agata', 'Julia', 'Oliwia', 'Monika'],
lastNames = ['Kowalski', 'Nowak', 'Lewandowski', 'Janowski', 'Jabłoński']

const randChoice = (arr) => {
   return arr[Math.floor(Math.random() * arr.length)];
}

people = []

const loop = () => {
    for (let i=0; i<20; i++) {
        const person = {}
        person.gender = randChoice(genders);
        if (person.gender === 'M') {
            person.name = randChoice(maleNames)
        } else {
            person.name = randChoice(femaleNames)
        }
        person.lastNames = lastNames[Math.floor(Math.random() * lastNames.length)]
        person.age = Math.floor((Math.random() * 60) + 18)
        people.push(person)
    }
    return JSON.stringify(people)
}

fs.writeFile('people.json', loop(), (err) => {
  if (err) {
    console.log('Failed, try again');
    throw err;
  }
    console.log('Check people.json, its done')
});