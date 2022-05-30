var abrirAlertaSwap = document.getElementById('alertOpenSwap'),
    abrirOverlayAlertaSwap = document.getElementById('overlayAlertSwap'),
    abrirPopUpAlertaSwap = document.getElementById('popUpAlertSwap'),
    cerrarAlertaSwap = document.getElementById('crossAlertSwap'),
    confirmAlertSwap = document.getElementById('confirmAlertSwap')

    abrirAlertaSwap.addEventListener('click',function(){
        abrirOverlayAlertaSwap.classList.add('active')
        abrirPopUpAlertaSwap.classList.add('active')
    })
    
    cerrarAlertaSwap.addEventListener('click',function(){
        abrirOverlayAlertaSwap.classList.remove('active')
        abrirPopUpAlertaSwap.classList.remove('active')
    })

    confirmAlertSwap.addEventListener('click',function(){
        abrirOverlayAlertaSwap.classList.remove('active')
        abrirPopUpAlertaSwap.classList.remove('active')
    })



