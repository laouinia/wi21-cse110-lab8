describe("Party Horn Tests", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/Part2-Cypress");
  });

  it("Test 01 - First Test", () => {
    expect(true).to.equal(true);
  });

  it("Test 02 - Slider changes when volume input changes", () => {
    cy.get("#volume-number").clear().type("75");
    cy.get("#volume-slider").then(($el) => {
      expect($el).to.have.value(75);
    });
  });

  it("Test 03 - Volume input changes when slider changes", () => {
    cy.get("#volume-slider").invoke("val", 33).trigger("input");
    cy.get("#volume-number").then(($el) => {
      expect($el).to.have.value(33);
    });
  });

  it("Test 04 - Volume input changes when slider changes", () => {
    cy.get("#volume-slider").invoke("val", 33).trigger("input");
    cy.get("audio").then(($el) => {
      expect($el).to.have.prop("volume", 0.33);
    });
  });

  // Image and sound sources changes when selecting the party horn radio button
  it("Test 05 - AirHorn - Image and sound sources change when you select the party horn radio button", () => {
    cy.get("#radio-air-horn").check().trigger("input");
    cy.get("#horn-sound").then(($el) => {
      expect($el).to.have.attr("src", "./assets/media/audio/air-horn.mp3");
    });
    cy.get("#sound-image").then(($el) => {
      expect($el).to.have.attr("src", "./assets/media/images/air-horn.svg");
    });
  });

  it("Test 06 - CarHorn - Image and sound sources change when you select the party horn radio button", () => {
    cy.get("#radio-car-horn").check().trigger("input");
    cy.get("#horn-sound").then(($el) => {
      expect($el).to.have.attr("src", "./assets/media/audio/car-horn.mp3");
    });
    cy.get("#sound-image").then(($el) => {
      expect($el).to.have.attr("src", "./assets/media/images/car.svg");
    });
  });

  it("Test 07 - PartyHorn - Image and sound sources change when you select the party horn radio button", () => {
    cy.get("#radio-party-horn").check().trigger("input");
    cy.get("#horn-sound").then(($el) => {
      expect($el).to.have.attr("src", "./assets/media/audio/party-horn.mp3");
    });
    cy.get("#sound-image").then(($el) => {
      expect($el).to.have.attr("src", "./assets/media/images/party-horn.svg");
    });
  });

  // Volume image changes when increasing volumes
  it("Test 08 - Level 0 - Volume image changes when increasing volumes", () => {
    cy.get("#volume-number").clear().type(0);
    cy.get("#volume-image").then(($el) => {
      expect($el).to.have.attr(
        "src",
        "./assets/media/icons/volume-level-0.svg"
      );
    });
  });

  it("Test 09 - Level 1 - Volume image changes when increasing volumes", () => {
    cy.get("#volume-number").clear().type(1);
    cy.get("#volume-image").then(($el) => {
      expect($el).to.have.attr(
        "src",
        "./assets/media/icons/volume-level-1.svg"
      );
    });
    cy.get("#volume-number").clear().type(25);
    cy.get("#volume-image").then(($el) => {
      expect($el).to.have.attr(
        "src",
        "./assets/media/icons/volume-level-1.svg"
      );
    });
    cy.get("#volume-number").clear().type(33);
    cy.get("#volume-image").then(($el) => {
      expect($el).to.have.attr(
        "src",
        "./assets/media/icons/volume-level-1.svg"
      );
    });
  });

  it("Test 10 - Level 2 - Volume image changes when increasing volumes", () => {
    cy.get("#volume-number").clear().type(34);
    cy.get("#volume-image").then(($el) => {
      expect($el).to.have.attr(
        "src",
        "./assets/media/icons/volume-level-2.svg"
      );
    });
    cy.get("#volume-number").clear().type(55);
    cy.get("#volume-image").then(($el) => {
      expect($el).to.have.attr(
        "src",
        "./assets/media/icons/volume-level-2.svg"
      );
    });
    cy.get("#volume-number").clear().type(66);
    cy.get("#volume-image").then(($el) => {
      expect($el).to.have.attr(
        "src",
        "./assets/media/icons/volume-level-2.svg"
      );
    });
  });

  it("Test 11 - Level 3 - Volume image changes when increasing volumes", () => {
    cy.get("#volume-number").clear().type(67);
    cy.get("#volume-image").then(($el) => {
      expect($el).to.have.attr(
        "src",
        "./assets/media/icons/volume-level-3.svg"
      );
    });
    cy.get("#volume-number").clear().type(75);
    cy.get("#volume-image").then(($el) => {
      expect($el).to.have.attr(
        "src",
        "./assets/media/icons/volume-level-3.svg"
      );
    });
    cy.get("#volume-number").clear().type(100);
    cy.get("#volume-image").then(($el) => {
      expect($el).to.have.attr(
        "src",
        "./assets/media/icons/volume-level-3.svg"
      );
    });
  });

  // Testing the volume image changes when increasing slider
  it("Test 12 - Level 0 - Volume image changes when increasing slider", () => {
    cy.get("#volume-slider").invoke("val", 0).trigger("input");
    cy.get("#volume-image").then(($el) => {
      expect($el).to.have.attr(
        "src",
        "./assets/media/icons/volume-level-0.svg"
      );
    });
  });

  it("Test 13 - Level 1 - Volume image changes when increasing slider", () => {
    cy.get("#volume-number").clear().type(1);
    cy.get("#volume-image").then(($el) => {
      expect($el).to.have.attr(
        "src",
        "./assets/media/icons/volume-level-1.svg"
      );
    });
    cy.get("#volume-number").clear().type(25);
    cy.get("#volume-image").then(($el) => {
      expect($el).to.have.attr(
        "src",
        "./assets/media/icons/volume-level-1.svg"
      );
    });
    cy.get("#volume-number").clear().type(33);
    cy.get("#volume-image").then(($el) => {
      expect($el).to.have.attr(
        "src",
        "./assets/media/icons/volume-level-1.svg"
      );
    });
  });

  it("Test 14 - Level 2 - Volume image changes when increasing slider", () => {
    cy.get("#volume-number").clear().type(34);
    cy.get("#volume-image").then(($el) => {
      expect($el).to.have.attr(
        "src",
        "./assets/media/icons/volume-level-2.svg"
      );
    });
    cy.get("#volume-number").clear().type(55);
    cy.get("#volume-image").then(($el) => {
      expect($el).to.have.attr(
        "src",
        "./assets/media/icons/volume-level-2.svg"
      );
    });
    cy.get("#volume-number").clear().type(66);
    cy.get("#volume-image").then(($el) => {
      expect($el).to.have.attr(
        "src",
        "./assets/media/icons/volume-level-2.svg"
      );
    });
  });

  it("Test 15 - Level 3 - Volume image changes when increasing slider", () => {
   cy.get("#volume-number").clear().type(67);
   cy.get("#volume-image").then(($el) => {
     expect($el).to.have.attr(
       "src",
       "./assets/media/icons/volume-level-3.svg"
     );
   });
    cy.get("#volume-number").clear().type(75);
    cy.get("#volume-image").then(($el) => {
      expect($el).to.have.attr(
        "src",
        "./assets/media/icons/volume-level-3.svg"
      );
    });
   cy.get("#volume-number").clear().type(100);
   cy.get("#volume-image").then(($el) => {
     expect($el).to.have.attr(
       "src",
       "./assets/media/icons/volume-level-3.svg"
     );
   });
  });

  it("Test 16 - Honk button is disabled when the textbox input is a empty ", () => {
    cy.get("#volume-number").clear();
     cy.get("#honk-btn").then(($el) => {
       expect($el).to.have.attr("Disabled");
     });

  });

   it("Test 17 - Honk button is disabled when the textbox input is a non-number", () => {
     cy.get("#volume-number").clear().type("volume");
     cy.get("#honk-btn").then(($el) => {
       expect($el).to.have.attr("Disabled");
     });
   });
  
  
  it("Test 18 - Error is shown when you type n < 0 ", () => {

    
     cy.get("#volume-number").clear().type("-1");
    cy.get(":invalid").then(($el) => {
      expect($el).to.exist;
    });
    
  });
  
  it("Test 19 - Error is shown when you type n > 100 ", () => {
    cy.get("#volume-number").clear().type("101");
    cy.get(":invalid").then(($el) => {
      expect($el).to.exist;
    });
   });
  
  it("Test 20 - Error is shown when you type a non integer number ", () => {
    cy.get("#volume-number").clear().type("55.5");
    cy.get(":invalid").then(($el) => {
      expect($el).to.exist;
    });
  });
});