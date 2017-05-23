      function initMap() {
        var Tokyo = {lat: 35.652832, lng: 139.839478};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: Tokyo
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
