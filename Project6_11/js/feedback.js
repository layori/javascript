// alert("connect");

function validate() {
    var fname = document.forms["myForm"]["fname"].value;
    var email = document.forms["myForm"]["email"].value;
    var dob = document.forms["myForm"]["dob"].value;
    var phone = document.forms["myForm"]["phone"].value;
    var gender = document.forms["myForm"]["gender"].value;
    var state = document.forms["myForm"]["state"].value;
    var hobby = document.forms["myForm"]["hobby"].value;
    var address = document.forms["myForm"]["address"].value;
    var zip = document.forms["myForm"]["zip"].value;


    if(fname == "" || !isNaN(fname)) {
        alert("enter the name and it should be character");
        return false;
    }
    // alert(fname);
    if(dob == "" || !isNaN(dob)) {
        alert("Choose the date");
        return false;
    }

    var at = email.indexOf("@");
    var dot = email.lastIndexOf(".");

    if(at < 1 || dot < at+2 || dot+2 >= email.length) {
        alert("Not a valid email");
        return false;
    }

    if(phone == "" || isNaN(phone)) {
        alert("enter the phone and it should be digit");
        return false;
    }    

    if(phone.length != 11) {
        alert("must be 10 digits number");
        return false;
    }

    if(zip == "" || !isNaN(zip)) {
        alert("enter the zip and must be alphanumeric");
        return false;
    } else {
        alert("enter theValidation is ok");
        alert(isValid(zip))
        // console.log(isValid("M43PN"));
    } 

    if(gender == "") {
        alert("Select a gender");
        return false;
    }

    if(state == "Select a state") {
        alert("Select a state");
        return false;
    }

    if(address == "") {
        alert("Address must not be empty");
        return false;
    }

    if(!hobby.checked) {
        alert("Select a hobby");
        return false;
    }
}

function isValid(postcode){
    const pRegex = /^[A-Z]{1,2}[0-9]{1,2}[A-Z]{0,1} ?[0-9][A-Z]{2}$/i;
  return pRegex.test(postcode);
}