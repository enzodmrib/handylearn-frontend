// Import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

// Define Gesture Description
export const previousGesture = new GestureDescription('previous_gesture'); 

// Thumb 
previousGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0)
previousGesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0)
previousGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0)
previousGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0);

// Index
previousGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
previousGesture.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);
previousGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.75);
previousGesture.addDirection(Finger.Index, FingerDirection.DiagonalDownRight, 0.75);

// Middle
previousGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
previousGesture.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 1.0);
previousGesture.addDirection(Finger.Middle, FingerDirection.DiagonalDownRight, 1.0);

// Ring
previousGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
previousGesture.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 1.0);
previousGesture.addDirection(Finger.Ring, FingerDirection.DiagonalDownRight, 1.0);

// Pinky
previousGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
previousGesture.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 1.0);
previousGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalDownRight, 1.0);







