const btnDefaultClass =
  "inline-flex items-center justify-center font-primary lg:text-base cursor-pointer font-medium transition-colors uppercase px-4 lg:px-6 py-4 text-sm disabled:opacity-50 disabled:cursor-not-allowed font-frutiger-bold";
const BTN_PRIMARY = `${btnDefaultClass} h-11 lg:h-14 text-white bg-btn-primary-bg hover:bg-btn-primary-hover-bg disabled:hover:bg-btn-primary-bg`;
const BTN_SECONDARY = `${btnDefaultClass} h-11 lg:h-14 text-primary hover:text-white hover:bg-btn-primary-bg btn-secondary-text bg-btn-secondary-bg disabled:hover:bg-btn-secondary-bg border border-solid border-white`;
const BTN_STROKE = `${btnDefaultClass} h-11 lg:h-14 text-white border border-btn-stroke-bg hover:bg-white hover:text-primary disabled:hover:bg-transparent disabled:hover:text-white disabled:hover:border-btn-stroke-bg`;
const BTN_STROKE_BLUE = `${btnDefaultClass} h-11 lg:h-14 border border-btn-stroke-blue-bg hover:bg-white text-[#283270] disabled:hover:bg-transparent disabled:hover:border-btn-stroke-blue-bg`;
const BTN_EMPHASIZE = `${btnDefaultClass} h-11 lg:h-14 text-white bg-btn-emphasize-bg hover:bg-btn-emphasize-hover-bg disabled:hover:bg-btn-emphasize-bg`;

export {
  BTN_PRIMARY,
  BTN_SECONDARY,
  BTN_STROKE,
  BTN_STROKE_BLUE,
  BTN_EMPHASIZE,
};
