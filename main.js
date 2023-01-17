// Colocar mous no botão
function colocar_mouse(){
    let btn1 = document.getElementsByName('btn')[0]
    btn1.style.width = '210px'

    let btn2 = document.getElementsByName('btn')[1]
    btn2.style.width = '210px'

    let btn3 = document.getElementsByName('btn')[2]
    btn3.style.width = '210px'

}

// Tirar mouse do botão
function tirar_mouse(){
    let btn1 = document.getElementsByName('btn')[0]
    btn1.style.width = '200px'
    btn1.style.transition = '0.6s'

    let btn2 = document.getElementsByName('btn')[1]
    btn2.style.width = '200px'
    btn2.style.transition = '0.6s'

    let btn3 = document.getElementsByName('btn')[2]
    btn3.style.width = '200px'
    btn3.style.transition = '0.6s'
}

//Whatsapp 1
function wpp1(){
    location.href = 'https://wa.me/5564999022411'
}

// Whatsapp 2
function wpp2(){
    location.href = 'https://wa.me/5564992943097'
}

// Ligar número
function ligar(){
    location.href = 'tel:+5564999022411'
}