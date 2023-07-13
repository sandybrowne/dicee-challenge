const randomNumber1 = Math.floor((Math.random() * 6) + 1);
const randomNumber2 = Math.floor((Math.random() * 6) + 1);

console.log(randomNumber1);
console.log(randomNumber2);
// const RandomNumberAttribute 

const diceImage1 = () => {
    if (randomNumber1 == 1) {
        document.querySelector("img.img1").setAttribute("src", "./images/dice1.png");
    }
    else if (randomNumber1 == 2) {
        document.querySelector("img.img1").setAttribute("src", "./images/dice2.png");
    }
    else if (randomNumber1 == 3) {
        document.querySelector("img.img1").setAttribute("src", "./images/dice3.png");
    }
    else if (randomNumber1 == 4) {
        document.querySelector("img.img1").setAttribute("src", "./images/dice4.png");
    }
    else if (randomNumber1 === 5) {
        document.querySelector("img.img1").setAttribute("src", "./images/dice5.png");
    }
}
diceImage1();

const diceImage2 = () => {
    if (randomNumber2 == 1) {
        document.querySelector("img.img2").setAttribute("src", "./images/dice1.png");
    }
    else if (randomNumber2 == 2) {
        document.querySelector("img.img2").setAttribute("src", "./images/dice2.png");
    }
    else if (randomNumber2 == 3) {
        document.querySelector("img.img2").setAttribute("src", "./images/dice3.png");
    }
    else if (randomNumber2 == 4) {
        document.querySelector("img.img2").setAttribute("src", "./images/dice4.png");
    }
    else if (randomNumber2 === 5) {
        document.querySelector("img.img2").setAttribute("src", "./images/dice5.png");
    }
}
diceImage2();


const winner = () => {
    if (randomNumber1 > randomNumber2) {
        console.log("Dice 1 wins");
        document.querySelector("h1").innerHTML = "Dice 1 Wins";
    }
    else if (randomNumber1 < randomNumber2){
        document.querySelector("h1").innerHTML = "Dice 2 Wins";
    }
    else {
        document.querySelector("h1").innerHTML = "It's a draw !!";
    }
}
    winner();
