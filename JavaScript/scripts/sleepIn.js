// day = int(input ("Day (0-6)? "))
// if day in range(1,6):
//     print("Go to work")
// elif day == 0 or day == 6:
//     print("Sleep in yay")
// else:
//     print("Day not within range")    

let day = prompt(`What day is it (0-6)?`);
day = parseInt(day);
const week = [1, 2, 3, 4, 5];
for (i in week) {
    if (day === week[i]) {
        console.log("Sorry. Time to make the doughnuts.");
    } else if (day === 0 || day === 6) {
    console.log("Sleep the sleep of the just.");
    } else {
    console.log("Day not in range. Are you possibly on a planet besides Earth?");
    };  }