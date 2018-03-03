function initMap() {
    var uluru = {lat: 32.0746012, lng: 34.7823722};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 17,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
}