it('should add to payment table', function(){
    billAmtInput.value = "50";
    tipAmtInput.value = "10";

    submitPaymentInfo()
    expect(Object.keys(allPayments).length).toEqual(1);
    expect(allPayments['payment' + paymentId].billAmt).toEqual("50");
    expect(allPayments['payment' + paymentId].tipAmt).toEqual("10");
    expect(allPayments['payment' + paymentId].tipPercent).toEqual(20);

})

it('should not create empty payment', function(){
    billAmt = '';
    tipAmt = '';

    expect(createCurPayment()).nothing();

    
})

it('should create new payment', function(){
    billAmt = 200;
    tipAmt = 20;

    expect(createCurPayment()).toBe(undefined);
})

it('should append a payment table', function(){
    let curPayment = {
        billAmt: "500",
        tipAmt: "50",
        tipPercent: 20
    }

    expect(appendPaymentTable(curPayment)).toBe(undefined);
    expect(function() {
        appendPaymentTable(curPayment);
      }).not.toThrowError(ReferenceError);
      
})

it('should update the summary', function(){
    expect(updateSummary()).toBe(undefined);
})

afterAll(function(){
    delete allPayments.payment1;
    paymentTbody.innerHTML = "<tbody> </tbody>";
    paymentId = 0;
    updateSummary();

    // const sumTable = document.getElementById("summaryTable");
    // sumTable.deleteRow(1);
    // let table = document.getElementById("summaryTable");

    // while (table.rows.length > 1) {
    //     table.deleteRow(1);
    // }

})