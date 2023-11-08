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

  describe("should append a new delete button", function() {
    let tableRow;
  
    beforeEach(function() {
      tableRow = document.createElement("tr");
    });
  
    it("should append a button to server table", function() {
      appendDeleteBtn(tableRow);
      serverTbody.append(tableRow);
      expect(document.getElementsByClassName("btnRemove").length).toBeGreaterThanOrEqual(1);
    });

    afterEach(function(){
        for(let i = 0; i<document.getElementsByClassName("btnRemove").length; i++){
          document.getElementsByClassName("btnRemove")[i].remove();
        }
    })
    
  
  });
  