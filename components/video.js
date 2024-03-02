import { useState } from "react";
import Container from "./container";

const Video = () => {
  const [playVideo, setPlayVideo] = useState(false);
  return (
    <Container>
      <div className="w-full max-w-4xl mx-auto overflow-hidden lg:mb-20 rounded-2xl ">
        <div
          onClick={() => setPlayVideo(!playVideo)}
          className="relative bg-indigo-300 cursor-pointer aspect-w-16 aspect-h-9 bg-gradient-to-tr from-purple-400 to-indigo-700"
        >
          {!playVideo && (
            <button className="absolute inset-auto w-16 h-16 text-white transform -translate-x-1/2 -translate-y-1/2 lg:w-28 lg:h-28 top-1/2 left-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16  lg:w-28 lg:h-28"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Play Video</span>
            </button>
          )}
          {playVideo && (
            <video
              controls
              width="100%"
              height="100%"
              className="absolute inset-0"
            >
              <source
                src="https://vod-progressive.akamaized.net/exp=1709423559~acl=%2Fvimeo-transcode-storage-prod-us-central1-h264-1080p%2F01%2F4591%2F6%2F172957106%2F558393018.mp4~hmac=086fdf714e198edebdc72c3f64cf113af3615d4f610a8ee975fce4951442be86/vimeo-transcode-storage-prod-us-central1-h264-1080p/01/4591/6/172957106/558393018.mp4"
                type="video/mp4"
              />
              Tu navegador no soporta el elemento de video.
            </video>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Video;
