// Import dependencies
import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

// Define Gesture Description
export const okGesture = new GestureDescription('ok_gesture');

// Thumb
okGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
okGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);
okGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);
okGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 0.75);
okGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 0.75);

// Index
okGesture.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0)
okGesture.addCurl(Finger.Index, FingerCurl.VerticalUp, 1.0)
okGesture.addCurl(Finger.Index, FingerCurl.DiagonalUpLeft, 1.0)
okGesture.addCurl(Finger.Index, FingerCurl.DiagonalUpRight, 1.0)

for (let finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
  okGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
  okGesture.addDirection(finger, FingerDirection.VerticalUp, 1.0);
  okGesture.addDirection(finger, FingerDirection.DiagonalUpRight, 1.0);
  okGesture.addDirection(finger, FingerDirection.DiagonalUpLeft, 1.0);
}




