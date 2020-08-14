// Calculator using HTML, CSS & JQuery

let resultField = $("#result");

function insertNumber(number){
    let existingNumber = resultField.val()
    resultField.val(existingNumber + number)
}

function equal(){
    let result = eval(resultField.val())
    resultField.val(result)
}

function clearResult(){
    resultField.val('')
}

function deleteNumber(){
    resultField.val(resultField.val().slice(0, -1))
}