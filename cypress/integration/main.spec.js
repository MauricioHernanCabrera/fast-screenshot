describe("Main", () => {
  it("take screenshot", () => {
    const BASE_URL = "https://smartescrow.eu";
    const pages = [
      {
        name: "public_index",
        url: "/",
      },
      {
        name: "public_purchase_order_finance",
        url: "/purchase_order_finance",
      },
      {
        name: "public_contact",
        url: "/contact",
      },
      {
        name: "public_how_work",
        url: "/how_work",
      },
      {
        name: "public_services",
        url: "/services",
      },
      {
        name: "public_our_escrow_account",
        url: "/our_escrow_account",
      },
      {
        name: "public_our_connectors",
        url: "/our_connectors",
      },
      {
        name: "public_our_investors",
        url: "/our_investors",
      },
      {
        name: "public_markets",
        url: "/markets",
      },
      {
        name: "public_our_analysis_and_scoring",
        url: "/our_analysis_and_scoring",
      },
      {
        name: "public_our_product",
        url: "/our_product",
      },
      {
        name: "public_our_guarantees",
        url: "/our_guarantees",
      },
      {
        name: "public_investor_user",
        url: "/investor_user",
      },
      {
        name: "public_provider_user",
        url: "/provider_user",
      },
      {
        name: "public_distributor_user",
        url: "/distributor_user",
      },
      {
        name: "public_financial_entity_user",
        url: "/financial_entity_user",
      },
      {
        name: "public_new_financing",
        url: "/new_financing",
      },
      {
        name: "public_faq",
        url: "/faq",
      },
      {
        name: "public_terms_of_use",
        url: "/terms_of_use",
      },
      {
        name: "public_smart_escrow_pro",
        url: "/smart_escrow_pro",
      },
      {
        name: "public_they_trust_us",
        url: "/they_trust_us",
      },
    ];
    const breakpoints = [
      {
        breakpoint: "xs",
        width: 340,
      },
      {
        breakpoint: "sm",
        width: 576,
      },
      {
        breakpoint: "md",
        width: 768,
      },
      {
        breakpoint: "lg",
        width: 992,
      },
      {
        breakpoint: "xl",
        width: 1200,
      },
      {
        breakpoint: "xxl",
        width: 1400,
      },
      {
        breakpoint: "xxxl",
        width: 1600,
      },
    ];
    pages.forEach(({ name, url }, indexPage) => {
      cy.visit(`${BASE_URL}${url}`);

      breakpoints.forEach(({ breakpoint, width, height }, indexBreakpoint) => {
        cy.viewport(width, height ? height : 800);
        cy.screenshot(
          `${indexPage + 1}_${name}_${indexBreakpoint + 1}_${breakpoint}`
        );
      });
    });
  });
});
