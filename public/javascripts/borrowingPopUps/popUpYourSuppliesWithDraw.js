var abrirPopUpYourSuppliesWithDraw = document.getElementById('openPopUpWithdraw')
    overlayYourSuppliesWithDraw = document.getElementById('overlayYourSuppliesWithDraw'),
    popUpYourSuppliesWithDraw = document.getElementById('popUpYourSuppliesWithDraw'),
    cerrarPopUpYourSuppliesWithDraw=document.getElementById('closeYourSuppliesWithDraw')
    confirmButtonYourSuppliesWithDraw=document.getElementById('confirmButtonYourSuppliesWithDraw')
    
    //alert var
    abrirOverlayAlertaWithdraw = document.getElementById('overlayAlertWithdraw'),
    abrirPopUpAlertaWithdraw = document.getElementById('popUpAlertWithdraw'),
    cerrarAlertaWithdraw = document.getElementById('crossAlertWithdraw'),
    confirmAlertWithdraw = document.getElementById('confirmAlertWithdraw')



    abrirPopUpYourSuppliesWithDraw.addEventListener('click',function(){
        overlayYourSuppliesWithDraw.classList.add('active')
        popUpYourSuppliesWithDraw.classList.add('active')
    })
    
    cerrarPopUpYourSuppliesWithDraw.addEventListener('click',function(){
        overlayYourSuppliesWithDraw.classList.remove('active')
        popUpYourSuppliesWithDraw.classList.remove('active')
    })

    confirmButtonYourSuppliesWithDraw.addEventListener('click',function(){
        overlayYourSuppliesWithDraw.classList.remove('active')
        popUpYourSuppliesWithDraw.classList.remove('active') 
        
        // //alerts open
        // abrirOverlayAlertaWithdraw.classList.add('active')
        // abrirPopUpAlertaWithdraw.classList.add('active')
    })


    //Alert close
        cerrarAlertaWithdraw.addEventListener('click',function(){
        abrirOverlayAlertaWithdraw.classList.remove('active')
        abrirPopUpAlertaWithdraw.classList.remove('active')
    })

    confirmAlertWithdraw.addEventListener('click',function(){
        abrirOverlayAlertaWithdraw.classList.remove('active')
        abrirPopUpAlertaWithdraw.classList.remove('active')
    })
