var inputName = document.querySelector("#input-name")
var btnContinue = document.querySelector("#btn-continue")
var userName = document.querySelector("#username")
var inputDate = document.querySelector("#input-date")
var sections = document.querySelectorAll(".section")
var btnCheck = document.querySelector("#btn-check")
var output = document.querySelector("#output-div")

var Hi = "Hi ";
var leapYearMessage ="Your Birth year is a Leap Year!😁😁😁";
var notLeapYearMessage ="Your Birth year is not a Leap Year!☹️☹️☹️";
const monthDays =[31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYear(y){
    if ((0 == y % 4) && (0 != y % 100) || (0 == y % 400)) {
        return true
    } else {
        return false
    }
};

function continueBtnHandler() {
    if (inputName.value) {
        var userInput = inputName.value;
        userName.innerText = Hi + userInput + "!";
        sections[0].style.display = "none";
        sections[1].style.display = "block";
    } else {
        alert("Please enter name to continue")
    }
};

function checkBtnHandler() {
    var date = inputDate.value;

    if (date) {
        var dateArray = date.split(/[/,-]/)
        const day = dateArray[0]
        const month = dateArray[1]
        const year = dateArray[2]

        if(isNaN(day) || isNaN(month) || isNaN(year)){
            output.innerText = error;
        }
        else if(!Number.isInteger(Number(day)) ||!Number.isInteger(Number(month)) || !Number.isInteger(Number(year)) ){
            output.innerText = error;
        }
        else if(31<day || 12<month || 2020<year || month<=0 || day<=0 || year<=0){
            output.innerText = error;
        }
        else if(day>monthDays[month-1]){
            output.innerText = error;
        }else{

            if(day==29 && month==2){
                if(isLeapYear(year))
                output.innerText = leapYearMessage;

                else
                output.innerText = notLeapYearMessage;
                              
            }
            else{
                if(isLeapYear(year))
                output.innerText = leapYearMessage;

                else
                output.innerText = notLeapYearMessage;
                
            }
        }
    }
};

btnContinue.addEventListener("click", continueBtnHandler)
btnCheck.addEventListener("click", checkBtnHandler)

