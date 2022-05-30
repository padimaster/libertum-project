var abrirPopUpconnectWallet = document.getElementById('connectWallet'),
    overlayconnectWallet = document.getElementById('overlayConnectWallet'),
    popUpconnectWallet= document.getElementById('popUpConnectWallet'),
    cerrarPopUpconnectWallet = document.getElementById('connectWalletButtonClose')

abrirPopUpconnectWallet.addEventListener('click',function(){
    overlayconnectWallet.classList.add('active')
    popUpconnectWallet.classList.add('active')
})

cerrarPopUpconnectWallet.addEventListener('click',function(){
    overlayconnectWallet.classList.remove('active')
    popUpconnectWallet.classList.remove('active')
})