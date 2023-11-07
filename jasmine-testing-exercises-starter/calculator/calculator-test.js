
describe('correct monthly rates', function(){
  it('should calculate the monthly rate correctly', function () {
    // ...
    expect(calculateMonthlyPayment(getCurrentUIValues())).toEqual("193.26");
    let values = {
      amount: 50000,
      years: 20,
      rate: 0.02
    }
    expect(calculateMonthlyPayment(values)).toEqual("252.94");
    

    values = {
      amount: 100000,
      years: 30,
      rate: 0.08
    }

    expect(calculateMonthlyPayment(values)).toEqual("733.76")
  });
})



it("should return a result with 2 decimal places", function() {
  // ..
});

/// etc
