import { Fragment } from "react";
import { columnTypeComponents } from "./blockRegistry";
import { BlockData, ColumnData } from "./types/renderPayload";
import SliderComponent from "../niteco-ui/components/organisms/Slider/SliderComponent";
import { cn } from "../niteco-ui/utils/utils";

const RenderBlocks: React.FC<{
  blocks?: BlockData[];
  isMobile: boolean;
  column?: ColumnData;
}> = ({ blocks, isMobile, column }) => {
  if (!blocks) return null;

  return (
    <Fragment>
      {blocks
        .filter((block) => !block.hidden)
        .map((block, idx) => {
          if (
            block.type === "SliderBlock" &&
            block.children &&
            block.children.length > 0
          ) {
            return <SliderComponent key={idx} {...block} column={column} />;
          }

          if (
            block.type !== "SliderBlock" &&
            block.children &&
            block.children.length > 0
          ) {
            return (
              <div key={idx}>
                <RenderBlocks blocks={block.children} isMobile={isMobile} />
              </div>
            );
          }

          const Component =
            columnTypeComponents[
              block.type as keyof typeof columnTypeComponents
            ];
          if (!Component) return null;
          return (
            <div
              data-name="block"
              className={`${cn(
                "w-full",
                `${block?.backgroundColorHex ? `bg-[${block?.backgroundColorHex?.toLowerCase()}]` : ""}`,
              )}`}
              key={idx}
            >
              <Component key={idx} block={block} isMobile={isMobile} />
            </div>
          );
        })}
    </Fragment>
  );
};

export default RenderBlocks;
