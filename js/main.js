//opdracht 1

const pen = {
    ink : 1,
    spring : 'an elastic object that stores mechanical energy',
    ballpoint : 'pen',
    inkChamber : 'tube with ink in it',
    barrel : 'https://www.montblanc.com/variants/images/34480784411808558/A/w2500.jpg',
};

//opdracht 2
array = [pen.ink, pen.spring, pen.ballpoint, pen.inkChamber, pen.barrel]


console.log(array)

//opdracht 3 
function stringifyElements() {
    for(let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}



const objectOne = JSON.stringify(pen.ink);
const objectTwo = JSON.stringify(pen.spring);
const objectThree = JSON.stringify(pen.ballpoint);
const objectFour = JSON.stringify(pen.inkChamber);
const objectFive = JSON.stringify(pen.barrel);

console.log(objectOne)
console.log(objectTwo)
console.log(objectThree)
console.log(objectFour)
console.log(objectFive)