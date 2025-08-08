"use client";
import { useState, useRef, useEffect } from "react";
import { useMediaQuery } from "../../../hook/useMediaQuery";
import clsx from "clsx";
import styles from "./ExpandableText.module.css"; // @ts-ignore - CSS module

export interface ShowMoreTextProps {
  className?: string;
  text: string;
  threshold: number;
  mobileThreshold?: number;
  showMoreText?: string;
  showLessText?: string;
  btnClassName?: string;
  isRichText?: boolean;
  gradientColor?: string; // Background color for gradient overlay
  [key: string]: any;
}
const countWords = (text: string): number => {
  return text
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0).length;
};

const truncateTextByWords = (text: string, maxWords: number): string => {
  const words = text.trim().split(/\s+/);
  if (words.length <= maxWords) return text;
  return words.slice(0, maxWords).join(" ") + "...";
};

export default function ExpandableText({
  className = "",
  text,
  threshold = 60,
  mobileThreshold,
  showMoreText = "Read More",
  showLessText = "Show Less",
  btnClassName = "",
  isRichText = true,
  gradientColor = "white", // Default to white background
  ...rest
}: ShowMoreTextProps) {
  if (!text) return null;
  const saferText = text.replace(
    /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    "",
  );
  const [isExpanded, setIsExpanded] = useState(false);
  const [shouldTruncate, setShouldTruncate] = useState(false);
  const [fullHeight, setFullHeight] = useState<number>(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const currentThreshold =
    mobileThreshold && isMobile ? mobileThreshold : threshold;

  // Measure content height for rich text
  useEffect(() => {
    if (isRichText) {
      // Use setTimeout to ensure DOM is ready
      const timer = setTimeout(() => {
        if (contentRef.current) {
          // Create a temporary element to measure full height
          const tempDiv = document.createElement("div");
          tempDiv.innerHTML = text;
          tempDiv.style.position = "absolute";
          tempDiv.style.visibility = "hidden";
          tempDiv.style.height = "auto";
          tempDiv.style.maxHeight = "none";
          tempDiv.style.width = contentRef.current.offsetWidth + "px";
          tempDiv.style.overflow = "visible";

          // Apply the same class to get consistent styling
          if (contentRef.current.className) {
            tempDiv.className = contentRef.current.className;
          }

          // Copy computed styles for accurate measurement
          const computedStyle = window.getComputedStyle(contentRef.current);
          tempDiv.style.fontSize = computedStyle.fontSize;
          tempDiv.style.lineHeight = computedStyle.lineHeight;
          tempDiv.style.fontFamily = computedStyle.fontFamily;
          tempDiv.style.padding = computedStyle.padding;
          tempDiv.style.margin = computedStyle.margin;

          document.body.appendChild(tempDiv);
          // Add a small buffer to ensure all content is visible
          const measuredHeight = tempDiv.offsetHeight + 20;
          document.body.removeChild(tempDiv);

          setFullHeight(measuredHeight);
          const willTruncate = measuredHeight > currentThreshold;
          setShouldTruncate(willTruncate);
        }
      }, 50);

      return () => clearTimeout(timer);
    } else {
      // For simple text, check word count
      const wordCount = countWords(text);
      const willTruncate = wordCount > currentThreshold;
      setShouldTruncate(willTruncate);
    }
  }, [text, currentThreshold, isRichText]);

  // Reset when text changes
  useEffect(() => {
    setIsExpanded(false);
  }, [text]);

  const getDisplayText = () => {
    if (isRichText || isExpanded || !shouldTruncate) {
      return text;
    }
    return truncateTextByWords(text, currentThreshold);
  };
  const displayText = getDisplayText();
  const getGradientBackground = () => {
    if (gradientColor.startsWith("--")) {
      return `linear-gradient(to top, var(${gradientColor}, #ffffff) 0%, var(${gradientColor}, #ffffff) 20%, rgba(0,0,0,0) 100%)`;
    } else {
      return `linear-gradient(to top, ${gradientColor}, ${gradientColor}CC, transparent)`;
    }
  };
  // Use a stable approach for rendering to avoid hydration mismatches
  return (
    <div
      className={clsx(
        "expandable-text-component w-full flex flex-wrap",
        className,
      )}
      {...rest}
    >
      {isRichText ? (
        <div className="expandable-text-component-content relative w-full">
          <div
            ref={contentRef}
            className={`overflow-hidden transition-all duration-500 ease-in-out ${styles.richTextContent}`}
            style={{
              maxHeight: isExpanded
                ? `${fullHeight}px`
                : shouldTruncate
                  ? `${currentThreshold}px`
                  : "none",
            }}
            dangerouslySetInnerHTML={{ __html: displayText }}
          />
          {!isExpanded && shouldTruncate && isRichText && (
            <div
              className="pointer-events-none absolute bottom-0 left-0 right-0"
              style={{
                height: "30px",
                background: getGradientBackground(),
                opacity: 0.9,
              }}
            />
          )}
        </div>
      ) : (
        <div className="transition-all duration-300 ease-in-out">
          <p className="leading-relaxed">{displayText}</p>
        </div>
      )}

      {/* Always show button when shouldTruncate is true */}
      {shouldTruncate && (
        <div className="expandable-text-component-button w-full">
          <button
            className={clsx(
              "hover:opacity-80 p-0 cursor-pointer uppercase block",
              btnClassName ? btnClassName : "text-primary",
            )}
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? showLessText : showMoreText}
          </button>
        </div>
      )}
    </div>
  );
}
