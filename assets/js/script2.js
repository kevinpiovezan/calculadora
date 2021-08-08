(function() {
    function converte() {
        const input = Number(document.querySelector('.input').value);
        let output = document.querySelector('.output');
        let select = document.querySelector('.input-select');
        let value = Number(select.options[select.selectedIndex].value);
        console.log(typeof input);
        if(typeof input !== "number"){
            alert('Digite um número válido');
        }
        output.value = input * value + 'ml/g';
    }
    addEventListener('click', e => {
        const el = e.target;
        if(el.classList.contains("btn-eq")) converte();
    });
    addEventListener('keypress', e => {
        if(e.keyCode === 13) converte();
    })
    

})();