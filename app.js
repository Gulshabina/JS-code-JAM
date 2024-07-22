

let days = ["Sunday","Monday","monday","thuesday","wednesday","thursday","friday","saturday"]
console.log(days.reverse());


// Q2 Create a function that filters out negative numbers. In this challenge, you’ll have a function that takes an array as an input and returns an array. But if all goes according to plan, it’ll remove the negative numbers. This is another example of a task that’ll be useful when combing through data and looking for clever ways to eliminate “bad data.”

letmyarray=[1,2,3,4,5,-1,-2,-3,-4,-5]
console.log(myarray);
let myarray=myarray.slice(0,5)

console.log(myarray)

// Q3Return the number of vowels in a string. Create a function that’ll return an integer of the number of vowels found in a string. This is a great way to practice determining the features of a dataset. If you use JavaScript later in your career, you’ll be well-prepared to determine what datasets (or just strings) consist of.
function vowels()
{
    let input=prompt("Enter a vowel");
    let vowels=["a","e","i","o","u"];
    for(let i=0;i<input.length;i++)
    if(input[i]=="a"||input[i]=="e"||input[i]=="i"||input[i]=="o"||input[i]=="u");
    console.log(input)
}



// // Q5Write a JavaScript program to check whether two given integer values are in the range 50 - 99 (inclusive). Return true if either of them falls within the range
// functionint[]
// let num1=prompt ('enter the first number')
// let num2=prompt ('enter the second number')
// if (num 1>50 && num2<59)
// console.log



// Q6Write a JavaScript program to get the minimum value of an array, after mapping each element to a value using the provided function
//Question#6
let arr = [1, 2, 3, 4];
let mapped_arr = arr.map(x => x + 1);
console.log(mapped_arr);



// Q10;Write a JavaScript program to find the index of an array item in a for loop.
 let fruits =["apple","orange","mango","banana"]
 for (let i=0; i<fruits.length-i;i++)
    console.log(i);

//    Q8 Write a JavaScript program to find the types of a given angle. Acute angle: An angle between 0 and 90 degrees. Right angle: An 90 degree angle. Obtuse angle: An angle between 90 and 180 degrees. Straight angle: A 180 degree angle. 9.
function angel (){
    let angel=prompt ('enter the value of degree an angel i will tell you the type')
    if( Angel >=0  &&  Angel < 90)[
        console.log ('acute Angel')
    ]
    else if (Angel === 90)
    console.log ('obtuse Angel')

    else if (Angel ===90)
    console.log ('straight angel')

}

// Q9Write a JavaScript program to find the smallest round number not less than a given value. Note: A round number is informally considered to be an integer that ends with one or more zeros. So, 590 is rounder than 592, but 590 is less round than 600
functionround()
let value =prompt ("Enter a number which you want to round up ")
new value =Math.clice(value)


// Q7Write a JavaScript program to create an updated string of 4 copies of the last 3 characters of a given original string. The string length must be 3 and above
var name=("zakia","sara","zara","aliya","noor");
var updatedValue=name.slice(3,5)*4
console.log(updatedValue);


