// Write a Python/JS code to find the numbers that are grater than 150 at below text, and sort these numbers.
text = "Maradona spent 5 years at Argentinos Juniors, from 1976 to 1981 , scoring 115 goals in 167 appearances."
let text = "Maradona spent 5 years at Argentinos Juniors, from 1976 to 1981 , scoring 115 goals in 167 appearances.".split(" ");
        let arrayNumber = [];
        for (let i = 0; i < text.length; i++) {
            if (isNaN(text[i])) {
                continue;
            } else if (text[i] > 150) {
                arrayNumber.push(text[i]);
            }
        }
        console.log(arrayNumber.sort((a, b) => a - b));