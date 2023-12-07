const calcBtn = document.getElementById("calcBtn");

//  Area of Circle
function areaOfCircle() { 
    var area = document.getElementById('area').value;
    var sum, pie=3.14;
    r = document.getElementById('length').value;
    
    // validate the input
    if (r == "" || r <= 0 ) {
        alert("please enter radius or length");
    }else {
        // Switch case statement 
        switch (area) { 
            case "circle":
                sum = pie * r * r;
                document.getElementById('result').innerHTML = `The Area of Circle with radius ${r} is  ${sum.toFixed(2)}`;
                break; 
            case "sphere": 
                sum = 4 * pie * r * r;
                document.getElementById('result').innerHTML = `The Area of Sphere with radius ${r} is  ${sum.toFixed(2)}`;
                break; 
            case "cube": 
                sum = 6 * r * r;
                document.getElementById('result').innerHTML = `The length of Cube with radius  ${r} is ${sum.toFixed(2)}`;
                break; 
            default: 
                "Invalid operation"; 
        } 
    }
} 

calcBtn.addEventListener("click", areaOfCircle);
// calcBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     areaOfCircle();
// });