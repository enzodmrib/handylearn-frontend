// Import dependencies
import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

// Define Gesture Description
export const thumbsUpGesture = new GestureDescription('thumbs_up');

// Thumb 
thumbsUpGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl)
thumbsUpGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0); // perfect
thumbsUpGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.75); // good enough
thumbsUpGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.75); // good enough

// Index
thumbsUpGesture.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
thumbsUpGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
thumbsUpGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);

// Middle
thumbsUpGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
thumbsUpGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 1.0);
thumbsUpGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 1.0);

// Ring
thumbsUpGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
thumbsUpGesture.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 1.0);
thumbsUpGesture.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 1.0);

// Pinky
thumbsUpGesture.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
thumbsUpGesture.addDirection(Finger.Middle, FingerDirection.HorizontalLeft, 1.0);
thumbsUpGesture.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 1.0);


