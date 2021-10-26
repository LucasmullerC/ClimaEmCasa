map = new OpenLayers.Map("mapdiv");
map.addLayer(new OpenLayers.Layer.OSM());

var lonLat = new OpenLayers.LonLat("-34.871292", "-8.063118").transform(new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
map.getProjectionObject() // to Spherical Mercator Projection
);

var zoom = 16;

map.setCenter(lonLat, zoom);

function Mapa(Lon,Lat){
    var lonLat = new OpenLayers.LonLat(Lat, Lon).transform(new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
map.getProjectionObject() // to Spherical Mercator Projection
);  
var markers = new OpenLayers.Layer.Markers("Markers");
map.addLayer(markers);

markers.addMarker(new OpenLayers.Marker(lonLat));
map.setCenter(lonLat,16);
}