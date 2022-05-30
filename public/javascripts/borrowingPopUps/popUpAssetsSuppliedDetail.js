var abrirPopUpAssetsDetail = document.getElementById('openPopUpAssetsDetail')
    overlayAssetsDetail=document.getElementById('overlayAssetsSuppliedDetail'),
    popUpAssetsDetail=document.getElementById('popUpAssetsSuppliedDetail'),
    cerrarPopUpAssetsDetail=document.getElementById('closeAssetsSuppliedDetail')    

    openPopUpAssetsBorrowDetailTable = document.getElementById('openPopUpAssetsBorrowDetailTable')


    abrirPopUpAssetsDetail.addEventListener('click',function(){
        overlayAssetsDetail.classList.add('active')
        popUpAssetsDetail.classList.add('active')
    })
    
    openPopUpAssetsBorrowDetailTable.addEventListener('click',function(){
        overlayAssetsDetail.classList.add('active')
        popUpAssetsDetail.classList.add('active')
    })

    cerrarPopUpAssetsDetail.addEventListener('click',function(){
        overlayAssetsDetail.classList.remove('active')
        popUpAssetsDetail.classList.remove('active')
    })
