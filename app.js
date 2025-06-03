function initMap () {
  let x = [42.764017, 42.763208, 42.752563];
  let y = [132.868312, 132.876856, 132.871998];
  for (let i = 0; i < 3; i++) {
    let map = new ymaps.Map("yandexmap" + i, {
      center: [x[i], y[i]],
      zoom: 16,
      type: 'yandex#satellite'
    });
    let marker = new ymaps.Placemark([x[i], y[i]]);
    map.geoObjects.add(marker);
  }
}
ymaps.ready(initMap);
