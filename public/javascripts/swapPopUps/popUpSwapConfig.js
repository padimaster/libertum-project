var abrirPopUpSwapConfig = document.getElementById('configButton'),
    overlaySwapConfig = document.getElementById('overlaySwapConfig'),
    popUpSwapConfig = document.getElementById('popUpSwapConfig'),
    cerrarPopUpSwapConfig = document.getElementById('getInTouch')
    cerrarConfirmButtonConfig = document.getElementById('closeConfirmConfig')

abrirPopUpSwapConfig.addEventListener('click',function(){
    overlaySwapConfig.classList.add('active')
    popUpSwapConfig.classList.add('active')
})

cerrarPopUpSwapConfig.addEventListener('click',function(){
    overlaySwapConfig.classList.remove('active')
    popUpSwapConfig.classList.remove('active')
})

cerrarConfirmButtonConfig.addEventListener('click',function(){
    overlaySwapConfig.classList.remove('active')
    popUpSwapConfig.classList.remove('active')
})