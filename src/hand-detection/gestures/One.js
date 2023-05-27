// Import dependencies
import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

// Define Gesture Description
export const oneGesture = new GestureDescription('one_gesture');

// Thumb
oneGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
oneGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
oneGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);
oneGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

// Index
oneGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)
oneGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
oneGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.75);
oneGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.75);

// Middle
oneGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0)
oneGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1.0);
oneGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);
oneGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);

// Ring
oneGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0)
oneGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 1.0);
oneGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);
oneGesture.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);

// Pinky
oneGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0)
oneGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1.0);
oneGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);
oneGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.75);



