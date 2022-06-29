// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyC-_RwJSU5q66Qp5LrYQy3Y6W912Hr-iLc",
//   authDomain: "manufacturer-website-2f827.firebaseapp.com",
//   projectId: "manufacturer-website-2f827",
//   storageBucket: "manufacturer-website-2f827.appspot.com",
//   messagingSenderId: "448088903353",
//   appId: "1:448088903353:web:02ae86cd951462f0959568"
// };


// const app = initializeApp(firebaseConfig);

// const auth = getAuth(app)

// export default auth




// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHRMG2C6fdMVf4gOA9p_H9XeJBguRJbAI",
  authDomain: "bike-parts-302d3.firebaseapp.com",
  projectId: "bike-parts-302d3",
  storageBucket: "bike-parts-302d3.appspot.com",
  messagingSenderId: "515313496494",
  appId: "1:515313496494:web:6817c0d59486e871ee583f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth