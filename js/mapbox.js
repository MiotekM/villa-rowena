const locations = [
  {
    id: 1,
    description: "Villa Rowena",
    coordinates: [17.0505105, 54.6602693],
  },
  {
    id: 2,
    description: "Plaża Rowy",
    coordinates: [17.0470058, 54.6674626],
  },
  {
    id: 3,
    description: "Słowiński Park Narodowy",
    coordinates: [17.0579827, 54.6679147],
  },
  {
    id: 4,
    description: "Port Rybacki",
    coordinates: [17.0516948, 54.6672267],
  },
];
const locations2 = [
  {
    id: 1,
    description: "Villa Rowena",
    coordinates: [17.0505105, 54.6602693],
  },
];

mapboxgl.accessToken =
  "pk.eyJ1IjoiYmx1ZWFiZSIsImEiOiJja3BoMWUzMjUwNHNoMm9wY2Zqcnl4N2dlIn0.uwvSgu6oCUSMWPbskQtICw";

if (window.screen.width > 1000) {
  var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/blueabe/ckpfyedox1oj517pbn8ocxbhr",
    scrollZoom: false,
  });
  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    const el = document.createElement("div");
    el.className = "marker";

    new mapboxgl.Marker({
      element: el,
      anchor: "bottom",
    })
      .setLngLat(loc.coordinates)
      .addTo(map);
    new mapboxgl.Popup({
      offset: 10,
      closeButton: false,
    })
      .setLngLat(loc.coordinates)
      .setHTML(
        `<p id="point${loc.id}" class="point" data-tab="${loc.id}">${loc.description}</p>`
      )
      .addTo(map);
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 120,
      bottom: 30,
      left: 100,
      right: 100,
    },
  });
} else {
  var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/blueabe/ckpfyedox1oj517pbn8ocxbhr",
    interactive: false,
    center: [17.0505105, 54.6602693],
    zoom: 13,
  });
  locations2.forEach((loc) => {
    const el = document.createElement("div");
    el.className = "marker";

    new mapboxgl.Marker({
      element: el,
      anchor: "bottom",
    })
      .setLngLat(loc.coordinates)
      .addTo(map);
    new mapboxgl.Popup({
      offset: 10,
      closeButton: false,
    })
      .setLngLat(loc.coordinates)
      .setHTML(
        `<a class="map-link" href="https://www.google.com/maps/place/Villa+Rowena/@54.6602839,17.0506335,15z/data=!4m5!3m4!1s0x0:0x92b84f93d3d157f5!8m2!3d54.6602839!4d17.0506335"><p id="point${loc.id}" class="point" data-tab="${loc.id}">${loc.description}</p></a>`
      )
      .addTo(map);
  });
}

//   // Create a default Marker and add it to the map.
//   var marker1 = new mapboxgl.Marker()
//     .setLngLat([17.0492788, 54.6601861])
//     .addTo(map);
