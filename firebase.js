var firebaseConfig = {
    apiKey: "AIzaSyATm6KUstNr1kuTnBB6f0T-QVxCT4yXvZI",
    authDomain: "general-34630.firebaseapp.com",
    databaseURL: "https://general-34630.firebaseio.com",
    projectId: "general-34630",
    storageBucket: "general-34630.appspot.com",
    messagingSenderId: "115369774170",
    appId: "1:115369774170:web:e7b6c795f8b8ee0d0c5c63",
    measurementId: "G-8YBTXMRDJF",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.auth();
  const emailtxt = document.querySelector(".registerEmail");
const passwordtxt = document.querySelector(".password");
const btnLogOut=document.querySelector('#logout');
const btnlogin = document.querySelector(".btn-1");
const btnsignup = document.querySelector(".btn-2");

// console.log(emailtxt.value);
 const loog= btnlogin.addEventListener("click", (e) => {
  const email = emailtxt.value;
  const pass = passwordtxt.value;
  const auth = firebase.auth();

  const promise = auth.signInWithEmailAndPassword(email, pass);
  promise.catch((e) => console.log(e.message));
     promise.then(()=>{
      emailtxt.value = "";

       passwordtxt.value="";


     })
});

btnsignup.addEventListener("click", (e) => {
  const email = emailtxt.value;
  const pass = passwordtxt.value;
  const auth = firebase.auth();
  const promise = auth.createUserWithEmailAndPassword(email, pass);
  promise.then(() => {
    emailtxt.value = "";
    passwordtxt.value = "";
  })
  promise.catch((e) => console.log(e.message));
 
});

const looog= btnLogOut.addEventListener('click', e=>{

    firebase.auth().signOut();
    
    
    })

firebase.auth().onAuthStateChanged((firebaseUser) => {
  if (firebaseUser) {
    console.log(firebaseUser);
    btnLogOut.classList.remove('hide')
    
  } else {
    console.log("not logged in");
    btnLogOut.classList.add('hide')
    

  }
});


  document.querySelector(".registered").addEventListener("submit", (event) => {
    event.preventDefault();
  })