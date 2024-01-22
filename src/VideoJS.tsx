import { useRef, useEffect } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

export const VideoJS = (props) => {
	const videoRef = useRef<HTMLDivElement>(null);
	const playerRef = useRef(null);
	const { options } = props;
	useEffect(() => {
		// Make sure Video.js player is only initialized once
		if (!playerRef.current && videoRef.current) {
			// The Video.js player needs to be _inside_ the component el for React 18 Strict Mode.
			const videoElement = document.createElement('video-js');

			videoElement.classList.add('vjs-big-play-centered');
			videoRef.current.appendChild(videoElement);

			const player = (playerRef.current = videojs(videoElement, options, () => {
				videojs.log('player is ready');
			}));
			player.options(options);
		}
	}, [options, videoRef]);
	// Dispose the Video.js player when the functional component unmounts
	useEffect(() => {
		const player = playerRef.current;

		return () => {
			if (player && !player.isDisposed()) {
				player.dispose();
				playerRef.current = null;
			}
		};
	}, [playerRef]);

	return <div ref={videoRef} className="w-full rounded-2xl overflow-hidden" />;
};

export default VideoJS;
