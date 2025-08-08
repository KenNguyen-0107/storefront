"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import { ICustomVideoProps, IVideoModalProps } from "./CustomVideo.type";
import VideoModal from "./VideoModal";
import clsx from "clsx";
import { Dialog } from "../dialog";
const PLAY_BUTTON_CLASSES = {
  button:
    "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[10] bg-transparent border-none cursor-pointer p-2 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:opacity-80 focus:outline-2 focus:outline-white focus:outline-offset-1 active:scale-95",
  svg: "md:w-20 md:h-20 lg:w-24 lg:h-24 pointer-events-none",
} as const;

const VIDEO_CLASSES = {
  container: "relative w-full mx-auto",
  videoWrapper: "relative w-full aspect-video overflow-hidden",
  loadingContainer:
    "absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-100 ",
  loadingText: "text-gray-600 text-sm text-center md:text-base",
  videoFrame: "absolute top-0 left-0 w-full h-full border-none outline-none",
  backgroundImage:
    "absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-[2]",
} as const;

const useIntersectionObserver = (
  ref: React.RefObject<HTMLDivElement>,
  options: IntersectionObserverInit = {},
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
        ...options,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return isIntersecting;
};

const PlayButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onClick();
  };

  return (
    <button
      className={PLAY_BUTTON_CLASSES.button}
      onClick={handleClick}
      aria-label="Play video"
      type="button"
      style={{ minWidth: "80px", minHeight: "80px" }}
    >
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.8"
          d="M73.3332 40.0164C73.3332 58.3795 58.3718 73.3337 39.9998 73.3337C21.6279 73.3337 6.6665 58.3795 6.6665 40.0164C6.6665 21.6212 21.6279 6.66699 39.9998 6.66699C58.3718 6.66699 73.3332 21.6212 73.3332 40.0164Z"
          fill="white"
        />
        <path
          d="M53.3333 40.0165C53.3333 40.859 53.0682 41.7047 52.5379 42.3819C52.4384 42.5147 51.9744 43.0623 51.6098 43.4187L51.411 43.6131C48.6269 46.5649 41.6998 51.004 38.1866 52.4264C38.1866 52.4588 36.0985 53.3045 35.1042 53.3337H34.9716C33.447 53.3337 32.0218 52.4945 31.2926 51.1336C30.8949 50.3851 30.5303 48.2142 30.4972 48.185C30.1989 46.2377 30 43.2567 30 39.9841C30 36.5528 30.1989 33.439 30.5634 31.5273C30.5634 31.4949 30.928 29.7452 31.16 29.1619C31.5246 28.3227 32.1875 27.6066 33.0161 27.153C33.679 26.8322 34.375 26.667 35.1042 26.667C35.8665 26.7026 37.2917 27.1854 37.8551 27.4122C41.5672 28.8379 48.66 33.5038 51.3778 36.3551C51.8419 36.8088 52.339 37.3628 52.4716 37.4892C53.035 38.202 53.3333 39.0769 53.3333 40.0165Z"
          fill="#283270"
        />
      </svg>
    </button>
  );
};

