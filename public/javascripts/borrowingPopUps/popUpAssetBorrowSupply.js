var abrirPopUpAssetsBorrowSupply = document.getElementById('openPopUpAssetsBorrowSupply')
    overlayAssetsBorrowSupply=document.getElementById('overlayAssetsBorrowSupply'),
    popUpAssetsBorrowSupply=document.getElementById('popUpAssetsBorrowSupply'),
    cerrarPopUpAssetsBorrowSupply=document.getElementById('closeAssetsBorrowSupply')    

    abrirPopUpAssetsBorrowSupply.addEventListener('click',function(){
        overlayAssetsBorrowSupply.classList.add('active')
    })
    
    cerrarPopUpAssetsBorrowSupply.addEventListener('click',function(){
        overlayAssetsBorrowSupply.classList.remove('active')
})