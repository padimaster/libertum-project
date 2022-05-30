var abrirPopUpSend = document.getElementById('sendButtonPopUp'),
    overlaySend = document.getElementById('overlaySend'),
    popUpSend = document.getElementById('popUpSend'),
    cerrarPopUpSend = document.getElementById('buttonSendPopUp');

abrirPopUpSend.addEventListener('click',function(){
    overlaySend.classList.add('active')
})

cerrarPopUpSend.addEventListener('click',function(){
    overlaySend.classList.remove('active')
})