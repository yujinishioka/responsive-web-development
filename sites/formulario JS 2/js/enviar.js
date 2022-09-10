function enviar2() {
    if(document.form.nome.value == '') {
        alert('Preencha o campo Nome.');
        document.form.nome.focus();
        return;
    }

    if(document.form.email.value == '') {
        alert('Preencha o campo E-mail.');
        document.form.nome.focus();
        return;
    }

    if(document.form.assunto.value == '') {
        alert('Preencha o campo Assunto.');
        document.form.nome.focus();
        return;
    }

    if(document.form.mensagem.value == '') {
        alert('Preencha o campo Mensagem.');
        document.form.nome.focus();
        return;
    }

    document.form.action = 'resultado.html';
    document.form.submit();
}

function enviar3() {
    var msgP = 'O campo esta vazio.'

    if(document.getElementById('nome').value == '') {
        document.getElementById('nome').focus();
        mostrarMensagem(msgP)
    }
}

function mostrarMensagem(mensagem) {
    var campoMensagem = document.getElementById('error');

    campoMensagem.innerHTML = mensagem;

    campoMensagem.style.background = 'rgba(255,0,0,0.25)';
    campoMensagem.style.padding = '20px';
    campoMensagem.style.border = '2px dashed red';
    campoMensagem.style.fontSize = '15px';
    campoMensagem.style.color = '#ffffff';
    campoMensagem.style.textAlign = 'center';
}

function mudarCor(numero) {
    var campo = getElementByTagName('label');

    if(numero == 1) {
        for(var i =0; i < campo.lenght; i++) {
            campo[i].style.background = 'green';
        }
    }

    if(numero == 2) {
        for(var i =0; i < campo.lenght; i++) {
            campo[i].style.background = 'red';
        }
    }

    if(numero == 3) {
        for(var i =0; i < campo.lenght; i++) {
            campo[i].style.background = 'blue';
        }
    }

    if(numero == 4) {
        for(var i =0; i < campo.lenght; i++) {
            campo[i].style.background = 'black';
        }
    }
}