(function () {
    function criaCalculadora() {
            const display = document.querySelector('.display');

             function iniciaCalculadora() {
                clickBotoes();
                pressionaEnter();
            }
            
            function clearDisplay() {
                display.value = '';
            }
            
            function apagaUm() {
                display.value = display.value.slice(0, -1);
            }

            function pressionaEnter() {
                document.addEventListener('keypress', (e) => {
                    if (e.keyCode === 13) {
                        return realizaConta();
                    }
                });
            }
            
            function realizaConta() {
                let conta = display.value
                try {
                    conta = eval(conta);
                    if (!conta) {
                        alert('Conta inválida!')
                        return
                    }
                    display.value = String(conta);
                } catch (e) {
                    alert('Conta inválida!')
                    return
                }
            }

            function clickBotoes() {
                document.addEventListener('click', e => {
                    const el = e.target;
                    
                    if (el.classList.contains('btn-num')) {
                        btnParaDisplay(el.innerText);
                    }
                    if (el.classList.contains('btn-clear')) {
                        clearDisplay();
                    }
                    if (el.classList.contains('btn-del')) {
                        apagaUm();
                    }
                    if (el.classList.contains('btn-eq')) {
                        realizaConta();
                    }
                    
                })
            }
            function btnParaDisplay(valor) {
                display.value += valor;
            }
            iniciaCalculadora();
        }
    
    criaCalculadora();

})();