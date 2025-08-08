import { Footer as FooterComponent } from "@/packages/niteco-ui/components/organisms/Footer";
import { IFooter } from "@/packages/niteco-ui/components/types/cms/IFooter";

interface FooterProps {
  data: IFooter;
}

const Footer = ({ data }: FooterProps) => {
  return <FooterComponent {...data} />;
};

export default Footer;
