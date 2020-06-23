describe("The settingsBill factory function",function(){
    it ("It should be able to set the Call Cost",function(){
        let settingBill = theBillWithSettings();
        settingBill.setCallCost(1.85); 
        assert.equal(1.85,settingBill.getCallCost());

        let settingsBill2 = theBillWithSettings();
        settingsBill2.setCallCost(2.75); 
        assert.equal(2.75,settingsBill2.getCallCost());
    });
    it ("It should be able to set the Sms Cost",function(){
        let settingBill = theBillWithSettings();
        settingBill.setSmsCost(0.85); 
        assert.equal(0.85,settingBill.getSmsCost());

        let settingsBill2 = theBillWithSettings();
        settingsBill2.setSmsCost(0.35); 
        assert.equal(0.35,settingsBill2.getSmsCost());
    });
    it ("It should be able to set the Sms and Call Cost",function(){
        let settingBill = theBillWithSettings(); 

        settingBill.setSmsCost(0.95); 
        settingBill.setCallCost(2.75)

        assert.equal(0.95,settingBill.getSmsCost());
        assert.equal(2.75,settingBill.getCallCost());

        let settingsBill2 = theBillWithSettings();
        settingsBill2.setSmsCost(0.45);
        settingsBill2.setCallCost(0.75);

         assert.equal(0.45,settingsBill2.getSmsCost());
         assert.equal(0.75,settingsBill2.getCallCost());
});
    it("It should be able to set the Warning Level",function(){
        let settingBill = theBillWithSettings();

        settingBill.setWarningLevel(20);
        assert.equal(20,settingBill.getWarningLevel());

    });
    it("It should be able to set the Critical Level",function(){
        let settingBill = theBillWithSettings();

        settingBill.setCriticalLevel(50);
        assert.equal(50,settingBill.getCriticalLevel());

    });
    it("It should be able to set the Critical& Warning Level",function(){
        let settingBill = theBillWithSettings();

        settingBill.setCriticalLevel(50);
        settingBill.setWarningLevel(30);

        assert.equal(50,settingBill.getCriticalLevel());
        assert.equal(30,settingBill.getWarningLevel());
    });
describe("use the value set",function(){

    it("It should be able to use calls",function(){
        let settingsBill = theBillWithSettings();

        settingsBill.setCallCost(2.50);
        settingsBill.setSmsCost(0.75)

        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();

        assert.equal(0.00,settingsBill.getTotalCost());
        assert.equal(0.00,settingsBill.getTotalCallCost());
        assert.equal(0.00,settingsBill.getTotalSmsCost());

    });
    
    it("It should be able to use make a 3 calls at 2.50 each;",function(){
        let settingsBill = theBillWithSettings();

        settingsBill.setCallCost(2.50);
        settingsBill.setSmsCost(0.75)

        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();

        assert.equal(0.00,settingsBill.getTotalCost());
        assert.equal(0.00,settingsBill.getTotalCallCost());
        assert.equal(0.00,settingsBill.getTotalSmsCost());

    });
    it("It should be able to make a 4 sms at 0.45 each;",function(){
        let settingsBill = theBillWithSettings();

        settingsBill.setCallCost(3.50);
        settingsBill.setSmsCost(0.45)

        settingsBill.makeSms();
        settingsBill.makeSms();
        settingsBill.makeSms();
        settingsBill.makeSms();

        assert.equal(0.00,settingsBill.getTotalCost());
        assert.equal(0.00,settingsBill.getTotalCallCost());
        assert.equal(0.00,settingsBill.getTotalSmsCost());
        
    });
    it("It should be able to make a 2 sms at 0.50 & 3 calls at 2.80 each;",function(){
        let settingsBill = theBillWithSettings();

        settingsBill.setCallCost(3.00);
        settingsBill.setSmsCost(0.50)

        settingsBill.makeSms();
        settingsBill.makeSms();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();

        assert.equal(0.00,settingsBill.getTotalCost());
        assert.equal(0.00,settingsBill.getTotalCallCost());
        assert.equal(0.00,settingsBill.getTotalSmsCost());
        
    });
});
    describe ("The warning and critical level",function(){
        it("It should return the class name of 'warning' if warning level is reached",function(){
            let settingsBill = theBillWithSettings();

            settingsBill.setCallCost(1.50);
            settingsBill.setSmsCost(0.40);
            settingsBill.setWarningLevel(4);

            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeSms();
            settingsBill.makeSms();

            assert.equal("warning",settingsBill.theClassName());

        });
        it("It should return the class name of 'critical' if critical level is reached",function(){
            let settingsBill2 = theBillWithSettings();

            settingsBill2.setCallCost(3.50);
            settingsBill2.setSmsCost(1.50);
            settingsBill2.setCriticalLevel(10);

            settingsBill2.makeCall();
            settingsBill2.makeCall();
            settingsBill2.makeCall();
            settingsBill2.makeCall();
            settingsBill2.makeCall();
            settingsBill2.makeCall();
            settingsBill2.makeSms();
            settingsBill2.makeSms();
            settingsBill2.makeSms();
            settingsBill2.makeSms();

            assert.equal("warning",settingsBill2.theClassName());

        });

    });
});