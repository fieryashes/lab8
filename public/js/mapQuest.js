function initMap() {
	// add your code here
	L.mapquest.key = 'kRo4cbHm8hY8iVVwxul8JBGxUfO7Y1Ar';

	// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
	  center: [37.7749, -122.4194],
	  layers: L.mapquest.tileLayer('map'),
	  zoom: 12
	});

	// Add a marker to the app
	L.marker([32.88, -117.236]).addTo(map);
}