/**
 * Created by ivan on 15.03.16.
 */
function init_point_address_map () {
    var map = new ymaps.Map('point_address_map', {
        center: [58.1395, 42.2004],
        zoom: 6,
        controls: ['smallMapDefaultSet']
    });
    map.controls.remove('searchControl');
    map.events.add('click', function (e) {
        // Получение координат щелчка
        var coords = e.get('coords');
        document.forms.point_address_form.latitude.value = coords[1];
        document.forms.point_address_form.longitude.value = coords[0];
    });
}

ymaps.ready(function () {
    init_point_address_map();

});