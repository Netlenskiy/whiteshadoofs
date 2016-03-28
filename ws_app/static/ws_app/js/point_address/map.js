/**
 * Created by ivan on 15.03.16.
 */
function init_point_address_map () {
    var map = new ymaps.Map('point_address_map', {
        center: [58.1395, 42.2004],
        zoom: 10,
        controls: ['smallMapDefaultSet']
    });
    map.controls.remove('searchControl');
    map.events.add('click', function (e) {
        // Получение координат щелчка
        var coords = e.get('coords');
        document.forms.add_object.latitude.value = coords[1];
        document.forms.add_object.longitude.value = coords[0];
    });
}

$('#request_address').click(function (e) {
    var latitude = document.forms.add_object.latitude.value;
    var longitude= document.forms.add_object.longitude.value;
    if (!latitude || !longitude) return;
    var url = 'https://geocode-maps.yandex.ru/1.x/?&geocode='
        + latitude + ',' + longitude
        + '&results=1' + '&format=json';
    $.ajax(url, {
        success: function (response, status) {
            if (status != 'success') return;
            var geo_object = response['response']
                ['GeoObjectCollection']
                ['featureMember']
                [0]
                ['GeoObject'];
            var GeocoderMetaData = geo_object['metaDataProperty']
                ['GeocoderMetaData'];
            var AddressDetails = GeocoderMetaData['AddressDetails'];
            document.forms
                .add_object
                .address
                .value = GeocoderMetaData['text'];
            document.forms
                .add_object
                .country
                .value = AddressDetails['Country']['CountryName'];
            document.forms
                .add_object
                .region
                .value = AddressDetails['Country']
                ['AdministrativeArea']
                ['AdministrativeAreaName'];
            var SubAdministrativeArea = AddressDetails['Country']
                ['AdministrativeArea']
                ['SubAdministrativeArea'];
            var locality = '';
            var street = '';
            if (SubAdministrativeArea) {
                document.forms
                    .add_object
                    .district.
                    value = SubAdministrativeArea['SubAdministrativeAreaName'];
                locality = SubAdministrativeArea['Locality']['LocalityName'];
                street = SubAdministrativeArea['Locality']['Thoroughfare'];
            } else {
                locality = AddressDetails['Country']
                    ['AdministrativeArea']
                    ['Locality']
                    ['LocalityName'];
                street = AddressDetails['Country']
                    ['AdministrativeArea']
                    ['Locality']
                    ['Thoroughfare'];
            }
            document.forms.add_object.locality.value = locality;
            document.forms.add_object.street.value = street['ThoroughfareName']
                + ' ' + street['Premise']['PremiseNumber']
        }
    })
});

ymaps.ready(function () {
    init_point_address_map();

});