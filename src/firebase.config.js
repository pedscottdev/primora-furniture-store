import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyC7njdwrcszYEhv-C786HTM5Gzf_kdNoVY",
  authDomain: "primora-f8ec1.firebaseapp.com",
  projectId: "primora-f8ec1",
  storageBucket: "primora-f8ec1.appspot.com",
  messagingSenderId: "283845941170",
  appId: "1:283845941170:web:b21ec9ddcc1e33beccb6ab",
  measurementId: "G-7237FYZ7NJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app); 

export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;