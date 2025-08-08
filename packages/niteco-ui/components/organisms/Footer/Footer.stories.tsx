import type { Meta, StoryObj } from "@storybook/react";
import Footer from "./index";

const meta: Meta<typeof Footer> = {
  title: "Organisms/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

const sampleFooterData = {
  rows: [
    {
      type: "Row",
      numberOfItemOnMobile: 1,
      numberOfItemOnDesktop: 4,
      columns: [
        {
          blocks: [
            {
              type: "ImageTextItemBlock",
              image: {
                image: {
                  src: "https://placehold.co/200x80/4A90E2/FFFFFF/png?text=Company+Logo",
                  alt: "Company Logo",
                  isFullWidthImage: false,
                  width: 200,
                  height: 80,
                },
                imageMobile: {
                  src: "https://placehold.co/150x60/4A90E2/FFFFFF/png?text=Logo",
                  alt: "Company Logo Mobile",
                  isFullWidthImage: true,
                  width: 150,
                  height: 60,
                },
                cssClass: "mb-4 bg-gray-100 border border-gray-200 rounded-md",
              },
              text: {
                content: "<p>Your trusted partner in digital solutions</p>",
                cssClass: "text-gray-600",
              },
            },
          ],
        },
        {
          blocks: [
            {
              type: "NavigationLinks",
              headerLabel: "Products",
              collapsibleMobile: true,
              navigationLinks: [
                { text: "Solutions", url: "#solutions", cssClass: "text-gray-600" },
                { text: "Features", url: "#features", cssClass: "text-gray-600" },
                { text: "Enterprise", url: "#enterprise", cssClass: "text-gray-600" },
              ],
            },
          ],
        },
        {
          blocks: [
            {
              type: "NavigationLinks",
              headerLabel: "Company",
              collapsibleMobile: true,
              navigationLinks: [
                { text: "About Us", url: "#about", cssClass: "text-gray-600" },
                { text: "Careers", url: "#careers", cssClass: "text-gray-600" },
                { text: "Contact", url: "#contact", cssClass: "text-gray-600" },
              ],
            },
          ],
        },
        {
          blocks: [
            {
              type: "ImageList",
              items: [
                {
                  image: {
                    image: {
                      src: "https://placehold.co/24x24/1877F2/FFFFFF/png?text=f",
                      alt: "Facebook",
                      isFullWidthImage: false,
                      width: 24,
                      height: 24,
                    },
                    imageMobile: {
                      src: "https://placehold.co/24x24/1877F2/FFFFFF/png?text=f",
                      alt: "Facebook",
                      isFullWidthImage: false,
                      width: 24,
                      height: 24,
                    },
                    cssClass: "w-6 h-6 bg-gray-100 border border-gray-200 rounded",
                  },
                  navigationLink: {
                    url: "#facebook",
                    target: "_blank",
                    cssClass: "hover:opacity-80",
                  },
                },
                {
                  image: {
                    image: {
                      src: "https://placehold.co/24x24/1DA1F2/FFFFFF/png?text=t",
                      alt: "Twitter",
                      isFullWidthImage: false,
                      width: 24,
                      height: 24,
                    },
                    imageMobile: {
                      src: "https://placehold.co/24x24/1DA1F2/FFFFFF/png?text=t",
                      alt: "Twitter",
                      isFullWidthImage: false,
                      width: 24,
                      height: 24,
                    },
                    cssClass: "w-6 h-6 bg-gray-100 border border-gray-200 rounded",
                  },
                  navigationLink: {
                    url: "#twitter",
                    target: "_blank",
                    cssClass: "hover:opacity-80",
                  },
                },
              ],
              contentSpaceX: 4,
              contentSpaceY: 0,
            },
          ],
        },
      ],
      style: {
        className: "py-8",
      },
    },
    {
      type: "Row",
      numberOfItemOnMobile: 1,
      numberOfItemOnDesktop: 1,
      columns: [
        {
          blocks: [
            {
              type: "RichText",
              content: "<p class='text-center text-gray-600'>© 2024 Your Company. All rights reserved.</p>",
              cssClass: "text-sm",
            },
          ],
        },
      ],
      style: {
        className: "border-t border-gray-200 py-4",
      },
    },
  ],
};

export const Default: Story = {
  args: sampleFooterData,
};

export const WithCustomBackground: Story = {
  args: {
    ...sampleFooterData,
    rows: sampleFooterData.rows.map((row, index) => ({
      ...row,
      backgroundColorHex: index === 0 ? "#f8f9fa" : undefined,
    })),
  },
};
