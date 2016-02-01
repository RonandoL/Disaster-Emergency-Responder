function Survivor (name, phone, note, street, city, state, zip) {
  this.name = name;
  this.phone = phone;
  this.note = note;
  this.street = street;
  this.city = city;
  this.state = state;
  this.zip = zip;
}

// Ptototype for Address
Survivor.prototype.address = function() {
  return this.street + ", " + this.city + ", " + this.state + " " + this.zip;
}








// User Interface Logic
// $(document).ready(function() {
//   $("form#IDselector").submit(function(event) {
//
//     event.preventDefault();
//   });
// });
