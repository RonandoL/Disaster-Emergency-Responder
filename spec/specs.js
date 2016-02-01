describe('Survivor', function(){
  it("will create an object called survivor", function(){
    var testSurvivor = new Survivor("Bob", 1234567890, "hello world", "400 SW 6th Ave", "Portland", "Oregon", 97204)
    expect(testSurvivor.name).to.equal("Bob");
    expect(testSurvivor.phone).to.equal(1234567890);
    expect(testSurvivor.note).to.equal("hello world");
    expect(testSurvivor.street).to.equal("400 SW 6th Ave");
    expect(testSurvivor.city).to.equal("Portland");
    expect(testSurvivor.state).to.equal("Oregon");
    expect(testSurvivor.zip).to.equal(97204);
  });


  it("will obtain the survivor's location via form input", function(){
    var testSurvivor = new Survivor("Bob", 1234567890, "hello world", "400 SW 6th Ave", "Portland", "Oregon", 97204)
    expect(testSurvivor.address()).to.equal("400 SW 6th Ave, Portland, Oregon 97204");
  });
});
