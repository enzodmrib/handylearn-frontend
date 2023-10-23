"use client"

import { useState, useEffect } from "react";
import Webcam from 'react-webcam'
import { Button } from "../Button";
import { HiOutlineVideoCameraSlash, HiOutlineVideoCamera } from 'react-icons/hi2'
import { useHandDetection } from "@/hand-detection/hooks/useHandDetection"
import { useLocalStorage } from "@/hooks/useLocalStorage";

export function WebcamPanel() {
  const { webcamRef, canvasRef, currentGesture } = useHandDetection();

  const [isWebcamVisible, setIsWebcamVisible] = useLocalStorage('handylearn-webcam-panel-visible-1.0.0',true)

  useEffect(() => {
    if (currentGesture === 'close_gesture' && isWebcamVisible) {
      document.getElementById('webcam-visible')?.click()
    } else if (currentGesture === 'open_gesture' && !isWebcamVisible) {
      document.getElementById('webcam-visible')?.click()
    }
  }, [currentGesture])

  return (
    <div className="absolute bottom-6 left-4 flex gap-1 z-20">
      {/* {isWebcamVisible && ( */}
      <div className={!isWebcamVisible ? 'h-0 w-0 p-0' : 'relative p-2 rounded-lg bg-zinc-950 border border-zinc-400'}>
        <Webcam ref={webcamRef} className={!isWebcamVisible ? 'invisible h-0 w-0 p-0' : 'w-[320px] h-[240px] rounded-lg'} />
        <canvas ref={canvasRef} className={!isWebcamVisible ? 'invisible relative h-0 w-0 p-0' : 'absolute w-[320px] h-[240px] top-2 left-2'}></canvas>
      </div>
      {/* )
      } */}

      <Button
        id='webcam-visible'
        title={isWebcamVisible ? 'Fechar Webcam' : 'Abrir Webcam'}
        icon={isWebcamVisible ? <HiOutlineVideoCameraSlash size={24} /> : <HiOutlineVideoCamera size={24} />}
        onClick={() => setIsWebcamVisible(!isWebcamVisible)}
        gestureBadgeEmoji={isWebcamVisible ? "✊" : "✋"}
        className="rounded-lg p-4 bg-zinc-950 text-zinc-200 h-10 border border-zinc-400"
      />
    </div>
  )
}