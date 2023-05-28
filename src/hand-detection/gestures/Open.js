// Import dependencies
import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

// Define Gesture Description
export const openGesture = new GestureDescription('open_gesture');

// Thumb 
openGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0)
openGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);

// Index
openGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)
openGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

// Middle
openGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0)
openGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);

// Ring
openGesture.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0)
openGesture.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);

// Pinky
openGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0)
openGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);










