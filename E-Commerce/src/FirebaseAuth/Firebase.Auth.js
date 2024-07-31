
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// import { getStorage } from "firebase/storage";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBj1B0KFL9TSNifSPMSOf5Ef6cVUWTst3Q",
  authDomain: "maxshop-cc5a1.firebaseapp.com",
  projectId: "maxshop-cc5a1",
  storageBucket: "maxshop-cc5a1.appspot.com",
  messagingSenderId: "233282721466",
  appId: "1:233282721466:web:286056eaedcac67ade5483"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)
export{app,auth,db}