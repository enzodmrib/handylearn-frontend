// Import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

// Define Gesture Description
export const nextGesture = new GestureDescription('next_gesture'); 

// Thumb 
nextGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0)
nextGesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0)
nextGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0)
nextGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0);

// Index
nextGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
nextGesture.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);
nextGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.75);
nextGesture.addDirection(Finger.Index, FingerDirection.DiagonalDownLeft, 0.75);

// Middle
nextGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
nextGesture.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 1.0);
nextGesture.addDirection(Finger.Middle, FingerDirection.DiagonalDownLeft, 1.0);

// Ring
nextGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
nextGesture.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 1.0);
nextGesture.addDirection(Finger.Ring, FingerDirection.DiagonalDownLeft, 1.0);

// Pinky
nextGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
nextGesture.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 1.0);
nextGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalDownLeft, 1.0);







