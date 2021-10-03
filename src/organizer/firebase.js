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
const messaging = window.firebase.messaging();

function IntitalizeFireBaseMessaging() {
  messaging
    .requestPermission()
    .then(function () {
      console.log("Notification Permission");
      return messaging.getToken();
    })
    .then(function (token) {
      console.log(token);
    })
    .catch(function (reason) {
      console.log(reason);
    });
}

messaging.onMessage(function (payload) {
  console.log(payload);
  const notificationOption = {
    body: payload.notification.body,
    icon: payload.notification.icon,
  };

  if (Notification.permission === "granted") {
    var notification = new Notification(
      payload.notification.title,
      notificationOption
    );
    console.log(messaging.getToken());
    notification.onclick = function (ev) {
      ev.preventDefault();
      window.open(payload.notification.click_action, "_blank");
      notification.close();
    };
  }
});
messaging.onTokenRefresh(function () {
  messaging
    .getToken()
    .then(function (newtoken) {
      console.log("New Token : " + newtoken);
    })
    .catch(function (reason) {
      console.log(reason);
    });
});

export default IntitalizeFireBaseMessaging;
