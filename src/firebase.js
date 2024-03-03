import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyAgg70R0Xjl2nkIiOI5g6H_zmKQKC5i87g",
    authDomain: "info442group3.firebaseapp.com",
    projectId: "info442group3",
    storageBucket: "info442group3.appspot.com",
    messagingSenderId: "202878051169",
    appId: "1:202878051169:web:3dfc7afd939d8c1f211b20"
  };

  const app = initializeApp(firebaseConfig);
  export {app};