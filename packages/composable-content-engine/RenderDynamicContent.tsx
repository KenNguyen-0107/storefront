import { cn } from "../niteco-ui/utils/utils";
import RenderRows from "./RenderRows";
import { RenderPayload } from "./types/renderPayload";

export const RenderDynamicContent: React.FC<{ payload: RenderPayload; isMobile: boolean }> = ({
  payload,
  isMobile,
}) => {
  return (
    <div className="recursive-renderer">
      {/* Main content structure - starts with sections containing rows */}
      <div className="page-content">
        {payload.sections.map((section, sectionIndex) => (
          <section
            data-name="section"
            className={cn(section?.backgroundColorHex ? `bg-[${section.backgroundColorHex.toLocaleLowerCase()}]` : "")}
            key={sectionIndex}
          >
            {section.rows && <RenderRows rows={section.rows} isMobile={isMobile} />}
          </section>
        ))}
      </div>
    </div>
  );
};
