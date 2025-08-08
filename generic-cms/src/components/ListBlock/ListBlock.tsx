import React from "react";
import type { JSX } from "react";
import { BlockData, StyleProps } from "../../../../packages/composable-content-engine/types/renderPayload";
import LazyImage from "@/packages/niteco-ui/components/atoms/image/LazyImage";

// Helper function to combine className and inline styles
export const combineStyles = (style?: StyleProps) => {
  return {
    className: style?.className || "",
    style: style?.inlineStyles || {},
  };
};

// Text Block Component
export const TextBlock: React.FC<{ block: BlockData }> = ({ block }) => {
  const { className, style } = combineStyles(block.style);
  return (
    <div className={`block-text ${className}`} style={style as React.CSSProperties}>
      <p>{block.content as string}</p>
    </div>
  );
};

// Heading Block Component
export const HeadingBlock: React.FC<{ block: BlockData }> = ({ block }) => {
  const { className, style } = combineStyles(block.style);
  const level = (block.level as number) || 2;
  const HeadingTag = `h${Math.min(Math.max(level, 1), 6)}` as keyof JSX.IntrinsicElements;

  return (
    <div className={`block-heading ${className}`} style={style as React.CSSProperties}>
      {React.createElement(HeadingTag, {}, block.text as string)}
    </div>
  );
};

// List Block Component
export const ListBlock: React.FC<{ block: BlockData }> = ({ block }) => {
  const { className, style } = combineStyles(block.style);
  const items = (block.items as string[]) || [];
  const ordered = block.ordered as boolean;

  const ListTag = ordered ? "ol" : "ul";
  const listClass = ordered ? "list-decimal list-inside" : "list-disc list-inside";

  return (
    <div className={`block-list ${className}`} style={style as React.CSSProperties}>
      <ListTag className={listClass}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ListTag>
    </div>
  );
};

// Alert Block Component
export const AlertBlock: React.FC<{ block: BlockData }> = ({ block }) => {
  const { className, style } = combineStyles(block.style);
  const message = block.message as string;
  const type = (block.type as string) || "info";

  const alertClasses = {
    info: "bg-blue-50 border-blue-200 text-blue-800",
    success: "bg-green-50 border-green-200 text-green-800",
    warning: "bg-yellow-50 border-yellow-200 text-yellow-800",
    error: "bg-red-50 border-red-200 text-red-800",
  };

  const alertClass = alertClasses[type as keyof typeof alertClasses] || alertClasses.info;

  return (
    <div className={`block-alert ${className} ${alertClass} border p-4 rounded`} style={style as React.CSSProperties}>
      <p>{message}</p>
    </div>
  );
};

// Code Block Component
export const CodeBlock: React.FC<{ block: BlockData }> = ({ block }) => {
  const { className, style } = combineStyles(block.style);
  const language = block.language as string;

  return (
    <div className={`block-code ${className}`} style={style as React.CSSProperties}>
      <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
        <code className={language ? `language-${language}` : ""}></code>
      </pre>
    </div>
  );
};

// Quote Block Component
export const QuoteBlock: React.FC<{ block: BlockData }> = ({ block }) => {
  const { className, style } = combineStyles(block.style);
  const quote = block.quote as string;
  const author = block.author as string;

  return (
    <div className={`block-quote ${className}`} style={style as React.CSSProperties}>
      <blockquote className="border-l-4 border-gray-300 pl-4 italic">
        <p>&quot;{quote}&quot;</p>
        {author && <cite className="block mt-2 text-sm text-gray-600">— {author}</cite>}
      </blockquote>
    </div>
  );
};

// Generic Block Component
export const GenericBlock: React.FC<{ block: BlockData }> = ({ block }) => {
  const { className, style } = combineStyles(block.style);
  return (
    <div className={`block-generic ${className}`} style={style as React.CSSProperties}>
      <div className="p-4 border border-gray-200 rounded">
        <pre className="text-sm bg-gray-50 p-2 rounded overflow-auto">{JSON.stringify(block, null, 2)}</pre>
      </div>
    </div>
  );
};

// Unknown Block Component
export const UnknownBlock: React.FC<{ block: BlockData }> = ({ block }) => {
  const { className, style } = combineStyles(block.style);
  let class1;
  return (
    <div className={`block-unknown ${className} ${class1}`} style={style as React.CSSProperties}>
      <div className="p-4 border border-gray-300 rounded">
        <p className="text-sm text-gray-600">Unknown column type</p>
        <pre className="text-xs mt-2 bg-gray-100 p-2 rounded overflow-auto">{JSON.stringify(block, null, 2)}</pre>
      </div>
    </div>
  );
};

export const ImageBlock: React.FC<{ block: BlockData }> = ({ block }) => {
  const { className, style } = combineStyles(block.style);
  return (
    <LazyImage
      src={block.src as string}
      alt={block.alt as string}
      width={block.width as number}
      height={block.height as number}
      loading={block.loading as "eager" | "lazy"}
      style={style as React.CSSProperties}
      className={className}
    />
  );
};
