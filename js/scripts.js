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
// Reset Input Fields
function resetFields() {
    $("input#userName").val("");
    $("input#userPhone").val("");
    $("input#userStreet").val("");
    $("input#userCity").val("");
    $("input#userState").val("");
    $("input#userZip").val("");
    $("textarea#userNote").val("");
    $("input.new-city").val("");
    $("select#neighborhood").val("");
}

$(document).ready(function() {
  $("a.responderButton").click(function() {
    var password = prompt("Please enter the Responder password");
    if (password === "safety first") {
      $(".survivorSection, .boxy").hide();
      $(".responderSection").show();
      $(".survivorDiv").show();
      $(".responderDiv").hide();
    } else {
      alert("Incorrect password");
    }
  });

    $("a.survivorButton").click(function() {
      $(".survivorSection").show();
    });

  // Survivor Form Submitted
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
    console.log(newSurvivor.name);

    // Append Survivor: empty previos survivor
    $("h3#survivorConfirm").empty();
    $(".confirmSurvivor").show();
    $(".userInput").hide();
    $(".boxy").show();

    if (newSurvivor.street === "") {
      alert("Please enter a street.");
    } else {
      $("h3#survivorConfirm").append(newSurvivor.name + ", " + newSurvivor.phone + "<br>" + newSurvivor.address() + "<br>" + "Note: " + newSurvivor.note)
      $("ol#survivorList").append(("<li><span class='survivor'>") + newSurvivor.street + ("</span>") + ('<button type=button class="btn btn-danger inList"  id="helpComing">Respond</button>') + ('<button type=button class="btn btn-success inList" id="remover">Rescued</button>') + ("</li>"));
      resetFields();
  }

    // RESPONDER SECTION
    $(".survivor").last().click(function() {
      $("#showSurvivor").show();
      $("#survivorName").text(newSurvivor.name);
      $("#survivorPhone").text(newSurvivor.phone);
      $("#survivorLocation").text(newSurvivor.address());
      $("#survivorNote").text(newSurvivor.note);
    });

    $("li").on("click", "#remover" ,function() {
      $(this).parent().remove();
    });

    $("li").on("click", "#helpComing" ,function() {
      $(this).parent().toggleClass("inProgress");
    });

  });
});
