function validar2() {
    if(!document.form.nome.value){
        alert("O campo NOME precisa ser preenchido.");
        document.form.nome.focus();
        return;
    }

    if(!document.form.email.value){
        alert("O campo E-MAIL precisa ser preenchido.");
        document.form.nome.focus();
        return;
    }

    if(!document.form.assunto.value){
        alert("O campo ASSUNTO precisa ser preenchido.");
        document.form.nome.focus();
        return;
    }

    document.form.action = "enviado.html";
    document.form.submit();
}

function validar3() {
    let msgP = "O campo esta vazio";

    if(!document.getElementById("nome").value) {
        document.getElementById("nome").focus();
        mensagem(msgP);
    }
}

function mensagem(msg) {
    let campoMsg = document.getElementById("msgErro");
    campoMsg.innerHTML = msg;
    campoMsg.style.display="block";
    campoMsg.style.background="rgba(255,0,0,0.28)";
    campoMsg.style.height="90px";
}