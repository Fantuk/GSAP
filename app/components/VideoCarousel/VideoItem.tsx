"use client";
import { useEffect, useState } from "react";

interface VideoState {
  isPlaying: boolean;
  isVideoEnd: boolean;
  videoId: number;
  isLastVideo: boolean;
  startPlay: boolean;
}

interface VideoSlideProps {
  videoPath: string;
  index: number;
  videoAnimationId: string;
  sliderAnimationId: string;
  videoRefs: React.MutableRefObject<HTMLVideoElement[]>;
  sliderRefs: React.MutableRefObject<HTMLLIElement[]>;
  currentVideoId: number;
  setVideo: React.Dispatch<React.SetStateAction<VideoState>>;
}

export const VideoItem = ({
  videoPath,
  index,
  videoAnimationId,
  sliderAnimationId,
  videoRefs,
  sliderRefs,
  currentVideoId,
  setVideo,
}: VideoSlideProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!sliderRefs.current[index]) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        rootMargin: `0px 0px ${sliderRefs.current[index].offsetWidth}px 0px`,
        root: null,
      }
    );
    observer.observe(sliderRefs.current[index]);
    return () => observer.disconnect();
  }, [index, sliderRefs, isVisible]);

  useEffect(() => {
    const videoElement = videoRefs.current[index];
    if (videoElement) {
      if (currentVideoId === index && isVisible) {
        videoElement.play();
      } else {
        videoElement.pause();
        videoElement.currentTime = 0;
      }
    }
  }, [currentVideoId, index, isVisible, videoRefs]);
  

  return (
    <li
      className="flex items-center justify-center rounded-3xl overflow-hidden bg-black sm:w-[70vw] w-[88vw] md:h-[70vh] sm:h-[50vh] h-[35vh] sm:mr-20 mr-10 shrink-0"
      ref={(ref) => {
        if (ref) sliderRefs.current[index] = ref;
      }}
      id={sliderAnimationId}
    >
      <video
        src={videoPath}
        playsInline
        muted
        preload={isVisible ? "auto" : "none"}
        id={videoAnimationId}
        className="w-full h-full"
        ref={(ref) => {
          if (ref) videoRefs.current[index] = ref;
        }}
        onPlay={() => setVideo((prev) => ({ ...prev, isPlaying: true }))}
      />
    </li>
  );
};
