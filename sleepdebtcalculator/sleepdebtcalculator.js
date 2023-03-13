const getSleepHours = (day) => {
    if (day === "monday") {
        return 7;
    } else if (day === "tuesday") {
        return 8;
    } else if (day === "wednesday") {
        return 9;
    } else if (day === "thursday") {
        return 6;
    } else if (day === "friday") {
        return 10;
    } else if (day === "saturday") {
        return 5;
    } else {
        day === "sunday";
        return 11;
    }
};

const getActualSleepHours = () =>
    getSleepHours("monday") +
    getSleepHours("tuesday") +
    getSleepHours("wednesday") +
    getSleepHours("thursday") +
    getSleepHours("friday") +
    getSleepHours("saturday") +
    getSleepHours("sunday");




const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
};



const calculateSleepDebt = () => {
    actualSleepHours = getActualSleepHours();
    idealSleepHours = getIdealSleepHours();
    if ( actualSleepHours === idealSleepHours){
        return 'You\'ve slept ' + actualSleepHours +' hours.'+ ' That\'s the perfect amount of sleep. Way to go!';
    } else if ( actualSleepHours > idealSleepHours){
        return 'You\'ve slept ' + actualSleepHours + ' hours.' + 'What a sleepy bunny you are. Too much sleep this way. Try better next week!';
    } else { ( actualSleepHours < idealSleepHours)
        return 'You\'ve slept ' + actualSleepHours + ' hours.' + 'This must have been a busy week. Try to sleep more next week!';
    }
}

console.log(calculateSleepDebt());
