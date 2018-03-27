//current energy consumption update picture
// function update_member_profit(status) {
//     $("#member_profit").text(String(status));
// }
function update_Order_value(id,status) {
    $("#"+String(id)).text(String(status));
}
$( document ).ready(function() {
    console.log("starting document!!!!");

    // Initialize Firebase
    console.log("Initialize Firebase");
    var config = {
      apiKey: "AIzaSyDw2JErtv982YDkQ4MuAluSWZeZ2rDOSSQ",
      authDomain: "python-training-33366.firebaseapp.com",
      databaseURL: "https://python-training-33366.firebaseio.com",
      projectId: "python-training-33366",
      storageBucket: "python-training-33366.appspot.com",
      messagingSenderId: "580734376977"
    };
    firebase.initializeApp(config);

    // var ref = firebase.database().ref();

    // ref.on("value", function(snapshot) {
    //     console.log(snapshot.val().test);
    //     x = snapshot.val().test;
    // }, function (error) {
    //     console.log("Error: " + error.code);
    // });

    // total_load_activePower = 0;

        var MemberRef = firebase.database().ref("Member");
        MemberRef.on("child_changed", function(data) {
            console.log(data.key);
            console.log(data.val());
            if(data.key == "1PV221445K1200100") {
                total_load_activePower  = data.val().load_activePower;
            } else if (data.key =='member_order1') {
                update_Order_value(data.key,parseInt(data.val()));
            } else if (data.key =='member_logistic'){
                update_Order_value(data.key,parseInt(data.val()));
            } else if (data.key =='member_profit'){
                update_Order_value(data.key,parseInt(data.val()));
            } else if (data.key =='member_report'){
                  update_Order_value(data.key,parseInt(data.val()));
            } else if (data.key =='member_margin'){
                      update_Order_value(data.key,parseInt(data.val()));
            } else if (data.key =='member_order2'){
                      update_Order_value(data.key,parseInt(data.val()));
            } else if (data.key =='member_transection'){
                      update_Order_value(data.key,parseInt(data.val()));
            } else if (data.key =='member_revenue'){
                      update_Order_value(data.key,parseInt(data.val()));
            } else if (data.key =='member_payment'){
                      update_Order_value(data.key,parseInt(data.val()));
            } else {
                console.log("need to parse this key " + data.key)
            }
          // });

    });

});
