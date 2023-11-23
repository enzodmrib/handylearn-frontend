"use client"

// 0. Clone gestures repo DONE
// 0. Install packages DONE
// 1. Create new gesture definition DONE
// 2. Import gesture into handpose DONE


///////// NEW STUFF ADDED USE STATE
import {
  useRef,
  useState,
  useEffect,
  createContext,
  useContext,
  RefObject,
  ReactNode
} from "react";
///////// NEW STUFF ADDED USE STATE

// import logo from './logo.svg';
import * as tf from "@tensorflow/tfjs-core";
import '@tensorflow/tfjs-backend-webgl';
import * as handpose from "@tensorflow-models/handpose";
import { drawHand } from "../utils/utilities";

import { iLoveYouGesture } from "../gestures/ILoveYou";
import { goodbyeGesture } from "../gestures/Goodbye";
import { openGesture } from '../gestures/Open'
import { closeGesture } from '../gestures/Close'
import { thumbsUpGesture } from "../gestures/ThumbsUp";
import { oneGesture } from '../gestures/One'
import { twoGesture } from '../gestures/Two'
import { threeGesture } from '../gestures/Three'
import { okGesture } from '../gestures/Ok'
import { previousGesture } from '../gestures/Previous'
import { nextGesture } from '../gestures/Next'

import Webcam from 'react-webcam'
///////// NEW STUFF IMPORTS
//@ts-ignore
import * as fp from "fingerpose";

interface HandDetectionContextProps {
  children: ReactNode
}

// Gotta create a context for this 
interface HandDetectionContextData {
  webcamRef: RefObject<Webcam>
  canvasRef: RefObject<HTMLCanvasElement>
  currentGesture: string | null
  setCurrentGesture: (gesture: string | null) => void
  isLoadingHandpose: boolean
}

const HandDetectionContext = createContext({} as HandDetectionContextData);

export function HandDetectionProvider({ children }: HandDetectionContextProps) {
  const webcamRef = useRef<Webcam>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [isLoadingHandpose, setIsLoadingHandpose] = useState(true)
  const [currentGesture, setCurrentGesture] = useState<string | null>(null);

  const runHandpose = async () => {
    const net = await handpose.load();

    if (net) {
      console.log('Handpose model loaded')
      setIsLoadingHandpose(false)
    }

    //  Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 1500);
  };

  const detect = async (net: any) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video &&
      webcamRef.current.video.readyState === 4 &&
      canvasRef.current
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Make Detections
      const hand = await net.estimateHands(video);

      if (hand.length > 0) {
        const GE = new fp.GestureEstimator([
          thumbsUpGesture,
          iLoveYouGesture,
          goodbyeGesture,
          openGesture,
          closeGesture,
          okGesture,
          oneGesture,
          twoGesture,
          threeGesture,
          previousGesture,
          nextGesture
        ]);

        const gesture = await GE.estimate(hand[0].landmarks, 4);

        if (gesture.gestures !== undefined && gesture.gestures.length > 0) {

          const scores = gesture.gestures.map(
            (prediction: any) => prediction.score
          );

          const maxScore = Math.max.apply(null, scores)

          const maxScoreGestureIndex = scores.indexOf(maxScore);

          if (maxScore > 9.5) {
            setCurrentGesture(gesture.gestures[maxScoreGestureIndex].name);
          }
        }
      }

      // Draw mesh
      const ctx = canvasRef.current?.getContext("2d");
      drawHand(hand, ctx);
    }
  };

  useEffect(() => { runHandpose() }, []);

  return (
    <HandDetectionContext.Provider
      value={{
        webcamRef, canvasRef, currentGesture, setCurrentGesture, isLoadingHandpose
      }}
    >
      {children}
    </HandDetectionContext.Provider>
  )
}

export function useHandDetection() {
  return useContext(HandDetectionContext)
}