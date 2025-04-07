import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "xxx",
  appId: "xxx",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

console.log('Auth exported:', auth); 
