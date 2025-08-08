export interface IFAQsSectionProps {
  HeadingText?: string;
  allowMultiple: boolean;
  ListItem: {
    HeadingText: string;
    Paragraph: { html: string };
  }[];
}
