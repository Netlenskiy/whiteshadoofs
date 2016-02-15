//5
try
{
}
catch (e)
{
    console.log("ymaps was not loaded.");
}


ymaps.ready( function () {
    initMap();
    // mediator.requestImageSrc(1);
    window.menu = new Menu( $("#main_menu") );
    window.mediator = new Mediator();
    //window.gallery = new Gallery( $("#gallery") );
});