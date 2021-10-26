var map, layer;
map = new OpenLayers.Map("mapdiv");
layer = new OpenLayers.Layer.OSM( "Simple OSM Map");
map.addLayer(layer);
map.setCenter(
    new OpenLayers.LonLat(-34.871292, -8.063118).transform(
        new OpenLayers.Projection("EPSG:4326"),
        map.getProjectionObject()
    ), 12
);    

function Mapa(Lon,Lat){
   var lonLat = new OpenLayers.LonLat(Lon, Lat).transform(
        new OpenLayers.Projection("EPSG:4326"),
        map.getProjectionObject()
    );
var markers = new OpenLayers.Layer.Markers("Markers");
map.addLayer(markers);
markers.addMarker(new OpenLayers.Marker(lonLat));

map.setCenter(lonLat, 12);  
}