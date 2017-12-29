var map;
var coordinates = []
var URL = "https://demo8699198.mockable.io/restaurants"

document.addEventListener("deviceready", function() {
  var div = document.getElementById("map_canvas");

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

  // Initialize the map view
  map = plugin.google.maps.Map.getMap(div);

  // Wait until the map is ready status.
  map.addEventListener(plugin.google.maps.event.MAP_READY, onMapReady);
}, false);

function onMapReady() {
  console.log("OnMapReady");

  // Move to the position with animation
  map.animateCamera({
    target: {lat: 43.124228, lng: 5.927999999999997},
    zoom: 8,
    tilt: 60,
    bearing: 140,
    duration: 5000
  }, function() {

    var i;
    for(i = 0; i < coordinates.length; i++){

      map.addMarker({
        position: {lat: coordinates[i].latitude, lng: coordinates[i].longitude},
        title: coordinates[i].title,
        snippet: coordinates[i].type,
        animation: plugin.google.maps.Animation.BOUNCE
      }, function(marker) {

        // Show the info window
        //marker.showInfoWindow();

        });

    }

    // Add a maker
    /*map.addMarker({
      position: {lat: 48.862725, lng: 2.287592000000018},
      title: "Universite De Toulon - La Garde" +
             "\nBienvenu a l'Universite !",
      snippet: "Sympa non ?",
      animation: plugin.google.maps.Animation.BOUNCE
    }, function(marker) {

      // Show the info window
      marker.showInfoWindow();

      // Catch the click event
      marker.on(plugin.google.maps.event.INFO_CLICK, function() {

      });
    });*/
  });
}
