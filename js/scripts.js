function Survivor (name, phone, note, street, city, state, zip, neighborhood) {
  this.name = name;
  this.phone = phone;
  this.note = note;
  this.street = street;
  this.city = city;
  this.state = state;
  this.zip = zip;
  this.neighborhood = neighborhood;
}

// Ptototype for Address
Survivor.prototype.address = function() {
  return this.street + ", " + this.city + ", " + this.state + " " + this.zip;
}

// User Interface Logic
$(document).ready(function() {
  $("form.userInput").submit(function(event) {
    event.preventDefault();

    var name = $("input#userName").val();
    var phone = $("input#userPhone").val();
    var street = $("input#userStreet").val();
    var city = $("input#userCity").val();
    var state = $("input#userState").val();
    var zip = $("input#userZip").val();
    var note = $("textarea#userNote").val();
    var neighborhood = $("select#neighborhood").val();

    var newSurvivor = new Survivor (name, phone, note, street, city, state, zip, neighborhood);

    // Add Survivor to neighborhood
    if (newSurvivor.neighborhood === "SW" || "NW" || "SE" || "NE") {
      $("h4#survivorConfirm").append("<span class='survivor'>" + newSurvivor.name + ", " + newSurvivor.phone + "<br>" + newSurvivor.address() + "<br>" + "Note: " + newSurvivor.note + "</span>")
      $("ol#survivorList").append("<li class='survivor'>" + newSurvivor.street + "<hr></li>")
    } else {
    alert("Please enter a neighborhood.");
    }

    // Another test comment RL
    // branch change test

    // Show main survivor on click
    $(".survivor").last().click(function() {
      $(".showSurvivor").show();
      $(".survivorName").text(newSurvivor.name);
      $(".survivorPhone").text(newSurvivor.phone);
      $(".survivorLocation").text(newSurvivor.address());
      $(".survivorNote").text(newSurvivor.note);
    });



  });
});









//
