import { GenericContext } from "@remkoj/optimizely-cms-react/rsc";
import { getSdk } from "@/gql/client";
import { createClient } from "@remkoj/optimizely-graph-client";
import { Footer as FooterComponent } from "@/packages/niteco-ui/components/organisms/Footer";
import { IFooter } from "@/packages/niteco-ui/components/types/cms/IFooter";
import {
  handleSocialMediaBlocks,
  handleButtonElement,
  handleNavigationMenuBlock,
  handleContentTextElement,
  handleUnknownContentType,
} from "./contentHandlers";

export type WebFooterConfigrationBlockProps = {
  locale?: string;
  ctx: GenericContext;
};

// Transformation function to convert footerResponse to footerData
export const transformFooterData = (footerResponse: any): IFooter => {
  if (!footerResponse) {
    return { rows: [] };
  }

  const rows = [];

  // Row 1: Logo
  if (footerResponse.SiteLogoFooter) {
    rows.push({
      style: {
        className: "text-[#283270]",
        inlineStyles: {
          textAlign: "left",
          textAlignDesktop: "left",
        },
      },
      columns: [
        {
          blocks: [
            {
              type: "ImageTextItemBlock",
              button: undefined,
              image: {
                type: "Image",
                image: {
                  src: footerResponse.SiteLogoFooter.url?.default || "",
                  width: "355",
                  height: "36",
                  alt: footerResponse.LogoAltText || undefined,
                  isFullWidthImage: false,
                },
                imageMobile: {
                  src: footerResponse.SiteLogoFooter.url?.default || "",
                  width: "250",
                  height: "25",
                  alt: footerResponse.LogoAltText || undefined,
                  isFullWidthImage: false,
                },
                cssClass: "object-contain h-6 w-auto",
              },
              loading: undefined,
              text: undefined,
              style: {
                className: undefined,
                inlineStyles: {
                  textAlign: "left",
                  textAlignDesktop: "left",
                },
              },
              backgroundLink: {
                text: "",
                url: "/",
                target: "_self",
              },
              backgroundColorHex: undefined,
              backgroundColorOpacity: undefined,
              contentImagePosition: "ImageLeft",
            },
          ],
        },
      ],
      numberOfItemOnDesktop: undefined,
      numberOfItemOnMobile: undefined,
      rowWidthOptionDesktop: "narrow",
      rowWidthOptionMobile: "full",
      backgroundColorHex: undefined,
      backgroundColorOpacity: undefined,
      contentSpaceX: undefined,
      contentSpaceY: undefined,
      contentSpaceXDesktop: undefined,
      contentSpaceYDesktop: undefined,
      height: undefined,
    });
  }

  // Row 2: Navigation and Social Media
  if (footerResponse.FooterNavigation || footerResponse.SocialMediaArea) {
    const columns: any[] = [];

    // Navigation columns - process all unique navigation groups
    if (footerResponse.FooterNavigation) {
      const processedKeys = new Set();

      footerResponse.FooterNavigation.forEach((navGroup: any) => {
        const groupKey = navGroup._metadata?.key || navGroup.MenuMenuHeading;

        if (navGroup.MegaMenuContentArea && !processedKeys.has(groupKey)) {
          processedKeys.add(groupKey);

          // Process each navigation group by converting all items in MegaMenuContentArea based on their type
          const blocks: any[] = [];

          // Add the header for all navigation sections
          blocks.push({
            type: "NavigationLinks",
            collapsibleMobile: !navGroup?.ExpandableMobile,
            headerLabel: undefined,
            navigationLinksHeader: {
              text: navGroup.MenuMenuHeading || "",
              url: navGroup.MegaMenuUrl?.default || "/",
              target: "_self",
            },
            navigationLinks: [],
          });

          // Process each item in MegaMenuContentArea based on its type
          navGroup.MegaMenuContentArea.forEach((item: any) => {
            switch (item._type) {
              case "SocialMediaBlocks":
                handleSocialMediaBlocks(item, blocks);
                break;

              case "ButtonElement":
                handleButtonElement(item, blocks);
                break;

              case "NavigationMenuBlock":
                handleNavigationMenuBlock(item, blocks);
                break;

              case "ContentTextElement":
                handleContentTextElement(item, blocks);
                break;

              default:
                handleUnknownContentType(item);
                break;
            }
          });

          columns.push({
            width: undefined,
            widthOptionDesktop: undefined,
            widthOptionMobile: undefined,
            blocks,
            numberOfItemOnDesktop: undefined,
            numberOfItemOnMobile: undefined,
            height: undefined,
            contentSpaceX: undefined,
            contentSpaceY: undefined,
            contentSpaceXDesktop: undefined,
            contentSpaceYDesktop: undefined,
          });
        }
      });
    }

    rows.push({
      style: {
        className: "md:mr-20",
        inlineStyles: {},
      },
      columns,
      numberOfItemOnDesktop: undefined,
      numberOfItemOnMobile: undefined,
      rowWidthOptionDesktop: undefined,
      rowWidthOptionMobile: undefined,
      backgroundColorHex: undefined,
      backgroundColorOpacity: undefined,
      contentSpaceX: undefined,
      contentSpaceY: undefined,
      contentSpaceXDesktop: undefined,
      contentSpaceYDesktop: undefined,
      height: undefined,
    });
  }

  // Row 3: Copyright
  if (footerResponse.CopyrightText) {
    rows.push({
      style: {
        className: undefined,
        inlineStyles: {
          textAlign: "left",
        },
      },
      columns: [
        {
          blocks: [
            {
              type: "RichText",
              content: `${footerResponse.CopyrightText.html}`,
              backgroundColorHex: undefined,
              style: {
                className: "text-[#283270]",
                inlineStyles: {},
              },
            },
          ],
        },
      ],
      numberOfItemOnDesktop: undefined,
      numberOfItemOnMobile: undefined,
      rowWidthOptionDesktop: "full",
      rowWidthOptionMobile: "full",
      backgroundColorHex: undefined,
      backgroundColorOpacity: undefined,
      contentSpaceX: undefined,
      contentSpaceY: undefined,
      contentSpaceXDesktop: undefined,
      contentSpaceYDesktop: undefined,
      height: undefined,
    });
  }

  // Row 4: Payment Methods
  if (footerResponse.paymentmethodarea) {
    const paymentItems = footerResponse.paymentmethodarea.map((item: any) => ({
      image: {
        type: "Image",
        image: {
          src: item.ImageDesktop?.url?.default || "",
          width: "auto",
          height: "auto",
          alt: item.Alt || undefined,
          isFullWidthImage: false,
        },
        imageMobile: {
          src: item.ImageMobile?.url?.default || "",
          width: "auto",
          height: "auto",
          alt: item.Alt || undefined,
          isFullWidthImage: false,
        },
      },
      navigationLink: {
        text: "",
        url: "/",
        target: "_self",
      },
    }));

    rows.push({
      style: undefined,
      columns: [
        {
          blocks: [
            {
              type: "ImageList",
              contentSpaceX: undefined,
              contentSpaceXDesktop: undefined,
              contentSpaceY: undefined,
              contentSpaceYDesktop: undefined,
              numberOfItemOnDesktop: 4,
              numberOfItemOnMobile: 4,
              style: undefined,
              items: paymentItems,
            },
          ],
        },
      ],
      numberOfItemOnDesktop: undefined,
      numberOfItemOnMobile: undefined,
      rowWidthOptionDesktop: undefined,
      rowWidthOptionMobile: undefined,
      backgroundColorHex: undefined,
      backgroundColorOpacity: undefined,
      contentSpaceX: undefined,
      contentSpaceY: undefined,
      contentSpaceXDesktop: undefined,
      contentSpaceYDesktop: undefined,
      height: undefined,
    });
  }

  return { rows };
};

const WebFooterConfigrationBlock = async () => {
  const currentClient = createClient(undefined, undefined, {
    nextJsFetchDirectives: true,
    cache: true,
    queryCache: true,
  });
  const sdk = getSdk(currentClient);

  const footerResponse = await sdk
    .getFooter({})
    .then((x) => x.footer?.item)
    .catch(
      (e: {
        response: {
          code: string;
          status: number;
          system: { message: string; auth: string };
        };
      }) => {
        console.error(
          `❌ [Optimizely Graph] [Error] ${e.response.code} ${e.response.system.message} ${e.response.system.auth}`,
        );
        return undefined;
      },
    );

  const footerData = transformFooterData(footerResponse);
  return <FooterComponent {...footerData} />;
};

export default WebFooterConfigrationBlock;
