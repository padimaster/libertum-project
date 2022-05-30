var abrirPopUpSelectTo = document.getElementById('buttonSelectTo'),
    overlaySelectTo = document.getElementById('overlaySelectTo'),
    popUpSelectTo = document.getElementById('popUpSelectTo'),
    cerrarPopUpSelectTo = document.getElementById('selectTo')
    cerrarConfirmButtonTo = document.getElementById('closeConfirmTo')

abrirPopUpSelectTo.addEventListener('click',function(){
    overlaySelectTo.classList.add('active')
    popUpSelectTo.classList.add('active')
})

cerrarPopUpSelectTo.addEventListener('click',function(){
    overlaySelectTo.classList.remove('active')
    popUpSelectTo.classList.remove('active')

})

cerrarConfirmButtonTo.addEventListener('click',function(){
    overlaySelectTo.classList.remove('active')
    popUpSelectTo.classList.remove('active')

})