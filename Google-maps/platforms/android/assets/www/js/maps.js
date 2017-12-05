var map;
document.addEventListener("deviceready", function() {
  var div = document.getElementById("map_canvas");

  // Initialize the map view
  map = plugin.google.maps.Map.getMap(div);

  // Wait until the map is ready status.
  map.addEventListener(plugin.google.maps.event.MAP_READY, onMapReady);
}, false);

function onMapReady() {
  console.log("OnMapReady");

  // Move to the position with animation
  map.animateCamera({
    target: {lat: 48.862725, lng: 2.287592000000018},
    zoom: 17,
    tilt: 60,
    bearing: 140,
    duration: 5000
  }, function() {

    // Add a maker
    map.addMarker({
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
    });
  });

}
