//map
function initMap() {
    var uluru = {lat: 32.0746012, lng: 34.7823722};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 17,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
      // icon: {
      //   document.getElementById,
      //   scaledSize: new google.maps.Size(96, 96)
      // }
    });
}

//arrival

var busBtn = document.getElementById('bus');
var carBtn = document.getElementById('car');
var busContent = document.querySelectorAll('.info-for-bus');
var carContent = document.querySelectorAll('.info-for-car');

busBtn.addEventListener('click', function () {
  busBtn.style.color = "black";
  carBtn.style.color = "gray";
    for (var i of busContent){
     i.style.display = "block"
    }
    for (var i of carContent){
      i.style.display = "none"
     } 
});
carBtn.addEventListener('click', function () {
  busBtn.style.color = "gray";
  carBtn.style.color = "black";
   for (var i of busContent){
    i.style.display = "none"
   }
   for (var i of carContent){
     i.style.display = "block"
    } 
});

//fonts-animation

