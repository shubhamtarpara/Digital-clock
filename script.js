const clockEl = document.getElementById('time');
const buttons = document.querySelectorAll('.hour button');

let element1 = document.getElementById('month-first');
let element2 = document.getElementById('day-first');

let element3 = document.getElementById('full-hour');
let element4 = document.getElementById('half-hour');
let currentZone;
let hourText;
let hourFlag;
let interval1;

const countryName = document.getElementById('country-container');
let currentCountry = document.getElementById('current-country').innerHTML;
let changeCountry = document.getElementById('country');



let myCountry = [ 

    {
        countryName: "NewZealand",
        timeDiff: "-06:30",
        timeZone: "Pacific/Auckland"
        
    },
    { 
        countryName: "China",
        timeDiff: "-02:30",
        timeZone: "Asia/Shanghai"
    },
    
    { 
        countryName: "GMT",
        timeDiff: "+05:30",
        timeZone: "GMT"
    },
    { 
        countryName: "India",
        timeDiff: "+02:30",
        timeZone: "Asia/Kolkata"
     },
     { 
        countryName: "Italy",
        timeDiff: "+03:30",
        timeZone: "CET"
    }
    
]


showCountry("India");

function showCountry(currentCountry){
    let child = "";

    myCountry
    .sort((a,b)=> {
        
        var reg = /^\(([+-]\d{1,2}):(\d{1,2})\.*$/;
        var firstSet = parseFloat(a.timeDiff.replace(reg, "$1.$2"));
        var secondSet = parseFloat(b.timeDiff.replace(reg, "$1.$2"));
        return firstSet < secondSet ? -1 : firstSet > secondSet ? 1 : 0;

    })
    .map((e) => {

        if(currentCountry == e.countryName  ){
            return false;
        }
        else{
            child += `<div class = "unique-country" id="${e.countryName}"><h1 class="country-name">${e.countryName}</h1><h4 class="country-zone">${e.timeDiff}</h4></div>`;            
        }
        // console.log(e.timeDiffrence);
    })

    changeCountry.innerHTML = child;
    appendEvents();

}


function appendEvents(){
    changeCountry.childNodes.forEach((e)=>{
        e.addEventListener("click", ()=>{
    
            currentCountry = e.childNodes[0].innerHTML
            countryName.innerHTML = `<h1>${currentCountry}</h1>`;
            var result = myCountry.filter(obj => obj.countryName == e.childNodes[0].innerHTML )
            currentZone = result[0].timeZone;
            updateTime(hourFlag,currentZone);
            
            myCountry.forEach((e) => {
                e.timeDiff = newDiff(currentCountry,e);
            });
            showCountry(currentCountry  );
        })
    });
}

updateTime(hourFlag =true, currentZone = "Asia/Kolkata");

function newDiff(start,end) {
    
    let result = myCountry.filter(obj => obj.countryName == start)[0];

    d = new Date();

    startDate =  new Intl.DateTimeFormat("hi-IN", {timeZone: result.timeZone, timeStyle:'medium'}).format(d);
    endDate =  new Intl.DateTimeFormat("hi-IN", {timeZone: end.timeZone, timeStyle:'medium'}).format(d);

    var timeStart = new Date("01/01/2007 " + `${startDate}`);
    var timeEnd = new Date("01/01/2007 " + `${endDate}`);

    var diff = (timeEnd - timeStart) / 60000;
    var minutes = diff % 60;
    var hours = (diff - minutes) / 60;

    hours = hours <= -12 ? minutes != 0 ? hours += 23 : hours +=24 : hours;
    hours = hours >= 12 ? minutes != 0 ? hours -= 23 : hours -=24 : hours;
    minutes = minutes < 0 ? -minutes : minutes;
    console.log(hours, minutes,)
    return -hours + ":" +( minutes < 9 ? "0" + minutes : minutes) ;
}





const dayDate = document.getElementById('day-date')
dayDate.textContent = new Date().toLocaleString("hi-IN", {
    dateStyle: 'full'
});


function updateTime(hourFlag, currentZone) {
    clearInterval(interval1);
    interval1 = setInterval(() => {
        hourText = new Date().toLocaleString("hi-IN", {
            timeZone: currentZone,
            timeStyle: "medium",
            hour12: hourFlag
        });
        clockEl.textContent = hourText;
    });

};
const fullHour = () => {
    element3.addEventListener('click', () => {
        element3.style.backgroundColor = 'black';
        element3.style.color = 'white';
        element3.style.borderColor = 'white';

        element4.style.backgroundColor = 'white';
        element4.style.color = 'black';
        element4.style.borderColor = 'black';

        updateTime(hourFlag = false, currentZone);
        element4.classList.toggle('active');
        element3.classList.toggle('active');
    });
};
fullHour();

const halfHour = () => {
    element4.addEventListener('click', () => {
        element4.style.backgroundColor = 'black';
        element4.style.color = 'white';
        element4.style.borderColor = 'white';

        element3.style.backgroundColor = 'white';
        element3.style.color = 'black';
        element3.style.borderColor = 'black'

        updateTime(hourFlag = true, currentZone);
        element3.classList.toggle('active');
        element4.classList.toggle('active');
    });
    element4.classList.add('active');
};
halfHour();


const monthFirst = () => {

    element1.addEventListener('click', () => {
        element1.style.backgroundColor = 'black';
        element1.style.color = 'white';
        element1.style.borderColor = 'white';

        element2.style.backgroundColor = 'white';
        element2.style.color = 'black';
        element2.style.borderColor = 'black';

        let myDate = new Date().toLocaleString("hi-IN", {
            dateStyle: "full"
        }).split(",");
        console.log(myDate);
        anotherDate = myDate[1].trim().split(" ");
        console.log(anotherDate)
        dayDate.textContent = myDate[0] + "," + " " + anotherDate[1] + " " + anotherDate[0] + "," + anotherDate[2];
        
        element1.classList.add("active");
        element2.classList.remove("active");
    })
}
monthFirst();

const dayFirst = () => {
    element2.addEventListener('click', () => {
        element2.style.backgroundColor = 'black';
        element2.style.color = 'white';
        element2.style.borderColor = 'white';

        element1.style.backgroundColor = 'white';
        element1.style.color = 'black';
        element1.style.borderColor = 'black'

        dayDate.textContent = new Date().toLocaleString("hi-IN", {
            dateStyle: 'full'
        });
        element2.classList.add("active");
        element1.classList.remove("active");
    });
    element2.classList.add("active");
}
dayFirst();