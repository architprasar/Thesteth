const config = {
  apiKey: "AIzaSyDgi6FVp9BFb3wlkt3ZPUUt2OQM7BsXOYo",
  authDomain: "thesteth-ddc2f.firebaseapp.com",
  projectId: "thesteth-ddc2f",
  storageBucket: "thesteth-ddc2f.appspot.com",
  messagingSenderId: "561822156916",
  appId: "1:561822156916:web:139f306711ff7564c32921",
  measurementId: "G-TQR2F07DFE",
};
window.firebase.initializeApp(config);

function IntitalizeFireBaseMessaging() {
  const messaging = window.firebase.messaging();
  var token = messaging
    .requestPermission()
    .then(function () {
      return messaging.getToken();
    })
    .then(function (token) {
      console.log(token);
    })
    .catch(function (reason) {
      console.log(reason);
    });
}

export default IntitalizeFireBaseMessaging;
