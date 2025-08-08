import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../ui/tooltip"; // Đường dẫn này đúng với cấu trúc của bạn
import Icon from "../../atoms/Icon";

const reviewData = {
  total: 2,
  average: 5,
  breakdown: [
    { star: 5, count: 2 },
    { star: 4, count: 0 },
    { star: 3, count: 0 },
    { star: 2, count: 0 },
    { star: 1, count: 0 },
  ],
};

const RatingReview = () => {
  return (
    <TooltipProvider>
      <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
        {/* Stars */}
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Icon key={i} iconName="star" size={16} viewSize={18} />
          ))}
        </div>
        {/* Tooltip trigger */}
        <Tooltip>
          <TooltipTrigger asChild>
            <span className="text-gray-600 cursor-pointer text-base">
              {reviewData.total} reviews
            </span>
          </TooltipTrigger>
          <TooltipContent className="bg-white shadow-lg p-4 rounded-md min-w-[220px]">
            <div className="font-bold mb-2">
              Rated {reviewData.average} out of 5 stars
            </div>
            <div className="space-y-1">
              {reviewData.breakdown.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-right">{item.star} stars</span>
                  <div className="flex-1 h-2 bg-gray-200 rounded">
                    {item.count > 0 && (
                      <div className="h-2 bg-green-600 rounded" />
                    )}
                  </div>
                  <span className="w-6 text-right text-gray-700 text-sm">
                    ({item.count})
                  </span>
                </div>
              ))}
            </div>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
};

export default RatingReview;
