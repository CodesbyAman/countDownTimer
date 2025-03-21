const endDate = "20 March 2025 10:23:00 PM"
// dynamically date is assign
document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")
    // const clock = () => {

// }

function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000;
   // prevent from negative timeing
    if (diff < 0) return;

    // convert into days;
    // it represent 1st input for day
    inputs[0].value = Math.floor(diff / 3600 / 24);
    // it represent 2nd input for hour
    inputs[1].value = Math.floor(diff / 3600) % 24;
    // it represent 3rd input for min
    inputs[2].value = Math.floor(diff / 60) % 60;
    // it represent 4th input for sec
    inputs[3].value = Math.floor(diff) % 60;
}

// initial call
clock()

/**
 *  1 day = 24 hrs
 *  1 hr = 60 mins
 *  60 min = 3600 sec
 */
// clock() function call every 1 second
setInterval(clock, 1000);

      /* OR */

// setInterval(
//     () => {
//         clock()
//     },
//     1000
// )

