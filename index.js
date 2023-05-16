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

function subirImg() {
    document.getElementById("inputImgUp").click()
}
