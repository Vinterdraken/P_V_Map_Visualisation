

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

  
  //console.log(markerData[0].positionLat);
  //console.log(markerData[1].positionLng);
  //console.log(markerData[2].average);
  

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

  var marker1 = new google.maps.Marker({
    position: {lat: markerData[0].positionLat, lng: markerData[0].positionLng},
    map: map
  });

  var marker2 = new google.maps.Marker({
    position: {lat: markerData[1].positionLat, lng: markerData[1].positionLng},
    map: map
  });

  var marker3 = new google.maps.Marker({
    position: {lat: markerData[2].positionLat, lng: markerData[2].positionLng},
    map: map
  });

  var marker4 = new google.maps.Marker({
    position: {lat: markerData[3].positionLat, lng: markerData[3].positionLng},
    map: map
  });

  var marker5 = new google.maps.Marker({
    position: {lat: markerData[4].positionLat, lng: markerData[4].positionLng},
    map: map
  });
}


