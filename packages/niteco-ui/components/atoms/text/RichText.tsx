import { cn } from "../../../utils/utils";
import { renderVerticalClasses } from "../../../../composable-content-engine/renderSpacingClasses";
import { IText } from "../../../components/types/cms/IText";
import React from "react";

const RichText: React.FC<IText> = ({ block }) => {
  const { content, style } = block;

  if (!content) return null;
  const saferContent = content.replace(
    /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    "",
  );

  return (
    <div
      dangerouslySetInnerHTML={{ __html: saferContent || "" }}
      className={cn(
        "rich-text-base",
        renderVerticalClasses(style, "ImageRight").spacingClassName,
        style.className,
      )}
    />
  );
};

export default RichText;
