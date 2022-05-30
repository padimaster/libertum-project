var abrirPopUpAbout = document.getElementById('readMoreAbout'),
    overlayAbout = document.getElementById('overlayAboutTheApplication'),
    popUpAbout = document.getElementById('popUpAboutTheApplication'),
    cerrarPopUpAbout = document.getElementById('buttonBackAbout');

abrirPopUpAbout.addEventListener('click',function(){
    overlayAbout.classList.add('active')
    popUpAbout.classList.add('active')
})

cerrarPopUpAbout.addEventListener('click',function(){
    overlayAbout.classList.remove('active')
    popUpAbout.classList.remove('active')
})