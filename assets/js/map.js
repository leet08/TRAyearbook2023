function initMap() {
             let map = new google.maps.Map(document.getElementById("map"), {
                 zoom: 5,
                 center: {
                     lat: 46.619261,
                     lng: -33.134766
                 }
             });
         
             let labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";
         
             let locations = [{
              	 lat: 42.3142315,
                 lng: -71.135437,
                 location: "Boston, MA - Everyone",
             }, {
                 lat: 41.7322167,
                 lng: 44.64176,
                 location: "Tbilisi, Georgia - Jonathan, Samuel, Evan, Noah",
             }, {
                 lat: 39.9384151,
                 lng: 116.0671214,
                 location: "China - Joey, Elijah",
             }, {
                 lat:51.5281779,
                 lng: -0.4319235,
                 location: "London, UK - Ellie",
             }, {
                 lat: -8.5564142,
                 lng: 125.5286409,
                 location: "Dili, Timor-Leste - Samuel, Evan, Noah",
             }, {
                 lat: 39.1938148,
                 lng: -76.9476555,
                 location: "Columbia, MD - Samuel, Evan, Noah",
             }, 
                
             ];
         
             let markers = locations.map(function(location, i) {
                 let marker = new google.maps.Marker({
                     position: location,
                     label: labels[i % labels.length]
                 });
                 const infowindow = new google.maps.InfoWindow({
                    content: location.location,
                });
                
                marker.addListener("click", () => {
                    infowindow.open(map, marker);
                });
                 return marker;
             });
         
             let markerCluster = new MarkerClusterer(map, markers, {
                 imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
             });
         }
