import firebase from "./firebase";

const firebaseConfig = {
	apiKey: "AIzaSyD8rbHSFpyb06f5bqXc3lVpUf_aeVPsq78",
	authDomain: "netflix-c488b.firebaseapp.com",
	projectId: "netflix-c488b",
	storageBucket: "netflix-c488b.appspot.com",
	messagingSenderId: "862134596203",
	appId: "1:862134596203:web:3aa3ddbad8c1b58157b72e",
	measurementId: "G-RJDR88NW96",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
