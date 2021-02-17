import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAzJIYt1UyJV46nSG8MlTO_KtxRhuKQ3p8",
    authDomain: "netflix-app-156027.firebaseapp.com",
    projectId: "netflix-app-156027",
    storageBucket: "netflix-app-156027.appspot.com",
    messagingSenderId: "902644664920",
    appId: "1:902644664920:web:a10e7121f97cbb5f01582d"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export { auth };
  export default db;