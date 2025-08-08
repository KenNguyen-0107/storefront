import React from "react";

interface ITextProps {
  style?: React.CSSProperties;
  content: string;
  className?: string;
  dataComponent?: string;
}

const Text: React.FC<ITextProps> = (props) => {
  const { style, content, className, dataComponent } = props;

  if (!content) return null;
  const saferContent = content.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");

  return (
    <div
      data-component={dataComponent}
      dangerouslySetInnerHTML={{ __html: saferContent || "" }}
      style={style ? style : {}}
      className={className ? className : ""}
    />
  );
};

export default Text;
