import { Fragment } from "react";
import RenderColumns from "./RenderColumns";
import { RowData } from "./types/renderPayload";
import { renderGap, renderSpacingClasses, renderVerticalClasses } from "./renderSpacingClasses";
import { cn } from "../niteco-ui/utils/utils";

const RenderRows: React.FC<{ rows?: RowData[]; isMobile: boolean }> = ({ rows, isMobile }) => {
  if (!rows) return null;
  const renderRowWidth = (rowWidthOptionDesktop: string) => {
    switch (rowWidthOptionDesktop) {
      case "full":
        return "w-full md:w-full";
      case "wide":
        return "w-full md:max-w-[1440px]";
      case "narrow":
        return "w-full md:max-w-[1120px]";
      default:
        return "w-full";
    }
  };

  return (
    <Fragment>
      {rows.map((row, idx) => {
        const hasStyle = !!(row.style?.className || row.style?.inlineStyles);
        const content = (
          <Fragment key={`row-content-${idx}`}>
            <RenderColumns columns={row.columns} data={row} isMobile={isMobile} />
          </Fragment>
        );
        if (hasStyle) {
          // HERE: className="flex w-full" on the row wrapper!
          return (
            <div
              key={idx}
              data-positon="row"
              className={`${cn(
                "flex mx-auto",
                `bg-[${row.backgroundColorHex?.toLocaleLowerCase()}]`,
                row.style?.className || "",
                renderRowWidth(row?.rowWidthOptionDesktop || ""),
                renderSpacingClasses(row.style).spacingClassName,
                renderVerticalClasses(row.style).spacingClassName,
                renderGap(row || {})
              )}`}
            >
              {content}
            </div>
          );
        }
        // If no style, still need key prop
        return (
          <div
            key={idx}
            className={`${cn(
              "flex w-full mx-auto",
              `bg-[${row.backgroundColorHex?.toLocaleLowerCase()}]`,
              row.style?.className || "",
              renderRowWidth(row?.rowWidthOptionDesktop || ""),
              renderSpacingClasses(row.style).spacingClassName,
              renderVerticalClasses(row.style).spacingClassName,
              renderGap(row || {})
            )}`}
          >
            {content}
          </div>
        );
      })}
    </Fragment>
  );
};

export default RenderRows;
