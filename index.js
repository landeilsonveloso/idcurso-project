function fazerLogin() {
    let email = document.getElementById("email")
    let senha = document.getElementById("senha")

    if (email.value == "") {
        email.focus()
    }

    else if (senha.value == "") {
        senha.focus()
    }

    else {
        window.location.href = "telaCurso.html"
    }
}

function salvaAula() {
    let descricaoAula = document.getElementById("descricaoAula")
    let dataAula = document.getElementById("dataAula")


    if (descricaoAula.value == "") {
        descricaoAula.focus()
    }

    else if (dataAula.value == "") {
        dataAula.focus()
    }

    else {
        msgSalvoSucesso()
        window.location.href = "telaInicialTurma.html"
    }
}

function cancela(href) {
    window.location.href = href
}

function apenasLeitura() {
    alert("Apenas Leitura")
}

function msgSalvoSucesso() {
    alert("Salvo com sucesso!")
}
