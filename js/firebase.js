const firebaseConfig = {
  apiKey: "AIzaSyAEM_8C9vVP995pu6ZQ6awu-3aN_cXsWzw",
  authDomain: "instagram-165b4.firebaseapp.com",
  projectId: "instagram-165b4",
  storageBucket: "instagram-165b4.appspot.com",
  messagingSenderId: "960767282245",
  appId: "1:960767282245:web:f98ddb46baa6f56063672c",
  measurementId: "G-4BWCQPB0M5",
};
firebase.initializeApp(firebaseConfig);

var provider = new firebase.auth.GoogleAuthProvider();

async function loginGoogle() {
  const response = await firebase.auth().signInWithPopup(provider);
  console.log(response.user.email);
  const user = {
    fullname: response.user.displayName,
    email: response.user.email,
    avatar: response.user.photoURL.replaceAll("=s96-c", ""),
  };
  console.log(user);
  window.location.href = "/index.html";
}
