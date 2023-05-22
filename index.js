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
    document.getElementById("inputSubirImg").click()
}

function previewImg(event) {
    let imgCurso = document.getElementById("imgCurso")
    imgCurso.src = URL.createObjectURL(event.target.files[0])

    let btnSubirImg = document.getElementById("btnSubirImg")

    btnSubirImg.classList.remove("btnSubirIngStyle")
    btnSubirImg.classList.add("displayNone")

    let divBtnSubirImg = document.getElementById("divBtnSubirImg")
    
    divBtnSubirImg.classList.remove("divBtnSubirImgStyle")
    divBtnSubirImg.classList.add("borderNone")
}
