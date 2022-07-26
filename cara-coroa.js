function lancar() {
    location.reload()
}

var sorteio = Math.floor(Math.random() * 2 + 1);
var face = document.getElementById('face')
var result = document.getElementById('result')

switch (sorteio) {
    case 1:
        face.setAttribute('class', 'animate__animated animate__flip')
        face.src = "img/cara.png";
        result.innerHTML = 'Cara'
        break;
    case 2:

        face.setAttribute('class', 'animate__animated animate__flip')
        face.src = "img/coroa.png";
        result.innerHTML = 'Coroa'
        break;

    default:
        break;
}