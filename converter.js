const val = document.getElementById('u-number');
const cal = document.getElementById('t-number');

// function getCal(event){

//  let myVal = event.target.event; 
//  function unixTime(){


//     console.log(event.target.value);
//  }

// }

// function getVal(type) {

// let milliSeconds = 157590015 * 1000;
// let dateObject = new Date(milliSeconds);

// let humanDateFormat = dateObject.toLocaleString()


// console.log(humanDateFormat);

// dateObject.toLocaleString("en-IN", { weekday: "long", month: "long", day: "numeric", year: "numeric", hour: "numeric", minute: "numeric", second: "numeric", timeZoneName: "short" })

//     switch (type) {
//         case 'fname':
//             console.log(dateObject);

//             cal.value = dateObject;

//             break;


//         case 'cname':
//             console.log(humanDateFormat);
//             val.value = milliSeconds;
//             break;

//         default: break;
//     }

// }




function myVal() {
    var utcSecond = val.value;
    var d = new Date(0);
    d.setUTCSeconds(utcSecond); 
    cal.value = d;
}

function myCal() {
    data = cal.value;
    d = new Date(data)
    val.value = d.getTime();
}