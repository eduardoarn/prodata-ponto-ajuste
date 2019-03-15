// chrome.webNavigation.onCompleted.addListener(function () {
// alert("This is my favorite website!");


var s = document.createElement('script');
s.type = 'text/javascript';
var code = `
$(document).ready(function () {
    console.log('carregando - Ponto Prodata - Ajuste');
    function fechaBotaoErro() {
        let msgErro = document.getElementById('msgErro');
        if (msgErro) msgErro.remove();
        let botaoAlerta = document.getElementById('pdBtnAlertOK');
        if (botaoAlerta) {
            botaoAlerta.click();
            setTimeout(() => {

                angular.element('#itNome').val('')
                angular.element('#itSenha').val('')
                let itNome = document.getElementById('itNome');
                itNome.focus();             
            }, 600);

            let boxMsg = document.querySelector('form > div > div > pd-tela-padrao-body > div > pd-legend > div > fieldset > ng-transclude > div:nth-child(6)')
           
            var h3 = document.createElement('h3');
            h3.id = 'msgErro';
            h3.className = 'dialog-header-notify';
            h3.style = 'text-align: left; padding: 5px;';
            h3.innerHTML = '<span class="fa fa-info-circle"></span> Matrícula ou senha Inválidos';
            boxMsg.appendChild(h3);

            setTimeout(fechaBotaoErro, 2000);
        }
        else {
            setTimeout(fechaBotaoErro, 1000);
        }
    }
    setTimeout(() => {
        fechaBotaoErro();
        console.log('iniciado - Ponto Prodata - Ajuste');
    }, 100);

});
`;
try {
    s.appendChild(document.createTextNode(code));
    document.body.appendChild(s);
} catch (e) {
    s.text = code;
    document.body.appendChild(s);
}
