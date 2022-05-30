var abrirPopUpAssetsSupply = document.getElementById('openPopUpAssetSuppliedSupply'),
    overlayAssetsSupply=document.getElementById('overlayAssetSuppliedSupply'),
    popUpAssetsSupply=document.getElementById('popUpAssetsSuppliedSupply'), 
    cerrarPopUpAssetsSupply=document.getElementById('closeAssetsSuppliedSupply')
    botonConfirmarAssetsSupply = document.getElementById('confirmSupplySuppliedPopUp')
    botonSupplyDetails = document.getElementById('supply-details')
    overlayAssetsDetail=document.getElementById('overlayAssetsSuppliedDetail'),
    popUpAssetsDetail=document.getElementById('popUpAssetsSuppliedDetail'),

abrirPopUpAssetsSupply.addEventListener('click',function(){
    overlayAssetsSupply.classList.add('active')
    popUpAssetsSupply.classList.add('active')
})

botonSupplyDetails.addEventListener('click', function() {
    overlayAssetsSupply.classList.add('active')
    popUpAssetsSupply.classList.add('active')
    overlayAssetsDetail.classList.remove('active')
    popUpAssetsDetail.classList.remove('active')
})

cerrarPopUpAssetsSupply.addEventListener('click',function(){
    overlayAssetsSupply.classList.remove('active')
    popUpAssetsSupply.classList.remove('active')
})

botonConfirmarAssetsSupply.addEventListener('click',function(){
    overlayAssetsSupply.classList.remove('active')
    popUpAssetsSupply.classList.remove('active')
})



