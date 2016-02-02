function Survivor (name, phone, note, street, city, state, zip, neighborhood) {
  this.name = name;
  this.phone = phone;
  this.note = note;
  this.street = street;
  this.city = city;
  this.state = state;
  this.zip = zip;
  this.neighborhood = neighborhood;
  // this.rescue = false;
}

// Ptototype for Address
Survivor.prototype.address = function() {
  return this.street + ", " + this.city + ", " + this.state + " " + this.zip;
}

Survivor.prototype.responderYes = function() {
  return this.rescue = true;
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
    var note = $("input#userNote").val();
    var neighborhood = $("select#neighborhood").val();

    var newSurvivor = new Survivor (name, phone, note, street, city, state, zip, neighborhood);

    // Add Survivor to neighborhood

    if (newSurvivor.street === "") {
      alert("Please enter a street.");
    } else {
      $("ol#survivorList").append(("<li><span class='survivor'>") + newSurvivor.street + ("</span>") + ('<button type=button class="btn btn-success" id="rescued">Rescued!!</button>') + ("</li>"));
  }

    // Another test comment RL
    // branch change test

    // Show main survivor on click
    $(".survivor").last().click(function() {
      $("#showSurvivor").show();
      $(".survivorName").text(newSurvivor.name);
      $(".survivorPhone").text(newSurvivor.phone);
      $(".survivorLocation").text(newSurvivor.address());
      $(".survivorNote").text(newSurvivor.note);
    });

    $("#rescued").on("click", function() {
      $(this).parent().remove();
    });


  });
});









//
