var openDetails = document.getElementById('openDetails')
    overlayDetailPool = document.getElementById('overlayDetailPool'),
    popUpAssetsBorrowDetails = document.getElementById('popUpDetailPool'),
    closeDetailsPool = document.getElementById('closeDetailsPool')    



    openDetails.addEventListener('click',function(){
        overlayDetailPool.classList.add('active')
        popUpAssetsBorrowDetails.classList.add('active')
    })
    
    closeDetailsPool.addEventListener('click',function(){
        overlayDetailPool.classList.remove('active')
        popUpAssetsBorrowDetails.classList.remove('active')
    })
