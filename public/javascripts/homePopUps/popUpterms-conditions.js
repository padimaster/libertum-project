var abrirPopUptermsConditions = document.getElementById('termsAndConditions'),
    overlaytermsConditions = document.getElementById('overlayterms-conditions'),
    popUptermsConditions= document.getElementById('popUpterms-conditions'),
    cerrarPopUptermsConditions = document.getElementById('buttonBackterms-conditions');

abrirPopUptermsConditions.addEventListener('click',function(){
    overlaytermsConditions.classList.add('active')
})

cerrarPopUptermsConditions.addEventListener('click',function(){
    overlaytermsConditions.classList.remove('active')
})
