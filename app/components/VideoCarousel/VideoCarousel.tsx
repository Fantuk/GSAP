"use client";
import { videos } from "@/app/data/videoCarousel";
import React, { useState, useEffect, useRef, SyntheticEvent } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const VideoCarousel = () => {
  const videoRefs = useRef<HTMLVideoElement[]>([]);
  const paginationRefs = useRef<HTMLDivElement[]>([]);
  const progressbarRefs = useRef<HTMLSpanElement[]>([]);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [video, setVideo] = useState({
    isPlaying: false,
    isVideoEnd: false,
    videoId: 0,
    isLastVideo: false,
    startPlay: false,
  });

  const { isPlaying, isVideoEnd, videoId, isLastVideo, startPlay } = video;

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#slider", {
      x: `-${videoId * 100}%`,
      duration: 2,
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

  useEffect(() => {
    let currentProgress = 0;
    let progressbar = progressbarRefs.current;
    let pagination = paginationRefs.current;

    if (progressbar[videoId]) {
      let animation = gsap.to(progressbar[videoId], {
        onUpdate: () => {
          const progress = Math.ceil(animation.progress() * 100);

          if (progress != currentProgress) {
            currentProgress = progress;

            gsap.to(pagination[videoId], {
              width: "10vw",
            });

            gsap.to(progressbar[videoId], {
              width: `${currentProgress + 2}%`,
              backgroundColor: "green",
            });
          }
        },

        onComplete: () => {
          if (isPlaying) {
            gsap.to(pagination[videoId], {
              width: "12px",
            });

            gsap.to(progressbar[videoId], {
              width: "0%",
              backgroundColor: "transparent",
            });
          }
        },
      });

      if (videoId == 0) {
        animation.restart();
      }

      const animationUpdate = () => {
        animation.progress(
          videoRefs.current[videoId].currentTime / videos[videoId].videoDuration
        );
      };

      if (isPlaying) {
        gsap.ticker.add(animationUpdate);
      } else {
        gsap.ticker.remove(animationUpdate);
      }

      return () => gsap.ticker.remove(animationUpdate);
    }
  }, [videoId, isPlaying, startPlay]);

  useEffect(() => {
    videoRefs.current.map((videoEl, index) => {
      if (index !== videoId && videoEl) {
        videoEl.pause();
        videoEl.currentTime = 0;
        gsap.set(progressbarRefs.current[index], { width: "0%" });
      }
    });

    if (videoRefs.current[videoId] && startPlay) {
      isPlaying ? videoRefs.current[videoId].play() : videoRefs.current[videoId].pause();
    }
  }, [videoId, isPlaying, startPlay]);

  const handleVideoProcess = (id: number, type: string) => {
    switch (type) {
      case "play":
        setVideo((prev) => ({ ...prev, isPlaying: true, startPlay: true }));
        break;

      case "end":
        setVideo((prev) => ({
          ...prev,
          isVideoEnd: true,
          videoId: id + 1,
        }));
        break;

      case "reset":
        setVideo((prev) => ({ ...prev, isLastVideo: false, videoId: 0 }));
        break;

      case "pause":
        setVideo((prev) => ({ ...prev, isPlaying: false }));
        break;

      case "lastVideo":
        setVideo((prev) => ({ ...prev, isLastVideo: true }));
        break;

      default:
        return video;
    }
  };

  return (
    <section className="flex flex-col justify-center gap-5 w-full">
      <div className="flex items-center">
        {videos.map((video, index) => (
          <div key={index} className="sm:pr-20 pr-10 shrink-0" id="slider">
            <div className="sm:w-[70vw] w-[88vw] md:h-[70vh] sm:h-[50vh] h-[35vh]">
              <div className="w-full h-full flex items-center justify-center rounded-3xl overflow-hidden bg-black">
                <video
                  src={video.videoPath}
                  playsInline={true}
                  muted
                  preload="auto"
                  className="w-full h-full"
                  id="video"
                  onEnded={() => {
                    setTimeout(() => {
                      handleVideoProcess(
                        index,
                        index == videos.length - 1 ? "lastVideo" : "end"
                      );
                    }, 1000);
                  }}
                  ref={(ref) => {
                    if (ref) videoRefs.current[index] = ref;
                  }}
                  onPlay={() =>
                    setVideo((prev) => ({ ...prev, isPlaying: true }))
                  }
                ></video>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-5 relative">
        <div className="flex items-center justify-center py-5 px-7 bg-black backdrop-blur rounded-full">
          {videoRefs.current.map((_, index) => (
            <div
              className="mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer overflow-hidden"
              key={index}
              ref={(ref) => {
                if (ref) paginationRefs.current[index] = ref;
              }}
              onClick={() => {
                setVideo((prev) => ({ ...prev, videoId: index }));
              }}
            >
              <span
                className="absolute h-full w-full rounded-full"
                ref={(ref) => {
                  if (ref) progressbarRefs.current[index] = ref;
                }}
              ></span>
            </div>
          ))}
        </div>
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
