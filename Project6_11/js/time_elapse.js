let from = document.querySelector("#txtFrom");
let ageCount = document.querySelector("#counter");
let form = document.querySelector("form");
let calcBtn = document.querySelector("#calcBtn");

try {
    validation();

    var dateDiff = (from, to) => {
        // so we don't mutate passed in dates
        let start = new Date(from);
        let end = new Date(to);
        if (+start > +end) {
            [start, end] = [end, start];
        }
        const loop = (prop) => {
            const set = `set${prop}`;
            const get = `get${prop}`;
            let ret = 0;
            while (1) {
                start[set](start[get]() + 1);
                if (start < end) {
                    ret++;
                } else {
                start[set](start[get]() -1);
                    break;
                }
            }
            return ret;
        }
        const years = loop('FullYear'); 
        const months = loop('Month'); 
        const days = loop('Date'); 
        const hours = loop('Hours'); 
        const minutes = loop('Minutes'); 
        const seconds = loop('Seconds'); 
        const milliseconds = loop('Milliseconds'); 
        return {years, months, days, hours, minutes, seconds, milliseconds}
    }

    function validation() {
        
        if(from.value.trim() === 0) {
            onError(from, "Date cannot be empty, choose date");
        }else {
            onSuccess(from);
        }
    
        function onSuccess(input) {
            let parent = input.parentElement;
            let messageEle = parent.querySelector("small");
            messageEle.style.visibility = "hidden";
            // messageEle.innerText = "";
            parent.classList.remove("error");
            parent.classList.add("success");
        }
        
        function onError(input, message) {
            let parent = input.parentElement;
            let messageEle = parent.querySelector("small");
            messageEle.style.visibility = "visible";
            messageEle.innerText = message;
            parent.classList.add("error");
            parent.classList.remove("success");
        }
    }

    function time_lap() { 
        // console.log(from.value)
        const r = dateDiff(new Date(), new Date(from.value));
        ageCount.innerHTML = `${r.years} Years, ${r.months} Months, ${r.days} Days, ${r.hours} Hours, ${r.minutes} Minutes, ${r.seconds} Seconds`;
    }

    // calcBtn.addEventListener("click", time_lap);
    calcBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if(from.value === "") {
           alert("Choose a date to procceed")
        }else {
           time_lap();
        }
    });

} catch (error) {
    console.log(error)
}

