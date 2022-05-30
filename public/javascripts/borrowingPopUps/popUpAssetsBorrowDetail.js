var abrirPopUpAssetsBorrowDetails = document.getElementById('openPopUpAssetsBorrowDetail')
    overlayAssetsBorrowDetails=document.getElementById('overlayAssetsBorrowDetails'),
    popUpDetailPool = document.getElementById('popUpAssetsBorrowDetails'),
    cerrarPopUpAssetsBorrowDetails = document.getElementById('closeAssetsBorrowDetails')    


    abrirPopUpAssetsBorrowDetails.addEventListener('click',function(){
        overlayAssetsBorrowDetails.classList.add('active')
    })
    
    cerrarPopUpAssetsBorrowDetails.addEventListener('click',function(){
        overlayAssetsBorrowDetails.classList.remove('active')
    })
