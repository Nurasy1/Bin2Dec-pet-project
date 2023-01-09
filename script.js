const input = document.getElementById('input'),
    output = document.getElementById('output'),
    limitField = document.getElementById('limit'),
    errorField = document.querySelector('.error')


let LIMIT = 8;
window.onload = function (){
    limitField.value=LIMIT
}



//Метод валидации последовательности
function validate(text = '') {
//Проверка на буквы
    if (/[a-za-я]/gi.test(text)) {
        errorField.textContent = 'Ваша последовательность содержит букву'
        return false
    }
    //Проверка на лимит
    if (text.length > LIMIT) {
        errorField.textContent = `лимит равен ${LIMIT}`
        return false
    }
    //Проверка на 1 и 0
    if (/[2-9]/g.test(text)) {
        errorField.textContent = 'Последовательность должна включать либо 0 , либо 1 '
        return
    }
    return true
}

function convert(sequence = '') {
    const splitted = [...sequence],
        sequenceLength = splitted.length
    let result = 0
    console.log(sequence)

    for (let i = sequenceLength - 1; i >= 0; i--) {
        const digit = Number(splitted[sequenceLength - i - 1])
        result += digit * Math.pow(2, i)

    }

    return result

}

input.addEventListener('input', ({target: {value}}) => {
    if (validate(value)) {
        errorField.textContent = ''
        output.value = convert(value)
    }
})

limitField.addEventListener('change', ({target:{value}}) =>{
LIMIT = Number(value)
})