//a function printing out the result of the sum of an array
function printSum() {
    let newArray =[5, 4, 9, 2]
    let sum = 0
    for(let i = 0; i < newArray.length; i++){
        sum = sum + newArray[i]
    }

    console.log(sum)
}

printSum()

//Alice and Bob
let alice = [48, 90, 62]
let bob = [72, 90, 36]
function points(){
    let totalPoints = []
    let alicePoints = 0;
    let bobPoints = 0;
    if (alice[0] > bob[0]){
        alicePoints++
    }else if (alice[0] < bob[0]){
        bobPoints++
    }
    if (alice[1] > bob[1]){
        alicePoints++
    }else if (alice[1] < bob[1]){
        bobPoints++
    }
    if (alice[2] > bob[2]){
        alicePoints++
    }else if (alice[2] < bob[2]){
        bobPoints++
    }
    totalPoints.push(alicePoints)
    totalPoints.push(bobPoints)
    console.log(totalPoints)
}
points()

//decimal points
let integers = [9, -12, 0]
function intFunction(){
    let positiveNum = 0;
    let negativeNum = 0;
    let zeroNum = 0;
    for (let i = 0; i < integers.length; i++){
        if (integers[i] > 0){
            positiveNum++
        }
        if (integers[i] < 0){
            negativeNum++
        }
        if (integers[i] === 0){
            zeroNum++
        }
    }
    console.log(parseFloat(positiveNum/integers.length))
    console.log(parseFloat(negativeNum/integers.length))
    console.log(parseFloat(zeroNum/integers.length))
}
intFunction()

//sum of integers
function firstFunction(){
    let array = [8, 12, 25]
    let arraySum = 0;
    for (let i = 0; i < array.length; i++){
        arraySum = arraySum + array[i]
    }
    console.log(arraySum)
}
firstFunction()