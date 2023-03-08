let raceNumber = Math.floor(Math.random() * 1000);


const registeredEarly = true;
const runnerAge = 17;
let runner = "";

if (registeredEarly === true && runnerAge > 18){
    raceNumber += 1000;
    runner = "earlyRunner";
    console.log("Your race starts at 9:30am");
    console.log("Your race number is " + raceNumber);

}else if (registeredEarly === false && runnerAge > 18){
    runner = "lateRunner";
    console.log("Your race starts at 11:00am");
    console.log("Your race number is " + raceNumber);
} else if ( runnerAge < 18) {
    runner = " youthRunner";
    console.log(" Your race starts at 12:30pm");
    console.log("Your race number is " + raceNumber);
} else {
    runner = "exactly18";
    console.log("Please see the registration desk for information on your race. Thank you.");
}



