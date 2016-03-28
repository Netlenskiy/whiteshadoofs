/**
 * Created by ivan on 25.09.15.
 */

//2

function initMap() {
    var myMap = new ymaps.Map('wsMap', {
        center: [58.1395, 42.2004],
        zoom: 6,
        controls: ['smallMapDefaultSet']
    });
    myMap.controls.remove('searchControl');

    var myBalloonLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="width:170px; margin: 10px; overflow:auto">' +
        '<figure>' +
        '<img src="http://белыежуравли.рф/media/{{properties.face_link}}" ' +
        //'<img src="http://белыежуравли.рф/media/{{properties.face_link}}" ' +
        ' style="width:150px; height:150px;cursor:pointer" ' +
        ' onclick="mediator.requestImageSrc({{properties.id}})"/>' +
        '<figcaption>{{properties.balloonContent}}</figcaption>' +
        '</figure>' +
        '</div>'
    );
    var myHintLayout = ymaps.templateLayoutFactory.createClass(
        '{{properties.hintContent}}'
    );
    // @TODO Сделать, чтобы поинтер метки определялся по типу метки
    //var iconImageHref = 'http://127.0.0.1:8000/placemark_icons/redStar.gif';
    var iconImageHref = 'http://белыежуравли.рф/static/ws_app/imgs/redStar.gif';

    var lom = new ymaps.LoadingObjectManager('http://0.0.0.0:8000/fetch_placemarks?bbox=%b', {
        clusterize: true,
        splitRequests: false
    });
    lom.objects.options.set('preset', 'islands#greenDotIcon');
    lom.objects.options.set('balloonContentLayout', myBalloonLayout);
    lom.objects.options.set('hintContentLayout', myHintLayout);
    lom.objects.options.set('iconLayout', "default#image");
    lom.objects.options.set('iconImageHref', iconImageHref);
    console.log(lom.objects);

    var mainCollection = new ymaps.GeoObjectCollection();

    myMap.geoObjects.add( lom );

    var items = [];
    window.map = {
        'mainCollection': mainCollection,
        filterPlacemarks: function (types) {
            mainCollection.removeAll();
            for (var i = 0; i < items.length; i++) {
                for (var j = 0; j < types.length; j++) {
                    if ( items[i].properties._data.category == types[j] )
                        break;
                }
                if (j == types.length) mainCollection.add( items[i] );
            }
        }
    }
}
