var abrirPopUpYourLoansBorrow = document.getElementById('openPopUpYourLoansBorrow')
    overlayYourLoansBorrow=document.getElementById('overlayYourLoansBorrow'),
    popUpYourLoansBorrow=document.getElementById('popUpYourLoansBorrow'),
    cerrarPopUpYourLoansBorrow=document.getElementById('closeYourLoansBorrow')
    confirmButtonYourLoansBorrow=document.getElementById('confirmBorrow')
    botonBorrowDetails = document.getElementById('borrow-details')
    overlayAssetsDetail=document.getElementById('overlayAssetsSuppliedDetail'),
    popUpAssetsDetail=document.getElementById('popUpAssetsSuppliedDetail'),

    openPopUpYourLoansBorrowTable = document.getElementById('openPopUpYourLoansBorrowTable')

        //alert var
        abrirOverlayAlertaBorrow = document.getElementById('overlayAlertBorrow'),
        abrirPopUpAlertaBorrow = document.getElementById('popUpAlertBorrow'),
        cerrarAlertaBorrow = document.getElementById('crossAlertBorrow'),
        confirmAlertBorrow = document.getElementById('confirmAlertBorrow')

    abrirPopUpYourLoansBorrow.addEventListener('click',function(){
        overlayYourLoansBorrow.classList.add('active')
        popUpYourLoansBorrow.classList.add('active')
        
    })

    openPopUpYourLoansBorrowTable.addEventListener('click',function(){
        overlayYourLoansBorrow.classList.add('active')
        popUpYourLoansBorrow.classList.add('active')
        
    })

    botonBorrowDetails.addEventListener('click', function() {
        overlayYourLoansBorrow.classList.add('active')
        popUpYourLoansBorrow.classList.add('active')
        overlayAssetsDetail.classList.remove('active')
        popUpAssetsDetail.classList.remove('active')
    })
    
    
    cerrarPopUpYourLoansBorrow.addEventListener('click',function(){
        overlayYourLoansBorrow.classList.remove('active')
        popUpYourLoansBorrow.classList.remove('active')
    })

    confirmButtonYourLoansBorrow.addEventListener('click',function(){
        overlayYourLoansBorrow.classList.remove('active')
        popUpYourLoansBorrow.classList.remove('active')

        // //alerts open
        // abrirOverlayAlertaBorrow.classList.add('active')
        // abrirPopUpAlertaBorrow.classList.add('active')
    })

    //Alert close
    cerrarAlertaBorrow.addEventListener('click',function(){
        abrirOverlayAlertaBorrow.classList.remove('active')
        abrirPopUpAlertaBorrow.classList.remove('active')
    })

    confirmAlertBorrow.addEventListener('click',function(){
        abrirOverlayAlertaBorrow.classList.remove('active')
        abrirPopUpAlertaBorrow.classList.remove('active')
    })
        