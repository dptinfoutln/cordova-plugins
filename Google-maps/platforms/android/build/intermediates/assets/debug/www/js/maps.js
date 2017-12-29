var map;
var coordinates = []
var URL = "http://demo9254333.mockable.io/restaurants"

document.addEventListener("deviceready", function() {
  var div = document.getElementById("map_canvas");

  getPositions();

  // Initialize the map view
  map = plugin.google.maps.Map.getMap(div);

  // Wait until the map is ready status.
  map.addEventListener(plugin.google.maps.event.MAP_READY, onMapReady);
}, false);

function onMapReady() {
  console.log("OnMapReady");

  // Move to the position with animation
  map.animateCamera({
    target: {lat: 43.117475, lng: 5.937939},
    zoom: 8,
    tilt: 60,
    bearing: 140,
    duration: 5000
  }, function() {
    addMarkers();
  });
}

function getPositions(){
  $.ajax({
      url : URL,
      type : "GET",
      data: {
      format: 'json'
      },
      success : function(json){
          var i;
          for(i = 0; i < json.positions.length; i++){
            coordinates.push({latitude: json.positions[i].geometry.coordinates[0],
              longitude: json.positions[i].geometry.coordinates[1],
              title: json.positions[i].properties.name,
              type: json.positions[i].type});
          }
      },
      error : function(resultat, statut, erreur){
        alert("Error : " + statut);
      }
   });
}

function addMarkers(){
  var i;
  for(i = 0; i < coordinates.length; i++){

    map.addMarker({
      position: {lat: coordinates[i].latitude, lng: coordinates[i].longitude},
      title: coordinates[i].title,
      snippet: coordinates[i].type,
      animation: plugin.google.maps.Animation.BOUNCE
    }, function(marker) {

      // Show the info window
      marker.showInfoWindow();

      });

  }
}
