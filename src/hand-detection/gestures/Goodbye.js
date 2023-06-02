// Import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

// Define Gesture Description
export const goodbyeGesture = new GestureDescription('goodbye_gesture'); 

// Thumb 
goodbyeGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0)
goodbyeGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);
goodbyeGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);
goodbyeGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);

// Index
goodbyeGesture.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
goodbyeGesture.addCurl(Finger.Index, FingerCurl.NoCurl, -1.0);
goodbyeGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);
goodbyeGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
goodbyeGesture.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);
goodbyeGesture.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);

// Middle
goodbyeGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
goodbyeGesture.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 1.0);
goodbyeGesture.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 1.0);

// Ring
goodbyeGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
goodbyeGesture.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 1.0);
goodbyeGesture.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 1.0);

// Pinky
goodbyeGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
goodbyeGesture.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 1.0);
goodbyeGesture.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 1.0);
goodbyeGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalDownRight, 1.0);
goodbyeGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalDownLeft, 1.0);