export const CustomVideo: React.FC<ICustomVideoProps> = (props) => {
  const {
    videoUrl,
    title,
    autoplayAsBool = false,
    id,
    loading = "lazy",
    backgroundImageUrl,
    playOnPopup = false,
    className = "",
    ...rest
  } = props || {};

  const [isPlaying, setIsPlaying] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [shouldAutoplayInModal, setShouldAutoplayInModal] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Don't render if no video URL
  if (!videoUrl) {
    return null;
  }

  const isIntersecting = useIntersectionObserver(
    containerRef as React.RefObject<HTMLDivElement>,
    {
      threshold: 0.3,
      rootMargin: "100px",
    },
  );

  // Extract video ID from different video platforms
  const getVideoId = useMemo(() => {
    if (videoUrl.includes("youtube.com/watch?v=")) {
      return videoUrl.split("v=")[1]?.split("&")[0];
    } else if (videoUrl.includes("youtu.be/")) {
      return videoUrl.split("youtu.be/")[1]?.split("?")[0];
    } else if (videoUrl.match(/vimeo\.com\/groups\/[^\/]+\/videos\/(\d+)/)) {
      return videoUrl.match(/vimeo\.com\/groups\/[^\/]+\/videos\/(\d+)/)?.[1];
    } else if (videoUrl.match(/vimeo\.com\/(\d+)/)) {
      return videoUrl.match(/vimeo\.com\/(\d+)/)?.[1];
    } else if (videoUrl.match(/player\.vimeo\.com\/video\/(\d+)/)) {
      return videoUrl.match(/player\.vimeo\.com\/video\/(\d+)/)?.[1];
    }
    return null;
  }, [videoUrl]);

  const videoType = useMemo(() => {
    if (videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be")) {
      return "youtube";
    } else if (videoUrl.includes("vimeo.com")) {
      return "vimeo";
    } else if (videoUrl.includes(".mp4") || videoUrl.includes(".mp3")) {
      return "video";
    }
    return "unknown";
  }, [videoUrl]);

  const embedUrl = useMemo(() => {
    if (videoType === "youtube") {
      let embedUrl = videoUrl;
      if (getVideoId) {
        embedUrl = `https://www.youtube.com/embed/${getVideoId}`;
      }

      if (isPlaying) {
        embedUrl += (embedUrl.includes("?") ? "&" : "?") + "autoplay=1";
      }
      if (autoplayAsBool) {
        embedUrl += (embedUrl.includes("?") ? "&" : "?") + "autoplay=1&mute=1";
      }
      return embedUrl;
    } else if (videoType === "vimeo") {
      let embedUrl = videoUrl;
      if (getVideoId) {
        embedUrl = `https://player.vimeo.com/video/${getVideoId}`;
      }

      if (isPlaying) {
        embedUrl += (embedUrl.includes("?") ? "&" : "?") + "autoplay=1";
      }
      if (autoplayAsBool) {
        embedUrl += (embedUrl.includes("?") ? "&" : "?") + "mute=1";
      }
      return embedUrl;
    }
    return videoUrl;
  }, [videoUrl, videoType, isPlaying, getVideoId]);

  const shouldShowControls = useMemo(() => {
    // Hide play button if:
    // 1. Video is playing inline (not popup mode)
    // 2. Modal is open (popup mode)
    if (isPlaying && !playOnPopup) return false;
    if (isModalOpen && playOnPopup) return false;
    return true;
  }, [playOnPopup, isPlaying, isModalOpen]);

  // Generate thumbnail URL based on video type and ID
  const autoThumbnailUrl = useMemo(() => {
    if (!getVideoId) return null;

    if (videoType === "youtube") {
      // YouTube provides multiple thumbnail options
      return `https://img.youtube.com/vi/${getVideoId}/maxresdefault.jpg`;
    } else if (videoType === "vimeo") {
      return null;
    }
  }, [videoType, getVideoId]);

  // Use provided backgroundImageUrl or fall back to auto-generated thumbnail
  const effectiveBackgroundUrl = backgroundImageUrl || autoThumbnailUrl;

  const shouldShowBackgroundImage = useMemo(() => {
    if (!effectiveBackgroundUrl) return false;
    // Hide background image if video is playing inline OR if modal is open
    if (!playOnPopup && isPlaying) return false;
    if (playOnPopup && isModalOpen) return false;
    return true;
  }, [playOnPopup, isPlaying, isModalOpen, effectiveBackgroundUrl]);

  useEffect(() => {
    if (isIntersecting && autoplayAsBool && !playOnPopup) {
      const timer = setTimeout(() => {
        setIsPlaying(true);
        if (videoRef.current) {
          videoRef.current.play();
        }
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isIntersecting, autoplayAsBool, playOnPopup]);

  const handlePlayClick = () => {
    if (playOnPopup) {
      setShouldAutoplayInModal(true);
      setIsModalOpen(true);
    } else {
      setIsPlaying(true);
      // For MP4 videos, trigger play manually after state update
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play().catch(console.error);
        }
      }, 100);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setShouldAutoplayInModal(false);
  };

  const renderVideoContent = () => {
    if (!isIntersecting) {
      return (
        <div className={VIDEO_CLASSES.loadingContainer}>
          <div className={VIDEO_CLASSES.loadingText}>Loading video...</div>
        </div>
      );
    }

    if (videoType === "youtube") {
      return (
        <iframe
          src={embedUrl}
          title={title || "Video"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={VIDEO_CLASSES.videoFrame}
          loading={loading}
        />
      );
    } else if (videoType === "vimeo") {
      return (
        <iframe
          src={embedUrl}
          title={title || "Video"}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className={VIDEO_CLASSES.videoFrame}
          loading={loading}
        />
      );
    } else if (videoType === "video") {
      return (
        <video
          ref={videoRef}
          src={videoUrl}
          title={title}
          controls={isPlaying}
          muted={!isPlaying || autoplayAsBool}
          className={VIDEO_CLASSES.videoFrame}
          poster={shouldShowBackgroundImage ? backgroundImageUrl : undefined}
          autoPlay={autoplayAsBool || isPlaying || isModalOpen}
          preload={loading === "eager" ? "auto" : "metadata"}
        />
      );
    }

    return null;
  };

  return (
    <>
      <div
        ref={containerRef}
        className={clsx(VIDEO_CLASSES.container, className)}
        id={id}
        data-testid="custom-video"
        {...rest}
      >
        <div className={VIDEO_CLASSES.videoWrapper}>
          {renderVideoContent()}

          {shouldShowBackgroundImage && (
            <div className={VIDEO_CLASSES.backgroundImage}>
              <img
                src={effectiveBackgroundUrl || ""}
                alt={title || "Video thumbnail"}
                loading={loading as "lazy" | "eager"}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {shouldShowControls && <PlayButton onClick={handlePlayClick} />}
        </div>
      </div>
      <Dialog
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        size={"xl2"}
        dialogClasses={{
          backdropOverlay: {
            base: "absolute inset-0 bg-black",
          },
        }}
      >
        <div className="w-[650px] h-[315px]">{renderVideoContent()}</div>
        <button
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10 cursor-pointer"
          onClick={() => setIsModalOpen(false)}
          aria-label="Close image"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </Dialog>
      {/* <VideoModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        videoUrl={videoUrl}
        title={title}
        autoplayAsBool={shouldAutoplayInModal || autoplayAsBool}
      /> */}
    </>
  );
};
