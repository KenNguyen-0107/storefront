import Icon from "../../atoms/Icon";
import { cn } from "../../../utils/utils";

const Stock = ({ isInStock }: { isInStock?: boolean }) => {
  const stockText = isInStock ? "In Stock" : "Out of Stock";
  const stockClass = isInStock
    ? "text-green bg-green/10"
    : "text-red bg-red/10";
  return (
    <span
      data-testid="stock-status"
      className={cn(
        "inline-flex items-center gap-1 pl-2 pr-3 rounded py-1 text-sm w-fit",
        stockClass,
      )}
    >
      {isInStock ? (
        <>
          <Icon iconName="greytick" size={16} viewSize={16} /> {stockText}
        </>
      ) : (
        stockText
      )}
    </span>
  );
};

export default Stock;
