"use client";
import { LinkText } from "../../atoms/link";
import { BASIC_BANNER_CLASSES } from "./BasicBanner.constants";
import NextImage from "next/image";
import { IBanner } from "../../types/cms/IBanner";
import { getButtonClass } from "../../../utils/utils";
import { useMediaQuery } from "../../../hook/useMediaQuery";
import { useMemo } from "react";
import clsx from "clsx";

function BasicBanner({ block }: { block: IBanner }) {
  if (!block) return <></>;

  const {
    type,
    heading,
    subheading,
    text,
    button,
    image,
    backgroundColorOverlay,
    backgroundColorOverlayOpacity,
    blockHeight,
    cssClass,
    contentClassName,
    loading,
    style,
    backgroundLink,
  } = block || {};

  const {
    paddingBottom = 0,
    paddingBottomDesktop = 0,
    paddingLeft = 0,
    paddingLeftDesktop = 0,
    paddingRight = 0,
    paddingRightDesktop = 0,
    paddingTop = 0,
    paddingTopDesktop = 0,
    textAlign: textAlignMobile,
    textAlignDesktop,
    verticalAlign: verticalAlignMobile,
    verticalAlignDesktop,
  } = style?.inlineStyles || {};

  const isLoading = loading?.toLowerCase() === "eager" ? "eager" : "lazy";

  const isMobile = useMediaQuery("(max-width: 768px)");

  const paddingContent = isMobile
    ? `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px`
    : `${paddingTopDesktop}px ${paddingRightDesktop}px ${paddingBottomDesktop}px ${paddingLeftDesktop}px`;

  const heroImage = useMemo(
    () =>
      isMobile
        ? image?.imageMobile?.src || image?.image?.src
        : image?.image?.src,
    [isMobile, image],
  );
  const heroImageAlt = isMobile ? image?.imageMobile?.alt : image?.image?.alt;

  const { alignItems, verticalAlign, textAlign } = useMemo(() => {
    let alignItems = isMobile
      ? textAlignMobile
      : (textAlignDesktop ?? "center");
    let verticalAlign = isMobile ? verticalAlignMobile : verticalAlignDesktop;
    let textAlign = isMobile ? textAlignMobile : (textAlignDesktop ?? "center");

    const alignItemsMap: Record<string, string> = {
      left: "flex-start",
      center: "center",
      right: "flex-end",
    };

    const justifyContentMap: Record<string, string> = {
      top: "flex-start",
      middle: "center",
      bottom: "flex-end",
    };

    return {
      alignItems: alignItemsMap[alignItems] || "center",
      verticalAlign: justifyContentMap[verticalAlign] || "center",
      textAlign,
    };
  }, [isMobile, style]);

  return (
    <section
      className={`${BASIC_BANNER_CLASSES.section} ${style?.className} ${cssClass}`}
      style={{
        height: blockHeight,
        alignItems,
        justifyContent: verticalAlign,
      }}
      data-component={type || "basic-banner"}
    >
      {heroImage && (
        <div className={BASIC_BANNER_CLASSES.backgroundImageContainer}>
          <NextImage
            src={heroImage || ""}
            alt={heroImageAlt || "Image"}
            loading={isLoading}
            priority={loading === "eager"}
            className={BASIC_BANNER_CLASSES.backgroundImage}
            fill
            sizes="(max-width: 768px) 100vw, 100vw"
          />
        </div>
      )}
      {backgroundColorOverlay && (
        <div
          className={BASIC_BANNER_CLASSES.backgroundOverlay}
          style={{
            background: backgroundColorOverlay,
            opacity: backgroundColorOverlayOpacity || 1,
          }}
        ></div>
      )}
      {backgroundLink?.url && (
        <a
          href={backgroundLink?.url}
          aria-label={"Background Link"}
          target={backgroundLink?.target}
          className={`${BASIC_BANNER_CLASSES.backgroundLink}`}
        ></a>
      )}
      <div
        className={clsx(
          BASIC_BANNER_CLASSES.contentContainer,
          contentClassName || "",
        )}
        style={{
          alignItems: alignItems,
          textAlign: textAlign,
          padding: paddingContent,
        }}
      >
        {subheading && typeof subheading === "string" ? (
          <div
            className={`basic-banner-subheading`}
            dangerouslySetInnerHTML={{ __html: subheading || "" }}
          />
        ) : (
          subheading
        )}
        {heading && typeof heading === "string" ? (
          <div
            className={`basic-banner-heading`}
            dangerouslySetInnerHTML={{ __html: heading || "" }}
          />
        ) : (
          heading
        )}
        {text && (
          <div
            className={BASIC_BANNER_CLASSES.subheadingContainer}
            dangerouslySetInnerHTML={{ __html: text?.content || "" }}
          />
        )}

        {button && button.length > 0 && (
          <div className={BASIC_BANNER_CLASSES.buttonContainer}>
            {button.map((btn, index) => {
              if (!btn.link?.text) return null;

              return (
                <LinkText
                  key={index}
                  className={getButtonClass(btn.type as string)}
                  href={btn.link.url ?? "#"}
                >
                  {btn.link.text}
                </LinkText>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

export default BasicBanner;
