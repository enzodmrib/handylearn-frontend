// Import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

// Define Gesture Description
export const iLoveYouGesture = new GestureDescription('i_love_you_gesture'); 

// Thumb 
iLoveYouGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl)
iLoveYouGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0);
iLoveYouGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0);
iLoveYouGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);
iLoveYouGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

// Index
iLoveYouGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
iLoveYouGesture.addCurl(Finger.Index, FingerCurl.FullCurl, -1.0);
iLoveYouGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
iLoveYouGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
iLoveYouGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);

// Pinky
iLoveYouGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
iLoveYouGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);
iLoveYouGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
iLoveYouGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);

for(let finger of [Finger.Middle, Finger.Ring]){
    iLoveYouGesture.addCurl(finger, FingerCurl.FullCurl, 1.0); 
    iLoveYouGesture.addDirection(finger, FingerDirection.VerticalUp, 1.0);
}




