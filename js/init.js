

function getData(){
  var markerData = new Array();

  $.ajax({
    type: "GET",
    url: "json/generalData.json",
    success: function(result){

      console.log(result);

      for(var i in result.Data){
        markerData.push({
        	positionLat: result.Data[i].positionLat, 
        	positionLng: result.Data[i].positionLng, 
        	average: result.Data[i].burrowsAverage
        });
      }
    }
  });

  console.log(markerData[0].positionLat);
  console.log(markerData[1].positionLng);
  console.log(markerData[2].average);
  
  return markerData;
}

function initMap(){

  var markerData = new Array();
  markerData = getData();

  var smallIsles = {lat: 56.988553, lng: -6.451959};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: smallIsles
  });

  var markerArray = new Array();

  for(var i in markerData){
    markerArray[i] = new google.maps.Marker({
      position: {lat: markerData[i].positionLat, lng: markerData[i].positionLng},
      map: map
    });
  }
}


