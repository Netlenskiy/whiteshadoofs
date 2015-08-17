//5
try
{
    ymaps.ready( function () {
        initGeoObjectManager();
    })
}
catch (e)
{
    console.log("ymaps was not loaded.")
}


//mediator.requestImageSrc(1);
window.menu = new Menu( $("#mainMenu") );
window.mediator = new Mediator();
window.gallery = new Gallery( $("#gallery") );