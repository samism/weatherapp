import firebase from 'firebase/app';
import 'firebase/auth';

//acceptable to expose

const config = {
  apiKey: 'AIzaSyC0zV7R1ulzyKd0-pERkSPZtFBUFP399MQ',
  authDomain: 'ama-weather-app.firebaseapp.com',
  databaseURL: 'https://ama-weather-app.firebaseio.com',
  projectId: 'ama-weather-app',
  storageBucket: 'ama-weather-app.appspot.com',
  messagingSenderId: '15296053085'
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const Auth = firebase.auth();

export { Auth };
