const val = document.getElementById('fname');
const cal = document.getElementById('cname');





function getVal(type) {
    let milliSeconds = 157590015 * 1000;
    let dateObject = new Date();
    dateObject.setTime(milliSeconds);

    let humanDateFormat = dateObject.toLocaleString()


    console.log(humanDateFormat);

    dateObject.toLocaleString("en-IN", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZoneName: "short"
    })

    switch (type) {
        case 'fname':
            console.log(dateObject);

            cal.value = dateObject;

            break;


        case 'cname':
            console.log(humanDateFormat);
            val.value = milliSeconds;
            break;

        default:
            break;
    }

}