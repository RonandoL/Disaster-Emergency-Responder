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
    var name = $("input#userName").val();
    var phone = $("input#userPhone").val();
    var street = $("input#userStreet").val();
    var city = $("input#userCity").val();
    var state = $("input#userState").val();
    var zip = $("input#userZip").val();
    var note = $("input#userNote").val();
    var neighborhood = $("select#neighborhood").val();
    var newSurvivor = new Survivor (name, phone, note, street, city, state, zip, neighborhood);
    if (newSurvivor.neighborhood === "SW") {
      $("ul#sw").append("<li>" + newSurvivor.street + "<hr></li>")
    }
    else if (newSurvivor.neighborhood === "SE") {
      $("ul#se").append("<li>" + newSurvivor.street + "<hr></li>")
    }
    else if (newSurvivor.neighborhood === "NW") {
      $("ul#nw").append("<li>" + newSurvivor.street + "<hr></li>")
    }
    else if (newSurvivor.neighborhood === "NE") {
      $("ul#ne").append("<li>" + newSurvivor.street + "<hr></li>")
    } else {
    alert("Please enter a neighborhood.");
    }

    event.preventDefault();
  });
});
