

setInterval(timeOut, 1000)


function timeOut() {

    let currentTimestamp = Date.now()
    console.log(currentTimestamp)
    document.querySelector(".unix-timer").innerHTML = currentTimestamp;
}





