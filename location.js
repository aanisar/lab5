    function initMap() {
          let cntower= {
              lat:43.642591,
              lng:-79.387238 
          };
      
        let CNTowerMap = document.getElementById('cnmap');

       let CNmap = new google.maps.Map(CNTowerMap, {
          zoom: 20,
          center: cntower
        });

        let marker = new google.maps.Marker({position:cntower, map:map});
    }

    function initMap2() {
        let ripley= {
            lat:43.6424036,
            lng:-79.3881603 
        };
    
      let ripleyMap = document.getElementById('rmap');

     let Rmap = new google.maps.Map(ripleyMap, {
        zoom: 20,
        center: ripley
      });

      let marker = new google.maps.Marker({position:ripley, map:map});
  }