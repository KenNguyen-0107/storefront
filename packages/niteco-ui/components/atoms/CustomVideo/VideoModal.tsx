"use client";
import React, { useState, useEffect, useRef, useMemo } from "react";
import { IVideoModalProps } from "./CustomVideo.type";
const VideoModal: React.FC<IVideoModalProps> = ({
  isOpen,
  onClose,
  videoUrl,
  title,
  autoplayAsBool = false,
}) => {
  const MODAL_CLASSES = {
    overlay:
      "fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[9999] p-5 box-border animate-fadeIn",
    container:
      "relative w-full max-w-3xl bg-black rounded-lg overflow-hidden animate-slideIn md:max-w-4xl lg:max-w-6xl",
    closeButton:
      "absolute top-2.5 right-2.5 bg-black bg-opacity-70 text-white border-none rounded-full w-10 h-10 flex items-center justify-center cursor-pointer text-2xl z-10 transition-all duration-300 hover:bg-opacity-90 hover:scale-110 focus:outline-2 focus:outline-white focus:outline-offset-2 md:top-4 md:right-4 md:w-11 md:h-11 md:text-3xl",
    videoWrapper: "relative w-full h-0 pb-[56.25%]",
    videoFrame: "absolute top-0 left-0 w-full h-full border-none outline-none",
  } as const;

  const modalRef = useRef<HTMLDivElement>(null);

  // Extract video ID from different video platforms
  const getVideoId = useMemo(() => {
    if (!videoUrl) return null;
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

  const videoContent = useMemo(() => {
    if (!videoUrl) return null;

    const isYouTube =
      videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be");
    const isVimeo = videoUrl.includes("vimeo.com");
    const isMP4 = videoUrl.includes(".mp4") || videoUrl.includes(".mp3");

    if (isYouTube) {
      let embedUrl = videoUrl;
      if (getVideoId) {
        embedUrl = `https://www.youtube.com/embed/${getVideoId}`;
      }

      if (autoplayAsBool) {
        embedUrl += (embedUrl.includes("?") ? "&" : "?") + "autoplay=1&mute=1";
      }

      return (
        <iframe
          src={embedUrl}
          title={title || "Video"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={MODAL_CLASSES.videoFrame}
        />
      );
    } else if (isVimeo) {
      let embedUrl = videoUrl;
      if (getVideoId) {
        embedUrl = `https://player.vimeo.com/video/${getVideoId}`;
      }

      if (autoplayAsBool) {
        embedUrl += (embedUrl.includes("?") ? "&" : "?") + "autoplay=1&muted=1";
      }

      return (
        <iframe
          src={embedUrl}
          title={title || "Video"}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className={MODAL_CLASSES.videoFrame}
        />
      );
    } else if (isMP4) {
      return (
        <video
          src={videoUrl}
          title={title}
          controls
          autoPlay={autoplayAsBool}
          muted={autoplayAsBool}
          className={MODAL_CLASSES.videoFrame}
        />
      );
    }

    return null;
  }, [videoUrl, title, autoplayAsBool]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={MODAL_CLASSES.overlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
    >
      <div
        ref={modalRef}
        className={MODAL_CLASSES.container}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={MODAL_CLASSES.closeButton}
          onClick={onClose}
          aria-label="Close video modal"
        >
          ×
        </button>
        <div className={MODAL_CLASSES.videoWrapper}>{videoContent}</div>
      </div>
    </div>
  );
};

export default VideoModal;
