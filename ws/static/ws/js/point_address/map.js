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
        document.forms.point_address_form.latitude.value = coords[1];
        document.forms.point_address_form.longitude.value = coords[0];
    });
}

$('#request_address').click(function (e) {
    var latitude = document.forms.point_address_form.latitude.value;
    var longitude= document.forms.point_address_form.longitude.value;
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
                .point_address_form
                .address
                .value = GeocoderMetaData['text'];
            document.forms
                .point_address_form
                .country
                .value = AddressDetails['Country']['CountryName'];
            document.forms
                .point_address_form
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
                    .point_address_form
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
            document.forms.point_address_form.locality.value = locality;
            document.forms.point_address_form.street.value = street['ThoroughfareName']
                + ' ' + street['Premise']['PremiseNumber']
        }
    })
});

ymaps.ready(function () {
    init_point_address_map();

});