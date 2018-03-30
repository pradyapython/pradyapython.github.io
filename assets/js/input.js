//current energy consumption update picture

function writeUserData(limit) {
  // firebase.database().ref("customer").orderByChild("500898").equalTo("limit").once("value", function(snapshot) {
firebase.database().ref("customer").child("500898").child("limit")
  // snapshot.forEach(function(user) {
  // user.ref.child("NewKey").update(30);
  // });
  firebase.database().ref("customer").child("500898").child("limit").update({value:limit});
};
// };

$( document ).ready(function() {
    console.log("starting document!!!!");
    // Initialize Firebase
    console.log("Initialize Firebase");
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyDYchn_prkBrVKvJ9P7FQ0dUK8F8w0jVkg",
      authDomain: "dataforconsumptionnotification.firebaseapp.com",
      databaseURL: "https://dataforconsumptionnotification.firebaseio.com",
      projectId: "dataforconsumptionnotification",
      storageBucket: "dataforconsumptionnotification.appspot.com",
      messagingSenderId: "605637736930"
    };
    firebase.initializeApp(config);

    var valueInput = document.getElementById('limitvalue');
    document.querySelector('form.mbr-form').addEventListener('submit',function(e){
      e.preventDefault();
      writeUserData(valueInput.value);
      console.log(valueInput.value);
    });

});
