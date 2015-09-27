//5
try
{
}
catch (e)
{
    console.log("ymaps was not loaded.");
}


ymaps.ready( function () {
    initGeoObjectManager();
    // mediator.requestImageSrc(1);
    window.menu = new Menu( $("#mainMenu") );
    window.mediator = new Mediator();
    window.gallery = new Gallery( $("#gallery") );
});