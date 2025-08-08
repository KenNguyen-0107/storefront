type LayoutSetting = {
  key: string | number | symbol;
  value: string | number | symbol;
};

export const getSettingValue = (
  settings: LayoutSetting[],
  key: string,
): string | number | symbol | undefined => {
  return settings?.find((setting) => setting.key === key)?.value;
};
