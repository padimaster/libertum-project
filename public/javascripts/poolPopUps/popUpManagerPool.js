var abrirPopUpManagerPool = document.getElementById('managerPopUpOpen'),
    overlayManagerPool = document.getElementById('overlayManagerPool'),
    popUpManagerPool = document.getElementById('popUpManagerPool'),
    cerrarPopUpManagerPool = document.getElementById('buttonConfirmManagerPool'),
    cerrarCrossButtonPull = document.getElementById('closeManagerPull')
    titleManagerPopUp = document.getElementById('titleManagerPopUp')

    supplyPoolDetail = document.getElementById('addLiquidityDetails')
    overlayDetailPool = document.getElementById('overlayDetailPool'),
    popUpAssetsBorrowDetails = document.getElementById('popUpDetailPool'),

    supplyPoolDetail.addEventListener('click',function(){
        overlayManagerPool.classList.add('active')
        popUpManagerPool.classList.add('active')
        overlayDetailPool.classList.remove('active')
        popUpAssetsBorrowDetails.classList.remove('active')
    })

    removeLiquidtyDetails = document.getElementById('removeLiquidtyDetails')

    
    removeLiquidtyDetails.addEventListener('click',function(){
        overlayManagerPool.classList.add('active')
        popUpManagerPool.classList.add('active')
            
        if (document.getElementById('changeContent').checked) {
            document.getElementById('popUpManagerPoolContent').classList.remove('active')
            document.getElementById('popUpManagerPoolContent2').classList.remove('active')
            titleManagerPopUp.innerText = "Add liquidity"
        } else {
            document.getElementById('popUpManagerPoolContent').classList.add('active')
            document.getElementById('popUpManagerPoolContent2').classList.add('active')
            titleManagerPopUp.innerText = "Remove liquidity"
        }
        
        overlayDetailPool.classList.remove('active')
        popUpAssetsBorrowDetails.classList.remove('active')
    })

    // //Alert
    // abrirOverlayAlertaPool = document.getElementById('overlayAlertPool'),
    // abrirPopUpAlertaPool = document.getElementById('popUpAlertPool'),
    // cerrarAlertaPool = document.getElementById('crossAlertPool'),
    // confirmAlertPool = document.getElementById('confirmAlertPool')

abrirPopUpManagerPool.addEventListener('click',function(){
    overlayManagerPool.classList.add('active')
    popUpManagerPool.classList.add('active')
})

cerrarPopUpManagerPool.addEventListener('click',function(){
    overlayManagerPool.classList.remove('active')
    popUpManagerPool.classList.remove('active')
        // //alert
        // abrirOverlayAlertaPool.classList.add('active')
        // abrirPopUpAlertaPool.classList.add('active')
})

cerrarCrossButtonPull.addEventListener('click',function(){
    overlayManagerPool.classList.remove('active')
    popUpManagerPool.classList.remove('active')

})

//Alert
cerrarAlertaPool.addEventListener('click',function(){
    abrirOverlayAlertaPool.classList.remove('active')
    abrirPopUpAlertaPool.classList.remove('active')
})

confirmAlertPool.addEventListener('click',function(){
    abrirOverlayAlertaPool.classList.remove('active')
    abrirPopUpAlertaPool.classList.remove('active')
})


function isChecked() {
    if (document.getElementById('changeContent').checked) {
        document.getElementById('popUpManagerPoolContent').classList.add('active')
        document.getElementById('popUpManagerPoolContent2').classList.add('active')
        titleManagerPopUp.innerText = "Remove liquidity"
    } else {
        document.getElementById('popUpManagerPoolContent').classList.remove('active')
        document.getElementById('popUpManagerPoolContent2').classList.remove('active')
        titleManagerPopUp.innerText = "Add liquidity"
    }
}



