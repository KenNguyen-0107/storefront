// Helper functions to handle different content types in footer navigation

export const handleSocialMediaBlocks = (item: any, blocks: any[]) => {
  const imageListBlock = {
    type: "ImageList",
    contentSpaceX: undefined,
    contentSpaceXDesktop: undefined,
    contentSpaceY: undefined,
    contentSpaceYDesktop: undefined,
    numberOfItemOnDesktop: 6,
    numberOfItemOnMobile: 6,
    style: undefined,
    items: [] as any[],
  };

  item.ListItems.forEach((item: any) => {
    imageListBlock.items.push(handleSocialMediaBlock(item));
  });

  blocks.push(imageListBlock);
};

const handleSocialMediaBlock = (item: any) => {
  // Use the URL from the source data
  const socialUrl = item.URLMedia?.url?.default || "/";
  const socialMediaItem = {
    image: {
      type: "Image",
      image: {
        src: item.imageIcon?.ImageDesktop?.url?.default || "",
        width: item.imageIcon?.ImageWidth || "24",
        height: item.imageIcon?.ImageHeight || "24",
        alt: item.imageIcon?.Alt || undefined,
        isFullWidthImage: undefined,
      },
      imageMobile: {
        src: item.imageIcon?.ImageMobile?.url?.default || "",
        width: item.imageIcon?.ImageMobileWidth || "24",
        height: item.imageIcon?.ImageMobileHeight || "24",
        alt: item.imageIcon?.Alt || undefined,
        isFullWidthImage: undefined,
      },
      cssClass: undefined,
    },
    navigationLink: {
      text: "",
      url: socialUrl,
      target: item.URLMedia?.target || "_self",
    },
  };

  return socialMediaItem;
};

export const handleButtonElement = (item: any, blocks: any[]) => {
  blocks.push({
    type: "Button",
    link: {
      link: {
        text: item.ButtonText,
        url: item.ButtonLink?.default,
        target: "_self",
      },
      type: "Primary",
      cssClass: "w-full",
    },
    style: {
      className: undefined,
      inlineStyles: {
        paddingRightDesktop: 80,
      },
    },
  });
};

export const handleContentTextElement = (item: any, blocks: any[]) => {
  // Handle ContentTextElement by using the HTML content directly
  if (item.Paragraph?.html) {
    blocks.push({
      type: "RichText",
      content: item.Paragraph.html,
      backgroundColorHex: undefined,
    });
  }
};

export const handleNavigationMenuBlock = (item: any, blocks: any[]) => {
  // Add NavigationMenuBlock to the navigation links
  const existingNavBlock = blocks.find(
    (block) => block.type === "NavigationLinks",
  );
  if (existingNavBlock) {
    existingNavBlock.navigationLinks.push({
      text: item.MenuNavigationHeading || item.Link?.text || "",
      url: item.Link?.url?.default || "/",
      target: item.Link?.target || "_self",
    });
  }
};

export const handleUnknownContentType = (item: any) => {
  console.warn(`Unhandled content type: ${item._type}`);
};
