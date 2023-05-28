// Import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

// Define Gesture Description
export const closeGesture = new GestureDescription('close_gesture'); 

// Thumb 
closeGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0)
closeGesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0)
closeGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
closeGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);
closeGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

// Index
closeGesture.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
closeGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
closeGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);
closeGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

// Middle
closeGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
closeGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
closeGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1.0);
closeGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);

// Ring
closeGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
closeGesture.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);
closeGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 1.0);
closeGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);

// Pinky
closeGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
closeGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);
closeGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1.0);
closeGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);







