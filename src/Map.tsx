import mapboxgl from 'mapbox-gl';
import { useRef, useEffect, useState } from 'react';

const MapA = () => {
	const mapContainer = useRef<HTMLDivElement | null>(null);
	const map = useRef<mapboxgl.Map | null>(null);
	const [mapLoaded, setMapLoaded] = useState(false);

	mapboxgl.accessToken = 'pk.eyJ1IjoibGVtaXJxIiwiYSI6ImNsa2RkejVlbzBudGYzZnF0MmN1dmR6M3oifQ.tw64G0UGyrAm5brYxoYYxQ';

	useEffect(() => {
		if (map.current) return;

		map.current = new mapboxgl.Map({
			container: (mapContainer.current && mapContainer.current) || '',
			style: 'mapbox://styles/mapbox/dark-v10',
			center: [0, 0],
			zoom: 2,
			pitch: 30,
		});

		map.current.on('load', () => {
			if (!map.current) return;
			setMapLoaded(true);

			setTimeout(() => {
				map.current?.flyTo({
					center: [54.983107, -124.724507],
					zoom: 10,
					speed: 1,
					curve: 1,
				});
			}, 1000);

			map.current.addControl(
				new mapboxgl.NavigationControl({
					visualizePitch: true,
					showCompass: true,
					showZoom: true,
				})
			);
			map.current.addControl(
				new mapboxgl.GeolocateControl({
					positionOptions: {
						enableHighAccuracy: true,
					},
					trackUserLocation: true,
					showUserLocation: true,
				})
			);
		});

		map.current.on('style.load', () => {
			// Insert the layer beneath any symbol layer.
			// const layers = map.current.getStyle().layers;
			// const labelLayerId = layers.find((layer) => layer.type === 'symbol' && layer.layout['text-field']).id;
			// The 'building' layer in the Mapbox Streets
			// vector tileset contains building height data
			// from OpenStreetMap.
			// map.current.addLayer(
			// 	{
			// 		id: 'add-3d-buildings',
			// 		source: 'composite',
			// 		'source-layer': 'building',
			// 		filter: ['==', 'extrude', 'true'],
			// 		type: 'fill-extrusion',
			// 		minzoom: 15,
			// 		paint: {
			// 			'fill-extrusion-color': '#aaa',
			// 			// Use an 'interpolate' expression to
			// 			// add a smooth transition effect to
			// 			// the buildings as the user zooms in.
			// 			'fill-extrusion-height': ['interpolate', ['linear'], ['zoom'], 15, 0, 15.05, ['get', 'height']],
			// 			'fill-extrusion-base': ['interpolate', ['linear'], ['zoom'], 15, 0, 15.05, ['get', 'min_height']],
			// 			'fill-extrusion-opacity': 0.6,
			// 		},
			// 	},
			// 	labelLayerId
			// );
		});
	}, []);
	return <div ref={mapContainer} className="w-full h-" />;
};

export default MapA;
