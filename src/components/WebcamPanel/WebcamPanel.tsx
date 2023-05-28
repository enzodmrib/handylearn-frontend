"use client"

import { useState, useEffect } from "react";
import Webcam from 'react-webcam'
import { Button } from "../Button/Button";
import { HiOutlineVideoCameraSlash, HiOutlineVideoCamera } from 'react-icons/hi2'
import { useHandDetection } from "@/hand-detection/hooks/useHandDetection"

export function WebcamPanel() {
  const { webcamRef, canvasRef, currentGesture } = useHandDetection();

  const [isWebcamVisible, setIsWebcamVisible] = useState(true)

  useEffect(() => {
    if (currentGesture === 'close_gesture' && isWebcamVisible) {
      document.getElementById('webcam-visible')?.click()
    } else if (currentGesture === 'open_gesture' && !isWebcamVisible) {
      document.getElementById('webcam-visible')?.click()
    }
  }, [currentGesture])

  return (
    <div className="absolute top-6 right-4 flex gap-1">
      <Button
        id='webcam-visible'
        title={isWebcamVisible ? 'Fechar Webcam' : 'Abrir Webcam'}
        icon={isWebcamVisible ? <HiOutlineVideoCameraSlash size={24} /> : <HiOutlineVideoCamera size={24} />}
        onClick={() => setIsWebcamVisible(!isWebcamVisible)}
        gestureBadgeEmoji={isWebcamVisible ? "✊" : "✋"}
        className="rounded-lg p-4 bg-zinc-900 text-zinc-200 h-10 border-zinc-700 border"
      />
      {/* {isWebcamVisible && ( */}
      <div className={`relative p-2 rounded-lg bg-zinc-900 border-zinc-700 border ${!isWebcamVisible && 'h-0 w-0 p-0'}`}>
        <Webcam ref={webcamRef} className={`w-[320px] h-[240px] z-10 rounded-lg border-zinc-700 border ${!isWebcamVisible && 'invisible h-0 w-0 p-0'}`} />
        <canvas ref={canvasRef} className={`absolute w-[320px] h-[240px] z-10 top-0 left-0 ${!isWebcamVisible && 'invisible h-0 w-0 p-0'}`}></canvas>
      </div>
      {/* )
      } */}
    </div>
  )
}