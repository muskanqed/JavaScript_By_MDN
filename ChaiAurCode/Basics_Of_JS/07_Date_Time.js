const todayDate = new Date;


// Date is an object
console.log(typeof todayDate);

console.log(todayDate.toString());
console.log(todayDate.toDateString());
console.log(todayDate.toLocaleDateString());

const todaydateformat = new Date(2024, 0, 12);
console.log(todaydateformat.toDateString());

const myTimestamp = Date.now();

console.log(myTimestamp);
console.log(todaydateformat.getTime()); // Compare the time implemented in airBnb and quiz, poles

console.log(Math.floor(Date.now() / 1000)); // time in miliseconds

// `` is called string interpolation

const newDate = new Date;
console.log(newDate.getMonth() + 1);


newDate.toLocaleString('default', {
    weekday: "long"
})

const TimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

console.log(TimeZone);
