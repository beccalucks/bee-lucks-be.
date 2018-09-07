
<!DOCTYPE html>
<head>
<link rel="stylesheet" href="HomePage.css">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta charset="UTF-8">
</head>
<body class="flex-wrapper">
<header>
  <h1 id="pubname">
    <img class="b" src="images/b.png" height=18% width=18% alt="beesmall">
         the Bee Lucks Be. .&#9829;

                  <h3>The Kingdom's Protected Wilds:
                           <small>A Sustainability & Budget Map of the UK's 15 National Parks
                           </small>
                         </h3>
                         <h4>
                                      by Becca Thomas Loux

                                  </h4>
</header>
<div>
  <article id="rightside">
              The following UK park map, courtesy of the UK National Parks Service, is a link that takes you an interactive map tool displaying the 15 National Parks sprinkled through Scotland, Wales and England. Each official UK park on the big island is denoted by a darker green on my map, which I built with Leaflet.js and Mapbox with DataWrapper for the charts. Click the map below to browse the geographical terrain-focused map and learn about water usage and the overall sustainability budgets of each park. The UK's National Park Service has designated three protected park spaces in Wales: Snowdonia, Brecon Beacons and the Pembrokeshire Coast. Scotland has two official parks south of the highlands, Loch Lomond & the Tressochs and Cairgorms. England's ten National Parks are: Exmoore, Dartmoore, Yorkshire Dales, North York Moors, Lake District, Northumberland, South Downs, Peak District, New Forrest and Broads.
                     </a>
                       <a href="BeLucksBee.html">Back to the Hive
                       </a>
                        </article>
          </div>
</header>
      </a>
  </h1>
<div id="mplink">
          <a href="https://api.mapbox.com/styles/v1/beccalucks/cjlf6d1b48vkq2so55dhk7n6l.html?fresh=true&title=true&access_token=pk.eyJ1IjoiYmVjY2FsdWNrcyIsImEiOiJjamE4YWwyOGUwNHYxMndvNmhoNXB2NWw4In0.Ps1fR3CkVX1u3FBXxLZXIQ#14.0/42.363484/-71.052069/0">
            <img src="images/parksmap.png"  alt="intromap">
              </a>
     </div>

   </body>

       </html>


// initialize the map on the "map" div with a given center and zoom
var map = L.map('map', {
    center: [51.505, -0.09],
    zoom: 13
});
//code from Leaflet.js API Docs -BTL

L.map(<String> id="mplink", <Map options> options?)
