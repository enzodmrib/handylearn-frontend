// Import dependencies
import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 

// Define Gesture Description
export const loveYouGesture = new GestureDescription('i_love_you'); 

// Thumb 
loveYouGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl)
loveYouGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalLeft, 1.0);
loveYouGesture.addDirection(Finger.Thumb, FingerDirection.HorizontalRight, 1.0);

// Index
loveYouGesture.addCurl(Finger.Index, FingerCurl.NoCurl)
loveYouGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

// Pinky
loveYouGesture.addCurl(Finger.Pinky, FingerCurl.NoCurl)
loveYouGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);

for(let finger of [Finger.Middle, Finger.Ring]){
    loveYouGesture.addCurl(finger, FingerCurl.FullCurl, 1.0); 
    loveYouGesture.addDirection(finger, FingerDirection.VerticalDown, 1.0);
}




