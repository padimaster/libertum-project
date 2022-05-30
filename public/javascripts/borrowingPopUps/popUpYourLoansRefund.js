var abrirPopUpYourLoansRefund = document.getElementById('openPopUpYourLoansRefund')
    overlayYourLoansRefund=document.getElementById('overlayYourLoansRefund'),
    popUpYourLoansRefund=document.getElementById('popUpYourLoansRefund'),
    cerrarPopUpYourLoansRefund=document.getElementById('closeYourLoansRefund') 
    confirmButtonYourLoansRefund=document.getElementById('confirmRefund')   

        //alert var
        abrirOverlayAlertaRefund = document.getElementById('overlayAlertRefund'),
        abrirPopUpAlertaRefund = document.getElementById('popUpAlertRefund'),
        cerrarAlertaRefund= document.getElementById('crossAlertRefund'),
        confirmAlertRefund = document.getElementById('confirmAlertRefund')

    abrirPopUpYourLoansRefund.addEventListener('click',function(){
        overlayYourLoansRefund.classList.add('active')
        popUpYourLoansRefund.classList.add('active')
    })
    
    cerrarPopUpYourLoansRefund.addEventListener('click',function(){
        overlayYourLoansRefund.classList.remove('active')
        popUpYourLoansRefund.classList.remove('active')
    })
    
    confirmButtonYourLoansRefund.addEventListener('click',function(){
        overlayYourLoansRefund.classList.remove('active')
        popUpYourLoansRefund.classList.remove('active')

        // //alerts open
        // abrirOverlayAlertaRefund.classList.add('active')
        // abrirPopUpAlertaRefund.classList.add('active')        
    })

    //Alert close
    cerrarAlertaRefund.addEventListener('click',function(){
        abrirOverlayAlertaRefund.classList.remove('active')
        abrirPopUpAlertaRefund.classList.remove('active')
    })

    confirmAlertRefund.addEventListener('click',function(){
        abrirOverlayAlertaRefund.classList.remove('active')
        abrirPopUpAlertaRefund.classList.remove('active')
    })    


