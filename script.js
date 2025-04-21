const number = document.querySelector("#user-input");
const checkBtn = document.querySelector("#check-btn");
const clearBtn = document.querySelector("#clear-btn");
const outText = document.querySelector("#results-div");

checkBtn.addEventListener("click", checkPhoneNumber);
number.addEventListener("keydown", function(event){
    if (event.key === "Enter") {
        checkPhoneNumber();
        number.value = "";
    }
  });
clearBtn.addEventListener("click", clearOutText);

function checkPhoneNumber() {
    if(number.value === "") {
        alert("Please provide a phone number");
    } 
    else {
        
        const pat1 = /^[1]?[\s][\d][\d][\d]-[\d][\d][\d]-[\d][\d][\d][\d]$/;
        const pat2 = /^[1]?[\s][(][\d][\d][\d][)][\s][\d][\d][\d]-[\d][\d][\d][\d]$/;
        const pat3 = /^[1]?[(][\d][\d][\d][)][\d][\d][\d]-[\d][\d][\d][\d]$/;
        const pat4 = /^[1][\s][\d][\d][\d][\s][\d][\d][\d][\s][\d][\d][\d][\d]$/;
        const pat5 = /^[\d][\d][\d][\d][\d][\d][\d][\d][\d][\d]$/;
        const pat6 = /^[\d][\d][\d]-[\d][\d][\d]-[\d][\d][\d][\d]$/;

        if(outText.textContent !== "") {
            outText.textContent += "\n\n";
        }

        if(pat1.test(number.value) || pat2.test(number.value) || pat3.test(number.value) 
            || pat4.test(number.value) || pat5.test(number.value) || pat6.test(number.value)) {
                outText.textContent += "Valid US number: ";
            } 
        else {
            outText.textContent += "Invalid US number: ";
        }
        outText.textContent += number.value;
    }
}

function clearOutText() {
    outText.textContent = "";
}
