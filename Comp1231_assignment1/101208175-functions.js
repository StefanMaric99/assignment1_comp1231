//Comp1231
//Stefan Maric - 101208175
//assignment 1
//function1
function stuInfo(nme, stdNum, nCourse, program, ptJob) {
    if (ptJob === true){
        console.log("My name is "+nme+", im in the "+program+" Program. I am taking "+nCourse+" this semester. I work part time.");
        return "My name is "+nme+", im in the "+program+" Program. I am taking "+nCourse+" this semester. I work part time.";

    } else if (ptJob===false) {
        console.log("My name is "+nme+", im in the "+program+" Program. I am taking "+nCourse+" this semester. I do not work part time.");
    }

}

//function2
function bDay_gradYear(a,graduateYear) {
    let  birthYear;


    birthYear = 2020 - a;
    graduateYear = graduateYear+birthYear;

    console.log("You were born in: "+birthYear + "\nYou will graduate in: "+graduateYear);
}
bDay_gradYear(0,7);
//function3
function tempCalc(cc,frn){
    //0 celcius to ferenheit is 32F.


    console.log((cc * (9/5)) + 32);
    console.log(frn-32);

}

function evenOrOdd(one){

        for(let i =0;i<one;i++){
            if(one=one/2){

            } else if(){

            }
        }
}