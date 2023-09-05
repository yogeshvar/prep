const keys = document.querySelector('.numpad');
const input_text = document.getElementById('input_text')
keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = input_text.textContent
        let isDecimal = false;
        if (!action) {
            input_text.textContent = displayedNum + keyContent
        }

        if (action == 'clear' || action == 'del') {
            input_text.textContent = '';
        }

        if (action == 'add' || action == 'sub' || action == 'multiply' || action == 'div') {
            if (action == 'multiply') {
                input_text.textContent = displayedNum + '*'
            } else {
                input_text.textContent = displayedNum + keyContent
            }
        }

        if (action == 'decimal') {
            isDecimal = true
            input_text.textContent = displayedNum + keyContent
        }

        if (action == 'calc') {
            if (isDecimal) {
                input_text.textContent = eval(displayedNum).toFixed(2)
                isDecimal = false;
            } else {
                input_text.textContent = eval(displayedNum)
            }

        }
    }
})