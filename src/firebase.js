import * as firebase from "firebase/app";
import "firebase/firestore";

const firebaseAppConfig = {
    apiKey: "AIzaSyDzxzDXmx7yENCjUGn4XDNpHUJFOTZBNHA",
    authDomain: "to-do-list-93832.firebaseapp.com",
    databaseURL: "https://to-do-list-93832.firebaseio.com",
    projectId: "to-do-list-93832",
    storageBucket: "to-do-list-93832.appspot.com",
    messagingSenderId: "929796663186",
    appId: "1:929796663186:web:86d105c8ac06f8d750c34b",
    measurementId: "G-4S5YB4FJF2"
};

firebase.initializeApp(firebaseAppConfig);

export const firestore = firebase.firestore();
