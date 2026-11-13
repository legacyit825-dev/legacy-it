import React, { useRef, useState, useEffect, useCallback } from "react";
import {
  LuVolume2,
  LuVolumeX,
  LuPlay,
  LuPause,
} from "react-icons/lu";
import companyClip from "../assets/new translation.mp4";

const CompanyVideo = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const hideControlsTimerRef = useRef(null);

  // Auto-play the video reliably on mount, tab refocus, and when scrolled into view
  const attemptPlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    // Must be muted to satisfy browser autoplay policies without prior interaction
    video.muted = isMuted;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // If browser blocked unmuted playback, force mute and retry
          video.muted = true;
          setIsMuted(true);
          video
            .play()
            .then(() => setIsPlaying(true))
            .catch(() => setIsPlaying(false));
        });
    }
  }, [isMuted]);

  // Handle Mount & Visibility changes
  useEffect(() => {
    attemptPlay();

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        attemptPlay();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [attemptPlay]);

  // IntersectionObserver to auto-play whenever visible in viewport
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            attemptPlay();
          } else {
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [attemptPlay]);

  // Explicitly prevent opening in big screen (fullscreen / PiP) on all devices including iOS
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const blockNativeFullscreen = (e) => {
      e.preventDefault();
      if (typeof video.webkitExitFullscreen === "function") {
        video.webkitExitFullscreen();
      }
      if (typeof document.exitFullscreen === "function" && document.fullscreenElement) {
        document.exitFullscreen().catch(() => {});
      }
    };

    video.addEventListener("webkitbeginfullscreen", blockNativeFullscreen);
    video.addEventListener("webkitenterfullscreen", blockNativeFullscreen);

    return () => {
      video.removeEventListener("webkitbeginfullscreen", blockNativeFullscreen);
      video.removeEventListener("webkitenterfullscreen", blockNativeFullscreen);
    };
  }, []);

  // Time update for progress bar
  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    setProgress((video.currentTime / video.duration) * 100);
  };

  // Toggle Play / Pause
  const togglePlay = (e) => {
    if (e) e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  // Toggle Mute / Sound
  const toggleMute = (e) => {
    if (e) e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    const nextMuted = !video.muted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);

    // If unmuting while paused, also start playing
    if (!nextMuted && video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  // Scrub bar interaction
  const handleScrub = (e) => {
    e.stopPropagation();
    const video = videoRef.current;
    const bar = e.currentTarget;
    if (!video || !bar) return;

    const rect = bar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newProgress = Math.max(0, Math.min(1, clickX / rect.width));
    video.currentTime = newProgress * video.duration;
    setProgress(newProgress * 100);
  };

  const handleMouseMove = () => {
    setIsHovered(true);
    if (hideControlsTimerRef.current) clearTimeout(hideControlsTimerRef.current);
    hideControlsTimerRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 2500);
  };

  const handleMouseLeave = () => {
    if (hideControlsTimerRef.current) clearTimeout(hideControlsTimerRef.current);
    setIsHovered(false);
  };

  return (
    <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[400px] mx-auto group">
      {/* Dynamic ambient backlight */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-500/25 via-blue-600/20 to-teal-400/25 rounded-[2rem] blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 -z-10" />

      {/* Main Video Card Container (Fixed proportions, never opens in big screen) */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={togglePlay}
        onDoubleClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        className="relative w-full aspect-[9/16] rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-950 border border-cyan-500/25 hover:border-cyan-400/50 shadow-[0_20px_50px_rgba(0,0,0,0.7)] transition-all duration-500 cursor-pointer select-none"
      >
        {/* Core Video Element - Strictly inline, no fullscreen, no picture-in-picture */}
        <video
          ref={videoRef}
          src={companyClip}
          autoPlay
          muted
          playsInline
          webkit-playsinline="true"
          disablePictureInPicture
          disableRemotePlayback
          controls={false}
          controlsList="nofullscreen nodownload noremoteplayback noplaybackrate"
          loop
          preload="auto"
          onTimeUpdate={handleTimeUpdate}
          onCanPlay={attemptPlay}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onDoubleClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          className="w-full h-full object-cover block pointer-events-none sm:pointer-events-auto"
        />

        {/* Floating Sound Toggle Button (Icon only - Top Right) */}
        <button
          type="button"
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute sound" : "Mute sound"}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-950/75 hover:bg-slate-900 border border-white/20 hover:border-cyan-400/60 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 shadow-lg hover:scale-110 active:scale-95"
        >
          {isMuted ? (
            <LuVolumeX className="w-4 h-4 text-white/90" />
          ) : (
            <LuVolume2 className="w-4 h-4 text-cyan-400" />
          )}
        </button>

        {/* Center Play/Pause Indicator (Shown when paused or on hover) */}
        {(!isPlaying || isHovered) && (
          <div
            className={`absolute inset-0 z-10 flex items-center justify-center pointer-events-none transition-opacity duration-300 ${
              !isPlaying ? "opacity-100" : isHovered ? "opacity-90" : "opacity-0"
            }`}
          >
            <div className="w-14 h-14 rounded-full bg-slate-950/70 border border-cyan-400/40 backdrop-blur-md flex items-center justify-center text-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.35)] transition-transform duration-300">
              {isPlaying ? (
                <LuPause className="w-6 h-6" />
              ) : (
                <LuPlay className="w-6 h-6 ml-0.5" />
              )}
            </div>
          </div>
        )}

        {/* Bottom Sleek Floating Controls Bar (Icon only - No text, No fullscreen toggle) */}
        <div
          onClick={(e) => e.stopPropagation()}
          className={`absolute bottom-0 inset-x-0 z-20 p-3 sm:p-4 bg-gradient-to-t from-black/85 via-black/40 to-transparent transition-opacity duration-300 ${
            isHovered || !isPlaying ? "opacity-100" : "opacity-0 sm:opacity-0"
          }`}
        >
          {/* Progress / Scrub Bar */}
          <div
            onClick={handleScrub}
            className="w-full h-1.5 bg-white/20 hover:h-2 rounded-full cursor-pointer mb-3 relative overflow-hidden transition-all duration-150"
          >
            <div
              className="h-full bg-gradient-to-r from-cyan-400 to-sky-400 rounded-full transition-[width] duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Action Icons: Play/Pause, Mute/Unmute (No Big Screen / Fullscreen Button) */}
          <div className="flex items-center justify-start gap-2">
            <button
              type="button"
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause video" : "Play video"}
              className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all hover:scale-105 active:scale-95"
            >
              {isPlaying ? (
                <LuPause className="w-4 h-4" />
              ) : (
                <LuPlay className="w-4 h-4 ml-0.5" />
              )}
            </button>

            <button
              type="button"
              onClick={toggleMute}
              aria-label={isMuted ? "Unmute audio" : "Mute audio"}
              className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all hover:scale-105 active:scale-95"
            >
              {isMuted ? (
                <LuVolumeX className="w-4 h-4" />
              ) : (
                <LuVolume2 className="w-4 h-4 text-cyan-400" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyVideo;
