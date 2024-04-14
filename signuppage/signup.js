var firebaseConfig = {
    apiKey: "AIzaSyCxiV1imeSnEra41BL9J586NJfYtIFwgM0",
    authDomain: "she-181bf.firebaseapp.com",
    databaseURL: "https://she-181bf-default-rtdb.firebaseio.com",
    projectId: "she-181bf",
    storageBucket: "she-181bf.appspot.com",
    messagingSenderId: "391528342758",
    appId: "1:391528342758:web:8401b7dd12a5d586200727",
    measurementId: "G-MWW8VY6BN3"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize variables
const auth = firebase.auth()
const database = firebase.database()

// Set up our register function
function register () {
    // Get all our input fields
    full_name = document.getElementById('fullname').value
    username = document.getElementById('username').value
    email = document.getElementById('email').value
    password = document.getElementById('password').value

    // Validate input fields
   if (validate_email(email) == false || validate_password(password) == false) {
    alert('Email or Password is Out of Line!!')
    return
    // Don't continue running the code
  }

  if (validate_field(fullname) == false || validate_username(username) == false) {
    alert('Email or Password is Out of Line!!')
    return
    // Don't continue running the code
  }
    auth.createUserWithEmailAndPassword(email, password)
    .then(function() {
      // Declare user variable
      var user = auth.currentUser
  
      // Add this user to Firebase Database
      var database_ref = database.ref()
  
       // Create User data
    var user_data = {
        email : email,
        fullname : fullname,
        username : username,
        password : password,
        last_login : Date.now()
      }
  
       // Push to Firebase Database
    database_ref.child('users/' + user.uid).set(user_data)

    // DOne
    alert('User Created!!')
  })
  .catch(function(error) {
    // Firebase will use this to alert of its errors
    var error_code = error.code
    var error_message = error.message

    alert(error_message)
  })
}



  
   

   

  




