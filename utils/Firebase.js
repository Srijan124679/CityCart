import {getAuth,GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "loginshoppingcart.firebaseapp.com",
  projectId: "loginshoppingcart",
  storageBucket: "loginshoppingcart.firebasestorage.app",
  messagingSenderId: "718216177564",
  appId: "1:718216177564:web:db5051ae5051d311154a59"
};


const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
const provider =  new GoogleAuthProvider()
export{auth,provider}
