//Comp1231
//Stefan Maric - 101208175
//assignment 1
function stuInfo(nme, stdNum, nCourse, program, ptJob) {

    nme = '';
    stdNum = 0;
    nCourse = 0;
    program = '';

    if (ptJob == true){
        else console.log("My name is "+nme+", im in the "+program+" Program. I am taking "+nCourse+" this semester. I work part time.");

    } else if (ptJob==false) {
        return console.log("My name is "+nme+", im in the "+program+" Program. I am taking "+nCourse+" this semester. I do not work part time.");

    }

}
    stuInfo('stefan Maric',101208175,5, 't127',true);

function bDay_gradYear(a,graduateYear) {
    let  birthYear;

    a = 0;
    graduateYear = 0;
    birthYear = 2020 - a;


    if(a==true){
        return console.log("You were born in: "+birthYear);
    }
    if(graduateYear==true){
        return console.log("You will graduate in: "+graduateYear);
    }
}


