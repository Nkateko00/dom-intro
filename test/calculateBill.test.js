describe("using the calculate Bill Wigdet",function(){
    it("It should return the correct R5.50 for two calls made",function(){
        var  total = billCalculation();
        total.calculateBill("call,call");
         assert.equal(5.50,total.getTotal());
        });
        it("It should return the correct R2.75 for 3 sms & 2 calls made",function(){
            var  total = billCalculation();
            total.calculateBill("call,sms,call,sms,sms");
             assert.equal(7.75,total.getTotal());
            });
      it("It should return the correct R2.75 for 3 sms & 2 calls made",function(){
            var  total = billCalculation();
            total.calculateBill("call,sms,call,sms,sms");
             assert.equal(7.75,total.getTotal());
    });

    
});
