function Survivor (name, phone, note, street, city) {
  this.name = name;
  this.phone = phone;
  this.note = note;
  this.street = street;
  this.city = city;
  // this.rescue = false;
}

// Ptototype for Address
Survivor.prototype.address = function() {
  return this.street + ", " + this.city;
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
    // $("select#city").val("");
    $("textarea#userNote").val("");
    // $("input.new-city").val("");      <---------------- What is this?? Why would we know?!
}

$(document).ready(function() {
  $("a.responderButton").click(function() {
    //
    // var password = prompt("Please enter the Responder password");
    // if (password === "1") {
      $(".survivorSection, .boxy").hide();
      $(".responderSection").show();
      $(".survivorDiv").show();
      $(".responderDiv").hide();
    // } else {
    //   alert("Incorrect password");
    // }
  });

    // Survivor Button clicked
    $("a.survivorButton").click(function() {
      $(".survivorSection").show();
      $(".userInput").show();
      $(".confirmSurvivor, .boxy").hide();
      $(".responderSection").hide();
      $(".survivorDiv").hide();
      $(".responderDiv").show();
    });

  // Survivor Form Submitted
  $("form.userInput").submit(function(event) {
    event.preventDefault();

    // Goes to top of page on form submission click
    $('html, body').animate({ scrollTop: 0 });
    $('.survivorText').hide();

    var name = $("input#userName").val();
    var phone = $("input#userPhone").val();
    var street = $("input#userStreet").val();
    var city = $("select#city").val();
    var note = $("textarea#userNote").val();

    var newSurvivor = new Survivor (name, phone, note, street, city);

    // Append Survivor: empty previos survivor
    $("h3#survivorConfirm").empty();
    $(".confirmSurvivor").show();
    $(".userInput").hide();
    $(".boxy").show();

    if (newSurvivor.street === "") {
      alert("Please enter a street.");
    } else {
      $("h3#survivorConfirm").append(newSurvivor.name + ", " + newSurvivor.phone + "<br>" + newSurvivor.address() + "<br><br>" + "Note: " + newSurvivor.note)
      $("ol#survivorList").append(("<li><span class='survivor'>") + newSurvivor.city + ": " + newSurvivor.street + ("</span><a class='btn btn-danger inList helpComing'>Respond</a><a class='btn btn-success inList remover'>Rescued</a></li>"));
      resetFields();
    }

    // RESPONDER SECTION
    $(".survivor").last().click(function() {
      $("#showDetails").show();
      $("#survivorName").text(newSurvivor.name);
      $("#survivorPhone").text(newSurvivor.phone);
      $("#survivorLocation").text(newSurvivor.address());
      $("#survivorNote").text(newSurvivor.note);
      $("#location").empty();
      $("#location").append("<iframe src='https://maps.google.com/maps?q=" + newSurvivor.street + newSurvivor.city + "&output=embed' width='100%' height='450' frameborder='0' style='border:0' allowfullscreen'></iframe>")
    });

    $("li").on("click", ".remover" ,function() {
      $("#showDetails").hide();
      $(this).parent().remove();
    });

    // $(".helpComing").click(function() {
    //   var sibling = $(this).siblings("span.survivor");
    //   sibling.addClass("inProgress");
    //   sibling.after("<a class='btn btn-warning inList cancelResponse'>Cancel Response</a>")
    //   $(this).remove();
    // });

    $("li").on("click", ".helpComing" ,function() {
      $(this).siblings("span.survivor").addClass("inProgress");
      $(this).siblings(".inProgress").after("<a class='btn btn-warning inList cancelResponse'>Cancel Response</a>");
      $(this).remove();
      $(".rescueinProgress").show();
    });

    $("li").on("click", ".cancelResponse" ,function()  {
      $(this).siblings("span.survivor").removeClass("inProgress");
      $(this).siblings(".remover").before("<a class='btn btn-danger inList helpComing'>Respond</a>");
      $(this).remove();
      $(".rescueinProgress").hide();
    });

  });
});
