import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase only once
const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };

// const firebaseConfig = {
//   apiKey: "AIzaSyCZg4W-_z1cdHxleKgY_gH-qiUtEwLnZyg",
//   authDomain: "divyeshportfolio-f9569.firebaseapp.com",
//   projectId: "divyeshportfolio-f9569",
//   storageBucket: "divyeshportfolio-f9569.firebasestorage.app",
//   messagingSenderId: "207323848360",
//   appId: "1:207323848360:web:3edb6515e99845b2cc6c9d",
//   measurementId: "G-5ZRDC94DZF"
// };
