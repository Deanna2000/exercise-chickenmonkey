

//Write a program that prints the numbers from 1 to 100.

//set up option to write to screen to this element/ID
el = document.getElementById("numbersInDom");
picel = document.getElementById("picture");

var currentNumber = "";

//Create function to take in range of numbers to write
const numbers = function(lower, upper)  {

    //Evaluate for numbers divisible by 5 and 7
    for (let i = lower; i <= upper; i++) {
        if (i%5 == 0 && i%7 ==0) {
            img = '<img height=200 width=200 style="border-radius: 100px;" src ="chicken-monkey.jpg">';
            currentNumber = img;
        }
        //Evalute for numbers divisible only by 5
        else if (i%5 == 0) {
            img = '<img height=200 width=200 style="border-radius: 100px;" src ="chicken.jpeg">';
            currentNumber = img;
        }
        //Evalute for numbers divisible only by 7
        else if (i%7 == 0) {
            img = '<img height=200 width=200 style="border-radius: 100px; margin-top: 0; padding-top: 0;" src ="monkey.jpg">';
            currentNumber = img;
        }
        //All 0ther numbers
        else {
            currentNumber = (i);
            }
            //Console Log the value (either a number or monkey, chicken, etc)
            console.log(currentNumber);
            //Write to DOM the value (+= to concatenate)
            el.innerHTML += currentNumber +  "<br>";
            //Clear the values for the next iteration
            currentNumber = "";
        }
}


numbers(1,100)
