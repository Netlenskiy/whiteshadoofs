/**
 * Created by ivan on 25.09.15.
 */

//2

function initGeoObjectManager() {
    var myMap = new ymaps.Map('wsMap', {
        center: [58.1395, 42.2004],
        zoom: 4,
        controls: ['smallMapDefaultSet']
    });
    myMap.controls.remove('searchControl');

    var lom = new ymaps.LoadingObjectManager('http://ws/index.php/map/fetchplacemarks?bbox=%b', {
        clusterize: true,
        splitRequests: false
    });
    lom.objects.options.set('preset', 'islands#greenDotIcon');

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
            };
        }
    }
}
