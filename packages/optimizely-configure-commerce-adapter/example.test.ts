import { OptimizelyConfigureCommerceAdapter } from "./configureCommerceAdapter";

// Sample JSON data based on the provided structure
const sampleJsonData = {
  data: {
    stagingB2BPage: {
      items: [
        {
          Type: "HomePage",
          __typename: "stagingB2BHomePage",
          Id: "0d6499fd-f547-43de-90bc-0c2a7eb58be5",
          Name: "Home",
          Title: "Home page | Jacksons Fencing",
          MetaDescription: "Jacksons Fencing En-GB",
          WidgetContainer: {
            __typename: "stagingWidgetContainer",
            Widgets: [
              {
                __typename: "stagingBasicRow",
                Columns: [12],
                CssClass: null,
                CustomCSS: "& {\n\n}",
                FullWidthColor: "transparent",
                FullWidthImage: "",
                FullWidthImageFocalPoint: "center",
                FullWidthStylingType: "solidColor",
                Gap: 0,
                Id: "f08a11f5-b2bc-449c-81be-f4530df2a8c7",
                IsFullWidth: false,
                IsLayout: false,
                ParentId: "0d6499fd-f547-43de-90bc-0c2a7eb58be5",
                Reflow: true,
                Variant: "HeroBanner",
                Zone: "Content",
              },
              {
                __typename: "stagingBasicBanner",
                Background: "backgroundImage",
                BackgroundColor: null,
                BackgroundImage:
                  "https://d2vvl8c6ghcjjw.cloudfront.net/userfiles/hero%20banner%20image/fencing-home-banner-resize-1905x700.jpg?width=1905&height=700",
                ButtonLabel: "Start Building Your Fence Here",
                ButtonLink: {
                  Type: "Page",
                  Url: "/",
                  Value: "2ecb40e1-ed82-4936-9038-59bd8773ce3c",
                },
                CenterTextVertically: true,
                ContentPadding: 50,
                CssClass: "md:mx-2",
                CustomCSS: null,
                CustomFontSizes: false,
                Description: "<p>Premium garden Fencing, Gates and Accessories with a 25 year guarantee.</p>",
                DisableButton: false,
                FocalPoint: "center",
                H1FontSize: "",
                H2FontSize: "",
                H3FontSize: "",
                H4FontSize: "",
                H5FontSize: "",
                H6FontSize: "",
                Heading: "<h1>CRAFTED FOR LIFE, <br>MADE WITH PASSION</h1>",
                Id: "510c16cd-d5a0-44bd-bfe4-986bd4da10af",
                Image: null,
                ImageOverlay: "rgba(0, 0, 0, 0.5)",
                ImageWidth: null,
                ImageHeight: null,
                IsLayout: false,
                MinimumHeight: "1/4 viewport",
                NormalFontSize: "",
                ParentId: "f08a11f5-b2bc-449c-81be-f4530df2a8c7",
                PartialOverlay: false,
                PartialOverlayPositioning: null,
                ResponsiveFontSizes: false,
                Subheading: '<h3>JACKSONS FENCING <span style="font-size: 24px;"><strong><br></strong></span></h3>',
                Variant: "primary",
                Zone: "Content0",
                Loading: "eager",
              },
            ],
          },
        },
      ],
    },
  },
};

async function testAdapter() {
  try {
    // Create adapter instance
    const adapter = new OptimizelyConfigureCommerceAdapter({});

    // Test page data parsing
    console.log("Testing page data parsing...");
    const pageData = await adapter.getPageData(sampleJsonData);
    console.log("Page Data:", JSON.stringify(pageData, null, 2));

    // Test header data parsing
    console.log("\nTesting header data parsing...");
    const headerData = await adapter.getHeaderData(sampleJsonData);
    console.log("Header Data:", JSON.stringify(headerData, null, 2));

    // Test footer data parsing
    console.log("\nTesting footer data parsing...");
    const footerData = await adapter.getFooterData(sampleJsonData);
    console.log("Footer Data:", JSON.stringify(footerData, null, 2));

    // Test setting data parsing
    console.log("\nTesting setting data parsing...");
    const settingData = await adapter.getSettingData(sampleJsonData);
    console.log("Setting Data:", JSON.stringify(settingData, null, 2));
  } catch (error) {
    console.error("Error testing adapter:", error);
  }
}

// Run the test if this file is executed directly
if (require.main === module) {
  testAdapter();
}

export { testAdapter };
