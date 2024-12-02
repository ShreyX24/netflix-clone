import React, { useState, useRef, useEffect } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize,
  SkipForward,
  SkipBack,
} from "lucide-react";

export const VideoPlayer = () => {
  // Video state management
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [showControls, setShowControls] = useState(true);

  // Refs
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  // Extract the movie ID from the URL params
  //   const { id } = useParams<{ id: string }>();
  //   const titleImageData = useGetImages(id === undefined ? "402431" : id);

  const src = "/videos/video1.mp4";

  //   const poster = `${imgUrl}${titleImageData?.backdrops[0]?.file_path}`;

  // Play/Pause toggle
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Skip forward functionality
  const skipForward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime += 10; // Skip 10 seconds forward
    }
  };

  // Skip backward functionality
  const skipBack = () => {
    if (videoRef.current) {
      videoRef.current.currentTime -= 10; // Skip 10 seconds backward
    }
  };

  // Volume control
  const toggleMute = () => {
    if (videoRef.current) {
      const newMuteState = !isMuted;
      setIsMuted(newMuteState);
      videoRef.current.muted = newMuteState;
    }
  };

  // Progress tracking
  const handleProgress = () => {
    if (videoRef.current) {
      const progressPercent =
        (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(progressPercent);
    }
  };

  // Seek functionality
  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (progressBarRef.current && videoRef.current) {
      const progressBar = progressBarRef.current;
      const percent = e.nativeEvent.offsetX / progressBar.offsetWidth;
      const newTime = percent * videoRef.current.duration;

      videoRef.current.currentTime = newTime;
      setProgress(percent * 100);
    }
  };

  // Fullscreen toggle
  const toggleFullScreen = () => {
    if (containerRef.current) {
      if (!isFullScreen) {
        if (containerRef.current.requestFullscreen) {
          containerRef.current.requestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
      setIsFullScreen(!isFullScreen);
    }
  };

  // Automatic controls hide
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    const currentContainer = containerRef.current;

    const hideControls = () => {
      if (isPlaying) {
        timeoutId = setTimeout(() => {
          setShowControls(false);
        }, 3000);
      }
    };

    const resetTimeout = () => {
      clearTimeout(timeoutId);
      setShowControls(true);
      hideControls();
    };

    if (currentContainer) {
      currentContainer.addEventListener("mousemove", resetTimeout);
      hideControls();
    }

    return () => {
      if (currentContainer) {
        currentContainer.removeEventListener("mousemove", resetTimeout);
      }
      clearTimeout(timeoutId);
    };
  }, [isPlaying]);

  // Volume change handler
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      setVolume(newVolume);
      setIsMuted(newVolume === 0);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-black group flex items-center justify-center"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => {
        if (isPlaying) setShowControls(false);
      }}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        src={src}
        // poster={poster}
        className="w-[2300px] h-auto"
        onTimeUpdate={handleProgress}
        onEnded={() => setIsPlaying(false)}
      />

      {/* Custom Controls Overlay */}
      {showControls ? (
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-between p-4">
          {/* Middle Play/Pause */}
          <div className="flex items-center justify-center w-full h-full">
            <button
              onClick={togglePlay}
              className="bg-white bg-opacity-30 hover:bg-opacity-50 p-4 rounded-full"
            >
              {isPlaying ? <Pause size={48} /> : <Play size={48} />}
            </button>
          </div>

          {/* Bottom Controls */}
          <div className="flex flex-col items-center gap-5 text-white">
            {/* Progress Bar */}
            <div
              ref={progressBarRef}
              className="flex-grow h-1 bg-gray-600 cursor-pointer w-full"
              onClick={handleSeek}
            >
              <div
                className="h-full bg-red-600"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex justify-between items-center  w-full">
              <div className="flex items-center space-x-4">
                {/* Play/Pause */}
                <button onClick={togglePlay}>
                  {isPlaying ? <Pause /> : <Play />}
                </button>

                {/* Skip Back */}
                <button onClick={skipBack}>
                  <SkipBack />
                </button>

                {/* Skip Forward */}
                <button onClick={skipForward}>
                  <SkipForward />
                </button>

                {/* Volume */}
                <div className="flex items-center">
                  <button onClick={toggleMute}>
                    {isMuted ? <VolumeX /> : <Volume2 />}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="w-24 ml-2"
                  />
                </div>
              </div>

              {/* title name */}
              <div className="flex justify-center items-center text-white absolute w-full -z-10">
                <h2 className="text-xl font-bold w-full flex justify-center items-center">
                  Video Title
                </h2>
              </div>

              {/* Fullscreen */}
              <div className="flex items-center">
                <button onClick={toggleFullScreen}>
                  {isFullScreen ? <Minimize /> : <Maximize2 />}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
