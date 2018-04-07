

function getData(){
  var markerObjectArray = new Array();
  var markersObject;

  $.ajax({
    type: "GET",
    url: "json/generalData.json",
    dataType: "json",
    success: function(result){

      for(var i in result.Data){
        
        var marker = { Lat: result.Data[i].positionLat, Lng: result.Data[i].positionLng, average: result.Data[i].burrowsAverage };

        markerObjectArray.push(marker);
        
      }     
    }
  });

  return markerObjectArray;
}

function initMap(){

  var smallIsles = {lat: 56.988553, lng: -6.451959};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: smallIsles
  });

  var markerData;
  markerData = getData();

  /*console.log(markerData);*/

  console.log(getData());
  console.log(getData()[0]);

  var markerArray = new Array();

  for(var i in markerData){

    var marker = new google.maps.Marker({
      position: {lat: markerData[i].Lat, lng: markerData[i].Lng},
      map: map
    });

    markerArray.push(marker);
  }
}


