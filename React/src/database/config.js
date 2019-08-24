import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBI38ayXOgiVjTAimtkYztCOBeQe88FeXU",
    authDomain: "card-slider-4d81c.firebaseapp.com",
    databaseURL: "https://card-slider-4d81c.firebaseio.com",
    projectId: "card-slider-4d81c",
    storageBucket: "",
    messagingSenderId: "995220976777",
    appId: "1:995220976777:web:85a4b505bef7f359"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const database = firebase.database()
  export {database}
