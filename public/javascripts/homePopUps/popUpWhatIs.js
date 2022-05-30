var abrirPopUpWhatIs = document.getElementById('readMoreWhatIs'),
    overlayWhatIs = document.getElementById('overlayWhatIs'),
    popUpWhatIs = document.getElementById('popUpWhatIs'),
    cerrarPopUpWhatIs = document.getElementById('buttonBackWhatIs');

abrirPopUpWhatIs.addEventListener('click',function(){
    overlayWhatIs.classList.add('active')
    popUpWhatIs.classList.add('active')
})

cerrarPopUpWhatIs.addEventListener('click',function(){
    overlayWhatIs.classList.remove('active')
    popUpWhatIs.classList.remove('active')
})
