onst loopDiv = document.getElementById("loop-output");
const arrayDiv = document.getElementById("array-output");

// Loop 1: What's your favorite_number?
function favoriteNumber() {
    for (let i = 1; i <= 30; i++) {
        if (i % 3 === 0) {
            loopDiv.innerHTML += `${i}. <br>`;
        }
    }
}

// Loop 2: Do you have a second_favorite_number?
function secondFavoriteNumber() {
    const number = Array.from({ length: 30 }, (_, i) => i + 1); // Creates an range of 1 to 30. The scope is local
    number.forEach(sfn => {
        if (sfn % 3 === 0) {
            loopDiv.innerHTML += `${sfn}. <br>`;
        }
    });
}

// Loop 3: is that a jojo_function?
function jojoReference() {
    const name = ["Bob", "Tyrell Wright", "Joseph Joestar"];
    while (true) {
        if (name.some(jf => jf.length > 5)) {
            name.forEach(jf => {
                if (jf.length > 5) {
                    loopDiv.innerHTML += `Hello, My name is ${jf}. <br>`;
                }
            });
            break;
        }
    }
}

// Loop 4: A inhuman reference, could call it a Ghoul, that takes place in Tokyo.
function diffReference() {
    const name_re = ["Ken", "Rize", "Yoshimura"];
    do {
        name_re.forEach(df => {
            if (df.length > 5) {
                loopDiv.innerHTML += `Hello, My name is ${df}. <br>`;
            }
        });  
        break;
    } while (true);
}

// Arrays: This just outputs fruit of the day, I don't have anything smart to say.
function fruitOfTheDay() {
    const fruits = ["Apple", "Banana", "Cherry", "Peach (my favorite)", "Plum", "Watermelon"];
    const randomFruit = Math.floor(Math.random() * fruits.length);
    arrayDiv.innerHTML += `Fruit of the day: ${fruits[randomFruit]}! <br>`;
}

/**
* Extra: Even numbers, a fun-ction! 
* I'm trying my best to make this funny but I think we can split it *even* and say that was stupid.
*/
function extraFUNction() {
    const evenNum = []; //The scope is Local.
    for (let n = 2; n <= 10; n += 2) {
        evenNum.push(n);
    }
    arrayDiv.innerHTML += `Even numbers: ${evenNum.join(", ")}<br>`;
}

// Calling all functions
favoriteNumber();
secondFavoriteNumber();
jojoReference();
diffReference();
fruitOfTheDay();
extraFUNction();
