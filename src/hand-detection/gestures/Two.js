// Import dependencies
import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

// Define Gesture Description
export const twoGesture = new GestureDescription('two_gesture');

// Thumb
twoGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
twoGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
twoGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);
twoGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

// Index
twoGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)
twoGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.85);
twoGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);
twoGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

// Middle
twoGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0)
twoGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1.0);
twoGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.85);
twoGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.85);

// Ring
twoGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0)
twoGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 1.0);
twoGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);
twoGesture.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);

// Pinky
twoGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0)
twoGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1.0);
twoGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);
twoGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.75);



