var myLatLng = { lat: 38.346, lng: -0.4907 }
var mapOptions = {
  center: myLatLng,
  zoom: 7,
  mapTypeId: google.maps.MapTypeId.ROADMAP
}

//create map
var map = new google.maps.Map(document.getElementById('googleMap'), mapOptions)

//create a DirectionsService object to use the route method and get a result for our request
var directionsService = new google.maps.DirectionsService()

//create a DirectionsRenderer object which we will use to display the route
var directionsDisplay = new google.maps.DirectionsRenderer()

//bind the DirectionsRenderer to the map
directionsDisplay.setMap(map)

//define calcRoute function
function calcRoute() {
  //create request
  var request = {
    origin: document.getElementById('from').value,
    destination: document.getElementById('to').value,
    travelMode: google.maps.TravelMode.DRIVING, //WALKING, BYCYCLING, TRANSIT
    unitSystem: google.maps.UnitSystem.METRIC
  }
    } else {
    }
  })
}

}

