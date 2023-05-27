// Import dependencies
import { Finger, FingerCurl, FingerDirection, GestureDescription } from 'fingerpose';

// Define Gesture Description
export const threeGesture = new GestureDescription('three_gesture');

// Thumb
threeGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
threeGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
threeGesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
threeGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);
threeGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

// Index
threeGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0)
threeGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);
threeGesture.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
threeGesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.75);

// Middle
threeGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0)
threeGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
threeGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.75);
threeGesture.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.75);

// Ring
threeGesture.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0)
threeGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpRight, 1.0);
threeGesture.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);
threeGesture.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);

// Pinky
threeGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0)
threeGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpRight, 1.0);
threeGesture.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);
threeGesture.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.75);



// [
//   [
//       "Thumb",
//       "No Curl",
//       "Diagonal Up Right"
//   ],
//   [
//       "Index",
//       "No Curl",
//       "Diagonal Up Right"
//   ],
//   [
//       "Middle",
//       "No Curl",
//       "Vertical Up"
//   ],
//   [
//       "Ring",
//       "No Curl",
//       "Vertical Up"
//   ],
//   [
//       "Pinky",
//       "Full Curl",
//       "Diagonal Up Left"
//   ]
// ]