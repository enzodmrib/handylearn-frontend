// 0. Clone gestures repo DONE
// 0. Install packages DONE
// 1. Create new gesture definition DONE
// 2. Import gesture into handpose DONE


///////// NEW STUFF ADDED USE STATE
import React, { useRef, useState, useEffect } from "react";
///////// NEW STUFF ADDED USE STATE

// import logo from './logo.svg';
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import { drawHand } from "../utils/utilities";

import { loveYouGesture } from "../gestures/LoveYou";
import { thumbsUpGesture } from "../gestures/ThumbsUp";
import { oneGesture } from '../gestures/One'
import { twoGesture } from '../gestures/Two'
import { threeGesture } from '../gestures/Three'
import { okGesture } from '../gestures/Ok'

///////// NEW STUFF IMPORTS
import * as fp from "fingerpose";

export function useHandDetection() {

  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  ///////// NEW STUFF ADDED STATE HOOK
  const [currentGesture, setCurrentGesture] = useState('');
  ///////// NEW STUFF ADDED STATE HOOK

  const runHandpose = async () => {
    const net = await handpose.load();
    console.log("Handpose model loaded.");

    //  Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 1000);
  };

  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
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

      ///////// NEW STUFF ADDED GESTURE HANDLING

      if (hand.length > 0) {
        const GE = new fp.GestureEstimator([
          // fp.Gestures.VictoryGesture,
          thumbsUpGesture,
          loveYouGesture,
          okGesture,
          oneGesture,
          twoGesture,
          threeGesture
        ]);

        const gesture = await GE.estimate(hand[0].landmarks, 4);

        if (gesture.gestures !== undefined && gesture.gestures.length > 0) {

          const scores = gesture.gestures.map(
            (prediction) => prediction.score
          );

          console.log(gesture)

          const maxScore = Math.max.apply(null, scores)

          const maxScoreGestureIndex = scores.indexOf(maxScore);

          if (maxScore > 9.5) {
            setCurrentGesture(gesture.gestures[maxScoreGestureIndex]);
          }
        }
      }

      ///////// NEW STUFF ADDED GESTURE HANDLING

      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");
      drawHand(hand, ctx);
    }
  };

  useEffect(() => { runHandpose() }, []);

  return { webcamRef, canvasRef, currentGesture }

}