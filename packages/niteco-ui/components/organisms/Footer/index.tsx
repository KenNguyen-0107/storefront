"use client";
import React, { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { IFooter } from "../../types/cms/IFooter";
import ImageTextBlocks from "../../molecules/ImageTextBlocks";
import { Button } from "../../atoms/button";
import { IFooterBlock } from "./Footer.type";
import Text from "../../atoms/text/Text";
import ImageListBlocks from "../../molecules/ImageListBlocks";
import { LinkText } from "../../atoms/link";
import { cn } from "../../../utils/utils";

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({
  href,
  children,
  className,
}) => (
  <Link
    href={href}
    className={clsx(
      "text-muted hover:text-primary transition-colors",
      className,
    )}
  >
    {children}
  </Link>
);

interface FooterColumnProps {
  title?: string;
  content: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  collapsibleMobile?: boolean;
}

const FooterColumn: React.FC<FooterColumnProps> = ({
  title,
  content,
  isOpen,
  onToggle,
  collapsibleMobile = true,
}) => (
  <div
    className={`${collapsibleMobile ? "border-b border-muted md:border-none" : ""}`}
  >
    {title &&
      (collapsibleMobile ? (
        <button
          className={clsx(
            "w-full flex items-center justify-between py-4 cursor-pointer md:mb-4 md:py-0 md:cursor-default text-left",
          )}
          onClick={onToggle}
        >
          <div className="text-blue text-md md:text-xl leading-relaxed">
            {title}
          </div>
          <span className="md:hidden">
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-up h-5 w-5 text-[#283270] transition-transform duration-300"
              >
                <path d="m18 15-6-6-6 6"></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-down h-5 w-5 text-[#283270] transition-transform duration-300"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            )}
          </span>
        </button>
      ) : (
        <div className={clsx("py-4 md:mb-4 md:py-0 last:mb-0")}>
          <div className="text-blue text-md md:text-xl leading-relaxed">
            {title}
          </div>
        </div>
      ))}
    {content && (
      <div
        className={clsx(
          "overflow-hidden transition-all duration-300 md:!h-auto md:!opacity-100",
          isOpen || !collapsibleMobile ? "h-auto opacity-100" : "h-0 opacity-0",
        )}
      >
        <div className="flex flex-col space-y-3 pb-4 md:py-0">{content}</div>
      </div>
    )}
  </div>
);

const renderBlock = (
  block: IFooterBlock | null | undefined,
  sectionId: string,
  isOpen: boolean,
  onToggle: () => void,
) => {
  if (!block) return null;

  switch (block.type) {
    case "ImageTextItemBlock":
      if (!block.image) return null;
      return (
        <ImageTextBlocks
          block={{
            ...block,
            style: {
              className: "px:0 md:px-0",
            },
            loading: "lazy",
            contentImagePosition: block.contentImagePosition
              ? block.contentImagePosition
              : "left",
          }}
        />
      );
    case "NavigationLinks":
      return (
        <FooterColumn
          title={block.navigationLinksHeader?.text || block.headerLabel}
          content={
            block.navigationLinks &&
            block.navigationLinks?.length > 0 && (
              <ul className="list-none flex flex-col gap-2">
                {block.navigationLinks?.map((link: any, index: number) => (
                  <li key={`${sectionId}-navigation-link-${index}`}>
                    <FooterLink
                      key={index}
                      href={link.url}
                      className={`${link.cssClass} font-frutiger-bold text-sm md:text-md`}
                    >
                      {link.text}
                    </FooterLink>
                  </li>
                ))}
              </ul>
            )
          }
          isOpen={isOpen}
          onToggle={onToggle}
          collapsibleMobile={block.collapsibleMobile}
        />
      );
    case "ImageList":
      if (!block.items) return null;
      return <ImageListBlocks {...block} />;
    case "Button":
      const { link, style } = block;
      const htmlProps = link?.link?.target ? { target: link.link.target } : {};

      return (
        <Button
          className={`${cn(style?.className, link?.cssClass)}`}
          buttonLabel={link?.link?.text}
          buttonType={link?.type}
          href={link?.link?.url}
          aria-label={link?.link?.text || "Button Link"}
          {...htmlProps}
        />
      );
    case "RichText":
      if (block.content) {
        return (
          <Text
            content={block.content}
            className={clsx(block.style?.className || block.cssClass || "")}
            dataComponent="footer-rich-text"
            style={{
              ...(block.style?.inlineStyles as React.CSSProperties),
              ...(block.backgroundColorHex && {
                backgroundColor: block.backgroundColorHex,
              }),
            }}
          />
        );
      }
      return null;
    default:
      return null;
  }
};

export const Footer: React.FC<IFooter> = ({ rows }) => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (sectionId: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  if (!rows) return null;

  return (
    <footer className="bg-white">
      <div className="container mx-auto px-4 py-10 lg:py-20">
        {rows.map((row, rowIndex) => (
          <div
            key={`${rowIndex}-row`}
            className={clsx(
              `grid grid-cols-[var(--mobile-cols)]`,
              `md:grid-cols-[var(--desktop-cols)]`,
              "md:gap-8 mb-8 last:mb-0",
              row.rowWidthOptionDesktop === "full" && "container-fluid",
              row.backgroundColorHex && `bg-[${row.backgroundColorHex}]`,
              row.backgroundColorOpacity &&
                `bg-opacity-${row.backgroundColorOpacity}`,
              row.style?.className || "",
            )}
            style={
              {
                ...(row.style?.inlineStyles as React.CSSProperties),
                "--mobile-cols": `repeat(${row.numberOfItemOnMobile || 1}, auto)`,
                "--desktop-cols": `repeat(${row.numberOfItemOnDesktop || row.columns?.length || 1}, auto)`,
              } as React.CSSProperties
            }
          >
            {row.columns?.map((column, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}-column`}
                className={clsx(
                  "flex flex-col gap-4",
                  column.style?.className || "",
                )}
                style={column.style?.inlineStyles as React.CSSProperties}
              >
                {column.blocks?.map((block, blockIndex) => {
                  const sectionId = `${rowIndex}-${colIndex}-${blockIndex}`;
                  const isOpen = openSections[sectionId] ?? false;
                  return (
                    <div className="section-block" key={`${sectionId}-block`}>
                      {renderBlock(block, sectionId, isOpen, () =>
                        toggleSection(sectionId),
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
