import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCqGychV_05_qQT11Aeh8MGX888jo_HBm0",
  authDomain: "catch-of-the-day-spn1.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-spn1.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp }

export default base;
