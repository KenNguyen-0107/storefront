import React from "react";
import { IImageItem, IImageList } from "../../types/cms/IImageList";
import clsx from "clsx";
import Link from "next/link";
import ImageItem from "../../atoms/image/ImageItem";

const ImageContent = ({ item }: { item: IImageItem }) => {
  const imageData = item.image;
  const altText = imageData?.image?.alt || imageData?.imageMobile?.alt || "";

  return (
    <>
      <ImageItem
        src={imageData?.image?.src || ""}
        srcMobile={imageData?.imageMobile?.src || ""}
        alt={altText}
        className={item.image?.cssClass}
      />
    </>
  );
};

const ImageListBlocks: React.FC<IImageList> = ({
  items = [],
  style,
  contentSpaceX,
  contentSpaceXDesktop,
  contentSpaceY,
  contentSpaceYDesktop,
}) => (
  <div
    className={clsx(
      "flex md:flex-wrap flex-nowrap gap-3",
      contentSpaceX && `gap-x-${contentSpaceX}`,
      contentSpaceXDesktop && `lg:gap-x-${contentSpaceXDesktop}`,
      contentSpaceY && `gap-y-${contentSpaceY}`,
      contentSpaceYDesktop && `lg:gap-y-${contentSpaceYDesktop}`,
    )}
    style={style?.inlineStyles}
  >
    {items.map((item, index) => {
      const key = `image-list-${index}`;
      const image = item.image?.image;
      const imageMobile = item.image?.imageMobile;
      if (!image?.src && !imageMobile?.src) return null;
      return (
        <div
          key={key}
          className={clsx(
            imageMobile?.isFullWidthImage && "w-full",
            image?.isFullWidthImage && "md:w-full",
          )}
        >
          {item.navigationLink ? (
            <Link
              key={key}
              href={item.navigationLink.url || "#"}
              target={item.navigationLink.target || "_self"}
            >
              <ImageContent item={item} />
            </Link>
          ) : (
            <ImageContent item={item} />
          )}
        </div>
      );
    })}
  </div>
);

export default ImageListBlocks;
