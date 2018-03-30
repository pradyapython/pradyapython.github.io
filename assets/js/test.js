//current energy consumption update picture
function update_member(status) {
    $("#member").text(String(status));
}

$( document ).ready(function() {
    console.log("starting document!!!!");

    // Initialize Firebase
    console.log("Initialize Firebase");
    var config = {
        apiKey: "",
        authDomain: "",
        databaseURL: "",
        projectId: "",
        storageBucket: "",
        messagingSenderId: ""
    };
    firebase.initializeApp(config);

    var ref = firebase.database().ref();

    ref.on("value", function(snapshot) {
        console.log(snapshot.val().test);
        x = snapshot.val().test;
    }, function (error) {
        console.log("Error: " + error.code);
    });

    total_load_activePower = 0;

    var homeRef = firebase.database().ref("test");

    homeRef.on("child_changed", function(data) {
        console.log(data.key);
        console.log(data.val());
        if(data.key == "1PV221445K1200100") {
            total_load_activePower  = data.val().load_activePower;
        } else if (data.key == 'node1') {
            update_member(parseInt(data.val()));
        } else {
            console.log("need to parse this key " + data.key)
        }
    });

});