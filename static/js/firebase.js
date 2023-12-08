import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
  apiKey: "AIzaSyD84NJ1oN0pJ2NW7gGBSEofTlHYCwCvo84",
  authDomain: "maltiomics.firebaseapp.com",
  projectId: "maltiomics",
  storageBucket: "maltiomics.appspot.com",
  messagingSenderId: "1039312535834",
  appId: "1:1039312535834:web:781d07817b94c5e985aca3",
  measurementId: "G-TQWL80D1KT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
