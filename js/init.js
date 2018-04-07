

function getData(){
  var markerData = new Array();

  $.ajax({
    type: "GET",
    url: "json/generalData.json",
    dataType: "json",
    success: function(result){

      for(var i in result.Data){
        
        var marker = { Lat: result.Data[i].positionLat, Lng: result.Data[i].positionLng, average: result.Data[i].burrowsAverage };

        console.log(marker.Lat);
        console.log(marker.Lng);
        console.log(marker.average);
        console.log("----------------------------");

        markerData.push(marker);
      }
    }
  });
  
  return markerData;
}

function initMap(){

  var smallIsles = {lat: 56.988553, lng: -6.451959};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: smallIsles
  });

  var markerData = new Array();
  markerData = getData();


  console.log(markerData);

  var markerArray = new Array();

  for(var i in markerData){
    markerArray[i] = new google.maps.Marker({
      position: {lat: markerData[i].Lat, lng: markerData[i].Lng},
      map: map
    });
  }
}


