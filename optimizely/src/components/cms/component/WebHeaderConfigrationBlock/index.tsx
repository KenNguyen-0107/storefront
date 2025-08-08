import Header from "../../../../../../generic-cms/src/components/Header";
import { createClient } from "@remkoj/optimizely-graph-client";
import { getSdk } from "@/gql/client";

const WebHeaderConfigrationBlock = async (ctx: any) => {
  const { client } = ctx;
  const currentClient =
    client ??
    createClient(undefined, undefined, {
      nextJsFetchDirectives: true,
      cache: true,
      queryCache: true,
    });

  const headerResponse = await getSdk(currentClient)
    .getHeader({})
    .then((x) => x.header?.item)
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

  // Transform header response to standardized header data format
  const headerData = await transformHeaderResponseToStandardizedFormat(
    headerResponse,
    ctx,
  );

  // Create settings with data from headerResponse where available
  const setting = createHeaderSettings(headerResponse);

  return (
    <Header
      topHeaderData={headerData.topHeader}
      mainNavigationData={headerData.mainNavigation}
      settings={setting}
    />
  );
};

// Create header settings with data from headerResponse where available
const createHeaderSettings = (headerResponse: any) => {
  return {
    companyAddress: {
      phoneNumber: "0800 694 0545",
    },
    logo: {
      title: (headerResponse?.SiteLogoIcon as any)?.key,
      href: "/",
      src: (headerResponse?.SiteLogoIcon as any)?.url?.default,
      width: 0,
      height: 0,
      alt: headerResponse?.SiteLogoAltText || "",
    },
    account: {
      greeting: "Hello",
      guestText: "Guest",
      accountText: "MY ACCOUNT",
      links: [
        {
          text: "Login or Register",
          href: "/login-register",
        },
      ],
    },
    cart: {
      title: "Basket",
      href: "/cart",
    },
    search: {
      ariaLabel: headerResponse?.SearchBarText || "Search...",
      title: headerResponse?.SearchBarText || "Search...",
      iconSrc: "/icons/search.svg",
    },
  };
};

