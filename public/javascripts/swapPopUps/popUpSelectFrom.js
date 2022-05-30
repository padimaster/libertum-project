var abrirPopUpSelectFrom = document.getElementById('buttonLBM'),
    overlaySelectFrom = document.getElementById('overlaySelectFrom'),
    popUpSelectFrom = document.getElementById('popUpSelectFrom'),
    cerrarPopUpSelectFrom = document.getElementById('selectFrom')
    cerrarConfirmButtonFrom = document.getElementById('closeConfirmFrom')

abrirPopUpSelectFrom.addEventListener('click',function(){
    overlaySelectFrom.classList.add('active')
    popUpSelectFrom.classList.add('active')
})

cerrarPopUpSelectFrom.addEventListener('click',function(){
    overlaySelectFrom.classList.remove('active')
    popUpSelectFrom.classList.remove('active')
})

cerrarConfirmButtonFrom.addEventListener('click',function(){
    overlaySelectFrom.classList.remove('active')
    popUpSelectFrom.classList.remove('active')
})

