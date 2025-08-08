export const SELECT_CLASSES = {
  wrapper: "relative",
  srOnlyLabel: "sr-only",
  selectButton:
    "flex items-center justify-between border bg-background px-3 ring-offset-background [&>span]:line-clamp-1 [&>span]:break-all w-full h-auto py-4 rounded uppercase border-primary",
  optionText: "text-blue font-primary text-md",
  dropdownIcon: "lucide lucide-chevron-down h-7 w-7 text-blue font-primary",
  optionsList:
    "absolute w-full border border-primary bg-white mt-1 z-10 max-h-60 overflow-auto transform transition-all duration-200 ease-out origin-top opacity-100 scale-100 translate-y-0 max-h-[400px] overflow-y-auto",
  optionItem: "px-4 py-2 cursor-pointer flex gap-3 items-center",
  focusedOption: "bg-blue-100",
  selectedOptionText: "text-blue-900",
  unselectedOptionText: "text-blue",
  checkIcon: "",
  disabled: "opacity-50 cursor-not-allowed",
};
