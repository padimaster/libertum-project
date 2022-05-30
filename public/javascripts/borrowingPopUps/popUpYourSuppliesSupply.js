var abrirPopUpYourSuppliesSupply = document.getElementById('openPopUpSupply')
    overlayYourSuppliesSupply = document.getElementById('overlayYourSuppliesSupply'),
    popUpYourSuppliesSupply = document.getElementById('popUpYourSuppliesSupply'),
    cerrarPopUpYourSuppliesSupply = document.getElementById('closeYourSuppliesSupply')
    confirmButtonYourSuppliesSupply = document.getElementById('confirmSupply')  

        //alert var
        abrirOverlayAlertaSupply = document.getElementById('overlayAlertSupply'),
        abrirPopUpAlertaSupply = document.getElementById('popUpAlertSupply'),
        cerrarAlertaSupply = document.getElementById('crossAlertSupply'),
        confirmAlertSupply = document.getElementById('confirmAlertSupply')
        

    abrirPopUpYourSuppliesSupply.addEventListener('click',function(){
        overlayYourSuppliesSupply.classList.add('active')
        popUpYourSuppliesSupply.classList.add('active')
    })
    
    cerrarPopUpYourSuppliesSupply.addEventListener('click',function(){
        overlayYourSuppliesSupply.classList.remove('active')
        popUpYourSuppliesSupply.classList.remove('active')
    })

    confirmButtonYourSuppliesSupply.addEventListener('click',function(){
        overlayYourSuppliesSupply.classList.remove('active')
        popUpYourSuppliesSupply.classList.remove('active')
        // //alerts open
        // abrirOverlayAlertaSupply.classList.add('active')
        // abrirPopUpAlertaSupply.classList.add('active')
    })


    //Alert close
    cerrarAlertaSupply.addEventListener('click',function(){
        abrirOverlayAlertaSupply.classList.remove('active')
        abrirPopUpAlertaSupply.classList.remove('active')
    })

    confirmAlertSupply.addEventListener('click',function(){
        abrirOverlayAlertaSupply.classList.remove('active')
        abrirPopUpAlertaSupply.classList.remove('active')
    })
        

