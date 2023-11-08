it('should return the sum of payments', function(){
    expect(sumPaymentTotal("billAmt")).not.toBe(NaN);
})


describe("should append a new td", function() {
    let tableRow;
  
    beforeEach(function() {
      tableRow = document.createElement("tr");
    });
  
    it("should append a cell with text", function() {
      appendTd(tableRow, "Sample Text");
      expect(tableRow.children.length).toBe(1);
      expect(tableRow.children[0].textContent).toBe("Sample Text"); 
    });
  
  });
  