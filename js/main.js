let map;
let loc = { lat: 28.6712, lng: 77.3177 }
let marker;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: loc,
        zoom: 9,
    });

    marker = new google.maps.Marker({
        position: loc,
        map: map
    });
}