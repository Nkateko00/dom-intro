describe("using the calculate Bill Wigdet",function(){
    it("It should return the correct amount for the specified amount of calls(2) at R3.50 each",function(){
            var total = calculateBill();
            assert.equal(4.25,total);
        });
 
    });



