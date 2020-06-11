describe("using the calculate Bill Wigdet",function(){
    it("It should return the correct R5.50 for two calls made",function(){
        var  total = billCalculation();
        total.calculateBill("call,call");
         assert.equal(5.50,total.getTotal());
        });
        it("It should return the correct R7.75 for 3 sms & 2 calls made",function(){
            var  total = billCalculation();
            total.calculateBill("call,sms,call,sms,sms");
             assert.equal(7.75,total.getTotal());
            });
      it("It should return the correct R13.25 for 3 sms & 4 calls made",function(){
            var  total = billCalculation();
            total.calculateBill("call,call,call,call,sms,sms,sms");
             assert.equal(13.25,total.getTotal());
    });


});
