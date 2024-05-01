let checkedString = [];
let otherString = [];

const checkButton = document.getElementById("check-btn")
const textInput = document.getElementById("text-input")
const  result = document.getElementById("result")


function checkIt() {
    let checkedPhrase = textInput.value.replaceAll(" ", "")
    for (let i = 0; i < checkedPhrase.length; i++) {
      checkedString.push(checkedPhrase.charAt(i).toLowerCase())
         }

}

function reverseString() {
    for (let i = checkedString.length - 1; i >= 0; i--) {
        otherString.push(checkedString[i])
    }
}

checkButton.addEventListener("click", function() {
    
    checkIt()
    reverseString()

    for (let i = 0; i < checkedString.length; i++) {
        if (checkedString[i] === otherString[i]) {
            result.innerText = "YES! " + textInput.value + " IS :D"
        } else {
            result.innerText = "No " + textInput.value + " is not :("
            break
        }
    }

    console.log(checkedString)
    console.log(otherString)
    checkedString = []
    otherString = []
})

