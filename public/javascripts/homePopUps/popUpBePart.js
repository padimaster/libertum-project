var btnAbrirPopUp= document.getElementById('bePart'),
    overlay= document.getElementById('overlayBePart'),
    popUp= document.getElementById('popUpBePart'),
    btnCerrarPopUp= document.getElementById('getInTouch');
    
btnAbrirPopUp.addEventListener('click',function(){
    overlay.classList.add('active')
    popUp.classList.add('active')
})

btnCerrarPopUp.addEventListener('click',function(){
    overlay.classList.remove('active')
    popUp.classList.remove('active')
})


