var UserRef;

function initializeFirebase() {
    firebase.initializeApp({
        apiKey: "AIzaSyAbZc5j8B5SEBoxUzFcdLd-PvjFiT9M5sk",
        authDomain: "savetime-28c9f.firebaseapp.com",
        databaseURL: "https://savetime-28c9f.firebaseio.com",
        projectId: "savetime-28c9f",
        storageBucket: "savetime-28c9f.appspot.com",
        messagingSenderId: "878003838274"
    });

    UserRef = firebase.database().ref("Users");
    //messageRef = firebase.database().ref("messages");
    //storageRef = firebase.storage().ref();
};

initializeFirebase();