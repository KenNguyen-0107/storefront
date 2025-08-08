export type LayoutSetting = {
  key: string;
  value: string | null;
};
export type ComponentLayoutProps = {
  type: string;
  layoutType: string;
  template: string;
  settings: LayoutSetting[];
};
export interface ILayoutSettings {
  [key: string]: string | undefined;
}
