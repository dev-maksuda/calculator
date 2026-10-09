const display = document.querySelector('.screen');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'AC') {
            display.value = '0';
        } 
        else if (value === 'DEL') {
            if (display.value.length > 1 && display.value !== 'Error') {
                display.value = display.value.slice(0, -1);
            } else {
                display.value = '0';
            }
        } 
        else if (value === '=') {
            if (display.value !== '' && display.value !== 'Error') {
                let result = eval(display.value);
                if (result === undefined || isNaN(result)) {
                    display.value = 'Error';
                } else {
                    display.value = result;
                }
            }
        } 
        else {
            if (display.value === '0') {
                if (value === '.') {
                    display.value = '0.';
                } else if (value !== '00') {
                    display.value = value;
                }
            } else {
                display.value = display.value + value;
            }
        }
    });
});
