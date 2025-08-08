import { Fragment } from "react";
import RenderBlocks from "./RenderBlocks";
import { ColumnData, RowData } from "./types/renderPayload";
import {
  renderGap,
  renderSpacingClasses,
  renderVerticalClasses,
} from "./renderSpacingClasses";
import { cn } from "../niteco-ui/utils/utils";

export function getDesktopWidthClass(
  widthOptionDesktop?: number | string,
): string {
  const value = Number(widthOptionDesktop);
  if (!value || value < 1 || value > 12) return "";
  return `md:w-${value}/12`;
}
const RenderColumns: React.FC<{
  columns?: ColumnData[];
  data?: RowData;
  isMobile: boolean;
}> = ({ columns, data, isMobile }) => {
  if (!columns) return null;

  // Trường hợp chỉ có 1 column và có numberOfItemOnDesktop/Mobile
  if (columns.length === 1) {
    const column = columns[0];
    const blocks = column.blocks;

    // Kiểm tra xem có cần áp dụng grid layout không
    const numberOfItemOnDesktop =
      data?.numberOfItemOnDesktop || column.numberOfItemOnDesktop;
    const numberOfItemOnMobile =
      data?.numberOfItemOnMobile || column.numberOfItemOnMobile;

    if (numberOfItemOnDesktop || numberOfItemOnMobile) {
      // Tạo grid classes dựa trên numberOfItemOnDesktop và numberOfItemOnMobile
      const getGridClasses = () => {
        const mobileCols = numberOfItemOnMobile || 1;
        const desktopCols = numberOfItemOnDesktop || mobileCols;

        // Sử dụng Tailwind classes có sẵn
        const gridClasses = {
          1: "grid-cols-1",
          2: "grid-cols-2",
          3: "grid-cols-3",
          4: "grid-cols-4",
          5: "grid-cols-5",
          6: "grid-cols-6",
          12: "grid-cols-12",
        };

        const desktopGridClasses = {
          1: "md:grid-cols-1",
          2: "md:grid-cols-2",
          3: "md:grid-cols-3",
          4: "md:grid-cols-4",
          5: "md:grid-cols-5",
          6: "md:grid-cols-6",
          12: "md:grid-cols-12",
        };

        const mobileClass =
          gridClasses[mobileCols as keyof typeof gridClasses] || "grid-cols-1";
        const desktopClass =
          desktopGridClasses[desktopCols as keyof typeof gridClasses] ||
          mobileClass;

        return `grid w-full items-stretch ${mobileClass} ${desktopClass}`;
      };

      return (
        <div
          data-name="category"
          className={`${cn(getGridClasses(), `bg-[${data?.backgroundColorHex?.toLocaleLowerCase()}]`, renderGap(column || {}), renderSpacingClasses(column.style, "no-grid").spacingClassName)}`}
        >
          {blocks?.map((block, index) => (
            <Fragment key={`grid-item-${index}`}>
              <RenderBlocks
                blocks={[block]}
                isMobile={isMobile}
                column={column}
              />
            </Fragment>
          ))}
        </div>
      );
    }

    // Trường hợp không có numberOfItemOnDesktop/Mobile, render bình thường
    let width;
    if (column.widthOptionDesktop)
      width = getDesktopWidthClass(column.widthOptionDesktop);
    else if (typeof column.width === "string") width = column.width;

    return (
      <div
        className={`w-full ${width} ${column.style?.className || ""} ${renderGap(column || {})} ${renderSpacingClasses(column.style).spacingClassName} ${renderVerticalClasses(column.style).spacingClassName}`}
      >
        <RenderBlocks blocks={blocks} isMobile={isMobile} column={column} />
      </div>
    );
  }

  // Trường hợp có nhiều columns hoặc có style/width
  return (
    <Fragment>
      {columns.map((col, idx) => {
        let width;
        if (col.widthOptionDesktop)
          width = getDesktopWidthClass(col.widthOptionDesktop);
        else if (typeof col.width === "string") width = col.width;

        const child = (
          <Fragment key={`col-content-${idx}`}>
            <RenderBlocks blocks={col.blocks} isMobile={isMobile} />
          </Fragment>
        );

        return (
          <div
            data-name="n column"
            key={idx}
            className={`w-full ${width} ${col.style?.className || ""} ${renderGap(col || {})} ${renderSpacingClasses(col.style).spacingClassName} ${renderVerticalClasses(col.style).spacingClassName}`}
          >
            {child}
          </div>
        );
      })}
    </Fragment>
  );
};

export default RenderColumns;
