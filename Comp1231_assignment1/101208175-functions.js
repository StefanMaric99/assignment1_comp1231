//Comp1231
//Stefan Maric - 101208175
//assignment 1
//function1
function stuInfo(nme, stdNum, nCourse, program, ptJob) {
    if (ptJob === true){
        console.log("My name is "+nme+", im in the "+program+" Program. I am taking "+nCourse+" this semester. I work part time.");

    } else if (ptJob===false) {
        console.log("My name is "+nme+", im in the "+program+" Program. I am taking "+nCourse+" this semester. I do not work part time.");
    }

}
//function2
function bDay_gradYear(a,graduateYear) {
    let  birthYear;

    birthYear = 2020 + a;
    graduateYear = graduateYear+2020;

    console.log("You were born in: "+birthYear + "\nYou will graduate in: "+graduateYear);
}

//function3
function tempCalc(cc,frn){
    //0 celcius to ferenheit is 32F.

    console.log((cc * (9/5)) + 32);
    console.log(frn-32);

}
//function4
function evenOrOdd(one){
    let evenCheck;
    evenCheck = (one%2);
    let trueNum,falseNum;

    if(evenCheck==true){
        for(let jj = 0;jj<=one;jj++){
            trueNum += 1;
        }
        console.log(trueNum);
    } else {
        console.log(falseNum-=1)
    }

}
//function5
function largestNum(n1,n2,n3) {
    if(n1>n2&&n1>n3){
        console.log("Largest int value is: "+n1);
    } else if (n2>n1&&n2>n3){
        console.log("Largest int value is: "+n2);
    } else {
        console.log("Largest int value is: "+n3);
    }
}
//function6
function valuesCheck(){
    let largest,smallest;
    largest = arguments[0];
    smallest = arguments[0];
    for(let i = 0;i<arguments.length;i++){
        if(arguments[i]>largest){
            largest = arguments[i];
        }
    }
    for(let k = 1;k<arguments.length;k++){
        if(arguments[k]>smallest){
            largest = arguments[k];
        }
    }
}
//function7
function mCalc(firstN,secondN){
    for(let k = 0;k<=secondN;k++){
        let result = firstN*k;
        console.log(firstN+" x "+k+" = "+result);
    }
}
//function8
function letterCase(letterCheck){
    //
    // if (character == character.toUpperCase()) {
    //     console.log(character+" is upper case");
    // }
    // else if (character == character.toLowerCase()){
    //     console.log(character+" is lower case");
    // }
    if(letterCheck>='a'&&letterCheck<='z'){
        console.log(letterCheck+" is lower case");
    } else {
        console.log(letterCheck+" is upper case");
    }

}

