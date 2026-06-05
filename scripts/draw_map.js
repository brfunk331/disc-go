/*******************************************************
Function Name: showMap

Description: Creates a map configuration with two
    map layers, provided by OpenStreetMap and ESRI, and
    one marker layer initialized with a marker pointing
    to the center point of the map. A layer selection
    widget is included for the user to swap between
    map layers.
*******************************************************/
function showMap( id, lat, long, label ) {
    /* Map layer sourced from OpenStreetMap */
    const mapLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',
        { maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        } );

    /* Satellite layer sourced from ESRI */
    const satLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        { maxZoom: 19,
            attribution: '&copy; <a href="https://esri.com">ESRI</a>'
        } );

    /* Map object with some configuration settings */
    const map = L.map( id,
        { layers: [mapLayer],
            center: [lat, long],
            zoom: 14,
            scrollWheelZoom: true,
        } );

    /* Marker layer with a popup */
    const markerLayer = L.marker([lat, long]).addTo(map).bindPopup(label);

    /* Layer selection widget to swap between map layers */
    L.control.layers({Map: mapLayer, Satellite: satLayer}, {Markers: markerLayer}).addTo(map);
}

/* Create label at the center of the map, Waterworks Park */
document.addEventListener("DOMContentLoaded", (event) => {
    showMap('myMap', 39.158061, -94.577974, 'Waterworks Park');
} );