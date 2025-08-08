import Navigation from "@/packages/niteco-ui/components/organisms/Navigation";
import TopHeader from "@/packages/niteco-ui/components/organisms/TopHeader";
import PrimaryHeader from "@/packages/niteco-ui/components/organisms/PrimaryHeader";
import { ITopHeader } from "@/packages/niteco-ui/components/types/cms/ITopHeader";
import { INavigation } from "@/packages/niteco-ui/components/types/cms/INavigation";
import { ISetting } from "@/packages/niteco-ui/components/types/cms/ISetting";

interface HeaderProps {
  topHeaderData?: ITopHeader;
  mainNavigationData?: INavigation;
  settings?: ISetting;
}

const Header = ({ topHeaderData, mainNavigationData, settings }: HeaderProps) => {
  return (
    <>
      {topHeaderData && <TopHeader data={topHeaderData} />}
      <div className="sticky top-0 z-50">
        {mainNavigationData && settings && topHeaderData && (
          <PrimaryHeader data={{ mainNavigationData, settings, topHeaderData }} />
        )}
        {mainNavigationData && <Navigation data={mainNavigationData} />}
      </div>
    </>
  );
};

export default Header;
