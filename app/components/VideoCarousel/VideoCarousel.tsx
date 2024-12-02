"use client";
import { videos } from "@/app/data/videoCarousel";
import React, { useState, useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { VideoItem } from "./VideoItem";

export const VideoCarousel = () => {
  const videoRefs = useRef<HTMLVideoElement[]>([]);
  const sliderRefs = useRef<HTMLLIElement[]>([]);
  const paginationRefs = useRef<HTMLLIElement[]>([]);
  const progressbarRefs = useRef<HTMLSpanElement[]>([]);
  const [video, setVideo] = useState({
    isPlaying: false,
    isVideoEnd: false,
    videoId: 0,
    isLastVideo: false,
    startPlay: false,
  });

  const { isPlaying, isVideoEnd, videoId, isLastVideo, startPlay } = video;

  const handleVideoProcess = (
    id: number,
    type: "play" | "pause" | "end" | "reset" | "lastVideo"
  ) => {
    setVideo((prev) => {
      const updates = {
        play: { isPlaying: true },
        pause: { isPlaying: false },
        end: { isVideoEnd: true, videoId: id + 1 },
        reset: { isLastVideo: false, videoId: 0 },
        lastVideo: { isLastVideo: true },
      };
      return { ...prev, ...updates[type] };
    });
  };

  // Используем GSAP для анимации контейнера видео
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!videoRefs.current[videoId]) return;

    gsap.to("#slider", {
      x: `-${videoId * 100}%`,
      duration: 1,
      ease: "power2.inOut",
    });

    gsap.to("#video", {
      scrollTrigger: {
        trigger: "#video",
        toggleActions: "restart none none none",
      },
      onComplete: () => {
        setVideo((prev) => ({ ...prev, startPlay: true, isPlaying: true }));
      },
    });
  }, [videoId, isVideoEnd]);

  // Эффект управления текущим видео и прогрессом
  useEffect(() => {
    const videoElement = videoRefs.current[videoId];
    const progressbar = progressbarRefs.current[videoId];
    const pagination = paginationRefs.current[videoId];

    if (!videoElement || !progressbar || !pagination) return;

    const updateProgress = () => {
      const progress =
        (videoElement.currentTime / videos[videoId].videoDuration) * 100;
      gsap.to(progressbar, {
        width: `${progress + 5}%`,
        backgroundColor: "green",
      });
      gsap.to(pagination, { width: "10vw" });
    };

    const handleVideoEnd = () => {
      setTimeout(() => {
        handleVideoProcess(
          videoId,
          videoId === videos.length - 1 ? "lastVideo" : "end"
        );
      }, 300);
    };

    videoElement.onended = handleVideoEnd;

    if (isPlaying) {
      videoElement.play();
      gsap.ticker.add(updateProgress);
    } else {
      videoElement.pause();
      gsap.ticker.remove(updateProgress);
    }

    return () => {
      gsap.ticker.remove(updateProgress);
      videoElement.onended = null;
    };
  }, [videoId, isPlaying]);

  // Эффект синхронизации всех прогресс-баров и видео
  useEffect(() => {
    progressbarRefs.current.forEach((progressBar) => {
      if (progressBar && isPlaying) {
        gsap.to(progressBar, { width: "0%", backgroundColor: "transparent" });
      }
    });

    paginationRefs.current.forEach((pagination) => {
      if (pagination && isPlaying) {
        gsap.to(pagination, { width: "12px" });
      }
    });

  }, [videoId, isPlaying, startPlay]);

  return (
    <section className="flex flex-col justify-center gap-5 w-full">
      <ul className="flex items-center list-none">
        {videos.map((video, index) => (
          <VideoItem
            key={index}
            videoPath={video.videoPath}
            videoAnimationId="video"
            sliderAnimationId="slider"
            index={index}
            videoRefs={videoRefs}
            sliderRefs={sliderRefs}
            currentVideoId={videoId}
            setVideo={setVideo}
          />
        ))}
      </ul>

      <div className="flex items-center justify-center gap-5 relative">
        <ul className="flex items-center justify-center py-5 px-7 bg-black backdrop-blur rounded-full list-none">
          {sliderRefs.current.map((_, index) => (
            <li
              className="mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer overflow-hidden"
              key={index}
              ref={(ref) => {
                if (ref) paginationRefs.current[index] = ref;
              }}
              onClick={() => {
                setVideo((prev) => ({
                  ...prev,
                  videoId: index,
                  isLastVideo: false,
                }));
              }}
            >
              <span
                className="absolute h-full w-full rounded-full"
                ref={(ref) => {
                  if (ref) progressbarRefs.current[index] = ref;
                }}
              ></span>
            </li>
          ))}
        </ul>
        <button
          className="bg-black py-5 px-6 rounded-full text-white"
          onClick={() => {
            isLastVideo
              ? handleVideoProcess(videoId, "reset")
              : isPlaying
              ? handleVideoProcess(videoId, "pause")
              : handleVideoProcess(videoId, "play");
          }}
        >
          {isLastVideo ? "⟳" : isPlaying ? "❚❚" : "▷"}
        </button>
      </div>
    </section>
  );
};
