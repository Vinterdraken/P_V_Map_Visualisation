function initMap(){

  var smallIsles = {lat: 56.988553, lng: -6.451959};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: smallIsles
  });


  var markerArray = new Array();
    
    $.ajax({
        type: "GET",
        url: "json/generalData.json",
        dataType: "json",
        success: function(result){

            for(var i in result.Data){
        
                var markerData = { Lat: result.Data[i].positionLat, Lng: result.Data[i].positionLng, average: result.Data[i].burrowsAverage };

                var marker = new google.maps.Marker({
                    position: {lat: markerData.Lat, lng: markerData.Lng},
                    map: map,
                    title: 'Burrow\'s Average: ' + markerData.average
                });
                              
                google.maps.event.addListener( marker, "click", function() {
                    var lat = this.getPosition().lat(), lng = this.getPosition().lng();
                    var title = this.getTitle();
                    document.getElementById( "LatitudeTxtArea" ).innerHTML = "Latitude: " + lat;
                    document.getElementById( "LongitudeTxtArea" ).innerHTML = "Longitude: " + lng;
                    document.getElementById( "AverageTxtArea" ).innerHTML = title;
                });
                
            }     
        }
    });
    
}


