// Import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

// Define Gesture Description
export const goodbyeGesture = new GestureDescription('goodbye_gesture'); 

// Thumb 
goodbyeGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0)
goodbyeGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);
goodbyeGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

// Index
goodbyeGesture.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
goodbyeGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
goodbyeGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);
goodbyeGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

// Middle
goodbyeGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
goodbyeGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
goodbyeGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1.0);
goodbyeGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);

// Ring
goodbyeGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
goodbyeGesture.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);
goodbyeGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 1.0);
goodbyeGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);

// Pinky
goodbyeGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
goodbyeGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.75);
goodbyeGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1.0);
goodbyeGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);







