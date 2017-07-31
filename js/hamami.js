      function initMap() {
        var Hamami = {lat: 38.8360654, lng: 141.5794449};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 17,
          center: Hamami
        });
        var marker = new google.maps.Marker({
          position: Hamami,
          map: map
        });
      }
