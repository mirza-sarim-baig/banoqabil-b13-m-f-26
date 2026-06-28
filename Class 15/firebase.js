// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIzppK3ks9P8wlt2kl1FWdhTO9qx116ak",
  authDomain: "banoqabil-wd2.firebaseapp.com",
  projectId: "banoqabil-wd2",
  storageBucket: "banoqabil-wd2.firebasestorage.app",
  messagingSenderId: "594715718835",
  appId: "1:594715718835:web:61e59db92f92eacf762cc6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// console.log("app", app);
const db = getFirestore(app);
// console.log("db", db);

const addUser = async () => {
  const userObj = {
    name: "sarim",
    country: "pakistan",
    city: "karachi",
    postalCode: "100-0001",
    weather: "Sunny",
  };

  const product = {
    name: "iPhone 13",
    price: 999,
    description: "The latest iPhone with A15 Bionic chip",
    color: "Black",
    size: "6.1 inches",
  };

  const userRes = await addDoc(collection(db, "products"), product);
  console.log("userRes", userRes);

  //     const docRef = await addDoc(collection(db, "cities"), {
  //   name: "Tokyo",
  //   country: "Japan"
  // });
};

const getUsers = async () => {
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    console.log("doxc", doc.data());
  });
};

const addUserBtn = document.getElementById("addUserBtn");
addUserBtn.addEventListener("click", addUser);

const getUserBtn = document.getElementById("getUserBtn");
getUserBtn.addEventListener("click", getUsers);
