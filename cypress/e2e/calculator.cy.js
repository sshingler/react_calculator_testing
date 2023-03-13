describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  }); 

  it('should have working arithmatic operator buttons', () => {
    cy.get('#number2').click(); 
    cy.get('#operator_add').click();
    cy.get('#number2').click(); 
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '4')
  });

  it('should chain multiple operations together', () => {
    cy.get('#number2').click(); 
    cy.get('#operator_add').click();
    cy.get('#number2').click(); 
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '3');
  });

  it('should be able to calculate using a range of numbers', () => {
   cy.get('#number2').click();
   cy.get('#number2').click();
   cy.get('#number2').click();
   cy.get('#number2').click();
   cy.get('#operator-multiply').click();
   cy.get('#number2').click();
   cy.get('#number2').click();
   cy.get('#number2').click();
   cy.get('#number2').click();
   cy.get('#operator-equals').click();
   cy.get('#operator-multiply').click();
   cy.get('#number2').click();
   cy.get('#operator-equals').click();
   cy.get('#operator-divide').click();
   cy.get('#number0').click();
   cy.get('#decimal').click();
   cy.get('#number5').click();
   cy.get('#operator-equals').click();
   cy.get('.display').should('contain', '19749136');
  })


  it('should show error when dividing by 0', () => {
    cy.get('#number2').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click(); 
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'error');
  });

});

