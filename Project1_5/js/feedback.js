let userName = document.querySelector("#txtUserName");
let email = document.querySelector("#txtEmail");
let area = document.querySelector("#txtArea");


let form = document.querySelector("form");
let submit = document.querySelector("#calcBtn");


function validateInp() {
    // check username is  empty
    if(userName.value.trim() === "") {
      onError(userName, "Username cannot be empty");
    }else {
      onSuccess(userName);
    }

    if(email.value.trim() === "") {
        onError(email, "Email cannot be empty");
    }else {
        onSuccess(email);
    }

    if(area.selectedIndex === 0 ) {
        onError(area, "Area cannot be empty");
    }else {
        onSuccess(area);
    }
    
    try {
        var form_data = new FormData(document.querySelector("form"));
        if(!form_data.has("gender[]")){
            // console.log('text')
            document.getElementById("rd_option_error").style.visibility = "visible";
            document.getElementById("rd_option_error").innerHTML = 'Choose a gender';
        }else{
            // console.log('text 2222')
            document.getElementById("rd_option_error").style.visibility = "hidden";
            document.getElementById("rd_option_error").innerHTML = '';
        }
    
        var form_data = new FormData(document.querySelector("form"));
        if(!form_data.has("langs[]")){
            // console.log('text')
            document.getElementById("chk_option_error").style.visibility = "visible";
            document.getElementById("chk_option_error").innerHTML = 'Check one of the language';
        }else{
            // console.log('text 2222')
            document.getElementById("chk_option_error").style.visibility = "hidden";
            document.getElementById("chk_option_error").innerHTML = '';
        }
        // return false;

    } catch (error) {
        console.log(error)
    }
}

submit.addEventListener("click", (e) => {
    e.preventDefault();
    validateInp();
    var msg = document.getElementById("chk_option_error").innerHTML == "hidden";
    if(msg){
        alert("Feedback Added Successfully");
    }

});

function onSuccess(input) {
    let parent = input.parentElement;
    let messageEle = parent.querySelector("small");
    messageEle.style.visibility = "hidden";
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