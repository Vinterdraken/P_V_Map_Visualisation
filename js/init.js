

function getData(){
  var markerData = new Array();

  $.ajax({
    type: "GET",
    url: "json/generalData.json",
    dataType: "json",
    success: function(result){

      for(var i in result.Data){
        console.log(result.Data[i].positionLat);
        console.log(result.Data[i].positionLng);
        console.log(result.Data[i].burrowsAverage);
        console.log("----------------------------");
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

  var markerArray = new Array();

  for(var i in markerData){
    markerArray[i] = new google.maps.Marker({
      position: {lat: markerData[i].positionLat, lng: markerData[i].positionLng},
      map: map
    });
  }
}