// Transform header response to standardized header data format
const transformHeaderResponseToStandardizedFormat = async (
  headerResponse: any,
  ctx: any,
) => {
  if (!headerResponse) {
    return {
      topHeader: {
        richDescription: "",
        rows: [],
      },
      mainNavigation: {
        layout: {
          layoutDesktop: "horizontal",
          layoutMobile: "burger",
          layoutTablet: "horizontal",
        },
        items: [],
      },
    };
  }

  // Convert TopNavigationHeader to topHeader format - single row with left and right columns
  const topHeaderRows = [];

  if (
    headerResponse.TopNavigationHeader &&
    headerResponse.TopNavigationHeader.length > 0
  ) {
    // Left column links from first TopNavigationHeader item
    const leftColumnLinks =
      headerResponse.TopNavigationHeader[0]?.Links?.map((link: any) => ({
        text: link.text || link.title || "",
        url: link.url?.default || "/",
        target: link.target || "_self",
      })) || [];

    // Right column links from second TopNavigationHeader item
    const rightColumnLinks =
      headerResponse.TopNavigationHeader[1]?.Links?.map((link: any) => ({
        text: link.text || link.title || "",
        url: link.url?.default || "/",
        target: link.target || "_self",
      })) || [];

    // Add HeaderCTA to right column if available
    if (headerResponse.HeaderCTA) {
      const headerCTA = headerResponse.HeaderCTA as any;
      if (headerCTA.text && headerCTA.url?.default) {
        rightColumnLinks.push({
          text: headerCTA.text,
          url: headerCTA.url.default,
          target: headerCTA.target || "_self",
        });
      }
    }

    topHeaderRows.push({
      style: undefined,
      columns: [
        {
          width: undefined,
          widthOptionDesktop: undefined,
          widthOptionMobile: undefined,
          blocks: [
            {
              type: "TopHeader",
              position: "left",
              richText: null,
              backgroundColorHex: "#D8D8DD",
              links: leftColumnLinks,
            },
          ],
          style: undefined,
          numberOfItemOnDesktop: undefined,
          numberOfItemOnMobile: undefined,
          height: undefined,
          contentSpaceX: undefined,
          contentSpaceY: undefined,
          contentSpaceXDesktop: undefined,
          contentSpaceYDesktop: undefined,
        },
        {
          width: undefined,
          widthOptionDesktop: undefined,
          widthOptionMobile: undefined,
          blocks: [
            {
              type: "TopHeader",
              position: "right",
              richText:
                headerResponse.TopNavigationHeader[1]?.description?.html ||
                null,
              backgroundColorHex: "#D8D8DD",
              links: rightColumnLinks,
            },
          ],
          style: undefined,
          numberOfItemOnDesktop: undefined,
          numberOfItemOnMobile: undefined,
          height: undefined,
          contentSpaceX: undefined,
          contentSpaceY: undefined,
          contentSpaceXDesktop: undefined,
          contentSpaceYDesktop: undefined,
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

  // Convert MainNavigationHeader to mainNavigation format
  const mainNavigationItems = await Promise.all(
    headerResponse.MainNavigationHeader?.map(async (item: any) => ({
      link: {
        text: item.MenuMenuHeading || "",
        url: item.MegaMenuUrl?.default || "/",
        target: "_self",
      },
      content: undefined,
      children: await Promise.all(
        item.MegaMenuContentArea?.map(async (content: any) => ({
          link: {
            text:
              content._metadata?.displayName ||
              content.MenuNavigationHeading ||
              "",
            url:
              content._metadata?.url?.default ||
              content.Link?.url?.default ||
              "/",
            target: "_self",
          },
          content: await getBannerContent(ctx, content.ThumbnailBanner?.key),
          children: await Promise.all(
            content.SubMenuItem?.map(async (subItem: any) => ({
              link: {
                text:
                  subItem._metadata?.displayName ||
                  subItem.MenuNavigationHeading ||
                  "",
                url:
                  subItem._metadata?.url?.default ||
                  subItem.Link?.url?.default ||
                  "/",
                target: "_self",
              },
              content: await getBannerContent(
                ctx,
                subItem.ThumbnailBanner?.key,
              ),
              children: [],
            })) || [],
          ),
        })) || [],
      ),
    })) || [],
  );

  return {
    topHeader: {
      richDescription: "",
      rows: topHeaderRows,
    },
    mainNavigation: {
      layout: {
        layoutDesktop: "horizontal",
        layoutMobile: "burger",
        layoutTablet: "horizontal",
      },
      items: mainNavigationItems,
    },
  };
};

const getBannerContent = async (
  ctx: any,
  key: string | undefined,
): Promise<any> => {
  if (!key) {
    return undefined;
  }
  const { client } = ctx;
  const currentClient =
    client ??
    createClient(undefined, undefined, {
      nextJsFetchDirectives: true,
      cache: true,
      queryCache: true,
    });
  const bannerResponse = await getSdk(currentClient)
    .getBanner({
      key: key,
    })
    .then((x) => x.banner?.item)
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
  if (!bannerResponse) {
    return undefined;
  }

  // Extract fields from bannerResponse using the correct field names
  const imageSrc = (bannerResponse as any)?.ImageDesktop?.url?.default || "";
  const imageMobileSrc =
    (bannerResponse as any)?.ImageMobile?.url?.default || imageSrc;
  const displayName = (bannerResponse as any)?.HeadingText || "";
  const description = (bannerResponse as any)?.RichText?.html || "";
  const urlDefault = (bannerResponse as any)?.ButtonLink?.default;
  const buttonText = (bannerResponse as any)?.ButtonText || "VIEW PRODUCT";
  const overlayColor = (bannerResponse as any)?.OverlayColor || "#000";
  const overlayOpacity = (bannerResponse as any)?.OverlayOpacity || 0.4;
  const altText = (bannerResponse as any)?.Alt || displayName;
  const isFullWidthImage = (bannerResponse as any)?.IsFullWidthImage || true;
  const loading = (bannerResponse as any)?.Loading || "lazy";

  return {
    type: "BannerItemBlock",
    image: {
      type: "Image",
      image: {
        src: imageSrc,
        width: "544",
        height: "334",
        alt: altText,
        isFullWidthImage: isFullWidthImage,
      },
      imageMobile: {
        src: imageMobileSrc,
        width: "544",
        height: "334",
        alt: altText,
        isFullWidthImage: isFullWidthImage,
      },
      cssClass: undefined,
    },
    text: {
      content: `<h2 class="mb-2">${displayName}</h2><div class="mb-2 font-lora">${description}</div>`,
    },
    backgroundColorOverlay: overlayColor,
    backgroundColorOverlayOpacity: overlayOpacity,
    button: urlDefault
      ? [
          {
            link: {
              text: buttonText,
              url: urlDefault || "/",
              target: "_self",
            },
            type: "Stroke",
            cssClass: undefined,
          },
        ]
      : undefined,
    backgroundLink: undefined,
    loading: loading.charAt(0).toUpperCase() + loading.slice(1), // Capitalize first letter
    blockHeight: 334,
    style: undefined,
  };
};

export default WebHeaderConfigrationBlock;
