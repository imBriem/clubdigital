import  firebase from 'firebase';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/auth';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_DATABASEURL,
    projectId: process.env.REACT_APP_PROJECTID,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    appId: process.env.REACT_APP_APPID,
    measurementId: process.env.REACT_APP_MEASUREMENTID
});
const auth = firebase.auth();
const db = firebase.firestore();

export const firebaseStorage = firebase.storage();


export {auth};
export {db};


