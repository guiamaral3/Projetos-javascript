function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // manhã
        img.src = 'img/manha.png'
        document.body.style.background = '#0044ff'
    } else if (hora >= 12 && hora <= 18) {
        // tarde
        img.src = 'img/tarde.png'
        document.body.style.background = '#0044ffad'
    } else {
        // noite 
        img.src = 'img/noite.png'
        document.body.style.background = '#001b6588'
    }
}