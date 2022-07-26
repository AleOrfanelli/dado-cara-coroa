function lancar() {
    location.reload()
}

var sorteio = Math.floor(Math.random() * 20 + 1);
var face = document.getElementById('face')
var result = document.getElementById('result')

switch (sorteio) {
    case 1:
        face.setAttribute('class', 'animate__animated animate__flipInX')
        face.src = "img/face1.png";
        result.innerHTML = '1'
        break;
    case 2:

        face.setAttribute('class', 'animate__animated animate__flipInX')
        face.src = "img/face2.png";
        result.innerHTML = '2'
        break;
    case 3:

        face.setAttribute('class', 'animate__animated animate__flipInX')
        face.src = "img/face3.png";
        result.innerHTML = '3'
        break;

    case 4:

        face.setAttribute('class', 'animate__animated animate__flipInX')
        face.src = "img/face4.png";
        result.innerHTML = '4'
        break;
    case 5:

        face.setAttribute('class', 'animate__animated animate__flipInX')
        face.src = "img/face5.png";
        result.innerHTML = '5'
        break;
    case 6:
        face.setAttribute('class', 'animate__animated animate__flipInX')
        face.src = "img/face6.png";
        result.innerHTML = '6'
        break;
    case 7:

        face.setAttribute('class', 'animate__animated animate__flipInX')
        face.src = "img/face7.png";
        result.innerHTML = '7'
        break;
    case 8:

        face.setAttribute('class', 'animate__animated animate__flipInX')
        face.src = "img/face8.png";
        result.innerHTML = '8'
        break;

    case 9:

        face.setAttribute('class', 'animate__animated animate__flipInX')
        face.src = "img/face9.png";
        result.innerHTML = '9'
        break;

    case 10:

        face.setAttribute('class', 'animate__animated animate__flipInX')
        face.src = "img/face10.png";
        result.innerHTML = '10'
        break;
    case 11:

        face.setAttribute('class', 'animate__animated animate__flipInX')
        face.src = "img/face11.png";
        result.innerHTML = '11'
        break;

    case 12:

        face.setAttribute('class', 'animate__animated animate__flipInX')
        face.src = "img/face12.png";
        result.innerHTML = '12'
        break;
    case 13:

        face.setAttribute('class', 'animate__animated animate__flipInX')
        face.src = "img/face13.png";
        result.innerHTML = '13'
        break;

    case 14:

        face.setAttribute('class', 'animate__animated animate__flipInX')
        face.src = "img/face14.png";
        result.innerHTML = '14'
        break;
    case 15:

        face.setAttribute('class', 'animate__animated animate__flipInX')
        face.src = "img/face15.png";
        result.innerHTML = '15'
        break;
    case 16:
        face.setAttribute('class', 'animate__animated animate__flipInX')
        face.src = "img/face16.png";
        result.innerHTML = '16'
        break;
    case 17:
        face.setAttribute('class', 'animate__animated animate__flipInX')
        face.src = "img/face17.png";
        result.innerHTML = '17'
        break;
    case 18:

        face.setAttribute('class', 'animate__animated animate__flipInX')
        face.src = "img/face18.png";
        result.innerHTML = '18'
        break;
    case 19:
        face.setAttribute('class', 'animate__animated animate__flipInX')
        face.src = "img/face19.png";
        result.innerHTML = '19'
        break;
    case 20:
        face.setAttribute('class', 'animate__animated animate__flipInX')
        face.src = "img/face20.png";
        result.innerHTML = '20'
        break;
    default:
        break;
}