let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.603722, lng: -58.381592 },
        zoom: 15,
    });
    const marker = new google.maps.Marker({
        position: { lat: -34.603722, lng: -58.381592 },
        map,
        title: "Hamburgueseria",
    });
}
