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

function previewImg(event) {
    let img = document.getElementById("imgCurso")
    img.src = URL.createObjectURL(event.target.files[0])

    let btnUploadImg = document.getElementById("btnUploadImg")

    btnUploadImg.classList.remove("btnStyle")
    btnUploadImg.classList.add("displayNone")

    let divImgCurso = document.getElementById("divImgCurso")
    
    divImgCurso.classList.remove("imgCursoStyle")
    divImgCurso.classList.add("borderNone")
}
